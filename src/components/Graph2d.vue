<template>
    <div ref="visualization"></div>
</template>

<script>
import { DataSet, Graph2d } from 'vis';

let graph2d = null;
const events = [
  'click',
  'contextmenu',
  'doubleClick',
  'changed',
  'rangechange',
  'rangechanged',
  'timechange',
  'timechanged'
];

export default {
  name: 'graph2d',
  props: {
    groups: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object
    }
  },
  watch: {
    items: {
      deep: true,
      handler(n) {
        graph2d.setItems(new DataSet(n));
      }
    },
    groups: {
      deep: true,
      handler(v) {
        graph2d.setGroups(new DataSet(v));
      }
    },
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
    const items = new DataSet(this.items);
    const groups = new DataSet(this.groups);
    graph2d = new Graph2d(container, items, groups, this.options);
    events.forEach(eventName =>
      graph2d.on(eventName, props => this.$emit(eventName, props))
    );
    if (this.withTimeTick) {
      this.timeline.on('currentTimeTick', props =>
        this.$emit('currentTimeTick', props)
      );
    }
  },
  beforeDestroy() {
    graph2d.destroy();
  }
};
</script>
