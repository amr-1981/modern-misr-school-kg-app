import React from 'react';

// High-Quality Child-Friendly Black & White Outline Line-Art SVGs for KG1 Coloring
// Designed with 3px to 4px thick strokes, large open colorable areas, and adorable cartoon styles.

export function OutlineLetterDisplay({ char, subText = '' }) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div 
        className="text-8xl sm:text-9xl font-black font-arabic tracking-wide select-none"
        style={{
          color: '#ffffff',
          WebkitTextStroke: '4px #0f172a',
          textStroke: '4px #0f172a',
          paintOrder: 'stroke fill'
        }}
      >
        {char}
      </div>
      {subText && (
        <span 
          className="text-2xl sm:text-3xl font-black font-arabic mt-1 select-none"
          style={{
            color: '#ffffff',
            WebkitTextStroke: '2px #0f172a',
            textStroke: '2px #0f172a'
          }}
        >
          {subText}
        </span>
      )}
    </div>
  );
}

// 1. Lion Outline (حرف الألف - أسد)
export function SvgLionOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mane Scallops */}
      <circle cx="120" cy="115" r="75" stroke="#0f172a" strokeWidth="4" strokeDasharray="12 4" fill="#ffffff" />
      <path d="M60 115 C50 90, 70 60, 95 65 C105 45, 135 45, 145 65 C170 60, 190 90, 180 115 C195 140, 175 170, 150 170 C140 185, 100 185, 90 170 C65 170, 45 140, 60 115 Z" 
            stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      
      {/* Ears */}
      <circle cx="85" cy="75" r="16" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <circle cx="85" cy="75" r="8" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="155" cy="75" r="16" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <circle cx="155" cy="75" r="8" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />

      {/* Face */}
      <ellipse cx="120" cy="120" rx="48" ry="42" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />

      {/* Eyes */}
      <circle cx="102" cy="110" r="9" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="104" cy="108" r="4" fill="#0f172a" />
      <circle cx="138" cy="110" r="9" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="136" cy="108" r="4" fill="#0f172a" />

      {/* Nose & Mouth */}
      <polygon points="120,122 110,132 130,132" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" fill="#ffffff" />
      <path d="M120 132 L120 142 M120 142 C115 148, 105 146, 104 140 M120 142 C125 148, 135 146, 136 140" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      
      {/* Cheeks & Whiskers */}
      <circle cx="95" cy="132" r="3" fill="#0f172a" />
      <circle cx="90" cy="138" r="3" fill="#0f172a" />
      <circle cx="145" cy="132" r="3" fill="#0f172a" />
      <circle cx="150" cy="138" r="3" fill="#0f172a" />
      
      {/* Body & Paws */}
      <path d="M92 165 C85 195, 75 215, 65 220 L175 220 C165 215, 155 195, 148 165" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      <ellipse cx="90" cy="215" rx="20" ry="12" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <ellipse cx="150" cy="215" rx="20" ry="12" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <line x1="83" y1="210" x2="83" y2="225" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="97" y1="210" x2="97" y2="225" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="143" y1="210" x2="143" y2="225" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="157" y1="210" x2="157" y2="225" stroke="#0f172a" strokeWidth="2.5" />
    </svg>
  );
}

// 2. Bunny Outline (حرف الألف - أرنب)
export function SvgBunnyOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <path d="M90 100 C75 50, 70 15, 95 15 C115 15, 110 50, 105 100 Z" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      <path d="M88 80 C80 45, 80 28, 95 28 C105 28, 103 45, 100 80" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />
      <path d="M150 100 C165 50, 170 15, 145 15 C125 15, 130 50, 135 100 Z" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      <path d="M152 80 C160 45, 160 28, 145 28 C135 28, 137 45, 140 80" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Head */}
      <circle cx="120" cy="130" r="45" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />

      {/* Eyes */}
      <ellipse cx="105" cy="122" rx="7" ry="10" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="106" cy="119" r="4" fill="#0f172a" />
      <ellipse cx="135" cy="122" rx="7" ry="10" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="134" cy="119" r="4" fill="#0f172a" />

      {/* Nose & Mouth */}
      <ellipse cx="120" cy="135" rx="5" ry="4" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <path d="M120 139 C114 146, 106 142, 108 138 M120 139 C126 146, 134 142, 132 138" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

      {/* Whiskers */}
      <line x1="85" y1="135" x2="65" y2="132" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="85" y1="140" x2="68" y2="142" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="155" y1="135" x2="175" y2="132" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="155" y1="140" x2="172" y2="142" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Body with Carrot */}
      <path d="M85 170 C75 210, 60 225, 60 225 L180 225 C180 225, 165 210, 155 170" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      {/* Carrot */}
      <polygon points="120,225 105,175 135,175" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <line x1="110" y1="190" x2="128" y2="190" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="112" y1="205" x2="124" y2="205" stroke="#0f172a" strokeWidth="2.5" />
      <path d="M115 175 C110 160, 105 160, 105 160 M120 175 C120 155, 120 155, 120 155 M125 175 C130 160, 135 160, 135 160" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 3. Banana Outline (حرف الميم - موز)
