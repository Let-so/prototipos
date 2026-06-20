/* ============================================================
   AlDía — App vanilla (router + pantallas + datos mock)
   Principios: la persona es el centro · sin métricas/scores/alertas
   ============================================================ */

/* ---------------- Resolver de recursos (standalone-friendly) ---------------- */
function RES(path){
  if(!window.__resources || !path) return path;
  const stem = String(path).split('/').pop().replace(/\.[^.]+$/, '');
  return window.__resources[stem] || path;
}

/* ---------------- Íconos (estilo línea, lucide-like) ---------------- */
const I = {
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  dots: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>',
  chevron: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  close: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  history: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h12l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M8 9h6M8 13h8M8 17h5"/></svg>',
  share: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  more: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  plus: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  mic: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/></svg>',
  headphones: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4.5" height="7" rx="2"/><rect x="17" y="13" width="4.5" height="7" rx="2"/></svg>',
  locate: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none"/></svg>',
  pencil: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  pills: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="13" height="6" rx="3" transform="rotate(-45 8.5 12)"/><path d="m8.5 8.5 7 7"/></svg>',
  doc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  calendar: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  heart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/></svg>',
  camera: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L19 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  bookmark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  stop: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
  wave: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12h2l2-6 4 14 4-18 2 10h6"/></svg>',
  sparkle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
  figure: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="2"/><path d="M13 9l-3 1.5L8 16M13 9l2.5 2 3 1M13 9v5l-2.5 6M13 14l2.5 6"/></svg>',
  brain: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-5.6-1.5A2.6 2.6 0 0 0 4 6.5 2.7 2.7 0 0 0 4.5 12 2.7 2.7 0 0 0 8 15a3 3 0 0 0 4 1.5z"/><path d="M12 5a3 3 0 0 1 5.6-1.5A2.6 2.6 0 0 1 20 6.5 2.7 2.7 0 0 1 19.5 12 2.7 2.7 0 0 1 16 15a3 3 0 0 1-4 1.5z"/><path d="M12 5v14"/></svg>',
  lock: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  folder: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11v6M9 14l3 3 3-3"/></svg>',
  clock: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6z"/></svg>',
  hand: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0M14 7V4a2 2 0 0 0-4 0v2M10 6a2 2 0 0 0-4 0v8M6 14l-1.5-1.5a2 2 0 0 0-3 3L6 21h8a4 4 0 0 0 4-4v-3"/></svg>',
  download: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 4 5-4M5 21h14"/></svg>',
  trash: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M5 6l1 14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-14"/></svg>',
  bell: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  gear: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 2.6h.1A1.6 1.6 0 0 0 8.2 1.1V1a2 2 0 0 1 4 0v.1A1.6 1.6 0 0 0 15 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7h.1a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.4 1z"/></svg>',
  user: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  key: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 8-8M17 5l2 2M14 8l2 2"/></svg>',
  eye: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
  folder2: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  users: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.4 3.4 0 0 1 0 6.4M17.5 13.6a6.5 6.5 0 0 1 4 6.4"/></svg>',
  compass: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  infinity: '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M7 12c0-2 1.5-3.5 3-3.5S16 12 17 12s2.5 1.5 2.5 3.5S18 19 16.5 19 8 12 7 12s-2.5 1.5-2.5 3.5S6 19 7.5 19 17 12 17 12s1.5-3.5 3-3.5"/></svg>',

  /* ---- minimalistas para "¿Qué querés registrar?" (estilo img 4) ---- */
  regAudio: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h2.5l2-5 3 11 2.5-8 1.8 4H21"/></svg>',
  regNote: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="5"/><path d="M9 12h6"/></svg>',
  regMed: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15.5 14.5 10a3.5 3.5 0 1 0-5-5L4 10.5a3.5 3.5 0 0 0 5 5z"/><path d="m6.5 8 5 5"/></svg>',
  regFile: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z"/><path d="M13 3v6h6"/></svg>',
  regConsulta: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9a16 16 0 0 1 16 0v3a1.5 1.5 0 0 1-1.7 1.5l-2.6-.4a1.5 1.5 0 0 1-1.2-1.1l-.4-1.6a10 10 0 0 0-4.2 0l-.4 1.6a1.5 1.5 0 0 1-1.2 1.1l-2.6.4A1.5 1.5 0 0 1 4 12z"/></svg>',
  regSentir: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c2.5 0 2.5-4 5-4s2.5 4 5 4M16 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>',
  regSpark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c.4 3.4 1.6 4.6 5 5-3.4.4-4.6 1.6-5 5-.4-3.4-1.6-4.6-5-5 3.4-.4 4.6-1.6 5-5z"/></svg>',

  /* ---- navegación / mapa elegante ---- */
  navigation: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="5" fill="none"/><circle cx="12" cy="12" r="9" fill="none"/><path d="M12 3v3M21 12h-3M12 21v-3M3 12h3"/></svg>',
  mapRadar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="aldiaRing" x1="3" y1="11" x2="21" y2="11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8fb6f3"/><stop offset="0.55" stop-color="#b89ce8"/><stop offset="1" stop-color="#d9a0d8"/></linearGradient></defs><path d="M11.1 3.2 A8.2 8.2 0 0 0 8.4 18.1" stroke="url(#aldiaRing)" stroke-width="2.2" stroke-linecap="round"/><path d="M12.9 3.2 A8.2 8.2 0 0 1 15.6 18.1" stroke="url(#aldiaRing)" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="11" r="2.3" fill="#6f5fd6"/><path d="M8.6 19.4 Q12 22.4 15.4 19.4" stroke="#7eb3ff" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg>',
  sliders: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h8M17 8h2M5 16h2M11 16h8"/><circle cx="15" cy="8" r="2"/><circle cx="9" cy="16" r="2"/></svg>',

  /* ---- glifos minimalistas de servicios (smell map) ---- */
  svcCross: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v12M6 12h12"/></svg>',
  svcLeaf: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-7 5-12 14-13 0 9-5 14-13 14-.5 0-1-.3-1-1z"/><path d="M9 15c2.5-2.5 4.5-4 8-5"/></svg>',
  svcDrop: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5C8.5 8 6.5 11 6.5 14a5.5 5.5 0 0 0 11 0c0-3-2-6-5.5-10.5z"/></svg>',
  svcActivity: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2.5-6 4 13 2.5-7H21"/></svg>',
  svcMind: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c5 0 8-3.5 8-8.5S16.5 3 12 3 4 6.5 4 11"/><path d="M4 11a3 3 0 0 0 5 2.2A2.4 2.4 0 0 0 12.5 11 2 2 0 0 0 11 9.2"/></svg>',
  svcHeart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20S4 14.5 4 8.8A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 8 2.8C20 14.5 12 20 12 20z"/></svg>',

  /* ---- flujo profesional médico ---- */
  idCard: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.5 16a3 3 0 0 1 6 0M14 9.5h4M14 13h3"/></svg>',
  badge: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4 3 6.8 7 8 4-1.2 7-4 7-8V6z"/><path d="m9 11.5 2 2 4-4"/></svg>',
  stethoscope: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v5a4 4 0 0 0 8 0V3M5 3H3.5M5 3h1.5M11.5 3H13M11.5 3H10M9 12v3a5 5 0 0 0 10 0v-1"/><circle cx="19" cy="11" r="2.2"/></svg>',
  clockFine: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 1.8"/></svg>',
  alert: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 16h.01"/></svg>',
  upload: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M8 8l4-4 4 4M5 20h14"/></svg>',
  checkCircle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  heartPulse: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 7.6a4.5 4.5 0 0 0-8-2.3 4.5 4.5 0 0 0-8 2.3c0 .9.2 1.7.6 2.4H8l1.5-2.5 2 5 1.5-3h2.4M11 18.5 6 14"/></svg>',
  lungs: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v7M9 8c0 3-.3 4-2 6-1.5 1.7-3.5 1.5-3.5-1 0-3 1-6 2.5-8M15 8c0 3 .3 4 2 6 1.5 1.7 3.5 1.5 3.5-1 0-3-1-6-2.5-8"/></svg>',
};

/* ---------------- Datos mock (español, realistas) ---------------- */
const PEOPLE = [
  { id: "sofia", initials: "SL", name: "Sofía Laguarda", age: 34, last: "Hoy, 08:32", next: "28 MAY · 11:30 hs", badge: 3, color: "blue" },
  { id: "martin", initials: "MT", name: "Martín Torres", age: 41, last: "Ayer, 21:15", next: "30 MAY · 18:00 hs", badge: 1, color: "butter" },
  { id: "paula", initials: "PF", name: "Paula Fernández", age: 29, last: "26 may, 19:42", next: "2 JUN · 09:00 hs", badge: 2, color: "lilac" },
  { id: "lucia", initials: "LC", name: "Lucía Conti", age: 52, last: "24 may, 10:12", next: null, badge: 0, color: "peach" },
];

const TIMELINE = [
  { day: "HOY, 28 DE MAYO", items: [
    { time: "08:32", icon: "heart", type: "Estado emocional", text: "Gracias a la respiración pude volver a centrarme.", blob: "blue" },
    { time: "07:45", icon: "moon", type: "Sueño", text: "Dormí 7 hs 10 min.", blob: "lilac" },
  ]},
  { day: "AYER, 27 DE MAYO", items: [
    { time: "21:15", icon: "pencil", type: "Nota personal", text: "Hoy me sentí ansiosa por varias cosas, pero hablé con alguien y me ayudó.", blob: "peach" },
    { time: "19:30", icon: "wave", type: "Medicación", text: "12 min · Respiración consciente.", blob: "butter" },
  ]},
];

const AUDIOS = [
  { title: "Reflexión nocturna", dur: "02:15", date: "Hoy, 01:33" },
  { title: "Ansiedad y respiración", dur: "01:43", date: "Ayer, 22:10" },
  { title: "Nota de voz", dur: "00:51", date: "26 may, 09:20" },
];

const DOCS = [
  { icon: "doc", title: "Análisis de sangre", meta: "28 may 2024 · Laboratorio Central", color: "blue" },
  { icon: "doc", title: "Informe de consulta", meta: "26 may 2024 · Dra. Laguarda", color: "lilac" },
  { icon: "doc", title: "Receta", meta: "20 may 2024 · Dra. Laguarda", color: "butter" },
];

const MED_HISTORY = [
  { day: "MAYO 2024", items: [
    { icon: "calendar", type: "Consulta", title: "Consulta con Dra. Sofía Laguarda", date: "28 de mayo, 11:30 hs", dot: "var(--brand)" },
    { icon: "doc", type: "Estudio", title: "Resonancia magnética de columna", date: "12 de mayo", dot: "var(--butter)" },
    { icon: "pencil", type: "Nota", title: "Sobre cómo me sentí", date: "3 de mayo", dot: "var(--green)" },
  ]},
];

/* ---------------- Estado y router ---------------- */
const app = {
  screen: document.getElementById("screen"),
  tabbar: document.getElementById("tabbar"),
  overlay: document.getElementById("overlay"),
  navList: document.getElementById("navigatorList"),
  current: null,
  activeTab: "inicio",
  tutStep: 0,
};

const ROUTES = {}; // se llena más abajo

function go(route, opts = {}) {
  const fn = ROUTES[route];
  if (!fn) return;
  app.current = route;
  app.screen.scrollTop = 0;
  app.screen.innerHTML = fn(opts);
  app.screen.classList.toggle("has-tabbar", !!TAB_SCREENS[route]);
  renderTabbar(route);
  bindScreen();
  updateNavigator();
  if (route === "mapa") initMap();
}

/* Pantallas que muestran bottom nav y su tab activo */
const TAB_SCREENS = {
  home: "inicio", historia: "historia", compartido: "compartido", mas: "mas",
  panel: "inicio", configuracion: "mas", privacidad: "mas", exportar: "mas",
  historial: "mas", medicaciones: "historia", documentos: "historia",
  consultas: "historia", resumen: "historia", explorar: "explorar", mapa: "explorar",
  masOpciones: "mas", personaResumen: "inicio", personaTimeline: "inicio",
  personaAudios: "inicio", personaDocs: "inicio", personaNotas: "inicio",
  buscar: "historia", detalleDoc: "historia", detalleServicio: "compartido",
  gestionAcceso: "compartido", agendar: "historia", consultaGuardada: "historia",
  rango: "historia", resumenGenerado: "historia", seguridad: "mas",
  consentimientos: "mas", eliminarCuenta: "mas", eliminarConfirm: "mas",
  exportarConfirm: "mas", datosPersonales: "mas", cambiarPassword: "mas",
  tema: "mas", idioma: "mas", cambiarUbicacion: "compartido",
  editarEvento: "historia", nuevaNota: "inicio", notaGuardada: "inicio",
  estudios: "historia", estudioDetalle: "historia", sintomas: "historia",
  registrarSintoma: "historia", perfil: "mas", editarPerfil: "mas",
  notificaciones: "mas", apariencia: "mas", dispositivos: "mas",
  sesiones: "mas", personaConsultas: "inicio", personaMedicaciones: "inicio",
  perfilProfesional: "inicio", editarPerfilProfesional: "inicio",
  medicoMatricula: null, medicoSolicitudRecibida: null, medicoEstadoVerificacion: null,
  informeClinico: null, metricas: null,
  configuracionProfesional: "inicio", historialAccesosProfesional: "inicio",
  consentimientosRecibidos: "inicio", accesoRevocado: "inicio",
};

/* ---------------- Helpers de render ---------------- */
const blobBg = (color) => `<span class="avatar__blob blob--${color}"></span>`;

function aurora(blobs) {
  return `<div class="aurora">${blobs.map(b =>
    `<span class="blob blob--${b.c}" style="width:${b.s}px;height:${b.s}px;left:${b.x};top:${b.y}"></span>`
  ).join("")}</div>`;
}

function topbar({ left = "", title = "", right = "" }) {
  return `<header class="topbar"><div>${left}</div><div class="topbar__title">${title}</div><div>${right}</div></header>`;
}

/* ============================================================
   PANTALLAS — Onboarding (P1)
   ============================================================ */
ROUTES.welcome = () => `
  <div class="welcome welcome--art">
    <span class="welcome__sky" aria-hidden="true"></span>
    <div class="welcome__center">
      <div class="brand-logo brand-logo--official">
        <img class="brand-logo__img" src="${RES('public/aldia-logo-oficial-transparente.png')}" alt="AlDía" style="width:280px; height:auto; object-fit:contain">
      </div>
    </div>
    <div class="welcome__footer">
      <button class="wbtn wbtn--primary" data-go="role" style="height:60px; border-radius:999px; font-size:16px">
        <span class="wbtn__label">Empezar</span>
        <span class="wbtn__arrow">${I.arrow}</span>
      </button>
      <button class="wbtn wbtn--ghost" data-go="login" style="height:52px; border-radius:999px; font-size:15px">Ya tengo una cuenta</button>
    </div>
  </div>`;

ROUTES.role = () => `
  ${aurora([{c:"butter",s:200,x:"-30px",y:"40px"},{c:"lilac",s:200,x:"55%",y:"60%"}])}
  ${topbar({ left: `<button class="iconbtn" data-go="welcome" aria-label="Volver">${I.back}</button>` })}
  <div class="content">
    <h1 class="h1 mb-24">¿Cómo querés entrar?</h1>
    <button class="rolecard rolecard--peach" data-go="register">
      <span class="rolecard__top"><span class="rolecard__title">Soy paciente</span>${I.arrow}</span>
      <span class="rolecard__sub">Para guardar y organizar tu historia.</span>
    </button>
    <button class="rolecard rolecard--lilac" data-go="medicoMatricula">
      <span class="rolecard__top"><span class="rolecard__title">Soy médica</span>${I.arrow}</span>
      <span class="rolecard__sub">Para acompañar personas que compartan su historia con vos.</span>
    </button>
  </div>`;

ROUTES.register = () => `
  ${topbar({ left: `<button class="iconbtn" data-go="role" aria-label="Volver">${I.back}</button>` })}
  <div class="content">
    <h1 class="h1 mb-24">Crear cuenta</h1>
    <div class="field"><label for="r-name">Nombre</label><input class="input" id="r-name" type="text" placeholder="Tu nombre"></div>
    <div class="field"><label for="r-email">Email</label><input class="input" id="r-email" type="email" placeholder="tu@email.com"></div>
    <div class="field"><label for="r-pass">Contraseña</label>
      <div class="field__wrap"><input class="input input--icon" id="r-pass" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="r-pass" aria-label="Mostrar contraseña">${I.eye}</button></div></div>
    <div class="field"><label for="r-pass2">Confirmar contraseña</label>
      <div class="field__wrap"><input class="input input--icon" id="r-pass2" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="r-pass2" aria-label="Mostrar contraseña">${I.eye}</button></div></div>
    <button class="btn btn--primary mt-8" data-go="home">Crear cuenta</button>
    <div class="divider">o continuar con</div>
    <div class="social-row">
      <button class="social-btn" data-go="home"><span style="font-weight:700;color:#4285F4">G</span> Google</button>
      <button class="social-btn" data-go="home"><span style="font-weight:700"></span> Apple</button>
    </div>
    <p class="center mt-24 muted" style="font-size:14px">¿Ya tenés cuenta? <button class="link link--brand" data-go="login">Iniciar sesión</button></p>
  </div>`;

