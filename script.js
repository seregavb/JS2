'use strict'

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'Pantalon', price = 1500) => {
    return `<div class="goods-item"><img class="goodImg" src="images/iPhone14.jpg" alt=""><div class="goodTitle">${title}</div><div class="goodPrice">${price}</div><button class="goodBtnAdd"><a href="#">Добавить</a></button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);

