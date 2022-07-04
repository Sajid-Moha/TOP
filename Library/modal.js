const body = document.querySelector('body');
const modal = document.querySelector('.modal');

const add_book = document.querySelector('.add');
add_book.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.position = 'fixed';
});

const close_modal = document.querySelector('#close');
close_modal.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.position = 'static';
})