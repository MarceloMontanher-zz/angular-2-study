"use strict";
var BaseComponent = (function () {
    function BaseComponent(presenter) {
        this.presenter = presenter;
        this.defaultErrorMsg = 'Problemas para realizar a ação executada, tente novamente.';
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.presenter.setComponent(this);
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.presenter.unsetComponent();
    };
    BaseComponent.prototype.showErrorMsg = function (err) {
        this.errorMsg = this.defaultErrorMsg;
        if (err != null) {
            console.log(err.toString());
            this.errorMsg = err.toString();
        }
        if (CLIENT_SIDE) {
            window.scrollTo(0, 0);
        }
        this.hideLoading();
    };
    BaseComponent.prototype.hideErrorMsg = function () {
        this.errorMsg = undefined;
    };
    BaseComponent.prototype.showSuccessMsg = function (msg) {
        this.successMsg = msg;
    };
    BaseComponent.prototype.hideSuccessMsg = function () {
        this.successMsg = undefined;
    };
    BaseComponent.prototype.showLoading = function () {
        this.isLoading = true;
    };
    BaseComponent.prototype.hideLoading = function () {
        // angular-universal is breaking when rendering objects in DOM (a bug which should be fixed in next relesase)
        // in the meantime we have to avoid this bug otherwise the seo does not work
        if (CLIENT_SIDE) {
            this.isLoading = false;
        }
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map