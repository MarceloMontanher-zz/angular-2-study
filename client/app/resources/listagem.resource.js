"use strict";
var ListagemResource = (function () {
    function ListagemResource(listener) {
        this.listener = listener;
    }
    ListagemResource.prototype.downloadImages = function (http) {
        var _this = this;
        http.get('v1/fotos')
            .map(function (res) { return res.json(); })
            .subscribe(function (fotos) { return _this.listener.showImages(fotos); }, function (erro) { return console.log(erro); });
    };
    return ListagemResource;
}());
exports.ListagemResource = ListagemResource;
//# sourceMappingURL=listagem.resource.js.map