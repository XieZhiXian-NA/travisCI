let err = new Error(`
bar@http://192.168.31.8:8000/c.js:2:9
foo@http://192.168.31.8:8000/b.js:4:15
calc@http://192.168.31.8:8000/a.js:4:3
<anonymous>:1:11
http://192.168.31.8:8000/a.js:22:3
`);
function parseError(err) {
    // implement
    var message = err.message;
    let reg = /(.+)\n?/mg;
    const res = message.match(reg);
    let r = /(http+:\/\/.*.js):(\d+):(\d+)/;
    let map = {};
    var resMap = {};
    let stack = [];
    for (let s of res) {
        if (s.startsWith('TypeError:'))
            resMap.message = s.replace('TypeError:', '').trim();
        let re = s.match(r);
        if (re) {
            map = {
                line: +re[2],
                colum: +re[3],
                filename: re[1]
            };
            stack.push(map);
        }
        resMap.stack = [...stack];
    }
    if (!resMap.message)
        resMap.message = '';
    return resMap;
}
console.log(parseError(err));
