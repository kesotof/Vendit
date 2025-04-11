window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const nosotrosSection = document.getElementById('nosotros');
    const nosotrosPosition = nosotrosSection.getBoundingClientRect().top;
    if (nosotrosPosition <= 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    const sections = ['hero', 'nosotros', 'diseno', 'tienda', 'Portafolio'];
    

    let currentSectionId = null;
    const windowHeight = window.innerHeight;
    
    for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4) {
            currentSectionId = sectionId;
            break;
        }
    }

    if (currentSectionId) {
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }
});