export function SvgBananaOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Banana Body */}
      <path d="M60 60 C80 150, 150 200, 200 180 C180 195, 110 195, 50 120 C35 90, 45 70, 60 60 Z" 
            stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      {/* Stem & Tip */}
      <rect x="48" y="50" width="16" height="14" rx="3" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" transform="rotate(-30 50 50)" />
      <path d="M198 178 L206 182 L200 188 Z" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      {/* Contour lines */}
      <path d="M62 70 C85 145, 140 185, 195 180" stroke="#0f172a" strokeWidth="3" strokeDasharray="6 4" />
      
      {/* Cute Smiling Face on Banana */}
      <ellipse cx="115" cy="130" rx="6" ry="8" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="116" cy="128" r="3" fill="#0f172a" />
      <ellipse cx="138" cy="132" rx="6" ry="8" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="137" cy="130" r="3" fill="#0f172a" />
      <path d="M120 145 C124 153, 132 153, 136 146" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="108" cy="140" r="4" stroke="#0f172a" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="146" cy="142" r="4" stroke="#0f172a" strokeWidth="2" strokeDasharray="2 2" />
      
      {/* Second smaller banana in bunch */}
      <path d="M75 40 C110 90, 165 140, 195 130 C175 140, 125 120, 85 60 Z" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
    </svg>
  );
}

// 4. Sailboat Outline (حرف الميم - مركب)
export function SvgSailboatOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun & Cloud */}
      <circle cx="45" cy="45" r="18" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <path d="M45 20 L45 10 M45 70 L45 80 M20 45 L10 45 M70 45 L80 45" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      
      {/* Mast */}
      <line x1="120" y1="40" x2="120" y2="160" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />
      <polygon points="120,40 120,25 138,32" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />

      {/* Main Sail (Triangular with stripes) */}
      <polygon points="124,45 195,150 124,150" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <line x1="124" y1="80" x2="170" y2="150" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="124" y1="115" x2="148" y2="150" stroke="#0f172a" strokeWidth="2.5" />

      {/* Front Sail */}
      <polygon points="116,55 50,150 116,150" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="85" cy="115" r="10" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Hull (Boat) */}
      <path d="M40 160 L200 160 L175 195 L65 195 Z" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="90" cy="178" r="6" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />
      <circle cx="120" cy="178" r="6" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />
      <circle cx="150" cy="178" r="6" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Water Waves */}
      <path d="M20 205 C35 195, 50 215, 65 205 C80 195, 95 215, 110 205 C125 195, 140 215, 155 205 C170 195, 185 215, 200 205 C215 195, 225 210, 235 205" 
            stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M30 220 C45 210, 60 230, 75 220 C90 210, 105 230, 120 220 C135 210, 150 230, 165 220 C180 210, 195 230, 210 220" 
            stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 5. Duck Outline (حرف الباء - بطة)
export function SvgDuckOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Duck Head & Neck */}
      <circle cx="95" cy="85" r="32" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      
      {/* Bill (Beak) */}
      <path d="M65 85 C45 80, 40 92, 65 98 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="58" cy="88" r="1.5" fill="#0f172a" />

      {/* Eye */}
      <ellipse cx="90" cy="78" rx="6" ry="8" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="89" cy="76" r="3" fill="#0f172a" />
      <path d="M84 70 C88 68, 94 68, 98 71" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Body */}
      <path d="M120 105 C145 105, 200 125, 205 155 C210 185, 175 195, 140 195 C95 195, 75 160, 85 115" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />

      {/* Wing with Scalloped Feathers */}
      <path d="M125 125 C150 120, 175 135, 175 155 C165 170, 140 170, 120 160 C110 145, 115 130, 125 125 Z" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <path d="M135 140 C145 142, 160 148, 165 155 M130 150 C140 152, 150 156, 155 162" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />

      {/* Tail Feathers */}
      <path d="M195 140 C215 130, 220 135, 205 155" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />

      {/* Water Ripples */}
      <path d="M40 200 C60 190, 80 210, 100 200 C120 190, 140 210, 160 200 C180 190, 200 210, 220 200" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M60 215 C80 208, 100 222, 120 215 C140 208, 160 222, 180 215" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. Orange Outline (حرف الباء - برتقال)
