import { DataSet, DataView } from 'vis';

const arrayDiff = function(arr1, arr2) {
  return arr1.filter(x => arr2.indexOf(x) === -1);
};

const mountVisData = (vm, propName) => {
  // If data is DataSet or DataView we return early without attaching our own events
  if (vm[propName] instanceof DataSet || vm[propName] instanceof DataView) {
    vm.visData[propName] = vm[propName];
  } else {
    vm.visData[propName] = new DataSet(vm[propName]);
    // Rethrow all events
    vm.visData[propName].on('*', (event, properties, senderId) =>
      vm.$emit(`${propName}-${event}`, { event, properties, senderId })
    );
    // We attach deep watcher on the prop to propagate changes in the DataSet
    const callback = (value) => {
      if (Array.isArray(value)) {
        const newIds = new DataSet(value).getIds();
        const diff = arrayDiff(vm.visData[propName].getIds(), newIds);
        vm.visData[propName].update(value);
        vm.visData[propName].remove(diff);
      }
    };

    vm.$watch(propName, callback, {
      deep: true
    });
  }

  // Emitting DataSets back
  vm.$emit(`${propName}-mounted`, vm.visData[propName]);

  return vm.visData[propName];
};

export {
  arrayDiff,
  mountVisData,
};
