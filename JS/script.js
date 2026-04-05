const characters = document.querySelectorAll('.character-image');

characters.forEach(character => {
    character.addEventListener('click', () => {
        document.querySelector('.character-image.active').classList.remove('active');
        character.classList.add('active');
    });
});