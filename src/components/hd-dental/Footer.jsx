import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/animations";
<<<<<<< HEAD
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  companyTelHref,
} from "@/lib/seo";
=======
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c

const quickLinks = [
  { label: "Về chúng tôi", to: "/ve-chung-toi" },
  { label: "Sản phẩm", to: "/shop" },
  { label: "Dịch vụ", to: "/dich-vu" },
  { label: "HD Academy", to: "/dich-vu#service-training" },
  { label: "Tin tức", to: "/news" },
<<<<<<< HEAD
  { label: "Liên hệ", to: "/lien-he" },
=======
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
];

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer id="contact" className="bg-foreground py-16 lg:py-20 scroll-mt-24 overflow-x-hidden overflow-y-visible">
=======
    <footer id="contact" className="bg-foreground py-16 lg:py-20 scroll-mt-24 overflow-hidden">
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <Reveal delay={0}>
            <div className="lg:col-span-1">
<<<<<<< HEAD
              <Link
                to="/"
                className="inline-block mb-6 origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                <img
                  src="/images/logo.png"
                  alt="Logo HD Dental"
                  className="h-14 sm:h-16 md:h-20 lg:h-[4.5rem] xl:h-24 w-auto max-w-none object-contain origin-left scale-110 sm:scale-125 md:scale-[1.35] lg:scale-125 xl:scale-150 transition-transform"
                />
              </Link>
=======
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-lg">HD</span>
                </div>
                <span className="font-heading font-bold text-xl text-background tracking-tight">DENTAL</span>
              </div>
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
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
<<<<<<< HEAD
                  <span className="font-body text-background/50 text-sm group-hover:text-background/70 transition-colors">
                    {COMPANY_ADDRESS}
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={companyTelHref()}
                    className="font-body text-background/50 text-sm group-hover:text-primary transition-colors"
                  >
                    {COMPANY_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="font-body text-background/50 text-sm group-hover:text-primary transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
=======
                  <span className="font-body text-background/50 text-sm group-hover:text-background/70 transition-colors">123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:0914233030" className="font-body text-background/50 text-sm group-hover:text-primary transition-colors">0914 233 030</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@hddental.vn" className="font-body text-background/50 text-sm group-hover:text-primary transition-colors">info@hddental.vn</a>
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
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
<<<<<<< HEAD
            © 2026 HD Dental. Bảo lưu mọi quyền.
=======
            © 2026 HD Dental. All rights reserved.
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
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