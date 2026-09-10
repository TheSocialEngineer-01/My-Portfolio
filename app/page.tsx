"use client";

import React, { useEffect, useRef } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NavBar } from "@/components/NavBar";
import { HeroScroll } from "@/components/HeroScroll";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---- reveal-on-scroll + timeline fill + count-up ---- */
    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));

      const timelineEl = document.querySelector(".timeline");
      if (timelineEl) {
        const tlObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                timelineEl.classList.add("filled");
                tlObserver.unobserve(timelineEl);
              }
            });
          },
          { threshold: 0.2 }
        );
        tlObserver.observe(timelineEl);
      }

      const countEls = document.querySelectorAll("[data-count]");
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target as HTMLElement);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      countEls.forEach((el) => countObserver.observe(el));
    } else {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("in"));
      const timelineEl = document.querySelector(".timeline");
      if (timelineEl) timelineEl.classList.add("filled");
    }

    function animateCount(el: HTMLElement) {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1100;
      const start = performance.now();

      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(tick);
    }

    /* ---- tactile tilt on hover for cards ---- */
    const cleanupFns: (() => void)[] = [];
    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      const cards = document.querySelectorAll<HTMLElement>(
        ".skill-card, .project-card, .ach-card"
      );
      cards.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(
            2
          )}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
        };
        const handleMouseLeave = () => {
          card.style.transform = "";
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        cleanupFns.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });
    }

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <ScrollProgress />
      <NavBar />

      <main id="top">
        {/* HERO SECTION WITH SCROLL ANIMATION */}
        <section className="hero-scroll-wrapper relative">
          <HeroScroll />
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="wrap about-grid">
            <div className="about-card reveal">
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  marginBottom: "18px",
                }}
              >
                About me
              </h2>
              <p>
                I&apos;m currently pursuing my B.Tech in Computer Science
                Engineering at GIET University, Gunupur — right now in my 2nd
                year, 3rd semester. I&apos;m still early in the journey, learning
                steadily and building my foundation in web development with
                HTML, CSS and JavaScript.
              </p>
              <p>
                Outside of coursework, two things keep me going: football, where
                I&apos;ve learned what it actually takes to show up and work as a
                team, and content creation, where I get to think about how to
                explain and present ideas clearly — a habit that spills over into
                how I approach building things.
              </p>
              <p>
                I also completed an internship at Munition India Limited, where I
                built an offline internship management app — my first real taste
                of turning what I&apos;m learning into something that actually gets
                used.
              </p>
            </div>
            <div className="stat-card reveal">
              <div className="stat">
                <div
                  className="num"
                  data-count="8"
                  data-decimals="1"
                  data-suffix=""
                >
                  8.0
                </div>
                <div className="label">Current CGPA</div>
              </div>
              <div className="stat">
                <div className="num">3rd</div>
                <div className="label">Semester, 2nd year</div>
              </div>
              <div className="stat">
                <div
                  className="num"
                  data-count="91"
                  data-decimals="0"
                  data-suffix="%"
                >
                  91%
                </div>
                <div className="label">Matriculation score</div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>Skills</h2>
              <p>
                The core building blocks I work with right now — and keep
                sharpening.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-card reveal">
                <div className="skill-well">HTML</div>
                <h3>HTML</h3>
                <p>
                  Structuring clean, semantic pages as the foundation for
                  everything I build.
                </p>
              </div>
              <div className="skill-card reveal">
                <div className="skill-well">CSS</div>
                <h3>CSS</h3>
                <p>
                  Styling and layout — turning a plain structure into something
                  worth looking at.
                </p>
              </div>
              <div className="skill-card reveal">
                <div className="skill-well">JS</div>
                <h3>JavaScript</h3>
                <p>
                  Adding interactivity and logic to make pages actually respond
                  and work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2>Projects</h2>
              <p>What I&apos;ve actually built so far.</p>
            </div>
            <div className="project-card reveal">
              <div className="project-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 18v3" />
                </svg>
              </div>
              <div>
                <div className="project-meta">
                  Internship build · Munition India Limited
                </div>
                <h3>Offline Internship Management App</h3>
                <p className="desc">
                  Built during my internship at Munition India Limited, this app
                  manages internship records and workflows without depending on
                  a live internet connection — my first project built for real,
                  ongoing use rather than just for practice.
                </p>
                <div className="tag-row">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Offline-first</span>
                </div>
                <a
                  href="https://github.com/TheSocialEngineer-01"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: "11px 22px", fontSize: "0.9rem" }}
                >
                  View GitHub profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education">
          <div className="wrap">
            <div className="section-head">
              <h2>Education</h2>
              <p>My academic path so far.</p>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card">
                  <div className="when">Ongoing</div>
                  <h3>B.Tech, Computer Science Engineering</h3>
                  <div className="school">
                    GIET University, Gunupur — 2nd year, 3rd semester
                  </div>
                  <span className="score">CGPA 8.0</span>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card">
                  <div className="when">Intermediate</div>
                  <h3>Higher Secondary</h3>
                  <div className="school">IDM Public School, Balangir</div>
                  <span className="score">62.33%</span>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card">
                  <div className="when">Matriculation</div>
                  <h3>Secondary School</h3>
                  <div className="school">IDM Public School, Balangir</div>
                  <span className="score">91%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements">
          <div className="wrap">
            <div className="section-head">
              <h2>Achievements</h2>
              <p>Real milestones, not filler.</p>
            </div>
            <div className="ach-grid">
              <div className="ach-card reveal">
                <div className="ach-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-9m0 0-3 3m3-3-3-3M20 7v10a2 2 0 0 1-2 2H4" />
                  </svg>
                </div>
                <div>
                  <h3>Internship — Munition India Limited</h3>
                  <p>
                    Completed an internship where I designed and built an
                    offline internship management app from the ground up.
                  </p>
                </div>
              </div>
              <div className="ach-card reveal">
                <div className="ach-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M9 14l-2 7 5-3 5 3-2-7" />
                  </svg>
                </div>
                <div>
                  <h3>91% in Matriculation</h3>
                  <p>
                    Scored 91% at IDM Public School, Balangir — the strongest
                    academic result in my journey so far.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="wrap">
            <div className="contact-card reveal">
              <h2>Let&apos;s talk</h2>
              <p>
                Whether it&apos;s an opportunity, a project, or just a chat
                about football — my inbox is open.
              </p>
              <div className="contact-actions">
                <a
                  href="mailto:anubhavbudek10@gmail.com"
                  className="btn btn-primary"
                >
                  anubhavbudek10@gmail.com
                </a>
                <a
                  href="https://github.com/TheSocialEngineer-01"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © 2026 Anubhav Budek. Built with Next.js, Tailwind CSS &amp; Framer
          Motion.
        </div>
      </footer>
    </div>
  );
}
