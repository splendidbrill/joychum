import ImageSlot from "./components/ImageSlot";
import WaitlistForm from "./components/WaitlistForm";
import { siteConfig } from "./config";

const { ctaLabel, showOrgs, showTeam } = siteConfig;

/** Research findings and what each one turned into, for the evidence table. */
const researchRows: Array<[finding: string, built: string]> = [
  [
    "Variable-priority attention training produced the strongest, most durable gains (Silsupadol et al., 2009)",
    "The engine cues you to shift focus between the physical and cognitive task, not simply do both at once.",
  ],
  [
    "Staged progression avoids overwhelming users (Azadian et al.)",
    "Difficulty advances only after two to three consistently stable sessions.",
  ],
  [
    "Short sessions stayed effective, even in dementia populations (Lemke et al., 2018)",
    "Sessions default to five to fifteen minutes — never a long workout.",
  ],
  [
    "Trained skills transfer poorly to untrained real-world combinations",
    "A real-world simulation layer runs in parallel with the abstract drills, not after them.",
  ],
  [
    "Some balance protocols carry genuine fall risk in the source studies",
    "Higher-risk work sits behind a safety screen and, where appropriate, clinician clearance.",
  ],
];

const faqs: Array<[question: string, answer: string]> = [
  [
    "Do I need any equipment?",
    "No. A chair, a clear stretch of floor and the phone you already own. No wearables, nothing to buy.",
  ],
  [
    "I'm nervous about falling. Is this safe for me?",
    "Everyone begins with a safety screening, and many people start seated. Standing and walking work appears only once seated work is comfortable and stable.",
  ],
  [
    "How long does a session take?",
    "Five to fifteen minutes. Short sessions were effective in the research — and far easier to keep up daily.",
  ],
  [
    "Do I have to watch the screen?",
    "No. Sessions are led by voice so you can look where you're going. The screen is for setup and for reviewing progress afterwards.",
  ],
  [
    "Can my son or daughter see how I'm doing?",
    "Only if you turn it on. You choose whether to share, what they see, and you can stop at any time.",
  ],
  [
    "When can I use it?",
    "The app is in development. Join the waitlist and we'll write to you once — when it's ready to try.",
  ],
];

const team = ["Ashutosh Upadhyay", "Tushar Karan", "Johannes Held"];

/** The six bars of the dual-task-cost trend, oldest to newest. */
const trendBars: Array<[height: string, ink: string]> = [
  ["96%", "var(--color-accent-200)"],
  ["88%", "var(--color-accent-200)"],
  ["80%", "var(--color-accent-300)"],
  ["72%", "var(--color-accent-300)"],
  ["64%", "var(--color-accent-500)"],
  ["56%", "var(--color-accent)"],
];

