import ActionButton from "./components/ActionButton";
import CountUpStat from "./components/CountUpStat";
import DualTaskChart from "./components/DualTaskChart";
import FundBars, { type Fund } from "./components/FundBars";
import MergeDiagram from "./components/MergeDiagram";
import Reveal from "./components/Reveal";
import RoadmapTrack from "./components/RoadmapTrack";
import VoiceCoachCard from "./components/VoiceCoachCard";
import { siteConfig } from "./config";

const { motion, contactEmail } = siteConfig;

const stats: Array<{ n: number; suffix: string; label: string; text: string }> = [
  { n: 90, suffix: "M+", label: "90M+", text: "adults aged 65+ across the EU27 today" },
  { n: 30, suffix: "%", label: "30%", text: "of Europeans will be 65+ by 2050, up from ~21%" },
  { n: 0, suffix: "", label: "0", text: "mainstream EU apps that train body and mind together" },
];

/** The last row is JOYchum, so it carries the ink colour and medium weight. */
const compare: Array<{ name: string; body: boolean; mind: boolean; us?: boolean }> = [
  { name: "Brain-training apps", body: false, mind: true },
  { name: "Senior fitness apps", body: true, mind: false },
  { name: "Gait / fall-risk analysis", body: true, mind: false },
  { name: "JOYchum", body: true, mind: true, us: true },
];

const pairs: Array<{ body: string; mind: string }> = [
  { body: "Walk", mind: "Name fruits" },
  { body: "Balance", mind: "Count back" },
  { body: "Reach", mind: "Recall a list" },
  { body: "Step", mind: "Spell words" },
];

const channels: Array<{ icon: string; title: string; text: string; tag: string }> = [
  {
    icon: "ti ti-building-hospital",
    title: "Clinics & care facilities",
    text: "Licensed as a resident wellness activity.",
    tag: "Primary",
  },
  {
    icon: "ti ti-users",
    title: "Families",
    text: "Home subscription with caregiver visibility.",
    tag: "B2C",
  },
  {
    icon: "ti ti-shield-check",
    title: "Insurers",
    text: "Explored once we have pilot data.",
    tag: "Later",
  },
];

const roadmap: Array<{ when: string; what: string; detail: string }> = [
  {
    when: "Months 0–2",
    what: "Advisor & foundations",
    detail: "Clinical advisor, incorporation, GDPR by design",
  },
  { when: "Months 2–5", what: "Build the MVP", detail: "One voice-first dual-task flow" },
  { when: "Months 5–6", what: "Internal testing", detail: "Refine with advisor, pilot protocol" },
  { when: "Months 6–8", what: "German pilot", detail: "1 clinic · ~20 users · 8 weeks" },
  { when: "Months 8–10", what: "Second EU market", detail: "Austria or the Netherlands" },
  { when: "Months 10–12", what: "Seed-ready", detail: "Germany proven, EU pipeline forming" },
];

const team: Array<{ initials: string; name: string; role: string; focus: string }> = [
  {
    initials: "AU",
    name: "Ashutosh Upadhyay",
    role: "Business",
    focus: "Strategy, partnerships, fundraising",
  },
  {
    initials: "T",
    name: "Tushar",
    role: "Developer",
    focus: "Voice product and the adaptive engine",
  },
  {
    initials: "J",
    name: "Johannes",
    role: "UI/UX · Germany",
    focus: "Senior-friendly design, clinic network",
  },
];

const funds: Fund[] = [
  { label: "Founder runway", pct: 35, color: "#3B3834" },
  { label: "Clinical advisor, legal & GDPR", pct: 20, color: "#6B655E" },
  { label: "German pilot & second market", pct: 20, color: "#8A7A66" },
  { label: "Infrastructure & tooling", pct: 15, color: "#B3A796" },
  { label: "Buffer", pct: 10, color: "#CFC5B6" },
];

/** The nav is 64px tall, so anchored sections clear it. */
const SECTION = { scrollMarginTop: 64 } as const;
const SHELL = { maxWidth: 1200, margin: "0 auto" } as const;

