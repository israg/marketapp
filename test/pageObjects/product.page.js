const Page = require('./page');
const assert = require('assert');
const constants = require('../data/constant');

const ProductPage = Object.create(Page, {
    getAddProduct : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/btnAdd")';
            return $(`android=${selector}`);
        }
    },

    getFirstProduct : {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView');
            return selector;
        }
    },

    getFirstProductDouble : {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView[2]');
            return selector;
        }
    },

    getSecondProduct : {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView');
            return selector;
        }
    },

    getSecondProductDouble : {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView[2]');
            return selector;
        }
    },
    getThirdProductDouble : {
        get: function () {
            const selector = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[3]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView[2]');
            return selector;
        }
    },

    tabAddProduct:{
        value: function () {
            this.getAddProduct.click();
        }
    },

    tabAddFirstProduct:{
        value: function () {
                this.getFirstProduct.click();
        }
    },

    tabAddFirstProductDouble:{
        value: function () {
            this.getFirstProductDouble.click();
        }
    },

    tabAddSecondProduct:{
        value: function () {
            this.getSecondProduct.click();
        }
    },

    tabAddSecondProductDouble:{
        value: function () {
            this.getSecondProductDouble.click();
        }
    },

    tabAddThirdProductDouble:{
        value: function () {
            this.getThirdProductDouble.click();
        }
    }
});

module.exports = ProductPage;