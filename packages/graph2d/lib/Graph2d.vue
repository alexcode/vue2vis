<template>
  <div ref="visualization"></div>
</template>

<script>
import { DataSet, DataView } from "vis-data/esnext";
import { Graph2d } from "vis-timeline/esnext";
import { mountVisData, translateEvent } from "@vue2vis/utils";
import "vis-timeline/styles/vis-timeline-graph2d.css";

export default {
  name: "graph2d",
  props: {
    groups: {
      type: [Array, DataSet, DataView]
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
        "changed",
        "rangechange",
        "rangechanged",
        "timechange",
        "timechanged"
      ]
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
        this.graph2d.setOptions(v);
      }
    }
  },
  methods: {
    destroy() {
      this.graph2d.destroy();
    },
    fit() {
      this.graph2d.fit();
    },
    getCurrentTime() {
      return this.graph2d.getCurrentTime();
    },
    getCustomTime() {
      return this.graph2d.getCustomTime();
    },
    getDataRange() {
      return this.graph2d.getDataRange();
    },
    getEventProperties(event) {
      return this.graph2d.getEventProperties(event);
    },
    getLegend(groupId, iconWidth, iconHeight) {
      return this.graph2d.getLegend(groupId, iconWidth, iconHeight);
    },
    getWindow() {
      return this.graph2d.getWindow();
    },
    isGroupVisible(groupId) {
      return this.graph2d.isGroupVisible(groupId);
    },
    moveTo(time, options) {
      this.graph2d.moveTo(time, options);
    },
    on(event, callback) {
      this.graph2d.on(event, callback);
    },
    off(event, callback) {
      this.graph2d.off(event, callback);
    },
    redraw() {
      this.graph2d.redraw();
    },
    setCurrentTime(time) {
      this.graph2d.setCurrentTime(time);
    },
    setCustomTime(time) {
      this.graph2d.setCustomTime(time);
    },
    setGroups(groups) {
      this.graph2d.setGroups(groups);
    },
    setItems(items) {
      this.graph2d.setItems(items);
    },
    setOptions(options) {
      this.graph2d.setOptions(options);
    },
    setWindow(start, end) {
      this.graph2d.setWindow(start, end);
    }
  },
  mounted() {
    this.visData.items = mountVisData(this, "items");
    this.visData.groups = mountVisData(this, "groups");
    this.graph2d = new Graph2d(
      this.$refs.visualization,
      this.visData.items,
      this.visData.groups,
      this.options
    );
    this.events.forEach(eventName =>
      this.graph2d.on(eventName, props =>
        this.$emit(translateEvent(eventName), props)
      )
    );
  },
  created() {
    // This should be a Vue data property, but Vue reactivity kinda bugs Vis.
    // See here for more: https://github.com/almende/vis/issues/2524
    this.graph2d = null;
  },
  beforeDestroy() {
    this.graph2d.destroy();
  }
};
</script>
