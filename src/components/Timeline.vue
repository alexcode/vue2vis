<template>
    <div ref="visualization"></div>
</template>

<script>
import vis from 'vis';

const events = [
    'click',
    'contextmenu',
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
    'timechanged',
];

export default {
    name: 'timeline',
    props: {
        groups: {
            type: Array,
            default: () => ([]),
        },
        items: {
            type: Array,
            default: () => ([]),
        },
        selection: {
            type: [Array, String],
            default: () => ([]),
        },
        options: {
            type: Object,
        },
        withTimeTick: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        timeline: null,
    }),
    watch: {
        items: {
            deep: true,
            handler(n) {
                this.timeline.setItems(new vis.DataSet(n));
            },
        },
        groups: {
            deep: true,
            handler(v) {
                this.timeline.setGroups(new vis.DataSet(v));
            },
        },
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
            },
        },
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
            this.timeline.moveTo(event, callback);
        },
        off(event, callback) {
            this.timeline.moveTo(event, callback);
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
        },
    },
    mounted() {
        const container = this.$refs.visualization;
        const items = new vis.DataSet(this.items);
        const groups = new vis.DataSet(this.groups);
        this.timeline = new vis.Timeline(container, items, groups, this.options);
        events.forEach(eventName => this.timeline.on(eventName, props => this.$emit(eventName, props)));
        if (this.withTimeTick) {
            this.timeline.on('currentTimeTick', props => this.$emit('currentTimeTick', props));
        }
    },
    beforeDestroy() {
        events.forEach(eventName => this.timeline.off(
        eventName, props => this.$emit(eventName, props)));
        if (this.withTimeTick) {
            this.timeline.off('currentTimeTick', props => this.$emit('currentTimeTick', props));
        }
    }
};
</script>
