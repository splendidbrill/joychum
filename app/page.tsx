import CoachPrompt from "./CoachPrompt";
import PageEffects from "./PageEffects";
import { siteConfig } from "./config";

const { contactEmail } = siteConfig;

const earlyAccess = `mailto:${contactEmail}?subject=${encodeURIComponent("JOYchum early access")}`;
const partner = `mailto:${contactEmail}?subject=${encodeURIComponent("JOYchum for our clinic or care home")}`;

const stats: Array<{ value: string; text: string }> = [
  { value: "1 in 3", text: "adults over 65 fall at least once a year" },
  { value: "1", text: "short session a day is all JOYchum asks of you" },
  { value: "0", text: "screens to watch while you move — the coach talks you through it" },
];

/** The last row is JOYchum, so it carries the ink colour and heavier weight. */
const compare: Array<{ name: string; body: boolean; mind: boolean; us?: boolean }> = [
  { name: "Brain-training apps", body: false, mind: true },
  { name: "Senior fitness apps", body: true, mind: false },
  { name: "Fall-risk tests", body: true, mind: false },
  { name: "JOYchum", body: true, mind: true, us: true },
];

const pairs: Array<{ body: string; mind: string; tone?: "faded" | "soft" }> = [
  { body: "March", mind: "Name animals", tone: "faded" },
  { body: "Walk", mind: "Name fruits", tone: "soft" },
  { body: "Balance", mind: "Count back" },
  { body: "Reach", mind: "Recall a list" },
  { body: "Step", mind: "Spell words", tone: "soft" },
  { body: "Tap toes", mind: "Name colours", tone: "faded" },
];

const ways: Array<{ icon: "home" | "clinic" | "family"; title: string; text: string; tag: string }> = [
  {
    icon: "home",
    title: "At home",
    text: "A simple subscription. Press play whenever suits you.",
    tag: "Coming soon",
  },
  {
    icon: "clinic",
    title: "Clinics & care homes",
    text: "Offered to residents and patients as a daily wellness activity.",
    tag: "Pilot planned",
  },
  {
    icon: "family",
    title: "With family",
    text: "Loved ones can follow your progress and cheer you on, if you want them to.",
    tag: "Optional",
  },
];

const roadmap: Array<{ when: string; what: string; detail: string }> = [
  {
    when: "Now",
    what: "Building the first version",
    detail: "One voice-first session, designed to be easy for everyone",
  },
  {
    when: "Next",
    what: "Testing with a clinical advisor",
    detail: "Making every exercise safe, clear and worthwhile",
  },
  {
    when: "Then",
    what: "German pilot",
    detail: "With a clinic · about 20 people · 8 weeks",
  },
  {
    when: "After that",
    what: "More countries",
    detail: "Austria or the Netherlands next",
  },
];

const team: Array<{ initials: string; name: string; role: string; focus: string }> = [
  {
    initials: "AU",
    name: "Ashutosh Upadhyay",
    role: "Partnerships",
    focus: "Working with clinics and care homes to bring JOYchum to you",
  },
  {
    initials: "T",
    name: "Tushar",
    role: "Developer",
    focus: "Building the voice coach and the way it adapts to you",
  },
  {
    initials: "J",
    name: "Johannes",
    role: "Design · Germany",
    focus: "Making everything easy to see, hear and use",
  },
];

const faqs: Array<{ q: string; a: string }> = [
  {
    q: "Do I need to be good with technology?",
    a: "No. You press play and the coach does the talking. There are no menus to learn while you move.",
  },
  {
    q: "What do I need to get started?",
    a: "A phone or tablet and a little clear space at home. You don't need to look at the screen during a session.",
  },
  {
    q: "Is JOYchum medical treatment?",
    a: "No. JOYchum is a wellness programme, not a medical treatment. Please check with your doctor before starting any new exercise, and keep something sturdy within reach.",
  },
  {
    q: "What happens to my information?",
    a: "We design for privacy from the start and follow European data-protection rules (GDPR).",
  },
];

