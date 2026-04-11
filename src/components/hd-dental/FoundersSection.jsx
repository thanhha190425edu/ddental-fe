import React from "react";
import { motion } from "framer-motion";
import useScrollReveal from "./useScrollReveal";

const founders = [
  {
    name: "Nguyễn Minh Tuấn",
    role: "CEO & Đồng sáng lập",
    image: "https://media.base44.com/images/public/69cff7a985a4c7940dcab568/8f601b002_generated_79298aee.png",
    desc: "Hơn 15 năm kinh nghiệm trong lĩnh vực thiết bị y tế. Tầm nhìn đưa HD Dental trở thành thương hiệu hàng đầu Đông Nam Á.",
  },
  {
    name: "Trần Hoàng Nam",
    role: "CTO & Đồng sáng lập",
    image: "https://media.base44.com/images/public/69cff7a985a4c7940dcab568/a1ff50090_generated_a85f6996.png",
    desc: "Chuyên gia công nghệ nha khoa số, tiên phong ứng dụng AI và CAD/CAM trong lĩnh vực nha khoa Việt Nam.",
  },
  {
    name: "Lê Quang Huy",
    role: "COO & Đồng sáng lập",
    image: "https://media.base44.com/images/public/69cff7a985a4c7940dcab568/004107cdf_generated_7811ac20.png",
    desc: "Quản lý vận hành xuất sắc, xây dựng hệ thống phân phối trải dài 63 tỉnh thành với dịch vụ hậu mãi vượt trội.",
  },
];

export default function FoundersSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="founders" className="scroll-mt-24 py-24 lg:py-32 bg-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-primary text-sm font-bold uppercase tracking-[0.2em]">Co-founder</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-background mt-4">
            Đồng sáng lập
          </h2>
          <p className="font-body text-background/55 text-sm mt-3 max-w-xl mx-auto">
            Đội ngũ định hướng chiến lược và vận hành HD Dental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Red shadow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(226,31,38,0.8)]" />
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-xl text-white">{founder.name}</h3>
                  <p className="font-body text-primary text-sm font-semibold mt-1">{founder.role}</p>
                  {/* Slide up description */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
                    <p className="font-body text-white/80 text-sm mt-3 leading-relaxed">
                      {founder.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}