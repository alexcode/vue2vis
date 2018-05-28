<template>
  <div class="wrapper">
    <h2>Network</h2>
    <network
    class="network"
    ref="network"
    :nodes="network.nodes"
    :edges="network.edges"
    :options="network.options"
    @click="networkEvent('click')"
    @doubleClick="networkEvent('doubleClick')"
    @oncontext="networkEvent('oncontext')"
    @hold="networkEvent('hold')"
    @release="networkEvent('release')"
    @select="networkEvent('select')"
    @selectNode="networkEvent('selectNode')"
    @selectEdge="networkEvent('selectEdge')"
    @deselectNode="networkEvent('deselectNode')"
    @deselectEdge="networkEvent('deselectEdge')"
    @dragStart="networkEvent('dragStart')"
    @dragging="networkEvent('dragging')"
    @dragEnd="networkEvent('dragEnd')"
    @hoverNode="networkEvent('hoverNode')"
    @blurNode="networkEvent('blurNode')"
    @hoverEdge="networkEvent('hoverEdge')"
    @blurEdge="networkEvent('blurEdge')"
    @zoom="networkEvent('zoom')"
    @showPopup="networkEvent('showPopup')"
    @hidePopup="networkEvent('hidePopup')"
    @startStabilizing="networkEvent('startStabilizing')"
    @stabilizationProgress="networkEvent('stabilizationProgress')"
    @stabilizationIterationsDone="networkEvent('stabilizationIterationsDone')"
    @stabilized="networkEvent('stabilized')"
    @resize="networkEvent('resize')"
    @initRedraw="networkEvent('initRedraw')"
    @beforeDrawing="networkEvent('beforeDrawing')"
    @afterDrawing="networkEvent('afterDrawing')"
    @animationFinished="networkEvent('animationFinished')"
    @configChange="networkEvent('configChange')"
    @nodes-mounted="networkEvent('nodes-mounted')"
    @nodes-add="networkEvent('nodes-add')"
    @nodes-update="networkEvent('nodes-update')"
    @nodes-remove="networkEvent('nodes-remove')"
    @edges-mounted="networkEvent('edges-mounted')"
    @edges-add="networkEvent('edges-add')"
    @edges-update="networkEvent('edges-update')"
    @edges-remove="networkEvent('edges-remove')">
  </network>
  <button @click="addNode">Add node</button>
  <button @click="addEdge">Add edge</button>
  <button @click="resetNetwork">Reset Network</button>
  <button @click="removeNode">Remove Node</button>
  <button @click="removeEdge">Remove Edge</button>
  <div class="events"><p>Network events: <br /> {{networkEvents}}</p></div>

  <hr>

  <h2>Timeline</h2>
  <timeline
  ref="timeline"
  :items="timeline.items"
  :groups="timeline.groups"
  :options="timeline.options"
  @click="timelineEvent('click')"
  @contextmenu="timelineEvent('contextmenu')"
  @currentTimeTick="timelineEvent('currentTimeTick')"
  @doubleClick="timelineEvent('doubleClick')"
  @drop="timelineEvent('drop')"
  @mouseOver="timelineEvent('mouseOver')"
  @mouseDown="timelineEvent('mouseDown')"
  @mouseUp="timelineEvent('mouseUp')"
  @mouseMove="timelineEvent('mouseMove')"
  @groupDragged="timelineEvent('groupDragged')"
  @changed="timelineEvent('changed')"
  @rangechange="timelineEvent('rangechange')"
  @rangechanged="timelineEvent('rangechanged')"
  @select="timelineEvent('select')"
  @itemover="timelineEvent('itemover')"
  @itemout="timelineEvent('itemout')"
  @timechange="timelineEvent('timechange')"
  @timechanged="timelineEvent('timechanged')"
  @items-mounted="timelineEvent('items-mounted')"
  @items-add="timelineEvent('items-add')"
  @items-update="timelineEvent('items-update')"
  @items-remove="timelineEvent('items-remove')"
  @groups-mounted="timelineEvent('groups-mounted')"
  @groups-add="timelineEvent('groups-add')"
  @groups-update="timelineEvent('groups-update')"
  @groups-remove="timelineEvent('groups-remove')">
  </timeline>
  <div class="events"><p>Timeline events: <br /> {{timelineEvents}}</p></div>

  <hr>

  <h2>Graph2d</h2>
  <graph-2d
  ref="graph2d"
  :items="graph2d.items"
  :groups="graph2d.groups"
  :options="graph2d.options"
  @click="graph2dEvent('click')"
  @contextmenu="graph2dEvent('contextmenu')"
  @currentTimeTick="graph2dEvent('currentTimeTick')"
  @doubleClick="graph2dEvent('doubleClick')"
  @changed="graph2dEvent('changed')"
  @rangechange="graph2dEvent('rangechange')"
  @rangechanged="graph2dEvent('rangechanged')"
  @timechange="graph2dEvent('timechange')"
  @timechanged="graph2dEvent('timechanged')"
  @items-add="graph2dEvent('items-add')"
  @items-update="graph2dEvent('items-update')"
  @items-remove="graph2dEvent('items-remove')"
  @groups-mounted="graph2dEvent('groups-mounted')"
  @groups-add="graph2dEvent('groups-add')"
  @groups-update="graph2dEvent('groups-update')"
  @groups-remove="graph2dEvent('groups-remove')">
  </graph-2d>
  <div class="events"><p>Graph2d events: <br /> {{graph2dEvents}}</p></div>

</div>
</template>

