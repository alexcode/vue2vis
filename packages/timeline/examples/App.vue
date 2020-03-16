<template>
  <div class="wrapper">
    <h2>Timeline (without groups)</h2>
    <Timeline
      ref="timeline-withoutGroups"
      :items="items"
      :options="options"
      @click="timelineWithoutGroupsEvent('click')"
      @contextmenu="timelineWithoutGroupsEvent('contextmenu')"
      @current-time-tick="timelineWithoutGroupsEvent('currentTimeTick')"
      @double-click="timelineWithoutGroupsEvent('doubleClick')"
      @drop="timelineWithoutGroupsEvent('drop')"
      @mouse-over="timelineWithoutGroupsEvent('mouseOver')"
      @mouse-down="timelineWithoutGroupsEvent('mouseDown')"
      @mouse-up="timelineWithoutGroupsEvent('mouseUp')"
      @mouse-move="timelineWithoutGroupsEvent('mouseMove')"
      @group-dragged="timelineWithoutGroupsEvent('groupDragged')"
      @changed="timelineWithoutGroupsEvent('changed')"
      @rangechange="timelineWithoutGroupsEvent('rangechange')"
      @rangechanged="timelineWithoutGroupsEvent('rangechanged')"
      @select="timelineWithoutGroupsEvent('select')"
      @itemover="timelineWithoutGroupsEvent('itemover')"
      @itemout="timelineWithoutGroupsEvent('itemout')"
      @timechange="timelineWithoutGroupsEvent('timechange')"
      @timechanged="timelineWithoutGroupsEvent('timechanged')"
      @items-mounted="timelineWithoutGroupsEvent('items-mounted')"
      @items-add="timelineWithoutGroupsEvent('items-add')"
      @items-update="timelineWithoutGroupsEvent('items-update')"
      @items-remove="timelineWithoutGroupsEvent('items-remove')"
    >
    </Timeline>
    <div class="events">
      <p>
        Timeline events: <br />
        {{ timelineWithoutGroupsEvents }}
      </p>
    </div>

    <hr />

    <h2>Timeline (with groups)</h2>
    <Timeline
      ref="timeline"
      :items="items"
      :groups="groups"
      :options="options"
      @click="timelineEvent('click')"
      @contextmenu="timelineEvent('contextmenu')"
      @current-time-tick="timelineEvent('currentTimeTick')"
      @double-click="timelineEvent('doubleClick')"
      @drop="timelineEvent('drop')"
      @mouse-over="timelineEvent('mouseOver')"
      @mouse-down="timelineEvent('mouseDown')"
      @mouse-up="timelineEvent('mouseUp')"
      @mouse-move="timelineEvent('mouseMove')"
      @group-dragged="timelineEvent('groupDragged')"
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
      @groups-remove="timelineEvent('groups-remove')"
    >
    </Timeline>
    <div class="events">
      <p>
        Timeline events: <br />
        {{ timelineEvents }}
      </p>
    </div>
  </div>
</template>

<script>
import { Timeline } from "@vue2vis/timeline";

export default {
  components: {
    Timeline
  },
  data: () => ({
    timelineEvents: "",
    timelineWithoutGroupsEvents: "",
    groups: [
      {
        id: 0,
        content: "Group 1"
      }
    ],
    items: [
      {
        id: 2,
        group: 0,
        content: "item 2",
        start: "2014-04-14"
      },
      {
        id: 3,
        group: 0,
        content: "item 3",
        start: "2014-04-18"
      },
      {
        id: 1,
        group: 0,
        content: "item 1",
        start: "2014-04-20"
      },
      {
        id: 4,
        group: 0,
        content: "item 4",
        start: "2014-04-16",
        end: "2014-04-19"
      },
      {
        id: 5,
        group: 0,
        content: "item 5",
        start: "2014-04-25"
      },
      {
        id: 6,
        group: 0,
        content: "item 6",
        start: "2014-04-27",
        type: "point"
      }
    ],
    options: {
      editable: true
    }
  }),
  methods: {
    timelineEvent(eventName) {
      if (this.timelineEvents.length > 500) this.timelineEvents = "";
      this.timelineEvents += `${eventName}, `;
    },
    timelineWithoutGroupsEvent(eventName) {
      if (this.timelineWithoutGroupsEvents.length > 500)
        this.timelineWithoutGroupsEvents = "";
      this.timelineWithoutGroupsEvents += `${eventName}, `;
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
