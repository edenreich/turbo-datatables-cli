import * as Koa from 'koa';
import * as Router from 'koa-router';
import { Datatables } from 'turbo-datatables-response';

const app: Koa = new Koa;
const router: Router = new Router;

router.get('/people', async (ctx: any, next: any): Promise<any> => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    const inputs = ctx.request.query;

    const dt = await Datatables();
    dt.of('test_peoples').only(['id', 'email']);
    dt.setInputs(inputs);

    ctx.body = await dt.make();
});

app.use(router.routes());

export { app };
