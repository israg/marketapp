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

    getCountOfProduct : {
      get: function () {
          const countOfProduct = [];
          const selector = $$(`android=${'new UiSelector().resourceId("com.getir.casestudy.dev:id/tvCount")'}`);
          _.each(selector, function (item, index) {
              countOfProduct.push(item);
              console.log("=====!!!",item.text);
          });
          var total = 0;
          for(var i in countOfProduct.length){
              console.log("*-*-*-*-*-*-*-*-",countOfProduct[i].getText());

              total += countOfProduct[i].getText();
          }
          console.log("Basket Count:",total);
          return total;

      }
    },
    getCountOfProductTotal : {
      value: function () {
         /* const countOfProductTotal = [];
          console.log("*-*-*-*-*-*-*-*-",this.getCountOfProduct);
          _.each(this.getCountOfProduct.getText(), function (item, index) {
              countOfProductTotal.push(item);
          });
          var total = 0;
          for(var i in countOfProductTotal.length){
              total += countOfProductTotal[i];
          }*/
          console.log("Basket Count:",this.getCountOfProduct);
          return this.getCountOfProduct;
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