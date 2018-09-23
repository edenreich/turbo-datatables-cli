import { Argv } from "yargs";

declare interface Options {
    records?: number
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
        throw new Error("Method not implemented.");
    }
}