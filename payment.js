document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("paymentForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Here you can perform any necessary form validation or submission to the server

        // Assuming the order is successfully placed, show the modal
        document.getElementById("modal").style.display = "block";
    });
});

// Close the modal when the user clicks on the close button or anywhere outside the modal
document.addEventListener("click", function (event) {
    if (event.target == document.getElementById("modal") || event.target.classList.contains("close")) {
        document.getElementById("modal").style.display = "none";
    }
});

let cardNumInput = document.querySelector('#cardNum');

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value;
    cNumber = cNumber.replace(/\s/g, "");

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g);
        cNumber = cNumber.join(" ");
        cardNumInput.value = cNumber;
    }
});
