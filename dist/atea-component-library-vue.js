import { openBlock as c, createElementBlock as l } from "vue";
const _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, s = {};
function a(e, t) {
  return c(), l("h1", null, "Hello!");
}
const f = /* @__PURE__ */ _(s, [["render", a]]), u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: f
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as Greeting
};
