const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const openag = document.getElementById('openag');
const modal_containerag = document.getElementById('modal_containerag');
const closeag = document.getElementById('closeag');



openag.addEventListener('click', function () {
    modal_containerag.classList.add('show');
});

closeag.addEventListener('click', function () {
    modal_containerag.classList.remove('show');
});

open.addEventListener('click', function () {
    modal_container.classList.add('show');
});

close.addEventListener('click', function () {
    modal_container.classList.remove('show');
});


