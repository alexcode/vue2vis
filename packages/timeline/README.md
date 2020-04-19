# `@vue2vis/timeline`

> Vue2 wrapper for the <a href="https://github.com/visjs/vis-timeline">Visjs Timeline</a> library.

<p align="center">
  <a href="https://travis-ci.com/alexcode/vue2vis">
    <img src="https://travis-ci.com/alexcode/vue2vis.svg?branch=master" alt="Build Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?" alt="Software License" />
  </a>
  <a href="https://badge.fury.io/js/%40vue2vis%2Ftimeline">
    <img src="https://badge.fury.io/js/%40vue2vis%2Ftimeline.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/alexcode/vue2vis/issues">
    <img src="https://img.shields.io/github/issues/alexcode/vue2vis.svg?" alt="Issues" />
  </a>
</p>

### Installation

```
npm install --save @vue2vis/timeline vis-data moment
```

or

```
yarn add @vue2vis/timeline vis-data moment
```

## Usage

Declare the component

```javascript
Vue.component("timeline", vue2vis.Timeline);
```

Add the component in the template.

```html
<body>
  <div id="app">
    <timeline ref="timeline" :items="items" :groups="groups" :options="options">
    </timeline>
  </div>
</body>
```

Add groups, items and options in your observed data or computed.

```javascript
new Vue({
  el: "#app",
  data() {
    return {
      groups: [
        {
          id: 0,
          content: "Group 1"
        }
      ],
      items: [
        {
          id: 0,
          group: 0,
          start: new Date(),
          content: "Item 1"
        }
      ],
      options: {
        editable: true
      }
    };
  }
});
```

Additional info can be found on [Visjs Timeline documentation](https://visjs.github.io/vis-timeline/docs/timeline/)

Here is a basic working demo with item generation:
[JS Fiddle Basic Demo](https://jsfiddle.net/alexkodo/ejdut8fm/)

You can also create items or group labels as Vue Components:
[JS Fiddle Item Vue Component Demo](https://jsfiddle.net/alexkodo/n978c58d/)

## Events

### Component Events

By default all Vis events are emitted by your component. You can subscribe to a subset by passing an array in the prop `events` [Visjs event](https://visjs.github.io/vis-timeline/docs/timeline/#Events).

```html
<body>
  <div id="app">
    <timeline
      ref="timeline"
      :items="items"
      :groups="groups"
      :options="options"
      :events="['drop', 'changed']"
      @drop="myDropCallback"
      @changed="myChangedCallback"
    >
    </timeline>
  </div>
</body>
```

### Data Events

When you pass an Array of data object, it is converted internally as a DataSet.
An event with the DataSet object will be fired at mounted. It's name will be prepend with the prop name (Ex: `items-mounted`, `groups-mounted`). You could use it to interact with the DataSet.

All the [Visjs DataSet event](https://visjs.github.io/vis-data/data/dataset.html#Events) will be prepened the same fashion (`items-add`, `items-remove`, `items-update`). For example, pushing a new object to the `items` prop will fire a `items-add` event with the following payload:

```javascript
{
  event: 'add',
  properties: {
    items: [7],
  },
  senderId: null,
}
```

#### Advanced

You can also manage your own data bindings by passing your own DataSet or DataView instead of an Array.

```javascript
import { DataSet } from "vis-data";

new Vue({
  el: "#app",
  data() {
    return {
      groups: new DataSet([
        {
          id: 0,
          content: "Group 1"
        }
      ]),
      items: new DataSet([
        {
          id: 0,
          group: 0,
          start: new Date(),
          content: "Item 1"
        }
      ]),
      options: {
        editable: true
      }
    };
  }
});
```

## Visjs documentation

Full reference of Item and Group formats, options properties and events:

- [Timeline](http://visjs.org/docs/timeline)
- [DataSet](https://visjs.github.io/vis-data/data/dataset),
- [DataView](https://visjs.github.io/vis-data/data/dataview)

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

### Run demo locally

```bash
# Run demo at localhost:8080
yarn install
yarn lerna bootstrap
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
