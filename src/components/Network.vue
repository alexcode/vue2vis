<template>
    <div ref="visualization"></div>
</template>

<script>
import { DataSet, DataView, Network } from 'vis';
import { mountVisData, translateEvent } from '../utils';

let network = null;

export default {
  name: 'network',
  props: {
    edges: {
      type: [Array, DataSet, DataView],
      default: () => []
    },
    nodes: {
      type: [Array, DataSet, DataView],
      default: () => []
    },
    events: {
      type: Array,
      default: () => [
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
      ],
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    visData: {
      nodes: null,
      edges: null
    }
  }),
  watch: {
    options: {
      deep: true,
      handler(o) {
        network.setOptions(o);
      }
    }
  },
  methods: {
    setData(n, e) {
      this.visData.nodes = Array.isArray(n) ? new DataSet(n) : n;
      this.visData.edges =  Array.isArray(e) ? new DataSet(e) : e;
      network.setData(this.visData);
    },
    destroy() {
      network.destroy();
    },
    getNode(id) {
      return this.visData.nodes.get(id);
    },
    getEdge(id) {
      return this.visData.edges.get(id);
    },
    setOptions(options) {
      network.setOptions(options);
    },
    on(event, callback) {
      network.moveTo(event, callback);
    },
    off(event, callback) {
      network.moveTo(event, callback);
    },
    once(event, callback) {
      network.moveTo(event, callback);
    },
    canvasToDom(p) {
      return network.canvasToDOM(p);
    },
    domToCanvas(p) {
      return network.DOMtoCanvas(p);
    },
    redraw() {
      network.redraw();
    },
    setSize(w, h) {
      network.setSize(w, h);
    },
    cluster(options) {
      network.cluster(options);
    },
    clusterByConnection(nodeId, options) {
      network.clusterByConnection(nodeId, options);
    },
    clusterByHubsize(hubsize, options) {
      network.clusterByHubsize(hubsize, options);
    },
    clusterOutliers(options) {
      network.clusterOutliers(options);
    },
    findNode(id) {
      return network.findNode(id);
    },
    getClusteredEdges(baseEdgeId) {
      return network.clustering.getClusteredEdges(baseEdgeId);
    },
    getBaseEdge(clusteredEdgeId) {
      return network.clustering.getBaseEdge(clusteredEdgeId);
    },
    getBaseEdges(clusteredEdgeId) {
      return network.clustering.getBaseEdges(clusteredEdgeId);
    },
    updateEdge(startEdgeId, options) {
      network.clustering.updateEdge(startEdgeId, options);
    },
    updateClusteredNode(clusteredNodeId, options) {
      network.clustering.updateClusteredNode(clusteredNodeId, options);
    },
    isCluster(nodeId) {
      return network.isCluster(nodeId);
    },
    getNodesInCluster(clusterNodeId) {
      return network.getNodesInCluster(clusterNodeId);
    },
    openCluster(nodeId, options) {
      network.openCluster(nodeId, options);
    },
    getSeed() {
      return network.getSeed();
    },
    enableEditMode() {
      network.enableEditMode();
    },
    disableEditMode() {
      network.disableEditMode();
    },
    addNodeMode() {
      network.addNodeMode();
    },
    editNode() {
      network.editNode();
    },
    addEdgeMode() {
      network.addEdgeMode();
    },
    editEdgeMode() {
      network.editEdgeMode();
    },
    deleteSelected() {
      network.deleteSelected();
    },
    getPositions(nodeIds) {
      return network.getPositions(nodeIds);
    },
    storePositions() {
      network.storePositions();
    },
    moveNode(nodeId, x, y) {
      network.moveNode(nodeId, x, y);
    },
    getBoundingBox(nodeId) {
      return network.getBoundingBox(nodeId);
    },
    getConnectedNodes(nodeId, direction) {
      return network.getConnectedNodes(nodeId, direction);
    },
    getConnectedEdges(nodeId) {
      return network.getConnectedEdges(nodeId);
    },
    startSimulation() {
      network.startSimulation();
    },
    stopSimulation() {
      network.stopSimulation();
    },
    stabilize(iterations) {
      network.stabilize(iterations);
    },
    getSelection() {
      return network.getSelection();
    },
    getSelectedNodes() {
      return network.getSelectedNodes();
    },
    getSelectedEdges() {
      return network.getSelectedEdges();
    },
    getNodeAt(p) {
      return network.getNodeAt(p);
    },
    getEdgeAt(p) {
      return network.getEdgeAt(p);
    },
    selectNodes(nodeIds, highlightEdges) {
      network.selectNodes(nodeIds, highlightEdges);
    },
    selectEdges(edgeIds) {
      network.selectEdges(edgeIds);
    },
    setSelection(selection, options) {
      network.setSelection(selection, options);
    },
    unselectAll() {
      network.unselectAll();
    },
    getScale() {
      return network.getScale();
    },
    getViewPosition() {
      return network.getViewPosition();
    },
    fit(options) {
      network.fit(options);
    },
    focus(nodeId, options) {
      network.focus(nodeId, options);
    },
    moveTo(options) {
      network.moveTo(options);
    },
    releaseNode() {
      network.releaseNode();
    },
    getOptionsFromConfigurator() {
      return network.getOptionsFromConfigurator();
    }
  },
  mounted() {
    const container = this.$refs.visualization;
    this.visData.nodes = mountVisData(this, 'nodes');
    this.visData.edges = mountVisData(this, 'edges');
    network = new Network(container, this.visData, this.options);

    this.events.forEach(eventName =>
      network.on(eventName, props => this.$emit(translateEvent(eventName), props))
    );
  },
  beforeDestroy() {
    network.destroy();
  },
};
</script>
