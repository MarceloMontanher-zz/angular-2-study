"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var cadastro_presenter_1 = require("./cadastro.presenter");
var CadastroComponent = (function () {
    function CadastroComponent(fb) {
        this.presenter = new cadastro_presenter_1.CadastroPresenter();
        this.initForms(fb);
    }
    CadastroComponent.prototype.initForms = function (fb) {
        this.meuForm = fb.group({
            titulo: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ]],
            url: ['',
                forms_1.Validators.required],
            descricao: ['']
        });
    };
    CadastroComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.presenter.saveImage(this.getForm());
    };
    CadastroComponent.prototype.getForm = function () {
        var form = this.meuForm.value;
        return form;
    };
    return CadastroComponent;
}());
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './cadastro.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map