export function SvgOrangeOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange Body */}
      <circle cx="115" cy="135" r="65" stroke="#0f172a" strokeWidth="4.5" fill="#ffffff" />
      
      {/* Stem & Leaves */}
      <rect x="110" y="58" width="10" height="18" rx="3" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <path d="M118 64 C145 50, 175 60, 175 75 C150 85, 125 75, 118 64 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <line x1="120" y1="67" x2="168" y2="73" stroke="#0f172a" strokeWidth="2.5" />
      <path d="M112 66 C85 55, 60 70, 65 85 C90 88, 108 78, 112 66 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />

      {/* Surface Dimples */}
      <circle cx="85" cy="115" r="2" fill="#0f172a" />
      <circle cx="145" cy="118" r="2" fill="#0f172a" />
      <circle cx="95" cy="165" r="2" fill="#0f172a" />
      <circle cx="135" cy="162" r="2" fill="#0f172a" />

      {/* Sliced Orange Wedge at Corner */}
      <path d="M165 155 C195 160, 215 185, 205 210 L165 180 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <path d="M175 168 C195 175, 200 190, 195 200 L175 182 Z" stroke="#0f172a" strokeWidth="2.5" strokeDasharray="3 2" fill="#ffffff" />
    </svg>
  );
}

// 7. Elephant Outline (حرف الفاء - فيل)
export function SvgElephantOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="140" cy="140" rx="65" ry="55" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />

      {/* Head */}
      <circle cx="85" cy="105" r="38" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />

      {/* Giant Flapping Ear */}
      <path d="M85 75 C125 65, 140 100, 130 135 C115 155, 90 145, 80 135 Z" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <path d="M92 88 C115 85, 125 105, 118 128" stroke="#0f172a" strokeWidth="2.5" />

      {/* Trunk (خرطوم) */}
      <path d="M60 120 C40 135, 30 165, 45 185 C55 195, 75 190, 68 175 C60 165, 55 150, 75 130" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="#ffffff" />
      {/* Water Drops from trunk */}
      <circle cx="50" cy="155" r="4" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />
      <circle cx="40" cy="142" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />

      {/* Eye & Smile */}
      <circle cx="75" cy="98" r="6" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="76" cy="97" r="3" fill="#0f172a" />

      {/* Legs & Feet with Toenails */}
      <path d="M100 175 L100 220 L125 220 L125 185" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      <path d="M155 185 L155 220 L180 220 L180 175" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      {/* Nails */}
      <circle cx="107" cy="216" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
      <circle cx="118" cy="216" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
      <circle cx="162" cy="216" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
      <circle cx="173" cy="216" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />

      {/* Little Tail */}
      <path d="M205 135 C220 145, 225 165, 220 180" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 8. Butterfly Outline (حرف الفاء - فراشة)
export function SvgButterflyOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Left Wing */}
      <path d="M115 110 C80 40, 20 45, 30 100 C35 130, 85 135, 115 125 Z" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="65" cy="85" r="14" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="85" cy="110" r="8" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Top Right Wing */}
      <path d="M125 110 C160 40, 220 45, 210 100 C205 130, 155 135, 125 125 Z" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="175" cy="85" r="14" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="155" cy="110" r="8" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Bottom Left Wing */}
      <path d="M115 128 C90 145, 55 160, 60 190 C65 210, 105 200, 115 155 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="85" cy="175" r="9" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Bottom Right Wing */}
      <path d="M125 128 C150 145, 185 160, 180 190 C175 210, 135 200, 125 155 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <circle cx="155" cy="175" r="9" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />

      {/* Body & Antennae */}
      <ellipse cx="120" cy="135" rx="8" ry="40" stroke="#0f172a" strokeWidth="4" fill="#ffffff" />
      <circle cx="120" cy="90" r="10" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <path d="M116 82 C105 60, 85 55, 80 60" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="78" cy="62" r="3" fill="#0f172a" />
      <path d="M124 82 C135 60, 155 55, 160 60" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="162" cy="62" r="3" fill="#0f172a" />
    </svg>
  );
}

