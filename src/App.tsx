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

  async function handleGoogle() {
    setLoading(true); setErr("");
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      const userRef = ref(db, "users/" + cred.user.uid);
      const snap = await get(userRef);
      if (!snap.exists()) {
        // ✅ 改用 Realtime Database
        await set(userRef, {
          displayName: cred.user.displayName || "環保會員",
          avatar: "🌱", points: 0, streak: 0,
          checkinDays: [], completed: [], donations: {}, taskDonations: {},
          createdAt: Date.now(),
        });
      }
    } catch (e: any) {
      setErr("Google登入失敗，請再試一次");
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#1b5e20 0%,#2e7d32 50%,#43a047 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:FF, padding:20 }}>
      <div style={{ background:"#fff", borderRadius:28, padding:"36px 28px", width:"100%", maxWidth:380, boxShadow:"0 24px 80px rgba(0,0,0,0.3)" }}>
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ fontSize:52, marginBottom:8 }}>🌿</div>
          <div style={{ fontWeight:"bold", fontSize:24, color:"#1b5e20" }}>綠色行動</div>
          <div style={{ fontSize:13, color:"#aaa", marginTop:4 }}>一起守護地球，從今天開始</div>
        </div>

        {/* 模式切換 */}
        <div style={{ display:"flex", background:"#f1f8e9", borderRadius:14, padding:4, marginBottom:24 }}>
          {(["login","register"] as const).map(m => (
            <button key={m} onClick={() => { setMode(m); setErr(""); }} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:mode===m?"#2e7d32":"transparent", color:mode===m?"#fff":"#888", fontWeight:"bold", fontSize:14, cursor:"pointer", fontFamily:FF, transition:"all 0.2s" }}>
              {m==="login"?"🔑 登入":"📝 註冊"}
            </button>
          ))}
        </div>

        {/* 頭像選擇（僅註冊） */}
        {mode === "register" && (
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:12, fontWeight:"bold", color:"#555", marginBottom:8 }}>選擇頭像</div>
            <button onClick={() => setShowAv(!showAv)} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", background:"#fafafa", cursor:"pointer", width:"100%", fontFamily:FF }}>
              <span style={{ fontSize:28 }}>{avatar}</span>
              <span style={{ fontSize:13, color:"#888" }}>點擊更換頭像 ▾</span>
            </button>
            {showAv && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:8, padding:12, background:"#f9f9f9", borderRadius:12 }}>
                {AVATARS.map(av => (
                  <button key={av} onClick={() => { setAvatar(av); setShowAv(false); }} style={{ width:40, height:40, borderRadius:10, border:`2px solid ${avatar===av?"#2e7d32":"#eee"}`, background:avatar===av?"#e8f5e9":"#fff", fontSize:22, cursor:"pointer" }}>{av}</button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 暱稱（僅註冊） */}
        {mode === "register" && (
          <div style={{ marginBottom:14 }}>
            <div style={{ fontSize:12, fontWeight:"bold", color:"#555", marginBottom:6 }}>暱稱 *</div>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="例如：環保小勇士" style={{ width:"100%", padding:"11px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:14, fontFamily:FF, outline:"none", boxSizing:"border-box" }} />
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom:14 }}>
          <div style={{ fontSize:12, fontWeight:"bold", color:"#555", marginBottom:6 }}>Email *</div>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" style={{ width:"100%", padding:"11px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:14, fontFamily:FF, outline:"none", boxSizing:"border-box" }} />
        </div>

        {/* 密碼 */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:12, fontWeight:"bold", color:"#555", marginBottom:6 }}>密碼 {mode==="register"?"（至少6字元）":""} *</div>
          <input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleEmail()} placeholder="••••••" style={{ width:"100%", padding:"11px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:14, fontFamily:FF, outline:"none", boxSizing:"border-box" }} />
        </div>

        {err && <div style={{ color:"#e53935", fontSize:12, marginBottom:14, textAlign:"center", background:"#ffebee", padding:"8px 12px", borderRadius:10 }}>❌ {err}</div>}

        {/* Email登入/註冊按鈕 */}
        <button onClick={handleEmail} disabled={loading} style={{ width:"100%", padding:14, borderRadius:14, border:"none", background:"linear-gradient(135deg,#2e7d32,#43a047)", color:"#fff", fontWeight:"bold", fontSize:16, cursor:"pointer", fontFamily:FF, marginBottom:12, opacity:loading?0.7:1 }}>
          {loading ? "處理中..." : mode==="login" ? "🔑 登入" : "🌱 立即註冊"}
        </button>

        {/* 分隔線 */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
          <div style={{ flex:1, height:1, background:"#eee" }} />
          <span style={{ fontSize:12, color:"#bbb" }}>或</span>
          <div style={{ flex:1, height:1, background:"#eee" }} />
        </div>

        {/* Google登入 */}
        <button onClick={handleGoogle} disabled={loading} style={{ width:"100%", padding:12, borderRadius:14, border:"1.5px solid #e0e0e0", background:"#fff", color:"#555", fontWeight:"bold", fontSize:15, cursor:"pointer", fontFamily:FF, display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:16 }}>
          <span style={{ fontSize:20 }}>G</span> 使用 Google 登入
        </button>

        {/* 跳過（訪客） */}
        <button onClick={onSkip} style={{ width:"100%", padding:10, borderRadius:12, border:"none", background:"transparent", color:"#aaa", fontSize:13, cursor:"pointer", fontFamily:FF }}>
          👤 以訪客身份繼續（不儲存進度）
        </button>
      </div>
    </div>
  );
}

// ── 主 App ────────────────────────────────────────────────────────
export default function EcoApp() {
  const [authUser,    setAuthUser]    = useState<User|null|"loading">("loading");
  const [isGuest,     setIsGuest]     = useState(false);
  const [uid,         setUid]         = useState<string|null>(null);
  const [userName,    setUserName]    = useState("環保新芽");
  const [userAvatar,  setUserAvatar]  = useState("🌱");
  const [loading,     setLoading]     = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const [tab,         setTab]         = useState("挑戰");
  const [filter,      setFilter]      = useState("全部");
  const [checkinAnim, setCheckinAnim] = useState(false);
  const [donateModal, setDonateModal] = useState<any>(null);
  const [showCreate,  setShowCreate]  = useState(false);
  const [mapOpen,     setMapOpen]     = useState<any>(null);
  const [toast,       setToast]       = useState<string|null>(null);
  const [newTask,     setNewTask]     = useState({ icon:"🌱", title:"", desc:"", category:"生態", goal:"", deadline:"", loc:"" });

  const [points,      setPoints]      = useState(0);
  const [streak,      setStreak]      = useState(0);
  const [completed,   setCompleted]   = useState(new Set<number>());
  const [checkinDays, setCheckinDays] = useState(new Set<string>());
  const [myDonations, setMyDonations] = useState<Record<string,number>>({});
  const [myTaskDon,   setMyTaskDon]   = useState<Record<string,number>>({});
  const [projects,    setProjects]    = useState(PROJECTS_DEFAULT);
  const [memberTasks, setMemberTasks] = useState(MEMBER_TASKS_DEFAULT);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  function showToast(msg: string) { setToast(msg); setTimeout(()=>setToast(null),2500); }

  // ── Auth 監聽 ─────────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      if (!user) { setLoading(false); return; }
      setUid(user.uid);
      loadUser(user);
    });
    return unsub;
  }, []);

  // ✅ 改用 Realtime Database 讀取用戶資料
  async function loadUser(user: User) {
    try {
      const userRef = ref(db, "users/" + user.uid);
      const snap = await get(userRef);
      if (!snap.exists()) {
        const name = user.displayName || "環保新芽";
        await set(userRef, {
          displayName: name, avatar:"🌱", points:0, streak:0,
          checkinDays:[], completed:[], donations:{}, taskDonations:{},
          createdAt: Date.now(),
        });
        setUserName(name);
        setUserAvatar("🌱");
      } else {
        const d = snap.val();
        setUserName(d.displayName || "環保新芽");
        setUserAvatar(d.avatar || "🌱");
        setPoints(d.points || 0);
        setStreak(d.streak || 0);
        setCompleted(new Set(d.completed || []));
        setCheckinDays(new Set(d.checkinDays || []));
        setMyDonations(d.donations || {});
        setMyTaskDon(d.taskDonations || {});
      }
    } catch(e) {}
    setLoading(false);
  }

  // ✅ Realtime Database 即時同步
  useEffect(() => {
    if (!uid) return;

    // 監聽 memberTasks
    const tasksRef = ref(db, "memberTasks");
    const unsub1 = onValue(tasksRef, snap => {
      if (snap.exists()) {
        const data = snap.val();
        const tasks = Object.entries(data).map(([id, val]: any) => ({ id, ...val }));
        if (tasks.length > 0) setMemberTasks(tasks);
      }
    });

    // 監聽 projects
    const projectsRef = ref(db, "projects");
    const unsub2 = onValue(projectsRef, snap => {
      if (snap.exists()) {
        const data = snap.val();
        const ps = Object.entries(data).map(([id, val]: any) => ({ id, ...val }));
        if (ps.length > 0) setProjects(ps);
      }
    });

    // 監聽排行榜（所有用戶）
    const usersRef = ref(db, "users");
    const unsub3 = onValue(usersRef, snap => {
      if (snap.exists()) {
        const data = snap.val();
        const lb = Object.entries(data)
          .map(([uid, val]: any) => ({ uid, ...val }))
          .sort((a: any, b: any) => (b.points||0) - (a.points||0))
          .slice(0, 20);
        setLeaderboard(lb);
      }
    });

    return () => { unsub1(); unsub2(); unsub3(); };
  }, [uid]);

  async function handleLogout() {
    await signOut(auth);
    setIsGuest(false);
    setUid(null);
    setPoints(0); setStreak(0);
    setCompleted(new Set()); setCheckinDays(new Set());
    setMyDonations({}); setMyTaskDon({});
  }

  // ── CRUD 輔助函數 ──────────────────────────────────────────────
  // ✅ 改用 Realtime Database update
  async function toggleCh(id: number, pts: number) {
    const newSet = new Set(completed);
    if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); }
    setCompleted(newSet);
    const delta = newSet.has(id) ? pts : -pts;
    const newPts = Math.max(0, points + delta);
    setPoints(newPts);
    if (uid) {
      await update(ref(db, "users/" + uid), {
        completed: Array.from(newSet),
        points: newPts,
      });
    }
    showToast(newSet.has(id) ? "🌿 完成挑戰！+" + pts + "pts" : "取消完成");
  }

  async function doCheckin() {
    const today = todayStr();
    if (checkinDays.has(today)) return;
    const newDays = new Set(checkinDays); newDays.add(today);
    setCheckinDays(newDays); setCheckinAnim(true);
    const newStreak = streak + 1;
    const newPts = points + 10;
    setStreak(newStreak); setPoints(newPts);
    setTimeout(() => setCheckinAnim(false), 1800);
    if (uid) {
      // ✅ 改用 Realtime Database update
      await update(ref(db, "users/" + uid), {
        checkinDays: Array.from(newDays),
        streak: newStreak,
        points: newPts,
      });
    }
    showToast("📅 打卡成功！連續" + newStreak + "天");
  }

  async function donate(projId: string, amt: number) {
    const newDon = { ...myDonations, [projId]: (myDonations[projId]||0) + amt };
    setMyDonations(newDon);
    setProjects(ps => ps.map(p => p.id===projId ? {...p, raised:p.raised+amt, backers:p.backers+1} : p));
    // ✅ 改用 Realtime Database update
    if (uid) await update(ref(db, "users/" + uid), { donations: newDon });
    showToast("💚 感謝你的贊助！");
    setDonateModal(null);
  }

  async function donateTask(taskId: string, amt: number) {
    const newDon = { ...myTaskDon, [taskId]: (myTaskDon[taskId]||0) + amt };
    setMyTaskDon(newDon);
    setMemberTasks(ts => ts.map(t => t.id===taskId ? {...t, raised:t.raised+amt, backers:t.backers+1} : t));
    // ✅ 改用 Realtime Database update
    if (uid) await update(ref(db, "users/" + uid), { taskDonations: newDon });
    showToast("💚 成功贊助任務！");
  }

  async function joinTask(taskId: string) {
    if (!uid) return;
    const task = memberTasks.find(t => t.id===taskId);
    if (!task) return;
    const isJoined = (task.joined||[]).includes(uid);
    const newJoined = isJoined
      ? (task.joined||[]).filter((j: string) => j !== uid)
      : [...(task.joined||[]), uid];
    setMemberTasks(ts => ts.map(t => t.id===taskId ? { ...t, joined: newJoined } : t));
    // ✅ 改用 Realtime Database update
    await update(ref(db, "memberTasks/" + taskId), { joined: newJoined });
    showToast(isJoined ? "退出任務" : "✅ 成功加入任務！");
  }

  async function submitTask() {
    if (!newTask.title || !newTask.desc || !newTask.goal || !newTask.deadline) return;
    const idx = Math.floor(Math.random()*ACCENT_POOL.length);
    const task = {
      creatorName: userName, avatar: userAvatar,
      icon: newTask.icon, title: newTask.title, desc: newTask.desc,
      category: newTask.category, goal: Number(newTask.goal), raised: 0, backers: 0,
      deadline: newTask.deadline, accent: ACCENT_POOL[idx], color: COLOR_POOL[idx],
      joined: [], updates: [],
      location: newTask.loc ? { name: newTask.loc, lat: 25.033, lng: 121.565 } : null,
      createdAt: Date.now(),
    };
    // ✅ 改用 Realtime Database push
    const tasksRef = ref(db, "memberTasks");
    const newRef = push(tasksRef);
    await set(newRef, task);
    setMemberTasks(ts => [...ts, { ...task, id: newRef.key }]);
    setNewTask({ icon:"🌱", title:"", desc:"", category:"生態", goal:"", deadline:"", loc:"" });
    setShowCreate(false);
    showToast("✨ 任務發起成功！");
  }

  // ── 登入判斷 ─────────────────────────────────────────────────
  if (authUser === "loading" || loading) return <LoadingScreen />;
  if (!authUser && !isGuest) return <AuthScreen onSkip={() => setIsGuest(true)} />;

  const level = getLevel(points);
  const todayKey = todayStr();
  const checkedIn = checkinDays.has(todayKey);
  const now = new Date();
  const yr = now.getFullYear(); const mo = now.getMonth();
  const dim = daysInMonth(yr, mo);
  const cats = ["全部", ...Object.keys(CAT_COLORS)];

  // ── 個人資料 Modal ────────────────────────────────────────────
  const ProfileModal = () => (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:500, padding:20 }} onClick={() => setShowProfile(false)}>
      <div style={{ background:"#fff", borderRadius:24, padding:28, width:"100%", maxWidth:340 }} onClick={e=>e.stopPropagation()}>
        <div style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ fontSize:56, marginBottom:8 }}>{userAvatar}</div>
          <div style={{ fontWeight:"bold", fontSize:20, color:"#1b5e20" }}>{userName}</div>
          <div style={{ fontSize:13, color:"#888", marginTop:4 }}>{authUser && !isGuest ? (authUser as User).email : "訪客模式"}</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:20 }}>
          <div style={{ textAlign:"center", background:"#f1f8e9", borderRadius:14, padding:12 }}>
            <div style={{ fontWeight:"bold", fontSize:22, color:"#2e7d32" }}>{points}</div>
            <div style={{ fontSize:11, color:"#888" }}>積分</div>
          </div>
          <div style={{ textAlign:"center", background:"#fff3e0", borderRadius:14, padding:12 }}>
            <div style={{ fontWeight:"bold", fontSize:22, color:"#f57f17" }}>{streak}</div>
            <div style={{ fontSize:11, color:"#888" }}>連續天</div>
          </div>
          <div style={{ textAlign:"center", background:"#e3f2fd", borderRadius:14, padding:12 }}>
            <div style={{ fontWeight:"bold", fontSize:22, color:"#1565c0" }}>{completed.size}</div>
            <div style={{ fontSize:11, color:"#888" }}>完成挑戰</div>
          </div>
        </div>
        <div style={{ background:"#f9f9f9", borderRadius:14, padding:14, marginBottom:20, textAlign:"center" }}>
          <div style={{ fontSize:28 }}>{level.icon}</div>
          <div style={{ fontWeight:"bold", color:"#2e7d32", marginTop:4 }}>{level.name}</div>
          <div style={{ fontSize:11, color:"#aaa", marginTop:2 }}>下一等級還需 {level.next - points} 點</div>
        </div>
        {authUser && !isGuest ? (
          <button onClick={handleLogout} style={{ width:"100%", padding:12, borderRadius:12, border:"none", background:"#ffebee", color:"#c62828", fontWeight:"bold", fontSize:15, cursor:"pointer", fontFamily:FF }}>
            🚪 登出
          </button>
        ) : (
          <button onClick={() => { setShowProfile(false); setIsGuest(false); }} style={{ width:"100%", padding:12, borderRadius:12, border:"none", background:"linear-gradient(135deg,#2e7d32,#43a047)", color:"#fff", fontWeight:"bold", fontSize:15, cursor:"pointer", fontFamily:FF }}>
            🌿 立即登入/註冊
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth:480, margin:"0 auto", background:"#f5f7f5", minHeight:"100vh", fontFamily:FF, position:"relative" }}>
      {toast && <Toast msg={toast} />}
      {showProfile && <ProfileModal />}

      {/* 標題 */}
      <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"16px 20px 20px", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ color:"#fff", fontWeight:"bold", fontSize:20, letterSpacing:1 }}>🌿 綠色行動</div>
            <div style={{ color:"#a5d6a7", fontSize:12, marginTop:2 }}>
              {level.icon} {level.name} · {points} pts
              {!authUser && isGuest && <span style={{ color:"#ffcc02", marginLeft:8 }}>訪客模式</span>}
            </div>
          </div>
          <button onClick={() => setShowProfile(true)} style={{ background:"rgba(255,255,255,0.15)", border:"none", borderRadius:99, padding:"8px 14px", color:"#fff", fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", gap:6 }}>
            {userAvatar}
          </button>
        </div>

        {/* 訪客提示 */}
        {isGuest && (
          <div style={{ marginTop:10, background:"rgba(255,204,2,0.2)", borderRadius:10, padding:"8px 12px", fontSize:12, color:"#ffcc02", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span>⚠️ 訪客模式，資料不會儲存</span>
            <button onClick={() => setIsGuest(false)} style={{ background:"#ffcc02", border:"none", borderRadius:8, padding:"4px 10px", fontSize:11, color:"#1b5e20", cursor:"pointer", fontFamily:FF }}>立即登入</button>
          </div>
        )}

        {/* 分頁列 */}
        <div style={{ display:"flex", gap:4, marginTop:14 }}>
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex:1, padding:"8px 2px", borderRadius:12, border:"none", background:tab===t?"rgba(255,255,255,0.25)":"transparent", color:"#fff", fontSize:11, fontWeight:tab===t?"bold":"normal", cursor:"pointer", fontFamily:FF }}>
              {TAB_ICONS_M[t as keyof typeof TAB_ICONS_M]}<br/>{t}
            </button>
          ))}
        </div>
      </div>

      {/* 內容區 */}
      <div style={{ padding:"16px 16px 80px" }}>

        {/* ── 挑戰 Tab ── */}
        {tab === "挑戰" && (
          <div>
            <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:8, marginBottom:16 }}>
              {cats.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{ flexShrink:0, padding:"6px 14px", borderRadius:99, border:"none", background:filter===c?"#2e7d32":"#fff", color:filter===c?"#fff":"#555", fontWeight:filter===c?"bold":"normal", fontSize:12, cursor:"pointer", fontFamily:FF, boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
                  {c}
                </button>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {CHALLENGES.filter(ch => filter==="全部" || ch.category===filter).map(ch => {
                const done = completed.has(ch.id);
                const diff = DIFF_BADGE[ch.difficulty as keyof typeof DIFF_BADGE];
                return (
                  <div key={ch.id} style={{ background:"#fff", borderRadius:18, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:done?"2px solid #2e7d32":"2px solid transparent", transition:"all 0.2s" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                      <div style={{ fontSize:36, lineHeight:1 }}>{ch.icon}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                          <div style={{ fontWeight:"bold", fontSize:15, color:"#1b5e20" }}>{ch.title}</div>
                          <div style={{ fontSize:11, background:diff?.bg, color:diff?.color, borderRadius:99, padding:"2px 8px", fontWeight:"bold" }}>{ch.difficulty}</div>
                        </div>
                        <div style={{ fontSize:13, color:"#666", marginBottom:10 }}>{ch.desc}</div>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                          <div style={{ fontSize:12, color:CAT_COLORS[ch.category as keyof typeof CAT_COLORS], fontWeight:"bold", background:CAT_COLORS[ch.category as keyof typeof CAT_COLORS]+"18", borderRadius:99, padding:"3px 10px" }}>
                            {ch.category}
                          </div>
                          <button onClick={() => !isGuest && toggleCh(ch.id, ch.points)} style={{ padding:"8px 16px", borderRadius:99, border:"none", background:done?"#2e7d32":"#f1f8e9", color:done?"#fff":"#2e7d32", fontWeight:"bold", fontSize:13, cursor:isGuest?"not-allowed":"pointer", fontFamily:FF, transition:"all 0.2s" }}>
                            {done ? "✅ +" + ch.points : "+" + ch.points + " pts"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── 打卡 Tab ── */}
        {tab === "打卡" && (
          <div>
            {/* 打卡按鈕 */}
            <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", borderRadius:20, padding:24, textAlign:"center", marginBottom:20, position:"relative", overflow:"hidden" }}>
              {checkinAnim && <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:60, animation:"fadeOut 1.8s forwards" }}>🌿</div>}
              <div style={{ color:"#fff", fontSize:15, fontWeight:"bold", marginBottom:4 }}>今日打卡</div>
              <div style={{ color:"#a5d6a7", fontSize:13, marginBottom:16 }}>連續 {streak} 天 🔥</div>
              <button onClick={() => !isGuest && doCheckin()} disabled={checkedIn || isGuest} style={{ padding:"14px 40px", borderRadius:99, border:"none", background:checkedIn?"rgba(255,255,255,0.2)":"#fff", color:checkedIn?"rgba(255,255,255,0.6)":"#2e7d32", fontWeight:"bold", fontSize:16, cursor:checkedIn||isGuest?"not-allowed":"pointer", fontFamily:FF }}>
                {checkedIn ? "✅ 已打卡" : "📅 立即打卡 +10pts"}
              </button>
              <style>{`@keyframes fadeOut { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(2)} }`}</style>
            </div>

            {/* 月曆 */}
            <div style={{ background:"#fff", borderRadius:18, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight:"bold", fontSize:15, color:"#1b5e20", marginBottom:12, textAlign:"center" }}>
                {yr}年{mo+1}月 打卡記錄
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:4 }}>
                {["日","一","二","三","四","五","六"].map(d => (
                  <div key={d} style={{ textAlign:"center", fontSize:11, color:"#aaa", paddingBottom:4 }}>{d}</div>
                ))}
                {Array.from({length: new Date(yr,mo,1).getDay()}).map((_,i) => <div key={"e"+i}/>)}
                {Array.from({length:dim}).map((_,i) => {
                  const d = i+1;
                  const key = `${yr}-${String(mo+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
                  const checked = checkinDays.has(key);
                  const isToday = key === todayKey;
                  return (
                    <div key={d} style={{ textAlign:"center", padding:"6px 0", borderRadius:8, background:checked?"#2e7d32":isToday?"#e8f5e9":"transparent", color:checked?"#fff":isToday?"#2e7d32":"#555", fontSize:12, fontWeight:isToday?"bold":"normal" }}>
                      {checked ? "✓" : d}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── 排行榜 Tab ── */}
        {tab === "排行榜" && (
          <div>
            <div style={{ fontWeight:"bold", fontSize:16, color:"#1b5e20", marginBottom:16, textAlign:"center" }}>🏆 本週環保英雄榜</div>
            {leaderboard.length === 0 && (
              <div style={{ textAlign:"center", color:"#aaa", padding:40 }}>還沒有排行榜資料</div>
            )}
            {leaderboard.map((u: any, i: number) => {
              const isMe = u.uid === uid;
              const lv = getLevel(u.points||0);
              return (
                <div key={u.uid} style={{ background:isMe?"#e8f5e9":"#fff", borderRadius:16, padding:"12px 16px", marginBottom:10, display:"flex", alignItems:"center", gap:12, boxShadow:"0 2px 10px rgba(0,0,0,0.06)", border:isMe?"2px solid #2e7d32":"2px solid transparent" }}>
                  <div style={{ fontSize:20, width:32, textAlign:"center", fontWeight:"bold", color:i===0?"#f57f17":i===1?"#9e9e9e":i===2?"#8d6e63":"#aaa" }}>
                    {i===0?"🥇":i===1?"🥈":i===2?"🥉":i+1}
                  </div>
                  <div style={{ fontSize:28 }}>{u.avatar||"🌱"}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:"bold", fontSize:14, color:"#1b5e20" }}>{u.displayName||"環保會員"}{isMe?" (我)":""}</div>
                    <div style={{ fontSize:11, color:"#888" }}>{lv.icon} {lv.name}</div>
                  </div>
                  <div style={{ fontWeight:"bold", fontSize:16, color:"#2e7d32" }}>{u.points||0} pts</div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── 贊助 Tab ── */}
        {tab === "贊助" && (
          <div>
            <div style={{ fontWeight:"bold", fontSize:16, color:"#1b5e20", marginBottom:16 }}>💚 環保贊助專案</div>
            {projects.map(p => {
              const pct = Math.min(100, Math.round(p.raised/p.goal*100));
              const myAmt = myDonations[p.id]||0;
              return (
                <div key={p.id} style={{ background:p.color||"#fff", borderRadius:18, padding:16, marginBottom:14, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:10 }}>
                    <div style={{ fontSize:36 }}>{p.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:"bold", fontSize:15, color:p.accent }}>{p.title}</div>
                      <div style={{ fontSize:12, color:"#888" }}>{p.org}</div>
                    </div>
                  </div>
                  <div style={{ fontSize:13, color:"#555", marginBottom:12 }}>{p.desc}</div>
                  <div style={{ marginBottom:10 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#888", marginBottom:4 }}>
                      <span style={{ color:p.accent, fontWeight:"bold" }}>NT${p.raised.toLocaleString()} 募得</span>
                      <span>目標 NT${p.goal.toLocaleString()}</span>
                    </div>
                    <div style={{ background:"rgba(0,0,0,0.08)", borderRadius:99, height:8, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:pct+"%", background:p.accent, borderRadius:99, transition:"width 0.6s" }} />
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                      <span style={{ fontSize:11, color:p.accent, fontWeight:"bold" }}>{pct}%</span>
                      <span style={{ fontSize:11, color:"#aaa" }}>👤 {p.backers} 人支持</span>
                    </div>
                  </div>
                  {!isGuest && (
                    <button onClick={() => setDonateModal(p)} style={{ width:"100%", padding:"10px", borderRadius:12, border:"none", background:p.accent, color:"#fff", fontWeight:"bold", fontSize:14, cursor:"pointer", fontFamily:FF }}>
                      💚 贊助此專案
                    </button>
                  )}
                  {myAmt > 0 && <div style={{ marginTop:8, textAlign:"right", fontSize:11, color:p.accent, fontWeight:"bold" }}>我已贊助 NT${myAmt}</div>}
                </div>
              );
            })}
          </div>
        )}

        {/* ── 發起 Tab ── */}
        {tab === "發起" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
              <div style={{ fontWeight:"bold", fontSize:16, color:"#1b5e20" }}>✨ 會員環保任務</div>
              {!isGuest && (
                <button onClick={() => setShowCreate(true)} style={{ padding:"8px 16px", borderRadius:99, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", fontSize:13, cursor:"pointer", fontFamily:FF }}>
                  + 發起
                </button>
              )}
            </div>
            {memberTasks.map(task => {
              try {
              const pct = task.goal > 0 ? Math.min(100, Math.round((task.raised||0)/task.goal*100)) : 0;
              const done = pct >= 100;
              const isJoin = uid && Array.isArray(task.joined) && task.joined.includes(uid);
              const myAmt = myTaskDon[task.id]||0;
              return (
                <div key={task.id} style={{ background:task.color||"#fff", borderRadius:18, padding:16, marginBottom:14, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}>
                    <div style={{ fontSize:32 }}>{task.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:"bold", fontSize:15, color:task.accent }}>{task.title}</div>
                      <div style={{ fontSize:11, color:"#888" }}>{task.avatar} {task.creatorName} · {task.deadline}</div>
                    </div>
                    <div style={{ fontSize:11, background:(CAT_COLORS[task.category as keyof typeof CAT_COLORS]||"#4CAF50")+"22", color:CAT_COLORS[task.category as keyof typeof CAT_COLORS]||"#4CAF50", borderRadius:99, padding:"3px 8px", fontWeight:"bold" }}>{task.category}</div>
                  </div>
                  <div style={{ fontSize:13, color:"#555", marginBottom:10 }}>{task.desc}</div>
                  {task.location && (
                    <button onClick={() => setMapOpen(mapOpen===task.id?null:task.id)} style={{ fontSize:12, color:task.accent, background:"transparent", border:"none", cursor:"pointer", marginBottom:8, padding:0 }}>
                      📍 {task.location.name} — 點擊查看地圖
                    </button>
                  )}
                  {mapOpen === task.id && task.location && (
                    <MiniMap lat={task.location.lat} lng={task.location.lng} label={task.location.name} accent={task.accent} />
                  )}
                  <div style={{ marginBottom:12 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#888", marginBottom:4 }}>
                      <span style={{ color:task.accent, fontWeight:"bold" }}>NT${task.raised.toLocaleString()} 募得</span>
                      <span>目標 NT${task.goal.toLocaleString()}</span>
                    </div>
                    <div style={{ background:"#f1f8e9", borderRadius:99, height:8, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:pct+"%", background:"linear-gradient(90deg,"+task.accent+"88,"+task.accent+")", borderRadius:99, transition:"width 0.6s" }} />
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", marginTop:4 }}>
                      <span style={{ fontSize:11, color:task.accent, fontWeight:"bold" }}>{pct.toFixed(0)}%</span>
                      <span style={{ fontSize:11, color:"#aaa" }}>👤 {task.backers} 人支持 · {(task.joined||[]).length} 人加入</span>
                    </div>
                  </div>
                  {task.updates&&task.updates.length>0 && (
                    <div style={{ background:"rgba(0,0,0,0.03)", borderRadius:10, padding:"8px 10px", marginBottom:12, fontSize:11, color:"#666", borderLeft:"3px solid "+task.accent }}>
                      📢 {task.updates[task.updates.length-1]}
                    </div>
                  )}
                  {!done && !isGuest && (
                    <div style={{ display:"flex", gap:8 }}>
                      {[50,100,200].map(amt => (
                        <button key={amt} onClick={() => donateTask(task.id, amt)} style={{ flex:1, padding:"8px 0", borderRadius:10, border:"1.5px solid "+task.accent, background:"transparent", color:task.accent, fontSize:12, cursor:"pointer", fontFamily:FF }}>NT${amt}</button>
                      ))}
                      <button onClick={() => joinTask(task.id)} style={{ flex:1, padding:"8px 0", borderRadius:10, border:"1.5px solid "+task.accent, background:isJoin?task.accent:"transparent", color:isJoin?"#fff":task.accent, fontWeight:"bold", fontSize:12, cursor:"pointer", fontFamily:FF }}>
                        {isJoin?"✅ 已加入":"加入"}
                      </button>
                    </div>
                  )}
                  {done && <div style={{ textAlign:"center", padding:"10px", background:task.accent+"18", borderRadius:10, fontSize:13, color:task.accent, fontWeight:"bold" }}>🎉 目標達成！</div>}
                  {myAmt>0 && <div style={{ marginTop:8, textAlign:"right", fontSize:11, color:task.accent, fontWeight:"bold" }}>我贊助 NT${myAmt}</div>}
                </div>
              );
              } catch(e) {
                return <div key={task.id} style={{ background:"#ffebee", borderRadius:12, padding:12, marginBottom:10, fontSize:12, color:"#c62828" }}>⚠️ 任務資料錯誤：{task.title||task.id}</div>;
              }
            })}
          </div>
        )}
      </div>

      {/* 贊助 Modal */}
      {donateModal && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:300 }} onClick={() => setDonateModal(null)}>
          <div style={{ background:"#fff", borderRadius:"22px 22px 0 0", padding:"24px 20px 32px", width:"100%", maxWidth:480 }} onClick={e=>e.stopPropagation()}>
            <div style={{ textAlign:"center", marginBottom:20 }}>
              <div style={{ fontSize:36 }}>{donateModal.icon}</div>
              <div style={{ fontWeight:"bold", fontSize:17, marginTop:8 }}>{donateModal.title}</div>
              <div style={{ fontSize:13, color:"#888" }}>{donateModal.org}</div>
            </div>
            <div style={{ fontSize:14, color:"#555", marginBottom:20, textAlign:"center" }}>選擇贊助金額（每筆 NT${donateModal.unit}）</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[1,2,5,10].map(n => (
                <button key={n} onClick={() => donate(donateModal.id, donateModal.unit * n)} style={{ padding:16, borderRadius:14, border:"2px solid "+donateModal.accent, background:"transparent", color:donateModal.accent, fontWeight:"bold", fontSize:16, cursor:"pointer", fontFamily:FF }}>
                  NT${donateModal.unit * n}
                </button>
              ))}
            </div>
            <button onClick={() => setDonateModal(null)} style={{ width:"100%", marginTop:14, padding:12, borderRadius:12, border:"none", background:"#f5f5f5", color:"#888", fontSize:14, cursor:"pointer", fontFamily:FF }}>取消</button>
          </div>
        </div>
      )}

      {/* 發起任務 Modal */}
      {showCreate && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", display:"flex", alignItems:"flex-end", justifyContent:"center", zIndex:300 }} onClick={() => setShowCreate(false)}>
          <div style={{ background:"#fff", borderRadius:"22px 22px 0 0", padding:"24px 20px 32px", width:"100%", maxWidth:480, maxHeight:"85vh", overflowY:"auto" }} onClick={e=>e.stopPropagation()}>
            <div style={{ textAlign:"center", marginBottom:18 }}>
              <div style={{ fontSize:28 }}>✨</div>
              <div style={{ fontWeight:"bold", fontSize:17, color:"#2d5a27", marginTop:4 }}>發起新環保任務</div>
            </div>
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:12, color:"#555", fontWeight:"bold", marginBottom:8 }}>選擇圖示</div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                {TASK_ICONS.map(ic => (
                  <button key={ic} onClick={() => setNewTask(p=>({...p,icon:ic}))} style={{ width:40, height:40, borderRadius:10, border:"2px solid "+(newTask.icon===ic?"#2e7d32":"#eee"), background:newTask.icon===ic?"#e8f5e9":"#fafafa", fontSize:20, cursor:"pointer" }}>{ic}</button>
                ))}
              </div>
            </div>
            {[["title","任務名稱","例如：社區植樹日"],["desc","任務說明","描述你的環保任務內容與目標…"],["loc","📍 活動地點","例如：大安森林公園，台北市"]].map(([k,l,ph]) => (
              <div key={k} style={{ marginBottom:12 }}>
                <div style={{ fontSize:12, color:"#555", fontWeight:"bold", marginBottom:6 }}>{l} {k!=="loc"?"*":""}</div>
                {k==="desc" ? (
                  <textarea value={(newTask as any)[k]} onChange={e=>setNewTask(p=>({...p,[k]:e.target.value}))} placeholder={ph} rows={3} style={{ width:"100%", padding:"10px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:13, fontFamily:FF, outline:"none", resize:"none", boxSizing:"border-box", background:"#fafafa" }} />
                ) : (
                  <input value={(newTask as any)[k]} onChange={e=>setNewTask(p=>({...p,[k]:e.target.value}))} placeholder={ph} style={{ width:"100%", padding:"10px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:14, fontFamily:FF, outline:"none", boxSizing:"border-box", background:"#fafafa" }} />
                )}
              </div>
            ))}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
              <div>
                <div style={{ fontSize:12, color:"#555", fontWeight:"bold", marginBottom:6 }}>分類</div>
                <select value={newTask.category} onChange={e=>setNewTask(p=>({...p,category:e.target.value}))} style={{ width:"100%", padding:"10px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:13, fontFamily:FF, background:"#fafafa", outline:"none" }}>
                  {Object.keys(CAT_COLORS).map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <div style={{ fontSize:12, color:"#555", fontWeight:"bold", marginBottom:6 }}>募款目標（新台幣）*</div>
                <input type="number" value={newTask.goal} onChange={e=>setNewTask(p=>({...p,goal:e.target.value}))} placeholder="5000" style={{ width:"100%", padding:"10px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:13, fontFamily:FF, outline:"none", boxSizing:"border-box", background:"#fafafa" }} />
              </div>
            </div>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, color:"#555", fontWeight:"bold", marginBottom:6 }}>截止日期 *</div>
              <input type="date" value={newTask.deadline} onChange={e=>setNewTask(p=>({...p,deadline:e.target.value}))} style={{ width:"100%", padding:"10px 14px", borderRadius:12, border:"1.5px solid #e8f5e9", fontSize:13, fontFamily:FF, outline:"none", boxSizing:"border-box", background:"#fafafa" }} />
            </div>
            <button onClick={submitTask} style={{ width:"100%", padding:14, borderRadius:14, border:"none", background:newTask.title&&newTask.desc&&newTask.goal&&newTask.deadline?"linear-gradient(135deg,#2e7d32,#43a047)":"#e0e0e0", color:newTask.title&&newTask.desc&&newTask.goal&&newTask.deadline?"#fff":"#aaa", fontWeight:"bold", fontSize:15, cursor:"pointer", fontFamily:FF, marginBottom:10 }}>
              🌱 發起任務
            </button>
            <button onClick={() => setShowCreate(false)} style={{ width:"100%", padding:12, borderRadius:12, border:"none", background:"#f1f8e9", color:"#888", fontSize:14, cursor:"pointer", fontFamily:FF }}>取消</button>
          </div>
        </div>
      )}

      <div style={{ height:32 }} />
    </div>
  );
}