ROUTES.login = () => `
  ${topbar({ left: `<button class="iconbtn" data-go="welcome" aria-label="Volver">${I.back}</button>` })}
  <div class="content">
    <h1 class="h1 mb-24">Iniciar sesión</h1>
    <div class="field"><label for="l-email">Email</label><input class="input" id="l-email" type="email" placeholder="tu@email.com"></div>
    <div class="field"><label for="l-pass">Contraseña</label>
      <div class="field__wrap"><input class="input input--icon" id="l-pass" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="l-pass" aria-label="Mostrar contraseña">${I.eye}</button></div></div>
    <button class="btn btn--primary mt-8" data-go="home">Entrar</button>
    <div class="divider">o continuar con</div>
    <div class="social-row">
      <button class="social-btn" data-go="home"><span style="font-weight:700;color:#4285F4">G</span> Google</button>
      <button class="social-btn" data-go="home">Apple</button>
    </div>
    <p class="center mt-24 muted" style="font-size:14px">¿No tenés cuenta? <button class="link link--brand" data-go="register">Crear cuenta</button></p>
  </div>`;

/* ============================================================
   PANTALLAS — Paciente: Home (P2)
   ============================================================ */
ROUTES.home = () => `
  <div class="home3">
    <div class="home3__blob" aria-hidden="true"></div>
    <div class="home3__head">
      <div class="home3__greet">
        <p class="home3__hi">Hola,</p>
        <h1 class="home3__name">Martina</h1>
        <p class="home3__date">28 de mayo</p>
      </div>
      <button class="home3__avatar" data-go="mas" aria-label="Tu perfil">${I.user}</button>
    </div>

    <div class="home3__audio">
      <button class="home3__play" data-audio-open aria-label="Audio del día">${I.play}</button>
      <div class="home3__audio-line">
        <span class="home3__audio-lbl">AUDIO DEL DÍA</span>
        <span class="home3__audio-track"><i></i></span>
      </div>
    </div>

    <div class="home3__mid">
      <button class="home3__next" data-go="consultas">
        <span class="home3__kicker">PRÓXIMA CONSULTA</span>
        <span class="home3__next-row">
          <span class="home3__next-date"><b>28</b><span>MAY</span><em>11:30 hs</em></span>
          <span class="home3__next-sep"></span>
          <span class="home3__next-who"><b>Dra. Sofía Laguarda</b><span>Clínica del Faro</span></span>
        </span>
      </button>

      <div class="home3__remind">
        <span class="home3__remind-blob" aria-hidden="true"></span>
        <span class="home3__remind-bell">${I.bell}</span>
        <span class="home3__kicker">RECORDATORIO</span>
        <span class="home3__remind-title">Tomar la medicación</span>
        <span class="home3__remind-time">21:00 hs</span>
      </div>
    </div>

    <button class="home3__story" data-go="historia">
      <span class="home3__story-img" aria-hidden="true"></span>
      <span class="home3__story-sphere" aria-hidden="true"></span>
      <span class="home3__story-body">
        <span class="home3__story-title">Mi historia</span>
        <span class="home3__story-sub">Audios, documentos,<br>consultas y recuerdos.</span>
        <span class="home3__story-arrow">${I.arrow}</span>
      </span>
    </button>
  </div>`;

/* "Una vida llena de sentido": 8 etiquetas distribuidas en círculo alrededor de la esfera,
   igual a la imagen de referencia (sin flores, sin puntajes — solo palabras + esfera). */
const MEANING_POINTS = (() => {
  const labels = [
    "Cómo te sentís",
    "Energía",
    "Cuerpo",
    "Hábitos diarios",
    "Vínculos y comunicación",
    "Descanso y sueño",
    "Estado de ánimo",
    "Lo que viviste hoy",
  ];
  const rLabel = 50;   // % radio para las etiquetas de texto
  const rBump = 46;    // % radio para los "bultos" del borde tipo nube
  return labels.map((label, i) => {
    const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2; // empieza arriba
    const x = 50 + rLabel * Math.cos(angle);
    const y = 50 + rLabel * Math.sin(angle);
    const bx = 50 + rBump * Math.cos(angle);
    const by = 50 + rBump * Math.sin(angle);
    const bs = 64 + (i % 3) * 14; // tamaño variable de cada bulto, look orgánico
    return { label, x, y, bx, by, bs };
  });
})();

function eventRow({ icon, title, sub, dot, glow }) {
  return `<button class="flow-row" data-go="evento">
    <span class="flow-row__icon flow-row__icon--${glow || "blue"}">${I[icon]}</span>
    <span class="flow-row__body"><span class="flow-row__title">${title}</span><span class="flow-row__sub">${sub}</span></span>
    ${dot ? `<span class="row__dot" style="background:${dot}"></span>` : ""}
  </button>`;
}

/* ============================================================
   PANTALLAS — Paciente: Mi Historia (P3)
   ============================================================ */
ROUTES.historia = () => `
  ${topbar({ title: "Mi Historia", left:`<span style="width:40px"></span>`,
    right: `<span class="flex gap-8"><button class="iconbtn" data-go="buscar" aria-label="Buscar">${I.search}</button><button class="iconbtn" data-tut="open" aria-label="Ayuda">${I.sparkle}</button></span>` })}
  <div class="content" style="padding-top:0">
    <div class="historia-orbits">
      ${quickOrbit("Consultas","calendar","blue","consultas")}
      ${quickOrbit("Medicaciones","pills","peach","medicaciones")}
      ${quickOrbit("Estudios","doc","lilac","estudios")}
      ${quickOrbit("Síntomas","heart","butter","sintomas")}
      ${quickOrbit("Documentos","folder","blue","documentos")}
    </div>
    <div class="historia-chips mb-16">
      <button class="chip is-active">Todo</button><button class="chip">Notas</button>
      <button class="chip">Consultas</button><button class="chip">Estudios</button><button class="chip">Documentos</button>
    </div>
    ${MED_HISTORY.map(g => `
      <h2 class="section-title">${g.day}</h2>
      <div class="list-card mb-16">
        ${g.items.map(it => `<button class="row" data-go="evento" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit">
          <span class="row__icon"><span class="row__icon-bg blob--blue"></span>${I[it.icon]}</span>
          <div class="row__body"><div class="row__title">${it.title}</div><div class="row__sub">${it.type} · ${it.date}</div></div>
          <span class="row__dot" style="background:${it.dot}"></span>
        </button>`).join("")}
      </div>`).join("")}
    <div class="historia-actions">
      <button class="wbtn wbtn--celeste" data-go="metricas"><span class="wbtn__label">Ver mis métricas</span><span class="wbtn__arrow">${I.arrow}</span></button>
    </div>
  </div>`;


function quickOrbit(label, icon, color, route) {
  return `<button class="quick-orbit" data-go="${route}">
    <span class="quick-orbit__orb blob--${color}">${I[icon]}</span>
    <span class="quick-orbit__label">${label}</span>
  </button>`;
}

ROUTES.evento = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Detalle",
    right:`<button class="iconbtn" data-sheet="eventoOpts" aria-label="Más">${I.dots}</button>` })}
  <div class="content" style="padding-top:0">
    <h1 class="h2 mb-8">Consulta con Dra. Sofía Laguarda</h1>
    <p class="muted mb-16">28 de mayo, 11:30 hs · Clínica del Foro</p>
    <div class="card mb-12"><h3 class="h3 mb-8">Descripción</h3>
      <p class="lead" style="color:var(--text)">Control de seguimiento. Se conversó sobre estrategias para manejar la ansiedad en situaciones sociales.</p></div>
    <div class="card mb-12"><h3 class="h3 mb-12">Audio y transcripción</h3>
      ${audioRow({title:"Nota de la consulta", dur:"01:12", date:"28 may"})}
      <p class="lead mt-12" style="color:var(--text)">"Hablamos sobre herramientas de respiración para los momentos de ansiedad..."</p></div>
    <div class="card mb-16"><h3 class="h3 mb-8">Personas con acceso</h3>
      <div class="flex items-center gap-8 mt-8">${avatar("SL","blue")}<div><div class="row__title">Dra. Sofía Laguarda</div><div class="row__sub">Puede ver y editar</div></div></div></div>
    <div class="flex gap-8">
      <button class="btn btn--outline" data-go="editarEvento">Editar</button>
      <button class="btn btn--outline" data-go="compartido">Compartir</button>
    </div>
  </div>`;

function avatar(initials, color, lg) {
  return `<span class="avatar ${lg ? "avatar--lg" : ""}">${blobBg(color)}<span>${initials}</span></span>`;
}
function audioRow({ title, dur, date }) {
  const bars = Array.from({length:32}, () => `<span style="height:${6+Math.random()*20}px"></span>`).join("");
  return `<div class="audio-row">
    <button class="audio-play" data-audio-play="${title}" aria-label="Reproducir ${title}">${I.play}</button>
    <div class="row__body"><div class="row__title">${title}</div><div class="audio-wave" aria-hidden="true">${bars}</div></div>
    <div class="row__meta">${dur}<br>${date}</div>
  </div>`;
}

/* ============================================================
   PANTALLAS — Paciente: Medicaciones / Documentos / Consultas / Resumen (P4)
   ============================================================ */
ROUTES.medicaciones = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Medicaciones" })}
  <div class="content" style="padding-top:0">
    <div class="chips mb-16"><button class="chip is-active">Actuales</button><button class="chip">Anteriores</button></div>
    <div class="card mb-12"><div class="row__title">Sertralina 50 mg</div><div class="row__sub">1 comprimido por la mañana · Desde 10 abr 2024</div></div>
    <div class="card mb-12"><div class="row__title">Omeprazol 20 mg</div><div class="row__sub">1 comprimido en ayunas · Desde 2 may 2024</div></div>
    <div class="card mb-16"><div class="row__title">Ibuprofeno 400 mg</div><div class="row__sub">Según necesidad</div></div>
    <div class="card"><div class="row__title">Olvidos registrados</div><div class="row__sub">2 olvidos esta semana</div></div>
  </div>`;

ROUTES.documentos = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Documentos",
    right:`<button class="iconbtn" data-go="buscar" aria-label="Buscar">${I.search}</button>` })}
  <div class="content" style="padding-top:0">
    <div class="chips mb-16">
      <button class="chip is-active">Todos</button><button class="chip">Estudios</button><button class="chip">Imágenes</button>
      <button class="chip">Informes</button><button class="chip">Certificados</button><button class="chip">Otros</button>
    </div>
    <div class="list-card">
      ${docRow({title:"Análisis de sangre", meta:"12 mayo 2024 · Hospital Italiano", color:"blue"})}
      ${docRow({title:"Rx de tórax", meta:"03 mayo 2024 · Diagnóstico Maipú", color:"lilac"})}
      ${docRow({title:"Informe de consulta", meta:"28 abr 2024 · Dra. Laguarda", color:"butter"})}
      ${docRow({title:"Receta", meta:"20 abr 2024 · Dra. Laguarda", color:"peach"})}
    </div>
  </div>`;

function docRow({ title, meta, color }) {
  return `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="detalleDoc" data-doc-title="${title}" data-doc-meta="${meta}">
    <span class="row__icon"><span class="row__icon-bg blob--${color}"></span>${I.doc}</span>
    <div class="row__body"><div class="row__title">${title}</div><div class="row__sub">${meta}</div></div>
    ${I.chevron}
  </button>`;
}

/* ============================================================
   PANTALLAS — Estudios (faltaban de la lista de 100: #18-19)
   ============================================================ */
const STUDIES = [
  { title: "Resonancia magnética de columna", type: "Imágenes", date: "12 de mayo de 2024", place: "Diagnóstico Maipú", color: "lilac" },
  { title: "Análisis de sangre completo", type: "Laboratorio", date: "28 de mayo de 2024", place: "Hospital Italiano", color: "blue" },
  { title: "Radiografía de tórax", type: "Imágenes", date: "03 de mayo de 2024", place: "Diagnóstico Maipú", color: "butter" },
];

ROUTES.estudios = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Estudios",
    right:`<button class="iconbtn" data-sheet="register" aria-label="Agregar">${I.plus}</button>` })}
  <div class="content" style="padding-top:0">
    <div class="chips mb-16"><button class="chip is-active">Todos</button><button class="chip">Laboratorio</button><button class="chip">Imágenes</button><button class="chip">Otros</button></div>
    <div class="flow-list">
      ${STUDIES.map(s => `
        <button class="flow-row" data-go="estudioDetalle" data-study-title="${s.title}" data-study-type="${s.type}" data-study-date="${s.date}" data-study-place="${s.place}">
          <span class="flow-row__icon flow-row__icon--${s.color === "blue" ? "blue" : (s.color === "lilac" ? "lilac" : "green")}">${I.doc}</span>
          <span class="flow-row__body"><span class="flow-row__title">${s.title}</span><span class="flow-row__sub">${s.type} · ${s.date}</span></span>
        </button>`).join("")}
    </div>
  </div>`;

ROUTES.estudioDetalle = () => {
  const title = app._studyTitle || STUDIES[0].title;
  const type = app._studyType || STUDIES[0].type;
  const date = app._studyDate || STUDIES[0].date;
  const place = app._studyPlace || STUDIES[0].place;
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="estudios" aria-label="Volver">${I.back}</button>`, title:"Estudio",
    right:`<button class="iconbtn" data-sheet="docOpts" aria-label="Más">${I.dots}</button>` })}
  <div class="halo-screen">
    <div class="halo halo--lilac">${I.doc}</div>
    <h1 class="h2 mb-4">${title}</h1>
    <p class="lead mb-0">${type} · ${date}</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Lugar</div>
      <p class="lead" style="color:var(--text)">${place}</p>
    </div>
    <div class="card mb-16">
      <div class="row__title mb-8">Archivos</div>
      <p class="lead" style="color:var(--text)">1 archivo adjunto · PDF</p>
    </div>
    <div class="flex gap-8">
      <button class="btn btn--primary" data-go="compartido">Compartir</button>
      <button class="btn btn--outline" data-sheet="docOpts">Opciones</button>
    </div>
  </div>`;
};

/* ============================================================
   PANTALLAS — Síntomas (faltaban de la lista de 100: #24-25)
   ============================================================ */
const SYMPTOMS = [
  { day: "HOY, 28 DE MAYO", items: [
    { title: "Dolor de cabeza", intensity: "Leve", time: "09:15", color: "butter" },
  ]},
  { day: "AYER, 27 DE MAYO", items: [
    { title: "Ansiedad", intensity: "Moderada", time: "21:00", color: "peach" },
    { title: "Insomnio", intensity: "Leve", time: "23:30", color: "lilac" },
  ]},
];

ROUTES.sintomas = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Síntomas",
    right:`<button class="iconbtn" data-go="registrarSintoma" aria-label="Registrar">${I.plus}</button>` })}
  <div class="content" style="padding-top:0">
    <p class="lead mb-16">Registrá cómo te sentís físicamente. Esto queda en tu historia, solo vos decidís compartirlo.</p>
    <div class="timeline">
      ${SYMPTOMS.map(g => `
        <div class="tl-day">${g.day}</div>
        ${g.items.map((it,idx,arr) => `
          <div class="tl-item">
            <div class="tl-rail">
              <span class="tl-time">${it.time}</span>
              <span class="tl-node">${I.heart}</span>
              ${idx < arr.length-1 ? `<span class="tl-line"></span>` : ""}
            </div>
            <div class="tl-card">
              <span class="tl-card__blob blob--${it.color}"></span>
              <div class="tl-card__type">${it.title}</div>
              <div class="tl-card__text">Intensidad: ${it.intensity}</div>
            </div>
          </div>`).join("")}
      `).join("")}
    </div>
  </div>`;

ROUTES.registrarSintoma = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="sintomas" aria-label="Volver">${I.back}</button>`, title:"Registrar síntoma" })}
  <div class="content" style="padding-top:0">
    <div class="halo-screen" style="padding-bottom:0"><div class="halo halo--peach">${I.heart}</div></div>
    <div class="field"><label>¿Qué síntoma sentís?</label><input class="input" placeholder="Ej: Dolor de cabeza"></div>
    <h2 class="section-title mb-8">Intensidad</h2>
    <div class="chips mb-16">
      <button class="chip is-active">Leve</button><button class="chip">Moderada</button><button class="chip">Intensa</button>
    </div>
    <div class="field"><label>Notas adicionales</label><textarea class="input" rows="3" placeholder="Algo más que quieras agregar..." style="resize:none;font-family:inherit"></textarea></div>
    <button class="btn btn--primary mt-8" data-go="sintomas">Guardar síntoma</button>
  </div>`;

ROUTES.consultas = () => {
  const week = [
    { dow: "Lun", n: 26 }, { dow: "Mar", n: 27 }, { dow: "Mié", n: 28, sel: true },
    { dow: "Jue", n: 29 }, { dow: "Vie", n: 30 }, { dow: "Sáb", n: 31 }, { dow: "Dom", n: 1 },
  ];
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Calendario",
    right:`<button class="iconbtn" data-go="agendar" aria-label="Agendar">${I.plus}</button>` })}
  <div class="content" style="padding-top:0">
    <div class="cal2">
      <span class="cal2__halo" aria-hidden="true"></span>
      <div class="cal2__toggle">
        <button class="cal2__seg is-active">Semanal</button>
        <button class="cal2__seg">Mensual</button>
        <button class="cal2__gear" aria-label="Ajustes">${I.sliders}</button>
      </div>
      <div class="cal2__title"><span class="cal2__month">Mayo</span><span class="cal2__big">28</span></div>
      <div class="cal2__week">
        ${week.map(d => `<div class="cal2__day ${d.sel ? "is-sel" : ""}"><span class="cal2__dow">${d.dow}</span><span class="cal2__num">${d.n}</span></div>`).join("")}
      </div>
      <div class="cal2__foot">
        <span class="cal2__note">${I.pencil}<span>Agregar una nota…</span></span>
        <button class="cal2__new" data-go="agendar">${I.plus} Nuevo evento</button>
      </div>
    </div>

    <h2 class="section-title mt-24 mb-12">Ese día</h2>
    <button class="day-event" data-go="evento">
      <span class="day-event__date"><b>11:30</b><small>hs</small></span>
      <span class="day-event__body">
        <span class="day-event__title">Dra. Sofía Laguarda</span>
        <span class="day-event__sub">Clínica del Foro · Consulta de control</span>
      </span>
      <span class="day-event__arrow">${I.arrow}</span>
    </button>
  </div>`;
};

