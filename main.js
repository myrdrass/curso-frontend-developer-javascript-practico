const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const shopMenu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const order = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shopMenu.addEventListener('click', toggleShopOrder);

function toggleDesktopMenu() {
   order.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   order.classList.add('inactive');
   mobileMenu.classList.toggle('inactive');
}

function toggleShopOrder  () {
   mobileMenu.classList.add('inactive');
   desktopMenu.classList.add('inactive');
   order.classList.toggle('inactive');
}

const productList = [];
productList.push({
   name:'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name:'Pantalla',
   price: 220,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name:'Computadora',
   price: 200,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
   
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.append(productPrice, productName);
   
      const productInfoFigure = document.createElement('figure');
   
      const productIcon = document.createElement('img');
      productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productIcon);
   
      productInfo.append(productInfoDiv, productInfoFigure);
   
      productCard.append(productImg, productInfo);
      
      cardsContainer.appendChild(productCard);
   }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);