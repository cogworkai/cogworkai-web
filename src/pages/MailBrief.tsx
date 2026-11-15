import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, CircleAlert, FileText, Info,
  Package, ShieldCheck, Smartphone, Sunrise,
} from "lucide-react";
import logo from "@/assets/cogwork-logo-v3.png";
import "./MailBrief.css";

const contact = "mailto:info@cogworkai.com?subject=MailBrief";
const appIcon = "/mail-brief/app-icon.webp";

const sample = [
  {
    icon: CircleAlert,
    tone: "action",
    label: "Action required",
    title: "Approve the project timeline",
    detail: "The design team needs your sign-off by noon.",
  },
  {
    icon: Package,
    tone: "delivery",
    label: "Orders & deliveries",
    title: "Your desk lamp arrives today",
    detail: "The carrier marked it out for delivery.",
  },
  {
    icon: Info,
    tone: "update",
    label: "FYI",
    title: "Friday’s meeting moved to 10 AM",
    detail: "The weekly team sync will start an hour earlier.",
  },
];

const features = [
  {
    icon: Sunrise,
    title: "Morning Brief",
    description: "Catch up on overnight mail in one view. Related messages are grouped by topic, and you can open the source emails or add a follow-up to your To-Do list.",
  },
  {
    icon: FileText,
    title: "One-sentence summaries",
    description: "Get the gist before opening an email. Choose a summary style that brings out the plain-language takeaway, the context, or the next action.",
  },
  {
    icon: Package,
    title: "Orders and offers in their own views",
    description: "Follow deliveries across several days and browse deals in a dedicated view. See what’s in transit or when an offer expires without searching your inbox.",
  },
];

export default function MailBrief() {
  return (
    <div className="mail-brief">
      <header className="mb-header">
        <div className="mb-container mb-header-inner">
          <a href="/" className="mb-site-logo">
            <img src={logo} alt="cogworkAI home" width="1154" height="192" />
          </a>
          <a className="mb-header-link" href={contact}>
            Contact <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section className="mb-hero">
          <div className="mb-container mb-hero-inner">
            <div className="mb-hero-copy">
              <div className="mb-product">
                <img src={appIcon} alt="" width="52" height="52" />
                <span>MailBrief</span>
              </div>
              <h1>Your inbox,<br /> <span>in brief.</span></h1>
              <p>Start with what needs your attention. MailBrief turns overnight Gmail into a Morning Brief and gives individual emails a one-sentence summary.</p>
              <div className="mb-hero-actions">
                <a className="mb-button" href="#features">
                  Explore features <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="mb-text-link" href={contact}>
                  Ask about MailBrief <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="mb-platform">
                <Smartphone size={17} aria-hidden="true" />
                For Gmail on iPhone and iPad
              </div>
            </div>

            <figure className="mb-preview">
              <div className="mb-preview-card">
                <div className="mb-preview-header">
                  <div className="mb-sunrise"><Sunrise size={24} aria-hidden="true" /></div>
                  <h2>Morning Brief</h2>
                </div>
                <ul className="mb-preview-list">
                  {sample.map(({ icon: Icon, tone, label, title, detail }) => (
                    <li key={tone} className={`mb-preview-item mb-preview-${tone}`}>
                      <Icon size={17} aria-hidden="true" />
                      <div>
                        <p className="mb-preview-label">{label}</p>
                        <p className="mb-preview-title">{title}</p>
                        <p className="mb-preview-detail">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption>Sample briefing</figcaption>
            </figure>
          </div>
        </section>

        <section className="mb-features" id="features" aria-labelledby="features-heading">
          <div className="mb-container">
            <h2 id="features-heading">From inbox to next action</h2>
            <div className="mb-feature-grid">
              {features.map(({ icon: Icon, title, description }) => (
                <article className="mb-feature" key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-privacy" aria-labelledby="privacy-heading">
          <div className="mb-container mb-privacy-inner">
            <div className="mb-privacy-copy">
              <ShieldCheck size={29} aria-hidden="true" />
              <h2 id="privacy-heading">Choose how your email is summarized</h2>
            </div>
            <div>
              <p><Check size={18} aria-hidden="true" /> Summarize mail locally with Apple’s on-device language tools.</p>
              <p><Check size={18} aria-hidden="true" /> Use your own API key for Gemini or a compatible cloud provider.</p>
              <p><Check size={18} aria-hidden="true" /> The push notification relay handles limited message metadata.</p>
            </div>
          </div>
        </section>

        <section className="mb-contact" aria-labelledby="contact-heading">
          <div className="mb-container mb-contact-inner">
            <div>
              <h2 id="contact-heading">Interested in MailBrief?</h2>
              <p>Ask us about availability or how it works.</p>
            </div>
            <a className="mb-button" href={contact}>
              Email us <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="mb-footer">
        <div className="mb-container mb-footer-inner">
          <a href="/">cogworkAI</a>
          <p>© {new Date().getFullYear()} cogworkAI</p>
        </div>
      </footer>
    </div>
  );
}
