"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_presenter_1 = require("../../core/base.presenter");
var listagem_use_case_1 = require("../../domain/listagem.use-case");
var ListagemPresenter = (function (_super) {
    __extends(ListagemPresenter, _super);
    function ListagemPresenter(listener) {
        var _this = _super.call(this) || this;
        _this.listagemUseCase = new listagem_use_case_1.ListagemUseCase(_this);
        _this.listener = listener;
        return _this;
    }
    ListagemPresenter.prototype.requestPhotos = function (http) {
        return this.listagemUseCase.downloadImages(http);
    };
    ListagemPresenter.prototype.showPhotos = function (fotos) {
        this.listener.showImages(fotos);
    };
    return ListagemPresenter;
}(base_presenter_1.BasePresenter));
exports.ListagemPresenter = ListagemPresenter;
//# sourceMappingURL=listagem.presenter.js.map