document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggleDark = document.getElementById('theme-toggle-dark');
  const themeToggleLight = document.getElementById('theme-toggle-light');
  const body = document.body; // Verweis auf den Body für das Anwenden der Klassen

  // Dunkles Theme aktivieren
  themeToggleDark.addEventListener('click', () => {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggleDark.style.display = 'none';
    themeToggleLight.style.display = 'block';
  });

  // Helles Theme aktivieren
  themeToggleLight.addEventListener('click', () => {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggleLight.style.display = 'none';
    themeToggleDark.style.display = 'block';
  });
});
