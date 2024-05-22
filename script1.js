function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.classList.contains(sectionName)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
