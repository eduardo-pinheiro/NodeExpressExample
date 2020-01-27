import * as express from 'express';

type method = 'get' | 'post' | 'put' | 'delete';

export default class {

    public method: method;
    public path: string;

    constructor() {
        this.method = 'get';
        this.path = 'uhuul';
    }

    public async run(request:express.Request, response:express.Response) {
        response.send('Hello World!');
    }
}