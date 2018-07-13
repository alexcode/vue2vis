<template>
    <div ref="visualization"></div>
</template>

<script>
import { DataSet, DataView, Timeline } from 'vis';
import { mountVisData, translateEvent } from '../utils';

let timeline = null;

export default {
  name: 'timeline',
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
        'drop',
        'mouseOver',
        'mouseDown',
        'mouseUp',
        'mouseMove',
        'groupDragged',
        'changed',
        'rangechange',
        'rangechanged',
        'select',
        'itemover',
        'itemout',
        'timechange',
        'timechanged'
      ],
    },
    selection: {
      type: [Array, String],
      default: () => []
    },
    options: {
      type: Object
    },
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
        timeline.setOptions(v);
      }
    },
    selection: {
      deep: false,
      handler(v) {
        timeline.setSelection(v);
      }
    }
  },
  methods: {
    addCustomTime(time, id) {
      return timeline.addCustomTime(time, id);
    },
    destroy() {
      timeline.destroy();
    },
    fit() {
      timeline.fit();
    },
    focus(id, options) {
      timeline.focus(id, options);
    },
    getCurrentTime() {
      return timeline.getCurrentTime();
    },
    getCustomTime(id) {
      return timeline.getCustomTime(id);
    },
    getEventProperties(event) {
      return timeline.getEventProperties(event);
    },
    getItemRange() {
      return timeline.getItemRange();
    },
    getSelection() {
      return timeline.getSelection();
    },
    getVisibleItems() {
      return timeline.getVisibleItems();
    },
    getWindow() {
      return timeline.getWindow();
    },
    moveTo(time, options) {
      timeline.moveTo(time, options);
    },
    on(event, callback) {
      timeline.moveTo(event, callback);
    },
    off(event, callback) {
      timeline.moveTo(event, callback);
    },
    redraw() {
      timeline.redraw();
    },
    removeCustomTime(id) {
      timeline.removeCustomTime(id);
    },
    setCurrentTime(time) {
      timeline.setCurrentTime(time);
    },
    setCustomTime(time, id) {
      timeline.setCustomTime(time, id);
    },
    setCustomTimeTitle(title, id) {
      timeline.setCustomTimeTitle(title, id);
    },
    setData(object) {
      timeline.setData(object);
    },
    setGroups(groups) {
      timeline.setGroups(groups);
    },
    setItems(items) {
      timeline.setItems(items);
    },
    setOptions(options) {
      timeline.setOptions(options);
    },
    setSelection(ids, options) {
      timeline.setSelection(ids, options);
    },
    setWindow(start, end, options, callback) {
      timeline.setWindow(start, end, options, callback);
    },
    toggleRollingMode() {
      timeline.toggleRollingMode();
    },
    zoomIn(percentage, options, callback) {
      timeline.zoomIn(percentage, options, callback);
    },
    zoomOut(percentage, options, callback) {
      timeline.zoomOut(percentage, options, callback);
    }
  },
  mounted() {
    const container = this.$refs.visualization;
    this.visData.items = mountVisData(this, 'items');
    this.visData.groups = mountVisData(this, 'groups');
    timeline = new Timeline(container, this.visData.items, this.visData.groups, this.options);

    this.events.forEach(  eventName =>
      timeline.on(eventName, props => this.$emit(translateEvent(eventName), props))
    );
  },
  beforeDestroy() {
    timeline.destroy();
  }
};
</script>
