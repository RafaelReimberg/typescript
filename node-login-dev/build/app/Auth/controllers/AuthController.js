"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthServices_1 = __importDefault(require("@app/Auth/services/AuthServices"));
const AuthError_1 = __importDefault(require("@app/Auth/exceptions/AuthError"));
class AuthController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const { user, token } = yield new AuthServices_1.default().signIn(email, password);
                return res.status(200).json({ user, token });
            }
            catch (error) {
                if (error instanceof AuthError_1.default)
                    return res.status(401).send();
                return res.status(500).json({ error });
            }
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = new AuthController();
// export const create = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): Promise<void> => {
//   try {
//     // Implementação do middleware
//     res.status(200).json({ message: 'Autenticação com sucesso, burrão' })
//   } catch (error) {
//     next(error) // Encaminha o erro para o middleware de tratamento de erros
//   }
// }
