import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // ここでフォームのバリデーションを追加
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: '必須項目をすべて入力してください。'
      });
      setIsSubmitting(false);
      return;
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: '有効なメールアドレスを入力してください。'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // ここで実際のAPIエンドポイントに送信
      // 例: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // ダミーの遅延を追加（実際のAPIコールの代わり）
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 成功時の処理
      setSubmitStatus({
        success: true,
        message: 'お問い合わせありがとうございます。2営業日以内にご返信いたします。'
      });
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // エラー処理
      console.error('送信エラー:', error);
      setSubmitStatus({
        success: false,
        message: '送信に失敗しました。しばらくしてからもう一度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ヒーローセクション */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>お問い合わせ</h1>
            <p>ご質問やご依頼がございましたら、お気軽にお問い合わせください</p>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせフォームセクション */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>お問い合わせ情報</h2>
              <p>ご質問やご依頼がございましたら、以下のフォームよりお気軽にお問い合わせください。2営業日以内にご返信いたします。</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>メールアドレス</h3>
                  <p>your.email@example.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>電話番号</h3>
                  <p>03-1234-5678</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>所在地</h3>
                  <p>〒100-0005<br />東京都千代田区丸の内1-1-1</p>
                </div>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>メッセージを送る</h2>
              
              {submitStatus && (
                <div className={`alert ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">お名前 <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">件名</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="件名を入力してください"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">メッセージ <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="お問い合わせ内容を入力してください"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group privacy-policy">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意する
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> 送信中...
                    </>
                  ) : (
                    'メッセージを送信'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 地図セクション */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12960.46281903961!2d139.7649361!3d35.6812405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="所在地の地図"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
