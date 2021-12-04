

let sep = 'jorgec@kodemia.com'.split('@')
let maskStr = ''

// sep[0].split('').forEach(() => {
//     maskStr += '*'
// })

for (i= 0 ; i < sep[0].length; i++){
    maskStr += '*'
}
console.log(`${maskStr}@${sep[1]}`)