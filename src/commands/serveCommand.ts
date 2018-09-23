import { Argv } from 'yargs';
import { spawn } from 'child_process';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { Datatables } from 'turbo-datatables-response';

declare interface Options {
    port?: number,
    url?: string
}

export class serveCommand
{
    public static register(argv: Argv): Argv
    {
        return argv.option('port', {
            alias: 'p',
            describe: 'Port to bind on',
            default: '3000'
        }).option('url', {
            alias: 'u',
            describe: 'Url for fetching the data',
            default: 'users'
        });
    }

    public static handle(argv: Options): void
    {   
        const app: Koa = new Koa;
        const router: Router = new Router;

        router.get(`/${argv.url}`, async (ctx: any, next: any): Promise<any> => {
            // Allow access from webpack-dev-server.
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
            
            const inputs = ctx.request.query;
            const dt = await Datatables();

            dt.of('test_users').only(['id', 'email']);
            dt.setInputs(inputs);
        
            ctx.body = await dt.make();
        });

        app.use(router.routes());
        app.listen(argv.port);

        console.log(`server is running on http://localhost:${argv.port}`);
    }
}