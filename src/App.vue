<template>
  <div class="wrapper">
      <h2>Timeline</h2>
      <timeline ref="timeline" :items="timeline.items" :groups="timeline.groups" :options="timeline.options"></timeline>

      <hr>

      <h2>Graph2d</h2>
      <graph-2d ref="graph2d" :items="graph2d.items" :groups="graph2d.groups" :options="graph2d.options"></graph-2d>
  </div>
</template>

<script>

    import Timeline from './components/Timeline.vue';
    import Graph2d from './components/Graph2d.vue'
    import 'vis/dist/vis.css';

    export default {
        data() {
            return {
                timeline: {
                    groups: [{
                        id: 0,
                        content: 'Group 1'
                    }],
                    items: [
                        {id: 2, group: 0, content: 'item 2', start: '2014-04-14'},
                        {id: 3, group: 0, content: 'item 3', start: '2014-04-18'},
                        {id: 1, group: 0, content: 'item 1', start: '2014-04-20'},
                        {id: 4, group: 0, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
                        {id: 5, group: 0, content: 'item 5', start: '2014-04-25'},
                        {id: 6, group: 0, content: 'item 6', start: '2014-04-27', type: 'point'}
                    ],
                    options: {
                        editable: true,
                    }
                },
                graph2d: {
                    groups: [
                        {
                            id: 0,
                            content: 'SquareShaded',
                            options: {
                                drawPoints: {
                                    style: 'square' // square, circle
                                },
                                shaded: {
                                    orientation: 'bottom' // top, bottom
                                }
                            }
                        },
                        {
                            id: 1,
                            content: 'Bargraph',
                            options: {
                                style:'bar'
                            }
                        },
                        {
                            id: 2,
                            content: 'Blank',
                            options: {drawPoints: false}
                        },
                        {
                            id: 3,
                            content: 'CircleShaded',
                            options: {
                                drawPoints: {
                                    style: 'circle' // square, circle
                                },
                                shaded: {
                                    orientation: 'top' // top, bottom
                                }
                            }
                        }
                    ],
                    items: [
                        {x: '2014-06-13', y: 60},
                        {x: '2014-06-14', y: 40},
                        {x: '2014-06-15', y: 55},
                        {x: '2014-06-16', y: 40},
                        {x: '2014-06-17', y: 50},
                        {x: '2014-06-13', y: 30, group: 0},
                        {x: '2014-06-14', y: 10, group: 0},
                        {x: '2014-06-15', y: 15, group: 1},
                        {x: '2014-06-16', y: 30, group: 1},
                        {x: '2014-06-17', y: 10, group: 1},
                        {x: '2014-06-18', y: 15, group: 1},
                        {x: '2014-06-19', y: 52, group: 1},
                        {x: '2014-06-20', y: 10, group: 1},
                        {x: '2014-06-21', y: 20, group: 2},
                        {x: '2014-06-22', y: 60, group: 2},
                        {x: '2014-06-23', y: 10, group: 2},
                        {x: '2014-06-24', y: 25, group: 2},
                        {x: '2014-06-25', y: 30, group: 2},
                        {x: '2014-06-26', y: 20, group: 3},
                        {x: '2014-06-27', y: 60, group: 3},
                        {x: '2014-06-28', y: 10, group: 3},
                        {x: '2014-06-29', y: 25, group: 3},
                        {x: '2014-06-30', y: 30, group: 3}
                    ],
                    options: {
                        defaultGroup: 'ungrouped',
                        legend: true,
                        start: '2014-06-10',
                        end: '2014-07-04'
                    }
                }
            }
        },
        components: {
            Timeline,
            Graph2d
        }
    }
</script>

<style scoped>

    * {
        font-family: sans-serif;
    }

    .wrapper {
        padding: 20px 50px;
        text-align: center;
    }

</style>
