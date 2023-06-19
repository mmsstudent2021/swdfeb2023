
const purgeCSSResults = await new PurgeCSS().purge({
  content: ["index.html"],
  css: ["css/app.css"],
});

