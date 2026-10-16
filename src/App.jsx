import {
  Mail,
  ArrowUpRight,
  Download,
  Code2
} from "lucide-react";
import "./index.css";



const projects = [
  {
    number: "01",
    title: "JavaTrix",
    description:
      "A Java project focused on application development, programming logic and problem-solving.",
    tech: ["Java"],
    github: "https://github.com/canhoum/JavaTrix",
    demo: "",
    status: "Desktop Application",
  },
  {
    number: "02",
    title: "LACC Cultural Routes",
    description:
      "A cultural routes platform with an ASP.NET MVC back office and a Flutter mobile application under development.",
    tech: ["C#", "ASP.NET MVC", "REST API", "Flutter"],
    github: "https://github.com/jcnpereira/LACC-v2",
    demo: "https://apps.apple.com/pt/app/lacc/id6783327666",
    status: "Mobile Application",
  },
  {
    number: "03",
    title: "IoT Smart Pet Feeder",
    description:
      "An IoT project focused on automating pet food dispensing and integrating hardware with software.",
    tech: ["Raspberry Pi", "IoT", "Python"],
    github: "https://github.com/canhoum/FoodDispensor",
    demo: "",
    status: "IoT / Embedded Systems",
  },
  {
    number: "04",
    title: "SequeChat",
    description:
      "An Android chat application developed with Kotlin, exploring mobile application development and communication features.",
    tech: ["Kotlin", "Android"],
    github: "https://github.com/canhoum/SequeChat",
    demo: "",
    status: "Mobile Application",
  },
  {
    number: "05",
    title: "SequeMusic",
    description:
      "A music platform developed with ASP.NET Core MVC, featuring application logic, authentication and database integration.",
    tech: ["C#", "ASP.NET Core MVC", "Entity Framework", "SQL"],
    github: "https://github.com/canhoum/SequeMusic",
    demo: "",
    status: "Web Application",
  },
  {
    number: "06",
    title: "CSFloat Price Spike Alert",
    description:
      "A Python monitoring tool that checks recent Counter-Strike skin sales and sends Discord alerts when prices exceed configurable thresholds or multiples of the recent median.",
    tech: ["Python", "API Integration", "Discord Webhooks", "Data Analysis"],
    github: "https://github.com/canhoum/csfloat-price-alert",
    demo: "",
    status: "Automation & Monitoring",
  },
];


const skills = [
  "Java", "C#", "JavaScript", "Python", "React",
  "ASP.NET Core", "Flutter", "SQL", "Git", "Docker",
];

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          <Code2 size={23} /> joao<span>.dev</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">Let's talk ↗</a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" /> COMPUTER ENGINEERING
            </p>

            <h1>
              Building digital
              <br />
              experiences<span className="accent">.</span>
            </h1>

            <h2>Software Developer</h2>

            <p className="hero-description">
              I build web applications, mobile solutions and software
              that solve real-world problems. Currently finishing my
              Computer Engineering degree.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button primary">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="/cv.pdf" download className="button secondary">
                Download CV <Download size={17} />
              </a>
            </div>

            <div className="socials">
              <a href="https://github.com/canhoum"
                 target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 size={19} />
              </a>
              <a href="https://www.linkedin.com/"
                 target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Code2 size={19} />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-bar">
              <span /><span /><span />
              <p>developer.js</p>
            </div>
            <pre><code>
              <span className="code-purple">const</span> developer = {"{"}
              {"\n"}  name: <span className="code-green">"João"</span>,
              {"\n"}  degree: <span className="code-green">"Computer Engineering"</span>,
              {"\n"}  focus: [
              {"\n"}    <span className="code-green">"Web Development"</span>,
              {"\n"}    <span className="code-green">"Mobile Apps"</span>,
              {"\n"}    <span className="code-green">"Software Engineering"</span>
              {"\n"}  ],
              {"\n"}  learning: <span className="code-green">"Every day"</span>
              {"\n"}{"}"};
            </code></pre>
            <div className="terminal-footer">
              <span className="status-dot" /> Open to opportunities
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2 className="section-title">A little about me<span className="accent">.</span></h2>
          <p className="section-description">
            I am a Computer Engineering student interested in full-stack
            development, software architecture and technology. I enjoy
            turning ideas into functional applications and learning
            through hands-on projects.
          </p>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2 className="section-title">Featured projects<span className="accent">.</span></h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>              
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={17} />
                    GitHub
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">03 / TECHNOLOGIES</p>
          <h2 className="section-title">Tools I work with<span className="accent">.</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / GET IN TOUCH</p>
          <h2 className="section-title">Have a project in mind<span className="accent">?</span></h2>
          <p className="section-description">
            I am open to discussing opportunities, projects and collaborations.
          </p>          
            <a
              className="button primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jpsilva72011@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch <ArrowUpRight size={17} />
            </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">joao<span>.dev</span></a>
        <p>Designed & built with React.</p>
        <p>© {new Date().getFullYear()} João. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
