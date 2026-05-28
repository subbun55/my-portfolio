import { motion as Motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBrain,
  FaBug,
  FaCode,
  FaCogs,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGitAlt,
  FaJava,
  FaLayerGroup,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPython,
  FaReact,
  FaRobot,
  FaTools,
  FaUsers,
  FaWindows,
} from "react-icons/fa";
import {
  SiDotnet,
  SiJenkins,
  SiJira,
  SiMysql,
  SiOpenai,
  SiSelenium,
} from "react-icons/si";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const stats = [
  { value: "4+", label: "Years in QA Automation" },
  { value: "15", label: "Engineers Led" },
  { value: "FlAUI", label: "WPF Test Engine" },
  { value: "RAG", label: "AI Assistant Built" },
];

const heroStrengths = [
  "Leading a 15-engineer automation team for mission-critical manufacturing software",
  "Built a FlAUI + .NET test engine that drives production release validation",
  "Shipped a RAG desktop assistant that compresses investigation from hours to minutes",
];

const experiences = [
  {
    company: "ASM Technology Pvt Ltd",
    role: "Automation Engineer & Team Lead",
    period: "Jul 2024 — Present",
    icon: <FaUsers />,
    logo: "/logos/asm-technologies.avif",
    logoAlt: "ASM Technologies logo",
    points: [
      "Lead a 15-engineer automation team owning release validation for precision manufacturing software.",
      "Designed a reusable WPF automation engine on FlAUI, C#, .NET and MVVM that replaced fragile script-based suites.",
      "Drive hardware-software integration testing across gantry motion, laser machines and CI pipelines.",
      "Partner with software, hardware and embedded teams to raise release confidence and cut regression time.",
    ],
  },
  {
    company: "CARS24 Service Private Limited",
    role: "QA Engineer",
    period: "Aug 2021 — Aug 2024",
    icon: <FaBug />,
    logo: "/logos/dsce.webp",
    logoAlt: "CARS24 logo",
    points: [
      "Validated enterprise web and mobile flows across documents, approvals, cost pipelines and secure data handling.",
      "Built scalable regression suites that supported faster release cadence without sacrificing coverage.",
      "Worked cross-functionally with product, dev, QA and DevOps to shrink triage time and reduce production defects.",
    ],
  },
];

const projects = [
  {
    title: "WPF Automation Test Engine",
    type: "ASM Technology",
    icon: <FaWindows />,
    description:
      "A reusable automation engine for WPF applications built on FlAUI, C# and .NET — MVVM-aware, locator-driven, and designed to outlive UI churn.",
    tags: ["WPF", "FlAUI", ".NET", "MVVM"],
  },
  {
    title: "WPF RAG Assistant",
    type: "AI Project",
    icon: <FaBrain />,
    description:
      "A desktop AI assistant that retrieves context from internal docs and code, then uses an LLM to answer engineering questions in seconds instead of hours.",
    tags: ["RAG", "OpenAI", "WPF", "AI"],
  },
  {
    title: "Industrial Machine Automation",
    type: "Industrial Automation",
    icon: <FaCogs />,
    description:
      "End-to-end validation flows for high-precision machine software — CI checks, hardware coordination, and release-readiness signals teams actually trust.",
    tags: ["CI/CD", "Machine Control", "Validation"],
  },
];

const toolInsights = [
  {
    title: "Automation Core",
    text: "WPF automation on FlAUI, C# and .NET — reusable locators, MVVM-aware patterns, and a test engine built to last.",
  },
  {
    title: "AI Productivity",
    text: "RAG desktop tooling, OpenAI workflows, prompt design and knowledge retrieval that takes load off engineers.",
  },
  {
    title: "Delivery Stack",
    text: "Selenium, SQL, Jenkins, Jira and Git — wired into CI checks that keep releases observable and stable.",
  },
];

