import { config } from "../config/config.js";
import { MongoUserRepository } from "./mongoose/user.repository.js";
import { MysqlUserRepository } from "./mysql/user.repository.js";

class UserRepository {
    static createRepository() {
        switch (config.DATABASE) {
            case "mysql":
                return new MysqlUserRepository()
                break;
            case "mongo":
                return new MongoUserRepository()
                break;
            default:
                throw new Error(`Unsupported database type: ${config.DATABASE}`);
        }
    }
}


export const userRepository = UserRepository.createRepository()
