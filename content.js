/* =====================================================================
   RAFSAN'S WEBSITE: THE ONE CONTENT FILE
   ---------------------------------------------------------------------
   Every word a visitor reads lives in this file. Both pages read it:
   index.html (the main page) and office.html (the optional office tour).
   To update the site, edit this file only. See HOW-TO-UPDATE.md.

   Rules that keep the site honest and consistent:
   1. Write in the first person: "I built…", "my thesis…".
   2. One site for everyone. Nothing addresses one kind of visitor.
   3. State what each piece of work did not do, as well as what it did.
   4. Never add: home address, ID numbers, date of birth, visa or
      migration details.
   5. Keep text inside double quotes. If a sentence needs an apostrophe
      or a quote mark, use the curly ones ( ’ “ ” ) so nothing breaks.
   ===================================================================== */

window.SITE = {

  /* ---------- WHO I AM (the top of the page) ---------- */
  person: {
    name: "Ahmed Al Rafsan",
    shortName: "Rafsan",
    headline: "Aeronautical engineer and AI engineer",
    location: "Melbourne, Australia",
    email: "ahmed.rafsan108@gmail.com",
    photo: "portrait-wall.jpg",
    photoAlt: "Portrait of Ahmed Al Rafsan",
    /* The one paragraph under my name. Keep it to one paragraph. */
    about: "I am an aeronautical engineer by training. In China I modelled a composite flapping wing in finite-element analysis, worked through the stability of a light aircraft, and learned to trust a number only after I had checked it. Back in Bangladesh, an MBA and two and a half years reporting performance data for more than 500 employees to a CEO taught me how a business makes decisions. In Melbourne, a Master’s in data analytics turned those habits into daily practice: cleaning messy data, building dashboards, training machine-learning models, and leading a capstone team whose priority list a client loaded into its CRM. Now I build with AI and machine learning, and I keep returning to the place where my two fields meet: models that make engineering analysis faster without making it any less trustworthy.",
    /* The title block beside the drawing. Label, then value. */
    titleBlock: [
      ["Discipline", "Aeronautical engineering and AI"],
      ["Assessed", "Aeronautical Engineer (ANZSCO 233911), Engineers Australia"],
      ["Degrees", "BEng in Aircraft Design, MBA, Master’s in Data Analytics"],
      ["Based in", "Melbourne, Australia"]
    ],
    /* Caption under the drawing at the top of the page. */
    drawingCaption: "Drawn from my own work: the top view uses the span, length, wing area and taper of my conceptual aircraft design, Detail B is the three-ply laminate from my thesis, and the blue network is the machine-learning layer that ties the two fields together.",
    links: [
      { label: "GitHub",   url: "https://github.com/Ahmed-Al-Rafsan" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-al-rafsan-" },
      { label: "YouTube",  url: "https://www.youtube.com/@AhmedAlRafsan" }
    ]
  },

  /* ---------- MY ROUTE SO FAR (the map under the top section) ----------
     lat and lon place each stop on the map. */
  route: {
    title: "My route so far",
    summary: "Three countries, three degrees, one direction.",
    origin: { code: "DAC", city: "Bangladesh", lat: 23.8, lon: 90.4 },
    legs: [
      { code: "KHN", city: "Nanchang, China", lat: 28.7, lon: 115.9, when: "2014 to 2017",
        title: "Aircraft design engineering",
        text: "BEng in Aircraft Design and Engineering at Nanchang Hangkong University: CAD, flight dynamics, a finite-element thesis and maintenance training with an airline engineering company." },
      { code: "DAC", city: "Dhaka, Bangladesh", lat: 23.8, lon: 90.4, when: "Before 2024",
        title: "Business and people data",
        text: "HR Executive at Kazi Farms Group for about two and a half years, reporting KPIs for more than 500 employees to CEO and GM level. MBA from North South University, April 2021." },
      { code: "MEL", city: "Melbourne, Australia", lat: -37.8, lon: 145.0, when: "2024 to 2026",
        title: "Data analytics and machine learning",
        text: "Master of Business Information Systems (Data Analytics). I led a six-person industry capstone and interned as a data analyst at Powerdata Group Consulting." }
    ],
    now: { title: "AI engineering", text: "I am building AI and machine-learning systems, with aerospace engineering as the field I most want to apply them to." }
  },

  /* ---------- AERONAUTICAL ENGINEERING ---------- */
  engineering: {
    title: "Aeronautical engineering",
    summary: "Supervised engineering work from my aeronautical degree, each piece with its scope and its limits.",
    intro: "My first degree is a BEng in Aircraft Design and Engineering from Nanchang Hangkong University, China (February 2014 to December 2017). Below are three pieces of supervised engineering work from that degree, drawn from their real numbers, and the maintenance training that showed me how the industry runs.",
    assessment: {
      title: "Engineers Australia skills assessment",
      date: "29 October 2026",
      occupation: "Professional Engineer: Aeronautical Engineer",
      code: "ANZSCO 233911",
      text: "Engineers Australia assessed my competencies, together with my BEng in Aircraft Design and Engineering from Nanchang Hangkong University (December 2017), as meeting the requirement for Professional Engineer: Aeronautical Engineer."
    },
    /* art picks the drawing: "laminate", "modes" or "planform". */
    projects: [
      { art: "laminate", title: "Composite flapping wing: a finite-element study",
        facts: [["Work", "Graduation thesis"], ["Tools", "ANSYS Workbench 17.2, CATIA"], ["Supervisor", "Yu Chunjin"], ["Defended", "15 December 2017"]],
        text: "How does fibre angle change the stiffness and stress of a thin composite wing? I drew a simplified rectangular flapping wing, inspired by dragonfly flight, in CATIA, exported it as IGS and analysed it as a static structural problem in ANSYS Workbench.",
        points: [
          "Three-layer lay-up: epoxy-carbon (230 GPa) prepreg, a resin-epoxy core and epoxy-carbon again, each 0.125 mm thick.",
          "I swept the outer-layer fibre angle from −45° to +45° in 5° steps: 19 lay-ups, each solved for total deformation, equivalent stress and maximum shear stress.",
          "Load case: a fixed support at the root, with a surface pressure standing in for the flapping load.",
          "Result: deformation was largest at −40° and smallest at 5°; shear and equivalent stress were lowest near −20° to −25°.",
          "Limits: one static load case on a simplified geometry, with no mesh-convergence check and no experimental validation. It is a parametric study, not a design.",
          "Background reading that shaped the topic: Jongerius and Lentink (2010), Structural analysis of a dragonfly wing, Experimental Mechanics 50(9)."
        ]},
      { art: "modes", title: "Longitudinal stability of a light aircraft",
        facts: [["Work", "Flight Dynamics coursework"], ["Date", "April 2017"], ["Tools", "NumPy, for verification"], ["Supervisor", "He Guoyi"]],
        text: "I worked through a full longitudinal stability problem on an instructor-supplied four-seat light aircraft model (1,150 kg, 16.2 m² wing, 55 m/s cruise): trim, static margin, the linearised equations of motion and the two dynamic modes.",
        points: [
          "Centre of gravity at 27.3% of mean aerodynamic chord, neutral point at 46.2%: a static margin of 18.9%.",
          "Short-period mode: natural frequency 5.344 rad/s, damping ratio 0.702.",
          "Phugoid mode: natural frequency 0.2127 rad/s, damping ratio 0.106.",
          "I verified the eigenvalues and the characteristic polynomial numerically with NumPy.",
          "Limits: longitudinal plane only, on a representative model rather than a named aircraft."
        ]},
      { art: "planform", title: "Conceptual configuration of a fighter-style aircraft",
        facts: [["Work", "Airplane Conceptual Design"], ["Date", "June 2016"], ["Tools", "CATIA V5, AutoCAD"], ["Supervisor", "Ding Xiangyu"]],
        text: "I built a 3D surface model in CATIA V5 and documented it in top, side and front orthographic views in AutoCAD, with every feature tied to one datum and centreline.",
        points: [
          "Mid-wing swept trapezoidal planform: 8.0 m span, 12.0 m length, 18.0 m² reference area, aspect ratio 3.56, taper ratio 0.286.",
          "I found a +0.30 m wing-root offset in the front view, traced it to a sketch on an offset construction plane, fixed it at the source and re-checked all three views. Residual differences: 1 to 5 mm.",
          "Limits: external geometry only. No aerodynamic, structural or performance analysis."
        ]}
    ],
    training: {
      title: "Aviation maintenance internship",
      facts: [["Company", "HNA Aviation Technic Co., Ltd."], ["Dates", "9 to 20 October 2017"]],
      text: "Twelve days of internship and training in aviation engineering and maintenance. I learned how an airline maintenance operation runs from the inside: how a jet engine works, how it is inspected and repaired part by part, and how regulation governs every step.",
      photo: "hangar-engine.jpg",
      photoAlt: "Rafsan beside an open airliner engine during maintenance training"
    },
    tools: ["CATIA V5", "AutoCAD", "ANSYS Workbench", "NumPy"]
  },

  /* ---------- RESEARCH ---------- */
  research: {
    title: "Research",
    summary: "What I have researched, how I work through a problem, and the questions that interest me.",
    intro: "My research experience comes from supervised engineering work: a finite-element thesis and two design projects in my aeronautical degree, and a client machine-learning project in my Master’s. Each taught me the same discipline: frame a clear question, build a model of it, check the model before trusting it, and report what the result does not show.",
    /* How I work through a problem. This is a sequence, so it is numbered. */
    method: [
      { title: "Frame the question", text: "What does fibre angle do to the stiffness and stress of a thin composite wing?" },
      { title: "Model it", text: "Geometry in CATIA V5. Equations of motion for the stability problem." },
      { title: "Analyse", text: "Static structural FEA in ANSYS Workbench. Eigenvalue analysis of the dynamic modes." },
      { title: "Verify", text: "Eigenvalues checked in NumPy. Three orthographic views cross-checked to within 1 to 5 mm." },
      { title: "Report the limits", text: "One load case, no mesh-convergence study, no test data: stated, not hidden." }
    ],
    /* The thesis parameter sweep, drawn as a ruler of fibre angles. */
    sweep: { from: -45, to: 45, step: 5, maxDeformation: -40, minDeformation: 5, lowStress: [-25, -20] },
    experience: [
      { title: "Parametric finite-element study of a composite wing", where: "Graduation thesis, Nanchang Hangkong University",
        text: "Nineteen lay-ups compared on deformation, equivalent stress and shear stress in ANSYS Workbench. I defended it on 15 December 2017.", link: "#engineering" },
      { title: "Linearised longitudinal dynamics of a light aircraft", where: "Flight Dynamics coursework",
        text: "State-space model, modal analysis of the short-period and phugoid modes, and numerical verification in NumPy.", link: "#engineering" },
      { title: "Geometry verification across three views", where: "Airplane Conceptual Design",
        text: "A 0.30 m wing-root offset found in one view, traced to its source and fixed, with residuals of 1 to 5 mm across all three.", link: "#engineering" },
      { title: "Leakage-controlled classification on a national dataset", where: "Industry capstone, AIH",
        text: "9,855 schools. I excluded the variable that defines the label from the model inputs and report the ROC-AUC of 0.972 as label recovery, not sales conversion.", link: "#projects" }
    ],
    photos: [
      { photo: "research-defence-day.jpg", alt: "Rafsan presenting at his undergraduate thesis defence, 15 December 2017", caption: "Defending my thesis, 15 December 2017." },
      { photo: "research-defence-material.jpg", alt: "Rafsan presenting the materials slide of his thesis to the examiners", caption: "Walking the examiners through the materials." }
    ],
    /* Broad on purpose. Three groups: engineering, where the two meet, AI. */
    interests: {
      aero: ["Aerospace structures and composite materials", "Finite-element analysis and simulation", "Flight dynamics, stability and control", "Aircraft design", "Aircraft maintenance and reliability"],
      overlap: ["Machine-learning surrogate models for engineering analysis", "Physics-informed machine learning", "Structural health monitoring and damage prediction", "Predictive maintenance from aviation data", "AI agents for engineering workflows"],
      ai: ["Machine learning and deep learning", "LLM applications and retrieval (RAG)", "Agentic AI and tool use", "Trustworthy, testable AI systems", "Data engineering for model-ready data"]
    },
    direction: {
      title: "The idea I keep coming back to",
      paragraphs: [
        "Engineering analysis is slow for good reasons: every result has to be checked. Machine learning trained on simulations, test data and maintenance records can make much of that work faster, and AI agents can take over the repetitive steps of design and analysis. Neither is worth much unless an engineer can trust it.",
        "That is where I want to build: AI that helps aviation move faster without lowering the standard of proof, and aviation problems that push AI engineering to be more rigorous."
      ],
      flow: ["Simulations and test data", "A model learns the behaviour", "Estimates in milliseconds", "Checked against unseen cases"]
    }
  },

  /* ---------- SKILLS ----------
     icon picks the logo. Logos available: python, pandas, numpy, jupyter,
     git, github, mysql, postgresql, scikitlearn, pytorch, fastapi,
     pydantic, pytest, docker, githubactions, langgraph, dassaultsystemes,
     ansys, autocad, json, gnubash, google, coursera, youtube.
     Drawn badges (no official logo): excel, powerbi, tableau, tsql, azure,
     llm, vector, rag, http, eval, shield.                                  */
  skills: {
    title: "Skills",
    summary: "The tools I work with, what I have built with them, and what I am learning now.",
    groups: [
      { name: "Engineering", items: [
        { name: "CATIA V5", icon: "dassaultsystemes", detail: "I built the 3D surface model of a fighter-style configuration." },
        { name: "AutoCAD", icon: "autocad", detail: "I drew the top, side and front views of the same configuration." },
        { name: "ANSYS Workbench", icon: "ansys", detail: "I ran static structural FEA on 19 composite lay-ups for my thesis." }
      ]},
      { name: "Programming", items: [
        { name: "Python", icon: "python", detail: "My main language: cleaning, validation, modelling and automation across eight projects." },
        { name: "pandas", icon: "pandas", detail: "I cleaned more than one million retail transactions in a seven-script pipeline." },
        { name: "NumPy", icon: "numpy", detail: "From data arrays to checking an aircraft’s stability eigenvalues." },
        { name: "Jupyter", icon: "jupyter", detail: "Where I build and document step-by-step analyses." },
        { name: "Terminal, pip and venv", icon: "gnubash", detail: "I run scripts, install packages and keep each project’s environment separate." },
        { name: "Git and GitHub", icon: "github", detail: "Every project I build is version-controlled and public." }
      ]},
      { name: "Data and databases", items: [
        { name: "SQL: MySQL, PostgreSQL, T-SQL", icons: ["mysql", "postgresql", "tsql"], detail: "Joins, CTEs and window functions across five projects, including 11 business queries in my attrition study." },
        { name: "Excel", icon: "excel", detail: "My daily tool for two and a half years of KPI reporting: pivot tables, XLOOKUP, SUMIFS, Power Query." },
        { name: "Power BI and DAX", icon: "powerbi", detail: "I built executive dashboards in five projects: data models, DAX measures, Power Query." },
        { name: "Tableau", icon: "tableau", detail: "I built a telemetry dashboard over 160,000 IoT records in a job simulation." }
      ]},
      { name: "Machine learning", items: [
        { name: "scikit-learn", icon: "scikitlearn", detail: "Random Forest, Logistic Regression and K-Means, with leakage control and class weighting." },
        { name: "Model evaluation", icon: "eval", detail: "ROC-AUC, class weighting and leakage checks, reported with what the score does not mean." }
      ]}
    ],
    /* Small diagrams of the models I have used, and where. */
    models: [
      { art: "logistic", name: "Logistic Regression", used: "Employee attrition risk" },
      { art: "forest", name: "Random Forest", used: "Schools priority check and attrition drivers" },
      { art: "kmeans", name: "K-Means clustering", used: "Segmenting 9,855 schools" },
      { art: "rfm", name: "RFM scoring", used: "Seven customer segments from 1M+ transactions" },
      { art: "eigen", name: "Modal analysis", used: "Aircraft stability eigenvalues in NumPy" }
    ],
    /* My AI engineering path. status: "Learning now" or "Next". */
    aiPath: [
      { name: "APIs", detail: "HTTP, JSON and requests", icons: ["http", "json"], status: "Learning now" },
      { name: "Services and testing", detail: "FastAPI, Pydantic and pytest", icons: ["fastapi", "pydantic", "pytest"], status: "Next" },
      { name: "LLM applications", detail: "One LLM API, prompts and structured output", icons: ["llm"], status: "Next" },
      { name: "Retrieval and evaluation", detail: "Embeddings, vector search, RAG, measuring answers", icons: ["vector", "rag", "eval"], status: "Next" },
      { name: "Agents", detail: "Tool calling, then LangGraph, with security basics", icons: ["langgraph", "shield"], status: "Next" },
      { name: "Deployment", detail: "Docker, Azure and GitHub Actions", icons: ["docker", "azure", "githubactions"], status: "Next" },
      { name: "Deep learning", detail: "Neural networks in PyTorch", icons: ["pytorch"], status: "Next" }
    ],
    /* The same seven checks, in the same order, on every dataset. */
    process: { name: "PCUVCOD", text: "The same seven checks, in the same order, on every dataset I clean.",
      steps: ["Profile", "Completeness", "Uniqueness", "Validity", "Consistency", "Outliers", "Document"] }
  },

  /* ---------- EXPERIENCE ---------- */
  experience: {
    title: "Experience",
    summary: "Where I have worked, and the evidence for how I work.",
    /* icon: "data", "store", "team", "people" or "aircraft". */
    items: [
      { icon: "data", when: "October to November 2026", where: "Powerdata Group Consulting, Melbourne", title: "Data analyst intern",
        text: "I analysed Zoho CRM records and Excel and CSV datasets, cleaned and organised them for reporting, and built Power BI reports. I delivered a demonstration analysis of 106 historical AusTender awards worth $5.89M across 21 service categories, as an interactive dashboard and an executive brief. I provisionally grouped 81 supplier-name variants into 65 groups, found 4 IT and BI contracts worth $113.5K, and recommended identity checks and recent multi-agency data before any outreach.",
        stats: ["106 awards", "$5.89M", "21 categories"] },
      { icon: "store", when: "May 2025 to now", where: "Chemist Warehouse, Melbourne", title: "Pharmacy assistant, with an Excel tracker I built",
        text: "I built an Excel task-tracking prototype for a six-person store team: daily task allocation, status dropdowns, conditional formatting and sign-off checks. Daily and monthly completion summaries run on COUNTIFS, SUMIFS and INDEX/MATCH, with a date-selectable management dashboard and a quick-start guide for staff.",
        stats: ["6-person team", "Daily and monthly summaries"] },
      { icon: "team", when: "June 2026", where: "Industry capstone, AIH", title: "Team lead and data analyst",
        text: "I led six people through a live client engagement: eight state and territory files merged and cleaned, a transparent priority score, K-Means segmentation and a Random Forest check, delivered as a CRM-ready list and a Power BI dashboard.",
        stats: ["9,855 schools", "Top 200 to CRM"] },
      { icon: "people", when: "About two and a half years", where: "Kazi Farms Group, Bangladesh", title: "HR Executive, organisational development",
        text: "I ran KPI reporting and the performance-evaluation cycle for more than 500 employees, and reported to CEO and GM level.",
        stats: ["500+ employees", "CEO and GM reporting"] },
      { icon: "aircraft", when: "9 to 20 October 2017", where: "HNA Aviation Technic Co., Ltd., China", title: "Aviation maintenance intern",
        text: "Twelve days of internship and training in aviation engineering and maintenance.",
        stats: ["12 days"] }
    ],
    evidence: { title: "How I work, with the evidence", note: "Anyone can list soft skills. These are the places you can check mine.", groups: [
      { icon: "measure", name: "Careful with numbers", items: ["In my retail ETL build, 58 input rows reconcile exactly: 2 duplicates, 53 accepted, 3 quarantined with a reason.", "In my auto-sales build, I explain a $49,713.64 gap between two views to the cent."] },
      { icon: "limits", name: "Honest about limits", items: ["My schools model reports ROC-AUC 0.972 and says plainly that it does not measure sales conversion.", "Every engineering project here states what it did not analyse."] },
      { icon: "lead", name: "Leads and delivers", items: ["I led a six-person capstone team to a client handover: a Top 200 outreach list loaded into the client’s CRM, and an executive dashboard.", "I ran a performance-evaluation cycle for more than 500 employees."] },
      { icon: "steady", name: "Consistent", items: ["I train six days a week, about an hour a day.", "I publish a build log for each practice project."] }
    ]}
  },

  /* ---------- CREDENTIALS AND HONOURS ---------- */
  credentials: {
    title: "Credentials and honours",
    summary: "Honours, degrees, my engineering assessment and certificates.",
    honours: {
      title: "Honours and scholarships",
      feature: {
        title: "Jiangxi Provincial Government Scholarship, awarded twice",
        text: "In my second and third years I sat a competitive exam open to all international students at my university. I was one of the two students selected. Each award was RMB 20,000, RMB 40,000 in total.",
        stats: [["2", "times awarded"], ["2", "students selected each time"], ["RMB 40,000", "in total"]]
      },
      /* The honours timeline, in order. */
      timeline: [
        { when: "2011", title: "Golden A+", text: "Secondary School Certificate: A+ in every subject, awarded a gold medal." },
        { when: "2013", title: "GPA 5.00 of 5.00", text: "Higher Secondary Certificate, science group: A+ in every subject." },
        { when: "Year 2", title: "Provincial scholarship", text: "Jiangxi Provincial Government Scholarship, RMB 20,000." },
        { when: "Year 3", title: "Provincial scholarship, again", text: "Jiangxi Provincial Government Scholarship, RMB 20,000." },
        { when: "2017", title: "BEng completed", text: "Thesis defended 15 December, degree awarded 26 December." }
      ],
      photos: [
        { photo: "honour-scholarship-stage.jpg", alt: "Rafsan receiving a scholarship certificate on stage at Nanchang Hangkong University", caption: "Receiving a scholarship certificate at Nanchang Hangkong University." },
        { photo: "honour-credential.jpg", alt: "Red honorary credential folder", caption: "My honorary credential." },
        { photo: "honour-ssc-medal.jpg", alt: "Rafsan wearing the gold medal awarded for a Golden A+ in 2011", caption: "2011: the gold medal for a Golden A+." }
      ]
    },
    degrees: [
      { icon: "wing", title: "Bachelor of Engineering, Aircraft Design and Engineering", school: "Nanchang Hangkong University, China", when: "February 2014 to December 2017", text: "Degree awarded 26 December 2017.", photo: "degree-beng.jpg", photoAlt: "Rafsan in graduation gown holding his Nanchang Hangkong University degree certificate" },
      { icon: "ledger", title: "Master of Business Administration", school: "North South University, Dhaka", when: "Completed April 2021", text: "" },
      { icon: "chart", title: "Master of Business Information Systems (Data Analytics)", school: "Australian Institute of Higher Education, Melbourne", when: "All course requirements completed, July 2026", text: "160 of 160 credit points." }
    ],
    /* icon: "google", "ibm" or "microsoft". */
    certificates: [
      { icon: "google", title: "Google Advanced Data Analytics Professional Certificate", meta: "Coursera, 12 January 2026", text: "Statistics, regression and machine learning with Python.", link: "https://coursera.org/verify/professional-cert/QMLEPBEVKU9A" },
      { icon: "ibm", title: "IBM Data Analyst Professional Certificate", meta: "Coursera, 11 January 2026", text: "Excel, SQL, Python and dashboards across 11 courses.", link: "https://coursera.org/verify/professional-cert/9IOZYKAWYNQL" },
      { icon: "microsoft", title: "Creative Designing in Power BI", meta: "Microsoft, through Coursera, 28 January 2026", text: "Report design in Power BI.", link: "https://coursera.org/verify/LPHLUJS5L5N1" }
    ],
    preparing: "Preparing now: Microsoft PL-300, Power BI Data Analyst. Not yet sat.",
    training: [
      { name: "Industry training", items: ["Internship and training in aviation engineering and maintenance, HNA Aviation Technic Co., Ltd., 9 to 20 October 2017"] },
      { name: "Job simulations (Forage). These are learning simulations, not employment.", items: ["Quantium: retail analytics", "Commonwealth Bank: data science", "Deloitte: data analytics"] },
      { name: "Short courses", items: ["Fundamentals of Human Resource Management, HR Perception (November to December 2020)", "Leadership Skill and Conflict Management training, HR Perception (2021)", "Spoken English course, Mentors’ (2018)"] }
    ],
    subjects: { title: "Subjects I studied, by degree", note: "Taken from my academic transcripts. These are subjects studied, not skill claims.", groups: [
      { name: "BEng, Aircraft Design and Engineering (Nanchang Hangkong University)", items: ["Aerodynamics", "Flight Dynamics", "Computational Fluid Dynamics", "Foundation and Application of Finite Element Analysis", "Airplane Conceptual Design", "Airplane Structure Design", "Computer Aided Design and Manufacture of Aircraft", "Aircraft Manufacture Technology", "Aero-engine Principle and Structure", "Engineering Thermodynamics", "Heat Transfer", "Engineering Mechanics", "Principle of Automatic Control", "Avionics", "Aviation Fuel and Hydraulic System", "Radar Technology", "Advanced Mathematics", "Linear Algebra", "Probability and Statistics", "C Programming Language", "C++ Program Designing", "Auto CAD"] },
      { name: "Master of Business Information Systems, Data Analytics (AIH)", items: ["Machine Learning for Data Analytics", "Artificial Intelligence Fundamentals", "Business Analytics", "Applied Data Analytics", "Discovering Data Analytics", "Data Analyst Professional", "Big Data and Visualisation", "Database Management Systems", "Software Development", "Systems Analysis Design", "Business Process Management", "Information Systems Applications in Business", "Project Management for Data Analytics Solutions", "Professional Practice in Information Systems", "Practical Industry Project (capstone)"] },
      { name: "MBA (North South University)", items: ["Business Statistics", "Computer Information Systems", "Managerial Economics", "Operations Management", "Strategic Management", "Managerial Finance", "Accounting Principles", "Marketing Management", "Human Resource Management", "Strategic Human Resource Management", "Human Resource Planning and Staffing", "Industrial Relations", "Management and Organizational Behavior"] }
    ]}
  },

  /* ---------- VIDEOS AND WRITING ----------
     The videos come from the projects below that have a video link.
     featured is the id of the project whose video plays first.        */
  writing: {
    title: "Videos and writing",
    summary: "Walkthroughs where I present a project from the question to the decision, and short notes on how I work.",
    channel: "Rafsan Data & AI Lab",
    channelUrl: "https://www.youtube.com/@AhmedAlRafsan",
    channelText: "On my channel I present my projects the way I would to a manager or a review panel: the question, the method, what the numbers show, and what I would decide.",
    featured: "hr",
    coversTitle: "Each walkthrough covers",
    covers: ["The question", "The data", "The method", "The dashboard", "The decision"]
  },

  /* ---------- BEYOND THE DESK (photo groups) ---------- */
  life: {
    title: "Beyond the desk",
    summary: "The person behind the work: where I trained, who I studied with, and the habits I keep.",
    groups: [
      { title: "Inside a maintenance hangar",
        text: "During my degree I trained with an airline engineering company. I saw how the aviation industry runs from the inside: how a jet engine works, how it is inspected and repaired part by part, and how regulation governs every step.",
        photos: [
          { photo: "hangar-training-centre.jpg", alt: "Rafsan at the Lufthansa HNA Technical Training centre", caption: "At the Lufthansa HNA Technical Training centre." },
          { photo: "hangar-engine-team.jpg", alt: "Rafsan discussing engine systems beside an open nacelle", caption: "Talking through engine systems beside an open nacelle." },
          { photo: "hangar-group.jpg", alt: "Rafsan's training group in front of a Lucky Air aircraft in a hangar", caption: "Our training group in the hangar." }
        ]},
      { title: "Many countries, one cohort",
        text: "I studied engineering in English in an international cohort, with classmates from many countries. Learning and working across cultures every day is still one of the most useful things I bring to a team.",
        photos: [
          { photo: "cohort-suits.jpg", alt: "Rafsan with classmates from many countries on the university steps", caption: "My cohort at Nanchang Hangkong University." },
          { photo: "cohort-graduates.jpg", alt: "Rafsan's graduating class in gowns on the university steps", caption: "The class of 2017 on graduation day." }
        ]},
      { title: "Graduation",
        text: "I finished my degree far from home, and carried my country’s flag across the stage.",
        photos: [
          { photo: "grad-portrait.jpg", alt: "Rafsan in graduation gown holding flowers in front of the university banner", caption: "Graduation day at Nanchang Hangkong University." },
          { photo: "grad-flag.jpg", alt: "Rafsan holding the flag of Bangladesh on the graduation stage", caption: "Carrying the flag of Bangladesh at the ceremony." }
        ]},
      { title: "Six days a week",
        text: "I train six days a week, about an hour a day. Training has been part of my routine since university, and it is where I learned that progress comes from showing up.",
        photos: [
          { photo: "gym-university-1.jpg", alt: "Rafsan training at the gym during university", caption: "Training during university." },
          { photo: "gym-university-2.jpg", alt: "Rafsan in the university gym", caption: "Same habit, different gym." },
          { photo: "training-1.jpg", alt: "Rafsan training at a gym in Melbourne", caption: "Still training, in Melbourne." }
        ]}
    ]
  },

  /* ---------- CONTACT ---------- */
  contact: {
    title: "Let’s talk",
    text: "If my work connects with yours, whether that is a role, a project or a research question, I would be glad to hear from you. I read and reply to every message myself."
  },

  /* ---------- THE OFFICE TOUR GUIDE (office.html only) ---------- */
  guide: {
    name: "Mira",
    role: "Virtual guide",
    welcome: [
      "Welcome. I’m Mira, the virtual guide for this office.",
      "Would you like to meet Rafsan? I can walk you to his room."
    ],
    corridor: [
      "This way. Each room on this floor holds one side of his work.",
      "Aeronautical engineering, research, projects, skills and credentials.",
      "At the end of the corridor is the AI workshop, where he shows what he is learning now."
    ],
    door: [
      "Here we are. This is Rafsan’s office.",
      "Every room is open to you from the floor directory. Enjoy your visit."
    ]
  },

  /* ---------- PROJECTS ----------
     To add a project, copy one entry, change the text, and give it a new id.
     featured:true puts a project in the three large cards at the top of
     the Projects section (keep it to three).
     Fields: id, title, type, category, tags, description, outcome, metrics,
             stat (one line of scale and result for the project list),
             repo (GitHub repository name), video (YouTube link, optional),
             ai (a note on AI assistance, optional).
     The drawing on each card is chosen by the project's id or category.
     The fields short, theme, icon, label and art are left over from older
     versions of the site and can stay as they are.                      */
  projects: [
 {id:'schools',featured:true,title:'Australian Schools Priority Targeting',short:'Which schools<br>come first?',category:'Machine learning',tags:['Python','Power BI','Machine learning'],theme:'blue',art:'roc',icon:'school',label:'THE INDUSTRY CAPSTONE',stat:'9,855 schools · 6-person team',type:'Client capstone',description:'Which schools should a small outreach team contact first? I led a six-person team through a live industry capstone, building a Python pipeline that cleaned national school data, scored priorities and segmented the market with K-Means. Random Forest helped examine high-priority patterns, with a target-correlated feature excluded to avoid leakage.',outcome:'Delivered a Top-200 outreach list, loaded into the client’s CRM, and a two-page Power BI executive dashboard, with support after handover.',metrics:['9,855 schools','3,344 high-priority schools','AUC 0.972','Top 200 → CRM'],repo:'schools-priority-segmentation-analysis'},
 {id:'retail-etl',featured:true,title:'Retail Sales ETL & Data Quality Pipeline',short:'Every row<br>accounted for.',category:'Data engineering',tags:['Python','Data engineering','ETL'],theme:'navy',art:'pipeline',icon:'pipeline',label:'DATA ENGINEERING · ETL',sub:'EXTRACT · VALIDATE · LOAD · VERIFY',stat:'58 rows in · 53 accepted · 3 quarantined',type:'Data engineering build',description:'A batch ETL pipeline in Python and pandas, built step by step in a Jupyter notebook. It loads a messy retail CSV inside try/except with logging, profiles nulls and types, removes exact duplicates, and converts dates, prices and quantities with errors="coerce" and a nullable Int64. A boolean mask splits the rows, and every rejected row gets a reason from np.select. Both sets are exported to CSV and JSON, read back and checked, and the counts are logged.',outcome:'Every input row is accounted for: 58 raw rows = 2 duplicate copies removed + 53 accepted + 3 quarantined (2 missing quantity, 1 invalid price). Nothing was filled with zero, and an unknown discount stayed unknown rather than becoming 0%.',metrics:['58 rows in','2 duplicates removed','53 accepted','3 quarantined with a reason'],repo:'retail-sales-etl-pipeline',steps:['Extract & log','Profile','Clean','De-duplicate','Cast types','Validate & quarantine','Load CSV + JSON','Read back & log'],rules:[['Exact duplicate rows','2','Drop, keep the first copy'],['Missing Quantity','2','Quarantine: never invent units sold'],['UnitPrice "not available"','1','Coerce to missing, then quarantine'],['Missing DiscountPct','1','Keep as missing: unknown is not 0%'],['Missing ShippingState','1','Label "Unknown" and keep the sale']],logLines:['INFO:root:Raw CSV loaded successfully','INFO:root:Raw Records: 58','INFO:root:Accepted Records: 53','WARNING:root:Rejected Records: 3'],ai:'A learning build on a deliberately small, synthetic 58-row dataset. I wrote the pipeline; AI (ChatGPT) reviewed the code and helped with the documentation and GitHub publishing.'},
 {id:'hr',featured:true,title:'Predicting Employee Attrition',short:'People leave.<br>Data gives clues.',category:'Machine learning',tags:['Python','SQL','Power BI','Machine learning'],theme:'purple',art:'people',icon:'people',label:'PEOPLE ANALYTICS',stat:'1,470 employee records · Risk modelling',type:'Portfolio project',description:'Real HR reporting experience paired with machine learning across 1,470 employee records. Logistic Regression and Random Forest models used balanced class weights, with feature importance to explain the main attrition drivers. The project includes 11 SQL business queries and a two-page Power BI dashboard with eight custom DAX measures.',outcome:'Classified employees into High, Medium and Low risk groups, with 344 flagged for retention review in the project dataset.',metrics:['1,470 records','344 flagged for review','11 SQL queries','2 dashboard pages'],repo:'HR-Employee-Attrition-Predictor',video:'https://youtu.be/V1bS9olSKx8',videoTitle:'Employee attrition: the model, the dashboard & the decisions'},
 {id:'rfm',title:'Customer Segmentation & RFM',short:'Know the customer.<br>Find the value.',category:'Customer analytics',tags:['Python','SQL','Power BI'],theme:'mint',art:'clusters',icon:'chart',label:'CUSTOMER INTELLIGENCE',stat:'1M+ transactions · 7 customer segments',type:'Portfolio project',description:'A seven-script Python pipeline cleaned more than one million UK online-retail transactions. RFM scoring grouped 5,878 customers into seven behavioural segments and revealed a 177× customer-lifetime-value gap between the top and bottom segments.',outcome:'A three-page executive dashboard connected customer behaviour to retention actions. The analysis found 75–80% of new customers churned within the first month, highlighting onboarding as an area for action.',metrics:['1M+ transactions','5,878 customers','7 segments','177× CLV gap'],repo:'Customer-Segmentation-RFM-Analysis',video:'https://youtu.be/27dancSDNOo',videoTitle:'RFM segmentation: from transactions to a retention strategy'},
 {id:'fashion',title:'Fashion Retail Intelligence',short:'Revenue fell 89%.<br>What happened?',category:'Business intelligence',tags:['SQL','Python','Power BI'],theme:'peach',art:'bars',icon:'chart',label:'THE BUSINESS QUESTION',stat:'24 months of sales · 4 recommendations',type:'Portfolio project',description:'A root-cause investigation of an 89% revenue decline across 24 months of sales data. Ten SQL queries using GROUP BY, HAVING and LAG traced the decline: 137 of 149 customers went inactive, including the top customer, who accounted for 12.7% of total revenue.',outcome:'Four executive recovery recommendations, supported by a four-page Power BI dashboard.',metrics:['24 months of data','89% revenue decline','10 SQL queries','4 recommendations'],repo:'Fashion-Retail-Intelligence',video:'https://youtu.be/Y8TWx8vikOE',videoTitle:'Investigating an 89% revenue decline with SQL & Power BI'},
 {id:'melbourne',title:'Melbourne CBD Business Analysis',short:'A city’s story.<br>Written in data.',category:'Business intelligence',tags:['Python','Power BI'],theme:'slate',art:'bars',icon:'grid',label:'MELBOURNE, UNDER THE LENS',stat:'20+ years of open data · Business trends',type:'Portfolio project',description:'An exploration of more than 20 years of Victorian Government open data on Melbourne CBD business establishments.',outcome:'Identified 45% growth in the CBD business base and examined vacant-space trends as an indicator of the city’s recovery.',metrics:['20+ years of data','45% business growth','Government open data'],repo:'melbourne-cbd-business-analysis'},
 {id:'quantium',title:'Quantium · Retail Analytics',short:'Small purchases.<br>Big patterns.',category:'Job simulations',tags:['Python','SQL'],theme:'lime',art:'clusters',icon:'database',label:'FORAGE · JOB SIMULATION',stat:'260K+ transactions · 3 trial stores',type:'Job simulation',description:'Analysed more than 260,000 chip transactions in a Forage job simulation. Customers were segmented by lifestage and premium tier.',outcome:'Evaluated trial-store layout uplift across three locations.',metrics:['260K+ transactions','3 trial stores','Customer segmentation'],repo:'quantium-retail-analytics'},
 {id:'commbank',title:'Commonwealth Bank · Data Science',short:'Better structure.<br>Better answers.',category:'Job simulations',tags:['SQL'],theme:'blue',art:'bars',icon:'database',label:'FORAGE · JOB SIMULATION',stat:'50K+ records · Relational data design',type:'Job simulation',description:'A Forage simulation covering conditional aggregation on more than 50,000 records, personal-information anonymisation and relational data design.',outcome:'Designed a five-table schema in third normal form and practised privacy-aware data handling.',metrics:['50K+ records','5-table schema','3NF design'],repo:'commbank-data-science-simulation'},
 {id:'deloitte',title:'Deloitte · Data Analytics',short:'Find the signal.<br>Explain the risk.',category:'Job simulations',tags:['Tableau','Excel'],theme:'rose',art:'clusters',icon:'chart',label:'FORAGE · JOB SIMULATION',stat:'160K+ telemetry records · 4 factories',type:'Job simulation',description:'A Forage simulation using Tableau to analyse more than 160,000 IoT telemetry records across four factories, alongside an HR audit scenario.',outcome:'Built a telemetry dashboard and completed a forensic pay-equity classification.',metrics:['160K+ IoT records','4 factories','Tableau dashboard'],repo:'deloitte-forensic-analytics'},
 {id:'auto-sales',title:'Auto Sales · Data Cleaning & Validation',short:'Messy rows in.<br>Trusted totals out.',category:'Practice builds',tags:['Python','Data cleaning'],theme:'slate',art:'bars',icon:'database',label:'BUILD LOG · MINI PROJECT 01',sub:'PANDAS · VALIDATE · AGGREGATE',stat:'2,723 order lines · Every bad row quarantined',type:'Practice build · Oct 2026',log:true,date:'9 Oct 2026',steps:['Deduplicate','Validate types','Quarantine','Enrich','Aggregate'],journey:'Runway · Data Analyst. A practice build on the habits Analytics Engineering is made of: explicit cleaning rules, quarantine tables and row counts that reconcile. Next iteration: the same pipeline in SQL, then dbt tests.',description:'A small, deliberate pandas pipeline on a messy sales export. Duplicates were removed on a composite key, keeping the latest export. Sales values stored as text were converted, with 24 invalid rows saved to a quarantine table rather than deleted. Day-first dates were parsed with the original kept for audit, text fields standardised, and a product lookup joined in without inflating rows.',outcome:'Answered three business questions on shipped sales: Classic Cars lead at $3.60M (40% of shipped sales), the USA leads at $3.07M, and November peaked in both 2018 and 2019. The totals reconcile: the only gap between views is the 15 rows with unreadable dates.',metrics:['2,723 clean rows','24 rows quarantined','0 rows inflated by the join','92.3% of value shipped'],repo:'Data-to-AI/tree/main/01-auto-sales-data-cleaning'}
],

  /* ---------- BLOG POSTS ----------
     To add a post, copy one entry to the top of the list.               */
  posts: [
  {
    "id": "mini-project-01-auto-sales",
    "title": "Build Log #01: 2,700 Messy Rows and Why I Quarantine Instead of Delete",
    "category": "Build Log",
    "date": "2026-10",
    "excerpt": "A small project, on purpose. I took a deliberately messy sales export and practised the step every dashboard quietly depends on: making the numbers trustworthy first.",
    "body": [
      "This one is small, and that is the point. The dataset was a messy export of scale-model vehicle orders from 2018 to 2020: re-exported duplicate lines, sales values stored as text with stray commas and spaces, dates in more than one format, missing cities, and product codes that did not exist in the lookup table.",
      "The rule I held myself to: nothing that fails a check disappears silently. 24 rows with sales values that could not be read went into a quarantine table instead of being dropped. 15 rows with unreadable dates stayed in the product and country totals, and were left out only of the monthly trend, because their sales amounts were still valid. Ten unmatched product codes were labelled Unknown, so they show up in the report instead of vanishing from it.",
      "Then the part I enjoy most: making the numbers tie out. Shipped sales by product line came to $8,931,679.78. The monthly view came to $8,881,966.14. The $49,713.64 difference is exactly the shipped rows with unreadable dates. When two views of the same data disagree, I want to be able to explain the gap to the cent.",
      "Only after that did I answer the business questions. Classic Cars led shipped sales at $3.60M, about 40% of the total. The USA led the countries at $3.07M. And November was the peak month in both 2018 and 2019, a seasonal pattern worth planning stock and staffing around.",
      "Where this fits in my journey: these are Analytics Engineering habits in miniature. Explicit rules, quarantine tables and reconciled row counts are what dbt tests formalise. The next version of this project will rebuild the same pipeline in SQL and then as tested dbt models. The notebook and README are on my GitHub."
    ],
    "theme": "slate"
  },
  {
    "id": "data-cleaning-framework",
    "title": "Why I Built My Own Data-Cleaning Framework",
    "category": "Data Practice",
    "date": "2026-07",
    "excerpt": "Every analyst has a cleaning process. Most never write it down — which means it changes a little every time, and the mistakes change with it.",
    "body": [
      "Early in my portfolio work I kept catching the same class of error at different stages: a duplicate check I'd done on one project and skipped on the next, an outlier review that happened before validation here and after it there. Nothing catastrophic. Just inconsistent — and inconsistency is where wrong numbers hide.",
      "So I fixed it the way an engineer would: I standardised the sequence. PCUVCOD — Profile, Completeness, Uniqueness, Validity, Consistency, Outliers, Document. Seven checks, same order, every dataset, no exceptions.",
      "It sounds rigid. In practice it's the opposite. Once the sequence is automatic, the analysis gets faster, because I'm never wondering whether I already checked for nulls three steps back. The checklist runs; my attention goes to what the data is saying.",
      "The \"D\" earns its place most often. On my Fashion Retail investigation, documented cleaning steps let me trace an 89% revenue collapse back through the source data's structure in minutes instead of re-auditing the whole pipeline. Write down what you did to the data. Future-you is the first stakeholder you owe an audit trail."
    ],
    "theme": "blue"
  },
  {
    "id": "xlookup-mindset",
    "title": "XLOOKUP Isn't a Better VLOOKUP. It's a Different Mindset.",
    "category": "Excel",
    "date": "2026-07",
    "excerpt": "VLOOKUP taught a generation of analysts three quiet bad habits: count your columns, hope nobody inserts a new one, and accept an approximate match you never asked for.",
    "body": [
      "XLOOKUP removes all three — it searches any direction, returns exact matches by default, and doesn't break when the sheet grows. But the interesting part isn't the feature list. It's what the defaults say.",
      "Every tool encodes assumptions. VLOOKUP's defaults assume your data is sorted and your structure is frozen. Real business spreadsheets are neither. Half the \"Excel is unreliable\" stories I've heard trace back to a default the analyst never questioned.",
      "So the habit I've built — in Excel and everywhere else — is asking one question before trusting any function: what is this assuming that I haven't checked? INDEX-MATCH, SUMIFS, a DAX measure, a pandas merge — same question every time.",
      "The tool is rarely wrong. The unexamined default usually is."
    ],
    "theme": "mint"
  },
  {
    "id": "calculate-filter-context",
    "title": "CALCULATE Is the Whole Game",
    "category": "Power BI",
    "date": "2026-07",
    "excerpt": "You can use Power BI for months without understanding filter context. Your dashboards will even work — until the day a total doesn't match a detail row and you can't explain why.",
    "body": [
      "That day is usually when CALCULATE starts making sense. It's the function that modifies filter context: it takes the filters a visual hands to your measure, and rewrites them. Every \"why is this number wrong\" mystery I've debugged in DAX came down to context someone didn't know they were changing.",
      "The mental shift that made DAX click for me: a measure isn't a formula, it's a question whose answer depends on where it's asked. The same measure returns different numbers in different visuals because each visual asks from a different context. Once that lands, CALCULATE stops being intimidating and starts being the steering wheel.",
      "My rule for every measure I ship: state in one sentence which filters it respects and which it overrides. If I can't, the measure isn't finished — I just haven't found the wrong number yet."
    ],
    "theme": "peach"
  }
]

};

/* =====================================================================
   NO NEED TO EDIT BELOW THIS LINE.
   This builds the rooms of the office tour (office.html) from the
   content above, so both pages always say the same thing.
   ===================================================================== */
(function (S) {
  var P = S.person, E = S.engineering, Rs = S.research, K = S.skills,
      X = S.experience, C = S.credentials, L = S.life;
  P.intro = [P.about];
  var facts = function (f) { return (f || []).map(function (x) { return x[0] + ": " + x[1]; }).join(". ") + "."; };

  S.rooms = [
    { id: "office", wing: "present", name: "Rafsan’s office", plaque: "Profile",
      summary: "Who I am, in two minutes.",
      guideNote: "Start here. Every number in the other rooms traces to a project or a document.",
      blocks: [
        { type: "profile" },
        { type: "timeline", title: S.route.title, items: S.route.legs.map(function (l) {
            return { when: l.when + ", " + l.city, title: l.title, text: l.text };
          }).concat([{ when: "Now", title: S.route.now.title, text: S.route.now.text }]) }
      ] },
    { id: "aeronautical", wing: "present", name: "Aeronautical studio", plaque: "Engineering",
      summary: E.summary,
      guideNote: "Each project states its own scope. Where no analysis was done, the page says so.",
      blocks: [
        { type: "text", title: "An engineer’s training", paragraphs: [E.intro, E.assessment.title + " (" + E.assessment.date + "): " + E.assessment.text + " " + E.assessment.code + "."] },
        { type: "cards", title: "Engineering projects", items: E.projects.map(function (p) {
            return { title: p.title, meta: facts(p.facts), text: p.text, points: p.points };
          }).concat([{ title: E.training.title, meta: facts(E.training.facts), text: E.training.text }]) },
        { type: "list", title: "Tools used in this work", groups: [{ name: "", items: E.tools }] }
      ] },
    { id: "research", wing: "present", name: "Research desk", plaque: "Research",
      summary: Rs.summary,
      guideNote: "Research experience, methods, and the questions behind the work. The two-minute version.",
      blocks: [
        { type: "text", title: "Research experience", paragraphs: [Rs.intro] },
        { type: "timeline", title: "How I work through a problem", items: Rs.method.map(function (m, i) { return { when: "Step " + (i + 1), title: m.title, text: m.text }; }) },
        { type: "cards", title: "Research-style work to date", items: Rs.experience.map(function (e) { return { title: e.title, meta: e.where, text: e.text }; }) },
        { type: "list", title: "Research interests", groups: [
          { name: "Aeronautical engineering", items: Rs.interests.aero },
          { name: "Where the two fields meet", items: Rs.interests.overlap },
          { name: "AI engineering", items: Rs.interests.ai } ] },
        { type: "text", title: Rs.direction.title, paragraphs: Rs.direction.paragraphs }
      ] },
    { id: "projects", wing: "present", name: "Project gallery", plaque: "Projects",
      summary: "Ten builds, each with its repository.",
      guideNote: "Open any project for the method, the numbers and the caveats. Portfolio studies use public data and say so.",
      blocks: [ { type: "projects", title: "All projects" }, { type: "videos", title: "Video walkthroughs" } ] },
    { id: "data", wing: "present", name: "Skills lab", plaque: "Skills",
      summary: K.summary,
      guideNote: "Every tool here comes with something that was actually built with it.",
      blocks: [
        { type: "list", title: "Toolkit", groups: K.groups.map(function (g) {
            return { name: g.name, items: g.items.map(function (i) { return i.name + ": " + i.detail; }) };
          }) },
        { type: "list", title: "Models I have used", groups: [{ name: "", items: K.models.map(function (m) { return m.name + ": " + m.used; }) }] },
        { type: "list", title: "How I check a dataset", note: K.process.text, groups: [{ name: "", items: K.process.steps }] }
      ] },
    { id: "experience", wing: "present", name: "Experience corridor", plaque: "Experience",
      summary: X.summary,
      guideNote: "Each role lists the work done, with the numbers.",
      blocks: [
        { type: "timeline", title: "Experience", items: X.items.map(function (i) { return { when: i.when + ", " + i.where, title: i.title, text: i.text }; }) },
        { type: "list", title: X.evidence.title, note: X.evidence.note, groups: X.evidence.groups }
      ] },
    { id: "credentials", wing: "present", name: "Credentials room", plaque: "Credentials",
      summary: C.summary,
      guideNote: "Original documents are available on request. Certificates with a public verification page link straight to it.",
      blocks: [
        { type: "cards", title: C.honours.title, items: [{ title: C.honours.feature.title, text: C.honours.feature.text }] },
        { type: "timeline", title: "Honours, in order", items: C.honours.timeline },
        { type: "gallery", items: C.honours.photos.map(function (p) { return { photo: p.photo, alt: p.alt, title: p.caption, text: "" }; }) },
        { type: "cards", title: "Degrees", items: C.degrees.map(function (d) { return { title: d.title, meta: d.school, text: d.when + ". " + (d.text || "") }; }) },
        { type: "cards", title: "Professional assessment", items: [{ title: E.assessment.title, meta: E.assessment.date, text: E.assessment.text + " " + E.assessment.code + "." }] },
        { type: "cards", title: "Professional certificates", items: C.certificates.map(function (c) { return { title: c.title, meta: c.meta, text: c.text, link: c.link, linkLabel: "Verify on Coursera" }; }).concat([{ title: "In preparation", text: C.preparing }]) },
        { type: "list", title: "Training and simulations", groups: C.training }
      ] },
    { id: "knowledge", wing: "present", name: "Library", plaque: "Knowledge",
      summary: "The subjects I have studied, by degree.",
      guideNote: "These are subjects studied, taken from the transcripts. They are not skill claims.",
      blocks: [ { type: "list", title: C.subjects.title, note: C.subjects.note, groups: C.subjects.groups } ] },
    { id: "journal", wing: "present", name: "Reading room", plaque: "Writing",
      summary: S.writing.summary,
      guideNote: "Every post is written by Rafsan himself. The build logs describe small practice projects, mistakes included.",
      blocks: [ { type: "posts", title: "From the blog" }, { type: "videos", title: "On YouTube: " + S.writing.channel } ] },
    { id: "life", wing: "present", name: "Beyond the desk", plaque: "Life",
      summary: L.summary,
      guideNote: "Not everything here is about work.",
      blocks: L.groups.map(function (g) {
        return { type: "gallery", title: g.title, note: g.text, items: g.photos.map(function (p) { return { photo: p.photo, alt: p.alt, title: p.caption, text: "" }; }) };
      }) },
    { id: "contact", wing: "present", name: "Meeting room", plaque: "Contact",
      summary: "Email and profiles.",
      guideNote: "Every message reaches Rafsan directly.",
      blocks: [ { type: "text", title: S.contact.title, paragraphs: [S.contact.text] }, { type: "contact" } ] },
    { id: "ai-stack", wing: "roadmap", name: "AI engineering workshop", plaque: "AI stack",
      summary: "What I am learning now, and what comes next.",
      guideNote: "This room is under construction on purpose. Nothing here is claimed as a skill until it has a project behind it.",
      blocks: [
        { type: "status", title: "My AI engineering path", items: K.aiPath.map(function (a) {
            return { name: a.name, status: a.status === "Learning now" ? "Building" : "Planned", detail: a.detail + "." };
          }) }
      ] }
  ];
})(window.SITE);
