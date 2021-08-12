const numbers = process.argv.slice(2);
for (let i = 0; i < numbers.length; i++ ) {
  if (numbers[i] > 0 ) {
      setTimeout(() => {
      console.log(`beep...!  on ${numbers[i]} sec.`)
    }, numbers[i] * 1000);
  }
};