function calDays() {
  let out = "";
  for (let d = 1; d <= 31; d++) {
    let cls = "cal__day";
    if (d === 28) cls += " is-selected";
    else if ([12, 30].includes(d)) cls += " is-mark";
    out += `<span class="${cls}">${d}</span>`;
  }
  return out;
}

ROUTES.resumen = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Resumen para consulta" })}
  <div class="content" style="padding-top:0">
    <div class="field"><label>Rango</label>
      <button class="setting-row" style="width:100%;background:rgba(255,255,255,0.55);backdrop-filter:blur(6px);border-radius:18px;box-shadow:var(--glass-glow);border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="rango"><span class="setting-row__label">Últimos 30 días</span>${I.chevron}</button></div>
    <h2 class="section-title mt-16">Incluir</h2>
    <div class="list-card mb-16">
      ${checkRow("Medicaciones", true)}${checkRow("Estudios", true)}${checkRow("Consultas", true)}
      ${checkRow("Audios y notas", true)}${checkRow("Síntomas mencionados", false)}${checkRow("Preguntas pendientes", true)}
    </div>
    <button class="btn btn--primary" data-go="resumenGenerado">Generar resumen</button>
    <p class="disclaimer">Este resumen organiza información registrada por el usuario y no constituye diagnóstico ni recomendación médica.</p>
  </div>`;

function checkRow(label, checked) {
  return `<div class="check-row">
    <button class="check-box ${checked ? "is-checked" : ""}" data-check role="checkbox" aria-checked="${checked}" aria-label="${label}">${checked ? I.check : ""}</button>
    <span class="check-label">${label}</span>
  </div>`;
}

/* ============================================================
   PANTALLAS — Paciente: Compartido / Explorar (P5)
   ============================================================ */
ROUTES.compartido = () => `
  ${topbar({ title:"Compartido", left:`<span style="width:40px"></span>`,
    right:`<button class="iconbtn" data-sheet="invite" aria-label="Invitar">${I.plus}</button>` })}
  <div class="content" style="padding-top:0">
    <div class="chips mb-16"><button class="chip is-active">Personas</button><button class="chip">Profesionales</button></div>
    <div class="list-card mb-16">
      ${permRow("SL","Dra. Sofía Laguarda","blue","Puede ver y editar")}
      ${permRow("RT","Dr. Ramiro Torres","butter","Puede ver")}
      ${permRow("PF","Paula Fernández","lilac","Puede ver")}
    </div>
    <button class="btn btn--outline" data-go="explorar">Explorar servicios cerca tuyo ${I.arrow}</button>
  </div>`;

function permRow(initials, name, color, perm) {
  return `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="gestionAcceso" data-perm-name="${name}">
    ${avatar(initials, color)}
    <div class="row__body"><div class="row__title">${name}</div></div>
    <span class="perm">${perm}</span>
  </button>`;
}

const SERVICES = [
  { id: "farmacia",  name: "Farmacia del Faro",          cat: "Farmacia",        detail: "Envíos a domicilio",   perk: "15% OFF",  dist: "700 m",  img: "images/farmacia.png",       icon: "svcCross",   color: "blue",   x: 27, y: 22, size: 62 },
  { id: "nutricion", name: "NutriBien",                  cat: "Nutrición",       detail: "Alimentación especial", perk: "1ª bonificada", dist: "1.3 km", img: "images/nutricion.png",  icon: "svcLeaf",   color: "peach",  x: 73, y: 17, size: 54 },
  { id: "lab",       name: "Laboratorio Central",        cat: "Laboratorio",     detail: "Análisis a domicilio",  perk: "Resultados online", dist: "900 m", img: "images/laboratorio.png", icon: "svcDrop", color: "lilac",  x: 79, y: 56, size: 60 },
  { id: "rehab",     name: "Rehabilitación Norte",       cat: "Kinesiología",    detail: "Sesiones disponibles",  perk: "",         dist: "2.1 km", img: "images/rehabilitacion.png", icon: "svcActivity", color: "teal",  x: 23, y: 58, size: 60 },
  { id: "psico",     name: "Apoyo Psicológico",          cat: "Psicología",      detail: "Sesiones online",       perk: "",         dist: "Online", img: "images/psicologia.png",  icon: "svcMind",    color: "butter", x: 55, y: 78, size: 56 },
  { id: "cuidado",   name: "Cuidado en Casa",            cat: "Cuidados",        detail: "Acompañamiento a domicilio", perk: "",     dist: "1.6 km", img: "images/cuidado.png",     icon: "svcHeart",    color: "peach",  x: 50, y: 42, size: 56 },
];

ROUTES.explorar = () => `
  ${topbar({ left:`<span style="width:40px"></span>`, title:"Explorar",
    right:`<button class="iconbtn" data-go="buscar" aria-label="Buscar">${I.search}</button>` })}
  <div class="content" style="padding-top:0">
    <div class="exp-search">${I.search}<input class="exp-search__input" placeholder="Buscar un punto de cuidado" readonly data-go="buscar"></div>
    <p class="section-title" style="margin:8px 0 2px">Servicios cerca tuyo</p>
    <h1 class="h1" style="margin-bottom:16px;letter-spacing:-0.03em">Elegí un punto de cuidado</h1>

    <div class="smellmap">
      <span class="smellmap__streets" aria-hidden="true"></span>
      ${SERVICES.map((s,i) => `
        <button class="smell-orb smell-orb--${s.color}" style="left:${s.x}%;top:${s.y}%;--delay:${(i*1.6).toFixed(1)}s"
          data-svc-name="${s.name}" data-svc-detail="${s.detail}" data-svc-perk="${s.perk}">
          <span class="smell-orb__halo" style="width:${Math.round(s.size*2.6)}px;height:${Math.round(s.size*2.6)}px"></span>
          <span class="smell-orb__chip">${I[s.icon]}</span>
          <span class="smell-orb__lbl"><b>${s.cat}</b><i>${s.dist}</i></span>
        </button>`).join("")}
    </div>

    <button class="exp-mapbtn" data-go="mapa">
      <span class="exp-mapbtn__pin">${I.mapRadar}</span>
      <span class="exp-mapbtn__body"><b>Ver el mapa completo</b><small>Tu ecosistema de cuidados cerca tuyo</small></span>
      ${I.arrow}
    </button>

    <div class="exp-sec-head mt-24"><h2 class="section-title" style="margin:0">Descubrí productos y servicios</h2><button class="link link--brand" data-go="buscar">Ver todo</button></div>
    <div class="exp-prods">
      ${[
        {img:"images/cuidado.png",  off:"20% OFF", name:"Cuidado facial",  svc:SERVICES[5]},
        {img:"images/nutricion.png",off:"15% OFF", name:"Suplementos",     svc:SERVICES[1]},
        {img:"images/farmacia.png", off:"10% OFF", name:"Aromaterapia",    svc:SERVICES[0]},
      ].map(p => `
        <button class="exp-prod" data-svc-name="${p.svc.name}" data-svc-detail="${p.svc.detail}" data-svc-perk="${p.off}">
          <span class="exp-prod__img" style="background-image:url('${RES(p.img)}')"></span>
          <span class="exp-prod__foot"><b class="exp-prod__off">${p.off}</b><span class="exp-prod__name">${p.name}</span></span>
        </button>`).join("")}
    </div>

    <div class="exp-sec-head mt-24"><h2 class="section-title" style="margin:0">Promos destacadas</h2><button class="link link--brand" data-go="buscar">Ver todo</button></div>
    <button class="exp-promo" data-svc-name="${SERVICES[3].name}" data-svc-detail="${SERVICES[3].detail}" data-svc-perk="15% OFF">
      <span class="exp-promo__img" style="background-image:url('${RES(SERVICES[3].img)}')"></span>
      <span class="exp-promo__shade"></span>
      <span class="exp-promo__foot"><b>Sesiones de Kinesiología</b><span>15% OFF · ${SERVICES[3].dist}</span></span>
      <span class="exp-promo__arrow">${I.chevron}</span>
    </button>
  </div>`;

/* ============================================================
   PANTALLA — Mapa real (MapLibre GL + OpenStreetMap)
   Estética AlDía: papel crema, calles suaves, servicios como halos
   ============================================================ */
ROUTES.mapa = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="explorar" aria-label="Volver">${I.back}</button>`, title:"Mapa",
    right:`<button class="iconbtn" id="mapLocate" aria-label="Mi ubicación">${I.mapRadar}</button>` })}
  <div class="map-wrap">
    <div id="aldia-map" class="map-canvas"></div>
    <div class="map-fade"></div>
    <div class="map-loc" id="mapLoc">
      <span class="map-loc__dot"></span>
      <span class="map-loc__txt" id="mapLocTxt">Buscando tu ubicación…</span>
      <button class="map-loc__btn" id="mapLocBtn">Elegir ciudad</button>
    </div>
  </div>`;

/* ============================================================
   PANTALLAS — Más (P7)
   ============================================================ */
ROUTES.mas = () => `
  ${aurora([{c:"blue",s:200,x:"-30px",y:"140px"},{c:"butter",s:150,x:"55%",y:"60px"},{c:"lilac",s:160,x:"30%",y:"50%"}])}
  <div class="content">
    <h1 class="h1">Más</h1>
    <div class="flex items-center justify-between mt-20 mb-8">
      <div><h2 class="h2">Hola, Martina</h2><p class="lead">Tu bienestar, tu información, tu decisión.</p></div>
      <button data-go="perfil" style="background:none;border:none;cursor:pointer;padding:0">${avatar("M","blue","lg")}</button>
    </div>
    <button class="btn btn--outline mt-16" data-go="masOpciones">Ver opciones ${I.arrow}</button>
  </div>`;

ROUTES.masOpciones = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="mas" aria-label="Volver">${I.back}</button>`, title:"Configuración" })}
  <div class="content" style="padding-top:0">
    <div class="opt-list mb-16">
      ${optCard("Configuración","gear","blue","configuracion")}
      ${optCard("Privacidad","lock","lilac","privacidad")}
      ${optCard("Seguridad","shield","teal","seguridad")}
      ${optCard("Consentimientos","hand","peach","consentimientos")}
      ${optCard("Exportar datos","download","blue","exportar")}
      ${optCard("Historial de accesos","clock","lilac","historial")}
    </div>
    <button class="opt-row opt-row--danger" data-go="eliminarCuenta">
      <span class="opt-row__icon">${I.trash}</span>
      <span class="opt-row__label">Eliminar cuenta</span>
      <span class="opt-row__chev">${I.chevron}</span>
    </button>
  </div>`;

function optCard(label, icon, color, route, toast) {
  return `<button class="opt-row" ${route ? `data-go="${route}"` : ""} ${toast ? `data-toast="${toast}"` : ""}>
    <span class="opt-row__icon opt-row__icon--${color}">${I[icon]}</span>
    <span class="opt-row__label">${label}</span>
    <span class="opt-row__chev">${I.chevron}</span>
  </button>`;
}

ROUTES.configuracion = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Configuración" })}
  <div class="content" style="padding-top:0">
    <div class="setting-group"><h2 class="section-title">Cuenta</h2>
      <div class="setting-list">
        ${settingRow({icon:"user", label:"Datos personales", chevron:true, go:"datosPersonales"})}
        ${settingRow({icon:"key", label:"Cambiar contraseña", chevron:true, go:"cambiarPassword"})}
      </div></div>
    <div class="setting-group"><h2 class="section-title">Preferencias</h2>
      <div class="setting-list">
        ${settingRow({icon:"bell", label:"Notificaciones", chevron:true, go:"notificaciones"})}
        ${settingRow({icon:"moon", label:"Apariencia", value:"Claro", chevron:true, go:"apariencia"})}
        ${settingRow({icon:"share", label:"Idioma", value:"Español", chevron:true, go:"idioma"})}
      </div></div>
  </div>`;

/* Notificaciones (#49 de la lista de 100) */
ROUTES.notificaciones = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracion" aria-label="Volver">${I.back}</button>`, title:"Notificaciones" })}
  <div class="content" style="padding-top:0">
    <div class="setting-group"><h2 class="section-title">Tu historia</h2>
      <div class="setting-list">
        ${settingRow({icon:"bell", label:"Recordatorios", toggle:true, on:true})}
        ${settingRow({icon:"calendar", label:"Próximas consultas", toggle:true, on:true})}
        ${settingRow({icon:"pills", label:"Medicaciones", toggle:true, on:true})}
      </div></div>
    <div class="setting-group"><h2 class="section-title">Compartido</h2>
      <div class="setting-list">
        ${settingRow({icon:"share", label:"Cuando alguien accede a tu historia", toggle:true, on:true})}
        ${settingRow({icon:"sparkle", label:"Novedades y consejos", toggle:true, on:true})}
        ${settingRow({icon:"doc", label:"Emails", toggle:true, on:false})}
      </div></div>
  </div>`;

/* Apariencia (#51 de la lista de 100) */
ROUTES.apariencia = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracion" aria-label="Volver">${I.back}</button>`, title:"Apariencia" })}
  <div class="content" style="padding-top:0">
    <p class="lead mb-16">Elegí cómo se siente AlDía para vos.</p>
    <div class="list-card mb-24">
      ${["Claro","Oscuro","Automático"].map((opt,i) =>
        `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-toast="Apariencia: ${opt}">
          <span class="row__body"><span class="row__title">${opt}</span></span>
          ${i===0 ? `<span class="check-box is-checked" style="width:24px;height:24px">${I.check}</span>` : ""}
        </button>`).join("")}
    </div>
  </div>`;

function settingRow({ icon, label, value, chevron, toggle, on, toast, go }) {
  let right = "";
  if (toggle) right = `<label class="switch"><input type="checkbox" ${on ? "checked" : ""}><span class="switch__track"></span></label>`;
  else if (value) right = `<span class="setting-row__value">${value}</span>${chevron ? `<span class="chevron">${I.chevron}</span>` : ""}`;
  else if (chevron) right = `<span class="chevron">${I.chevron}</span>`;
  const tag = toggle ? "div" : "button";
  const handler = go ? `data-go="${go}"` : (toast ? `data-toast="${toast}"` : "");
  return `<${tag} class="setting-row" ${toggle ? "" : `${handler} style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit"`}><span class="setting-row__icon">${I[icon]}</span><span class="setting-row__label">${label}</span>${right}</${tag}>`;
}

/* ============================================================
   PANTALLAS — Privacidad / Exportar / Historial (P8)
   ============================================================ */
ROUTES.privacidad = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Privacidad" })}
  <div class="halo-screen">
    <div class="halo halo--lilac">${I.lock}</div>
    <h1 class="h2 mb-8">Tu información es tuya.</h1>
    <p class="lead mb-24">Controlá quién puede ver tu historia y cómo se utiliza tu información.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="setting-list">
      ${settingRow({icon:"user", label:"Quién puede ver mi historia", chevron:true, go:"compartido"})}
      ${settingRow({icon:"share", label:"Información compartida", chevron:true, go:"compartido"})}
      ${settingRow({icon:"shield", label:"Permisos de dispositivos", chevron:true, go:"seguridad"})}
    </div>
  </div>`;

ROUTES.exportar = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Exportar mis datos" })}
  <div class="halo-screen">
    <div class="halo halo--butter">${I.folder}</div>
    <h1 class="h2 mb-8">Llevá tu información con vos.</h1>
    <p class="lead mb-24">Podés descargar una copia de tus datos en cualquier momento.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12"><div class="row__title">Qué incluye</div><div class="row__sub">Historias, notas, audios, documentos y más.</div></div>
    <div class="card mb-24"><div class="row__title">Formato</div><div class="row__sub">Archivo ZIP.</div></div>
    <button class="btn btn--primary" data-go="exportarConfirm">Solicitar exportación</button>
  </div>`;

ROUTES.historial = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Historial de accesos" })}
  <div class="halo-screen">
    <div class="halo halo--blue">${I.clock}</div>
    <h1 class="h2 mb-8">Actividad reciente.</h1>
    <p class="lead mb-24">Consultá los accesos a tu cuenta y los dispositivos utilizados.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="list-card">
      ${accessRow("Hoy, 08:32","iPhone 14 Pro · Buenos Aires, Argentina", true)}
      ${accessRow("Ayer, 21:15","Web · Chrome · Buenos Aires, Argentina")}
      ${accessRow("26 may, 18:40","iPad Air · Buenos Aires, Argentina")}
    </div>
  </div>`;

function accessRow(time, device, current) {
  return `<div class="row">
    <div class="row__body"><div class="row__title">${time}</div><div class="row__sub">${device}</div></div>
    ${current ? `<span class="perm">Actual</span>` : ""}
  </div>`;
}

/* ============================================================
   PANTALLAS — Informe clínico (datos) + Métricas inteligentes
   Accesibles desde paciente (preparar/compartir) y profesional (ver)
   ============================================================ */
