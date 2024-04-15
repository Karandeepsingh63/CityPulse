document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('.popup-container').style.display = 'flex';
    setTimeout(function () {
        document.querySelector('.popup-container').style.display = 'none';
    }, 3000);
});