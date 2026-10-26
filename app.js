/**
 * Zakariae Jazouli — Vitrine Web / ePortfolio Logic
 * Projects data sourced directly from D:\Projects & production experiences
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Project Detailed Data (Directly from D:\Projects) ---
  const projectsData = {
    adm: {
      title: "ADM 2026 — Détection d'Anomalies Péages en Temps Réel & Pipeline MLOps",
      client: "Autoroutes du Maroc (ADM)",
      role: "Stagiaire Ingénieur Logiciel & MLOps (Stage 2A)",
      tags: ["Java 21", "Spring Boot 3", "FastAPI", "XGBoost", "HDBSCAN", "SHAP", "Apache Kafka", "Oracle 21c", "Docker Compose"],
      image: "assets/adm-dashboard.png",
      altImage: "assets/adm-shap.png",
      description: `
        <p>Projet déployé en production pour <strong>Autoroutes du Maroc (ADM)</strong> pour automatiser l'audit des alarmes des gares de péage à l'échelle nationale.</p>
        
        <h4>Architecture &amp; Flux de Données</h4>
        <p>Les événements capteurs sont simulés et ingérés via <strong>Apache Kafka</strong> vers un moteur de décision <strong>Spring Boot 3</strong>. Chaque alarme candidate est évaluée à la volée par un microservice <strong>FastAPI / Python</strong> entraîné sur 11 741 enregistrements historiques validés.</p>

        <h4>Prouesses &amp; Décisions Techniques</h4>
        <ul>
          <li><strong>Filtrage Intelligent XGBoost :</strong> Classification temps réel éliminant automatiquement les faux positifs à haute confiance (&ge; 0.90) avec un temps de réponse p95 &lt; 100ms.</li>
          <li><strong>Clustering Spatio-temporel HDBSCAN :</strong> Regroupement automatique des alarmes corrélées à travers les voies de péage pour identifier les causes racines uniques d'incidents.</li>
          <li><strong>Explicabilité IA (SHAP) :</strong> Intégration de SHAP TreeExplainer pour expliquer à l'opérateur les facteurs décisifs de chaque classification.</li>
          <li><strong>Résilience &amp; Circuit Breaker :</strong> Intégration de Resilience4j : en cas de timeout ou indisponibilité du modèle, repli immédiat sur <code>VALID_ALARM</code> pour préserver l'intégrité opérationnelle.</li>
          <li><strong>Pipeline MLOps Conteneurisé :</strong> Docker &amp; CI/CD réduisant le cycle de réentraînement et déploiement de plusieurs jours à moins de 20 minutes.</li>
        </ul>

        <h4>Résultats Clés</h4>
        <p><strong>-35% de fausses alertes</strong> subies par les régulateurs, latence p95 sous 100ms, et astreinte opérationnelle facilitée par des runbooks automatisés.</p>
      `
    },
    atlas: {
      title: "Atlas 360 — Marketplace & Itinéraires Marocains Panoramiques en 360°",
      client: "Projet d'Ingénierie Full-Stack & Cloud",
      role: "Lead Developer Full-Stack",
      tags: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4", "Supabase", "Stripe Checkout", "Google Maps & Street View", "Vitest", "Playwright"],
      image: "assets/atlas-hero.png",
      altImage: "assets/atlas-panorama.png",
      description: `
        <p><strong>Atlas 360</strong> est une plateforme web moderne et immersive dédiée à l'exploration d'itinéraires touristiques au Maroc avec visualisation interactive en Street View 360°.</p>

        <h4>Fonctionnalités Majeures</h4>
        <ul>
          <li><strong>Cartographie &amp; Panoramas 360° :</strong> Intégration de l'API Google Maps avec marqueurs personnalisés et modal Street View immersif sur les lieux emblématiques marocains.</li>
          <li><strong>Marketplace de Guides Locaux :</strong> Consultation des profils de guides certifiés, synchronisation de calendriers de disponibilité en temps réel et demandes de réservation.</li>
          <li><strong>Monétisation Stripe &amp; Séquestre :</strong> Abonnements récurrents multi-niveaux (Explorer, Nomad, Elite) et Pass Voyage unitaires avec gestion d'annulation et remboursements automatisés.</li>
          <li><strong>Sécurité Supabase &amp; Row-Level Security :</strong> Politiques d'isolation des données au niveau de PostgreSQL, contraintes d'exclusion pour éviter tout double-booking.</li>
          <li><strong>Génération d'Itinéraires par IA (Google Gemini) :</strong> Génération structurée d'itinéraires validée par schéma Zod avec gestion de fallback gracieux.</li>
        </ul>

        <h4>Assurance Qualité &amp; Tests</h4>
        <p>Couverture de tests automatisés exemplaire : <strong>38 tests unitaires/intégration (Vitest)</strong> et <strong>17 tests end-to-end sur navigateurs réels (Playwright)</strong>.</p>
      `
    },
    youth: {
      title: "YouthChallenge — Plateforme Sociale Gamifiée Scalable Cloud",
      client: "Projet d'Ingénierie JEE & Cloud",
      role: "Architecte & Backend Developer",
      tags: ["Spring Boot 3", "React 18", "Kubernetes", "AWS (VPC, EC2, RDS, S3)", "Redis", "Docker Compose", "WebSockets STOMP"],
      image: "assets/youthchallenge-arch.png",
      altImage: null,
      description: `
        <p>Application d'engagement social gamifiée construite sur les principes JEE et les architectures cloud modernes.</p>

        <h4>Architecture &amp; Composants</h4>
        <ul>
          <li><strong>Backend Spring Boot 3 :</strong> Architecture en couches découplées (Controller &rarr; DTO/MapStruct &rarr; Service &rarr; JPA Repository) avec Spring Security + JWT.</li>
          <li><strong>Moteur d'Événements Découplés :</strong> Communication asynchrone par événements Spring (<code>GoalCompletedEvent</code> &rarr; <code>BadgeEvaluator</code>) pour éviter les goulots d'étranglement.</li>
          <li><strong>Temps Réel par WebSockets :</strong> Diffusion instantanée des accomplissements et classements via protocole STOMP.</li>
          <li><strong>Accélération Redis :</strong> Stockage des classements dynamiques dans des Sorted Sets Redis, maintenant le temps de réponse base de données sous 60ms.</li>
          <li><strong>Infrastructure AWS &amp; Kubernetes :</strong> VPC personnalisé avec sous-réseaux isolés, manifests Kubernetes déclaratifs avec rolling updates sans indisponibilité.</li>
        </ul>
      `
    },
    monitoring: {
      title: "Plateforme Centralisée de Suivi de Projets (Holding Al Omrane)",
      client: "Holding Al Omrane",
      role: "Stagiaire Ingénieur Logiciel Full-Stack (Stage 1A)",
      tags: ["ASP.NET Core 8", "C# 12", "MS SQL Server", "EF Core 8", "Vue.js 3", "Vuetify", "ApexCharts"],
      image: null,
      altImage: null,
      description: `
        <p>Outil stratégique déployé au siège de <strong>Holding Al Omrane</strong> à Rabat pour assurer la supervision en temps réel de plus de 50 projets de construction et d'aménagement d'envergure nationale (+80M$ de budget).</p>

        <h4>Prouesses &amp; Réalisations</h4>
        <ul>
          <li><strong>APIs REST Haut Débit :</strong> Architecture C# / .NET 8 calculant à la volée des indicateurs synthétiques sur plus de 150 métriques opérationnelles de chantier.</li>
          <li><strong>Optimisation SQL &amp; Hiérarchie WBS :</strong> Réduction de <strong>42%</strong> du temps de calcul et d'affichage des Work Breakdown Structures grâce à des requêtes CTE optimisées et des opérations par lots avec EF Core 8.</li>
          <li><strong>Tableaux de bord Vue.js 3 :</strong> Interface interactive avec graphiques dynamiques (ApexCharts) et filtres multi-critères utilisée activement par plus de 100 directeurs et ingénieurs internes.</li>
          <li><strong>Cadrage du Besoin :</strong> Réalisation à partir d'un besoin fonctionnel initial non spécifié : entretiens avec les directions métiers, découpage en sprints agiles et contractualisation des APIs.</li>
        </ul>
      `
    },
    sqlengine: {
      title: "Mini Moteur de Requêtes Relationnel Java (From Scratch)",
      client: "Projet d'Ingénierie Systèmes",
      role: "Concepteur & Développeur",
      tags: ["Java 21", "B+ Trees", "Query Optimization", "Buffer Management", "Slotted Pages", "Hash Join"],
      image: null,
      altImage: null,
      description: `
        <p>Implémentation d'un moteur de base de données relationnelle mono-nœud en Java depuis les principes fondamentaux, sans bibliothèques externes de stockage.</p>

        <h4>Composants Implémentés</h4>
        <ul>
          <li><strong>Couche de Stockage &amp; Slotted Pages :</strong> Gestion de fichiers sur disque découpés en pages physiques fixes de 4KB avec fentes d'adressage pour supporter des tuples de taille variable.</li>
          <li><strong>Buffer Pool avec Éviction LRU :</strong> Cache mémoire contrôlé évitant les I/O disques répétés et assurant la persistance sécurisée des pages modifiées (*dirty pages*).</li>
          <li><strong>Arbre B+ (B+ Tree) :</strong> Index multi-voies équilibré sur disque supportant les recherches directes (*point lookups*) et le parcours ordonné par intervalle (*range scans*).</li>
          <li><strong>Planificateur de Requêtes Basé sur les Coûts :</strong> Évaluation statistique des coûts de parcours d'index face aux *full table scans*, application du *predicate pushdown* et sélection dynamique entre *Hash Join* et *Block Nested-Loop Join*.</li>
        </ul>
      `
    },
    causal: {
      title: "Système de Diffusion Causale Distribué Java",
      client: "Projet Systèmes Distribués & Réseau",
      role: "Concepteur & Développeur",
      tags: ["Java Sockets", "Vector Clocks", "Horloges de Lamport", "Concurrence", "P2P", "Tolérance aux pannes"],
      image: null,
      altImage: null,
      description: `
        <p>Réseau de messagerie pair-à-pair décentralisé sur sockets TCP brutes garantissant un ordre causal strict des messages sans passer par un coordinateur centralisé.</p>

        <h4>Prouesses &amp; Fonctionnalités</h4>
        <ul>
          <li><strong>Vector Clocks &amp; Lamport Timestamps :</strong> Algorithme distribué de suivi de causalité respectant la relation *happens-before*.</li>
          <li><strong>Tampon Causal (Causal Buffering) :</strong> Mécanisme de mise en attente locale des messages arrivés prématurément tant que leurs dépendances causales n'ont pas été délivrées.</li>
          <li><strong>Design Producteur-Consommateur Thread-Safe :</strong> Découplage strict des I/O sockets et du traitement applicatif via <code>LinkedBlockingQueue</code>, éliminant tout blocage ou famine de threads sous forte charge.</li>
          <li><strong>Banc de Test Adversarial :</strong> Validation formelle avec injection artificielle de latence (200ms+), gigue réseau, réordonnancement de paquets et déconnexions inattendues de nœuds.</li>
        </ul>
      `
    }
  };

  // --- 2. Project Filtering Logic ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 3. Architecture Lab Tabs Logic ---
  const archTabBtns = document.querySelectorAll('.arch-tab-btn');
  const archPanes = document.querySelectorAll('.arch-tab-pane');

  archTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      archTabBtns.forEach(b => b.classList.remove('active'));
      archPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --- 4. Interactive Project Modal Logic ---
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-dynamic');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    let mediaHtml = '';
    if (data.image) {
      mediaHtml += `<img src="${data.image}" alt="${data.title}" class="modal-hero-img">`;
    }
    if (data.altImage) {
      mediaHtml += `<img src="${data.altImage}" alt="${data.title} Architecture" class="modal-hero-img">`;
    }

    const tagsHtml = data.tags.map(t => `<span class="tag">${t}</span>`).join(' ');

    modalBody.innerHTML = `
      <div class="modal-grabber"></div>
      <div class="modal-header-meta">
        <span class="badge-tag production">${data.client}</span>
        <span class="timeline-badge">${data.role}</span>
      </div>
      <h2 class="modal-title">${data.title}</h2>
      <div class="project-tags">
        ${tagsHtml}
      </div>
      ${mediaHtml}
      <div class="modal-text-content">
        ${data.description}
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-project');
      openProjectModal(pId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // --- 5. Copy to Clipboard & Toast Logic ---
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('toast');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = copyBtn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.textContent = "Email copié : " + textToCopy;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2800);
      });
    });
  }

  // --- 6. Navbar Scroll Effect (Liquid Glass Preservation) ---
  const navContainer = document.querySelector('.nav-container');
  window.addEventListener('scroll', () => {
    if (!navContainer) return;
    if (window.scrollY > 40) {
      navContainer.classList.add('scrolled');
    } else {
      navContainer.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- 7. Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--system-card-bg)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.borderBottom = '1px solid var(--separator)';
        navMenu.style.borderRadius = '0 0 16px 16px';
        navMenu.style.boxShadow = 'var(--shadow-floating)';
      }
    });
  }

  // --- 8. Apple Theme Toggle Logic (Light / Dark) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlElement = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersDark === false) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = htmlElement.classList.contains('light');
      applyTheme(isLight ? 'dark' : 'light');
    });
  }

});