ROUTES.informeClinico = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="${app._fromPro ? "personaResumen" : "resumen"}" aria-label="Volver">${I.back}</button>`, title:"Informe clínico" })}
  <div class="content content--report" style="padding-top:0">
    <div class="report-hero">
      <div class="report-hero__txt">
        <h1 class="report-title">Informe<br>preparado</h1>
        <p class="report-sub">Últimos 30 días · listo para compartir con tu médica.</p>
      </div>
      <button class="report-share" data-go="compartido">Compartir</button>
    </div>
    <div class="report-grid">
      ${[
        ["Medicaciones","Sertralina 50 mg · 1 comprimido por la mañana. Sin olvidos registrados esta semana."],
        ["Consultas","1 consulta registrada · 28 de mayo con Dra. Sofía Laguarda."],
        ["Notas y estado emocional","3 notas de estado emocional · 2 notas personales · 1 audio de reflexión."],
        ["Estudios","Análisis de sangre (12 may) · Rx de tórax (3 may)."],
      ].map(([t,b]) => `<div class="report-card"><span class="report-card__kicker">${t}</span><p class="report-card__body">${b}</p></div>`).join("")}
    </div>
    <button class="wbtn wbtn--celeste mt-8" data-go="metricas"><span class="wbtn__label">Ver métricas inteligentes</span><span class="wbtn__arrow">${I.arrow}</span></button>
  </div>`;

ROUTES.metricas = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="${app._fromPro ? "informeClinico" : "historia"}" aria-label="Volver">${I.back}</button>`, title:"Métricas" })}
  <div class="content content--report" style="padding-top:0">
    <div class="report-hero">
      <div class="report-hero__txt">
        <h1 class="report-title">Mis métricas</h1>
        <p class="report-sub">${app._fromPro ? "Evaluación continua basada en registros reales y biométricos." : "Tu progreso y bienestar medidos en datos."}</p>
      </div>
      ${app._fromPro ? `<button class="report-prep" data-go="informeClinico">Preparar informe</button>` : ``}
    </div>

    <div class="metric-grid">
      <div class="metric-card metric-card--wide">
        <span class="metric-card__kicker">${I.heartPulse} Análisis cardíaco</span>
        <span class="metric-band metric-band--cardiac"></span>
        <span class="metric-stats"><i><b>72 bpm</b>FC</i><i><b>120/80</b>PA</i><i><b>Normal</b>Reposo</i></span>
      </div>
      <div class="metric-card metric-card--wide">
        <span class="metric-card__kicker">${I.lungs} Análisis respiratorio</span>
        <span class="metric-band metric-band--resp"></span>
        <span class="metric-stats"><i><b>98%</b>SpO₂</i><i><b>4.5 L/min</b>Flujo</i><i><b>Estable</b>Ritmo</i></span>
      </div>

      <div class="metric-card metric-card--dark">
        <span class="metric-card__kicker metric-card__kicker--light">Biomarcadores</span>
        <span class="metric-bio"><b>45<small> pg/ml</small></b><i>NFL</i></span>
        <span class="metric-bio"><b>62<small> pg/ml</small></b><i>UCH-L1</i></span>
      </div>
      <div class="metric-card metric-card--ring">
        <span class="metric-card__kicker">Calidad de sueño</span>
        <span class="metric-ring" style="--p:87"><b>87%</b></span>
        <small class="metric-ring__cap">7h 12m · descanso profundo</small>
      </div>

      <div class="metric-card metric-card--wide">
        <span class="metric-card__kicker">Biomarcadores de voz</span>
        <span class="metric-voicebars" aria-hidden="true">${Array.from({length:28},(_,k)=>`<span style="height:${30+((k*13)%60)}%"></span>`).join("")}</span>
        <small class="metric-foot">LDP 0.8s · VT 5% · TF 1.2s</small>
      </div>

      <div class="metric-card metric-card--mini">
        <span class="metric-card__kicker">Promedio diario</span>
        <b class="metric-mini__num">8.6</b><small class="metric-foot">registros / día</small>
      </div>
      <div class="metric-card metric-card--mini">
        <span class="metric-card__kicker">Bioquímicos</span>
        <b class="metric-mini__num">Estable</b><small class="metric-foot">12 valores en rango</small>
      </div>
      <div class="metric-card metric-card--mini">
        <span class="metric-card__kicker">Evaluación predictiva</span>
        <b class="metric-mini__num">Bajo riesgo</b><small class="metric-foot">tendencia favorable</small>
      </div>
    </div>
  </div>`;

/* ============================================================
   PANTALLAS — Profesional: Acceso / verificación (rediseño)
   ============================================================ */
function docField(label, attrs, icon) {
  return `<label class="dfield">
    <span class="dfield__label">${label}</span>
    <span class="dfield__wrap">${icon ? `<span class="dfield__icon">${I[icon]}</span>` : ""}<input class="dfield__input ${icon ? "dfield__input--icon" : ""}" ${attrs}></span>
  </label>`;
}

ROUTES.medicoMatricula = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="role" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="content content--pro doctor-flow" style="padding-top:0">
    <div class="doctor-progress">
      ${["Identidad","Matrícula","Especialidad","Verificación"].map((s,i)=>`
        <span class="dprog ${i===0?"is-active":""}"><span class="dprog__dot"></span><span class="dprog__lbl">${s}</span></span>
        ${i<3?`<span class="dprog__bar"></span>`:""}`).join("")}
    </div>

    <div class="doctor-head">
      <h1 class="pro-title pro-title--sm">Acceso profesional</h1>
      <p class="pro-sub">Validamos tus datos para que las personas sepan con quién comparten su historia.</p>
    </div>

    <section class="doctor-step">
      <div class="doctor-step__header"><span class="doctor-step__ico">${I.idCard}</span><h2 class="doctor-step__title">Tus datos</h2></div>
      <div class="doctor-form-grid">
        ${docField("Nombre", 'type="text" placeholder="Tu nombre"')}
        ${docField("Apellido", 'type="text" placeholder="Tu apellido"')}
        ${docField("Email profesional", 'type="email" placeholder="nombre@institucion.com"', "user")}
        ${docField("Contraseña", 'type="password" placeholder="••••••••"', "lock")}
        ${docField("Confirmar contraseña", 'type="password" placeholder="••••••••"', "lock")}
      </div>
    </section>

    <section class="doctor-step">
      <div class="doctor-step__header"><span class="doctor-step__ico">${I.badge}</span><h2 class="doctor-step__title">Matrícula profesional</h2></div>
      <div class="seg-control" data-seg-group="matricula">
        <button class="seg is-active" data-seg="nacional">Nacional</button>
        <button class="seg" data-seg="provincial">Provincial</button>
      </div>
      <p class="doctor-help" id="matriculaHelp">${I.alert}<span>Se validará contra fuentes nacionales disponibles.</span></p>
      <div class="doctor-form-grid">
        ${docField("Número de matrícula", 'type="text" placeholder="Ej. 123456"')}
        ${docField("Provincia / jurisdicción", 'type="text" placeholder="Buenos Aires"')}
        ${docField("Colegio o entidad emisora · opcional", 'type="text" placeholder="Colegio médico"')}
      </div>
    </section>

    <section class="doctor-step">
      <div class="doctor-step__header"><span class="doctor-step__ico">${I.stethoscope}</span><h2 class="doctor-step__title">Información profesional</h2></div>
      <div class="doctor-form-grid">
        ${docField("Especialidad declarada", 'type="text" placeholder="Ej. Clínica médica"')}
        ${docField("Institución donde trabajás · opcional", 'type="text" placeholder="Clínica o sanatorio"')}
        ${docField("Ciudad · opcional", 'type="text" placeholder="Ciudad"')}
      </div>
    </section>

    <section class="doctor-step">
      <div class="doctor-step__header"><span class="doctor-step__ico">${I.regFile}</span><h2 class="doctor-step__title">Documentación opcional</h2></div>
      <button class="doctor-upload" type="button">
        <span class="doctor-upload__icon">${I.upload}</span>
        <span class="doctor-upload__body"><b>Subir documentación</b><small>Credencial, constancia de matrícula o documento profesional</small></span>
      </button>
    </section>

    <section class="doctor-step">
      <div class="doctor-step__header"><span class="doctor-step__ico">${I.shield}</span><h2 class="doctor-step__title">Estado de revisión</h2></div>
      ${statusCard("pendiente")}
    </section>

    <div class="doctor-actions">
      <button class="wbtn wbtn--celeste" data-go="medicoSolicitudRecibida"><span class="wbtn__label">Enviar solicitud</span><span class="wbtn__arrow">${I.arrow}</span></button>
      <button class="wbtn wbtn--ghost" data-go="welcome">Guardar y continuar después</button>
    </div>
  </div>`;

/* Tarjeta de estado de verificación reutilizable */
function statusCard(state) {
  const map = {
    pendiente:  { icon:"clockFine",  cls:"is-pending", title:"Estamos revisando tus datos.",            text:"Te avisaremos cuando tu perfil profesional esté validado." },
    revision:   { icon:"shield",     cls:"is-review",  title:"En revisión manual.",                      text:"Puede demorar hasta 48 horas hábiles." },
    aprobado:   { icon:"checkCircle", cls:"is-approved", title:"Tu perfil profesional está verificado.",  text:"Ya podés recibir historias compartidas por personas." },
    rechazado:  { icon:"alert",      cls:"is-rejected", title:"No pudimos validar la información.",        text:"Podés corregir tus datos y volver a enviar la solicitud." },
  };
  const s = map[state] || map.pendiente;
  return `<div class="doctor-status-card ${s.cls}">
    <span class="doctor-status-card__halo" aria-hidden="true"></span>
    <span class="doctor-status-card__icon">${I[s.icon]}</span>
    <span class="doctor-status-card__body"><b>${s.title}</b><small>${s.text}</small></span>
  </div>`;
}

ROUTES.medicoSolicitudRecibida = () => `
  ${topbar({ left:`<span style="width:40px"></span>`, title:"" })}
  <div class="content content--pro" style="padding-top:0">
    <div class="doctor-done">
      <span class="doctor-done__halo" aria-hidden="true"></span>
      <span class="doctor-done__icon">${I.checkCircle}</span>
      <h1 class="pro-title pro-title--sm">Solicitud recibida</h1>
      <p class="pro-sub">Estamos revisando tus datos profesionales. Cuando tu perfil esté validado, vas a poder recibir historias compartidas por personas.</p>
    </div>
    ${statusCard("revision")}
    <div class="doctor-actions">
      <button class="wbtn wbtn--celeste" data-go="medicoEstadoVerificacion"><span class="wbtn__label">Ver estado</span><span class="wbtn__arrow">${I.arrow}</span></button>
      <button class="wbtn wbtn--ghost" data-go="welcome">Ir al inicio</button>
    </div>
  </div>`;

ROUTES.medicoEstadoVerificacion = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="panel" aria-label="Volver">${I.back}</button>`, title:"Estado de solicitud" })}
  <div class="content content--pro" style="padding-top:0">
    <div class="doctor-head"><h1 class="pro-title pro-title--sm">Tu verificación</h1>
      <p class="pro-sub">Seguimos validando tu identidad profesional. Vas a poder recibir historias cuando esté aprobada.</p></div>
    <div class="doctor-timeline">
      ${[["aprobado","Datos recibidos","Hoy, 09:14"],["revision","En revisión manual","En curso"],["pendiente","Perfil verificado","Pendiente"]].map(([st,lbl,when],i,arr)=>`
        <div class="dtl ${st==="pendiente"&&i===arr.length-1?"is-upcoming":""}">
          <span class="dtl__node ${st}">${st==="aprobado"?I.check:(st==="revision"?I.clockFine:I.lock)}</span>
          ${i<arr.length-1?`<span class="dtl__line"></span>`:""}
          <span class="dtl__body"><b>${lbl}</b><small>${when}</small></span>
        </div>`).join("")}
    </div>
    ${statusCard("revision")}
    <div class="doctor-actions">
      <button class="wbtn wbtn--ghost" data-demo-verify="1">Explorar el panel en modo demo</button>
    </div>
  </div>`;

/* ============================================================
   PANTALLAS — Profesional: Panel + persona compartida (P6 / P6b)
   ============================================================ */
ROUTES.panel = () => {
  const verified = !!app.doctorVerified;
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="role" aria-label="Menú">${I.menu}</button>`, title:"",
    right:`<span class="flex gap-8"><button class="iconbtn" data-go="buscar" aria-label="Buscar">${I.search}</button><button data-go="perfilProfesional" style="background:none;border:none;cursor:pointer;padding:0">${avatar("SL","blue")}</button></span>` })}
  <div class="content content--pro" style="padding-top:0">
    <div class="pro-head">
      <span class="pro-kicker">PANEL DEL PROFESIONAL</span>
      <h1 class="pro-title">Historias<br>compartidas</h1>
      <p class="pro-sub">Personas que eligieron compartir su historia con vos.</p>
    </div>
    ${verified ? `
    <div class="pro-filters">
      <button class="pro-chip is-active">Todas</button>
      <button class="pro-chip">Con novedades</button>
      <button class="pro-chip">Próximas consultas</button>
    </div>
    <div class="pro-people">
      ${PEOPLE.map(p => `
        <button class="pro-person" data-go="personaResumen" data-person="${p.id}">
          ${avatar(p.initials, p.color, true)}
          <span class="pro-person__body">
            <span class="pro-person__name">${p.name}</span>
            <span class="pro-person__age">${p.age} años</span>
            ${p.next ? `<span class="pro-person__next"><i>Próxima consulta</i><b>${p.next}</b></span>`
                     : `<span class="pro-person__next pro-person__next--none">Sin próximas consultas</span>`}
            <span class="pro-person__last">Último registro: ${p.last}</span>
          </span>
          <span class="pro-person__side">
            ${p.badge ? `<span class="pro-person__badge">${p.badge}</span>` : `<span class="pro-person__badge pro-person__badge--off"></span>`}
            <span class="pro-person__chev">${I.chevron}</span>
          </span>
        </button>`).join("")}
    </div>
    <button class="btn btn--outline mt-8" data-go="configuracionProfesional">Configuración profesional</button>
    ` : `
    <div class="pro-locked">
      <span class="pro-locked__halo" aria-hidden="true"></span>
      <span class="pro-locked__icon">${I.clockFine}</span>
      <h2 class="pro-locked__title">Perfil en revisión</h2>
      <p class="pro-locked__text">Cuando tu perfil esté validado y una persona comparta su historia con vos, va a aparecer acá.</p>
      <button class="wbtn wbtn--celeste" data-go="medicoEstadoVerificacion"><span class="wbtn__label">Ver estado de tu solicitud</span><span class="wbtn__arrow">${I.arrow}</span></button>
      <button class="wbtn wbtn--ghost" data-demo-verify="1">Explorar el panel en modo demo</button>
    </div>
    `}
  </div>`;
};

/* Header + tabs comunes de persona compartida */
function personHeader(active) {
  const tabs = [
    ["Resumen","personaResumen"],["Timeline","personaTimeline"],["Audios","personaAudios"],
    ["Consultas","personaConsultas"],["Medicaciones","personaMedicaciones"],
    ["Documentos","personaDocs"],["Notas","personaNotas"],
  ];
  return `
    ${topbar({ left:`<button class="iconbtn" data-go="panel" aria-label="Volver">${I.back}</button>`, title:"",
      right:`<button class="iconbtn" data-sheet="personaOpts" aria-label="Más">${I.dots}</button>` })}
    <div class="person-header">
      ${avatar("SL","blue")}
      <div class="person-header__info"><div class="person-header__name">Sofía Laguarda</div><div class="person-header__sub">Último registro: Hoy, 08:32</div></div>
    </div>
    <div class="tabs">${tabs.map(([l,r])=>`<button class="tab ${r===active?"is-active":""}" data-go="${r}">${l}</button>`).join("")}</div>`;
}

ROUTES.personaResumen = () => `
  ${personHeader("personaResumen")}
  <div class="content">
    <div class="gcard g-blue mb-16">
      <p style="font-size:12px;color:#2c3e66;font-weight:600">PRÓXIMA CONSULTA</p>
      <p class="h1 mt-8" style="color:#1c2c52">28 MAY</p>
      <p class="mt-8" style="color:#3a4a6a;font-size:14px">11:30 hs · Clínica del Foro</p>
    </div>
    <h2 class="section-title">Sobre lo compartido</h2>
    <p class="lead mb-16">Sofía compartió registros sobre su estado emocional, sueño, hábitos y notas personales. Revisá su timeline para ver los detalles.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-card__num">18</div><div class="stat-card__label">Registros compartidos · últimos 30 días</div></div>
      <div class="stat-card"><div class="stat-card__label">Tipos de registro</div>
        <div class="type-icons">${I.wave}${I.mic}${I.doc}${I.pencil}</div></div>
    </div>
    <div class="flex gap-8 mt-16">
      <button class="btn btn--primary" data-pro-report="informeClinico">Informe clínico</button>
      <button class="btn btn--outline" data-pro-report="metricas">Métricas</button>
    </div>
  </div>`;

ROUTES.personaTimeline = () => `
  ${personHeader("personaTimeline")}
  <div class="content">
    <div class="timeline">
      ${TIMELINE.map(g => `
        <div class="tl-day">${g.day}</div>
        ${g.items.map((it,idx,arr) => `
          <div class="tl-item">
            <div class="tl-rail">
              <span class="tl-time">${it.time}</span>
              <span class="tl-node">${I[it.icon]}</span>
              ${idx < arr.length-1 ? `<span class="tl-line"></span>` : ""}
            </div>
            <div class="tl-card">
              <span class="tl-card__blob blob--${it.blob}"></span>
              <div class="tl-card__type">${it.type}</div>
              <div class="tl-card__text">${it.text}</div>
            </div>
          </div>`).join("")}
      `).join("")}
    </div>
  </div>`;

ROUTES.personaAudios = () => `
  ${personHeader("personaAudios")}
  <div class="content">
    <h2 class="h3 mb-8">Audios compartidos</h2>
    <p class="lead mb-16">Grabaciones, notas de voz y reflexiones.</p>
    <div class="list-card">${AUDIOS.map(a => audioRow(a)).join("")}</div>
  </div>`;

/* Consultas compartidas (#80 de la lista de 100) */
ROUTES.personaConsultas = () => `
  ${personHeader("personaConsultas")}
  <div class="content">
    <h2 class="h3 mb-8">Consultas compartidas</h2>
    <p class="lead mb-16">Historial de consultas que Sofía registró.</p>
    <div class="list-card">
      ${[
        {title:"Consulta con Dra. Sofía Laguarda", meta:"28 de mayo, 11:30 hs · Próxima"},
        {title:"Consulta de seguimiento", meta:"14 de mayo, 10:00 hs"},
        {title:"Primera consulta", meta:"30 de abril, 09:30 hs"},
      ].map(c => `
        <div class="row">
          <span class="row__icon"><span class="row__icon-bg blob--blue"></span>${I.calendar}</span>
          <div class="row__body"><div class="row__title">${c.title}</div><div class="row__sub">${c.meta}</div></div>
        </div>`).join("")}
    </div>
  </div>`;

/* Medicaciones compartidas (#81 de la lista de 100) */
ROUTES.personaMedicaciones = () => `
  ${personHeader("personaMedicaciones")}
  <div class="content">
    <h2 class="h3 mb-8">Medicaciones compartidas</h2>
    <p class="lead mb-16">Tratamientos actuales que Sofía eligió compartir con vos.</p>
    <div class="list-card mb-16">
      <div class="row"><span class="row__icon"><span class="row__icon-bg blob--peach"></span>${I.pills}</span>
        <div class="row__body"><div class="row__title">Sertralina 50 mg</div><div class="row__sub">1 comprimido por la mañana · Desde 10 abr 2024</div></div></div>
      <div class="row"><span class="row__icon"><span class="row__icon-bg blob--blue"></span>${I.pills}</span>
        <div class="row__body"><div class="row__title">Omeprazol 20 mg</div><div class="row__sub">1 comprimido en ayunas · Desde 2 may 2024</div></div></div>
    </div>
    <div class="card"><div class="row__title mb-4">Olvidos registrados</div><div class="row__sub">2 olvidos esta semana</div></div>
  </div>`;

ROUTES.personaDocs = () => `
  ${personHeader("personaDocs")}
  <div class="content">
    <h2 class="h3 mb-8">Documentos compartidos</h2>
    <p class="lead mb-16">Archivos que Sofía eligió compartir.</p>
    <div class="list-card">${DOCS.map(d => docRow({title:d.title, meta:d.meta, color:d.color})).join("")}</div>
  </div>`;

ROUTES.personaNotas = () => `
  ${personHeader("personaNotas")}
  <div class="content">
    <h2 class="h3 mb-8">Notas del profesional</h2>
    <p class="lead mb-16">Espacio privado para tus notas sobre el proceso de Sofía.</p>
    <div class="card mb-12"><div class="row__sub mb-8">Nota · 27 may</div>
      <p class="lead" style="color:var(--text)">Sofía está trabajando muy bien en reconocer sus emociones y pedir ayuda cuando la necesita.</p></div>
    <div class="card mb-16"><div class="row__sub mb-8">Nota · 20 may</div>
      <p class="lead" style="color:var(--text)">Hablamos sobre herramientas para manejar la ansiedad en situaciones sociales.</p></div>
    <button class="btn btn--outline" data-go="nuevaNota">${I.plus} Nueva nota</button>
  </div>`;

/* ============================================================
   Módulo médico — pantallas faltantes de la lista de 100 (#84-88)
   ============================================================ */

/* Perfil profesional (#84) */
ROUTES.perfilProfesional = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="panel" aria-label="Volver">${I.back}</button>`, title:"Perfil",
    right:`<button class="iconbtn" data-go="editarPerfilProfesional" aria-label="Editar">${I.pencil}</button>` })}
  <div class="halo-screen" style="padding-bottom:8px">
    ${avatar("SL","blue","lg")}
    <h1 class="h2 mb-4 mt-16">Dra. Sofía Laguarda</h1>
    <p class="lead mb-0">Psicología clínica · M.N. 45.892</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Institución</div>
      <p class="lead" style="color:var(--text)">Clínica del Foro · Buenos Aires, Argentina</p>
    </div>
    <div class="card mb-12">
      <div class="row__title mb-8">Personas acompañadas</div>
      <p class="lead" style="color:var(--text)">4 personas comparten su historia con vos.</p>
    </div>
    <button class="btn btn--outline" data-go="editarPerfilProfesional">Editar perfil</button>
  </div>`;

ROUTES.editarPerfilProfesional = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="perfilProfesional" aria-label="Volver">${I.back}</button>`, title:"Editar perfil" })}
  <div class="content" style="padding-top:0">
    <div class="flex items-center justify-center mb-24" style="padding-top:16px">${avatar("SL","blue","lg")}</div>
    <div class="field"><label>Nombre</label><input class="input" value="Sofía Laguarda"></div>
    <div class="field"><label>Especialidad</label><input class="input" value="Psicología clínica"></div>
    <div class="field"><label>Matrícula</label><input class="input" value="M.N. 45.892"></div>
    <div class="field"><label>Institución</label><input class="input" value="Clínica del Foro"></div>
    <div class="field"><label>Email</label><input class="input" type="email" value="sofia.laguarda@email.com"></div>
    <button class="btn btn--primary mt-8" data-go="perfilProfesional">Guardar cambios</button>
  </div>`;

/* Configuración profesional (#85) */
ROUTES.configuracionProfesional = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="panel" aria-label="Volver">${I.back}</button>`, title:"Configuración" })}
  <div class="content" style="padding-top:0">
    <div class="setting-group"><h2 class="section-title">Cuenta profesional</h2>
      <div class="setting-list">
        ${settingRow({icon:"user", label:"Perfil profesional", chevron:true, go:"perfilProfesional"})}
        ${settingRow({icon:"key", label:"Cambiar contraseña", chevron:true, go:"cambiarPassword"})}
      </div></div>
    <div class="setting-group"><h2 class="section-title">Notificaciones</h2>
      <div class="setting-list">
        ${settingRow({icon:"bell", label:"Nuevas personas compartidas", toggle:true, on:true})}
        ${settingRow({icon:"calendar", label:"Próximas consultas", toggle:true, on:true})}
        ${settingRow({icon:"sparkle", label:"Novedades y consejos", toggle:true, on:false})}
      </div></div>
    <div class="setting-group"><h2 class="section-title">Privacidad</h2>
      <div class="setting-list">
        ${settingRow({icon:"clock", label:"Historial de accesos", chevron:true, go:"historialAccesosProfesional"})}
        ${settingRow({icon:"hand", label:"Consentimientos recibidos", chevron:true, go:"consentimientosRecibidos"})}
      </div></div>
  </div>`;

/* Historial de accesos — lado profesional (#86) */
ROUTES.historialAccesosProfesional = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracionProfesional" aria-label="Volver">${I.back}</button>`, title:"Historial de accesos" })}
  <div class="halo-screen" style="padding-bottom:8px">
    <div class="halo halo--blue">${I.clock}</div>
    <h1 class="h2 mb-4">Actividad reciente.</h1>
    <p class="lead mb-0">Consultá cuándo accediste a cada historia compartida.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="list-card">
      ${accessRow("Hoy, 08:32", "Historia de Sofía Laguarda", false)}
      ${accessRow("Ayer, 21:15", "Historia de Martín Torres", false)}
      ${accessRow("26 may, 19:42", "Historia de Paula Fernández", false)}
      ${accessRow("24 may, 10:12", "Historia de Lucía Conti", false)}
    </div>
  </div>`;

/* Consentimientos recibidos (#87) */
ROUTES.consentimientosRecibidos = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracionProfesional" aria-label="Volver">${I.back}</button>`, title:"Consentimientos recibidos" })}
  <div class="halo-screen" style="padding-bottom:8px">
    <div class="halo halo--lilac">${I.hand}</div>
    <h1 class="h2 mb-4">Lo que cada persona te autorizó.</h1>
    <p class="lead mb-0">Cada persona decide qué parte de su historia ves.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="list-card">
      ${PEOPLE.map(p => `
        <div class="row">
          ${avatar(p.initials, p.color)}
          <div class="row__body"><div class="row__title">${p.name}</div><div class="row__sub">Acceso: historia completa · Permanente</div></div>
          <button class="link" style="color:var(--danger)" data-go="accesoRevocado" data-person="${p.id}">Revocado</button>
        </div>`).join("")}
    </div>
  </div>`;

/* Acceso revocado (#88) */
ROUTES.accesoRevocado = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="consentimientosRecibidos" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen" style="height:80vh;justify-content:center">
    <div class="halo halo--peach">${I.lock}</div>
    <h1 class="h2 mb-8">Esta persona revocó tu acceso.</h1>
    <p class="lead mb-24">Ya no podés ver su historia ni la información que compartía con vos. Esta decisión la toma cada persona en cualquier momento.</p>
    <button class="btn btn--outline" data-go="panel">Volver al panel</button>
  </div>`;

