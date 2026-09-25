import ActionButton from "./components/ActionButton";
import DualTaskChart from "./components/DualTaskChart";
import MergeDiagram from "./components/MergeDiagram";
import Reveal from "./components/Reveal";
import VoiceCoachCard from "./components/VoiceCoachCard";
import { siteConfig } from "./config";

const { theme, motion, contactEmail } = siteConfig;

/** The body/mind task pairings shown in the middle how-it-works card. */
const pairs: Array<{ body: string; mind: string }> = [
  { body: "Walk", mind: "Name fruits" },
  { body: "Balance", mind: "Count back" },
  { body: "Reach", mind: "Remember a list" },
];

const audiences: Array<{ icon: string; title: string; text: string }> = [
  {
    icon: "ti ti-building-hospital",
    title: "Clinics & care facilities",
    text: "A low-cost prevention activity for residents and patients.",
  },
  {
    icon: "ti ti-users",
    title: "Families",
    text: "Home training, with a view of how it’s going.",
  },
];

const pillars: Array<{ icon: string; label: string }> = [
  { icon: "ti ti-brain", label: "Memory & attention" },
  { icon: "ti ti-home", label: "Daily-living skills" },
  { icon: "ti ti-arrows-join", label: "Dual-task" },
  { icon: "ti ti-walk", label: "Balance & gait" },
];

const team: Array<{ initials: string; name: string; role: string }> = [
  { initials: "AU", name: "Ashutosh Upadhyay", role: "Business" },
  { initials: "T", name: "Tushar", role: "Developer" },
  { initials: "J", name: "Johannes", role: "UI/UX · Germany" },
];

/** Every section clears the sticky nav when jumped to from the nav links. */
const SECTION = { scrollMarginTop: 90 } as const;

const SHELL = {
  position: "relative",
  maxWidth: 1160,
  margin: "0 auto",
} as const;

