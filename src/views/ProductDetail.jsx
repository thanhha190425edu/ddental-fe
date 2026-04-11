import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Phone, MessageCircle, Check, Shield, Truck, RotateCcw, ArrowLeft } from "lucide-react";
import { products, categories } from "../lib/productData";
import ShopNavbar from "../components/hd-dental/ShopNavbar";

function formatPrice(p) {
  if (p >= 1000000) return (p / 1000000).toFixed(0) + " triệu ₫";
  return p.toLocaleString("vi") + " ₫";
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState("desc");
  const imgRef = useRef(null);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center font-body">
      <div className="text-center">
        <p className="text-muted-foreground">Không tìm thấy sản phẩm</p>
        <Link to="/" className="text-primary mt-4 inline-block">← Về trang chủ</Link>
      </div>
    </div>
  );

  const cat = categories[product.category];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <ShopNavbar />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-body text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">Trang chủ</Link>
          <span>/</span>
          <Link to={`/shop/${product.category}`} className="hover:text-primary">{cat?.name}</Link>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link to={`/shop/${product.category}`} className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh mục
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main image with zoom */}
            <div
              ref={imgRef}
              className={`relative rounded-2xl overflow-hidden bg-muted/30 aspect-square cursor-${zoomed ? "zoom-out" : "zoom-in"} select-none`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
              onClick={() => setZoomed(!zoomed)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={
                    zoomed
                      ? {
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        transform: "scale(2.2)",
                        transition: "transform 0s",
                      }
                      : {}
                  }
                />
              </AnimatePresence>

              {/* Zoom indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-lg flex items-center justify-center pointer-events-none">
                {zoomed ? <ZoomOut className="w-4 h-4 text-foreground" /> : <ZoomIn className="w-4 h-4 text-foreground" />}
              </div>

              {/* Nav arrows */}
              {product.images.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); setActiveImage(i => (i - 1 + product.images.length) % product.images.length); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); setActiveImage(i => (i + 1) % product.images.length); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? "border-primary" : "border-border hover:border-primary/50"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <span className="font-body text-xs text-primary font-bold uppercase tracking-wider">{product.brand}</span>
              {product.tag && (
                <span className={`font-body text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${{ "Best Seller": "bg-primary text-white", "Hot": "bg-orange-500 text-white", "Mới": "bg-green-600 text-white", "Sale": "bg-primary text-white", "Premium": "bg-foreground text-background" }[product.tag]
                  }`}>{product.tag}</span>
              )}
            </div>

            <h1 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">{product.rating} ({product.reviews} đánh giá)</span>
            </div>

            {/* Price */}
            <div className="mt-5 pb-5 border-b border-border">
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-bold text-3xl text-primary">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="font-body text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
                )}
                {product.oldPrice && (
                  <span className="bg-primary/10 text-primary font-body text-xs font-bold px-2 py-0.5 rounded-full">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>
              <p className="font-body text-xs text-muted-foreground mt-1">Giá đã bao gồm VAT. Miễn phí vận chuyển toàn quốc.</p>
            </div>

            {/* CTA */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:09142330303"
                className="w-full bg-primary text-white font-heading font-bold text-base py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Gọi ngay: 0914 233 030
              </a>
              <a
                href="https://zalo.me/0914233030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-primary text-primary font-heading font-bold text-base py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Tư vấn qua Zalo
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Shield, label: "Bảo hành chính hãng" },
                { icon: Truck, label: "Giao toàn quốc" },
                { icon: RotateCcw, label: "Đổi trả 30 ngày" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 p-3 bg-muted/50 rounded-xl text-center">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-[10px] text-muted-foreground leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs: Description / Specs */}
        <div className="mt-12 border-t border-border pt-10">
          <div className="flex gap-1 bg-muted/50 rounded-xl p-1 w-fit mb-8">
            {[
              { id: "desc", label: "Mô tả sản phẩm" },
              { id: "specs", label: "Thông số kỹ thuật" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-body text-sm font-semibold px-5 py-2.5 rounded-lg transition-all ${activeTab === tab.id ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "desc" ? (
                <div className="prose prose-sm max-w-3xl">
                  <p className="font-body text-muted-foreground leading-relaxed text-base">{product.description}</p>
                </div>
              ) : (
                <div className="max-w-2xl space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-muted/30">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <p className="font-body text-[10px] text-primary font-bold uppercase">{p.brand}</p>
                    <p className="font-body text-sm font-medium text-foreground line-clamp-2 mt-0.5">{p.name}</p>
                    <p className="font-heading font-bold text-sm text-primary mt-1.5">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}