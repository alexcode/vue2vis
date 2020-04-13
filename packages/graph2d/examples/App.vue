<template>
  <div class="wrapper">
    <h2>Graph2d</h2>
    <graph-2d
      ref="graph2d"
      :items="items"
      :groups="groups"
      :options="options"
      @click="graph2dEvent('click')"
      @contextmenu="graph2dEvent('contextmenu')"
      @current-time-tick="graph2dEvent('currentTimeTick')"
      @double-click="graph2dEvent('doubleClick')"
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
      @groups-remove="graph2dEvent('groups-remove')"
    >
    </graph-2d>
    <div class="events">
      <p>
        Graph2d events: <br />
        {{ graph2dEvents }}
      </p>
    </div>
  </div>
</template>

<script>
import { Graph2d } from "@vue2vis/graph2d";
import "vis-timeline/styles/vis-timeline-graph2d.css";

export default {
  components: {
    Graph2d
  },
  data: () => ({
    graph2dEvents: "",
    groups: [
      {
        id: 0,
        content: "SquareShaded",
        options: {
          drawPoints: {
            style: "square" // square, circle
          },
          shaded: {
            orientation: "bottom" // top, bottom
          }
        }
      },
      {
        id: 1,
        content: "Bargraph",
        options: {
          style: "bar"
        }
      },
      {
        id: 2,
        content: "Blank",
        options: { drawPoints: false }
      },
      {
        id: 3,
        content: "CircleShaded",
        options: {
          drawPoints: {
            style: "circle" // square, circle
          },
          shaded: {
            orientation: "top" // top, bottom
          }
        }
      }
    ],
    items: [
      { x: "2014-06-13", y: 60 },
      { x: "2014-06-14", y: 40 },
      { x: "2014-06-15", y: 55 },
      { x: "2014-06-16", y: 40 },
      { x: "2014-06-17", y: 50 },
      { x: "2014-06-13", y: 30, group: 0 },
      { x: "2014-06-14", y: 10, group: 0 },
      { x: "2014-06-15", y: 15, group: 1 },
      { x: "2014-06-16", y: 30, group: 1 },
      { x: "2014-06-17", y: 10, group: 1 },
      { x: "2014-06-18", y: 15, group: 1 },
      { x: "2014-06-19", y: 52, group: 1 },
      { x: "2014-06-20", y: 10, group: 1 },
      { x: "2014-06-21", y: 20, group: 2 },
      { x: "2014-06-22", y: 60, group: 2 },
      { x: "2014-06-23", y: 10, group: 2 },
      { x: "2014-06-24", y: 25, group: 2 },
      { x: "2014-06-25", y: 30, group: 2 },
      { x: "2014-06-26", y: 20, group: 3 },
      { x: "2014-06-27", y: 60, group: 3 },
      { x: "2014-06-28", y: 10, group: 3 },
      { x: "2014-06-29", y: 25, group: 3 },
      { x: "2014-06-30", y: 30, group: 3 }
    ],
    options: {
      defaultGroup: "ungrouped",
      legend: true,
      start: "2014-06-10",
      end: "2014-07-04"
    }
  }),
  methods: {
    graph2dEvent(eventName) {
      if (this.graph2dEvents.length > 500) this.graph2dEvents = "";
      this.graph2dEvents += `${eventName}, `;
    }
  }
};
</script>

<style lang="css">
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
</style>
