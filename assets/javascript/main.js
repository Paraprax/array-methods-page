(function (e) {
  function n(n) {
    for (var c, r, a = n[0], d = n[1], i = n[2], f = 0, l = []; f < a.length; f++) (r = a[f]), Object.prototype.hasOwnProperty.call(u, r) && u[r] && l.push(u[r][0]), (u[r] = 0);
    for (c in d) Object.prototype.hasOwnProperty.call(d, c) && (e[c] = d[c]);
    h && h(n);
    while (l.length) l.shift()();
    return o.push.apply(o, i || []), t();
  }
  function t() {
    for (var e, n = 0; n < o.length; n++) {
      for (var t = o[n], c = !0, r = 1; r < t.length; r++) {
        var a = t[r];
        0 !== u[a] && (c = !1);
      }
      c && (o.splice(n--, 1), (e = d((d.s = t[0]))));
    }
    return e;
  }
  var c = {},
    r = { app: 0 },
    u = { app: 0 },
    o = [];
  function a(e) {
    return (
      d.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-0bc953a9": "f477a6ac",
        "chunk-2d0b190e": "e3cd63eb",
        "chunk-2d21a3d2": "5c116ddf",
        "chunk-44232be6": "b9fb3798",
        "chunk-50b1e570": "183c644b",
        "chunk-8945f462": "0d752e5e",
        "chunk-966dda48": "31ea284e",
        "chunk-2d0c8434": "48ca0c43",
        "chunk-29c0ceae": "9c8fc921",
        "chunk-19b99724": "c6850894",
        "chunk-32317f93": "de41df05",
        "chunk-3a3d2c4a": "e01bf3bd",
        "chunk-3efdc46b": "3be9be59",
        "chunk-70b47cd7": "6fcb3d88",
        "chunk-2d2086f9": "c09dd7cc",
        "chunk-2d20938d": "41c5147a",
        "chunk-2d225a31": "b8ca78a5",
        "chunk-74835ddc": "fb93c3cd",
        "chunk-25ee95b9": "7affa6b9",
      }[e] +
      ".js"
    );
  }
  function d(n) {
    if (c[n]) return c[n].exports;
    var t = (c[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, d), (t.l = !0), t.exports;
  }
  (d.e = function (e) {
    var n = [],
      t = {
        "chunk-0bc953a9": 1,
        "chunk-2d0b190e": 1,
        "chunk-44232be6": 1,
        "chunk-50b1e570": 1,
        "chunk-8945f462": 1,
        "chunk-966dda48": 1,
        "chunk-29c0ceae": 1,
        "chunk-19b99724": 1,
        "chunk-32317f93": 1,
        "chunk-3a3d2c4a": 1,
        "chunk-3efdc46b": 1,
        "chunk-70b47cd7": 1,
        "chunk-74835ddc": 1,
        "chunk-25ee95b9": 1,
      };
    r[e]
      ? n.push(r[e])
      : 0 !== r[e] &&
        t[e] &&
        n.push(
          (r[e] = new Promise(function (n, t) {
            for (
              var c =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-0bc953a9": "bc19ed85",
                    "chunk-2d0b190e": "606201b9",
                    "chunk-2d21a3d2": "31d6cfe0",
                    "chunk-44232be6": "51dc8d69",
                    "chunk-50b1e570": "826ca109",
                    "chunk-8945f462": "50f95f84",
                    "chunk-966dda48": "b128a828",
                    "chunk-2d0c8434": "31d6cfe0",
                    "chunk-29c0ceae": "40bc3849",
                    "chunk-19b99724": "a21915c5",
                    "chunk-32317f93": "4ed9c726",
                    "chunk-3a3d2c4a": "5071886e",
                    "chunk-3efdc46b": "f868073c",
                    "chunk-70b47cd7": "c6afb8db",
                    "chunk-2d2086f9": "31d6cfe0",
                    "chunk-2d20938d": "31d6cfe0",
                    "chunk-2d225a31": "31d6cfe0",
                    "chunk-74835ddc": "727dab80",
                    "chunk-25ee95b9": "39848257",
                  }[e] +
                  ".css",
                u = d.p + c,
                o = document.getElementsByTagName("link"),
                a = 0;
              a < o.length;
              a++
            ) {
              var i = o[a],
                f = i.getAttribute("data-href") || i.getAttribute("href");
              if ("stylesheet" === i.rel && (f === c || f === u)) return n();
            }
            var l = document.getElementsByTagName("style");
            for (a = 0; a < l.length; a++) {
              (i = l[a]), (f = i.getAttribute("data-href"));
              if (f === c || f === u) return n();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = n),
              (h.onerror = function (n) {
                var c = (n && n.target && n.target.src) || u,
                  o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                (o.code = "CSS_CHUNK_LOAD_FAILED"), (o.request = c), delete r[e], h.parentNode.removeChild(h), t(o);
              }),
              (h.href = u);
            var s = document.getElementsByTagName("head")[0];
            s.appendChild(h);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var c = u[e];
    if (0 !== c)
      if (c) n.push(c[2]);
      else {
        var o = new Promise(function (n, t) {
          c = u[e] = [n, t];
        });
        n.push((c[2] = o));
        var i,
          f = document.createElement("script");
        (f.charset = "utf-8"), (f.timeout = 120), d.nc && f.setAttribute("nonce", d.nc), (f.src = a(e));
        var l = new Error();
        i = function (n) {
          (f.onerror = f.onload = null), clearTimeout(h);
          var t = u[e];
          if (0 !== t) {
            if (t) {
              var c = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src;
              (l.message = "Loading chunk " + e + " failed.\n(" + c + ": " + r + ")"), (l.name = "ChunkLoadError"), (l.type = c), (l.request = r), t[1](l);
            }
            u[e] = void 0;
          }
        };
        var h = setTimeout(function () {
          i({ type: "timeout", target: f });
        }, 12e4);
        (f.onerror = f.onload = i), document.head.appendChild(f);
      }
    return Promise.all(n);
  }),
    (d.m = e),
    (d.c = c),
    (d.d = function (e, n, t) {
      d.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (d.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.t = function (e, n) {
      if ((1 & n && (e = d(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((d.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
        for (var c in e)
          d.d(
            t,
            c,
            function (n) {
              return e[n];
            }.bind(null, c)
          );
      return t;
    }),
    (d.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return d.d(n, "a", n), n;
    }),
    (d.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (d.p = "/"),
    (d.oe = function (e) {
      throw (console.error(e), e);
    });
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    f = i.push.bind(i);
  (i.push = n), (i = i.slice());
  for (var l = 0; l < i.length; l++) n(i[l]);
  var h = f;
  o.push([0, "chunk-vendors"]), t();
})({
  0: function (e, n, t) {
    e.exports = t("56d7");
  },
  "56d7": function (e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var c = t("a026"),
      r = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", { attrs: { id: "app" } }, [t("header", { ref: "header", class: e.scrollOffset > 0 ? "sticky" : "" }, [t("Navbar", { attrs: { sticky: e.scrollOffset > 0 } })], 1), t("router-view"), t("footer", [t("DevhausFooter")], 1)], 1);
      },
      u = [],
      o =
        (t("d3b7"),
        function () {
          return t.e("chunk-50b1e570").then(t.bind(null, "d178"));
        }),
      a = function () {
        return t.e("chunk-0bc953a9").then(t.bind(null, "4d85"));
      },
      d = {
        name: "App",
        components: { Navbar: o, DevhausFooter: a },
        data: function () {
          return { scrollOffset: 0 };
        },
        created: function () {
          var e = this;
          window.addEventListener("scroll", function () {
            window.scrollY > 0 ? (e.scrollOffset = window.scrollY) : (e.scrollOffset = 0);
          });
        },
        destroyed: function () {
          window.removeEventListener("scroll", null);
        },
      },
      i = d,
      f = (t("5c0b"), t("2877")),
      l = Object(f["a"])(i, r, u, !1, null, null, null),
      h = l.exports,
      s = t("8c4f");
    c["a"].use(s["a"]);
    var b = [
        {
          path: "/",
          name: "Home",
          component: function () {
            return t.e("chunk-2d21a3d2").then(t.bind(null, "bb51"));
          },
        },
        {
          path: "/privacy-policy",
          name: "privacy",
          component: function () {
            return t.e("chunk-2d0b190e").then(t.bind(null, "729e"));
          },
        },
        {
          path: "/detailed-privacy-policy",
          name: "detailed-privacy-policy",
          component: function () {
            return t.e("chunk-44232be6").then(t.bind(null, "d4c9"));
          },
        },
        {
          path: "/terms-of-use",
          name: "terms",
          component: function () {
            return t.e("chunk-966dda48").then(t.bind(null, "474a"));
          },
        },
        {
          path: "*",
          name: "not-found",
          component: function () {
            return t.e("chunk-8945f462").then(t.bind(null, "9703"));
          },
        },
      ],
      p = new s["a"]({
        mode: "history",
        base: "/",
        routes: b,
        scrollBehavior: function (e, n, t) {
          return { x: 0, y: 0 };
        },
      }),
      k = p,
      m = t("660e");
    c["a"].use(m["a"], { breakpoints: { small: 768, medium: 1440, large: 1920 } }),
      (c["a"].config.productionTip = !1),
      new c["a"]({
        router: k,
        render: function (e) {
          return e(h);
        },
      }).$mount("#app");
  },
  "5c0b": function (e, n, t) {
    "use strict";
    var c = t("9c0c"),
      r = t.n(c);
    r.a;
  },
  "9c0c": function (e, n, t) {},
});
//# sourceMappingURL=app.07eb38b1.js.map
