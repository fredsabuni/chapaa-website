import Image from "next/image";
import KangaPanel from "./KangaPanel";
import { Bar, Field, Phone, Row } from "./Phone";
import { AppleIcon, GooglePlayIcon } from "./StoreIcons";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.eyasi.chapaatz&hl=en";
const APP_STORE_URL = "https://apps.apple.com/gr/app/chapaa/id1563615094";

const PAYMENT_RAILS =["M-Pesa", "Airtel Money", "Mixx by Yas", "HaloPesa", "Bank transfer", "Card"];

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" aria-label="Chapaa home">
          <Image className="logo" src="/logo.png" alt="Chapaa" width={549} height={154} priority />
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#how">How it works</a>
          <a href="#group">Group savings</a>
          <a href="#products">Products</a>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-primary" href="#download">
          Get the app
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>
            Saving money, the way <em>Tanzanians</em> actually save.
          </h1>
          <div className="pillars">
            <div className="pillar">
              <b>Save</b>
              <p>Set a goal, top up from your phone, watch it grow.</p>
              <a className="link" href="#how">Start a goal →</a>
            </div>
            <div className="pillar">
              <b>Chama</b>
              <p>Two or more people, one shared goal, every shilling accounted for.</p>
              <a className="link" href="#group">See group savings →</a>
            </div>
            <div className="pillar">
              <b>Give</b>
              <p>Pool money for a wedding, a funeral, a cause, and show everyone who gave what.</p>
              <a className="link" href="#products">Learn more →</a>
            </div>
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#download">Get the app</a>
            <span className="muted">Free to open · Withdraw to any bank in Tanzania</span>
          </div>
        </div>
        <KangaPanel />
      </div>
    </section>
  );
}

