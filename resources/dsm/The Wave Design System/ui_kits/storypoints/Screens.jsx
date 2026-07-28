/* The Wave — Storypoints Workspace UI kit.
   Faithful recreation of the product's screens, composed from the
   design-system primitives (window.TheWaveDesignSystem_664d29).
   All screens assign to window at the end for cross-file use. */

const NS = window.TheWaveDesignSystem_664d29;
const {
  Button, IconButton, Select, Input, Checkbox, Tabs, Card, StatTile, Hero,
  GameStat, ProgressBar, SprintProjectRow, Chip, Badge, NavItem, WeekButton, Spinner,
} = NS;

/* ---- Lucide-style stroke icons ---- */
const I = (p) => <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p} />;
const IcMenu = () => <I><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></I>;
const IcPlus = () => <I strokeWidth="2.4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></I>;
const IcFolder = () => <I><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></I>;
const IcBold = () => <I strokeWidth="2.4"><path d="M6 4h8a4 4 0 0 1 0 8H6z"/><path d="M6 12h9a4 4 0 0 1 0 8H6z"/></I>;
const IcItalic = () => <I strokeWidth="2.4"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></I>;
const IcList = () => <I><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></I>;

/* ---- Sample data (mirrors the product's shape) ---- */
const PROJECTS = [
  { code: 'RCA', name: 'Restyle Cliente A', color: '#0057FF', assigned: 20, worked: 13 },
  { code: 'ABX', name: 'App Cliente B',     color: '#FFD400', assigned: 12, worked: 12 },
  { code: 'DOC', name: 'Documentazione',    color: '#CDC3BA', assigned: 8,  worked: 3  },
  { code: 'INT', name: 'Interni Studio',    color: '#00A98F', assigned: 6,  worked: 4  },
];
const HOURS = ['09–10','10–11','11–12','12–13','14–15','15–16','16–17','17–18'];
const DAYS = [['Lun','02'],['Mar','03'],['Mer','04'],['Gio','05'],['Ven','06']];
// pre-painted timesheet: map "day,hour" -> project index
const GRID = { '0,0':0,'0,1':0,'0,2':0,'0,4':2,'0,5':2, '1,0':0,'1,1':0,'1,3':1,'1,4':1,'1,5':1,
  '2,0':1,'2,1':1,'2,2':1,'2,5':3, '3,0':0,'3,1':0,'3,2':3,'3,3':3,'3,6':2, '4,0':2,'4,4':1,'4,5':1,'4,6':1 };

function inkFor(hex){ const n=parseInt(hex.slice(1),16); const r=n>>16,g=(n>>8)&255,b=n&255; return (r*299+g*587+b*114)/1000>140?'#323232':'#FAF7EB'; }

