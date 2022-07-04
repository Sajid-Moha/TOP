const modal = document.querySelector('.modal');

const add_book = document.querySelector('.add');
add_book.addEventListener('click', () => {
    modal.style.display = 'block';
});

const close_modal = document.querySelector('#close');
close_modal.addEventListener('click', () => {
    modal.style.display = 'none';
})