import React from 'react';
import './index.css';

// 1. IMPORT ALL IMAGES HERE
import profileImg from './assets/profile.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import leetcodeIcon from './assets/leetcode.png';
import instaIcon from './assets/insta.png';
import bluestockLogo from './assets/bluestock.jpeg';
import veridiaLogo from './assets/veridia.jpeg';
import unixShellImg from './assets/unix-shell.png';
import emailSchedularImg from './assets/email-schedular.png';
import authSystemImg from './assets/2FA.png';
import cloudSimImg from './assets/cloudSim.png';
import awsCert from './assets/AWS.png';
import promptCert from './assets/Prompt_Engg.png';
import nlpCert from './assets/NLP.png';
import aiAgentCert from './assets/AI_Agent.png';
import cloudCert from './assets/Cloud Computing.png';
import genAiCert from './assets/GenAI_simplilearn.png';
import dubaiAchievement from './assets/Dubai_genai.png';
import algoAchievement from './assets/algo.png';
import unstopAchievement from './assets/Unstop_CEO.png';
import leetcodeAchievement from './assets/leetcode (2).png';
import tataAchievement from './assets/TATA.png';
import graphethonAchievement from './assets/Graphethon.png';

const App: React.FC = () => {
  return (
    <>
      <header>
        <a href="#home" className="logo">
          {/* 2. USE THE IMPORTED VARIABLE IN {} */}
          <img src={profileImg} alt="Anshika Saklani" />
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
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Anshika-111105" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/Anshika_0509/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={leetcodeIcon} alt="LeetCode" />
        </a>
        <a href="https://www.instagram.com/i.anshikasaklani?igshid=amQxaGwxOHQ2a2M=" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={instaIcon} alt="Instagram" />
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
              <img src={profileImg} alt="Anshika Saklani" />
            </div>
            <div className="about-text">
              <p>I am a Software Engineering student at Graphic Era Hill University driven by a simple mission: <b>making complex technology feel intuitive.</b></p>
              <p>My work lives at the intersection of Artificial Intelligence and User Experience, where I transform raw data into functional, high-performance applications.</p>
              <p>My Engineering Philosophy :-</p>
              <p>➤ Data-Driven Logic: I architect end-to-end ML pipelines, moving beyond basic scripts to build models that solve real-world problems.</p>
              <p>➤ Human-Centric Design: Whether it's developing Computer Vision for hand-tracking or refining frontend responsiveness, I believe great software should be invisible and user-first.</p>
              <p>➤ Scalable Architecture: I focus on writing clean, maintainable code that bridges the gap between robust backend systems and seamless digital interactions.</p>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-container">
            <div className="experience-card">
              <div className="experience-header">
                <img src={bluestockLogo} alt="Bluestock Fintech" className="company-logo" />
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
                <li>Architected and developed a high-performance browser-based game engine using TypeScript and React.</li>
                <li>Achieved 95+ Lighthouse score while maintaining bundle size under 50KB.</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <img src={veridiaLogo} alt="Veridio.io" className="company-logo" />
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
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Intelligent-Unix-Shell" target="_blank" rel="noopener noreferrer">
                <img src={unixShellImg} alt="NeuroShell Architecture" className="project-image" />
              </a>
              <div className="project-details">
                <h3>NeuroShell: AI-Enhanced POSIX Interface</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> C, Python, Unix Domain Sockets, SQLite, ML</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Email-Schedular-System" target="_blank" rel="noopener noreferrer">
                <img src={emailSchedularImg} alt="Email Scheduler Architecture" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Distributed Email Scheduler & Task Queue</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> TypeScript, Node.js, BullMQ, Redis, Docker</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Full-stack-Auth-System" target="_blank" rel="noopener noreferrer">
                <img src={authSystemImg} alt="IAM System Architecture" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Enterprise-Grade Identity & Access Management</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> React, Node.js, MongoDB, JWT, TOTP</p>
              </div>
            </div>

            <div className="project-item">
              <a href="https://github.com/Anshika-111105/Simulation-of-two-Inter-VM-for-Data-Exchange-and-Application-Virtualization" target="_blank" rel="noopener noreferrer">
                <img src={cloudSimImg} alt="Inter-VM Networking Architecture" className="project-image" />
              </a>
              <div className="project-details">
                <h3>Distributed Systems: Inter-VM Data Exchange</h3>
                <p className="tech-stack"><strong>Tech Stack:</strong> Linux, C/Python, Socket Programming</p>
              </div>
            </div>
          </div>
        </section>

        <section id="certification">
          <h2>Certifications</h2>
          <div className="certifications-container">
            <div className="certification-item">
              <img src={awsCert} alt="AWS Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Foundations of AI & Machine Learning — AWS</h3>
              </div>
            </div>
            <div className="certification-item">
              <img src={promptCert} alt="Prompt Engineering Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Prompt Engineering for AI Applications — Udemy</h3>
              </div>
            </div>
            <div className="certification-item">
              <img src={nlpCert} alt="NLP Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>NLP in Python using spaCy</h3>
              </div>
            </div>
            <div className="certification-item">
              <img src={aiAgentCert} alt="AI Agents Certificate" className="certificate-image" />
              <div className="certification-details">
                <h3>Intro to AI Agents and Agentic AI — 365 Data Science</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="achievement">
          <h2>Achievements</h2>
          <div className="achievements-container">
            <div className="achievement-item">
              <img src={dubaiAchievement} alt="1 Million Prompters" className="achievement-image" />
              <div className="achievement-details">
                <h3>1 Million Prompters Initiative</h3>
                <p>Global AI initiative launched by the Crown Prince of Dubai.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img src={algoAchievement} alt="AlgoUniversity" className="achievement-image" />
              <div className="achievement-details">
                <h3>AlgoUniversity Tech Fellowship (ATF 2024)</h3>
                <p>Top 4,000 candidates among 20,000+ applicants.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img src={unstopAchievement} alt="Unstop CEO" className="achievement-image" />
              <div className="achievement-details">
                <h3>Unstop – CEO for a Day</h3>
                <p>Top 5% among 55,000+ global applicants.</p>
              </div>
            </div>
            <div className="achievement-item">
              <img src={leetcodeAchievement} alt="LeetCode" className="achievement-image" />
              <div className="achievement-details">
                <h3>LeetCode Mastery</h3>
                <p>Solved 500+ problems, peak rating 1506.</p>
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