/* ============================ AUTH ============================ */
function AuthScreen({ onLogin }) {
  return (
    <div style={{ position:'absolute', inset:0, background:'var(--overlay-bg)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'18px', width:'100%', maxWidth:'24rem' }}>
        <div style={{ fontSize:'1.5rem', fontWeight:800, letterSpacing:'-.02em', color:'var(--cream)' }}>Storypoints Workspace</div>
        <div style={{ width:'100%', background:'var(--panel)', borderRadius:'var(--r-4xl)', overflow:'hidden', boxShadow:'var(--shadow-modal)' }}>
          <div style={{ padding:'18px 22px', background:'var(--blue)' }}>
            <div style={{ fontSize:'1.1rem', fontWeight:800, color:'var(--cream)' }}>Accedi</div>
          </div>
          <div style={{ padding:'22px' }}>
            <Input label="Email" light placeholder="tu@esempio.it" wrapStyle={{ marginBottom:'16px' }} />
            <Input label="Password" light type="password" placeholder="••••••••" wrapStyle={{ marginBottom:'20px' }} />
            <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
              <Button onClick={onLogin} style={{ width:'100%', justifyContent:'center' }}>Accedi</Button>
              <Button variant="ghost" style={{ width:'100%' }}>Non hai un account? Registrati</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ SIDEBAR ============================ */
function Sidebar({ view, setView }) {
  return (
    <nav style={{ flex:'0 0 210px', background:'var(--panel-2)', borderRight:'1px solid var(--line)', padding:'22px 14px', display:'flex', flexDirection:'column', gap:'4px', overflow:'hidden' }}>
      <IconButton title="Apri/chiudi menu" style={{ marginBottom:'14px' }}><IcMenu/></IconButton>
      <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'22px' }}>
        <div style={{ width:42, height:42, borderRadius:'var(--r-2xl)', background:'var(--blue)', display:'flex', alignItems:'center', justifyContent:'center', flex:'none', overflow:'hidden' }}>
          <span style={{ color:'var(--cream)', fontWeight:900, fontSize:'1rem' }}>W</span>
        </div>
        <div style={{ fontSize:'1.15rem', fontWeight:800, letterSpacing:'-.01em', whiteSpace:'nowrap' }}>The Wave</div>
      </div>
      <hr style={{ border:'none', borderTop:'1px solid var(--line)', margin:'0 0 14px', width:'100%' }} />
      <NavItem icon="🎮" active={view==='game'} onClick={()=>setView('game')}>Dashboard</NavItem>
      <NavItem icon="📊" active={view==='track'} onClick={()=>setView('track')}>Tracking</NavItem>
      <div style={{ marginTop:'auto', paddingTop:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
        <div style={{ width:38, height:38, borderRadius:'50%', flex:'none', background:'var(--yellow)', boxShadow:'0 0 0 2px var(--border)' }} />
        <span style={{ fontSize:'.82rem', fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>Simo Rossi</span>
      </div>
    </nav>
  );
}

/* ============================ DASHBOARD (gamification) ============================ */
function Dashboard({ setView }) {
  const badges = [
    { ico:'🚀', name:'Primo progetto', desc:'Crea 1 progetto', on:true },
    { ico:'🗓️', name:'Pianificatore', desc:'3 sprint', on:false },
    { ico:'✅', name:'Spedizioniere', desc:'10 task completati', on:true },
    { ico:'⭐', name:'Mezzo cento', desc:'50 story points', on:false },
    { ico:'🏆', name:'Centurione', desc:'100 story points', on:false },
    { ico:'🔥', name:'Maratoneta', desc:'50 task completati', on:false },
  ];
  const earned = badges.filter(b=>b.on).length;
  return (
    <div style={{ padding:'14px', flex:1, minHeight:0, display:'grid', gap:'14px', gridTemplateColumns:'repeat(4,1fr)', gridTemplateRows:'auto auto 1fr', gridTemplateAreas:'"hero hero hero hero" "s1 s2 s3 s4" "obj obj obj trk"' }}>
      <section style={{ gridArea:'hero', background:'var(--blue)', color:'var(--cream)', borderRadius:'var(--r-4xl)', padding:'20px 22px', display:'flex', alignItems:'center', gap:'20px' }}>
        <div style={{ width:84, height:84, borderRadius:'50%', background:'rgba(255,255,255,.16)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flex:'none' }}>
          <small style={{ fontSize:'.6rem', opacity:.8, fontWeight:600, letterSpacing:'.1em' }}>LIVELLO</small>
          <b style={{ fontSize:'1.6rem' }}>3</b>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontWeight:800, fontSize:'1.15rem', marginBottom:'10px' }}>Continua così! 🎯<span className="mono" style={{ display:'inline-flex', alignItems:'center', marginLeft:'10px', padding:'3px 10px', borderRadius:'99px', background:'rgba(255,255,255,.18)', fontSize:'.7rem', fontWeight:700 }}>🔥 4 giorni di fila</span></div>
          <div className="mono" style={{ fontSize:'.8rem', opacity:.9, marginBottom:'6px' }}>340 XP totali</div>
          <ProgressBar value={40} onBlue />
          <div className="mono" style={{ fontSize:'.75rem', opacity:.85, marginTop:'7px' }}>60 XP al livello 4</div>
        </div>
      </section>
      <GameStat style={{ gridArea:'s1' }} num="12" label="Task fatti" />
      <GameStat style={{ gridArea:'s2' }} num="32" label="Story points" />
      <GameStat style={{ gridArea:'s3' }} num="4" label="Progetti" />
      <GameStat style={{ gridArea:'s4' }} num="02" label="Sprint" />
      <section style={{ gridArea:'obj', background:'var(--panel)', border:'1px solid var(--border)', borderRadius:'var(--r-3xl)', padding:'16px 18px' }}>
        <div className="mono" style={{ fontSize:'.78rem', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'14px', display:'flex', justifyContent:'space-between' }}><span>Obiettivi</span><span>{earned}/{badges.length}</span></div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'12px' }}>
          {badges.map(b => <Badge key={b.name} icon={b.ico} name={b.name} desc={b.desc} locked={!b.on} />)}
        </div>
      </section>
      <section style={{ gridArea:'trk', background:'var(--panel)', border:'1px solid var(--border)', borderRadius:'var(--r-3xl)', padding:'16px 18px', display:'flex', flexDirection:'column' }}>
        <div className="mono" style={{ fontSize:'.78rem', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--muted)', marginBottom:'14px' }}>Tracking progetti</div>
        <div className="mono" style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'12px', flex:1 }}>
          <span style={{ color:'var(--muted)', fontSize:'.85rem' }}>12/18 task completati · 32 SP su 4 progetti</span>
          <Button onClick={()=>setView('track')} style={{ alignSelf:'flex-start' }}>Apri tracking completo</Button>
        </div>
      </section>
    </div>
  );
}

/* ============================ TRACKING ============================ */
function SprintSummary() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'minmax(280px,340px) 1fr', gap:'14px', alignContent:'start' }}>
      <Hero name="Sprint Luglio" range="02 lug – 27 lug 2025" done={32} total={46} capLabel="Story points" style={{ gridColumn:'1', gridRow:'1 / span 2' }} />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
        <StatTile tone="sand" num="4" label="Progetti" />
        <StatTile tone="dark" num="12" label="Task fatti" />
        <StatTile tone="yellow" num="70%" label="Completato" />
        <StatTile tone="sand" num="46" label="SP assegnati" />
      </div>
      <Card style={{ gridColumn:'2' }}>
        <div className="mono" style={{ fontSize:'10.5px', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--cream-mut)', marginBottom:'18px' }}>Story Points per progetto</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'14px' }}>
          {PROJECTS.map(p => <SprintProjectRow key={p.code} {...p} />)}
        </div>
      </Card>
    </div>
  );
}

