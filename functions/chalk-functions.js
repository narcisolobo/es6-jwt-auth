import chalk from "chalk";

function brightYellow(message) {
  console.log(chalk.bold.yellowBright(message));
}

function brightMagenta(message) {
  console.log(chalk.magentaBright(message));
}

function brightBlue(message) {
  console.log(chalk.blueBright(message));
}

export { brightYellow, brightMagenta, brightBlue };
