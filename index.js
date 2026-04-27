

let preloader = document.getElementById('preloader');


window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
}
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Форма отправлена (демонстрация). Данные: ' + new FormData(this));
});
