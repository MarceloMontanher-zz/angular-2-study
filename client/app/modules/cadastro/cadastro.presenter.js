"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cadastro_use_case_1 = require("../../domain/cadastro.use-case");
var base_presenter_1 = require("../../core/base.presenter");
var CadastroPresenter = (function (_super) {
    __extends(CadastroPresenter, _super);
    function CadastroPresenter() {
        var _this = _super.call(this) || this;
        _this.cadastroUseCase = new cadastro_use_case_1.CadastroUseCase();
        return _this;
    }
    CadastroPresenter.prototype.saveImage = function (image) {
        this.cadastroUseCase.execute(image);
    };
    return CadastroPresenter;
}(base_presenter_1.BasePresenter));
exports.CadastroPresenter = CadastroPresenter;
//# sourceMappingURL=cadastro.presenter.js.map