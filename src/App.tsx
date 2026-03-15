// ╔══════════════════════════════════════════════════════════════╗
// ║  綠色行動 App  —  完整會員系統版（Realtime Database）          ║
// ╚══════════════════════════════════════════════════════════════╝

import { useState, useEffect, useCallback } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth, onAuthStateChanged, signInAnonymously,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, updateProfile,
  User,
} from "firebase/auth";
import {
  getDatabase, ref, get, set, update, onValue,
  push, serverTimestamp, remove,
} from "firebase/database";

// ── 🔥 Firebase 設定 ─────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyA_2340AhDRdUOJGq8dX7eV2b2caxegj54",
  authDomain:        "green-move-3a29d.firebaseapp.com",
  projectId:         "green-move-3a29d",
  storageBucket:     "green-move-3a29d.firebasestorage.app",
  messagingSenderId: "397397942804",
  appId:             "1:397397942804:web:f809cd260a0aa4fae9bd01",
  databaseURL:       "https://green-move-3a29d-default-rtdb.firebaseio.com",
};
// ─────────────────────────────────────────────────────────────────

const fbApp = initializeApp(firebaseConfig);
const auth  = getAuth(fbApp);
const db    = getDatabase(fbApp);
const googleProvider = new GoogleAuthProvider();

// ── 靜態資料 ─────────────────────────────────────────────────────
const CHALLENGES = [
  { id:1,  icon:"🚶",  title:"以步代車",    desc:"今天步行或騎自行車代替開車",   points:30,  category:"交通", difficulty:"簡單" },
  { id:2,  icon:"🛍️", title:"自備購物袋",  desc:"購物時使用環保袋，拒絕塑膠袋", points:20,  category:"生活", difficulty:"簡單" },
  { id:3,  icon:"💧",  title:"節水挑戰",    desc:"洗澡縮短至5分鐘以內",         points:25,  category:"用水", difficulty:"中等" },
  { id:4,  icon:"🌱",  title:"種一棵植物",  desc:"在家種植一盆植物或蔬菜",       points:50,  category:"生態", difficulty:"中等" },
  { id:5,  icon:"♻️", title:"垃圾分類達人", desc:"正確分類今日所有垃圾",         points:20,  category:"回收", difficulty:"簡單" },
  { id:6,  icon:"🥗",  title:"無肉星期一",  desc:"今天只吃蔬食，減少碳排放",     points:40,  category:"飲食", difficulty:"中等" },
  { id:7,  icon:"💡",  title:"節電行動",    desc:"今天減少1小時的電器使用",      points:30,  category:"能源", difficulty:"簡單" },
  { id:8,  icon:"🧴",  title:"拒絕一次性",  desc:"使用可重複使用的餐具或杯子",   points:25,  category:"生活", difficulty:"簡單" },
  { id:9,  icon:"🌊",  title:"淨灘行動",    desc:"參與或自行清理附近的垃圾",     points:100, category:"社區", difficulty:"困難" },
  { id:10, icon:"🔋",  title:"舊電池回收",  desc:"收集舊電池送至回收站",         points:35,  category:"回收", difficulty:"中等" },
];

const PROJECTS_DEFAULT = [
  { id:"p1", icon:"🌳", title:"種一百棵樹",   org:"台灣森林協會", goal:10000, raised:6840, unit:10, desc:"每筆贊助10元，協助山地造林復育",     color:"#E8F5E9", accent:"#2E7D32", backers:68 },
  { id:"p2", icon:"🌊", title:"淨化海洋計畫", org:"海洋守護隊",   goal:8000,  raised:5120, unit:20, desc:"每筆贊助20元，購買淨灘清潔設備",     color:"#E3F2FD", accent:"#1565C0", backers:44 },
  { id:"p3", icon:"☀️", title:"偏鄉太陽能板", org:"綠能希望基金", goal:15000, raised:9300, unit:50, desc:"每筆贊助50元，讓偏鄉學校用上太陽能", color:"#FFF8E1", accent:"#F57F17", backers:31 },
  { id:"p4", icon:"🐝", title:"蜜蜂生態復育", org:"生態研究所",   goal:6000,  raised:2100, unit:15, desc:"每筆贊助15元，保護授粉昆蟲棲地",     color:"#FFF3E0", accent:"#E65100", backers:22 },
  { id:"p5", icon:"💧", title:"淨水過濾設備", org:"清淨水源聯盟", goal:12000, raised:7600, unit:30, desc:"每筆贊助30元，提供山村安全飲水",     color:"#E0F7FA", accent:"#00695C", backers:55 },
];

