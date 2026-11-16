import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, CircleAlert, FileText, Info,
  Package, ShieldCheck, Smartphone, Sunrise,
} from "lucide-react";
import logo from "@/assets/cogwork-logo-v3.png";
import { Outlet } from "react-router-dom";

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
          <a className="mb-header-link" href="/#/mail-brief/privacy-policy">
            Privacy Policy
          </a>
          <a className="mb-header-link" href="/#/mail-brief/terms-of-service">
            Terms of Service
          </a>
          <a className="mb-header-link" href={contact}>
            Contact <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
