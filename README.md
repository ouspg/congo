# Congo

A modified congo theme

🌏 [Demo site](https://jpanther.github.io/congo/)  
📑 [Theme documentation](https://jpanther.github.io/congo/docs/)  
🐛 [Bug reports & issues](https://github.com/jpanther/congo/issues)  
💡 [Questions & feature requests](https://github.com/jpanther/congo/discussions)

## Modifications to the original theme

###   Include [Alpine.js](https://alpinejs.dev/) as dependency and bundle it
  * Bundled in [head.html](layouts/partials/head.html)
  * Modify package.json to use vendor-copy

To update bundles, run

```console
npm run assets
```

###

Added option to use `private` variable in the front matter on pages.
Page is excluded then from `sitemap.xml`.

To exclude a page, use `private: true` in the YAML format, for example.

### Dynamic banner support on top of the home page
