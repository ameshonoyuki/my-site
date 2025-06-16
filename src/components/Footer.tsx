import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <FiTwitter />,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
    {
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail />,
      url: 'mailto:your.email@example.com',
      label: 'Email',
    },
  ];

  const footerLinks = [
    { name: 'プライバシーポリシー', path: '/privacy' },
    { name: '利用規約', path: '/terms' },
    { name: 'お問い合わせ', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white text-xl transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex space-x-6"
          >
            {footerLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center md:text-left"
        >
          <p className="text-xs text-gray-600">
            Made with ❤️ and ☕ using React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