// 9. Bee Outline (حرف النون - نحلة)
export function SvgBeeOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wings */}
      <ellipse cx="100" cy="70" rx="20" ry="35" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" transform="rotate(-25 100 70)" />
      <ellipse cx="140" cy="70" rx="20" ry="35" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" transform="rotate(25 140 70)" />
      <line x1="95" y1="60" x2="105" y2="85" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="145" y1="60" x2="135" y2="85" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 3" />

      {/* Bee Body */}
      <ellipse cx="120" cy="140" rx="45" ry="55" stroke="#0f172a" strokeWidth="4.5" fill="#ffffff" />
      {/* Stripes (Colorable sections) */}
      <path d="M78 125 C105 135, 135 135, 162 125" stroke="#0f172a" strokeWidth="4" />
      <path d="M80 150 C105 160, 135 160, 160 150" stroke="#0f172a" strokeWidth="4" />
      <path d="M88 175 C105 185, 135 185, 152 175" stroke="#0f172a" strokeWidth="4" />

      {/* Stinger */}
      <polygon points="120,205 115,195 125,195" stroke="#0f172a" strokeWidth="3" fill="#0f172a" />

      {/* Face */}
      <circle cx="106" cy="105" r="7" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="108" cy="103" r="3" fill="#0f172a" />
      <circle cx="134" cy="105" r="7" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="132" cy="103" r="3" fill="#0f172a" />
      <path d="M115 116 C118 122, 122 122, 125 116" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

      {/* Antennae */}
      <path d="M112 88 C105 70, 95 65, 90 70" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="88" cy="72" r="3.5" fill="#0f172a" />
      <path d="M128 88 C135 70, 145 65, 150 70" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="152" cy="72" r="3.5" fill="#0f172a" />
    </svg>
  );
}

// 10. Whale Outline (حرف الحاء - حوت)
export function SvgWhaleOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Water Spout */}
      <path d="M115 65 C115 35, 90 25, 75 35 M120 65 C120 20, 120 15, 120 15 M125 65 C125 35, 150 25, 165 35" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="70" cy="38" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
      <circle cx="170" cy="38" r="3" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />

      {/* Whale Body */}
      <path d="M45 115 C55 75, 130 70, 175 105 C205 125, 210 135, 230 125 C230 140, 225 155, 210 160 C185 165, 150 175, 105 175 C60 175, 35 150, 45 115 Z" 
            stroke="#0f172a" strokeWidth="4.5" strokeLinejoin="round" fill="#ffffff" />

      {/* Whale Belly Ridges */}
      <path d="M60 150 C80 170, 120 175, 155 165" stroke="#0f172a" strokeWidth="3" />
      <path d="M75 160 C90 172, 115 174, 140 168" stroke="#0f172a" strokeWidth="3" />

      {/* Flipper (Fin) */}
      <path d="M105 140 C115 155, 125 165, 140 160 C145 150, 135 135, 120 135 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />

      {/* Eye & Smile */}
      <circle cx="72" cy="115" r="7" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="70" cy="113" r="3.5" fill="#0f172a" />
      <path d="M60 130 C70 138, 85 135, 95 128" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

      {/* Water Waves */}
      <path d="M20 200 C40 190, 60 210, 80 200 C100 190, 120 210, 140 200 C160 190, 180 210, 200 200 C220 190, 230 205, 240 200" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 11. Apple Outline (حرف التاء - تفاح)
