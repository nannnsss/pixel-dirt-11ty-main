const { DateTime } = require("luxon");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_assets");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  
  // Date Shortcodes/Filters
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('MMM dd, yyyy');
});

// Collections
  eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

	function extractExcerpt(post) {
		if(!post.templateContent) return '';
		if(post.templateContent.indexOf('</p>') > 0) {
			let end = post.templateContent.indexOf('</p>');
			return post.templateContent.substr(0, end+4);
		}
		return post.templateContent;
	}

  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data"
    },
  };
};