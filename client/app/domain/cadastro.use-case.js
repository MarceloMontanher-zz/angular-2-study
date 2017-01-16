"use strict";
var cadastro_resource_1 = require("../resources/cadastro.resource");
var CadastroUseCase = (function () {
    function CadastroUseCase() {
        this.cadastroResource = new cadastro_resource_1.CadastroResource();
    }
    CadastroUseCase.prototype.execute = function (params) {
        this.cadastroResource.cadastrar(params);
    };
    return CadastroUseCase;
}());
exports.CadastroUseCase = CadastroUseCase;
//# sourceMappingURL=cadastro.use-case.js.map