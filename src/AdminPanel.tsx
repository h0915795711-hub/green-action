// ╔══════════════════════════════════════════════════════════════╗
// ║  綠色行動 — 後台管理系統（Firebase 真實數據版）               ║
// ╚══════════════════════════════════════════════════════════════╝

import { useState, useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue, update, remove, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey:            "AIzaSyA_2340AhDRdUOJGq8dX7eV2b2caxegj54",
  authDomain:        "green-move-3a29d.firebaseapp.com",
  projectId:         "green-move-3a29d",
  storageBucket:     "green-move-3a29d.firebasestorage.app",
  messagingSenderId: "397397942804",
  appId:             "1:397397942804:web:f809cd260a0aa4fae9bd01",
  databaseURL:       "https://green-move-3a29d-default-rtdb.firebaseio.com",
};

const fbApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(fbApp);

const ADMIN_PASSWORD = "coolo24444102";
const FF = "Georgia, serif";

const PROJECTS_DEFAULT = [
  { id:"p1", icon:"🌳", title:"種一百棵樹",   org:"台灣森林協會", goal:10000, raised:6840, unit:10, desc:"每筆贊助10元，協助山地造林復育",     backers:68, active:true },
  { id:"p2", icon:"🌊", title:"淨化海洋計畫", org:"海洋守護隊",   goal:8000,  raised:5120, unit:20, desc:"每筆贊助20元，購買淨灘清潔設備",     backers:44, active:true },
  { id:"p3", icon:"☀️", title:"偏鄉太陽能板", org:"綠能希望基金", goal:15000, raised:9300, unit:50, desc:"每筆贊助50元，讓偏鄉學校用上太陽能", backers:31, active:true },
  { id:"p4", icon:"🐝", title:"蜜蜂生態復育", org:"生態研究所",   goal:6000,  raised:2100, unit:15, desc:"每筆贊助15元，保護授粉昆蟲棲地",     backers:22, active:true },
  { id:"p5", icon:"💧", title:"淨水過濾設備", org:"清淨水源聯盟", goal:12000, raised:7600, unit:30, desc:"每筆贊助30元，提供山村安全飲水",     backers:55, active:true },
];

const CATS = ["交通","生活","用水","生態","回收","飲食","能源","社區"];
const DIFFS = ["簡單","中等","困難"];
const ICONS = ["🚶","🛍️","💧","🌱","♻️","🥗","💡","🧴","🌊","🔋","🌳","☀️","🐝","🌻","🚴","🧹"];

