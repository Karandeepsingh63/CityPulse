document.getElementById('payment-method').addEventListener('change', function() {
  const method = this.value;
  const paymentForms = document.querySelectorAll('.payment-type');
  paymentForms.forEach(form => form.classList.add('hidden'));

  if (method === 'card') {
      document.getElementById('payment-form').classList.remove('hidden');
      document.getElementById('card-payment-form').classList.remove('hidden');
  } else if (method === 'upi') {
      document.getElementById('payment-form').classList.remove('hidden');
      document.getElementById('upi-payment-form').classList.remove('hidden');
  } else if (method === 'cod') {
      confirmCOD();
  }
});

document.getElementById('card-payment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle card payment form submission
  console.log('Processing card payment...');
  alert('Processing card payment...'); // Replace with actual payment processing logic
});

document.getElementById('upi-payment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const upiId = document.getElementById('upi-id').value;
  // Handle UPI payment form submission
  console.log('Processing UPI payment for UPI ID:', upiId);
  alert('Processing UPI payment for UPI ID: ' + upiId); // Replace with actual payment processing logic
});

function confirmCOD() {
  const confirmation = confirm('Are you sure you want to proceed with Cash on Delivery?');
  if (confirmation) {
      console.log('Order confirmed. Cash will be paid upon delivery.');
      alert('Order confirmed. Cash will be paid upon delivery.'); // Replace with actual confirmation logic
  }
}
