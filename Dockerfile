FROM mhart/alpine-node

COPY . /app

RUN cd /app && npm i && npm run build-sass && npm run build

EXPOSE 5000

CMD [ "/app/node_modules/serve/bin/serve.js", "-l", "tcp://0.0.0.0:5000", "-s", "/app/build" ]
