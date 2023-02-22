# Artikelsøgning

En hurtig demo af et interface til at fremsøge artikler fra TV 2 Kosmopol.

Nævneværdige features:
* Search-as-you-type med debounced kald til REST-API'et
* Thumbnails hentes ud - også til artikler med video-thumbnails
* Hvis man scroller til bunden af resultaterne kan man hente flere resultater
* Det benytter Quasar komponent-frameworket, som var nyt for mig – det virker solidt

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
