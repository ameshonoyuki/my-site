import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaXTwitter, FaInstagram, FaThreads } from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';

// ---------- 背景画像コンポーネント ---------- //
const BackgroundImages: React.FC = () => {
  const backgroundImages = [
    { id: 1, src: '/my-site/assets/images/work-6.png', alt: 'Background 1' },
    { id: 2, src: '/my-site/assets/images/work-7.png', alt: 'Background 2' },
    { id: 3, src: '/my-site/assets/images/work-8.png', alt: 'Background 3' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="h-full w-full flex flex-col items-center justify-center gap-8 py-8">
        {backgroundImages.map((img) => (
          <div key={img.id} className="w-1/2 max-w-md opacity-50">
            <img 
              src={img.src} 
              alt={img.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- ユーティリティコンポーネント ---------- //
const Section: React.FC<{ 
  id: string; 
  title: string; 
  children: React.ReactNode; 
  className?: string;
  titleClassName?: string;
}> = ({ id, title, children, className = '', titleClassName = '' }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${titleClassName}`}>
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// 画像をインポート
import work1 from './assets/images/work-1.png';
import work2 from './assets/images/work-2.png';
import work3 from './assets/images/work-3.png';
import work6 from './assets/images/work-6.png';
// Using a sample GIF from a CDN for testing
const work6Gif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWk1b2RjZ3V2Z2N5eW1tZHp6eG9zZ3NvZ3V3dWZ1dGJ2b2NlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aTsk3bM3Ld2FKBC/giphy.gif'; // Sample GIF URL

// 作品データ
const works = [
  {
    id: 1,
    title: 'にんだお 蛇の目',
    year: '2024年',
    image: work1,
    category: 'AIアート',
    colSpan: 1
  },
  {
    id: 2,
    title: '天空の踊り子',
    year: '2024年',
    image: work2,
    category: 'AIアート',
    colSpan: 2
  },
  {
    id: 4,
    title: '天空の踊り子動画',
    year: '2024年',
    video: work6Gif,
    thumbnail: work6,
    category: '動画作品',
    colSpan: 2
  },
  {
    id: 3,
    title: 'イケてる痛車',
    year: '2024年',
    image: work3,
    category: 'AIアート',
    colSpan: 1
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
const rainbowGlow: React.CSSProperties = {
  background: 'linear-gradient(45deg, #f72585, #b5179e, #7209b7, #560bad, #480ca8, #3a0ca3, #3f37c9, #4cc9f0)',
  backgroundSize: '300% 300%',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent',
  animation: 'rainbow 8s ease infinite',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.2), 1px -1px 0 rgba(255, 255, 255, 0.2), -1px 1px 0 rgba(255, 255, 255, 0.2), 1px 1px 0 rgba(255, 255, 255, 0.2)',
  display: 'inline-block',
  padding: '0 10px',
  borderRadius: '10px',
  transition: 'all 0.3s ease',
  position: 'relative' as const,
  zIndex: 1,
  fontFamily: 'Noto Serif JP, serif',
};

// グローバルスタイルを追加するためのコンポーネント
const GlobalStyles = () => {
  React.useEffect(() => {
    // フォントのプリロード
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // アニメーションのキーフレームを動的に追加
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      body {
        font-family: 'Noto Serif JP', serif;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

const Hero: React.FC = () => (
  <div className="relative min-h-screen flex flex-col justify-start pt-32 md:pt-40 items-center text-center overflow-hidden bg-emerald-50">
    <GlobalStyles />
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <motion.h1
          className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative z-10`}
          style={{
            ...rainbowGlow,
            fontFamily: '"Noto Serif JP", serif',
            fontWeight: 900,
            letterSpacing: '0.05em'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4), -2px -2px 0 rgba(255, 255, 255, 0.3), 2px -2px 0 rgba(255, 255, 255, 0.3), -2px 2px 0 rgba(255, 255, 255, 0.3), 2px 2px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          アメショのユキのアトリエ
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl text-gray-800 italic tracking-wider mt-4 text-center font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          デジタルアーティスト / イラストレーター
        </motion.p>
      </div>

      <motion.div className="w-full flex justify-center">
        <motion.p 
          className={`mt-6 ${colors.textLight} text-base md:text-lg whitespace-nowrap font-light tracking-wider`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontFamily: '"Noto Serif JP", serif' }}
        >
          幻想的な世界観と鮮やかな色彩で、見る人を物語の中へ誘うようなビジュアルを制作しています。
        </motion.p>
      </motion.div>
      
      {/* 作品ギャラリー */}
      <div className="w-full bg-emerald-50 pt-20 pb-32">
        <motion.div 
          className="w-full max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${colors.text}`}>作品一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
            {works.map((work) => (
              <motion.div
                key={work.id}
                className={`group relative overflow-hidden rounded-2xl ${colors.card} ${colors.shadow} border ${colors.border} ${colors.hover} transition-all duration-300 ${work.colSpan === 2 ? 'md:col-span-2' : ''}`}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-square overflow-hidden">
                  {work.video ? (
                    <div className="relative w-full h-full">
                      <video 
                        ref={(el) => {
                          if (el) {
                            el.muted = true;
                            // Log video source for debugging
                            console.log('Video source:', el.src);
                            
                            // Add event listeners for debugging
                            el.addEventListener('error', (e) => {
                              const video = e.target as HTMLVideoElement;
                              console.error('Video error:', {
                                code: video.error?.code,
                                message: video.error?.message,
                                networkState: video.networkState,
                                readyState: video.readyState
                              });
                            });
                            
                            el.addEventListener('loadedmetadata', () => {
                              console.log('Video metadata loaded');
                            });
                            
                            el.addEventListener('canplay', () => {
                              console.log('Video can play');
                            });
                          }
                        }}
                        src={work.video}
                        poster={work.thumbnail}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onClick={(e) => {
                          const video = e.currentTarget;
                          video.paused ? video.play() : video.pause();
                        }}
                        onError={(e) => {
                          const video = e.currentTarget;
                          console.error('Video load error details:', {
                            src: video.src,
                            networkState: video.networkState,
                            readyState: video.readyState,
                            error: video.error
                          });
                        }}
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          const video = e.currentTarget.previousSibling as HTMLVideoElement;
                          video.play();
                        }}
                      >
                        <div className="bg-white bg-opacity-80 rounded-full p-3 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
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
  <Section id="about" title="About" titleClassName="text-emerald-800">
    <div className="grid gap-8 lg:grid-cols-2 items-center">
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/my-site/assets/images/work-4.png"
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
          はじめまして！アメショのユキです。幻想的な世界観と鮮やかな色彩で、見る人を物語の中へ誘うようなビジュアルを制作しています。AI アートで、Web3/NFT各プロジェクトへ多数のオリジナル作品やファンアートを提供中。
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
    image: "/my-site/assets/images/work-5.png",
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
    image: "/my-site/assets/images/work-4.png",
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

const Projects: React.FC = () => {
  return (
    <div className="w-full bg-emerald-50 py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">
          作品一覧
        </h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
            {featuredContent.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className={`h-full rounded-2xl overflow-hidden shadow-lg ${colors.card} border ${colors.border} ${colors.hover} transition-all duration-300`}>
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
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => (
  <Section id="contact" title="Contact" titleClassName="text-emerald-800">
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-wrap justify-center gap-8">
        {/* X (Twitter) */}
        <a 
          href="https://twitter.com/kuroneko0618" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-200 group"
          aria-label="X (Twitter) でフォローする"
        >
          <FaXTwitter className="w-12 h-12 text-emerald-800 group-hover:text-emerald-600 transition-colors" />
          <span className="mt-2 text-emerald-800 font-medium">X (Twitter)</span>
        </a>
        
        {/* Instagram */}
        <a 
          href="https://instagram.com/ameshonoyuki" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-200 group"
          aria-label="Instagram でフォローする"
        >
          <FaInstagram className="w-12 h-12 text-emerald-800 group-hover:text-emerald-600 transition-colors" />
          <span className="mt-2 text-emerald-800 font-medium">Instagram</span>
        </a>
        
        {/* Threads */}
        <a 
          href="https://www.threads.net/@ameshonoyuki" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-200 group"
          aria-label="Threads でフォローする"
        >
          <FaThreads className="w-12 h-12 text-emerald-800 group-hover:text-emerald-600 transition-colors" />
          <span className="mt-2 text-emerald-800 font-medium">Threads</span>
        </a>
      </div>
      
      <p className="text-center text-emerald-700 max-w-2xl">
        最新の作品や活動情報はSNSで発信しています。ぜひフォローしてください！
      </p>
    </div>
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
    <div className="min-h-screen bg-emerald-50 font-sans relative">
      <BackgroundImages />
      <div className="relative z-10">
        <Hero />
      </div>
      
      <div className={`py-20 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <Projects />
        </div>
      </div>
      
      <div className={`py-20 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
      </div>
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </div>
      
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${colors.border} bg-emerald-50`}>
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;
