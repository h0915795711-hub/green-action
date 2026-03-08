// ╔══════════════════════════════════════════════════════════════╗
// ║  綠色行動 App  —  Firebase 完整整合版                         ║
// ║  npm install firebase  後即可使用                             ║
// ║  將 firebaseConfig 替換成你自己的設定                         ║
// ╚══════════════════════════════════════════════════════════════╝

import { useState, useEffect, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
} from 'firebase/firestore';

// ── 🔥 請替換成你的 Firebase 設定 ────────────────────────────────
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID',
};
// ─────────────────────────────────────────────────────────────────

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
const db = getFirestore(fbApp);

// ── 靜態資料 ─────────────────────────────────────────────────────
const CHALLENGES = [
  {
    id: 1,
    icon: '🚶',
    title: '以步代車',
    desc: '今天步行或騎自行車代替開車',
    points: 30,
    category: '交通',
    difficulty: '簡單',
  },
  {
    id: 2,
    icon: '🛍️',
    title: '自備購物袋',
    desc: '購物時使用環保袋，拒絕塑膠袋',
    points: 20,
    category: '生活',
    difficulty: '簡單',
  },
  {
    id: 3,
    icon: '💧',
    title: '節水挑戰',
    desc: '洗澡縮短至5分鐘以內',
    points: 25,
    category: '用水',
    difficulty: '中等',
  },
  {
    id: 4,
    icon: '🌱',
    title: '種一棵植物',
    desc: '在家種植一盆植物或蔬菜',
    points: 50,
    category: '生態',
    difficulty: '中等',
  },
  {
    id: 5,
    icon: '♻️',
    title: '垃圾分類達人',
    desc: '正確分類今日所有垃圾',
    points: 20,
    category: '回收',
    difficulty: '簡單',
  },
  {
    id: 6,
    icon: '🥗',
    title: '無肉星期一',
    desc: '今天只吃蔬食，減少碳排放',
    points: 40,
    category: '飲食',
    difficulty: '中等',
  },
  {
    id: 7,
    icon: '💡',
    title: '節電行動',
    desc: '今天減少1小時的電器使用',
    points: 30,
    category: '能源',
    difficulty: '簡單',
  },
  {
    id: 8,
    icon: '🧴',
    title: '拒絕一次性',
    desc: '使用可重複使用的餐具或杯子',
    points: 25,
    category: '生活',
    difficulty: '簡單',
  },
  {
    id: 9,
    icon: '🌊',
    title: '淨灘行動',
    desc: '參與或自行清理附近的垃圾',
    points: 100,
    category: '社區',
    difficulty: '困難',
  },
  {
    id: 10,
    icon: '🔋',
    title: '舊電池回收',
    desc: '收集舊電池送至回收站',
    points: 35,
    category: '回收',
    difficulty: '中等',
  },
];

const PROJECTS_DEFAULT = [
  {
    id: 'p1',
    icon: '🌳',
    title: '種一百棵樹',
    org: '台灣森林協會',
    goal: 10000,
    raised: 6840,
    unit: 10,
    desc: '每筆贊助10元，協助山地造林復育',
    color: '#E8F5E9',
    accent: '#2E7D32',
    backers: 68,
  },
  {
    id: 'p2',
    icon: '🌊',
    title: '淨化海洋計畫',
    org: '海洋守護隊',
    goal: 8000,
    raised: 5120,
    unit: 20,
    desc: '每筆贊助20元，購買淨灘清潔設備',
    color: '#E3F2FD',
    accent: '#1565C0',
    backers: 44,
  },
  {
    id: 'p3',
    icon: '☀️',
    title: '偏鄉太陽能板',
    org: '綠能希望基金',
    goal: 15000,
    raised: 9300,
    unit: 50,
    desc: '每筆贊助50元，讓偏鄉學校用上太陽能',
    color: '#FFF8E1',
    accent: '#F57F17',
    backers: 31,
  },
  {
    id: 'p4',
    icon: '🐝',
    title: '蜜蜂生態復育',
    org: '生態研究所',
    goal: 6000,
    raised: 2100,
    unit: 15,
    desc: '每筆贊助15元，保護授粉昆蟲棲地',
    color: '#FFF3E0',
    accent: '#E65100',
    backers: 22,
  },
  {
    id: 'p5',
    icon: '💧',
    title: '淨水過濾設備',
    org: '清淨水源聯盟',
    goal: 12000,
    raised: 7600,
    unit: 30,
    desc: '每筆贊助30元，提供山村安全飲水',
    color: '#E0F7FA',
    accent: '#00695C',
    backers: 55,
  },
];

const MEMBER_TASKS_DEFAULT = [
  {
    id: 'm1',
    creatorName: '小葉',
    avatar: '👧',
    icon: '🧹',
    title: '社區清潔日',
    desc: '組織社區居民一起清掃附近公園與街道，打造乾淨的生活環境。',
    category: '社區',
    goal: 3000,
    raised: 1840,
    backers: 24,
    deadline: '2026-03-20',
    accent: '#2E7D32',
    color: '#E8F5E9',
    joined: [],
    updates: ['已有20位居民報名參加！', '確認場地：文化公園集合'],
    location: { name: '文化公園，台北市大安區', lat: 25.0268, lng: 121.5432 },
  },
  {
    id: 'm2',
    creatorName: '環保王',
    avatar: '👨',
    icon: '🌻',
    title: '校園花圃重建',
    desc: '號召學生志工重新整理學校荒廢的花圃，種植本土植物。',
    category: '生態',
    goal: 5000,
    raised: 2200,
    backers: 18,
    deadline: '2026-03-28',
    accent: '#F57F17',
    color: '#FFF8E1',
    joined: [],
    updates: ['已購買種子與土壤'],
    location: {
      name: '台灣大學校園，台北市大安區',
      lat: 25.0174,
      lng: 121.5398,
    },
  },
  {
    id: 'm3',
    creatorName: '大樹哥',
    avatar: '🧔',
    icon: '🚴',
    title: '無車通勤挑戰週',
    desc: '發起一週不開車上班活動，記錄里程換算減少的碳排放量。',
    category: '交通',
    goal: 2000,
    raised: 2000,
    backers: 41,
    deadline: '2026-03-10',
    accent: '#6A1B9A',
    color: '#F3E5F5',
    joined: [],
    updates: ['目標達成！感謝所有參與者', '累計減少碳排放 320kg'],
    location: { name: '信義區自行車道，台北市', lat: 25.033, lng: 121.5654 },
  },
];

