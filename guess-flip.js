import minimist from 'minimist';
import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";

const args = minimist(process.argv.slice(2))

args['call']

const call = args.call;

if(call == undefined){
    console.log('Error: no input');
}
else if(!(call == 'heads' || call == 'tails')){
    console.log('Error: input heads or tails');
}
else{
    const result = coinFlip();
    const winner = (call == result) ? 'win' : 'lose';

    console.log({'call': call, 'flip': result, 'result': winner});
}