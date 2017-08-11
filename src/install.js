import each from 'lodash/each';
import Vue from 'vue';
import components from './main';

each(components, (component, name) => {
  Vue.component(name, component);
});
