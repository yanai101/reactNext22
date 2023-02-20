const myObj = {};

const proxyObj = new Proxy(myObj, {
  get(target, prop) {
    console.log("get", prop);
    return target[prop] || `prop not found 🥹`;
  },
  set(target, prop, value) {
    console.log("set", prop, value);
    target[prop] = value;
  },

  // pro2
});

// proxyObj.cambiumLocation = "Yerucham";
// console.log(proxyObj.cambiumLocation);

// Object.defineProperty(proxyObj, "newLocation", { value: "Dimona" });
// Object.defineProperty(proxyObj, "updateLocation", { value: "Dimona" });
// console.log(proxyObj.updateLocation);

// proxyObj.foo = 'bar';
// console.log(proxyObj.foo)
// console.log('foo' in proxyObj)
