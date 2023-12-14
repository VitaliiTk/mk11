function openTab(event, idName) {
    document.querySelectorAll('.tab_link').forEach(elem => {
        elem.classList.remove('active');
    })
    document.querySelectorAll('.tab_content').forEach(elem => {
        elem.style.display = 'none';
    })
    document.querySelector(`#${idName}`).style.display = 'block';

    event.currentTarget.classList.add('active')
}

// up arrow
const upArrow = document.querySelector('#upArrow');
function upArrowLogic() {
    if (window.scrollY == 0) {
        upArrow.classList.remove('active');
    } else if (window.scrollY > 0) {
        upArrow.classList.add('active');
    }
}

document.addEventListener('scroll', () => {
    upArrowLogic();
})
