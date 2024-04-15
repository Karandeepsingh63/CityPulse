document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderResult = document.getElementById('orderResult');
  
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const buyerName = document.getElementById('buyerName').value;
      const address = document.getElementById('address').value;
      const mobileNumber = document.getElementById('mobileNumber').value;
      const age = document.getElementById('age').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const prescription = document.getElementById('prescription').files[0].name;
  
      orderResult.innerHTML = `
        <p>Order Placed Successfully!</p>
        <p>Buyer Name: ${buyerName}</p>
        <p>Address: ${address}</p>
        <p>Mobile Number: ${mobileNumber}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Doctor's Prescription: ${prescription}</p>
      `;
    });
  });
  