const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 600 },
    { id: 3, name: 'Headphones', price: 100 },
    { id: 4, name: 'Keyboard', price: 50 },
    { id: 5, name: 'Mouse', price: 30 },
    { id: 6, name: 'Monitor', price: 300 },
    { id: 7, name: 'Printer', price: 150 },
    { id: 8, name: 'Webcam', price: 80 },
    { id: 9, name: 'USB Cable', price: 10 },
    { id: 10, name: 'External Hard Drive', price: 120 },
  ];


  const tableBody = document.getElementById("table-body");
  const elTotalPrice = document.getElementById("total-price");
  const elProductList = document.getElementById("product-list");

  let cart = [];

  function loadCart(){
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
        renderTable();
    }
  }

  function saveCart(){
    localStorage.setItem("cart" , JSON.stringify(cart));
  }

  renderTable();
  loadCart();

  function renderProducts(){
    for(let i = 0; i < products.length; i++){
        const productBut = document.createElement("button");
        productBut.innerText = `${products[i.name]} ${products[i].price}$ add to cart`;
        productBut.onclick = () => addProduct(products[i]);
        elProductList.appendChild(productBut);
    }
  }
  renderProducts();
  loadCart();

  function addProduct(product){
    let cartItem = null;
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id===product.id){
            cartItem = cart[i];
            break;
        }
    }

    if(cartItem){
        cartItem.amount++;
    }
    else{
        cart.push({...product , amount: 1});
    }
    saveCart();
    renderTable();
  }

  function renderTable(){
    let total = 0;
    tableBody.innerHTML = "";
    for(let i = 0; i < cart.length; i++){
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        <button class = remove onclick = "update(${i},-1)">-</button>
        <td class="one" >${cart[i].amount}</td>
        <button class = remove onclick = "update(${i},1)">+</button>
        <td>${cart[i].amount * cart[i].price}</td>
        <button class = remove onclick = "removeRow("${i}")">Remove</button>
        `;
        tableBody.appendChild(row);
        total+=cart[i].amount* cart[i].price;
    }
    elTotalPrice.textContent = total;
  }

  function removeRow(itemIndex){
    cart.splice(itemIndex , 1);
    saveCart();
    renderTable();
  }

  function update(index , change){
    if(change > 0){
        cart[index].amount++;
    }
    else{
        cart[index].amount--;
        if(cart[index].amount === 0) removeRow(index);
    }
    saveCart();
    renderTable();
  }