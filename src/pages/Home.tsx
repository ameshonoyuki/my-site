import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Twitter, Mic, Github, Instagram, Mail } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-x-hidden">
      <ParticlesBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 pointer-events-none" />
      {/* ヒーローセクション */}
      <section 
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 z-0"
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ameyuki
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">AI Art & Voice Creator</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto px-4 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Unleashing individuality with generative imagery, radio, and Web3.
            </span>
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a 
                href="#works" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  View My Works
                </span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* About セクション */}
      <section id="about" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-30 -rotate-6 -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 blur"></div>
                <div className="relative bg-gray-900 rounded-2xl p-1">
                  <div className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-xl aspect-square overflow-hidden">
                    {/* ここにプロフィール画像を配置 */}
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      🎨🎤
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6 text-lg leading-relaxed"
              >
                <p>
                  I'm <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Ameyuki</span>, also known as <span className="font-medium text-pink-300">Chloe</span> on TMA Radio — a
                  multi‑disciplinary creator blending AI illustration, voice, and
                  blockchain.
                </p>
                <p>
                  My mission is to prove that <span className="font-medium text-purple-300">personality beats mass‑production</span>
                  in the algorithmic era, creating unique digital experiences that resonate on a personal level.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-medium">AI Art</span>
                  <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm font-medium">Voice Acting</span>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium">Web3</span>
                  <span className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm font-medium">Content Creation</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Works セクション */}
      <section id="works" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-medium mb-4">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Featured Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of my latest projects showcasing my skills in AI art and voice creation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                id: 1, 
                title: 'Neon Dreams', 
                category: 'AI Art Collection',
                gradient: 'from-purple-500 to-pink-500',
                icon: '🎨'
              },
              { 
                id: 2, 
                title: 'Voice of the Future', 
                category: 'Podcast Series',
                gradient: 'from-blue-500 to-cyan-400',
                icon: '🎙️'
              },
              { 
                id: 3, 
                title: 'Digital Canvas', 
                category: 'Generative Art',
                gradient: 'from-pink-500 to-rose-500',
                icon: '🖌️'
              },
              { 
                id: 4, 
                title: 'Ethereal Voices', 
                category: 'Voice Acting',
                gradient: 'from-indigo-500 to-purple-500',
                icon: '🎭'
              },
              { 
                id: 5, 
                title: 'Neural Harmony', 
                category: 'AI Music',
                gradient: 'from-emerald-500 to-teal-400',
                icon: '🎵'
              },
              { 
                id: 6, 
                title: 'Digital Identity', 
                category: 'NFT Collection',
                gradient: 'from-amber-500 to-pink-500',
                icon: '🖼️'
              },
            ].map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-6xl`}>
                    {item.icon}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">View Project</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Contact セクション */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl -z-10"></div>
            
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-medium mb-4">
                CONTACT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                ご依頼や質問など、お気軽にお問い合わせください。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <motion.a
                href="https://twitter.com/kuroneko0618"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-1">Twitter</h3>
                <p className="text-sm text-gray-400">@kuroneko0618</p>
              </motion.a>
              
              <motion.a
                href="https://stand.fm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-1">Stand.fm</h3>
                <p className="text-sm text-gray-400">@ameyuki_radio</p>
              </motion.a>
              
              <motion.a
                href="mailto:contact@ameyuki.com"
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-gray-400">contact@ameyuki.com</p>
              </motion.a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 mb-6">Or send me a message directly:</p>
              <form className="max-w-lg mx-auto space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-gray-500"
                  />
                </div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl bg-gray-800/50 border border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* フッター */}
      <footer className="relative py-12 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYwMyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iNTAiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjUwIiByPSIwLjUiLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSI1MCIgcj0iMC41Ii8+PGNpcmNsZSBjeD0iNzAwIiBjeT0iNTAiIHI9IjAuNSIvPjxjaXJjbGUgY3g9IjkwMCIgY3k9IjUwIiByPSIwLjUiLz48Y2lyY2xlIGN4PSIxMTAwIiBjeT0iNTAiIHI9IjAuNSIvPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Ameyuki
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                AI Art & Voice Creator
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a 
                href="https://twitter.com/kuroneko0618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@ameyuki.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Ameyuki. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
