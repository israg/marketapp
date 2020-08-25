const Page = require('./page');
const assert = require('assert');
const constants = require('../data/constant');
var _ = require("underscore");


const BasketPage = Object.create(Page, {

    emptyBasketTextTitle : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/tvTitle")';
            return $(`android=${selector}`);
        }
    },

    getRemoveProduct : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/btnRemove")';
            return $(`android=${selector}`);
        }
    },

    tabRemoveProduct:{
        value: function () {
            this.getRemoveProduct.click();
        }
    },

    emptyBasketTitle:{
        value: function () {
            assert.strictEqual(this.emptyBasketTextTitle.getText(),constants.emptyBasketText);
        }
    }
});

module.exports = BasketPage;