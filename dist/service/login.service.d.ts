import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { jsonDataType } from '../Util/jsonData';
export declare class LoginService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    login(body: User): Promise<jsonDataType>;
    registered(body: User): Promise<jsonDataType>;
}
