<template>
    <div ref="visualization"></div>
</template>

<script>
import vis from 'vis';

const events = [
  'click',
  'doubleClick',
  'oncontext',
  'hold',
  'release',
  'select',
  'selectNode',
  'selectEdge',
  'deselectNode',
  'deselectEdge',
  'dragStart',
  'dragging',
  'dragEnd',
  'hoverNode',
  'blurNode',
  'hoverEdge',
  'blurEdge',
  'zoom',
  'showPopup',
  'hidePopup',
  'startStabilizing',
  'stabilizationProgress',
  'stabilizationIterationsDone',
  'stabilized',
  'resize',
  'initRedraw',
  'beforeDrawing',
  'afterDrawing',
  'animationFinished',
  'configChange'
];

export default {
  name: 'network',
  props: {
    edges: {
      type: Array,
      default: () => []
    },
    nodes: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    // This is set on the created() hook below, checkout for more info
    // network: null,
    visData: {
      nodes: null,
      edges: null
    }
  }),
  watch: {
    nodes: {
      deep: true,
      handler(n) {
        this.visData.nodes.update(n);
        var newIds = new vis.DataSet(n).getIds();
        var oldIds = this.visData.nodes.getIds();
        var diff = getArrayDiff(oldIds, newIds);
        this.visData.nodes.remove(diff);
      }
    },
    edges: {
      deep: true,
      handler(e) {
        this.visData.edges.update(e);
        var newIds = new vis.DataSet(e).getIds();
        var oldIds = this.visData.edges.getIds();
        var diff = getArrayDiff(oldIds, newIds);
        this.visData.edges.remove(diff);
      }
    },
    options: {
      deep: true,
      handler(o) {
        this.network.setOptions(o);
      }
    }
  },
  methods: {
    setData(n, e) {
      this.visData.nodes = new vis.DataSet(n);
      this.visData.edges = new vis.DataSet(e);
      this.network.setData(this.visData);
    },
    destroy() {
      this.network.destroy();
    },
    getNode(id) {
      return this.$visNodes.get(id);
    },
    getEdge(id) {
      return this.$visEdges.get(id);
    },
    setOptions(options) {
      this.network.setOptions(options);
    },
    on(event, callback) {
      this.network.moveTo(event, callback);
    },
    off(event, callback) {
      this.network.moveTo(event, callback);
    },
    once(event, callback) {
      this.network.moveTo(event, callback);
    },
    canvasToDom(p) {
      return this.network.canvasToDOM(p);
    },
    domToCanvas(p) {
      return this.network.DOMtoCanvas(p);
    },
    redraw() {
      this.network.redraw();
    },
    setSize(w, h) {
      this.network.setSize(w, h);
    },
    cluster(options) {
      this.network.cluster(options);
    },
    clusterByConnection(nodeId, options) {
      this.network.clusterByConnection(nodeId, options);
    },
    clusterByHubsize(hubsize, options) {
      this.network.clusterByHubsize(hubsize, options);
    },
    clusterOutliers(options) {
      this.network.clusterOutliers(options);
    },
    findNode(id) {
      return this.network.findNode(id);
    },
    getClusteredEdges(baseEdgeId) {
      return this.network.getClusteredEdges(baseEdgeId);
    },
    getBaseEdge(clusteredEdgeId) {
      return this.network.getBaseEdge(clusteredEdgeId);
    },
    getBaseEdges(clusteredEdgeId) {
      return this.network.getBaseEdges(clusteredEdgeId);
    },
    updateEdge(startEdgeId, options) {
      this.network.updateEdge(startEdgeId, options);
    },
    updateClusteredNode(clusteredNodeId, options) {
      this.network.updateClusteredNode(clusteredNodeId, options);
    },
    isCluster(nodeId) {
      return this.network.isCluster(nodeId);
    },
    getNodesInCluster(clusterNodeId) {
      return this.network.getNodesInCluster(clusterNodeId);
    },
    openCluster(nodeId, options) {
      this.network.openCluster(nodeId, options);
    },
    getSeed() {
      return this.network.getSeed();
    },
    enableEditMode() {
      this.network.enableEditMode();
    },
    disableEditMode() {
      this.network.disableEditMode();
    },
    addNodeMode() {
      this.network.addNodeMode();
    },
    editNode() {
      this.network.editNode();
    },
    addEdgeMode() {
      this.network.addEdgeMode();
    },
    editEdgeMode() {
      this.network.editEdgeMode();
    },
    deleteSelected() {
      this.network.deleteSelected();
    },
    getPositions(nodeIds) {
      return this.network.getPositions(nodeIds);
    },
    storePositions() {
      this.network.storePositions();
    },
    moveNode(nodeId, x, y) {
      this.network.moveNode(nodeId, x, y);
    },
    getBoundingBox(nodeId) {
      return this.network.getBoundingBox(nodeId);
    },
    getConnectedNodes(nodeId, direction) {
      return this.network.getConnectedNodes(nodeId, direction);
    },
    getConnectedEdges(nodeId) {
      return this.network.getConnectedEdges(nodeId);
    },
    startSimulation() {
      this.network.startSimulation();
    },
    stopSimulation() {
      this.network.stopSimulation();
    },
    stabilize(iterations) {
      this.network.stabilize(iterations);
    },
    getSelection() {
      return this.network.getSelection();
    },
    getSelectedNodes() {
      return this.network.getSelectedNodes();
    },
    getSelectedEdges() {
      return this.network.getSelectedEdges();
    },
    getNodeAt(x, y) {
      return this.network.getNodeAt(x, y);
    },
    getEdgeAt(x, y) {
      return this.network.getEdgeAt(x, y);
    },
    selectNodes(nodeIds, highlightEdges) {
      this.network.selectNodes(nodeIds, highlightEdges);
    },
    selectEdges(edgeIds) {
      this.network.selectEdges(edgeIds);
    },
    setSelection(selection, options) {
      this.network.setSelection(selection, options);
    },
    unselectAll() {
      this.network.unselectAll();
    },
    getScale() {
      return this.network.getScale();
    },
    getViewPosition() {
      return this.network.getViewPosition();
    },
    fit(options) {
      this.network.fit(options);
    },
    focus(nodeId, options) {
      this.network.focus(nodeId, options);
    },
    moveTo(options) {
      this.network.moveTo(options);
    },
    releaseNode() {
      this.network.releaseNode();
    },
    getOptionsFromConfigurator() {
      return this.network.getOptionsFromConfigurator();
    }
  },
  mounted() {
    const container = this.$refs.visualization;
    this.visData.nodes = new vis.DataSet(this.nodes);
    this.visData.edges = new vis.DataSet(this.edges);
    this.network = new vis.Network(container, this.visData, this.options);

    events.forEach(eventName =>
      this.network.on(eventName, props => this.$emit(eventName, props))
    );
  },
  beforeDestroy() {
    events.forEach(eventName =>
      this.network.off(eventName, props => this.$emit(eventName, props))
    );
  },
  created() {
    // This should be a Vue data property, but Vue reactivity kinda bugs Vis.
    // See here for more: https://github.com/almende/vis/issues/2524
    this.network = null;
  }
};

// Helpers
function getArrayDiff(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}
</script>
