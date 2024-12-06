function calculateDiscountedPrice (precio, discountPercentage) {
    const discount = (precio * discountPercentage) / 100;
    const discountedPrice = precio - discount;
    return discountedPrice;
}

const originalPrice = 100;
const discountPercentage = 20;
const discountedPrice = calculateDiscountedPrice(originalPrice, discountPercentage);
console.log(`Precio original: $${originalPrice}`);
console.log(`Precio con descuento: $${discountedPrice}`);