export default function Home() {
  return (
    <div
      className={theme === "light" ? "theme-light" : undefined}
      style={{
        background: "var(--bg)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* The single brand glow every glass layer sits over. */}
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -180,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: "var(--glow-1)",
          opacity: "var(--glow-opacity-1)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <nav
        style={{
          position: "sticky",
          top: 16,
          zIndex: 20,
          margin: "16px auto 0",
          maxWidth: 1160,
          padding: "0 20px",
        }}
      >
        <div
          className="jx-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "10px 10px 10px 20px",
            borderRadius: 26,
            background: "var(--glass-surface)",
            border: "1px solid var(--glass-edge)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "var(--shadow-float)",
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 10,
                background: "var(--brand)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <i
                className="ti ti-heart-handshake"
                style={{ fontSize: 18, color: "#fff" }}
                aria-hidden="true"
              />
            </span>
            JOYchum
          </a>

          <div
            className="jx-nav-links"
            style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14 }}
          >
            <a href="#how" style={{ color: "var(--text-secondary)" }}>
              How it works
            </a>
            <a href="#care" style={{ color: "var(--text-secondary)" }}>
              For clinics
            </a>
            <a href="#team" style={{ color: "var(--text-secondary)" }}>
              Team
            </a>
            <ActionButton
              variant="secondary"
              size="sm"
              scrollTo="pilot"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              Join the pilot
            </ActionButton>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        style={{
          ...SHELL,
          ...SECTION,
          padding: "80px 20px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 14px",
                borderRadius: 999,
                background: "var(--glass-surface)",
                border: "1px solid var(--glass-edge)",
                fontSize: 13,
                color: "var(--text-secondary)",
              }}
            >
              <i
                className="ti ti-map-pin"
                style={{ fontSize: 15, color: "var(--brand-highlight)" }}
                aria-hidden="true"
              />
              Cognitive-motor training for 65+
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(44px, 6.4vw, 80px)",
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              textWrap: "balance",
            }}
          >
            Stay steady. Stay sharp.{" "}
            <span style={{ color: "var(--brand-highlight)" }}>Stay home.</span>
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              maxWidth: 440,
              textWrap: "pretty",
            }}
          >
            A voice coach that trains balance and memory together — in one short daily session,
            hands-free.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <ActionButton
              variant="primary"
              size="lg"
              iconRight="arrow-right"
              scrollTo="pilot"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              Join the pilot
            </ActionButton>
            <ActionButton
              variant="secondary"
              size="lg"
              icon="player-play"
              scrollTo="how"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              How it works
            </ActionButton>
          </div>
        </Reveal>

        <Reveal motion={motion} index={1} style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 26,
              overflow: "hidden",
              aspectRatio: "4 / 5",
              boxShadow: "var(--shadow-float)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-fridge-prompt.jpg"
              alt="Senior walking to the fridge while following a voice prompt"
              style={{
                width: "100%",
                height: "118%",
                objectFit: "cover",
                objectPosition: "50% 10%",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(12,10,20,0) 45%, rgba(12,10,20,.75) 100%)",
              }}
            />
          </div>
          <VoiceCoachCard motion={motion} />
        </Reveal>
      </section>

      {/* Body or mind → both at once */}
      <section
        style={{
          ...SHELL,
          padding: "60px 20px 120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
          textAlign: "center",
        }}
      >
        <Reveal motion={motion}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 4.4vw, 54px)",
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              maxWidth: 820,
              textWrap: "balance",
            }}
          >
            Most apps train the body <span style={{ color: "var(--text-tertiary)" }}>or</span> the
            mind. Real life needs both at once.
          </h2>
        </Reveal>

        <MergeDiagram motion={motion} />

        <Reveal motion={motion} index={1}>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              color: "var(--text-secondary)",
              maxWidth: 460,
              textWrap: "pretty",
            }}
          >
            Falls happen when attention and movement compete. JOYchum trains exactly that moment.
          </p>
        </Reveal>
      </section>

      {/* How a session works */}
      <section
        id="how"
        style={{
          ...SHELL,
          ...SECTION,
          padding: "40px 20px 120px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 14, color: "var(--brand-highlight)", fontWeight: 500 }}>
            How a session works
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Listen. Move. Improve.
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 20,
          }}
        >
          {/* Listen */}
          <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ borderRadius: 22, overflow: "hidden", aspectRatio: "4 / 4.4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/session-balance.jpg"
                alt="Senior balancing on one leg in the living room"
                style={{
                  width: "100%",
                  height: "115%",
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                  display: "block",
                }}
              />
            </div>
            <StepCaption
              icon="ti ti-ear"
              title="Listen"
              text="The coach speaks every step. No screen to watch while moving."
            />
          </Reveal>

          {/* Move and think */}
          <Reveal
            motion={motion}
            index={1}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div
              style={{
                borderRadius: 22,
                overflow: "hidden",
                aspectRatio: "4 / 4.4",
                background: "var(--glass-surface)",
                border: "1px solid var(--glass-edge)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 12,
                padding: 28,
                boxSizing: "border-box",
              }}
            >
              {pairs.map((p) => (
                <div
                  key={p.body}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      background: "var(--glass-surface-2)",
                      border: "1px solid var(--glass-edge)",
                    }}
                  >
                    <i
                      className="ti ti-walk"
                      style={{ color: "var(--brand-highlight)", marginRight: 6 }}
                      aria-hidden="true"
                    />
                    {p.body}
                  </span>
                  <i
                    className="ti ti-plus"
                    style={{ color: "var(--text-tertiary)" }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      background: "var(--glass-surface-2)",
                      border: "1px solid var(--glass-edge)",
                    }}
                  >
                    <i
                      className="ti ti-brain"
                      style={{ color: "var(--brand-highlight)", marginRight: 6 }}
                      aria-hidden="true"
                    />
                    {p.mind}
                  </span>
                </div>
              ))}
            </div>
            <StepCaption
              icon="ti ti-arrows-join"
              title="Move and think"
              text="Balance and memory, trained at the same time. Difficulty adapts to you."
            />
          </Reveal>

          {/* See progress */}
          <Reveal
            motion={motion}
            index={2}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div
              style={{
                borderRadius: 22,
                aspectRatio: "4 / 4.4",
                background: "var(--glass-surface)",
                border: "1px solid var(--glass-edge)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                padding: 28,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>Dual-Task Cost</span>
                <span style={{ fontSize: 13, color: "var(--success)", fontWeight: 500 }}>
                  <i className="ti ti-trending-down" aria-hidden="true" /> −38%
                </span>
              </div>
              <div style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em" }}>14%</div>
              <DualTaskChart motion={motion} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "var(--text-tertiary)",
                }}
              >
                <span>Week 1</span>
                <span>Week 8</span>
              </div>
            </div>
            <StepCaption
              icon="ti ti-chart-line"
              title="See progress"
              text="One clear score, shared with family. Proof, not minutes."
            />
          </Reveal>
        </div>
      </section>

      {/* For care teams */}
      <section
        id="care"
        style={{
          ...SHELL,
          ...SECTION,
          padding: "40px 20px 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <Reveal
          motion={motion}
          style={{ borderRadius: 26, overflow: "hidden", aspectRatio: "1 / 1" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/care-worker-tablet.jpg"
            alt="Care worker showing the app on a tablet to a senior"
            style={{
              width: "100%",
              height: "112%",
              objectFit: "cover",
              objectPosition: "50% 15%",
              display: "block",
            }}
          />
        </Reveal>

        <Reveal
          motion={motion}
          index={1}
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              textWrap: "balance",
            }}
          >
            Made for care teams and the families behind them.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {audiences.map((a) => (
              <div
                key={a.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "18px 20px",
                  borderRadius: 20,
                  background: "var(--glass-surface)",
                  border: "1px solid var(--glass-edge)",
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    flex: "none",
                    borderRadius: 12,
                    background: "var(--brand-surface)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <i
                    className={a.icon}
                    style={{ fontSize: 20, color: "var(--brand-highlight)" }}
                    aria-hidden="true"
                  />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontSize: 17, fontWeight: 500 }}>{a.title}</span>
                  <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{a.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {pillars.map((t) => (
              <span
                key={t.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--glass-edge)",
                  fontSize: 13,
                  color: "var(--text-secondary)",
                }}
              >
                <i
                  className={t.icon}
                  style={{ color: "var(--brand-highlight)" }}
                  aria-hidden="true"
                />
                {t.label}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section
        id="team"
        style={{
          ...SHELL,
          ...SECTION,
          padding: "40px 20px 120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 36,
          textAlign: "center",
        }}
      >
        <Reveal motion={motion}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            Three founders. One mission.
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 40 }}>
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              motion={motion}
              index={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                width: 180,
              }}
            >
              <span
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: "var(--glass-surface)",
                  border: "1px solid var(--glass-edge)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 26,
                  fontWeight: 500,
                  color: "var(--brand-highlight)",
                }}
                aria-hidden="true"
              >
                {m.initials}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 17, fontWeight: 500 }}>{m.name}</span>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{m.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pilot CTA + footer */}
      <section id="pilot" style={{ ...SHELL, ...SECTION, padding: "0 20px 64px" }}>
        <Reveal
          motion={motion}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            padding: "clamp(40px, 7vw, 88px) 28px",
            background: "var(--glass-surface)",
            border: "1px solid var(--glass-edge)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -200,
              left: "50%",
              width: 520,
              height: 360,
              marginLeft: -260,
              borderRadius: "50%",
              background: "var(--glow-1)",
              opacity: 0.35,
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
          <span
            style={{
              position: "relative",
              fontSize: 14,
              color: "var(--brand-highlight)",
              fontWeight: 500,
            }}
          >
            Starting in Germany · Built for Europe
          </span>
          <h2
            style={{
              position: "relative",
              margin: 0,
              fontSize: "clamp(34px, 5vw, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: 720,
              textWrap: "balance",
            }}
          >
            Help seniors stay independent — together.
          </h2>
          <p
            style={{
              position: "relative",
              margin: 0,
              fontSize: 17,
              color: "var(--text-secondary)",
              maxWidth: 440,
            }}
          >
            We&apos;re looking for one clinic or care facility to pilot with: 20 users, 8 weeks.
          </p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <ActionButton
              variant="primary"
              size="lg"
              icon="mail"
              mailto={`mailto:${contactEmail}?subject=Pilot%20partnership`}
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              Become a pilot partner
            </ActionButton>
          </div>
        </Reveal>

        <footer
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            padding: "28px 4px 0",
            fontSize: 13,
            color: "var(--text-tertiary)",
          }}
        >
          <span>© 2026 JOYchum — Just Older Youth chum</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#top" style={{ color: "var(--text-tertiary)" }}>
              Privacy
            </a>
            <a href="#top" style={{ color: "var(--text-tertiary)" }}>
              Imprint
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

/** The icon-plus-text caption under each how-it-works card. */
function StepCaption({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span
        style={{
          width: 40,
          height: 40,
          flex: "none",
          borderRadius: 12,
          background: "var(--brand-surface)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <i
          className={icon}
          style={{ fontSize: 18, color: "var(--brand-highlight)" }}
          aria-hidden="true"
        />
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 18, fontWeight: 500 }}>{title}</span>
        <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.45 }}>
          {text}
        </span>
      </div>
    </div>
  );
}
