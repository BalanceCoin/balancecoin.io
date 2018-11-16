FROM node:latest

# Copy source and build
COPY . /app/
RUN cd /app && npm i && npm run build

CMD [ "/app/node_modules/serve/bin/serve.js", "-l", "tcp://0.0.0.0:5000", "-s", "/app/build" ]

EXPOSE 5000/tcp
