import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import GlassCard from '@components/ui/cards/GlassCard';
import { siteConfig } from '@data/config';
import { socialLinks } from '@data/social';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaPhone,
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
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
          Let's Talk
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can bring your vision to life.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard hover={!!item.link}>
              <a
                href={item.link || '#'}
                className={`flex items-start gap-4 ${item.link ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={(e) => !item.link && e.preventDefault()}
              >
                <motion.div
                  whileHover={item.link ? { scale: 1.1, rotate: 5 } : {}}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <GlassCard>
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <FaClock className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
              <div className="space-y-1 text-gray-600">
                <p>Weekdays: {siteConfig.businessHours.weekdays}</p>
                <p>Weekends: {siteConfig.businessHours.weekends}</p>
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
        <GlassCard>
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex flex-wrap gap-3">
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
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
                style={{ backgroundColor: social.color }}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="p-6 bg-gradient-to-br from-rose-500 to-champagne-500 rounded-2xl text-white shadow-xl"
      >
        <h4 className="font-playfair text-2xl font-bold mb-2">
          Quick Response Guarantee
        </h4>
        <p className="text-white/90">
          We respond to all inquiries within 24 hours. For urgent requests, call us directly!
        </p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
