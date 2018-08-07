FROM nginx

COPY conf.d/blc.conf /etc/nginx/conf.d/blc.conf
COPY ./build/ /www/
copy ./downloads/* /downloads/
