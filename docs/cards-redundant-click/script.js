const cards = document.querySelectorAll('.card');
Array.prototype.forEach.call(cards, card => {
    let link = card.querySelector('h2 a');
    card.addEventListener('click', () => link.click());
});