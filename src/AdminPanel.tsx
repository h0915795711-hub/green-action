// ╔══════════════════════════════════════════════════════════════╗
// ║  綠色行動 — 後台管理系統                                       ║
// ║  將此檔案放入 src/ 資料夾                                      ║
// ║  在 App.tsx 最後加上 <AdminPanel /> 即可使用                   ║
// ╚══════════════════════════════════════════════════════════════╝

import { useState } from "react";

const ADMIN_PASSWORD = "coolo24444102";
const FF = "Georgia, serif";

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

const INIT_PROJECTS = [
  { id:"p1", icon:"🌳", title:"種一百棵樹",   org:"台灣森林協會", goal:10000, raised:6840, unit:10, desc:"每筆贊助10元，協助山地造林復育",     backers:68, active:true },
  { id:"p2", icon:"🌊", title:"淨化海洋計畫", org:"海洋守護隊",   goal:8000,  raised:5120, unit:20, desc:"每筆贊助20元，購買淨灘清潔設備",     backers:44, active:true },
  { id:"p3", icon:"☀️", title:"偏鄉太陽能板", org:"綠能希望基金", goal:15000, raised:9300, unit:50, desc:"每筆贊助50元，讓偏鄉學校用上太陽能", backers:31, active:true },
  { id:"p4", icon:"🐝", title:"蜜蜂生態復育", org:"生態研究所",   goal:6000,  raised:2100, unit:15, desc:"每筆贊助15元，保護授粉昆蟲棲地",     backers:22, active:true },
  { id:"p5", icon:"💧", title:"淨水過濾設備", org:"清淨水源聯盟", goal:12000, raised:7600, unit:30, desc:"每筆贊助30元，提供山村安全飲水",     backers:55, active:true },
];

const INIT_TASKS = [
  { id:"m1", creatorName:"小葉",  avatar:"👧", icon:"🧹", title:"社區清潔日",    desc:"組織社區居民一起清掃附近公園與街道", category:"社區", goal:3000, raised:1840, backers:24, deadline:"2026-03-20", joined:[], status:"審核中" },
  { id:"m2", creatorName:"環保王", avatar:"👨", icon:"🌻", title:"校園花圃重建",  desc:"號召學生志工重新整理學校荒廢的花圃", category:"生態", goal:5000, raised:2200, backers:18, deadline:"2026-03-28", joined:[], status:"已核准" },
  { id:"m3", creatorName:"大樹哥", avatar:"🧔", icon:"🚴", title:"無車通勤挑戰週", desc:"發起一週不開車上班活動", category:"交通", goal:2000, raised:2000, backers:41, deadline:"2026-03-10", joined:[], status:"已核准" },
];

const MOCK_USERS = [
  { uid:"u1", name:"小綠", avatar:"🌱", points:380, streak:12, completed:8 },
  { uid:"u2", name:"環保達人", avatar:"🌍", points:520, streak:20, completed:15 },
  { uid:"u3", name:"葉子", avatar:"🍃", points:240, streak:5, completed:6 },
  { uid:"u4", name:"地球守護者", avatar:"🌳", points:890, streak:30, completed:22 },
  { uid:"u5", name:"綠能小子", avatar:"⚡", points:150, streak:3, completed:4 },
];

