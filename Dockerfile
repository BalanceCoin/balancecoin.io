FROM node:alpine

# Copy source and build
COPY . /app/
RUN cd /app && npm i && npm run build

CMD [ "/app/node_modules/serve/bin/serve.js", "-s", "/app/build" ]

EXPOSE 5000/tcp
