'use strict'

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><img class="goodImg" src="images/iPhone14.jpg" alt=""><div class="goodTitle">${this.title}</div><div class="goodPrice">${this.price}</div><button class="goodBtnAdd"><a href="#">Добавить</a></button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    countGoodsList() { //Подсчёт КОЛИЧЕСТВА товаров
        let goodsCount = 0;
        this.goods.forEach((goods) => {
            goodsCount += goods.count
        });
        return goodsCount;
    }
}

class GoodsCart {
    constructor(id, title, price, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.count = count;
    }

    findGoodCart() { // есть ли уже добавляемый товар в корзине?
    }

    addGoodCart() { // метод ДОБАВЛЕНИЯ товара в корзину
    }

    delGoodCart() { // метод УДАЛЕНИЯ товара из корзину
    }

    countGoodCart() { // метод ПОДСЧЁТА КОЛИЧЕСТВА товаров в корзине
    }

    countGoodPriceCart() { // метод ПОДСЧЁТА СТОИМОСТИ товаров в корзине
    }

}


const list = new GoodsList();
list.fetchGoods();
list.render();


