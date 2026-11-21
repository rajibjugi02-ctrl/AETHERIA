import React, { useEffect, useRef } from 'react';

export default function StardustCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.min(Math.floor((width * height) / 14000), 100);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.4,
      baseAlpha: Math.random() * 0.6 + 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -Math.random() * 0.25 - 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.4 ? 'rgba(201, 169, 106, ' : 'rgba(184, 200, 216, ',
    }));

    // Mouse tracking for subtle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      stars.forEach((star) => {
        star.y += star.speedY;
        star.x += star.speedX;

        // Wrap around boundaries
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        // Twinkle effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha > star.baseAlpha + 0.3 || star.alpha < star.baseAlpha - 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const drawX = star.x + offsetX * star.size;
        const drawY = star.y + offsetY * star.size;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.max(0.1, Math.min(star.alpha, 0.85))})`;
        ctx.fill();

        // Subtle glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}0.1)`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
}
