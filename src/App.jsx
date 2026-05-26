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
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "WPF", label: "FlAUI, C#, .NET Automation" },
  { value: "20", label: "Team Members Led" },
  { value: "RAG", label: "AI Tool Builder" },
];

const heroStrengths = [
  "Automation frameworks for WPF, web, and mobile products",
  "AI-assisted QA workflows using RAG and contextual search",
  "Release validation across software, hardware, and CI pipelines",
];

const experiences = [
  {
    company: "ASM Technology Pvt Ltd",
    role: "Automation Engineer and Team Lead",
    period: "Jul 2024 - Present",
    icon: <FaUsers />,
    logo: "/logos/asm-technologies.avif",
    logoAlt: "ASM Technologies logo",
    points: [
      "Leading a 15-member automation team for mission-critical manufacturing software.",
      "Created a WPF automation test engine using FlAUI, C#, .NET, and MVVM workflows.",
      "Validating hardware-software integration, gantry movement, laser machine workflows, and CI pipelines.",
      "Collaborating with software, hardware, and embedded teams to improve release stability.",
    ],
  },
  {
    company: "CARS24 Service Private Limited",
    role: "QA Engineer",
    period: "Aug 2021 - Aug 2024",
    icon: <FaBug />,
    logo: "/logos/dsce.webp",
    logoAlt: "CARS24 logo",
    points: [
      "Validated enterprise web and mobile systems across documents, approvals, cost flows, and secure data handling.",
      "Built scalable test suites and regression workflows to support faster release cycles.",
      "Worked with product, development, QA, and DevOps teams to reduce production defects through faster triage.",
    ],
  },
];

const projects = [
  {
    title: "WPF Automation Test Engine",
    type: "ASM Technology",
    icon: <FaWindows />,
    description:
      "A reusable automation engine for WPF apps using FlAUI, C#, .NET, MVVM patterns, object locators, and component validation.",
    tags: ["WPF", "FlAUI", ".NET", "MVVM"],
  },
  {
    title: "WPF RAG Tool",
    type: "AI Project",
    icon: <FaBrain />,
    description:
      "A desktop AI assistant that uses retrieval workflows, contextual search, and LLM response generation to speed up knowledge discovery.",
    tags: ["RAG", "OpenAI", "WPF", "AI"],
  },
  {
    title: "Industrial Machine Automation",
    type: "Industrial Automation",
    icon: <FaCogs />,
    description:
      "Industrial validation flows for high-precision machine software, CI checks, hardware coordination, and release reliability.",
    tags: ["CI/CD", "Machine Control", "Validation"],
  },
];

const toolInsights = [
  {
    title: "Automation Core",
    text: "WPF automation with FlAUI, C#, .NET, reusable locators, and maintainable test engine design.",
  },
  {
    title: "AI Productivity",
    text: "RAG-based desktop tooling, OpenAI workflows, prompt design, and knowledge retrieval for faster engineering support.",
  },
  {
    title: "Delivery Stack",
    text: "Selenium, SQL, Jenkins, Jira, Git, and CI checks used to keep releases observable and stable.",
  },
];

