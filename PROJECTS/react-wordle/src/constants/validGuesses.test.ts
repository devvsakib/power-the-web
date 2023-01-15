import { fail } from 'assert'

import { VALID_GUESSES } from './validGuesses'

describe('valid guesses', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(VALID_GUESSES))

    expect(VALID_GUESSES.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== VALID_GUESSES.length) {
      uniqueWords.forEach((w) => {
        const ww = VALID_GUESSES.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
