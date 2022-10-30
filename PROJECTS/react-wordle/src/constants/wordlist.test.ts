import { fail } from 'assert'

import { WORDS } from './wordlist'

// You may not want the list of solutions to be unique. In that case, disable this test
describe('wordlist', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(WORDS))

    expect(WORDS.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== WORDS.length) {
      uniqueWords.forEach((w) => {
        const ww = WORDS.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
