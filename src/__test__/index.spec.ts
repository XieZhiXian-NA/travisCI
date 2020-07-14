import { parseError } from '../index'

const fixtureFirefoxStack = `
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`

const fixtureStack = `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3
`

describe(`test parseError function`, () => {
    it('fixtureStack', () => {
        const err: Error = new Error(fixtureStack)
        expect(parseError(err)).toMatchObject({
            message: 'Error raised',
            stack: [
                { line: 2, colum: 9, filename: 'http://192.168.31.8:8000/c.js' },
                { line: 4, colum: 15, filename: 'http://192.168.31.8:8000/b.js' },
                { line: 4, colum: 3, filename: 'http://192.168.31.8:8000/a.js' },
                { line: 22, colum: 3, filename: 'http://192.168.31.8:8000/a.js' },
            ],
        })
        // expect(typeof parseError(err)).toBeTruthy()
    }),
        it('fixtureFirefoxStack', () => {
            const err: Error = new Error(fixtureFirefoxStack)
            expect(parseError(err)).toMatchObject({
                stack: [
                    { line: 2, colum: 9, filename: 'http://192.168.31.8:8000/c.js' },
                    { line: 4, colum: 15, filename: 'http://192.168.31.8:8000/b.js' },
                    { line: 4, colum: 3, filename: 'http://192.168.31.8:8000/a.js' },
                    { line: 22, colum: 3, filename: 'http://192.168.31.8:8000/a.js' },
                ],
                message: '',
            })
        })
})