export default function Home() {
  return (
    <>
      <PageEffects />
      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Shared clip path for the small mode marks */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="lensL">
            <circle cx="18" cy="16" r="14" />
          </clipPath>
        </defs>
      </svg>

      <header>
        <div className="container nav">
          <a className="logo" href="#top" aria-label="JOYchum, back to top">
            <svg className="mode" width="36" height="24" viewBox="0 0 48 32" aria-hidden="true">
              <circle className="m-move" cx="18" cy="16" r="14" />
              <circle className="m-mind" cx="30" cy="16" r="14" />
              <circle className="m-both" cx="30" cy="16" r="14" clipPath="url(#lensL)" />
            </svg>
            JOYchum
          </a>
          <nav aria-label="Sections">
            <ul className="nav__links">
              <li><a href="#product">How it works</a></li>
              <li><a href="#why">Why it matters</a></li>
              <li><a href="#access">Where to use it</a></li>
              <li><a href="#faq">Questions</a></li>
            </ul>
          </nav>
          <a className="btn btn--primary" href="#join">
            Get early access
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div>
              <p className="eyebrow">A daily voice coach for adults 65+</p>
              <h1 className="display" id="hero-title">
                Stay steady. Stay sharp. <span className="quiet">Stay home.</span>
              </h1>
              <p className="lead">
                JOYchum is a friendly voice coach that trains your balance and your memory together —
                one short session a day, hands-free, right in your living room.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#join">
                  Get early access
                </a>
                <a className="btn btn--secondary" href="#product">
                  See how it works
                </a>
              </div>
            </div>
            <div className="hero__media">
              <div className="photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/session-seated-leg-raise.jpg"
                  width={1199}
                  height={896}
                  alt="An older woman sits in an armchair in her bright living room and raises one leg straight out in front of her."
                />
              </div>
              <CoachPrompt />
            </div>
          </div>
        </section>

        {/* 01 Why it matters */}
        <section className="band band--sunken" id="why" aria-labelledby="why-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">01 — Why it matters</p>
                <h2 className="title" id="why-title">
                  Staying independent starts with small, steady habits.
                </h2>
              </div>
              <p className="text">
                Many falls happen when your attention and your movement compete — like turning to
                answer someone while you walk. That is exactly what JOYchum helps you practise.
              </p>
            </div>
            <div>
              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.value}>
                    <dt className="stat__value">{s.value}</dt>
                    <dd>{s.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="caption stats__source">Source: World Health Organization (approx.)</p>
            </div>
          </div>
        </section>

        {/* 02 The difference */}
        <section className="band" id="difference" aria-labelledby="difference-title">
          <div className="container split">
            <div className="venn" aria-hidden="true">
              <svg className="venn__art" viewBox="0 0 520 340" focusable="false">
                <defs>
                  <clipPath id="vennBody">
                    <circle cx="180" cy="170" r="160" />
                  </clipPath>
                </defs>
                <circle className="m-move" cx="180" cy="170" r="160" />
                <circle className="m-mind" cx="340" cy="170" r="160" />
                <circle className="m-both" cx="340" cy="170" r="160" clipPath="url(#vennBody)" />
              </svg>
              <span className="venn__label venn__label--body">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="13" cy="4" r="2" />
                  <path d="m9 20 3-6 3 3v4M7 12l3-4 4 1 3 3M12 14l-1-5" />
                </svg>
                Body
              </span>
              <span className="venn__label venn__label--mind">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 5a3 3 0 0 0-5.8-1A3 3 0 0 0 4 8.5a3 3 0 0 0 .5 5.5A3 3 0 0 0 8 19a3 3 0 0 0 4 1V5zM12 5a3 3 0 0 1 5.8-1A3 3 0 0 1 20 8.5a3 3 0 0 1-.5 5.5A3 3 0 0 1 16 19a3 3 0 0 1-4 1" />
                </svg>
                Mind
              </span>
              <span className="venn__pill">JOYchum</span>
            </div>
            <div>
              <p className="eyebrow">02 — What&apos;s different</p>
              <h2 className="title" id="difference-title">
                Most apps train your body or your mind. JOYchum trains both at once.
              </h2>
              <p className="text">
                Everyday life asks for both together — walking while you talk, carrying shopping while
                you think. So that is how JOYchum trains.
              </p>
              <div className="glass-panel compare-wrap">
                <table className="compare">
                  <thead>
                    <tr>
                      <th scope="col"><span className="sr-only">Type of app</span></th>
                      <th scope="col">Body</th>
                      <th scope="col">Mind</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map((c) => (
                      <tr key={c.name} className={c.us ? "compare__us" : undefined}>
                        <th scope="row">{c.name}</th>
                        <Mark on={c.body} />
                        <Mark on={c.mind} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 03 How it works */}
        <section className="band band--blue" id="product" aria-labelledby="product-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">03 — How it works</p>
                <h2 className="title" id="product-title">
                  One daily session. Listen, move, improve.
                </h2>
              </div>
              <p className="text">
                Open JOYchum, press play and follow the coach. It adapts to you, so each session feels
                challenging but never overwhelming.
              </p>
            </div>
            <ul className="features">
              <li>
                <div className="feature__media feature__media--photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Exercise-with-phone.jpeg"
                    width={896}
                    height={1200}
                    loading="lazy"
                    alt="An older man stands in his living room doing a shoulder exercise while a phone on the table guides him by voice."
                  />
                </div>
                <p className="caption">1 · Voice-led</p>
                <h3 className="heading">The coach speaks every step</h3>
                <p>No screen to watch while you&apos;re moving.</p>
              </li>
              <li>
                <div className="feature__media feature__media--glow-warm">
                  <ul className="pairs" aria-label="Example pairs of a body task and a mind task">
                    {pairs.map((p) => (
                      <li
                        key={p.body}
                        className={`pill pair${p.tone ? ` pair--${p.tone}` : ""}`}
                        aria-hidden={p.tone === "faded" ? true : undefined}
                      >
                        <span className="pair__item chip--move">
                          <span className="chip__dot" />
                          {p.body}
                        </span>
                        <span className="pair__plus" aria-hidden="true">+</span>
                        <span className="pair__item">
                          <span className="chip__dot" />
                          {p.mind}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="caption">2 · Body and mind</p>
                <h3 className="heading">Balance and memory, together</h3>
                <p>Difficulty adapts to you, so it&apos;s never too easy or too hard.</p>
              </li>
              <li>
                <div
                  className="feature__media feature__media--glow-sage measure"
                  role="img"
                  aria-label="Illustrative chart: the dual-task cost falls to 14% between week 1 and week 8."
                >
                  <p className="chart__label">
                    <span>Dual-task cost</span>
                    <span className="tag-example">Illustrative</span>
                  </p>
                  <p className="figure measure__value">
                    14<small>%</small>
                  </p>
                  <svg className="measure__line" viewBox="0 0 300 160" aria-hidden="true" focusable="false">
                    <defs>
                      <linearGradient id="dtcArea" x1="0" y1="0" x2="0" y2="1">
                        <stop className="measure__area-top" offset="0" />
                        <stop className="measure__area-bottom" offset="1" />
                      </linearGradient>
                      <filter id="dtcSoft" x="-10%" y="-30%" width="120%" height="160%">
                        <feGaussianBlur stdDeviation="5" />
                      </filter>
                    </defs>
                    <line className="measure__grid" x1="0" y1="50" x2="300" y2="50" />
                    <line className="measure__grid" x1="0" y1="100" x2="300" y2="100" />
                    <path className="measure__depth" d="M6 30 C 46 34, 66 50, 96 56 S 156 80, 186 92 S 256 114, 294 118" transform="translate(0 12)" filter="url(#dtcSoft)" />
                    <path className="measure__area" d="M6 30 C 46 34, 66 50, 96 56 S 156 80, 186 92 S 256 114, 294 118 L294 150 L6 150 Z" />
                    <line className="measure__axis" x1="0" y1="150" x2="300" y2="150" />
                    <path className="measure__path" d="M6 30 C 46 34, 66 50, 96 56 S 156 80, 186 92 S 256 114, 294 118" />
                    <path className="measure__shine" d="M6 30 C 46 34, 66 50, 96 56 S 156 80, 186 92 S 256 114, 294 118" transform="translate(0 -2)" />
                    <circle className="measure__halo" cx="294" cy="118" r="14" />
                    <circle className="measure__dot" cx="294" cy="118" r="7" />
                  </svg>
                  <p className="chart__label caption">
                    <span>Week 1</span>
                    <span>Week 8</span>
                  </p>
                </div>
                <p className="caption">3 · Progress you can see</p>
                <h3 className="heading">A score you and your family can follow</h3>
                <p>A simple weekly measure of how much thinking slows your movement.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* 04 Where to use it */}
        <section className="band" id="access" aria-labelledby="access-title">
          <div className="container split">
            <div className="photo photo--square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Doctor-JOYchum-card.jpeg"
                width={896}
                height={1200}
                loading="lazy"
                alt="A doctor talks with an older woman across her desk; a JOYchum card lies on the desk between them."
              />
            </div>
            <div>
              <p className="eyebrow">04 — Where to use it</p>
              <h2 className="title" id="access-title">
                At home, or through your clinic or care home.
              </h2>
              <ul className="glass-panel channels">
                {ways.map((w) => (
                  <li key={w.title}>
                    <span className="channel__icon">
                      <WayIcon name={w.icon} />
                    </span>
                    <div>
                      <h3 className="channel__title">{w.title}</h3>
                      <p className="caption">{w.text}</p>
                    </div>
                    <span className="tag-example">{w.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 05 What's coming */}
        <section className="band band--sunken" id="roadmap" aria-labelledby="roadmap-title">
          <div className="container">
            <div>
              <p className="eyebrow">05 — What&apos;s coming</p>
              <h2 className="title" id="roadmap-title">
                Starting in Germany, then across Europe.
              </h2>
            </div>
            <ol className="timeline">
              {roadmap.map((r) => (
                <li key={r.what}>
                  <p className="caption">{r.when}</p>
                  <h3 className="milestone__title">{r.what}</h3>
                  <p className="caption">{r.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 06 Team */}
        <section className="band" id="team" aria-labelledby="team-title">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">06 — Who we are</p>
                <h2 className="title" id="team-title">
                  Three founders, one goal: more good years at home.
                </h2>
              </div>
              <p className="text">
                We&apos;re bringing a German clinical advisor on board to help shape every exercise.
              </p>
            </div>
            <ul className="cards cards--3">
              {team.map((m) => (
                <li key={m.name} className="card member">
                  <span className="avatar" aria-hidden="true">{m.initials}</span>
                  <h3 className="heading">{m.name}</h3>
                  <p className="caption">{m.role}</p>
                  <p>{m.focus}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 07 Join + FAQ */}
        <section className="band band--blue" id="join" aria-labelledby="join-title">
          <div className="container split split--top">
            <div>
              <p className="eyebrow">07 — Get early access</p>
              <h2 className="display ask__value" id="join-title">
                Be among the first.
              </h2>
              <p className="text">
                Send us a note and we&apos;ll tell you as soon as JOYchum is ready to try. Running a
                clinic or care home? We&apos;d love to talk about bringing it to your residents.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={earlyAccess}>
                  Get early access
                </a>
                <a className="btn btn--secondary" href={partner}>
                  For clinics &amp; care homes
                </a>
              </div>
            </div>
            <div className="glass-panel faq" id="faq">
              <h3 className="sr-only">Common questions</h3>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="details__body">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2026 JOYchum — Just Older Youth chum</p>
          <p className="footer__links">
            <a href={`mailto:${contactEmail}`}>Contact</a>
            <a href="#top">Privacy</a>
            <a href="#top">Imprint</a>
          </p>
        </div>
      </footer>
    </>
  );
}

/** A tick or dash in the comparison table, with the meaning read out. */
function Mark({ on }: { on: boolean }) {
  return (
    <td>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={on ? "M20 6 9 17l-5-5" : "M6 12h12"} />
      </svg>
      <span className="sr-only">{on ? "Yes" : "No"}</span>
    </td>
  );
}

const WAY_PATHS: Record<string, string[]> = {
  home: ["M3 11 12 3l9 8", "M5 10v11h14V10", "M10 21v-6h4v6"],
  clinic: ["M3 21h18M5 21V7l7-4 7 4v14M10 21v-4h4v4M12 8v4M10 10h4"],
  family: ["M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"],
};

function WayIcon({ name }: { name: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "family" && <circle cx="9" cy="8" r="3.5" />}
      {WAY_PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
