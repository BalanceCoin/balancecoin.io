FROM node

# Copy source and build
COPY ../../* /app/
RUN cd /app && npm i && npm run build-sass && npm run build && mkdir /www && cp -R ./build/* /www/ && rm -rf /app && npm i -g serve

CMD [ "serve", "-s", "/www" ]

