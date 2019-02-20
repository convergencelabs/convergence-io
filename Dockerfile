FROM nginx:stable-alpine

COPY server/nginx.conf /etc/nginx/nginx.conf
COPY _site /usr/share/nginx/html