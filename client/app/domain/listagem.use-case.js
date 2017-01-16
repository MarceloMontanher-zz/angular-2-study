"use strict";
var listagem_resource_1 = require("../resources/listagem.resource");
var ListagemUseCase = (function () {
    function ListagemUseCase(listener) {
        this.listagemResource = new listagem_resource_1.ListagemResource(this);
        this.listener = listener;
    }
    ListagemUseCase.prototype.downloadImages = function (http) {
        this.listagemResource.downloadImages(http);
    };
    ListagemUseCase.prototype.showImages = function (fotos) {
        console.log("Primeiro Show Images");
        this.listener.showPhotos(fotos);
    };
    return ListagemUseCase;
}());
exports.ListagemUseCase = ListagemUseCase;
//# sourceMappingURL=listagem.use-case.js.map