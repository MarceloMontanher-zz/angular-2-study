"use strict";
var http_1 = require("@angular/http");
var CadastroResource = (function () {
    function CadastroResource() {
        //this.http = http;
    }
    CadastroResource.prototype.cadastrar = function (foto) {
        console.log("resource!");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log("Imagem adicionada\n" + foto);
        // this.http.post('v1/fotos', JSON.stringify(foto), { headers: headers} )
        //         .subscribe(() => {
        //             //foto = new FotoComponent();
        //         }, erro => console.log(erro));
    };
    return CadastroResource;
}());
exports.CadastroResource = CadastroResource;
//# sourceMappingURL=cadastro.resource.js.map