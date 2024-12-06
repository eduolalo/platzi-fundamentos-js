const lista = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
}

for(let fruta in lista){
    console.log(`Hay ${lista[fruta]} ${fruta}`);
}