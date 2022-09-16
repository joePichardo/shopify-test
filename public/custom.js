$(document).ready(function(){
  $('#product-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#product-image-slider-nav'
  });
  $('#product-image-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#product-image-slider',
    dots: false,
    focusOnSelect: true
  });
});

async function submitForm(event) {
  event.preventDefault();
  const value = document.querySelector('input[name="idAndSize"]:checked').value;
  console.log("value", value);
  let formData = {
    'items': [{
      'id': value,
      'quantity': 1
    }]
  };
  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  console.log("response", response);

  if (response.success) {
    alert("Product added to cart.");
  } else {
    alert("There was an issue adding product to cart.");
  }
}