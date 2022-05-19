import { LoginService } from '../service/login.service';
import { User } from '../entity/user.entity';
import { jsonDataType } from '../Util/JsonData';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(body: User): Promise<jsonDataType>;
    registered(body: User): Promise<jsonDataType>;
}
