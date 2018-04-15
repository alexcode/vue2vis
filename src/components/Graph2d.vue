<template>
    <div ref="visualization"></div>
</template>

<script>

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
    },
    vis: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    graph2d: null
  }),
  watch: {
    items: {
      deep: true,
      handler(n) {
        this.graph2d.setItems(new this.vis.DataSet(n));
      }
    },
    groups: {
      deep: true,
      handler(v) {
        this.graph2d.setGroups(new this.vis.DataSet(v));
      }
    },
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
      return this.graph2d.getCustomTime(id);
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
    isGroupVisible(groupId) {
      return this.graph2d.isGroupVisible(groupId);
    },
    moveTo(time, options) {
      this.graph2d.moveTo(time, options);
    },
    on(event, callback) {
      this.graph2d.moveTo(event, callback);
    },
    off(event, callback) {
      this.graph2d.moveTo(event, callback);
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
    const container = this.$refs.visualization;
    const items = new this.vis.DataSet(this.items);
    const groups = new this.vis.DataSet(this.groups);
    this.graph2d = new this.vis.Graph2d(container, items, groups, this.options);
    events.forEach(eventName =>
      this.graph2d.on(eventName, props => this.$emit(eventName, props))
    );
    if (this.withTimeTick) {
      this.timeline.on('currentTimeTick', props =>
        this.$emit('currentTimeTick', props)
      );
    }
  },
  beforeDestroy() {
    events.forEach(eventName =>
      this.graph2d.off(eventName, props => this.$emit(eventName, props))
    );
    if (this.withTimeTick) {
      this.timeline.off('currentTimeTick', props =>
        this.$emit('currentTimeTick', props)
      );
    }
  }
};
</script>
