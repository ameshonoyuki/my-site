import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// ---------- ユーティリティコンポーネント ---------- //
const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

// 作品データ
const works = [
  {
    id: 1,
    title: 'にんだお 蛇の目',
    year: '2024年',
    image: '/src/assets/images/work-1.png',
    category: 'AIアート'
  },
  {
    id: 2,
    title: '天空の踊り子',
    year: '2024年',
    image: '/src/assets/images/work-2.png',
    category: 'AIアート'
  },
  {
    id: 3,
    title: 'イケてる痛車',
    year: '2024年',
    image: '/src/assets/images/work-3.png',
    category: 'AIアート'
  }
];

// やさしい薄緑色のカラーパレット
const colors = {
  background: 'bg-emerald-50',
  card: 'bg-white',
  text: 'text-emerald-900',
  textLight: 'text-emerald-700',
  primary: 'text-emerald-600',
  primaryBg: 'bg-emerald-100',
  accent: 'text-amber-400',
  border: 'border-emerald-200',
  hover: 'hover:bg-emerald-50',
  shadow: 'shadow-md',
  button: 'bg-emerald-500 hover:bg-emerald-600',
  buttonText: 'text-white',
};

// ---------- 各セクションコンポーネント ---------- //
// レインボーグラデーションアニメーションのスタイル
const rainbowGlow = {
  background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000)',
  backgroundSize: '800% 800%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'rainbow 8s ease infinite',
  textShadow: '0 0 15px rgba(255,255,255,0.5)',
  display: 'inline-block',
  padding: '0 10px',
  borderRadius: '10px',
};

// グローバルスタイルを追加するためのコンポーネント
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

const Hero: React.FC = () => (
  <div className={`relative min-h-screen flex flex-col justify-start pt-32 md:pt-40 items-center text-center overflow-hidden ${colors.background}`}>
    <GlobalStyles />
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className={`text-6xl md:text-8xl font-black mb-6`}
        style={rainbowGlow}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        アメショのユキ
      </motion.h1>
      <motion.div 
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className={`mt-6 text-xl md:text-2xl ${colors.textLight} font-medium max-w-2xl leading-relaxed tracking-wider`}>
          <span className={`${colors.primary} font-semibold`}>デジタルアーティスト</span> / <span className={`${colors.primary} font-semibold`}>イラストレーター</span>
        </p>
      </motion.div>
      <motion.div className="w-full flex justify-center">
        <motion.p 
          className={`mt-4 ${colors.textLight} text-sm md:text-base whitespace-nowrap`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          幻想的な世界観と鮮やかな色彩で、見る人を魅了するアートを創り続けています。
        </motion.p>
      </motion.div>
      
      {/* 作品ギャラリー */}
      <div className={`w-full ${colors.background} pt-20 pb-32`}>
        <motion.div 
          className="w-full max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${colors.text}`}>作品一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works.map((work) => (
              <motion.div
                key={work.id}
                className={`group relative overflow-hidden rounded-2xl ${colors.card} ${colors.shadow} border ${colors.border} ${colors.hover} transition-all duration-300`}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{work.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${colors.primary} ${colors.primaryBg} px-3 py-1 rounded-full`}>
                      {work.category}
                    </span>
                    <span className={`text-sm ${colors.textLight}`}>{work.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
    <motion.a
      href="#contact"
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <Button size="lg" className={`gap-2 ${colors.button} ${colors.buttonText} hover:${colors.button.replace('hover:', '')}`}>
        お問い合わせ <ArrowRight className="w-5 h-5" />
      </Button>
    </motion.a>
  </div>
);

const About: React.FC = () => (
  <Section id="about" title="About">
    <div className="grid gap-8 lg:grid-cols-2 items-center">
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="src/assets/images/work-4.png"
          alt="Ameyuki portrait"
          className="rounded-3xl shadow-xl w-64 h-64 lg:w-80 lg:h-80 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/400x400/e5e7eb/9ca3af?text=Ameyuki+Portrait';
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className={`leading-relaxed text-lg lg:text-xl ${colors.text} ${colors.textLight}`}>
          はじめまして！アメショのユキです。幻想的な色彩と緻密なディテールで、観る人を物語の中へ誘うようなビジュアルを制作しています。AI アートで、Web3/NFT各プロジェクトへ多数のオリジナル作品やファンアートを提供中。
        </p>
      </motion.div>
    </div>
  </Section>
);

const featuredContent = [
  {
    title: "OpenSea コレクション",
    description: "NFTアート作品をOpenSeaで公開中。デジタルアートの世界をお楽しみください。",
    link: "https://opensea.io/collection/bailarina-5",
    image: "src/assets/images/work-5.png",
    buttonText: "コレクションを見る",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6l-1.41 1.41L16.17 12l-5.58 5.59L12 19l7-7z"/>
      </svg>
    ),
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "Stand.fm 番組",
    description: "デジタルアートや創作活動についてのトークを配信しています。お気軽にお聴きください。",
    link: "https://stand.fm/episodes",
    image: "src/assets/images/work-4.png",
    buttonText: "番組を聴く",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    bgColor: "bg-pink-50",
    textColor: "text-pink-600"
  }
];

const Projects: React.FC = () => (
  <Section id="projects" title="Featured Works" className="pt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
      {featuredContent.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`h-full rounded-2xl overflow-hidden shadow-lg ${colors.card} border ${colors.border} ${colors.hover} transition-all duration-300`} style={{ marginBottom: '0.5rem' }}>
            <div className="relative aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x600/e5e7eb/9ca3af?text=' + encodeURIComponent(item.title);
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className={`${item.bgColor} ${item.textColor} p-2 rounded-lg`}>
                  {item.icon}
                </span>
                <h3 className={`ml-3 text-xl font-bold ${colors.text}`}>{item.title}</h3>
              </div>
              <p className={`${colors.textLight} text-sm mb-3`}>{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${colors.primary} hover:underline font-medium`}
              >
                {item.buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Contact: React.FC = () => (
  <Section id="contact" title="Contact">
    <form
      className="mx-auto max-w-xl space-y-6"
      action="https://formspree.io/f/your‑id"
      method="POST"
    >
      <input type="hidden" name="_subject" value="Portfolio Inquiry" />
      <div>
        <label className="block mb-1 text-slate-300">Name</label>
        <input
          name="name"
          required
          className="w-full rounded-xl bg-slate-800/60 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block mb-1 text-slate-300">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl bg-slate-800/60 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-white"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block mb-1 text-slate-300">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-xl bg-slate-800/60 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-white"
          placeholder="Tell me about your project…"
        />
      </div>
      <Button type="submit" size="lg" className="gap-2 mx-auto flex">
        Send <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  </Section>
);

const Footer: React.FC = () => (
  <footer className="py-10 text-center text-sm text-slate-500 bg-slate-950/50 backdrop-blur-md">
    &copy; {new Date().getFullYear()} Ameyuki — All Rights Reserved.
  </footer>
);

// ---------- ルートコンポーネント ---------- //
const App: React.FC = () => {
  return (
    <div className={`min-h-screen ${colors.background} ${colors.text} font-sans`}>
      <div className="relative z-10">
        <Hero />
      </div>
      
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.background}`}>
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </div>
      
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.background}`}>
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
      </div>
      
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.background}`}>
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </div>
      
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${colors.border} ${colors.background}`}>
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;
