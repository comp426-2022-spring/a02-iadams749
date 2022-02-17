import minimist from 'minimist';
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))

args['number']

const num = args.number || 1;

const results = coinFlips(num);
const count = countFlips(results);

console.log(results)
console.log(count)