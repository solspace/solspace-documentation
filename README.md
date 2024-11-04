# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

``` sh
yarn
```

### Local Development

``` sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

``` sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Fetch Updates for Changelogs

``` sh
yarn clean-github-remote-content
```

``` sh
yarn fetch-github-remote-content
```

These commands will clear out the old changelogs and fetch the latest available from the `solspace/craft-freeform` repo.

### Deployment

Using SSH:

``` sh
USE_SSH=true yarn deploy
```

Not using SSH:

``` sh
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
# solspace-documentation
# solspace-documentation
