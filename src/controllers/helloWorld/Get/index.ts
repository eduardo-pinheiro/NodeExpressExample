import * as express from 'express';

/* Interfaces */
import {
    Controller,
    IController
} from '../../../interfaces';

export default class Get extends Controller implements IController {

    constructor() {
        super('get', 'uhuul');
    }

    async run(request: express.Request, response: express.Response) {
        return ('Hello World');
    }
}