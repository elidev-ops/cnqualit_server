import { IMailProvider } from "../../providers/IMailProvider";
import { CreateEmailRequestDTO } from "./CreateEmailRequestDTO";

export class CreateEmailUseCase {
  constructor(
    private mailProvider: IMailProvider
  ) {}

  async execute(data: CreateEmailRequestDTO) {
    this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Server CN Quality',
        email: 'sitecnquality@gmail.com'
      },
      subject: data.subject,
      body: data.message
    })
  }
}