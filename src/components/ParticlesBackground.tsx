import React, { useEffect, useCallback, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 120;
    const colors = [
      'rgba(168, 85, 247, 0.6)', // purple-500
      'rgba(192, 132, 252, 0.6)', // purple-400
      'rgba(236, 72, 153, 0.6)', // pink-500
      'rgba(244, 114, 182, 0.6)', // pink-400
      'rgba(99, 102, 241, 0.6)', // indigo-500
      'rgba(129, 140, 248, 0.6)'  // indigo-400
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: color,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      // キャンバスを半透明の黒でクリアして軌跡を残す
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // パーティクルの描画と更新
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // パーティクルの描画
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 1.5
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, p.color.replace('0.6', '0'));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fill();
        ctx.shadowBlur = 0;

        // パーティクルの位置を更新（ゆっくりと動かす）
        p.x += p.speedX;
        p.y += p.speedY;

        // 画面端で跳ね返るようにする
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // パーティクル間の線を描画
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.beginPath();
            ctx.strokeStyle = p.color.replace('0.6', opacity.toString());
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // アニメーションを開始
    animationFrameId.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    
    // クリーンアップ関数
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;
