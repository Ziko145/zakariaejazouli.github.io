(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;

  try {
    savedTheme = localStorage.getItem('theme');
  } catch {
    // System appearance remains available without local storage.
  }

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
  }

  const detectedTheme = systemTheme.matches ? 'dark' : 'light';
  applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : detectedTheme);

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle-btn');

    toggle.addEventListener('click', () => {
      const theme = root.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(theme);
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // The choice still applies to this page.
      }
    });
  });
})();
