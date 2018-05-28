<template>
    <div ref="visualization"></div>
</template>

<script>
import { DataSet, DataView, Graph2d } from 'vis';
import { mountVisData } from '../utils';

let graph2d = null;

export default {
  name: 'graph2d',
  props: {
    groups: {
      type: [Array, DataSet, DataView],
      default: () => []
    },
    items: {
      type: [Array, DataSet, DataView],
      default: () => []
    },
    events: {
      type: Array,
      default: () => [
        'click',
        'contextmenu',
        'currentTimeTick',
        'doubleClick',
        'changed',
        'rangechange',
        'rangechanged',
        'timechange',
        'timechanged'
      ],
    },
    options: {
      type: Object
    }
  },
  data: () => ({
    visData: {
      items: null,
      groups: null,
    },
  }),
  watch: {
    options: {
      deep: true,
      handler(v) {
        graph2d.setOptions(v);
      }
    }
  },
  methods: {
    destroy() {
      graph2d.destroy();
    },
    fit() {
      graph2d.fit();
    },
    getCurrentTime() {
      return graph2d.getCurrentTime();
    },
    getCustomTime() {
      return graph2d.getCustomTime(id);
    },
    getDataRange() {
      return graph2d.getDataRange();
    },
    getEventProperties(event) {
      return graph2d.getEventProperties(event);
    },
    getLegend(groupId, iconWidth, iconHeight) {
      return graph2d.getLegend(groupId, iconWidth, iconHeight);
    },
    getWindow() {
      return graph2d.getWindow();
    },
    isGroupVisible(groupId) {
      return graph2d.isGroupVisible(groupId);
    },
    moveTo(time, options) {
      graph2d.moveTo(time, options);
    },
    on(event, callback) {
      graph2d.on(event, callback);
    },
    off(event, callback) {
      graph2d.off(event, callback);
    },
    redraw() {
      graph2d.redraw();
    },
    setCurrentTime(time) {
      graph2d.setCurrentTime(time);
    },
    setCustomTime(time) {
      graph2d.setCustomTime(time);
    },
    setGroups(groups) {
      graph2d.setGroups(groups);
    },
    setItems(items) {
      graph2d.setItems(items);
    },
    setOptions(options) {
      graph2d.setOptions(options);
    },
    setWindow(start, end) {
      graph2d.setWindow(start, end);
    }
  },
  mounted() {
    const container = this.$refs.visualization;
    this.visData.items = mountVisData(this, 'items');
    this.visData.groups = mountVisData(this, 'groups');
    graph2d = new Graph2d(container, this.visData.items, this.visData.groups, this.options);

    this.events.forEach(eventName =>
      graph2d.on(eventName, props => this.$emit(eventName, props))
    );
  },
  beforeDestroy() {
    graph2d.destroy();
  }
};
</script>
