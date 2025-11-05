import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaHeart, FaCamera } from 'react-icons/fa';
import { siteConfig } from '@data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, url: siteConfig.social.instagram, color: '#E4405F' },
    { icon: FaFacebook, url: siteConfig.social.facebook, color: '#1877F2' },
    { icon: FaYoutube, url: siteConfig.social.youtube, color: '#FF0000' },
    { icon: FaWhatsapp, url: siteConfig.social.whatsapp, color: '#25D366' },
  ];

  const footerLinks = {
    services: [
      'Wedding Photography',
      'Pre-Wedding Shoots',
      'Corporate Events',
      'Product Photography',
      'Makeup & Styling',
      'Catering Services',
    ],
    quickLinks: [
      { label: 'About Us', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Process', href: '#process' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaCamera className="w-8 h-8 text-rose-500" />
              <h3 className="font-dancing text-3xl gradient-text">Hanging Crystals</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-playfair text-xl font-semibold mb-6 text-rose-400">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-rose-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-playfair text-xl font-semibold mb-6 text-rose-400">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-rose-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-playfair text-xl font-semibold mb-6 text-rose-400">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="font-semibold text-rose-400 mr-2">📍</span>
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-rose-400 mr-2">📞</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-rose-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-rose-400 mr-2">✉️</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-rose-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-rose-400">Business Hours:</span>
                <p className="mt-1">{siteConfig.businessHours.weekdays}</p>
                <p>{siteConfig.businessHours.weekends}</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Hanging Crystals. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-rose-500 mx-2 animate-pulse" /> by Hanging Crystals Team
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;