const INIT_CHALLENGES = [
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

export default function AdminPanel() {
  const [authed, setAuthed]       = useState(false);
  const [pw, setPw]               = useState("");
  const [pwErr, setPwErr]         = useState(false);
  const [tab, setTab]             = useState("dashboard");
  const [toast, setToast]         = useState("");

  // Firebase 真實數據
  const [users, setUsers]         = useState<any[]>([]);
  const [memberTasks, setMemberTasks] = useState<any[]>([]);
  const [loading, setLoading]     = useState(true);

  // 本地管理數據
  const [challenges, setChallenges] = useState(INIT_CHALLENGES);
  const [projects, setProjects]   = useState(PROJECTS_DEFAULT);
  const [editCh, setEditCh]       = useState<any>(null);
  const [editPr, setEditPr]       = useState<any>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  function login() {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwErr(false); }
    else { setPwErr(true); }
  }

  // ── 從 Firebase 讀取真實數據 ────────────────────────────────
  useEffect(() => {
    if (!authed) return;

    const unsub1 = onValue(ref(db, "users"), snap => {
      if (snap.exists()) {
        const data = snap.val();
        const list = Object.entries(data).map(([uid, val]: any) => ({ uid, ...val }));
        setUsers(list);
      } else {
        setUsers([]);
      }
      setLoading(false);
    });

    const unsub2 = onValue(ref(db, "memberTasks"), snap => {
      if (snap.exists()) {
        const data = snap.val();
        const list = Object.entries(data).map(([id, val]: any) => ({ id, ...val }));
        setMemberTasks(list);
      } else {
        setMemberTasks([]);
      }
    });

    return () => { unsub1(); unsub2(); };
  }, [authed]);

  // ── 計算統計數據 ─────────────────────────────────────────────
  function calcStats() {
    const totalUsers    = users.length;
    const totalPoints   = users.reduce((s, u) => s + (u.points||0), 0);
    const totalCheckins = users.reduce((s, u) => s + (u.checkinDays?.length||0), 0);
    const totalDonations = users.reduce((s, u) => {
      const d = u.donations || {};
      return s + Object.values(d).reduce((a: any, b: any) => a + b, 0);
    }, 0) as number;
    const totalTaskDonations = users.reduce((s, u) => {
      const d = u.taskDonations || {};
      return s + Object.values(d).reduce((a: any, b: any) => a + b, 0);
    }, 0) as number;
    const pendingTasks  = memberTasks.filter(t => !t.status || t.status === "審核中").length;
    const maxStreak     = users.length > 0 ? Math.max(...users.map(u => u.streak||0)) : 0;

    return { totalUsers, totalPoints, totalCheckins, totalDonations, totalTaskDonations, pendingTasks, maxStreak };
  }

  // ── 每個專案的贊助統計 ────────────────────────────────────────
  function calcProjectDonations() {
    const projMap: Record<string, number> = {};
    users.forEach(u => {
      const d = u.donations || {};
      Object.entries(d).forEach(([projId, amt]: any) => {
        projMap[projId] = (projMap[projId]||0) + amt;
      });
    });
    return projMap;
  }

  // ── 登入頁 ────────────────────────────────────────────────────
  if (!authed) return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#1b5e20,#2e7d32)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:FF }}>
      <div style={{ background:"#fff", borderRadius:24, padding:"40px 32px", width:320, boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ fontSize:48, marginBottom:8 }}>🌿</div>
          <div style={{ fontWeight:"bold", fontSize:22, color:"#1b5e20" }}>後台管理系統</div>
          <div style={{ fontSize:13, color:"#aaa", marginTop:4 }}>綠色行動 Admin</div>
        </div>
        <div style={{ marginBottom:16 }}>
          <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwErr(false); }} onKeyDown={e => e.key==="Enter" && login()} placeholder="請輸入管理員密碼"
            style={{ width:"100%", padding:"12px 16px", borderRadius:12, border:`1.5px solid ${pwErr?"#e53935":"#e8f5e9"}`, fontSize:15, fontFamily:FF, outline:"none", boxSizing:"border-box", color:"#333" }} />
          {pwErr && <div style={{ color:"#e53935", fontSize:12, marginTop:6 }}>❌ 密碼錯誤，請重試</div>}
        </div>
        <button onClick={login} style={{ width:"100%", padding:14, borderRadius:12, border:"none", background:"linear-gradient(135deg,#2e7d32,#43a047)", color:"#fff", fontWeight:"bold", fontSize:16, cursor:"pointer", fontFamily:FF }}>登入</button>
      </div>
    </div>
  );

  const TABS = [
    { key:"dashboard", label:"總覽", icon:"📊" },
    { key:"donations", label:"贊助報表", icon:"💰" },
    { key:"users",     label:"用戶數據", icon:"👥" },
    { key:"tasks",     label:"任務管理", icon:"✅" },
    { key:"challenges",label:"挑戰管理", icon:"🌿" },
    { key:"projects",  label:"贊助計畫", icon:"💚" },
  ];

  const stats = calcStats();
  const projDonations = calcProjectDonations();

  // ── 總覽 Tab ──────────────────────────────────────────────────
  function Dashboard() {
    const cards = [
      { label:"總會員數",   value:stats.totalUsers,                    icon:"👥", color:"#1565C0" },
      { label:"總積分",     value:stats.totalPoints.toLocaleString(),  icon:"⭐", color:"#2E7D32" },
      { label:"總打卡次數", value:stats.totalCheckins.toLocaleString(),icon:"📅", color:"#F57F17" },
      { label:"專案贊助",   value:"NT$"+stats.totalDonations.toLocaleString(), icon:"💚", color:"#00695C" },
      { label:"任務贊助",   value:"NT$"+stats.totalTaskDonations.toLocaleString(), icon:"🌱", color:"#6A1B9A" },
      { label:"待審任務",   value:stats.pendingTasks, icon:"⏳", color:"#C62828", alert:stats.pendingTasks>0 },
    ];

    return (
      <div>
        <h2 style={{ margin:"0 0 8px", color:"#1b5e20" }}>📊 系統總覽</h2>
        <div style={{ fontSize:12, color:"#aaa", marginBottom:20 }}>即時數據來自 Firebase</div>

        {loading ? (
          <div style={{ textAlign:"center", padding:40, color:"#aaa" }}>⏳ 載入中...</div>
        ) : (
          <>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:28 }}>
              {cards.map(c => (
                <div key={c.label} style={{ background:"#fff", borderRadius:16, padding:"18px 12px", boxShadow:"0 2px 12px rgba(0,0,0,0.08)", border:c.alert?"2px solid #FF6F00":"none", textAlign:"center" }}>
                  <div style={{ fontSize:28, marginBottom:6 }}>{c.icon}</div>
                  <div style={{ fontWeight:"bold", fontSize:18, color:c.color }}>{c.value}</div>
                  <div style={{ fontSize:11, color:"#888", marginTop:4 }}>{c.label}</div>
                  {c.alert && <div style={{ fontSize:10, color:"#FF6F00", fontWeight:"bold", marginTop:4 }}>⚠️ 需審核</div>}
                </div>
              ))}
            </div>

            {/* 積分排行榜 */}
            <h3 style={{ color:"#1b5e20", marginBottom:12 }}>🏆 積分排行榜 TOP 10</h3>
            <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
              {users.length === 0 ? (
                <div style={{ padding:20, textAlign:"center", color:"#aaa" }}>還沒有會員數據</div>
              ) : (
                [...users].sort((a,b) => (b.points||0)-(a.points||0)).slice(0,10).map((u,i) => (
                  <div key={u.uid} style={{ display:"flex", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", gap:12 }}>
                    <div style={{ fontWeight:"bold", fontSize:16, color:i<3?"#F57F17":"#ccc", width:28 }}>#{i+1}</div>
                    <div style={{ fontSize:22 }}>{u.avatar||"🌱"}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:"bold", fontSize:14 }}>{u.displayName||"會員"}</div>
                      <div style={{ fontSize:11, color:"#aaa" }}>🔥 {u.streak||0}天連續 · {(u.checkinDays||[]).length}次打卡</div>
                    </div>
                    <div style={{ fontWeight:"bold", color:"#2e7d32", fontSize:16 }}>{u.points||0} pts</div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  // ── 贊助報表 Tab ──────────────────────────────────────────────
  function DonationsTab() {
    const totalProject = stats.totalDonations;
    const totalTask    = stats.totalTaskDonations;
    const grandTotal   = totalProject + totalTask;

    // 各專案贊助明細
    const projectDetails = PROJECTS_DEFAULT.map(p => ({
      ...p,
      realRaised: projDonations[p.id] || 0,
      donorCount: users.filter(u => u.donations && u.donations[p.id]).length,
    }));

    // 各任務贊助明細
    const taskDetails = memberTasks.map(t => {
      const taskTotal = users.reduce((s, u) => {
        return s + ((u.taskDonations && u.taskDonations[t.id]) || 0);
      }, 0);
      const donorCount = users.filter(u => u.taskDonations && u.taskDonations[t.id]).length;
      return { ...t, realRaised: taskTotal, donorCount };
    });

    // 贊助最多的用戶
    const topDonors = users.map(u => {
      const projTotal = Object.values(u.donations||{}).reduce((a: any,b: any)=>a+b, 0) as number;
      const taskTotal = Object.values(u.taskDonations||{}).reduce((a: any,b: any)=>a+b, 0) as number;
      return { ...u, totalDonated: projTotal + taskTotal };
    }).filter(u => u.totalDonated > 0).sort((a,b) => b.totalDonated - a.totalDonated).slice(0,5);

    return (
      <div>
        <h2 style={{ margin:"0 0 20px", color:"#1b5e20" }}>💰 贊助數據報表</h2>

        {/* 總覽卡片 */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:28 }}>
          <div style={{ background:"linear-gradient(135deg,#2e7d32,#43a047)", borderRadius:16, padding:20, textAlign:"center", color:"#fff" }}>
            <div style={{ fontSize:24, marginBottom:6 }}>💰</div>
            <div style={{ fontWeight:"bold", fontSize:20 }}>NT${grandTotal.toLocaleString()}</div>
            <div style={{ fontSize:11, opacity:0.8, marginTop:4 }}>總贊助金額</div>
          </div>
          <div style={{ background:"linear-gradient(135deg,#1565c0,#1976d2)", borderRadius:16, padding:20, textAlign:"center", color:"#fff" }}>
            <div style={{ fontSize:24, marginBottom:6 }}>🌳</div>
            <div style={{ fontWeight:"bold", fontSize:20 }}>NT${totalProject.toLocaleString()}</div>
            <div style={{ fontSize:11, opacity:0.8, marginTop:4 }}>專案贊助</div>
          </div>
          <div style={{ background:"linear-gradient(135deg,#6a1b9a,#7b1fa2)", borderRadius:16, padding:20, textAlign:"center", color:"#fff" }}>
            <div style={{ fontSize:24, marginBottom:6 }}>✨</div>
            <div style={{ fontWeight:"bold", fontSize:20 }}>NT${totalTask.toLocaleString()}</div>
            <div style={{ fontSize:11, opacity:0.8, marginTop:4 }}>任務贊助</div>
          </div>
        </div>

        {/* 各專案贊助進度 */}
        <h3 style={{ color:"#1b5e20", marginBottom:12 }}>🌳 各專案贊助明細</h3>
        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)", marginBottom:24 }}>
          {projectDetails.map(p => {
            const pct = p.goal > 0 ? Math.min(100, Math.round(p.realRaised/p.goal*100)) : 0;
            return (
              <div key={p.id} style={{ padding:"14px 16px", borderBottom:"1px solid #f5f5f5" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                  <span style={{ fontSize:24 }}>{p.icon}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:"bold", fontSize:14 }}>{p.title}</div>
                    <div style={{ fontSize:11, color:"#888" }}>{p.org}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontWeight:"bold", color:"#2e7d32", fontSize:14 }}>NT${p.realRaised.toLocaleString()}</div>
                    <div style={{ fontSize:11, color:"#aaa" }}>{p.donorCount} 人贊助</div>
                  </div>
                </div>
                <div style={{ background:"#f1f8e9", borderRadius:99, height:8, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:pct+"%", background:"linear-gradient(90deg,#2e7d32,#43a047)", borderRadius:99, transition:"width 0.6s" }} />
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:11, color:"#aaa" }}>
                  <span style={{ color:"#2e7d32", fontWeight:"bold" }}>{pct}%</span>
                  <span>目標 NT${p.goal.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 各任務贊助明細 */}
        <h3 style={{ color:"#1b5e20", marginBottom:12 }}>✨ 各任務贊助明細</h3>
        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)", marginBottom:24 }}>
          {taskDetails.length === 0 ? (
            <div style={{ padding:20, textAlign:"center", color:"#aaa" }}>還沒有任務贊助</div>
          ) : taskDetails.map(t => {
            const pct = t.goal > 0 ? Math.min(100, Math.round(t.realRaised/t.goal*100)) : 0;
            return (
              <div key={t.id} style={{ padding:"14px 16px", borderBottom:"1px solid #f5f5f5" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                  <span style={{ fontSize:24 }}>{t.icon||"🌱"}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:"bold", fontSize:14 }}>{t.title}</div>
                    <div style={{ fontSize:11, color:"#888" }}>{t.creatorName} · {t.category}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontWeight:"bold", color:"#6a1b9a", fontSize:14 }}>NT${t.realRaised.toLocaleString()}</div>
                    <div style={{ fontSize:11, color:"#aaa" }}>{t.donorCount} 人贊助</div>
                  </div>
                </div>
                <div style={{ background:"#f3e5f5", borderRadius:99, height:8, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:pct+"%", background:"linear-gradient(90deg,#6a1b9a,#8e24aa)", borderRadius:99 }} />
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:4, fontSize:11, color:"#aaa" }}>
                  <span style={{ color:"#6a1b9a", fontWeight:"bold" }}>{pct}%</span>
                  <span>目標 NT${(t.goal||0).toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 贊助排行榜 */}
        <h3 style={{ color:"#1b5e20", marginBottom:12 }}>🥇 贊助排行榜 TOP 5</h3>
        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          {topDonors.length === 0 ? (
            <div style={{ padding:20, textAlign:"center", color:"#aaa" }}>還沒有贊助記錄</div>
          ) : topDonors.map((u,i) => (
            <div key={u.uid} style={{ display:"flex", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", gap:12 }}>
              <div style={{ fontWeight:"bold", fontSize:18, color:i<3?"#F57F17":"#ccc", width:28 }}>
                {i===0?"🥇":i===1?"🥈":i===2?"🥉":"#"+(i+1)}
              </div>
              <div style={{ fontSize:22 }}>{u.avatar||"🌱"}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:"bold", fontSize:14 }}>{u.displayName||"會員"}</div>
                <div style={{ fontSize:11, color:"#aaa" }}>
                  專案 NT${(Object.values(u.donations||{}).reduce((a:any,b:any)=>a+b,0) as number).toLocaleString()} ·
                  任務 NT${(Object.values(u.taskDonations||{}).reduce((a:any,b:any)=>a+b,0) as number).toLocaleString()}
                </div>
              </div>
              <div style={{ fontWeight:"bold", color:"#2e7d32", fontSize:16 }}>NT${u.totalDonated.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 用戶數據 Tab ──────────────────────────────────────────────
  function UsersTab() {
    return (
      <div>
        <h2 style={{ margin:"0 0 8px", color:"#1b5e20" }}>👥 用戶數據</h2>
        <div style={{ fontSize:12, color:"#aaa", marginBottom:20 }}>共 {users.length} 位會員</div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:24 }}>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>👥</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#1565C0" }}>{users.length}</div>
            <div style={{ fontSize:12, color:"#888" }}>總會員數</div>
          </div>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>⭐</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#F57F17" }}>{stats.totalPoints.toLocaleString()}</div>
            <div style={{ fontSize:12, color:"#888" }}>總積分</div>
          </div>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>🔥</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#C62828" }}>{stats.maxStreak}</div>
            <div style={{ fontSize:12, color:"#888" }}>最高連續天</div>
          </div>
        </div>

        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", padding:"10px 16px", background:"#f9f9f9", fontSize:11, fontWeight:"bold", color:"#888" }}>
            <span>用戶</span>
            <span style={{textAlign:"center"}}>積分</span>
            <span style={{textAlign:"center"}}>打卡</span>
            <span style={{textAlign:"center"}}>連續</span>
            <span style={{textAlign:"center"}}>贊助</span>
          </div>
          {users.length === 0 ? (
            <div style={{ padding:20, textAlign:"center", color:"#aaa" }}>還沒有會員</div>
          ) : (
            [...users].sort((a,b)=>(b.points||0)-(a.points||0)).map((u,i) => {
              const donated = (Object.values(u.donations||{}).reduce((a:any,b:any)=>a+b,0) as number) +
                              (Object.values(u.taskDonations||{}).reduce((a:any,b:any)=>a+b,0) as number);
              return (
                <div key={u.uid} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", alignItems:"center" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontWeight:"bold", fontSize:12, color:i<3?"#F57F17":"#ccc", width:20 }}>#{i+1}</span>
                    <span style={{ fontSize:20 }}>{u.avatar||"🌱"}</span>
                    <div>
                      <div style={{ fontWeight:"bold", fontSize:13 }}>{u.displayName||"會員"}</div>
                      <div style={{ fontSize:10, color:"#aaa" }}>{u.uid.slice(0,8)}...</div>
                    </div>
                  </div>
                  <div style={{ textAlign:"center", fontWeight:"bold", color:"#2e7d32", fontSize:13 }}>{u.points||0}</div>
                  <div style={{ textAlign:"center", color:"#888", fontSize:13 }}>{(u.checkinDays||[]).length}</div>
                  <div style={{ textAlign:"center", color:"#F57F17", fontSize:13 }}>🔥{u.streak||0}</div>
                  <div style={{ textAlign:"center", color:"#6a1b9a", fontSize:13 }}>NT${donated}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // ── 任務管理 Tab ──────────────────────────────────────────────
  function TasksTab() {
    async function approve(id: string) {
      await update(ref(db, "memberTasks/"+id), { status:"已核准" });
      showToast("✅ 任務已核准！");
    }
    async function reject(id: string) {
      await update(ref(db, "memberTasks/"+id), { status:"已拒絕" });
      showToast("❌ 任務已拒絕");
    }
    async function del(id: string) {
      if (window.confirm("確定要刪除這個任務？")) {
        await remove(ref(db, "memberTasks/"+id));
        showToast("🗑️ 任務已刪除");
      }
    }

    const pending = memberTasks.filter(t => !t.status || t.status==="審核中");
    const others  = memberTasks.filter(t => t.status && t.status!=="審核中");

    return (
      <div>
        <h2 style={{ margin:"0 0 20px", color:"#1b5e20" }}>✅ 任務管理</h2>

        {pending.length > 0 && (
          <>
            <h3 style={{ color:"#F57F17", marginBottom:12 }}>⏳ 待審核 ({pending.length})</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
              {pending.map(t => (
                <div key={t.id} style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.08)", borderLeft:"4px solid #F57F17" }}>
                  <div style={{ display:"flex", gap:12, marginBottom:10 }}>
                    <div style={{ fontSize:28 }}>{t.icon||"🌱"}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:"bold", fontSize:15 }}>{t.title}</div>
                      <div style={{ fontSize:12, color:"#888" }}>{t.creatorName} · {t.category} · 截止 {t.deadline}</div>
                      <div style={{ fontSize:13, color:"#555", marginTop:4 }}>{t.desc}</div>
                      <div style={{ fontSize:12, color:"#888", marginTop:4 }}>目標 NT${(t.goal||0).toLocaleString()}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={() => approve(t.id)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>✅ 核准</button>
                    <button onClick={() => reject(t.id)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:"#ffebee", color:"#c62828", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>❌ 拒絕</button>
                    <button onClick={() => del(t.id)} style={{ padding:"10px 14px", borderRadius:10, border:"none", background:"#f5f5f5", color:"#aaa", cursor:"pointer", fontFamily:FF }}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {pending.length === 0 && <div style={{ background:"#e8f5e9", borderRadius:12, padding:16, marginBottom:24, textAlign:"center", color:"#2e7d32", fontWeight:"bold" }}>✅ 沒有待審核任務</div>}

        <h3 style={{ color:"#888", marginBottom:12 }}>已處理任務</h3>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {others.length === 0 ? (
            <div style={{ background:"#fff", borderRadius:12, padding:16, textAlign:"center", color:"#aaa" }}>還沒有已處理的任務</div>
          ) : others.map(t => (
            <div key={t.id} style={{ background:"#fff", borderRadius:14, padding:"12px 16px", boxShadow:"0 1px 8px rgba(0,0,0,0.06)", display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ fontSize:24 }}>{t.icon||"🌱"}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:"bold", fontSize:14 }}>{t.title}</div>
                <div style={{ fontSize:11, color:"#aaa" }}>{t.creatorName} · {t.category}</div>
              </div>
              <span style={{ fontSize:12, padding:"4px 10px", borderRadius:99, fontWeight:"bold", background:t.status==="已核准"?"#e8f5e9":"#ffebee", color:t.status==="已核准"?"#2e7d32":"#c62828" }}>{t.status}</span>
              <button onClick={() => del(t.id)} style={{ padding:"6px 10px", borderRadius:8, border:"none", background:"#f5f5f5", color:"#aaa", cursor:"pointer", fontSize:12, fontFamily:FF }}>🗑️</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 挑戰管理 Tab ──────────────────────────────────────────────
  function ChallengesTab() {
    const [form, setForm] = useState<any>(editCh || { icon:"🌱", title:"", desc:"", points:20, category:"生活", difficulty:"簡單" });
    const isEdit = !!(editCh && editCh.id);

    function save() {
      if (!form.title || !form.desc) return;
      if (isEdit) {
        setChallenges(cs => cs.map(c => c.id===form.id ? {...form, points:Number(form.points)} : c));
        showToast("✅ 挑戰已更新！");
      } else {
        setChallenges(cs => [...cs, { ...form, id:Date.now(), points:Number(form.points) }]);
        showToast("✅ 新挑戰已新增！");
      }
      setEditCh(null);
    }

    function del(id: number) {
      if (window.confirm("確定要刪除這個挑戰？")) {
        setChallenges(cs => cs.filter(c => c.id !== id));
        showToast("🗑️ 挑戰已刪除");
      }
    }

    return (
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <h2 style={{ margin:0, color:"#1b5e20" }}>🌿 挑戰項目管理</h2>
          <button onClick={() => setEditCh({})} style={{ padding:"8px 16px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>+ 新增</button>
        </div>

        {editCh !== null && (
          <div style={{ background:"#ffffff", borderRadius:16, padding:24, marginBottom:20, boxShadow:"0 2px 16px rgba(0,0,0,0.1)", color:"#333" }}>
            <h3 style={{ margin:"0 0 16px", color:"#1b5e20" }}>{isEdit?"✏️ 編輯挑戰":"➕ 新增挑戰"}</h3>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
              {ICONS.map(ic => (
                <button key={ic} onClick={() => setForm((f:any)=>({...f,icon:ic}))} style={{ width:36, height:36, borderRadius:8, border:`2px solid ${form.icon===ic?"#2e7d32":"#eee"}`, background:form.icon===ic?"#e8f5e9":"#fff", fontSize:18, cursor:"pointer" }}>{ic}</button>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>分類</label>
                <select value={form.category} onChange={e=>setForm((f:any)=>({...f,category:e.target.value}))} style={{ width:"100%", padding:8, borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, color:"#333" }}>
                  {CATS.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>難度</label>
                <select value={form.difficulty} onChange={e=>setForm((f:any)=>({...f,difficulty:e.target.value}))} style={{ width:"100%", padding:8, borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, color:"#333" }}>
                  {DIFFS.map(d=><option key={d}>{d}</option>)}
                </select>
              </div>
            </div>
            {[["title","挑戰名稱"],["desc","說明"]].map(([k,l]) => (
              <div key={k} style={{ marginBottom:10 }}>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>{l} *</label>
                <input value={form[k]||""} onChange={e=>setForm((f:any)=>({...f,[k]:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, boxSizing:"border-box", color:"#333" }} />
              </div>
            ))}
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>積分</label>
              <input type="number" value={form.points} onChange={e=>setForm((f:any)=>({...f,points:e.target.value}))} style={{ width:100, padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, display:"block", color:"#333" }} />
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={save} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>💾 儲存</button>
              <button onClick={() => setEditCh(null)} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#f5f5f5", color:"#888", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>取消</button>
            </div>
          </div>
        )}

        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          {challenges.map(c => (
            <div key={c.id} style={{ display:"flex", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", gap:12 }}>
              <div style={{ fontSize:28 }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:"bold", fontSize:14 }}>{c.title}</div>
                <div style={{ fontSize:12, color:"#888" }}>{c.desc}</div>
                <div style={{ display:"flex", gap:6, marginTop:4 }}>
                  <span style={{ fontSize:11, background:"#e8f5e9", color:"#2e7d32", padding:"2px 8px", borderRadius:99, fontWeight:"bold" }}>{c.category}</span>
                  <span style={{ fontSize:11, background:"#fff8e1", color:"#f57f17", padding:"2px 8px", borderRadius:99 }}>{c.difficulty}</span>
                  <span style={{ fontSize:11, background:"#e3f2fd", color:"#1565c0", padding:"2px 8px", borderRadius:99, fontWeight:"bold" }}>+{c.points}pts</span>
                </div>
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button onClick={() => setEditCh(c)} style={{ padding:"6px 12px", borderRadius:8, border:"1px solid #e8f5e9", background:"#fff", color:"#2e7d32", cursor:"pointer", fontSize:12, fontFamily:FF }}>✏️</button>
                <button onClick={() => del(c.id)} style={{ padding:"6px 12px", borderRadius:8, border:"none", background:"#ffebee", color:"#c62828", cursor:"pointer", fontSize:12, fontFamily:FF }}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 贊助計畫 Tab ──────────────────────────────────────────────
  function ProjectsTab() {
    const [form, setForm] = useState<any>(editPr || { icon:"🌳", title:"", org:"", desc:"", goal:10000, unit:10, active:true });
    const isEdit = !!(editPr && editPr.id);
    const projDon = calcProjectDonations();

    function save() {
      if (!form.title || !form.org) return;
      if (isEdit) {
        setProjects(ps => ps.map(p => p.id===form.id ? {...form, goal:Number(form.goal), unit:Number(form.unit)} : p));
        showToast("✅ 計畫已更新！");
      } else {
        setProjects(ps => [...ps, { ...form, id:"p"+Date.now(), raised:0, backers:0, goal:Number(form.goal), unit:Number(form.unit) }]);
        showToast("✅ 新計畫已新增！");
      }
      setEditPr(null);
    }

    return (
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <h2 style={{ margin:0, color:"#1b5e20" }}>💚 贊助計畫管理</h2>
          <button onClick={() => setEditPr({})} style={{ padding:"8px 16px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>+ 新增</button>
        </div>

        {editPr !== null && (
          <div style={{ background:"#ffffff", borderRadius:16, padding:24, marginBottom:20, boxShadow:"0 2px 16px rgba(0,0,0,0.1)", color:"#333" }}>
            <h3 style={{ margin:"0 0 16px", color:"#1b5e20" }}>{isEdit?"✏️ 編輯計畫":"➕ 新增計畫"}</h3>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {[["title","計畫名稱"],["org","主辦單位"],["desc","說明"]].map(([k,l]) => (
                <div key={k} style={{ gridColumn:k==="desc"?"1/-1":"auto" }}>
                  <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>{l} *</label>
                  <input value={form[k]||""} onChange={e=>setForm((f:any)=>({...f,[k]:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, boxSizing:"border-box", color:"#333" }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>目標金額</label>
                <input type="number" value={form.goal} onChange={e=>setForm((f:any)=>({...f,goal:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, boxSizing:"border-box", color:"#333" }} />
              </div>
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>單筆贊助金額</label>
                <input type="number" value={form.unit} onChange={e=>setForm((f:any)=>({...f,unit:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, boxSizing:"border-box", color:"#333" }} />
              </div>
            </div>
            <div style={{ display:"flex", gap:10, marginTop:16 }}>
              <button onClick={save} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>💾 儲存</button>
              <button onClick={() => setEditPr(null)} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#f5f5f5", color:"#888", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>取消</button>
            </div>
          </div>
        )}

        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {projects.map(p => {
            const realRaised = projDon[p.id]||0;
            const pct = Math.min(100, Math.round(realRaised/p.goal*100));
            return (
              <div key={p.id} style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <div style={{ fontSize:32 }}>{p.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:"bold", fontSize:15, marginBottom:4 }}>{p.title}</div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:8 }}>{p.org}</div>
                    <div style={{ background:"#f1f8e9", borderRadius:99, height:6, overflow:"hidden", marginBottom:4 }}>
                      <div style={{ height:"100%", width:pct+"%", background:"#2e7d32", borderRadius:99 }} />
                    </div>
                    <div style={{ fontSize:11, color:"#888" }}>
                      實際 NT${realRaised.toLocaleString()} / 目標 NT${p.goal.toLocaleString()} · {pct}%
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={() => setEditPr(p)} style={{ padding:"6px 10px", borderRadius:8, border:"1px solid #e8f5e9", background:"#fff", color:"#2e7d32", cursor:"pointer", fontSize:12, fontFamily:FF }}>✏️</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const CONTENT: Record<string, JSX.Element> = {
    dashboard: <Dashboard />,
    donations: <DonationsTab />,
    users: <UsersTab />,
    tasks: <TasksTab />,
    challenges: <ChallengesTab />,
    projects: <ProjectsTab />,
  };

  return (
    <div style={{ minHeight:"100vh", background:"#f5f7f5", fontFamily:FF, colorScheme:"light", color:"#333" }}>
    <style>{`
      * { color-scheme: light !important; }
      input, textarea, select { color: #333 !important; background-color: #fafafa !important; }
    `}</style>
      {toast && (
        <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", background:"#1b5e20", color:"#fff", borderRadius:30, padding:"10px 24px", fontWeight:"bold", fontSize:14, zIndex:9999, whiteSpace:"nowrap", boxShadow:"0 4px 20px rgba(0,0,0,0.25)" }}>
          {toast}
        </div>
      )}

      {/* 側邊欄 */}
      <div style={{ position:"fixed", left:0, top:0, bottom:0, width:200, background:"linear-gradient(180deg,#1b5e20,#2e7d32)", padding:"24px 0", display:"flex", flexDirection:"column", zIndex:100 }}>
        <div style={{ padding:"0 20px 24px", borderBottom:"1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ fontSize:28 }}>🌿</div>
          <div style={{ color:"#fff", fontWeight:"bold", fontSize:15, marginTop:6 }}>綠色行動</div>
          <div style={{ color:"rgba(255,255,255,0.6)", fontSize:11 }}>後台管理系統</div>
        </div>
        <div style={{ flex:1, padding:"12px 0", overflowY:"auto" }}>
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ width:"100%", padding:"12px 20px", border:"none", background:tab===t.key?"rgba(255,255,255,0.2)":"transparent", color:"#fff", textAlign:"left", cursor:"pointer", fontSize:14, fontFamily:FF, display:"flex", alignItems:"center", gap:10, borderLeft:tab===t.key?"3px solid #fff":"3px solid transparent" }}>
              <span>{t.icon}</span><span>{t.label}</span>
            </button>
          ))}
        </div>
        <div style={{ padding:"16px 20px", borderTop:"1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ color:"rgba(255,255,255,0.5)", fontSize:10, marginBottom:8 }}>● 即時同步 Firebase</div>
          <button onClick={() => setAuthed(false)} style={{ width:"100%", padding:"8px", borderRadius:8, border:"1px solid rgba(255,255,255,0.3)", background:"transparent", color:"#fff", cursor:"pointer", fontSize:13, fontFamily:FF }}>🚪 登出</button>
        </div>
      </div>

      {/* 主內容 */}
      <div style={{ marginLeft:200, padding:32, minHeight:"100vh" }}>
        {CONTENT[tab]}
      </div>
    </div>
  );
}
