const form = document.getElementById('customer-form');
const customerInfo = document.getElementById('customer-info');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const product = document.getElementById('product').value;

  const customerInfoString = `
    <div class="customer-info-entry">
      <h2>Customer Information:</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Product Name: ${product}</p>
      <hr>
    </div>
  `;

  customerInfo.insertAdjacentHTML('beforeend', customerInfoString);
});