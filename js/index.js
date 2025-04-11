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