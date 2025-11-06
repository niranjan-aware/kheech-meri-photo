import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import GlassCard from '@components/ui/cards/GlassCard';
import { siteConfig } from '@data/config';
import { socialLinks } from '@data/social';
const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: siteConfig.contact.phone,
      link: `tel:${siteConfig.contact.phone}`,
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: siteConfig.contact.whatsapp,
      link: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\s/g, '')}`,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`,
      color: 'from-champagne-400 to-champagne-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: siteConfig.contact.address,
      link: null,
      color: 'from-rose-500 to-champagne-500',
    },
  ];

  return (
    <div className="space-y-3 md:space-y-4 h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 mb-2">
          Let's Talk
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can bring your vision to life.
        </p>
      </motion.div>

      <div className="space-y-3 flex-1">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard hover={!!item.link} className="p-3">
              <a
                href={item.link || '#'}
                className={`flex items-center gap-3 ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={(e) => !item.link && e.preventDefault()}
              >
                <motion.div
                  whileHover={item.link ? { scale: 1.1, rotate: 5 } : {}}
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm">{item.label}</h4>
                  <p className="text-gray-600 text-xs md:text-sm truncate">{item.value}</p>
                </div>
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GlassCard className="p-3">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-lg"
              >
                <FaClock className="w-5 h-5 text-white" />
              </motion.div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Business Hours</h4>
                <div className="space-y-0 text-gray-600 text-xs">
                  <p>Mon-Fri: {siteConfig.businessHours.weekdays}</p>
                  <p>Sat-Sun: {siteConfig.businessHours.weekends}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <GlassCard className="p-3">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Follow Us</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all"
                  style={{ backgroundColor: social.color }}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfo;
