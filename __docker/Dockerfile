FROM nginx:stable-alpine

COPY __docker/ssl/* /etc/nginx/ssl/
COPY __docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY _site /usr/share/nginx/html