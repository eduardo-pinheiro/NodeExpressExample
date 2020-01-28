import * as express from 'express';
import controllers from './controllers';

var app = express();

controllers.map((API) => {
  API.endPoints.map((EndPoint) => {
    const endPoint = new EndPoint();
    app[endPoint.method](`/${API.path}/${endPoint.path}`, async (request, response) => {
      const send = await endPoint.run(request, response);
      if (send !== undefined) response.send(JSON.stringify(send));
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});