/* ============================================================
   Bottom tab bar
   ============================================================ */
function renderTabbar(route) {
  const activeTab = TAB_SCREENS[route];
  if (!activeTab) { app.tabbar.hidden = true; return; }
  app.tabbar.hidden = false;
  const items = [
    { id: "inicio", icon: "home", route: "home" },
    { id: "historia", icon: "folder2", route: "historia" },
    { id: "add", add: true },
    { id: "compartido", icon: "users", route: "compartido" },
    { id: "explorar", icon: "compass", route: "explorar" },
  ];
  app.tabbar.innerHTML = items.map(it => {
    if (it.add) return `<button class="tabbar__item tabbar__item--add" data-sheet="register" aria-label="Registrar"><span class="tabbar__add">${I.plus}</span></button>`;
    const on = it.id === activeTab;
    return `<button class="tabbar__item ${on ? "is-active" : ""}" data-go="${it.route}" aria-label="${it.id}">${I[it.icon]}</button>`;
  }).join("");
}

/* ============================================================
   Modales / Bottom sheets / Tutoriales (P2 registro + P9 tutoriales)
   ============================================================ */
const REG_OPTIONS = [
  { label: "Contar algo que pasó", icon: "regAudio", kind: "audio" },
  { label: "Escribir una nota", icon: "regNote", kind: "nota" },
  { label: "Agregar o cambiar medicación", icon: "regMed", kind: "medicacion" },
  { label: "Subir estudio o archivo", icon: "regFile", kind: "archivo" },
  { label: "Guardar consulta o turno", icon: "regConsulta", kind: "consulta" },
  { label: "Registrar algo que sentís", icon: "regSentir", kind: "sentimiento" },
  { label: "Subir foto", icon: "camera", kind: "foto" },
  { label: "Guardar evento importante", icon: "regSpark", kind: "evento" },
];

function openSheet(type) {
  let body = "";
  if (type === "register") {
    body = `
      <div class="sheet__head"><span class="sheet__title">¿Qué querés registrar?</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button></div>
      <div class="reg-grid">
        ${REG_OPTIONS.map(o => `<button class="reg-card" data-flow="${o.kind}">
          <span class="reg-card__icon">${I[o.icon]}</span>
          <span class="reg-card__label">${o.label}</span></button>`).join("")}
      </div>`;
  } else if (type === "invite") {
    body = `
      <div class="sheet__head"><span class="sheet__title">Invitar a alguien</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button></div>
      <p class="lead mb-16">Elegís qué compartís, con quién y por cuánto tiempo. Podés revocar el acceso cuando quieras.</p>
      <div class="field"><label>Email o teléfono</label><input class="input" placeholder="persona@email.com"></div>
      <button class="btn btn--primary" data-close>Enviar invitación</button>`;
  } else if (type === "eventoOpts") {
    body = `
      <div class="sheet__head"><span class="sheet__title">Opciones del registro</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button></div>
      <div class="stack" style="gap:4px">
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="editarEvento">
          ${I.pencil}<span class="row__body" style="margin-left:12px"><span class="row__title">Editar registro</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="compartido">
          ${I.share}<span class="row__body" style="margin-left:12px"><span class="row__title">Compartir con profesional</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit;color:var(--danger)" data-close>
          ${I.trash}<span class="row__body" style="margin-left:12px"><span class="row__title" style="color:var(--danger)">Eliminar registro</span></span>
        </button>
      </div>`;
  } else if (type === "docOpts") {
    body = `
      <div class="sheet__head"><span class="sheet__title">Opciones del documento</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button></div>
      <div class="stack" style="gap:4px">
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="compartido">
          ${I.share}<span class="row__body" style="margin-left:12px"><span class="row__title">Compartir</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close>
          ${I.download}<span class="row__body" style="margin-left:12px"><span class="row__title">Descargar</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit;color:var(--danger)" data-close>
          ${I.trash}<span class="row__body" style="margin-left:12px"><span class="row__title" style="color:var(--danger)">Eliminar documento</span></span>
        </button>
      </div>`;
  } else if (type === "personaOpts") {
    body = `
      <div class="sheet__head"><span class="sheet__title">Opciones</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button></div>
      <div class="stack" style="gap:4px">
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="personaNotas">
          ${I.pencil}<span class="row__body" style="margin-left:12px"><span class="row__title">Ver mis notas sobre Sofía</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="nuevaNota">
          ${I.plus}<span class="row__body" style="margin-left:12px"><span class="row__title">Nueva nota privada</span></span>
        </button>
        <button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-close data-go="resumen">
          ${I.sparkle}<span class="row__body" style="margin-left:12px"><span class="row__title">Generar resumen para consulta</span></span>
        </button>
      </div>`;
  }
  app.overlay.className = "overlay";
  app.overlay.innerHTML = `<div class="sheet ${type === "register" ? "sheet--register" : ""}">${body}</div>`;
  app.overlay.hidden = false;
}

/* Audio del día — bottom sheet glass orgánico: reproductor + grabar / anteriores */
function openAudioSheet(mode = "player") {
  const bars = (n, anim) => Array.from({length:n}, (_,k) =>
    `<span style="height:${anim ? 10 + ((k*7)%26) : 6 + ((k*5)%20)}px"></span>`).join("");
  let body;
  if (mode === "list") {
    body = `
      <div class="audio-sheet__grab"></div>
      <div class="sheet__head" style="margin-bottom:6px">
        <span class="sheet__title">Audios anteriores</span>
        <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button>
      </div>
      <div class="audio-list">
        ${AUDIOS.map(a => `
          <button class="audio-list__row" data-audio-play>
            <span class="audio-list__play">${I.play}</span>
            <span class="audio-list__body"><b>${a.title}</b><i>${a.date}</i></span>
            <span class="audio-list__dur">${a.dur}</span>
          </button>`).join("")}
      </div>
      <button class="wbtn wbtn--ghost" style="margin-top:18px" data-audio-mode="player">Volver al audio del día</button>`;
  } else {
    body = `
      <div class="audio-sheet__grab"></div>
      <button class="iconbtn audio-sheet__close" data-close aria-label="Cerrar">${I.close}</button>
      <h2 class="audio-sheet__title">Audio del día</h2>
      <p class="audio-sheet__sub">Respirar también es avanzar</p>
      <div class="audio-sheet__player">
        <span class="audio-sheet__wave">${bars(9, false)}</span>
        <button class="audio-sheet__play" id="audio-sheet-play" data-playing="false" aria-label="Reproducir">${I.play}</button>
        <span class="audio-sheet__wave">${bars(9, false)}</span>
      </div>
      <div class="audio-sheet__time">03:42</div>
      <div class="audio-sheet__acts">
        <button class="audio-act" data-flow="audio">${I.mic}<span>Grabar audio</span></button>
        <button class="audio-act" data-audio-mode="list">${I.headphones}<span>Audios anteriores</span></button>
      </div>`;
  }
  app.overlay.className = "overlay";
  app.overlay.innerHTML = `<div class="sheet audio-sheet">${body}</div>`;
  app.overlay.hidden = false;
}

