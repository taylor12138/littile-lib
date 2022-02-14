var e = {
    d: (r, o) => {
      for (var t in o)
        e.o(o, t) &&
          !e.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: o[t] });
    },
    o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
  },
  r = {};
e.d(r, { I: () => o });
const o = (e, r) => e + r;
var t = r.I;
export { t as add };
