const loginPage = require('../../pageObjects/login.page');
const mainPage = require('../../pageObjects/main.page');
const basketPage = require('../../pageObjects/basket.page');
const productPage = require('../../pageObjects/product.page');

describe ('Case 2', function () {

    it("Should be able to login successfully with correct credentials", function () {
        loginPage.validSubmitForm();
    });

    it("Should be able to tab successfully basket button and should check basket is empty", function () {
        mainPage.tabBasketButton();
        basketPage.emptyBasketTitle();
        mainPage.tabBackButton();
    })

    it("Check Element Count", function () {
        mainPage.countElement();
    })

    it("Should be able to tab Atıştırmalık Button and add two of two different products in basket", function () {
        mainPage.tabSnackButton();
        productPage.tabAddFirstProduct();
        productPage.tabAddFirstProductDouble();
        productPage.tabAddSecondProduct();
        productPage.tabAddSecondProductDouble();
    });

    it("Should be able to back main screen", function () {
        mainPage.tabBackButton();
    });

    it("Should be able to tab Yiyecek Button and add three products in basket", function () {
        mainPage.tabFoodButton();
        productPage.tabAddFirstProduct();
        productPage.tabAddFirstProductDouble();
        productPage.tabAddFirstProductDouble();
    });

    it("Should be able to tab Basket Button and add all products in basket", function () {
        mainPage.tabBasketButton();
        productPage.tabAddFirstProductDouble();
        productPage.tabAddSecondProductDouble();
        productPage.tabAddThirdProductDouble();
    });

    it("Should be able to tab Basket Button and delete all products in basket", function () {
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
    });
});