const skillGroups = [
  {
    title: "AI & Intelligent Systems",
    icon: <SiOpenai />,
    skills: [
      { name: "RAG Workflows", level: 88 },
      { name: "LLM Integration", level: 84 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AI Tooling", level: 80 },
    ],
  },
  {
    title: "Desktop & Automation",
    icon: <FaRobot />,
    skills: [
      { name: "WPF Automation", level: 92 },
      { name: "FlAUI", level: 90 },
      { name: "Selenium WebDriver", level: 90 },
      { name: "Test Engine Design", level: 86 },
    ],
  },
  {
    title: "Engineering Stack",
    icon: <FaLayerGroup />,
    skills: [
      { name: "C# / .NET", level: 90 },
      { name: "Java", level: 84 },
      { name: "SQL / MySQL", level: 86 },
      { name: "React", level: 72 },
    ],
  },
];

const tools = [
  { icon: <SiDotnet />, name: ".NET", className: "logo-dotnet" },
  { icon: <FaCode />, name: "C#", className: "logo-csharp" },
  { icon: <FaWindows />, name: "WPF", className: "logo-wpf" },
  { icon: <SiSelenium />, name: "Selenium", className: "logo-selenium" },
  { icon: <SiOpenai />, name: "OpenAI", className: "logo-openai" },
  { icon: <FaJava />, name: "Java", className: "logo-java" },
  { icon: <FaPython />, name: "Python", className: "logo-python" },
  { icon: <SiMysql />, name: "MySQL", className: "logo-mysql" },
  { icon: <SiJenkins />, name: "Jenkins", className: "logo-jenkins" },
  { icon: <SiJira />, name: "Jira", className: "logo-jira" },
  { icon: <FaGitAlt />, name: "Git", className: "logo-git" },
  { icon: <FaReact />, name: "React", className: "logo-react" },
  { icon: <FaDatabase />, name: "SQL", className: "logo-sql" },
  { icon: <FaTools />, name: "FlAUI", className: "logo-flaui" },
  { icon: <FaCode />, name: "VS Code", className: "logo-vscode" },
  { icon: <FaWindows />, name: "Visual Studio", className: "logo-vs" },
  { icon: <SiOpenai />, name: "ChatGPT", className: "logo-chatgpt" },
  { icon: <FaRobot />, name: "Codex", className: "logo-codex" },
  { icon: <FaBrain />, name: "Antigravity", className: "logo-antigravity" },
  { icon: <FaLayerGroup />, name: "Ollama", className: "logo-ollama" },
];

const education = [
  {
    school: "Dayananda Sagar College of Engineering",
    degree: "Bachelor of Engineering, Mechanical Engineering",
    year: "2021",
    logo: "/logos/dsce-circle.webp",
    logoAlt: "Dayananda Sagar College of Engineering logo",
  },
  {
    school: "Sri Taralabalu Jagadguru Polytechnic",
    degree: "Diploma in Mechanical Engineering",
    year: "2018",
    logo: "/logos/sri-taralabalu-polytechnic.webp",
    logoAlt: "Sri Taralabalu Jagadguru Polytechnic logo",
  },
  {
    school: "Govt. PU College, Sagar",
    degree: "PUC, 12th Grade, PCMB",
    year: "2014",
    logo: "/logos/karnataka-board.avif",
    logoAlt: "Karnataka board logo",
  },
  {
    school: "Sri Ramakrishna Vidyalaya, Sagar",
    degree: "SSLC, 10th Grade",
    year: "2012",
    logo: "/logos/sri-ramakrishna-vidyalaya.jpg",
    logoAlt: "Sri Ramakrishna Vidyalaya logo",
  },
];

function BackgroundLayer({ heroVisible, showCyber }) {
  return (
    <div className="bg-layer" aria-hidden="true">
      <video
        className={`bg-video bg-aurora ${heroVisible ? "is-active" : ""}`}
        src="/northern-lights.mp4"
        poster="/aurora-hero.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {showCyber && (
        <video
          className={`bg-video bg-cyber ${heroVisible ? "" : "is-active"}`}
          src="/cyber-space.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      <div className="bg-overlay" />
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [showCyber, setShowCyber] = useState(false);
  const [activePortal, setActivePortal] = useState({ skills: false, tools: false });

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setShowCyber(true);
      },
      { threshold: 0.2 }
    );
    const portalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === skillsRef.current) {
            setActivePortal((c) => ({ ...c, skills: entry.isIntersecting }));
          }
          if (entry.target === toolsRef.current) {
            setActivePortal((c) => ({ ...c, tools: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.42 }
    );

    const heroNode = heroRef.current;
    const skillsNode = skillsRef.current;
    const toolsNode = toolsRef.current;
    if (heroNode) heroObserver.observe(heroNode);
    if (skillsNode) portalObserver.observe(skillsNode);
    if (toolsNode) portalObserver.observe(toolsNode);

    return () => {
      heroObserver.disconnect();
      portalObserver.disconnect();
    };
  }, []);

  return (
    <>
      <BackgroundLayer heroVisible={heroVisible} showCyber={showCyber} />

      <main className="portfolio-shell">
        <nav className="site-nav">
          <a className="brand" href="#home">Subramanya N</a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#tools">Tools</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" ref={heroRef} className="panel hero-panel">
          <Motion.div className="hero-grid" initial="hidden" animate="show">
            <Motion.div variants={reveal} className="hero-copy">
              <p className="eyebrow">Automation Team Lead · AI + RAG Builder · Bangalore</p>
              <h1>Shipping reliable automation, powered by AI.</h1>
              <p className="hero-text">
                I lead a 15-engineer automation team building the systems that keep precision
                manufacturing software stable in production. My work blends WPF test engines,
                CI validation and AI-assisted QA tooling that compresses days of investigation
                into minutes.
              </p>
              <div className="hero-proof-list">
                {heroStrengths.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="ai-highlight">
                <FaBrain />
                <div>
                  <strong>Currently building</strong>
                  <span>A FlAUI-based WPF test engine and a RAG desktop assistant — turning institutional knowledge into instant, queryable answers for engineers.</span>
                </div>
              </div>
              <div className="hero-actions">
                <a className="primary-btn" href="#projects">
                  Explore Work <FaArrowRight />
                </a>
                <a className="ghost-btn" href="#contact">Get in Touch</a>
              </div>
            </Motion.div>

            <Motion.div variants={reveal} className="holo-card">
              <div className="holo-screen">
                <span className="scan-line" />
                <div className="screen-top">
                  <span />
                  <span />
                  <span />
                  <p>Automation Core</p>
                </div>
                <div className="circuit-visual">
                  <div className="core-node"><FaRobot /></div>
                  <span className="node node-a">WPF</span>
                  <span className="node node-b">AI</span>
                  <span className="node node-c">CI</span>
                  <span className="node node-d">QA</span>
                </div>
                <div className="profile-lines">
                  <p><b>Role</b> Automation Engineer & Team Lead</p>
                  <p><b>Stack</b> WPF · FlAUI · C# · .NET · Selenium · SQL</p>
                  <p><b>Impact</b> Stable releases, faster triage, fewer escapes</p>
                </div>
              </div>
            </Motion.div>
          </Motion.div>

          <div className="stats-row">
            {stats.map((stat) => (
              <Motion.div className="stat-card" key={stat.label} whileHover={{ y: -6 }}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="panel experience-panel">
          <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Experience</p>
            <h2>Where I've built, shipped and led.</h2>
          </Motion.div>
          <div className="experience-list">
            {experiences.map((item) => (
              <Motion.article className="experience-card" key={item.company} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
                <div className="experience-meta">
                  <span className="company-logo">
                    <img src={item.logo} alt={item.logoAlt} />
                  </span>
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>
                <div className="experience-points">
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <div className="section-divider-blackhole" aria-hidden="true">
          <video className="blackhole-video" src="/blackHoleee-2.webm" autoPlay muted loop playsInline preload="metadata" />
        </div>

        <section id="projects" className="panel projects-panel">
          <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Projects</p>
            <h2>Systems, not just scripts.</h2>
          </Motion.div>
          <div className="project-grid">
            {projects.map((project) => (
              <Motion.article className="project-card" key={project.title} whileHover={{ y: -8 }} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="project-icon">{project.icon}</span>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <div>
                  {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className={`panel skills-panel portal-section ${activePortal.skills ? "portal-active" : ""}`}
        >
          <div className="skill-blackhole" aria-hidden="true">
            <video className="blackhole-video" src="/blackHoleee-2.webm" autoPlay muted loop playsInline preload="metadata" />
            <span className="skill-orb orb-ai">AI</span>
            <span className="skill-orb orb-net">.NET</span>
            <span className="skill-orb orb-qa">QA</span>
            <span className="skill-orb orb-csharp">C#</span>
          </div>
          <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Skills</p>
            <h2>What I bring to the table.</h2>
          </Motion.div>
          <div className="skill-grid blackhole-pop-grid">
            {skillGroups.map((group) => (
              <Motion.article className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="skill-title">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                {group.skills.map((skill) => (
                  <div className="skill-row" key={skill.name} style={{ "--level": `${skill.level}%` }}>
                    <div className="skill-info">
                      <strong>{skill.name}</strong>
                      <em>{skill.level}%</em>
                    </div>
                    <div className="skill-track">
                      <span />
                    </div>
                  </div>
                ))}
              </Motion.article>
            ))}
          </div>
        </section>

        <section
          id="tools"
          ref={toolsRef}
          className={`panel tools-panel tech-stack-panel cyber-video-panel portal-section ${activePortal.tools ? "portal-active" : ""}`}
        >
          <div className="tools-layout">
            <Motion.div className="section-heading tools-copy" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="eyebrow">Tools</p>
              <h2>The stack I trust in production.</h2>
              <p>
                My stack is built around automation that holds up: stable object discovery,
                readable test design, CI feedback that engineers actually act on, data validation,
                and AI helpers that take the repetitive work off the team.
              </p>
              <div className="tool-insights">
                {toolInsights.map((item) => (
                  <article key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </article>
                ))}
              </div>
            </Motion.div>

            <div className="logo-constellation">
              <div className="wormhole-visual" aria-hidden="true">
                <video className="tool-matrix-video" src="/blackHole-card-1.webm" autoPlay muted loop playsInline preload="metadata" />
                <span />
                <span />
                <span />
                <span />
              </div>
              {tools.map((tool) => (
                <Motion.div
                  className={`tech-logo ${tool.className}`}
                  key={tool.name}
                  whileHover={{ y: -8, scale: 1.06 }}
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="panel education-panel">
          <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Education</p>
            <h2>The foundation behind the engineering.</h2>
          </Motion.div>
          <div className="education-list">
            {education.map((item) => (
              <Motion.article className="education-card" key={item.school} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <span className="education-logo">
                  <img src={item.logo} alt={item.logoAlt} />
                </span>
                <div>
                  <strong>{item.year}</strong>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact-panel">
          <Motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Contact</p>
            <h2>Let's build automation that actually holds up.</h2>
            <p className="contact-lede">
              Open to roles, collaborations and conversations around automation engineering,
              AI-assisted QA and team leadership.
            </p>
            <div className="contact-links">
              <a href="mailto:subbu.5531@gmail.com"><FaEnvelope /> subbu.5531@gmail.com</a>
              <a href="https://www.linkedin.com/in/subramanya-n-732105129/" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn <FaExternalLinkAlt />
              </a>
              <span><FaMapMarkerAlt /> Bangalore, India</span>
            </div>
          </Motion.div>
        </section>
      </main>
    </>
  );
}

export default App;
