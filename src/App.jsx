import { motion as Motion } from "framer-motion";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15", label: "Team Members Led" },
  { value: "40%", label: "Faster Regression" },
  { value: "RAG", label: "AI Tool Builder" },
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

function App() {
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
        <div className="space-objects" aria-hidden="true">
          <span className="planet planet-blue" />
          <span className="planet planet-ring" />
          <span className="satellite" />
        </div>
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />
        <div className="hero-feature-strip" aria-hidden="true">
          <span>AI Assisted QA</span>
          <span>WPF Test Engines</span>
          <span>Team Leadership</span>
        </div>
        <Motion.div className="hero-grid" initial="hidden" animate="show">
          <Motion.div variants={reveal} className="hero-copy">
            <p className="eyebrow">Automation Team Lead | WPF Automation | AI + RAG Builder</p>
            <h1>Building futuristic automation engines for real-world testing.</h1>
            <p className="hero-text">
              Automation Engineer with 4+ years across web, mobile, WPF, and industrial validation.
              Currently at ASM Technology, leading 15 members and building a FlAUI-based WPF automation engine.
            </p>
            <div className="ai-highlight">
              <FaBrain />
              <div>
                <strong>WPF RAG Tool</strong>
                <span>Built an AI-powered desktop knowledge assistant using retrieval workflows, contextual search, and LLM response generation.</span>
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
                <p><b>Role</b> Team Lead, Automation Engineer</p>
                <p><b>Engine</b> WPF + FlAUI + C# + .NET</p>
                <p><b>AI</b> WPF RAG Tool and automation productivity workflows</p>
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

      <section id="experience" className="panel experience-panel">
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
      </section>

      <section id="projects" className="panel projects-panel">
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

      <section id="skills" className="panel skills-panel">
        <div className="black-hole" aria-hidden="true">
          <span className="black-hole-core" />
          <span className="black-hole-ring ring-one" />
          <span className="black-hole-ring ring-two" />
          <span className="black-hole-particle particle-one">AI</span>
          <span className="black-hole-particle particle-two">.NET</span>
          <span className="black-hole-particle particle-three">QA</span>
          <span className="black-hole-particle particle-four">C#</span>
        </div>
        <div className="skills-visual" aria-hidden="true">
          <span className="chip chip-one">AI</span>
          <span className="chip chip-two">.NET</span>
          <span className="chip chip-three">QA</span>
          <span className="beam beam-one" />
          <span className="beam beam-two" />
        </div>
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Hover Skill Matrix</p>
          <h2>Move the cursor over a skill card to charge the indicator.</h2>
        </Motion.div>
        <div className="skill-grid">
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

      <section id="tools" className="panel tools-panel tech-stack-panel">
        <Motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">Tech Stack</p>
          <h2>Automation, AI, and engineering tools I use.</h2>
        </Motion.div>
        <div className="logo-constellation">
          {tools.map((tool) => (
            <Motion.div
              className={`tech-logo ${tool.className}`}
              key={tool.name}
              whileHover={{ y: -10, scale: 1.08 }}
            >
              {tool.icon}
              <span>{tool.name}</span>
            </Motion.div>
          ))}
          <div className="logo-horizon" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section id="education" className="panel education-panel">
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

      <section id="contact" className="panel contact-panel">
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
