import nightshiftCover from "@/assets/nightshift-cover.png";

const MusicReference = () => (
  <div className="bg-gradient-card rounded-xl border border-border p-6 animate-float-up" style={{ animationDelay: "0.6s" }}>
    <div className="flex items-center gap-4">
      <img
        src={nightshiftCover}
        alt="Commodores Nightshift Album Cover"
        className="w-20 h-20 rounded-lg object-cover shadow-lg"
      />
      <div className="flex-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Inspired by</p>
        <p className="text-foreground font-display font-semibold">Nightshift</p>
        <p className="text-sm text-muted-foreground">Commodores</p>
        <p className="text-xs text-muted-foreground mt-1 italic">
          "Gonna be some sweet sounds, coming down on the nightshift..."
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 bg-primary rounded-full animate-pulse" />
        <div className="w-1 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
        <div className="w-1 h-3 bg-glow-warning rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        <div className="w-1 h-5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
        <div className="w-1 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
      </div>
    </div>
  </div>
);

export default MusicReference;
