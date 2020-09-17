import { ICreateSessionRequestDTO } from './CreateSessionDTO';
import { ISessionRepository } from './../../repositories/ISessionRepository';
import { User } from '../../entities/User';

class CreateSessionUseCase {
  constructor(
    private sessionRepository: ISessionRepository
  ) {}

  async execute(data: ICreateSessionRequestDTO) {
    const userAlreadyExists = await this.sessionRepository.userAlreadyExists(data.username);

    if(!userAlreadyExists) {
      throw new Error('User not found.');
    }

    const user = new User(data);
    const login = await this.sessionRepository.logon(user);

    if(!login) {
      throw new Error('Password is wrong!')
    }
    
    return login;
  }
}

export { CreateSessionUseCase };