const CATS = ["交通","生活","用水","生態","回收","飲食","能源","社區"];
const DIFFS = ["簡單","中等","困難"];
const ICONS = ["🚶","🛍️","💧","🌱","♻️","🥗","💡","🧴","🌊","🔋","🌳","☀️","🐝","🌻","🚴","🧹"];

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [tab, setTab] = useState("dashboard");

  const [challenges, setChallenges] = useState(INIT_CHALLENGES);
  const [projects, setProjects] = useState(INIT_PROJECTS);
  const [tasks, setTasks] = useState(INIT_TASKS);
  const [users] = useState(MOCK_USERS);

  const [editCh, setEditCh] = useState(null);
  const [editPr, setEditPr] = useState(null);
  const [toast, setToast] = useState("");

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  function login() {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwErr(false); }
    else { setPwErr(true); }
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
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwErr(false); }}
            onKeyDown={e => e.key === "Enter" && login()}
            placeholder="請輸入管理員密碼"
            style={{ width:"100%", padding:"12px 16px", borderRadius:12, border:`1.5px solid ${pwErr?"#e53935":"#e8f5e9"}`, fontSize:15, fontFamily:FF, outline:"none", boxSizing:"border-box" }}
          />
          {pwErr && <div style={{ color:"#e53935", fontSize:12, marginTop:6 }}>❌ 密碼錯誤，請重試</div>}
        </div>
        <button onClick={login} style={{ width:"100%", padding:14, borderRadius:12, border:"none", background:"linear-gradient(135deg,#2e7d32,#43a047)", color:"#fff", fontWeight:"bold", fontSize:16, cursor:"pointer", fontFamily:FF }}>
          登入
        </button>
      </div>
    </div>
  );

  const TABS = [
    { key:"dashboard", label:"總覽", icon:"📊" },
    { key:"challenges", label:"挑戰管理", icon:"🌿" },
    { key:"projects", label:"贊助計畫", icon:"💚" },
    { key:"tasks", label:"任務審核", icon:"✅" },
    { key:"users", label:"用戶數據", icon:"👥" },
  ];

  // ── 總覽 ──────────────────────────────────────────────────────
  function Dashboard() {
    const totalRaised = projects.reduce((s,p) => s+p.raised, 0);
    const totalUsers = users.length;
    const pendingTasks = tasks.filter(t => t.status === "審核中").length;
    const totalPoints = users.reduce((s,u) => s+u.points, 0);

    const stats = [
      { label:"總用戶數", value:totalUsers, icon:"👥", color:"#1565C0" },
      { label:"挑戰項目", value:challenges.length, icon:"🌿", color:"#2E7D32" },
      { label:"待審任務", value:pendingTasks, icon:"⏳", color:"#F57F17", alert:pendingTasks>0 },
      { label:"總募款金額", value:"NT$"+totalRaised.toLocaleString(), icon:"💚", color:"#00695C" },
      { label:"贊助計畫", value:projects.filter(p=>p.active).length, icon:"📋", color:"#6A1B9A" },
      { label:"用戶總積分", value:totalPoints, icon:"⭐", color:"#C62828" },
    ];

    return (
      <div>
        <h2 style={{ margin:"0 0 20px", color:"#1b5e20" }}>📊 系統總覽</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:28 }}>
          {stats.map(s => (
            <div key={s.label} style={{ background:"#fff", borderRadius:16, padding:"20px 16px", boxShadow:"0 2px 12px rgba(0,0,0,0.08)", border:s.alert?"2px solid #FF6F00":"none", textAlign:"center" }}>
              <div style={{ fontSize:32, marginBottom:8 }}>{s.icon}</div>
              <div style={{ fontWeight:"bold", fontSize:20, color:s.color }}>{s.value}</div>
              <div style={{ fontSize:12, color:"#888", marginTop:4 }}>{s.label}</div>
              {s.alert && <div style={{ fontSize:11, color:"#FF6F00", fontWeight:"bold", marginTop:4 }}>⚠️ 需要審核</div>}
            </div>
          ))}
        </div>

        <h3 style={{ color:"#1b5e20", marginBottom:12 }}>🏆 積分排行榜</h3>
        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          {[...users].sort((a,b) => b.points-a.points).map((u,i) => (
            <div key={u.uid} style={{ display:"flex", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", gap:12 }}>
              <div style={{ fontWeight:"bold", fontSize:16, color:i<3?"#F57F17":"#aaa", width:28 }}>#{i+1}</div>
              <div style={{ fontSize:24 }}>{u.avatar}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:"bold", fontSize:14 }}>{u.name}</div>
                <div style={{ fontSize:11, color:"#aaa" }}>🔥 {u.streak}天 · {u.completed}項完成</div>
              </div>
              <div style={{ fontWeight:"bold", color:"#2e7d32", fontSize:16 }}>{u.points}pts</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 挑戰管理 ─────────────────────────────────────────────────
  function ChallengesTab() {
    const [form, setForm] = useState(editCh || { icon:"🌱", title:"", desc:"", points:20, category:"生活", difficulty:"簡單" });
    const isEdit = !!editCh;

    function save() {
      if (!form.title || !form.desc) return;
      if (isEdit) {
        setChallenges(cs => cs.map(c => c.id===form.id ? form : c));
        showToast("✅ 挑戰已更新！");
      } else {
        setChallenges(cs => [...cs, { ...form, id: Date.now(), points: Number(form.points) }]);
        showToast("✅ 新挑戰已新增！");
      }
      setEditCh(null);
    }

    function del(id) {
      if (window.confirm("確定要刪除這個挑戰？")) {
        setChallenges(cs => cs.filter(c => c.id !== id));
        showToast("🗑️ 挑戰已刪除");
      }
    }

    return (
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <h2 style={{ margin:0, color:"#1b5e20" }}>🌿 挑戰項目管理</h2>
          <button onClick={() => setEditCh({})} style={{ padding:"8px 16px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>+ 新增挑戰</button>
        </div>

        {(isEdit || editCh !== null) && (
          <div style={{ background:"#fff", borderRadius:16, padding:24, marginBottom:20, boxShadow:"0 2px 16px rgba(0,0,0,0.1)" }}>
            <h3 style={{ margin:"0 0 16px", color:"#1b5e20" }}>{isEdit?"✏️ 編輯挑戰":"➕ 新增挑戰"}</h3>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>圖示</label>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:6 }}>
                  {ICONS.map(ic => (
                    <button key={ic} onClick={() => setForm(f=>({...f,icon:ic}))} style={{ width:36, height:36, borderRadius:8, border:`2px solid ${form.icon===ic?"#2e7d32":"#eee"}`, background:form.icon===ic?"#e8f5e9":"#fff", fontSize:18, cursor:"pointer" }}>{ic}</button>
                  ))}
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <div>
                  <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>分類</label>
                  <select value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} style={{ width:"100%", padding:8, borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF }}>
                    {CATS.map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>難度</label>
                  <select value={form.difficulty} onChange={e=>setForm(f=>({...f,difficulty:e.target.value}))} style={{ width:"100%", padding:8, borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF }}>
                    {DIFFS.map(d=><option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ marginBottom:10 }}>
              <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>挑戰名稱 *</label>
              <input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="例如：以步代車" style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, boxSizing:"border-box" }} />
            </div>
            <div style={{ marginBottom:10 }}>
              <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>說明 *</label>
              <input value={form.desc} onChange={e=>setForm(f=>({...f,desc:e.target.value}))} placeholder="挑戰描述" style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, boxSizing:"border-box" }} />
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>積分 *</label>
              <input type="number" value={form.points} onChange={e=>setForm(f=>({...f,points:e.target.value}))} style={{ width:100, padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, display:"block" }} />
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={save} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>💾 儲存</button>
              <button onClick={() => setEditCh(null)} style={{ padding:"10px 24px", borderRadius:10, border:"none", background:"#f5f5f5", color:"#888", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>取消</button>
            </div>
          </div>
        )}

        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          {challenges.map((c,i) => (
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
                <button onClick={() => setEditCh(c)} style={{ padding:"6px 12px", borderRadius:8, border:"1px solid #e8f5e9", background:"#fff", color:"#2e7d32", cursor:"pointer", fontSize:12, fontFamily:FF }}>✏️ 編輯</button>
                <button onClick={() => del(c.id)} style={{ padding:"6px 12px", borderRadius:8, border:"none", background:"#ffebee", color:"#c62828", cursor:"pointer", fontSize:12, fontFamily:FF }}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 贊助計畫 ─────────────────────────────────────────────────
  function ProjectsTab() {
    const [form, setForm] = useState(editPr || { icon:"🌳", title:"", org:"", desc:"", goal:10000, unit:10, active:true });
    const isEdit = !!editPr;

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

    function del(id) {
      if (window.confirm("確定要刪除此計畫？")) {
        setProjects(ps => ps.filter(p => p.id !== id));
        showToast("🗑️ 計畫已刪除");
      }
    }

    function toggle(id) {
      setProjects(ps => ps.map(p => p.id===id ? {...p, active:!p.active} : p));
    }

    return (
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <h2 style={{ margin:0, color:"#1b5e20" }}>💚 贊助計畫管理</h2>
          <button onClick={() => setEditPr({})} style={{ padding:"8px 16px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>+ 新增計畫</button>
        </div>

        {editPr !== null && (
          <div style={{ background:"#fff", borderRadius:16, padding:24, marginBottom:20, boxShadow:"0 2px 16px rgba(0,0,0,0.1)" }}>
            <h3 style={{ margin:"0 0 16px", color:"#1b5e20" }}>{isEdit?"✏️ 編輯計畫":"➕ 新增計畫"}</h3>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {[["title","計畫名稱"],["org","主辦單位"],["desc","說明"]].map(([k,l]) => (
                <div key={k} style={{ gridColumn: k==="desc"?"1/-1":"auto" }}>
                  <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>{l} *</label>
                  <input value={form[k]||""} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontSize:14, fontFamily:FF, boxSizing:"border-box" }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>目標金額 (NT$)</label>
                <input type="number" value={form.goal} onChange={e=>setForm(f=>({...f,goal:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, boxSizing:"border-box" }} />
              </div>
              <div>
                <label style={{ fontSize:12, fontWeight:"bold", color:"#555" }}>單筆贊助金額</label>
                <input type="number" value={form.unit} onChange={e=>setForm(f=>({...f,unit:e.target.value}))} style={{ width:"100%", padding:"8px 12px", borderRadius:8, border:"1.5px solid #e8f5e9", marginTop:4, fontFamily:FF, boxSizing:"border-box" }} />
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
            const pct = Math.min(100, Math.round(p.raised/p.goal*100));
            return (
              <div key={p.id} style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.08)", opacity:p.active?1:0.6 }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <div style={{ fontSize:32 }}>{p.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                      <span style={{ fontWeight:"bold", fontSize:15 }}>{p.title}</span>
                      <span style={{ fontSize:11, background:p.active?"#e8f5e9":"#f5f5f5", color:p.active?"#2e7d32":"#aaa", padding:"2px 8px", borderRadius:99, fontWeight:"bold" }}>{p.active?"上架中":"已下架"}</span>
                    </div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:8 }}>{p.org} · {p.desc}</div>
                    <div style={{ background:"#f1f8e9", borderRadius:99, height:6, overflow:"hidden", marginBottom:4 }}>
                      <div style={{ height:"100%", width:pct+"%", background:"#2e7d32", borderRadius:99 }} />
                    </div>
                    <div style={{ fontSize:11, color:"#888" }}>NT${p.raised.toLocaleString()} / NT${p.goal.toLocaleString()} · {pct}% · {p.backers}人贊助</div>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={() => toggle(p.id)} style={{ padding:"6px 10px", borderRadius:8, border:"1px solid #e8f5e9", background:"#fff", color:"#2e7d32", cursor:"pointer", fontSize:12, fontFamily:FF }}>{p.active?"下架":"上架"}</button>
                    <button onClick={() => setEditPr(p)} style={{ padding:"6px 10px", borderRadius:8, border:"1px solid #e8f5e9", background:"#fff", color:"#2e7d32", cursor:"pointer", fontSize:12, fontFamily:FF }}>✏️</button>
                    <button onClick={() => del(p.id)} style={{ padding:"6px 10px", borderRadius:8, border:"none", background:"#ffebee", color:"#c62828", cursor:"pointer", fontSize:12, fontFamily:FF }}>🗑️</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── 任務審核 ─────────────────────────────────────────────────
  function TasksTab() {
    function approve(id) {
      setTasks(ts => ts.map(t => t.id===id ? {...t, status:"已核准"} : t));
      showToast("✅ 任務已核准！");
    }
    function reject(id) {
      setTasks(ts => ts.map(t => t.id===id ? {...t, status:"已拒絕"} : t));
      showToast("❌ 任務已拒絕");
    }
    function del(id) {
      if (window.confirm("確定要刪除這個任務？")) {
        setTasks(ts => ts.filter(t => t.id !== id));
        showToast("🗑️ 任務已刪除");
      }
    }

    const pending = tasks.filter(t => t.status === "審核中");
    const others  = tasks.filter(t => t.status !== "審核中");

    return (
      <div>
        <h2 style={{ margin:"0 0 20px", color:"#1b5e20" }}>✅ 任務審核管理</h2>

        {pending.length > 0 && (
          <>
            <h3 style={{ color:"#F57F17", marginBottom:12 }}>⏳ 待審核 ({pending.length})</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
              {pending.map(t => (
                <div key={t.id} style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.08)", borderLeft:"4px solid #F57F17" }}>
                  <div style={{ display:"flex", gap:12, marginBottom:10 }}>
                    <div style={{ fontSize:28 }}>{t.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:"bold", fontSize:15 }}>{t.title}</div>
                      <div style={{ fontSize:12, color:"#888" }}>{t.creatorName} {t.avatar} · {t.category} · 截止 {t.deadline}</div>
                      <div style={{ fontSize:13, color:"#555", marginTop:4 }}>{t.desc}</div>
                      <div style={{ fontSize:12, color:"#888", marginTop:4 }}>目標 NT${t.goal.toLocaleString()} · {t.backers}人支持</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:8 }}>
                    <button onClick={() => approve(t.id)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:"#2e7d32", color:"#fff", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>✅ 核准</button>
                    <button onClick={() => reject(t.id)} style={{ flex:1, padding:"10px", borderRadius:10, border:"none", background:"#ffebee", color:"#c62828", fontWeight:"bold", cursor:"pointer", fontFamily:FF }}>❌ 拒絕</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <h3 style={{ color:"#888", marginBottom:12 }}>已處理</h3>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {others.map(t => (
            <div key={t.id} style={{ background:"#fff", borderRadius:14, padding:"12px 16px", boxShadow:"0 1px 8px rgba(0,0,0,0.06)", display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ fontSize:24 }}>{t.icon}</div>
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

  // ── 用戶數據 ─────────────────────────────────────────────────
  function UsersTab() {
    return (
      <div>
        <h2 style={{ margin:"0 0 20px", color:"#1b5e20" }}>👥 用戶數據</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:24 }}>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>👥</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#1565C0" }}>{users.length}</div>
            <div style={{ fontSize:12, color:"#888" }}>總用戶數</div>
          </div>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>⭐</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#F57F17" }}>{users.reduce((s,u)=>s+u.points,0)}</div>
            <div style={{ fontSize:12, color:"#888" }}>總積分</div>
          </div>
          <div style={{ background:"#fff", borderRadius:14, padding:16, textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:28, marginBottom:4 }}>🔥</div>
            <div style={{ fontWeight:"bold", fontSize:24, color:"#C62828" }}>{Math.max(...users.map(u=>u.streak))}</div>
            <div style={{ fontSize:12, color:"#888" }}>最高連續天數</div>
          </div>
        </div>

        <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.08)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", padding:"10px 16px", background:"#f9f9f9", fontSize:12, fontWeight:"bold", color:"#888" }}>
            <span>用戶</span><span style={{textAlign:"center"}}>積分</span><span style={{textAlign:"center"}}>連續天</span><span style={{textAlign:"center"}}>完成項目</span>
          </div>
          {[...users].sort((a,b)=>b.points-a.points).map((u,i) => (
            <div key={u.uid} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", padding:"12px 16px", borderBottom:"1px solid #f5f5f5", alignItems:"center" }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <span style={{ fontWeight:"bold", fontSize:13, color:i<3?"#F57F17":"#ccc", width:20 }}>#{i+1}</span>
                <span style={{ fontSize:22 }}>{u.avatar}</span>
                <span style={{ fontWeight:"bold", fontSize:14 }}>{u.name}</span>
              </div>
              <div style={{ textAlign:"center", fontWeight:"bold", color:"#2e7d32" }}>{u.points}</div>
              <div style={{ textAlign:"center", color:"#F57F17" }}>🔥{u.streak}</div>
              <div style={{ textAlign:"center", color:"#888" }}>{u.completed}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const CONTENT = { dashboard:<Dashboard/>, challenges:<ChallengesTab/>, projects:<ProjectsTab/>, tasks:<TasksTab/>, users:<UsersTab/> };

  return (
    <div style={{ minHeight:"100vh", background:"#f5f7f5", fontFamily:FF }}>
      {toast && (
        <div style={{ position:"fixed", top:16, left:"50%", transform:"translateX(-50%)", background:"#1b5e20", color:"#fff", borderRadius:30, padding:"10px 24px", fontWeight:"bold", fontSize:14, zIndex:9999, whiteSpace:"nowrap", boxShadow:"0 4px 20px rgba(0,0,0,0.25)" }}>
          {toast}
        </div>
      )}

      {/* 側邊欄 */}
      <div style={{ position:"fixed", left:0, top:0, bottom:0, width:200, background:"linear-gradient(180deg,#1b5e20,#2e7d32)", padding:"24px 0", display:"flex", flexDirection:"column" }}>
        <div style={{ padding:"0 20px 24px", borderBottom:"1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ fontSize:28 }}>🌿</div>
          <div style={{ color:"#fff", fontWeight:"bold", fontSize:15, marginTop:6 }}>綠色行動</div>
          <div style={{ color:"rgba(255,255,255,0.6)", fontSize:11 }}>後台管理系統</div>
        </div>
        <div style={{ flex:1, padding:"12px 0" }}>
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ width:"100%", padding:"12px 20px", border:"none", background:tab===t.key?"rgba(255,255,255,0.2)":"transparent", color:"#fff", textAlign:"left", cursor:"pointer", fontSize:14, fontFamily:FF, display:"flex", alignItems:"center", gap:10, borderLeft:tab===t.key?"3px solid #fff":"3px solid transparent" }}>
              <span>{t.icon}</span><span>{t.label}</span>
            </button>
          ))}
        </div>
        <div style={{ padding:"16px 20px", borderTop:"1px solid rgba(255,255,255,0.15)" }}>
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
