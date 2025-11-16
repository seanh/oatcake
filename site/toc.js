anchors.options.icon = "#";
anchors.add(
  "h1:not(.noanchor), h2:not(.noanchor), h3:not(.noanchor), h4:not(.noanchor), h5:not(.noanchor), h6:not(.noanchor)",
);
anchors.remove(".no-anchor");
tocbot.init({
  tocSelector: ".toc",
  contentSelector: "body",
  headingSelector: "h1, h2, h3, h4, h5, h6",
  ignoreSelector: ".notoc, .no_toc, .noanchor",
  orderedList: false,
  scrollSmooth: false,
});
