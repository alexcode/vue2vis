# vue2vis

> Vue2 component that helps with <a href="http://visjs.org/">Visjs</a> interaction

<p align="center">
  <a href="https://travis-ci.org/alexcode/vue2vis">
    <img src="https://travis-ci.org/alexcode/vue2vis.svg?branch=master" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/alexcode/vue2vis?branch=master">
    <img src="https://coveralls.io/repos/github/alexcode/vue2vis/badge.svg?branch=master" alt="Coverage Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/vue2vis">
    <img src="https://img.shields.io/npm/v/vue2vis.svg?" alt="Packagist" />
  </a>
  <a href="https://github.com/alexcode/vue2vis/releases">
    <img src="https://img.shields.io/github/release/alexcode/vue2vis.svg?" alt="Latest Version" />
  </a>

  <a href="https://github.com/alexcode/vue2vis/issues">
    <img src="https://img.shields.io/github/issues/alexcode/vue2vis.svg?" alt="Issues" />
  </a>
</p>

### Installation
```
npm install --save vue2vis
```

or

```
yarn add vue2vis
```

## Usage

Declare the component
``` javascript
Vue.component('timeline', vue2vis.Timeline);
```

Add the component in the template. You can bind [Visjs event](http://visjs.org/docs/timeline/#Events) but `currentTimeTick` which needs to be activated with the prop `withTimeTick`.

```html
<body>
  <div id="app">
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
  </div>
</body>
```

Add groups, items and options in your observed data or computed.
``` javascript
new Vue({
  el: '#app',
  data() {
    return {
      groups: [{
      	id: 0,
        content: 'Group 1'
      }],
      items: [{
      	id: 0,
        group: 0,
        start: new Date(),
        content: 'Item 1'
      }],
      options: {
        editable: true,
      }
    }
  },
});
```

Add Visjs CSS
``` css
@import "~vis/dist/vis.css";
```
Here is a basic working demo with item generation:
[JS Fiddle Basic Demo](https://jsfiddle.net/alexkodo/ejdut8fm/)

You can also create items or group labels as Vue Components:
[JS Fiddle Item Vue Component Demo](https://jsfiddle.net/alexkodo/n978c58d/)

## Visjs documentation

Full reference of Item and Group formats, options properties and events:

Documentation [Timeline](http://visjs.org/docs/timeline)

Documentation [Graph2d](http://visjs.org/docs/graph2d)

## List of currently implemented modules

-   [x] Timeline
-   [x] Graph2d
-   [ ] Graph3d
-   [x] Network

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

To setup the development environment simply use

```
npm install
```

To get the component running with an example application use

```
npm run dev
```

## Security

If you discover any security related issues, please email infocontact.alex@gmail.com instead of using the issue tracker.

## Credits

- [Alex Couturon][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/alexcode
[link-contributors]: ../../contributors
