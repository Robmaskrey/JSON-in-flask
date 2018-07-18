//global variables
var cart = []

let data = getData();

function getData(){
  let data = $('#items').attr("content");
  data = data.replace(/'/g, '"');
  data = JSON.parse(data);
  return data;

}



//displays all items through loop
function displayItems(response) {
  console.log(response[0]);

  let output = '';
  let length = data.length;

  for (let i = 0; i < length; i++) {
    output += `
    <div class="col-md-3 col-sm-3 product">
      <div class="row">
        <!-- Product Image -->
        <img src="http://placehold.it/200x200" alt="${data[i].name}">
      </div>
      <div class="row">
        <h4 class="prod_name">${data[i].name}</h4>
      </div>
      <div class="row">
        <h5 class="amount">${data[i].price}</h5>
      </div>
      <div class="row">
        <button class="btn btn-primary" onclick="addToCart(${data[i].id})">
          Add to Cart
        </button>
      </div>
    </div>
    `
    // the response variable references the JSON, and by passing in different parts of the JSON file to the different functions, we can call those specific values to use.
  }

  // add output to prod_section
  $('#prod_section').html(output);

}

//gets products from json file


//adds product to cart
function addToCart(id){
  let data = getData();
    $.each(data, function(index, product) {
        if(product.id == id) {
          cart.push(product);
          displayTotal();
          //makes the cart show up when an item is clicked
          displayCart();
        }
    });
}

//removes items from cart
function removeFromCart(id){
  for (let i = 0; i < cart.length; i++){
    if (cart[i].id == id) {
      cart.splice(i, 1);
      //splicing it at that index and only going one space
      displayTotal();
      displayCart();
      break;
    }
  }
}

//calculates cart total
function calcTotal(){
  let total = 0;
  //loop through cart and add prices
  $.each(cart,function(index, product){
    total+= product.price;
  });

  console.log(total);
  return total;
}


//displays cart total
function displayTotal() {
  let total = calcTotal();

  $(`#nav_total`).html(`<a href="#">Cart Total:
    $${total.toFixed(2)}</a>`);
}

//displays cart contents
function displayCart(){
  let output = '';
  let duplicates = [];

  output += `
    <tr class="table_head">
      <th>#</th>
      <th>Your Items</th>
      <th>Price</th>
    </tr>`;

  $.each(cart, function (index, product) {
    let flag = false;

    for (let i = 0; i < duplicates.length; i++) {
      if (product.id == duplicates[i]) {
        flag = true;
        break;
      }
    }
    if (flag == false) {
    output += `
    <tr class="cart_items">
      <td>${checkDuplicates(product.id)}</td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)} <span onclick="removeFromCart(${product.id})" class="badge pull-right">X</span> </td>
    </tr>`
  }

  duplicates.push(product.id);
});

output +=`
  <tr class="cart_total">
    <th colspan="3">Total: $${calcTotal().toFixed(2)}</th>
  </tr>`

  $('#cart').html(output);
}


function checkDuplicates(id) {
  //will take in the 'id' parameter
  let count = 0;

$.each(cart, function (index, product){
  if(product.id == id) {
     count++;
  }
})
  return count;
}

displayItems(getData());
