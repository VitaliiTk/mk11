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