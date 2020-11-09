# vue2vis

> This monorepo hosts Vue2 component wrapper for the [visjs](https://github.com/visjs) libraries.
> If you are looking for the old [vis@4.21](https://almende.github.io/vis/) please use the [branch 0.x](https://github.com/alexcode/vue2vis/tree/0.x)

<p align="center">
  <a href="https://travis-ci.com/alexcode/vue2vis">
    <img src="https://travis-ci.com/alexcode/vue2vis.svg?branch=master" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/alexcode/vue2vis?branch=master">
    <img src="https://coveralls.io/repos/github/alexcode/vue2vis/badge.svg?branch=master" alt="Coverage Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?" alt="Software License" />
  </a>
  <a href="https://github.com/alexcode/vue2vis/releases">
    <img src="https://img.shields.io/github/release/alexcode/vue2vis.svg?" alt="Latest Version" />
  </a>
  <a href="https://github.com/alexcode/vue2vis/issues">
    <img src="https://img.shields.io/github/issues/alexcode/vue2vis.svg?" alt="Issues" />
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?" alt="lerna" />
  </a>
</p>

## Usage

Please visit individual packages for installation and usage

- [Timeline](/packages/timeline/README.md)
- [Graph2d](/packages/graph2d/README.md)
- [Network](/packages/network/README.md)

For more details please check the full [VisJs documentation](https://visjs.org).

## List of currently implemented modules

- [x] Timeline
- [x] Graph2d
- [ ] Graph3d
- [x] Network

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

### Build Setup

```bash
# Once you have cloned this repo, install dependencies
yarn install
yarn lerna bootstrap

# build for development and production with minification
yarn prepare

```

## Testing

```bash
yarn test:unit
```

### Run demo locally

```bash
# Run demo at localhost:8080
yarn serve:graph2d
```

or

```bash
yarn serve:network
```

or

```bash
yarn serve:timeline
```

Go to <http://localhost:8080/> to see running examples

NOTE: If you make changes to the library you should run `yarn prepare` again in the root folder.
The dev server should detect modification and reload the demo

## Security

If you discover any security related issues, please email infocontact.alex@gmail.com instead of using the issue tracker.

## Credits

- [Alex Couturon][link-author]
- [João Menighin](https://github.com/Menighin)
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/alexcode
[link-contributors]: https://github.com/alexcode/vue2vis/graphs/contributors
