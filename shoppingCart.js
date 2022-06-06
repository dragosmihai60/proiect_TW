let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll('.product-over');

products.forEach(product =>{
    product.addEventListener('click', (e) =>{
        if(e.target,classList.contains('addToCart')){
            const productId = e.target.dataset.productID;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('.priceValue').innerHTML;
            const productImage = product.querySelector('img').src;
        }
    });
});