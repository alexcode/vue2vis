<template>
  <div ref="visualization"></div>
</template>

<script>
import { DataSet, DataView, Timeline } from "vis";
import { mountVisData, translateEvent } from "../utils";

export default {
  name: "timeline",
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
        "click",
        "contextmenu",
        "currentTimeTick",
        "doubleClick",
        "drop",
        "mouseOver",
        "mouseDown",
        "mouseUp",
        "mouseMove",
        "groupDragged",
        "changed",
        "rangechange",
        "rangechanged",
        "select",
        "itemover",
        "itemout",
        "timechange",
        "timechanged"
      ]
    },
    selection: {
      type: [Array, String],
      default: () => []
    },
    options: {
      type: Object
    }
  },
  data: () => ({
    visData: {
      items: null,
      groups: null
    }
  }),
  watch: {
    options: {
      deep: true,
      handler(v) {
        this.timeline.setOptions(v);
      }
    },
    selection: {
      deep: false,
      handler(v) {
        this.timeline.setSelection(v);
      }
    }
  },
  methods: {
    addCustomTime(time, id) {
      return this.timeline.addCustomTime(time, id);
    },
    destroy() {
      this.timeline.destroy();
    },
    fit() {
      this.timeline.fit();
    },
    focus(id, options) {
      this.timeline.focus(id, options);
    },
    getCurrentTime() {
      return this.timeline.getCurrentTime();
    },
    getCustomTime(id) {
      return this.timeline.getCustomTime(id);
    },
    getEventProperties(event) {
      return this.timeline.getEventProperties(event);
    },
    getItemRange() {
      return this.timeline.getItemRange();
    },
    getSelection() {
      return this.timeline.getSelection();
    },
    getVisibleItems() {
      return this.timeline.getVisibleItems();
    },
    getWindow() {
      return this.timeline.getWindow();
    },
    moveTo(time, options) {
      this.timeline.moveTo(time, options);
    },
    on(event, callback) {
      this.timeline.on(event, callback);
    },
    off(event, callback) {
      this.timeline.off(event, callback);
    },
    redraw() {
      this.timeline.redraw();
    },
    removeCustomTime(id) {
      this.timeline.removeCustomTime(id);
    },
    setCurrentTime(time) {
      this.timeline.setCurrentTime(time);
    },
    setCustomTime(time, id) {
      this.timeline.setCustomTime(time, id);
    },
    setCustomTimeTitle(title, id) {
      this.timeline.setCustomTimeTitle(title, id);
    },
    setData(object) {
      this.timeline.setData(object);
    },
    setGroups(groups) {
      this.timeline.setGroups(groups);
    },
    setItems(items) {
      this.timeline.setItems(items);
    },
    setOptions(options) {
      this.timeline.setOptions(options);
    },
    setSelection(ids, options) {
      this.timeline.setSelection(ids, options);
    },
    setWindow(start, end, options, callback) {
      this.timeline.setWindow(start, end, options, callback);
    },
    toggleRollingMode() {
      this.timeline.toggleRollingMode();
    },
    zoomIn(percentage, options, callback) {
      this.timeline.zoomIn(percentage, options, callback);
    },
    zoomOut(percentage, options, callback) {
      this.timeline.zoomOut(percentage, options, callback);
    }
  },
  mounted() {
    const container = this.$refs.visualization;

    this.visData.items = mountVisData(this, "items");
    this.visData.groups = mountVisData(this, "groups");
    this.timeline = new Timeline(
      container,
      this.visData.items,
      this.visData.groups,
      this.options
    );

    this.events.forEach(eventName =>
      this.timeline.on(eventName, props =>
        this.$emit(translateEvent(eventName), props)
      )
    );
  },
  created() {
    // This should be a Vue data property, but Vue reactivity kinda bugs Vis.
    // See here for more: https://github.com/almende/vis/issues/2524
    this.timeline = null;
  },
  beforeDestroy() {
    this.timeline.destroy();
  }
};
</script>