/* Flujo de audio como pantalla completa (overlay) */
function openAudioFlow(stage = "recording") {
  let body;
  const bars = (anim) => Array.from({length:28}, () =>
    `<span style="height:${anim?20:8+Math.random()*22}px"></span>`).join("");
  if (stage === "recording") {
    body = `
      <header class="topbar"><button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button><div></div><div style="width:40px"></div></header>
      <div class="recorder">
        <h1 class="h2 mb-8">Contá lo que pasó</h1>
        <p class="muted">Estamos escuchando…</p>
        <div class="recorder__timer">00:28</div>
        <div class="waveform" aria-hidden="true">${bars(true)}</div>
        <button class="record-btn" data-audio="review" aria-label="Detener">${I.stop}</button>
      </div>`;
  } else if (stage === "review") {
    body = `
      <header class="topbar"><button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button><div></div><div style="width:40px"></div></header>
      <div class="recorder">
        <h1 class="h2 mb-24">¿Está bien así?</h1>
        <p class="muted mb-16">00:28 · Hoy, 08:32</p>
        <div class="waveform wave-static mb-24" aria-hidden="true">${bars(false)}</div>
        <button class="play-btn mb-24" id="review-play-btn" data-playing="false" aria-label="Reproducir">${I.play}</button>
        <div class="stack" style="width:100%">
          <button class="btn btn--primary" data-audio="saved">Sí, guardar</button>
          <button class="btn btn--ghost" data-audio="recording">Regrabar</button>
        </div>
      </div>`;
  } else {
    body = `
      <header class="topbar"><button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button><div></div><div style="width:40px"></div></header>
      <div class="content">
        <h1 class="h2 mb-16">Guardado en Mi Historia</h1>
        <div class="card mb-12"><h3 class="h3 mb-8">Transcripción</h3>
          <p class="lead" style="color:var(--text)">Hoy me costó arrancar pero respiré un rato y pude volver a centrarme...</p></div>
        <div class="card mb-16"><h3 class="h3 mb-8">Resumen</h3>
          <p class="lead" style="color:var(--text)">Registro de estado emocional · respiración consciente.</p></div>
        <button class="btn btn--primary" data-close data-go="historia">Ver en Mi Historia</button>
      </div>`;
  }
  app.overlay.className = "overlay";
  app.overlay.innerHTML = `<div class="sheet" style="border-radius:0;height:100%;width:390px;max-width:100%;animation:none;padding:0;display:flex;flex-direction:column">${body}</div>`;
  app.overlay.hidden = false;
}

/* ============================================================
   Flujo rápido de registro: formulario simple → guardado → confirmación
   Cubre los 7 tipos del modal "¿Qué querés registrar?" que no son audio,
   todos terminan en Mi Historia, igual que el flujo de audio ya existente.
   ============================================================ */
const QUICK_FLOWS = {
  nota: {
    title: "Escribir una nota",
    icon: "pencil",
    field: `<div class="field"><label>¿Qué querés anotar?</label><textarea class="input" rows="5" placeholder="Escribí lo que quieras recordar..." style="resize:none;font-family:inherit"></textarea></div>`,
    savedTitle: "Nota guardada en Mi Historia",
    savedBody: "Registro de nota personal · hoy.",
  },
  medicacion: {
    title: "Agregar o cambiar medicación",
    icon: "pills",
    field: `
      <div class="field"><label>Medicación</label><input class="input" placeholder="Ej: Sertralina 50 mg"></div>
      <div class="field"><label>Frecuencia</label><input class="input" placeholder="Ej: 1 comprimido por la mañana"></div>`,
    savedTitle: "Medicación guardada",
    savedBody: "Se agregó a tu lista de medicaciones actuales.",
  },
  archivo: {
    title: "Subir estudio o archivo",
    icon: "doc",
    field: `<div class="upload-zone" id="upload-archivo" data-upload="archivo">${I.doc}<span id="upload-archivo-label">Tocá para elegir un archivo</span></div>
      <div class="field mt-16"><label>Descripción</label><input class="input" placeholder="Ej: Análisis de sangre"></div>`,
    savedTitle: "Archivo guardado en Documentos",
    savedBody: "Podés verlo cuando quieras en Mi Historia → Documentos.",
  },
  consulta: {
    title: "Guardar consulta o turno",
    icon: "calendar",
    field: `
      <div class="field"><label>Profesional</label><input class="input" placeholder="Ej: Dra. Sofía Laguarda"></div>
      <div class="field"><label>Fecha y hora</label><input class="input" type="datetime-local"></div>`,
    savedTitle: "Consulta guardada",
    savedBody: "La vas a ver en Mi Historia → Consultas.",
  },
  sentimiento: {
    title: "Registrar algo que sentís",
    icon: "heart",
    field: `<div class="field"><label>¿Cómo te sentís ahora?</label><textarea class="input" rows="4" placeholder="Contá lo que sentís, sin juicios." style="resize:none;font-family:inherit"></textarea></div>`,
    savedTitle: "Estado emocional registrado",
    savedBody: "Gracias por tomarte un momento para ponerlo en palabras.",
  },
  foto: {
    title: "Subir foto",
    icon: "camera",
    field: `<div class="upload-zone" id="upload-foto" data-upload="foto">${I.camera}<span id="upload-foto-label">Tocá para elegir una foto</span></div>`,
    savedTitle: "Foto guardada",
    savedBody: "La vas a encontrar en Mi Historia → Documentos.",
  },
  evento: {
    title: "Guardar evento importante",
    icon: "bookmark",
    field: `<div class="field"><label>¿Qué pasó?</label><input class="input" placeholder="Ej: Empecé un nuevo tratamiento"></div>`,
    savedTitle: "Evento guardado en Mi Historia",
    savedBody: "Vas a poder volver a verlo cuando quieras.",
  },
};

function openQuickFlow(kind, stage = "form") {
  const cfg = QUICK_FLOWS[kind];
  if (!cfg) return;
  let body;
  if (stage === "form") {
    body = `
      <header class="topbar"><button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button><div></div><div style="width:40px"></div></header>
      <div class="content">
        <span class="halo halo--blue mb-16" style="width:64px;height:64px">${I[cfg.icon]}</span>
        <h1 class="h2 mb-16">${cfg.title}</h1>
        ${cfg.field}
        <button class="btn btn--primary mt-16" data-quick-save="${kind}">Guardar</button>
      </div>`;
  } else {
    body = `
      <header class="topbar"><button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button><div></div><div style="width:40px"></div></header>
      <div class="content">
        <h1 class="h2 mb-16">${cfg.savedTitle}</h1>
        <div class="card mb-16"><p class="lead" style="color:var(--text)">${cfg.savedBody}</p></div>
        <button class="btn btn--primary" data-close data-go="historia">Ver en Mi Historia</button>
      </div>`;
  }
  app.overlay.className = "overlay";
  app.overlay.innerHTML = `<div class="sheet" style="border-radius:0;height:100%;width:390px;max-width:100%;animation:none;padding:0;display:flex;flex-direction:column">${body}</div>`;
  app.overlay.hidden = false;
}

/* Tutoriales contextuales (P9) — componente reutilizable */
const TUTORIALS = [
  { halo: "h-blue", icon: "sparkle", title: "Esta es tu timeline.", text: "Acá vas viendo todo lo que Sofía eligió compartir, en orden cronológico." },
  { halo: "h-butter", icon: "mic", title: "Escuchá sus audios.", text: "Reflexiones, respiraciones o notas de voz que Sofía compartió con vos." },
  { halo: "h-green", icon: "doc", title: "Tus notas son privadas.", text: "Este espacio es solo tuyo para acompañar, escribir y registrar lo que quieras." },
];

function openTutorial(step = 0) {
  app.tutStep = step;
  const t = TUTORIALS[step];
  app.overlay.className = "overlay overlay--center";
  app.overlay.innerHTML = `
    <div class="tut">
      <span class="tut__icon ${t.halo}">${I[t.icon]}</span>
      <h2 class="tut__title">${t.title}</h2>
      <p class="tut__text">${t.text}</p>
      <button class="link link--brand" data-tut-next>Entendido</button>
      <div class="tut__dots">${TUTORIALS.map((_,i)=>`<span class="tut__dot ${i===step?"is-active":""}"></span>`).join("")}</div>
    </div>`;
  app.overlay.hidden = false;
}

function closeOverlay() {
  app.overlay.hidden = true;
  app.overlay.innerHTML = "";
}

/* Toast con estética de energía: feedback real al tocar acciones que no
   necesitan una pantalla propia (ej. "Solicitar exportación", "Nueva nota"). */
let toastTimer = null;
function showEnergyToast(message) {
  let el = document.getElementById("energy-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "energy-toast";
    el.className = "energy-toast";
    document.body.appendChild(el);
  }
  el.innerHTML = `<span class="energy-toast__glow"></span><span class="energy-toast__text">${message}</span>`;
  el.classList.remove("is-visible");
  // reiniciar animación si se toca varias veces seguidas
  void el.offsetWidth;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
}

/* ============================================================
   Binding de eventos
   ============================================================ */
function bindScreen() {
  // navegación entre pantallas
  app.screen.querySelectorAll("[data-go]").forEach(el =>
    el.addEventListener("click", () => go(el.dataset.go)));
  // demo: marcar perfil profesional como verificado y entrar al panel
  app.screen.querySelectorAll("[data-demo-verify]").forEach(el =>
    el.addEventListener("click", () => { app.doctorVerified = true; go("panel"); }));
  // informe/métricas desde el lado profesional
  app.screen.querySelectorAll("[data-pro-report]").forEach(el =>
    el.addEventListener("click", () => { app._fromPro = true; go(el.dataset.proReport); }));
  // segmented control (tipo de matrícula, etc.)
  app.screen.querySelectorAll("[data-seg-group] .seg").forEach(el =>
    el.addEventListener("click", () => {
      const group = el.closest("[data-seg-group]");
      group.querySelectorAll(".seg").forEach(s => s.classList.remove("is-active"));
      el.classList.add("is-active");
      if (group.dataset.segGroup === "matricula") {
        const help = document.getElementById("matriculaHelp");
        if (help) help.querySelector("span").textContent = el.dataset.seg === "provincial"
          ? "En algunas provincias puede requerirse revisión manual."
          : "Se validará contra fuentes nacionales disponibles.";
      }
    }));
  // abrir sheets
  app.screen.querySelectorAll("[data-sheet]").forEach(el =>
    el.addEventListener("click", () => openSheet(el.dataset.sheet)));
  // tutoriales
  app.screen.querySelectorAll("[data-tut]").forEach(el =>
    el.addEventListener("click", () => openTutorial(0)));
  // toggle ojo de contraseña
  app.screen.querySelectorAll("[data-eye]").forEach(el =>
    el.addEventListener("click", () => {
      const inp = document.getElementById(el.dataset.eye);
      inp.type = inp.type === "password" ? "text" : "password";
    }));
  // checkboxes del resumen
  app.screen.querySelectorAll("[data-check]").forEach(el =>
    el.addEventListener("click", () => {
      const on = el.classList.toggle("is-checked");
      el.setAttribute("aria-checked", on);
      el.innerHTML = on ? I.check : "";
    }));
  // docRow → detalle documento
  app.screen.querySelectorAll("[data-doc-title]").forEach(el =>
    el.addEventListener("click", () => {
      app._docTitle = el.dataset.docTitle;
      app._docMeta = el.dataset.docMeta;
      go("detalleDoc");
    }));
  // estudio → detalle estudio
  app.screen.querySelectorAll("[data-study-title]").forEach(el =>
    el.addEventListener("click", () => {
      app._studyTitle = el.dataset.studyTitle;
      app._studyType = el.dataset.studyType;
      app._studyDate = el.dataset.studyDate;
      app._studyPlace = el.dataset.studyPlace;
      go("estudioDetalle");
    }));
  // abrir un quick-flow directamente sin pasar por el sheet "¿Qué querés registrar?"
  app.screen.querySelectorAll("[data-flow-direct]").forEach(el =>
    el.addEventListener("click", () => openQuickFlow(el.dataset.flowDirect)));
  // Audio del día → bottom sheet glass
  app.screen.querySelectorAll("[data-audio-open]").forEach(el =>
    el.addEventListener("click", () => openAudioSheet("player")));
  // exploreCard → detalle servicio
  app.screen.querySelectorAll("[data-svc-name]").forEach(el =>
    el.addEventListener("click", () => {
      app._svcName = el.dataset.svcName;
      app._svcDetail = el.dataset.svcDetail;
      app._svcPerk = el.dataset.svcPerk;
      go("detalleServicio");
    }));
  // permRow → gestión acceso
  app.screen.querySelectorAll("[data-perm-name]").forEach(el =>
    el.addEventListener("click", () => {
      app._permName = el.dataset.permName;
      go("gestionAcceso");
    }));

  // audio-play: toggle play/pause con barra animada
  app.screen.querySelectorAll("[data-audio-play]").forEach(btn => {
    let playing = false;
    let timer = null;
    const wave = btn.closest(".audio-row")?.querySelector(".audio-wave");
    btn.addEventListener("click", () => {
      playing = !playing;
      btn.innerHTML = playing ? I.stop : I.play;
      btn.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
      if (wave) wave.classList.toggle("wave--playing", playing);
      clearTimeout(timer);
      if (playing) {
        timer = setTimeout(() => {
          playing = false;
          btn.innerHTML = I.play;
          btn.setAttribute("aria-label", "Reproducir");
          if (wave) wave.classList.remove("wave--playing");
        }, 8000); // auto-stop after 8s mock
      }
    });
  });

  // review play-btn en overlay: toggle play/pause
  const reviewPlayBtn = document.getElementById("review-play-btn");
  if (reviewPlayBtn) {
    reviewPlayBtn.addEventListener("click", () => {
      const playing = reviewPlayBtn.dataset.playing === "true";
      reviewPlayBtn.dataset.playing = !playing;
      reviewPlayBtn.innerHTML = playing ? I.play : I.stop;
      reviewPlayBtn.setAttribute("aria-label", playing ? "Reproducir" : "Pausar");
    });
  }

  // upload zones: simular selección de archivo/foto
  app.screen.querySelectorAll("[data-upload]").forEach(zone => {
    const kind = zone.dataset.upload;
    const labelEl = document.getElementById(`upload-${kind}-label`);
    const mockFiles = {
      archivo: ["analisis_sangre.pdf","informe_consulta.pdf","receta.pdf","rx_torax.jpg"],
      foto: ["foto_001.jpg","captura_estudio.jpg","radiografia.jpg","imagen_medica.png"],
    };
    zone.style.cursor = "pointer";
    zone.addEventListener("click", () => {
      const files = mockFiles[kind] || ["archivo.pdf"];
      const chosen = files[Math.floor(Math.random() * files.length)];
      zone.classList.add("upload-zone--selected");
      if (labelEl) labelEl.textContent = `✓ ${chosen}`;
      zone.style.borderColor = "var(--green)";
      zone.style.color = "var(--green)";
    });
  });

  // búsqueda live filter
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase().trim();
      const results = document.getElementById("search-results");
      if (!results) return;
      results.querySelectorAll(".row").forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = (q === "" || text.includes(q)) ? "" : "none";
      });
    });
    setTimeout(() => searchInput.focus(), 80);
  }

  app.screen.querySelectorAll("[data-toast]").forEach(el =>
    el.addEventListener("click", () => showEnergyToast(el.dataset.toast)));
  // chips/filtros: alternan estado activo dentro de su propio grupo
  app.screen.querySelectorAll(".chips").forEach(group => {
    group.querySelectorAll(".chip").forEach(chip =>
      chip.addEventListener("click", () => {
        group.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
        chip.classList.add("is-active");
      }));
  });
  // días del calendario: selección visual
  app.screen.querySelectorAll(".cal__grid").forEach(grid => {
    grid.querySelectorAll(".cal__day").forEach(day =>
      day.addEventListener("click", () => {
        grid.querySelectorAll(".cal__day").forEach(d => d.classList.remove("is-selected"));
        day.classList.add("is-selected");
      }));
  });
}

/* Delegación en tabbar y overlay */
app.tabbar.addEventListener("click", (e) => {
  const goBtn = e.target.closest("[data-go]");
  const sheetBtn = e.target.closest("[data-sheet]");
  if (goBtn) go(goBtn.dataset.go);
  else if (sheetBtn) openSheet(sheetBtn.dataset.sheet);
});

app.overlay.addEventListener("click", (e) => {
  if (e.target === app.overlay || e.target.closest("[data-close]")) {
    const goAfter = e.target.closest("[data-go]");
    closeOverlay();
    if (goAfter) {
      if (goAfter.dataset.svcName) {
        app._svcName = goAfter.dataset.svcName;
        app._svcDetail = goAfter.dataset.svcDetail || "";
        app._svcPerk = goAfter.dataset.svcPerk || "";
      }
      go(goAfter.dataset.go);
    }
    return;
  }
  const flow = e.target.closest("[data-flow]");
  if (flow) {
    const kind = flow.dataset.flow;
    if (kind === "audio") openAudioFlow("recording");
    else openQuickFlow(kind);
    return;
  }
  // cambiar de modo dentro del sheet de Audio del día (reproductor ↔ lista)
  const audioMode = e.target.closest("[data-audio-mode]");
  if (audioMode) { openAudioSheet(audioMode.dataset.audioMode); return; }
  // play/pause del reproductor del sheet de Audio del día
  const sheetPlay = e.target.closest("#audio-sheet-play");
  if (sheetPlay) {
    const playing = sheetPlay.dataset.playing === "true";
    sheetPlay.dataset.playing = String(!playing);
    sheetPlay.innerHTML = playing ? I.play : I.stop;
    sheetPlay.classList.toggle("is-playing", !playing);
    return;
  }
  // play en la lista de audios anteriores
  const listPlay = e.target.closest(".audio-list__row[data-audio-play]");
  if (listPlay) {
    const wasOn = listPlay.classList.contains("is-playing");
    app.overlay.querySelectorAll(".audio-list__row").forEach(r => { r.classList.remove("is-playing"); r.querySelector(".audio-list__play").innerHTML = I.play; });
    if (!wasOn) { listPlay.classList.add("is-playing"); listPlay.querySelector(".audio-list__play").innerHTML = I.stop; }
    return;
  }
  const quick = e.target.closest("[data-quick-save]");
  if (quick) { openQuickFlow(quick.dataset.quickSave, "saved"); return; }
  const audio = e.target.closest("[data-audio]");
  if (audio) {
    if (audio.dataset.audio === "saved") openAudioFlow("saved");
    else openAudioFlow(audio.dataset.audio);
    return;
  }
  // review play toggle (inside overlay)
  const rPlay = e.target.closest("#review-play-btn");
  if (rPlay) {
    const playing = rPlay.dataset.playing === "true";
    rPlay.dataset.playing = !playing;
    rPlay.innerHTML = playing ? I.play : I.stop;
    return;
  }
  const tutNext = e.target.closest("[data-tut-next]");
  if (tutNext) {
    const next = app.tutStep + 1;
    if (next < TUTORIALS.length) openTutorial(next);
    else closeOverlay();
    return;
  }
  const toast = e.target.closest("[data-toast]");
  if (toast) showEnergyToast(toast.dataset.toast);
});

