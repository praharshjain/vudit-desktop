(function (t) {
    function e(e) {
        for (
            var s, o, i = e[0], l = e[1], c = e[2], u = 0, p = [];
            u < i.length;
            u++
        )
            (o = i[u]),
                Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]),
                (n[o] = 0);
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        d && d(e);
        while (p.length) p.shift()();
        return r.push.apply(r, c || []), a();
    }
    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, i = 1; i < a.length; i++) {
                var l = a[i];
                0 !== n[l] && (s = !1);
            }
            s && (r.splice(e--, 1), (t = o((o.s = a[0]))));
        }
        return t;
    }
    var s = {},
        n = { app: 0 },
        r = [];
    function o(e) {
        if (s[e]) return s[e].exports;
        var a = (s[e] = { i: e, l: !1, exports: {} });
        return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = t),
        (o.c = s),
        (o.d = function (t, e, a) {
            o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
        }),
        (o.r = function (t) {
            "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (o.t = function (t, e) {
            if ((1 & e && (t = o(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (
                (o.r(a),
                    Object.defineProperty(a, "default", { enumerable: !0, value: t }),
                    2 & e && "string" != typeof t)
            )
                for (var s in t)
                    o.d(
                        a,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return a;
        }),
        (o.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                        return t["default"];
                    }
                    : function () {
                        return t;
                    };
            return o.d(e, "a", e), e;
        }),
        (o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (o.p = "");
    var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = i.push.bind(i);
    (i.push = e), (i = i.slice());
    for (var c = 0; c < i.length; c++) e(i[c]);
    var d = l;
    r.push([0, "chunk-vendors"]), a();
})({
    0: function (t, e, a) {
        t.exports = a("cd49");
    },
    "00df": function (t, e, a) {
        "use strict";
        a("f8c8");
    },
    "0a17": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".td-value{overflow-x:auto}.td-value-max-width{max-width:1500px}",
                "",
            ]),
            (t.exports = e);
    },
    "0c34": function (t, e, a) {
        var s = a("c8d2");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("7a7e7e41", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0dca": function (t, e, a) {
        "use strict";
        a("1f5b");
    },
    1922: function (t, e, a) {
        "use strict";
        a("fcaa");
    },
    "1a5c": function (t, e, a) {
        "use strict";
        a("24e8");
    },
    "1e1c": function (t, e, a) {
        "use strict";
        a("d580");
    },
    "1e2b": function (t, e, a) {
        "use strict";
        a("dd55");
    },
    "1f5b": function (t, e, a) {
        var s = a("6b0c");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("7b9c40cc", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "24e8": function (t, e, a) {
        var s = a("efa7");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("17a2c8d6", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    2615: function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".wrapper[data-v-59753538]{overflow:auto;height:100%}.item-root[data-v-59753538]{margin-left:0!important}",
                "",
            ]),
            (t.exports = e);
    },
    "2ff7": function (t, e, a) {
        "use strict";
        a("ca8f");
    },
    "310c": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".tdv-tbl-top{display:flex;justify-content:space-between}.tdv-tbl-toolbar{display:flex;flex-grow:2;justify-content:flex-end;flex-wrap:wrap;float:right}.tdv-tbl-title{display:inline}.tdv-table{margin:0 auto;width:100%;height:100%}.tdv-th{white-space:nowrap}.tdv-min{width:1%}.table th,.tdv-table * .table td{padding:.25rem}.tdv-table * pre{white-space:pre;margin-bottom:0}.tdv-table * .clearfix{margin-bottom:0!important;position:sticky;top:0}.tdv-table * div[name=SimpleTable]{overflow:scroll}.thead>td{position:sticky;top:0}.tdv-td{padding:2px!}.tdv-table * .col-sm-6{padding-right:0;padding-left:0}.tdv-table * .row{margin-right:0;margin-left:0}.tdv-table * .-page-size-select{display:inline-block;width:70px;font-size:small}",
                "",
            ]),
            (t.exports = e);
    },
    "3af4": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ef0"),
            lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                lodash__WEBPACK_IMPORTED_MODULE_0__
            ),
            _Vue2DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d82a"),
            treedoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6c22"),
            treedoc__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
                treedoc__WEBPACK_IMPORTED_MODULE_2__
            ),
            _models_TableUtil__WEBPACK_IMPORTED_MODULE_3__ =
                __webpack_require__("3f6a");
        __webpack_exports__["a"] = {
            filter(opt) {
                if (
                    ((opt.filteredData = opt.rawData),
                        opt.columns.forEach((t) => {
                            const e = t.field,
                                a = opt.query[t.field];
                            a &&
                                (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(a)
                                    ? (opt.filteredData = opt.filteredData.filter((t) =>
                                        a.includes(t[e])
                                    ))
                                    : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(a)
                                        ? (opt.filteredData = opt.filteredData.filter(
                                            (t) =>
                                                t[e] &&
                                                ("" + t[e]).toLowerCase().includes(a.toLowerCase())
                                        ))
                                        : console.log("Unknown query: " + JSON.stringify(a)),
                                    t.visible || opt.filteredData.forEach((e) => delete e[t.field]));
                        }),
                        opt.query.jsQuery &&
                        opt.query.jsQuery !==
                        _Vue2DataTable__WEBPACK_IMPORTED_MODULE_1__["a"])
                ) {
                    const func = "$=> " + opt.query.jsQuery;
                    try {
                        const filterFunc = eval(func);
                        opt.filteredData = opt.filteredData.filter((t) =>
                            filterFunc(
                                _models_TableUtil__WEBPACK_IMPORTED_MODULE_3__[
                                    "a"
                                ].rowToMapWithAllFields(t, opt)
                            )
                        );
                    } catch (e) {
                        console.error("Error evaluate JSQuery:" + func), console.error(e);
                    }
                }
                const q = opt.query;
                if (
                    ((opt.total = opt.filteredData.length),
                        q.offset >= opt.total &&
                        (q.offset = Math.max(0, opt.total - q.limit)),
                        opt.query.sort)
                ) {
                    const t = (t) => {
                        const e = t[q.sort];
                        return e instanceof
                            treedoc__WEBPACK_IMPORTED_MODULE_2__["TDNode"] &&
                            void 0 !== e.value
                            ? e.value
                            : e;
                    };
                    opt.filteredData =
                        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(
                            opt.filteredData,
                            t,
                            q.order
                        );
                }
                const end =
                    void 0 !== q.offset && q.limit ? q.offset + q.limit : void 0;
                return (opt.data = opt.filteredData.slice(q.offset, end));
            },
        };
    },
    "3b11": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".title{text-align:center;color:#00008b}.components-container{display:flex;position:absolute;flex-direction:column;margin-left:2px;width:99%;height:98%}html{height:100%}body{min-height:100%}.inputline{display:flex;align-items:center;float:right}.json-tree-table{height:100%}#icons{float:right}",
                "",
            ]),
            (t.exports = e);
    },
    "3f6a": function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return n;
        });
        var s = a("6c22");
        class n {
            static rowsToObject(t, e) {
                const a = {};
                return t.forEach((t) => (a[t["@key"]] = this.rowToObject(t, e))), a;
            }
            static rowToObject(t, e) {
                if (t["@value"]) return this.valToObject(t["@value"]);
                const a = {};
                for (const s of e.columns)
                    "@key" !== s.field &&
                        "#" !== s.field &&
                        s.visible &&
                        (a[s.field] = this.valToObject(t[s.field]));
                return a;
            }
            static rowToMapWithAllFields(t, e) {
                return s["ListUtil"].map(t, s["identity"], this.valToObject);
            }
            static valToObject(t) {
                return t instanceof s["TDNode"] ? t.toObject(!1, !1) : t;
            }
            static toCSV(t) {
                return s["CSVWriter"].instance.writeAsString(
                    s["TDObjectCoder"].encode(t)
                );
            }
        }
    },
    "47e8": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".breadcrumb.jsonpath{margin-bottom:auto;padding:.3em}",
                "",
            ]),
            (t.exports = e);
    },
    "4ed7": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                '.item[data-v-48d2eaad]{font-size:14px;margin-left:18px}.node[data-v-48d2eaad]{cursor:pointer;position:relative}.leaf[data-v-48d2eaad],.node[data-v-48d2eaad]{white-space:nowrap}.key-with-chevron[data-v-48d2eaad]{padding-left:14px}.key-with-chevron.opened[data-v-48d2eaad]:before{top:4px;transform:rotate(90deg);-webkit-transform:rotate(90deg)}.key-with-chevron[data-v-48d2eaad]:before{color:#444;content:"\\25b6";font-size:10px;left:1px;position:absolute;top:3px;transition:transform .1s ease;-webkit-transition:-webkit-transform .1s ease}.selected[data-v-48d2eaad]{background-color:#ffc107}',
                "",
            ]),
            (t.exports = e);
    },
    5263: function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return s;
        });
        class s {
            static nonBlankStartsWith(t, e, a = 1e3) {
                for (let s = 0; s < a && s < t.length; s++)
                    if (!this.isBlank(t[s])) {
                        for (const a of e) if (t.startsWith(a, s)) return !0;
                        return !1;
                    }
                return !1;
            }
            static nonBlankEndsWith(t, e, a = 1e3) {
                for (let s = t.length - 1; s >= 0 && s > t.length - a; s--)
                    if (!this.isBlank(t[s])) {
                        for (const a of e) if (t.endsWith(a, s + 1)) return !0;
                        return !1;
                    }
                return !1;
            }
            static isBlank(t) {
                return " \n\r\t".indexOf(t) >= 0;
            }
            static topLines(t, e) {
                const a = { length: -1, numLines: 0 };
                for (let s = Math.min(t.length, e); s >= 0; s--)
                    "\n" === t[s] && (a.length < 0 && (a.length = s + 1), a.numLines++);
                return a;
            }
            static doIf(t, e) {
                t && e();
            }
        }
    },
    "5d75": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".filter-header{display:inline}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:searchfield-cancel-button;cursor:pointer}.has-keyword{color:green}.jsontable-head{font-size:1rem}",
                "",
            ]),
            (t.exports = e);
    },
    "5f64": function (t, e, a) {
        "use strict";
        a("0c34");
    },
    6228: function (t, e, a) {
        "use strict";
        a("9a4c");
    },
    "656a": function (t, e, a) {
        "use strict";
        a("9d1c");
    },
    "6b0c": function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".expand_level[data-v-d2023dee]{width:16px;padding-left:0;padding-right:0;text-align:center}",
                "",
            ]),
            (t.exports = e);
    },
    "81c3": function (t, e, a) {
        var s = a("5d75");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("7b2a1028", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    9536: function (t, e, a) {
        "use strict";
        var s = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a(
                "span",
                { staticClass: "value" },
                [
                    t.ref
                        ? [
                            a(
                                "a",
                                {
                                    attrs: { href: "#" },
                                    on: {
                                        click: function (e) {
                                            return (
                                                e.stopPropagation(),
                                                t.$emit("node-clicked", t.refAbsolute)
                                            );
                                        },
                                    },
                                },
                                [t._v(t._s(t.ref))]
                            ),
                        ]
                        : t.url
                            ? [
                                a("a", { attrs: { href: t.url, target: "_blank" } }, [
                                    t._v(t._s(t.url)),
                                ]),
                            ]
                            : t.isInTable
                                ? [
                                    a(
                                        "pre",
                                        {
                                            staticClass: "tdv-value",
                                            class: t.valueStyle,
                                            style: { "white-space": t.whiteSpaceStyle },
                                        },
                                        [
                                            t._v(t._s(t.tnode.value) + " "),
                                            a("span", { staticClass: "tdv-hint" }, [
                                                t._v(t._s(t.date)),
                                            ]),
                                        ]
                                    ),
                                ]
                                : [
                                    a("span", { class: t.valueStyle }, [
                                        t._v(t._s(t.tnode.value)),
                                    ]),
                                    t._v(" "),
                                    a("span", { staticClass: "tdv-hint" }, [t._v(t._s(t.date))]),
                                ],
                ],
                2
            );
        },
            n = [],
            r = a("9ab4"),
            o = a("60a3"),
            i = a("e421"),
            l = a("2ef0"),
            c = a.n(l);
        let d = class extends o["c"] {
            get ref() {
                return this.tnode.key !== i["a"].KEY_REF ||
                    "string" !== typeof this.tnode.value
                    ? null
                    : this.tnode.value;
            }
            get date() {
                const t = Number(this.tnode.value);
                return c.a.isNumber(t) && t > 3155328e5 && t < 22089888e5
                    ? "\n" + new Date(t).toISOString()
                    : null;
            }
            get refAbsolute() {
                let t = this.ref;
                return (
                    t &&
                    t.startsWith("../") &&
                    (t = this.tnode.parent.pathAsString + "/" + t),
                    t
                );
            }
            get url() {
                const t = this.tnode.value;
                if (
                    "string" === typeof t &&
                    (t.startsWith("http://") || t.startsWith("https://"))
                )
                    return t;
            }
            get valueStyle() {
                return "string" === typeof this.tnode.value ? "string" : "number";
            }
            get whiteSpaceStyle() {
                return this.textWrap ? "pre-wrap" : "pre";
            }
        };
        Object(r["a"])([Object(o["b"])()], d.prototype, "tnode", void 0),
            Object(r["a"])(
                [Object(o["b"])({ required: !1, default: !1 })],
                d.prototype,
                "isInTable",
                void 0
            ),
            Object(r["a"])(
                [Object(o["b"])({ required: !1, default: !1 })],
                d.prototype,
                "textWrap",
                void 0
            ),
            (d = Object(r["a"])([o["a"]], d));
        var u = d,
            p = u,
            h = (a("adab"), a("2877")),
            m = Object(h["a"])(p, s, n, !1, null, null, null);
        e["a"] = m.exports;
    },
    9783: function (t, e, a) {
        "use strict";
        var s = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("div", { staticClass: "item" }, [
                t.isSimpleType
                    ? a(
                        "div",
                        [
                            a("span", { staticClass: "key" }, [t._v(t._s(t.tnode.key))]),
                            t._v(": "),
                            a("simple-value", {
                                attrs: { tnode: t.tnode },
                                on: {
                                    "node-clicked": function (e) {
                                        return t.bubbleEvent(e, "node-clicked");
                                    },
                                },
                            }),
                        ],
                        1
                    )
                    : a(
                        "div",
                        { staticClass: "leaf" },
                        [
                            a(
                                "div",
                                {
                                    staticClass: "node",
                                    on: {
                                        click: function (e) {
                                            return e.stopPropagation(), t.toggleOpen();
                                        },
                                    },
                                },
                                [
                                    a(
                                        "span",
                                        {
                                            staticClass: "key key-with-chevron",
                                            class: { opened: t.open, selected: t.selected },
                                        },
                                        [
                                            a(
                                                "a",
                                                {
                                                    attrs: { href: "#" },
                                                    on: {
                                                        click: function (e) {
                                                            return (
                                                                e.stopPropagation(),
                                                                t.$emit(
                                                                    "node-clicked",
                                                                    [""].concat(t.tnode.path)
                                                                )
                                                            );
                                                        },
                                                        mouseenter: t.mouseEnter,
                                                        mouseleave: t.mouseLeave,
                                                    },
                                                },
                                                [t._v(" " + t._s(t.tnode.key) + " ")]
                                            ),
                                        ]
                                    ),
                                    a("span", { staticClass: "tdv-hint" }, [
                                        t._v(t._s(t.label)),
                                    ]),
                                ]
                            ),
                            t._l(t.tnode.children, function (e) {
                                return [
                                    a(
                                        "keep-alive",
                                        { key: e.key },
                                        [
                                            t.open
                                                ? a("tree-view-item", {
                                                    key: e.key,
                                                    ref: "children",
                                                    refInFor: !0,
                                                    attrs: {
                                                        currentLevel: t.currentLevel + 1,
                                                        expandState: t.expandState,
                                                        tnode: e,
                                                    },
                                                    on: {
                                                        "node-clicked": function (e) {
                                                            return t.bubbleEvent(e, "node-clicked");
                                                        },
                                                    },
                                                })
                                                : t._e(),
                                        ],
                                        1
                                    ),
                                ];
                            }),
                        ],
                        2
                    ),
            ]);
        },
            n = [],
            r = a("9ab4"),
            o = a("60a3"),
            i = a("6c22"),
            l = a("9e6f"),
            c = a("9536"),
            d = a("e421"),
            u = a("5263");
        class p {
            constructor(t, e) {
                (this.nodePath = t), (this.source = e);
            }
        }
        let h = class extends o["c"] {
            constructor() {
                super(...arguments),
                    (this.open = !1),
                    (this.selected = !1),
                    (this.mouseOver = !1);
            }
            toggleOpen() {
                this.open = !this.open;
            }
            get isSimpleType() {
                return this.tnode.type === i["TDNodeType"].SIMPLE;
            }
            get label() {
                return d["a"].getTypeSizeLabel(
                    this.tnode,
                    !this.open && this.expandState.showChildrenSummary
                );
            }
            watchSelected(t) {
                t && this.$el.scrollIntoView({ block: "nearest" });
            }
            selectNode(t, e, a) {
                e !== t.length
                    ? ((this.open = !0),
                        this.$nextTick(() => {
                            for (const s of this.$refs.children)
                                s.tnode.key === t[e] && s.selectNode(t, e + 1, a);
                        }))
                    : a(this);
            }
            watchExpandState() {
                if (this.tnode.isLeaf()) return;
                const t = this.expandState;
                (this.open = t.fullyExpand || this.currentLevel < t.expandLevel),
                    t.fullyExpand
                        ? this.currentLevel + 1 > t.expandLevel &&
                        (t.expandLevel = this.currentLevel + 1)
                        : t.moreLevel ||
                        (this.currentLevel > t.expandLevel - 1 && (t.moreLevel = !0));
            }
            bubbleEvent(t, e) {
                this.$emit(e, t);
            }
            mouseEnter(t) {
                (this.mouseOver = !0),
                    setTimeout(
                        () =>
                            u["a"].doIf(this.mouseOver, () =>
                                this.$el.dispatchEvent(
                                    new CustomEvent("node-mouse-enter", {
                                        detail: new p(this.tnode.pathAsString, t.target),
                                        bubbles: !0,
                                        composed: !0,
                                    })
                                )
                            ),
                        500
                    );
            }
            mouseLeave(t) {
                (this.mouseOver = !1),
                    setTimeout(
                        () =>
                            this.$el.dispatchEvent(
                                new CustomEvent("node-mouse-leave", {
                                    detail: new p(this.tnode.pathAsString, t.target),
                                    bubbles: !0,
                                    composed: !0,
                                })
                            ),
                        500
                    );
            }
        };
        Object(r["a"])([Object(o["b"])()], h.prototype, "tnode", void 0),
            Object(r["a"])([Object(o["b"])()], h.prototype, "currentLevel", void 0),
            Object(r["a"])([Object(o["b"])()], h.prototype, "modifiable", void 0),
            Object(r["a"])(
                [Object(o["b"])({ default: () => new l["a"]() })],
                h.prototype,
                "expandState",
                void 0
            ),
            Object(r["a"])(
                [Object(o["d"])("selected")],
                h.prototype,
                "watchSelected",
                null
            ),
            Object(r["a"])(
                [Object(o["d"])("expandState", { immediate: !0, deep: !0 })],
                h.prototype,
                "watchExpandState",
                null
            ),
            (h = Object(r["a"])(
                [Object(o["a"])({ components: { SimpleValue: c["a"] } })],
                h
            ));
        var m = h,
            f = m,
            v = (a("656a"), a("2877")),
            b = Object(v["a"])(f, s, n, !1, null, "48d2eaad", null);
        e["a"] = b.exports;
    },
    "9a4c": function (t, e, a) {
        var s = a("3b11");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("0a65402d", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9d1c": function (t, e, a) {
        var s = a("4ed7");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("24906f20", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9e6f": function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return i;
        });
        var s = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a("b-button-group", { staticClass: "ml-1" }, [
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Collapse all" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                attrs: { size: "sm", disabled: !t.canCollapse() },
                                on: {
                                    click: function (e) {
                                        return t.collapseAll();
                                    },
                                },
                            },
                            [t._v("«")]
                        ),
                    ],
                    1
                ),
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Collapse one level" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                attrs: { size: "sm", disabled: !t.canCollapse() },
                                on: {
                                    click: function (e) {
                                        return t.collapse();
                                    },
                                },
                            },
                            [t._v("‹")]
                        ),
                    ],
                    1
                ),
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Current expand level" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                staticClass: "expand_level",
                                attrs: { size: "sm", disabled: !0 },
                            },
                            [t._v(t._s(t.state.expandLevel))]
                        ),
                    ],
                    1
                ),
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Expand one level" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                attrs: { size: "sm", disabled: !t.canExpand() },
                                on: {
                                    click: function (e) {
                                        return t.expend();
                                    },
                                },
                            },
                            [t._v("›")]
                        ),
                    ],
                    1
                ),
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Expand all" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                attrs: { size: "sm", disabled: !t.canExpand() },
                                on: {
                                    click: function (e) {
                                        return t.expendAll();
                                    },
                                },
                            },
                            [t._v("»")]
                        ),
                    ],
                    1
                ),
                a(
                    "span",
                    {
                        directives: [
                            {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: !0 },
                            },
                        ],
                        attrs: { title: "Toggle show children summary" },
                    },
                    [
                        a(
                            "b-btn",
                            {
                                attrs: {
                                    size: "sm",
                                    variant: "outline-secondary",
                                    pressed: t.state.showChildrenSummary,
                                },
                                on: {
                                    "update:pressed": function (e) {
                                        return t.$set(t.state, "showChildrenSummary", e);
                                    },
                                },
                            },
                            [t._v("s")]
                        ),
                    ],
                    1
                ),
            ]);
        },
            n = [],
            r = a("9ab4"),
            o = a("60a3");
        class i {
            constructor(t = 1, e = 1, a = !0) {
                (this.expandLevel = t),
                    (this.minLevel = e),
                    (this.showChildrenSummary = a),
                    (this.fullyExpand = !1),
                    (this.moreLevel = !1);
            }
        }
        let l = class extends o["c"] {
            collapse() {
                this.state.expandLevel > this.state.minLevel &&
                    this.state.expandLevel--,
                    (this.state.fullyExpand = !1);
            }
            collapseAll() {
                (this.state.expandLevel = this.state.minLevel),
                    (this.state.fullyExpand = !1);
            }
            canCollapse() {
                return (
                    this.state.expandLevel > this.state.minLevel || this.state.fullyExpand
                );
            }
            expend() {
                (this.state.moreLevel = !1), this.state.expandLevel++;
            }
            expendAll() {
                (this.state.moreLevel = !1), (this.state.fullyExpand = !0);
            }
            canExpand() {
                return this.state.moreLevel;
            }
        };
        Object(r["a"])([Object(o["b"])()], l.prototype, "state", void 0),
            (l = Object(r["a"])([o["a"]], l));
        var c = l,
            d = c,
            u = (a("0dca"), a("2877")),
            p = Object(u["a"])(d, s, n, !1, null, "d2023dee", null);
        e["b"] = p.exports;
    },
    a604: function (t, e, a) {
        "use strict";
        a("81c3");
    },
    ad23: function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".CodeMirror{height:100%;font-size:small}.textArea{width:100%;min-height:400px;height:100%;resize:none;flex-grow:1;overflow:auto}",
                "",
            ]),
            (t.exports = e);
    },
    adab: function (t, e, a) {
        "use strict";
        a("d276");
    },
    c8d2: function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([t.i, ".tdv_key[data-v-d93b97b2]{white-space:nowrap}", ""]),
            (t.exports = e);
    },
    ca8f: function (t, e, a) {
        var s = a("0a17");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("69e4e6de", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cd49: function (t, e, a) {
        "use strict";
        a.r(e);
        a("f9e3"), a("2dd8"), a("7f10");
        var s = a("2b0e"),
            n = a("8c4f"),
            r = a("358c"),
            o = a("5f5b"),
            i = a("2d60"),
            l = a.n(i),
            c = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("router-view");
            },
            d = [],
            u = a("60a3");
        class p extends u["c"] { }
        var h,
            m = p,
            f = a("2877"),
            v = Object(f["a"])(m, c, d, !1, null, null, null),
            b = v.exports,
            _ = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "components-container", attrs: { id: "app" } },
                    [
                        a(
                            "json-tree-table",
                            {
                                ref: "jsonTreeTable",
                                staticClass: "json-tree-table",
                                attrs: {
                                    data: t.jsonData,
                                    "inital-path": t.param.initialPath || "/",
                                    options: t.tdvOption,
                                    rootObjectKey: "root",
                                },
                                scopedSlots: t._u([
                                    {
                                        key: "title",
                                        fn: function () {
                                            return [];
                                        },
                                        proxy: !0,
                                    },
                                ]),
                            },
                        ),
                    ],
                    1
                );
            },
            y = [],
            g = a("9ab4"),
            w = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "tdv-container" }, [
                    a(
                        "div",
                        { staticClass: "tdv-top" },
                        [
                            t._t("title"),
                            a(
                                "b-button-group",
                                { staticClass: "ml-1 tdv-toolbar" },
                                [
                                    a(
                                        "b-btn",
                                        {
                                            directives: [
                                                {
                                                    name: "b-tooltip",
                                                    rawName: "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                },
                                            ],
                                            staticClass: "tdv",
                                            attrs: {
                                                size: "sm",
                                                disabled: !t.jsonStr,
                                                title: "Copy",
                                            },
                                            on: {
                                                click: function (e) {
                                                    return t.copyText(t.jsonStr);
                                                },
                                            },
                                        },
                                        [a("i", { staticClass: "fa fa-copy" })]
                                    ),
                                    t.pasteSupported
                                        ? a(
                                            "b-btn",
                                            {
                                                directives: [
                                                    {
                                                        name: "b-tooltip",
                                                        rawName: "v-b-tooltip.hover",
                                                        modifiers: { hover: !0 },
                                                    },
                                                ],
                                                attrs: { size: "sm", title: "Paste" },
                                                on: { click: t.paste },
                                            },
                                            [a("i", { staticClass: "fa fa-paste" })]
                                        )
                                        : t._e(),
                                    a(
                                        "b-btn",
                                        {
                                            directives: [
                                                {
                                                    name: "b-tooltip",
                                                    rawName: "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                },
                                            ],
                                            staticClass: "tdv",
                                            attrs: {
                                                size: "sm",
                                                variant: "outline-secondary",
                                                pressed: t.tstate.codeView[0],
                                                title: "Toggle source code syntax hi-lighting",
                                            },
                                            on: {
                                                "update:pressed": function (e) {
                                                    return t.$set(t.tstate.codeView, 0, e);
                                                },
                                            },
                                        },
                                        [a("i", { staticClass: "fa fa-code" })]
                                    ),
                                    a(
                                        "b-btn",
                                        {
                                            directives: [
                                                {
                                                    name: "b-tooltip",
                                                    rawName: "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                },
                                            ],
                                            attrs: { size: "sm", title: "Format" },
                                            on: { click: t.format },
                                        },
                                        [a("i", { staticClass: "fa fa-indent" })]
                                    ),
                                ],
                                1
                            ),
                            a(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                    a(
                                        "b-btn",
                                        {
                                            staticClass: "tdv",
                                            attrs: {
                                                size: "sm",
                                                variant: "outline-secondary",
                                                pressed: t.tstate.showSource[0],
                                            },
                                            on: {
                                                "update:pressed": function (e) {
                                                    return t.$set(t.tstate.showSource, 0, e);
                                                },
                                            },
                                        },
                                        [t._v("Source")]
                                    ),
                                    a(
                                        "b-btn",
                                        {
                                            staticClass: "tdv",
                                            attrs: {
                                                size: "sm",
                                                variant: "outline-secondary",
                                                pressed: t.tstate.showTree[0],
                                            },
                                            on: {
                                                "update:pressed": function (e) {
                                                    return t.$set(t.tstate.showTree, 0, e);
                                                },
                                            },
                                        },
                                        [t._v("Tree")]
                                    ),
                                    a(
                                        "b-btn",
                                        {
                                            staticClass: "tdv",
                                            attrs: {
                                                size: "sm",
                                                variant: "outline-secondary",
                                                pressed: t.tstate.showTable[0],
                                            },
                                            on: {
                                                "update:pressed": function (e) {
                                                    return t.$set(t.tstate.showTable, 0, e);
                                                },
                                            },
                                        },
                                        [t._v("Table")]
                                    ),
                                    t.parserSelectOptions.length > 1
                                        ? [
                                            t._v("Parser "),
                                            a("b-form-select", {
                                                attrs: { options: t.parserSelectOptions, size: "sm" },
                                                model: {
                                                    value: t.selectedParser,
                                                    callback: function (e) {
                                                        t.selectedParser = e;
                                                    },
                                                    expression: "selectedParser",
                                                },
                                            }),
                                        ]
                                        : t._e(),
                                ],
                                2
                            ),
                            a("span", [t._t("default")], 2),
                            a(
                                "span",
                                { staticClass: "status-msg", class: { error: t.hasError } },
                                [t._v(t._s(t.parseResult))]
                            ),
                        ],
                        2
                    ),
                    a(
                        "div",
                        { staticClass: "split-container" },
                        [
                            a(
                                "msplit",
                                {
                                    attrs: { maxPane: t.tstate.maxPane },
                                    nativeOn: {
                                        "node-mouse-enter": function (e) {
                                            return e.stopPropagation(), t.nodeMouseEnter(e);
                                        },
                                        "node-mouse-leave": function (e) {
                                            return e.stopPropagation(), t.nodeMouseLeave(e);
                                        },
                                    },
                                },
                                [
                                    a(
                                        "div",
                                        {
                                            staticClass: "panview",
                                            staticStyle: { width: "100%" },
                                            attrs: {
                                                slot: "source",
                                                grow: 20,
                                                show: t.tstate.showSource,
                                            },
                                            slot: "source",
                                        },
                                        [
                                            a("SourceView", {
                                                ref: "sourceView",
                                                attrs: {
                                                    syntax: t.selectedParser.syntax,
                                                    selection: t.tstate.selection,
                                                    show: t.tstate.showSource[0],
                                                    useCodeView: t.tstate.codeView,
                                                },
                                                model: {
                                                    value: t.jsonStr,
                                                    callback: function (e) {
                                                        t.jsonStr = e;
                                                    },
                                                    expression: "jsonStr",
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    a(
                                        "div",
                                        {
                                            staticClass: "panview",
                                            attrs: {
                                                slot: "tree",
                                                grow: 30,
                                                show: t.tstate.showTree,
                                            },
                                            slot: "tree",
                                        },
                                        [
                                            t.tstate.tree
                                                ? a("tree-view", {
                                                    attrs: {
                                                        tstate: t.tstate,
                                                        "expand-level": 1,
                                                        rootObjectKey: t.rootObjectKey,
                                                    },
                                                })
                                                : a("div", [t._v("No Data")]),
                                        ],
                                        1
                                    ),
                                    a(
                                        "div",
                                        {
                                            staticClass: "panview",
                                            attrs: {
                                                slot: "table",
                                                grow: 50,
                                                show: t.tstate.showTable,
                                            },
                                            slot: "table",
                                        },
                                        [
                                            t.tstate.tree
                                                ? a(
                                                    "div",
                                                    [
                                                        a("json-table", {
                                                            attrs: {
                                                                "table-data": t.tstate,
                                                                isInMuliPane: "true",
                                                            },
                                                            on: { "node-clicked": t.nodeClicked },
                                                        }),
                                                    ],
                                                    1
                                                )
                                                : a("div", [t._v("No Data")]),
                                        ]
                                    ),
                                ]
                            ),
                        ],
                        1
                    ),
                    a(
                        "div",
                        {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.mouseInNode || !0 === t.mouseInActionBar,
                                    expression: "mouseInNode || mouseInActionBar === true",
                                },
                            ],
                            style: t.treeItemActionStyle,
                            attrs: { id: "treeItemActions" },
                            on: {
                                mouseenter: t.mouseEnterActionBar,
                                mouseleave: t.mouseLeaveActionBar,
                            },
                        },
                        [
                            a(
                                "b-button-group",
                                { staticClass: "mx-1" },
                                [
                                    a(
                                        "b-btn",
                                        {
                                            directives: [
                                                {
                                                    name: "b-tooltip",
                                                    rawName: "v-b-tooltip.hover",
                                                    modifiers: { hover: !0 },
                                                },
                                            ],
                                            staticClass: "tdv",
                                            attrs: { size: "sm", title: "Copy Current Node" },
                                            on: { click: t.copyNode },
                                        },
                                        [a("i", { staticClass: "fa fa-copy" })]
                                    ),
                                ],
                                1
                            ),
                        ],
                        1
                    ),
                    a("textarea", {
                        ref: "copyTextArea",
                        staticClass: "hiddenTextArea nowrap",
                    }),
                ]);
            },
            O = [],
            x = a("2ef0"),
            T = a.n(x),
            S = a("6c22");
        class C {
            constructor() {
                (this.items = []), (this.pos = -1);
            }
            canBack() {
                return this.pos > 0;
            }
            back() {
                return this.canBack() ? this.items[--this.pos] : null;
            }
            canForward() {
                return this.pos < this.items.length - 1;
            }
            forward() {
                return this.canForward() ? this.items[++this.pos] : null;
            }
            append(t) {
                (this.items.length = ++this.pos), this.items.push(t);
            }
        }
        (function (t) {
            (t[(t["SUCCESS"] = 0)] = "SUCCESS"),
                (t[(t["WARN"] = 1)] = "WARN"),
                (t[(t["ERROR"] = 2)] = "ERROR");
        })(h || (h = {}));
        class j {
            constructor() {
                (this.status = h.SUCCESS), (this.message = "");
            }
        }
        class k {
            constructor() {
                this.defaultTableOpt = {
                    tblClass: "table-bordered",
                    pageSizeOptions: [5, 20, 50, 100, 200, 500],
                    columns: [],
                    data: [],
                    filteredData: [],
                    rawData: [],
                    total: 0,
                    query: { limit: 100, offset: 0 },
                    xprops: { tstate: null },
                };
            }
            setParsers(t) {
                return (this.parsers = t), this;
            }
        }
        var E = a("8f3c"),
            P = a.n(E),
            D = a("5263");
        class M {
            constructor(t = "XML", e = "text/xml", a = !1) {
                (this.name = t),
                    (this.mineType = e),
                    (this.compact = a),
                    (this.option = {}),
                    (this.syntax = "xml");
            }
            looksLike(t) {
                return (
                    D["a"].nonBlankStartsWith(t, ["<"]) &&
                    D["a"].nonBlankEndsWith(t, [">"])
                );
            }
            parse(t) {
                const e = new j();
                try {
                    const a = new DOMParser().parseFromString(t.trim(), this.mineType),
                        s = a.childNodes.length < 2 ? a.childNodes[0] : a;
                    let n = this.docToObj(s);
                    return (
                        this.compact &&
                        (n = { [n.tag || n.name]: this.compactToObject(n) }),
                        (e.result = S["TDObjectCoder"].get().encode(n)),
                        (e.message = "DOMParser().parseFromString()"),
                        e
                    );
                } catch (a) {
                    return (e.message = "Error:" + a.message), console.error(a), e;
                }
            }
            docToObj(t) {
                const e = {};
                return (
                    (e.type = t.constructor.name),
                    t instanceof Element
                        ? ((e.tag = t.tagName),
                            t.getAttributeNames &&
                            t.getAttributeNames().forEach((a) => {
                                (e.attr = e.attr || {}), (e.attr[a] = t.getAttribute(a));
                            }))
                        : ((e.name = t.nodeName), (e.value = t.nodeValue)),
                    t.childNodes &&
                    t.childNodes.forEach((t) => {
                        t instanceof Text
                            ? t.textContent &&
                            t.textContent.trim() &&
                            (e.text = (e.text || "") + t.textContent)
                            : ((e.children = e.children || []),
                                e.children.push(this.docToObj(t)));
                    }),
                    e
                );
            }
            addToMap(t, e, a) {
                let s = t[e];
                s || ((s = []), (t[e] = s)), s.push(a);
            }
            compactToObject(t) {
                if (!t.attr && !t.children) return t.text;
                const e = {};
                t.attr &&
                    Object.keys(t.attr).forEach((a) => {
                        this.addToMap(e, a, t.attr[a]);
                    });
                const a = [];
                t.children &&
                    t.children.forEach((t) => {
                        if (!t.tag)
                            return (
                                console.log(
                                    `c.type=${t.type}, c.value=${t.value}, c.name=${t.name}`
                                ),
                                void ("ProcessingInstruction" === t.type
                                    ? this.addToMap(e, "?" + t.name, t.value)
                                    : t.value
                                        ? a.push(t.value)
                                        : console.error("unknown node: " + t))
                            );
                        let s = this.compactToObject(t);
                        a.length > 0 &&
                            (T.a.isObject(s)
                                ? (s["@comments"] = [...a])
                                : (s = { "@comments": [...a], "@val": s }),
                                (a.length = 0)),
                            this.addToMap(e, t.tag, s);
                    });
                const s = {};
                return (
                    Object.keys(e).forEach((t) => {
                        s[t] = 1 === e[t].length ? e[t][0] : e[t];
                    }),
                    t.text && (s["@val"] = t.text),
                    a.length > 0 && (s["@comments"] = [...a]),
                    s
                );
            }
            stringify(t) {
                return "";
            }
        }
        var A,
            L = a("b952");
        class N {
            constructor(t) {
                (this.text = t), (this.lineOffsets = []);
                let e = !0;
                for (let a = 0; a < t.length; a++)
                    e && this.lineOffsets.push(a),
                        (e = !1),
                        "\n" === t.charAt(a) && (e = !0);
            }
            getBookmark(t) {
                let e = T.a.sortedIndex(this.lineOffsets, t),
                    a = 0;
                return (
                    (t === this.lineOffsets.length || t < this.lineOffsets[e]) &&
                    (e--, (a = t - this.lineOffsets[e])),
                    new S["Bookmark"](e, a, t)
                );
            }
        }
        class I {
            constructor() {
                (this.name = "YAML"), (this.syntax = "yaml"), (this.option = {});
            }
            looksLike(t) {
                if (new M().looksLike(t)) return !1;
                if (D["a"].nonBlankStartsWith(t, ["{", "[", "/"])) return !1;
                const e = D["a"].topLines(t, 5e3);
                if (e.numLines <= 1) return !1;
                try {
                    return P.a.parseAllDocuments(t.substring(0, e.length)), !0;
                } catch (a) {
                    return !1;
                }
            }
            parse(t) {
                const e = new j();
                try {
                    return (
                        (e.result = this.parseYaml(t)), (e.message = "YAML.parse()"), e
                    );
                } catch (a) {
                    return (e.message = "Error:" + a.message), console.error(a), e;
                }
            }
            parseYaml(t) {
                this.textLine = new N(t);
                const e = P.a.parseAllDocuments(t);
                e[e.length - 1].contents || e.splice(e.length - 1, 1);
                const a = new S["TreeDoc"]();
                return (
                    1 === e.length
                        ? this.toTDNode(e[0].contents, a.root)
                        : ((a.root.type = S["TDNodeType"].ARRAY),
                            (a.root.children = e.map((t) =>
                                this.toTDNode(t.contents, a.root.createChild())
                            ))),
                    a.root
                );
            }
            toTDNode(t, e) {
                if (!t) return e;
                switch (null === t || void 0 === t ? void 0 : t.type) {
                    case L["a"].FLOW_MAP:
                    case L["a"].MAP:
                        this.toTDNodeMap(t, e);
                        break;
                    case L["a"].FLOW_SEQ:
                    case L["a"].SEQ:
                        this.toTDNodeAray(t, e);
                        break;
                    case L["a"].PLAIN:
                    case L["a"].BLOCK_FOLDED:
                    case L["a"].BLOCK_LITERAL:
                    case L["a"].PLAIN:
                    case L["a"].QUOTE_DOUBLE:
                    case L["a"].QUOTE_SINGLE:
                        e.value = t.value;
                        break;
                    default:
                        console.warn(
                            `Unsupported type: ${null === t || void 0 === t ? void 0 : t.type
                            }, ${S["TD"].stringify(t)}, ${typeof t}, ${Object.keys(t)}`
                        );
                }
                return (
                    (e.start = this.textLine.getBookmark(t.range[0])),
                    (e.end = this.textLine.getBookmark(t.range[1])),
                    e
                );
            }
            toTDNodeMap(t, e) {
                e.type = S["TDNodeType"].MAP;
                for (const a of t.items) {
                    const t = e.createChild(a.key.value);
                    this.toTDNode(a.value, t);
                }
                return e;
            }
            toTDNodeAray(t, e) {
                e.type = S["TDNodeType"].ARRAY;
                for (const a of t.items) {
                    const t = e.createChild();
                    this.toTDNode(a, t);
                }
                return e;
            }
            stringify(t) {
                return P.a.stringify(t);
            }
        }
        (function (t) {
            (t[(t["NORMAL"] = 0)] = "NORMAL"),
                (t[(t["JAVA_MAP_TO_STRING"] = 1)] = "JAVA_MAP_TO_STRING"),
                (t[(t["LOMBOK_TO_STRING"] = 2)] = "LOMBOK_TO_STRING");
        })(A || (A = {}));
        class q {
            constructor(t = "JSON/JSONEX", e = A.NORMAL) {
                (this.name = t),
                    (this.type = e),
                    (this.syntax = "json"),
                    (this.option = {});
            }
            looksLike(t) {
                if (new I().looksLike(t)) return !1;
                if (t.length < 1e6 && this.parse(t).status !== h.SUCCESS) return !1;
                const e = this.getTDJSONParserOption(this.type);
                if (
                    !D["a"].nonBlankEndsWith(t, [
                        e.deliminatorObjectEnd,
                        e.deliminatorArrayEnd,
                    ])
                )
                    return !1;
                let a = t.indexOf(":"),
                    s = t.indexOf("=");
                return (
                    (a = a < 0 ? Number.MAX_SAFE_INTEGER : a),
                    (s = s < 0 ? Number.MAX_SAFE_INTEGER : s),
                    !(a > s) ||
                    this.type === A.JAVA_MAP_TO_STRING ||
                    this.type === A.LOMBOK_TO_STRING
                );
            }
            parse(t) {
                const e = new j();
                try {
                    const a = new S["StringCharSource"](t),
                        s = [],
                        n = this.getTDJSONParserOption(this.type);
                    n.setDefaultRootType(S["TDNodeType"].MAP);
                    while (a.skipSpacesAndReturnsAndCommas())
                        s.push(S["TDJSONParser"].get().parse(a, n));
                    return (
                        (e.result = 1 === s.length ? s[0] : S["TreeDoc"].merge(s).root),
                        (e.message = "TDJSONParser.parse()"),
                        e
                    );
                } catch (a) {
                    return (
                        (e.message = "Error:" + a.message),
                        (e.status = h.ERROR),
                        console.error(a),
                        e
                    );
                }
            }
            getTDJSONParserOption(t) {
                switch (t) {
                    case A.JAVA_MAP_TO_STRING:
                        return S["TDJSONParserOption"].ofMapToString();
                    case A.LOMBOK_TO_STRING:
                        return new S["TDJSONParserOption"]()
                            .setDeliminatorKey("=")
                            .setDeliminatorObject("(", ")");
                    default:
                        return new S["TDJSONParserOption"]();
                }
            }
            stringify(t) {
                return S["TDJSONWriter"]
                    .get()
                    .writeAsString(t, new S["TDJSONWriterOption"]().setIndentFactor(2));
            }
        }
        const { doIfNotNull: B } = S["LangUtil"];
        class R {
            constructor(t = null) {
                (this.selected = t), (this.selection = {});
            }
        }
        class $ {
            constructor(t, e, a, s) {
                (this.query = t),
                    (this.expandedLevel = e),
                    (this.columns = a),
                    (this.isColumnExpanded = s);
            }
        }
        class V {
            constructor(t, e = new q(), a = "root", s = []) {
                (this.parserPlugin = e),
                    (this.parseResult = "OBJECT"),
                    (this.history = new C()),
                    (this.tableStateCache = new Map()),
                    (this.hasTreeInTable = !1),
                    (this.curState = new R()),
                    (this.maxPane = ""),
                    (this.textWrap = !1),
                    (this.showSource = [!0]),
                    (this.showTree = [!0]),
                    (this.showTable = [!0]),
                    (this.codeView = [!0]),
                    (this.tree = this.buildTree(t, a)),
                    this.tree &&
                    ((this.tree.root.key = a),
                        this.tree.root.freeze(),
                        this.select(s, !0));
            }
            setInitSOpt(t) {
                return (
                    B(
                        null === t || void 0 === t ? void 0 : t.maxPane,
                        (t) => (this.maxPane = t)
                    ),
                    B(
                        null === t || void 0 === t ? void 0 : t.textWrap,
                        (t) => (this.textWrap = t)
                    ),
                    B(
                        null === t || void 0 === t ? void 0 : t.showSource,
                        (t) => (this.showSource[0] = t)
                    ),
                    B(
                        null === t || void 0 === t ? void 0 : t.showTree,
                        (t) => (this.showTree[0] = t)
                    ),
                    B(
                        null === t || void 0 === t ? void 0 : t.showTable,
                        (t) => (this.showTable[0] = t)
                    ),
                    this
                );
            }
            retainState(t) {
                return (
                    null == t ||
                    ((this.maxPane = t.maxPane),
                        (this.textWrap = t.textWrap),
                        (this.showSource = t.showSource),
                        (this.showTree = t.showTree),
                        (this.showTable = t.showTable),
                        (this.codeView = t.codeView)),
                    this
                );
            }
            buildTree(t, e) {
                if (!t || "TDNode" === t.constructor.name)
                    return (this.parseResult = "TreeDoc"), t.doc;
                const a =
                    "string" === typeof t
                        ? this.parse(t)
                        : S["TDObjectCoder"].get().encode(t);
                return a && a.doc;
            }
            select(t, e = !1) {
                if (null == this.tree) return;
                let a = null;
                (a = t instanceof S["TDNode"] ? t : this.findNodeByPath(t, e)),
                    e && (this.initialNode = a),
                    this.curState.selected !== a &&
                    ((this.curState = new R(a)),
                        (this.curState.selected = a),
                        a && this.history.append(this.curState),
                        e || (this.curState.selection = this.curState.selected));
            }
            saveTableState(t, e) {
                this.tableStateCache.set(t.pathAsString, e);
            }
            getTableState(t) {
                return this.tableStateCache.get(t.pathAsString);
            }
            get selected() {
                return this.curState.selected;
            }
            get selection() {
                return this.curState.selection;
            }
            findNodeByPath(t, e = !1) {
                const a = this.curState.selected || this.tree.root;
                let s = a.getByPath(t);
                if (s) return s;
                if ("string" !== typeof t) return a;
                if (((s = a.getByPath("/schemas/" + t)), s)) return s;
                const n = S["JSONPointer"].get().parse(t);
                return n.docPath
                    ? (console.warn("Cross document reference is not supported: " + t), a)
                    : ((s = a.getByPath(n)), s || a);
            }
            isRootSelected() {
                return null != this.tree && this.selected === this.tree.root;
            }
            isInitialNodeSelected() {
                return null != this.tree && this.selected === this.initialNode;
            }
            canBack() {
                return this.history.canBack();
            }
            canForward() {
                return this.history.canForward();
            }
            back() {
                this.curState = this.history.back();
            }
            forward() {
                this.curState = this.history.forward();
            }
            parse(t) {
                const e = this.parserPlugin.parse(t);
                return (this.parseResult = e.message), e.result;
            }
            toggleMaxPane(t) {
                this.maxPane ? (this.maxPane = "") : (this.maxPane = t);
            }
        }
        var W = function () {
            var t = this,
                e = t.$createElement,
                a = t._self._c || e;
            return a(
                "div",
                { staticStyle: { height: "100%", overflow: "hidden" } },
                [
                    t.useCodeView[0]
                        ? [
                            a("codemirror", {
                                ref: "codeView",
                                staticClass: "codeView",
                                staticStyle: { height: "100%" },
                                attrs: { options: t.options },
                                model: {
                                    value: t.val,
                                    callback: function (e) {
                                        t.val = e;
                                    },
                                    expression: "val",
                                },
                            }),
                        ]
                        : t._e(),
                    a("textarea", {
                        directives: [
                            {
                                name: "model",
                                rawName: "v-model",
                                value: t.val,
                                expression: "val",
                            },
                        ],
                        ref: "textView",
                        staticClass: "nowrap",
                        class: [t.useCodeView[0] ? "hiddenTextArea" : "textArea"],
                        domProps: { value: t.val },
                        on: {
                            input: function (e) {
                                e.target.composing || (t.val = e.target.value);
                            },
                        },
                    }),
                ],
                2
            );
        },
            U = [],
            K = a("c884");
        a("f9d4"),
            a("693d"),
            a("d5e0"),
            a("ced0"),
            a("9b74"),
            a("f6b6"),
            a("3c98"),
            a("4895"),
            a("cbc8"),
            a("697e"),
            a("8d70"),
            a("aedd"),
            a("a2c1");
        let z = class extends u["c"] {
            constructor() {
                super(...arguments), (this.val = this.value);
            }
            get textView() {
                return this.$refs.textView;
            }
            get codeView() {
                return this.$refs.codeView;
            }
            get options() {
                const t = {
                    xml: "xml",
                    yaml: "yaml",
                    json: { name: "javascript", json: !0 },
                },
                    e = t[this.syntax] || t.json;
                return {
                    mode: e,
                    tabSize: 2,
                    lineNumbers: !0,
                    viewportMargin: 10,
                    extraKeys: { "Ctrl-Space": "autocomplete" },
                    foldGutter: !0,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                };
            }
            watchVal() {
                this.$emit("input", this.val);
            }
            watchValue(t) {
                this.val = t;
            }
            watchSelection(t) {
                this.show &&
                    t &&
                    t.start &&
                    t.end &&
                    (this.val.length > 1e6 ||
                        (this.useCodeView[0]
                            ? this.codeView.editor.doc.setSelection(J(t.start), J(t.end), {
                                scroll: !0,
                            })
                            : (Q(this.textView, t.start.pos),
                                this.textView.select(),
                                this.textView.setSelectionRange(t.start.pos, t.end.pos))));
            }
        };
        Object(g["a"])([Object(u["b"])()], z.prototype, "value", void 0),
            Object(g["a"])([Object(u["b"])()], z.prototype, "syntax", void 0),
            Object(g["a"])([Object(u["b"])()], z.prototype, "useCodeView", void 0),
            Object(g["a"])(
                [Object(u["b"])({ required: !1 })],
                z.prototype,
                "selection",
                void 0
            ),
            Object(g["a"])([Object(u["b"])()], z.prototype, "show", void 0),
            Object(g["a"])([Object(u["d"])("val")], z.prototype, "watchVal", null),
            Object(g["a"])(
                [Object(u["d"])("value", { immediate: !0 })],
                z.prototype,
                "watchValue",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("selection", { deep: !0 })],
                z.prototype,
                "watchSelection",
                null
            ),
            (z = Object(g["a"])(
                [Object(u["a"])({ components: { codemirror: K["codemirror"] } })],
                z
            ));
        var F = z;
        function J(t) {
            return { line: t.line, ch: t.col };
        }
        function Q(t, e) {
            const a = t.value;
            if (e >= a.length || e < 0) return;
            (t.scrollTop = 0), (t.value = a.substring(0, e));
            const s = t.scrollHeight;
            (t.value = a), (t.scrollTop = s - 40);
        }
        var Y = F,
            H = (a("1e1c"), Object(f["a"])(Y, W, U, !1, null, null, null)),
            G = H.exports,
            X = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "wrapper" },
                    [
                        a(
                            "div",
                            { staticClass: "tdv-toolbar" },
                            [
                                a("expand-control", {
                                    ref: "expandControl",
                                    staticStyle: { float: "right" },
                                    attrs: { state: t.expandState },
                                }),
                            ],
                            1
                        ),
                        a("tree-view-item", {
                            ref: "item",
                            staticClass: "item-root",
                            attrs: {
                                tnode: t.tstate.tree.root,
                                currentLevel: 0,
                                expandState: t.expandState,
                            },
                            on: { "node-clicked": t.nodeClicked },
                        }),
                    ],
                    1
                );
            },
            Z = [],
            tt = a("9783"),
            et = a("9e6f");
        let at = class extends u["c"] {
            constructor() {
                super(...arguments), (this.expandState = new et["a"](this.expandLevel));
            }
            watchselected(t, e) {
                null != e && this.item.selectNode(e.path, 0, (t) => (t.selected = !1)),
                    t && this.item.selectNode(t.path, 0, (t) => (t.selected = !0));
            }
            get item() {
                return this.$refs.item;
            }
            watchTree() {
                this.expandState = new et["a"](this.expandState.expandLevel);
            }
            nodeClicked(t) {
                this.tstate.select(t);
            }
        };
        Object(g["a"])([Object(u["b"])()], at.prototype, "tstate", void 0),
            Object(g["a"])(
                [Object(u["b"])({ default: "root" })],
                at.prototype,
                "rootObjectKey",
                void 0
            ),
            Object(g["a"])(
                [Object(u["b"])({ default: "4" })],
                at.prototype,
                "expandLevel",
                void 0
            ),
            Object(g["a"])(
                [Object(u["d"])("tstate.selected")],
                at.prototype,
                "watchselected",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("tstate")],
                at.prototype,
                "watchTree",
                null
            ),
            (at = Object(g["a"])(
                [
                    Object(u["a"])({
                        components: { TreeViewItem: tt["a"], ExpandControl: et["b"] },
                    }),
                ],
                at
            ));
        var st = at,
            nt = st,
            rt = (a("1e2b"), Object(f["a"])(nt, X, Z, !1, null, "59753538", null)),
            ot = rt.exports,
            it = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "tdv-table" },
                    [
                        a("datatable", t._b({}, "datatable", t.tableOpt, !1), [
                            a(
                                "div",
                                { staticStyle: { display: "flex column" } },
                                [
                                    a(
                                        "div",
                                        { staticClass: "tdv-tbl-top" },
                                        [
                                            t.hasTableTitleSlot ? t._t("tableTitle") : t._e(),
                                            a("json-path", {
                                                attrs: {
                                                    "tree-node": t.tstate ? t.tstate.selected : null,
                                                },
                                                on: { "node-clicked": t.nodeClicked },
                                            }),
                                            a(
                                                "div",
                                                { staticClass: "tdv-tbl-toolbar" },
                                                [
                                                    t.tstate.hasTreeInTable
                                                        ? a("expand-control", {
                                                            attrs: { state: t.expandState },
                                                        })
                                                        : t._e(),
                                                    t.isInMuliPane
                                                        ? a(
                                                            "span",
                                                            {
                                                                directives: [
                                                                    {
                                                                        name: "b-tooltip",
                                                                        rawName: "v-b-tooltip.hover",
                                                                        modifiers: { hover: !0 },
                                                                    },
                                                                ],
                                                                attrs: { title: "Toggle fullscreen" },
                                                            },
                                                            [
                                                                a(
                                                                    "b-btn",
                                                                    {
                                                                        attrs: {
                                                                            size: "sm",
                                                                            variant: "outline-secondary",
                                                                            pressed: "table" === t.tstate.maxPane,
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.tstate.toggleMaxPane(
                                                                                    "table"
                                                                                );
                                                                            },
                                                                        },
                                                                    },
                                                                    [a("i", { staticClass: "fa fa-expand" })]
                                                                ),
                                                            ],
                                                            1
                                                        )
                                                        : t._e(),
                                                    a(
                                                        "span",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: { hover: !0 },
                                                                },
                                                            ],
                                                            attrs: { title: "Expand children as columns" },
                                                        },
                                                        [
                                                            a(
                                                                "b-btn",
                                                                {
                                                                    attrs: {
                                                                        size: "sm",
                                                                        variant: "outline-secondary",
                                                                        pressed: t.isColumnExpanded,
                                                                    },
                                                                    on: {
                                                                        "update:pressed": function (e) {
                                                                            t.isColumnExpanded = e;
                                                                        },
                                                                    },
                                                                },
                                                                [a("i", { staticClass: "fa fa-arrows-h" })]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: { hover: !0 },
                                                                },
                                                            ],
                                                            attrs: { title: "Copy table as JSON" },
                                                        },
                                                        [
                                                            a(
                                                                "b-btn",
                                                                {
                                                                    attrs: {
                                                                        size: "sm",
                                                                        variant: "outline-secondary",
                                                                    },
                                                                },
                                                                [
                                                                    a("i", {
                                                                        staticClass: "fa fa-copy",
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.copy(!1);
                                                                            },
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: { hover: !0 },
                                                                },
                                                            ],
                                                            attrs: { title: "Copy table as CSV" },
                                                        },
                                                        [
                                                            a(
                                                                "b-btn",
                                                                {
                                                                    attrs: {
                                                                        size: "sm",
                                                                        variant: "outline-secondary",
                                                                    },
                                                                },
                                                                [
                                                                    a("i", {
                                                                        staticClass: "fa fa-copy",
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.copy(!0);
                                                                            },
                                                                        },
                                                                    }),
                                                                ]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: { hover: !0 },
                                                                },
                                                            ],
                                                            attrs: { title: "Wrap text" },
                                                        },
                                                        [
                                                            a(
                                                                "b-btn",
                                                                {
                                                                    attrs: {
                                                                        size: "sm",
                                                                        variant: "outline-secondary",
                                                                        pressed: t.tstate.textWrap,
                                                                    },
                                                                    on: {
                                                                        click: function (e) {
                                                                            t.tstate.textWrap = !t.tstate.textWrap;
                                                                        },
                                                                    },
                                                                },
                                                                [a("i", { staticClass: "fa fa-level-down" })]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            directives: [
                                                                {
                                                                    name: "b-tooltip",
                                                                    rawName: "v-b-tooltip.hover",
                                                                    modifiers: { hover: !0 },
                                                                },
                                                            ],
                                                            attrs: { title: "Advanced Query" },
                                                        },
                                                        [
                                                            a(
                                                                "b-btn",
                                                                {
                                                                    attrs: {
                                                                        size: "sm",
                                                                        variant: "outline-secondary",
                                                                        pressed: t.showAdvancedQuery,
                                                                    },
                                                                    on: {
                                                                        click: function (e) {
                                                                            t.showAdvancedQuery =
                                                                                !t.showAdvancedQuery;
                                                                        },
                                                                    },
                                                                },
                                                                [a("i", { staticClass: "fa fa-filter" })]
                                                            ),
                                                        ],
                                                        1
                                                    ),
                                                    a("b-button-group", { staticClass: "ml-1" }, [
                                                        a(
                                                            "span",
                                                            {
                                                                directives: [
                                                                    {
                                                                        name: "b-tooltip",
                                                                        rawName: "v-b-tooltip.hover",
                                                                        modifiers: { hover: !0 },
                                                                    },
                                                                ],
                                                                attrs: { title: "Go back" },
                                                            },
                                                            [
                                                                a(
                                                                    "b-btn",
                                                                    {
                                                                        attrs: {
                                                                            size: "sm",
                                                                            disabled: !t.tstate.canBack(),
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.tstate.back();
                                                                            },
                                                                        },
                                                                    },
                                                                    [a("i", { staticClass: "fa fa-arrow-left" })]
                                                                ),
                                                            ],
                                                            1
                                                        ),
                                                        a(
                                                            "span",
                                                            {
                                                                directives: [
                                                                    {
                                                                        name: "b-tooltip",
                                                                        rawName: "v-b-tooltip.hover",
                                                                        modifiers: { hover: !0 },
                                                                    },
                                                                ],
                                                                attrs: { title: "Go forward" },
                                                            },
                                                            [
                                                                a(
                                                                    "b-btn",
                                                                    {
                                                                        attrs: {
                                                                            size: "sm",
                                                                            disabled: !t.tstate.canForward(),
                                                                        },
                                                                        on: {
                                                                            click: function (e) {
                                                                                return t.tstate.forward();
                                                                            },
                                                                        },
                                                                    },
                                                                    [a("i", { staticClass: "fa fa-arrow-right" })]
                                                                ),
                                                            ],
                                                            1
                                                        ),
                                                    ]),
                                                ],
                                                1
                                            ),
                                        ],
                                        2
                                    ),
                                    t.showAdvancedQuery
                                        ? [
                                            a(
                                                "div",
                                                {
                                                    directives: [
                                                        {
                                                            name: "b-tooltip",
                                                            rawName: "v-b-tooltip.hover",
                                                            modifiers: { hover: !0 },
                                                        },
                                                    ],
                                                    staticStyle: { display: "flex" },
                                                    attrs: { title: "Advanced Query with Javascript" },
                                                },
                                                [
                                                    t._v(" JSQuery:"),
                                                    a("b-form-input", {
                                                        staticStyle: { display: "inline", width: "100%" },
                                                        attrs: {
                                                            size: "sm",
                                                            placeholder:
                                                                "Custom query in JS. E.g. $.name.size() > 10",
                                                            debounce: "500",
                                                        },
                                                        model: {
                                                            value: t.tableOpt.query.jsQuery,
                                                            callback: function (e) {
                                                                t.$set(t.tableOpt.query, "jsQuery", e);
                                                            },
                                                            expression: "tableOpt.query.jsQuery",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                            a(
                                                "div",
                                                {
                                                    directives: [
                                                        {
                                                            name: "b-tooltip",
                                                            rawName: "v-b-tooltip.hover",
                                                            modifiers: { hover: !0 },
                                                        },
                                                    ],
                                                    staticStyle: { display: "flex" },
                                                    attrs: { title: "Extended Fields" },
                                                },
                                                [
                                                    t._v(" ExtendedFields:"),
                                                    a("b-form-input", {
                                                        staticStyle: { display: "inline", width: "100%" },
                                                        attrs: {
                                                            size: "sm",
                                                            name: "extendedFields",
                                                            placeholder:
                                                                "Extends Fields. E.g. `createdName: $.created.name, createdDate: $.created.data` or spread child: `c_:created`",
                                                        },
                                                        on: {
                                                            blur: function (e) {
                                                                return t.buildTableAndQuery(t.selected);
                                                            },
                                                        },
                                                        model: {
                                                            value: t.tableOpt.query.extendedFields,
                                                            callback: function (e) {
                                                                t.$set(t.tableOpt.query, "extendedFields", e);
                                                            },
                                                            expression: "tableOpt.query.extendedFields",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                            t._v(" Query:" + t._s(t.tableOpt.query) + " "),
                                        ]
                                        : t._e(),
                                ],
                                2
                            ),
                        ]),
                        a("textarea", {
                            directives: [
                                {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.copyBuffer,
                                    expression: "copyBuffer",
                                },
                            ],
                            ref: "textViewCopyBuffer",
                            staticClass: "hiddenTextArea nowrap",
                            domProps: { value: t.copyBuffer },
                            on: {
                                input: function (e) {
                                    e.target.composing || (t.copyBuffer = e.target.value);
                                },
                            },
                        }),
                    ],
                    1
                );
            },
            lt = [],
            ct = a("d82a"),
            dt = a("3af4"),
            ut = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "filter-header" },
                    [
                        a(
                            "b-button",
                            {
                                staticStyle: { padding: "0px" },
                                attrs: { tabindex: "0", variant: "link", id: t.filterBtnId },
                            },
                            [
                                a(
                                    "b",
                                    {
                                        staticClass: "jsontable-head",
                                        class: { "has-keyword": t.query[t.field] },
                                    },
                                    [t._v(t._s(t.title))]
                                ),
                            ]
                        ),
                        a(
                            "b-popover",
                            {
                                attrs: {
                                    target: t.filterBtnId,
                                    triggers: "focus hover",
                                    placement: "top",
                                    "fallback-placement": "clockwise",
                                    boundary: "viewport",
                                    delay: "300",
                                    "no-fade": !0,
                                    "boundary-padding": "0",
                                },
                                on: { show: t.onShowPopover },
                            },
                            [
                                a(
                                    "div",
                                    { staticClass: "input-group input-group-sm" },
                                    [
                                        a("b-form-input", {
                                            ref: "input",
                                            staticClass: "form-control",
                                            attrs: {
                                                type: "search",
                                                placeholder: "Search " + t.field + "...",
                                                debounce: "300",
                                            },
                                            on: {
                                                keydown: [
                                                    function (e) {
                                                        return !e.type.indexOf("key") &&
                                                            t._k(e.keyCode, "esc", 27, e.key, [
                                                                "Esc",
                                                                "Escape",
                                                            ])
                                                            ? null
                                                            : (e.preventDefault(), t.close(e));
                                                    },
                                                    function (e) {
                                                        return !e.type.indexOf("key") &&
                                                            t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                                            ? null
                                                            : t.close(e);
                                                    },
                                                ],
                                            },
                                            model: {
                                                value: t.query[t.field],
                                                callback: function (e) {
                                                    t.$set(t.query, t.field, e);
                                                },
                                                expression: "query[field]",
                                            },
                                        }),
                                    ],
                                    1
                                ),
                            ]
                        ),
                    ],
                    1
                );
            },
            pt = [],
            ht = {
                props: ["field", "title", "query"],
                methods: {
                    onShowPopover() {
                        s["default"].nextTick(() =>
                            this.$refs.input.focus({ preventScroll: !0 })
                        );
                    },
                    close() {
                        this.$root.$emit("bv::hide::popover");
                    },
                },
                computed: {
                    filterBtnId() {
                        return "filterbtn-" + this.field;
                    },
                },
            },
            mt = ht,
            ft = (a("a604"), Object(f["a"])(mt, ut, pt, !1, null, null, null)),
            vt = ft.exports,
            bt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    {
                        staticClass: "td-value",
                        class: { "td-value-max-width": !t.isLastCol },
                    },
                    [
                        t.value
                            ? t.html
                                ? a("div", { domProps: { innerHTML: t._s(t.html) } })
                                : t.isRawValue
                                    ? a("div", [t._v(t._s(t.value))])
                                    : t.isSimpleType
                                        ? a(
                                            "div",
                                            [
                                                a("simple-value", {
                                                    attrs: {
                                                        tnode: t.value,
                                                        isInTable: !0,
                                                        textWrap: t.xprops.tstate.textWrap,
                                                    },
                                                    on: { "node-clicked": t.nodeClicked },
                                                }),
                                            ],
                                            1
                                        )
                                        : a(
                                            "div",
                                            [
                                                a("tree-view-item", {
                                                    staticClass: "tree-view-item-root",
                                                    staticStyle: { "margin-left": "0!important" },
                                                    attrs: {
                                                        tnode: t.value,
                                                        expandState: t.xprops.expandState,
                                                        currentLevel: 0,
                                                    },
                                                    on: { "node-clicked": t.nodeClicked },
                                                }),
                                            ],
                                            1
                                        )
                            : a("div"),
                    ]
                );
            },
            _t = [],
            yt = a("d30e"),
            gt = yt["a"],
            wt = (a("2ff7"), Object(f["a"])(gt, bt, _t, !1, null, null, null)),
            Ot = wt.exports,
            xt = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", [
                    t.isObject
                        ? a("div", { staticClass: "tdv_key" }, [
                            a(
                                "a",
                                {
                                    attrs: { href: "#" },
                                    on: {
                                        click: function (e) {
                                            return (
                                                e.stopPropagation(), t.nodeClicked(t.row["@value"])
                                            );
                                        },
                                    },
                                },
                                [t._v(t._s(t.value))]
                            ),
                        ])
                        : a("div", { staticClass: "tdv_key" }, [t._v(t._s(t.value))]),
                ]);
            },
            Tt = [],
            St = {
                props: ["value", "row", "xprops"],
                methods: {
                    nodeClicked(t) {
                        this.xprops.tstate.select(t);
                    },
                },
                computed: {
                    isObject() {
                        return this.row["@value"].type !== S["TDNodeType"].SIMPLE;
                    },
                },
            },
            Ct = St,
            jt = (a("5f64"), Object(f["a"])(Ct, xt, Tt, !1, null, "d93b97b2", null)),
            kt = jt.exports,
            Et = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "ol",
                    { staticClass: "breadcrumb jsonpath" },
                    [
                        t.items
                            ? t._l(t.items, function (e, s) {
                                return a(
                                    "li",
                                    {
                                        key: e.text + s,
                                        class: ["breadcrumb-item", e.active ? "active" : null],
                                    },
                                    [
                                        e.active
                                            ? a("span", { domProps: { innerHTML: t._s(e.text) } })
                                            : a("b-link", {
                                                attrs: { to: e.to || e.href || e.link },
                                                domProps: { innerHTML: t._s(e.text) },
                                                on: {
                                                    click: function (a) {
                                                        return t.onclick(e);
                                                    },
                                                },
                                            }),
                                    ],
                                    1
                                );
                            })
                            : t._e(),
                        t._t("default"),
                    ],
                    2
                );
            },
            Pt = [];
        let Dt = class extends u["c"] {
            onclick(t) {
                this.$emit("node-clicked", ["", ...t.node.path]);
            }
            get items() {
                const t = new Array();
                if (!this.treeNode) return t;
                t.unshift({ text: this.treeNode.key, active: !0 });
                for (let e = this.treeNode.parent; e; e = e.parent)
                    t.unshift({ text: e.key, href: "", node: e });
                return t;
            }
        };
        Object(g["a"])([Object(u["b"])()], Dt.prototype, "treeNode", void 0),
            (Dt = Object(g["a"])([u["a"]], Dt));
        var Mt = Dt,
            At = Mt,
            Lt = (a("1922"), Object(f["a"])(At, Et, Pt, !1, null, null, null)),
            Nt = Lt.exports,
            It = a("3f6a");
        const qt = "@value",
            Bt = "#",
            Rt = "@key";
        let $t = class extends u["c"] {
            constructor() {
                super(...arguments),
                    (this.tableOpt = {
                        tblClass: "table-bordered",
                        pageSizeOptions: [5, 20, 50, 100, 200, 500],
                        columns: [],
                        data: [],
                        filteredData: [],
                        rawData: [],
                        total: 0,
                        query: {
                            limit: 100,
                            offset: 0,
                            jsQuery: ct["a"],
                            extendedFields: "",
                        },
                        xprops: { tstate: null },
                    }),
                    (this.tstate = new V({})),
                    (this.isColumnExpanded = !1),
                    (this.isColumnExpandedBuild = !1),
                    (this.expandState = new et["a"](0, 0, !1)),
                    (this.copyBuffer = ""),
                    (this.showAdvancedQuery = !1);
            }
            rebuildTable(t, e = null) {
                this.defTableOpt || (this.defTableOpt = this.tableOpt),
                    (this.defTableOpt.columns = []),
                    (this.tableOpt = Object.assign(
                        Object.assign({}, this.defTableOpt),
                        this.applyCustomOpts && this.options
                    )),
                    e &&
                    ((this.tableOpt.query = e.query),
                        (this.tableOpt.columns = e.columns),
                        (this.isColumnExpanded = e.isColumnExpanded)),
                    this.buildTableAndQuery(t),
                    (this.tstate.hasTreeInTable = !1),
                    (this.tableOpt.xprops.tstate = this.tstate),
                    (this.tableOpt.xprops.expandState = this.expandState),
                    (this.isColumnExpandedBuild = this.isColumnExpanded);
            }
            buildTableAndQuery(t) {
                this.buildTable(t), this.queryData();
            }
            buildTable(t) {
                if (((this.tableOpt.rawData = []), !t)) return;
                let e = null;
                if (this.query.extendedFields) {
                    const t = `\n        with($) {   // With doesn't work with Proxy (not sure why)\n          // console.log(JSON.stringify($));\n          return {${this.query.extendedFields}}\n        }\n      `;
                    try {
                        e = new Function("$", t);
                    } catch (n) {
                        console.error("Error parsing extend fields: " + t),
                            console.error(n);
                    }
                }
                const a = t.type === S["TDNodeType"].ARRAY,
                    s = a ? Bt : Rt;
                if ((this.addColumn(s, 0), t.children))
                    for (const r of t.children) {
                        const t = { [s]: a ? Number(r.key) : r.key, [qt]: r };
                        if (
                            (this.tableOpt.rawData.push(t),
                                this.isColumnExpanded && r && r.children)
                        )
                            for (const e of r.children) this.addColumn(e.key), (t[e.key] = e);
                        else this.addColumn(qt, 1);
                        if (e)
                            try {
                                const a = e(r.toObject(!0, !0));
                                for (const e in a)
                                    e.startsWith("$$") || this.addExtObject(e, a[e], t);
                            } catch (n) {
                                console.error(
                                    "Error evalute ext fields: " + this.query.extendedFields
                                ),
                                    console.error(n);
                            }
                    }
            }
            addExtObject(t, e, a) {
                var s, n;
                if (t.endsWith("_") && e) {
                    if (Array.isArray(e)) {
                        for (let n = 0; n < e.length; n++)
                            this.addColumn(t + n),
                                (a[t + n] =
                                    (null === (s = e[n]) || void 0 === s ? void 0 : s.$$tdNode) ||
                                    e[n]);
                        return;
                    }
                    if ("object" === typeof e) {
                        for (const s of Object.keys(e))
                            s.startsWith("$$") ||
                                (this.addColumn(t + s),
                                    (a[t + s] =
                                        (null === (n = e[s]) || void 0 === n ? void 0 : n.$$tdNode) ||
                                        e[s]));
                        return;
                    }
                }
                this.addColumn(t),
                    (a[t] = (null === e || void 0 === e ? void 0 : e.$$tdNode) || e);
            }
            addColumn(t, e = this.tableOpt.columns.length) {
                const a = 0 === e,
                    s = this.tableOpt.columns;
                let n = s.find((e) => e.field === t);
                n ||
                    ((n = {
                        field: t,
                        visible: a || !(this.applyCustomOpts && this.options.columns),
                    }),
                        s.splice(e, 0, n)),
                    n.processed ||
                    ((n.title = n.title || t),
                        (n.sortable = !0),
                        (n.thComp = n.thComp || vt),
                        (n.tdComp = n.tdComp || (a ? kt : Ot)),
                        (n.processed = !0),
                        this.$set(this.tableOpt.query, t, void 0),
                        (n.thClass = "tdv-th"),
                        (n.tdClass = "tdv-td"),
                        a &&
                        ((n.thClass += " tdv-min tdv-td"),
                            (n.tdClass = "tdv-min tdv-td")));
            }
            defaultExpand(t) {
                if (!t) return !1;
                const e = new Set();
                let a = 0;
                if (!t.children || 0 === t.children.length) return !1;
                for (const o of t.children)
                    if (o && o.children) for (const t of o.children) e.add(t.key), a++;
                const s = 0.8,
                    n = t.children.length,
                    r = e.size - 1;
                return (a -= n), e.size < 100 && a >= r * (n - (n - 1) * s);
            }
            nodeClicked(t) {
                this.tstate.select(t);
            }
            queryData() {
                dt["a"].filter(this.tableOpt);
            }
            copy(t = !1) {
                const e = this.tableOpt.filteredData;
                let a =
                    "@key" === this.tableOpt.columns[0].field
                        ? It["a"].rowsToObject(e, this.tableOpt)
                        : e.map((t) => It["a"].rowToObject(t, this.tableOpt));
                (this.copyBuffer = t ? It["a"].toCSV(a) : S["TD"].stringify(a)),
                    console.log("this.copyBuffer=" + this.copyBuffer),
                    this.$nextTick(() => {
                        const t = this.$refs.textViewCopyBuffer;
                        t.select(), t.setSelectionRange(0, 999999999);
                        document.execCommand("copy");
                        this.$bvToast.toast("Data is copied successfully", {
                            autoHideDelay: 2e3,
                            appendToast: !0,
                            toaster: "b-toaster-bottom-right",
                        });
                    });
            }
            watchQuery() {
                this.queryData();
            }
            watchisColumnExpanded() {
                this.isColumnExpanded !== this.isColumnExpandedBuild &&
                    this.rebuildTable(this.selected);
            }
            watchTableData() {
                this.tstate =
                    this.tableData && this.tableData instanceof V
                        ? this.tableData
                        : new V(this.tableData, new q());
            }
            watchSelected(t, e) {
                console.log(
                    `tstate.selected: ${null === e || void 0 === e ? void 0 : e.pathAsString
                    } -> ${null === t || void 0 === t ? void 0 : t.pathAsString}`
                ),
                    e &&
                    e.doc === t.doc &&
                    this.tstate.saveTableState(
                        e,
                        new $(
                            T.a.cloneDeep(this.tableOpt.query),
                            this.expandState.expandLevel,
                            this.tableOpt.columns,
                            this.isColumnExpanded
                        )
                    );
                const a = this.tstate.getTableState(t);
                null != a
                    ? (this.isColumnExpanded = a.isColumnExpanded)
                    : ((this.isColumnExpanded = this.defaultExpand(t)),
                        (this.tableOpt.query.extendedFields = ""),
                        (this.tableOpt.query.jsQuery = "$")),
                    (this.expandState = new et["a"](
                        a ? a.expandedLevel : 0,
                        0,
                        this.expandState.showChildrenSummary
                    )),
                    this.rebuildTable(t, a);
            }
            optionsUpdated() {
                this.rebuildTable(this.selected);
            }
            get selected() {
                return this.tstate ? this.tstate.selected : null;
            }
            get applyCustomOpts() {
                return (
                    this.tstate.isInitialNodeSelected() &&
                    this.isColumnExpanded &&
                    this.options
                );
            }
            get query() {
                return this.tableOpt.query;
            }
            get hasTableTitleSlot() {
                return !!this.$slots.tableTitle;
            }
        };
        Object(g["a"])([Object(u["b"])()], $t.prototype, "tableData", void 0),
            Object(g["a"])([Object(u["b"])()], $t.prototype, "options", void 0),
            Object(g["a"])([Object(u["b"])()], $t.prototype, "isInMuliPane", void 0),
            Object(g["a"])(
                [Object(u["d"])("query", { deep: !0 })],
                $t.prototype,
                "watchQuery",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("isColumnExpanded")],
                $t.prototype,
                "watchisColumnExpanded",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("tableData", { immediate: !0 })],
                $t.prototype,
                "watchTableData",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("tstate.selected", { immediate: !0 })],
                $t.prototype,
                "watchSelected",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("options", { immediate: !0 })],
                $t.prototype,
                "optionsUpdated",
                null
            ),
            ($t = Object(g["a"])(
                [
                    Object(u["a"])({
                        components: { JsonPath: Nt, ExpandControl: et["b"] },
                    }),
                ],
                $t
            ));
        var Vt = $t,
            Wt = Vt,
            Ut = (a("00df"), Object(f["a"])(Wt, it, lt, !1, null, null, null)),
            Kt = Ut.exports;
        let zt = class extends u["c"] {
            constructor() {
                super(...arguments),
                    (this.defaultParser = new q()),
                    (this.selectedParser = this.defaultParser),
                    (this.tstate = new V({}, this.selectedParser).setInitSOpt(
                        this.options
                    )),
                    (this.jsonStr = ""),
                    (this.parseResult = ""),
                    (this.strDataSynced = !1),
                    (this.error = { color: "red" }),
                    (this.url =
                        "https://www.googleapis.com/discovery/v1/apis/vision/v1p1beta1/rest"),
                    (this.urlInput = ""),
                    (this.treeItemActionStyle = {}),
                    (this.mouseEnterEvent = null),
                    (this.mouseInActionBarRealtime = !1),
                    (this.mouseInActionBar = !1),
                    (this.mouseInNode = !1),
                    (this.parse = T.a.debounce((t, e, a = !1) => {
                        if (a) {
                            e.selectedParser = this.parserSelectOptions[0].value;
                            for (const a of this.parserSelectOptions)
                                if (a.value.looksLike(t)) {
                                    e.selectedParser = a.value;
                                    break;
                                }
                        }
                        const s = e.tstate.selected ? e.tstate.selected.path : [];
                        (e.tstate = new V(
                            this.strDataSynced ? e.data : t,
                            e.selectedParser,
                            e.rootObjectKey,
                            s
                        ).retainState(e.tstate)),
                            (e.strDataSynced = !1),
                            (e.parseResult = e.tstate.parseResult),
                            0 === s.length &&
                            e.initalPath &&
                            e.tstate.tree &&
                            e.tstate.select(e.initalPath, !0);
                    }, 300));
            }
            nodeClicked(t) {
                this.tstate.select(t);
            }
            format() {
                this.jsonStr = S["TDJSONWriter"]
                    .get()
                    .writeAsString(
                        this.tstate.tree.root,
                        new S["TDJSONWriterOption"]().setIndentFactor(2)
                    );
            }
            mounted() {
                window.tdv = this;
            }
            transformJson(t) {
                this.jsonStr = JSON.stringify(
                    t(this.tstate.tree.root.toObject(!0)),
                    null,
                    2
                );
            }
            watchData(t) {
                T.a.isString(t)
                    ? (this.jsonStr = t)
                    : ((this.jsonStr = JSON.stringify(t, null, "  ")),
                        (this.strDataSynced = !0));
            }
            watch(t) {
                this.parse(this.jsonStr, this);
            }
            watchJsonStr(t, e) {
                t || (t = ""),
                    t.length > 2e5 && (this.tstate.codeView[0] = !1),
                    t.length < 1e5 && (this.tstate.codeView[0] = !0);
                const a = e ? e.length : 0,
                    s = Math.abs(a - t.length) > 7;
                this.parse(t, this, s);
            }
            get hasError() {
                return this.parseResult.startsWith("Error");
            }
            get tableOpt() {
                var t;
                return null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.defaultTableOpt;
            }
            get parserSelectOptions() {
                const t = new Array();
                return (
                    t.push({ text: this.defaultParser.name, value: this.defaultParser }),
                    this.options &&
                    this.options.parsers &&
                    this.options.parsers.forEach((e) =>
                        t.push({ text: e.name, value: e })
                    ),
                    t
                );
            }
            get copyTextArea() {
                return this.$refs.copyTextArea;
            }
            get sourceView() {
                return this.$refs.sourceView;
            }
            readFile(t) {
                const e = t.target.files[0];
                if (!e) return;
                const a = new FileReader();
                (a.onload = (t) => {
                    a.result && (this.jsonStr = a.result);
                }),
                    a.readAsText(e);
            }
            openUrl(t) {
                (this.url = t),
                    window
                        .fetch(this.url)
                        .then((t) => t.text())
                        .then((t) => (this.jsonStr = t))
                        .catch((t) => (this.jsonStr = t)),
                    (this.jsonStr = JSON.stringify(
                        { action: "loading...", url: this.url },
                        null,
                        2
                    ));
            }
            get pasteSupported() {
                var t;
                return !!(null ===
                    (t =
                        null === navigator || void 0 === navigator
                            ? void 0
                            : navigator.clipboard) || void 0 === t
                    ? void 0
                    : t.readText);
            }
            paste() {
                navigator.clipboard.readText().then((t) => {
                    this.jsonStr = t;
                });
            }
            copyText(t) {
                (this.copyTextArea.value = t),
                    this.copyTextArea.select(),
                    this.copyTextArea.setSelectionRange(0, 999999999);
                const e = document.execCommand("copy");
                console.log("copy result: " + e);
            }
            get mouseOverNode() {
                return this.tstate.findNodeByPath(this.mouseEnterEvent.nodePath);
            }
            copyNode() {
                const t = this.mouseOverNode;
                t.start && t.end
                    ? this.copyText(this.jsonStr.substring(t.start.pos, t.end.pos))
                    : this.copyText(
                        S["TDJSONWriter"].writeAsString(
                            t,
                            new S["TDJSONWriterOption"]().setIndentFactor(2)
                        )
                    );
            }
            nodeMouseEnter(t) {
                (this.mouseEnterEvent = t.detail), (this.mouseInNode = !0);
                const e = this.mouseEnterEvent.source.getBoundingClientRect();
                this.treeItemActionStyle = {
                    position: "fixed",
                    top: e.top + "px",
                    left: e.right + "px",
                };
            }
            nodeMouseLeave(t) {
                var e;
                (null === (e = this.mouseEnterEvent) || void 0 === e
                    ? void 0
                    : e.source) === t.detail.source && (this.mouseInNode = !1);
            }
            mouseEnterActionBar() {
                (this.mouseInActionBarRealtime = !0),
                    setTimeout(() => (this.mouseInActionBar = !0), 500);
            }
            mouseLeaveActionBar() {
                (this.mouseInActionBarRealtime = !1),
                    setTimeout(() => {
                        this.mouseInActionBarRealtime || (this.mouseInActionBar = !1);
                    }, 500);
            }
        };
        Object(g["a"])([Object(u["b"])()], zt.prototype, "title", void 0),
            Object(g["a"])([Object(u["b"])()], zt.prototype, "data", void 0),
            Object(g["a"])([Object(u["b"])()], zt.prototype, "options", void 0),
            Object(g["a"])([Object(u["b"])()], zt.prototype, "initalPath", void 0),
            Object(g["a"])([Object(u["b"])()], zt.prototype, "rootObjectKey", void 0),
            Object(g["a"])(
                [Object(u["d"])("data", { immediate: !0 })],
                zt.prototype,
                "watchData",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("selectedParser")],
                zt.prototype,
                "watch",
                null
            ),
            Object(g["a"])(
                [Object(u["d"])("jsonStr", { immediate: !0 })],
                zt.prototype,
                "watchJsonStr",
                null
            ),
            (zt = Object(g["a"])(
                [
                    Object(u["a"])({
                        components: { TreeView: ot, JsonTable: Kt, SourceView: G },
                    }),
                ],
                zt
            ));
        var Ft = zt,
            Jt = Ft,
            Qt = (a("1a5c"), Object(f["a"])(Jt, w, O, !1, null, null, null)),
            Yt = Qt.exports;
        const Ht =
            '\n{\n  refundAmtMoney:"USD 15.32",\n  activityHistory:[\n  {\n    $type:"ActivityHist",\n    $id:1234,\n    creationDate:"2014/10/02 10:20:37",\n    lastModifiedDate:"2014/10/02 10:20:37",\n    timeStamp: 1599461650448,\n    runtimeContext:"t=118",\n    partitionKey:0,\n    activityType:"1-buyerCreateCancel",\n    log:"http://www.google.com",\n  },\n  {\n    $type:"ActivityHistBoImpl",\n    creationDate:"2014/10/02 11:15:13",\n    lastModifiedDate:"2014/10/02 11:15:13",\n    timeStamp: 1599481650448,\n    runtimeContext:"m=t=148\nline2",\n    partitionKey:0,\n    activityType:"6-sellerApprove",\n  }],\n  current: {\n    $ref: \'#/activityHistory/1\',\n  },\n  first: {\n    $ref: \'#1234\',\n  },\n}',
            Gt =
                "\n-  martin:\n    name: Martin D'vloper\n    job: Developer\n    skills:\n      - python\n      - perl\n      - pascal\n-  tabitha:\n    name: Tabitha Bitumen\n    job: Developer\n    skills:\n      - lisp\n      - fortran\n      - erlang\n",
            Xt = "document: 1\nname: 'John'\n---\ndocument: 2\nname: 'config'\n",
            Zt =
                '<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.jsonex</groupId>\n  <artifactId>jcParent</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <packaging>pom</packaging>\n  <name>JSONCoder Parent</name>\n  <description>JSONCoder Parent</description>\n  <url>https://github.com/eBay/jsonex.git</url>\n\n  <developers>\n    <developer>\n      <id>jianwu</id>\n      <name>Jianwu Chen</name>\n      <email>jianchen@ebay.com</email>\n      <organization>eBay</organization>\n      <organizationUrl>http://www.ebay.com</organizationUrl>\n      <roles>\n        <role>architect</role>\n        <role>developer</role>\n      </roles>\n      <timezone>America/San_Francisco</timezone>\n    </developer>\n  </developers>\n\n  <dependencyManagement>\n    <dependencies>\n      <dependency>\n        <groupId>${project.groupId}</groupId>\n        <artifactId>core</artifactId>\n        <version>${project.version}</version>\n      </dependency>\n      <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.8</version>\n        <scope>provided</scope>\n      </dependency>\n      <dependency>\n        <groupId>junit</groupId>\n        <artifactId>junit</artifactId>\n        <scope>test</scope>\n        <version>4.8.1</version>\n      </dependency>\n    </dependencies>\n  </dependencyManagement>\n</project>\n',
            te =
                '\n<?xml version="1.0" encoding="UTF-8"?>\n<?import javafx.geometry.Insets?>\n<GridPane hgap="8.0" vgap="8.0" xmlns="http://javafx.com/javafx/11.0.1" xmlns:fx="http://javafx.com/fxml/1" fx:controller="MainController">\n  <columnConstraints>\n    <ColumnConstraints hgrow="SOMETIMES" minWidth="10.0" />\n  </columnConstraints>\n  <rowConstraints>\n    <RowConstraints />\n    <RowConstraints vgrow="ALWAYS" />\n  </rowConstraints>\n</GridPane>\n',
            ee =
                '\nfield1,field2,field3\nv11,v12,v13\nv21, "v2l1\nV2l2" ,v23\n"v31""v31","v32""""v32",v33\n',
            ae = "{K1=v1, k2=123, k3={c=Test with ,in}, k4=[ab,c, def]}",
            se =
                "TestBean(treeMap={key1=value1}, linkedList1=[value1], intField=100, floatField=1.4, dateField=Wed Dec 31 19:23:32 PST 1969, bean2=TestBean2(strField=it's a string value, enumField=value2))",
            ne = String.raw`
# Sample from: https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format
# HELP http_requests_total The total number of HTTP requests.
# TYPE http_requests_total counter
http_requests_total{method="post",code="200"} 1027 1395066363000
http_requests_total{method="post",code="400"}    3 1395066363000

# Escaping in label values:
msdos_file_access_time_seconds{path="C:\\DIR\\FILE.TXT",error="Cannot find file:\n\"FILE.TXT\""} 1.458255915e9

# Minimalistic line:
metric_without_timestamp_and_labels 12.47

# Minimalistic line:
# HELP metric_without_timestamp_and_labels The total number of HTTP requests.
# TYPE metric_without_timestamp_and_labels counter
metric_without_timestamp_and_labels{} 12.47

# A weird metric from before the epoch:
something_weird{problem="division by zero"} +Inf -3982045

# A histogram, which has a pretty complex representation in the text format:
# HELP http_request_duration_seconds A histogram of the request duration.
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_bucket{le="0.05"} 24054
http_request_duration_seconds_bucket{le="0.1"} 33444
http_request_duration_seconds_bucket{le="0.2"} 100392
http_request_duration_seconds_bucket{le="0.5"} 129389
http_request_duration_seconds_bucket{le="1"} 133988
http_request_duration_seconds_bucket{le="+Inf"} 144320
http_request_duration_seconds_sum 53423
http_request_duration_seconds_count 144320

# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0
go_gc_duration_seconds{quantile="0.25"} 0
go_gc_duration_seconds{quantile="0.5"} 0
go_gc_duration_seconds{quantile="0.75"} 0
go_gc_duration_seconds{quantile="1"} 0
go_gc_duration_seconds_sum 0
go_gc_duration_seconds_count 0

# Finally a summary, which has a complex representation, too:
# HELP rpc_duration_seconds A summary of the RPC duration in seconds.
# TYPE rpc_duration_seconds summary
rpc_duration_seconds{quantile="0.01"} 3102
rpc_duration_seconds{quantile="0.05"} 3272
rpc_duration_seconds{quantile="0.5"} 4773
rpc_duration_seconds{quantile="0.9"} 9001
rpc_duration_seconds{quantile="0.99"} 76656
rpc_duration_seconds_sum 1.7560473e+07
rpc_duration_seconds_count 2693
`;
        var re = {
            jsonStr: Ht,
            yamlStr: Gt,
            xmlStr: Zt,
            csvStr: ee,
            mapToStringStr: ae,
            prometheusStr: ne,
            data: [
                { text: "empty", value: {} },
                { text: "jsonStr", value: Ht },
                {
                    text: "object",
                    value: {
                        testArray: ["Just a Test String", "in a Test Array", 0, 1, !0, !1],
                        component: "vue-json-tree-view",
                        descripton: "A JSON Tree View built in Vue.js",
                        tags: [{ name: "vue.js" }, { name: "JSON" }],
                        steps: [
                            "HTML Template",
                            "Root Component",
                            "View Component",
                            {
                                "Transformation Logic": [
                                    "Transform Objects",
                                    "Transform Arrays",
                                    "Transform Values",
                                ],
                            },
                            "Animate",
                            "Allow Options",
                            "Blog about it...",
                        ],
                        obj: { key1: "val1", key2: "val2" },
                    },
                },
                {
                    text: "array",
                    value: [
                        { col1: "value11", col2: "value12" },
                        { col1: "value21", col3: "value23" },
                        "value",
                        { col1: "value31", col2: "value32", col3: "value33" },
                        ["abc", "def", { a: 1, b: 2 }],
                    ],
                },
                {
                    text: "textproto",
                    value:
                        'n: {\n  n1: {\n    n11: 1\n    # Duplicated key; \':\' is emitted before \'{\'\n    n11 {\n      n111: false\n    }\n    n12: "2"\n  }\n  # Multi-line comments\n  # Line2\n  ########\n  n1: {\n    n11: "abcd"\n    #  Extension keys\n    [d.e.f]: 4\n    n11: "multiline 1\n"\n    \'line2\'\n  }\n  escapeStr: "a\\tb\\nc\\vd\\u0020e\\vf",\n  htmlStr: "<a href=test>\nThis is a link\n</a>"\n  n2: [1,2,3]\n  n2 [3,4,5]  # \':\' is emitted before \'[\'\n  "n3" [6, 7, 8, 9]\n}',
                },
                {
                    text: "json5",
                    value:
                        "// https://spec.json5.org/\n{\n  // comments\n  unquoted: 'and you can quote me on that',\n  singleQuotes: 'I can use \"double quotes\" here',\n  lineBreaks: \"Look, Mom! No \\n's!\",\n  hexadecimal: 0xdecaf,\n  leadingDecimalPoint: .8675309, andTrailing: 8675309.,\n  positiveSign: +1,\n  trailingComma: 'in objects', andIn: ['arrays',],\n  \"backwardsCompatible\": \"with JSON\",\n}\n",
                },
                {
                    text: "jsonex",
                    value:
                        '// Some comments\n{\n  "total": 100000000000000000000,\n  "longNum": 10000000000,\n  "limit": 10,\n  /* block comments */\n  "data": [\n    {\n      "name": "Some Name 1",  // More line comments\n      "address": {\n        "streetLine": "1st st",\n        city: "san jose",\n      },\n      "createdAt": "2017-07-14T17:17:33.010Z",\n    },\n    {\n      "name": "Some Name 2",\n      "address": /*comments*/ {\n        "streetLine": "2nd st",\n        city: "san jose",\n      },\n      "createdAt": "2017-07-14T17:17:33.010Z",\n    },\n    `Multiple line literal\n    Line2`\n  ],\n}\n',
                },
                {
                    text: "hjson",
                    value:
                        "{\n  // use #, // or /**/ comments,\n  // omit quotes for keys\n  key: 1\n  // omit quotes for strings\n  contains: everything on this line\n  // omit commas at the end of a line\n  cool: {\n    foo: 1\n    bar: 2\n  }\n  // allow trailing commas\n  list: [\n    1,\n    2,\n  ]\n  // and use multiline strings\n  realist:\n    '''\n    My half empty glass,\n    I will fill your empty half.\n    Now you are half full.\n    '''\n}\n",
                },
                { text: "yaml", value: Gt },
                { text: "yaml-Multi-Doc", value: Xt },
                { text: "xml", value: Zt },
                { text: "fxml (JavaFx)", value: te },
                { text: "csv", value: ee },
                { text: "map.toString", value: ae },
                { text: "lombok.toString", value: se },
                { text: "prometheus", value: ne },
            ],
        };
        class oe {
            constructor(t = "CSV", e = ",") {
                (this.name = t),
                    (this.fieldSep = e),
                    (this.syntax = "csv"),
                    (this.option = {});
            }
            looksLike(t) {
                const e = D["a"].topLines(t, 5e3);
                if (e.numLines <= 1) return !1;
                try {
                    const a = S["CSVParser"]
                        .get()
                        .parse(t.substr(0, e.length), this.csvOption),
                        s = a.children[0].getChildrenSize();
                    if (s < 2) return !1;
                    for (let t = 1; t < a.getChildrenSize(); t++)
                        if (a.children[t].getChildrenSize() !== s) return !1;
                    return !0;
                } catch (a) {
                    return !1;
                }
                return !1;
            }
            get csvOption() {
                return new S["CSVOption"]().setFieldSep(this.fieldSep);
            }
            parse(t) {
                const e = new j();
                try {
                    return (
                        (e.result = S["CSVParser"].get().parse(t, this.csvOption)),
                        (e.message = "CSVParser.parse()"),
                        e
                    );
                } catch (a) {
                    return (e.message = "Error:" + a.message), console.error(a), e;
                }
            }
            stringify(t) {
                return S["CSVWriter"].get().writeAsString(t, this.csvOption);
            }
        }
        class ie {
            constructor() {
                const t = new URL(window.location.href);
                (this.dataUrl = t.searchParams.get("dataUrl")),
                    (this.data = t.searchParams.get("data")),
                    (this.embeddedId = t.searchParams.get("embeddedId")),
                    (this.initialPath = t.searchParams.get("initialPath")),
                    (this.title = t.searchParams.get("title") || "Treedoc Viewer");
                const e = t.searchParams.get("tableConfig");
                e && (this.tableConfig = S["TD"].parse(e));
                const a = t.searchParams.get("option");
                a && (this.option = S["TD"].parse(a));
            }
        }
        const le = "HELP",
            ce = "TYPE";
        class de {
            constructor() {
                (this.help = ""), (this.type = ""), (this.metricsValues = []);
            }
            getOrCreateValue(t) {
                for (const a of this.metricsValues) if (a.matchLabels(t)) return a;
                const e = new ue();
                return Object.assign(e, t), this.metricsValues.push(e), e;
            }
        }
        class ue {
            addQuantile(t, e) {
                this.quantiles || (this.quantiles = {}), (this.quantiles[t] = e);
            }
            addBucket(t, e) {
                this.bucket || (this.bucket = {}), (this.bucket[t] = e);
            }
            matchLabels(t) {
                for (const [e, a] of Object.entries(t)) if (this[e] !== a) return !1;
                return !0;
            }
        }
        class pe {
            constructor(t) {
                (this.name = t), (this.labels = {}), (this.value = 0);
            }
        }
        class he {
            constructor() {
                (this.result = {}),
                    (this.currentMetric = new de()),
                    (this.currentMetricKey = "");
            }
            parse(t) {
                const e = new S["StringCharSource"](t);
                while (e.skipSpacesAndReturns())
                    if ("#" === e.peek()) e.skip(1), this.parseComment(e);
                    else {
                        const t = this.parseMetricLine(e);
                        this.updateCurrentMetric(t);
                    }
                return this.result;
            }
            parseComment(t) {
                if (!t.skipSpacesAndReturns()) return;
                const e = this.parseCommentOfKey(t, le);
                if (e) this.getOrCreateMetric(e.name).help = e.value;
                else {
                    const e = this.parseCommentOfKey(t, ce);
                    e && (this.getOrCreateMetric(e.name).type = e.value);
                }
                t.skipUntilTerminator("\n\r", !0);
            }
            parseCommentOfKey(t, e) {
                if (t.startsWith(e)) {
                    t.skip(e.length), t.skipChars(" ");
                    const a = t.readUntilTerminator(" ");
                    return (
                        t.skipChars(" "), { name: a, value: t.readUntilTerminator("\n\r") }
                    );
                }
                return null;
            }
            parseMetricLine(t) {
                const e = new pe(t.readUntilTerminator("{ "));
                if ("{" === t.peek()) {
                    t.skip(1);
                    while (1) {
                        const a = t.readUntilTerminator("=}");
                        if ("}" === t.read()) break;
                        const s = t.read();
                        if ('"' !== s && "'" !== s)
                            throw t.createParseRuntimeException(
                                "missing quote when expecting a string label vale"
                            );
                        const n = t.readQuotedString(s);
                        e.labels[a] = n;
                        const r = t.read();
                        if ("}" === r) break;
                        if ("," !== r)
                            throw t.createParseRuntimeException(
                                `expect ',' after label: ${a}=${n}`
                            );
                    }
                }
                return (
                    t.skipChars(" \t"),
                    (e.value = Number.parseFloat(t.readUntilTerminator(" \n\r"))),
                    t.isEof() ||
                    (" " === t.peek() &&
                        (e.timestamp = Number.parseFloat(t.readUntilTerminator("\n\r")))),
                    e
                );
            }
            updateCurrentMetric(t) {
                if (t.name === this.currentMetricKey) {
                    const e = t.labels.quantile;
                    return e
                        ? (delete t.labels.quantile,
                            void this.currentMetric
                                .getOrCreateValue(t.labels)
                                .addQuantile(e, t.value))
                        : void (this.currentMetric.getOrCreateValue(t.labels).value =
                            t.value);
                }
                if (t.name === this.currentMetricKey + "_count")
                    return void (this.currentMetric.getOrCreateValue(t.labels).count =
                        t.value);
                if (t.name === this.currentMetricKey + "_sum")
                    return void (this.currentMetric.getOrCreateValue(t.labels).sum =
                        t.value);
                if (t.name === this.currentMetricKey + "_bucket") {
                    const e = t.labels.le;
                    if (!e) throw new Error("missing bucket label: " + JSON.stringify(t));
                    return (
                        delete t.labels.le,
                        void this.currentMetric
                            .getOrCreateValue(t.labels)
                            .addBucket(e, t.value)
                    );
                }
                const e = this.getOrCreateMetric(t.name);
                (e.type = "count"), (e.getOrCreateValue({}).value = t.value);
            }
            getOrCreateMetric(t) {
                let e = this.result[t];
                return (
                    e ||
                    ((e = new de()),
                        (this.result[t] = e),
                        (this.currentMetric = e),
                        (this.currentMetricKey = t),
                        e)
                );
            }
        }
        class me {
            constructor(t = "Prometheus", e = ",") {
                (this.name = t),
                    (this.fieldSep = e),
                    (this.syntax = "csv"),
                    (this.option = {});
            }
            looksLike(t) {
                return t.indexOf("\n# HELP ") >= 0 && t.indexOf("\n# TYPE ") >= 0;
            }
            get csvOption() {
                return new S["CSVOption"]().setFieldSep(this.fieldSep);
            }
            parse(t) {
                const e = new j();
                try {
                    return (
                        (e.result = S["TDObjectCoder"].get().encode(new he().parse(t))),
                        (e.message = "PrometheusParser.parse()"),
                        e
                    );
                } catch (a) {
                    return (e.message = "Error:" + a.message), console.error(a), e;
                }
            }
            stringify(t) {
                return t.toJSON();
            }
        }
        let fe = class extends u["c"] {
            constructor() {
                super(...arguments),
                    (this.param = new ie()),
                    (this.sampleData = re.data),
                    (this.jsonData = re.data[0].value),
                    (this.tdvOption = new k().setParsers([
                        new q("Lombok.toString", A.LOMBOK_TO_STRING),
                        new q("Map.toString", A.JAVA_MAP_TO_STRING),
                        new M("XML compact", "text/xml", !0),
                        new M(),
                        new M("html", "text/html"),
                        new oe(),
                        new oe("TSV", "\t"),
                        new oe("SSV", " "),
                        new me(),
                        new I(),
                    ]));
            }
            get jsonTreeTable() {
                return this.$refs.jsonTreeTable;
            }
            beforeMount() {
                this.param.data && (this.jsonData = this.param.data),
                    this.param.option && Object.assign(this.tdvOption, this.param.option),
                    this.param.tableConfig &&
                    Object.assign(
                        this.tdvOption.defaultTableOpt,
                        this.param.tableConfig
                    ),
                    null != this.param.embeddedId &&
                    (window.parent.postMessage(
                        { type: "tdv-ready", id: this.param.embeddedId },
                        "*"
                    ),
                        window.opener &&
                        window.opener.postMessage(
                            { type: "tdv-ready", id: this.param.embeddedId },
                            "*"
                        ),
                        window.addEventListener(
                            "message",
                            (t) => {
                                "tdv-setData" === t.data.type && (this.jsonData = t.data.data);
                            },
                            !1
                        ));
            }
            mounted() {
                this.param.dataUrl && this.jsonTreeTable.openUrl(this.param.dataUrl);
            }
        };
        fe = Object(g["a"])(
            [Object(u["a"])({ components: { JsonTreeTable: Yt, JsonTable: Kt } })],
            fe
        );
        var ve = fe,
            be = ve,
            _e = (a("6228"), Object(f["a"])(be, _, y, !1, null, null, null)),
            ye = _e.exports,
            ge = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a(
                    "div",
                    { staticClass: "components-container", attrs: { id: "app" } },
                    [
                        a(
                            "json-table",
                            {
                                attrs: {
                                    "table-data": t.tstateTable,
                                    options: t.tableParam.tableConfig,
                                },
                            },
                            [
                                a(
                                    "div",
                                    { attrs: { slot: "tableTitle" }, slot: "tableTitle" },
                                    [
                                        a(
                                            "h5",
                                            {
                                                staticStyle: {
                                                    "margin-top": "6px",
                                                    "margin-right": "5px",
                                                },
                                            },
                                            [t._v(t._s(t.tableParam.title) + " ")]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ],
                    1
                );
            },
            we = [],
            Oe = function (t, e) {
                var a = e._c;
                return a("b", [e._v(e._s(e.props.value.value))]);
            },
            xe = [],
            Te = {},
            Se = Te,
            Ce = Object(f["a"])(Se, Oe, xe, !0, null, null, null),
            je = Ce.exports;
        const ke = S["LangUtil"].doIfNotNull;
        let Ee = class extends u["c"] {
            constructor() {
                super(...arguments),
                    (this.param = new ie()),
                    (this.tableParam = {
                        title: "Test Table Title",
                        jsonData: re.jsonStr,
                        initialPath: "/activityHistory",
                        tableConfig: {
                            Pagination: !1,
                            columns: [
                                { field: "activityType" },
                                { field: "partitionKey", tdComp: je },
                                {
                                    field: "$type",
                                    html: '`<a href="relative/${row.partitionKey.value}">${value.value}</a>`',
                                },
                                {
                                    field: "creationDate",
                                    html: (t, e) =>
                                        `<a href="http://abc.com/${e.runtimeContext.value}">${t.value}</a>`,
                                },
                            ],
                        },
                    });
            }
            get tstateTable() {
                const t = new V(this.tableParam.jsonData),
                    e = t.tree.root.getByPath(this.tableParam.initialPath || "");
                return e && t.select(e, !0), t;
            }
            mounted() {
                ke(this.param.title, (t) => (this.tableParam.title = t)),
                    ke(this.param.tableConfig, (t) => (this.tableParam.tableConfig = t)),
                    ke(this.param.data, (t) => (this.tableParam.jsonData = t)),
                    ke(this.param.initialPath, (t) => (this.tableParam.initialPath = t));
            }
        };
        Ee = Object(g["a"])(
            [Object(u["a"])({ components: { JsonTable: Kt } })],
            Ee
        );
        var Pe = Ee,
            De = Pe,
            Me = Object(f["a"])(De, ge, we, !1, null, null, null),
            Ae = Me.exports;
        (s["default"].config.productionTip = !1),
            s["default"].use(r["a"]),
            s["default"].use(o["a"]),
            s["default"].use(l.a),
            s["default"].use(n["a"]),
            s["default"].component("tree-view-item", tt["a"]),
            s["default"].component("codemirror", K["codemirror"]);
        const Le = new n["a"]({
            routes: [
                { path: "/", component: ye },
                { path: "/table", component: Ae },
            ],
        });
        new s["default"]({ router: Le, render: (t) => t(b) }).$mount("#app");
    },
    d276: function (t, e, a) {
        var s = a("f682");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("714a40c4", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d30e: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ef0"),
            lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                lodash__WEBPACK_IMPORTED_MODULE_0__
            ),
            treedoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6c22"),
            treedoc__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
                treedoc__WEBPACK_IMPORTED_MODULE_1__
            ),
            _TreeViewItem_vue__WEBPACK_IMPORTED_MODULE_2__ =
                __webpack_require__("9783"),
            _models_TreeUtil_ts__WEBPACK_IMPORTED_MODULE_3__ =
                __webpack_require__("e421"),
            _SimpleValue_vue__WEBPACK_IMPORTED_MODULE_4__ =
                __webpack_require__("9536");
        __webpack_exports__["a"] = {
            components: {
                TreeViewItem: _TreeViewItem_vue__WEBPACK_IMPORTED_MODULE_2__["a"],
                SimpleValue: _SimpleValue_vue__WEBPACK_IMPORTED_MODULE_4__["a"],
            },
            props: ["field", "value", "row", "xprops", "columns"],
            computed: {
                html() {
                    const col = this.col,
                        html = this.col && col.html;
                    return "function" === typeof html
                        ? html(this.value, this.row)
                        : ((value, row) => eval(html))(this.value, this.row);
                },
                col() {
                    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(
                        this.columns,
                        { field: this.field }
                    );
                },
                isLastCol() {
                    return this.col === this.columns[this.columns.length - 1];
                },
                isSimpleType() {
                    return (
                        this.value.type ===
                        treedoc__WEBPACK_IMPORTED_MODULE_1__["TDNodeType"].SIMPLE
                    );
                },
                isRawValue() {
                    return (
                        !this.value.hasOwnProperty("type") &&
                        !this.value.hasOwnProperty("isLeaf")
                    );
                },
            },
            methods: {
                nodeClicked(t) {
                    this.xprops.tstate.select(t);
                },
            },
            watch: {
                value: {
                    immediate: !0,
                    handler(t) {
                        !t ||
                            this.html ||
                            this.isSimpleType ||
                            (this.xprops.tstate.hasTreeInTable = !0);
                    },
                },
            },
        };
    },
    d580: function (t, e, a) {
        var s = a("ad23");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("3f05c944", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d82a: function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return s;
        });
        const s = "$";
    },
    dd55: function (t, e, a) {
        var s = a("2615");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("74587b90", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e421: function (t, e, a) {
        "use strict";
        a.d(e, "a", function () {
            return n;
        });
        var s = a("6c22");
        class n {
            static getSimpleTypeName(t) {
                const e = t.indexOf("<");
                e > 0 && (t = t.substr(0, e));
                const a = t.lastIndexOf(".");
                return a < 0 ? t : t.substring(a + 1);
            }
            static getTypeLabel(t) {
                let e = null;
                const a = t.getChildValue(n.KEY_TYPE);
                return (
                    a && "string" === typeof a && (e = a), e ? n.getSimpleTypeName(e) : ""
                );
            }
            static getTypeSizeLabel(t, e = !1) {
                let a =
                    t.type === s["TDNodeType"].ARRAY
                        ? `[${t.getChildrenSize()}]`
                        : `{${t.getChildrenSize()}}`,
                    r = this.getTypeLabel(t);
                const o = t.getChildValue(n.KEY_ID);
                return (
                    o && (r += "@" + o),
                    r.length > 0 && (a += ` <${r}>`),
                    e && (a = t.toStringInternal(a, !1, !1, 100)),
                    a
                );
            }
        }
        (n.KEY_TYPE = "$type"), (n.KEY_ID = "$id"), (n.KEY_REF = "$ref");
    },
    efa7: function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                ".status-msg{font-size:smaller;color:#006400}.error{color:red}.panview{max-height:100%;width:100%;background-color:#fff}.panview,.tdv-container{display:flex;flex-direction:column}.tdv-container{height:100%}.split-container{flex-grow:1;overflow:auto}.tdv-top{background-color:#d3d3d3}.tdv-toolbar{position:sticky;top:0;left:0;z-index:100}.tdv-title{color:#00008b}.tdv-hint{color:#aaa;font-size:90%}.json-tree-table * .btn-outline-secondary:hover{background-color:#bdccdc}.json-tree-table * .btn-outline-secondary:not(:disabled):not(.disabled).active,.json-tree-table * .btn-secondary{background-color:rgba(108,117,125,.6509803921568628)}.json-tree-table * .btn-outline-secondary:not(:disabled):not(.disabled).active:hover,.json-tree-table * .btn-secondary:hover:not(:disabled){background-color:#6c757d}.hiddenTextArea{left:0;top:0;position:static}.nowrap{white-space:pre;overflow:auto;word-wrap:normal}.hiddenTextArea{position:fixed;opacity:0;width:0;height:0}",
                "",
            ]),
            (t.exports = e);
    },
    f682: function (t, e, a) {
        var s = a("24fb");
        (e = s(!1)),
            e.push([
                t.i,
                "pre.tdv-value{margin-bottom:1px;overflow-wrap:anywhere}.number{color:#164}.string{color:#a11}",
                "",
            ]),
            (t.exports = e);
    },
    f8c8: function (t, e, a) {
        var s = a("310c");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("79177dd2", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fcaa: function (t, e, a) {
        var s = a("47e8");
        "string" === typeof s && (s = [[t.i, s, ""]]),
            s.locals && (t.exports = s.locals);
        var n = a("499e").default;
        n("744cec3e", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
});
//# sourceMappingURL=app.45719f99.js.map
