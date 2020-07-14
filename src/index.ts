type M = {
    line: number
    colum: number
    filename: string
}
export interface ErrorMessage {
    message: string
    stack: M[]
}

export function parseError(err: Error): ErrorMessage {
    // implement
    const message = err.message
    const reg = /(.+)\n?/gm
    const res = message.match(reg)
    const r = /(https?:\/\/.*.js):(\d+):(\d+)/
    let map = {} as M
    const resMap = {} as ErrorMessage
    const stack: M[] = []
    console.log('shefh')
    for (const s of res as RegExpMatchArray) {
        if (s.startsWith('TypeError:')) resMap.message = s.replace('TypeError:', '').trim()
        const re = s.mtch(r)
        if (re) {
            map = {
                line: +re[2],
                colum: +re[3],
                filename: re[1],
            }

            stack.push(map)
        }
        resMap.stack = [...stack]
    }
    if (!resMap.message) resMap.message = ''
    return resMap
}
