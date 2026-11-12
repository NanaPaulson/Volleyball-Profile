"use client";

import Image from "next/image";
import Competitions from "@/components/Competitions";
import { useEffect, useState } from "react";
import {
  Award,
  ArrowDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  Play,
  Ruler,
  UserRound,
  Users,
  Volleyball,
  X,
} from "lucide-react";
import { athlete, navItems } from "@/data/athlete";
import { achievements, highlights, type HighlightVideo } from "@/data/media";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? "section-label-light" : ""}`}><i />{children}</p>;
}

function Stat({ icon: Icon, label, children }: { icon: typeof Ruler; label: string; children: React.ReactNode }) {
  return <div className="stat-card"><span className="stat-icon"><Icon size={16} /></span><div><p>{label}</p><strong>{children}</strong></div></div>;
}

function VideoPlayer({ video }: { video: HighlightVideo }) {
  return <video controls playsInline preload="metadata" poster={video.poster} className="highlight-video">
    <source src={video.src} type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>;
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof achievements)[number] | null>(null);
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  useEffect(() => {
    if (!selectedAchievement) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedAchievement(null); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedAchievement]);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-28% 0px -58%", threshold: [0.05, 0.25, 0.6] });
    sections.forEach((section) => observer.observe(section));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".competitions-section, .reveal-on-scroll, .about-layout, .achievements-section .page-width, .film-layout, .academics-layout"));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
    return () => { observer.disconnect(); revealObserver.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, []);

  return <main>
    <header className="site-nav">
      <button className="brand" onClick={() => goTo("home")} aria-label="Return home"><span><b>TAHIRU</b> FELIX</span><small>VOLLEYBALL</small></button>
      <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map(([label, id]) => <button key={id} className={id === activeSection ? "active" : ""} onClick={() => goTo(id)}>{label}</button>)}
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </header>

    <section className="hero" id="home">
      <Image src="/images/image6.jpeg" alt="Tahiru Felix attacking above the volleyball net" fill priority quality={95} sizes="(max-width: 1023px) 100vw, 100vw" className="hero-image" />
      <Image src="/images/image6.jpeg" alt="" fill quality={75} sizes="100vw" className="hero-backdrop" aria-hidden="true" />
      <Image src="/images/image6.jpeg" alt="Tahiru Felix attacking above the volleyball net" fill priority quality={95} sizes="(max-width: 1023px) 100vw, 47vw" className="hero-foreground" />
      <div className="hero-shade" />
      <div className="hero-content page-width hero-reveal">
        <p className="hero-kicker"><i />DISCIPLINE <b>•</b> CHARACTER <b>•</b> OPPORTUNITY</p>
        <h1><span>TAHIRU</span> FELIX</h1>
        <p className="hero-role">OUTSIDE HITTER <b>|</b> OPPOSITE HITTER</p>
        <p className="hero-team">{athlete.team}<br /><span>{athlete.league}</span></p>
        <div className="hero-actions"><button className="button button-gold" onClick={() => goTo("highlights")}>Watch highlights <Play size={14} fill="currentColor" /></button><button className="button button-outline" disabled title="Recruitment profile PDF not yet supplied">Download profile <ArrowDown size={14} /></button></div>
      </div>
    </section>

    <section className="stats-wrap page-width reveal-on-scroll" aria-label="Athlete statistics">
      <Stat icon={Ruler} label="Height"><span>6&apos;3&quot;</span><small>191 cm</small></Stat>
      <Stat icon={Volleyball} label="Playing positions"><span>Outside Hitter</span><small>Opposite Hitter</small></Stat>
      <Stat icon={GraduationCap} label="Current level"><span>First-Year</span><small>Undergraduate</small></Stat>
      <Stat icon={BookOpen} label="Academics"><span>BEd</span><small>Physical Education &amp; Health</small></Stat>
    </section>

    <section className="about-section" id="profile"><div className="page-width about-layout"><div className="about-photo"><Image src="/images/image5.jpeg" alt="Portrait of Tahiru Felix in his University of Ghana kit" fill quality={95} sizes="(max-width: 1023px) 100vw, 23vw" /></div><div className="about-copy"><Label>About me</Label><h2>Versatile. Competitive.<br />Team-focused.</h2><p>Tahiru Felix is a 21-year-old Ghanaian volleyball student-athlete currently representing the University of Ghana Men&apos;s Volleyball Team in the Ghana Volleyball League.</p><p>Standing at 6 feet 3 inches, he competes as both an outside hitter and an opposite hitter.</p><div className="scholarship-highlight"><strong>Current full volleyball scholarship</strong><span>{athlete.scholarship.institution}</span></div><p>Felix is currently pursuing a Bachelor of Education in Physical Education and Health at the University of Ghana, where he is studying on a full volleyball scholarship.</p><p>In 2026, he received nominations for Best in Volleyball and Most Promising Athlete of the Year (Level 100) at the University of Ghana Students&apos; Sports Council Legacy Night.</p><p>He is seeking an opportunity to continue his academic and athletic development at a university in the United States.</p><p>His volleyball experience includes national school tournaments, the National Universities Games, and senior-level national competition in Ghana.</p></div><aside className="quote-panel"><span>&ldquo;</span><p>Committed to developing as a student-athlete and making a positive contribution on and off the court.</p><small>Recruitment profile</small></aside></div></section>

    <Competitions />

    <section className="achievements-section" id="achievements"><div className="page-width"><div className="achievements-heading"><div><Label>Recognition</Label><h2>Achievements &amp; Recognition</h2></div><p>University of Ghana Students&apos; Sports Council Legacy Night 2026</p></div><div className="achievement-grid">{achievements.map((achievement) => <article className="achievement-card" key={achievement.id}><button className="award-image-button" onClick={() => setSelectedAchievement(achievement)} aria-label={`View larger ${achievement.title} nomination poster`}><Image src={achievement.image} alt={achievement.alt} fill quality={95} sizes="(max-width: 900px) 100vw, 36vw" /></button><div className="achievement-copy"><Award size={18} /><div><strong>{achievement.title}</strong>{achievement.category && <span>{achievement.category}</span>}<small>{achievement.status} • {achievement.institution}</small></div></div></article>)}</div></div></section>

    <section className="film-section" id="highlights"><div className="page-width film-layout"><div className="film-copy"><Label light>Highlights</Label><h2>Game film</h2><p>Watch my volleyball highlights, match clips, and full matches to see my versatility and performance on the court.</p></div><div className="film-grid">{highlights.slice(0, 3).map((video) => <article className="film-card" key={video.id}><VideoPlayer video={video} /><div className="film-caption"><strong>{video.title}</strong><span>Native video playback • Controls available</span></div></article>)}</div><div className="all-highlights"><button className="button button-gold" onClick={() => setShowAllHighlights(!showAllHighlights)} aria-expanded={showAllHighlights}>{showAllHighlights ? "Hide Highlight 4" : "View all highlights"} <Play size={13} fill="currentColor" /></button>{showAllHighlights && <article className="film-card film-card-expanded"><VideoPlayer video={highlights[3]} /><div className="film-caption"><strong>{highlights[3].title}</strong><span>Native video playback • Controls available</span></div></article>}</div></div></section>

    <section className="academics-section" id="academics"><div className="page-width academics-layout"><div className="academics-copy"><Label>Academics</Label><h2>Education</h2><p>Building a strong academic foundation alongside my athletic journey.</p></div><div className="academic-cards"><div><GraduationCap /><strong>University of Ghana</strong><span>Legon, Accra, Ghana</span></div><div><BookOpen /><strong>BEd</strong><span>Physical Education and Health</span></div><div><UserRound /><strong>First Year</strong><span>Current Academic Standing</span></div><div><Users /><strong>Prospective Transfer</strong><span>Student-Athlete</span></div></div></div></section>

    <footer className="footer-section" id="contact">
      <div className="page-width contact-layout">
        <div className="contact-copy"><Label light>Contact</Label><h2>Get in touch</h2><p>For recruitment inquiries, please reach out.</p></div>
        <div className="contact-details">
          <div className="contact-location">
            <strong className="contact-country">Ghana</strong>
            <a href={`mailto:${athlete.email}`}><Mail /><span>Email<strong>{athlete.email}</strong></span></a>
          </div>
          <div className="contact-location">
            <strong className="contact-country">USA</strong>
            <a href={`mailto:${athlete.usaEmail}`}><Mail /><span>Email<strong>{athlete.usaEmail}</strong></span></a>
            <a href={`tel:${athlete.usaPhone}`}><Phone /><span>Phone<strong>{athlete.usaPhone}</strong></span></a>
          </div>
        </div>
        <a className="contact-button" href={`mailto:${athlete.email}`}>
          <span>Recruitment inquiries</span><small>Let&apos;s talk about opportunities</small><ArrowRight size={16} />
        </a>
      </div>
      <div className="footer-bottom page-width"><span>TAHIRU FELIX / VOLLEYBALL</span><span>Ghanaian student-athlete</span><span>© 2026</span></div>
    </footer>
    {selectedAchievement && <div className="award-modal" role="dialog" aria-modal="true" aria-label={`${selectedAchievement.title} nomination poster`} onClick={() => setSelectedAchievement(null)}><div className="award-modal-content" onClick={(event) => event.stopPropagation()}><button className="award-modal-close" onClick={() => setSelectedAchievement(null)} aria-label="Close nomination poster"><X size={22} /></button><Image src={selectedAchievement.image} alt={selectedAchievement.alt} fill quality={95} sizes="min(90vw, 720px)" /></div></div>}
  </main>;
}
