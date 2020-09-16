FROM jekyll/jekyll as build

WORKDIR /srv/app
RUN chmod 777 .

COPY Gemfile Gemfile
RUN bundle install

COPY . .
RUN chmod 777 . -R
ENV JEKYLL_ENV=production
RUN jekyll build


FROM nginx:alpine

WORKDIR /srv

COPY --from=build /srv/app/_site .

COPY nginx.conf /etc/nginx/nginx.conf