<script>
import { Timeline, Graph2d, Network } from 'vue2vis';

export default {
  data: () => ({
    timelineEvents: '',
    timeline: {
      groups: [
        {
          id: 0,
          content: 'Group 1',
        },
      ],
      items: [
        { id: 2, group: 0, content: 'item 2', start: '2014-04-14' },
        { id: 3, group: 0, content: 'item 3', start: '2014-04-18' },
        { id: 1, group: 0, content: 'item 1', start: '2014-04-20' },
        {
          id: 4,
          group: 0,
          content: 'item 4',
          start: '2014-04-16',
          end: '2014-04-19',
        },
        { id: 5, group: 0, content: 'item 5', start: '2014-04-25' },
        {
          id: 6,
          group: 0,
          content: 'item 6',
          start: '2014-04-27',
          type: 'point',
        },
      ],
      options: {
        editable: true,
      },
    },
    graph2dEvents: '',
    graph2d: {
      groups: [
        {
          id: 0,
          content: 'SquareShaded',
          options: {
            drawPoints: {
              style: 'square', // square, circle
            },
            shaded: {
              orientation: 'bottom', // top, bottom
            },
          },
        },
        {
          id: 1,
          content: 'Bargraph',
          options: {
            style: 'bar',
          },
        },
        {
          id: 2,
          content: 'Blank',
          options: { drawPoints: false },
        },
        {
          id: 3,
          content: 'CircleShaded',
          options: {
            drawPoints: {
              style: 'circle', // square, circle
            },
            shaded: {
              orientation: 'top', // top, bottom
            },
          },
        },
      ],
      items: [
        { x: '2014-06-13', y: 60 },
        { x: '2014-06-14', y: 40 },
        { x: '2014-06-15', y: 55 },
        { x: '2014-06-16', y: 40 },
        { x: '2014-06-17', y: 50 },
        { x: '2014-06-13', y: 30, group: 0 },
        { x: '2014-06-14', y: 10, group: 0 },
        { x: '2014-06-15', y: 15, group: 1 },
        { x: '2014-06-16', y: 30, group: 1 },
        { x: '2014-06-17', y: 10, group: 1 },
        { x: '2014-06-18', y: 15, group: 1 },
        { x: '2014-06-19', y: 52, group: 1 },
        { x: '2014-06-20', y: 10, group: 1 },
        { x: '2014-06-21', y: 20, group: 2 },
        { x: '2014-06-22', y: 60, group: 2 },
        { x: '2014-06-23', y: 10, group: 2 },
        { x: '2014-06-24', y: 25, group: 2 },
        { x: '2014-06-25', y: 30, group: 2 },
        { x: '2014-06-26', y: 20, group: 3 },
        { x: '2014-06-27', y: 60, group: 3 },
        { x: '2014-06-28', y: 10, group: 3 },
        { x: '2014-06-29', y: 25, group: 3 },
        { x: '2014-06-30', y: 30, group: 3 },
      ],
      options: {
        defaultGroup: 'ungrouped',
        legend: true,
        start: '2014-06-10',
        end: '2014-07-04',
      },
    },
    networkEvents: '',
    network: {
      nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' },
      ],
      edges: [
        { id: 1, from: 1, to: 3 },
        { id: 2, from: 1, to: 2 },
        { id: 3, from: 2, to: 4 },
        { id: 4, from: 2, to: 5 },
        { id: 5, from: 3, to: 3 },
      ],
      options: {
        nodes: {
          shape: 'circle',
        },
      },
    },
  }),
  components: {
    Timeline,
    Graph2d,
    Network,
  },
  methods: {
    networkEvent(eventName) {
      if (this.networkEvents.length > 500) this.networkEvents = '';
      this.networkEvents += `${eventName}, `;
    },
    timelineEvent(eventName) {
      if (this.timelineEvents.length > 500) this.timelineEvents = '';
      this.timelineEvents += `${eventName}, `;
    },
    graph2dEvent(eventName) {
      if (this.graph2dEvents.length > 500) this.graph2dEvents = '';
      this.graph2dEvents += `${eventName}, `;
    },
    addNode() {
      const id = new Date().getTime();
      this.network.nodes.push({ id, label: 'New node' });
    },
    addEdge() {
      const n1 = Math.floor(Math.random() * this.network.nodes.length);
      const n2 = Math.floor(Math.random() * this.network.nodes.length);
      this.network.edges.push({
        id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
        from: this.network.nodes[n1].id,
        to: this.network.nodes[n2].id,
      });
    },
    resetNetwork() {
      this.network = {
        nodes: [
          { id: 1, label: 'Node 1' },
          { id: 2, label: 'Node 2' },
          { id: 3, label: 'Node 3' },
          { id: 4, label: 'Node 4' },
          { id: 5, label: 'Node 5' },
        ],
        edges: [
          { id: 1, from: 1, to: 3 },
          { id: 2, from: 1, to: 2 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 2, to: 5 },
          { id: 5, from: 3, to: 3 },
        ],
        options: {},
      };
    },
    removeNode() {
      this.network.nodes.splice(0, 1);
    },
    removeEdge() {
      this.network.edges.splice(0, 1);
    },
  },
};
</script>

<style>
@import 'vue2vis/dist/vue2vis.css';
* {
  font-family: sans-serif;
}

.wrapper {
  padding: 20px 50px;
  text-align: center;
}
.events {
  text-align: left;
  height: 70px;
}

.network {
  height: 400px;
  border: 1px solid #ccc;
  margin: 5px 0;
}
</style>
