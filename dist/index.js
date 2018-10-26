"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var logger = function(e, t) {
    console.group("Logger"),
      console.log("State:", JSON.stringify(e, null, 2)),
      console.log("New State", JSON.stringify(t, null, 2)),
      console.groupEnd();
  },
  store = function() {
    for (
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length,
        n = new Array(1 < t ? t - 1 : 0),
        o = 1;
      o < t;
      o++
    )
      n[o - 1] = arguments[o];
    var r = new Proxy(
        {},
        {
          set: function(t, e, o) {
            var r = Object.assign({}, t);
            return (
              Reflect.set(t, e, o),
              n.forEach(function(e) {
                if ("function" != typeof e)
                  throw new Error("Listener must be a function!");
                e(r, t);
              }),
              { name: e, value: o }
            );
          }
        }
      ),
      s = function(t) {
        return (
          Object.keys(t).forEach(function(e) {
            Reflect.set(r, e, t[e]);
          }),
          Object.assign({}, r, t)
        );
      };
    return (
      s(e),
      {
        getStore: function() {
          return Object.assign({}, r);
        },
        setStore: s
      }
    );
  };
(exports.logger = logger), (exports.createStore = store);
//# sourceMappingURL=index.js.map