const skillGroups = [
  {
    title: "AI and Intelligent Systems",
    icon: <SiOpenai />,
    skills: [
      { name: "RAG Workflows", level: 88 },
      { name: "LLM Integration", level: 84 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AI Tooling", level: 80 },
    ],
  },
  {
    title: "Desktop and Automation",
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
  { icon: <FaLayerGroup />, name: "Ollama Local Models", className: "logo-ollama" },
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

function CyberBackdrop() {
  return (
    <video
      className="cyber-bg-video"
      src="/cyber-space-web.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

function App() {
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const [activePortal, setActivePortal] = useState({ skills: false, tools: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === skillsRef.current) {
            setActivePortal((current) => ({ ...current, skills: entry.isIntersecting }));
          }
          if (entry.target === toolsRef.current) {
            setActivePortal((current) => ({ ...current, tools: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.42 }
    );

    const skillsNode = skillsRef.current;
    const toolsNode = toolsRef.current;
    if (skillsNode) observer.observe(skillsNode);
    if (toolsNode) observer.observe(toolsNode);

    return () => {
      if (skillsNode) observer.unobserve(skillsNode);
      if (toolsNode) observer.unobserve(toolsNode);
    };
  }, []);

  return (
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

      <section id="home" className="panel hero-panel">
        <div className="aurora-scene" aria-hidden="true">
          <span className="aurora-ribbon ribbon-one" />
          <span className="aurora-ribbon ribbon-two" />
          <span className="aurora-ribbon ribbon-three" />
          <span className="moon-glow" />
          <span className="mountain mountain-back" />
          <span className="mountain mountain-front" />
        </div>
        <div className="hero-feature-strip" aria-hidden="true">
          <span>AI Assisted QA</span>
          <span>WPF Automation</span>
          <span>Release Confidence</span>
        </div>
        <Motion.div className="hero-grid" initial="hidden" animate="show">
          <Motion.div variants={reveal} className="hero-copy">
            <p className="eyebrow">Automation Team Lead | WPF Automation | AI + RAG Builder</p>
            <h1>Building reliable automation for complex products.</h1>
            <p className="hero-text">
              I help teams ship with confidence by designing automation systems that are maintainable,
              measurable, and close to real product behavior. My work spans WPF, web, mobile,
              industrial validation, and AI-assisted QA tooling.
            </p>
            <div className="hero-proof-list">
              {heroStrengths.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="ai-highlight">
              <FaBrain />
              <div>
                <strong>Current focus</strong>
                <span>Leading automation delivery at ASM Technology while building a FlAUI-based WPF engine and a RAG desktop assistant for faster knowledge discovery.</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                Explore Work <FaArrowRight />
              </a>
              <a className="ghost-btn" href="#contact">Contact Me</a>
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
                <p><b>Role</b> Automation Engineer and Team Lead</p>
                <p><b>Stack</b> WPF, FlAUI, C#, .NET, Selenium, SQL</p>
                <p><b>Impact</b> Better regression coverage, clearer release checks, faster triage</p>
              </div>
            </div>
          </Motion.div>
        </Motion.div>

        <div className="stats-row">
          {stats.map((stat) => (
            <Motion.div className="stat-card" key={stat.label} whileHover={{ y: -8 }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="panel experience-panel cyber-video-panel">
        <CyberBackdrop />
        <div className="space-objects" aria-hidden="true">
          <span className="planet planet-small" />
          <span className="orbit-line" />
        </div>
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Professional Experience</p>
          <h2>Leadership, delivery, and automation engineering.</h2>
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
        <div className="experience-edge-blackhole" aria-hidden="true">
          <video className="blackhole-video" src="/blackHoleee-2.webm" autoPlay muted loop playsInline />
        </div>
      </section>

      <section id="projects" className="panel projects-panel cyber-video-panel">
        <CyberBackdrop />
        <div className="project-edge-blackhole" aria-hidden="true">
          <video className="blackhole-video" src="/blackHoleee-2.webm" autoPlay muted loop playsInline />
        </div>
        <div className="space-objects" aria-hidden="true">
          <span className="planet planet-ring project-planet" />
          <span className="satellite project-satellite" />
        </div>
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Highlighted Projects</p>
          <h2>Systems that show automation thinking, not just test scripts.</h2>
        </Motion.div>
        <div className="project-grid">
          {projects.map((project) => (
            <Motion.article className="project-card" key={project.title} whileHover={{ y: -10 }} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
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
        className={`panel skills-panel cyber-video-panel portal-section ${activePortal.skills ? "portal-active" : ""}`}
      >
        <CyberBackdrop />
        <div className="skill-blackhole" aria-hidden="true">
          <video className="blackhole-video" src="/blackHoleee-2.webm" autoPlay muted loop playsInline />
          <span className="black-hole-core" />
          <span className="black-hole-disc disc-one" />
          <span className="black-hole-disc disc-two" />
          <span className="black-hole-disc disc-three" />
          <span className="skill-orb orb-ai">AI</span>
          <span className="skill-orb orb-net">.NET</span>
          <span className="skill-orb orb-qa">QA</span>
          <span className="skill-orb orb-csharp">C#</span>
        </div>
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Hover Skill Matrix</p>
          <h2>Move the cursor over a skill card to charge the indicator.</h2>
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
        <CyberBackdrop />
        <div className="tools-layout">
          <Motion.div className="section-heading tools-copy" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="eyebrow">Skill Tools</p>
            <h2>Tools arranged around the way I actually build.</h2>
            <p>
              My stack is centered on automation quality: stable object discovery, readable test design,
              CI feedback, data validation, and AI helpers that reduce repeated investigation work.
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
              <video className="tool-matrix-video" src="/blackHole-card-1.webm" autoPlay muted loop playsInline />
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

      <section id="education" className="panel education-panel cyber-video-panel">
        <CyberBackdrop />
        <div className="education-visual" aria-hidden="true">
          <span className="person person-one" />
          <span className="person person-two" />
          <span className="book book-one" />
          <span className="book book-two" />
        </div>
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Education</p>
          <h2>Academic foundation behind my engineering path.</h2>
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

      <section id="contact" className="panel contact-panel cyber-video-panel">
        <CyberBackdrop />
        <div className="contact-visual" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="contact-people" aria-hidden="true">
          <span className="walking-person person-a" />
          <span className="walking-person person-b" />
          <span className="message-bubble bubble-a">Hello</span>
          <span className="message-bubble bubble-b">Build?</span>
        </div>
        <Motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Contact</p>
          <h2>Ready to build automation that feels intelligent and reliable.</h2>
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
  );
}

export default App;
