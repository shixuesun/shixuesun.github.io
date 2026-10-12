const siteData = {
  person: {
    name: "Shixue Sun, PhD",
    title: "Computational Translational Scientist",
    subtitle: "Integrating Multimodal Biomedical Evidence to Advance Biomarker and Therapeutic Discovery",
    affiliationLine: "NCATS/NIH",
    focus: "Biomarker, therapeutic target, and therapeutic discovery through integration of molecular, experimental, clinical, and pharmacological evidence.",
    direction: "Connecting computational discovery with experimental and clinical evidence to advance therapeutic translation."
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
    { label: "Software", target: "infrastructure" }
  ],
  profile:
    "I am a computational translational scientist with interdisciplinary experience spanning pharmacology, pharmaceutical research, bioinformatics, multi-omics, and clinical informatics. My research integrates molecular, experimental, clinical, pharmacological, and knowledge-based evidence to address translational questions in biomarker discovery, therapeutic target identification, and therapeutic discovery. My cross-disciplinary background enables me to connect biological context with approaches from bioinformatics, biomedical informatics, machine learning, AI, and related computational methods to generate scientifically grounded and testable hypotheses.",
  pillars: [
    {
      title: "Multimodal Biomedical Data Integration",
      description: "Integrating omics, experimental, clinical, pharmacological, and knowledge-based evidence."
    },
    {
      title: "Biomarker & Therapeutic Target Discovery",
      description: "Identifying molecular signatures, biomarkers, disease mechanisms, and actionable therapeutic targets."
    },
    {
      title: "Computational Therapeutic Discovery",
      description: "Integrating disease molecular states with perturbational, pharmacological, screening, and other biomedical evidence to prioritize therapeutic candidates."
    },
    {
      title: "Translational Validation",
      description: "Connecting computational hypotheses with experimental and clinical evidence."
    }
  ],
  portfolio: [
    {
      tag: "Rare Disease",
      title: "Rare-Disease Data Integration & Discovery",
      subtitle: "Representative work: RD-OMICS",
      focus: "Integrating fragmented multi-omics evidence to enable systematic rare-disease research and therapeutic discovery.",
      outputs: [
        "Knowledge graph integrating >11,000 GEO series across 126 rare diseases",
        "LLM-assisted metadata harmonization",
        "Co-corresponding-author bioRxiv preprint",
        "Manuscript under review at NAR Molecular Medicine"
      ]
    },
    {
      tag: "Biomarkers & Targets",
      title: "Biomarker & Therapeutic Target Discovery",
      subtitle: "Representative work across CLN3, NPC1, IPF, GBM, and DYT1",
      focus: "Integrating molecular, network, and clinical evidence to identify biomarkers, disease mechanisms, and therapeutic targets.",
      outputs: [
        "CLN3 biomarker discovery — medRxiv preprint",
        "NPC1 proteomic/clinical integration — manuscript in preparation",
        "IPF multi-omics — published study",
        "GBM proteomic response analysis — experimental validation planned",
        "DYT1 target deconvolution — ongoing"
      ]
    },
    {
      tag: "Therapeutic Discovery",
      title: "Computational Therapeutic Discovery",
      subtitle: "Gene-expression reversal and molecular-state prioritization",
      focus: "Connecting disease molecular states with perturbational and pharmacological evidence to prioritize therapeutic candidates.",
      outputs: [
        "Gene-expression reversal methodology",
        "Journal of Translational Medicine publication",
        "Therapeutic prioritization in GBM",
        "Reusable computational framework under development"
      ]
    },
    {
      tag: "HTS Discovery",
      title: "HTS-Powered Therapeutic Discovery",
      subtitle: "HTS-powered computational–experimental therapeutic discovery",
      focus: "Integrating screening response, chemical/biological knowledge, predictive modeling, and experimental validation for therapeutic prioritization.",
      outputs: [
        "NCATS Opportunities Committee Award (PI)",
        "Therapeutic Effect Pattern modeling",
        "Single-agent and combination prioritization",
        "Experimental validation planned"
      ]
    }
  ],
  outputs: [
    {
      label: "Preprint",
      text: "RD-OMICS bioRxiv preprint"
    },
    {
      label: "Article",
      text: "Reversal Gene Expression Assessment for Drug Repurposing, Journal of Translational Medicine"
    },
    {
      label: "Preprint",
      text: "Toward Early Diagnosis and Therapeutic Discovery in CLN3 Disease: A Computational Biomarker Discovery Framework — medRxiv"
    },
    {
      label: "Award",
      text: "NCATS Opportunities Committee Award supporting HTS-powered therapeutic discovery"
    }
  ],
  funding: {
    heading: "NCATS Opportunities Committee Award",
    award: "HTS-Powered Therapeutic Discovery",
    description: "Developing an adaptive computational–experimental framework integrating HTS, biological knowledge, predictive modeling, and experimental validation for therapeutic discovery."
  },
  resources: [
    {
      name: "RD-OMICS",
      description: "Rare-disease omics resource and knowledge graph supporting data integration and discovery."
    },
    {
      name: "RePURR",
      description: "Transcriptome-based therapeutic prioritization framework under development."
    },
    {
      name: "hybrid-isoform-flow",
      description: "Reproducible workflow for combined long- and short-read RNA-seq analysis."
    },
    {
      name: "htsprep",
      description: "Development-stage tools for HTS data preprocessing and standardization."
    },
    {
      name: "htschem",
      description: "Development-stage tools for compound annotation and chemical-data harmonization."
    }
  ],
  footer:
    "Open to collaboration in biomarker discovery, therapeutic target identification, therapeutic discovery, and translational evidence integration."
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
