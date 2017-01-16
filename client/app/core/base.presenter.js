"use strict";
var BasePresenter = (function () {
    function BasePresenter() {
        this.subscriptions = [];
    }
    BasePresenter.prototype.unsetComponent = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    return BasePresenter;
}());
exports.BasePresenter = BasePresenter;
//# sourceMappingURL=base.presenter.js.map