/* ============================================================
   Navegador de demo (lista lateral)
   ============================================================ */
const NAV_GROUPS = [
  { group: "Onboarding", items: [["Bienvenida","welcome"],["Elegir rol","role"],["Crear cuenta","register"],["Iniciar sesión","login"]] },
  { group: "Paciente", items: [["Home Hoy","home"],["Mi Historia","historia"],["Buscar","buscar"],["Detalle evento","evento"],["Editar evento","editarEvento"],["Estudios","estudios"],["Detalle estudio","estudioDetalle"],["Síntomas","sintomas"],["Registrar síntoma","registrarSintoma"],["Medicaciones","medicaciones"],["Documentos","documentos"],["Detalle documento","detalleDoc"],["Consultas","consultas"],["Agendar consulta","agendar"],["Consulta guardada","consultaGuardada"],["Resumen consulta","resumen"],["Elegir rango","rango"],["Resumen generado","resumenGenerado"],["Compartido","compartido"],["Gestión acceso","gestionAcceso"],["Explorar","explorar"],["Detalle servicio","detalleServicio"],["Cambiar ubicación","cambiarUbicacion"]] },
  { group: "Más / Datos", items: [["Más","mas"],["Opciones","masOpciones"],["Perfil","perfil"],["Seguridad","seguridad"],["Dispositivos","dispositivos"],["Sesiones","sesiones"],["Consentimientos","consentimientos"],["Eliminar cuenta","eliminarCuenta"],["Eliminar confirmado","eliminarConfirm"],["Configuración","configuracion"],["Datos personales","datosPersonales"],["Cambiar contraseña","cambiarPassword"],["Notificaciones","notificaciones"],["Apariencia","apariencia"],["Idioma","idioma"],["Privacidad","privacidad"],["Exportar datos","exportar"],["Exportar confirmado","exportarConfirm"],["Historial accesos","historial"]] },
  { group: "Profesional", items: [["Acceso profesional","medicoMatricula"],["Solicitud recibida","medicoSolicitudRecibida"],["Estado de verificación","medicoEstadoVerificacion"],["Informe clínico","informeClinico"],["Métricas inteligentes","metricas"],["Panel profesional","panel"],["Persona · Resumen","personaResumen"],["Persona · Timeline","personaTimeline"],["Persona · Audios","personaAudios"],["Persona · Consultas","personaConsultas"],["Persona · Medicaciones","personaMedicaciones"],["Persona · Documentos","personaDocs"],["Persona · Notas","personaNotas"],["Nueva nota","nuevaNota"],["Nota guardada","notaGuardada"],["Perfil profesional","perfilProfesional"],["Editar perfil profesional","editarPerfilProfesional"],["Configuración profesional","configuracionProfesional"],["Historial accesos (médico)","historialAccesosProfesional"],["Consentimientos recibidos","consentimientosRecibidos"],["Acceso revocado","accesoRevocado"]] },
];

function buildNavigator() {
  app.navList.innerHTML = NAV_GROUPS.map(g =>
    `<div class="nav-group">${g.group}</div>` +
    g.items.map(([label, route]) => `<button class="nav-link" data-nav="${route}">${label}</button>`).join("")
  ).join("");
  app.navList.querySelectorAll("[data-nav]").forEach(el =>
    el.addEventListener("click", () => go(el.dataset.nav)));
}

function updateNavigator() {
  app.navList.querySelectorAll("[data-nav]").forEach(el =>
    el.classList.toggle("is-active", el.dataset.nav === app.current));
}

/* ============================================================
   Init
   ============================================================ */
/* ============================================================
   NUEVAS PANTALLAS REALES — reemplazan todos los data-toast
   ============================================================ */

/* Búsqueda global con resultados en vivo */
ROUTES.buscar = () => {
  const allItems = [
    ...MED_HISTORY.flatMap(g => g.items.map(it => ({ ...it, kind: "historia" }))),
    ...DOCS.map(d => ({ icon: "doc", title: d.title, meta: d.meta, kind: "documento", dot: "var(--brand)" })),
    ...AUDIOS.map(a => ({ icon: "mic", title: a.title, meta: a.date, kind: "audio", dot: "var(--lilac)" })),
  ];
  const rows = allItems.map(it =>
    `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="evento">
      <span class="row__icon"><span class="row__icon-bg blob--blue"></span>${I[it.icon]}</span>
      <div class="row__body"><div class="row__title">${it.title}</div><div class="row__sub">${it.type || it.kind} · ${it.date || it.meta || ""}</div></div>
      <span class="row__dot" style="background:${it.dot}"></span>
    </button>`
  ).join("");
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="historia" aria-label="Volver">${I.back}</button>`, title:"Buscar" })}
  <div class="content" style="padding-top:8px">
    <div class="field" style="margin-bottom:16px">
      <div class="field__wrap">
        <input class="input input--icon" id="search-input" type="search" placeholder="¿Qué estás buscando?" autofocus style="padding-left:44px">
        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);pointer-events:none;opacity:0.4">${I.search}</span>
      </div>
    </div>
    <div class="chips mb-16">
      <button class="chip is-active">Todo</button>
      <button class="chip">Notas</button>
      <button class="chip">Consultas</button>
      <button class="chip">Documentos</button>
      <button class="chip">Audios</button>
    </div>
    <div id="search-results" class="list-card">${rows}</div>
  </div>`;
};

/* Detalle de documento */
ROUTES.detalleDoc = () => {
  const title = app._docTitle || "Documento";
  const meta = app._docMeta || "";
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="documentos" aria-label="Volver">${I.back}</button>`, title:"Documento",
    right:`<button class="iconbtn" data-sheet="docOpts" aria-label="Más">${I.dots}</button>` })}
  <div class="halo-screen">
    <div class="halo halo--blue">${I.doc}</div>
    <h1 class="h2 mb-4">${title}</h1>
    <p class="lead mb-0">${meta}</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Descripción</div>
      <p class="lead" style="color:var(--text)">Archivo médico registrado por el profesional indicado. Podés compartirlo con otros profesionales desde la pantalla de acceso.</p>
    </div>
    <div class="card mb-16">
      <div class="row__title mb-8">Acceso</div>
      <div class="flex items-center gap-8">
        ${avatar("SL","blue")}<div><div class="row__title">Dra. Sofía Laguarda</div><div class="row__sub">Puede ver</div></div>
      </div>
    </div>
    <div class="flex gap-8">
      <button class="btn btn--primary" data-go="compartido">Compartir</button>
      <button class="btn btn--outline" data-sheet="docOpts">Opciones</button>
    </div>
  </div>`;
};

/* Detalle de servicio de explorar */
ROUTES.detalleServicio = () => {
  const name = app._svcName || "Servicio";
  const detail = app._svcDetail || "";
  const perk = app._svcPerk || "";
  const colors = ["blue","butter","lilac","peach","green"];
  const col = colors[Math.floor(Math.random()*colors.length)];
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="explorar" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen">
    <div class="halo halo--${col}">${I.sparkle}</div>
    <h1 class="h2 mb-4">${name}</h1>
    <p class="lead">${detail}</p>
    ${perk ? `<span class="explore-card__perk">${perk}</span>` : ""}
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Sobre este servicio</div>
      <p class="lead" style="color:var(--text)">Servicio verificado, disponible para coordinar directamente desde AlDía. Tu información de salud solo se comparte si elegís hacerlo.</p>
    </div>
    <div class="card mb-16">
      <div class="row__title mb-8">Disponibilidad</div>
      <p class="lead" style="color:var(--text)">Lunes a viernes · 08:00–20:00 hs<br>Envío/atención en tu zona</p>
    </div>
    <button class="btn btn--primary" data-go="agendar">Coordinar ${I.arrow}</button>
  </div>`;
};

/* Gestión de acceso de una persona */
ROUTES.gestionAcceso = () => {
  const name = app._permName || "Contacto";
  const initials = name.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  return `
  ${topbar({ left:`<button class="iconbtn" data-go="compartido" aria-label="Volver">${I.back}</button>`, title:"Acceso compartido" })}
  <div class="content" style="padding-top:0">
    <div class="flex items-center gap-12 mb-24">
      ${avatar(initials,"blue","lg")}
      <div><h1 class="h2">${name}</h1><p class="muted" style="font-size:14px">Acceso activo</p></div>
    </div>
    <h2 class="section-title">Qué puede ver</h2>
    <div class="list-card mb-16">
      ${checkRow("Registros de historia", true)}
      ${checkRow("Documentos médicos", true)}
      ${checkRow("Audios y notas", false)}
      ${checkRow("Consultas agendadas", true)}
    </div>
    <h2 class="section-title">Nivel de acceso</h2>
    <div class="list-card mb-24">
      <div class="check-row"><span class="check-box is-checked">${I.check}</span><span class="check-label">Solo puede ver</span></div>
      <div class="check-row"><span class="check-box"></span><span class="check-label">Puede ver y agregar notas</span></div>
    </div>
    <button class="btn btn--outline" style="color:var(--danger);border-color:var(--danger)" data-go="compartido">Revocar acceso</button>
  </div>`;
};

/* Agendar consulta */
ROUTES.agendar = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="consultas" aria-label="Volver">${I.back}</button>`, title:"Nueva consulta" })}
  <div class="content" style="padding-top:0">
    <div class="halo-screen" style="padding-bottom:0">
      <div class="halo halo--blue">${I.calendar}</div>
    </div>
    <div class="field"><label>Profesional</label><input class="input" placeholder="Ej: Dra. Sofía Laguarda" value="Dra. Sofía Laguarda"></div>
    <div class="field"><label>Especialidad</label><input class="input" placeholder="Ej: Clínica médica"></div>
    <div class="field"><label>Lugar</label><input class="input" placeholder="Ej: Clínica del Foro" value="Clínica del Foro"></div>
    <div class="field"><label>Fecha</label><input class="input" type="date" value="2024-06-05"></div>
    <div class="field"><label>Hora</label><input class="input" type="time" value="11:30"></div>
    <div class="field"><label>Notas</label><textarea class="input" rows="3" placeholder="Recordatorios, preguntas a hacer..." style="resize:none;font-family:inherit"></textarea></div>
    <button class="btn btn--primary mt-8" data-go="consultaGuardada">Guardar consulta</button>
  </div>`;

ROUTES.consultaGuardada = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="consultas" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen">
    <div class="halo halo--blue">${I.calendar}</div>
    <h1 class="h2 mb-8">Consulta guardada</h1>
    <p class="lead">La vas a ver en Mi Historia → Consultas. Te avisamos el día anterior.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-16">
      <div class="row__title">5 JUN · 11:30 hs</div>
      <div class="row__sub">Dra. Sofía Laguarda · Clínica del Foro</div>
    </div>
    <button class="btn btn--primary" data-go="consultas">Ver mis consultas</button>
  </div>`;

/* Elegir rango para resumen */
ROUTES.rango = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="resumen" aria-label="Volver">${I.back}</button>`, title:"Rango de fechas" })}
  <div class="content" style="padding-top:0">
    <h2 class="section-title mb-16">Período</h2>
    <div class="list-card mb-24">
      ${["Última semana","Últimos 15 días","Últimos 30 días","Últimos 3 meses","Último año","Personalizado"].map((opt,i) =>
        `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="resumen">
          <span class="row__body"><span class="row__title">${opt}</span></span>
          ${i===2 ? `<span class="check-box is-checked" style="width:24px;height:24px">${I.check}</span>` : ""}
        </button>`).join("")}
    </div>
  </div>`;

/* Resumen generado */
ROUTES.resumenGenerado = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="resumen" aria-label="Volver">${I.back}</button>`, title:"Resumen listo" })}
  <div class="halo-screen">
    <div class="halo halo--green">${I.sparkle}</div>
    <h1 class="h2 mb-8">Resumen generado</h1>
    <p class="lead">Últimos 30 días · Listo para compartir con tu médica.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Medicaciones</div>
      <p class="lead" style="color:var(--text)">Sertralina 50 mg · 1 comprimido por la mañana · sin olvidos registrados esta semana.</p>
    </div>
    <div class="card mb-12">
      <div class="row__title mb-8">Consultas</div>
      <p class="lead" style="color:var(--text)">1 consulta registrada · 28 mayo con Dra. Sofía Laguarda.</p>
    </div>
    <div class="card mb-12">
      <div class="row__title mb-8">Notas y estado emocional</div>
      <p class="lead" style="color:var(--text)">3 notas de estado emocional · 2 notas personales · 1 audio de reflexión.</p>
    </div>
    <div class="card mb-16">
      <div class="row__title mb-8">Estudios</div>
      <p class="lead" style="color:var(--text)">Análisis de sangre (12 mayo) · Rx de tórax (3 mayo).</p>
    </div>
    <p class="disclaimer">Este resumen organiza información registrada por la usuaria. No constituye diagnóstico.</p>
    <button class="btn btn--primary" data-go="compartido">Compartir con profesional</button>
  </div>`;

/* Seguridad */
ROUTES.seguridad = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Seguridad" })}
  <div class="halo-screen">
    <div class="halo halo--butter">${I.shield}</div>
    <h1 class="h2 mb-8">Tu cuenta está segura.</h1>
    <p class="lead">Revisá las opciones de acceso y protección.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="setting-group"><h2 class="section-title">Acceso</h2>
      <div class="setting-list">
        ${settingRow({icon:"key", label:"Cambiar contraseña", chevron:true, go:"cambiarPassword"})}
        ${settingRow({icon:"sparkle", label:"Verificación en dos pasos", toggle:true, on:false})}
        ${settingRow({icon:"eye", label:"Sesiones activas", chevron:true, go:"sesiones"})}
      </div>
    </div>
    <div class="setting-group"><h2 class="section-title">Dispositivos</h2>
      <div class="setting-list">
        ${settingRow({icon:"folder", label:"Dispositivos vinculados", chevron:true, go:"dispositivos"})}
        ${settingRow({icon:"bell", label:"Alertas de acceso nuevo", toggle:true, on:true})}
        ${settingRow({icon:"lock", label:"Bloqueo por inactividad", value:"5 min", chevron:true, toast:"Elegir tiempo de bloqueo"})}
      </div>
    </div>
  </div>`;

/* Dispositivos vinculados (#56 de la lista de 100) */
ROUTES.dispositivos = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="seguridad" aria-label="Volver">${I.back}</button>`, title:"Dispositivos" })}
  <div class="content" style="padding-top:0">
    <p class="lead mb-16">Estos son los dispositivos donde iniciaste sesión con tu cuenta.</p>
    <div class="list-card mb-16">
      ${[
        {name:"iPhone 14 Pro", meta:"Buenos Aires, Argentina · Este dispositivo", current:true},
        {name:"iPad Air", meta:"Último acceso: 26 may, 18:40", current:false},
        {name:"MacBook Air · Chrome", meta:"Último acceso: ayer, 21:15", current:false},
      ].map(d => `
        <div class="row">
          <span class="row__icon"><span class="row__icon-bg blob--blue"></span>${I.folder}</span>
          <div class="row__body"><div class="row__title">${d.name}</div><div class="row__sub">${d.meta}</div></div>
          ${d.current ? `<span class="perm">Actual</span>` : `<button class="link" style="color:var(--danger)" data-toast="Dispositivo desvinculado">Quitar</button>`}
        </div>`).join("")}
    </div>
    <p class="disclaimer">Si no reconocés alguno de estos dispositivos, quitalo y cambiá tu contraseña.</p>
  </div>`;

/* Sesiones abiertas (#57 de la lista de 100) */
ROUTES.sesiones = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="seguridad" aria-label="Volver">${I.back}</button>`, title:"Sesiones abiertas" })}
  <div class="content" style="padding-top:0">
    <p class="lead mb-16">Sesiones activas con tu cuenta en distintos dispositivos.</p>
    <div class="list-card mb-16">
      ${accessRow("Hoy, 08:32", "iPhone 14 Pro · Buenos Aires", true)}
      ${accessRow("Ayer, 21:15", "Web · Chrome · Buenos Aires", false)}
      ${accessRow("26 may, 18:40", "iPad Air · Buenos Aires", false)}
    </div>
    <button class="btn btn--outline" style="color:var(--danger)" data-toast="Cerramos el resto de las sesiones">Cerrar todas las demás sesiones</button>
  </div>`;

/* Consentimientos */
ROUTES.consentimientos = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"Consentimientos" })}
  <div class="halo-screen">
    <div class="halo halo--lilac">${I.hand}</div>
    <h1 class="h2 mb-8">Tus decisiones importan.</h1>
    <p class="lead">Controlá cómo se usa tu información en cada contexto.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="setting-list">
      ${settingRow({icon:"doc", label:"Uso de datos para mejora del servicio", toggle:true, on:true})}
      ${settingRow({icon:"share", label:"Compartir datos anonimizados con investigación", toggle:true, on:false})}
      ${settingRow({icon:"bell", label:"Comunicaciones y novedades", toggle:true, on:true})}
      ${settingRow({icon:"sparkle", label:"Sugerencias personalizadas", toggle:true, on:true})}
    </div>
    <p class="disclaimer mt-16">Podés cambiar estos consentimientos en cualquier momento. Los cambios aplican de forma inmediata.</p>
  </div>`;

