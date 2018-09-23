import { Argv } from 'yargs';
import { setup } from '../database/setup';

declare interface Options {
    records: number,
    table: string
}

export class seedCommand
{
    public static register(argv: Argv): Argv 
    {
        return argv.option('records', {
            alias: 'r',
            describe: "Amounts of records to seed.",
            default: "100"
        }).option('table', {
            alias: 't',
            describe: "The table name to create.",
            default: "test_users"
        });
    }    
    
    public static handle(argv: Options): void 
    {
        setup(argv.table, argv.records);
    }
}