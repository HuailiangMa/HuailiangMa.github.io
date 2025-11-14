---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
## Biography (English)

Welcome to my homepage!  
I am **Huailiang Ma**, currently a Master’s student at the **School of Instrument Science and Engineering, Southeast University**, majoring in **Instrumentation Science and Technology**. My research focuses on **imitation learning and robotic teleoperation**, particularly in **dataset generation** and **force-feedback teleoperation of robotic manipulators**. I am advised by **Prof. Aiguo Song** and conduct my research in the **Teleoperation Laboratory** of the Robot Sensing and Control Institute at Southeast University.

I received my Bachelor’s degree from the **School of Control Science and Engineering, Shandong University**, ranking **3rd** in the Automation program. My undergraduate advisors were **Dr. Guoteng Zhang** and **Dr. Yibin Li**, under whose guidance I completed my thesis in the **biped robot laboratory**.

I am currently seeking a **Ph.D. position** in robotics.  
My future research interests include **Vision-Language-Action (VLA) models**, **reinforcement learning**, and **dexterous manipulation**.
---
My Master's research mainly focuses on **imitation learning**, **robotic teleoperation**, **data generation for robot manipulation** and **motion control and odometry of humanoid robots**. Below are my recent publications and submissions:

### Recent Publications & Submissions

- **Ma, H.**, Song, A., et al.  
  *AutoTrialGen: Automated Data Generation from Few Human Demonstrations via Trajectory Annotation and Simulation Trials.*  
  Submitted to **IEEE Robotics and Automation Letters (RA-L)**, 2025. *(First author, under review)*

- **Ma, H.**, Song, A., Xu, B., et al.  
  *SkillComposer: Automated Segmentation and Robot Skill Composition for Scalable Data Generation.*  
  Submitted to the **2025 International Conference on Bio-inspired System and Robotics (ICBSR 2025)**, Xishuangbanna, China, Dec 26–29, 2025. *(First author, under review)*

- **Ma, H.**, Li, Y., et al.  
  *A Servo Intervention Loop for Efficient Sampling in Reinforcement Learning.*  
  Submitted to the **2026 Robotics: Science and Systems (RSS 2026)**. *(Co-first author, under review)*

- **Ma, H.**, Zhang, G., Li, Y., et al.  
  *Legged Odometry Based on Fusion of Leg Kinematics and IMU Information in a Humanoid Robot.*  
  **Biomimetic Intelligence and Robotics**, 2024. *(First author, JCR Q1, IF = 5.4)*

- He, M., Song, A., Yan, Y., **Ma, H.**, et al.  
  *A Multimodal Shared Telerobotic System of Three-arm Space Robot for Extravehicular Activities.*  
  In **Proceedings of the 23rd IFAC Symposium on Automatic Control in Aerospace (ACA 2025)**, Harbin, China, 2025. *(Fourth author, EI-indexed conference, accepted)*
---
### Honors & Awards

- **National Scholarship for Graduate Students**, Southeast University  
- **National First Prize**, China Undergraduate Electronics Design Contest  
  *(Motion Target Control and Automatic Tracking System)*  
- **Outstanding Graduate of Shandong Province**  
- **Outstanding Graduate of Shandong University**  
- **Outstanding Undergraduate Thesis Award**, Shandong University  
- **First-Class Academic Scholarship**, Southeast University  
- **First-Class Research & Innovation Scholarship**, Shandong University  
- **Three consecutive years of First-Class Academic Scholarship**, Shandong University

---

### Representative Work I: AutoTrialGen (first author, under review)

My primary Master’s project is a paper currently under submission, titled **AutoTrialGen**, which is my first complete work during my graduate study.

**Core idea:**  
AutoTrialGen automatically generates large-scale, high-quality datasets from **a few human demonstrations**, by combining **trajectory annotation** and **simulation-based trials**, and then uses the generated dataset to train imitation learning policies that can be deployed on **real robots**.

**Main contributions:**

1. **An automated real-to-sim-to-real data generation framework**  
   - Requires only a **small number of expert demonstrations** in the real world;  
   - Automatically expands them into a large, diverse, and feasible dataset in simulation;  
   - The generated dataset improves the **generalization** of learned policies.

2. **Automated trajectory annotation and skill composition**  
   - Uses a **vision-language model** to segment the demonstration trajectories into **skill segments** and **transit segments**;  
   - Encodes object and robot states in a structured way for downstream skill reuse;  
   - Greatly reduces the need for manual labeling.

