import { Activity, Brain, Shield, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import icon from "@/assets/secondshift-icon.png";
import ActivityRing from "@/components/ActivityRing";
import StatsCard from "@/components/StatsCard";
import MetricCard from "@/components/MetricCard";
import MusicReference from "@/components/MusicReference";

const hrData = Array.from({ length: 24 }, (_, i) => ({ value: 65 + Math.sin(i * 0.5) * 15 + Math.random() * 8 }));
const hrvData = Array.from({ length: 24 }, (_, i) => ({ value: 42 + Math.cos(i * 0.3) * 12 + Math.random() * 5 }));
const edaData = Array.from({ length: 24 }, (_, i) => ({ value: 2 + Math.sin(i * 0.7) * 1.5 + Math.random() * 0.5 }));
const sleepData = Array.from({ length: 7 }, (_, i) => ({ value: 5.5 + Math.random() * 2.5 }));

const rings = [
  { progress: 87, color: "hsl(270 60% 58%)", label: "HRV", value: "42ms" },
  { progress: 65, color: "hsl(340 82% 55%)", label: "Stress", value: "Low" },
  { progress: 78, color: "hsl(174 72% 50%)", label: "Recovery", value: "Good" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SecondShift" className="h-10" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity glow-primary">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6 animate-float-up">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground">AI-Powered Caregiver Health Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 animate-float-up" style={{ animationDelay: "0.1s" }}>
                <span className="text-foreground">The Invisible</span>
                <br />
                <span className="text-gradient-primary">Burden</span>
                <br />
                <span className="text-foreground opacity-60 text-4xl md:text-5xl">Made Visible.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 animate-float-up" style={{ animationDelay: "0.2s" }}>
                Quantifying the hidden cost of unpaid caregiving through AI-powered wearable analytics. 
                Real-time stress detection. Personalized interventions. Before burnout becomes irreversible.
              </p>
              <div className="flex items-center gap-4 animate-float-up" style={{ animationDelay: "0.3s" }}>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-display font-semibold hover:opacity-90 transition-opacity glow-primary flex items-center gap-2">
                  Start Monitoring <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-xl border border-border text-foreground font-display font-medium hover:bg-secondary transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="flex justify-center animate-float-up" style={{ animationDelay: "0.4s" }}>
              <ActivityRing size={280} strokeWidth={16} rings={rings} />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Stats */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-10">The Caregiver Crisis in Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard value="53M+" label="Unpaid Caregivers" sublabel="in the United States" delay={0} />
            <StatsCard value="40%" label="Experience Burnout" sublabel="clinical-level stress" colorClass="text-accent" delay={0.1} />
            <StatsCard value="$600B" label="Economic Value" sublabel="of unpaid care annually" colorClass="text-glow-warning" delay={0.2} />
            <StatsCard value="90%+" label="Detection Accuracy" sublabel="ML stress classification" colorClass="text-glow-success" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Your Health, <span className="text-gradient-primary">Quantified</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Continuous wearable monitoring meets generative AI for actionable health intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "Real-Time Biometrics", desc: "HRV, EDA, skin temperature, and motion tracked continuously from your wearable.", color: "text-primary" },
              { icon: Brain, title: "AI Stress Detection", desc: "ML models with 90%+ accuracy detect physiological stress before you feel it.", color: "text-accent" },
              { icon: Shield, title: "Weekly AI Briefings", desc: "Personalized health narratives with micro-interventions powered by GPT-4.", color: "text-glow-warning" },
            ].map((f, i) => (
              <div key={i} className="bg-gradient-card rounded-xl border border-border p-8 hover:border-primary/30 transition-colors animate-float-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <f.icon className={`w-8 h-8 ${f.color} mb-4`} />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Dashboard <span className="text-gradient-accent">Preview</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Track your biometric trends over time with Strava-like precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard title="Heart Rate" value="72" unit="bpm" trend="+3%" trendUp color="hsl(340, 82%, 55%)" data={hrData} delay={0} />
            <MetricCard title="HRV (RMSSD)" value="42" unit="ms" trend="-8%" color="hsl(270, 60%, 58%)" data={hrvData} delay={0.1} />
            <MetricCard title="EDA Level" value="2.4" unit="μS" trend="+12%" color="hsl(32, 95%, 55%)" data={edaData} delay={0.2} />
            <MetricCard title="Sleep" value="6.8" unit="hrs" trend="+0.5" trendUp color="hsl(174, 72%, 50%)" data={sleepData} delay={0.3} />
          </div>

          {/* Music Reference */}
          <MusicReference />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">About SecondShift</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Named after the "second shift" that millions of unpaid caregivers work every day — and inspired by the 
            Commodores' <em>Nightshift</em> — SecondShift uses clinically validated biomarkers and AI to make 
            the invisible burden of caregiving visible, measurable, and actionable.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Built on the WESAD dataset with Random Forest, XGBoost, and Logistic Regression models. 
            Features 6 diverse caregiver personas with 12-week simulated health trajectories.
          </p>
          <p className="text-xs text-muted-foreground mt-8">
            MSIS 522 · Advanced Machine Learning · Team 5
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SecondShift" className="h-6" />
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Team 5. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
