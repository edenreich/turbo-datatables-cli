import { Argv } from 'yargs';
import { spawn } from 'child_process';
import { app } from '../server';

declare interface Options {
    port?: number
}

export class serveCommand
{
    public static register(argv: Argv): Argv
    {
        return argv.option('port', {
            alias: 'p',
            describe: "Port to bind on",
            default: "3000"
        }).option('verbose', {
            alias: 'v',
            default: false
        });
    }

    public static handle(argv: Options): void
    {
        const npm = (process.platform === "win32" ? "npm.cmd" : "npm")
        const command = spawn(npm, ['run', 'start-server']);

        app.listen(argv.port);

        console.log(`server is running on http://localhost:${argv.port}`);
        
        command.stdout.on('data', function (data: any) {
            console.log(data.toString());
        });
        
        command.stderr.on('data', function (data: any) {
            console.error(data.toString());
        });
    }
}