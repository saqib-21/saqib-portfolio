import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

const ResumeSection = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Download my resume to see my complete professional background, skills, and qualifications.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 hover:border-emerald-600/30 transition-colors duration-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-emerald-600/30 to-emerald-900/40 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-emerald-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">Saqib Khan - Resume</h3>

                {/* Download Button */}
                <a
                  href={siteConfig.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/30 hover:border-emerald-600/50 text-emerald-400 hover:text-emerald-300 transition-all duration-200 font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
