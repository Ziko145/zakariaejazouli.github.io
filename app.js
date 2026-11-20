document.addEventListener('DOMContentLoaded', () => {

  // PROJECT DATA
  const projectsData = {
    atlas: {
      title: "Atlas 360 — Marketplace & Itinéraires Marocains Panoramiques en 360°",
      client: "Projet d'Ingénierie Full-Stack & Cloud",
      role: "Lead Developer Full-Stack",
      tags: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4", "Supabase", "Stripe Checkout", "Google Maps & Street View", "Vitest", "Playwright"],
      image: "assets/atlas-hero.png",
      altImage: "assets/atlas-panorama.png",
      description: `
        <p><strong>Atlas 360</strong> est une plateforme web moderne et immersive dédiée à l'exploration d'itinéraires touristiques au Maroc avec visualisation interactive en Street View 360°.</p>
        <h3>Fonctionnalités Majeures</h3>
        <ul>
          <li><strong>Cartographie &amp; Panoramas 360° :</strong> Intégration de l'API Google Maps avec marqueurs personnalisés et modal Street View immersif sur les lieux emblématiques marocains.</li>
          <li><strong>Marketplace de Guides Locaux :</strong> Consultation des profils de guides certifiés, synchronisation de calendriers de disponibilité en temps réel et demandes de réservation.</li>
          <li><strong>Monétisation Stripe &amp; Séquestre :</strong> Abonnements récurrents multi-niveaux (Explorer, Nomad, Elite) et Pass Voyage unitaires avec gestion d'annulation et remboursements automatisés.</li>
          <li><strong>Sécurité Supabase &amp; Row-Level Security :</strong> Politiques d'isolation des données au niveau de PostgreSQL, contraintes d'exclusion pour éviter tout double-booking.</li>
          <li><strong>Génération d'Itinéraires par IA (Google Gemini) :</strong> Génération structurée d'itinéraires validée par schéma Zod avec gestion de fallback gracieux.</li>
        </ul>
        <h3>Assurance Qualité &amp; Tests</h3>
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
        <h3>Architecture &amp; Composants</h3>
        <ul>
          <li><strong>Backend Spring Boot 3 :</strong> Architecture en couches découplées (Controller &rarr; DTO/MapStruct &rarr; Service &rarr; JPA Repository) avec Spring Security + JWT.</li>
          <li><strong>Moteur d'Événements Découplés :</strong> Communication asynchrone par événements Spring (<code>GoalCompletedEvent</code> &rarr; <code>BadgeEvaluator</code>) pour éviter les goulots d'étranglement.</li>
          <li><strong>Temps Réel par WebSockets :</strong> Diffusion instantanée des accomplissements et classements via protocole STOMP.</li>
          <li><strong>Accélération Redis :</strong> Stockage des classements dynamiques dans des Sorted Sets Redis, maintenant le temps de réponse base de données sous 60ms.</li>
          <li><strong>Infrastructure AWS &amp; Kubernetes :</strong> VPC personnalisé avec sous-réseaux isolés, manifests Kubernetes déclaratifs avec rolling updates sans indisponibilité.</li>
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
        <h3>Composants Implémentés</h3>
        <ul>
          <li><strong>Couche de Stockage &amp; Slotted Pages :</strong> Gestion de fichiers sur disque découpés en pages physiques fixes de 4KB avec fentes d'adressage pour supporter des tuples de taille variable.</li>
          <li><strong>Buffer Pool avec Éviction LRU :</strong> Cache mémoire contrôlé évitant les I/O disques répétés et assurant la persistance sécurisée des pages modifiées (<em>dirty pages</em>).</li>
          <li><strong>Arbre B+ (B+ Tree) :</strong> Index multi-voies équilibré sur disque supportant les recherches directes (<em>point lookups</em>) et le parcours ordonné par intervalle (<em>range scans</em>).</li>
          <li><strong>Planificateur de Requêtes Basé sur les Coûts :</strong> Évaluation statistique des coûts de parcours d'index face aux <em>full table scans</em>, application du <em>predicate pushdown</em> et sélection dynamique entre <em>Hash Join</em> et <em>Block Nested-Loop Join</em>.</li>
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
        <h3>Prouesses &amp; Fonctionnalités</h3>
        <ul>
          <li><strong>Vector Clocks &amp; Lamport Timestamps :</strong> Algorithme distribué de suivi de causalité respectant la relation <em>happens-before</em>.</li>
          <li><strong>Tampon Causal (Causal Buffering) :</strong> Mécanisme de mise en attente locale des messages arrivés prématurément tant que leurs dépendances causales n'ont pas été délivrées.</li>
          <li><strong>Design Producteur-Consommateur Thread-Safe :</strong> Découplage strict des I/O sockets et du traitement applicatif via <code>LinkedBlockingQueue</code>, éliminant tout blocage ou famine de threads sous forte charge.</li>
          <li><strong>Banc de Test Adversarial :</strong> Validation formelle avec injection artificielle de latence (200ms+), gigue réseau, réordonnancement de paquets et déconnexions inattendues de nœuds.</li>
        </ul>
      `
    }
  };

  // Scroll reveals activate only when motion is enabled.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.remove('reveal-pending');
        revealObserver.unobserve(target);
      });
    });
    document.querySelectorAll('.reveal').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-pending');
      revealObserver.observe(element);
    });
  }

  // CARD GLOW MOUSE TRACKING
  const glowCards = document.querySelectorAll('.glow-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // HERO SPOTLIGHT MOUSE TRACKING
  const heroSection = document.querySelector('.hero-section');
  const heroSpotlight = document.querySelector('.hero-spotlight');
  if (heroSection && heroSpotlight) {
    heroSection.addEventListener('mousemove', (e) => {
      heroSpotlight.style.left = `${e.clientX}px`;
      heroSpotlight.style.top = `${e.clientY}px`;
      heroSpotlight.style.opacity = '1';
    });
    heroSection.addEventListener('mouseleave', () => {
      heroSpotlight.style.opacity = '0';
    });
  }

  // ACTIVE NAV TRACKING ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let currentId = '';

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      const isCurrent = link.hash === '#' + currentId;
      link.classList.toggle('nav-active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav();

  // PROJECT FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(button => {
        const isActive = button === btn;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
      const filterValue = btn.dataset.filter;

      projectCards.forEach(card => {
        card.hidden = filterValue !== 'all' && !card.dataset.category.split(' ').includes(filterValue);
      });
    });
  });

  // ARCHITECTURE LAB TABS
  const archTabBtns = document.querySelectorAll('.arch-tab-btn');
  const archPanes = document.querySelectorAll('.arch-tab-pane');

  archTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      archTabBtns.forEach(button => {
        const isActive = button === btn;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
      archPanes.forEach(p => p.classList.remove('active'));
      const targetPane = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // PROJECT MODAL
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-dynamic');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');
  let projectTrigger;

  function openProjectModal(trigger) {
    const data = projectsData[trigger.dataset.project];
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
      <div class="modal-header-meta">
        <span class="badge-tag production">${data.client}</span>
        <span class="timeline-badge">${data.role}</span>
      </div>
      <h2 class="modal-title" id="modal-title">${data.title}</h2>
      <div class="project-tags">${tagsHtml}</div>
      <div class="modal-text-content">${data.description}</div>
      ${mediaHtml}
    `;

    projectTrigger = trigger;
    modal.showModal();
    modal.scrollTop = 0;
  }

  viewProjectBtns.forEach(button => {
    button.addEventListener('click', () => openProjectModal(button));
  });

  modalCloseBtn.addEventListener('click', () => modal.close());
  modal.addEventListener('close', () => projectTrigger?.focus({ preventScroll: true }));
  modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const { left, right, top, bottom } = modal.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      modal.close();
    }
  });

  // COPY TO CLIPBOARD & TOAST
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('toast');

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = copyBtn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.classList.add('copied');
        toast.textContent = "✓ Email copié : " + textToCopy;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
          copyBtn.classList.remove('copied');
        }, 2800);
      });
    });
  }

  // NAVBAR SCROLL EFFECT
  const navContainer = document.querySelector('.nav-container');
  function updateNavSurface() {
    navContainer.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', updateNavSurface, { passive: true });
  updateNavSurface();

  // Compact navigation disclosure.
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const compactNav = window.matchMedia('(max-width: 1120px)');

  function setMenuOpen(isOpen) {
    navMenu.classList.toggle('mobile-open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  }

  mobileToggle.addEventListener('click', () => {
    const isOpen = !navMenu.classList.contains('mobile-open');
    setMenuOpen(isOpen);
    if (isOpen) navMenu.querySelector('a').focus();
  });

  navMenu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || !navMenu.classList.contains('mobile-open')) return;
    setMenuOpen(false);
    const target = link.hash && document.getElementById(link.hash.slice(1));
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    } else {
      mobileToggle.focus();
    }
  });

  navContainer.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !navMenu.classList.contains('mobile-open')) return;
    setMenuOpen(false);
    mobileToggle.focus();
  });

  navContainer.addEventListener('focusout', event => {
    if (event.relatedTarget && !navContainer.contains(event.relatedTarget)) setMenuOpen(false);
  });

  document.addEventListener('pointerdown', event => {
    if (navMenu.classList.contains('mobile-open') && !navContainer.contains(event.target)) setMenuOpen(false);
  });

  compactNav.addEventListener('change', () => setMenuOpen(false));


});
