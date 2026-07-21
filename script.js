const siteData = {
  person: {
    name: "Shixue Sun, PhD, MS",
    title: "Computational Translational Scientist",
    subtitle: "Developing computational systems that accelerate therapeutic discovery",
    affiliationLine: "Computational therapeutics, translational informatics, and reproducible biomedical research",
    focus: "Biomedical data integration, computational intelligence, and translational validation for therapeutic discovery.",
    direction: "Building reusable discovery infrastructure that connects open knowledge resources, molecular profiles, and clinical evidence."
  },
  links: [
    { label: "Email", url: "mailto:shixuesun.research@gmail.com" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=SlqCLiUAAAAJ" },
    { label: "ORCID", url: "https://orcid.org/my-orcid?orcid=0000-0002-0929-977X" },
    { label: "GitHub", url: "https://github.com/shixuesun" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/shixue-sun/" },
    { label: "NCBI", url: "https://www.ncbi.nlm.nih.gov/myncbi/shixue.sun.1/bibliography/public/" }
  ],
  navigation: [
    { label: "Profile", target: "profile" },
    { label: "Program", target: "program" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Outputs", target: "outputs" },
    { label: "Funding", target: "funding" },
    { label: "Open Science", target: "infrastructure" }
  ],
  profile:
    "Developing reusable computational systems that accelerate therapeutic discovery by integrating biomedical data, computational intelligence, and translational validation. The work connects open knowledge infrastructure, transcriptomic and multi-omic evidence, and clinically grounded evaluation so that discovery workflows can move from data to testable therapeutic hypotheses. Current applications include rare diseases and oncology, while the underlying methods are designed to remain broadly useful across translational research programs. This research program emphasizes reproducible software, interpretable evidence, and practical systems that support collaborative biomedical discovery.",
  pillars: [
    {
      title: "Biomedical Data Systems",
      description: "Integrating heterogeneous biomedical evidence into structured resources for disease and therapeutic research."
    },
    {
      title: "Computational Discovery Infrastructure",
      description: "Building reusable platforms and workflows that turn molecular profiles into actionable discovery programs."
    },
    {
      title: "Computational Intelligence",
      description: "Applying data-driven models to prioritize hypotheses, mechanisms, biomarkers, and candidate interventions."
    },
    {
      title: "Translational Validation",
      description: "Connecting computational predictions with experimental systems and clinical evidence."
    }
  ],
  portfolio: [
    {
      tag: "Knowledge Infrastructure",
      title: "RD-OMICS",
      subtitle: "Biomedical knowledge infrastructure for rare disease research",
      focus: "A data resource for organizing rare disease omics evidence and enabling systematic computational discovery.",
      outputs: [
        "RD-OMICS (bioRxiv)",
        "Structured disease, gene, and omics evidence resource",
        "Framework for rare disease knowledge integration"
      ]
    },
    {
      tag: "Drug Repurposing",
      title: "Transcriptome-based therapeutic discovery platform",
      subtitle: "Developing reusable computational platforms for transcriptome-based therapeutic prioritization.",
      focus: "A computational platform for identifying therapeutic candidates through reversal of disease-associated gene expression signatures.",
      outputs: [
        "Reversal Gene Expression Assessment (JTM)",
        "Reusable drug repurposing platform (in development)",
        "Multiple public perturbation resources"
      ]
    },
    {
      tag: "Closed-Loop Discovery",
      title: "Adaptive HTS-powered Therapeutic Discovery System",
      subtitle: "Closed-loop computational-experimental therapeutic discovery",
      focus: "An adaptive system linking computational prioritization with high-throughput screening to refine therapeutic discovery cycles.",
      outputs: [
        "HTS-powered drug repurposing ecosystem (in development)",
        "Computational triage for experimental screening",
        "Infrastructure for iterative discovery workflows"
      ]
    },
    {
      tag: "Clinical Evidence",
      title: "Clinical Evidence Integration",
      subtitle: "Translational validation using clinical data",
      focus: "A translational evidence layer for evaluating computational hypotheses against clinical datasets and patient-centered measurements.",
      outputs: [
        "Clinical data-driven validation workflows",
        "Clinical evidence integration for therapeutic hypotheses",
        "Frameworks for biomarker and outcome interpretation"
      ]
    }
  ],
  outputs: [
    {
      label: "Preprint",
      text: "RD-OMICS bioRxiv"
    },
    {
      label: "Article",
      text: "Reversal Gene Expression Assessment for Drug Repurposing, Journal of Translational Medicine"
    },
    {
      label: "Framework",
      text: "CLN3 biomarker discovery framework"
    },
    {
      label: "Omics",
      text: "Integrative omics analysis in idiopathic pulmonary fibrosis"
    }
  ],
  funding: {
    heading: "NCATS Opportunities Committee Award",
    award: "HTS-powered Drug Repurposing Ecosystem Development",
    description: "Developing an integrated computational and experimental ecosystem for high-throughput therapeutic repurposing."
  },
  resources: [
    {
      name: "RD-OMICS",
      description: "Rare disease omics knowledge infrastructure."
    },
    {
      name: "RePURR",
      description: "Transcriptome-based drug repurposing platform."
    },
    {
      name: "hybrid-isoform-flow",
      description: "Workflow for hybrid isoform analysis."
    },
    {
      name: "htsprep",
      description: "Preparation tools for high-throughput screening data."
    },
    {
      name: "htschem",
      description: "Schemas for HTS data organization."
    }
  ],
  footer:
    "Open to collaboration in computational therapeutics, translational informatics, and reproducible biomedical research."
};

const select = (selector) => document.querySelector(selector);

const getDataArray = (primaryKey, fallbackKey) => {
  const value = siteData[primaryKey] || (fallbackKey ? siteData[fallbackKey] : undefined) || [];

  if (!Array.isArray(value)) {
    console.warn(`Expected siteData.${primaryKey} to be an array.`);
    return [];
  }

  return value;
};

const createLink = ({ label, url }) => {
  const link = document.createElement("a");
  const rawUrl = String(url || "#").trim();
  const normalizedUrl =
    label.toLowerCase() === "email" && rawUrl !== "#" && !rawUrl.startsWith("mailto:")
      ? `mailto:${rawUrl}`
      : rawUrl;

  link.className = "link-pill";
  link.href = normalizedUrl;
  link.textContent = label;
  link.rel = "noreferrer";

  if (normalizedUrl !== "#" && !normalizedUrl.startsWith("mailto:")) {
    link.target = "_blank";
  }

  return link;
};

const renderNavigation = () => {
  const navLinks = select("#primary-nav");

  getDataArray("navigation").forEach(({ label, target }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${target}`;
    link.textContent = label;
    item.append(link);
    navLinks.append(item);
  });
};

const renderHero = () => {
  select("#hero-kicker").textContent = siteData.person.title;
  select("#hero-title").textContent = siteData.person.name;
  select("#hero-subtitle").textContent = siteData.person.subtitle;
  select("#hero-meta").textContent = siteData.person.affiliationLine;
  select("#hero-focus").textContent = siteData.person.focus;
  select("#hero-direction").textContent = siteData.person.direction;

  const heroLinks = select("#hero-links");
  const footerLinks = select("#footer-links");

  getDataArray("links").forEach((link) => {
    heroLinks.append(createLink(link));
    footerLinks.append(createLink(link));
  });
};

const renderProfile = () => {
  select("#profile-text").textContent = siteData.profile;
};

const renderPillars = () => {
  const container = select("#program-pillars");

  getDataArray("pillars").forEach((pillar, index) => {
    const article = document.createElement("article");
    article.className = "pillar-card";

    const number = document.createElement("span");
    number.className = "pillar-card__index";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = pillar.title;

    const description = document.createElement("p");
    description.textContent = pillar.description;

    article.append(number, title, description);
    container.append(article);
  });
};

const renderPortfolio = () => {
  const container = select("#portfolio-grid");
  const portfolioItems = getDataArray("portfolio");

  portfolioItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "portfolio-card";

    const topLine = document.createElement("div");
    topLine.className = "portfolio-card__topline";

    const titleWrap = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;

    const subtitle = document.createElement("p");
    subtitle.className = "portfolio-card__subtitle";
    subtitle.textContent = item.subtitle;

    titleWrap.append(title);

    const tag = document.createElement("span");
    tag.className = "portfolio-card__tag";
    tag.textContent = item.tag;

    topLine.append(titleWrap, tag);

    const focus = document.createElement("p");
    focus.className = "portfolio-card__focus";
    focus.textContent = item.focus;

    const outputsTitle = document.createElement("p");
    outputsTitle.className = "portfolio-card__outputs-title";
    outputsTitle.textContent = "Representative outputs";

    const outputs = document.createElement("ul");
    outputs.className = "compact-list";

    const outputsList = Array.isArray(item.outputs) ? item.outputs : [];

    outputsList.forEach((output) => {
      const listItem = document.createElement("li");
      listItem.textContent = output;
      outputs.append(listItem);
    });

    article.append(topLine, subtitle, focus, outputsTitle, outputs);
    container.append(article);
  });
};

const renderOutputs = () => {
  const list = select("#outputs-list");

  getDataArray("outputs").forEach((output) => {
    const item = document.createElement("li");
    const label = document.createElement("strong");
    const text = document.createElement("span");

    label.textContent = output.label;
    text.textContent = output.text;

    item.append(label, text);
    list.append(item);
  });
};

const renderFunding = () => {
  select("#funding-title").textContent = siteData.funding.heading;
  select("#funding-award").textContent = siteData.funding.award;
  select("#funding-description").textContent = siteData.funding.description;
};

const renderResources = () => {
  const container = select("#resource-grid");

  getDataArray("resources").forEach((resource) => {
    const article = document.createElement("article");
    article.className = "resource-card";

    const title = document.createElement("h3");
    title.textContent = resource.name;

    const description = document.createElement("p");
    description.textContent = resource.description;

    article.append(title, description);
    container.append(article);
  });
};

const renderFooter = () => {
  select("#footer-statement").textContent = siteData.footer;
};

const setupNavigation = () => {
  const toggle = select(".nav__toggle");
  const navLinks = select("#primary-nav");
  const links = Array.from(navLinks.querySelectorAll("a"));

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    navLinks.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  if (!("IntersectionObserver" in window)) return;

  const sections = links
    .map((link) => select(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("is-active", isActive);
          link.toggleAttribute("aria-current", isActive);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupReveal = () => {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
};

const setupBackToTop = () => {
  const button = select(".back-to-top");

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener(
    "scroll",
    () => {
      button.classList.toggle("is-visible", window.scrollY > 650);
    },
    { passive: true }
  );
};

const init = () => {
  renderNavigation();
  renderHero();
  renderProfile();
  renderPillars();
  renderPortfolio();
  renderOutputs();
  renderFunding();
  renderResources();
  renderFooter();
  setupNavigation();
  setupReveal();
  setupBackToTop();
};

document.addEventListener("DOMContentLoaded", init);
