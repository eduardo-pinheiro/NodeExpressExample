import * as express from 'express';

export class Controller {

    public method: MethodType;
    public path: string;

    constructor(method: MethodType, path?: string) {
        this.method = method;
        this.path = path ? path : '';
    }
}

export type MethodType = 'get' | 'post' | 'put' | 'delete';

export interface IController {
    run(request: express.Request, response: express.Response): any;
}