export function SvgAppleOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Apple Body */}
      <path d="M120 85 C95 55, 45 65, 45 120 C45 175, 85 210, 120 215 C155 210, 195 175, 195 120 C195 65, 145 55, 120 85 Z" 
            stroke="#0f172a" strokeWidth="4.5" strokeLinejoin="round" fill="#ffffff" />

      {/* Stem & Leaf */}
      <path d="M120 85 C118 60, 125 45, 135 35" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
      <path d="M126 55 C145 40, 170 45, 175 60 C155 70, 135 65, 126 55 Z" stroke="#0f172a" strokeWidth="3.5" strokeLinejoin="round" fill="#ffffff" />
      <line x1="128" y1="57" x2="168" y2="54" stroke="#0f172a" strokeWidth="2.5" />

      {/* Cute Face on Apple */}
      <circle cx="95" cy="130" r="7" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="96" cy="128" r="3.5" fill="#0f172a" />
      <circle cx="145" cy="130" r="7" stroke="#0f172a" strokeWidth="3" fill="#ffffff" />
      <circle cx="144" cy="128" r="3.5" fill="#0f172a" />
      <path d="M110 148 C115 158, 125 158, 130 148" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Cheeks */}
      <ellipse cx="82" cy="142" rx="6" ry="4" stroke="#0f172a" strokeWidth="2" strokeDasharray="2 2" />
      <ellipse cx="158" cy="142" rx="6" ry="4" stroke="#0f172a" strokeWidth="2" strokeDasharray="2 2" />
    </svg>
  );
}

// 12. Fish Outline (حرف السين - سمكة)
export function SvgFishOutline({ className = "w-64 h-64" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tail Fin */}
      <polygon points="180,120 230,80 215,120 230,160" stroke="#0f172a" strokeWidth="4" strokeLinejoin="round" fill="#ffffff" />
      <line x1="185" y1="120" x2="220" y2="95" stroke="#0f172a" strokeWidth="2.5" />
      <line x1="185" y1="120" x2="220" y2="145" stroke="#0f172a" strokeWidth="2.5" />

      {/* Fish Body */}
      <path d="M40 120 C70 65, 150 75, 185 120 C150 165, 70 175, 40 120 Z" stroke="#0f172a" strokeWidth="4.5" strokeLinejoin="round" fill="#ffffff" />

      {/* Top & Bottom Fins */}
      <path d="M95 73 C115 45, 145 50, 140 78" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <path d="M105 167 C120 185, 145 185, 138 163" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />

      {/* Head Gill Arc */}
      <path d="M85 88 C98 105, 98 135, 85 152" stroke="#0f172a" strokeWidth="3.5" />

      {/* Eye & Lips */}
      <circle cx="65" cy="110" r="9" stroke="#0f172a" strokeWidth="3.5" fill="#ffffff" />
      <circle cx="63" cy="108" r="4.5" fill="#0f172a" />
      <path d="M40 115 C32 110, 32 120, 40 122" stroke="#0f172a" strokeWidth="3" />

      {/* Scales to Color */}
      <path d="M110 100 C118 108, 118 120, 110 128" stroke="#0f172a" strokeWidth="3" />
      <path d="M110 120 C118 128, 118 140, 110 148" stroke="#0f172a" strokeWidth="3" />
      <path d="M130 95 C138 105, 138 118, 130 125" stroke="#0f172a" strokeWidth="3" />
      <path d="M130 118 C138 128, 138 138, 130 145" stroke="#0f172a" strokeWidth="3" />
      <path d="M150 108 C158 116, 158 128, 150 135" stroke="#0f172a" strokeWidth="3" />

      {/* Bubbles */}
      <circle cx="30" cy="95" r="6" stroke="#0f172a" strokeWidth="2.5" fill="#ffffff" />
      <circle cx="20" cy="80" r="4" stroke="#0f172a" strokeWidth="2" fill="#ffffff" />
    </svg>
  );
}

// Helper mapper to render the right SVG component according to worksheet id or letter
export function renderColoringArtwork(sheetId, letterChar, className = "w-56 h-56 sm:w-64 sm:h-64") {
  if (sheetId === 'color-alif' || letterChar === 'أ') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgLionOutline className={className} />
        <SvgBunnyOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-meem' || letterChar === 'م') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgBananaOutline className={className} />
        <SvgSailboatOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-baa' || letterChar === 'ب') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgDuckOutline className={className} />
        <SvgOrangeOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-faa' || letterChar === 'ف') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgElephantOutline className={className} />
        <SvgButterflyOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-noon' || letterChar === 'ن') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgBeeOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-haa' || letterChar === 'ح') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgWhaleOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-taa' || letterChar === 'ت') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgAppleOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-seen' || letterChar === 'س') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgFishOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-laam' || letterChar === 'ل') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgOrangeOutline className={className} />
      </div>
    );
  }
  if (sheetId === 'color-raa' || letterChar === 'ر') {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <SvgDuckOutline className={className} />
      </div>
    );
  }

  // Default fallback
  return <SvgLionOutline className={className} />;
}
