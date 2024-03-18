const moment = require('moment-timezone');
const yargs = require('yargs');

const localTimezone = 'America/New_York';
const formatString = 'dddd, MMMM Do YYYY, h:mm:ss a';

moment.tz.setDefault(localTimezone);

// console.log(process.argv);
// console.log(yargs.argv);
// const command = yargs.argv._[0];

const params = yargs.argv;

if (process.argv.length < 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
}
const targetTimezone = process.argv[2];

let formattedLocalTime = '';
let formattedTargetTime = '';

if (params.format) {
  formattedLocalTime = moment().tz(localTimezone).format(formatString);
  formattedTargetTime = moment().tz(targetTimezone).format(formatString);
} else {
  formattedLocalTime = moment().tz(localTimezone).format();
  formattedTargetTime = moment().tz(targetTimezone).format();
}

console.log(`Time time here is ${formattedLocalTime}`);
console.log(`Time time in ${targetTimezone} is ${formattedTargetTime}`);