const eyebrow = { fontSize: 13, color: "var(--text-tertiary)" } as const;

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-sans), Inter, system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(238,233,225,.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--glass-edge)",
        }}
      >
        <div
          className="jx-nav"
          style={{
            ...SHELL,
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a
            href="#top"
            style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 19, letterSpacing: "-0.02em" }}
          >
            <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-label="JOYchum logo">
              <rect x="0" y="0" width="40" height="40" rx="12" fill="#3B3834" />
              <circle cx="15" cy="9.5" r="3.4" fill="#F1ECE4" />
              <path
                d="M15 14.5v9M8.5 18.5l6.5-2 6.5 2M15 23.5l-2.5 10M15 23.5l5.5 3.5-1 5"
                fill="none"
                stroke="#F1ECE4"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6.5a4.6 4.6 0 0 1 0 6.5M25.5 4a8.4 8.4 0 0 1 0 11.5"
                fill="none"
                stroke="#C9BBA6"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span>
              <span style={{ fontWeight: 500 }}>JOY</span>chum
            </span>
          </a>

          <div
            className="jx-nav-links"
            style={{ display: "flex", alignItems: "center", gap: 26, fontSize: 14 }}
          >
            <a href="#product" style={{ color: "var(--text-secondary)" }}>
              Product
            </a>
            <a href="#market" style={{ color: "var(--text-secondary)" }}>
              Market
            </a>
            <a href="#roadmap" style={{ color: "var(--text-secondary)" }}>
              Roadmap
            </a>
            <a href="#team" style={{ color: "var(--text-secondary)" }}>
              Team
            </a>
            <ActionButton
              variant="primary"
              size="sm"
              scrollTo="invest"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              For investors
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
          padding: "72px 24px 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <span style={{ fontSize: 14, color: "var(--brand-highlight)", fontWeight: 500 }}>
            Cognitive-motor training for independent ageing
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(44px, 6.2vw, 78px)",
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
            A voice coach for adults 65+ that trains balance and memory together — one short session
            a day, hands-free.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <ActionButton
              variant="primary"
              size="lg"
              iconRight="arrow-right"
              scrollTo="product"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              See how it works
            </ActionButton>
            <ActionButton
              variant="secondary"
              size="lg"
              scrollTo="invest"
              style={{ whiteSpace: "nowrap", flex: "none" }}
            >
              Raising €500K pre-seed
            </ActionButton>
          </div>
        </Reveal>

        <Reveal motion={motion} index={1} style={{ position: "relative", paddingBottom: 40 }}>
          <div style={{ borderRadius: 26, overflow: "hidden", aspectRatio: "4 / 4.6" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-fridge-prompt.jpg"
              alt="Senior walking to the fridge while following a voice prompt"
              style={{
                width: "100%",
                height: "116%",
                objectFit: "cover",
                objectPosition: "50% 10%",
                display: "block",
              }}
            />
          </div>
          <VoiceCoachCard motion={motion} />
        </Reveal>
      </section>

      {/* 01 — The problem */}
      <section
        id="market"
        style={{
          ...SECTION,
          background: "var(--bg-sunk)",
          borderTop: "1px solid var(--glass-edge)",
          borderBottom: "1px solid var(--glass-edge)",
        }}
      >
        <div
          style={{
            ...SHELL,
            padding: "96px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 56,
          }}
        >
          <Reveal
            motion={motion}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "24px 64px",
              alignItems: "end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={eyebrow}>01 — The problem</span>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(32px, 4vw, 50px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  textWrap: "balance",
                }}
              >
                Independence fails one small decline at a time.
              </h2>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                maxWidth: 460,
              }}
            >
              Falls are a leading cause of lost independence after 65. They happen when attention
              and movement compete — yet that is rarely trained.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              borderTop: "1px solid var(--rule)",
            }}
          >
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                motion={motion}
                index={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  padding: "28px 24px 0 0",
                }}
              >
                <CountUpStat n={s.n} suffix={s.suffix} label={s.label} motion={motion} />
                <span style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 240 }}>
                  {s.text}
                </span>
              </Reveal>
            ))}
          </div>

          <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
            Sources: Eurostat, WHO Europe (approx.)
          </span>
        </div>
      </section>

      {/* 02 — The gap */}
      <section
        style={{
          ...SHELL,
          padding: "104px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <MergeDiagram motion={motion} />

        <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={eyebrow}>02 — The gap</span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3.6vw, 44px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              Apps train the body or the mind. Never both at once.
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--glass-edge)" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) 64px 64px",
                gap: 12,
                padding: "12px 0",
                fontSize: 12,
                color: "var(--text-tertiary)",
                borderBottom: "1px solid var(--glass-edge)",
              }}
            >
              <span />
              <span style={{ textAlign: "center" }}>Body</span>
              <span style={{ textAlign: "center" }}>Mind</span>
            </div>

            {compare.map((c) => (
              <div
                key={c.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) 64px 64px",
                  gap: 12,
                  padding: "14px 0",
                  alignItems: "center",
                  borderBottom: "1px solid var(--glass-edge)",
                  fontSize: 15,
                  color: c.us ? "var(--ink)" : undefined,
                }}
              >
                <span style={{ fontWeight: c.us ? 500 : 400 }}>{c.name}</span>
                <Mark on={c.body} label={c.body ? "trains the body" : "does not train the body"} us={c.us} />
                <Mark on={c.mind} label={c.mind ? "trains the mind" : "does not train the mind"} us={c.us} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 03 — What we're building */}
      <section
        id="product"
        style={{
          ...SECTION,
          background: "var(--bg-raised)",
          borderTop: "1px solid var(--glass-edge)",
          borderBottom: "1px solid var(--glass-edge)",
        }}
      >
        <div
          style={{
            ...SHELL,
            padding: "96px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 44,
          }}
        >
          <Reveal
            motion={motion}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "24px 64px",
              alignItems: "end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={eyebrow}>03 — What we&apos;re building</span>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(32px, 4vw, 50px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                }}
              >
                One daily session. Listen, move, improve.
              </h2>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                maxWidth: 460,
              }}
            >
              Our MVP is one voice-first exercise flow with adaptive difficulty. Nothing extra, built
              and tested by the founders.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 24,
            }}
          >
            {/* 1 · Voice-led */}
            <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4 / 4.2" }}>
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
                step="1 · Voice-led"
                title="The coach speaks every step"
                text="No screen to watch while moving."
              />
            </Reveal>

            {/* 2 · Dual-task */}
            <Reveal
              motion={motion}
              index={1}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div
                style={{
                  borderRadius: 20,
                  aspectRatio: "4 / 4.2",
                  background: "var(--bg)",
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
                      gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                    }}
                  >
                    <span
                      style={{
                        padding: "10px 12px",
                        borderRadius: 12,
                        background: "var(--bg-raised)",
                        border: "1px solid var(--glass-edge)",
                      }}
                    >
                      <i
                        className="ti ti-walk"
                        style={{ color: "var(--ink)", marginRight: 6 }}
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
                        borderRadius: 12,
                        background: "var(--bg-raised)",
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
                step="2 · Dual-task"
                title="Balance and memory, together"
                text="Difficulty adapts to each person."
              />
            </Reveal>

            {/* 3 · Measurable */}
            <Reveal
              motion={motion}
              index={2}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div
                style={{
                  borderRadius: 20,
                  aspectRatio: "4 / 4.2",
                  background: "var(--bg)",
                  border: "1px solid var(--glass-edge)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
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
                  <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>Illustrative</span>
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
                step="3 · Measurable"
                title="A score families can follow"
                text="How much thinking slows movement — tracked weekly."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — Business model */}
      <section
        style={{
          ...SHELL,
          padding: "104px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        <Reveal motion={motion} style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1 / 1" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={eyebrow}>04 — Business model</span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3.6vw, 44px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              B2B2C wellness. No reimbursement dependency.
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--glass-edge)" }}
          >
            {channels.map((a) => (
              <div
                key={a.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px minmax(0,1fr) auto",
                  gap: 16,
                  alignItems: "center",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--glass-edge)",
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--brand-surface)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <i
                    className={a.icon}
                    style={{ fontSize: 20, color: "var(--ink)" }}
                    aria-hidden="true"
                  />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontSize: 17, fontWeight: 500 }}>{a.title}</span>
                  <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{a.text}</span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    padding: "5px 10px",
                    borderRadius: 999,
                    border: "1px solid var(--rule)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.tag}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 05 — Roadmap */}
      <section
        id="roadmap"
        style={{ ...SECTION, background: "var(--ink)", color: "var(--ink-on-dark)" }}
      >
        <div
          style={{
            ...SHELL,
            padding: "96px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 56,
          }}
        >
          <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontSize: 13, color: "var(--ink-on-dark-muted)" }}>
              05 — 12-month roadmap
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px, 4vw, 50px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                maxWidth: 760,
                textWrap: "balance",
              }}
            >
              Germany first. Europe next.
            </h2>
          </Reveal>

          <RoadmapTrack motion={motion}>
            {roadmap.map((r, i) => (
              <Reveal
                key={r.what}
                motion={motion}
                index={i}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    border: "2px solid var(--ink-on-dark-muted)",
                    boxSizing: "border-box",
                  }}
                  aria-hidden="true"
                />
                <span style={{ fontSize: 13, color: "var(--ink-on-dark-muted)" }}>{r.when}</span>
                <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.3 }}>{r.what}</span>
                <span
                  style={{ fontSize: 14, color: "var(--ink-on-dark-muted)", lineHeight: 1.4 }}
                >
                  {r.detail}
                </span>
              </Reveal>
            ))}
          </RoadmapTrack>
        </div>
      </section>

      {/* 06 — Team */}
      <section
        id="team"
        style={{
          ...SHELL,
          ...SECTION,
          padding: "104px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "48px 64px",
          alignItems: "start",
        }}
      >
        <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={eyebrow}>06 — Team</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.6vw, 44px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Three founders, three roles.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              maxWidth: 340,
            }}
          >
            Next hire: a German clinical advisor — our top priority for the first 90 days.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: 16,
          }}
        >
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              motion={motion}
              index={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                padding: 22,
                borderRadius: 20,
                background: "var(--bg-raised)",
                border: "1px solid var(--glass-edge)",
              }}
            >
              <span
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--brand-surface)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
                aria-hidden="true"
              >
                {m.initials}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={{ fontSize: 17, fontWeight: 500 }}>{m.name}</span>
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{m.role}</span>
              </div>
              <span style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.4 }}>
                {m.focus}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 — The ask */}
      <section
        id="invest"
        style={{
          ...SECTION,
          background: "var(--bg-sunk)",
          borderTop: "1px solid var(--glass-edge)",
        }}
      >
        <div
          style={{
            ...SHELL,
            padding: "96px 24px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "56px 64px",
          }}
        >
          <Reveal motion={motion} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={eyebrow}>07 — The ask</span>
            <span
              style={{
                fontSize: "clamp(64px, 9vw, 120px)",
                fontWeight: 500,
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              €500K
            </span>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                maxWidth: 420,
              }}
            >
              Pre-seed round for 12 months of runway: a working MVP, one completed German clinic
              pilot, and a second EU market opened.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 8 }}>
              <ActionButton
                variant="primary"
                size="lg"
                icon="file-text"
                mailto={`mailto:${contactEmail}?subject=JOYchum%20pitch%20deck`}
                style={{ whiteSpace: "nowrap", flex: "none" }}
              >
                Request the deck
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="lg"
                mailto={`mailto:${contactEmail}?subject=Pilot%20partnership`}
                style={{ whiteSpace: "nowrap", flex: "none" }}
              >
                Become a pilot partner
              </ActionButton>
            </div>
          </Reveal>

          <Reveal
            motion={motion}
            index={1}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "flex-end",
            }}
          >
            <FundBars funds={funds} motion={motion} />
          </Reveal>
        </div>

        <footer
          style={{
            ...SHELL,
            padding: "32px 24px 40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
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

/** A tick or dash in the comparison table, with the meaning read out. */
function Mark({ on, label, us }: { on: boolean; label: string; us?: boolean }) {
  return (
    <i
      className={on ? "ti ti-check" : "ti ti-minus"}
      style={{
        textAlign: "center",
        fontSize: 18,
        color: us ? "var(--ink)" : "var(--text-tertiary)",
      }}
      role="img"
      aria-label={label}
    />
  );
}

/** The numbered caption under each product card. */
function StepCaption({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, color: "var(--brand-highlight)", fontWeight: 500 }}>{step}</span>
      <span style={{ fontSize: 19, fontWeight: 500 }}>{title}</span>
      <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.45 }}>{text}</span>
    </div>
  );
}
