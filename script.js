// Add event listeners to nav links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.id.replace('-link', '');
        document.querySelectorAll('section').forEach((section) => {
            section.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    });
});

// Add event listener to learn more button
document.getElementById('learn-more-btn').addEventListener('click', () => {
    document.querySelectorAll('section').forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById('about').style.display = 'block';
});