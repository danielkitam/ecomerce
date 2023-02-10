import { products } from './homeProduct.js';
export const productItem = (price, title, id, company, imageUrl) => {
    const createProductItemElement = document.createElement('div');
    createProductItemElement.addEventListener('click', () => window.location.href = (`sproduct.html?id=${id}`));
    createProductItemElement.classList = 'pro';
    createProductItemElement.innerHTML = ` 
    <div class="product-image-container">
    <img  class="productImage" src="${imageUrl}" alt="">
    </div>
    <div class="des">
        <span> ${company}</span>
        <h5>${title}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>${price}</h4>
    </div> 
    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
`
    return createProductItemElement;
}

export const printProductList = (containerClassName, data) => {
    const getProductsContainer = document.querySelector(`.${containerClassName}`);
    getProductsContainer.innerHTML = ``;
    data.forEach(product => {
        getProductsContainer.appendChild(productItem(
            product.price,
            product.title,
            product.id,
            product.company,
            product.imageUrl));
    });

    const getImages = document.querySelectorAll('.productImage');
    getImages.forEach(el => {
        el.addEventListener('onloadeddata', () => alert('loaded'));
    })

}


export const getPoductDetail = () => {
    const price = document.querySelector('.price');
    const productDetailImage = document.querySelectorAll('.product-detail-img');
    const productTitle = document.querySelector('.product-name');

    console.log(price)
    const getQueries = window.location.search;
    const urlParams = new URLSearchParams(getQueries);
    const id = urlParams.get('id');

    const getProduct = products.find(product => {
        return product.id === id;
    })
        ;

    //set product
    price.innerHTML = '$' + getProduct.price;
    productTitle.innerHTML = getProduct.title;
    productDetailImage.forEach((el, index) => {
        el.src = getProduct.detailsImages[index].url;
        el.addEventListener('load', () => {});
    })


}
