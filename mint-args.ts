import { Command } from 'commander';
import { executeTransaction, executeStop } from "./utils/mint";

const program = new Command();

program.command('mint')
    .description('Mint $MOVE')
    .argument('<privateKey>', 'string')
    .argument('<sleepTime>', 'string')
    .action(async (privateKey, sleepTime, options) => {
        await executeTransaction(privateKey, sleepTime)
})

program.parse();
