// frontend/src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Variável para controlar a visibilidade da lista de usuários
// Inicialmente, a lista não está visível
var usuarioVisivel = false;
// Função para carregar usuários do backend
// Esta função faz uma requisição para o backend para obter a lista de usuários
function carregarUsuarios() {
    return __awaiter(this, void 0, void 0, function () {
        var lista, response, usuarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lista = document.getElementById("lista-usuarios");
                    // Se a lista já está visível, esvaziamos o conteúdo e definimos usuarioVisivel como false
                    // Isso permite que o usuário possa alternar a visibilidade da lista
                    if (usuarioVisivel) {
                        lista.innerHTML = "";
                        usuarioVisivel = false;
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetch("http://localhost:3000/usuarios")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    usuarios = _a.sent();
                    lista.innerHTML = "";
                    usuarios.forEach(function (usuario) {
                        var li = document.createElement("li");
                        li.innerHTML = "ID: <strong>".concat(usuario.id, "</strong> - Nome: <strong>").concat(usuario.nome, "</strong> - Idade: <strong>").concat(usuario.idade, "</strong>");
                        lista.appendChild(li);
                    });
                    usuarioVisivel = true;
                    return [2 /*return*/];
            }
        });
    });
}
// Adiciona um evento de clique ao botão "Carregar Usuários"
// Quando o botão é clicado, a função carregarUsuarios é chamada
document.getElementById("btn-carregar").addEventListener("click", function () {
    carregarUsuarios();
});
var carroVisivel = false;
function carregarCarros() {
    return __awaiter(this, void 0, void 0, function () {
        var lista, response, carros;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lista = document.getElementById("lista-carros");
                    if (carroVisivel) {
                        lista.innerHTML = "";
                        carroVisivel = false;
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetch("http://localhost:3000/carros")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    carros = _a.sent();
                    lista.innerHTML = "";
                    carros.forEach(function (carro) {
                        var li = document.createElement("li");
                        li.textContent = "".concat(carro.id, " - Modelo: ").concat(carro.modelo, " - Ano: ").concat(carro.ano);
                        lista.appendChild(li);
                    });
                    carroVisivel = true;
                    return [2 /*return*/];
            }
        });
    });
}
document.getElementById("btn-carregar-carros").addEventListener("click", function () {
    carregarCarros();
});
// document.addEventListener("DOMContentLoaded", () => {
//   carregarUsuarios();
//   carregarCarros();
// });