3. **Direct deployment of trained policies in the real world**  
   - We evaluate on **six challenging real-world tasks**, including:
     - Button pressing  
     - Mouse placement  
     - Drink placement  
     - Tea pouring  
     - Cup hanging  
     - Object organizing  
   - For each task, about **500 successful trajectories** are generated in simulation for training;  
   - When deployed in the real world, the success rate of our method is **over 20% higher** than baselines such as MimicGen, which rely on more random skill composition.

**Pipeline summary:**

1. Collect a few expert demonstrations in the real world via teleoperation;  
2. Use a vision-language model to segment trajectories into semantic skill segments and transit segments;  
3. Randomize object poses and positions in simulation;  
4. Use a **weighted penalty function** to stitch different skill segments into new trajectories;  
5. Execute and validate these trajectories in simulation, keeping only successful ones as training data;  
6. Train imitation learning policies on the generated dataset and deploy them back to real robots for evaluation.

---

### Representative Work II: SkillComposer (first author, under review)

My second main work is **SkillComposer: Automated Segmentation and Robot Skill Composition for Scalable Data Generation**, which can be viewed as a **predecessor** to AutoTrialGen, focusing more on the **skill composition strategy** itself.

**Core idea:**

- We design a **weighted penalty score** that combines:
  - **Manipulability measures** (to avoid kinematic singularities);  
  - **Relative pose costs** (to keep motions efficient and natural).  
- When stitching skills, we select skill segments with **lower penalty scores** so that:
  - The manipulator avoids singular configurations;  
  - The resulting trajectories are less redundant and more robust.

**Highlights:**

- The framework realizes a **full pipeline in simulation**:  
  data generation → policy training → policy deployment;  
- It serves as a **feasibility study** of the idea that automatic skill segmentation and composition alone can generate usable training data in pure simulation;  
- As illustrated in the original figures, executing skills in far-end regions of the workspace often pushes the robot toward singularities, while our method automatically selects better skill segments to avoid such problematic configurations.

---

### Representative Work III: Humanoid/Legged Robot Odometry and Control (undergraduate work)

During my undergraduate thesis, I focused on **legged robot odometry and motion control**, especially for humanoid robots.

One representative work is:

**Leg odometry for humanoid robots based on fusion of leg kinematics and IMU measurements**

**Main contributions:**

- Proposed an odometry framework that fuses **leg kinematics** and **IMU data**;  
- Estimates the robot **center-of-mass (CoM) position and velocity**;  
- Validated both in simulation and on real hardware:
  - The terminal position error is within **1.56%** of the total walking distance;  
  - The state estimation is accurate and robust.  

This odometry approach is not limited to humanoid robots; it also generalizes to **quadruped and hexapod robots**, and we have already demonstrated its transferability to different robot platforms.

Another part of my undergraduate work involves controlling a robotic arm via **forward and inverse kinematics** to reach desired poses and grasp QR-code-marked targets in a vision-guided manner.

---

### Projects and Engineering Experience

1. **Humanoid Robot for Power Grid Inspection (Jiangxi power grid project, ongoing)**  
   - Responsible for **teleoperating an L20 dexterous hand** using a **Manus Prime 3 data glove**;  
   - Implemented and debugged the **mapping from glove data (pose/joint information) to L20 joint space**;  
   - The project is in its early stage; future work will integrate imitation learning and teleoperation to support complex inspection tasks.

2. **Teleoperation of Manipulators and Force-feedback Robots for Live-line Operation**  
   - Participated in several projects on live-line operation and power maintenance robots;  
   - Used **force-feedback haptic devices** (e.g., Geomagic Touch) for teleoperating robotic arms;  
   - Employed an **incremental control strategy**:
     - The pose increments of the haptic device are added to the current end-effector pose of the robot, enabling intuitive control;  
   - Communication is implemented via **UDP**:
     - The master side renders the virtual robot and environment;  
     - The slave side executes commands and streams back its state.

3. **Teleoperation of a Three-arm Space Robot (with CASC’s Fifth Academy)**  
   - Participated in teleoperation scheme design for a **three-arm space robot**;  
   - Focused on multi-arm coordination, task allocation, and teleoperation interface design.

---

If you are interested in collaboration on **imitation learning**, **teleoperation**, or **dexterous manipulation**, feel free to reach out!
