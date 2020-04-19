# `@vue2vis/network`

> Vue2 wrapper for the <a href="https://github.com/visjs/vis-network">Visjs Network</a> library.

<p align="center">
  <a href="https://travis-ci.com/alexcode/vue2vis">
    <img src="https://travis-ci.com/alexcode/vue2vis.svg?branch=master" alt="Build Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?" alt="Software License" />
  </a>
  <a href="https://badge.fury.io/js/%40vue2vis%2Fnetwork">
    <img src="https://badge.fury.io/js/%40vue2vis%2Fnetwork.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/alexcode/vue2vis/issues">
    <img src="https://img.shields.io/github/issues/alexcode/vue2vis.svg?" alt="Issues" />
  </a>
</p>

### Installation

```
npm install --save @vue2vis/network vis-data moment
```

or

```
yarn add @vue2vis/network vis-data moment
```

## Usage

Declare the component

```javascript
Vue.component("network", vue2vis.Network);
```

Add the component in the template.

```html
<body>
  <div id="app">
    <network ref="network" :nodes="nodes" :edges="edges" :options="options">
    </network>
  </div>
</body>
```

Add groups, items and options in your observed data or computed.

```javascript
new Vue({
  el: "#app",
  data() {
    return {
      nodes: [
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" }
      ],
      items: [
        { id: 1, from: 1, to: 3 },
        { id: 2, from: 1, to: 2 }
      ],
      options: {
        nodes: {
          shape: "circle"
        }
      }
    };
  }
});
```

Additional info can be found on [Visjs Network documentation](https://visjs.github.io/vis-network/docs/network/)

Here is a basic working demo with item generation:
[JS Fiddle Basic Demo](https://jsfiddle.net/alexkodo/ejdut8fm/)

You can also create items or group labels as Vue Components:
[JS Fiddle Item Vue Component Demo](https://jsfiddle.net/alexkodo/n978c58d/)

## Events

### Component Events

By default all Vis events are emitted by your component. You can subscribe to a subset by passing an array in the prop `events` [Visjs event](https://visjs.github.io/vis-network/docs/timeline/#Events).

```html
<body>
  <div id="app">
    <network
      ref="network"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      :events="['click', 'changed']"
      @click="myClickCallback"
      @stabilized="myStabilizedCallback"
    >
    </network>
  </div>
</body>
```

### Data Events

When you pass an Array of data object, it is converted internally as a DataSet.
An event with the DataSet object will be fired at mounted. It's name will be prepend with the prop name (Ex: `nodes-mounted`, `edges-mounted`). You could use it to interact with the DataSet.

All the [Visjs DataSet event](https://visjs.github.io/vis-data/data/dataset.html#Events) will be prepened the same fashion (`nodes-add`, `nodes-remove`, `nodes-update`). For example, pushing a new object to the `nodes` prop will fire a `nodes-add` event with the following payload:

```javascript
{
  event: 'add',
  properties: {
    nodes: [7],
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
      edges: new DataSet([
        { id: 0, from: 1, to: 2 },
      ]),
      nodes: new DataSet([
        {
          id: 0,
          label: "Node 1"
        }
        {
          id: 1,
          label: "Node 2"
        }
      ]),
      options: {
        nodes: {
          shape: "circle"
        }
      }
    };
  }
});
```

## Visjs documentation

Full reference of Item and Group formats, options properties and events:

- [Network](http://visjs.org/docs/network)
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
yarn serve:network
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
[link-contributors]: ../../contributors