const CAT_COLORS = {
  交通: '#4CAF50',
  生活: '#81C784',
  用水: '#29B6F6',
  生態: '#66BB6A',
  回收: '#FFA726',
  飲食: '#A5D6A7',
  能源: '#FFCC02',
  社區: '#EF9A9A',
};
const DIFF_BADGE = {
  簡單: { bg: '#E8F5E9', color: '#388E3C' },
  中等: { bg: '#FFF8E1', color: '#F57F17' },
  困難: { bg: '#FCE4EC', color: '#C62828' },
};
const ACCENT_POOL = [
  '#2E7D32',
  '#1565C0',
  '#F57F17',
  '#E65100',
  '#6A1B9A',
  '#00695C',
  '#C62828',
  '#37474F',
];
const COLOR_POOL = [
  '#E8F5E9',
  '#E3F2FD',
  '#FFF8E1',
  '#FFF3E0',
  '#F3E5F5',
  '#E0F7FA',
  '#FCE4EC',
  '#ECEFF1',
];
const TASK_ICONS = [
  '🌱',
  '🌳',
  '🌊',
  '♻️',
  '🌻',
  '🧹',
  '🚴',
  '💧',
  '🐝',
  '☀️',
  '🦋',
  '🐢',
  '🌿',
  '🏕️',
  '🌾',
];
const TABS = ['挑戰', '打卡', '排行榜', '贊助', '發起'];
const TAB_ICONS_M = {
  挑戰: '🌿',
  打卡: '📅',
  排行榜: '🏆',
  贊助: '💚',
  發起: '✨',
};
const FF = 'Georgia, serif';

// ── 工具函式 ──────────────────────────────────────────────────────
function getLevel(pts) {
  if (pts < 100) return { name: '環保新芽', icon: '🌱', next: 100 };
  if (pts < 250) return { name: '綠葉守護者', icon: '🍃', next: 250 };
  if (pts < 500) return { name: '森林之友', icon: '🌳', next: 500 };
  return { name: '地球守護神', icon: '🌍', next: 999 };
}
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function daysInMonth(y, m) {
  return new Date(y, m + 1, 0).getDate();
}

// ── 元件 ──────────────────────────────────────────────────────────
function Toast({ msg }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#1b5e20',
        color: '#fff',
        borderRadius: 30,
        padding: '10px 24px',
        fontWeight: 'bold',
        fontSize: 14,
        zIndex: 999,
        whiteSpace: 'nowrap',
        fontFamily: FF,
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}
    >
      {msg}
    </div>
  );
}

