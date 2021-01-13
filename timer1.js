const { argv } = require("process");

const beep = () => process.stdout.write('\x07');
const argArr = process.argv.slice(2).map(x => Number(x));
// console.log(argArr);
const timer = function(arg) {
  // console.log(arg);
  if (arg !== []) {
    for (let elem of arg) {
      if (elem >= 0 && Number.isInteger(elem)) {
        // console.log('ta dando certo ' + elem);
        setTimeout(beep, elem * 1000);
        // setTimeout(() => console.log('beep'), elem * 1000);
      }
    }
  }
};
timer(argArr);