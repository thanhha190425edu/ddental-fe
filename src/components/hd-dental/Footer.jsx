import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/animations";

const quickLinks = [
  { label: "Về chúng tôi", to: "/ve-chung-toi" },
  { label: "Sản phẩm", to: "/shop" },
  { label: "Dịch vụ", to: "/dich-vu" },
  { label: "HD Academy", to: "/dich-vu#service-training" },
  { label: "Tin tức", to: "/news" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground py-16 lg:py-20 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <Reveal delay={0}>
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-lg">HD</span>
                </div>
                <span className="font-heading font-bold text-xl text-background tracking-tight">DENTAL</span>
              </div>
              <p className="font-body text-background/50 text-sm leading-relaxed">
                Đồng hành cùng nha sĩ Việt Nam trên hành trình mang đến nụ cười hoàn hảo cho mọi người.
              </p>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal delay={0.1}>
            <div>
              <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-6">Liên kết</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-background/50 text-sm hover:text-primary transition-colors inline-flex items-center gap-0 hover:gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal delay={0.2}>
            <div>
              <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-6">Dịch vụ</h4>
              <ul className="space-y-3">
                {["Thiết kế phòng khám", "Cung cấp thiết bị", "Đào tạo kỹ thuật", "Bảo trì & Sửa chữa", "Tư vấn giải pháp"].map((link) => (
                  <li key={link}>
                    <Link to="/dich-vu"
                      className="font-body text-background/50 text-sm hover:text-primary transition-colors inline-flex items-center gap-0 hover:gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.3}>
            <div>
              <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-6">Liên hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="font-body text-background/50 text-sm group-hover:text-background/70 transition-colors">123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:0914233030" className="font-body text-background/50 text-sm group-hover:text-primary transition-colors">0914 233 030</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@hddental.vn" className="font-body text-background/50 text-sm group-hover:text-primary transition-colors">info@hddental.vn</a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-body text-background/30 text-sm">
            © 2026 HD Dental. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Chính sách bảo mật", "Điều khoản sử dụng"].map((link) => (
              <span key={link} className="font-body text-background/30 text-xs">
                {link}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}