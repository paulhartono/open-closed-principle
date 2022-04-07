import { MailGun } from './mailgun.service'
import { SendGrid } from './sendgrid.service'

export interface MailProvider {
  send: (data: MailPayload) => boolean
}

export type MailPayload = {
  timestamp: Date,
  to: string,
  from: string,
  subject: string,
  message: string
  cc?: string
  bcc?: string
}

export const handleEvent = async (payload: MailPayload, mailProviders: MailProvider[]) => {

  console.log('PROCESS: validate event payload')

  console.log('PROCESS: log that event is received in our monitoring tool')

  //console.log('PROCESS: send email')
  for (let i = 0; i < mailProviders.length; i++) {
    const result = mailProviders[i].send(payload)

    if (result) {
      break;
    }
  }

  console.log('PROCESS: put back to Queue if timestamp < 1 day')

  console.log('PROCESS: alert when failure >= 1 day')
}

console.log('PROCESS: Read through datastore/configs for list of mail providers we support')
const mailProviders: MailProvider[] = [
  new MailGun(),
  new SendGrid()
]

handleEvent(
  {
    timestamp: new Date(),
    to: 'to.address@gmail.com',
    from: 'from.address@gmail.com',
    subject: 'test subject',
    message: 'test message'
  } as MailPayload,
  mailProviders
)
