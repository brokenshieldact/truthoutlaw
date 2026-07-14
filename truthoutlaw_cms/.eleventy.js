export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/admin": "admin"});

  eleventyConfig.addCollection("articles", collectionApi =>
    collectionApi.getFilteredByGlob("src/articles/*.md")
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("readableDate", dateObj =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    }).format(dateObj)
  );

  eleventyConfig.addFilter("isoDate", dateObj =>
    new Date(dateObj).toISOString().slice(0, 10)
  );

  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
