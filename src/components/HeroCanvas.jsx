import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    // Mouse tracking state
    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
      radius: 180,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initPoints();
    };

    window.addEventListener('resize', handleResize);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    // Point Class for Philosophy Representation
    class Point {
      constructor(x, y, isAnchor = false, targetX = 0, targetY = 0) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = isAnchor ? 3.5 : 2;
        this.isAnchor = isAnchor;
        this.targetX = targetX;
        this.targetY = targetY;
        this.glow = 0;
      }

      update(scrollProgress) {
        // Subtle organic float
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from bounds
        if (this.x < 20 || this.x > width - 20) this.vx *= -1;
        if (this.y < 20 || this.y > height - 20) this.vy *= -1;

        // Cursor attraction / interaction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.05;
            this.x += dx * force;
            this.y += dy * force;
            this.glow = Math.min(1, this.glow + 0.05);
          } else {
            this.glow = Math.max(0, this.glow - 0.02);
          }
        } else {
          this.glow = Math.max(0, this.glow - 0.02);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (this.isAnchor) {
          ctx.fillStyle = '#f46a25';
        } else {
          const alpha = 0.4 + this.glow * 0.4;
          ctx.fillStyle = `rgba(244, 244, 240, ${alpha})`;
        }
        ctx.fill();

        if (this.isAnchor || this.glow > 0.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(244, 106, 37, 0.12)';
          ctx.fill();
        }
      }
    }

    let points = [];

    const initPoints = () => {
      points = [];
      const numPoints = Math.min(36, Math.floor(width / 30));
      
      // Floating independent points
      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * (width - 80) + 40;
        const y = Math.random() * (height - 80) + 40;
        points.push(new Point(x, y));
      }

      // Catane geometric structure points (C-Arc & Converging Node)
      const centerX = width * 0.65;
      const centerY = height * 0.5;
      const cRadius = Math.min(110, width * 0.15);

      // Arc points forming the 'C'
      const arcAngles = [-Math.PI * 0.65, -Math.PI * 0.35, 0, Math.PI * 0.35, Math.PI * 0.65];
      arcAngles.forEach(angle => {
        const px = centerX + Math.cos(angle) * cRadius;
        const py = centerY + Math.sin(angle) * cRadius;
        points.push(new Point(px, py, true));
      });

      // Central converging growth node
      points.push(new Point(centerX - cRadius * 0.4, centerY, true));
      points.push(new Point(centerX, centerY, true));
    };

    initPoints();

    // Main Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connection Lines between close points
      const maxDistance = 140;
      for (let i = 0; i < points.length; i++) {
        points[i].update();
        points[i].draw();

        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (points[i].isAnchor && points[j].isAnchor ? 0.45 : 0.18);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            
            if (points[i].isAnchor && points[j].isAnchor) {
              ctx.strokeStyle = `rgba(244, 106, 37, ${alpha})`;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(244, 244, 240, ${alpha})`;
              ctx.lineWidth = 1;
            }
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.85,
        zIndex: 1,
      }}
    />
  );
}
