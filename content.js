/* =====================================================================
   RAFSAN'S VIRTUAL OFFICE — THE ONE CONTENT FILE
   ---------------------------------------------------------------------
   Everything a visitor reads on the site lives in this file.
   To update the site, edit this file only. See HOW-TO-UPDATE.md.

   Three rules to keep the site honest:
   1. Every item carries a status: "Built", "Building" or "Planned".
      Move an item to "Built" only when the work exists and you can show it.
   2. Never add: home address, ID numbers, date of birth, visa or
      migration details.
   3. Keep the text inside quotes. If a sentence needs a quote mark
      inside it, use the curly ones ( ’ “ ” ) so nothing breaks.
   ===================================================================== */

window.SITE = {

  /* ---------- WHO YOU ARE ---------- */
  person: {
    name: "Ahmed Al Rafsan",
    shortName: "Rafsan",
    headline: "Data analyst | Toward applied AI engineering",
    location: "Melbourne, Australia",
    email: "ahmed.rafsan108@gmail.com",
    photo: "portrait-wall.jpg",
    photoAlt: "Portrait of Ahmed Al Rafsan",
    intro: [
      "I turn messy records into numbers a decision can rest on. I trained as an aircraft design engineer, spent two and a half years reporting people data to a CEO, and now work in SQL, Python and Power BI.",
      "Where I am going is applied AI engineering. This office shows both sides separately: the Present wing holds work that exists today, and the Roadmap wing holds what I am building and planning."
    ],
    links: [
      { label: "GitHub",   url: "https://github.com/Ahmed-Al-Rafsan" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-al-rafsan-" },
      { label: "YouTube",  url: "https://www.youtube.com/@AhmedAlRafsan" }
    ]
  },

  /* ---------- THE VIRTUAL GUIDE (the illustrated receptionist) ---------- */
  guide: {
    name: "Mira",
    role: "Virtual guide",
    welcome: [
      "Welcome. I’m Mira, the virtual guide for this office.",
      "Would you like to meet Rafsan? I can walk you to his room."
    ],
    corridor: [
      "This way. The rooms on this floor each hold one side of his work.",
      "Aeronautical, data, projects, credentials. Those rooms are finished work.",
      "Further down is the Roadmap wing. Those rooms are still under construction, and they say so."
    ],
    door: [
      "Here we are. This is Rafsan’s office.",
      "Every room is open to you from the floor directory. Enjoy your visit."
    ]
  },

  /* ---------- THE ROOMS ----------
     wing: "present"  = work that exists today
     wing: "roadmap"  = building or planned
     Each room is a list of blocks. Block types you can use:
       text      { type:"text", title, paragraphs:[...] }
       facts     { type:"facts", title, items:[ {value, label} ] }
       timeline  { type:"timeline", title, items:[ {when, title, text} ] }
       status    { type:"status", title, note, items:[ {name, status, detail, target} ] }
       cards     { type:"cards", title, items:[ {title, meta, text, points:[...], link, linkLabel, status} ] }
       list      { type:"list", title, note, groups:[ {name, items:[...]} ] }
       gallery   { type:"gallery", items:[ {photo, alt, title, text} ] }
       links     { type:"links", title, items:[ {label, detail, url} ] }
       projects  { type:"projects", title, filter:"all" }   (shows the projects list below)
       posts     { type:"posts", title }                    (shows the blog posts below)
       videos    { type:"videos", title }                   (projects that have a video)
  ------------------------------------------------------------------- */
  rooms: [

    /* ===== PRESENT WING ===== */
    {
      id: "office", wing: "present", name: "Rafsan’s office", plaque: "Profile",
      summary: "Who he is, in two minutes.",
      guideNote: "Start here. The numbers on the wall are all traceable to a project or a document in the other rooms.",
      blocks: [
        { type: "profile" },
        { type: "facts", title: "The short version", items: [
          { value: "3", label: "degrees: aircraft design engineering, business administration, data analytics" },
          { value: "500+", label: "employees covered by the KPI reporting he ran for CEO and GM level" },
          { value: "6", label: "people in the industry capstone team he led" },
          { value: "10", label: "data projects and simulations open on GitHub" }
        ]},
        { type: "timeline", title: "Four chapters", items: [
          { when: "Now · Melbourne", title: "From analysis to reliable pipelines", text: "Building data pipelines that explain what they rejected and account for every row, as the base for AI engineering work." },
          { when: "2024 to 2026 · Australia", title: "Data analytics", text: "Master of Business Information Systems (Data Analytics) at the Australian Institute of Higher Education. All course requirements completed, July 2026. Led a six-person industry capstone." },
          { when: "Bangladesh", title: "People and KPI reporting", text: "HR Executive at Kazi Farms Group for about two and a half years: KPI reporting and the performance-evaluation cycle for 500+ employees, reported to CEO and GM level. MBA completed April 2021." },
          { when: "2014 to 2017 · China", title: "Aircraft design engineering", text: "BEng in Aircraft Design and Engineering at Nanchang Hangkong University: CAD, flight dynamics and a finite-element graduation thesis." }
        ]},
        { type: "list", title: "How he works, with the evidence", note: "Anyone can list soft skills. These are the places you can check them.", groups: [
          { name: "Careful with numbers", items: ["In the retail ETL build, 58 input rows reconcile exactly: 2 duplicates, 53 accepted, 3 quarantined with a reason.", "In the auto-sales build, a $49,713.64 gap between two views is explained to the cent."] },
          { name: "Honest about limits", items: ["The schools model reports ROC-AUC 0.972 and states plainly that it does not measure sales conversion.", "Every item in this office is marked Built, Building or Planned."] },
          { name: "Leads and delivers", items: ["Led a six-person capstone team to a client handover: a Top 200 outreach list loaded into the client’s CRM and an executive dashboard.", "Ran a performance-evaluation cycle for 500+ employees."] },
          { name: "Consistent", items: ["Trains at the gym on a routine (see the Life room).", "Publishes a build log for each practice project."] }
        ]}
      ]
    },

    {
      id: "aeronautical", wing: "present", name: "Aeronautical studio", plaque: "Engineering",
      summary: "CAD, flight dynamics and a finite-element thesis.",
      guideNote: "Each project states its own scope. Where no analysis was done, the page says so.",
      blocks: [
        { type: "text", title: "An engineer’s training", paragraphs: [
          "Rafsan’s first degree is a BEng in Aircraft Design and Engineering from Nanchang Hangkong University, China (February 2014 to December 2017, degree awarded 26 December 2017).",
          "Engineers Australia skills assessment (29 Oct 2026): the competencies demonstrated, together with the BEng in Aircraft Design & Engineering from Nanchang Hangkong University (Dec 2017), meet the requirement for Professional Engineer – Aeronautical Engineer (ANZSCO 233911)."
        ]},
        { type: "cards", title: "Engineering projects", items: [
          { status: "Built", title: "Composite flapping-wing: a finite-element study", meta: "Graduation thesis · ANSYS Workbench 17.2 and CATIA · Supervisor: Yu Chunjin",
            text: "How does fibre angle change the stiffness and stress of a thin composite wing? A simplified rectangular flapping wing, inspired by dragonfly flight, was drawn in CATIA, exported as IGS and analysed as a static structural problem in ANSYS Workbench.",
            points: [
              "Three-layer lay-up: epoxy-carbon (230 GPa) prepreg, a resin-epoxy core and epoxy-carbon again, each 0.125 mm thick.",
              "Outer-layer fibre angle swept from −45° to +45° in 5° steps: 19 lay-ups, each solved for total deformation, equivalent stress and maximum shear stress.",
              "Load case: fixed support at the root with a surface pressure standing in for the flapping load.",
              "Result reported in the thesis: deformation was largest at −40° and smallest at 5°; shear and equivalent stress were lowest near −20° to −25°.",
              "Limits: one static load case on a simplified geometry, with no experimental validation. It is a parametric study, not a design.",
              "Background reading that shaped the topic: Jongerius and Lentink (2010), Structural analysis of a dragonfly wing, Experimental Mechanics 50(9)."
            ]},
          { status: "Built", title: "Longitudinal stability of a light aircraft", meta: "Flight Dynamics coursework · April 2017 · Supervisor: He Guoyi",
            text: "A full longitudinal stability problem on an instructor-supplied four-seat light aircraft model (1,150 kg, 16.2 m² wing, 55 m/s cruise): trim, static margin, the linearised equations of motion and the two dynamic modes.",
            points: [
              "Centre of gravity at 27.3% of mean aerodynamic chord, neutral point at 46.2%: a static margin of 18.9%.",
              "Short-period mode: natural frequency 5.344 rad/s, damping ratio 0.702.",
              "Phugoid mode: natural frequency 0.2127 rad/s, damping ratio 0.106.",
              "Eigenvalues and the characteristic polynomial verified numerically with NumPy.",
              "Limits: longitudinal plane only, on a representative model rather than a named aircraft."
            ]},
          { status: "Built", title: "Conceptual configuration of a fighter-style aircraft", meta: "Airplane Conceptual Design · June 2016 · Supervisor: Ding Xiangyu",
            text: "A 3D surface model in CATIA V5, documented in top, side and front orthographic views in AutoCAD, with every feature tied to one datum and centreline.",
            points: [
              "Mid-wing swept trapezoidal planform: 8.0 m span, 12.0 m length, 18.0 m² reference area, aspect ratio 3.56, taper ratio 0.286.",
              "Found a +0.30 m wing-root offset in the front view, traced it to a sketch on an offset construction plane, fixed it at the source and re-checked all three views. Residual differences: 1 to 5 mm.",
              "Limits: external geometry only. No aerodynamic, structural or performance analysis."
            ]},
          { status: "Built", title: "Aviation maintenance internship", meta: "HNA Aviation Technic Co., Ltd. · 9 to 20 October 2017",
            text: "Twelve days of internship and training in aviation engineering and maintenance." }
        ]},
        { type: "list", title: "Tools used in this work", groups: [ { name: "", items: ["CATIA V5", "AutoCAD", "ANSYS Workbench", "NumPy"] } ] },
        { type: "links", title: "Also on this site", items: [
          { label: "Cruising altitude", detail: "A scroll-driven story of the career path, told through an aircraft window", url: "classic.html#altitude" }
        ]}
      ]
    },

    {
      id: "data", wing: "present", name: "Data lab", plaque: "Analytics",
      summary: "The tools he works in, and how he uses them.",
      guideNote: "Levels here are his own honest rating. The evidence column is what to check.",
      blocks: [
        /* CONFIRM THESE LEVELS before the site goes live.
           Suggested scale:  "Strong"  = used professionally or in most projects
                             "Working" = used in several projects, still deepening
                             "Introduced" = used once or in coursework            */
        { type: "status", title: "Toolkit", note: "Level, then the evidence for it.", items: [
          { name: "Excel",               status: "Built", level: "Strong",     detail: "Daily tool for two and a half years of KPI reporting at Kazi Farms. Pivot tables, XLOOKUP, SUMIFS, Power Query." },
          { name: "SQL (MySQL)",         status: "Built", level: "Working",    detail: "Joins, CTEs and window functions across five projects, including 11 business queries in the attrition study." },
          { name: "Python (pandas, NumPy)", status: "Built", level: "Working", detail: "Cleaning, validation and modelling in eight projects, including a seven-script pipeline over one million rows." },
          { name: "Power BI and DAX",    status: "Built", level: "Working",    detail: "Executive dashboards in five projects. Data modelling, DAX measures, Power Query." },
          { name: "Applied machine learning (scikit-learn)", status: "Built", level: "Working", detail: "Random Forest, Logistic Regression and K-Means in the schools and attrition projects, with leakage control and class weighting." },
          { name: "Git and GitHub",      status: "Built", level: "Working",    detail: "Every project is version-controlled and documented in a public repository." },
          { name: "Tableau",             status: "Built", level: "Introduced", detail: "One telemetry dashboard in a job simulation." }
        ]},
        { type: "list", title: "How he approaches a dataset", note: "The same seven checks, in the same order, on every dataset. He calls it PCUVCOD.", groups: [
          { name: "", items: ["Profile", "Completeness", "Uniqueness", "Validity", "Consistency", "Outliers", "Document"] }
        ]},
        { type: "timeline", title: "Experience with data", items: [
          { when: "Industry capstone · Australia", title: "Team lead and data analyst", text: "Led six people through a live client engagement: eight state and territory files merged and cleaned, a transparent priority score, K-Means segmentation and a Random Forest check, delivered as a CRM-ready list and a Power BI dashboard." },
          { when: "Kazi Farms Group · Bangladesh", title: "HR Executive, organisational development", text: "About two and a half years of KPI reporting and performance evaluation for 500+ employees, reported to CEO and GM level." }
        ]}
      ]
    },

    {
      id: "projects", wing: "present", name: "Project gallery", plaque: "Projects",
      summary: "Ten builds, each with its repository.",
      guideNote: "Open any project for the method, the numbers and the caveats. Portfolio studies use public data and say so.",
      blocks: [
        { type: "projects", title: "All projects" },
        { type: "videos", title: "Video walkthroughs" }
      ]
    },

    {
      id: "credentials", wing: "present", name: "Credentials room", plaque: "Credentials",
      summary: "Degrees, the engineering assessment and certificates.",
      guideNote: "Original documents are available on request. Certificates with a public verification page link straight to it.",
      blocks: [
        { type: "cards", title: "Degrees", items: [
          { status: "Built", title: "Master of Business Information Systems (Data Analytics)", meta: "Australian Institute of Higher Education, Melbourne", text: "All course requirements completed, July 2026 (160 of 160 credit points)." },
          { status: "Built", title: "Master of Business Administration", meta: "North South University, Dhaka", text: "Completed April 2021." },
          { status: "Built", title: "Bachelor of Engineering, Aircraft Design and Engineering", meta: "Nanchang Hangkong University, China", text: "February 2014 to December 2017. Degree awarded 26 December 2017." }
        ]},
        { type: "cards", title: "Professional assessment", items: [
          { status: "Built", title: "Engineers Australia skills assessment", meta: "29 October 2026", text: "The competencies demonstrated, together with the BEng in Aircraft Design & Engineering from Nanchang Hangkong University (Dec 2017), meet the requirement for Professional Engineer – Aeronautical Engineer (ANZSCO 233911)." }
        ]},
        { type: "cards", title: "Professional certificates", items: [
          { status: "Built", title: "Google Advanced Data Analytics Professional Certificate", meta: "Coursera · 12 January 2026", text: "Statistics, regression and machine learning with Python.", link: "https://coursera.org/verify/professional-cert/QMLEPBEVKU9A", linkLabel: "Verify on Coursera" },
          { status: "Built", title: "IBM Data Analyst Professional Certificate", meta: "Coursera · 11 January 2026", text: "Excel, SQL, Python and dashboards across 11 courses.", link: "https://coursera.org/verify/professional-cert/9IOZYKAWYNQL", linkLabel: "Verify on Coursera" },
          { status: "Built", title: "Creative Designing in Power BI", meta: "Microsoft, through Coursera · 28 January 2026", text: "Report design in Power BI.", link: "https://coursera.org/verify/LPHLUJS5L5N1", linkLabel: "Verify on Coursera" },
          { status: "Building", title: "Microsoft PL-300 and DP-900", meta: "Preparation in progress", text: "Not yet sat. Listed here so the status is clear." }
        ]},
        /* CERTIFICATION PLAN. Change a status to "Built" only after you pass,
           then move it up into "Professional certificates" with its verify link. */
        { type: "status", title: "Certification plan", note: "Exams he intends to sit, in order. None of these is held yet.", items: [
          { name: "Microsoft Power BI Data Analyst Associate (PL-300)", status: "Building", detail: "Preparation in progress." },
          { name: "Microsoft Azure AI Apps and Agents Developer Associate (AI-103)", status: "Planned", detail: "To be sat after the first AI application is built." },
          { name: "A data engineering certificate", status: "Planned", detail: "Microsoft Fabric Data Engineer Associate (DP-700) or Databricks Data Engineer Associate, chosen to match the roles applied for." }
        ]},
        { type: "list", title: "Training and simulations", groups: [
          { name: "Industry training", items: ["Internship in aviation engineering and maintenance, HNA Aviation Technic Co., Ltd., 9 to 20 October 2017"] },
          { name: "Job simulations (Forage). These are learning simulations, not employment.", items: ["Quantium: retail analytics", "Commonwealth Bank: data science", "Deloitte: data analytics"] },
          { name: "Short courses", items: ["Fundamental of Human Resource Management, HR Perception (November to December 2020)", "Leadership Skill and Conflict Management training, HR Perception (2021)", "Spoken English course, Mentors’ (2018)"] },
          { name: "School", items: ["Higher Secondary Certificate (2013) and Secondary School Certificate (2011), Rajshahi Board, Bangladesh. Scans on request."] }
        ]}
      ]
    },

    {
      id: "knowledge", wing: "present", name: "Library", plaque: "Knowledge",
      summary: "The subjects he has studied, by degree.",
      guideNote: "These are subjects studied, taken from his transcripts. They are not skill claims. For skills, see the Data lab.",
      blocks: [
        { type: "list", title: "Subjects studied", note: "Listed as they appear on the academic transcripts.", groups: [
          { name: "Data analytics (Master of Business Information Systems, AIH)", items: ["Machine Learning for Data Analytics", "Artificial Intelligence Fundamentals", "Business Analytics", "Applied Data Analytics", "Discovering Data Analytics", "Data Analyst Professional", "Big Data and Visualisation", "Database Management Systems", "Software Development", "Systems Analysis Design", "Business Process Management", "Information Systems Applications in Business", "Project Management for Data Analytics Solutions", "Professional Practice in Information Systems", "Practical Industry Project (capstone)"] },
          { name: "Aircraft design and engineering (BEng, Nanchang Hangkong University)", items: ["Aerodynamics", "Flight Dynamics", "Computational Fluid Dynamics", "Foundation and Application of Finite Element Analysis", "Airplane Conceptual Design", "Airplane Structure Design", "Computer Aided Design and Manufacture of Aircraft", "Aircraft Manufacture Technology", "Aero-engine Principle and Structure", "Engineering Thermodynamics", "Heat Transfer", "Engineering Mechanics", "Principle of Automatic Control", "Avionics", "Aviation Fuel and Hydraulic System", "Radar Technology", "Advanced Mathematics", "Linear Algebra", "Probability and Statistics", "C Programming Language", "C++ Program Designing", "Auto CAD"] },
          { name: "Business administration (MBA, North South University)", items: ["Business Statistics", "Computer Information Systems", "Managerial Economics", "Operations Management", "Strategic Management", "Managerial Finance", "Accounting Principles", "Marketing Management", "Human Resource Management", "Strategic Human Resource Management", "Human Resource Planning and Staffing", "Industrial Relations", "Management and Organizational Behavior"] }
        ]}
      ]
    },

    {
      id: "journal", wing: "present", name: "Reading room", plaque: "Blog and videos",
      summary: "Short notes on data practice, and project walkthroughs.",
      guideNote: "He writes these himself. The build log entries describe small practice projects, mistakes included.",
      blocks: [
        { type: "posts", title: "From the blog" },
        { type: "videos", title: "On YouTube: Rafsan Data & AI Lab" }
      ]
    },

    {
      id: "life", wing: "present", name: "Outside the office", plaque: "Life",
      summary: "Training, routine and the person behind the work.",
      guideNote: "Not everything here is about data.",
      blocks: [
        { type: "gallery", items: [
          { photo: "training-1.jpg", alt: "Rafsan training at the gym", title: "Showing up is a skill.", text: "Training is part of how I build consistency. Progress comes from small, deliberate steps: a little stronger, a little more disciplined, one session at a time." },
          { photo: "training-2.jpg", alt: "Rafsan at the gym", title: "Keep learning. Keep building.", text: "My workspace and my career have both grown piece by piece. I value a useful setup, focused practice, and the satisfaction of understanding something that seemed difficult yesterday." }
        ]},
        { type: "text", title: "Three countries, one habit", paragraphs: [
          "Rafsan studied engineering in China, worked and completed an MBA in Bangladesh, and studied data analytics in Australia. The common thread is the habit of starting again at the bottom of a new field and working up."
        ]}
      ]
    },

    {
      id: "contact", wing: "present", name: "Meeting room", plaque: "Contact",
      summary: "Email and profiles.",
      guideNote: "He reads every message himself.",
      blocks: [
        { type: "text", title: "Good work starts with a conversation", paragraphs: [
          "Open to data analyst and junior data engineer roles in Australia, and glad to hear from researchers working on AI engineering and data systems."
        ]},
        { type: "contact" }
      ]
    },

    /* ===== ROADMAP WING ===== */
    {
      id: "ai-stack", wing: "roadmap", name: "AI engineering workshop", plaque: "AI stack",
      summary: "What is built, what is being built, what is planned.",
      guideNote: "This room is under construction on purpose. Nothing here is claimed as a skill until it has a project behind it.",
      blocks: [
        { type: "text", title: "Where this is going", paragraphs: [
          "The goal is applied AI engineering: building AI applications that are tested, measured and dependable, on top of data pipelines that can be trusted. Data engineering comes with it."
        ]},
        /* When you finish something: change its status to "Built", add the
           project to the projects list at the bottom, and mention it in detail. */
        { type: "status", title: "The stack, by status", items: [
          { name: "Data cleaning and validation in Python", status: "Built",    detail: "Quarantine with reasons, logging and reconciled row counts. See the Retail Sales ETL build." },
          { name: "Applied machine learning",                status: "Built",    detail: "Classification and clustering with scikit-learn, with leakage control. See the schools and attrition projects." },
          { name: "Python and SQL depth",                    status: "Building", detail: "Strengthening the foundations everything else stands on." },
          { name: "Reliable data pipelines",                 status: "Building", detail: "Repeatable ETL with data-quality rules and tests." },
          { name: "Testing and automation",                  status: "Planned",  detail: "pytest, GitHub Actions." },
          { name: "APIs and deployment",                     status: "Planned",  detail: "FastAPI, Docker." },
          { name: "Databases for AI",                        status: "Planned",  detail: "PostgreSQL with pgvector." },
          { name: "Cloud data engineering",                  status: "Planned",  detail: "Azure Data Factory, Databricks, PySpark, Delta Lake." },
          { name: "LLM applications and retrieval",          status: "Planned",  detail: "Working with one LLM provider, then retrieval over documents." },
          { name: "Agents and tool use",                     status: "Planned",  detail: "LangGraph, Model Context Protocol." },
          { name: "LLM evaluation and guardrails",           status: "Planned",  detail: "Measuring answer quality before trusting it." }
        ]},
        { type: "cards", title: "AI projects", items: [
          { status: "Planned", title: "First end-to-end AI application", meta: "Not started", text: "It will appear here with its repository when it exists." }
        ]}
      ]
    },

    {
      id: "research", wing: "roadmap", name: "Research desk", plaque: "Research",
      summary: "For prospective supervisors: research background and plans.",
      guideNote: "If you supervise research students, this is the two-minute version.",
      blocks: [
        { type: "text", title: "For prospective supervisors", paragraphs: [
          "Rafsan intends to pursue doctoral research in AI engineering and data systems after establishing himself in industry. He has no publications yet. What he can show today is three pieces of supervised technical work and a habit of stating what a result does and does not prove."
        ]},
        { type: "cards", title: "Research-style work to date", items: [
          { status: "Built", title: "Parametric finite-element study of a composite wing", meta: "Graduation thesis, Nanchang Hangkong University", text: "Nineteen lay-ups compared on deformation, equivalent stress and shear stress in ANSYS Workbench. Details in the Aeronautical studio.", link: "#aeronautical", linkLabel: "Open the Aeronautical studio" },
          { status: "Built", title: "Leakage-controlled classification on a national schools dataset", meta: "Industry capstone, AIH", text: "9,855 schools. The variable that defines the label was excluded from the model inputs, and the reported ROC-AUC of 0.972 is described as label recovery, not sales conversion.", link: "#projects", linkLabel: "Open the Project gallery" },
          { status: "Built", title: "Linearised longitudinal dynamics of a light aircraft", meta: "Flight Dynamics coursework", text: "State-space model, modal analysis and numerical verification in NumPy." }
        ]},
        { type: "status", title: "Research plan", items: [
          { name: "Research interest", status: "Building", detail: "Dependable AI systems: evaluation of LLM applications and the data pipelines underneath them." },
          { name: "First paper", status: "Planned", detail: "To be written once the first AI engineering projects are built and measured." },
          { name: "Doctoral applications", status: "Planned", detail: "After the first paper." }
        ]}
      ]
    }
  ],

  /* ---------- PROJECTS ----------
     To add a project, copy one entry, change the text, and give it a new id.
     Fields: id, title, type, category, tags, description, outcome, metrics,
             repo (GitHub repository name), video (YouTube link, optional),
             ai (a note on AI assistance, optional).
     The fields short, theme, art, icon, label, stat are only used by the
     classic page for its cover art. Copy them from a similar project.     */
  projects: [
 {id:'schools',title:'Australian Schools Priority Targeting',short:'Which schools<br>come first?',category:'Machine learning',tags:['Python','Power BI','Machine learning'],theme:'blue',art:'bars',icon:'school',label:'THE INDUSTRY CAPSTONE',stat:'9,855 schools · 6-person team',type:'Client capstone',description:'Which schools should a small outreach team contact first? I led a six-person team through a live industry capstone, building a Python pipeline that cleaned national school data, scored priorities and segmented the market with K-Means. Random Forest helped examine high-priority patterns, with a target-correlated feature excluded to avoid leakage.',outcome:'Delivered a Top-200 outreach list, loaded into the client’s CRM, and a two-page Power BI executive dashboard, with support after handover.',metrics:['9,855 schools','3,344 high-priority schools','AUC 0.972','Top 200 → CRM'],repo:'schools-priority-segmentation-analysis'},
 {id:'retail-etl',title:'Retail Sales ETL & Data Quality Pipeline',short:'Every row<br>accounted for.',category:'Data engineering',tags:['Python','Data engineering','ETL'],theme:'navy',art:'pipeline',icon:'pipeline',label:'DATA ENGINEERING · ETL',sub:'EXTRACT · VALIDATE · LOAD · VERIFY',stat:'58 rows in · 53 accepted · 3 quarantined',type:'Data engineering build',description:'A batch ETL pipeline in Python and pandas, built step by step in a Jupyter notebook. It loads a messy retail CSV inside try/except with logging, profiles nulls and types, removes exact duplicates, and converts dates, prices and quantities with errors="coerce" and a nullable Int64. A boolean mask splits the rows, and every rejected row gets a reason from np.select. Both sets are exported to CSV and JSON, read back and checked, and the counts are logged.',outcome:'Every input row is accounted for: 58 raw rows = 2 duplicate copies removed + 53 accepted + 3 quarantined (2 missing quantity, 1 invalid price). Nothing was filled with zero, and an unknown discount stayed unknown rather than becoming 0%.',metrics:['58 rows in','2 duplicates removed','53 accepted','3 quarantined with a reason'],repo:'retail-sales-etl-pipeline',steps:['Extract & log','Profile','Clean','De-duplicate','Cast types','Validate & quarantine','Load CSV + JSON','Read back & log'],rules:[['Exact duplicate rows','2','Drop, keep the first copy'],['Missing Quantity','2','Quarantine: never invent units sold'],['UnitPrice "not available"','1','Coerce to missing, then quarantine'],['Missing DiscountPct','1','Keep as missing: unknown is not 0%'],['Missing ShippingState','1','Label "Unknown" and keep the sale']],logLines:['INFO:root:Raw CSV loaded successfully','INFO:root:Raw Records: 58','INFO:root:Accepted Records: 53','WARNING:root:Rejected Records: 3'],ai:'A learning build on a deliberately small, synthetic 58-row dataset. I wrote the pipeline; AI (ChatGPT) reviewed the code and helped with the documentation and GitHub publishing.'},
 {id:'hr',title:'Predicting Employee Attrition',short:'People leave.<br>Data gives clues.',category:'Machine learning',tags:['Python','SQL','Power BI','Machine learning'],theme:'purple',art:'people',icon:'people',label:'PEOPLE ANALYTICS',stat:'1,470 employee records · Risk modelling',type:'Portfolio project',description:'Real HR reporting experience paired with machine learning across 1,470 employee records. Logistic Regression and Random Forest models used balanced class weights, with feature importance to explain the main attrition drivers. The project includes 11 SQL business queries and a two-page Power BI dashboard with eight custom DAX measures.',outcome:'Classified employees into High, Medium and Low risk groups, with 344 flagged for retention review in the project dataset.',metrics:['1,470 records','344 flagged for review','11 SQL queries','2 dashboard pages'],repo:'HR-Employee-Attrition-Predictor',video:'https://youtu.be/V1bS9olSKx8',videoTitle:'Employee attrition: the model, the dashboard & the decisions'},
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
    "category": "Power Bi",
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
