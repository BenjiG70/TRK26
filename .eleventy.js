module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/assets/css');

  return {
    pathPrefix: "/TRK26/",
    dir: { 
      input: 'src', 
      output: 'dist', 
      data: '_data' 
    },
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
};