export function Banner() {
  return (
    <div className="banner">
      <div className="wrap">
        <div>
          <h2>Open a goal in 30 seconds.</h2>
          <div className="rails">
            {PAYMENT_RAILS.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>
        <a className="btn btn-dark" href="#download">Download app</a>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="block" id="how">
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">How it works</span>
          <h2>Easy steps to your first goal</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="shot">
              <Phone>
                <div className="ph-h">New goal</div>
                <div className="ph-sub">What are you saving for?</div>
                <Field label="Mama's shop stock" value="✎" />
                <Field label="Target" value="TSh 600,000" />
                <Field label="By" value="20 Dec 2026" />
                <div className="ph-sub">
                  That is <b>TSh 60,000</b> a week. Easy.
                </div>
                <div className="ph-btn">Create goal</div>
              </Phone>
            </div>
            <h3>Name it</h3>
            <p>Pick what you are saving for, the amount and the date. Chapaa tells you what to set aside each week.</p>
          </div>
          <div className="step">
            <div className="shot">
              <Phone>
                <div className="ph-h">Top up</div>
                <div className="ph-sub">Choose how you pay</div>
                <div className="ph-pay">
                  <span className="on">M-Pesa</span>
                  <span>Airtel Money</span>
                  <span>Mixx by Yas</span>
                  <span>HaloPesa</span>
                </div>
                <Field label="Amount" value="TSh 60,000" />
                <Field label="Repeat" value="Every Friday" />
                <div className="ph-btn">Confirm with PIN</div>
              </Phone>
            </div>
            <h3>Top up from your phone</h3>
            <p>Pay from any mobile money wallet. Set it to repeat and you never have to remember again.</p>
          </div>
          <div className="step">
            <div className="shot">
              <Phone>
                <div className="ph-h">Mama&apos;s shop stock</div>
                <div className="ph-sub">On track · finishes 13 Dec</div>
                <div className="ph-big">TSh 420,000</div>
                <Bar pct={70} />
                <Row label="Fri 2 Oct" value="+60,000" />
                <Row label="Fri 25 Sep" value="+60,000" />
                <Row label="Fri 18 Sep" value="+60,000" />
                <div className="ph-btn" style={{ background: "var(--navy)" }}>Withdraw to bank</div>
              </Phone>
            </div>
            <h3>Watch it grow, then cash out</h3>
            <p>See the finish date move closer every week. When you get there, send it to any bank account you like.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GroupSavings() {
  return (
    <section className="block band-navy" id="group">
      <div className="wrap">
        <div className="sec-head">
          <span className="kicker">Group savings</span>
          <h2>Two or more people. One goal. Zero arguments.</h2>
          <p className="lede">
            Start a group for anything with a number on it: a chama cycle, Grandma&apos;s medical bill, the office
            end-of-year party, a friend&apos;s wedding. Everyone contributes from their own phone and everyone sees the
            same balance.
          </p>
        </div>

        <div className="feature">
          <div className="copy">
            <h3>Create the group, set the goal</h3>
            <p className="muted">
              Give it a name, a target and a deadline. Choose whether everyone pays the same or whatever they can.
              Invite members with a link or a phone number; they are in as soon as they accept.
            </p>
            <ul>
              <li>Equal shares or free contributions</li>
              <li>Set contribution reminders for the whole group</li>
              <li>Members join by phone number, no forms</li>
            </ul>
          </div>
          <div className="shot">
            <Phone>
              <div className="ph-h">New group</div>
              <div className="ph-sub">Save together for one goal</div>
              <Field label="Baba Juma's send-off" value="✎" />
              <Field label="Target" value="TSh 2,000,000" />
              <Field label="Members" value="8 invited" />
              <Field label="Shares" value="Equal · 250,000" />
              <div className="avs">
                {["AM", "JK", "NN", "ZB", "FM"].map((a) => (
                  <span key={a}>{a}</span>
                ))}
                <span className="add">+3</span>
              </div>
              <div className="ph-btn">Send invites</div>
            </Phone>
          </div>
        </div>

        <div className="feature">
          <div className="copy">
            <h3>Everyone pays in, everyone sees it</h3>
            <p className="muted">
              Each contribution shows up with a name and a time, so nobody has to ask &quot;did you send yours?&quot; in
              the WhatsApp group. The balance is live, straight from the bank.
            </p>
            <ul>
              <li>Live balance and full contribution history</li>
              <li>Gentle nudges to members who are behind</li>
              <li>Monthly statement for the group treasurer</li>
            </ul>
          </div>
          <div className="shot">
            <Phone>
              <div className="ph-h">Baba Juma&apos;s send-off</div>
              <div className="ph-sub">6 of 8 members paid</div>
              <div className="ph-big">TSh 1,500,000</div>
              <Bar pct={75} />
              <Row label="Amina" value="Paid" status="ok" />
              <Row label="Joseph" value="Paid" status="ok" />
              <Row label="Neema" value="Paid" status="ok" />
              <Row label="Zuberi" value="Reminded" status="wait" />
              <Row label="Fatma" value="Pending" status="wait" />
            </Phone>
          </div>
        </div>

        <div className="feature">
          <div className="copy">
            <h3>Pay out only when the admins agree</h3>
            <p className="muted">
              Money leaves the group only after the admins you chose approve it. Send the whole amount to one person or
              split it between several members&apos; bank accounts.
            </p>
            <ul>
              <li>Two-of-three admin approval, or whatever you set</li>
              <li>Split payouts across several bank accounts</li>
              <li>Every payout recorded with who approved it</li>
            </ul>
          </div>
          <div className="shot">
            <Phone>
              <div className="ph-h">Payout request</div>
              <div className="ph-sub">Needs 2 of 3 admin approvals</div>
              <Field label="To" value="Mama Juma · CRDB" />
              <Field label="Amount" value="TSh 2,000,000" />
              <Row label="Amina (admin)" value="Approved" status="ok" />
              <Row label="Joseph (admin)" value="Approved" status="ok" />
              <Row label="Neema (admin)" value="Waiting" status="wait" />
              <div className="ph-btn">Release payout</div>
            </Phone>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  { ic: "S", title: "Personal goals", body: "One pocket per goal. School fees never mix with the holiday money.", cta: "Start a goal →", href: "#how" },
  { ic: "G", title: "Group savings", body: "Two or more people save toward one target, with admin-approved payouts.", cta: "Create a group →", href: "#group" },
  { ic: "A", title: "Auto-save", body: "Weekly or on payday. Pause whenever life happens, without losing a thing.", cta: "Set it up →", href: "#how" },
];

export function Products() {
  return (
    <section className="block" id="products">
      <div className="wrap">
        <div className="sec-head">
          <span className="kicker">Products</span>
          <h2>Everything you need, in one app</h2>
        </div>
        <div className="cards">
          {PRODUCTS.map((p) => (
            <div className="card" key={p.title}>
              <div className="ic">{p.ic}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <a className="link" href={p.href}>{p.cta}</a>
            </div>
          ))}
          <div className="card">
            <span className="soon">Coming soon</span>
            <div className="ic">%</div>
            <h3>Interest on savings</h3>
            <p>Earn on what you keep, paid by our partner bank straight into your goal.</p>
            <a className="link" href="mailto:hello@chapaa.co.tz?subject=Interest%20waitlist">Join waitlist →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FACTS = [
  ["Held at a licensed bank", "Funds sit in segregated customer accounts, ring-fenced from Chapaa's own money."],
  ["Withdraw to any bank, any time", "Your savings go to the bank account you choose. No lock-in, no hidden fees."],
  ["Verified people only", "Every account is ID-verified. Suspicious activity is flagged before money moves."],
  ["Your data stays yours", "Handled under Tanzania's Personal Data Protection Act, 2022. We never sell it."],
];

export function Safety() {
  return (
    <section className="block safety-band" id="safety">
      <div className="wrap safety">
        <div className="copy">
          <span className="kicker">Your money</span>
          <h2>Chapaa plans. A licensed bank holds.</h2>
          <p className="lede">
            Chapaa is not a bank, and we never touch your money ourselves. Every deposit sits in a safeguarded account
            at our partner bank, regulated by the Bank of Tanzania. We build the app; they keep the vault.
          </p>
        </div>
        <div className="facts">
          {FACTS.map(([title, body], i) => (
            <div className="fact" key={title}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["Is Chapaa a bank?", "No. Chapaa is a savings app. All customer money is held by a licensed partner bank regulated by the Bank of Tanzania. Chapaa builds the goals, groups and reminders; the bank holds the funds."],
  ["How many people can be in a group?", "A group needs at least two members and can grow to a full chama. Each group has at least one admin, and you decide how many admins must approve before money is paid out."],
  ["Which mobile money services can I use?", "M-Pesa, Airtel Money, Mixx by Yas and HaloPesa, as well as bank transfers and cards."],
  ["Can I take my money out early?", "Yes. It is your money. Withdrawals go to any bank account in Tanzania. For group goals, the payout follows the approval rule the group set."],
  ["Does it cost anything?", "Opening goals and groups is free. Mobile money operators may charge their usual transfer fees, which we show before you confirm."],
];

export function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">FAQ</span>
          <h2>Got questions? We can help.</h2>
        </div>
        <div className="faq">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="download">
      <div className="wrap">
        <div className="top">
          <div className="brand">
            <Image className="logo" src="/logo.png" alt="Chapaa" width={549} height={154} />
            <div className="motto">Pamoja Tunafanikisha!</div>
            <p>A savings and goals app for Tanzania. Save alone or with your people, and withdraw to any bank.</p>
            <div className="stores">
              <a className="store" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                <GooglePlayIcon />
                <span><small>Get it on</small><b>Google Play</b></span>
              </a>
              <a className="store" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <AppleIcon />
                <span><small>Download on the</small><b>App Store</b></span>
              </a>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><a href="#how">Personal goals</a></li>
              <li><a href="#group">Group savings</a></li>
              <li><a href="#products">Auto-save</a></li>
              <li><a href="#products">Interest (soon)</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li><a href="#safety">Partner bank</a></li>
              <li>Careers</li>
              <li>Press</li>
              <li><a href="https://web.chapaa.co.tz/legal/terms.html" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a></li>
              <li><a href="https://web.chapaa.co.tz/legal/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@chapaa.co.tz">hello@chapaa.co.tz</a></li>
              <li>Dar es Salaam, Tanzania</li>
              <li>Instagram · X · LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Chapaa. All rights reserved.</span>
          <span>
            <a href="https://web.chapaa.co.tz/legal/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            {" · "}
            <a href="https://web.chapaa.co.tz/legal/terms.html" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
            {" · "}Complaints
          </span>
        </div>
      </div>
    </footer>
  );
}
