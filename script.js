document.addEventListener('DOMContentLoaded', () => {
    // Gestion des sections
    const titleGroup = document.querySelector('.title-group');
    const contentDisplay = document.querySelector('.content-display');
    let activeSection = null;

    const sections = document.querySelectorAll('.top-nav a');
    sections.forEach(section => {
        section.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = section.getAttribute('href').substring(1);

            if (activeSection === sectionId) {
                // Retour à la position initiale
                titleGroup.style.transform = 'translateX(0) scale(1)';
                contentDisplay.style.opacity = '0';
                setTimeout(() => {
                    contentDisplay.style.display = 'none';
                }, 300);
                activeSection = null;
            } else {
                // Même distance pour toutes les sections
                const direction = 'translateX(-500px) scale(0.8)';
                
                // Applique la transformation au groupe entier
                titleGroup.style.transform = direction;
                
                // Affichage du contenu avec animation
                contentDisplay.style.display = 'block';
                setTimeout(() => {
                    contentDisplay.style.opacity = '1';
                }, 10);
                contentDisplay.innerHTML = getContentForSection(sectionId);
                activeSection = sectionId;
            }
        });
    });

    // Animation des nombres binaires en arrière-plan
    function createBinaryBackground() {
        const container = document.createElement('div');
        container.className = 'binary-background';
        document.body.appendChild(container);

        function createBinaryNumber() {
            const binary = document.createElement('div');
            binary.className = 'binary-number';
            binary.textContent = Math.random() > 0.5 ? '1' : '0';
            binary.style.left = Math.random() * 100 + 'vw';
            binary.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(binary);

            binary.addEventListener('animationend', () => binary.remove());
        }

        setInterval(createBinaryNumber, 200);
    }

    createBinaryBackground();
});

function getContentForSection(sectionId) {
    switch(sectionId) {
        case 'competences':
            return `
                <div class="section-content">
                    <div class="skills-container">
                        <div class="skills-column">
                            <h3>HARD SKILLS</h3>
                            <ul>
                                <li>Langages de programmation</li>
                                <li>Bases de données</li>
                                <li>Développement logiciel</li>
                                <li>Algorithmes</li>
                                <li>Virtualisation</li>
                            </ul>
                        </div>
                        <div class="skills-column">
                            <h3>SOFT SKILLS</h3>
                            <ul>
                                <li>Gestion du stress</li>
                                <li>Aisance oratoire</li>
                                <li>Rigueur</li>
                                <li>Capacité d'adaptation</li>
                                <li>Dévouement</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
        case 'projets':
            return `
                <div class="section-content">
                    <p class="projects-message">En cours de réalisation</p>
                </div>`;
        case 'certifications':
            return `
                <div class="section-content">
                    <ul class="certifications-list">
                        <li>Université du Michigan - 10/2024 : Interactivité avec JavaScript</li>
                        <li>HEM Rabat - 03/2024 : Participation à la joute oratoire</li>
                    </ul>
                </div>`;
        default:
            return '';
    }
} 