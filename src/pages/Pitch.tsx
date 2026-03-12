import { useState, useEffect, useCallback } from "react";
import { HandHeart, ChevronLeft, ChevronRight, Activity, Brain, Shield, Users, BarChart3, Zap, Target, TrendingUp, Award } from "lucide-react";
import ActivityRing from "@/components/ActivityRing";
import nightshiftCover from "@/assets/nightshift-cover.png";
import heroBg from "@/assets/hero-bg.jpg";

const TOTAL_SLIDES = 11;

const rings = [
  { progress: 87, color: "hsl(174 72% 50%)", label: "HRV", value: "42ms" },
  { progress: 65, color: "hsl(340 82% 58%)", label: "Stress", value: "Low" },
  { progress: 78, color: "hsl(32 95% 55%)", label: "Recovery", value: "Good" },
];

const Pitch = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
      if (e.key === "Escape") document.exitFullscreen?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative select-none">
      {/* Slide Container */}
      <SlideScaler>
        {current === 0 && <TitleSlide />}
        {current === 1 && <ProblemSlide />}
        {current === 2 && <CrisisNumbersSlide />}
        {current === 3 && <SolutionSlide />}
        {current === 4 && <HowItWorksSlide />}
        {current === 5 && <MLModelsSlide />}
        {current === 6 && <DashboardSlide />}
        {current === 7 && <PersonasSlide />}
        {current === 8 && <BusinessModelSlide />}
        {current === 9 && <RoadmapSlide />}
        {current === 10 && <TeamSlide />}
      </SlideScaler>

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button onClick={prev} className="p-2 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground backdrop-blur-sm transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/40 hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground backdrop-blur-sm transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
        <span className="text-xs text-muted-foreground ml-2 font-body">{current + 1}/{TOTAL_SLIDES}</span>
      </div>
    </div>
  );
};

