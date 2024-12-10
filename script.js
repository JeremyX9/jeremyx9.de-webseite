// Dynamische Altersberechnung
(function() {
    const birthDate = new Date(2004, 0, 2); // 02.01.2004
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = age;
})();

// GitHub Projekte laden
fetch('https://api.github.com/users/JeremyX9/repos?sort=created&per_page=3')
    .then(response => response.json())
    .then(repos => {
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = ''; 
        repos.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : 'Keine Beschreibung verfügbar.'}</p>
                <a href="${repo.html_url}" target="_blank">Zum Repository</a>
            `;
            projectsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Fehler beim Laden der Repos:', error);
    });
