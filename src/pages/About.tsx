import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'UI/UX デザイン', level: 85 },
  ];

  const experiences = [
    {
      role: 'シニアWebデベロッパー',
      company: '株式会社テックソリューション',
      period: '2020年 - 現在',
      description: '大規模なWebアプリケーションのフロントエンド開発を担当。ReactとTypeScriptを使用したSPAの開発に従事。'
    },
    {
      role: 'Webデザイナー',
      company: 'クリエイティブスタジオ',
      period: '2018年 - 2020年',
      description: 'クライアント向けのWebサイトのデザインとコーディングを担当。レスポンシブデザインやUI/UXの改善に注力。'
    },
    {
      role: 'フロントエンドデベロッパー',
      company: 'スタートアップ企業',
      period: '2016年 - 2018年',
      description: 'スタートアップ企業でフロントエンド開発に従事。新機能の実装やパフォーマンスの最適化を担当。'
    },
  ];

  return (
    <div className="about-page">
      {/* ヒーローセクション */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">私について</h1>
            <p className="subtitle">クリエイティブなソリューションでビジネスの成長をサポートします</p>
          </motion.div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <span>プロフィール画像</span>
              </div>
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>はじめまして</h2>
              <p>
                こんにちは、私は[あなたの名前]と申します。Webデザインと開発に情熱を注ぐフロントエンドエンジニアです。
                美しいデザインと堅牢なコードの両方を追求し、ユーザーにとって使いやすく印象的なデジタル体験を創り出すことを心がけています。
              </p>
              <p>
                これまでに様々な業界のクライアントと協力し、100を超えるプロジェクトに携わってきました。
                常に最新の技術トレンドを学び、クライアントのビジネスゴール達成をサポートするための最適なソリューションを提供しています。
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">名前:</span>
                  <span className="info-value">[あなたの名前]</span>
                </div>
                <div className="info-item">
                  <span className="info-label">メール:</span>
                  <span className="info-value">your.email@example.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">場所:</span>
                  <span className="info-value">東京都</span>
                </div>
                <div className="info-item">
                  <span className="info-label">スキル:</span>
                  <span className="info-value">Webデザイン, フロントエンド開発, UI/UX</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="section skills-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            スキルセット
          </motion.h2>
          
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 経歴セクション */}
      <section className="section experience-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            職務経歴
          </motion.h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>プロジェクトのご相談はお気軽に</h2>
            <p>新しいプロジェクトやご質問がございましたら、お気軽にお問い合わせください。</p>
            <a href="/contact" className="btn btn-primary">お問い合わせ</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
