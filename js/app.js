let burguer = document.getElementById('burguer');
let closeBtn = document.getElementById('close');
let linksContainer = document.querySelector('.linksContainer');
let iconContainer = document.querySelector('.iconContainer');

burguer.addEventListener('click', () => {
    linksContainer.classList.toggle('active');
    closeBtn.classList.toggle('active');
    iconContainer.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    linksContainer.classList.toggle('active');
    closeBtn.classList.toggle('active');
    iconContainer.classList.toggle('active');
})