/* Eliminar cuenta — flujo de confirmación */
ROUTES.eliminarCuenta = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="masOpciones" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen">
    <div class="halo halo--lilac">${I.trash}</div>
    <h1 class="h2 mb-8">Antes de continuar…</h1>
    <p class="lead">Eliminar tu cuenta borrará toda tu historia, documentos y registros de forma permanente.</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-16" style="background:var(--danger-bg)">
      <p class="lead" style="color:var(--danger);font-weight:600">Esta acción no se puede deshacer. Tus datos no se pueden recuperar.</p>
    </div>
    <div class="field"><label>Para confirmar, escribí tu email</label><input class="input" type="email" placeholder="tu@email.com"></div>
    <button class="btn mt-8" style="width:100%;background:var(--danger);color:#fff;border:none;border-radius:16px;padding:16px;font-size:16px;font-weight:600;cursor:pointer" data-go="eliminarConfirm">Eliminar cuenta definitivamente</button>
    <button class="btn btn--ghost mt-8" data-go="masOpciones">Cancelar, mantener mi cuenta</button>
  </div>`;

ROUTES.eliminarConfirm = () => `
  ${topbar({ title:"" })}
  <div class="halo-screen" style="height:80vh;justify-content:center">
    <div class="halo halo--lilac">${I.check}</div>
    <h1 class="h2 mb-8">Te enviamos un email de confirmación</h1>
    <p class="lead mb-24">Para completar el proceso, abrí el email que te mandamos y confirmá la eliminación desde allí. Tu cuenta permanece activa hasta que confirmes.</p>
    <button class="btn btn--outline" data-go="mas">Volver al inicio</button>
  </div>`;

/* Exportar confirmación */
ROUTES.exportarConfirm = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="exportar" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen" style="height:80vh;justify-content:center">
    <div class="halo halo--butter">${I.download}</div>
    <h1 class="h2 mb-8">Exportación en proceso</h1>
    <p class="lead mb-24">Te enviaremos un email a <strong>tu@email.com</strong> cuando el archivo esté listo. Puede tardar unos minutos.</p>
    <button class="btn btn--outline" data-go="mas">Volver al inicio</button>
  </div>`;

/* Perfil personal (#67 de la lista de 100) */
ROUTES.perfil = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="mas" aria-label="Volver">${I.back}</button>`, title:"Perfil",
    right:`<button class="iconbtn" data-go="datosPersonales" aria-label="Editar">${I.pencil}</button>` })}
  <div class="halo-screen" style="padding-bottom:8px">
    ${avatar("M","blue","lg")}
    <h1 class="h2 mb-4 mt-16">Martina González</h1>
    <p class="lead mb-0">martina@email.com</p>
  </div>
  <div class="content" style="padding-top:0">
    <div class="card mb-12">
      <div class="row__title mb-8">Información personal</div>
      <p class="lead" style="color:var(--text)">Fecha de nacimiento: 14 de marzo de 1992<br>Ciudad: Buenos Aires, Argentina<br>Teléfono: +54 9 11 1234-5678</p>
    </div>
    <button class="btn btn--outline" data-go="datosPersonales">Editar perfil</button>
  </div>`;

/* Datos personales (también funciona como "Editar perfil", #68) */
ROUTES.datosPersonales = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="perfil" aria-label="Volver">${I.back}</button>`, title:"Editar perfil" })}
  <div class="content" style="padding-top:0">
    <div class="flex items-center justify-center mb-24" style="padding-top:16px">
      ${avatar("M","blue","lg")}
    </div>
    <div class="field"><label>Nombre</label><input class="input" value="Martina González"></div>
    <div class="field"><label>Email</label><input class="input" type="email" value="martina@email.com"></div>
    <div class="field"><label>Teléfono</label><input class="input" type="tel" value="+54 9 11 1234-5678"></div>
    <div class="field"><label>Fecha de nacimiento</label><input class="input" type="date" value="1992-03-14"></div>
    <div class="field"><label>Ciudad</label><input class="input" value="Buenos Aires, Argentina"></div>
    <button class="btn btn--primary mt-8" data-go="perfil">Guardar cambios</button>
  </div>`;

/* Cambiar contraseña */
ROUTES.cambiarPassword = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracion" aria-label="Volver">${I.back}</button>`, title:"Cambiar contraseña" })}
  <div class="content" style="padding-top:16px">
    <div class="halo-screen" style="padding-bottom:8px">
      <div class="halo halo--blue">${I.key}</div>
    </div>
    <div class="field"><label>Contraseña actual</label>
      <div class="field__wrap"><input class="input input--icon" id="cp-current" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="cp-current">${I.eye}</button></div></div>
    <div class="field"><label>Nueva contraseña</label>
      <div class="field__wrap"><input class="input input--icon" id="cp-new" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="cp-new">${I.eye}</button></div></div>
    <div class="field"><label>Confirmar nueva contraseña</label>
      <div class="field__wrap"><input class="input input--icon" id="cp-new2" type="password" placeholder="••••••••">
      <button class="field__eye" data-eye="cp-new2">${I.eye}</button></div></div>
    <button class="btn btn--primary mt-8" data-go="configuracion">Actualizar contraseña</button>
  </div>`;

/* Idioma */
ROUTES.idioma = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="configuracion" aria-label="Volver">${I.back}</button>`, title:"Idioma" })}
  <div class="content" style="padding-top:0">
    <h2 class="section-title mb-16 mt-16">Idioma de la app</h2>
    <div class="list-card mb-24">
      ${["Español","English","Português","Français"].map((opt,i) =>
        `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="configuracion">
          <span class="row__body"><span class="row__title">${opt}</span></span>
          ${i===0 ? `<span class="check-box is-checked" style="width:24px;height:24px">${I.check}</span>` : ""}
        </button>`).join("")}
    </div>
  </div>`;

/* Cambiar ubicación */
ROUTES.cambiarUbicacion = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="explorar" aria-label="Volver">${I.back}</button>`, title:"Tu ubicación" })}
  <div class="content" style="padding-top:8px">
    <div class="field mb-16">
      <div class="field__wrap">
        <input class="input input--icon" type="search" placeholder="Barrio o ciudad" value="Palermo" style="padding-left:44px">
        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);pointer-events:none;opacity:0.4">${I.search}</span>
      </div>
    </div>
    <div class="list-card mb-16">
      ${["Palermo","Recoleta","Belgrano","Villa Crespo","Caballito"].map((b,i) =>
        `<button class="row" style="width:100%;background:none;border:none;cursor:pointer;text-align:left;font-family:inherit" data-go="explorar">
          <span class="row__body"><span class="row__title">${b}</span><span class="row__sub">Buenos Aires</span></span>
          ${i===0 ? `<span class="check-box is-checked" style="width:24px;height:24px">${I.check}</span>` : ""}
        </button>`).join("")}
    </div>
    <button class="btn btn--outline" data-go="explorar">Usar mi ubicación actual</button>
  </div>`;

/* Editar evento */
ROUTES.editarEvento = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="evento" aria-label="Volver">${I.back}</button>`, title:"Editar registro" })}
  <div class="content" style="padding-top:0">
    <div class="field"><label>Tipo</label><input class="input" value="Consulta médica" readonly></div>
    <div class="field"><label>Título</label><input class="input" value="Consulta con Dra. Sofía Laguarda"></div>
    <div class="field"><label>Descripción</label>
      <textarea class="input" rows="4" style="resize:none;font-family:inherit">Control de seguimiento. Se conversó sobre estrategias para manejar la ansiedad en situaciones sociales.</textarea></div>
    <div class="field"><label>Fecha</label><input class="input" type="date" value="2024-05-28"></div>
    <div class="field"><label>Hora</label><input class="input" type="time" value="11:30"></div>
    <button class="btn btn--primary mt-8" data-go="evento">Guardar cambios</button>
    <button class="btn btn--ghost" data-go="evento">Cancelar</button>
  </div>`;

/* Nueva nota (panel profesional) */
ROUTES.nuevaNota = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="personaNotas" aria-label="Volver">${I.back}</button>`, title:"Nueva nota" })}
  <div class="content" style="padding-top:16px">
    <div class="halo-screen" style="padding-bottom:0">
      <div class="halo halo--blue">${I.pencil}</div>
    </div>
    <div class="field">
      <label>Nota sobre el proceso de Sofía</label>
      <textarea class="input" rows="7" placeholder="Escribí tu observación clínica, próximos pasos, puntos importantes de la sesión..." style="resize:none;font-family:inherit"></textarea>
    </div>
    <button class="btn btn--primary mt-8" data-go="notaGuardada">Guardar nota</button>
    <button class="btn btn--ghost" data-go="personaNotas">Cancelar</button>
  </div>`;

ROUTES.notaGuardada = () => `
  ${topbar({ left:`<button class="iconbtn" data-go="personaNotas" aria-label="Volver">${I.back}</button>`, title:"" })}
  <div class="halo-screen" style="height:80vh;justify-content:center">
    <div class="halo halo--blue">${I.check}</div>
    <h1 class="h2 mb-8">Nota guardada</h1>
    <p class="lead mb-24">Quedó en el historial privado de Sofía Laguarda. Solo vos podés verla.</p>
    <button class="btn btn--outline" data-go="personaNotas">Ver todas las notas</button>
  </div>`;

/* Extender openSheet con nuevos tipos */
/* fin de extensiones de openSheet (fusionadas arriba) */

buildNavigator();
go("welcome");

/* ============================================================
   Mapa real — MapLibre GL + OpenStreetMap, estética AlDía
   ============================================================ */
const MAP_CITIES = {
  Palermo:  [-58.4264, -34.5780],
  Recoleta: [-58.3920, -34.5875],
  Belgrano: [-58.4560, -34.5620],
  Centro:   [-58.3816, -34.6037],
};
// posiciones relativas (lng/lat offset) de cada servicio alrededor del centro
const MAP_OFFSETS = {
  farmacia:  [-0.0042,  0.0026],
  nutricion: [ 0.0038,  0.0030],
  lab:       [ 0.0016, -0.0034],
  rehab:     [ 0.0050, -0.0006],
  psico:     [-0.0030, -0.0014],
  cuidado:   [-0.0050, -0.0040],
};

function initMap() {
  const el = document.getElementById("aldia-map");
  if (!el || !window.maplibregl) return;
  if (app._map) { try { app._map.remove(); } catch (e) {} app._map = null; }

  let center = MAP_CITIES.Palermo;
  let cityKeys = Object.keys(MAP_CITIES);
  let cityIdx = 0;

  const map = new maplibregl.Map({
    container: el,
    style: {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "© OpenStreetMap",
        },
      },
      layers: [
        { id: "bg", type: "background", paint: { "background-color": "#faf7f1" } },
        { id: "osm", type: "raster", source: "osm", paint: { "raster-opacity": 0.66, "raster-saturation": -0.4, "raster-contrast": -0.08, "raster-brightness-min": 0.12 } },
      ],
    },
    center,
    zoom: 14.2,
    attributionControl: false,
    pitchWithRotate: false,
    dragRotate: false,
  });
  app._map = map;

  const youEl = document.createElement("div");
  youEl.className = "map-you";
  const youMarker = new maplibregl.Marker({ element: youEl, anchor: "center" }).setLngLat(center).addTo(map);

  const svcMarkers = [];
  function placeServices(c) {
    svcMarkers.forEach(m => m.remove());
    svcMarkers.length = 0;
    SERVICES.forEach(s => {
      const off = MAP_OFFSETS[s.id] || [0, 0];
      const ll = [c[0] + off[0], c[1] + off[1]];
      const m = document.createElement("button");
      m.className = "map-halo map-halo--" + s.color;
      m.style.width = m.style.height = Math.round(s.size * 2.1) + "px";
      m.innerHTML = `<span class="map-halo__glow"></span><span class="map-halo__lbl">${s.cat}</span>`;
      m.addEventListener("click", (e) => { e.stopPropagation(); showServiceSheet(s); });
      svcMarkers.push(new maplibregl.Marker({ element: m, anchor: "center" }).setLngLat(ll).addTo(map));
    });
  }
  placeServices(center);

  const txt = document.getElementById("mapLocTxt");
  function setCenter(c, label) {
    center = c;
    youMarker.setLngLat(c);
    placeServices(c);
    map.flyTo({ center: c, zoom: 14.2, duration: 900 });
    if (txt) txt.textContent = label;
  }

  // geolocalización real
  function locate() {
    if (txt) txt.textContent = "Buscando tu ubicación…";
    if (!navigator.geolocation) { if (txt) txt.textContent = "Ubicación no disponible · Palermo"; return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCenter([pos.coords.longitude, pos.coords.latitude], "Estás acá"),
      () => { if (txt) txt.textContent = "Sin permiso · " + cityKeys[cityIdx]; },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }
  map.on("load", locate);

  const locateBtn = document.getElementById("mapLocate");
  if (locateBtn) locateBtn.addEventListener("click", locate);
  const cityBtn = document.getElementById("mapLocBtn");
  if (cityBtn) cityBtn.addEventListener("click", () => {
    cityIdx = (cityIdx + 1) % cityKeys.length;
    const k = cityKeys[cityIdx];
    setCenter(MAP_CITIES[k], "Cerca de " + k);
  });
}

function showServiceSheet(s) {
  app.overlay.className = "overlay";
  app.overlay.innerHTML = `
    <div class="sheet svc-sheet">
      <span class="svc-sheet__img" style="background-image:url('${RES(s.img)}')"></span>
      <div class="svc-sheet__body">
        <div class="sheet__head" style="margin-bottom:8px">
          <div><span class="svc-sheet__cat">${s.cat} · ${s.dist}</span><span class="svc-sheet__name">${s.name}</span></div>
          <button class="iconbtn" data-close aria-label="Cerrar">${I.close}</button>
        </div>
        ${s.perk ? `<span class="svc-sheet__perk">${s.perk}</span>` : ""}
        <p class="lead mb-16" style="color:var(--text)">${s.detail}. Atención de lunes a sábado, 9 a 19 hs.</p>
        <div class="svc-sheet__btns">
          <button class="btn btn--primary" data-close data-go="detalleServicio" data-svc-name="${s.name}" data-svc-detail="${s.detail}" data-svc-perk="${s.perk}">Ver</button>
          <button class="btn btn--outline" data-close>Cómo llegar</button>
          <button class="btn btn--outline" data-close>Guardar</button>
        </div>
      </div>
    </div>`;
  app.overlay.hidden = false;
}

/* ============================================================
   Campo de energía global — "vos sos energía"
   Mover el dedo o el mouse desparrama estelas de color cálido/frío
   por toda la app, como en las imágenes de referencia (mano sosteniendo
   una esfera de luz / siluetas con manchas de calor en movimiento).
   ============================================================ */
(function setupEnergyField() {
  const layer = document.createElement("div");
  layer.className = "energy-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  const PALETTE = [
    "rgba(240,130,107,0.50)",  // coral
    "rgba(251,230,174,0.55)",  // butter
    "rgba(220,201,244,0.55)",  // lilac
    "rgba(179,204,255,0.55)",  // blue
    "rgba(91,141,239,0.40)",   // brand
    "rgba(52,199,89,0.30)",    // green
  ];

  let lastX = null, lastY = null, lastT = 0;
  let colorCursor = 0;
  const MIN_DIST = 18;     // distancia mínima entre manchas
  const MIN_GAP_MS = 30;   // separación mínima en el tiempo
  const MAX_BLOBS = 60;    // tope de manchas vivas para no sobrecargar

  function spawnBlob(x, y, speed) {
    if (layer.childElementCount > MAX_BLOBS) {
      layer.firstElementChild && layer.firstElementChild.remove();
    }
    const blob = document.createElement("span");
    blob.className = "energy-blob";
    const size = Math.min(150, 46 + speed * 2.2);
    const color = PALETTE[colorCursor % PALETTE.length];
    colorCursor++;
    blob.style.left = x + "px";
    blob.style.top = y + "px";
    blob.style.width = size + "px";
    blob.style.height = size + "px";
    blob.style.background = `radial-gradient(circle, ${color} 0%, ${color.replace(/[\d.]+\)$/, "0)")} 70%)`;
    layer.appendChild(blob);
    blob.addEventListener("animationend", () => blob.remove());
  }

  function handleMove(x, y) {
    const now = performance.now();
    if (lastX !== null) {
      const dx = x - lastX, dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      const dt = Math.max(now - lastT, 1);
      if (dist > MIN_DIST && dt > MIN_GAP_MS) {
        spawnBlob(x, y, dist / dt * 16);
        lastX = x; lastY = y; lastT = now;
      }
    } else {
      spawnBlob(x, y, 4);
      lastX = x; lastY = y; lastT = now;
    }
  }

  window.addEventListener("pointermove", (e) => handleMove(e.clientX, e.clientY), { passive: true });
  window.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (t) handleMove(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener("pointerdown", (e) => { lastX = null; spawnBlob(e.clientX, e.clientY, 10); });
})();