function CalendarPane() {
  const [week, setWeek] = React.useState(0);
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', flexWrap:'wrap', gap:'12px' }}>
        <div style={{ fontSize:'1.25rem', fontWeight:800, letterSpacing:'-.01em', color:'var(--black)' }}>Timesheet · Settimana {week+1}</div>
        <div style={{ display:'flex', gap:'7px' }}>
          {[0,1,2,3].map(i => <WeekButton key={i} active={i===week} onClick={()=>setWeek(i)}>Sett {i+1}</WeekButton>)}
        </div>
      </div>
      <div className="mono" style={{ fontSize:'10px', letterSpacing:'.06em', textTransform:'uppercase', color:'var(--cream-dim)', marginBottom:'12px' }}>Clicca o trascina sulle celle per assegnare un progetto →</div>
      <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'60px repeat(5,1fr)', gap:'6px' }}>
          <div></div>
          {DAYS.map(([n,d]) => (
            <div key={n} style={{ textAlign:'center', padding:'6px 0' }}>
              <div style={{ fontWeight:700, fontSize:'.82rem', color:'var(--black)' }}>{n}</div>
              <div className="mono" style={{ fontSize:'9.5px', color:'var(--cream-dim)', marginTop:'2px' }}>{d} LUG</div>
              <div className="mono" style={{ fontSize:'9.5px', color:'var(--cream-dim)', marginTop:'3px' }}>8h</div>
            </div>
          ))}
        </div>
        {HOURS.map((label, hi) => (
          <div key={hi} style={{ display:'grid', gridTemplateColumns:'60px repeat(5,1fr)', gap:'6px' }}>
            <div className="mono" style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight:'8px', fontSize:'9.5px', color:'var(--cream-mut)' }}>{label}</div>
            {DAYS.map((_, di) => {
              const pi = GRID[`${di},${hi}`];
              const p = pi != null ? PROJECTS[pi] : null;
              return p
                ? <div key={di} style={{ minHeight:34, borderRadius:'var(--r-md)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'10px', fontWeight:700, letterSpacing:'.08em', background:p.color, color:inkFor(p.color) }}>{p.code}</div>
                : <div key={di} style={{ minHeight:34, borderRadius:'var(--r-md)', background:'var(--cream-cell)' }} />;
            })}
          </div>
        ))}
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap', marginTop:'22px', paddingTop:'20px', borderTop:'1px solid var(--cream-line)' }}>
        <div className="mono" style={{ fontSize:'10.5px', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--cream-mut)' }}>Progetti assegnati:</div>
        {PROJECTS.map(p => <Chip key={p.code} color={p.color}>{p.name}</Chip>)}
      </div>
    </div>
  );
}

