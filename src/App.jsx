import { useState, useEffect, useRef } from "react";
import anshuImage from "../rahul.jpg";
import homecart from "../Homecart.png";
import devtinder from "../Devtinder.png";
import rateLimiter from "../rateLimiter.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import "../styles.css";

// Add all icons to library
library.add(fas, fab);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile menu toggle handler
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Set initial theme from localStorage
  // Scroll effects and intersection observer
  const headerRef = useRef(null);
  const scrollUpRef = useRef(null);
  const sectionsRef = useRef([]);
  const navLinksRef = useRef([]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Header styling
      if (headerRef.current) {
        headerRef.current.classList.toggle("scrolled", window.scrollY > 50);
      }

      // Scroll up button
      if (scrollUpRef.current) {
        scrollUpRef.current.classList.toggle(
          "show-scroll",
          window.scrollY >= 600,
        );
      }

      // Active nav link
      const scrollY = window.pageYOffset;
      const headerHeight = headerRef.current?.offsetHeight || 70;

      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        if (sectionTop <= scrollY) {
          const sectionId = section.getAttribute("id");
          navLinksRef.current.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || "0";
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, []);

  // Remove preload class
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("preload");
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Date Display */}
      <div className="current-date-display">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>

      {/* Header */}
      <header className="main-header" ref={headerRef}>
        <nav className="container header-nav">
          <button
            className={`hamburger-menu ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <div
            className="header-links"
            ref={(el) => {
              if (el)
                navLinksRef.current = Array.from(
                  el.querySelectorAll(".nav-link"),
                );
            }}
          >
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#work" className="nav-link">
              Work
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Journey
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#achievements" className="nav-link">
              Achievements
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#work"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Work
          </a>

          <a
            href="#skills"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Journey
          </a>
          <a
            href="#projects"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a
            href="#achievements"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        ref={(el) => {
          if (el)
            sectionsRef.current = Array.from(
              el.querySelectorAll(".section[id]"),
            );
        }}
      >
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="hero-background-shapes"></div>
          <div className="container hero__container">
            <div className="hero__content">
              <img
                src={anshuImage}
                alt="Anshu Prakash Hindoyar"
                className="hero__photo"
              />
              <h1 className="hero__name">Rahul Kumar</h1>
              <p className="hero__title">software Developer</p>
              <p className="hero__tagline">
                "Result-oriented Software Development Engineering enthusiast,
                skilled in designing scalable software, debugging critical
                issues, and collaborating with teams to ensure reliable,
                impactful solutions. Strong hold on data structures and
                object-oriented programming (OOPs), with a focus on efficient
                problem-solving and creating maintainable, high-performance
                code."
              </p>
              <div className="hero__links">
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-4a3a09286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
                <a
                  href="https://github.com/Rahulkr3201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a
                  href="https://leetcode.com/u/rahulkr3201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__link"
                  aria-label="LeetCode"
                  title="LeetCode"
                >
                  <FontAwesomeIcon icon="code" />
                </a>
                <a
                  href="https://www.instagram.com/rahulkumar_3200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__link"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a
                  href="mailto:mailrahul3201@gmail.com"
                  className="hero__link"
                  aria-label="Email"
                  title="Email"
                >
                  <FontAwesomeIcon icon="envelope" />
                </a>
              </div>
              <div className="hero__cta">
                <a
                  href="https://drive.google.com/file/d/145v3nyBxuT4sZ5dPkt9ZKT55Y-ITqmPX/view?usp=drive_link"
                  target="_blank"
                  className="button button--primary"
                >
                  <FontAwesomeIcon icon="file-alt" /> View Resume
                </a>
                <a href="#projects" className="button button--secondary">
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-indicator"
            aria-label="Scroll down"
          >
            <FontAwesomeIcon icon="chevron-down" />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container about-container">
            <div className="about-content card">
              <h2 className="section__title">About Me</h2>
              <div className="section-divider"></div>
              <p>
                I’m a dedicated Software Developer with a strong foundation in
                full-stack web development, specializing in technologies like{" "}
                <span className="highlight">React, Node.js, MongoDB</span>, and{" "}
                <span className="highlight">Tailwind CSS</span>. Currently
                pursuing my B.E. at{" "}
                <span className="highlight">
                  Ramaiah Institute of Technology
                </span>
                , I’ve built and deployed scalable applications, including a{" "}
                <span className="highlight">grocery delivery platform</span>, a{" "}
                <span className="highlight">
                  blockchain-based real estate app
                </span>
                , and a <span className="highlight">modern dating app</span>.
              </p>
              <p>
                With a keen eye for clean design and efficient architecture, I
                aim to deliver user-focused solutions that solve real-world
                problems. I’ve also secured top positions in national-level
                hackathons, reflecting my commitment to{" "}
                <span className="highlight">innovation</span>,{" "}
                <span className="highlight">collaboration</span>, and{" "}
                <span className="highlight">continuous learning</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="work section">
          <div className="container">
            <h2 className="section__title">Work Experience</h2>
            <div className="section-divider"></div>

            <div className="work__grid">
              <div className="work__card card">
                <div className="work__header">
                  <h3 className="work__role">Frontend Developer Intern</h3>
                  <span className="work__duration">Aug 2025 – Sep 2025</span>
                </div>

                <p className="work__company">Techlobo Solutions · Remote</p>

                <p className="work__description">
                  Built scalable, SEO-optimized frontend applications using
                  modern React and Next.js architecture.
                </p>

                <ul className="work__list">
                  <li>
                    Improved SEO and accessibility using{" "}
                    <strong>Next.js</strong> with server-side rendering.
                  </li>
                  <li>
                    Integrated <strong>REST APIs</strong> and managed global
                    state using
                    <strong> Redux Toolkit</strong>.
                  </li>
                  <li>
                    Developed responsive UI using <strong>Tailwind CSS</strong>{" "}
                    and animations with <strong>Framer Motion</strong>.
                  </li>
                  <li>
                    Collaborated using <strong>Git & GitHub</strong> following
                    clean version control workflows.
                  </li>
                </ul>

                <div className="work__tags">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Redux Toolkit</span>
                  <span>Tailwind CSS</span>
                  <span>Framer Motion</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="container">
            <h2 className="section__title">Technical Proficiency</h2>
            <div className="section-divider"></div>
            <div className="skills__grid">
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon="brain" />
                </div>
                <h3 className="skill__title">Foundations</h3>
                <ul className="skill__list">
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                  <li>OOPs Principles</li>
                  <li>Operating System</li>
                  <li>Computer Networks</li>
                  <li>Database Management</li>
                </ul>
              </div>
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon={["fab", "react"]} />
                </div>
                <h3 className="skill__title">Frontend</h3>
                <ul className="skill__list">
                  <li>React.js </li>
                  <li>Redux </li>
                  <li>JavaScript (ES6+)</li>

                  <li>Next.js</li>
                  <li>Server Side Rendering </li>
                  <li>Search Engine Optimization </li>

                  <li>Tailwind CSS</li>
                  <li>framer motion</li>
                </ul>
              </div>
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon="server" />
                </div>
                <h3 className="skill__title">Backend</h3>
                <ul className="skill__list">
                  <li>Node.js</li>
                  <li>Express </li>
                  <li>Web Sockets</li>
                  <li>Google firebase</li>
                  <li>RESTful APIs</li>
                  <li>Jason Web Token</li>
                  <li>Microservice Co</li>
                </ul>
              </div>
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon="database" />
                </div>
                <h3 className="skill__title">Databases</h3>
                <ul className="skill__list">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>SQL / NoSQL</li>
                  <li>Database Design</li>
                </ul>
              </div>
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon="code" />
                </div>
                <h3 className="skill__title">Languages</h3>
                <ul className="skill__list">
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>HTML5</li>
                  <li>Css</li>
                </ul>
              </div>
              <div className="skill__card card">
                <div className="skill__icon">
                  <FontAwesomeIcon icon="tools" />
                </div>
                <h3 className="skill__title">Tools & technologies</h3>
                <ul className="skill__list">
                  <li>Web3</li>
                  <li>blockchain</li>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Visual Studio Code</li>
                  <li>intelliJ IDEA</li>
                  <li>Postman</li>
                  <li>Stripe</li>
                  <li>Vercel</li>
                  <li>Google Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience section">
          <div className="container">
            <h2 className="section__title">Professional Journey</h2>
            <div className="section-divider"></div>
            <div className="experience__timeline">
              <div className="timeline__item">
                <div className="timeline__point"></div>
                <div className="timeline__content card">
                  <span className="timeline__date">Education</span>
                  <h3 className="timeline__title">Academic Background</h3>
                  <p className="timeline__company">
                    Ramaiah Institute of Technology, Bangalore
                  </p>
                  <p className="timeline__description">
                    B.E. Electronics & Telecommunications (2022 - 2026 Expected)
                  </p>
                  <hr className="timeline-divider" />
                  <p className="timeline__company">
                    Delhi Public School, Ranchi
                  </p>
                  <p className="timeline__description">
                    AISSCE - (2019 - 2021)
                  </p>
                  <hr className="timeline-divider" />
                  <p className="timeline__company">
                    Vidya Vihar Residential School, Purnea
                  </p>
                  <p className="timeline__description">AISCE (2015 - 2019)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="achievements section">
          <div className="container">
            <h2 className="section__title">Achievements</h2>
            <div className="section-divider"></div>
            <div className="achievements__grid">
              <div className="achievement__card card">
                <h3>'I Love Hackathon' - 3rd Position</h3>
                <p>
                  Secured the 3rd position in the highly competitive 'I Love
                  Hackathon' Bangalore edition, competing against over 923 teams
                  from around the country. The hackathon was based on Web3 and
                  blockchain, showcasing exceptional problem-solving skills and
                  innovative approaches.
                </p>
              </div>
              <div className="achievement__card card">
                <h3>ESG AI Hackathon - IIT Madras</h3>
                <p>
                  Recognized for outstanding teamwork and problem-solving
                  abilities in the ESG AI-based hackathon hosted at IIT Madras.
                  The event focused on leveraging AI for Environmental, Social,
                  and Governance (ESG) issues, and my team was commended for
                  presenting a strong, impactful solution.
                </p>
              </div>
              <div className="achievement__card card">
                <h3>Sensory Expedition - 2nd Position</h3>
                <p>
                  Earned the 2nd position in the prestigious Sensory Expedition
                  event, organized by the IEEE Sensor Council. The competition
                  tested participants' ability to develop innovative solutions
                  using sensory technology, and I was part of a team that
                  demonstrated great creativity and technical expertise.
                </p>
              </div>
              <div className="achievement__card card">
                <h3>GDSC Coding Event - 1st Position</h3>
                <p>
                  Clinched the 1st position in a highly competitive coding event
                  organized by the Google Developer Students Club (GDSC) at RIT.
                  This event challenged participants with complex coding
                  problems, and my team was able to excel through strategic
                  planning and efficient execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section">
          <div className="container">
            <h2 className="section__title">Featured Projects</h2>
            <div className="section-divider"></div>
            <div className="projects__grid">
              {/* HomeCart */}
              <article className="project__card card">
                <div className="project__image-container">
                  <img
                    src={homecart}
                    alt="HomeCart Grocery Delivery"
                    loading="lazy"
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <a
                      href="https://github.com/Rahulkr3201/Homecart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="HomeCart GitHub"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a
                      href="https://homecart-5uh2.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="HomeCart Live Demo"
                    >
                      <FontAwesomeIcon icon="external-link-alt" />
                    </a>
                  </div>
                </div>
                <div className="project__content">
                  <h3 className="project__title">
                    HomeCart – Grocery Delivery App
                  </h3>
                  <p className="project__description">
                    Full-stack platform enabling sellers to list and manage
                    groceries, integrated with Stripe for payments and
                    Cloudinary for image uploads.
                  </p>
                  <div className="project__tags">
                    <span>MongoDB</span>
                    <span>Express.js</span>
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Tailwind CSS</span>
                    <span>Stripe</span>
                    <span>Cloudinary</span>
                    <span>Vite</span>
                  </div>
                </div>
              </article>

              {/* Real Estate Tokenization */}
              <article className="project__card card">
                <div className="project__image-container">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Real Estate Tokenization"
                    loading="lazy"
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <a
                      href="https://github.com/Rahulkr3201/RWA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="RWA GitHub"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
                <div className="project__content">
                  <h3 className="project__title">
                    Real Estate Tokenization (Web3)
                  </h3>
                  <p className="project__description">
                    Built a secure and transparent tokenization app using Web3
                    and Solidity, enabling fractional real estate ownership and
                    MetaMask-based blockchain transactions.
                  </p>
                  <div className="project__tags">
                    <span>Solidity</span>
                    <span>JavaScript</span>
                    <span>MongoDB</span>
                    <span>React</span>
                    <span>Redux</span>
                    <span>Python</span>
                  </div>
                </div>
              </article>

              {/* API Rate Limiter */}
              <article className="project__card card">
                <div className="project__image-container">
                  <img
                    src={rateLimiter} // add your rate limiter image/illustration
                    alt="API Rate Limiter"
                    loading="lazy"
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <a
                      href="https://github.com/Rahulkr3201/API-rate-limiter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="API Rate Limiter GitHub"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a
                      href="https://github.com/Rahulkr3201/API-rate-limiter#readme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="API Rate Limiter Documentation"
                    >
                      <FontAwesomeIcon icon="external-link-alt" />
                    </a>
                  </div>
                </div>

                <div className="project__content">
                  <h3 className="project__title">API Rate Limiter</h3>
                  <p className="project__description">
                    A high-performance backend system implementing the Token
                    Bucket algorithm to enforce global and per-user API rate
                    limits with concurrency safety using async locks.
                  </p>
                  <div className="project__tags">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>Token Bucket</span>
                    <span>AsyncIO</span>
                    <span>Concurrency Control</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </article>

              {/* DevTinder */}
              <article className="project__card card">
                <div className="project__image-container">
                  <img
                    src={devtinder}
                    alt="DevTinder Dating App"
                    loading="lazy"
                    className="project__image"
                  />
                  <div className="project__overlay">
                    <a
                      href="https://github.com/Rahulkr3201/love-front-deploy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="DevTinder Frontend GitHub"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a
                      href="https://love-front-deploy-6ytr.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__icon-link"
                      aria-label="DevTinder Live Demo"
                    >
                      <FontAwesomeIcon icon="external-link-alt" />
                    </a>
                  </div>
                </div>
                <div className="project__content">
                  <h3 className="project__title">
                    DevTinder – Online Dating App
                  </h3>
                  <p className="project__description">
                    A modern dating web app where users can create profiles,
                    match with others, and build meaningful connections with
                    Framer Motion animations.
                  </p>
                  <div className="project__tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>React.js</span>
                    <span>Tailwind CSS</span>
                    <span>Redux</span>
                    <span>Framer Motion</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container contact-container">
            <div className="contact-content card">
              <h2 className="section__title">Get In Touch</h2>
              <div className="section-divider"></div>
              <p>
                I'm actively exploring new opportunities and enjoy connecting
                with fellow developers and potential collaborators. Let's build
                something great together!
              </p>
              <a
                href="mailto:mailrahul3201@gmail.com"
                className="button button--primary contact__button"
              >
                <FontAwesomeIcon icon="paper-plane" /> Send Email
              </a>
              <div className="contact__social-links">
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-4a3a09286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
                <a
                  href="https://github.com/rahulkr3201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a
                  href="https://leetcode.com/u/rahulkr3201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="LeetCode"
                  title="LeetCode"
                >
                  <FontAwesomeIcon icon="code" />
                </a>
                <a
                  href="https://www.instagram.com/Rahulkumar_3200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer__container">
            <p>
              © 2024 Rahul Kumar . Designed & Built with{" "}
              <FontAwesomeIcon icon="heart" className="pulse" />.
            </p>
          </div>
        </footer>
      </div>
      {/* Scroll Up Button */}
      <a
        href="#"
        className="scrollup"
        id="scroll-up"
        aria-label="Scroll to top"
        title="Scroll to top"
        ref={scrollUpRef}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon icon="chevron-up" />
      </a>
    </div>
  );
}

export default App;
