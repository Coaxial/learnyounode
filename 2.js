var args = process.argv
var total = 0

args.map(function(curr, index) {
  if(!Number.isNaN( Number(curr) )) {
    total += Number(curr)
  }
})

console.log(total)