function MiniMap({ lat, lng, label, accent }) {
  const bbox =
    lng -
    0.008 +
    '%2C' +
    (lat - 0.005) +
    '%2C' +
    (lng + 0.008) +
    '%2C' +
    (lat + 0.005);
  const src =
    'https://www.openstreetmap.org/export/embed.html?bbox=' +
    bbox +
    '&layer=mapnik&marker=' +
    lat +
    '%2C' +
    lng;
  const href =
    'https://www.openstreetmap.org/?mlat=' +
    lat +
    '&mlon=' +
    lng +
    '#map=15/' +
    lat +
    '/' +
    lng;
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: 'hidden',
        border: '2px solid ' + accent + '44',
        marginBottom: 10,
        position: 'relative',
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="175"
        style={{ border: 'none', display: 'block' }}
        title={label}
        loading="lazy"
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent,rgba(0,0,0,0.55))',
          padding: '18px 10px 6px',
          pointerEvents: 'none',
        }}
      >
        <div style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>
          📍 {label}
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: '#fff',
          borderRadius: 20,
          padding: '4px 10px',
          fontSize: 11,
          color: '#2e7d32',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 1px 6px rgba(0,0,0,0.2)',
        }}
      >
        🗺 放大
      </a>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
        fontFamily: FF,
      }}
    >
      <div style={{ fontSize: 56, marginBottom: 16 }}>🌿</div>
      <div
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 2,
          marginBottom: 8,
        }}
      >
        綠色行動
      </div>
      <div style={{ color: '#a5d6a7', fontSize: 13 }}>正在連線...</div>
      <div
        style={{
          marginTop: 24,
          width: 40,
          height: 40,
          border: '4px solid rgba(255,255,255,0.3)',
          borderTop: '4px solid #fff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── 主 App ────────────────────────────────────────────────────────
export default function EcoApp() {
  // Auth
  const [uid, setUid] = useState(null);
  const [userName, setUserName] = useState('環保新芽');
  const [loading, setLoading] = useState(true);
  const [fbError, setFbError] = useState(false);

  // UI state
  const [tab, setTab] = useState('挑戰');
  const [filter, setFilter] = useState('全部');
  const [checkinAnim, setCheckinAnim] = useState(false);
  const [donateModal, setDonateModal] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [mapOpen, setMapOpen] = useState(null);
  const [toast, setToast] = useState(null);
  const [newTask, setNewTask] = useState({
    icon: '🌱',
    title: '',
    desc: '',
    category: '生態',
    goal: '',
    deadline: '',
    loc: '',
  });

  // Data state (synced with Firestore)
  const [completed, setCompleted] = useState(new Set());
  const [checkinDays, setCheckinDays] = useState(new Set());
  const [myDonations, setMyDonations] = useState({});
  const [myTaskDon, setMyTaskDon] = useState({});
  const [projects, setProjects] = useState(PROJECTS_DEFAULT);
  const [memberTasks, setMemberTasks] = useState(MEMBER_TASKS_DEFAULT);
  const [leaderboard, setLeaderboard] = useState([]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }

  // ── 1. 匿名登入 + 載入使用者資料 ──────────────────────────────
  useEffect(() => {
    // 嘗試 Firebase 連線，若設定未填則用離線模式
    if (firebaseConfig.apiKey === 'YOUR_API_KEY') {
      setFbError(true);
      setLoading(false);
      setCheckinDays(new Set(['2026-03-01', '2026-03-02', '2026-03-03']));
      return;
    }

    signInAnonymously(auth).catch(() => {
      setFbError(true);
      setLoading(false);
    });

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      setUid(user.uid);
      try {
        const ref = doc(db, 'users', user.uid);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          // 新使用者 — 建立預設文件
          await setDoc(ref, {
            displayName: '環保新芽',
            avatar: '🙋',
            points: 0,
            streak: 0,
            checkinDays: [],
            completed: [],
            donations: {},
            taskDonations: {},
            createdAt: serverTimestamp(),
          });
        } else {
          const d = snap.data();
          setUserName(d.displayName || '環保新芽');
          setCompleted(new Set(d.completed || []));
          setCheckinDays(new Set(d.checkinDays || []));
          setMyDonations(d.donations || {});
          setMyTaskDon(d.taskDonations || {});
        }
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // ── 2. 即時監聽 Firestore projects ────────────────────────────
  useEffect(() => {
    if (fbError) return;
    const unsub = onSnapshot(
      collection(db, 'projects'),
      (snap) => {
        if (snap.empty) return; // 保留預設值直到 DB 有資料
        setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      () => {}
    );
    return () => unsub();
  }, [fbError]);

  // ── 3. 即時監聽 memberTasks ────────────────────────────────────
  useEffect(() => {
    if (fbError) return;
    const unsub = onSnapshot(
      collection(db, 'memberTasks'),
      (snap) => {
        if (snap.empty) return;
        const tasks = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort(
            (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
          );
        setMemberTasks(tasks);
      },
      () => {}
    );
    return () => unsub();
  }, [fbError]);

  // ── 4. 即時監聽排行榜 ─────────────────────────────────────────
  useEffect(() => {
    if (fbError) return;
    const unsub = onSnapshot(
      collection(db, 'users'),
      (snap) => {
        const users = snap.docs
          .map((d) => ({ uid: d.id, ...d.data() }))
          .sort((a, b) => (b.points || 0) - (a.points || 0))
          .slice(0, 20);
        setLeaderboard(users);
      },
      () => {}
    );
    return () => unsub();
  }, [fbError]);

  // ── 計算 ───────────────────────────────────────────────────────
  const totalPoints =
    [...completed].reduce((s, id) => {
      const c = CHALLENGES.find((x) => x.id === id);
      return s + (c ? c.points : 0);
    }, 0) +
    checkinDays.size * 10;

  const level = getLevel(totalPoints);
  const progress = Math.min((totalPoints / level.next) * 100, 100);
  const now = new Date();
  const yr = now.getFullYear();
  const mo = now.getMonth();
  const dim = daysInMonth(yr, mo);
  const fd = new Date(yr, mo, 1).getDay();
  const todayOk = checkinDays.has(todayStr());
  const cats = ['全部', ...new Set(CHALLENGES.map((c) => c.category))];
  const filtered =
    filter === '全部'
      ? CHALLENGES
      : CHALLENGES.filter((c) => c.category === filter);

  // 排行榜資料：若 Firebase 有資料用 Firebase，否則用靜態
  const lbData =
    leaderboard.length > 0
      ? leaderboard.map((u) => ({
          id: u.uid,
          name: u.uid === uid ? '你' : u.displayName || '環保夥伴',
          avatar: u.uid === uid ? '🙋' : u.avatar || '🌱',
          points: u.uid === uid ? totalPoints : u.points || 0,
          streak: u.uid === uid ? checkinDays.size : u.streak || 0,
          isMe: u.uid === uid,
        }))
      : [
          {
            id: 'me',
            name: '你',
            avatar: '🙋',
            points: totalPoints,
            streak: checkinDays.size,
            isMe: true,
          },
        ];
  const sorted = [...lbData].sort((a, b) => b.points - a.points);

  // ── Firebase 操作函式 ──────────────────────────────────────────

  async function toggleCh(id) {
    const next = new Set(completed);
    next.has(id) ? next.delete(id) : next.add(id);
    setCompleted(next);
    if (!uid || fbError) return;
    const pts =
      [...next].reduce((s, cid) => {
        const c = CHALLENGES.find((x) => x.id === cid);
        return s + (c ? c.points : 0);
      }, 0) +
      checkinDays.size * 10;
    await updateDoc(doc(db, 'users', uid), {
      completed: [...next],
      points: pts,
    }).catch(() => {});
  }

  async function doCheckin() {
    if (todayOk) return;
    const t = todayStr();
    const next = new Set([...checkinDays, t]);
    setCheckinDays(next);
    setCheckinAnim(true);
    showToast('🎉 打卡成功！獲得 +10 點');
    setTimeout(() => setCheckinAnim(false), 800);
    if (!uid || fbError) return;
    const pts = totalPoints + 10;
    await updateDoc(doc(db, 'users', uid), {
      checkinDays: arrayUnion(t),
      points: pts,
      streak: next.size,
      lastCheckin: t,
    }).catch(() => {});
  }

  async function donate(projId, amount) {
    setProjects((p) =>
      p.map((x) =>
        x.id === projId
          ? {
              ...x,
              raised: x.raised + amount,
              backers: x.backers + (myDonations[projId] ? 0 : 1),
            }
          : x
      )
    );
    const next = {
      ...myDonations,
      [projId]: (myDonations[projId] || 0) + amount,
    };
    setMyDonations(next);
    setDonateModal(null);
    showToast('已成功贊助 NT$' + amount + '！💚');
    if (!uid || fbError) return;
    await updateDoc(doc(db, 'users', uid), {
      ['donations.' + projId]: increment(amount),
    }).catch(() => {});
    await updateDoc(doc(db, 'projects', projId), {
      raised: increment(amount),
      backers: myDonations[projId] ? increment(0) : increment(1),
    }).catch(() => {});
  }

  async function donateTask(taskId, amount) {
    setMemberTasks((p) =>
      p.map((t) =>
        t.id === taskId
          ? {
              ...t,
              raised: Math.min(t.raised + amount, t.goal),
              backers: t.backers + (myTaskDon[taskId] ? 0 : 1),
            }
          : t
      )
    );
    setMyTaskDon((p) => ({ ...p, [taskId]: (p[taskId] || 0) + amount }));
    showToast('💚 已贊助 NT$' + amount + '！');
    if (!uid || fbError) return;
    await updateDoc(doc(db, 'users', uid), {
      ['taskDonations.' + taskId]: increment(amount),
    }).catch(() => {});
    await updateDoc(doc(db, 'memberTasks', taskId), {
      raised: increment(amount),
      backers: myTaskDon[taskId] ? increment(0) : increment(1),
    }).catch(() => {});
  }

  async function joinTask(taskId) {
    const task = memberTasks.find((t) => t.id === taskId);
    const joined = Array.isArray(task.joined) ? task.joined : [];
    const isIn = uid ? joined.includes(uid) : false;
    setMemberTasks((p) =>
      p.map((t) =>
        t.id === taskId
          ? {
              ...t,
              joined: isIn
                ? joined.filter((x) => x !== uid)
                : [...joined, uid || 'guest'],
            }
          : t
      )
    );
    if (!uid || fbError) return;
    await updateDoc(doc(db, 'memberTasks', taskId), {
      joined: isIn ? arrayRemove(uid) : arrayUnion(uid),
    }).catch(() => {});
  }

  async function submitTask() {
    if (
      !newTask.title.trim() ||
      !newTask.desc.trim() ||
      !newTask.goal ||
      !newTask.deadline
    )
      return;
    const idx = memberTasks.length % ACCENT_POOL.length;
    const location = newTask.loc.trim()
      ? {
          name: newTask.loc.trim(),
          lat: 25.04 + (Math.random() - 0.5) * 0.05,
          lng: 121.57 + (Math.random() - 0.5) * 0.05,
        }
      : { name: '台北市', lat: 25.0408, lng: 121.5673 };
    const taskData = {
      creator: uid || 'guest',
      creatorName: userName,
      avatar: '🙋',
      icon: newTask.icon,
      title: newTask.title.trim(),
      desc: newTask.desc.trim(),
      category: newTask.category,
      goal: parseInt(newTask.goal),
      raised: 0,
      backers: 0,
      deadline: newTask.deadline,
      accent: ACCENT_POOL[idx],
      color: COLOR_POOL[idx],
      joined: [],
      updates: ['任務已發起，歡迎大家加入！'],
      location,
      createdAt: serverTimestamp(),
    };

    if (!fbError && uid) {
      // 寫入 Firestore（onSnapshot 會自動更新畫面）
      await addDoc(collection(db, 'memberTasks'), taskData).catch(() => {
        // 若失敗則本地新增
        setMemberTasks((p) => [{ id: 'm' + Date.now(), ...taskData }, ...p]);
      });
    } else {
      setMemberTasks((p) => [{ id: 'm' + Date.now(), ...taskData }, ...p]);
    }

    setNewTask({
      icon: '🌱',
      title: '',
      desc: '',
      category: '生態',
      goal: '',
      deadline: '',
      loc: '',
    });
    setShowCreate(false);
    showToast('🎉 任務發起成功！');
  }

  if (loading) return <LoadingScreen />;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg,#f0faf0,#e8f5e9 50%,#f1f8e9)',
        fontFamily: FF,
        color: '#2d5a27',
      }}
    >
      {toast && <Toast msg={toast} />}

      {/* Firebase 未設定提示 */}
      {fbError && (
        <div
          style={{
            background: '#FFF8E1',
            borderBottom: '2px solid #FFD54F',
            padding: '8px 16px',
            fontSize: 12,
            color: '#E65100',
            textAlign: 'center',
            fontFamily: FF,
          }}
        >
          ⚠️ 離線模式：請在程式碼中填入你的 Firebase 設定以啟用雲端同步
        </div>
      )}

      {/* ── Header ── */}
      <div
        style={{
          background: 'linear-gradient(135deg,#1b5e20,#2e7d32,#388e3c)',
          padding: '28px 20px 22px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              width: 50 + i * 45 + 'px',
              height: 50 + i * 45 + 'px',
              top: -15 + i * 8 + 'px',
              right: -10 + i * 25 + 'px',
            }}
          />
        ))}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 2,
            }}
          >
            <span style={{ fontSize: 28 }}>🌿</span>
            <h1
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 'bold',
                color: '#fff',
                letterSpacing: 2,
              }}
            >
              綠色行動
            </h1>
            {uid && !fbError && (
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 10,
                  background: 'rgba(255,255,255,0.2)',
                  color: '#c8e6c9',
                  borderRadius: 20,
                  padding: '3px 10px',
                }}
              >
                ☁️ 已同步
              </span>
            )}
          </div>
          <p style={{ margin: '0 0 14px', color: '#c8e6c9', fontSize: 12 }}>
            每一個小行動，都是地球的大改變
          </p>
          <div
            style={{
              background: 'rgba(255,255,255,0.13)',
              borderRadius: 16,
              padding: '12px 16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>{level.icon}</span>
                <div>
                  <div
                    style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}
                  >
                    {level.name}
                  </div>
                  <div style={{ color: '#a5d6a7', fontSize: 11 }}>
                    {totalPoints} 點 / {level.next} 點
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: 20,
                    padding: '4px 10px',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  🔥 {checkinDays.size}天
                </div>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '4px 10px',
                    color: '#2e7d32',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  {completed.size}/{CHALLENGES.length}
                </div>
              </div>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 99,
                height: 7,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: progress + '%',
                  background: 'linear-gradient(90deg,#a5d6a7,#fff)',
                  borderRadius: 99,
                  transition: 'width 0.6s',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div
        style={{
          display: 'flex',
          background: '#fff',
          borderBottom: '2px solid #e8f5e9',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              flex: 1,
              padding: '12px 4px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: 11,
              fontWeight: 'bold',
              color: tab === t ? '#2e7d32' : '#aaa',
              borderBottom:
                tab === t ? '3px solid #2e7d32' : '3px solid transparent',
              marginBottom: -2,
              fontFamily: FF,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <span style={{ fontSize: 16 }}>{TAB_ICONS_M[t]}</span>
            {t}
          </button>
        ))}
      </div>

      {/* ════ 挑戰 ════ */}
      {tab === '挑戰' && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              overflowX: 'auto',
              paddingBottom: 10,
              marginBottom: 4,
            }}
          >
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '6px 14px',
                  borderRadius: 20,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: FF,
                  fontSize: 12,
                  fontWeight: 'bold',
                  background: filter === cat ? '#2e7d32' : '#e8f5e9',
                  color: filter === cat ? '#fff' : '#388e3c',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((ch) => {
              const done = completed.has(ch.id);
              return (
                <div
                  key={ch.id}
                  onClick={() => toggleCh(ch.id)}
                  style={{
                    background: done
                      ? 'linear-gradient(135deg,#e8f5e9,#f1f8e9)'
                      : '#fff',
                    borderRadius: 16,
                    padding: 16,
                    cursor: 'pointer',
                    border: done ? '2px solid #81c784' : '2px solid #f1f8e9',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    boxShadow: done
                      ? 'none'
                      : '0 2px 12px rgba(46,125,50,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      width: 52,
                      height: 52,
                      borderRadius: 13,
                      background: done ? '#c8e6c9' : '#f1f8e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {done ? '✅' : ch.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: done ? '#81c784' : '#2d5a27',
                        textDecoration: done ? 'line-through' : 'none',
                        marginBottom: 3,
                      }}
                    >
                      {ch.title}
                    </div>
                    <p
                      style={{
                        margin: '0 0 7px',
                        fontSize: 12,
                        color: '#777',
                        lineHeight: 1.4,
                      }}
                    >
                      {ch.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: 11,
                          padding: '2px 8px',
                          borderRadius: 99,
                          background:
                            (CAT_COLORS[ch.category] || '#ccc') + '22',
                          color: CAT_COLORS[ch.category] || '#555',
                          fontWeight: 'bold',
                        }}
                      >
                        {ch.category}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          padding: '2px 8px',
                          borderRadius: 99,
                          background: DIFF_BADGE[ch.difficulty].bg,
                          color: DIFF_BADGE[ch.difficulty].color,
                          fontWeight: 'bold',
                        }}
                      >
                        {ch.difficulty}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: done ? '#81c784' : '#2e7d32',
                      }}
                    >
                      +{ch.points}
                    </div>
                    <div style={{ fontSize: 10, color: '#aaa' }}>點數</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ════ 打卡 ════ */}
      {tab === '打卡' && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: 'linear-gradient(135deg,#2e7d32,#43a047)',
              borderRadius: 20,
              padding: 24,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 8 }}>
              {todayOk ? '✅' : '📅'}
            </div>
            <div
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 4,
              }}
            >
              {todayOk ? '今日已打卡！' : '立即打卡'}
            </div>
            <div style={{ color: '#c8e6c9', fontSize: 12, marginBottom: 16 }}>
              {todayOk ? '明天再來繼續你的環保旅程' : '每日打卡可獲得 +10 點'}
            </div>
            <button
              onClick={doCheckin}
              disabled={todayOk}
              style={{
                background: todayOk ? 'rgba(255,255,255,0.2)' : '#fff',
                color: todayOk ? 'rgba(255,255,255,0.5)' : '#2e7d32',
                border: 'none',
                borderRadius: 30,
                padding: '12px 36px',
                fontSize: 15,
                fontWeight: 'bold',
                cursor: todayOk ? 'default' : 'pointer',
                fontFamily: FF,
                transform: checkinAnim ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s',
              }}
            >
              {todayOk ? '已完成 🎉' : '打卡 +10 點'}
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 10,
              marginBottom: 20,
            }}
          >
            {[
              { label: '連續天數', value: checkinDays.size + '天', icon: '🔥' },
              {
                label: '打卡點數',
                value: checkinDays.size * 10 + 'pt',
                icon: '⭐',
              },
              {
                label: '本月打卡',
                value:
                  [...checkinDays].filter((d) =>
                    d.startsWith(yr + '-' + String(mo + 1).padStart(2, '0'))
                  ).length + '天',
                icon: '📅',
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  padding: '14px 8px',
                  textAlign: 'center',
                  border: '1px solid #e8f5e9',
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                <div
                  style={{ fontWeight: 'bold', fontSize: 18, color: '#2e7d32' }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 10, color: '#aaa' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              padding: 16,
              border: '1px solid #e8f5e9',
              marginBottom: 16,
            }}
          >
            <h3
              style={{
                margin: '0 0 14px',
                fontSize: 15,
                color: '#2e7d32',
                textAlign: 'center',
              }}
            >
              📆 {yr}年{mo + 1}月 打卡紀錄
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7,1fr)',
                gap: 4,
                marginBottom: 6,
              }}
            >
              {['日', '一', '二', '三', '四', '五', '六'].map((d) => (
                <div
                  key={d}
                  style={{
                    textAlign: 'center',
                    fontSize: 11,
                    color: '#aaa',
                    fontWeight: 'bold',
                    padding: '4px 0',
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7,1fr)',
                gap: 4,
              }}
            >
              {[...Array(fd)].map((_, i) => (
                <div key={'e' + i} />
              ))}
              {[...Array(dim)].map((_, i) => {
                const day = i + 1;
                const dStr =
                  yr +
                  '-' +
                  String(mo + 1).padStart(2, '0') +
                  '-' +
                  String(day).padStart(2, '0');
                const chk = checkinDays.has(dStr);
                const isT = day === now.getDate();
                return (
                  <div
                    key={day}
                    style={{
                      aspectRatio: '1',
                      borderRadius: 10,
                      background: chk ? '#2e7d32' : isT ? '#e8f5e9' : '#f9fbf9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: isT ? 'bold' : 'normal',
                      color: chk ? '#fff' : isT ? '#2e7d32' : '#888',
                      border:
                        isT && !chk
                          ? '2px solid #81c784'
                          : '2px solid transparent',
                    }}
                  >
                    {chk ? '🌿' : day}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              padding: 16,
              border: '1px solid #e8f5e9',
            }}
          >
            <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#2e7d32' }}>
              🎯 連續打卡里程碑
            </h3>
            {[
              { days: 3, reward: '🌿 初芽徽章 +30pt', desc: '連續3天' },
              { days: 7, reward: '🍃 綠葉徽章 +70pt', desc: '連續7天' },
              { days: 14, reward: '🌳 大樹徽章 +150pt', desc: '連續14天' },
              { days: 30, reward: '🌍 守護者徽章 +350pt', desc: '連續30天' },
            ].map((m) => {
              const ok = checkinDays.size >= m.days;
              return (
                <div
                  key={m.days}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 0',
                    borderBottom: '1px solid #f1f8e9',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: ok ? '#2e7d32' : '#f1f8e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                    }}
                  >
                    {ok ? '✅' : '🔒'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: ok ? '#2e7d32' : '#bbb',
                      }}
                    >
                      {m.desc}
                    </div>
                    <div
                      style={{ fontSize: 12, color: ok ? '#66bb6a' : '#ccc' }}
                    >
                      {m.reward}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: ok ? '#2e7d32' : '#ccc',
                      fontWeight: 'bold',
                    }}
                  >
                    {m.days}天
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ════ 排行榜 ════ */}
      {tab === '排行榜' && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
              borderRadius: 20,
              padding: '20px 16px 24px',
              marginBottom: 20,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  width: 60 + i * 50 + 'px',
                  height: 60 + i * 50 + 'px',
                  bottom: -20 + i * 10 + 'px',
                  left: -20 + i * 30 + 'px',
                }}
              />
            ))}
            <h3
              style={{
                color: '#c8e6c9',
                fontSize: 13,
                margin: '0 0 20px',
                textAlign: 'center',
                letterSpacing: 2,
              }}
            >
              🏆 即時排行榜
              {!fbError && (
                <span style={{ fontSize: 10, marginLeft: 6, opacity: 0.7 }}>
                  （Firebase 即時同步）
                </span>
              )}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              {[sorted[1], sorted[0], sorted[2]].map((f, i) => {
                if (!f) return <div key={i} style={{ width: 80 }} />;
                const heights = [90, 110, 75],
                  medals = ['🥈', '🥇', '🥉'];
                return (
                  <div
                    key={f.id || i}
                    style={{ textAlign: 'center', width: 80 }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 2 }}>
                      {f.avatar}
                    </div>
                    <div style={{ fontSize: 16 }}>{medals[i]}</div>
                    <div
                      style={{
                        background: f.isMe ? '#fff' : 'rgba(255,255,255,0.15)',
                        borderRadius: 12,
                        padding: '10px 8px',
                        marginTop: 6,
                        height: heights[i] + 'px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 'bold',
                          color: f.isMe ? '#2e7d32' : '#fff',
                          marginBottom: 2,
                        }}
                      >
                        {f.name}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: f.isMe ? '#2e7d32' : '#c8e6c9',
                        }}
                      >
                        {f.points}pt
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: f.isMe ? '#aaa' : '#a5d6a7',
                        }}
                      >
                        🔥{f.streak}天
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid #e8f5e9',
            }}
          >
            <div
              style={{
                padding: '14px 16px',
                borderBottom: '1px solid #e8f5e9',
                fontSize: 13,
                color: '#888',
                display: 'flex',
              }}
            >
              <span style={{ width: 30 }}>排名</span>
              <span style={{ flex: 1 }}>用戶</span>
              <span style={{ width: 60, textAlign: 'right' }}>點數</span>
              <span style={{ width: 50, textAlign: 'right' }}>連續</span>
            </div>
            {sorted.map((f, i) => (
              <div
                key={f.id || i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 16px',
                  borderBottom: '1px solid #f5faf5',
                  background: f.isMe ? '#f0faf0' : '#fff',
                }}
              >
                <div
                  style={{
                    width: 30,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:
                      i === 0
                        ? '#F9A825'
                        : i === 1
                        ? '#9E9E9E'
                        : i === 2
                        ? '#8D6E63'
                        : '#ccc',
                  }}
                >
                  {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 24 }}>{f.avatar}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: f.isMe ? 'bold' : 'normal',
                        color: f.isMe ? '#2e7d32' : '#333',
                      }}
                    >
                      {f.name}
                      {f.isMe ? ' (我)' : ''}
                    </div>
                    <div style={{ fontSize: 11, color: '#aaa' }}>
                      {getLevel(f.points).icon} {getLevel(f.points).name}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 60,
                    textAlign: 'right',
                    fontWeight: 'bold',
                    color: '#2e7d32',
                    fontSize: 14,
                  }}
                >
                  {f.points}
                </div>
                <div
                  style={{
                    width: 50,
                    textAlign: 'right',
                    fontSize: 12,
                    color: '#f57c00',
                  }}
                >
                  🔥{f.streak}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ════ 贊助 ════ */}
      {tab === '贊助' && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
              borderRadius: 20,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 14 }}>
              <div style={{ fontSize: 34, marginBottom: 6 }}>💚</div>
              <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>
                個人小額贊助
              </div>
              <div style={{ color: '#c8e6c9', fontSize: 12, marginTop: 4 }}>
                每一筆小額捐款，都讓環境更美好
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
                >
                  NT${Object.values(myDonations).reduce((a, b) => a + b, 0)}
                </div>
                <div style={{ color: '#a5d6a7', fontSize: 11 }}>我的總贊助</div>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}
                >
                  {Object.keys(myDonations).length}
                </div>
                <div style={{ color: '#a5d6a7', fontSize: 11 }}>支持的計畫</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {projects.map((proj) => {
              const myAmt = myDonations[proj.id] || 0;
              const pct = Math.min((proj.raised / proj.goal) * 100, 100);
              return (
                <div
                  key={proj.id}
                  style={{
                    background: myAmt > 0 ? proj.color : '#fff',
                    borderRadius: 18,
                    padding: 16,
                    border:
                      '2px solid ' + (myAmt > 0 ? proj.accent : '#e8f5e9'),
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        background: proj.accent + '22',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 26,
                      }}
                    >
                      {proj.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', fontSize: 15 }}>
                        {proj.title}
                      </div>
                      <div style={{ fontSize: 11, color: '#999' }}>
                        發起：{proj.org}
                      </div>
                    </div>
                    {myAmt > 0 && (
                      <div
                        style={{
                          background: proj.accent,
                          color: '#fff',
                          borderRadius: 20,
                          padding: '3px 10px',
                          fontSize: 11,
                          fontWeight: 'bold',
                        }}
                      >
                        已贊助 NT${myAmt}
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      margin: '0 0 12px',
                      fontSize: 12,
                      color: '#555',
                      lineHeight: 1.5,
                    }}
                  >
                    {proj.desc}
                  </p>
                  <div style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 11,
                        color: '#888',
                        marginBottom: 5,
                      }}
                    >
                      <span>已募集 NT${proj.raised.toLocaleString()}</span>
                      <span>目標 NT${proj.goal.toLocaleString()}</span>
                    </div>
                    <div
                      style={{
                        background: '#f1f8e9',
                        borderRadius: 99,
                        height: 8,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: pct + '%',
                          background:
                            'linear-gradient(90deg,' +
                            proj.accent +
                            '99,' +
                            proj.accent +
                            ')',
                          borderRadius: 99,
                          transition: 'width 0.6s',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 11,
                        marginTop: 4,
                      }}
                    >
                      <span style={{ color: proj.accent, fontWeight: 'bold' }}>
                        {pct.toFixed(0)}% 達成
                      </span>
                      <span style={{ color: '#aaa' }}>
                        👤 {proj.backers} 人支持
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    {[proj.unit, proj.unit * 2, proj.unit * 5].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => donate(proj.id, amt)}
                        style={{
                          flex: 1,
                          padding: '9px 0',
                          borderRadius: 10,
                          border: '1.5px solid ' + proj.accent,
                          background: 'transparent',
                          color: proj.accent,
                          fontWeight: 'bold',
                          fontSize: 13,
                          cursor: 'pointer',
                          fontFamily: FF,
                        }}
                      >
                        NT${amt}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setDonateModal(proj)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: 12,
                      border: 'none',
                      background: proj.accent,
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 13,
                      cursor: 'pointer',
                      fontFamily: FF,
                    }}
                  >
                    💚 自訂金額贊助
                  </button>
                </div>
              );
            })}
          </div>
          {donateModal && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                zIndex: 200,
              }}
              onClick={() => setDonateModal(null)}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px 20px 0 0',
                  padding: 24,
                  width: '100%',
                  maxWidth: 480,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{donateModal.icon}</span>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#2d5a27',
                      marginTop: 6,
                    }}
                  >
                    {donateModal.title}
                  </div>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  {[50, 100, 200, 300, 500, 1000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => donate(donateModal.id, amt)}
                      style={{
                        padding: '12px',
                        borderRadius: 12,
                        border: '1.5px solid ' + donateModal.accent,
                        background: 'transparent',
                        color: donateModal.accent,
                        fontWeight: 'bold',
                        fontSize: 14,
                        cursor: 'pointer',
                        fontFamily: FF,
                      }}
                    >
                      NT${amt}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setDonateModal(null)}
                  style={{
                    width: '100%',
                    padding: 12,
                    borderRadius: 12,
                    border: 'none',
                    background: '#f1f8e9',
                    color: '#888',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: FF,
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ════ 發起 ════ */}
      {tab === '發起' && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
              borderRadius: 20,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}
                >
                  ✨ 會員任務廣場
                </div>
                <div style={{ color: '#c8e6c9', fontSize: 12, marginTop: 4 }}>
                  發起你的環保行動，讓大家一起支持
                </div>
              </div>
              <button
                onClick={() => setShowCreate(true)}
                style={{
                  background: '#fff',
                  color: '#2e7d32',
                  border: 'none',
                  borderRadius: 20,
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  fontSize: 13,
                  cursor: 'pointer',
                  fontFamily: FF,
                  whiteSpace: 'nowrap',
                }}
              >
                ＋ 發起任務
              </button>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 8,
                marginTop: 14,
              }}
            >
              {[
                {
                  label: '進行中任務',
                  value: memberTasks.filter((t) => t.raised < t.goal).length,
                },
                {
                  label: '我的贊助',
                  value:
                    'NT$' + Object.values(myTaskDon).reduce((a, b) => a + b, 0),
                },
                {
                  label: '我的任務',
                  value: memberTasks.filter(
                    (t) => t.creator === uid || t.creatorName === '你'
                  ).length,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 12,
                    padding: '10px 6px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}
                  >
                    {s.value}
                  </div>
                  <div style={{ color: '#a5d6a7', fontSize: 10 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {memberTasks.map((task) => {
              const pct = Math.min((task.raised / task.goal) * 100, 100);
              const done = task.raised >= task.goal;
              const myAmt = myTaskDon[task.id] || 0;
              const isOwn = task.creator === uid || task.creatorName === '你';
              const joined = Array.isArray(task.joined) ? task.joined : [];
              const isJoin = uid ? joined.includes(uid) : false;
              return (
                <div
                  key={task.id}
                  style={{
                    background: myAmt > 0 || isJoin ? task.color : '#fff',
                    borderRadius: 18,
                    padding: 16,
                    border:
                      '2px solid ' +
                      (myAmt > 0 || isJoin ? task.accent : '#e8f5e9'),
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 13,
                        background: task.accent + '22',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    >
                      {task.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 'bold',
                            fontSize: 15,
                            color: '#222',
                          }}
                        >
                          {task.title}
                        </span>
                        {done && (
                          <span
                            style={{
                              fontSize: 10,
                              background: '#c8e6c9',
                              color: '#2e7d32',
                              borderRadius: 8,
                              padding: '2px 7px',
                              fontWeight: 'bold',
                            }}
                          >
                            目標達成✅
                          </span>
                        )}
                        {isOwn && (
                          <span
                            style={{
                              fontSize: 10,
                              background: task.accent + '22',
                              color: task.accent,
                              borderRadius: 8,
                              padding: '2px 7px',
                              fontWeight: 'bold',
                            }}
                          >
                            我發起的
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                          marginTop: 2,
                        }}
                      >
                        <span style={{ fontSize: 15 }}>{task.avatar}</span>
                        <span style={{ fontSize: 11, color: '#999' }}>
                          {task.creatorName || '會員'} 發起
                        </span>
                        <span style={{ fontSize: 10, color: '#bbb' }}>
                          · 截止 {task.deadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      margin: '0 0 10px',
                      fontSize: 12,
                      color: '#555',
                      lineHeight: 1.5,
                    }}
                  >
                    {task.desc}
                  </p>

                  {task.location &&
                    (mapOpen === task.id ? (
                      <div style={{ marginBottom: 6 }}>
                        <MiniMap
                          lat={task.location.lat}
                          lng={task.location.lng}
                          label={task.location.name}
                          accent={task.accent}
                        />
                        <button
                          onClick={() => setMapOpen(null)}
                          style={{
                            width: '100%',
                            padding: '6px',
                            borderRadius: 8,
                            border: 'none',
                            background: '#f1f8e9',
                            color: '#888',
                            fontSize: 11,
                            cursor: 'pointer',
                            fontFamily: FF,
                            marginBottom: 8,
                          }}
                        >
                          ▲ 收起地圖
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setMapOpen(task.id)}
                        style={{
                          width: '100%',
                          padding: '9px',
                          borderRadius: 10,
                          border: '1.5px dashed ' + task.accent + '88',
                          background: task.color,
                          color: task.accent,
                          fontSize: 12,
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          fontFamily: FF,
                          marginBottom: 10,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        📍 {task.location.name} — 點擊查看地圖
                      </button>
                    ))}

                  <div style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 11,
                        color: '#888',
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ color: task.accent, fontWeight: 'bold' }}>
                        NT${task.raised.toLocaleString()} 募得
                      </span>
                      <span>目標 NT${task.goal.toLocaleString()}</span>
                    </div>
                    <div
                      style={{
                        background: '#f1f8e9',
                        borderRadius: 99,
                        height: 8,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: pct + '%',
                          background:
                            'linear-gradient(90deg,' +
                            task.accent +
                            '88,' +
                            task.accent +
                            ')',
                          borderRadius: 99,
                          transition: 'width 0.6s',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          color: task.accent,
                          fontWeight: 'bold',
                        }}
                      >
                        {pct.toFixed(0)}%
                      </span>
                      <span style={{ fontSize: 11, color: '#aaa' }}>
                        👤 {task.backers} 人支持 · {joined.length} 人加入
                      </span>
                    </div>
                  </div>

                  {task.updates && task.updates.length > 0 && (
                    <div
                      style={{
                        background: 'rgba(0,0,0,0.03)',
                        borderRadius: 10,
                        padding: '8px 10px',
                        marginBottom: 12,
                        fontSize: 11,
                        color: '#666',
                        borderLeft: '3px solid ' + task.accent,
                      }}
                    >
                      📢 {task.updates[task.updates.length - 1]}
                    </div>
                  )}

                  {!done && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      {[50, 100, 200].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => donateTask(task.id, amt)}
                          style={{
                            flex: 1,
                            padding: '8px 0',
                            borderRadius: 10,
                            border: '1.5px solid ' + task.accent,
                            background: 'transparent',
                            color: task.accent,
                            fontWeight: 'bold',
                            fontSize: 12,
                            cursor: 'pointer',
                            fontFamily: FF,
                          }}
                        >
                          NT${amt}
                        </button>
                      ))}
                      <button
                        onClick={() => joinTask(task.id)}
                        style={{
                          flex: 1,
                          padding: '8px 0',
                          borderRadius: 10,
                          border: '1.5px solid ' + task.accent,
                          background: isJoin ? task.accent : 'transparent',
                          color: isJoin ? '#fff' : task.accent,
                          fontWeight: 'bold',
                          fontSize: 12,
                          cursor: 'pointer',
                          fontFamily: FF,
                        }}
                      >
                        {isJoin ? '✅ 已加入' : '加入'}
                      </button>
                    </div>
                  )}
                  {done && (
                    <div
                      style={{
                        textAlign: 'center',
                        padding: '10px',
                        background: task.accent + '18',
                        borderRadius: 10,
                        fontSize: 13,
                        color: task.accent,
                        fontWeight: 'bold',
                      }}
                    >
                      🎉 目標達成！感謝所有支持者
                    </div>
                  )}
                  {myAmt > 0 && (
                    <div
                      style={{
                        marginTop: 8,
                        textAlign: 'right',
                        fontSize: 11,
                        color: task.accent,
                        fontWeight: 'bold',
                      }}
                    >
                      我已贊助 NT${myAmt}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 發起任務 Modal */}
          {showCreate && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.55)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                zIndex: 300,
              }}
              onClick={() => setShowCreate(false)}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '22px 22px 0 0',
                  padding: '24px 20px 32px',
                  width: '100%',
                  maxWidth: 480,
                  maxHeight: '85vh',
                  overflowY: 'auto',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ textAlign: 'center', marginBottom: 18 }}>
                  <div style={{ fontSize: 28 }}>✨</div>
                  <div
                    style={{
                      fontWeight: 'bold',
                      fontSize: 17,
                      color: '#2d5a27',
                      marginTop: 4,
                    }}
                  >
                    發起新環保任務
                  </div>
                  <div style={{ fontSize: 12, color: '#aaa' }}>
                    讓社群一起支持你的環保行動
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 'bold',
                      marginBottom: 8,
                    }}
                  >
                    選擇圖示
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {TASK_ICONS.map((ic) => (
                      <button
                        key={ic}
                        onClick={() => setNewTask((p) => ({ ...p, icon: ic }))}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          border:
                            '2px solid ' +
                            (newTask.icon === ic ? '#2e7d32' : '#e8f5e9'),
                          background:
                            newTask.icon === ic ? '#e8f5e9' : '#fafafa',
                          fontSize: 20,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {ic}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 'bold',
                      marginBottom: 6,
                    }}
                  >
                    任務名稱 *
                  </div>
                  <input
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, title: e.target.value }))
                    }
                    placeholder="例如：社區植樹日"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: '1.5px solid #e8f5e9',
                      fontSize: 14,
                      fontFamily: FF,
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fafafa',
                    }}
                  />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 'bold',
                      marginBottom: 6,
                    }}
                  >
                    任務說明 *
                  </div>
                  <textarea
                    value={newTask.desc}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, desc: e.target.value }))
                    }
                    placeholder="描述你的環保任務內容與目標…"
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: '1.5px solid #e8f5e9',
                      fontSize: 13,
                      fontFamily: FF,
                      outline: 'none',
                      resize: 'none',
                      boxSizing: 'border-box',
                      background: '#fafafa',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#555',
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}
                    >
                      分類
                    </div>
                    <select
                      value={newTask.category}
                      onChange={(e) =>
                        setNewTask((p) => ({ ...p, category: e.target.value }))
                      }
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: 12,
                        border: '1.5px solid #e8f5e9',
                        fontSize: 13,
                        fontFamily: FF,
                        background: '#fafafa',
                        outline: 'none',
                      }}
                    >
                      {Object.keys(CAT_COLORS).map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#555',
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}
                    >
                      募資目標 (NT$) *
                    </div>
                    <input
                      type="number"
                      value={newTask.goal}
                      onChange={(e) =>
                        setNewTask((p) => ({ ...p, goal: e.target.value }))
                      }
                      placeholder="5000"
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: 12,
                        border: '1.5px solid #e8f5e9',
                        fontSize: 13,
                        fontFamily: FF,
                        outline: 'none',
                        boxSizing: 'border-box',
                        background: '#fafafa',
                      }}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 'bold',
                      marginBottom: 6,
                    }}
                  >
                    📍 活動地點
                  </div>
                  <input
                    value={newTask.loc}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, loc: e.target.value }))
                    }
                    placeholder="例如：大安森林公園，台北市"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: '1.5px solid #e8f5e9',
                      fontSize: 14,
                      fontFamily: FF,
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fafafa',
                    }}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#555',
                      fontWeight: 'bold',
                      marginBottom: 6,
                    }}
                  >
                    截止日期 *
                  </div>
                  <input
                    type="date"
                    value={newTask.deadline}
                    onChange={(e) =>
                      setNewTask((p) => ({ ...p, deadline: e.target.value }))
                    }
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: '1.5px solid #e8f5e9',
                      fontSize: 13,
                      fontFamily: FF,
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fafafa',
                    }}
                  />
                </div>
                <button
                  onClick={submitTask}
                  style={{
                    width: '100%',
                    padding: 14,
                    borderRadius: 14,
                    border: 'none',
                    background:
                      newTask.title &&
                      newTask.desc &&
                      newTask.goal &&
                      newTask.deadline
                        ? 'linear-gradient(135deg,#2e7d32,#43a047)'
                        : '#e0e0e0',
                    color:
                      newTask.title &&
                      newTask.desc &&
                      newTask.goal &&
                      newTask.deadline
                        ? '#fff'
                        : '#aaa',
                    fontWeight: 'bold',
                    fontSize: 15,
                    cursor:
                      newTask.title &&
                      newTask.desc &&
                      newTask.goal &&
                      newTask.deadline
                        ? 'pointer'
                        : 'default',
                    fontFamily: FF,
                    marginBottom: 10,
                  }}
                >
                  🌱 發起任務
                </button>
                <button
                  onClick={() => setShowCreate(false)}
                  style={{
                    width: '100%',
                    padding: 12,
                    borderRadius: 12,
                    border: 'none',
                    background: '#f1f8e9',
                    color: '#888',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: FF,
                    fontSize: 14,
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div style={{ height: 32 }} />
    </div>
  );
}
