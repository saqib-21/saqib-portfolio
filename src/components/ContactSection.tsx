import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-900/30 group-hover:bg-emerald-800/40 transition-colors">
                      <Mail className="w-4 h-4 text-emerald-500/70" />
                    </div>
                    <span className="text-sm">{siteConfig.email}</span>
                  </a>
                  {siteConfig.phone && (
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-900/30 group-hover:bg-emerald-800/40 transition-colors">
                        <Phone className="w-4 h-4 text-emerald-500/70" />
                      </div>
                      <span className="text-sm">{siteConfig.phone}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-emerald-900/30">
                      <MapPin className="w-4 h-4 text-emerald-500/70" />
                    </div>
                    <span className="text-sm">{siteConfig.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h3>
                <div className="flex gap-3">
                  {siteConfig.social.github && (
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