const MEMBER_TASKS_DEFAULT = [
  { id:"m1", creatorName:"小葉",  avatar:"👧", icon:"🧹", title:"社區清潔日",
    desc:"組織社區居民一起清掃附近公園與街道，打造乾淨的生活環境。",
    category:"社區", goal:3000, raised:1840, backers:24, deadline:"2026-03-20",
    accent:"#2E7D32", color:"#E8F5E9", joined:[],
    updates:["已有20位居民報名參加！","確認場地：文化公園集合"],
    location:{ name:"文化公園，台北市大安區", lat:25.0268, lng:121.5432 } },
  { id:"m2", creatorName:"環保王", avatar:"👨", icon:"🌻", title:"校園花圃重建",
    desc:"號召學生志工重新整理學校荒廢的花圃，種植本土植物。",
    category:"生態", goal:5000, raised:2200, backers:18, deadline:"2026-03-28",
    accent:"#F57F17", color:"#FFF8E1", joined:[],
    updates:["已購買種子與土壤"],
    location:{ name:"台灣大學校園，台北市大安區", lat:25.0174, lng:121.5398 } },
  { id:"m3", creatorName:"大樹哥", avatar:"🧔", icon:"🚴", title:"無車通勤挑戰週",
    desc:"發起一週不開車上班活動，記錄里程換算減少的碳排放量。",
    category:"交通", goal:2000, raised:2000, backers:41, deadline:"2026-03-10",
    accent:"#6A1B9A", color:"#F3E5F5", joined:[],
    updates:["目標達成！感謝所有參與者","累計減少碳排放 320kg"],
    location:{ name:"信義區自行車道，台北市", lat:25.0330, lng:121.5654 } },
];

const CAT_COLORS  = { 交通:"#4CAF50", 生活:"#81C784", 用水:"#29B6F6", 生態:"#66BB6A", 回收:"#FFA726", 飲食:"#A5D6A7", 能源:"#FFCC02", 社區:"#EF9A9A" };
const DIFF_BADGE  = { 簡單:{bg:"#E8F5E9",color:"#388E3C"}, 中等:{bg:"#FFF8E1",color:"#F57F17"}, 困難:{bg:"#FCE4EC",color:"#C62828"} };
const ACCENT_POOL = ["#2E7D32","#1565C0","#F57F17","#E65100","#6A1B9A","#00695C","#C62828","#37474F"];
const COLOR_POOL  = ["#E8F5E9","#E3F2FD","#FFF8E1","#FFF3E0","#F3E5F5","#E0F7FA","#FCE4EC","#ECEFF1"];
const TASK_ICONS  = ["🌱","🌳","🌊","♻️","🌻","🧹","🚴","💧","🐝","☀️","🦋","🐢","🌿","🏕️","🌾"];
const TABS        = ["挑戰","打卡","排行榜","贊助","發起"];
const TAB_ICONS_M = { 挑戰:"🌿", 打卡:"📅", 排行榜:"🏆", 贊助:"💚", 發起:"✨" };
const FF          = "Georgia, serif";
const AVATARS     = ["🌱","🌿","🍃","🌳","🌍","🌊","☀️","🐝","🦋","🐢","🌻","⚡","🔋","♻️","🌾"];

function getLevel(pts: number) {
  if (pts < 100) return { name:"環保新芽",   icon:"🌱", next:100 };
  if (pts < 250) return { name:"綠葉守護者", icon:"🍃", next:250 };
  if (pts < 500) return { name:"森林之友",   icon:"🌳", next:500 };
  return           { name:"地球守護神", icon:"🌍", next:999 };
}
function todayStr()      { return new Date().toISOString().slice(0,10); }
function daysInMonth(y: number, m: number){ return new Date(y,m+1,0).getDate(); }

