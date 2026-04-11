import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, Phone } from "lucide-react";
import { useSiteAuth } from "@/context/SiteAuthContext";

export default function ShopNavbar() {
  const { skipped } = useSiteAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">

        {/* CSS Logo matching mockup */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
          <div className="bg-[#E01A22] rounded-lg w-[42px] h-[42px] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-white font-heading font-bold text-xl leading-none">HD</span>
          </div>
          <span className="text-foreground font-heading font-extrabold text-[22px] tracking-widest uppercase">
            DENTAL
          </span>
        </Link>

        {/* Nav links styled like mockup */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
          <Link to="/" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all">Trang chủ</Link>
          <Link to="/shop" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all">Sản phẩm</Link>
          <Link to="/shop/ghe-nha-khoa" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all">Ghế NK</Link>
          <Link to="/shop/den-tram" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all">Đèn Trám</Link>
          <Link to="/shop/chan-doan" className="font-body text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all">Chẩn Đoán</Link>

          <div className="flex items-center gap-3 ml-4">
            {!skipped && (
              <button
                type="button"
                onClick={goToLogin}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 px-3 py-2 rounded-md transition-all flex items-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                Đăng nhập
              </button>
            )}
            <a href="tel:0914233030" className="bg-[#E01A22] text-white font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors shadow-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Liên hệ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
