FROM jekyll/jekyll as build

WORKDIR /srv/app
RUN chmod 777 .

COPY Gemfile Gemfile
RUN bundle install

COPY . .
RUN chmod 777 . -R
ENV JEKYLL_ENV=production
RUN jekyll build --trace



FROM nginx:alpine

COPY --from=build /srv/app/_site .