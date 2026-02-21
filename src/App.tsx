import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <img src="/src/assets/profile.png" alt="Your Name" />
          <span>ANSHIKA SAKLANI</span>
        </a>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#certification">CERTIFICATIONS</a></li>
            <li><a href="#achievement">ACHIEVEMENTS</a></li>
          </ul>
        </nav>
      </header>

      <div className="social-sidebar">
        <a href="https://www.linkedin.com/in/anshikasaklani111105/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/src/assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Anshika-111105" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/src/assets/github.png" alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/Anshika_0509/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/src/assets/leetcode.png" alt="LeetCode" />
        </a>
        <a href="https://www.instagram.com/i.anshikasaklani?igshid=amQxaGwxOHQ2a2M=" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/src/assets/insta.png" alt="Instagram" />
        </a>
      </div>

      <main>
        <section id="home" className="hero">
        <h1>Hey, I'm Anshika Saklani</h1>
        <p className="subtitle">
            "Turning Python scripts into production-ready predictive models — bridging the gap between data and human interaction."
        </p>
        
        <a href="#projects" className="cta-button">PROJECTS</a>
        <a 
        href="https://drive.google.com/drive/folders/1iIt0NS1ra3vc6urZtzb1sKxHRR8nqLeL" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cta-button" 
        style={{ marginLeft: '15px', backgroundColor: '#fff', border: '2px solid #FFD700' }}
        >
        <i className="fas fa-download"></i> RESUME
        </a>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="/src/assets/profile.png" alt="Your Name" />
            </div>
            <div className="about-text">
              <p>
                I am a Software Engineering student at Graphic Era Hill University driven by a simple mission: <b>making complex technology feel intuitive.</b> 
              </p>
              <p>My work lives at the intersection of Artificial Intelligence and User Experience, where I transform raw data into functional, high-performance applications.
              </p>
              <p>My Engineering Philosophy :-</p>
              <p>➤ Data-Driven Logic: I architect end-to-end ML pipelines, moving beyond basic scripts to build models that solve real-world problems.</p>
                <p>➤ Human-Centric Design: Whether it's developing Computer Vision for hand-tracking or refining frontend responsiveness, I believe great software should be invisible and user-first.</p>
                <p>➤ Scalable Architecture: I focus on writing clean, maintainable code that bridges the gap between robust backend systems and seamless digital interactions.</p>
                <p>When I’m not in the IDE, you’ll find me contributing to open Source projects, exploring new HCI research, or sharing technical insights with the dev community.</p>
            </div>
          </div>
        </section>

        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                {/* Bluestock */}
                <div className="experience-card">
                    <div className="experience-header">
                        <img
                        src="/src/assets/bluestock.jpeg"
                        alt="Bluestock Fintech"
                        className="company-logo"
                        />
                        <div className="experience-title">
                            <h3>Software Engineer Intern</h3>
                            <h4>Bluestock Fintech</h4>
                            <div className="experience-meta">
                                <span className="duration">February 2026 – April 2026</span>
                                <span className="mode">Remote</span>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Architected and developed a high-performance browser-based game engine using TypeScript and React, delivering 100% offline functionality.</li>
                    <li>Achieved 95+ Lighthouse score while maintaining bundle size under 50KB through aggressive optimization.</li>
                    <li>Designed secure IndexedDB persistence layer integrated with PostgreSQL authentication.</li>
                    <li>Maintained sub-100ms response time via optimized sync logic and state handling.</li>
                    <li>Implemented Jest & React Testing Library with 90%+ coverage and defined performance budgets.</li>
                </ul>
            </div>

                {/* Veridio */}
                <div className="experience-card">
                    <div className="experience-header">
                        <img
                        src="/src/assets/veridia.jpeg"
                        alt="Veridio.io"
                        className="company-logo"
                        />
                        <div className="experience-title">
                        <h3>Web Developer Intern</h3>
                        <h4>Veridio.io</h4>
                        <div className="experience-meta">
                            <span className="duration">June 2025 – July 2025</span>
                            <span className="mode">Remote</span>
                    </div>
                </div>
            </div>

            <ul>
                <li>Developed and deployed a full-stack platform using ReactJS, Node.js and MongoDB.</li>
                <li>Improved registration workflow speed by 25% through efficient API and state management enhancements.</li>
                <li>Built 15+ reusable UI components for scalable architecture.</li>
                <li>Architected scalable RESTful APIs supporting 20% increase in concurrent sessions.</li>
                <li>Enhanced backend stability via optimized queries and structured error handling.</li>
            </ul>
            </div>

        </div>
        </section>

        <section id="education">
        <h2>Education</h2>

        <div className="education-item">
            <div className="education-header">
            <h3>Bachelor of Technology in Computer Science & Engineering</h3>
            <span className="duration">2023 — Present</span>
            </div>
            <p className="institution">Graphic Era Hill University</p>
            <p className="metrics"><strong>Cumulative GPA:</strong> 8.34 / 10.0 </p>
        </div>

        <div className="education-item">
            <div className="education-header">
            <h3>Senior Secondary Education (Class XII)</h3>
            <span className="duration">2022 — 2023</span>
            </div>
            <p className="institution">Shri Guru Nanak Public School | CBSE</p>
            <p className="metrics"><strong>Aggregate:</strong> 84.4%</p>
        </div>

        <div className="education-item">
            <div className="education-header">
            <h3>Secondary Education (Class X)</h3>
            <span className="duration">2020 — 2021</span>
            </div>
            <p className="institution">Shri Guru Nanak Public School | CBSE</p>
            <p className="metrics"><strong>Aggregate:</strong> 94.8%</p>
        </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
            <a href="https://github.com/Anshika-111105/Intelligent-Unix-Shell" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/unix-shell.png" alt="NeuroShell Architecture" className="project-image" />
            </a>
            <div className="project-details">
                <h3>NeuroShell: AI-Enhanced POSIX Interface</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> C, Python, Unix Domain Sockets, SQLite, Machine Learning</p>
                <p className="project-summary">
                A custom POSIX-compliant shell that bridges low-level systems programming with modern AI. It utilizes a high-performance cross-language architecture to provide intelligent command suggestions in real-time.
                </p>
                <ul>
                <li><strong>Systems Programming:</strong> Developed a custom shell with native support for fork/exec, job piping, and signal handling.</li>
                <li><strong>Cross-Language IPC:</strong> Built a communication bridge between C and Python using Unix Domain Sockets for ML integration.</li>
                <li><strong>Predictive Intelligence:</strong> Integrated an ML-based auto-completion engine to optimize developer workflows.</li>
                <li><strong>Persistent State:</strong> Engineered a structured history management system using SQLite for low-latency retrieval.</li>
                </ul>
            </div>
            </div>

            <div className="project-item">
            <a href="https://github.com/Anshika-111105/Email-Schedular-System" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/email-schedular.png" alt="Email Scheduler Architecture" className="project-image" />
            </a>
            <div className="project-details">
                <h3>Distributed Email Scheduler & Task Queue</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> TypeScript, Node.js, BullMQ, Redis, PostgreSQL, Docker</p>
                <p className="project-summary">
                A high-concurrency scheduling system designed for reliable background task execution. Uses a producer-consumer architecture to ensure fault-tolerant queuing and real-time state tracking for time-sensitive tasks.
                </p>
                <ul>
                <li><strong>High-Availability:</strong> Engineered a distributed job queue using BullMQ and Redis for 100% task persistence.</li>
                <li><strong>Fault Tolerance:</strong> Implemented idempotent execution and automatic retries to ensure reliability during disruptions.</li>
                <li><strong>Security:</strong> Integrated Google OAuth 2.0 for secure SMTP relay and implemented rate-limiting algorithms.</li>
                <li><strong>Observability:</strong> Developed a real-time dashboard to track job states (Active/Waiting/Failed) and optimize throughput.</li>
                </ul>
            </div>
            </div>

            <div className="project-item">
            <a href="https://github.com/Anshika-111105/Full-stack-Auth-System" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/2FA.png" alt="IAM System Architecture" className="project-image" />
            </a>
            <div className="project-details">
                <h3>Enterprise-Grade Identity & Access Management (IAM)</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> React, Node.js, MongoDB, JWT, Google Authenticator (TOTP)</p>
                <p className="project-summary">
                A security-first authentication suite focusing on industry-standard protection. Implements multi-factor authentication and granular role-based permissions to secure persistent user data.
                </p>
                <ul>
                <li><strong>Multi-Factor Auth:</strong> Architected a security layer integrating TOTP-based 2FA via Google Authenticator.</li>
                <li><strong>Session Security:</strong> Developed JWT-based authentication with encrypted management and salted hashing (Bcrypt).</li>
                <li><strong>Access Control:</strong> Implemented Role-Based Access Control (RBAC) to manage User and Admin permissions.</li>
                <li><strong>Admin Tooling:</strong> Built an internal dashboard for managing hard tokens and secure recovery workflows.</li>
                </ul>
            </div>
            </div>

            <div className="project-item">
            <a href="https://github.com/Anshika-111105/Simulation-of-two-Inter-VM-for-Data-Exchange-and-Application-Virtualization" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/cloudSim.png" alt="Inter-VM Networking Architecture" className="project-image" />
            </a>
            <div className="project-details">
                <h3>Distributed Systems: Inter-VM Data Exchange</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> Linux, C/Python, Socket Programming, VirtualBox, TCP/IP</p>
                <p className="project-summary">
                A simulation of secure, low-latency communication pipelines between isolated virtual environments, exploring the performance overhead of network virtualization in cloud infrastructure.
                </p>
                <ul>
                <li><strong>Socket Engineering:</strong> Implemented structured data transfer between VMs using custom TCP/IP protocols.</li>
                <li><strong>Network Optimization:</strong> Evaluated Bridged vs. NAT networking modes to optimize throughput and isolation.</li>
                <li><strong>Benchmarking:</strong> Analyzed packet behavior and measured round-trip latency to identify bottlenecks in the stack.</li>
                <li><strong>Infrastructure:</strong> Leveraged application virtualization to simulate real-world cloud data exchange principles.</li>
                </ul>
            </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>

          <div className="skills-container">
            <div className="skills-category">
              <h3>Programming Languages</h3>
              <p>Python, C, C++, Java, JavaScript , TypeScript, SQL</p>
            </div>

            <div className="skills-category">
              <h3>Frontend & Backend</h3>
              <p>ReactJS, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, RESTful APIs</p>
            </div>

            <div className="skills-category">
              <h3>AI & Data Science</h3>
              <p>Generative AI (RAG, LangChain), TensorFlow, OpenCV, NumPy, Pandas</p>
            </div>

            <div className="skills-category">
              <h3>Databases & Tools</h3>
              <p>MongoDB, PostgreSQL, MySQL, Neon , Redis, Docker, Git, GitHub</p>
            </div>

            <div className="skills-category">
              <h3>Developer Concepts</h3>
              <p>Agile Methodology, System Design, Linux / POSIX, Unit Testing, CI/CD</p>
            </div>
          </div>
        </section>

        <section id="certification">
          <h2>Certifications</h2>
          <div className="certifications-container">
            <div className="certification-item">
              <img src="/src/assets/AWS.png" alt="AWS Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Foundations of AI & Machine Learning — Amazon Web Services</h3>
                <p>(Cloud AI, Neural Networks, Model Deployment)</p>
              </div>
            </div>
            <div className="certification-item">
              <img src="/src/assets/Prompt_Engg.png" alt="Prompt Engineering Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Prompt Engineering for AI Applications — Udemy</h3>
                <p>(Tokenization, Prompting Techniques, Optimization)</p>
              </div>
            </div>
            <div className="certification-item">
              <img src="/src/assets/NLP.png" alt="NLP Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Natural Language Processing (NLP) in Python using spaCy</h3>
                <p>(Text Processing, Named Entity Recognition, Dependency Parsing)</p>
              </div>
            </div>
            <div className="certification-item">
              <img src="/src/assets/AI_Agent.png" alt="365 Data Science AI Agents Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Intro to AI Agents and Agentic AI — 365 Data Science</h3>
                <p>(Autonomous Agents, Task Automation, APIs)</p>
              </div>
            </div>
            <div className="certification-item">
              <img src="/src/assets/Cloud%20Computing.png" alt="Cloud Computing Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Cloud Computing Certification</h3>
                <p>(Cloud Infrastructure, Virtualization, AWS, Azure)</p>
              </div>
            </div>
            <div className="certification-item">
              <img src="/src/assets/GenAI_simplilearn.png" alt="Introduction to Generative AI Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Introduction to Generative AI — Simplilearn</h3>
                <p>(Generative Models, AI Applications, Deep Learning)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="achievement">
          <h2>Achievements</h2>

          <div className="achievements-container">

            <div className="achievement-item">
              <img
                src="/src/assets/Dubai_genai.png"
                alt="1 Million Prompters Initiative"
                className="achievement-image"
              />
              <div className="achievement-details">
                <h3>1 Million Prompters Initiative</h3>
                <p>
                  Successfully completed the global AI initiative launched by the Crown Prince of Dubai.
                  Gained advanced expertise in Prompt Engineering, LLM optimization,
                  and AI workflow design aligned with the Dubai Universal Blueprint for Artificial Intelligence.
                </p>
              </div>
            </div>

            <div className="achievement-item">
              <img
                src="/src/assets/algo.png"
                alt="AlgoUniversity Technology Fellowship"
                className="achievement-image"
              />
              <div className="achievement-details">
                <h3>AlgoUniversity Technology Fellowship (ATF 2024)</h3>
                <p>
                  Successfully qualified Stage 1 of the AlgoUniversity Tech Fellowship (ATF) 2024.
                  Stood out among 20,000+ applicants and secured a position in the Top 4,000 candidates advancing to Stage 2.
                  Demonstrated strong problem-solving ability and competitive coding excellence.
                </p>
              </div>
            </div>

            <div className="achievement-item">
              <img
                src="/src/assets/Unstop_CEO.png"
                alt="Unstop CEO for a Day"
                className="achievement-image"
              />
              <div className="achievement-details">
                <h3>Unstop – CEO for a Day (Global Competition)</h3>
                <p>
                  Ranked in the Top 5% among 55,000+ global applicants in one of the largest
                  leadership-based competitions hosted on Unstop.
                  Demonstrated strategic decision-making, analytical thinking, and real-world
                  business problem-solving under time constraints.
                  Evaluated on leadership aptitude, innovation mindset, execution strategy,
                  and the ability to approach complex organizational challenges with clarity and impact.
                </p>
              </div>
            </div>

            <div className="achievement-item">
              <img
                src="/src/assets/leetcode (2).png"
                alt="LeetCode Mastery"
                className="achievement-image"
              />
              <div className="achievement-details">
                <h3>LeetCode Mastery & Competitive Programming</h3>
                <p>
                  Solved 500+ Data Structures & Algorithms problems with a peak contest rating of 1506.
                  Ranked in the Top 42% globally, demonstrating strong algorithmic proficiency.
                </p>
              </div>
            </div>

            <div className="achievement-item">
                <img
                    src="/src/assets/TATA.png"
                    alt="TATA GenAI Powered Data Analytics Job Simulation"
                    className="achievement-image"
                />
                <div className="achievement-details">
                    <h3>TATA – GenAI Powered Data Analytics Job Simulation (Forage)</h3>
                    <p>
                    Successfully completed the GenAI Powered Data Analytics Job Simulation by TATA 
                    in collaboration with Forage (November 2025). Gained hands-on experience in 
                    exploratory data analysis, AI-driven delinquency prediction, and business 
                    reporting for collections strategy.
                    </p>
                </div>
            </div>

            <div className="achievement-item">
              <img
                src="/src/assets/Graphethon.png"
                alt="Grapht-e-on Event"
                className="achievement-image"
              />
              <div className="achievement-details">
                <h3>Grapht-e-on – Competitive Coding Event</h3>
                <p>
                  Ranked among the Top 50 participants at Graphic Era Hill University.
                  Showcased strong graph theory and optimization-based problem-solving skills.
                </p>
              </div>
            </div>

          </div>
        </section>
        
      </main>

      <footer>
        <p>© 2025 Anshika Saklani. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;