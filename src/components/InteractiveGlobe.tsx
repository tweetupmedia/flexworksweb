import React, { useEffect, useRef, useState } from 'react';

interface NodePing {
  id: string;
  name: string;
  country: string;
  flag: string;
  currencySymbol: string;
  amount: string;
  avatar: string;
  lat: number;
  lng: number;
  method: string;
}

const GLOBAL_NODES: NodePing[] = [
  {
    id: 'us',
    name: 'David Miller',
    country: 'United States',
    flag: '🇺🇸',
    currencySymbol: '$',
    amount: '$9,500',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    lat: 38.0,
    lng: -97.0,
    method: 'W-2 Direct',
  },
  {
    id: 'br',
    name: 'Sofia Silva',
    country: 'Brazil',
    flag: '🇧🇷',
    currencySymbol: 'R$',
    amount: 'R$28,500',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    lat: -14.2,
    lng: -51.9,
    method: 'USDC via Solana',
  },
  {
    id: 'uk',
    name: 'James Sterling',
    country: 'United Kingdom',
    flag: '🇬🇧',
    currencySymbol: '£',
    amount: '£5,500',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    lat: 55.3,
    lng: -3.4,
    method: 'BACS / Wire',
  },
  {
    id: 'jp',
    name: 'Hiroshi Tanaka',
    country: 'Japan',
    flag: '🇯🇵',
    currencySymbol: '¥',
    amount: '¥850,000',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    lat: 36.2,
    lng: 138.2,
    method: 'USDT on Ethereum',
  },
  {
    id: 'au',
    name: 'Chloe Martin',
    country: 'Australia',
    flag: '🇦🇺',
    currencySymbol: 'A$',
    amount: 'A$7,200',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    lat: -25.2,
    lng: 133.7,
    method: 'USDC Polygon',
  },
];

