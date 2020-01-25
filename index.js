const Koa = require('koa');
const fetch = require('node-fetch');

const app = new Koa();

app.use(async ctx => {
    // console.log('ctx.path:', ctx.path)
    // console.log('request.url:', ctx.request)

    // const url = ctx.request.header.host + ctx.request.url;

    // if(ctx.path!=='/ph'){
    //    const res =  await fetch(url);

    // }

    console.log(ctx.path);
    if (ctx.path === '/ph') {
        const res = await fetch('https://pornhub.com');
        const response = await res.text();
        ctx.body = response;
    }
});

app.listen(3004);