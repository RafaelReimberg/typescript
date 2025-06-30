var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Documento = /** @class */ (function () {
    function Documento() {
    }
    Documento.prototype.parar = function () {
        console.log("Parando a impressão do documento.");
    };
    return Documento;
}());
var Relatorio = /** @class */ (function (_super) {
    __extends(Relatorio, _super);
    function Relatorio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Relatorio.prototype.imiprimir = function () {
        console.log("Imprimindo o relatório.");
    };
    return Relatorio;
}(Documento));
var Fatura = /** @class */ (function (_super) {
    __extends(Fatura, _super);
    function Fatura() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fatura.prototype.imiprimir = function () {
        console.log("Imprimindo a fatura.");
    };
    return Fatura;
}(Documento));
var documentos = new Relatorio();
documentos.imiprimir();
documentos.parar();
var documentos2 = new Fatura();
documentos2.imiprimir();
documentos2.parar();
