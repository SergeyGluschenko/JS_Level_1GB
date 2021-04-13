"use strict";

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.goodsName}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [
        {id_product: 101, goodsName: 'яблоки',quantity: 1.5, price: 110,},
        {id_product: 102, goodsName: 'груши', quantity: 4, price: 150,},
        {id_product: 103, goodsName: 'молоко', quantity: 1, price: 70,}
    ],


    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
cart.init();

