const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const shopMenu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const order = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shopMenu.addEventListener('click', toggleShopOrder);

function toggleDesktopMenu() {
   const isOrderClosed= order.classList.contains('inactive');
   if (!isOrderClosed) order.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const isOrderClosed= order.classList.contains('inactive');
   if (!isOrderClosed) order.classList.add('inactive');
   mobileMenu.classList.toggle('inactive');
}

function toggleShopOrder  () {
   const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
   if (!isMobileMenuClosed) mobileMenu.classList.add('inactive');
   order.classList.toggle('inactive');
}