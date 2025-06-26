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
var InstrumentoMusical = /** @class */ (function () {
    function InstrumentoMusical() {
    }
    InstrumentoMusical.prototype.tocar = function () {
        console.log("Tocando un instrumento musical");
    };
    return InstrumentoMusical;
}());
var Guitarra = /** @class */ (function (_super) {
    __extends(Guitarra, _super);
    function Guitarra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guitarra.prototype.tocar = function () {
        console.log("Tocando uma guitarra");
    };
    return Guitarra;
}(InstrumentoMusical));
var Bateria = /** @class */ (function (_super) {
    __extends(Bateria, _super);
    function Bateria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bateria.prototype.tocar = function () {
        console.log("Tocando uma batería");
    };
    return Bateria;
}(InstrumentoMusical));
var instrumento = [new Guitarra(), new Bateria()];
instrumento.forEach(function (i) { return i.tocar(); });
