const loginPage = require('../../pageObjects/login.page');
const mainPage = require('../../pageObjects/main.page');
const basketPage = require('../../pageObjects/basket.page');
const productPage = require('../../pageObjects/product.page');

describe ('Case 1', function () {

    it("Should be able to login successfully with correct credentials", function () {
        loginPage.validSubmitForm();
    });

    it("Should be able to tab successfully basket button and should check basket is empty", function () {
        mainPage.tabBasketButton();
        basketPage.emptyBasketTitle();
        mainPage.tabBackButton();
    })

    it("Should be able to tab Atıştırmalık Button and add two different product in basket", function () {
        mainPage.tabSnackButton();
        productPage.tabAddFirstProduct();
        productPage.tabAddSecondProduct();
    });

    it("Should be able to back main screen", function () {
        mainPage.tabBackButton();
    });

    it("Should be able to tab İçecek Button and add one product in basket", function () {
        mainPage.tabBeverageButton();
        productPage.tabAddProduct();
    });

    it("Should be able to tab Basket Button and should delete all product in basket", function () {
        mainPage.tabBasketButton();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
        basketPage.tabRemoveProduct();
    });
});
