export const Versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
}

export const SomeObj = {
  getData: () => {
    let value = 9;
    value++;
    return "Here it is your value : " + value
  }
}