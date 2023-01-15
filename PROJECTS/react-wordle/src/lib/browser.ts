import { UAParser } from 'ua-parser-js'

const inAppBrowserNames = [
  'Facebook',
  'Instagram',
  'Line',
  'Messenger',
  'Puffin',
  'Twitter',
  'WeChat',
]

const parser = new UAParser()
const browser = parser.getBrowser()

export const isInAppBrowser = () => {
  return inAppBrowserNames.indexOf(browser.name ?? '') > -1
}
