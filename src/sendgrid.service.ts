import { MailPayload, MailProvider } from '.';

export class SendGrid implements MailProvider {
  constructor() {

  }

  send(data: MailPayload) {
    const result = true
    console.log('sending email using SendGrid = ', result)
    return result
  }
}
