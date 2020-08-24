const Page = require('./page');
const constants = require('../data/constant');

const LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username : {
        get: function() {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/usernameEditText")';
            return $(`android=${selector}`);
        }
    },

    password : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/passwordEditText")';
            return $(`android=${selector}`);
        }
    },

    loginButton : {
        get: function () {
            const selector = 'new UiSelector().resourceId("com.getir.casestudy.dev:id/loginButton")';
            return $(`android=${selector}`);
        }
    },

    validSubmitForm:{
        value: function () {
            this.username.addValue(constants.loginCredential.username);
            this.password.addValue(constants.loginCredential.password);
            this.loginButton.click();
        }
    }

});

module.exports = LoginPage;
