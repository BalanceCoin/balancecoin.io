FROM nginx

# Copying nginx configure.
COPY conf.d/blc.conf /etc/nginx/conf.d/blc.conf

# Copying download files.
COPY ./downloads/* /downloads/

# Copy source and build
COPY . /app/
RUN cd /app && npm i && npm run build-sass && npm run build && mkdir /www && cp -R ./build/* /www/ && rm -rf /app
