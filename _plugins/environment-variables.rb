module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
      site.config['cms'] = ENV['NETLIFYCMS'] || false
    end

  end

end