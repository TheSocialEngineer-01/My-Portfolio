"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NavBar } from "@/components/NavBar";
import { HeroScroll } from "@/components/HeroScroll";
import { HeroBackground } from "@/components/HeroBackground";

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
    <div ref={containerRef} className="portfolio-shell relative min-h-screen">
      <div className="portfolio-background">
        <HeroBackground />
      </div>
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
            <div className="about-card reveal in">
              <h2
                className="gradient-heading"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  marginBottom: "18px",
                }}
              >
                About me
              </h2>
              <p>
                I&apos;m a tech enthusiast, developer, and cybersecurity learner
                who loves turning curiosity into things I can build and
                understand.
              </p>
              <p>
                I&apos;m fascinated by <strong>Cybersecurity, AI, and software
                development</strong>, especially the process of breaking down
                complex systems, analyzing the details, and figuring out how
                things work beneath the surface.
              </p>
              <p>
                I enjoy challenges because they force me to think differently. I
                code, experiment, create content, and constantly look for
                something new to learn.
              </p>
              <p>
                Outside the screen, I&apos;m usually playing <strong>football</strong>
                — because whether it&apos;s technology or the game, I enjoy strategy,
                competition, teamwork, and pushing myself further.
              </p>
              <p>
                <strong>
                  I don&apos;t just want to use technology. I want to understand it,
                  build it, and challenge it.
                </strong>
              </p>
            </div>
            <div className="stat-card reveal">
              <div className="about-photo">
                <Image
                  src="/profile.jpg"
                  alt="Anubhav Budek"
                  fill
                  sizes="(max-width: 820px) 100vw, 320px"
                  priority
                />
              </div>
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
              <h2 className="gradient-heading">Skills</h2>
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
              <div className="skill-card reveal">
                <div className="skill-well">JV</div>
                <h3>Java</h3>
                <p>Building a stronger foundation in programming and problem solving.</p>
              </div>
              <div className="skill-card reveal">
                <div className="skill-well">RC</div>
                <h3>React</h3>
                <p>Creating responsive interfaces from reusable components.</p>
              </div>
              <div className="skill-card reveal">
                <div className="skill-well">CT</div>
                <h3>Critical Thinking</h3>
                <p>Breaking complex problems into clear, practical steps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2 className="gradient-heading">Projects</h2>
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
            <div className="project-card reveal project-card-secondary">
              <div className="project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                  <path d="M8 7h8M8 11h6" />
                </svg>
              </div>
              <div>
                <div className="project-meta">Minor project · Campus Hub</div>
                <h3>Campus Hub Webpage</h3>
                <p className="desc">
                  A campus-focused space for solving everyday student problems:
                  finding lost items, buying and selling, exchanging notes,
                  sharing skills, and connecting with the student community.
                </p>
                <div className="tag-row">
                  <span className="tag">Campus community</span>
                  <span className="tag">Lost &amp; found</span>
                  <span className="tag">Notes exchange</span>
                  <span className="tag">Skill exchange</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESTS SECTION */}
        <section id="interests">
          <div className="wrap">
            <div className="section-head">
              <h2 className="gradient-heading">Interests</h2>
              <p>The things that keep me curious, active, and creating.</p>
            </div>
            <div className="interests-grid">
              <div className="interest-card reveal"><span>01</span><h3>Playing Football</h3><p>Strategy, teamwork, and competition away from the screen.</p></div>
              <div className="interest-card reveal"><span>02</span><h3>Travelling</h3><p>Discovering new places, people, and perspectives.</p></div>
              <div className="interest-card reveal"><span>03</span><h3>Coding</h3><p>Turning questions into experiments and useful things.</p></div>
              <div className="interest-card reveal"><span>04</span><h3>Making Content</h3><p>Explaining ideas clearly and creatively.</p></div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education">
          <div className="wrap">
            <div className="section-head">
              <h2 className="gradient-heading">Education</h2>
              <p>My academic path so far.</p>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card reveal in">
                  <div className="when">Ongoing</div>
                  <h3>Bachelor of Technology (B.Tech.) – Computer Science and Engineering</h3>
                  <div className="school">
                    GIET University, Gunupur
                  </div>
                  <p>
                    Currently pursuing my Bachelor of Technology in Computer
                    Science and Engineering as a 2nd-year student. Alongside my
                    academic studies, I am exploring Cybersecurity, Artificial
                    Intelligence, and Automation, while developing my technical
                    skills through practical projects and hands-on learning.
                  </p>
                  <span className="score">CGPA 8.0</span>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card reveal in">
                  <div className="when">Intermediate</div>
                  <h3>Intermediate</h3>
                  <div className="school">IDM Public School, Balangir</div>
                  <p>
                    Completed Intermediate education with an overall score of
                    62.33%, continuing my academic journey with a focus on
                    building a foundation for higher education in technology.
                  </p>
                  <span className="score">62.33%</span>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot">
                  <span></span>
                </div>
                <div className="tl-card reveal in">
                  <div className="when">Matriculation</div>
                  <h3>Matriculation</h3>
                  <div className="school">IDM Public School, Balangir</div>
                  <p>
                    Successfully completed Matriculation with an overall score
                    of 91%. This stage provided a strong academic foundation and
                    developed the fundamentals necessary for further studies.
                  </p>
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
              <h2 className="gradient-heading">Achievements</h2>
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
              <h2 className="gradient-heading">Let&apos;s talk</h2>
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