export default function Home() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div className="wrap">
        <nav
          className="nav"
          style={{
            paddingInline: 0,
            paddingBlock: "var(--space-4)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <span className="nav-brand" style={{ fontSize: 24, letterSpacing: "-0.02em" }}>
            JoyCare&nbsp;Club
          </span>
          <a href="#how">How it works</a>
          <a href="#families">For families</a>
          <a href="#research">Research</a>
          <a href="#faq">Questions</a>
          <a
            href="#waitlist"
            className="btn btn-primary big-btn"
            style={{
              minHeight: 44,
              fontSize: 16,
              paddingInline: "var(--space-4)",
              color: "var(--color-bg)",
            }}
          >
            {ctaLabel}
          </a>
        </nav>
      </div>

      {/* Hero */}
      <section className="wrap" style={{ paddingTop: "clamp(24px,4vw,56px)" }}>
        <div
          style={{
            display: "grid",
            gap: "clamp(32px,5vw,64px)",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            alignItems: "center",
          }}
        >
          <div>
            <span className="tag tag-accent" style={{ fontSize: 13, padding: "6px 14px", borderRadius: 999 }}>
              Evidence-informed · Voice-led · 5–15 minutes a day
            </span>
            <h1
              style={{
                fontSize: "clamp(40px,6.4vw,76px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: "var(--space-3) 0 var(--space-4)",
                maxWidth: "11em",
              }}
            >
              Stay steady on your feet. Stay sharp in your day.
            </h1>
            <p className="lede">
              JoyCare Club trains body and mind <em>together</em> — the way real life asks for them — so older
              adults can keep living independently, at home, on their own terms.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
                marginTop: "var(--space-4)",
              }}
            >
              <a href="#waitlist" className="btn btn-primary big-btn" style={{ color: "var(--color-bg)" }}>
                {ctaLabel}
              </a>
              <a href="#how" className="btn btn-secondary big-btn">
                See how it works
              </a>
            </div>
            <p style={{ fontSize: 16, marginTop: "var(--space-3)" }} className="text-muted">
              No equipment. No wearables. Works on the phone you already own.
            </p>
          </div>
          <figure className="cmyk soft" style={{ width: "100%" }}>
            <div className="print" style={{ aspectRatio: "4/5" }}>
              <ImageSlot hint="Older adult walking outdoors, mid-stride, warm daylight." />
            </div>
            <figcaption>
              Drop a photo here — older adult walking outdoors, mid-stride, warm daylight.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Why this works */}
      <section className="wrap sec" id="why">
        <p className="eyebrow">Why this works</p>
        <h2 className="h2">
          You don&apos;t fall while standing still. You fall while walking, remembering and deciding.
        </h2>
        <p className="lede" style={{ marginBottom: "var(--space-6)" }}>
          The capacity that fades first is the combined one. So we train it as one thing.
        </p>
        <div className="grid3">
          <div className="feat">
            <i className="ph-duotone ph-person-simple-walk" aria-hidden="true" />
            <h3>Body and mind, at once</h3>
            <p>
              Stepping while counting backwards. Walking while recalling a shopping list. One session, both
              capacities — grounded in clinical dual-task research, not generic wellness content.
            </p>
          </div>
          <div className="feat">
            <i className="ph-duotone ph-microphone" aria-hidden="true" />
            <h3>Led by voice, not a screen</h3>
            <p>
              Sessions are spoken, so you can look where you&apos;re going. Nothing to watch, nothing small to
              tap while you&apos;re moving.
            </p>
          </div>
          <div className="feat">
            <i className="ph-duotone ph-shield-check" aria-hidden="true" />
            <h3>Safe by design</h3>
            <p>
              A safety screening comes first, difficulty rises only after steady sessions, and the riskiest
              exercises stay locked behind clinician clearance.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="wrap sec" id="how">
        <p className="eyebrow">How it works</p>
        <h2 className="h2">Three steps, then a quiet daily habit.</h2>
        <div
          style={{
            display: "grid",
            gap: "clamp(28px,4vw,56px)",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "clamp(24px,3vw,40px)" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
                Step one
              </p>
              <h3 style={{ fontSize: 26, margin: "0 0 var(--space-2)" }}>A baseline check, spoken aloud</h3>
              <p style={{ margin: 0 }}>
                A short voice-guided screening of walking, balance, memory and reaction time — plus fall
                history, mobility aids and dizziness. No clinic visit.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
                Step two
              </p>
              <h3 style={{ fontSize: 26, margin: "0 0 var(--space-2)" }}>Your own starting level</h3>
              <p style={{ margin: 0 }}>
                Seated, supported standing, walking or complex — you begin where you actually are, never at a
                default difficulty.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
                Step three
              </p>
              <h3 style={{ fontSize: 26, margin: "0 0 var(--space-2)" }}>Five to fifteen minutes a day</h3>
              <p style={{ margin: 0 }}>
                One physical task and one thinking task together, with the app cueing you to shift attention
                between them — the technique with the strongest evidence behind it.
              </p>
            </div>
          </div>
          <figure className="cmyk soft">
            <div className="print" style={{ aspectRatio: "3/4" }}>
              <ImageSlot hint="Seated stepping at home, phone on the table." />
            </div>
            <figcaption>Drop a photo here — seated stepping at home, phone on the table.</figcaption>
          </figure>
        </div>
      </section>

      {/* Inside the app */}
      <section className="wrap sec" id="app">
        <p className="eyebrow">Inside the app</p>
        <h2 className="h2">Large type, plain words, and a voice that leads.</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,56px)", alignItems: "flex-start" }}>
          <figure style={{ flex: "0 1 244px" }}>
            <div className="phone">
              <p
                style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}
                className="text-muted"
              >
                Today · Tuesday
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Good morning, Margaret.
              </p>
              <p style={{ fontSize: 15, margin: 0 }}>
                Today&apos;s session is 8 minutes: seated stepping with word recall.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                style={{ minHeight: 54, fontSize: 18, marginTop: "auto", borderRadius: 999 }}
              >
                Start session
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                style={{ minHeight: 46, borderRadius: 999 }}
              >
                Not today
              </button>
            </div>
            <figcaption style={{ fontSize: 14 }}>Home — one decision, nothing else.</figcaption>
          </figure>

          <figure style={{ flex: "0 1 244px" }}>
            <div className="phone" style={{ justifyContent: "center" }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  margin: 0,
                  color: "var(--color-accent-700)",
                }}
              >
                Listening · 4:12 left
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 28,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Keep walking. Now name the list backwards.
              </p>
              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <span className="tag tag-accent">Walking</span>
                <span className="tag tag-accent">Recall</span>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                style={{ minHeight: 54, fontSize: 18, marginTop: "auto", borderRadius: 999 }}
              >
                Pause
              </button>
            </div>
            <figcaption style={{ fontSize: 14 }}>During a session — audio first, screen optional.</figcaption>
          </figure>

          <figure style={{ flex: "0 1 244px" }}>
            <div className="phone">
              <p
                style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}
                className="text-muted"
              >
                Your trend · 6 weeks
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 22,
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Dual-Task Cost
              </p>
              <p
                style={{
                  fontSize: 50,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                14%
              </p>
              <p style={{ fontSize: 15, margin: 0 }}>
                Down from 23% in July. Your walking holds up better now when your mind is busy.
              </p>
              <div
                style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 76, marginTop: "auto" }}
                aria-hidden="true"
              >
                {trendBars.map(([height, ink], i) => (
                  <div key={i} style={{ flex: 1, height, background: ink, borderRadius: 4 }} />
                ))}
              </div>
            </div>
            <figcaption style={{ fontSize: 14 }}>Progress — one number that means something.</figcaption>
          </figure>
        </div>
      </section>

      {/* The measure */}
      <section
        className="sec"
        id="score"
        style={{
          background: "var(--color-surface)",
          marginTop: "clamp(56px,8vw,112px)",
          paddingBlock: "clamp(56px,8vw,104px)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: "clamp(28px,4vw,64px)",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              alignItems: "center",
            }}
          >
            <div>
              <p className="eyebrow">The measure</p>
              <h2 className="h2">Dual-Task Cost, not a wellness score.</h2>
              <p>
                Dual-Task Cost is how much your walking or balance drops when a thinking task is added on top —
                the outcome measure the clinical literature itself uses. A falling cost means your body holds
                its own while your mind is occupied.
              </p>
              <p style={{ margin: 0 }}>
                That&apos;s what we show you, and what your family sees if you choose to share. Not minutes
                exercised.
              </p>
            </div>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
                  Walking alone
                </p>
                <div style={{ height: 28, background: "var(--color-accent)", width: "100%", borderRadius: 999 }} />
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
                  Walking while recalling
                </p>
                <div
                  style={{ height: 28, background: "var(--color-accent-2-500)", width: "77%", borderRadius: 999 }}
                />
                <p style={{ fontSize: 16, margin: "var(--space-2) 0 0" }} className="text-muted">
                  The gap between the two is your Dual-Task Cost. Training narrows it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For families */}
      <section className="wrap sec" id="families">
        <div
          style={{
            display: "grid",
            gap: "clamp(28px,4vw,64px)",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            alignItems: "center",
          }}
        >
          <figure className="cmyk soft">
            <div className="print" style={{ aspectRatio: "4/3" }}>
              <ImageSlot hint="Adult daughter and older parent together, unposed." />
            </div>
            <figcaption>Drop a photo here — adult daughter and older parent together, unposed.</figcaption>
          </figure>
          <div>
            <p className="eyebrow">For families</p>
            <h2 className="h2">Reassurance, without looking over a shoulder.</h2>
            <p>
              Living alone means nobody nearby notices a slower week. With your parent&apos;s permission, you
              can see whether they&apos;re training and which way their trend is moving — adherence and
              direction, never a raw score they didn&apos;t agree to share.
            </p>
            <p style={{ margin: 0 }}>
              They stay in control of what&apos;s shared, and can switch it off at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="wrap sec" id="research">
        <p className="eyebrow">Research and evidence</p>
        <h2 className="h2">Every exercise traces back to a study.</h2>
        <p className="lede" style={{ marginBottom: "var(--space-6)" }}>
          Built from a 2020 literature review of dual-task exercise in older adults and the eleven clinical
          intervention studies it synthesises — healthy older adults, balance impairment, Parkinson&apos;s,
          stroke, dementia and osteoporosis.
        </p>
        <table className="table" style={{ fontSize: 17 }}>
          <thead>
            <tr>
              <th style={{ width: "44%" }}>Research finding</th>
              <th>What we built</th>
            </tr>
          </thead>
          <tbody>
            {researchRows.map(([finding, built]) => (
              <tr key={finding}>
                <td>{finding}</td>
                <td>{built}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Safety */}
      <section className="wrap sec" id="safety">
        <p className="eyebrow">Safety, access and privacy</p>
        <h2 className="h2">Care taken where it counts.</h2>
        <div className="grid3">
          <div className="feat">
            <i className="ph-duotone ph-lock-key" aria-hidden="true" />
            <h3>Gated, not earned</h3>
            <p>
              Unstable-surface, eyes-closed and backward-walking work was supervised in the research. Here it
              stays locked behind screening and clinician clearance — never unlocked by a good week.
            </p>
          </div>
          <div className="feat">
            <i className="ph-duotone ph-eye" aria-hidden="true" />
            <h3>Built to be used</h3>
            <p>
              Voice is the primary mode, not an add-on. Large type, high contrast, adjustable speech rate, and
              no small tap targets during an active exercise.
            </p>
          </div>
          <div className="feat">
            <i className="ph-duotone ph-device-mobile" aria-hidden="true" />
            <h3>Your data stays close</h3>
            <p>
              Speech and motion are processed on the device wherever possible, we collect the minimum, and
              consent is written in plain language.
            </p>
          </div>
        </div>
        <p style={{ marginTop: "var(--space-6)", maxWidth: "44em" }} className="text-muted">
          What we don&apos;t claim: the evidence base is promising but heterogeneous, and dual-task training
          doesn&apos;t automatically transfer to every untrained activity. JoyCare Club is evidence-informed
          training that supports mobility, balance, attention and everyday resilience — not a guarantee against
          falls or dementia.
        </p>
      </section>

      {/* For care organisations */}
      {showOrgs && (
        <section className="wrap sec" id="organisations">
          <p className="eyebrow">For care organisations</p>
          <h2 className="h2">A supervised digital programme for the people you already serve.</h2>
          <div className="grid3">
            <div>
              <h3 style={{ fontSize: 24, margin: "0 0 var(--space-2)" }}>Senior living communities</h3>
              <p style={{ margin: 0 }}>
                Run JoyCare Club as a structured daily activity, with resident-level progression and safety
                gating built in.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 24, margin: "0 0 var(--space-2)" }}>Physiotherapy and home care</h3>
              <p style={{ margin: 0 }}>
                Extend clinic work into the days between visits, with dual-task trends your team can read at a
                glance.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 24, margin: "0 0 var(--space-2)" }}>Insurers and prevention programmes</h3>
              <p style={{ margin: 0 }}>
                A low-cost, hardware-free complement to the fall-prevention programmes you already fund.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "var(--space-4)" }}>
            <a href="#waitlist">Talk to us about a pilot →</a>
          </p>
        </section>
      )}

      {/* FAQ */}
      <section className="wrap sec" id="faq">
        <p className="eyebrow">Questions</p>
        <h2 className="h2">Straight answers.</h2>
        <div style={{ maxWidth: "46em" }}>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p style={{ margin: "var(--space-3) 0 0" }}>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Team */}
      {showTeam && (
        <section className="wrap sec" id="team">
          <p className="eyebrow">Team</p>
          <h2 className="h2">Who is building this.</h2>
          <div className="grid3" style={{ maxWidth: "56em" }}>
            {team.map((name) => (
              <div key={name}>
                <h3 style={{ fontSize: 24, margin: 0 }}>{name}</h3>
                <p className="text-muted" style={{ fontSize: 16, margin: "4px 0 0" }}>
                  Co-founder
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Waitlist */}
      <section
        id="waitlist"
        style={{
          background: "var(--color-surface)",
          marginTop: "clamp(56px,8vw,112px)",
          paddingBlock: "clamp(56px,8vw,104px)",
        }}
      >
        <div className="wrap">
          <h2
            style={{
              fontSize: "clamp(32px,5.2vw,60px)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              maxWidth: "13em",
              margin: "0 0 var(--space-4)",
            }}
          >
            Independence isn&apos;t lost all at once. It can be defended the same way.
          </h2>
          <p className="lede">
            Join the waitlist and we&apos;ll let you know the day JoyCare Club opens. One email, no newsletter.
          </p>
          <WaitlistForm ctaLabel={ctaLabel} />
        </div>
      </section>

      <footer
        className="wrap"
        style={{
          paddingBlock: "var(--space-6) var(--space-8)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-2) var(--space-6)",
          justifyContent: "space-between",
          fontSize: 15,
        }}
      >
        <span>JoyCare Club — evidence-informed cognitive-motor training.</span>
        <span className="text-muted">Not a medical device. Not a guarantee against falls or dementia.</span>
      </footer>
    </div>
  );
}
