---
permalink: /
title: "Huailiang Ma | Robotics Researcher"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.personal-home {
  --ink: #152238;
  --muted: #5e6a7d;
  --line: #dbe3ee;
  --paper: #ffffff;
  --soft: #f5f8fc;
  --accent: #2563eb;
  --accent-dark: #1d4ed8;
  --green: #0f766e;
  color: var(--ink);
}
.personal-home * { box-sizing: border-box; }
.personal-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
  gap: 2rem;
  align-items: center;
  padding: 2.25rem;
  margin: 0 0 2.25rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(135deg, #ffffff 0%, #f4f8ff 56%, #eef7f5 100%);
  box-shadow: 0 18px 45px rgba(21, 34, 56, 0.08);
}
.personal-kicker {
  margin: 0 0 .7rem;
  color: var(--green);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.personal-hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: 0;
}
.personal-lede {
  margin: 1rem 0 1.35rem;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.7;
}
.personal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
  margin-top: 1.2rem;
}
.personal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: .68rem 1rem;
  border: 1px solid var(--accent);
  border-radius: 10px;
  background: var(--accent);
  color: #fff !important;
  font-weight: 700;
  text-decoration: none !important;
}
.personal-button.secondary {
  background: #fff;
  color: var(--accent-dark) !important;
}
.personal-portrait {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(37, 99, 235, .16);
  background: var(--paper);
  box-shadow: 0 14px 35px rgba(21, 34, 56, 0.1);
}
.personal-portrait img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.personal-portrait figcaption {
  padding: .85rem 1rem 1rem;
  color: var(--muted);
  font-size: .9rem;
  line-height: 1.5;
}
.personal-section {
  margin: 2.4rem 0;
}
.personal-section h2 {
  margin: 0 0 1rem;
  font-size: 1.45rem;
  letter-spacing: 0;
}
.personal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.personal-card {
  height: 100%;
  padding: 1.15rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--paper);
  box-shadow: 0 10px 26px rgba(21, 34, 56, 0.06);
}
.personal-card h3 {
  margin: 0 0 .5rem;
  font-size: 1rem;
  line-height: 1.35;
}
.personal-card p,
.personal-card li {
  color: var(--muted);
  line-height: 1.62;
}
.personal-card p { margin: 0; }
.personal-card ul { margin: .35rem 0 0; padding-left: 1.1rem; }
.paper-list {
  display: grid;
  gap: 1rem;
}
.paper-item {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 1.1rem;
  padding: 1rem;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--paper);
}
.paper-item img {
  width: 100%;
  height: 138px;
  object-fit: cover;
  border-radius: 10px;
  background: var(--soft);
}
.paper-item h3 {
  margin: 0 0 .35rem;
  font-size: 1.02rem;
  line-height: 1.4;
}
.paper-meta {
  margin: .25rem 0;
  color: var(--muted);
  line-height: 1.55;
}
.paper-status {
  display: inline-block;
  margin-top: .35rem;
  padding: .18rem .55rem;
  border-radius: 999px;
  background: #e8f1ff;
  color: #1d4ed8;
  font-size: .78rem;
  font-weight: 700;
}
.personal-timeline {
  display: grid;
  gap: .85rem;
}
.timeline-row {
  padding: 1rem 1.1rem;
  border-left: 4px solid var(--accent);
  background: var(--soft);
  border-radius: 0 12px 12px 0;
}
.timeline-row strong { display: block; margin-bottom: .25rem; }
.timeline-row span { color: var(--muted); line-height: 1.6; }
.contact-band {
  padding: 1.4rem;
  border-radius: 16px;
  background: #152238;
  color: #fff;
}
.contact-band h2 { color: #fff; }
.contact-band p { color: rgba(255,255,255,.78); line-height: 1.65; }
.contact-band a { color: #bfdbfe; }
@media (max-width: 900px) {
  .personal-hero,
  .paper-item { grid-template-columns: 1fr; }
  .personal-grid { grid-template-columns: 1fr; }
  .personal-hero { padding: 1.4rem; }
}
</style>

<div class="personal-home">
  <section class="personal-hero">
    <div>
      <p class="personal-kicker">Robotics · Imitation Learning · Teleoperation</p>
      <h1>Huailiang Ma</h1>
      <p class="personal-lede">
        I am a Master's student at the School of Instrument Science and Engineering, Southeast University. My research focuses on imitation learning, robotic teleoperation, scalable robot data generation, and force-feedback manipulation systems. I am currently seeking a Ph.D. position in robotics.
      </p>
      <div class="personal-actions">
        <a class="personal-button" href="mailto:huailiangma@163.com">Email Me</a>
        <a class="personal-button secondary" href="https://scholar.google.com.hk/citations?hl=zh-CN&user=HsrhHWIAAAAJ">Google Scholar</a>
        <a class="personal-button secondary" href="https://github.com/HuailiangMa">GitHub</a>
        <a class="personal-button secondary" href="/cv/">CV</a>
      </div>
    </div>
    <figure class="personal-portrait">
      <img src="/images/AutoTrialGen.jpg" alt="Robot manipulation data generation project preview">
      <figcaption>Researching real-to-sim-to-real robot learning pipelines for manipulation, teleoperation, and dexterous robotics.</figcaption>
    </figure>
  </section>

  <section id="research" class="personal-section">
    <h2>Research Interests</h2>
    <div class="personal-grid">
      <article class="personal-card">
        <h3>Imitation Learning</h3>
        <p>Learning reusable robot policies from demonstrations, with emphasis on generalization and efficient dataset construction.</p>
      </article>
      <article class="personal-card">
        <h3>Robot Data Generation</h3>
        <p>Automated trajectory annotation, simulation trials, skill segmentation, and scalable real-to-sim-to-real data pipelines.</p>
      </article>
      <article class="personal-card">
        <h3>Teleoperation & Manipulation</h3>
        <p>Force-feedback teleoperation, dexterous hand control, haptic interfaces, and manipulation systems for complex tasks.</p>
      </article>
    </div>
  </section>

  <section id="publications" class="personal-section">
    <h2>Selected Publications & Submissions</h2>
    <div class="paper-list">
      <article class="paper-item">
        <img src="/images/AutoTrialGen.jpg" alt="AutoTrialGen preview">
        <div>
          <h3>AutoTrialGen: Automated Data Generation from Few Human Demonstrations via Trajectory Annotation and Simulation Trials</h3>
          <p class="paper-meta"><strong>Ma, H.</strong>, Song, A., He, M., Yan, Y., Li, M., Wei, L., et al.</p>
          <p class="paper-meta">Submitted to IEEE Robotics and Automation Letters (RA-L), 2025.</p>
          <span class="paper-status">First author · Under review</span>
        </div>
      </article>

      <article class="paper-item">
        <img src="/images/SkillComposer.png" alt="SkillComposer preview">
        <div>
          <h3>SkillComposer: Automated Segmentation and Robot Skill Composition for Scalable Data Generation</h3>
          <p class="paper-meta"><strong>Ma, H.</strong>, Song, A., Xu, B., et al.</p>
          <p class="paper-meta">Submitted to ICBSR 2025, Xishuangbanna, China, Dec 26-29, 2025.</p>
          <span class="paper-status">First author · Under review</span>
        </div>
      </article>

      <article class="paper-item">
        <img src="/images/Odometry.png" alt="Humanoid odometry preview">
        <div>
          <h3>Legged Odometry Based on Fusion of Leg Kinematics and IMU Information in a Humanoid Robot</h3>
          <p class="paper-meta"><strong>Ma, H.</strong>, Song, A., Li, J., Zhang, G., et al.</p>
          <p class="paper-meta">Biomimetic Intelligence and Robotics, 2024.</p>
          <span class="paper-status">First author · JCR Q1</span>
        </div>
      </article>

      <article class="paper-item">
        <img src="/images/人在回路强化学习.png" alt="Servo intervention loop preview">
        <div>
          <h3>A Servo Intervention Loop for Efficient Sampling in Reinforcement Learning</h3>
          <p class="paper-meta">Li, P., Li, Y., <strong>Ma, H.</strong>, Song, A., et al.</p>
          <p class="paper-meta">Submitted to Robotics: Science and Systems (RSS 2026).</p>
          <span class="paper-status">Co-first author · Under review</span>
        </div>
      </article>

      <article class="paper-item">
        <img src="/images/Three_arms.jpg" alt="Three-arm space robot preview">
        <div>
          <h3>A Multimodal Shared Telerobotic System of Three-arm Space Robot for Extravehicular Activities</h3>
          <p class="paper-meta">He, M., Song, A., Yan, Y., <strong>Ma, H.</strong>, et al.</p>
          <p class="paper-meta">Proceedings of the 23rd IFAC Symposium on Automatic Control in Aerospace (ACA 2025), Harbin, China.</p>
          <span class="paper-status">Accepted · EI-indexed conference</span>
        </div>
      </article>
    </div>
  </section>

  <section id="projects" class="personal-section">
    <h2>Representative Work</h2>
    <div class="personal-grid">
      <article class="personal-card">
        <h3>AutoTrialGen</h3>
        <p>A real-to-sim-to-real framework that expands a few human demonstrations into diverse, validated simulation trajectories for imitation learning.</p>
      </article>
      <article class="personal-card">
        <h3>SkillComposer</h3>
        <p>A skill segmentation and composition strategy using weighted penalties to avoid singularities and produce more robust robot trajectories.</p>
      </article>
      <article class="personal-card">
        <h3>Humanoid Odometry</h3>
        <p>An odometry framework that fuses leg kinematics and IMU measurements to estimate robot center-of-mass state during locomotion.</p>
      </article>
    </div>
  </section>

  <section id="experience" class="personal-section">
    <h2>Projects & Engineering Experience</h2>
    <div class="personal-timeline">
      <div class="timeline-row">
        <strong>Humanoid Robot for Power Grid Inspection</strong>
        <span>Teleoperation of an L20 dexterous hand with Manus Prime 3 data glove mapping for inspection-oriented manipulation.</span>
      </div>
      <div class="timeline-row">
        <strong>Force-feedback Teleoperation for Live-line Operation</strong>
        <span>Manipulator control with haptic devices, incremental end-effector pose commands, UDP communication, and master-slave state streaming.</span>
      </div>
      <div class="timeline-row">
        <strong>Three-arm Space Robot Teleoperation</strong>
        <span>Multi-arm coordination, task allocation, and shared teleoperation interface design for aerospace robotic systems.</span>
      </div>
    </div>
  </section>

  <section id="honors" class="personal-section">
    <h2>Honors & Awards</h2>
    <div class="personal-grid">
      <article class="personal-card">
        <h3>Scholarships</h3>
        <ul>
          <li>National Scholarship for Graduate Students, Southeast University</li>
          <li>First-Class Academic Scholarship, Southeast University</li>
          <li>Three consecutive years of First-Class Academic Scholarship, Shandong University</li>
        </ul>
      </article>
      <article class="personal-card">
        <h3>Competitions</h3>
        <ul>
          <li>National First Prize, China Undergraduate Electronics Design Contest</li>
          <li>First-Class Research & Innovation Scholarship, Shandong University</li>
        </ul>
      </article>
      <article class="personal-card">
        <h3>Academic Recognition</h3>
        <ul>
          <li>Outstanding Graduate of Shandong Province</li>
          <li>Outstanding Graduate of Shandong University</li>
          <li>Outstanding Undergraduate Thesis Award, Shandong University</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="contact" class="personal-section contact-band">
    <h2>Contact</h2>
    <p>I welcome conversations about imitation learning, robot data generation, teleoperation, VLA models, reinforcement learning, and dexterous manipulation.</p>
    <p>Email: <a href="mailto:huailiangma@163.com">huailiangma@163.com</a> · GitHub: <a href="https://github.com/HuailiangMa">HuailiangMa</a> · Google Scholar: <a href="https://scholar.google.com.hk/citations?hl=zh-CN&user=HsrhHWIAAAAJ">Profile</a></p>
  </section>
</div>
