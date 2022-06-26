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

proxyObj.foo = "bar";