export const InteractiveGlobe: React.FC<{ isDark?: boolean; onNodeClick?: (node: NodePing) => void }> = ({
  isDark = false,
  onNodeClick,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<NodePing>(GLOBAL_NODES[0]);
  const [rotation, setRotation] = useState({ x: 0.2, y: -0.6 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Sphere dot points cache
  const dotsRef = useRef<{ x: number; y: number; z: number }[]>([]);

  useEffect(() => {
    // Generate spherical Fibonacci dot points
    const dots: { x: number; y: number; z: number }[] = [];
    const count = 1200;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      dots.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.cos(phi),
        z: Math.sin(theta) * Math.sin(phi),
      });
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    let animId: number;
    let angle = rotation.y;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;

      if (!isDragging.current) {
        angle += 0.003;
      }

      // Outer atmosphere glow
      const grad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.3);
      if (isDark) {
        grad.addColorStop(0, 'rgba(99, 102, 241, 0.12)');
        grad.addColorStop(0.7, 'rgba(129, 140, 248, 0.05)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        grad.addColorStop(0, 'rgba(92, 85, 254, 0.1)');
        grad.addColorStop(0.7, 'rgba(92, 85, 254, 0.04)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Draw Sphere Dots
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);

      dotsRef.current.forEach((dot) => {
        // Rotate around Y
        const x1 = dot.x * cosY + dot.z * sinY;
        const z1 = -dot.x * sinY + dot.z * cosY;

        // Rotate around X
        const y2 = dot.y * cosX - z1 * sinX;
        const z2 = dot.y * sinX + z1 * cosX;

        // Only draw visible points on front hemisphere + subtle back rim
        if (z2 > -0.2) {
          const alpha = Math.max(0.1, (z2 + 0.3) / 1.3);
          const size = 1.2 + alpha * 1.6;
          const px = cx + x1 * radius;
          const py = cy + y2 * radius;

          ctx.fillStyle = isDark
            ? `rgba(165, 180, 252, ${alpha * 0.85})`
            : `rgba(92, 85, 254, ${alpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw connection arcs between main hub points
      const hubs = [
        { x: -0.4, y: -0.2, z: 0.8 }, // US
        { x: -0.3, y: 0.4, z: 0.7 },  // BR
        { x: 0.1, y: -0.4, z: 0.8 },  // UK
        { x: 0.7, y: -0.1, z: 0.5 },  // JP
        { x: 0.6, y: 0.5, z: 0.5 },   // AU
      ];

      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          const h1 = hubs[i];
          const h2 = hubs[j];

          // Project h1
          const h1x = h1.x * cosY + h1.z * sinY;
          const h1z = -h1.x * sinY + h1.z * cosY;
          const h1y2 = h1.y * cosX - h1z * sinX;

          // Project h2
          const h2x = h2.x * cosY + h2.z * sinY;
          const h2z = -h2.x * sinY + h2.z * cosY;
          const h2y2 = h2.y * cosX - h2z * sinX;

          const p1x = cx + h1x * radius;
          const p1y = cy + h1y2 * radius;
          const p2x = cx + h2x * radius;
          const p2y = cy + h2y2 * radius;

          // Quadratic curve midpoint
          const midX = (p1x + p2x) / 2;
          const midY = (p1y + p2y) / 2 - 35;

          ctx.strokeStyle = isDark ? 'rgba(129, 140, 248, 0.28)' : 'rgba(92, 85, 254, 0.22)';
          ctx.lineWidth = 1.2;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(p1x, p1y);
          ctx.quadraticCurveTo(midX, midY, p2x, p2y);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [rotation, isDark]);

  // Handle Drag to Rotate
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    setRotation(prev => ({
      x: Math.max(-1, Math.min(1, prev.x - dy * 0.005)),
      y: prev.y + dx * 0.005,
    }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />

      {/* Floating Node Badges matching the Flex screenshot */}
      {/* Node 1: US */}
      <button
        onClick={() => {
          setActiveNode(GLOBAL_NODES[0]);
          onNodeClick?.(GLOBAL_NODES[0]);
        }}
        className={`absolute top-[28%] left-[16%] flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105 ${
          activeNode.id === 'us'
            ? 'bg-indigo-600/90 text-white border-indigo-400 ring-2 ring-indigo-400/40'
            : isDark
            ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:bg-slate-800'
            : 'bg-white/90 text-slate-800 border-slate-200 hover:bg-white'
        }`}
      >
        <span className="text-sm">🇺🇸</span>
        <span className="text-xs font-semibold px-1 py-0.5 rounded bg-blue-500/20 text-blue-500">$</span>
        <img
          src={GLOBAL_NODES[0].avatar}
          alt={GLOBAL_NODES[0].name}
          className="w-5 h-5 rounded-full object-cover border border-white/40"
        />
      </button>

      {/* Node 2: Brazil */}
      <button
        onClick={() => {
          setActiveNode(GLOBAL_NODES[1]);
          onNodeClick?.(GLOBAL_NODES[1]);
        }}
        className={`absolute bottom-[24%] right-[22%] flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105 ${
          activeNode.id === 'br'
            ? 'bg-indigo-600/90 text-white border-indigo-400 ring-2 ring-indigo-400/40'
            : isDark
            ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:bg-slate-800'
            : 'bg-white/90 text-slate-800 border-slate-200 hover:bg-white'
        }`}
      >
        <span className="text-sm">🇧🇷</span>
        <span className="text-xs font-semibold px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-500">R$</span>
        <img
          src={GLOBAL_NODES[1].avatar}
          alt={GLOBAL_NODES[1].name}
          className="w-5 h-5 rounded-full object-cover border border-white/40"
        />
      </button>

      {/* Node 3: UK */}
      <button
        onClick={() => {
          setActiveNode(GLOBAL_NODES[2]);
          onNodeClick?.(GLOBAL_NODES[2]);
        }}
        className={`absolute top-[20%] right-[32%] flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105 ${
          activeNode.id === 'uk'
            ? 'bg-indigo-600/90 text-white border-indigo-400 ring-2 ring-indigo-400/40'
            : isDark
            ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:bg-slate-800'
            : 'bg-white/90 text-slate-800 border-slate-200 hover:bg-white'
        }`}
      >
        <span className="text-sm">🇬🇧</span>
        <span className="text-xs font-semibold px-1 py-0.5 rounded bg-purple-500/20 text-purple-500">£</span>
        <img
          src={GLOBAL_NODES[2].avatar}
          alt={GLOBAL_NODES[2].name}
          className="w-5 h-5 rounded-full object-cover border border-white/40"
        />
      </button>

      {/* Node 4: Japan */}
      <button
        onClick={() => {
          setActiveNode(GLOBAL_NODES[3]);
          onNodeClick?.(GLOBAL_NODES[3]);
        }}
        className={`absolute top-[42%] right-[10%] flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105 ${
          activeNode.id === 'jp'
            ? 'bg-indigo-600/90 text-white border-indigo-400 ring-2 ring-indigo-400/40'
            : isDark
            ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:bg-slate-800'
            : 'bg-white/90 text-slate-800 border-slate-200 hover:bg-white'
        }`}
      >
        <span className="text-sm">🇯🇵</span>
        <span className="text-xs font-semibold px-1 py-0.5 rounded bg-rose-500/20 text-rose-500">¥</span>
        <img
          src={GLOBAL_NODES[3].avatar}
          alt={GLOBAL_NODES[3].name}
          className="w-5 h-5 rounded-full object-cover border border-white/40"
        />
      </button>

      {/* Active node detail pill */}
      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-xl flex items-center gap-3 transition-all duration-300 ${
        isDark ? 'bg-slate-900/90 border-slate-700/80 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
      }`}>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <div className="text-xs leading-tight">
          <div className="font-semibold flex items-center gap-1.5">
            <span>{activeNode.flag}</span>
            <span>{activeNode.name}</span>
            <span className="text-indigo-500 font-bold">({activeNode.amount})</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Settled via <span className="font-medium text-slate-600 dark:text-slate-300">{activeNode.method}</span> • 2.8s
          </div>
        </div>
      </div>
    </div>
  );
};
