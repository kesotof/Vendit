document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-effect');
    if (!typingElement) {
        console.error("El elemento con id 'typing-effect' no fue encontrado.");
        return;
    }
    const fullText = typingElement.textContent;
    const typingSpeed = 70;
    let charIndex = 0;
    typingElement.textContent = '';

    function typeChar() {
        if (charIndex < fullText.length) {
            typingElement.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            typingElement.classList.add('finished');
        }
    }
    setTimeout(typeChar, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const paragraphsToAnimate = document.querySelectorAll('.service-box p');
    const typingSpeed = 70;
    const initialDelay = 500;

    if (paragraphsToAnimate.length === 0) {
        console.warn("No se encontraron párrafos dentro de '.service-box' para aplicar el efecto.");
        return;
    }

    paragraphsToAnimate.forEach(paragraphElement => {
        const fullText = paragraphElement.textContent;
        let charIndex = 0;
        paragraphElement.textContent = '';
        function typeChar() {
            if (charIndex < fullText.length) {
                paragraphElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                paragraphElement.classList.add('finished');
            }
        }
        setTimeout(typeChar, initialDelay);
    });
});

const featureCards = document.querySelectorAll('.fxs-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('fxs-card--is-hovered');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('fxs-card--is-hovered');
            });
        });