function WorkspacePane() {
  const [project, setProject] = React.useState('RCA');
  const p = PROJECTS.find(x => x.code === project);
  const [checks, setChecks] = React.useState([
    { label:'Kickoff e brief con il cliente', done:true },
    { label:'Wireframe delle schermate chiave', done:true },
    { label:'Design system e componenti', done:false },
    { label:'Review interna e handoff', done:false },
  ]);
  const toggle = (i) => setChecks(cs => cs.map((c,j)=> j===i ? {...c, done:!c.done} : c));
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', fontSize:'1.25rem', fontWeight:800, letterSpacing:'-.01em', color:'var(--black)' }}>
          <span style={{ width:18, height:18, color:'var(--blue)' }}><IcFolder/></span>Workspace progetti
        </div>
        <Select light value={project} onChange={(e)=>setProject(e.target.value)} options={PROJECTS.map(x=>x.code)} />
      </div>
      <div style={{ background:'var(--cream)', borderRadius:'var(--r-4xl)', borderTop:`5px solid ${p.color}`, padding:'18px 20px', boxShadow:'0 1px 0 var(--cream-line)' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom:'16px', marginBottom:'18px', borderBottom:'1px solid var(--cream-line)', flexWrap:'wrap', gap:'12px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', fontSize:'1.05rem', fontWeight:800, color:'var(--black)' }}>
            <span style={{ width:17, height:17, color:p.color }}><IcFolder/></span>{p.code} — {p.name} · {p.assigned} SP
          </div>
          <div style={{ display:'flex', gap:'4px', alignItems:'center', color:'var(--cream-mut)' }}>
            {[IcBold, IcItalic, IcList].map((Ico,i) => <span key={i} style={{ width:30, height:30, borderRadius:'var(--r-sm)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}><span style={{ width:15, height:15 }}><Ico/></span></span>)}
            <span style={{ width:1, height:18, background:'var(--cream-line)', margin:'0 5px' }} />
            {['H1','H2','H3','P'].map(t => <span key={t} className="mono" style={{ minWidth:30, padding:'0 7px', height:30, borderRadius:'var(--r-sm)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:700, cursor:'pointer' }}>{t}</span>)}
          </div>
        </div>
        <div style={{ color:'#2a2a26', fontSize:'.95rem' }}>
          <h1 style={{ fontSize:'1.3rem', fontWeight:800, letterSpacing:'-.01em', margin:'.4em 0 .35em' }}>Obiettivo dello sprint</h1>
          <p style={{ margin:'0 0 .55em', lineHeight:1.6 }}>Consegnare il restyle completo dell'area cliente, con la nuova palette e i componenti condivisi. Priorità alla coerenza visiva tra le schermate.</p>
          <h2 style={{ fontSize:'1.05rem', fontWeight:700, margin:'.8em 0 .3em' }}>Da fare questa settimana</h2>
          <div>{checks.map((c,i) => <Checkbox key={i} label={c.label} checked={c.done} onChange={()=>toggle(i)} />)}</div>
        </div>
      </div>
    </div>
  );
}

function Tracking() {
  const [tab, setTab] = React.useState('summary');
  return (
    <div style={{ padding:'14px', flex:1, minHeight:0 }}>
      <div style={{ background:'var(--cream)', borderRadius:'var(--r-6xl)', padding:'20px 22px 22px', minHeight:'100%', display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'24px' }}>
          <Tabs tabs={[{value:'summary',label:'Sprint'},{value:'calendar',label:'Calendario Ore'},{value:'workspace',label:'Workspace Progetti'}]} value={tab} onChange={setTab} />
          <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:'8px' }}>
            <Select options={['Sprint Luglio','Sprint Agosto']} />
            <IconButton title="Nuovo Sprint" style={{ borderColor:'var(--blue)', background:'var(--blue)', color:'#fff' }}><IcPlus/></IconButton>
          </div>
        </div>
        {tab==='summary' && <SprintSummary/>}
        {tab==='calendar' && <CalendarPane/>}
        {tab==='workspace' && <WorkspacePane/>}
      </div>
    </div>
  );
}

/* ============================ APP SHELL ============================ */
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('game');
  return (
    <div style={{ height:'100vh', overflow:'hidden', background:'var(--panel)', display:'flex' }}>
      <Sidebar view={view} setView={setView} />
      <div style={{ position:'relative', flex:1, minWidth:0, minHeight:0, display:'flex', flexDirection:'column', overflow:'auto' }}>
        {view==='game' ? <Dashboard setView={setView} /> : <Tracking/>}
      </div>
      {!authed && <AuthScreen onLogin={()=>setAuthed(true)} />}
    </div>
  );
}

Object.assign(window, { TWApp: App, TWAuth: AuthScreen, TWDashboard: Dashboard, TWTracking: Tracking, TWSidebar: Sidebar });
