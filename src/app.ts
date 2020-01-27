import * as express from 'express';
import controllers from './controllers';

var app = express();

controllers.map((API) => {
  API.endPoints.map((EndPoint) => {
    const endPoint = new EndPoint();
    //@ts-ignore
    app[endPoint.method](`/${API.path}/${endPoint.path}`, (request, response) => endPoint.run(request, response));
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});