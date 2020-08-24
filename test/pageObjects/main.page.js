const Page = require('./page');
var _ = require("underscore");

const MainPage = Object.create(Page, {
    basketButton : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/ga_toolbar_getir10GABasketButton")';
            return $(`android=${selector}`) ;
        }
    },

    backButton : {
        get : function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/ga_toolbar_leftIconImageView")';
            return $(`android=${selector}`);
        }
    },

    getSnackButton : {
        get: function () {
            const selector = 'new UiSelector().text("Atıştırmalık")';
            return $(`android=${selector}`);
        }
    },

    getBeverageButton : {
        get: function () {
            const selector = 'new UiSelector().text("İçecek")';
            return $(`android=${selector}`);
        }
    },

    getFoodButton : {
        get: function () {
            const selector = 'new UiSelector().text("Yiyecek")';
            return $(`android=${selector}`);
        }
    },

    getAllElements : {
        get: function () {
            const countElement = [];
             const selector = $$('android.widget.TextView');
             _.each(selector, function (item, index) {
                 countElement.push(item);
             });
             return countElement.length - 1;
        }
    },

    countElement : {
        value: function () {
            console.log("Count of Elements",this.getAllElements);
        }
    },

    tabBasketButton : {
        value: function () {
            this.basketButton.click();
        }
    },

    tabBackButton : {
        value: function () {
            this.backButton.click();
        }
    },

    tabSnackButton : {
        value: function () {
            this.getSnackButton.click();
        }
    },

    tabBeverageButton : {
        value: function () {
            this.getBeverageButton.click();
        }
    },

    tabFoodButton : {
        value: function () {
            this.getFoodButton.click();
        }
    }
});

module.exports = MainPage;