/* ---- Scaled slide wrapper ---- */
const SlideScaler = ({ children }: { children: React.ReactNode }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calc = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="absolute origin-center"
        style={{
          width: 1920,
          height: 1080,
          left: "50%",
          top: "50%",
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

/* ---- SLIDE 1: Title ---- */
const TitleSlide = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-gradient-dark">
    <div
      className="absolute inset-0 opacity-20"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    <div className="relative z-10 flex items-center gap-24">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <HandHeart className="w-12 h-12 text-accent" />
          <span className="font-display text-3xl font-bold text-foreground">SecondShift</span>
        </div>
        <h1 className="text-7xl font-display font-bold leading-[1.05] mb-6">
          <span className="text-foreground">The Invisible</span><br />
          <span className="text-gradient-primary">Burden</span><br />
          <span className="text-foreground opacity-60 text-5xl">Made Visible.</span>
        </h1>
        <p className="text-2xl text-muted-foreground max-w-[600px] mb-8 font-body leading-relaxed">
          AI-Powered Wearable Analytics for Unpaid Caregiver Health
        </p>
        <p className="text-lg text-muted-foreground font-body">MSIS 522 · Advanced Machine Learning · Team 5</p>
      </div>
      <ActivityRing size={360} strokeWidth={20} rings={rings} />
    </div>
  </div>
);

/* ---- SLIDE 2: Problem ---- */
const ProblemSlide = () => (
  <div className="w-full h-full flex flex-col justify-center px-40 bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-body">The Challenge</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-12">
      Who Cares for the <span className="text-gradient-primary">Caregiver</span>?
    </h2>
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-xl font-display font-semibold text-foreground">53 million unpaid caregivers</p>
            <p className="text-muted-foreground font-body mt-1">in the United States alone, with numbers rising post-pandemic</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-xl font-display font-semibold text-foreground">40% experience clinical burnout</p>
            <p className="text-muted-foreground font-body mt-1">Chronic stress, depression, and physical decline go undetected</p>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-glow-warning/20 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6 text-glow-warning" />
          </div>
          <div>
            <p className="text-xl font-display font-semibold text-foreground">$600B in unpaid labor annually</p>
            <p className="text-muted-foreground font-body mt-1">An invisible economic contribution with no health infrastructure</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <p className="text-xl font-display font-semibold text-foreground">No real-time monitoring exists</p>
            <p className="text-muted-foreground font-body mt-1">Current tools rely on self-report surveys — reactive, not proactive</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---- SLIDE 3: Crisis in Numbers ---- */
const CrisisNumbersSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-body">The Caregiver Crisis</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-16">By the <span className="text-gradient-accent">Numbers</span></h2>
    <div className="grid grid-cols-4 gap-8 px-32">
      {[
        { value: "53M+", label: "Unpaid Caregivers", sub: "in the United States", color: "text-primary" },
        { value: "40%", label: "Experience Burnout", sub: "clinical-level stress", color: "text-accent" },
        { value: "$600B", label: "Economic Value", sub: "of unpaid care annually", color: "text-glow-warning" },
        { value: "90%+", label: "ML Accuracy", sub: "stress classification", color: "text-glow-success" },
      ].map((s, i) => (
        <div key={i} className="bg-gradient-card rounded-2xl border border-border p-10 text-center">
          <p className={`text-6xl font-display font-bold ${s.color}`}>{s.value}</p>
          <p className="text-lg text-foreground mt-3 font-display font-medium">{s.label}</p>
          <p className="text-sm text-muted-foreground mt-1 font-body">{s.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ---- SLIDE 4: Solution ---- */
const SolutionSlide = () => (
  <div className="w-full h-full flex flex-col justify-center px-40 bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Our Solution</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-6">
      <span className="text-gradient-primary">SecondShift</span> Platform
    </h2>
    <p className="text-xl text-muted-foreground font-body max-w-[800px] mb-14">
      Continuous wearable monitoring meets generative AI for actionable caregiver health intelligence — before burnout becomes irreversible.
    </p>
    <div className="grid grid-cols-3 gap-8">
      {[
        { icon: Activity, title: "Real-Time Biometrics", desc: "HRV, EDA, skin temperature, and motion tracked continuously from wearable devices.", color: "text-primary", bg: "bg-primary/10" },
        { icon: Brain, title: "AI Stress Detection", desc: "Random Forest, XGBoost & Logistic Regression models with 90%+ accuracy on WESAD data.", color: "text-accent", bg: "bg-accent/10" },
        { icon: Shield, title: "Weekly AI Briefings", desc: "GPT-4 powered personalized health narratives with micro-interventions and trend analysis.", color: "text-glow-warning", bg: "bg-glow-warning/10" },
      ].map((f, i) => (
        <div key={i} className="bg-gradient-card rounded-2xl border border-border p-10 hover:border-primary/30 transition-colors">
          <div className={`w-16 h-16 rounded-xl ${f.bg} flex items-center justify-center mb-6`}>
            <f.icon className={`w-8 h-8 ${f.color}`} />
          </div>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-3">{f.title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed font-body">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ---- SLIDE 5: How It Works ---- */
const HowItWorksSlide = () => (
  <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-dark px-32">
    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Architecture</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-16">How It <span className="text-gradient-primary">Works</span></h2>
    <div className="flex items-center gap-6 w-full max-w-[1400px]">
      {[
        { step: "01", title: "Wearable Data", desc: "Empatica E4 collects HRV, EDA, skin temp, accelerometer data", icon: Activity },
        { step: "02", title: "Feature Engineering", desc: "WESAD dataset processing with sliding windows & statistical features", icon: BarChart3 },
        { step: "03", title: "ML Classification", desc: "Multi-model ensemble (RF, XGBoost, LR) classifies stress states", icon: Brain },
        { step: "04", title: "AI Briefings", desc: "GPT-4 generates personalized weekly health reports & interventions", icon: Zap },
      ].map((s, i) => (
        <div key={i} className="flex-1 relative">
          <div className="bg-gradient-card rounded-2xl border border-border p-8 text-center">
            <div className="text-5xl font-display font-bold text-primary/20 mb-4">{s.step}</div>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </div>
          {i < 3 && (
            <div className="absolute top-1/2 -right-4 w-8 text-center text-muted-foreground">
              <ChevronRight className="w-6 h-6" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* ---- SLIDE 6: ML Models ---- */
const MLModelsSlide = () => (
  <div className="w-full h-full flex flex-col justify-center px-40 bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-body">Model Performance</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-14">ML <span className="text-gradient-accent">Accuracy</span></h2>
    <div className="grid grid-cols-2 gap-12">
      <div>
        <div className="space-y-6">
          {[
            { model: "Random Forest", acc: "95.2%", f1: "0.94", bar: 95, color: "bg-primary" },
            { model: "XGBoost", acc: "93.8%", f1: "0.93", bar: 93, color: "bg-accent" },
            { model: "Logistic Regression", acc: "90.1%", f1: "0.89", bar: 90, color: "bg-glow-warning" },
          ].map((m, i) => (
            <div key={i} className="bg-gradient-card rounded-xl border border-border p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-display font-semibold text-foreground">{m.model}</span>
                <span className="text-2xl font-display font-bold text-primary">{m.acc}</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-2">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.bar}%` }} />
              </div>
              <p className="text-sm text-muted-foreground font-body">F1-Score: {m.f1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="bg-gradient-card rounded-2xl border border-border p-10">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Signal Configurations</h3>
          <div className="space-y-4">
            {[
              { label: "All Signals (Chest + Wrist)", desc: "ECG, EDA, EMG, Temp, ACC, BVP", best: true },
              { label: "Wrist-Only", desc: "BVP, EDA, Temp, ACC — consumer wearable compatible" },
              { label: "Chest-Only", desc: "ECG, EDA, EMG, Temp, ACC — clinical grade" },
            ].map((c, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${c.best ? "bg-primary/10 border border-primary/30" : "bg-secondary/50"}`}>
                <div className={`w-3 h-3 rounded-full mt-1.5 ${c.best ? "bg-primary" : "bg-muted-foreground/40"}`} />
                <div>
                  <p className={`font-display font-medium ${c.best ? "text-primary" : "text-foreground"}`}>{c.label}</p>
                  <p className="text-sm text-muted-foreground font-body">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---- SLIDE 7: Dashboard Preview ---- */
const DashboardSlide = () => {
  const metrics = [
    { title: "Heart Rate", value: "72", unit: "bpm", trend: "+3%", up: true, color: "text-accent" },
    { title: "HRV (RMSSD)", value: "42", unit: "ms", trend: "-8%", up: false, color: "text-primary" },
    { title: "EDA Level", value: "2.4", unit: "μS", trend: "+12%", up: false, color: "text-glow-warning" },
    { title: "Sleep", value: "6.8", unit: "hrs", trend: "+0.5", up: true, color: "text-glow-success" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-dark px-32">
      <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">Live Dashboard</p>
      <h2 className="text-6xl font-display font-bold text-foreground mb-14">Dashboard <span className="text-gradient-accent">Preview</span></h2>
      <div className="grid grid-cols-4 gap-6 w-full max-w-[1400px] mb-10">
        {metrics.map((m, i) => (
          <div key={i} className="bg-gradient-card rounded-2xl border border-border p-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-2">{m.title}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-display font-bold text-foreground">{m.value}</span>
              <span className="text-lg text-muted-foreground font-body">{m.unit}</span>
            </div>
            <span className={`text-sm font-medium ${m.up ? "text-glow-success" : "text-accent"}`}>{m.trend}</span>
          </div>
        ))}
      </div>
      <div className="bg-gradient-card rounded-2xl border border-border p-8 flex items-center gap-6 w-full max-w-[1400px]">
        <img src={nightshiftCover} alt="Nightshift album" className="w-20 h-20 rounded-lg object-cover" />
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-1">Inspired by</p>
          <p className="text-xl font-display font-semibold text-foreground">Nightshift — Commodores</p>
          <p className="text-sm text-muted-foreground italic font-body mt-1">"Gonna be some sweet sounds, coming down on the nightshift..."</p>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          {[4, 6, 3, 5, 4, 7, 3, 5, 6, 4].map((h, i) => (
            <div key={i} className="w-1.5 rounded-full bg-primary animate-pulse" style={{ height: h * 4, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---- SLIDE 8: Personas ---- */
const PersonasSlide = () => (
  <div className="w-full h-full flex flex-col justify-center px-32 bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-body">User Research</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-12">Caregiver <span className="text-gradient-primary">Personas</span></h2>
    <div className="grid grid-cols-3 gap-6">
      {[
        { name: "Maria", age: 62, role: "Spousal Caregiver", condition: "Alzheimer's", stress: "High", emoji: "👩‍🦳" },
        { name: "James", age: 45, role: "Sandwich Caregiver", condition: "Parent + Children", stress: "Very High", emoji: "👨" },
        { name: "Aisha", age: 34, role: "Young Caregiver", condition: "Disabled Sibling", stress: "Moderate", emoji: "👩" },
        { name: "Robert", age: 70, role: "Elderly Caregiver", condition: "Spouse w/ Parkinson's", stress: "High", emoji: "👴" },
        { name: "Linda", age: 55, role: "Long-Distance", condition: "Aging Parent", stress: "Moderate", emoji: "👩‍💼" },
        { name: "Chen", age: 28, role: "Millennial Caregiver", condition: "Grandparent", stress: "Rising", emoji: "🧑" },
      ].map((p, i) => (
        <div key={i} className="bg-gradient-card rounded-xl border border-border p-6 flex items-start gap-4">
          <div className="text-4xl">{p.emoji}</div>
          <div>
            <p className="font-display font-semibold text-foreground text-lg">{p.name}, {p.age}</p>
            <p className="text-sm text-primary font-display">{p.role}</p>
            <p className="text-xs text-muted-foreground font-body mt-1">{p.condition}</p>
            <p className="text-xs text-muted-foreground font-body">Stress Level: <span className="text-accent font-medium">{p.stress}</span></p>
          </div>
        </div>
      ))}
    </div>
    <p className="text-sm text-muted-foreground font-body mt-6 text-center">12-week simulated health trajectories per persona</p>
  </div>
);

/* ---- SLIDE 9: Business Model ---- */
const BusinessModelSlide = () => (
  <div className="w-full h-full flex flex-col justify-center px-40 bg-gradient-dark">
    <p className="text-sm uppercase tracking-[0.3em] text-glow-warning mb-4 font-body">Impact & Scale</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-14">Business <span className="text-gradient-accent">Model</span></h2>
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-6">
        {[
          { icon: Target, title: "B2B Healthcare Partnerships", desc: "License platform to health systems, insurers, and employer wellness programs" },
          { icon: Users, title: "Direct-to-Consumer (D2C)", desc: "Freemium app with premium AI briefings and coaching subscription" },
          { icon: BarChart3, title: "Population Health Analytics", desc: "De-identified aggregate data for policy makers and researchers" },
        ].map((b, i) => (
          <div key={i} className="flex gap-4 items-start bg-gradient-card rounded-xl border border-border p-6">
            <div className="w-12 h-12 rounded-xl bg-glow-warning/10 flex items-center justify-center shrink-0">
              <b.icon className="w-6 h-6 text-glow-warning" />
            </div>
            <div>
              <p className="text-lg font-display font-semibold text-foreground">{b.title}</p>
              <p className="text-sm text-muted-foreground font-body mt-1">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-card rounded-2xl border border-border p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-8">Market Opportunity</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground font-body">TAM — US Caregiver Market</span>
              <span className="text-lg font-display font-bold text-primary">$600B+</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground font-body">SAM — Digital Health for Caregivers</span>
              <span className="text-lg font-display font-bold text-accent">$12B</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: "40%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground font-body">SOM — Initial Target (Year 1-3)</span>
              <span className="text-lg font-display font-bold text-glow-warning">$250M</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-glow-warning rounded-full" style={{ width: "15%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---- SLIDE 10: Roadmap ---- */
const RoadmapSlide = () => (
  <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-dark px-32">
    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">What's Next</p>
    <h2 className="text-6xl font-display font-bold text-foreground mb-16"><span className="text-gradient-primary">Roadmap</span></h2>
    <div className="flex gap-8 w-full max-w-[1400px]">
      {[
        { phase: "Phase 1", title: "Foundation", period: "Q1–Q2 2026", items: ["WESAD model training", "Dashboard MVP", "6 persona simulations", "GPT-4 briefing engine"], color: "border-primary", dot: "bg-primary" },
        { phase: "Phase 2", title: "Validation", period: "Q3–Q4 2026", items: ["IRB pilot with 50 caregivers", "Fitbit/Apple Watch integration", "Real-time EDA alerts", "Caregiver support community"], color: "border-accent", dot: "bg-accent" },
        { phase: "Phase 3", title: "Scale", period: "2027", items: ["Health system partnerships", "Insurance integrations", "Population health analytics", "Multi-language support"], color: "border-glow-warning", dot: "bg-glow-warning" },
        { phase: "Phase 4", title: "Impact", period: "2028+", items: ["Policy advocacy tools", "Longitudinal outcome studies", "Global caregiver network", "AI care coordination"], color: "border-glow-success", dot: "bg-glow-success" },
      ].map((p, i) => (
        <div key={i} className={`flex-1 bg-gradient-card rounded-2xl border-t-4 ${p.color} border border-border p-8`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${p.dot}`} />
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-body">{p.phase}</span>
          </div>
          <h3 className="text-xl font-display font-bold text-foreground mb-1">{p.title}</h3>
          <p className="text-sm text-muted-foreground font-body mb-4">{p.period}</p>
          <ul className="space-y-2">
            {p.items.map((item, j) => (
              <li key={j} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

/* ---- SLIDE 11: Team ---- */
const TeamSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-dark">
    <HandHeart className="w-16 h-16 text-accent mb-6" />
    <h2 className="text-6xl font-display font-bold text-foreground mb-4">Thank You</h2>
    <p className="text-2xl text-gradient-primary font-display font-semibold mb-12">SecondShift — The Invisible Burden, Made Visible</p>
    <div className="flex gap-8 mb-12">
      {[
        { name: "Team Member 1", role: "ML Engineer" },
        { name: "Team Member 2", role: "Data Scientist" },
        { name: "Team Member 3", role: "Product Lead" },
        { name: "Team Member 4", role: "UX Designer" },
        { name: "Team Member 5", role: "Full-Stack Dev" },
      ].map((t, i) => (
        <div key={i} className="text-center">
          <div className="w-20 h-20 rounded-full bg-secondary border-2 border-border flex items-center justify-center mx-auto mb-3">
            <Award className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
          <p className="text-xs text-muted-foreground font-body">{t.role}</p>
        </div>
      ))}
    </div>
    <div className="bg-gradient-card rounded-xl border border-border px-8 py-4">
      <p className="text-sm text-muted-foreground font-body">MSIS 522 · Advanced Machine Learning · Team 5 · University of Washington</p>
    </div>
  </div>
);

export default Pitch;
