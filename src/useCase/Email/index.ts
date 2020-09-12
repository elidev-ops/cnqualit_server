import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateEmailUseCase } from "./CreateEmailUseCase";
import { CreateEmailController } from "./CreateEmailControler";

const mailtrapMailProvider = new MailtrapMailProvider();
const mailUseCase = new CreateEmailUseCase(mailtrapMailProvider);
const mailController = new CreateEmailController(mailUseCase);

export { mailController };