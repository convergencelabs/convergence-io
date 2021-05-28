FROM jekyll/jekyll:3.6.2 as builder

COPY --chown=jekyll:jekyll . /home/jekyll/src
WORKDIR /home/jekyll/src

RUN bundle install && \
    bundle exec jekyll build --destination /home/jekyll/build --trace

FROM nginx:stable-alpine

COPY server/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/jekyll/build /usr/share/nginx/html