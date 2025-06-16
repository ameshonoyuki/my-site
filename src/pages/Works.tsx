import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  link: string;
  featured?: boolean;
};

const Works: React.FC = () => {
  const categories = ['すべて', 'Webデザイン', 'Web開発', 'モバイルアプリ', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('すべて');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'ECサイトリニューアル',
      category: 'Web開発',
      image: 'project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: '既存のECサイトをモダンな技術スタックでリニューアル。パフォーマンスを大幅に改善し、コンバージョン率を向上させました。',
      link: '/works/project1',
      featured: true
    },
    {
      id: 2,
      title: 'コーポレートサイト制作',
      category: 'Webデザイン',
      image: 'project2.jpg',
      tags: ['UI/UX', 'レスポンシブ', 'WordPress'],
      description: '企業のブランドイメージに合わせたモダンで洗練されたコーポレートサイトを制作。',
      link: '/works/project2',
      featured: true
    },
    {
      id: 3,
      title: 'モバイルアプリ開発',
      category: 'モバイルアプリ',
      image: 'project3.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      description: 'フィットネスをテーマにしたモチベーション向上アプリを開発。',
      link: '/works/project3',
      featured: true
    },
    {
      id: 4,
      title: 'ランディングページ制作',
      category: 'Webデザイン',
      image: 'project4.jpg',
      tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
      description: '新製品のプロモーション用に高品質なランディングページを制作。',
      link: '/works/project4',
      featured: false
    },
    {
      id: 5,
      title: 'SNSアプリケーション',
      category: 'Web開発',
      image: 'project5.jpg',
      tags: ['Vue.js', 'Node.js', 'MongoDB'],
      description: '写真共有に特化したSNSアプリケーションの開発。',
      link: '/works/project5',
      featured: false
    },
    {
      id: 6,
      title: 'UI/UXリデザイン',
      category: 'UI/UX',
      image: 'project6.jpg',
      tags: ['Figma', 'ユーザビリティテスト', 'プロトタイプ'],
      description: '既存サービスのUI/UXを改善し、ユーザビリティを向上させました。',
      link: '/works/project6',
      featured: false
    },
  ];

  const filteredProjects = activeCategory === 'すべて' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="works-page">
      {/* ヒーローセクション */}
      <section className="works-hero">
        <div className="container">
          <motion.div 
            className="works-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>作品一覧</h1>
            <p>これまでに手がけたプロジェクトの数々をご紹介します</p>
          </motion.div>
        </div>
      </section>


      {/* プロジェクト一覧セクション */}
      <section className="section projects-section">
        <div className="container">
          {/* カテゴリーフィルター */}
          <motion.div 
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* プロジェクトグリッド */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.title}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <Link to={project.link} className="project-link">
                      詳細を見る <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <Link to={project.link} className="project-more">
                    詳細を見る <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ページネーション */}
          <motion.div 
            className="pagination"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-next">次へ <i className="fas fa-chevron-right"></i></button>
          </motion.div>
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
            <Link to="/contact" className="btn btn-light">お問い合わせ</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Works;
