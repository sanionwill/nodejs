var Slardar = (function () {
    "use strict";
    var r = function (t, e) {
        return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                    t.__proto__ = e;
                }) ||
            function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
    };
    function t(t, e) {
        function n() {
            this.constructor = t;
        }
        r(t, e),
            (t.prototype =
                null === e
                    ? Object.create(e)
                    : ((n.prototype = e.prototype), new n()));
    }
    var d = function () {
        return (d =
            Object.assign ||
            function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                return t;
            }).apply(this, arguments);
    };
    function m(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
            return {
                next: function () {
                    return (
                        t && r >= t.length && (t = void 0),
                        { value: t && t[r++], done: !t }
                    );
                },
            };
        throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
    }
    function h(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
            o,
            i = n.call(t),
            a = [];
        try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
                a.push(r.value);
        } catch (t) {
            o = { error: t };
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally {
                if (o) throw o.error;
            }
        }
        return a;
    }
    function _() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(h(arguments[e]));
        return t;
    }
    var e =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {};
    function n(t, e, n) {
        return (
            t(
                (n = {
                    path: e,
                    exports: {},
                    require: function (t, e) {
                        return (function () {
                            throw new Error(
                                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                            );
                        })(null == e && n.path);
                    },
                }),
                n.exports
            ),
            n.exports
        );
    }
    function o(t) {
        return t && t.Math == Math && t;
    }
    function a(t) {
        try {
            return !!t();
        } catch (t) {
            return !0;
        }
    }
    function i(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
        };
    }
    function s(t) {
        return E.call(t).slice(8, -1);
    }
    function l(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
    }
    function c(t) {
        return x(l(t));
    }
    function u(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
    }
    function p(t, e) {
        if (!u(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !u((r = n.call(t))))
            return r;
        if ("function" == typeof (n = t.valueOf) && !u((r = n.call(t))))
            return r;
        if (!e && "function" == typeof (n = t.toString) && !u((r = n.call(t))))
            return r;
        throw TypeError("Can't convert object to primitive value");
    }
    function f(t, e) {
        return C.call(t, e);
    }
    function v(t) {
        if (!u(t)) throw TypeError(String(t) + " is not an object");
        return t;
    }
    function g(e, n) {
        try {
            A(y, e, n);
        } catch (t) {
            y[e] = n;
        }
        return n;
    }
    var y =
            o("object" == typeof globalThis && globalThis) ||
            o("object" == typeof window && window) ||
            o("object" == typeof self && self) ||
            o("object" == typeof e && e) ||
            Function("return this")(),
        b = !a(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        }),
        w = {}.propertyIsEnumerable,
        S = Object.getOwnPropertyDescriptor,
        M = {
            f:
                S && !w.call({ 1: 2 }, 1)
                    ? function (t) {
                          var e = S(this, t);
                          return !!e && e.enumerable;
                      }
                    : w,
        },
        E = {}.toString,
        P = "".split,
        x = a(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" == s(t) ? P.call(t, "") : Object(t);
              }
            : Object,
        C = {}.hasOwnProperty,
        R = y.document,
        j = u(R) && u(R.createElement),
        H =
            !b &&
            !a(function () {
                return (
                    7 !=
                    Object.defineProperty(
                        j ? R.createElement("div") : {},
                        "a",
                        {
                            get: function () {
                                return 7;
                            },
                        }
                    ).a
                );
            }),
        k = Object.getOwnPropertyDescriptor,
        L = {
            f: b
                ? k
                : function (t, e) {
                      if (((t = c(t)), (e = p(e, !0)), H))
                          try {
                              return k(t, e);
                          } catch (t) {}
                      if (f(t, e)) return i(!M.f.call(t, e), t[e]);
                  },
        },
        T = Object.defineProperty,
        O = {
            f: b
                ? T
                : function (t, e, n) {
                      if ((v(t), (e = p(e, !0)), v(n), H))
                          try {
                              return T(t, e, n);
                          } catch (t) {}
                      if ("get" in n || "set" in n)
                          throw TypeError("Accessors not supported");
                      return "value" in n && (t[e] = n.value), t;
                  },
        },
        A = b
            ? function (t, e, n) {
                  return O.f(t, e, i(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              },
        q = "__core-js_shared__",
        I = y[q] || g(q, {}),
        U = Function.toString;
    "function" != typeof I.inspectSource &&
        (I.inspectSource = function (t) {
            return U.call(t);
        });
    function D(t) {
        return (
            "Symbol(" +
            String(void 0 === t ? "" : t) +
            ")_" +
            (++Z + tt).toString(36)
        );
    }
    var F,
        B,
        N,
        J,
        z,
        X,
        Q,
        W,
        V,
        G = I.inspectSource,
        $ = y.WeakMap,
        Y = "function" == typeof $ && /native code/.test(G($)),
        K = n(function (t) {
            (t.exports = function (t, e) {
                return I[t] || (I[t] = void 0 !== e ? e : {});
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
            });
        }),
        Z = 0,
        tt = Math.random(),
        et = K("keys"),
        nt = {},
        rt = y.WeakMap;
    Q = Y
        ? ((F = new rt()),
          (B = F.get),
          (N = F.has),
          (J = F.set),
          (z = function (t, e) {
              return J.call(F, t, e), e;
          }),
          (X = function (t) {
              return B.call(F, t) || {};
          }),
          function (t) {
              return N.call(F, t);
          })
        : ((W = et[(V = "state")] || (et[V] = D(V))),
          (nt[W] = !0),
          (z = function (t, e) {
              return A(t, W, e), e;
          }),
          (X = function (t) {
              return f(t, W) ? t[W] : {};
          }),
          function (t) {
              return f(t, W);
          });
    function ot(t) {
        return "function" == typeof t ? t : void 0;
    }
    function it(t) {
        return isNaN((t = +t)) ? 0 : (0 < t ? Mt : St)(t);
    }
    function at(t) {
        return 0 < t ? Et(it(t), 9007199254740991) : 0;
    }
    function st(u) {
        return function (t, e, n) {
            var r,
                o,
                i,
                a = c(t),
                s = at(a.length),
                l = ((r = s), (o = it(n)) < 0 ? Pt(o + r, 0) : xt(o, r));
            if (u && e != e) {
                for (; l < s; ) if ((i = a[l++]) != i) return !0;
            } else
                for (; l < s; l++)
                    if ((u || l in a) && a[l] === e) return u || l || 0;
            return !u && -1;
        };
    }
    function lt(t, e) {
        var n,
            r = c(t),
            o = 0,
            i = [];
        for (n in r) !f(nt, n) && f(r, n) && i.push(n);
        for (; e.length > o; ) f(r, (n = e[o++])) && (~Ct(i, n) || i.push(n));
        return i;
    }
    function ut(t, e) {
        var n = At[Ot(t)];
        return n == It || (n != qt && ("function" == typeof e ? a(e) : !!e));
    }
    function ct(t, e) {
        var n,
            r,
            o,
            i,
            a = t.target,
            s = t.global,
            l = t.stat,
            u = s ? y : l ? y[a] || g(a, {}) : (y[a] || {}).prototype;
        if (u)
            for (n in e) {
                if (
                    ((o = e[n]),
                    (r = t.noTargetGet ? (i = Dt(u, n)) && i.value : u[n]),
                    !Ut(s ? n : a + (l ? "." : "#") + n, t.forced) &&
                        void 0 !== r)
                ) {
                    if (typeof o == typeof r) continue;
                    !(function (t, e) {
                        for (
                            var n = Lt(e), r = O.f, o = L.f, i = 0;
                            i < n.length;
                            i++
                        ) {
                            var a = n[i];
                            f(t, a) || r(t, a, o(e, a));
                        }
                    })(o, r);
                }
                (t.sham || (r && r.sham)) && A(o, "sham", !0), wt(u, n, o, t);
            }
    }
    function pt(r, o, t) {
        if (
            (!(function (t) {
                if ("function" != typeof t)
                    throw TypeError(String(t) + " is not a function");
            })(r),
            void 0 === o)
        )
            return r;
        switch (t) {
            case 0:
                return function () {
                    return r.call(o);
                };
            case 1:
                return function (t) {
                    return r.call(o, t);
                };
            case 2:
                return function (t, e) {
                    return r.call(o, t, e);
                };
            case 3:
                return function (t, e, n) {
                    return r.call(o, t, e, n);
                };
        }
        return function () {
            return r.apply(o, arguments);
        };
    }
    function ht(t) {
        return Object(l(t));
    }
    function dt(t, e) {
        var n;
        return (
            Ft(t) &&
                (("function" == typeof (n = t.constructor) &&
                    (n === Array || Ft(n.prototype))) ||
                    (u(n) && null === (n = n[Qt]))) &&
                (n = void 0),
            new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        );
    }
    function ft(d) {
        var f = 1 == d,
            v = 2 == d,
            m = 3 == d,
            g = 4 == d,
            y = 6 == d,
            b = 5 == d || y;
        return function (t, e, n, r) {
            for (
                var o,
                    i,
                    a = ht(t),
                    s = x(a),
                    l = pt(e, n, 3),
                    u = at(s.length),
                    c = 0,
                    p = r || dt,
                    h = f ? p(t, u) : v ? p(t, 0) : void 0;
                c < u;
                c++
            )
                if ((b || c in s) && ((i = l((o = s[c]), c, a)), d))
                    if (f) h[c] = i;
                    else if (i)
                        switch (d) {
                            case 3:
                                return !0;
                            case 5:
                                return o;
                            case 6:
                                return c;
                            case 2:
                                Wt.call(h, o);
                        }
                    else if (g) return !1;
            return y ? -1 : m || g ? g : h;
        };
    }
    function vt(t) {
        throw t;
    }
    var mt,
        gt,
        yt,
        bt = {
            set: z,
            get: X,
            has: Q,
            enforce: function (t) {
                return Q(t) ? X(t) : z(t, {});
            },
            getterFor: function (n) {
                return function (t) {
                    var e;
                    if (!u(t) || (e = X(t)).type !== n)
                        throw TypeError(
                            "Incompatible receiver, " + n + " required"
                        );
                    return e;
                };
            },
        },
        wt = n(function (t) {
            var e = bt.get,
                s = bt.enforce,
                l = String(String).split("String");
            (t.exports = function (t, e, n, r) {
                var o = !!r && !!r.unsafe,
                    i = !!r && !!r.enumerable,
                    a = !!r && !!r.noTargetGet;
                "function" == typeof n &&
                    ("string" != typeof e || f(n, "name") || A(n, "name", e),
                    (s(n).source = l.join("string" == typeof e ? e : ""))),
                    t !== y
                        ? (o ? !a && t[e] && (i = !0) : delete t[e],
                          i ? (t[e] = n) : A(t, e, n))
                        : i
                        ? (t[e] = n)
                        : g(e, n);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && e(this).source) || G(this);
            });
        }),
        _t = y,
        St = Math.ceil,
        Mt = Math.floor,
        Et = Math.min,
        Pt = Math.max,
        xt = Math.min,
        Ct = { includes: st(!0), indexOf: st(!1) }.indexOf,
        Rt = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ],
        jt = Rt.concat("length", "prototype"),
        Ht = {
            f:
                Object.getOwnPropertyNames ||
                function (t) {
                    return lt(t, jt);
                },
        },
        kt = { f: Object.getOwnPropertySymbols },
        Lt =
            (function (t, e) {
                return arguments.length < 2
                    ? ot(_t[t]) || ot(y[t])
                    : (_t[t] && _t[t][e]) || (y[t] && y[t][e]);
            })("Reflect", "ownKeys") ||
            function (t) {
                var e = Ht.f(v(t)),
                    n = kt.f;
                return n ? e.concat(n(t)) : e;
            },
        Tt = /#|\.prototype\./,
        Ot = (ut.normalize = function (t) {
            return String(t).replace(Tt, ".").toLowerCase();
        }),
        At = (ut.data = {}),
        qt = (ut.NATIVE = "N"),
        It = (ut.POLYFILL = "P"),
        Ut = ut,
        Dt = L.f,
        Ft =
            Array.isArray ||
            function (t) {
                return "Array" == s(t);
            },
        Bt =
            !!Object.getOwnPropertySymbols &&
            !a(function () {
                return !String(Symbol());
            }),
        Nt = Bt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Jt = K("wks"),
        zt = y.Symbol,
        Xt = Nt ? zt : (zt && zt.withoutSetter) || D,
        Qt =
            (f(Jt, (mt = "species")) ||
                (Bt && f(zt, mt)
                    ? (Jt[mt] = zt[mt])
                    : (Jt[mt] = Xt("Symbol." + mt))),
            Jt[mt]),
        Wt = [].push,
        Vt = {
            forEach: ft(0),
            map: ft(1),
            filter: ft(2),
            some: ft(3),
            every: ft(4),
            find: ft(5),
            findIndex: ft(6),
        },
        Gt = Object.defineProperty,
        $t = {},
        Yt = Vt.forEach,
        Kt =
            !!(yt = []["forEach"]) &&
            a(function () {
                yt.call(
                    null,
                    gt ||
                        function () {
                            throw 1;
                        },
                    1
                );
            }),
        Zt = (function (t, e) {
            if (f($t, t)) return $t[t];
            var n = [][t],
                r = !!f((e = e || {}), "ACCESSORS") && e.ACCESSORS,
                o = f(e, 0) ? e[0] : vt,
                i = f(e, 1) ? e[1] : void 0;
            return ($t[t] =
                !!n &&
                !a(function () {
                    if (r && !b) return 1;
                    var t = { length: -1 };
                    r ? Gt(t, 1, { enumerable: !0, get: vt }) : (t[1] = 1),
                        n.call(t, o, i);
                }));
        })("forEach"),
        te =
            Kt && Zt
                ? [].forEach
                : function (t, e) {
                      return Yt(this, t, 1 < arguments.length ? e : void 0);
                  };
    ct(
        { target: "Array", proto: !0, forced: [].forEach != te },
        { forEach: te }
    );
    var ee,
        ne,
        re,
        oe,
        ie,
        ae,
        se,
        le = Function.call;
    pt(le, y.Array.prototype.forEach, void 0);
    function ue(t, e) {
        if (!t) throw new TypeError("Invalid argument");
        var n,
            r = document.implementation.createHTMLDocument("");
        e && (((n = r.createElement("base")).href = e), r.head.appendChild(n));
        var o = r.createElement("a");
        if (
            ((o.href = t),
            r.body.appendChild(o),
            ":" === o.protocol || !/:/.test(o.href))
        )
            throw new TypeError("Invalid URL");
        Object.defineProperty(this, "_anchorElement", { value: o });
    }
    (ee =
        void 0 !== e
            ? e
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : e) &&
        ("href" in
            (null !==
                (re =
                    null === (ne = ee.URL) || void 0 === ne
                        ? void 0
                        : ne.prototype) && void 0 !== re
                ? re
                : {}) ||
            ((ue.prototype = {
                toString: function () {
                    return this.href;
                },
                get href() {
                    return this._anchorElement.href;
                },
                set href(t) {
                    this._anchorElement.href = t;
                },
                get protocol() {
                    return this._anchorElement.protocol;
                },
                set protocol(t) {
                    this._anchorElement.protocol = t;
                },
                get host() {
                    return this._anchorElement.host;
                },
                set host(t) {
                    this._anchorElement.host = t;
                },
                get hostname() {
                    return this._anchorElement.hostname;
                },
                set hostname(t) {
                    this._anchorElement.hostname = t;
                },
                get port() {
                    return this._anchorElement.port;
                },
                set port(t) {
                    this._anchorElement.port = t;
                },
                get pathname() {
                    return this._anchorElement.pathname;
                },
                set pathname(t) {
                    this._anchorElement.pathname = t;
                },
                get search() {
                    return this._anchorElement.search;
                },
                set search(t) {
                    this._anchorElement.search = t;
                },
                get hash() {
                    return this._anchorElement.hash;
                },
                set hash(t) {
                    this._anchorElement.hash = t;
                },
            }),
            (oe = ee.URL || ee.webkitURL || ee.mozURL),
            (ue.createObjectURL = function (t) {
                return oe.createObjectURL(t);
            }),
            (ue.revokeObjectURL = function (t) {
                return oe.revokeObjectURL(t);
            }),
            Object.defineProperty(ue.prototype, "toString", { enumerable: !1 }),
            (ee.URL = ue))),
        Element.prototype.addEventListener ||
            ((ie = []),
            (ae = function (t, e) {
                function n(t) {
                    (t.target = t.srcElement),
                        (t.currentTarget = i),
                        void 0 !== e.handleEvent
                            ? e.handleEvent(t)
                            : e.call(i, t);
                }
                var r,
                    o,
                    i = this;
                "DOMContentLoaded" === t
                    ? ((r = function (t) {
                          "complete" === document.readyState && n(t);
                      }),
                      document.attachEvent("onreadystatechange", r),
                      ie.push({
                          object: this,
                          type: t,
                          listener: e,
                          wrapper: r,
                      }),
                      "complete" === document.readyState &&
                          (((o = new Event()).srcElement = window), r(o)))
                    : (this.attachEvent("on" + t, n),
                      ie.push({
                          object: this,
                          type: t,
                          listener: e,
                          wrapper: n,
                      }));
            }),
            (se = function (t, e) {
                for (var n = 0; n < ie.length; ) {
                    var r = ie[n];
                    if (r.object === this && r.type === t && r.listener === e) {
                        "DOMContentLoaded" === t
                            ? this.detachEvent("onreadystatechange", r.wrapper)
                            : this.detachEvent("on" + t, r.wrapper),
                            ie.splice(n, 1);
                        break;
                    }
                    ++n;
                }
            }),
            (Element.prototype.addEventListener = ae),
            (Element.prototype.removeEventListener = se),
            HTMLDocument &&
                !HTMLDocument.prototype.addEventListener &&
                ((HTMLDocument.prototype.addEventListener = ae),
                (HTMLDocument.prototype.removeEventListener = se)),
            Window &&
                !Window.prototype.addEventListener &&
                ((Window.prototype.addEventListener = ae),
                (Window.prototype.removeEventListener = se)));
    var ce =
        Object.keys ||
        function (t) {
            return lt(t, Rt);
        };
    ct(
        {
            target: "Object",
            stat: !0,
            forced: a(function () {
                ce(1);
            }),
        },
        {
            keys: function (t) {
                return ce(ht(t));
            },
        }
    );
    _t.Object.keys;
    function pe(t) {
        return "object" == typeof t && null !== t && !fe(t);
    }
    function he(t) {
        return "function" == typeof t;
    }
    function de(t) {
        return "[object String]" === Object.prototype.toString.call(t);
    }
    function fe(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }
    function ve(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    function me(t, e) {
        if (pe(t)) for (var n in t) ve(t, n) && e.call(null, n, t[n]);
    }
    function ge() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = {}, r = 0; r < t.length; )
            (n = (function t(e, n) {
                var r = d({}, e);
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) &&
                        void 0 !== n[o] &&
                        (pe(e[o]) && pe(n[o])
                            ? (r[o] = t(e[o], n[o]))
                            : !pe(e[o]) && pe(n[o])
                            ? (r[o] = t({}, n[o]))
                            : (r[o] = n[o]));
                return r;
            })(n, t[r])),
                r++;
        return n;
    }
    function ye(t, e) {
        if (!fe(t)) return !1;
        if (0 === t.length) return !1;
        for (var n = 0; n < t.length; ) {
            if (t[n] === e) return !0;
            n++;
        }
        return !1;
    }
    function be() {
        if ("fetch" in window)
            try {
                return new Headers(), new Request(""), new Response(), 1;
            } catch (t) {
                return;
            }
    }
    function we() {
        return !!pe(window);
    }
    function _e() {
        return !!(
            we() &&
            pe(window.performance) &&
            pe(window.performance.timing)
        );
    }
    function Se(t) {
        var n,
            e = (function (t) {
                if (!pe(t)) return {};
                var n = {};
                return (
                    me(t, function (t, e) {
                        pe(e) || fe(e)
                            ? (n[t] = JSON.stringify(e))
                            : (n[t] = e);
                    }),
                    n
                );
            })(t),
            r =
                ((n = {}),
                me(e, function (t, e) {
                    n[encodeURIComponent(t)] = encodeURIComponent(e);
                }),
                n),
            o = [];
        return (
            me(r, function (t, e) {
                o.push(t + "=" + e);
            }),
            o.join("&")
        );
    }
    function Me(t) {
        var e = document.createElement("a");
        e.href = t;
        var n = e.pathname || "/";
        return (
            "/" !== n[0] && (n = "/" + n),
            {
                href: e.href,
                protocol: e.protocol.slice(0, -1),
                hostname: e.hostname,
                host: e.host,
                search: e.search,
                pathname: n,
                hash: e.hash,
            }
        );
    }
    var Ee = function (t) {
        if (!de(t)) return !1;
        var e = t;
        return (
            he(e.toLowerCase) && (e = e.toLowerCase()), ye(["x-tt-token"], e)
        );
    };
    function Pe() {}
    function xe(t) {
        var e = "[object String]" === Object.prototype.toString.call(t);
        return t
            ? e
                ? t.length
                : ArrayBuffer && t instanceof ArrayBuffer
                ? t.byteLength
                : window.Blob && t instanceof Blob
                ? t.size
                : t.length
                ? t.length
                : 0
            : 0;
    }
    function Ce(t) {
        if (!t) return "";
        if (!he(t.forEach)) return "";
        var r = [];
        return (
            t.forEach(function (t) {
                var e, n;
                fe(t) &&
                    t[0] &&
                    !Ee(t[0]) &&
                    ((e = t[0]), (n = t[1] || ""), r.push(e + ": " + n));
            }),
            r.join("\r\n")
        );
    }
    function Re(t) {
        var e = {},
            n = Me(t);
        return (
            (e.ax_protocol = n.protocol),
            (e.ax_domain = n.hostname),
            (e.ax_path = n.pathname),
            (e.ax_url = (n.href || t).split("?")[0]),
            e
        );
    }
    function je(t, e) {
        var n = Me(t),
            r = Me(e);
        return n.protocol === r.protocol && n.host === r.host;
    }
    function He(t) {
        return fe(t) && t.length
            ? (function (t) {
                  for (var e = [], n = t.length, r = 0; r < n; r++) {
                      var o = t[r];
                      de(o)
                          ? e.push(
                                o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
                            )
                          : o && o.source && e.push(o.source);
                  }
                  return new RegExp(e.join("|"), "i");
              })(t)
            : null;
    }
    var ke = function (t) {
            var e, n;
            return (
                void 0 === t && (t = window),
                we() &&
                null !== (e = t.screen) &&
                void 0 !== e &&
                e.width &&
                null !== (n = t.screen) &&
                void 0 !== n &&
                n.height
                    ? t.screen.width + "x" + t.screen.height
                    : "0x0"
            );
        },
        Le = function () {
            var t = "unknown",
                e =
                    navigator.connection ||
                    navigator.mozConnection ||
                    navigator.webkitConnection;
            return e && de(e.effectiveType) ? e.effectiveType : t;
        };
    function Te(t) {
        return !!t && Math.random() < Number(t);
    }
    var Oe =
        ((Ae.post = function (t, e, n) {
            var r,
                o,
                i =
                    null !== (r = null == n ? void 0 : n.success) &&
                    void 0 !== r
                        ? r
                        : Pe,
                a =
                    null !== (o = null == n ? void 0 : n.fail) && void 0 !== o
                        ? o
                        : Pe,
                s = new XMLHttpRequest();
            s.open("POST", t, !0),
                s.setRequestHeader("Content-Type", "application/json"),
                s.send(JSON.stringify(e)),
                (s.onload = function () {
                    try {
                        var t;
                        this.responseText
                            ? ((t = JSON.parse(this.responseText)), i(t))
                            : i({});
                    } catch (t) {
                        a();
                    }
                }),
                (s.onerror = function () {
                    a();
                }),
                (s.onabort = function () {
                    a();
                });
        }),
        (Ae.get = function (t, e) {
            var n,
                r,
                o,
                i,
                a =
                    null !== (n = null == e ? void 0 : e.success) &&
                    void 0 !== n
                        ? n
                        : Pe,
                s =
                    null !== (r = null == e ? void 0 : e.fail) && void 0 !== r
                        ? r
                        : Pe,
                l =
                    null !== (o = null == e ? void 0 : e.getResponse) &&
                    void 0 !== o
                        ? o
                        : Pe,
                u =
                    null !== (i = null == e ? void 0 : e.getResponseText) &&
                    void 0 !== i
                        ? i
                        : Pe,
                c = new XMLHttpRequest();
            c.open("GET", t),
                c.send(),
                (c.onload = function () {
                    l(null == this ? void 0 : this.response),
                        u(this.responseText);
                    try {
                        var t;
                        this.responseText
                            ? ((t = JSON.parse(this.responseText)), a(t))
                            : a({});
                    } catch (t) {
                        s();
                    }
                }),
                (c.onerror = function () {
                    s();
                }),
                (c.onabort = function () {
                    s();
                });
        }),
        (Ae.prototype.getCommonParams = function () {
            return { timestamp: Date.now() };
        }),
        Ae);
    function Ae(t) {
        var r = this;
        (this.postEvent = function (t) {
            var e = d(d({}, t), r.getCommonParams());
            Ae.post(r.url, e);
        }),
            (this.getEvent = function (t) {
                var e = Se(d(d({}, t), r.getCommonParams())),
                    n = r.url + "?" + e;
                Ae.get(n);
            }),
            (this.getURL = function () {
                return r.url;
            }),
            (this.options = t),
            (this.url = this.options.reportURL);
    }
    function qe(t, e, n) {
        if ((void 0 === n && (n = "0"), 1 < n.length))
            throw new TypeError(
                "expect the length of pad to be 1, but got " + t.length
            );
        return t.length >= e
            ? t
            : "" +
                  Array.from({ length: e - t.length })
                      .fill(n)
                      .join("") +
                  t;
    }
    function Ie(t) {
        return t
            ? Math.floor(Math.random() * Math.pow(10, 12))
                  .toString(16)
                  .substr(0, t)
            : "";
    }
    var Ue = "x-tt-trace-id",
        De = "x-tt-trace-host",
        Fe = "x-tt-logid";
    function Be(t, e, n) {
        void 0 === n && (n = "01");
        var r =
            "" +
            qe((Date.now() % 4294967295).toString(16), 8) +
            (function (t) {
                var e;
                if ("number" == typeof t) e = t;
                else {
                    var n = t.replace(/-/g, "");
                    if (!/^[0-9]+$/.test(n)) {
                        if (18 < n.length) return "18" + Ie(18);
                        var r = 22 - n.length - 4;
                        return "" + qe("" + n.length, 2) + n + Ie(r);
                    }
                    e = parseInt(n, 10);
                }
                var o = e.toString(16),
                    i = 22 - o.length - 4;
                return "" + qe("" + o.length, 2) + o + Ie(i);
            })(t) +
            ("string" == typeof e ? Ie(4) : qe(e.toString(16), 4));
        return "00-" + r + "-" + r.substr(0, 16) + "-" + n;
    }
    function Ne() {
        var t = (function () {
            for (var t = new Array(16), e = 0, n = 0; n < 16; n++)
                0 == (3 & n) && (e = 4294967296 * Math.random()),
                    (t[n] = (e >>> ((3 & n) << 3)) & 255);
            return t;
        })();
        return (
            (t[6] = (15 & t[6]) | 64),
            (t[8] = (63 & t[8]) | 128),
            (function (t) {
                for (var e = [], n = 0; n < 256; ++n)
                    e[n] = (n + 256).toString(16).substr(1);
                var r = 0;
                return [
                    e[t[r++]],
                    e[t[r++]],
                    e[t[r++]],
                    e[t[r++]],
                    "-",
                    e[t[r++]],
                    e[t[r++]],
                    "-",
                    e[t[r++]],
                    e[t[r++]],
                    "-",
                    e[t[r++]],
                    e[t[r++]],
                    "-",
                    e[t[r++]],
                    e[t[r++]],
                    e[t[r++]],
                    e[t[r++]],
                    e[t[r++]],
                    e[t[15]],
                ].join("");
            })(t)
        );
    }
    function Je() {}
    var ze = 1,
        Xe = 0.1,
        Qe = 0.1,
        We = ["/log/sentry/"],
        Ve = 8e3,
        Ge = 4e3,
        $e = "MONITOR_WEB_ID",
        Ye = Ne(),
        Ke = Ne();
    function Ze(t, e) {
        var n, r;
        void 0 === e && (e = Je),
            t &&
                de(t) &&
                we() &&
                pe(document) &&
                he(document.createElement) &&
                ((n = document.createElement("script")),
                (r = document.head),
                pe(n) &&
                    pe(r) &&
                    ((n.src = t),
                    (n.async = !0),
                    (n.crossOrigin = "anonymous"),
                    (n.onload = function () {
                        e();
                    }),
                    he(r.appendChild) && r.appendChild(n)));
    }
    var tn = "AjaxMonitor",
        en =
            ((nn.prototype.setup = function (t) {
                void 0 === t && (t = Pe),
                    he(XMLHttpRequest) && ((this.callback = t), this.start());
            }),
            (nn.prototype.updateConfig = function (t) {
                this.props = ge({}, this.props, t);
            }),
            (nn.prototype.start = function () {
                this.hookXMLHttpRequestOpen(),
                    this.hookXMLHttpRequestSend(),
                    this.hookXMLHttpRequestSetRequestHeader();
            }),
            (nn.prototype.hookXMLHttpRequestSetRequestHeader = function () {
                var n = XMLHttpRequest.prototype.setRequestHeader || Pe;
                XMLHttpRequest.prototype.setRequestHeader = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    return (
                        (this._requestHeaders = this._requestHeaders || []),
                        this._requestHeaders.push(t),
                        n.apply(this, t)
                    );
                };
            }),
            (nn.prototype.hookXMLHttpRequestOpen = function () {
                var o = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    var n = t[0],
                        r = t[1];
                    return (
                        (this._url = r || ""),
                        (this._method =
                            (null == n ? void 0 : n.toLowerCase()) || ""),
                        o.apply(this, t)
                    );
                };
            }),
            (nn.prototype.hookXMLHttpRequestSend = function () {
                var a = this,
                    s = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function () {
                    for (
                        var t, e, n, r, o = [], i = 0;
                        i < arguments.length;
                        i++
                    )
                        o[i] = arguments[i];
                    return (
                        a.checkAddTrace(this._url) &&
                            ((n = (e =
                                null !==
                                    (t =
                                        null == a
                                            ? void 0
                                            : a.props.commonParams) &&
                                void 0 !== t
                                    ? t
                                    : {}).bid),
                            (r = e.web_id),
                            n &&
                                r &&
                                ((a.traceId = Be(r, n)),
                                this.setRequestHeader(Ue, a.traceId))),
                        a.hookXMLHttpRequestOnreadystatechange.call(this, a),
                        (this._start = Date.now()),
                        (this._data = null == o ? void 0 : o[0]),
                        s.apply(this, o)
                    );
                };
            }),
            (nn.prototype.checkAddTrace = function (t) {
                var e,
                    n,
                    r =
                        null !== (e = this.props.commonParams) && void 0 !== e
                            ? e
                            : {},
                    o = r.bid,
                    i = r.web_id,
                    a = (null !== (n = this.props.ajaxMonitorOptions) &&
                    void 0 !== n
                        ? n
                        : {}
                    ).sampleHitTrace,
                    s = je(location.href, t);
                return o && i && a && s;
            }),
            (nn.prototype.collectErrorRequest = function () {
                var t, e;
                return (
                    null !==
                        (e =
                            null === (t = this.props.ajaxMonitorOptions) ||
                            void 0 === t
                                ? void 0
                                : t.errorRequestCollect) &&
                    void 0 !== e &&
                    e
                );
            }),
            (nn.prototype.hookXMLHttpRequestOnreadystatechange = function (c) {
                var p = this.onreadystatechange,
                    h = this;
                this.onreadystatechange = function () {
                    for (
                        var t, e, n, r, o, i, a, s, l = [], u = 0;
                        u < arguments.length;
                        u++
                    )
                        l[u] = arguments[u];
                    if (
                        (4 === this.readyState &&
                            ((a = {
                                ev_type: "ajax",
                                ax_status: (this.status || 0).toString(),
                                ax_type: h._method,
                                ax_request_header: Ce(h._requestHeaders || []),
                                ax_domain: "",
                                ax_duration: 0,
                                ax_path: "",
                                ax_protocol: "",
                                ax_response_header: "",
                                ax_size: 0,
                                ax_url: "",
                            }),
                            "function" == typeof this.getAllResponseHeaders &&
                                (a.ax_response_header = (function (e) {
                                    if (de(e)) {
                                        var t = e.split("\r\n"),
                                            r = [];
                                        return (
                                            t.forEach(function (t, e) {
                                                var n;
                                                t &&
                                                    he(t.split) &&
                                                    ((n = t.split(": ")),
                                                    r.push([n[0], n[1]]));
                                            }),
                                            Ce(r)
                                        );
                                    }
                                    return pe(e)
                                        ? Ce(
                                              Object.keys(e).map(function (t) {
                                                  return [t, e[t]];
                                              })
                                          )
                                        : e;
                                })(this.getAllResponseHeaders())),
                            !c.checkAddTrace(h._url) ||
                                ((s =
                                    null !== (t = c.traceId) && void 0 !== t
                                        ? t
                                        : this.getResponseHeader(Ue)) &&
                                    ((a.trace_id = s),
                                    (a.trace_host =
                                        null !==
                                            (e = this.getResponseHeader(De)) &&
                                        void 0 !== e
                                            ? e
                                            : void 0),
                                    (a.log_id =
                                        null !==
                                            (n = this.getResponseHeader(Fe)) &&
                                        void 0 !== n
                                            ? n
                                            : void 0))),
                            (a.ax_duration = Date.now() - h._start),
                            200 === this.status &&
                                (a.ax_size = (function (t) {
                                    var e = 0;
                                    if (
                                        "" === t.responseType ||
                                        "text" === t.responseType
                                    )
                                        e = xe(t.responseText);
                                    else if (t.response) e = xe(t.response);
                                    else
                                        try {
                                            e = xe(t.responseText);
                                        } catch (t) {
                                            e = 0;
                                        }
                                    return e;
                                })(this)),
                            (a = d(d({}, a), Re(h._url))),
                            c.collectErrorRequest() &&
                                "2" !== a.ax_status[0] &&
                                "3" !== a.ax_status[0] &&
                                (a.ax_request = {
                                    body: h._data ? "" + h._data : void 0,
                                    search:
                                        null === (r = Me(h._url)) ||
                                        void 0 === r
                                            ? void 0
                                            : r.search,
                                    content_type:
                                        null ===
                                            (i =
                                                null ===
                                                    (o = h._requestHeaders) ||
                                                void 0 === o
                                                    ? void 0
                                                    : o.find(function (t) {
                                                          return (
                                                              "content-type" ===
                                                              t[0].toLowerCase()
                                                          );
                                                      })) || void 0 === i
                                            ? void 0
                                            : i[1],
                                }),
                            he(c.callback) &&
                                c.callback({
                                    name: c.name,
                                    type: "get",
                                    event: a,
                                })),
                        p)
                    )
                        return p.apply(this, l);
                };
            }),
            (nn.monitorName = tn),
            nn);
    function nn(t) {
        (this.name = tn),
            (this.callback = Pe),
            (this.traceId = null),
            (this.props = t);
    }
    function rn(t) {
        return t instanceof Request;
    }
    var on = "FetchMonitor",
        an =
            ((sn.prototype.updateConfig = function (t) {
                this.props = ge({}, this.props, t);
            }),
            (sn.prototype.setup = function (t) {
                void 0 === t && (t = Pe),
                    be() && ((this.callback = t), this.start());
            }),
            (sn.prototype.start = function () {
                be() && this.hookFetch();
            }),
            (sn.prototype.checkAddTrace = function (t) {
                var e,
                    n,
                    r,
                    o,
                    i =
                        null !==
                            (n =
                                null === (e = this.props) || void 0 === e
                                    ? void 0
                                    : e.commonParams) && void 0 !== n
                            ? n
                            : {},
                    a = i.bid,
                    s = i.web_id,
                    l = (null !==
                        (o =
                            null === (r = null == this ? void 0 : this.props) ||
                            void 0 === r
                                ? void 0
                                : r.ajaxMonitorOptions) && void 0 !== o
                        ? o
                        : {}
                    ).sampleHitTrace,
                    u = je(location.href, t);
                return a && s && l && u;
            }),
            (sn.prototype.updateAxRequest = function (t, e, n) {
                var r, o, i, a;
                this.collectErrorRequest() &&
                    "2" !== t.ax_status[0] &&
                    "3" !== t.ax_status[0] &&
                    ((a = this.getFetchUrl(e, !0)),
                    (t.ax_request = {
                        body:
                            null === (r = this.getFetchBody(e, n)) ||
                            void 0 === r
                                ? void 0
                                : r.toString(),
                        search:
                            !de(a) || null === (o = Me(a)) || void 0 === o
                                ? void 0
                                : o.search,
                        content_type:
                            null === (i = null == n ? void 0 : n.headers) ||
                            void 0 === i
                                ? void 0
                                : i["Content-Type"],
                    }));
            }),
            (sn.prototype.collectErrorRequest = function () {
                var t, e;
                return (
                    null !==
                        (e =
                            null === (t = this.props.ajaxMonitorOptions) ||
                            void 0 === t
                                ? void 0
                                : t.errorRequestCollect) &&
                    void 0 !== e &&
                    e
                );
            }),
            (sn.prototype.hookFetch = function () {
                var u = this,
                    c = this,
                    p = window.fetch;
                window.fetch = function (o, i) {
                    var t;
                    void 0 === i && (i = {});
                    var a = u.getFetchUrl(o);
                    if (
                        !(function (t) {
                            if (de(t)) {
                                var e = h(t.split(":"), 2),
                                    n = e[0];
                                return !e[1] || "http" === n || "https" === n;
                            }
                        })(a)
                    )
                        return p(o, i);
                    var e =
                            null !== (t = u.props.commonParams) && void 0 !== t
                                ? t
                                : {},
                        n = e.bid,
                        r = e.web_id,
                        s = Date.now(),
                        l = { ev_type: "ajax" };
                    try {
                        c.checkAddTrace(a) &&
                            ((i.headers = new Headers(
                                (function (t, e) {
                                    var n = new Headers();
                                    rn(t) &&
                                        t.headers &&
                                        he(t.headers.forEach) &&
                                        t.headers.forEach(function (t, e) {
                                            n.append(e, t);
                                        });
                                    {
                                        e.headers &&
                                            new Headers(e.headers).forEach(
                                                function (t, e) {
                                                    n.append(e, t);
                                                }
                                            );
                                    }
                                    return n;
                                })(o, i)
                            )),
                            n &&
                                r &&
                                ((l.trace_id = Be(n, r)),
                                i.headers.append(Ue, l.trace_id)));
                    } catch (t) {}
                    return (
                        (l.ax_type = u.getFetchMethod(o, i)),
                        (l = d(d({}, l), Re(a))),
                        p(o, i).then(
                            function (t) {
                                var e, n, r;
                                return (
                                    (l.ax_status = (t.status || 0).toString()),
                                    (l.ax_duration = Date.now() - s),
                                    (l.ax_response_header = c.getAllHeaders(
                                        t.headers
                                    )),
                                    (l.ax_request_header = c.getAllHeaders(
                                        i.headers
                                    )),
                                    t.headers && he(t.headers.has)
                                        ? (t.headers.has("content-length")
                                              ? (l.ax_size =
                                                    Number(
                                                        t.headers.get(
                                                            "content-length"
                                                        )
                                                    ) || 0)
                                              : (l.ax_size = 0),
                                          c.checkAddTrace(a) &&
                                              (t.headers.has(De) &&
                                                  (l.trace_host =
                                                      null !==
                                                          (e = t.headers.get(
                                                              De
                                                          )) && void 0 !== e
                                                          ? e
                                                          : void 0),
                                              t.headers.has(Ue) &&
                                                  (l.trace_id =
                                                      null !==
                                                          (n = t.headers.get(
                                                              Ue
                                                          )) && void 0 !== n
                                                          ? n
                                                          : void 0),
                                              t.headers.has(Fe) &&
                                                  (l.log_id =
                                                      null !==
                                                          (r = t.headers.get(
                                                              Fe
                                                          )) && void 0 !== r
                                                          ? r
                                                          : void 0)))
                                        : (l.ax_size = 0),
                                    u.updateAxRequest(l, o, i),
                                    he(c.callback) &&
                                        c.callback({
                                            name: c.name,
                                            type: "get",
                                            event: l,
                                        }),
                                    t
                                );
                            },
                            function (t) {
                                return (
                                    (l.ax_status = "0"),
                                    (l.ax_size = 0),
                                    (l.ax_duration = Date.now() - s),
                                    u.updateAxRequest(l, o, i),
                                    he(c.callback) &&
                                        c.callback({
                                            name: c.name,
                                            type: "get",
                                            event: l,
                                        }),
                                    Promise.reject(t)
                                );
                            }
                        )
                    );
                };
            }),
            (sn.prototype.getFetchUrl = function (t, e) {
                void 0 === e && (e = !1);
                var n = "",
                    n = rn(t) ? t.url : t;
                return e || (n = de(n) ? n.split("?")[0] : n), n;
            }),
            (sn.prototype.getFetchMethod = function (t, e) {
                var n,
                    r,
                    o =
                        null !== (n = null == e ? void 0 : e.method) &&
                        void 0 !== n
                            ? n
                            : "get";
                return (
                    rn(t) &&
                        (o = null !== (r = t.method) && void 0 !== r ? r : o),
                    o.toLowerCase()
                );
            }),
            (sn.prototype.getFetchBody = function (t, e) {
                return rn(t) ? t.body : null == e ? void 0 : e.body;
            }),
            (sn.prototype.getAllHeaders = function (t) {
                if (!t || "function" != typeof t.forEach) return "";
                var n = [];
                return (
                    t.forEach(function (t, e) {
                        n.push([e, t]);
                    }),
                    Ce(n)
                );
            }),
            (sn.monitorName = on),
            sn);
    function sn(t) {
        (this.name = on), (this.callback = Pe), (this.props = t);
    }
    var ln = "FMPMonitor",
        un =
            ((cn.prototype.setup = function (t) {
                if (we())
                    return we() && "function" == typeof window.MutationObserver
                        ? void (
                              he(document.querySelector) &&
                              ((this.callback =
                                  t && he(t) ? t : function () {}),
                              (this.startTime = Date.now()),
                              (this.list = []),
                              he(this.observer.observe) &&
                                  this.observer.observe(document, {
                                      childList: !0,
                                      subtree: !0,
                                  }))
                          )
                        : null;
            }),
            (cn.prototype.count = function () {
                var t = Date.now() - this.startTime,
                    e = document.querySelector("body");
                e
                    ? this.list.push({ score: this.score(e, 1, !1), time: t })
                    : this.list.push({ score: 0, time: t });
            }),
            (cn.prototype.score = function (t, e, n) {
                var r = 0,
                    o = t.tagName;
                if (
                    "SCRIPT" !== o &&
                    "STYLE" !== o &&
                    "META" !== o &&
                    "HEAD" !== o
                ) {
                    var i = t.children ? t.children.length : 0;
                    if (0 < i)
                        for (var a = t.children, s = i - 1; 0 <= s; s--)
                            r += this.score(a[s], e + 1, 0 < r);
                    if (r <= 0 && !n) {
                        if (
                            !t.getBoundingClientRect ||
                            !he(t.getBoundingClientRect)
                        )
                            return 0;
                        var l = t.getBoundingClientRect();
                        if (!l) return 0;
                        if (l.top > window.innerHeight) return 0;
                        if (l.height <= 0) return 0;
                    }
                    r += 1 + 0.5 * e;
                }
                return r;
            }),
            (cn.prototype.getFmpInternal = function () {
                if (!this.observer) return 0;
                if ((this.disconnect(), !this.list.length)) return 0;
                for (
                    var t, e = { time: this.list[0].time, rate: 0 }, n = 1;
                    n < this.list.length;
                    n++
                ) {
                    this.list[n].time >= this.list[n - 1].time &&
                        ((t = this.list[n].score - this.list[n - 1].score),
                        e.rate < t &&
                            (e = { time: this.list[n].time, rate: t }));
                }
                return e.time;
            }),
            (cn.prototype.getTimeGap = function () {
                return _e()
                    ? this.startTime - performance.timing.navigationStart
                    : 0;
            }),
            (cn.prototype.formatEvent = function (t) {
                return {
                    name: this.name,
                    type: "post",
                    event: { ev_type: "fmp", fmp: t },
                };
            }),
            (cn.monitorName = ln),
            cn);
    function cn() {
        var r = this;
        (this.name = ln),
            (this.callback = Pe),
            (this.disconnect = function () {
                var t, e;
                null !==
                    (e =
                        null === (t = r.observer) || void 0 === t
                            ? void 0
                            : t.disconnect) &&
                    void 0 !== e &&
                    e.call(t);
            }),
            (this.getLoadFmp = function () {
                var t = r.getFmpInternal(),
                    e = t ? r.getTimeGap() + t : 0,
                    n = r.formatEvent(e);
                return r.callback(n), n;
            }),
            (this.getFmp = function () {
                var t = r.getFmpInternal(),
                    e = r.formatEvent(t);
                return r.callback(e), e;
            }),
            (this.startTime = Date.now()),
            (this.list = []),
            (this.observer = new MutationObserver(this.count.bind(this)));
    }
    var pn = "PathMonitor",
        hn =
            ((dn.prototype.setup = function (t) {
                we() && ((this.callback = t), this.start());
            }),
            (dn.prototype.start = function () {
                this.monitorHashChange(),
                    we() &&
                        pe(window.history) &&
                        he(window.history.pushState) &&
                        he(window.history.replaceState) &&
                        (this.monitorPushState(), this.monitorReplaceState());
            }),
            (dn.prototype.monitorHashChange = function () {
                var e = this;
                window.addEventListener("hashchange", function () {
                    var t = e.parseHash(location.hash);
                    t && e.pathChangeHandler(e.getPath(t), "hash");
                });
            }),
            (dn.prototype.monitorPushState = function () {
                var n = this,
                    r = window.history.pushState;
                r &&
                    (window.history.pushState = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return (
                            n.handleHistoryStateChange.apply(n, _(t)),
                            r.apply(this, t)
                        );
                    });
            }),
            (dn.prototype.monitorReplaceState = function () {
                var n = this,
                    r = window.history.replaceState;
                r &&
                    (window.history.replaceState = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        return (
                            n.handleHistoryStateChange.apply(n, _(t)),
                            r.apply(this, t)
                        );
                    });
            }),
            (dn.prototype.pathChangeHandler = function (t, e) {
                de(t) &&
                    he(this.callback) &&
                    this.callback({
                        name: this.name,
                        type: "get",
                        event: { ev_type: "pageview", path: t, type: e },
                    });
            }),
            (dn.prototype.handleHistoryStateChange = function (t, e, n) {
                var r, o;
                n &&
                    ((r = this.parseURL(n)),
                    (o = this.parseURL(location.href)),
                    r &&
                        o &&
                        (r.pathname === o.pathname
                            ? r.hash !== o.hash &&
                              this.pathChangeHandler(
                                  this.getPath(r.hash),
                                  "hash"
                              )
                            : this.pathChangeHandler(
                                  this.getPath(r.pathname),
                                  "pathname"
                              )));
            }),
            (dn.prototype.parseURL = function (t) {
                var e = null;
                if (!t) return e;
                if ("string" != typeof t) return e;
                if (t.match(/^\/[^\/]/))
                    return new URL(
                        location.protocol + "//" + location.host + t
                    );
                try {
                    return new URL(t);
                } catch (t) {
                    return e;
                }
            }),
            (dn.prototype.parseHash = function (t) {
                return !t || "string" != typeof t ? "/" : t.replace(/^#/, "");
            }),
            (dn.prototype.getPath = function (t) {
                var e =
                    t && "string" == typeof t
                        ? t.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "")
                        : "";
                return (e = this.parseHash(e));
            }),
            (dn.monitorName = pn),
            dn);
    function dn() {
        (this.name = pn), (this.callback = Pe);
    }
    var fn =
        ((vn.prototype.sendEvent = function (t) {
            var e = this.getEventToBeSent(t);
            e && this.idleSendEvent(e);
        }),
        (vn.prototype.getEventToBeSent = function (t) {
            var e = this._modifyEvent(t);
            if (this._shouldSend(e)) return e;
        }),
        (vn.prototype._modifyEvent = function (t) {
            return t;
        }),
        (vn.prototype._shouldSend = function (t) {
            return !0;
        }),
        (vn.prototype._send = function (t) {}),
        (vn.prototype.idleSendEvent = function (t) {
            this._send(t);
        }),
        vn);
    function vn() {}
    var mn,
        gn =
            (t(yn, (mn = fn)),
            Object.defineProperty(yn.prototype, "ready", {
                get: function () {
                    return this.isReady;
                },
                set: function (t) {
                    (this.isReady = t), this.isReady && this._uploadQueue();
                },
                enumerable: !1,
                configurable: !0,
            }),
            (yn.prototype._send = function (t) {
                var e = this,
                    n = this.buildParams(t);
                n && this.reportQueue.push(n),
                    this.isReady &&
                        (this.reportQueue.length >= this.batchReportLength &&
                            this._uploadQueue(),
                        this.batchReportTimeout &&
                            clearTimeout(this.batchReportTimeout),
                        (this.batchReportTimeout = setTimeout(function () {
                            e._uploadQueue();
                        }, this.batchReportWait)));
            }),
            (yn.prototype._uploadQueue = function () {
                var t;
                this.reportQueue.length &&
                    this.ready &&
                    ((t = { ev_type: "batch", list: this.reportQueue }),
                    (this.reportQueue = []),
                    this._request({ event: t, type: "post" }));
            }),
            (yn.prototype._request = function (t) {}),
            yn);
    function yn(t) {
        var e,
            n,
            r = mn.call(this) || this;
        return (
            (r.reportQueue = []),
            (r.isReady = !0),
            (r.batchReportLength =
                null !== (e = t.maxBatchReportLength) && void 0 !== e ? e : 10),
            (r.batchReportWait =
                null !== (n = t.batchReportWait) && void 0 !== n ? n : 1e3),
            (r.batchReportTimeout = null),
            r
        );
    }
    var bn = "https://sf1-scmcdn-tos.pstatp.com/goofy/slardar/fe/sdk/plugins",
        wn = bn + "/sentry.3.5.5.cn.js",
        _n = bn + "/behavior.3.5.5.cn.js",
        Sn = "i.snssdk.com";
    function Mn(t) {
        return !!t && Math.random() < Number(t);
    }
    var En,
        Pn =
            (t(xn, (En = gn)),
            (xn.prototype.setEnable = function (t) {
                this.enable ||
                    ((this.enable = t), this.enable && this.updateStatus());
            }),
            Object.defineProperty(xn.prototype, "contextAgent", {
                get: function () {
                    var o = this,
                        n = {
                            set: function (t, e) {
                                return (
                                    o.options &&
                                        (o.options.commonParams.context ||
                                            (o.options.commonParams.context = {}),
                                        (o.options.commonParams.context[
                                            t
                                        ] = e)),
                                    n
                                );
                            },
                            delete: function (t) {
                                var e;
                                return (
                                    null !== (e = o.options) &&
                                        void 0 !== e &&
                                        e.commonParams.context &&
                                        "string" !=
                                            typeof o.options.commonParams
                                                .context &&
                                        ve(o.options.commonParams.context, t) &&
                                        delete o.options.commonParams.context[
                                            t
                                        ],
                                    n
                                );
                            },
                            clear: function () {
                                return (
                                    o.options &&
                                        (o.options.commonParams.context = {}),
                                    n
                                );
                            },
                            get: function (t) {
                                var e, n, r;
                                return null ===
                                    (r =
                                        null ===
                                            (n =
                                                null === (e = o.options) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.commonParams) ||
                                        void 0 === n
                                            ? void 0
                                            : n.context) || void 0 === r
                                    ? void 0
                                    : r[t];
                            },
                            toObject: function () {
                                var t, e, n;
                                return "string" ==
                                    typeof (null === (t = o.options) ||
                                    void 0 === t
                                        ? void 0
                                        : t.commonParams.context)
                                    ? {}
                                    : d(
                                          {},
                                          null ===
                                              (n =
                                                  null === (e = o.options) ||
                                                  void 0 === e
                                                      ? void 0
                                                      : e.commonParams) ||
                                              void 0 === n
                                              ? void 0
                                              : n.context
                                      );
                            },
                        };
                    return n;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (xn.prototype._shouldSend = function (t) {
                var e, n;
                if (
                    !(
                        null !== (e = this.options) &&
                        void 0 !== e &&
                        e.monitors &&
                        t &&
                        pe(t) &&
                        null !== (n = t.event) &&
                        void 0 !== n &&
                        n.ev_type
                    )
                )
                    return !1;
                var r = this.options.monitors;
                if ("AjaxMonitor" === t.name || "FetchMonitor" === t.name) {
                    var o = He(We || []);
                    if (o && o.test(t.event.ax_url)) return !1;
                }
                return (
                    !!r.BaseMonitor.webIDHit ||
                    (!!r.BaseMonitor.sampleHit &&
                        ("PathMonitor" === t.name
                            ? (function (t) {
                                  var e = t.sendParams,
                                      n = t.pageViewMonitor,
                                      r = t.baseMonitor;
                                  if (
                                      1 !== r.appTypeSetting.type ||
                                      e.event.type !== r.appTypeSetting.SPA
                                  )
                                      return !1;
                                  if (!n) return !0;
                                  if (n.webIDHit) return !0;
                                  return !!n.sampleHit;
                              })({
                                  sendParams: t,
                                  pageViewMonitor: r.PageViewMonitor,
                                  baseMonitor: r.BaseMonitor,
                              })
                            : "PageViewMonitor" === t.name
                            ? (function (t) {
                                  var e = t.pageViewMonitor;
                                  if (!e) return !0;
                                  if (e.webIDHit) return !0;
                                  return !!e.sampleHit;
                              })({ pageViewMonitor: r.PageViewMonitor })
                            : "AjaxMonitor" === t.name ||
                              "FetchMonitor" === t.name
                            ? (function (t) {
                                  var n = t.sendParams,
                                      e = t.ajaxMonitor;
                                  if (!e) return !0;
                                  if (e.webIDHit) return !0;
                                  if (!e.sampleHit) return !1;
                                  var r = e.whitelistUrls;
                                  if (fe(r) && 0 < r.length) {
                                      var o = He(e.whitelistUrls || []);
                                      return o && o.test(n.event.ax_url)
                                          ? !0
                                          : !1;
                                  }
                                  var i = He(e.ignore || []);
                                  if (i && i.test(n.event.ax_url)) return !1;
                                  var a = e.statusCodeSample;
                                  if (a && ve(a, n.event.ax_status))
                                      return Mn(a[n.event.ax_status]);
                                  var s = e.requestUrlSample;
                                  if (s) {
                                      var l = !1,
                                          u = !1;
                                      if (
                                          (s.forEach(function (t) {
                                              var e;
                                              l ||
                                                  (null != (e = He([t.url])) &&
                                                      e.test(n.event.ax_url) &&
                                                      ((l = !0),
                                                      (u = Mn(t.sampleRate))));
                                          }),
                                          l)
                                      )
                                          return u;
                                  }
                                  return !0;
                              })({ sendParams: t, ajaxMonitor: r.AjaxMonitor })
                            : "PerformanceMonitor" === t.name
                            ? (function (t) {
                                  var e = t.performanceMonitor;
                                  if (!e) return !0;
                                  if (e.webIDHit) return !0;
                                  return !!e.sampleHit;
                              })({ performanceMonitor: r.PerformanceMonitor })
                            : "EmitMonitor" === t.name
                            ? (function (t) {
                                  var e = t.sendParams,
                                      n = t.flexibleMonitor;
                                  if (!n) return !0;
                                  if (n.webIDHit) return !0;
                                  if (!n.sampleHit) return !1;
                                  var r = n.eventNameHit;
                                  if (r) {
                                      var o =
                                          e.event.flexible_data_list[0]
                                              .event_name;
                                      if (r && ve(r, o)) return Mn(r[o]);
                                  }
                                  return !0;
                              })({
                                  sendParams: t,
                                  flexibleMonitor: r.FlexibleMonitor,
                              })
                            : "StaticErrorMonitor" === t.name
                            ? (function (t) {
                                  var e = t.sendParams,
                                      n = t.staticErrorMonitor;
                                  if (!n) return !0;
                                  if (n.webIDHit) return !0;
                                  if (!n.sampleHit) return !1;
                                  var r = He(n.ignore || []);
                                  return !r || !r.test(e.event.st_src);
                              })({
                                  sendParams: t,
                                  staticErrorMonitor: r.StaticErrorMonitor,
                              })
                            : "HijackMonitor" === t.name
                            ? (function (t) {
                                  var e = t.hijackMonitor;
                                  if (!e) return !0;
                                  if (e.webIDHit) return !0;
                                  return !!e.sampleHit;
                              })({ hijackMonitor: r.HijackMonitor })
                            : "JSErrorMonitor" !== t.name ||
                              (function (t) {
                                  var e = t.jsErrorMonitor;
                                  if (!e) return !0;
                                  if (e.webIDHit) return !0;
                                  return !!e.sampleHit;
                              })({ jsErrorMonitor: r.JSErrorMonitor })))
                );
            }),
            (xn.prototype._modifyEvent = function (t) {
                var e;
                if (
                    null === (e = this.options) ||
                    void 0 === e ||
                    !e.monitors ||
                    !t ||
                    !pe(t)
                )
                    return {};
                var n = this.options.monitors;
                return "PerformanceMonitor" === t.name
                    ? (function (t) {
                          var e,
                              a = t.sendParams,
                              n = t.performanceMonitor;
                          if (!n) return a;
                          if (!_e()) return {};
                          {
                              var r;
                              e = a.event.isAsync
                                  ? a.event.load > n.spaSlowSessionTime
                                  : ((r = window.performance.timing),
                                    r.loadEventEnd - r.navigationStart >
                                        n.slowSessionTime);
                          }
                          {
                              var s;
                              a.event.resources &&
                                  fe(a.event.resources) &&
                                  ((s = He(n.geckoUrls || [])),
                                  a.event.resources.forEach(function (t, e) {
                                      var n, r, o, i;
                                      null !== (n = a.event.resources) &&
                                          void 0 !== n &&
                                          n[e] &&
                                          pe(
                                              null ===
                                                  (r = a.event.resources) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r[e]
                                          ) &&
                                          he(
                                              null ===
                                                  (o = a.event.resources) ||
                                                  void 0 === o
                                                  ? void 0
                                                  : o[e].toJSON
                                          ) &&
                                          ((a.event.resources[e] =
                                              null ===
                                                  (i = a.event.resources) ||
                                              void 0 === i
                                                  ? void 0
                                                  : i[e].toJSON()),
                                          (a.event.resources[e].is_gecko =
                                              s && s.test(t.name || "")
                                                  ? "1"
                                                  : "0"));
                                  }));
                          }
                          n.webIDHitStaticResource || n.sampleHitStaticResource
                              ? (a.event.upload_reason = "sample")
                              : e
                              ? (a.event.upload_reason = "slow_session")
                              : (delete a.event.resources,
                                (a.event.has_resource = 0));
                          return a;
                      })({
                          sendParams: t,
                          performanceMonitor: n.PerformanceMonitor,
                      })
                    : "PathMonitor" === t.name
                    ? (function (t) {
                          var e = t.sendParams,
                              n = t.baseMonitor,
                              r = t.effect;
                          1 === n.appTypeSetting.type &&
                              n.appTypeSetting.SPA === e.event.type &&
                              (r({ commonParams: { pid: e.event.path } }),
                              delete e.event.type,
                              delete e.event.path);
                          return {};
                      })({
                          sendParams: t,
                          baseMonitor: n.BaseMonitor,
                          effect: this.updateConfig,
                      })
                    : t;
            }),
            (xn.prototype.buildParams = function (t) {
                var e,
                    n,
                    r,
                    o = t.event || {},
                    i = d(
                        d(
                            d({}, o),
                            null !==
                                (n =
                                    null === (e = this.options) || void 0 === e
                                        ? void 0
                                        : e.commonParams) && void 0 !== n
                                ? n
                                : {}
                        ),
                        o
                    ),
                    i = this.normalizeEvent(i);
                return (
                    null !== (r = this.options) &&
                        void 0 !== r &&
                        r.custom &&
                        he(this.options.custom.beforeSend) &&
                        (i = this.options.custom.beforeSend(i || {})),
                    i
                );
            }),
            (xn.prototype._request = function (t) {
                var e, n, r, o;
                t &&
                    t.event &&
                    ((n = t.type),
                    (r = t.event),
                    "beacon" ===
                        (null === (e = this.options) || void 0 === e
                            ? void 0
                            : e.commonParams.report_type) &&
                    navigator &&
                    navigator.sendBeacon
                        ? ((o = JSON.stringify(r)),
                          navigator.sendBeacon(this.getReportURL(), o))
                        : this.transport &&
                          ("get" !== n
                              ? "post" === n && this.transport.postEvent(r)
                              : this.transport.getEvent(r)));
            }),
            (xn.prototype.chechIsReady = function () {
                return 2 === this.clientStatus;
            }),
            (xn.prototype.updateStatus = function () {
                var e = this;
                switch (this.clientStatus) {
                    case 0:
                        this.clientStatus = 1;
                        break;
                    case 1:
                        if (((this.clientStatus = 2), !this.preQueue.length))
                            return;
                        this.preQueue.forEach(function (t) {
                            En.prototype.sendEvent.call(e, t);
                        }),
                            (this.preQueue = []);
                }
            }),
            (xn.prototype.getBatchReportURL = function () {
                var t;
                return (
                    "https://" +
                    (null === (t = this.options) || void 0 === t
                        ? void 0
                        : t.commonParams.report_domain) +
                    "/log/sentry/v2/api/slardar/batch/"
                );
            }),
            (xn.prototype.getReportURL = function () {
                return this.reportURL || this.getBatchReportURL();
            }),
            (xn.prototype.normalizeOptions = function (t) {
                var e;
                return ge(
                    {},
                    null !== (e = this.options) && void 0 !== e ? e : {},
                    t
                );
            }),
            (xn.prototype.normalizeEvent = function (t) {
                var e = d(d({}, t), { url: window.location.href });
                return (
                    pe(t.context) && (e.context = JSON.stringify(t.context)),
                    e || {}
                );
            }),
            xn);
    function xn(t) {
        var e,
            i = En.call(this, null != t ? t : { reportURL: "" }) || this;
        return (
            (i.setTransport = function () {
                i.transport ||
                    ((i.transport = new Oe({ reportURL: i.getReportURL() })),
                    i.updateStatus());
            }),
            (i.uploadQueue = function () {
                i._uploadQueue();
            }),
            (i.updateConfig = function (t) {
                var e,
                    n,
                    r,
                    o =
                        null ===
                            (n =
                                null === (e = i.options) || void 0 === e
                                    ? void 0
                                    : e.commonParams) || void 0 === n
                            ? void 0
                            : n.pid;
                (i.options = i.normalizeOptions(t)),
                    o &&
                        null !== (r = null == t ? void 0 : t.commonParams) &&
                        void 0 !== r &&
                        r.pid &&
                        t.commonParams.pid !== o &&
                        i.sendPageview();
            }),
            (i.sendPageview = function () {
                he(i.sendEvent) &&
                    i.sendEvent({
                        name: "PageViewMonitor",
                        type: "get",
                        event: { ev_type: "pageview" },
                    });
            }),
            (i.sendEvent = function (t) {
                i.chechIsReady()
                    ? En.prototype.sendEvent.call(i, t)
                    : i.preQueue.push(t);
            }),
            (i.reportURL =
                null !== (e = null == t ? void 0 : t.reportURL) && void 0 !== e
                    ? e
                    : ""),
            (i.preQueue = []),
            (i.clientStatus = 0),
            (i.enable = !1),
            i
        );
    }
    var Cn = function () {
        var t = "";
        return (
            null !== document &&
                void 0 !== document &&
                document.cookie &&
                (t = (function (t, e) {
                    var n, r;
                    if (!t || !e) return "";
                    var o = t.split(";"),
                        i = {};
                    try {
                        for (
                            var a = m(o), s = a.next();
                            !s.done;
                            s = a.next()
                        ) {
                            var l = s.value.split("="),
                                u = de(l[0]) && l[0].trim();
                            u && de(l[1]) && (i[u] = l[1].trim());
                        }
                    } catch (t) {
                        n = { error: t };
                    } finally {
                        try {
                            s && !s.done && (r = a.return) && r.call(a);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                    return i[e] || "";
                })(document.cookie, $e)),
            t
        );
    };
    function Rn(t) {
        return ge(
            {},
            {
                commonParams: {
                    version: "",
                    hostname: window.location.hostname,
                    protocol: window.location.protocol.slice(0, -1),
                    url: window.location.href,
                    slardar_session_id: Ye,
                    sample_rate: ze,
                    pid: location.pathname,
                    report_domain: Sn,
                    screen_resolution: ke(),
                    network_type: Le(),
                    bid: "",
                    context: {},
                    slardar_web_id: Cn() || Ke,
                    report_type: "xhr",
                    performanceAuto: !0,
                    reportURLSingle: "",
                    region: "cn",
                    env: "production",
                },
                flags: {
                    hookPath: !0,
                    hookXHR: !0,
                    hookFetch: !0,
                    enableSizeStats: !0,
                    enableFMP: !0,
                    enablePerformance: !0,
                    enableStaticError: !0,
                    enableCatchJSError: !0,
                    enableCrash: !0,
                    enableMemoryRecord: !0,
                    enableFPSJankTimesMonitor: !0,
                    enableBreadcrumb: !0,
                    hookConsole: !1,
                },
                monitors: {
                    BaseMonitor: {
                        appTypeSetting: { type: 0, SPA: "", renderType: 0 },
                        webIDHit: !1,
                        sampleHit: Te(1),
                    },
                    PageViewMonitor: { webIDHit: !1, sampleHit: Te(1) },
                    JSErrorMonitor: {
                        webIDHit: !1,
                        sampleHit: Te(1),
                        webIDHitBehavior: !1,
                        sampleHitBehavior: !1,
                        ignoreErrors: [],
                        whitelistUrls: [],
                        blacklistUrls: [],
                        download_link: "",
                    },
                    AjaxMonitor: {
                        webIDHit: !1,
                        sampleHit: Te(1),
                        sampleHitTrace: !1,
                        ignore: We,
                        abort: !1,
                        whitelistUrls: [],
                        statusCodeSample: {},
                        requestUrlSample: [],
                        errorRequestCollect: !1,
                    },
                    PerformanceMonitor: {
                        webIDHit: !1,
                        sampleHit: Te(1),
                        webIDHitStaticResource: !1,
                        sampleHitStaticResource: Te(Xe),
                        slowSessionTime: Ve,
                        spaSlowSessionTime: Ge,
                        geckoUrls: [],
                        interval: 0,
                        checkPoint: [],
                    },
                    FlexibleMonitor: {
                        webIDHit: !1,
                        sampleHit: Te(1),
                        eventNameHit: {},
                        eventNameSampleHit: Te(1),
                    },
                    StaticErrorMonitor: {
                        webIDHit: !1,
                        sampleHit: Te(1),
                        ignore: We,
                    },
                    HijackMonitor: { webIDHit: !1, sampleHit: Te(Qe) },
                },
                plugins: {
                    render: { enable: 0 },
                    spa: { enable: 0, type: "" },
                    behavior: {
                        enable: 0,
                        slardar_web_ids: [],
                        sample_rate: 0,
                        download_link: _n,
                    },
                    sentry: {
                        enable: 0,
                        behavior_enable: 0,
                        behavior_sample_rate: 0,
                        behavior_slardar_web_ids: [],
                        download_link: wn,
                    },
                },
                custom: {
                    beforeSend: function (t) {
                        return t;
                    },
                },
            },
            t
        );
    }
    function jn(t, e) {
        var n = !1;
        return (
            t &&
                t.forEach(function (t) {
                    n ||
                        (!t.condition.is_default &&
                            "slardar_web_id" === t.condition.field &&
                            ye(t.condition.values, e.web_id) &&
                            (n = !0));
                }),
            n
        );
    }
    function Hn(t) {
        var e = !1;
        return (
            !t ||
            (t.forEach(function (t) {
                (t.condition.field && e) || (e = Mn(Number(t.value)));
            }),
            e)
        );
    }
    function kn(t) {
        var e = [];
        if (t)
            try {
                e = JSON.parse(t);
            } catch (t) {
                e = [];
            }
        return e;
    }
    function Ln(t) {
        var n = [];
        return (
            t.forEach(function (t) {
                var e;
                t.value && ((e = kn(t.value)), n.push.apply(n, _(e)));
            }),
            n
        );
    }
    function Tn(t, n) {
        var r = {},
            o = [];
        return (
            t.forEach(function (e) {
                e.condition.field === n &&
                    e.condition.values &&
                    e.condition.values.forEach(function (t) {
                        ve(r, t) ||
                            ((r[t] = Number(e.value) || 0),
                            o.push({ url: t, sampleRate: r[t] }));
                    });
            }),
            { flatten: r, list: o }
        );
    }
    function On(n) {
        var t;
        void 0 === n && (n = {});
        var r = ge({}, null !== (t = n.commonParams) && void 0 !== t ? t : {});
        if (!pe(n)) return r;
        var o = [
            "bid",
            "context",
            "pid",
            "slardar_web_id",
            "slardar_session_id",
            "performanceAuto",
            "report_type",
            "region",
            "env",
        ];
        return (
            me(n, function (t, e) {
                ye(o, t) &&
                    ("report_domain" === t && "mon-va.byteoversea.com" === e
                        ? (r.region = "maliva")
                        : (r[t] = e));
            }),
            me(
                {
                    cookieid: "slardar_web_id",
                    sampleRate: "sample_rate",
                    reportDomain: "report_domain",
                    domain: "report_domain",
                    sample_rate: "sample_rate",
                    slardar_web_id: "slardar_web_id",
                },
                function (t, e) {
                    ve(n, t) && (r[e] = n[t]);
                }
            ),
            r.slardar_web_id &&
                (r.slardar_web_id = r.slardar_web_id.toString()),
            r
        );
    }
    function An(t, e, n) {
        var r,
            o,
            i,
            a,
            s,
            l,
            u,
            c,
            p,
            h,
            d = ge(
                {
                    PageViewMonitor: {},
                    JSErrorMonitor: {},
                    AjaxMonitor: {},
                    PerformanceMonitor: {},
                    FlexibleMonitor: {},
                    StaticErrorMonitor: {},
                    HijackMonitor: {},
                    BaseMonitor: {},
                },
                e
            ),
            f = t.setting;
        null !==
            (o =
                null === (r = f.page_view) || void 0 === r
                    ? void 0
                    : r.enable_rate) &&
            void 0 !== o &&
            o.length &&
            ((d.PageViewMonitor.webIDHit = jn(f.page_view.enable_rate, n)),
            (d.PageViewMonitor.sampleHit = Hn(f.page_view.enable_rate))),
            f.jserr &&
                (null !== (i = f.jserr.enable_rate) &&
                    void 0 !== i &&
                    i.length &&
                    ((d.JSErrorMonitor.webIDHit = jn(f.jserr.enable_rate, n)),
                    (d.JSErrorMonitor.sampleHit = Hn(f.jserr.enable_rate))),
                f.jserr.ignore_errors &&
                    (d.JSErrorMonitor.ignoreErrors = Ln(f.jserr.ignore_errors)),
                f.jserr.blacklist_urls &&
                    (d.JSErrorMonitor.blacklistUrls = Ln(
                        f.jserr.blacklist_urls
                    )),
                f.jserr.whitelist_urls &&
                    (d.JSErrorMonitor.whitelistUrls = Ln(
                        f.jserr.whitelist_urls
                    ))),
            f.ajax &&
                (f.ajax.enable_rate &&
                    ((d.AjaxMonitor.webIDHit = jn(f.ajax.enable_rate, n)),
                    (d.AjaxMonitor.sampleHit = Hn(f.ajax.enable_rate))),
                f.ajax.request_sample_rate &&
                    ((d.AjaxMonitor.statusCodeSample = Tn(
                        f.ajax.request_sample_rate,
                        "status_code"
                    ).flatten),
                    (d.AjaxMonitor.requestUrlSample = Tn(
                        f.ajax.request_sample_rate,
                        "request_url"
                    ).list)),
                f.ajax.trace_rate &&
                    (d.AjaxMonitor.sampleHitTrace = Hn(f.ajax.trace_rate)),
                f.ajax.enable_request_param_collect_on_error &&
                    (d.AjaxMonitor.errorRequestCollect = (function (t, e) {
                        var n, r;
                        void 0 === e && (e = !1);
                        try {
                            for (
                                var o = m(t), i = o.next();
                                !i.done;
                                i = o.next()
                            ) {
                                var a = i.value;
                                if (a.value) return "true" === a.value;
                            }
                        } catch (t) {
                            n = { error: t };
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o);
                            } finally {
                                if (n) throw n.error;
                            }
                        }
                        return e;
                    })(f.ajax.enable_request_param_collect_on_error))),
            null !== (a = f.static_resource) &&
                void 0 !== a &&
                a.enable_rate &&
                ((d.PerformanceMonitor.webIDHitStaticResource = jn(
                    f.static_resource.enable_rate,
                    n
                )),
                (d.PerformanceMonitor.sampleHitStaticResource = Hn(
                    f.static_resource.enable_rate
                ))),
            null !== (s = f.performance) &&
                void 0 !== s &&
                s.enable_rate &&
                ((d.PerformanceMonitor.webIDHit = jn(
                    f.performance.enable_rate,
                    n
                )),
                (d.PerformanceMonitor.sampleHit = Hn(
                    f.performance.enable_rate
                ))),
            f.flexible &&
                (f.flexible.enable_rate &&
                    ((d.FlexibleMonitor.webIDHit = jn(
                        f.flexible.enable_rate,
                        n
                    )),
                    (d.FlexibleMonitor.sampleHit = Hn(f.flexible.enable_rate))),
                f.flexible.event_name_sample_rate &&
                    ((d.FlexibleMonitor.eventNameHit = Tn(
                        f.flexible.event_name_sample_rate,
                        "event_name"
                    ).flatten),
                    (d.FlexibleMonitor.eventNameSampleHit = Hn(
                        f.flexible.event_name_sample_rate
                    )))),
            null !== (l = f.static_err) &&
                void 0 !== l &&
                l.enable_rate &&
                ((d.StaticErrorMonitor.webIDHit = jn(
                    f.static_err.enable_rate,
                    n
                )),
                (d.StaticErrorMonitor.sampleHit = Hn(
                    f.static_err.enable_rate
                ))),
            !f.general ||
                ((u = f.general.app_type_setting) &&
                    ((c = {
                        type: Number(u.app_type[0].value),
                        SPA: u.app_type_spa[0].value,
                        renderType: qn({
                            renderRules:
                                ((p = u.app_render_type),
                                (h = []),
                                p.forEach(function (t) {
                                    "pid" === t.condition.field.toLowerCase() &&
                                    "like" === t.condition.op.toLowerCase() &&
                                    t.value
                                        ? h.push({
                                              pids: kn(t.value),
                                              value: parseInt(t.value, 10),
                                              isDefault: !1,
                                          })
                                        : t.condition.is_default &&
                                          h.push({
                                              pids: [],
                                              value: parseInt(t.value, 10),
                                              isDefault: !0,
                                          });
                                }),
                                h),
                            pid: n.pid,
                        }),
                    }),
                    (d.BaseMonitor.appTypeSetting = c)));
        var v = t.whitelist;
        return (
            fe(v) &&
                v.forEach(function (t) {
                    n.web_id === t &&
                        ((d.BaseMonitor.webIDHit = !0),
                        (d.AjaxMonitor.sampleHitTrace = !0));
                }),
            d
        );
    }
    function qn(t) {
        var e = t.renderRules,
            n = t.pid;
        if (!e || !n) return 0;
        for (var r = 0; r < e.length; r++) {
            var o = e[r];
            if (fe(o.pids) && 0 < o.pids.length) {
                var i = He(o.pids);
                if (i && i.test(n)) return o.value;
            }
            if (o.isDefault && r === e.length - 1) return o.value;
        }
        return 0;
    }
    var In,
        Un,
        Dn,
        Fn,
        Bn,
        Nn,
        Jn,
        zn =
            ((Xn.prototype.handleConfig = function (t) {
                var e,
                    n = t;
                return (
                    (this.configSetting = d(
                        d({}, this.configSetting || {}),
                        n || {}
                    )),
                    null !== (e = this.configSetting) &&
                        void 0 !== e &&
                        e.onlyUseLocalSetting &&
                        (this.serverSetting = {}),
                    this.normalizeSetting(n)
                );
            }),
            (Xn.prototype.setBaseParams = function () {
                (this.baseParams.bid =
                    this.shared.config.commonParams.bid || ""),
                    (this.baseParams.pid =
                        this.shared.config.commonParams.pid || "");
            }),
            (Xn.prototype.init = function (t) {
                var e;
                this.client = new Pn({
                    reportURL:
                        "https://" +
                        (null !=
                        (e = this.baseClientConfig.commonParams.report_domain)
                            ? e
                            : Sn) +
                        "/log/sentry/v2/api/slardar/batch/",
                });
                var n = this.setMonitors();
                this.setupMonitors(n),
                    this.shared.instance &&
                        fe(this.shared.instance) &&
                        this.shared.instance.push(t.commonParams.bid),
                    this.getServerSetting(t.commonParams.bid),
                    this.onClose();
            }),
            (Xn.prototype.getServerSetting = function (t) {
                var e,
                    n,
                    r,
                    o = this,
                    i = this.serverSetting;
                i
                    ? ((e = this.normalizeServerSetting(i)),
                      this.initServerSetting(e))
                    : ((n =
                          "https://" +
                          (null !=
                          (r = this.baseClientConfig.commonParams.report_domain)
                              ? r
                              : Sn) +
                          "/slardar/sdk_setting?bid=" +
                          t),
                      Oe.get(n, {
                          success: function (t) {
                              try {
                                  var e = o.normalizeServerSetting(t.data);
                                  o.initServerSetting(e);
                              } catch (t) {
                                  o.initServerSetting(o.baseClientConfig);
                              }
                          },
                          fail: function () {
                              o.initServerSetting(o.baseClientConfig);
                          },
                      }));
            }),
            (Xn.prototype.setMonitors = function () {
                var t,
                    e = this,
                    n = [],
                    r = this.baseClientConfig.flags,
                    o = this.baseClientConfig.commonParams;
                return (
                    r.hookPath && n.push(new hn()),
                    r.hookXHR &&
                        n.push(
                            new en({
                                commonParams: {
                                    web_id: o.slardar_web_id,
                                    bid: o.bid,
                                },
                                ajaxMonitorOptions: this.baseClientConfig
                                    .monitors.AjaxMonitor,
                            })
                        ),
                    r.hookFetch &&
                        n.push(
                            new an({
                                commonParams: {
                                    web_id: o.slardar_web_id,
                                    bid: o.bid,
                                },
                                ajaxMonitorOptions: this.baseClientConfig
                                    .monitors.AjaxMonitor,
                            })
                        ),
                    r.enableFMP && n.push(new un()),
                    null !== (t = this.shared) &&
                        void 0 !== t &&
                        t.monitors &&
                        n.forEach(function (t) {
                            e.shared.monitors[t.name] = t;
                        }),
                    n
                );
            }),
            (Xn.prototype.setupMonitors = function (t) {
                var n = this;
                this.client &&
                    this.client.sendEvent &&
                    t.forEach(function (t) {
                        var e;
                        "FMPMonitor" === t.name
                            ? n.baseClientConfig.flags.enableFMP && t.setup(Pe)
                            : t.setup(
                                  null === (e = n.client) || void 0 === e
                                      ? void 0
                                      : e.sendEvent
                              );
                    });
            }),
            (Xn.prototype.shouldSetClientEnable = function () {
                return "production" === this.baseClientConfig.commonParams.env;
            }),
            (Xn.prototype.initServerSetting = function (t) {
                var e, n, r;
                this.client.updateConfig(t),
                    this.client.setTransport(),
                    null !== (e = this.client) &&
                        void 0 !== e &&
                        e.setEnable(
                            !this.hasInit && this.shouldSetClientEnable()
                        ),
                    this.client.sendPageview(),
                    (this.shared.transport = this.client.transport),
                    (this.shared.sendEvent = this.client.sendEvent.bind(
                        this.client
                    )),
                    this.setCookie(t.commonParams.slardar_web_id),
                    null !== (n = this.shared.monitors.FetchMonitor) &&
                        void 0 !== n &&
                        n.updateConfig({
                            commonParams: {
                                web_id: t.commonParams.slardar_web_id,
                                bid: t.commonParams.bid,
                            },
                            ajaxMonitorOptions: t.monitors.AjaxMonitor,
                        }),
                    null !== (r = this.shared.monitors.AjaxMonitor) &&
                        void 0 !== r &&
                        r.updateConfig({
                            commonParams: {
                                web_id: t.commonParams.slardar_web_id,
                                bid: t.commonParams.bid,
                            },
                            ajaxMonitorOptions: this.baseClientConfig.monitors
                                .AjaxMonitor,
                        }),
                    this.loadMonitors(),
                    this.baseClientConfig.flags.enableCatchJSError &&
                        this.loadSentry();
            }),
            (Xn.prototype.loadSentry = function () {
                var e = this;
                Ze(wn, function () {
                    var t = new window.Slardar.SetSentryMonitors({
                        hookConsole: e.baseClientConfig.flags.hookConsole,
                        memoryRecordMonitor:
                            e.shared.monitors.MemoryRecordMonitor,
                        collect: e.shared.collect,
                        sendEvent: e.client.sendEvent,
                        jsErrorOptions: e.shared.config.monitors.JSErrorMonitor,
                    });
                    t.init(),
                        (e.shared.monitors = d(
                            d({}, e.shared.monitors),
                            t.getInstalledMonitors()
                        ));
                });
            }),
            (Xn.prototype.loadMonitors = function () {
                var n = this;
                Ze(
                    "https://sf1-scmcdn-tos.pstatp.com/goofy/slardar/fe/sdk/plugins/monitors.3.5.5.cn.js",
                    function () {
                        var t,
                            e = new window.Slardar.SetMonitors({
                                config: n.baseClientConfig,
                                fmpMonitor: n.shared.monitors.FMPMonitor,
                                report: function () {
                                    return n.instance("report");
                                },
                                sendEvent:
                                    null === (t = n.client) || void 0 === t
                                        ? void 0
                                        : t.sendEvent,
                                captureException: function (e) {
                                    return n.instance("Sentry", function (t) {
                                        t.captureException(e);
                                    });
                                },
                                collect: n.shared.collect,
                            });
                        e.init(),
                            (n.shared.monitors = d(
                                d({}, n.shared.monitors),
                                e.getInstalledMonitors()
                            ));
                    }
                );
            }),
            (Xn.prototype.setCookie = function (t) {
                t &&
                    (document.cookie =
                        $e +
                        "=" +
                        t +
                        ";max-age=7776000;domain=" +
                        location.hostname +
                        ";path=/");
            }),
            (Xn.prototype.normalizeSetting = function (t) {
                var e,
                    n = {
                        commonParams: this.getClientCommonParams(t),
                        flags: this.getClientFlags(t),
                        plugins: this.getClientPluginsSetting(t),
                        monitors: this.getClientMonitorsSetting(t),
                        custom: this.getClientCustom(t),
                    },
                    r = {
                        commonParams: this.getClientCommonParams(
                            this.configSetting
                        ),
                        flags: this.getClientFlags(t),
                        plugins: this.getClientPluginsSetting(
                            this.configSetting
                        ),
                        monitors: this.getClientMonitorsSetting(
                            this.configSetting
                        ),
                        custom: this.getClientCustom(this.configSetting),
                    },
                    o = ge(this.baseClientConfig, n, r);
                return (
                    (o.commonParams.reportURLSingle =
                        "https://" +
                        (null != (e = o.commonParams.report_domain) ? e : Sn) +
                        "/log/sentry/v2/api/slardar/main/"),
                    (o.commonParams.pid = this.getPid(o)),
                    (this.shared.config = o),
                    this.setBaseParams(),
                    (this.baseClientConfig = o)
                );
            }),
            (Xn.prototype.getPid = function (t) {
                if (t.commonParams.pid) return t.commonParams.pid;
                var e = t.monitors.BaseMonitor;
                return 1 === e.appTypeSetting.type &&
                    "hash" === e.appTypeSetting.SPA
                    ? location.hash.slice(1) || "/"
                    : location.pathname;
            }),
            (Xn.prototype.getClientCommonParams = On),
            (Xn.prototype.getClientFlags = function (t) {
                var e;
                void 0 === t && (t = {});
                var n = ge({}, null !== (e = t.flags) && void 0 !== e ? e : {});
                if (!pe(t)) return n;
                var r = [
                    "hookPath",
                    "hookXHR",
                    "hookFetch",
                    "enableSizeStats",
                    "enableFMP",
                    "enablePerformance",
                    "enableStaticError",
                    "enableCatchJSError",
                    "enableCrash",
                    "enableMemoryRecord",
                    "enableFPSJankTimesMonitor",
                    "enableBreadcrumb",
                    "hookConsole",
                ];
                return (
                    me(t, function (t, e) {
                        ye(r, t) && (n[t] = e);
                    }),
                    n
                );
            }),
            (Xn.prototype.getClientCustom = function (t) {
                var e = {};
                return (
                    t.beforeSend &&
                        he(t.beforeSend) &&
                        (e.beforeSend = t.beforeSend),
                    e
                );
            }),
            (Xn.prototype.getClientMonitorsSetting = function (t) {
                return (function (t) {
                    var e,
                        n,
                        r = t.setting,
                        o = t.info,
                        i = ge(
                            {
                                PageViewMonitor: {},
                                JSErrorMonitor: {},
                                AjaxMonitor: {},
                                PerformanceMonitor: {},
                                FlexibleMonitor: {},
                                StaticErrorMonitor: {},
                                HijackMonitor: {},
                                BaseMonitor: { appTypeSetting: {} },
                            },
                            r.monitors
                        );
                    r.ajaxWhitelistUrls &&
                        fe(r.ajaxWhitelistUrls) &&
                        (i.AjaxMonitor.whitelistUrls = (
                            i.AjaxMonitor.whitelistUrls || []
                        ).concat(r.ajaxWhitelistUrls)),
                        r.ignoreAjax &&
                            fe(r.ignoreAjax) &&
                            (i.AjaxMonitor.ignore = (
                                i.AjaxMonitor.ignore || []
                            ).concat(r.ignoreAjax)),
                        ve(r, "geckoUrls") &&
                            (i.PerformanceMonitor.geckoUrls = r.geckoUrls),
                        r.ignoreStatic &&
                            fe(r.ignoreStatic) &&
                            (i.StaticErrorMonitor.ignore = (
                                i.StaticErrorMonitor.ignore || []
                            ).concat(r.ignoreStatic)),
                        null !== (e = r.plugins) &&
                            void 0 !== e &&
                            e.sentry &&
                            (i.JSErrorMonitor = d(
                                d({}, i.JSErrorMonitor || {}),
                                r.plugins.sentry
                            )),
                        r.errorRelease &&
                            (i.JSErrorMonitor.release = r.errorRelease),
                        r.ignoreErrors &&
                            fe(r.ignoreErrors) &&
                            (i.JSErrorMonitor.ignoreErrors = r.ignoreErrors),
                        r.errorBlacklistUrls &&
                            fe(r.errorBlacklistUrls) &&
                            (i.JSErrorMonitor.blacklistUrls =
                                r.errorBlacklistUrls),
                        r.errorWhitelistUrls &&
                            fe(r.errorWhitelistUrls) &&
                            (i.JSErrorMonitor.whitelistUrls =
                                r.errorWhitelistUrls),
                        ve(r, "sampleRate") &&
                            (i.BaseMonitor.sampleHit = Mn(r.sampleRate));
                    var a,
                        s,
                        l,
                        u = r.plugins;
                    return (
                        u &&
                            pe(u) &&
                            (ve(u, "spa") &&
                                ((a = u.spa) &&
                                    ve(a, "enable") &&
                                    (i.BaseMonitor.appTypeSetting.type = Number(
                                        a.enable
                                    )),
                                a &&
                                    ve(a, "type") &&
                                    (i.BaseMonitor.appTypeSetting.SPA =
                                        a.type)),
                            !u.render ||
                                ((s =
                                    null === (n = r.plugins) || void 0 === n
                                        ? void 0
                                        : n.render) &&
                                    pe(s) &&
                                    ve(s, "enable") &&
                                    ((l = [
                                        {
                                            pids: [],
                                            value: s.enable,
                                            isDefault: !0,
                                        },
                                    ]),
                                    (i.BaseMonitor.appTypeSetting.renderType = qn(
                                        { renderRules: l, pid: o.pid }
                                    ))))),
                        i
                    );
                })({ setting: t, info: this.getNormoalizeInfo() });
            }),
            (Xn.prototype.getClientPluginsSetting = function (t) {
                return (
                    void 0 === (e = t) && (e = {}),
                    ge(
                        { sentry: {}, behavior: {}, spa: {}, render: {} },
                        null !== (n = e.plugins) && void 0 !== n ? n : {}
                    )
                );
                var e, n;
            }),
            (Xn.prototype.getNormoalizeInfo = function () {
                return {
                    web_id: this.baseClientConfig.commonParams.slardar_web_id,
                    pid: this.baseClientConfig.commonParams.pid,
                };
            }),
            (Xn.prototype.normalizeServerSetting = function (t) {
                if (!ve(t, "setting")) {
                    var e = {
                        cookieid: t.cookieid,
                        reportDomain: t.reportDomain,
                        bid: t.bid,
                        plugins: t.plugins,
                    };
                    return this.normalizeSetting(e);
                }
                var n = {
                    commonParams: On(t),
                    monitors: An(
                        t,
                        this.baseClientConfig.monitors,
                        this.getNormoalizeInfo()
                    ),
                };
                return this.normalizeSetting(n);
            }),
            Xn);
    function Xn() {
        var w = this;
        (this.version = "3.5.5"),
            (this.instance = function () {
                for (
                    var t, e, n, r, o, i, a, s, l, u, c, p, h = [], d = 0;
                    d < arguments.length;
                    d++
                )
                    h[d] = arguments[d];
                if (
                    ("init" !== h[0] ||
                        w.hasInit ||
                        ((f = w.handleConfig(h[1])),
                        (w.hasInit = !0),
                        w.init(f)),
                    "config" === h[0])
                ) {
                    var f = w.handleConfig(h[1]);
                    return (
                        w.client
                            ? w.client.updateConfig(f)
                            : w.hasInit || w.init(f),
                        void (
                            null !== (e = w.client) &&
                            void 0 !== e &&
                            e.setEnable(w.hasInit && w.shouldSetClientEnable())
                        )
                    );
                }
                switch (h[0]) {
                    case "sendCustomCountLog":
                    case "sendCustomTimeLog":
                    case "emit":
                    case "send":
                        return void (w.shared.monitors.EmitMonitor
                            ? (t = w.shared.monitors.EmitMonitor).handOut.apply(
                                  t,
                                  _(h)
                              )
                            : w.instance("precollect", "emit", h));
                    case "precollect":
                        var v = w.shared.collect,
                            m = {
                                pid: w.baseClientConfig.commonParams.pid,
                                url: w.baseClientConfig.commonParams.url,
                                context:
                                    w.baseClientConfig.commonParams.context,
                            };
                        if ("sentry" === h[1])
                            return void v.sentry.push({
                                event: h[2],
                                params: m,
                            });
                        if ("error" !== h[1])
                            return void (
                                "emit" === h[1] &&
                                v.emit.push({ event: h[2], params: m })
                            );
                        if (!h[2] || !h[2][0]) return;
                        var g = h[2][0] || {};
                        return (
                            "error" === g.type &&
                                ((g.error || g.message) &&
                                    v.jsError.push({ event: g, params: m }),
                                null !== (n = g.target) &&
                                    void 0 !== n &&
                                    n.tagName &&
                                    v.staticError.push({
                                        event: g,
                                        params: m,
                                    })),
                            void (
                                "unhandledrejection" === g.type &&
                                v.jsError.push({ event: g, params: m })
                            )
                        );
                    case "Sentry":
                        var y,
                            b = h[1];
                        return void (
                            he(b) &&
                            ((y =
                                null ===
                                    (o =
                                        null === (r = w.shared.monitors) ||
                                        void 0 === r
                                            ? void 0
                                            : r.JSErrorMonitor) || void 0 === o
                                    ? void 0
                                    : o.getSentry())
                                ? b(y)
                                : w.instance("precollect", "sentry", h[1]))
                        );
                    case "report":
                        return void (w.client && w.client.uploadQueue());
                    case "performanceSend":
                        return void (
                            null !==
                                (s =
                                    null ===
                                        (a =
                                            null === (i = w.shared.monitors) ||
                                            void 0 === i
                                                ? void 0
                                                : i.PerformanceMonitor) ||
                                    void 0 === a
                                        ? void 0
                                        : a.send) &&
                            void 0 !== s &&
                            s.call(a)
                        );
                    case "performanceInit":
                        return void (
                            null !==
                                (c =
                                    null ===
                                        (u =
                                            null === (l = w.shared.monitors) ||
                                            void 0 === l
                                                ? void 0
                                                : l.PerformanceMonitor) ||
                                    void 0 === u
                                        ? void 0
                                        : u.initAsync) &&
                            void 0 !== c &&
                            c.call(u)
                        );
                    case "captureException":
                        return void w.instance("Sentry", function (t) {
                            t.captureException(h[1].error);
                        });
                    case "context":
                        return void (
                            w.client &&
                            null !== (p = h[1]) &&
                            void 0 !== p &&
                            p.call(h, w.client.contextAgent)
                        );
                    default:
                        return;
                }
            }),
            (this.changeReortType = function (t) {
                var e;
                (w.baseClientConfig.commonParams.report_type = t),
                    null !== (e = w.client) &&
                        void 0 !== e &&
                        e.updateConfig(w.baseClientConfig);
            }),
            (this.onClose = function () {
                var e, n;
                (e = w.onCloseReport),
                    (n = w.visibilityChange),
                    he(e) &&
                        (he(window.addEventListener) &&
                            (window.addEventListener("unload", e),
                            window.addEventListener("beforeunload", e),
                            window.addEventListener("pagehide", e)),
                        he(document.addEventListener) &&
                            document.addEventListener(
                                "visibilitychange",
                                function (t) {
                                    he(n)
                                        ? n(t)
                                        : "hidden" ===
                                              document.visibilityState && e(t);
                                }
                            ));
            }),
            (this.visibilityChange = function () {
                "hidden" === document.visibilityState && w.onCloseReport(),
                    "visible" === document.visibilityState &&
                        w.changeReortType("xhr");
            }),
            (this.onCloseReport = function () {
                var t;
                w.changeReortType("beacon"),
                    null !== (t = w.client) && void 0 !== t && t.uploadQueue();
            }),
            (this.baseClientConfig = Rn({
                commonParams: { version: this.version },
            })),
            (this.client = void 0),
            (this.configSetting = {}),
            (this.hasInit = !1),
            (this.shared = {
                config: this.baseClientConfig,
                instance: [],
                collect: { sentry: [], jsError: [], staticError: [], emit: [] },
                monitors: {},
            }),
            (this.baseParams = {
                bid: this.shared.config.commonParams.bid || "",
                pid: this.shared.config.commonParams.pid || "",
            }),
            (this.serverSetting = {
                cookieid: "9901a3e9-474e-41f5-8a28-23525ef9ef66",
                reportDomain: "i.snssdk.com",
                bid: "xigua_video_web_pc",
                plugins: {
                    spa: { enable: 0, type: "" },
                    behavior: {
                        enable: 0,
                        slardar_web_ids: [],
                        sample_rate: 0,
                        download_link:
                            "https://sf1-scmcdn-tos.pstatp.com/goofy/slardar/fe/sdk/plugins/behavior.3.5.5.cn.js",
                    },
                    sentry: {
                        enable: 1,
                        download_link:
                            "https://sf1-scmcdn-tos.pstatp.com/goofy/slardar/fe/sdk/plugins/sentry.3.5.5.cn.js",
                        behavior_enable: 0,
                        behavior_sample_rate: 0,
                        behavior_slardar_web_ids: [],
                    },
                    render: { enable: 2 },
                },
                setting: {
                    general: {
                        app_type_setting: {
                            app_type: [
                                {
                                    name: "default",
                                    create_by: "system",
                                    create_time: 1592732462,
                                    update_by: "",
                                    update_time: 0,
                                    condition: {
                                        field: "",
                                        op: "",
                                        values: [],
                                        is_default: true,
                                    },
                                    priority: 1,
                                    value: "0",
                                    setting_type: "int",
                                    setting_op: "=",
                                },
                            ],
                            app_type_spa: [
                                {
                                    name: "default",
                                    create_by: "system",
                                    create_time: 1592732462,
                                    update_by: "",
                                    update_time: 0,
                                    condition: {
                                        field: "",
                                        op: "",
                                        values: [],
                                        is_default: true,
                                    },
                                    priority: 1,
                                    value: "",
                                    setting_type: "string",
                                    setting_op: "=",
                                },
                            ],
                            app_render_type: [
                                {
                                    name: "default",
                                    create_by: "system",
                                    create_time: 1592732462,
                                    update_by: "",
                                    update_time: 0,
                                    condition: {
                                        field: "",
                                        op: "",
                                        values: [],
                                        is_default: true,
                                    },
                                    priority: 1,
                                    value: "2",
                                    setting_type: "int",
                                    setting_op: "=",
                                },
                            ],
                        },
                    },
                    page_view: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                    },
                    jserr: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        ignore_errors: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "[]",
                                setting_type: "string_array",
                                setting_op: "like",
                            },
                        ],
                        whitelist_urls: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "[]",
                                setting_type: "string_array",
                                setting_op: "like",
                            },
                        ],
                        blacklist_urls: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "[]",
                                setting_type: "string_array",
                                setting_op: "like",
                            },
                        ],
                        behavior_sample_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "0",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        download_link: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152589,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "",
                                setting_type: "string",
                                setting_op: "=",
                            },
                        ],
                    },
                    ajax: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1592735304,
                                update_by: "wangyiran.04",
                                update_time: 1592735455,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "0.05",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        request_sample_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1592735304,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        trace_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1592735304,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "0",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        enable_request_param_collect_on_error: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "false",
                                setting_type: "bool",
                                setting_op: "=",
                            },
                        ],
                    },
                    static_resource: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1592734752,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "0.1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                    },
                    performance: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1598152569,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                    },
                    flexible: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        event_name_sample_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                    },
                    static_err: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1593682110,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        error_sample_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1593682110,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                    },
                    behavior: {
                        enable_rate: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "1",
                                setting_type: "sample",
                                setting_op: "=",
                            },
                        ],
                        download_link: [
                            {
                                name: "default",
                                create_by: "system",
                                create_time: 1600143767,
                                update_by: "",
                                update_time: 0,
                                condition: {
                                    field: "",
                                    op: "",
                                    values: [],
                                    is_default: true,
                                },
                                priority: 1,
                                value: "",
                                setting_type: "string",
                                setting_op: "=",
                            },
                        ],
                    },
                },
                whitelist: [],
            });
    }
    var Qn,
        Wn = Pe;
    we() &&
        (((Wn = (Qn = new zn()).instance).version = Qn.version),
        (Wn.shared = Qn.shared),
        (Wn.SlardarBrowser = zn),
        (Wn._baseParams = Qn.baseParams),
        null !==
            (Dn =
                null ===
                    (Un =
                        null === (In = window.Slardar) || void 0 === In
                            ? void 0
                            : In.shared) || void 0 === Un
                    ? void 0
                    : Un.instance) &&
        void 0 !== Dn &&
        Dn.length
            ? (Wn = window.Slardar)
            : (null !== (Fn = window.Slardar) &&
                  void 0 !== Fn &&
                  Fn.q &&
                  (Wn.q = window.Slardar.q),
              null !== (Bn = window.Slardar) &&
                  void 0 !== Bn &&
                  Bn.globalPreCollectError &&
                  (Wn.globalPreCollectError =
                      window.Slardar.globalPreCollectError),
              null !== (Nn = window.Slardar) &&
                  void 0 !== Nn &&
                  Nn.i &&
                  (Wn.i = window.Slardar.i),
              null !== (Jn = window.Slardar) &&
                  void 0 !== Jn &&
                  Jn.lt &&
                  (Wn.lt = window.Slardar.lt),
              (window.Slardar = Wn)));
    var Vn,
        Gn,
        $n,
        Yn,
        Kn = Wn;
    function Zn() {
        var t = new zn(),
            e = t.instance;
        return (e.version = t.version), (e.shared = t.shared), e;
    }
    return (
        null !== (Vn = window.Slardar) &&
            void 0 !== Vn &&
            Vn.q &&
            (fe(($n = window.Slardar.q)) &&
                $n.forEach(function (t) {
                    Kn.apply(void 0, _(t));
                }),
            delete window.Slardar.q),
        null !== (Gn = window.Slardar) &&
            void 0 !== Gn &&
            Gn.i &&
            (fe((Yn = window.Slardar.i)) &&
                Yn.forEach(function (t) {
                    var e,
                        n = Zn();
                    t.q &&
                        (fe((e = t.q)) &&
                            e.forEach(function (t) {
                                n.apply(void 0, _(t));
                            }),
                        delete t.q),
                        (t.i = n);
                }),
            delete window.Slardar.i),
        (window.Slardar = Kn),
        (window.Slardar.SlardarBrowser = zn),
        (window.Slardar.createInstance = Zn),
        Kn
    );
})();
