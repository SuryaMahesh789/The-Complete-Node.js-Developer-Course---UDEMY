// chalk package npm 

// chalk - npm (npmjs.com)


// Npm install chalk@4


const chalk = require('chalk')



// Styling text with colors
console.log(chalk.green('Success!'));
console.log(chalk.red('Error!'));
console.log(chalk.blue('Info message'));

// Combining styles
console.log(chalk.yellow.bold('Warning!'));
console.log(chalk.bgMagenta.white('Important message'));

console.log(chalk.green.italic('Surya Mahesh Kolisetty'))
console.log(chalk.magenta.bold('Surya Mahesh Kolisetty'))

console.log(chalk.bgYellow.white.bold.italic('Important message'));

console.log(chalk.bgGreen.bold.red.italic('UnImportant Error'));

console.log(chalk.green.bold('Success!'));

console.log(chalk.green.inverse.bold('Success!'));

console.log(chalk.red.bold('Error!'));

console.log(chalk.red.inverse.bold('Error!'));

console.log(chalk.blue.inverse.bold('Partial Success!'))