// ── Toast ────────────────────────────────────────────────────────
function Toast({ msg }: { msg: string }) {
  return (
    <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", background:"#1b5e20", color:"#fff", borderRadius:30, padding:"10px 24px", fontWeight:"bold", fontSize:14, zIndex:999, whiteSpace:"nowrap", fontFamily:FF, boxShadow:"0 4px 20px rgba(0,0,0,0.25)" }}>
      {msg}
    </div>
  );
}

// ── MiniMap ──────────────────────────────────────────────────────
function MiniMap({ lat, lng, label, accent }: { lat: number, lng: number, label: string, accent: string }) {
  const bbox = (lng-0.008)+"%2C"+(lat-0.005)+"%2C"+(lng+0.008)+"%2C"+(lat+0.005);
  const src  = "https://www.openstreetmap.org/export/embed.html?bbox="+bbox+"&layer=mapnik&marker="+lat+"%2C"+lng;
  const href = "https://www.openstreetmap.org/?mlat="+lat+"&mlon="+lng+"#map=15/"+lat+"/"+lng;
  return (
    <div style={{ borderRadius:14, overflow:"hidden", border:"2px solid "+accent+"44", marginBottom:10, position:"relative" }}>
      <iframe src={src} width="100%" height="175" style={{ border:"none", display:"block" }} title={label} loading="lazy" />
      <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent,rgba(0,0,0,0.55))", padding:"18px 10px 6px", pointerEvents:"none" }}>
        <div style={{ color:"#fff", fontSize:11, fontWeight:"bold" }}>📍 {label}</div>
      </div>
      <a href={href} target="_blank" rel="noreferrer" style={{ position:"absolute", top:8, right:8, background:"#fff", borderRadius:20, padding:"4px 10px", fontSize:11, color:"#2e7d32", fontWeight:"bold", textDecoration:"none", boxShadow:"0 1px 6px rgba(0,0,0,0.2)" }}>
        🗺 放大
      </a>
    </div>
  );
}

// ── LoadingScreen ─────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#1b5e20,#2e7d32)", fontFamily:FF }}>
      <div style={{ fontSize:56, marginBottom:16 }}>🌿</div>
      <div style={{ color:"#fff", fontSize:20, fontWeight:"bold", letterSpacing:2, marginBottom:8 }}>綠色行動</div>
      <div style={{ color:"#a5d6a7", fontSize:13 }}>正在連線...</div>
      <div style={{ marginTop:24, width:40, height:40, border:"4px solid rgba(255,255,255,0.3)", borderTop:"4px solid #fff", borderRadius:"50%", animation:"spin 1s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── AuthScreen (登入/註冊) ────────────────────────────────────────
function AuthScreen({ onSkip }: { onSkip: () => void }) {
  const [mode, setMode]       = useState<"login"|"register">("login");
  const [email, setEmail]     = useState("");
  const [pw, setPw]           = useState("");
  const [name, setName]       = useState("");
  const [avatar, setAvatar]   = useState("🌱");
  const [err, setErr]         = useState("");
  const [loading, setLoading] = useState(false);
  const [showAv, setShowAv]   = useState(false);

  async function handleEmail() {
    if (!email || !pw) { setErr("請填寫Email和密碼"); return; }
    if (mode === "register" && !name) { setErr("請填寫暱稱"); return; }
    if (mode === "register" && pw.length < 6) { setErr("密碼至少需要6個字元"); return; }
    setLoading(true); setErr("");
    try {
      if (mode === "register") {
        const cred = await createUserWithEmailAndPassword(auth, email, pw);
        await updateProfile(cred.user, { displayName: name });
        // ✅ 改用 Realtime Database
        await set(ref(db, "users/" + cred.user.uid), {
          displayName: name, avatar, points: 0, streak: 0,
          checkinDays: [], completed: [], donations: {}, taskDonations: {},
          createdAt: Date.now(),
        });
      } else {
        await signInWithEmailAndPassword(auth, email, pw);
      }
    } catch (e: any) {
      const msg: Record<string,string> = {
        "auth/email-already-in-use": "此Email已被註冊",
        "auth/invalid-email": "Email格式不正確",
        "auth/wrong-password": "密碼錯誤",
        "auth/user-not-found": "找不到此帳號",
        "auth/invalid-credential": "帳號或密碼錯誤",
      };
      setErr(msg[e.code] || "發生錯誤，請再試一次");
      setLoading(false);
    }
  }

  async
