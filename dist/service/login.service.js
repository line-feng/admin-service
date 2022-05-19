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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jsonData_1 = require("../Util/jsonData");
let LoginService = class LoginService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async login(body) {
        const jsonData = new jsonData_1.JsonData();
        let data = await this.userRepository.findOne({
            where: { username: body.username, password: body.password },
        });
        let bol = data ? true : false;
        if (bol) {
            jsonData.setCode(200);
            jsonData.setMessage('登录成功');
        }
        else {
            jsonData.setCode(601);
            jsonData.setMessage('账号密码错误');
        }
        return jsonData.sendData();
    }
    async registered(body) {
        const jsonData = new jsonData_1.JsonData();
        let user = this.userRepository.create(body);
        console.log(user);
        return jsonData.sendData();
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map