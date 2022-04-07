import { MailPayload, MailProvider } from '.';

export class MailGun implements MailProvider {
  constructor() {

  }

  send(data: MailPayload) {
    const result = false
    console.log('sending email using MailGun = ', result)
    return result
  }
}
