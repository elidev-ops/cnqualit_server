import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

import { IMailProvider, IMessage } from "../IMailProvider";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: `sitecnquality@gmail.com`,
        pass: `site123cnquality`
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  };

  async sendEmail(message: IMessage): Promise<void>{
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      text: 'text',
      html: message.body
    });
  };
};