/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        393: function(e, t, r) {},
        394: function(e, t, r) {
            r(38), r(15), r(44), r(46),
                function(e, t, r) {
                    "use strict";
                    var n;
                    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r,
                        function(e) {
                            e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper"
                        }(n || (n = {}));
                    var l, o, d = Object.freeze({
                        containerClass: "swiper-container",
                        wrapperClass: "swiper-wrapper",
                        slideClass: "swiper-slide"
                    });
                    (function(e) {
                        e.Ready = "ready", e.ClickSlide = "clickSlide"
                    })(l || (l = {})),
                    function(e) {
                        e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
                    }(o || (o = {}));
                    var c = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];

                    function h() {
                        for (var s = 0, i = 0, e = arguments.length; i < e; i++) s += arguments[i].length;
                        var t = Array(s),
                            r = 0;
                        for (i = 0; i < e; i++)
                            for (var a = arguments[i], n = 0, l = a.length; n < l; n++, r++) t[r] = a[n];
                        return t
                    }
                    var v, m = function(e) {
                            return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase()
                        },
                        f = function(e, t, r) {
                            var n, o, d;
                            if (e && !e.destroyed) {
                                var c = (null === (n = t.composedPath) || void 0 === n ? void 0 : n.call(t)) || t.path;
                                if ((null == t ? void 0 : t.target) && c) {
                                    var h = Array.from(e.slides),
                                        v = Array.from(c);
                                    if (h.includes(t.target) || v.some((function(e) {
                                            return h.includes(e)
                                        }))) {
                                        var f = e.clickedIndex,
                                            w = Number(null === (d = null === (o = e.clickedSlide) || void 0 === o ? void 0 : o.dataset) || void 0 === d ? void 0 : d.swiperSlideIndex),
                                            y = Number.isInteger(w) ? w : null;
                                        r(l.ClickSlide, f, y), r(m(l.ClickSlide), f, y)
                                    }
                                }
                            }
                        },
                        w = function(e, t) {
                            c.forEach((function(r) {
                                e.on(r, (function() {
                                    for (var e = arguments, n = [], l = 0; l < arguments.length; l++) n[l] = e[l];
                                    t.apply(void 0, h([r], n));
                                    var o = m(r);
                                    o !== r && t.apply(void 0, h([o], n))
                                }))
                            }))
                        },
                        y = "instanceName";

                    function x(e, t) {
                        var r = function(e, t) {
                                var r, n, l, o, d = null === (n = null === (r = e.data) || void 0 === r ? void 0 : r.attrs) || void 0 === n ? void 0 : n[t];
                                return void 0 !== d ? d : null === (o = null === (l = e.data) || void 0 === l ? void 0 : l.attrs) || void 0 === o ? void 0 : o[m(t)]
                            },
                            c = function(element, e, t) {
                                return e.arg || r(t, y) || element.id || n.SwiperInstance
                            },
                            h = function(element, e, t) {
                                var r = c(element, e, t);
                                return t.context[r] || null
                            },
                            v = function(e) {
                                return e.value || t
                            },
                            x = function(input) {
                                return [!0, void 0, null, ""].includes(input)
                            },
                            E = function(e) {
                                var t, r, n = (null === (t = e.data) || void 0 === t ? void 0 : t.on) || (null === (r = e.componentOptions) || void 0 === r ? void 0 : r.listeners);
                                return function(e) {
                                    for (var t, r = arguments, l = [], o = 1; o < arguments.length; o++) l[o - 1] = r[o];
                                    var d = null === (t = n) || void 0 === t ? void 0 : t[e];
                                    d && d.fns.apply(d, l)
                                }
                            };
                        return {
                            bind: function(element, e, t) {
                                -1 === element.className.indexOf(d.containerClass) && (element.className += (element.className ? " " : "") + d.containerClass), element.addEventListener("click", (function(r) {
                                    var n = E(t),
                                        l = h(element, e, t);
                                    f(l, r, n)
                                }))
                            },
                            inserted: function(element, t, r) {
                                var n = r.context,
                                    o = v(t),
                                    d = c(element, t, r),
                                    h = E(r),
                                    m = n,
                                    f = null == m ? void 0 : m[d];
                                f && !f.destroyed || (f = new e(element, o), m[d] = f, w(f, h), h(l.Ready, f))
                            },
                            componentUpdated: function(element, e, t) {
                                var n, l, d, c, m, f, w, y, E, T, S, C, M = r(t, o.AutoUpdate);
                                if (x(M)) {
                                    var P = h(element, e, t);
                                    if (P) {
                                        var k = v(e).loop;
                                        k && (null === (l = null === (n = P) || void 0 === n ? void 0 : n.loopDestroy) || void 0 === l || l.call(n)), null === (d = null == P ? void 0 : P.update) || void 0 === d || d.call(P), null === (m = null === (c = P.navigation) || void 0 === c ? void 0 : c.update) || void 0 === m || m.call(c), null === (w = null === (f = P.pagination) || void 0 === f ? void 0 : f.render) || void 0 === w || w.call(f), null === (E = null === (y = P.pagination) || void 0 === y ? void 0 : y.update) || void 0 === E || E.call(y), k && (null === (S = null === (T = P) || void 0 === T ? void 0 : T.loopCreate) || void 0 === S || S.call(T), null === (C = null == P ? void 0 : P.update) || void 0 === C || C.call(P))
                                    }
                                }
                            },
                            unbind: function(element, e, t) {
                                var n, l = r(t, o.AutoDestroy);
                                if (x(l)) {
                                    var d = h(element, e, t);
                                    d && d.initialized && (null === (n = null == d ? void 0 : d.destroy) || void 0 === n || n.call(d, x(r(t, o.DeleteInstanceOnDestroy)), x(r(t, o.CleanupStylesOnDestroy))))
                                }
                            }
                        }
                    }

                    function E(e) {
                        var t;
                        return r.extend({
                            name: n.SwiperComponent,
                            props: (t = {
                                defaultOptions: {
                                    type: Object,
                                    required: !1,
                                    default: function() {
                                        return {}
                                    }
                                },
                                options: {
                                    type: Object,
                                    required: !1
                                }
                            }, t[o.AutoUpdate] = {
                                type: Boolean,
                                default: !0
                            }, t[o.AutoDestroy] = {
                                type: Boolean,
                                default: !0
                            }, t[o.DeleteInstanceOnDestroy] = {
                                type: Boolean,
                                required: !1,
                                default: !0
                            }, t[o.CleanupStylesOnDestroy] = {
                                type: Boolean,
                                required: !1,
                                default: !0
                            }, t),
                            data: function() {
                                var e;
                                return (e = {})[n.SwiperInstance] = null, e
                            },
                            computed: {
                                swiperInstance: {
                                    cache: !1,
                                    set: function(e) {
                                        this[n.SwiperInstance] = e
                                    },
                                    get: function() {
                                        return this[n.SwiperInstance]
                                    }
                                },
                                swiperOptions: function() {
                                    return this.options || this.defaultOptions
                                },
                                wrapperClass: function() {
                                    return this.swiperOptions.wrapperClass || d.wrapperClass
                                }
                            },
                            methods: {
                                handleSwiperClick: function(e) {
                                    f(this.swiperInstance, e, this.$emit.bind(this))
                                },
                                autoReLoopSwiper: function() {
                                    var e, t;
                                    if (this.swiperInstance && this.swiperOptions.loop) {
                                        var r = this.swiperInstance;
                                        null === (e = null == r ? void 0 : r.loopDestroy) || void 0 === e || e.call(r), null === (t = null == r ? void 0 : r.loopCreate) || void 0 === t || t.call(r)
                                    }
                                },
                                updateSwiper: function() {
                                    var e, t, r, n, l, d, c, h;
                                    this[o.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.update) || void 0 === t || t.call(e), null === (n = null === (r = this.swiperInstance.navigation) || void 0 === r ? void 0 : r.update) || void 0 === n || n.call(r), null === (d = null === (l = this.swiperInstance.pagination) || void 0 === l ? void 0 : l.render) || void 0 === d || d.call(l), null === (h = null === (c = this.swiperInstance.pagination) || void 0 === c ? void 0 : c.update) || void 0 === h || h.call(c))
                                },
                                destroySwiper: function() {
                                    var e, t;
                                    this[o.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && (null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e, this[o.DeleteInstanceOnDestroy], this[o.CleanupStylesOnDestroy]))
                                },
                                initSwiper: function() {
                                    this.swiperInstance = new e(this.$el, this.swiperOptions), w(this.swiperInstance, this.$emit.bind(this)), this.$emit(l.Ready, this.swiperInstance)
                                }
                            },
                            mounted: function() {
                                this.swiperInstance || this.initSwiper()
                            },
                            activated: function() {
                                this.updateSwiper()
                            },
                            updated: function() {
                                this.updateSwiper()
                            },
                            beforeDestroy: function() {
                                this.$nextTick(this.destroySwiper)
                            },
                            render: function(e) {
                                return e("div", {
                                    staticClass: d.containerClass,
                                    on: {
                                        click: this.handleSwiperClick
                                    }
                                }, [this.$slots[v.ParallaxBg], e("div", {
                                    class: this.wrapperClass
                                }, this.$slots.default), this.$slots[v.Pagination], this.$slots[v.PrevButton], this.$slots[v.NextButton], this.$slots[v.Scrollbar]])
                            }
                        })
                    }! function(e) {
                        e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next"
                    }(v || (v = {}));
                    var T = r.extend({
                            name: n.SwiperSlideComponent,
                            computed: {
                                slideClass: function() {
                                    var e, t;
                                    return (null === (t = null === (e = this.$parent) || void 0 === e ? void 0 : e.swiperOptions) || void 0 === t ? void 0 : t.slideClass) || d.slideClass
                                }
                            },
                            methods: {
                                update: function() {
                                    var e, t = this.$parent;
                                    t[o.AutoUpdate] && (null === (e = null == t ? void 0 : t.swiperInstance) || void 0 === e || e.update())
                                }
                            },
                            mounted: function() {
                                this.update()
                            },
                            updated: function() {
                                this.update()
                            },
                            render: function(e) {
                                return e("div", {
                                    class: this.slideClass
                                }, this.$slots.default)
                            }
                        }),
                        S = function(e) {
                            var t = function t(r, l) {
                                if (!t.installed) {
                                    var o = E(e);
                                    l && (o.options.props.defaultOptions.default = function() {
                                        return l
                                    }), r.component(n.SwiperComponent, o), r.component(n.SwiperSlideComponent, T), r.directive(n.SwiperDirective, x(e, l)), t.installed = !0
                                }
                            };
                            return t
                        };

                    function C(e) {
                        var t;
                        return (t = {
                            version: "4.1.1",
                            install: S(e),
                            directive: x(e)
                        })[n.SwiperComponent] = E(e), t[n.SwiperSlideComponent] = T, t
                    }
                    var M = C(t),
                        P = M.version,
                        k = M.install,
                        z = M.directive,
                        $ = M.Swiper,
                        I = M.SwiperSlide;
                    e.Swiper = $, e.SwiperSlide = I, e.default = M, e.directive = z, e.install = k, e.version = P, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }(t, r(706), r(9))
        },
        706: function(e, t, r) {
            "use strict";
            r.r(t);
            r(47), r(38), r(94), r(129), r(162), r(44), r(46);

            function n(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function l(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(r) {
                    void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && l(e[r], t[r])
                }))
            }
            var o = "undefined" != typeof document ? document : {},
                d = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            l(o, d);
            var c = "undefined" != typeof window ? window : {};
            l(c, {
                document: d,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                }
            });
            class h {
                constructor(e) {
                    for (var i = 0; i < e.length; i += 1) this[i] = e[i];
                    return this.length = e.length, this
                }
            }

            function v(e, t) {
                var r = [],
                    i = 0;
                if (e && !t && e instanceof h) return e;
                if (e)
                    if ("string" == typeof e) {
                        var n, l, d = e.trim();
                        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                            var v = "div";
                            for (0 === d.indexOf("<li") && (v = "ul"), 0 === d.indexOf("<tr") && (v = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (v = "tr"), 0 === d.indexOf("<tbody") && (v = "table"), 0 === d.indexOf("<option") && (v = "select"), (l = o.createElement(v)).innerHTML = d, i = 0; i < l.childNodes.length; i += 1) r.push(l.childNodes[i])
                        } else
                            for (n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || o).querySelectorAll(e.trim()) : [o.getElementById(e.trim().split("#")[1])], i = 0; i < n.length; i += 1) n[i] && r.push(n[i])
                    } else if (e.nodeType || e === c || e === o) r.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1) r.push(e[i]);
                return new h(r)
            }

            function m(e) {
                for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            v.fn = h.prototype, v.Class = h, v.Dom7 = h;
            "resize scroll".split(" ");
            var f = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    var r;
                    if (void 0 !== t) {
                        for (var i = 0; i < this.length; i += 1)(r = this[i]).dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (r = this[0]) {
                        if (r.dom7ElementDataStorage && e in r.dom7ElementDataStorage) return r.dom7ElementDataStorage[e];
                        var n = r.getAttribute("data-".concat(e));
                        return n || void 0
                    }
                },
                transform: function(e) {
                    for (var i = 0; i < this.length; i += 1) {
                        var t = this[i].style;
                        t.webkitTransform = e, t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = "".concat(e, "ms"));
                    for (var i = 0; i < this.length; i += 1) {
                        var t = this[i].style;
                        t.webkitTransitionDuration = e, t.transitionDuration = e
                    }
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var [n, l, o, d] = t;

                    function c(e) {
                        var t = e.target;
                        if (t) {
                            var r = e.target.dom7EventData || [];
                            if (r.indexOf(e) < 0 && r.unshift(e), v(t).is(l)) o.apply(t, r);
                            else
                                for (var n = v(t).parents(), d = 0; d < n.length; d += 1) v(n[d]).is(l) && o.apply(n[d], r)
                        }
                    }

                    function h(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t)
                    }
                    "function" == typeof t[1] && ([n, o, d] = t, l = void 0), d || (d = !1);
                    for (var m, f = n.split(" "), i = 0; i < this.length; i += 1) {
                        var w = this[i];
                        if (l)
                            for (m = 0; m < f.length; m += 1) {
                                var y = f[m];
                                w.dom7LiveListeners || (w.dom7LiveListeners = {}), w.dom7LiveListeners[y] || (w.dom7LiveListeners[y] = []), w.dom7LiveListeners[y].push({
                                    listener: o,
                                    proxyListener: c
                                }), w.addEventListener(y, c, d)
                            } else
                                for (m = 0; m < f.length; m += 1) {
                                    var x = f[m];
                                    w.dom7Listeners || (w.dom7Listeners = {}), w.dom7Listeners[x] || (w.dom7Listeners[x] = []), w.dom7Listeners[x].push({
                                        listener: o,
                                        proxyListener: h
                                    }), w.addEventListener(x, h, d)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var [n, l, o, d] = t;
                    "function" == typeof t[1] && ([n, o, d] = t, l = void 0), d || (d = !1);
                    for (var c = n.split(" "), i = 0; i < c.length; i += 1)
                        for (var h = c[i], v = 0; v < this.length; v += 1) {
                            var m = this[v],
                                f = void 0;
                            if (!l && m.dom7Listeners ? f = m.dom7Listeners[h] : l && m.dom7LiveListeners && (f = m.dom7LiveListeners[h]), f && f.length)
                                for (var w = f.length - 1; w >= 0; w -= 1) {
                                    var y = f[w];
                                    o && y.listener === o || o && y.listener && y.listener.dom7proxy && y.listener.dom7proxy === o ? (m.removeEventListener(h, y.proxyListener, d), f.splice(w, 1)) : o || (m.removeEventListener(h, y.proxyListener, d), f.splice(w, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    for (var n = t[0].split(" "), l = t[1], i = 0; i < n.length; i += 1)
                        for (var d = n[i], h = 0; h < this.length; h += 1) {
                            var v = this[h],
                                m = void 0;
                            try {
                                m = new c.CustomEvent(d, {
                                    detail: l,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (m = o.createEvent("Event")).initEvent(d, !0, !0), m.detail = l
                            }
                            v.dom7EventData = t.filter(((data, e) => e > 0)), v.dispatchEvent(m), v.dom7EventData = [], delete v.dom7EventData
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var i, t = ["webkitTransitionEnd", "transitionend"],
                        r = this;

                    function n(l) {
                        if (l.target === this)
                            for (e.call(this, l), i = 0; i < t.length; i += 1) r.off(t[i], n)
                    }
                    if (e)
                        for (i = 0; i < t.length; i += 1) r.on(t[i], n);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            body = o.body,
                            r = e.clientTop || body.clientTop || 0,
                            n = e.clientLeft || body.clientLeft || 0,
                            l = e === c ? c.scrollY : e.scrollTop,
                            d = e === c ? c.scrollX : e.scrollLeft;
                        return {
                            top: t.top + l - r,
                            left: t.left + d - n
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (var r in e) this[i].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return c.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (var i = 0; i < this.length; i += 1)
                        if (!1 === e.call(this[i], i, this[i])) return this;
                    return this
                },
                html: function(html) {
                    if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                    for (var i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                    return this
                },
                text: function(text) {
                    if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                    for (var i = 0; i < this.length; i += 1) this[i].textContent = text;
                    return this
                },
                is: function(e) {
                    var t, i, r = this[0];
                    if (!r || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (r.matches) return r.matches(e);
                        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
                        if (r.msMatchesSelector) return r.msMatchesSelector(e);
                        for (t = v(e), i = 0; i < t.length; i += 1)
                            if (t[i] === r) return !0;
                        return !1
                    }
                    if (e === o) return r === o;
                    if (e === c) return r === c;
                    if (e.nodeType || e instanceof h) {
                        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                            if (t[i] === r) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var i, e = this[0];
                    if (e) {
                        for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                        return i
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t, r = this.length;
                    return new h(e > r - 1 ? [] : e < 0 ? (t = r + e) < 0 ? [] : [this[t]] : [this[e]])
                },
                append: function() {
                    for (var e, t = 0; t < arguments.length; t += 1) {
                        e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                        for (var i = 0; i < this.length; i += 1)
                            if ("string" == typeof e) {
                                var r = o.createElement("div");
                                for (r.innerHTML = e; r.firstChild;) this[i].appendChild(r.firstChild)
                            } else if (e instanceof h)
                            for (var n = 0; n < e.length; n += 1) this[i].appendChild(e[n]);
                        else this[i].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    var i, t;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            var r = o.createElement("div");
                            for (r.innerHTML = e, t = r.childNodes.length - 1; t >= 0; t -= 1) this[i].insertBefore(r.childNodes[t], this[i].childNodes[0])
                        } else if (e instanceof h)
                        for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e) ? new h([this[0].nextElementSibling]) : new h([]) : this[0].nextElementSibling ? new h([this[0].nextElementSibling]) : new h([]) : new h([])
                },
                nextAll: function(e) {
                    var t = [],
                        r = this[0];
                    if (!r) return new h([]);
                    for (; r.nextElementSibling;) {
                        var n = r.nextElementSibling;
                        e ? v(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return new h(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && v(t.previousElementSibling).is(e) ? new h([t.previousElementSibling]) : new h([]) : t.previousElementSibling ? new h([t.previousElementSibling]) : new h([])
                    }
                    return new h([])
                },
                prevAll: function(e) {
                    var t = [],
                        r = this[0];
                    if (!r) return new h([]);
                    for (; r.previousElementSibling;) {
                        var n = r.previousElementSibling;
                        e ? v(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return new h(t)
                },
                parent: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? v(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return v(m(t))
                },
                parents: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var r = this[i].parentNode; r;) e ? v(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
                    return v(m(t))
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? new h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var r = this[i].querySelectorAll(e), n = 0; n < r.length; n += 1) t.push(r[n]);
                    return new h(t)
                },
                children: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var r = this[i].childNodes, n = 0; n < r.length; n += 1) e ? 1 === r[n].nodeType && v(r[n]).is(e) && t.push(r[n]) : 1 === r[n].nodeType && t.push(r[n]);
                    return new h(m(t))
                },
                filter: function(e) {
                    for (var t = [], r = this, i = 0; i < r.length; i += 1) e.call(r[i], i, r[i]) && t.push(r[i]);
                    return new h(t)
                },
                remove: function() {
                    for (var i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                    return this
                },
                add: function() {
                    for (var i, e, t = this, r = arguments.length, n = new Array(r), l = 0; l < r; l++) n[l] = arguments[l];
                    for (i = 0; i < n.length; i += 1) {
                        var o = v(n[i]);
                        for (e = 0; e < o.length; e += 1) t[t.length] = o[e], t.length += 1
                    }
                    return t
                },
                styles: function() {
                    return this[0] ? c.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(f).forEach((e => {
                v.fn[e] = v.fn[e] || f[e]
            }));
            var w = {
                    deleteProps(e) {
                        var object = e;
                        Object.keys(object).forEach((e => {
                            try {
                                object[e] = null
                            } catch (e) {}
                            try {
                                delete object[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick(e) {
                        return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
                    },
                    now: () => Date.now(),
                    getTranslate(e) {
                        var t, r, n, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                            o = c.getComputedStyle(e, null);
                        return c.WebKitCSSMatrix ? ((r = o.transform || o.webkitTransform).split(",").length > 6 && (r = r.split(", ").map((a => a.replace(",", "."))).join(", ")), n = new c.WebKitCSSMatrix("none" === r ? "" : r)) : t = (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === l && (r = c.WebKitCSSMatrix ? n.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === l && (r = c.WebKitCSSMatrix ? n.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), r || 0
                    },
                    parseUrlQuery(e) {
                        var i, t, param, r, n = {},
                            l = e || c.location.href;
                        if ("string" == typeof l && l.length)
                            for (r = (t = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter((e => "" !== e))).length, i = 0; i < r; i += 1) param = t[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                        return n
                    },
                    isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                    extend() {
                        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), i = 1; i < arguments.length; i += 1) {
                            var t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                            if (null != t)
                                for (var r = Object.keys(Object(t)), n = 0, l = r.length; n < l; n += 1) {
                                    var o = r[n],
                                        desc = Object.getOwnPropertyDescriptor(t, o);
                                    void 0 !== desc && desc.enumerable && (w.isObject(e[o]) && w.isObject(t[o]) ? w.extend(e[o], t[o]) : !w.isObject(e[o]) && w.isObject(t[o]) ? (e[o] = {}, w.extend(e[o], t[o])) : e[o] = t[o])
                                }
                        }
                        return e
                    }
                },
                y = {
                    touch: !!("ontouchstart" in c || c.DocumentTouch && o instanceof c.DocumentTouch),
                    pointerEvents: !!c.PointerEvent && "maxTouchPoints" in c.navigator && c.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in c || "WebkitMutationObserver" in c,
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get() {
                                    e = !0
                                }
                            });
                            c.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in c
                };
            class x {
                constructor() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((e => {
                        t.on(e, t.params.on[e])
                    }))
                }
                on(e, t, r) {
                    var n = this;
                    if ("function" != typeof t) return n;
                    var l = r ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][l](t)
                    })), n
                }
                once(e, t, r) {
                    var n = this;
                    if ("function" != typeof t) return n;

                    function l() {
                        n.off(e, l), l.f7proxy && delete l.f7proxy;
                        for (var r = arguments.length, o = new Array(r), d = 0; d < r; d++) o[d] = arguments[d];
                        t.apply(n, o)
                    }
                    return l.f7proxy = t, n.on(e, l, r)
                }
                off(e, t) {
                    var r = this;
                    return r.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].length && r.eventsListeners[e].forEach(((n, l) => {
                            (n === t || n.f7proxy && n.f7proxy === t) && r.eventsListeners[e].splice(l, 1)
                        }))
                    })), r) : r
                }
                emit() {
                    var e, data, t, r = this;
                    if (!r.eventsListeners) return r;
                    for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o];
                    return "string" == typeof l[0] || Array.isArray(l[0]) ? (e = l[0], data = l.slice(1, l.length), t = r) : (e = l[0].events, data = l[0].data, t = l[0].context || r), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
                        if (r.eventsListeners && r.eventsListeners[e]) {
                            var n = [];
                            r.eventsListeners[e].forEach((e => {
                                n.push(e)
                            })), n.forEach((e => {
                                e.apply(t, data)
                            }))
                        }
                    })), r
                }
                useModulesParams(e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((r => {
                        var n = t.modules[r];
                        n.params && w.extend(e, n.params)
                    }))
                }
                useModules() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this;
                    t.modules && Object.keys(t.modules).forEach((r => {
                        var n = t.modules[r],
                            l = e[r] || {};
                        n.instance && Object.keys(n.instance).forEach((e => {
                            var r = n.instance[e];
                            t[e] = "function" == typeof r ? r.bind(t) : r
                        })), n.on && t.on && Object.keys(n.on).forEach((e => {
                            t.on(e, n.on[e])
                        })), n.create && n.create.bind(t)(l)
                    }))
                }
                static set components(e) {
                    this.use && this.use(e)
                }
                static installModule(e) {
                    var t = this;
                    t.prototype.modules || (t.prototype.modules = {});
                    var r = e.name || "".concat(Object.keys(t.prototype.modules).length, "_").concat(w.now());
                    if (t.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach((r => {
                            t.prototype[r] = e.proto[r]
                        })), e.static && Object.keys(e.static).forEach((r => {
                            t[r] = e.static[r]
                        })), e.install) {
                        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) l[o - 1] = arguments[o];
                        e.install.apply(t, l)
                    }
                    return t
                }
                static use(e) {
                    var t = this;
                    if (Array.isArray(e)) return e.forEach((e => t.installModule(e))), t;
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) n[l - 1] = arguments[l];
                    return t.installModule(e, ...n)
                }
            }
            var E = {
                updateSize: function() {
                    var e, t, r = this,
                        n = r.$el;
                    e = void 0 !== r.params.width ? r.params.width : n[0].clientWidth, t = void 0 !== r.params.height ? r.params.height : n[0].clientHeight, 0 === e && r.isHorizontal() || 0 === t && r.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), w.extend(r, {
                        width: e,
                        height: t,
                        size: r.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this,
                        t = e.params,
                        {
                            $wrapperEl: r,
                            size: n,
                            rtlTranslate: l,
                            wrongRTL: o
                        } = e,
                        d = e.virtual && t.virtual.enabled,
                        h = d ? e.virtual.slides.length : e.slides.length,
                        v = r.children(".".concat(e.params.slideClass)),
                        m = d ? e.virtual.slides.length : v.length,
                        f = [],
                        y = [],
                        x = [];

                    function E(e) {
                        return !t.cssMode || e !== v.length - 1
                    }
                    var T = t.slidesOffsetBefore;
                    "function" == typeof T && (T = t.slidesOffsetBefore.call(e));
                    var S = t.slidesOffsetAfter;
                    "function" == typeof S && (S = t.slidesOffsetAfter.call(e));
                    var C = e.snapGrid.length,
                        M = e.snapGrid.length,
                        P = t.spaceBetween,
                        k = -T,
                        z = 0,
                        $ = 0;
                    if (void 0 !== n) {
                        var I, L;
                        "string" == typeof P && P.indexOf("%") >= 0 && (P = parseFloat(P.replace("%", "")) / 100 * n), e.virtualSize = -P, l ? v.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : v.css({
                            marginRight: "",
                            marginBottom: ""
                        }), t.slidesPerColumn > 1 && (I = Math.floor(m / t.slidesPerColumn) === m / e.params.slidesPerColumn ? m : Math.ceil(m / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (I = Math.max(I, t.slidesPerView * t.slidesPerColumn)));
                        for (var O, D = t.slidesPerColumn, A = I / D, B = Math.floor(m / t.slidesPerColumn), i = 0; i < m; i += 1) {
                            L = 0;
                            var G = v.eq(i);
                            if (t.slidesPerColumn > 1) {
                                var N = void 0,
                                    H = void 0,
                                    X = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var V = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                                        Y = i - t.slidesPerColumn * t.slidesPerGroup * V,
                                        F = 0 === V ? t.slidesPerGroup : Math.min(Math.ceil((m - V * D * t.slidesPerGroup) / D), t.slidesPerGroup);
                                    N = (H = Y - (X = Math.floor(Y / F)) * F + V * t.slidesPerGroup) + X * I / D, G.css({
                                        "-webkit-box-ordinal-group": N,
                                        "-moz-box-ordinal-group": N,
                                        "-ms-flex-order": N,
                                        "-webkit-order": N,
                                        order: N
                                    })
                                } else "column" === t.slidesPerColumnFill ? (X = i - (H = Math.floor(i / D)) * D, (H > B || H === B && X === D - 1) && (X += 1) >= D && (X = 0, H += 1)) : H = i - (X = Math.floor(i / A)) * A;
                                G.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== X && t.spaceBetween && "".concat(t.spaceBetween, "px"))
                            }
                            if ("none" !== G.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var W = c.getComputedStyle(G[0], null),
                                        R = G[0].style.transform,
                                        j = G[0].style.webkitTransform;
                                    if (R && (G[0].style.transform = "none"), j && (G[0].style.webkitTransform = "none"), t.roundLengths) L = e.isHorizontal() ? G.outerWidth(!0) : G.outerHeight(!0);
                                    else if (e.isHorizontal()) {
                                        var U = parseFloat(W.getPropertyValue("width")),
                                            K = parseFloat(W.getPropertyValue("padding-left")),
                                            _ = parseFloat(W.getPropertyValue("padding-right")),
                                            Z = parseFloat(W.getPropertyValue("margin-left")),
                                            J = parseFloat(W.getPropertyValue("margin-right")),
                                            Q = W.getPropertyValue("box-sizing");
                                        L = Q && "border-box" === Q ? U + Z + J : U + K + _ + Z + J
                                    } else {
                                        var ee = parseFloat(W.getPropertyValue("height")),
                                            te = parseFloat(W.getPropertyValue("padding-top")),
                                            ae = parseFloat(W.getPropertyValue("padding-bottom")),
                                            ie = parseFloat(W.getPropertyValue("margin-top")),
                                            se = parseFloat(W.getPropertyValue("margin-bottom")),
                                            re = W.getPropertyValue("box-sizing");
                                        L = re && "border-box" === re ? ee + ie + se : ee + te + ae + ie + se
                                    }
                                    R && (G[0].style.transform = R), j && (G[0].style.webkitTransform = j), t.roundLengths && (L = Math.floor(L))
                                } else L = (n - (t.slidesPerView - 1) * P) / t.slidesPerView, t.roundLengths && (L = Math.floor(L)), v[i] && (e.isHorizontal() ? v[i].style.width = "".concat(L, "px") : v[i].style.height = "".concat(L, "px"));
                                v[i] && (v[i].swiperSlideSize = L), x.push(L), t.centeredSlides ? (k = k + L / 2 + z / 2 + P, 0 === z && 0 !== i && (k = k - n / 2 - P), 0 === i && (k = k - n / 2 - P), Math.abs(k) < .001 && (k = 0), t.roundLengths && (k = Math.floor(k)), $ % t.slidesPerGroup == 0 && f.push(k), y.push(k)) : (t.roundLengths && (k = Math.floor(k)), ($ - Math.min(e.params.slidesPerGroupSkip, $)) % e.params.slidesPerGroup == 0 && f.push(k), y.push(k), k = k + L + P), e.virtualSize += L + P, z = L, $ += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, n) + S, l && o && ("slide" === t.effect || "coverflow" === t.effect) && r.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }), t.setWrapperSize && (e.isHorizontal() ? r.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }) : r.css({
                                height: "".concat(e.virtualSize + t.spaceBetween, "px")
                            })), t.slidesPerColumn > 1 && (e.virtualSize = (L + t.spaceBetween) * I, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? r.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }) : r.css({
                                height: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }), t.centeredSlides)) {
                            O = [];
                            for (var ne = 0; ne < f.length; ne += 1) {
                                var le = f[ne];
                                t.roundLengths && (le = Math.floor(le)), f[ne] < e.virtualSize + f[0] && O.push(le)
                            }
                            f = O
                        }
                        if (!t.centeredSlides) {
                            O = [];
                            for (var oe = 0; oe < f.length; oe += 1) {
                                var de = f[oe];
                                t.roundLengths && (de = Math.floor(de)), f[oe] <= e.virtualSize - n && O.push(de)
                            }
                            f = O, Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n)
                        }
                        if (0 === f.length && (f = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? l ? v.filter(E).css({
                                marginLeft: "".concat(P, "px")
                            }) : v.filter(E).css({
                                marginRight: "".concat(P, "px")
                            }) : v.filter(E).css({
                                marginBottom: "".concat(P, "px")
                            })), t.centeredSlides && t.centeredSlidesBounds) {
                            var ce = 0;
                            x.forEach((e => {
                                ce += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }));
                            var pe = (ce -= t.spaceBetween) - n;
                            f = f.map((e => e < 0 ? -T : e > pe ? pe + S : e))
                        }
                        if (t.centerInsufficientSlides) {
                            var ue = 0;
                            if (x.forEach((e => {
                                    ue += e + (t.spaceBetween ? t.spaceBetween : 0)
                                })), (ue -= t.spaceBetween) < n) {
                                var he = (n - ue) / 2;
                                f.forEach(((e, t) => {
                                    f[t] = e - he
                                })), y.forEach(((e, t) => {
                                    y[t] = e + he
                                }))
                            }
                        }
                        w.extend(e, {
                            slides: v,
                            snapGrid: f,
                            slidesGrid: y,
                            slidesSizesGrid: x
                        }), m !== h && e.emit("slidesLengthChange"), f.length !== C && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), y.length !== M && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var i, t = this,
                        r = [],
                        n = 0;
                    if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each(((e, t) => {
                            r.push(t)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                var l = t.activeIndex + i;
                                if (l > t.slides.length) break;
                                r.push(t.slides.eq(l)[0])
                            } else r.push(t.slides.eq(t.activeIndex)[0]);
                    for (i = 0; i < r.length; i += 1)
                        if (void 0 !== r[i]) {
                            var o = r[i].offsetHeight;
                            n = o > n ? o : n
                        }
                    n && t.$wrapperEl.css("height", "".concat(n, "px"))
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop
                },
                updateSlidesProgress: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                        t = this,
                        r = t.params,
                        {
                            slides: n,
                            rtlTranslate: l
                        } = t;
                    if (0 !== n.length) {
                        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                        var o = -e;
                        l && (o = e), n.removeClass(r.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var i = 0; i < n.length; i += 1) {
                            var d = n[i],
                                c = (o + (r.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + r.spaceBetween);
                            if (r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) {
                                var h = -(o - d.swiperSlideOffset),
                                    m = h + t.slidesSizesGrid[i],
                                    f = h >= 0 && h < t.size - 1 || m > 1 && m <= t.size || h <= 0 && m >= t.size;
                                f && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(i), n.eq(i).addClass(r.slideVisibleClass))
                            }
                            d.progress = l ? -c : c
                        }
                        t.visibleSlides = v(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var r = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * r || 0
                    }
                    var n = t.params,
                        l = t.maxTranslate() - t.minTranslate(),
                        {
                            progress: progress,
                            isBeginning: o,
                            isEnd: d
                        } = t,
                        c = o,
                        h = d;
                    0 === l ? (progress = 0, o = !0, d = !0) : (o = (progress = (e - t.minTranslate()) / l) <= 0, d = progress >= 1), w.extend(t, {
                        progress: progress,
                        isBeginning: o,
                        isEnd: d
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), o && !c && t.emit("reachBeginning toEdge"), d && !h && t.emit("reachEnd toEdge"), (c && !o || h && !d) && t.emit("fromEdge"), t.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        {
                            slides: r,
                            params: n,
                            $wrapperEl: l,
                            activeIndex: o,
                            realIndex: d
                        } = t,
                        c = t.virtual && n.virtual.enabled;
                    r.removeClass("".concat(n.slideActiveClass, " ").concat(n.slideNextClass, " ").concat(n.slidePrevClass, " ").concat(n.slideDuplicateActiveClass, " ").concat(n.slideDuplicateNextClass, " ").concat(n.slideDuplicatePrevClass)), (e = c ? t.$wrapperEl.find(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(o, '"]')) : r.eq(o)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? l.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(d, '"]')).addClass(n.slideDuplicateActiveClass) : l.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(d, '"]')).addClass(n.slideDuplicateActiveClass));
                    var h = e.nextAll(".".concat(n.slideClass)).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === h.length && (h = r.eq(0)).addClass(n.slideNextClass);
                    var v = e.prevAll(".".concat(n.slideClass)).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === v.length && (v = r.eq(-1)).addClass(n.slidePrevClass), n.loop && (h.hasClass(n.slideDuplicateClass) ? l.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(h.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass) : l.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(h.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass), v.hasClass(n.slideDuplicateClass) ? l.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(v.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass) : l.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(v.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, r = this,
                        n = r.rtlTranslate ? r.translate : -r.translate,
                        {
                            slidesGrid: l,
                            snapGrid: o,
                            params: d,
                            activeIndex: c,
                            realIndex: h,
                            snapIndex: v
                        } = r,
                        m = e;
                    if (void 0 === m) {
                        for (var i = 0; i < l.length; i += 1) void 0 !== l[i + 1] ? n >= l[i] && n < l[i + 1] - (l[i + 1] - l[i]) / 2 ? m = i : n >= l[i] && n < l[i + 1] && (m = i + 1) : n >= l[i] && (m = i);
                        d.normalizeSlideIndex && (m < 0 || void 0 === m) && (m = 0)
                    }
                    if (o.indexOf(n) >= 0) t = o.indexOf(n);
                    else {
                        var f = Math.min(d.slidesPerGroupSkip, m);
                        t = f + Math.floor((m - f) / d.slidesPerGroup)
                    }
                    if (t >= o.length && (t = o.length - 1), m !== c) {
                        var y = parseInt(r.slides.eq(m).attr("data-swiper-slide-index") || m, 10);
                        w.extend(r, {
                            snapIndex: t,
                            realIndex: y,
                            previousIndex: c,
                            activeIndex: m
                        }), r.emit("activeIndexChange"), r.emit("snapIndexChange"), h !== y && r.emit("realIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && r.emit("slideChange")
                    } else t !== v && (r.snapIndex = t, r.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this,
                        r = t.params,
                        n = v(e.target).closest(".".concat(r.slideClass))[0],
                        l = !1;
                    if (n)
                        for (var i = 0; i < t.slides.length; i += 1) t.slides[i] === n && (l = !0);
                    if (!n || !l) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(v(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = v(n).index(), r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var T = {
                getTranslate: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                        t = this,
                        {
                            params: r,
                            rtlTranslate: n,
                            translate: l,
                            $wrapperEl: o
                        } = t;
                    if (r.virtualTranslate) return n ? -l : l;
                    if (r.cssMode) return l;
                    var d = w.getTranslate(o[0], e);
                    return n && (d = -d), d || 0
                },
                setTranslate: function(e, t) {
                    var r = this,
                        {
                            rtlTranslate: n,
                            params: l,
                            $wrapperEl: o,
                            wrapperEl: d,
                            progress: progress
                        } = r,
                        c = 0,
                        h = 0;
                    r.isHorizontal() ? c = n ? -e : e : h = e, l.roundLengths && (c = Math.floor(c), h = Math.floor(h)), l.cssMode ? d[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -h : l.virtualTranslate || o.transform("translate3d(".concat(c, "px, ").concat(h, "px, ").concat(0, "px)")), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? c : h;
                    var v = r.maxTranslate() - r.minTranslate();
                    (0 === v ? 0 : (e - r.minTranslate()) / v) !== progress && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        l = arguments.length > 4 ? arguments[4] : void 0,
                        o = this,
                        {
                            params: d,
                            wrapperEl: c
                        } = o;
                    if (o.animating && d.preventInteractionOnTransition) return !1;
                    var h, v = o.minTranslate(),
                        m = o.maxTranslate();
                    if (h = n && e > v ? v : n && e < m ? m : e, o.updateProgress(h), d.cssMode) {
                        var f = o.isHorizontal();
                        return 0 === t ? c[f ? "scrollLeft" : "scrollTop"] = -h : c.scrollTo ? c.scrollTo({
                            [f ? "left" : "top"]: -h,
                            behavior: "smooth"
                        }) : c[f ? "scrollLeft" : "scrollTop"] = -h, !0
                    }
                    return 0 === t ? (o.setTransition(0), o.setTranslate(h), r && (o.emit("beforeTransitionStart", t, l), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(h), r && (o.emit("beforeTransitionStart", t, l), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, r && o.emit("transitionEnd"))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                }
            };
            var S = {
                setTransition: function(e, t) {
                    var r = this;
                    r.params.cssMode || r.$wrapperEl.transition(e), r.emit("setTransition", e, t)
                },
                transitionStart: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = this,
                        {
                            activeIndex: n,
                            params: l,
                            previousIndex: o
                        } = r;
                    if (!l.cssMode) {
                        l.autoHeight && r.updateAutoHeight();
                        var d = t;
                        if (d || (d = n > o ? "next" : n < o ? "prev" : "reset"), r.emit("transitionStart"), e && n !== o) {
                            if ("reset" === d) return void r.emit("slideResetTransitionStart");
                            r.emit("slideChangeTransitionStart"), "next" === d ? r.emit("slideNextTransitionStart") : r.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = this,
                        {
                            activeIndex: n,
                            previousIndex: l,
                            params: o
                        } = r;
                    if (r.animating = !1, !o.cssMode) {
                        r.setTransition(0);
                        var d = t;
                        if (d || (d = n > l ? "next" : n < l ? "prev" : "reset"), r.emit("transitionEnd"), e && n !== l) {
                            if ("reset" === d) return void r.emit("slideResetTransitionEnd");
                            r.emit("slideChangeTransitionEnd"), "next" === d ? r.emit("slideNextTransitionEnd") : r.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            };
            var C = {
                slideTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        l = this,
                        o = e;
                    o < 0 && (o = 0);
                    var {
                        params: d,
                        snapGrid: c,
                        slidesGrid: h,
                        previousIndex: v,
                        activeIndex: m,
                        rtlTranslate: f,
                        wrapperEl: w
                    } = l;
                    if (l.animating && d.preventInteractionOnTransition) return !1;
                    var y = Math.min(l.params.slidesPerGroupSkip, o),
                        x = y + Math.floor((o - y) / l.params.slidesPerGroup);
                    x >= c.length && (x = c.length - 1), (m || d.initialSlide || 0) === (v || 0) && r && l.emit("beforeSlideChangeStart");
                    var E, T = -c[x];
                    if (l.updateProgress(T), d.normalizeSlideIndex)
                        for (var i = 0; i < h.length; i += 1) - Math.floor(100 * T) >= Math.floor(100 * h[i]) && (o = i);
                    if (l.initialized && o !== m) {
                        if (!l.allowSlideNext && T < l.translate && T < l.minTranslate()) return !1;
                        if (!l.allowSlidePrev && T > l.translate && T > l.maxTranslate() && (m || 0) !== o) return !1
                    }
                    if (E = o > m ? "next" : o < m ? "prev" : "reset", f && -T === l.translate || !f && T === l.translate) return l.updateActiveIndex(o), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(T), "reset" !== E && (l.transitionStart(r, E), l.transitionEnd(r, E)), !1;
                    if (d.cssMode) {
                        var S = l.isHorizontal(),
                            C = -T;
                        return f && (C = w.scrollWidth - w.offsetWidth - C), 0 === t ? w[S ? "scrollLeft" : "scrollTop"] = C : w.scrollTo ? w.scrollTo({
                            [S ? "left" : "top"]: C,
                            behavior: "smooth"
                        }) : w[S ? "scrollLeft" : "scrollTop"] = C, !0
                    }
                    return 0 === t ? (l.setTransition(0), l.setTranslate(T), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, n), l.transitionStart(r, E), l.transitionEnd(r, E)) : (l.setTransition(t), l.setTranslate(T), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, n), l.transitionStart(r, E), l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(r, E))
                    }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        l = this,
                        o = e;
                    return l.params.loop && (o += l.loopedSlides), l.slideTo(o, t, r, n)
                },
                slideNext: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        {
                            params: l,
                            animating: o
                        } = n,
                        d = n.activeIndex < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup;
                    if (l.loop) {
                        if (o) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return n.slideTo(n.activeIndex + d, e, t, r)
                },
                slidePrev: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        {
                            params: l,
                            animating: o,
                            snapGrid: d,
                            slidesGrid: c,
                            rtlTranslate: h
                        } = n;
                    if (l.loop) {
                        if (o) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    var v = h ? n.translate : -n.translate;

                    function m(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var f, w = m(v),
                        y = d.map((e => m(e))),
                        x = (c.map((e => m(e))), d[y.indexOf(w)], d[y.indexOf(w) - 1]);
                    return void 0 === x && l.cssMode && d.forEach((e => {
                        !x && w >= e && (x = e)
                    })), void 0 !== x && (f = c.indexOf(x)) < 0 && (f = n.activeIndex - 1), n.slideTo(f, e, t, r)
                },
                slideReset: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = this;
                    return n.slideTo(n.activeIndex, e, t, r)
                },
                slideToClosest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        l = this,
                        o = l.activeIndex,
                        d = Math.min(l.params.slidesPerGroupSkip, o),
                        c = d + Math.floor((o - d) / l.params.slidesPerGroup),
                        h = l.rtlTranslate ? l.translate : -l.translate;
                    if (h >= l.snapGrid[c]) {
                        var v = l.snapGrid[c],
                            m = l.snapGrid[c + 1];
                        h - v > (m - v) * n && (o += l.params.slidesPerGroup)
                    } else {
                        var f = l.snapGrid[c - 1],
                            w = l.snapGrid[c];
                        h - f <= (w - f) * n && (o -= l.params.slidesPerGroup)
                    }
                    return o = Math.max(o, 0), o = Math.min(o, l.slidesGrid.length - 1), l.slideTo(o, e, t, r)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        {
                            params: r,
                            $wrapperEl: n
                        } = t,
                        l = "auto" === r.slidesPerView ? t.slidesPerViewDynamic() : r.slidesPerView,
                        o = t.clickedIndex;
                    if (r.loop) {
                        if (t.animating) return;
                        e = parseInt(v(t.clickedSlide).attr("data-swiper-slide-index"), 10), r.centeredSlides ? o < t.loopedSlides - l / 2 || o > t.slides.length - t.loopedSlides + l / 2 ? (t.loopFix(), o = n.children(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(r.slideDuplicateClass, ")")).eq(0).index(), w.nextTick((() => {
                            t.slideTo(o)
                        }))) : t.slideTo(o) : o > t.slides.length - l ? (t.loopFix(), o = n.children(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(r.slideDuplicateClass, ")")).eq(0).index(), w.nextTick((() => {
                            t.slideTo(o)
                        }))) : t.slideTo(o)
                    } else t.slideTo(o)
                }
            };
            var M = {
                loopCreate: function() {
                    var e = this,
                        {
                            params: t,
                            $wrapperEl: r
                        } = e;
                    r.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
                    var n = r.children(".".concat(t.slideClass));
                    if (t.loopFillGroupWithBlank) {
                        var l = t.slidesPerGroup - n.length % t.slidesPerGroup;
                        if (l !== t.slidesPerGroup) {
                            for (var i = 0; i < l; i += 1) {
                                var d = v(o.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));
                                r.append(d)
                            }
                            n = r.children(".".concat(t.slideClass))
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                    var c = [],
                        h = [];
                    n.each(((t, r) => {
                        var l = v(r);
                        t < e.loopedSlides && h.push(r), t < n.length && t >= n.length - e.loopedSlides && c.push(r), l.attr("data-swiper-slide-index", t)
                    }));
                    for (var m = 0; m < h.length; m += 1) r.append(v(h[m].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var f = c.length - 1; f >= 0; f -= 1) r.prepend(v(c[f].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, {
                        activeIndex: r,
                        slides: n,
                        loopedSlides: l,
                        allowSlidePrev: o,
                        allowSlideNext: d,
                        snapGrid: c,
                        rtlTranslate: h
                    } = e;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var v = -c[r] - e.getTranslate();
                    if (r < l) t = n.length - 3 * l + r, t += l, e.slideTo(t, 0, !1, !0) && 0 !== v && e.setTranslate((h ? -e.translate : e.translate) - v);
                    else if (r >= n.length - l) {
                        t = -n.length + r + l, t += l, e.slideTo(t, 0, !1, !0) && 0 !== v && e.setTranslate((h ? -e.translate : e.translate) - v)
                    }
                    e.allowSlidePrev = o, e.allowSlideNext = d, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var {
                        $wrapperEl: e,
                        params: t,
                        slides: r
                    } = this;
                    e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), r.removeAttr("data-swiper-slide-index")
                }
            };
            var P = {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!(y.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                        var r = t.el;
                        r.style.cursor = "move", r.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", r.style.cursor = e ? "-moz-grabbin" : "-moz-grab", r.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    y.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            };
            var k, z, $, I, L, O, D, A, B, G, N, H, X, V, Y, F = {
                    appendSlide: function(e) {
                        var t = this,
                            {
                                $wrapperEl: r,
                                params: n
                            } = t;
                        if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                            for (var i = 0; i < e.length; i += 1) e[i] && r.append(e[i]);
                        else r.append(e);
                        n.loop && t.loopCreate(), n.observer && y.observer || t.update()
                    },
                    prependSlide: function(e) {
                        var t = this,
                            {
                                params: r,
                                $wrapperEl: n,
                                activeIndex: l
                            } = t;
                        r.loop && t.loopDestroy();
                        var o = l + 1;
                        if ("object" == typeof e && "length" in e) {
                            for (var i = 0; i < e.length; i += 1) e[i] && n.prepend(e[i]);
                            o = l + e.length
                        } else n.prepend(e);
                        r.loop && t.loopCreate(), r.observer && y.observer || t.update(), t.slideTo(o, 0, !1)
                    },
                    addSlide: function(e, t) {
                        var r = this,
                            {
                                $wrapperEl: n,
                                params: l,
                                activeIndex: o
                            } = r,
                            d = o;
                        l.loop && (d -= r.loopedSlides, r.loopDestroy(), r.slides = n.children(".".concat(l.slideClass)));
                        var c = r.slides.length;
                        if (e <= 0) r.prependSlide(t);
                        else if (e >= c) r.appendSlide(t);
                        else {
                            for (var h = d > e ? d + 1 : d, v = [], i = c - 1; i >= e; i -= 1) {
                                var m = r.slides.eq(i);
                                m.remove(), v.unshift(m)
                            }
                            if ("object" == typeof t && "length" in t) {
                                for (var f = 0; f < t.length; f += 1) t[f] && n.append(t[f]);
                                h = d > e ? d + t.length : d
                            } else n.append(t);
                            for (var w = 0; w < v.length; w += 1) n.append(v[w]);
                            l.loop && r.loopCreate(), l.observer && y.observer || r.update(), l.loop ? r.slideTo(h + r.loopedSlides, 0, !1) : r.slideTo(h, 0, !1)
                        }
                    },
                    removeSlide: function(e) {
                        var t = this,
                            {
                                params: r,
                                $wrapperEl: n,
                                activeIndex: l
                            } = t,
                            o = l;
                        r.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(".".concat(r.slideClass)));
                        var d, c = o;
                        if ("object" == typeof e && "length" in e) {
                            for (var i = 0; i < e.length; i += 1) d = e[i], t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1);
                            c = Math.max(c, 0)
                        } else d = e, t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1), c = Math.max(c, 0);
                        r.loop && t.loopCreate(), r.observer && y.observer || t.update(), r.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
                    },
                    removeAllSlides: function() {
                        for (var e = [], i = 0; i < this.slides.length; i += 1) e.push(i);
                        this.removeSlide(e)
                    }
                },
                W = (k = c.navigator.platform, z = c.navigator.userAgent, $ = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    edge: !1,
                    ie: !1,
                    firefox: !1,
                    macos: !1,
                    windows: !1,
                    cordova: !(!c.cordova && !c.phonegap),
                    phonegap: !(!c.cordova && !c.phonegap),
                    electron: !1
                }, I = c.screen.width, L = c.screen.height, O = z.match(/(Android);?[\s\/]+([\d.]+)?/), D = z.match(/(iPad).*OS\s([\d_]+)/), A = z.match(/(iPod)(.*OS\s([\d_]+))?/), B = !D && z.match(/(iPhone\sOS|iOS)\s([\d_]+)/), G = z.indexOf("MSIE ") >= 0 || z.indexOf("Trident/") >= 0, N = z.indexOf("Edge/") >= 0, H = z.indexOf("Gecko/") >= 0 && z.indexOf("Firefox/") >= 0, X = "Win32" === k, V = z.toLowerCase().indexOf("electron") >= 0, Y = "MacIntel" === k, !D && Y && y.touch && (1024 === I && 1366 === L || 834 === I && 1194 === L || 834 === I && 1112 === L || 768 === I && 1024 === L) && (D = z.match(/(Version)\/([\d.]+)/), Y = !1), $.ie = G, $.edge = N, $.firefox = H, O && !X && ($.os = "android", $.osVersion = O[2], $.android = !0, $.androidChrome = z.toLowerCase().indexOf("chrome") >= 0), (D || B || A) && ($.os = "ios", $.ios = !0), B && !A && ($.osVersion = B[2].replace(/_/g, "."), $.iphone = !0), D && ($.osVersion = D[2].replace(/_/g, "."), $.ipad = !0), A && ($.osVersion = A[3] ? A[3].replace(/_/g, ".") : null, $.ipod = !0), $.ios && $.osVersion && z.indexOf("Version/") >= 0 && "10" === $.osVersion.split(".")[0] && ($.osVersion = z.toLowerCase().split("version/")[1].split(" ")[0]), $.webView = !(!(B || D || A) || !z.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone) || c.matchMedia && c.matchMedia("(display-mode: standalone)").matches, $.webview = $.webView, $.standalone = $.webView, $.desktop = !($.ios || $.android) || V, $.desktop && ($.electron = V, $.macos = Y, $.windows = X, $.macos && ($.os = "macos"), $.windows && ($.os = "windows")), $.pixelRatio = c.devicePixelRatio || 1, $);

            function R(e) {
                var t = this,
                    data = t.touchEventsData,
                    {
                        params: r,
                        touches: n
                    } = t;
                if (!t.animating || !r.preventInteractionOnTransition) {
                    var l = e;
                    l.originalEvent && (l = l.originalEvent);
                    var d = v(l.target);
                    if (("wrapper" !== r.touchEventsTarget || d.closest(t.wrapperEl).length) && (data.isTouchEvent = "touchstart" === l.type, (data.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!data.isTouchEvent && "button" in l && l.button > 0 || data.isTouched && data.isMoved)))
                        if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : ".".concat(r.noSwipingClass))[0]) t.allowClick = !0;
                        else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                        n.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, n.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        var h = n.currentX,
                            m = n.currentY,
                            f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                            y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                        if (!f || !(h <= y || h >= c.screen.width - y)) {
                            if (w.extend(data, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), n.startX = h, n.startY = m, data.touchStartTime = w.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== l.type) {
                                var x = !0;
                                d.is(data.formElements) && (x = !1), o.activeElement && v(o.activeElement).is(data.formElements) && o.activeElement !== d[0] && o.activeElement.blur();
                                var E = x && t.allowTouchMove && r.touchStartPreventDefault;
                                (r.touchStartForcePreventDefault || E) && l.preventDefault()
                            }
                            t.emit("touchStart", l)
                        }
                    }
                }
            }

            function j(e) {
                var t = this,
                    data = t.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: l
                    } = t,
                    d = e;
                if (d.originalEvent && (d = d.originalEvent), data.isTouched) {
                    if (!data.isTouchEvent || "touchmove" === d.type) {
                        var c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                            h = "touchmove" === d.type ? c.pageX : d.pageX,
                            m = "touchmove" === d.type ? c.pageY : d.pageY;
                        if (d.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(data.isTouched && (w.extend(n, {
                            startX: h,
                            startY: m,
                            currentX: h,
                            currentY: m
                        }), data.touchStartTime = w.now()));
                        if (data.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                            if (t.isVertical()) {
                                if (m < n.startY && t.translate <= t.maxTranslate() || m > n.startY && t.translate >= t.minTranslate()) return data.isTouched = !1, void(data.isMoved = !1)
                            } else if (h < n.startX && t.translate <= t.maxTranslate() || h > n.startX && t.translate >= t.minTranslate()) return;
                        if (data.isTouchEvent && o.activeElement && d.target === o.activeElement && v(d.target).is(data.formElements)) return data.isMoved = !0, void(t.allowClick = !1);
                        if (data.allowTouchCallbacks && t.emit("touchMove", d), !(d.targetTouches && d.targetTouches.length > 1)) {
                            n.currentX = h, n.currentY = m;
                            var f = n.currentX - n.startX,
                                y = n.currentY - n.startY;
                            if (!(t.params.threshold && Math.sqrt(f ** 2 + y ** 2) < t.params.threshold)) {
                                var x;
                                if (void 0 === data.isScrolling) t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? data.isScrolling = !1 : f * f + y * y >= 25 && (x = 180 * Math.atan2(Math.abs(y), Math.abs(f)) / Math.PI, data.isScrolling = t.isHorizontal() ? x > r.touchAngle : 90 - x > r.touchAngle);
                                if (data.isScrolling && t.emit("touchMoveOpposite", d), void 0 === data.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (data.startMoving = !0)), data.isScrolling) data.isTouched = !1;
                                else if (data.startMoving) {
                                    t.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), data.isMoved || (r.loop && t.loopFix(), data.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !r.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", d)), t.emit("sliderMove", d), data.isMoved = !0;
                                    var E = t.isHorizontal() ? f : y;
                                    n.diff = E, E *= r.touchRatio, l && (E = -E), t.swipeDirection = E > 0 ? "prev" : "next", data.currentTranslate = E + data.startTranslate;
                                    var T = !0,
                                        S = r.resistanceRatio;
                                    if (r.touchReleaseOnEdges && (S = 0), E > 0 && data.currentTranslate > t.minTranslate() ? (T = !1, r.resistance && (data.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + data.startTranslate + E) ** S)) : E < 0 && data.currentTranslate < t.maxTranslate() && (T = !1, r.resistance && (data.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - data.startTranslate - E) ** S)), T && (d.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), r.threshold > 0) {
                                        if (!(Math.abs(E) > r.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                                        if (!data.allowThresholdMove) return data.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, data.currentTranslate = data.startTranslate, void(n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                    }
                                    r.followFinger && !r.cssMode && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && (0 === data.velocities.length && data.velocities.push({
                                        position: n[t.isHorizontal() ? "startX" : "startY"],
                                        time: data.touchStartTime
                                    }), data.velocities.push({
                                        position: n[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: w.now()
                                    })), t.updateProgress(data.currentTranslate), t.setTranslate(data.currentTranslate))
                                }
                            }
                        }
                    }
                } else data.startMoving && data.isScrolling && t.emit("touchMoveOpposite", d)
            }

            function U(e) {
                var t = this,
                    data = t.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: l,
                        $wrapperEl: o,
                        slidesGrid: d,
                        snapGrid: c
                    } = t,
                    h = e;
                if (h.originalEvent && (h = h.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", h), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && r.grabCursor && t.setGrabCursor(!1), data.isMoved = !1, void(data.startMoving = !1);
                r.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var v, m = w.now(),
                    f = m - data.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), f < 300 && m - data.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), data.lastClickTime = w.now(), w.nextTick((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === n.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1, data.isMoved = !1, void(data.startMoving = !1);
                if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = r.followFinger ? l ? t.translate : -t.translate : -data.currentTranslate, !r.cssMode)
                    if (r.freeMode) {
                        if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (v > -t.maxTranslate()) return void(t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1));
                        if (r.freeModeMomentum) {
                            if (data.velocities.length > 1) {
                                var y = data.velocities.pop(),
                                    x = data.velocities.pop(),
                                    E = y.position - x.position,
                                    time = y.time - x.time;
                                t.velocity = E / time, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (time > 150 || w.now() - y.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeModeMomentumVelocityRatio, data.velocities.length = 0;
                            var T = 1e3 * r.freeModeMomentumRatio,
                                S = t.velocity * T,
                                C = t.translate + S;
                            l && (C = -C);
                            var M, P, k = !1,
                                z = 20 * Math.abs(t.velocity) * r.freeModeMomentumBounceRatio;
                            if (C < t.maxTranslate()) r.freeModeMomentumBounce ? (C + t.maxTranslate() < -z && (C = t.maxTranslate() - z), M = t.maxTranslate(), k = !0, data.allowMomentumBounce = !0) : C = t.maxTranslate(), r.loop && r.centeredSlides && (P = !0);
                            else if (C > t.minTranslate()) r.freeModeMomentumBounce ? (C - t.minTranslate() > z && (C = t.minTranslate() + z), M = t.minTranslate(), k = !0, data.allowMomentumBounce = !0) : C = t.minTranslate(), r.loop && r.centeredSlides && (P = !0);
                            else if (r.freeModeSticky) {
                                for (var $, I = 0; I < c.length; I += 1)
                                    if (c[I] > -C) {
                                        $ = I;
                                        break
                                    }
                                C = -(C = Math.abs(c[$] - C) < Math.abs(c[$ - 1] - C) || "next" === t.swipeDirection ? c[$] : c[$ - 1])
                            }
                            if (P && t.once("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (T = l ? Math.abs((-C - t.translate) / t.velocity) : Math.abs((C - t.translate) / t.velocity), r.freeModeSticky) {
                                    var L = Math.abs((l ? -C : C) - t.translate),
                                        O = t.slidesSizesGrid[t.activeIndex];
                                    T = L < O ? r.speed : L < 2 * O ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeModeSticky) return void t.slideToClosest();
                            r.freeModeMomentumBounce && k ? (t.updateProgress(M), t.setTransition(T), t.setTranslate(C), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((() => {
                                t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(M), o.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (t.updateProgress(C), t.setTransition(T), t.setTranslate(C), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(C), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else if (r.freeModeSticky) return void t.slideToClosest();
                        (!r.freeModeMomentum || f >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    } else {
                        for (var D = 0, A = t.slidesSizesGrid[0], i = 0; i < d.length; i += i < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                            var B = i < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                            void 0 !== d[i + B] ? v >= d[i] && v < d[i + B] && (D = i, A = d[i + B] - d[i]) : v >= d[i] && (D = i, A = d[d.length - 1] - d[d.length - 2])
                        }
                        var G = (v - d[D]) / A,
                            N = D < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                        if (f > r.longSwipesMs) {
                            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (G >= r.longSwipesRatio ? t.slideTo(D + N) : t.slideTo(D)), "prev" === t.swipeDirection && (G > 1 - r.longSwipesRatio ? t.slideTo(D + N) : t.slideTo(D))
                        } else {
                            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                            t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(D + N) : t.slideTo(D) : ("next" === t.swipeDirection && t.slideTo(D + N), "prev" === t.swipeDirection && t.slideTo(D))
                        }
                    }
            }

            function K() {
                var e = this,
                    {
                        params: t,
                        el: r
                    } = e;
                if (!r || 0 !== r.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var {
                        allowSlideNext: n,
                        allowSlidePrev: l,
                        snapGrid: o
                    } = e;
                    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = l, e.allowSlideNext = n, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
                }
            }

            function _(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function Z() {
                var e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: r
                    } = e;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = r ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                var n = e.maxTranslate() - e.minTranslate();
                (0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            var J = !1;

            function Q() {}
            var ee = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0
                },
                te = {
                    update: E,
                    translate: T,
                    transition: S,
                    slide: C,
                    loop: M,
                    grabCursor: P,
                    manipulation: F,
                    events: {
                        attachEvents: function() {
                            var e = this,
                                {
                                    params: t,
                                    touchEvents: r,
                                    el: n,
                                    wrapperEl: l
                                } = e;
                            e.onTouchStart = R.bind(e), e.onTouchMove = j.bind(e), e.onTouchEnd = U.bind(e), t.cssMode && (e.onScroll = Z.bind(e)), e.onClick = _.bind(e);
                            var d = !!t.nested;
                            if (!y.touch && y.pointerEvents) n.addEventListener(r.start, e.onTouchStart, !1), o.addEventListener(r.move, e.onTouchMove, d), o.addEventListener(r.end, e.onTouchEnd, !1);
                            else {
                                if (y.touch) {
                                    var c = !("touchstart" !== r.start || !y.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.addEventListener(r.start, e.onTouchStart, c), n.addEventListener(r.move, e.onTouchMove, y.passiveListener ? {
                                        passive: !1,
                                        capture: d
                                    } : d), n.addEventListener(r.end, e.onTouchEnd, c), r.cancel && n.addEventListener(r.cancel, e.onTouchEnd, c), J || (o.addEventListener("touchstart", Q), J = !0)
                                }(t.simulateTouch && !W.ios && !W.android || t.simulateTouch && !y.touch && W.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1), o.addEventListener("mousemove", e.onTouchMove, d), o.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0), t.cssMode && l.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(W.ios || W.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", K, !0) : e.on("observerUpdate", K, !0)
                        },
                        detachEvents: function() {
                            var e = this,
                                {
                                    params: t,
                                    touchEvents: r,
                                    el: n,
                                    wrapperEl: l
                                } = e,
                                d = !!t.nested;
                            if (!y.touch && y.pointerEvents) n.removeEventListener(r.start, e.onTouchStart, !1), o.removeEventListener(r.move, e.onTouchMove, d), o.removeEventListener(r.end, e.onTouchEnd, !1);
                            else {
                                if (y.touch) {
                                    var c = !("onTouchStart" !== r.start || !y.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.removeEventListener(r.start, e.onTouchStart, c), n.removeEventListener(r.move, e.onTouchMove, d), n.removeEventListener(r.end, e.onTouchEnd, c), r.cancel && n.removeEventListener(r.cancel, e.onTouchEnd, c)
                                }(t.simulateTouch && !W.ios && !W.android || t.simulateTouch && !y.touch && W.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1), o.removeEventListener("mousemove", e.onTouchMove, d), o.removeEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0), t.cssMode && l.removeEventListener("scroll", e.onScroll), e.off(W.ios || W.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", K)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var e = this,
                                {
                                    activeIndex: t,
                                    initialized: r,
                                    loopedSlides: n = 0,
                                    params: l,
                                    $el: o
                                } = e,
                                d = l.breakpoints;
                            if (d && (!d || 0 !== Object.keys(d).length)) {
                                var c = e.getBreakpoint(d);
                                if (c && e.currentBreakpoint !== c) {
                                    var h = c in d ? d[c] : void 0;
                                    h && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param => {
                                        var e = h[param];
                                        void 0 !== e && (h[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                    }));
                                    var v = h || e.originalParams,
                                        m = l.slidesPerColumn > 1,
                                        f = v.slidesPerColumn > 1;
                                    m && !f ? o.removeClass("".concat(l.containerModifierClass, "multirow ").concat(l.containerModifierClass, "multirow-column")) : !m && f && (o.addClass("".concat(l.containerModifierClass, "multirow")), "column" === v.slidesPerColumnFill && o.addClass("".concat(l.containerModifierClass, "multirow-column")));
                                    var y = v.direction && v.direction !== l.direction,
                                        x = l.loop && (v.slidesPerView !== l.slidesPerView || y);
                                    y && r && e.changeDirection(), w.extend(e.params, v), w.extend(e, {
                                        allowTouchMove: e.params.allowTouchMove,
                                        allowSlideNext: e.params.allowSlideNext,
                                        allowSlidePrev: e.params.allowSlidePrev
                                    }), e.currentBreakpoint = c, x && r && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", v)
                                }
                            }
                        },
                        getBreakpoint: function(e) {
                            if (e) {
                                var t = !1,
                                    r = Object.keys(e).map((e => {
                                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                                            var t = parseFloat(e.substr(1));
                                            return {
                                                value: c.innerHeight * t,
                                                point: e
                                            }
                                        }
                                        return {
                                            value: e,
                                            point: e
                                        }
                                    }));
                                r.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                                for (var i = 0; i < r.length; i += 1) {
                                    var {
                                        point: n,
                                        value: l
                                    } = r[i];
                                    l <= c.innerWidth && (t = n)
                                }
                                return t || "max"
                            }
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.params,
                                r = e.isLocked,
                                n = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && n ? e.isLocked = n <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, r !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), r && r !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var {
                                classNames: e,
                                params: t,
                                rtl: r,
                                $el: n
                            } = this, l = [];
                            l.push("initialized"), l.push(t.direction), t.freeMode && l.push("free-mode"), t.autoHeight && l.push("autoheight"), r && l.push("rtl"), t.slidesPerColumn > 1 && (l.push("multirow"), "column" === t.slidesPerColumnFill && l.push("multirow-column")), W.android && l.push("android"), W.ios && l.push("ios"), t.cssMode && l.push("css-mode"), l.forEach((r => {
                                e.push(t.containerModifierClass + r)
                            })), n.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            var {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, r, n, l, o) {
                            var image;

                            function d() {
                                o && o()
                            }
                            v(e).parent("picture")[0] || e.complete && l ? d() : t ? ((image = new c.Image).onload = d, image.onerror = d, n && (image.sizes = n), r && (image.srcset = r), t && (image.src = t)) : d()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                var r = e.imagesToLoad[i];
                                e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                ae = {};
            class ie extends x {
                constructor() {
                    for (var e, t, r = arguments.length, n = new Array(r), l = 0; l < r; l++) n[l] = arguments[l];
                    1 === n.length && n[0].constructor && n[0].constructor === Object ? t = n[0] : [e, t] = n, t || (t = {}), t = w.extend({}, t), e && !t.el && (t.el = e), super(t), Object.keys(te).forEach((e => {
                        Object.keys(te[e]).forEach((t => {
                            ie.prototype[t] || (ie.prototype[t] = te[e][t])
                        }))
                    }));
                    var o = this;
                    void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((e => {
                        var r = o.modules[e];
                        if (r.params) {
                            var n = Object.keys(r.params)[0],
                                l = r.params[n];
                            if ("object" != typeof l || null === l) return;
                            if (!(n in t) || !("enabled" in l)) return;
                            !0 === t[n] && (t[n] = {
                                enabled: !0
                            }), "object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = {
                                enabled: !1
                            })
                        }
                    }));
                    var d = w.extend({}, ee);
                    o.useModulesParams(d), o.params = w.extend({}, d, ae, t), o.originalParams = w.extend({}, o.params), o.passedParams = w.extend({}, t), o.$ = v;
                    var c = v(o.params.el);
                    if (e = c[0]) {
                        if (c.length > 1) {
                            var h = [];
                            return c.each(((e, r) => {
                                var n = w.extend({}, t, {
                                    el: r
                                });
                                h.push(new ie(n))
                            })), h
                        }
                        var m, f, x;
                        return e.swiper = o, c.data("swiper", o), e && e.shadowRoot && e.shadowRoot.querySelector ? (m = v(e.shadowRoot.querySelector(".".concat(o.params.wrapperClass)))).children = e => c.children(e) : m = c.children(".".concat(o.params.wrapperClass)), w.extend(o, {
                            $el: c,
                            el: e,
                            $wrapperEl: m,
                            wrapperEl: m[0],
                            classNames: [],
                            slides: v(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () => "horizontal" === o.params.direction,
                            isVertical: () => "vertical" === o.params.direction,
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === c.css("direction"),
                            rtlTranslate: "horizontal" === o.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === c.css("direction")),
                            wrongRTL: "-webkit-box" === m.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: o.params.allowSlideNext,
                            allowSlidePrev: o.params.allowSlidePrev,
                            touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], x = ["mousedown", "mousemove", "mouseup"], y.pointerEvents && (x = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
                                start: f[0],
                                move: f[1],
                                end: f[2],
                                cancel: f[3]
                            }, o.touchEventsDesktop = {
                                start: x[0],
                                move: x[1],
                                end: x[2]
                            }, y.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video, label",
                                lastClickTime: w.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: o.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), o.useModules(), o.params.init && o.init(), o
                    }
                }
                slidesPerViewDynamic() {
                    var {
                        params: e,
                        slides: t,
                        slidesGrid: r,
                        size: n,
                        activeIndex: l
                    } = this, o = 1;
                    if (e.centeredSlides) {
                        for (var d, c = t[l].swiperSlideSize, i = l + 1; i < t.length; i += 1) t[i] && !d && (o += 1, (c += t[i].swiperSlideSize) > n && (d = !0));
                        for (var h = l - 1; h >= 0; h -= 1) t[h] && !d && (o += 1, (c += t[h].swiperSlideSize) > n && (d = !0))
                    } else
                        for (var v = l + 1; v < t.length; v += 1) r[v] - r[l] < n && (o += 1);
                    return o
                }
                update() {
                    var e = this;
                    if (e && !e.destroyed) {
                        var {
                            snapGrid: t,
                            params: r
                        } = e;
                        r.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                    }

                    function n() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }
                changeDirection(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = this,
                        n = r.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.$el.removeClass("".concat(r.params.containerModifierClass).concat(n)).addClass("".concat(r.params.containerModifierClass).concat(e)), r.params.direction = e, r.slides.each(((t, r) => {
                        "vertical" === e ? r.style.width = "" : r.style.height = ""
                    })), r.emit("changeDirection"), t && r.update()), r
                }
                init() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }
                destroy() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = this,
                        {
                            params: n,
                            $el: l,
                            $wrapperEl: o,
                            slides: d
                        } = r;
                    return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), l.removeAttr("style"), o.removeAttr("style"), d && d.length && d.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
                        r.off(e)
                    })), !1 !== e && (r.$el[0].swiper = null, r.$el.data("swiper", null), w.deleteProps(r)), r.destroyed = !0), null
                }
                static extendDefaults(e) {
                    w.extend(ae, e)
                }
                static get extendedDefaults() {
                    return ae
                }
                static get defaults() {
                    return ee
                }
                static get Class() {
                    return x
                }
                static get $() {
                    return v
                }
            }
            var se = {
                    name: "device",
                    proto: {
                        device: W
                    },
                    static: {
                        device: W
                    }
                },
                re = {
                    name: "support",
                    proto: {
                        support: y
                    },
                    static: {
                        support: y
                    }
                },
                ne = {
                    isEdge: !!c.navigator.userAgent.match(/Edge/g),
                    isSafari: function() {
                        var e = c.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)
                },
                le = {
                    name: "browser",
                    proto: {
                        browser: ne
                    },
                    static: {
                        browser: ne
                    }
                },
                oe = {
                    name: "resize",
                    create() {
                        var e = this;
                        w.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            c.addEventListener("resize", this.resize.resizeHandler), c.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy() {
                            c.removeEventListener("resize", this.resize.resizeHandler), c.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                },
                de = {
                    func: c.MutationObserver || c.WebkitMutationObserver,
                    attach(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = this,
                            n = new(0, de.func)((e => {
                                if (1 !== e.length) {
                                    var t = function() {
                                        r.emit("observerUpdate", e[0])
                                    };
                                    c.requestAnimationFrame ? c.requestAnimationFrame(t) : c.setTimeout(t, 0)
                                } else r.emit("observerUpdate", e[0])
                            }));
                        n.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.observer.observers.push(n)
                    },
                    init() {
                        var e = this;
                        if (y.observer && e.params.observer) {
                            if (e.params.observeParents)
                                for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                            e.observer.attach(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), e.observer.attach(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    destroy() {
                        this.observer.observers.forEach((e => {
                            e.disconnect()
                        })), this.observer.observers = []
                    }
                },
                ce = {
                    name: "observer",
                    params: {
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            observer: {
                                init: de.init.bind(e),
                                attach: de.attach.bind(e),
                                destroy: de.destroy.bind(e),
                                observers: []
                            }
                        })
                    },
                    on: {
                        init() {
                            this.observer.init()
                        },
                        destroy() {
                            this.observer.destroy()
                        }
                    }
                },
                pe = {
                    update(e) {
                        var t = this,
                            {
                                slidesPerView: r,
                                slidesPerGroup: n,
                                centeredSlides: l
                            } = t.params,
                            {
                                addSlidesBefore: o,
                                addSlidesAfter: d
                            } = t.params.virtual,
                            {
                                from: c,
                                to: h,
                                slides: v,
                                slidesGrid: m,
                                renderSlide: f,
                                offset: y
                            } = t.virtual;
                        t.updateActiveIndex();
                        var x, E, T, S = t.activeIndex || 0;
                        x = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", l ? (E = Math.floor(r / 2) + n + o, T = Math.floor(r / 2) + n + d) : (E = r + (n - 1) + o, T = n + d);
                        var C = Math.max((S || 0) - T, 0),
                            M = Math.min((S || 0) + E, v.length - 1),
                            P = (t.slidesGrid[C] || 0) - (t.slidesGrid[0] || 0);

                        function k() {
                            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                        }
                        if (w.extend(t.virtual, {
                                from: C,
                                to: M,
                                offset: P,
                                slidesGrid: t.slidesGrid
                            }), c === C && h === M && !e) return t.slidesGrid !== m && P !== y && t.slides.css(x, "".concat(P, "px")), void t.updateProgress();
                        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                            offset: P,
                            from: C,
                            to: M,
                            slides: function() {
                                for (var e = [], i = C; i <= M; i += 1) e.push(v[i]);
                                return e
                            }()
                        }), void k();
                        var z = [],
                            $ = [];
                        if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();
                        else
                            for (var i = c; i <= h; i += 1)(i < C || i > M) && t.$wrapperEl.find(".".concat(t.params.slideClass, '[data-swiper-slide-index="').concat(i, '"]')).remove();
                        for (var I = 0; I < v.length; I += 1) I >= C && I <= M && (void 0 === h || e ? $.push(I) : (I > h && $.push(I), I < c && z.push(I)));
                        $.forEach((e => {
                            t.$wrapperEl.append(f(v[e], e))
                        })), z.sort(((a, b) => b - a)).forEach((e => {
                            t.$wrapperEl.prepend(f(v[e], e))
                        })), t.$wrapperEl.children(".swiper-slide").css(x, "".concat(P, "px")), k()
                    },
                    renderSlide(e, t) {
                        var r = this,
                            n = r.params.virtual;
                        if (n.cache && r.virtual.cache[t]) return r.virtual.cache[t];
                        var l = n.renderSlide ? v(n.renderSlide.call(r, e, t)) : v('<div class="'.concat(r.params.slideClass, '" data-swiper-slide-index="').concat(t, '">').concat(e, "</div>"));
                        return l.attr("data-swiper-slide-index") || l.attr("data-swiper-slide-index", t), n.cache && (r.virtual.cache[t] = l), l
                    },
                    appendSlide(e) {
                        var t = this;
                        if ("object" == typeof e && "length" in e)
                            for (var i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
                        else t.virtual.slides.push(e);
                        t.virtual.update(!0)
                    },
                    prependSlide(e) {
                        var t = this,
                            r = t.activeIndex,
                            n = r + 1,
                            l = 1;
                        if (Array.isArray(e)) {
                            for (var i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                            n = r + e.length, l = e.length
                        } else t.virtual.slides.unshift(e);
                        if (t.params.virtual.cache) {
                            var o = t.virtual.cache,
                                d = {};
                            Object.keys(o).forEach((e => {
                                var t = o[e],
                                    r = t.attr("data-swiper-slide-index");
                                r && t.attr("data-swiper-slide-index", parseInt(r, 10) + 1), d[parseInt(e, 10) + l] = t
                            })), t.virtual.cache = d
                        }
                        t.virtual.update(!0), t.slideTo(n, 0)
                    },
                    removeSlide(e) {
                        var t = this;
                        if (null != e) {
                            var r = t.activeIndex;
                            if (Array.isArray(e))
                                for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < r && (r -= 1), r = Math.max(r, 0);
                            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < r && (r -= 1), r = Math.max(r, 0);
                            t.virtual.update(!0), t.slideTo(r, 0)
                        }
                    },
                    removeAllSlides() {
                        var e = this;
                        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                    }
                },
                ue = {
                    name: "virtual",
                    params: {
                        virtual: {
                            enabled: !1,
                            slides: [],
                            cache: !0,
                            renderSlide: null,
                            renderExternal: null,
                            addSlidesBefore: 0,
                            addSlidesAfter: 0
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            virtual: {
                                update: pe.update.bind(e),
                                appendSlide: pe.appendSlide.bind(e),
                                prependSlide: pe.prependSlide.bind(e),
                                removeSlide: pe.removeSlide.bind(e),
                                removeAllSlides: pe.removeAllSlides.bind(e),
                                renderSlide: pe.renderSlide.bind(e),
                                slides: e.params.virtual.slides,
                                cache: {}
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            if (e.params.virtual.enabled) {
                                e.classNames.push("".concat(e.params.containerModifierClass, "virtual"));
                                var t = {
                                    watchSlidesProgress: !0
                                };
                                w.extend(e.params, t), w.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                            }
                        },
                        setTranslate() {
                            this.params.virtual.enabled && this.virtual.update()
                        }
                    }
                },
                he = {
                    handle(e) {
                        var t = this,
                            {
                                rtlTranslate: r
                            } = t,
                            n = e;
                        n.originalEvent && (n = n.originalEvent);
                        var l = n.keyCode || n.charCode,
                            d = t.params.keyboard.pageUpDown,
                            h = d && 33 === l,
                            v = d && 34 === l,
                            m = 37 === l,
                            f = 39 === l,
                            w = 38 === l,
                            y = 40 === l;
                        if (!t.allowSlideNext && (t.isHorizontal() && f || t.isVertical() && y || v)) return !1;
                        if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && w || h)) return !1;
                        if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                            if (t.params.keyboard.onlyInViewport && (h || v || m || f || w || y)) {
                                var x = !1;
                                if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;
                                var E = c.innerWidth,
                                    T = c.innerHeight,
                                    S = t.$el.offset();
                                r && (S.left -= t.$el[0].scrollLeft);
                                for (var C = [
                                        [S.left, S.top],
                                        [S.left + t.width, S.top],
                                        [S.left, S.top + t.height],
                                        [S.left + t.width, S.top + t.height]
                                    ], i = 0; i < C.length; i += 1) {
                                    var M = C[i];
                                    M[0] >= 0 && M[0] <= E && M[1] >= 0 && M[1] <= T && (x = !0)
                                }
                                if (!x) return
                            }
                            t.isHorizontal() ? ((h || v || m || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((v || f) && !r || (h || m) && r) && t.slideNext(), ((h || m) && !r || (v || f) && r) && t.slidePrev()) : ((h || v || w || y) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (v || y) && t.slideNext(), (h || w) && t.slidePrev()), t.emit("keyPress", l)
                        }
                    },
                    enable() {
                        var e = this;
                        e.keyboard.enabled || (v(o).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
                    },
                    disable() {
                        var e = this;
                        e.keyboard.enabled && (v(o).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
                    }
                },
                ve = {
                    name: "keyboard",
                    params: {
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0,
                            pageUpDown: !0
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            keyboard: {
                                enabled: !1,
                                enable: he.enable.bind(e),
                                disable: he.disable.bind(e),
                                handle: he.handle.bind(e)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.keyboard.enabled && this.keyboard.enable()
                        },
                        destroy() {
                            this.keyboard.enabled && this.keyboard.disable()
                        }
                    }
                };
            var me = {
                    lastScrollTime: w.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    event: () => c.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                        var e = "onwheel",
                            t = e in o;
                        if (!t) {
                            var element = o.createElement("div");
                            element.setAttribute(e, "return;"), t = "function" == typeof element.onwheel
                        }
                        return !t && o.implementation && o.implementation.hasFeature && !0 !== o.implementation.hasFeature("", "") && (t = o.implementation.hasFeature("Events.wheel", "3.0")), t
                    }() ? "wheel" : "mousewheel",
                    normalize(e) {
                        var t = 0,
                            r = 0,
                            n = 0,
                            l = 0;
                        return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = r, r = 0), n = 10 * t, l = 10 * r, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = l, l = 0), (n || l) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, l *= 40) : (n *= 800, l *= 800)), n && !t && (t = n < 1 ? -1 : 1), l && !r && (r = l < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: r,
                            pixelX: n,
                            pixelY: l
                        }
                    },
                    handleMouseEnter() {
                        this.mouseEntered = !0
                    },
                    handleMouseLeave() {
                        this.mouseEntered = !1
                    },
                    handle(e) {
                        var t = e,
                            r = this,
                            n = r.params.mousewheel;
                        r.params.cssMode && t.preventDefault();
                        var l = r.$el;
                        if ("container" !== r.params.mousewheel.eventsTarged && (l = v(r.params.mousewheel.eventsTarged)), !r.mouseEntered && !l[0].contains(t.target) && !n.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        var o = 0,
                            d = r.rtlTranslate ? -1 : 1,
                            data = me.normalize(t);
                        if (n.forceToAxis)
                            if (r.isHorizontal()) {
                                if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                                o = -data.pixelX * d
                            } else {
                                if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                                o = -data.pixelY
                            }
                        else o = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * d : -data.pixelY;
                        if (0 === o) return !0;
                        if (n.invert && (o = -o), r.params.freeMode) {
                            var c = {
                                    time: w.now(),
                                    delta: Math.abs(o),
                                    direction: Math.sign(o)
                                },
                                {
                                    lastEventBeforeSnap: h
                                } = r.mousewheel,
                                m = h && c.time < h.time + 500 && c.delta <= h.delta && c.direction === h.direction;
                            if (!m) {
                                r.mousewheel.lastEventBeforeSnap = void 0, r.params.loop && r.loopFix();
                                var f = r.getTranslate() + o * n.sensitivity,
                                    y = r.isBeginning,
                                    x = r.isEnd;
                                if (f >= r.minTranslate() && (f = r.minTranslate()), f <= r.maxTranslate() && (f = r.maxTranslate()), r.setTransition(0), r.setTranslate(f), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!y && r.isBeginning || !x && r.isEnd) && r.updateSlidesClasses(), r.params.freeModeSticky) {
                                    clearTimeout(r.mousewheel.timeout), r.mousewheel.timeout = void 0;
                                    var E = r.mousewheel.recentWheelEvents;
                                    E.length >= 15 && E.shift();
                                    var T = E.length ? E[E.length - 1] : void 0,
                                        S = E[0];
                                    if (E.push(c), T && (c.delta > T.delta || c.direction !== T.direction)) E.splice(0);
                                    else if (E.length >= 15 && c.time - S.time < 500 && S.delta - c.delta >= 1 && c.delta <= 6) {
                                        var C = o > 0 ? .8 : .2;
                                        r.mousewheel.lastEventBeforeSnap = c, E.splice(0), r.mousewheel.timeout = w.nextTick((() => {
                                            r.slideToClosest(r.params.speed, !0, void 0, C)
                                        }), 0)
                                    }
                                    r.mousewheel.timeout || (r.mousewheel.timeout = w.nextTick((() => {
                                        r.mousewheel.lastEventBeforeSnap = c, E.splice(0), r.slideToClosest(r.params.speed, !0, void 0, .5)
                                    }), 500))
                                }
                                if (m || r.emit("scroll", t), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), f === r.minTranslate() || f === r.maxTranslate()) return !0
                            }
                        } else {
                            var M = {
                                    time: w.now(),
                                    delta: Math.abs(o),
                                    direction: Math.sign(o),
                                    raw: e
                                },
                                P = r.mousewheel.recentWheelEvents;
                            P.length >= 2 && P.shift();
                            var k = P.length ? P[P.length - 1] : void 0;
                            if (P.push(M), k ? (M.direction !== k.direction || M.delta > k.delta || M.time > k.time + 150) && r.mousewheel.animateSlider(M) : r.mousewheel.animateSlider(M), r.mousewheel.releaseScroll(M)) return !0
                        }
                        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                    },
                    animateSlider(e) {
                        var t = this;
                        return e.delta >= 6 && w.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new c.Date).getTime(), !1)
                    },
                    releaseScroll(e) {
                        var t = this,
                            r = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && r.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && r.releaseOnEdges) return !0;
                        return !1
                    },
                    enable() {
                        var e = this,
                            t = me.event();
                        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (e.mousewheel.enabled) return !1;
                        var r = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (r = v(e.params.mousewheel.eventsTarged)), r.on("mouseenter", e.mousewheel.handleMouseEnter), r.on("mouseleave", e.mousewheel.handleMouseLeave), r.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                    },
                    disable() {
                        var e = this,
                            t = me.event();
                        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (!e.mousewheel.enabled) return !1;
                        var r = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (r = v(e.params.mousewheel.eventsTarged)), r.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                    }
                },
                fe = {
                    update() {
                        var e = this,
                            t = e.params.navigation;
                        if (!e.params.loop) {
                            var {
                                $nextEl: r,
                                $prevEl: n
                            } = e.navigation;
                            n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), r && r.length > 0 && (e.isEnd ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                        }
                    },
                    onPrevClick(e) {
                        var t = this;
                        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                    },
                    onNextClick(e) {
                        var t = this;
                        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                    },
                    init() {
                        var e, t, r = this,
                            n = r.params.navigation;
                        (n.nextEl || n.prevEl) && (n.nextEl && (e = v(n.nextEl), r.params.uniqueNavElements && "string" == typeof n.nextEl && e.length > 1 && 1 === r.$el.find(n.nextEl).length && (e = r.$el.find(n.nextEl))), n.prevEl && (t = v(n.prevEl), r.params.uniqueNavElements && "string" == typeof n.prevEl && t.length > 1 && 1 === r.$el.find(n.prevEl).length && (t = r.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", r.navigation.onNextClick), t && t.length > 0 && t.on("click", r.navigation.onPrevClick), w.extend(r.navigation, {
                            $nextEl: e,
                            nextEl: e && e[0],
                            $prevEl: t,
                            prevEl: t && t[0]
                        }))
                    },
                    destroy() {
                        var e = this,
                            {
                                $nextEl: t,
                                $prevEl: r
                            } = e.navigation;
                        t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), r && r.length && (r.off("click", e.navigation.onPrevClick), r.removeClass(e.params.navigation.disabledClass))
                    }
                },
                ge = {
                    update() {
                        var e = this,
                            t = e.rtl,
                            r = e.params.pagination;
                        if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var n, l = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                o = e.pagination.$el,
                                d = e.params.loop ? Math.ceil((l - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                            if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > l - 1 - 2 * e.loopedSlides && (n -= l - 2 * e.loopedSlides), n > d - 1 && (n -= d), n < 0 && "bullets" !== e.params.paginationType && (n = d + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                                var c, h, m, f = e.pagination.bullets;
                                if (r.dynamicBullets && (e.pagination.bulletSize = f.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(e.isHorizontal() ? "width" : "height", "".concat(e.pagination.bulletSize * (r.dynamicMainBullets + 4), "px")), r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), c = n - e.pagination.dynamicBulletIndex, m = ((h = c + (Math.min(f.length, r.dynamicMainBullets) - 1)) + c) / 2), f.removeClass("".concat(r.bulletActiveClass, " ").concat(r.bulletActiveClass, "-next ").concat(r.bulletActiveClass, "-next-next ").concat(r.bulletActiveClass, "-prev ").concat(r.bulletActiveClass, "-prev-prev ").concat(r.bulletActiveClass, "-main")), o.length > 1) f.each(((e, t) => {
                                    var l = v(t),
                                        o = l.index();
                                    o === n && l.addClass(r.bulletActiveClass), r.dynamicBullets && (o >= c && o <= h && l.addClass("".concat(r.bulletActiveClass, "-main")), o === c && l.prev().addClass("".concat(r.bulletActiveClass, "-prev")).prev().addClass("".concat(r.bulletActiveClass, "-prev-prev")), o === h && l.next().addClass("".concat(r.bulletActiveClass, "-next")).next().addClass("".concat(r.bulletActiveClass, "-next-next")))
                                }));
                                else {
                                    var w = f.eq(n),
                                        y = w.index();
                                    if (w.addClass(r.bulletActiveClass), r.dynamicBullets) {
                                        for (var x = f.eq(c), E = f.eq(h), i = c; i <= h; i += 1) f.eq(i).addClass("".concat(r.bulletActiveClass, "-main"));
                                        if (e.params.loop)
                                            if (y >= f.length - r.dynamicMainBullets) {
                                                for (var T = r.dynamicMainBullets; T >= 0; T -= 1) f.eq(f.length - T).addClass("".concat(r.bulletActiveClass, "-main"));
                                                f.eq(f.length - r.dynamicMainBullets - 1).addClass("".concat(r.bulletActiveClass, "-prev"))
                                            } else x.prev().addClass("".concat(r.bulletActiveClass, "-prev")).prev().addClass("".concat(r.bulletActiveClass, "-prev-prev")), E.next().addClass("".concat(r.bulletActiveClass, "-next")).next().addClass("".concat(r.bulletActiveClass, "-next-next"));
                                        else x.prev().addClass("".concat(r.bulletActiveClass, "-prev")).prev().addClass("".concat(r.bulletActiveClass, "-prev-prev")), E.next().addClass("".concat(r.bulletActiveClass, "-next")).next().addClass("".concat(r.bulletActiveClass, "-next-next"))
                                    }
                                }
                                if (r.dynamicBullets) {
                                    var S = Math.min(f.length, r.dynamicMainBullets + 4),
                                        C = (e.pagination.bulletSize * S - e.pagination.bulletSize) / 2 - m * e.pagination.bulletSize,
                                        M = t ? "right" : "left";
                                    f.css(e.isHorizontal() ? M : "top", "".concat(C, "px"))
                                }
                            }
                            if ("fraction" === r.type && (o.find(".".concat(r.currentClass)).text(r.formatFractionCurrent(n + 1)), o.find(".".concat(r.totalClass)).text(r.formatFractionTotal(d))), "progressbar" === r.type) {
                                var P;
                                P = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                                var k = (n + 1) / d,
                                    z = 1,
                                    $ = 1;
                                "horizontal" === P ? z = k : $ = k, o.find(".".concat(r.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(z, ") scaleY(").concat($, ")")).transition(e.params.speed)
                            }
                            "custom" === r.type && r.renderCustom ? (o.html(r.renderCustom(e, n + 1, d)), e.emit("paginationRender", e, o[0])) : e.emit("paginationUpdate", e, o[0]), o[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
                        }
                    },
                    render() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                                n = e.pagination.$el,
                                l = "";
                            if ("bullets" === t.type) {
                                for (var o = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, i = 0; i < o; i += 1) t.renderBullet ? l += t.renderBullet.call(e, i, t.bulletClass) : l += "<".concat(t.bulletElement, ' class="').concat(t.bulletClass, '"></').concat(t.bulletElement, ">");
                                n.html(l), e.pagination.bullets = n.find(".".concat(t.bulletClass))
                            }
                            "fraction" === t.type && (l = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="'.concat(t.currentClass, '"></span>') + " / " + '<span class="'.concat(t.totalClass, '"></span>'), n.html(l)), "progressbar" === t.type && (l = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="'.concat(t.progressbarFillClass, '"></span>'), n.html(l)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                        }
                    },
                    init() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el) {
                            var r = v(t.el);
                            0 !== r.length && (e.params.uniqueNavElements && "string" == typeof t.el && r.length > 1 && (r = e.$el.find(t.el)), "bullets" === t.type && t.clickable && r.addClass(t.clickableClass), r.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (r.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && r.addClass(t.progressbarOppositeClass), t.clickable && r.on("click", ".".concat(t.bulletClass), (function(t) {
                                t.preventDefault();
                                var r = v(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (r += e.loopedSlides), e.slideTo(r)
                            })), w.extend(e.pagination, {
                                $el: r,
                                el: r[0]
                            }))
                        }
                    },
                    destroy() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                            var r = e.pagination.$el;
                            r.removeClass(t.hiddenClass), r.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && r.off("click", ".".concat(t.bulletClass))
                        }
                    }
                },
                we = {
                    setTranslate() {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var {
                                scrollbar: t,
                                rtlTranslate: r,
                                progress: progress
                            } = e, {
                                dragSize: n,
                                trackSize: l,
                                $dragEl: o,
                                $el: d
                            } = t, c = e.params.scrollbar, h = n, v = (l - n) * progress;
                            r ? (v = -v) > 0 ? (h = n - v, v = 0) : -v + n > l && (h = l + v) : v < 0 ? (h = n + v, v = 0) : v + n > l && (h = l - v), e.isHorizontal() ? (o.transform("translate3d(".concat(v, "px, 0, 0)")), o[0].style.width = "".concat(h, "px")) : (o.transform("translate3d(0px, ".concat(v, "px, 0)")), o[0].style.height = "".concat(h, "px")), c.hide && (clearTimeout(e.scrollbar.timeout), d[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((() => {
                                d[0].style.opacity = 0, d.transition(400)
                            }), 1e3))
                        }
                    },
                    setTransition(e) {
                        var t = this;
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                    },
                    updateSize() {
                        var e = this;
                        if (e.params.scrollbar.el && e.scrollbar.el) {
                            var {
                                scrollbar: t
                            } = e, {
                                $dragEl: r,
                                $el: n
                            } = t;
                            r[0].style.width = "", r[0].style.height = "";
                            var l, o = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                                d = e.size / e.virtualSize,
                                c = d * (o / e.size);
                            l = "auto" === e.params.scrollbar.dragSize ? o * d : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? r[0].style.width = "".concat(l, "px") : r[0].style.height = "".concat(l, "px"), n[0].style.display = d >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), w.extend(t, {
                                trackSize: o,
                                divider: d,
                                moveDivider: c,
                                dragSize: l
                            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                        }
                    },
                    getPointerPosition(e) {
                        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                    },
                    setDragPosition(e) {
                        var t, r = this,
                            {
                                scrollbar: n,
                                rtlTranslate: l
                            } = r,
                            {
                                $el: o,
                                dragSize: d,
                                trackSize: c,
                                dragStartPos: h
                            } = n;
                        t = (n.getPointerPosition(e) - o.offset()[r.isHorizontal() ? "left" : "top"] - (null !== h ? h : d / 2)) / (c - d), t = Math.max(Math.min(t, 1), 0), l && (t = 1 - t);
                        var v = r.minTranslate() + (r.maxTranslate() - r.minTranslate()) * t;
                        r.updateProgress(v), r.setTranslate(v), r.updateActiveIndex(), r.updateSlidesClasses()
                    },
                    onDragStart(e) {
                        var t = this,
                            r = t.params.scrollbar,
                            {
                                scrollbar: n,
                                $wrapperEl: l
                            } = t,
                            {
                                $el: o,
                                $dragEl: d
                            } = n;
                        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === d[0] || e.target === d ? n.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), l.transition(100), d.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), o.transition(0), r.hide && o.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
                    },
                    onDragMove(e) {
                        var t = this,
                            {
                                scrollbar: r,
                                $wrapperEl: n
                            } = t,
                            {
                                $el: l,
                                $dragEl: o
                            } = r;
                        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r.setDragPosition(e), n.transition(0), l.transition(0), o.transition(0), t.emit("scrollbarDragMove", e))
                    },
                    onDragEnd(e) {
                        var t = this,
                            r = t.params.scrollbar,
                            {
                                scrollbar: n,
                                $wrapperEl: l
                            } = t,
                            {
                                $el: o
                            } = n;
                        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), l.transition("")), r.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = w.nextTick((() => {
                            o.css("opacity", 0), o.transition(400)
                        }), 1e3)), t.emit("scrollbarDragEnd", e), r.snapOnRelease && t.slideToClosest())
                    },
                    enableDraggable() {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var {
                                scrollbar: t,
                                touchEventsTouch: r,
                                touchEventsDesktop: n,
                                params: l
                            } = e, d = t.$el[0], c = !(!y.passiveListener || !l.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            }, h = !(!y.passiveListener || !l.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            y.touch ? (d.addEventListener(r.start, e.scrollbar.onDragStart, c), d.addEventListener(r.move, e.scrollbar.onDragMove, c), d.addEventListener(r.end, e.scrollbar.onDragEnd, h)) : (d.addEventListener(n.start, e.scrollbar.onDragStart, c), o.addEventListener(n.move, e.scrollbar.onDragMove, c), o.addEventListener(n.end, e.scrollbar.onDragEnd, h))
                        }
                    },
                    disableDraggable() {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var {
                                scrollbar: t,
                                touchEventsTouch: r,
                                touchEventsDesktop: n,
                                params: l
                            } = e, d = t.$el[0], c = !(!y.passiveListener || !l.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            }, h = !(!y.passiveListener || !l.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            y.touch ? (d.removeEventListener(r.start, e.scrollbar.onDragStart, c), d.removeEventListener(r.move, e.scrollbar.onDragMove, c), d.removeEventListener(r.end, e.scrollbar.onDragEnd, h)) : (d.removeEventListener(n.start, e.scrollbar.onDragStart, c), o.removeEventListener(n.move, e.scrollbar.onDragMove, c), o.removeEventListener(n.end, e.scrollbar.onDragEnd, h))
                        }
                    },
                    init() {
                        var e = this;
                        if (e.params.scrollbar.el) {
                            var {
                                scrollbar: t,
                                $el: r
                            } = e, n = e.params.scrollbar, l = v(n.el);
                            e.params.uniqueNavElements && "string" == typeof n.el && l.length > 1 && 1 === r.find(n.el).length && (l = r.find(n.el));
                            var o = l.find(".".concat(e.params.scrollbar.dragClass));
                            0 === o.length && (o = v('<div class="'.concat(e.params.scrollbar.dragClass, '"></div>')), l.append(o)), w.extend(t, {
                                $el: l,
                                el: l[0],
                                $dragEl: o,
                                dragEl: o[0]
                            }), n.draggable && t.enableDraggable()
                        }
                    },
                    destroy() {
                        this.scrollbar.disableDraggable()
                    }
                },
                be = {
                    setTransform(e, progress) {
                        var {
                            rtl: t
                        } = this, r = v(e), n = t ? -1 : 1, p = r.attr("data-swiper-parallax") || "0", l = r.attr("data-swiper-parallax-x"), o = r.attr("data-swiper-parallax-y"), d = r.attr("data-swiper-parallax-scale"), c = r.attr("data-swiper-parallax-opacity");
                        if (l || o ? (l = l || "0", o = o || "0") : this.isHorizontal() ? (l = p, o = "0") : (o = p, l = "0"), l = l.indexOf("%") >= 0 ? "".concat(parseInt(l, 10) * progress * n, "%") : "".concat(l * progress * n, "px"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * progress, "%") : "".concat(o * progress, "px"), null != c) {
                            var h = c - (c - 1) * (1 - Math.abs(progress));
                            r[0].style.opacity = h
                        }
                        if (null == d) r.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));
                        else {
                            var m = d - (d - 1) * (1 - Math.abs(progress));
                            r.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(m, ")"))
                        }
                    },
                    setTranslate() {
                        var e = this,
                            {
                                $el: t,
                                slides: r,
                                progress: progress,
                                snapGrid: n
                            } = e;
                        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, r) => {
                            e.parallax.setTransform(r, progress)
                        })), r.each(((t, r) => {
                            var l = r.progress;
                            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (l += Math.ceil(t / 2) - progress * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), v(r).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, r) => {
                                e.parallax.setTransform(r, l)
                            }))
                        }))
                    },
                    setTransition() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                            {
                                $el: t
                            } = this;
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, r) => {
                            var n = v(r),
                                l = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (l = 0), n.transition(l)
                        }))
                    }
                },
                ye = {
                    getDistanceBetweenTouches(e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            r = e.targetTouches[0].pageY,
                            n = e.targetTouches[1].pageX,
                            l = e.targetTouches[1].pageY;
                        return Math.sqrt((n - t) ** 2 + (l - r) ** 2)
                    },
                    onGestureStart(e) {
                        var t = this,
                            r = t.params.zoom,
                            n = t.zoom,
                            {
                                gesture: l
                            } = n;
                        if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !y.gestures) {
                            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                            n.fakeGestureTouched = !0, l.scaleStart = ye.getDistanceBetweenTouches(e)
                        }
                        l.$slideEl && l.$slideEl.length || (l.$slideEl = v(e.target).closest(".".concat(t.params.slideClass)), 0 === l.$slideEl.length && (l.$slideEl = t.slides.eq(t.activeIndex)), l.$imageEl = l.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), l.$imageWrapEl = l.$imageEl.parent(".".concat(r.containerClass)), l.maxRatio = l.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, 0 !== l.$imageWrapEl.length) ? (l.$imageEl && l.$imageEl.transition(0), t.zoom.isScaling = !0) : l.$imageEl = void 0
                    },
                    onGestureChange(e) {
                        var t = this.params.zoom,
                            r = this.zoom,
                            {
                                gesture: n
                            } = r;
                        if (!y.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            r.fakeGestureMoved = !0, n.scaleMove = ye.getDistanceBetweenTouches(e)
                        }
                        n.$imageEl && 0 !== n.$imageEl.length && (r.scale = y.gestures ? e.scale * r.currentScale : n.scaleMove / n.scaleStart * r.currentScale, r.scale > n.maxRatio && (r.scale = n.maxRatio - 1 + (r.scale - n.maxRatio + 1) ** .5), r.scale < t.minRatio && (r.scale = t.minRatio + 1 - (t.minRatio - r.scale + 1) ** .5), n.$imageEl.transform("translate3d(0,0,0) scale(".concat(r.scale, ")")))
                    },
                    onGestureEnd(e) {
                        var t = this,
                            r = t.params.zoom,
                            n = t.zoom,
                            {
                                gesture: l
                            } = n;
                        if (!y.gestures) {
                            if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                            if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !W.android) return;
                            n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                        }
                        l.$imageEl && 0 !== l.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, l.maxRatio), r.minRatio), l.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(n.scale, ")")), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (l.$slideEl = void 0))
                    },
                    onTouchStart(e) {
                        var t = this.zoom,
                            {
                                gesture: r,
                                image: image
                            } = t;
                        r.$imageEl && 0 !== r.$imageEl.length && (image.isTouched || (W.android && e.cancelable && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                    },
                    onTouchMove(e) {
                        var t = this,
                            r = t.zoom,
                            {
                                gesture: n,
                                image: image,
                                velocity: l
                            } = r;
                        if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, image.isTouched && n.$slideEl)) {
                            image.isMoved || (image.width = n.$imageEl[0].offsetWidth, image.height = n.$imageEl[0].offsetHeight, image.startX = w.getTranslate(n.$imageWrapEl[0], "x") || 0, image.startY = w.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                            var o = image.width * r.scale,
                                d = image.height * r.scale;
                            if (!(o < n.slideWidth && d < n.slideHeight)) {
                                if (image.minX = Math.min(n.slideWidth / 2 - o / 2, 0), image.maxX = -image.minX, image.minY = Math.min(n.slideHeight / 2 - d / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !image.isMoved && !r.isScaling) {
                                    if (t.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                                    if (!t.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                                }
                                e.cancelable && e.preventDefault(), e.stopPropagation(), image.isMoved = !0, image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX, image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY, image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** .8), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** .8), image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** .8), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** .8), l.prevPositionX || (l.prevPositionX = image.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = image.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (image.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (image.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(image.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(image.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = image.touchesCurrent.x, l.prevPositionY = image.touchesCurrent.y, l.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"))
                            }
                        }
                    },
                    onTouchEnd() {
                        var e = this.zoom,
                            {
                                gesture: t,
                                image: image,
                                velocity: r
                            } = e;
                        if (t.$imageEl && 0 !== t.$imageEl.length) {
                            if (!image.isTouched || !image.isMoved) return image.isTouched = !1, void(image.isMoved = !1);
                            image.isTouched = !1, image.isMoved = !1;
                            var n = 300,
                                l = 300,
                                o = r.x * n,
                                d = image.currentX + o,
                                c = r.y * l,
                                h = image.currentY + c;
                            0 !== r.x && (n = Math.abs((d - image.currentX) / r.x)), 0 !== r.y && (l = Math.abs((h - image.currentY) / r.y));
                            var v = Math.max(n, l);
                            image.currentX = d, image.currentY = h;
                            var m = image.width * e.scale,
                                f = image.height * e.scale;
                            image.minX = Math.min(t.slideWidth / 2 - m / 2, 0), image.maxX = -image.minX, image.minY = Math.min(t.slideHeight / 2 - f / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), t.$imageWrapEl.transition(v).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"))
                        }
                    },
                    onTransitionEnd() {
                        var e = this,
                            t = e.zoom,
                            {
                                gesture: r
                            } = t;
                        r.$slideEl && e.previousIndex !== e.activeIndex && (r.$imageEl && r.$imageEl.transform("translate3d(0,0,0) scale(1)"), r.$imageWrapEl && r.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, r.$slideEl = void 0, r.$imageEl = void 0, r.$imageWrapEl = void 0)
                    },
                    toggle(e) {
                        var t = this.zoom;
                        t.scale && 1 !== t.scale ? t.out() : t.in(e)
                    },
                    in (e) {
                        var t, r, n, l, o, d, c, h, v, m, f, w, y, x, E, T, S = this,
                            C = S.zoom,
                            M = S.params.zoom,
                            {
                                gesture: P,
                                image: image
                            } = C;
                        (P.$slideEl || (S.params.virtual && S.params.virtual.enabled && S.virtual ? P.$slideEl = S.$wrapperEl.children(".".concat(S.params.slideActiveClass)) : P.$slideEl = S.slides.eq(S.activeIndex), P.$imageEl = P.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), P.$imageWrapEl = P.$imageEl.parent(".".concat(M.containerClass))), P.$imageEl && 0 !== P.$imageEl.length) && (P.$slideEl.addClass("".concat(M.zoomedSlideClass)), void 0 === image.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = image.touchesStart.x, r = image.touchesStart.y), C.scale = P.$imageWrapEl.attr("data-swiper-zoom") || M.maxRatio, C.currentScale = P.$imageWrapEl.attr("data-swiper-zoom") || M.maxRatio, e ? (E = P.$slideEl[0].offsetWidth, T = P.$slideEl[0].offsetHeight, n = P.$slideEl.offset().left + E / 2 - t, l = P.$slideEl.offset().top + T / 2 - r, c = P.$imageEl[0].offsetWidth, h = P.$imageEl[0].offsetHeight, v = c * C.scale, m = h * C.scale, y = -(f = Math.min(E / 2 - v / 2, 0)), x = -(w = Math.min(T / 2 - m / 2, 0)), (o = n * C.scale) < f && (o = f), o > y && (o = y), (d = l * C.scale) < w && (d = w), d > x && (d = x)) : (o = 0, d = 0), P.$imageWrapEl.transition(300).transform("translate3d(".concat(o, "px, ").concat(d, "px,0)")), P.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(C.scale, ")")))
                    },
                    out() {
                        var e = this,
                            t = e.zoom,
                            r = e.params.zoom,
                            {
                                gesture: n
                            } = t;
                        n.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? n.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : n.$slideEl = e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent(".".concat(r.containerClass))), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("".concat(r.zoomedSlideClass)), n.$slideEl = void 0)
                    },
                    enable() {
                        var e = this,
                            t = e.zoom;
                        if (!t.enabled) {
                            t.enabled = !0;
                            var r = !("touchstart" !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                },
                                n = !y.passiveListener || {
                                    passive: !1,
                                    capture: !0
                                },
                                l = ".".concat(e.params.slideClass);
                            y.gestures ? (e.$wrapperEl.on("gesturestart", l, t.onGestureStart, r), e.$wrapperEl.on("gesturechange", l, t.onGestureChange, r), e.$wrapperEl.on("gestureend", l, t.onGestureEnd, r)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, l, t.onGestureStart, r), e.$wrapperEl.on(e.touchEvents.move, l, t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, l, t.onGestureEnd, r), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, l, t.onGestureEnd, r)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove, n)
                        }
                    },
                    disable() {
                        var e = this,
                            t = e.zoom;
                        if (t.enabled) {
                            e.zoom.enabled = !1;
                            var r = !("touchstart" !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                },
                                n = !y.passiveListener || {
                                    passive: !1,
                                    capture: !0
                                },
                                l = ".".concat(e.params.slideClass);
                            y.gestures ? (e.$wrapperEl.off("gesturestart", l, t.onGestureStart, r), e.$wrapperEl.off("gesturechange", l, t.onGestureChange, r), e.$wrapperEl.off("gestureend", l, t.onGestureEnd, r)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, l, t.onGestureStart, r), e.$wrapperEl.off(e.touchEvents.move, l, t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, l, t.onGestureEnd, r), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, l, t.onGestureEnd, r)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove, n)
                        }
                    }
                },
                xe = {
                    loadInSlide(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            r = this,
                            n = r.params.lazy;
                        if (void 0 !== e && 0 !== r.slides.length) {
                            var l = r.virtual && r.params.virtual.enabled ? r.$wrapperEl.children(".".concat(r.params.slideClass, '[data-swiper-slide-index="').concat(e, '"]')) : r.slides.eq(e),
                                o = l.find(".".concat(n.elementClass, ":not(.").concat(n.loadedClass, "):not(.").concat(n.loadingClass, ")"));
                            !l.hasClass(n.elementClass) || l.hasClass(n.loadedClass) || l.hasClass(n.loadingClass) || (o = o.add(l[0])), 0 !== o.length && o.each(((e, o) => {
                                var d = v(o);
                                d.addClass(n.loadingClass);
                                var c = d.attr("data-background"),
                                    h = d.attr("data-src"),
                                    m = d.attr("data-srcset"),
                                    f = d.attr("data-sizes"),
                                    w = d.parent("picture");
                                r.loadImage(d[0], h || c, m, f, !1, (() => {
                                    if (null != r && r && (!r || r.params) && !r.destroyed) {
                                        if (c ? (d.css("background-image", 'url("'.concat(c, '")')), d.removeAttr("data-background")) : (m && (d.attr("srcset", m), d.removeAttr("data-srcset")), f && (d.attr("sizes", f), d.removeAttr("data-sizes")), w.length && w.children("source").each(((e, t) => {
                                                var r = v(t);
                                                r.attr("data-srcset") && (r.attr("srcset", r.attr("data-srcset")), r.removeAttr("data-srcset"))
                                            })), h && (d.attr("src", h), d.removeAttr("data-src"))), d.addClass(n.loadedClass).removeClass(n.loadingClass), l.find(".".concat(n.preloaderClass)).remove(), r.params.loop && t) {
                                            var e = l.attr("data-swiper-slide-index");
                                            if (l.hasClass(r.params.slideDuplicateClass)) {
                                                var o = r.$wrapperEl.children('[data-swiper-slide-index="'.concat(e, '"]:not(.').concat(r.params.slideDuplicateClass, ")"));
                                                r.lazy.loadInSlide(o.index(), !1)
                                            } else {
                                                var y = r.$wrapperEl.children(".".concat(r.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(e, '"]'));
                                                r.lazy.loadInSlide(y.index(), !1)
                                            }
                                        }
                                        r.emit("lazyImageReady", l[0], d[0]), r.params.autoHeight && r.updateAutoHeight()
                                    }
                                })), r.emit("lazyImageLoad", l[0], d[0])
                            }))
                        }
                    },
                    load() {
                        var e = this,
                            {
                                $wrapperEl: t,
                                params: r,
                                slides: n,
                                activeIndex: l
                            } = e,
                            o = e.virtual && r.virtual.enabled,
                            d = r.lazy,
                            c = r.slidesPerView;

                        function h(e) {
                            if (o) {
                                if (t.children(".".concat(r.slideClass, '[data-swiper-slide-index="').concat(e, '"]')).length) return !0
                            } else if (n[e]) return !0;
                            return !1
                        }

                        function m(e) {
                            return o ? v(e).attr("data-swiper-slide-index") : v(e).index()
                        }
                        if ("auto" === c && (c = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(r.slideVisibleClass)).each(((t, r) => {
                            var n = o ? v(r).attr("data-swiper-slide-index") : v(r).index();
                            e.lazy.loadInSlide(n)
                        }));
                        else if (c > 1)
                            for (var i = l; i < l + c; i += 1) h(i) && e.lazy.loadInSlide(i);
                        else e.lazy.loadInSlide(l);
                        if (d.loadPrevNext)
                            if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                                for (var f = d.loadPrevNextAmount, w = c, y = Math.min(l + w + Math.max(f, w), n.length), x = Math.max(l - Math.max(w, f), 0), E = l + c; E < y; E += 1) h(E) && e.lazy.loadInSlide(E);
                                for (var T = x; T < l; T += 1) h(T) && e.lazy.loadInSlide(T)
                            } else {
                                var S = t.children(".".concat(r.slideNextClass));
                                S.length > 0 && e.lazy.loadInSlide(m(S));
                                var C = t.children(".".concat(r.slidePrevClass));
                                C.length > 0 && e.lazy.loadInSlide(m(C))
                            }
                    }
                },
                Ee = {
                    LinearSpline: function(e, t) {
                        var r, n, l, o, d, c = (e, t) => {
                            for (n = -1, r = e.length; r - n > 1;) e[l = r + n >> 1] <= t ? n = l : r = l;
                            return r
                        };
                        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                            return e ? (d = c(this.x, e), o = d - 1, (e - this.x[o]) * (this.y[d] - this.y[o]) / (this.x[d] - this.x[o]) + this.y[o]) : 0
                        }, this
                    },
                    getInterpolateFunction(e) {
                        var t = this;
                        t.controller.spline || (t.controller.spline = t.params.loop ? new Ee.LinearSpline(t.slidesGrid, e.slidesGrid) : new Ee.LinearSpline(t.snapGrid, e.snapGrid))
                    },
                    setTranslate(e, t) {
                        var r, n, l = this,
                            o = l.controller.control;

                        function d(e) {
                            var t = l.rtlTranslate ? -l.translate : l.translate;
                            "slide" === l.params.controller.by && (l.controller.getInterpolateFunction(e), n = -l.controller.spline.interpolate(-t)), n && "container" !== l.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (l.maxTranslate() - l.minTranslate()), n = (t - l.minTranslate()) * r + e.minTranslate()), l.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, l), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                        if (Array.isArray(o))
                            for (var i = 0; i < o.length; i += 1) o[i] !== t && o[i] instanceof ie && d(o[i]);
                        else o instanceof ie && t !== o && d(o)
                    },
                    setTransition(e, t) {
                        var i, r = this,
                            n = r.controller.control;

                        function l(t) {
                            t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.params.autoHeight && w.nextTick((() => {
                                t.updateAutoHeight()
                            })), t.$wrapperEl.transitionEnd((() => {
                                n && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                            })))
                        }
                        if (Array.isArray(n))
                            for (i = 0; i < n.length; i += 1) n[i] !== t && n[i] instanceof ie && l(n[i]);
                        else n instanceof ie && t !== n && l(n)
                    }
                },
                Te = {
                    makeElFocusable: e => (e.attr("tabIndex", "0"), e),
                    makeElNotFocusable: e => (e.attr("tabIndex", "-1"), e),
                    addElRole: (e, t) => (e.attr("role", t), e),
                    addElLabel: (e, label) => (e.attr("aria-label", label), e),
                    disableEl: e => (e.attr("aria-disabled", !0), e),
                    enableEl: e => (e.attr("aria-disabled", !1), e),
                    onEnterKey(e) {
                        var t = this,
                            r = t.params.a11y;
                        if (13 === e.keyCode) {
                            var n = v(e.target);
                            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(r.lastSlideMessage) : t.a11y.notify(r.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(r.firstSlideMessage) : t.a11y.notify(r.prevSlideMessage)), t.pagination && n.is(".".concat(t.params.pagination.bulletClass)) && n[0].click()
                        }
                    },
                    notify(e) {
                        var t = this.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    updateNavigation() {
                        var e = this;
                        if (!e.params.loop && e.navigation) {
                            var {
                                $nextEl: t,
                                $prevEl: r
                            } = e.navigation;
                            r && r.length > 0 && (e.isBeginning ? (e.a11y.disableEl(r), e.a11y.makeElNotFocusable(r)) : (e.a11y.enableEl(r), e.a11y.makeElFocusable(r))), t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
                        }
                    },
                    updatePagination() {
                        var e = this,
                            t = e.params.a11y;
                        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((r, n) => {
                            var l = v(n);
                            e.a11y.makeElFocusable(l), e.a11y.addElRole(l, "button"), e.a11y.addElLabel(l, t.paginationBulletMessage.replace(/\{\{index\}\}/, l.index() + 1))
                        }))
                    },
                    init() {
                        var e = this;
                        e.$el.append(e.a11y.liveRegion);
                        var t, r, n = e.params.a11y;
                        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), r && (e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, n.prevSlideMessage), r.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey)
                    },
                    destroy() {
                        var e, t, r = this;
                        r.a11y.liveRegion && r.a11y.liveRegion.length > 0 && r.a11y.liveRegion.remove(), r.navigation && r.navigation.$nextEl && (e = r.navigation.$nextEl), r.navigation && r.navigation.$prevEl && (t = r.navigation.$prevEl), e && e.off("keydown", r.a11y.onEnterKey), t && t.off("keydown", r.a11y.onEnterKey), r.pagination && r.params.pagination.clickable && r.pagination.bullets && r.pagination.bullets.length && r.pagination.$el.off("keydown", ".".concat(r.params.pagination.bulletClass), r.a11y.onEnterKey)
                    }
                },
                Se = {
                    init() {
                        var e = this;
                        if (e.params.history) {
                            if (!c.history || !c.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                            var t = e.history;
                            t.initialized = !0, t.paths = Se.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || c.addEventListener("popstate", e.history.setHistoryPopState))
                        }
                    },
                    destroy() {
                        this.params.history.replaceState || c.removeEventListener("popstate", this.history.setHistoryPopState)
                    },
                    setHistoryPopState() {
                        var e = this;
                        e.history.paths = Se.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                    },
                    getPathValues() {
                        var e = c.location.pathname.slice(1).split("/").filter((e => "" !== e)),
                            t = e.length;
                        return {
                            key: e[t - 2],
                            value: e[t - 1]
                        }
                    },
                    setHistory(e, t) {
                        var r = this;
                        if (r.history.initialized && r.params.history.enabled) {
                            var n = r.slides.eq(t),
                                l = Se.slugify(n.attr("data-history"));
                            c.location.pathname.includes(e) || (l = "".concat(e, "/").concat(l));
                            var o = c.history.state;
                            o && o.value === l || (r.params.history.replaceState ? c.history.replaceState({
                                value: l
                            }, null, l) : c.history.pushState({
                                value: l
                            }, null, l))
                        }
                    },
                    slugify: text => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                    scrollToSlide(e, t, r) {
                        var n = this;
                        if (t)
                            for (var i = 0, l = n.slides.length; i < l; i += 1) {
                                var o = n.slides.eq(i);
                                if (Se.slugify(o.attr("data-history")) === t && !o.hasClass(n.params.slideDuplicateClass)) {
                                    var d = o.index();
                                    n.slideTo(d, e, r)
                                }
                            } else n.slideTo(0, e, r)
                    }
                },
                Ce = {
                    onHashCange() {
                        var e = this;
                        e.emit("hashChange");
                        var t = o.location.hash.replace("#", "");
                        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                            var r = e.$wrapperEl.children(".".concat(e.params.slideClass, '[data-hash="').concat(t, '"]')).index();
                            if (void 0 === r) return;
                            e.slideTo(r)
                        }
                    },
                    setHash() {
                        var e = this;
                        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                            if (e.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || !1), e.emit("hashSet");
                            else {
                                var t = e.slides.eq(e.activeIndex),
                                    r = t.attr("data-hash") || t.attr("data-history");
                                o.location.hash = r || "", e.emit("hashSet")
                            }
                    },
                    init() {
                        var e = this;
                        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                            e.hashNavigation.initialized = !0;
                            var t = o.location.hash.replace("#", "");
                            if (t)
                                for (var i = 0, r = e.slides.length; i < r; i += 1) {
                                    var n = e.slides.eq(i);
                                    if ((n.attr("data-hash") || n.attr("data-history")) === t && !n.hasClass(e.params.slideDuplicateClass)) {
                                        var l = n.index();
                                        e.slideTo(l, 0, e.params.runCallbacksOnInit, !0)
                                    }
                                }
                            e.params.hashNavigation.watchState && v(c).on("hashchange", e.hashNavigation.onHashCange)
                        }
                    },
                    destroy() {
                        this.params.hashNavigation.watchState && v(c).off("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                Me = {
                    run() {
                        var e = this,
                            t = e.slides.eq(e.activeIndex),
                            r = e.params.autoplay.delay;
                        t.attr("data-swiper-autoplay") && (r = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = w.nextTick((() => {
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                        }), r)
                    },
                    start() {
                        var e = this;
                        return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                    },
                    stop() {
                        var e = this;
                        return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                    },
                    pause(e) {
                        var t = this;
                        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                    }
                },
                Pe = {
                    setTranslate() {
                        for (var e = this, {
                                slides: t
                            } = e, i = 0; i < t.length; i += 1) {
                            var r = e.slides.eq(i),
                                n = -r[0].swiperSlideOffset;
                            e.params.virtualTranslate || (n -= e.translate);
                            var l = 0;
                            e.isHorizontal() || (l = n, n = 0);
                            var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0);
                            r.css({
                                opacity: o
                            }).transform("translate3d(".concat(n, "px, ").concat(l, "px, 0px)"))
                        }
                    },
                    setTransition(e) {
                        var t = this,
                            {
                                slides: r,
                                $wrapperEl: n
                            } = t;
                        if (r.transition(e), t.params.virtualTranslate && 0 !== e) {
                            var l = !1;
                            r.transitionEnd((() => {
                                if (!l && t && !t.destroyed) {
                                    l = !0, t.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                                }
                            }))
                        }
                    }
                },
                ke = {
                    setTranslate() {
                        var e, t = this,
                            {
                                $el: r,
                                $wrapperEl: n,
                                slides: l,
                                width: o,
                                height: d,
                                rtlTranslate: c,
                                size: h
                            } = t,
                            m = t.params.cubeEffect,
                            f = t.isHorizontal(),
                            w = t.virtual && t.params.virtual.enabled,
                            y = 0;
                        m.shadow && (f ? (0 === (e = n.find(".swiper-cube-shadow")).length && (e = v('<div class="swiper-cube-shadow"></div>'), n.append(e)), e.css({
                            height: "".concat(o, "px")
                        })) : 0 === (e = r.find(".swiper-cube-shadow")).length && (e = v('<div class="swiper-cube-shadow"></div>'), r.append(e)));
                        for (var i = 0; i < l.length; i += 1) {
                            var x = l.eq(i),
                                E = i;
                            w && (E = parseInt(x.attr("data-swiper-slide-index"), 10));
                            var T = 90 * E,
                                S = Math.floor(T / 360);
                            c && (T = -T, S = Math.floor(-T / 360));
                            var progress = Math.max(Math.min(x[0].progress, 1), -1),
                                C = 0,
                                M = 0,
                                P = 0;
                            E % 4 == 0 ? (C = 4 * -S * h, P = 0) : (E - 1) % 4 == 0 ? (C = 0, P = 4 * -S * h) : (E - 2) % 4 == 0 ? (C = h + 4 * S * h, P = h) : (E - 3) % 4 == 0 && (C = -h, P = 3 * h + 4 * h * S), c && (C = -C), f || (M = C, C = 0);
                            var k = "rotateX(".concat(f ? 0 : -T, "deg) rotateY(").concat(f ? T : 0, "deg) translate3d(").concat(C, "px, ").concat(M, "px, ").concat(P, "px)");
                            if (progress <= 1 && progress > -1 && (y = 90 * E + 90 * progress, c && (y = 90 * -E - 90 * progress)), x.transform(k), m.slideShadows) {
                                var z = f ? x.find(".swiper-slide-shadow-left") : x.find(".swiper-slide-shadow-top"),
                                    $ = f ? x.find(".swiper-slide-shadow-right") : x.find(".swiper-slide-shadow-bottom");
                                0 === z.length && (z = v('<div class="swiper-slide-shadow-'.concat(f ? "left" : "top", '"></div>')), x.append(z)), 0 === $.length && ($ = v('<div class="swiper-slide-shadow-'.concat(f ? "right" : "bottom", '"></div>')), x.append($)), z.length && (z[0].style.opacity = Math.max(-progress, 0)), $.length && ($[0].style.opacity = Math.max(progress, 0))
                            }
                        }
                        if (n.css({
                                "-webkit-transform-origin": "50% 50% -".concat(h / 2, "px"),
                                "-moz-transform-origin": "50% 50% -".concat(h / 2, "px"),
                                "-ms-transform-origin": "50% 50% -".concat(h / 2, "px"),
                                "transform-origin": "50% 50% -".concat(h / 2, "px")
                            }), m.shadow)
                            if (f) e.transform("translate3d(0px, ".concat(o / 2 + m.shadowOffset, "px, ").concat(-o / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(m.shadowScale, ")"));
                            else {
                                var I = Math.abs(y) - 90 * Math.floor(Math.abs(y) / 90),
                                    L = 1.5 - (Math.sin(2 * I * Math.PI / 360) / 2 + Math.cos(2 * I * Math.PI / 360) / 2),
                                    O = m.shadowScale,
                                    D = m.shadowScale / L,
                                    A = m.shadowOffset;
                                e.transform("scale3d(".concat(O, ", 1, ").concat(D, ") translate3d(0px, ").concat(d / 2 + A, "px, ").concat(-d / 2 / D, "px) rotateX(-90deg)"))
                            }
                        var B = ne.isSafari || ne.isWebView ? -h / 2 : 0;
                        n.transform("translate3d(0px,0,".concat(B, "px) rotateX(").concat(t.isHorizontal() ? 0 : y, "deg) rotateY(").concat(t.isHorizontal() ? -y : 0, "deg)"))
                    },
                    setTransition(e) {
                        var t = this,
                            {
                                $el: r,
                                slides: n
                            } = t;
                        n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && r.find(".swiper-cube-shadow").transition(e)
                    }
                },
                ze = {
                    setTranslate() {
                        for (var e = this, {
                                slides: t,
                                rtlTranslate: r
                            } = e, i = 0; i < t.length; i += 1) {
                            var n = t.eq(i),
                                progress = n[0].progress;
                            e.params.flipEffect.limitRotation && (progress = Math.max(Math.min(n[0].progress, 1), -1));
                            var l = -180 * progress,
                                o = 0,
                                d = -n[0].swiperSlideOffset,
                                c = 0;
                            if (e.isHorizontal() ? r && (l = -l) : (c = d, d = 0, o = -l, l = 0), n[0].style.zIndex = -Math.abs(Math.round(progress)) + t.length, e.params.flipEffect.slideShadows) {
                                var h = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                    m = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                0 === h.length && (h = v('<div class="swiper-slide-shadow-'.concat(e.isHorizontal() ? "left" : "top", '"></div>')), n.append(h)), 0 === m.length && (m = v('<div class="swiper-slide-shadow-'.concat(e.isHorizontal() ? "right" : "bottom", '"></div>')), n.append(m)), h.length && (h[0].style.opacity = Math.max(-progress, 0)), m.length && (m[0].style.opacity = Math.max(progress, 0))
                            }
                            n.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px) rotateX(").concat(o, "deg) rotateY(").concat(l, "deg)"))
                        }
                    },
                    setTransition(e) {
                        var t = this,
                            {
                                slides: r,
                                activeIndex: n,
                                $wrapperEl: l
                            } = t;
                        if (r.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                            var o = !1;
                            r.eq(n).transitionEnd((function() {
                                if (!o && t && !t.destroyed) {
                                    o = !0, t.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) l.trigger(e[i])
                                }
                            }))
                        }
                    }
                },
                $e = {
                    setTranslate() {
                        for (var e = this, {
                                width: t,
                                height: r,
                                slides: n,
                                $wrapperEl: l,
                                slidesSizesGrid: o
                            } = e, d = e.params.coverflowEffect, c = e.isHorizontal(), h = e.translate, m = c ? t / 2 - h : r / 2 - h, f = c ? d.rotate : -d.rotate, w = d.depth, i = 0, x = n.length; i < x; i += 1) {
                            var E = n.eq(i),
                                T = o[i],
                                S = (m - E[0].swiperSlideOffset - T / 2) / T * d.modifier,
                                C = c ? f * S : 0,
                                M = c ? 0 : f * S,
                                P = -w * Math.abs(S),
                                k = d.stretch;
                            "string" == typeof k && -1 !== k.indexOf("%") && (k = parseFloat(d.stretch) / 100 * T);
                            var z = c ? 0 : k * S,
                                $ = c ? k * S : 0,
                                I = 1 - (1 - d.scale) * Math.abs(S);
                            Math.abs($) < .001 && ($ = 0), Math.abs(z) < .001 && (z = 0), Math.abs(P) < .001 && (P = 0), Math.abs(C) < .001 && (C = 0), Math.abs(M) < .001 && (M = 0), Math.abs(I) < .001 && (I = 0);
                            var L = "translate3d(".concat($, "px,").concat(z, "px,").concat(P, "px)  rotateX(").concat(M, "deg) rotateY(").concat(C, "deg) scale(").concat(I, ")");
                            if (E.transform(L), E[0].style.zIndex = 1 - Math.abs(Math.round(S)), d.slideShadows) {
                                var O = c ? E.find(".swiper-slide-shadow-left") : E.find(".swiper-slide-shadow-top"),
                                    D = c ? E.find(".swiper-slide-shadow-right") : E.find(".swiper-slide-shadow-bottom");
                                0 === O.length && (O = v('<div class="swiper-slide-shadow-'.concat(c ? "left" : "top", '"></div>')), E.append(O)), 0 === D.length && (D = v('<div class="swiper-slide-shadow-'.concat(c ? "right" : "bottom", '"></div>')), E.append(D)), O.length && (O[0].style.opacity = S > 0 ? S : 0), D.length && (D[0].style.opacity = -S > 0 ? -S : 0)
                            }
                        }(y.pointerEvents || y.prefixedPointerEvents) && (l[0].style.perspectiveOrigin = "".concat(m, "px 50%"))
                    },
                    setTransition(e) {
                        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                },
                Ie = {
                    init() {
                        var e = this,
                            {
                                thumbs: t
                            } = e.params,
                            r = e.constructor;
                        t.swiper instanceof r ? (e.thumbs.swiper = t.swiper, w.extend(e.thumbs.swiper.originalParams, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), w.extend(e.thumbs.swiper.params, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })) : w.isObject(t.swiper) && (e.thumbs.swiper = new r(w.extend({}, t.swiper, {
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                    },
                    onThumbClick() {
                        var e = this,
                            t = e.thumbs.swiper;
                        if (t) {
                            var r = t.clickedIndex,
                                n = t.clickedSlide;
                            if (!(n && v(n).hasClass(e.params.thumbs.slideThumbActiveClass) || null == r)) {
                                var l;
                                if (l = t.params.loop ? parseInt(v(t.clickedSlide).attr("data-swiper-slide-index"), 10) : r, e.params.loop) {
                                    var o = e.activeIndex;
                                    e.slides.eq(o).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, o = e.activeIndex);
                                    var d = e.slides.eq(o).prevAll('[data-swiper-slide-index="'.concat(l, '"]')).eq(0).index(),
                                        c = e.slides.eq(o).nextAll('[data-swiper-slide-index="'.concat(l, '"]')).eq(0).index();
                                    l = void 0 === d ? c : void 0 === c ? d : c - o < o - d ? c : d
                                }
                                e.slideTo(l)
                            }
                        }
                    },
                    update(e) {
                        var t = this,
                            r = t.thumbs.swiper;
                        if (r) {
                            var n = "auto" === r.params.slidesPerView ? r.slidesPerViewDynamic() : r.params.slidesPerView,
                                l = t.params.thumbs.autoScrollOffset,
                                o = l && !r.params.loop;
                            if (t.realIndex !== r.realIndex || o) {
                                var d, c, h = r.activeIndex;
                                if (r.params.loop) {
                                    r.slides.eq(h).hasClass(r.params.slideDuplicateClass) && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, h = r.activeIndex);
                                    var v = r.slides.eq(h).prevAll('[data-swiper-slide-index="'.concat(t.realIndex, '"]')).eq(0).index(),
                                        m = r.slides.eq(h).nextAll('[data-swiper-slide-index="'.concat(t.realIndex, '"]')).eq(0).index();
                                    d = void 0 === v ? m : void 0 === m ? v : m - h == h - v ? h : m - h < h - v ? m : v, c = t.activeIndex > t.previousIndex ? "next" : "prev"
                                } else c = (d = t.realIndex) > t.previousIndex ? "next" : "prev";
                                o && (d += "next" === c ? l : -1 * l), r.visibleSlidesIndexes && r.visibleSlidesIndexes.indexOf(d) < 0 && (r.params.centeredSlides ? d = d > h ? d - Math.floor(n / 2) + 1 : d + Math.floor(n / 2) - 1 : d > h && (d = d - n + 1), r.slideTo(d, e ? 0 : void 0))
                            }
                            var f = 1,
                                w = t.params.thumbs.slideThumbActiveClass;
                            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (f = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (f = 1), f = Math.floor(f), r.slides.removeClass(w), r.params.loop || r.params.virtual && r.params.virtual.enabled)
                                for (var i = 0; i < f; i += 1) r.$wrapperEl.children('[data-swiper-slide-index="'.concat(t.realIndex + i, '"]')).addClass(w);
                            else
                                for (var y = 0; y < f; y += 1) r.slides.eq(t.realIndex + y).addClass(w)
                        }
                    }
                },
                Le = [se, re, le, oe, ce, ue, ve, {
                    name: "mousewheel",
                    params: {
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarged: "container"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            mousewheel: {
                                enabled: !1,
                                enable: me.enable.bind(e),
                                disable: me.disable.bind(e),
                                handle: me.handle.bind(e),
                                handleMouseEnter: me.handleMouseEnter.bind(e),
                                handleMouseLeave: me.handleMouseLeave.bind(e),
                                animateSlider: me.animateSlider.bind(e),
                                releaseScroll: me.releaseScroll.bind(e),
                                lastScrollTime: w.now(),
                                lastEventBeforeSnap: void 0,
                                recentWheelEvents: []
                            }
                        })
                    },
                    on: {
                        init() {
                            var e = this;
                            !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                        },
                        destroy() {
                            var e = this;
                            e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                        }
                    }
                }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            navigation: {
                                init: fe.init.bind(e),
                                update: fe.update.bind(e),
                                destroy: fe.destroy.bind(e),
                                onNextClick: fe.onNextClick.bind(e),
                                onPrevClick: fe.onPrevClick.bind(e)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.navigation.init(), this.navigation.update()
                        },
                        toEdge() {
                            this.navigation.update()
                        },
                        fromEdge() {
                            this.navigation.update()
                        },
                        destroy() {
                            this.navigation.destroy()
                        },
                        click(e) {
                            var t, r = this,
                                {
                                    $nextEl: n,
                                    $prevEl: l
                                } = r.navigation;
                            !r.params.navigation.hideOnClick || v(e.target).is(l) || v(e.target).is(n) || (n ? t = n.hasClass(r.params.navigation.hiddenClass) : l && (t = l.hasClass(r.params.navigation.hiddenClass)), !0 === t ? r.emit("navigationShow", r) : r.emit("navigationHide", r), n && n.toggleClass(r.params.navigation.hiddenClass), l && l.toggleClass(r.params.navigation.hiddenClass))
                        }
                    }
                }, {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: e => e,
                            formatFractionTotal: e => e,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            pagination: {
                                init: ge.init.bind(e),
                                render: ge.render.bind(e),
                                update: ge.update.bind(e),
                                destroy: ge.destroy.bind(e),
                                dynamicBulletIndex: 0
                            }
                        })
                    },
                    on: {
                        init() {
                            var e = this;
                            e.pagination.init(), e.pagination.render(), e.pagination.update()
                        },
                        activeIndexChange() {
                            var e = this;
                            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                        },
                        snapIndexChange() {
                            this.params.loop || this.pagination.update()
                        },
                        slidesLengthChange() {
                            var e = this;
                            e.params.loop && (e.pagination.render(), e.pagination.update())
                        },
                        snapGridLengthChange() {
                            var e = this;
                            e.params.loop || (e.pagination.render(), e.pagination.update())
                        },
                        destroy() {
                            this.pagination.destroy()
                        },
                        click(e) {
                            var t = this;
                            t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !v(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            scrollbar: {
                                init: we.init.bind(e),
                                destroy: we.destroy.bind(e),
                                updateSize: we.updateSize.bind(e),
                                setTranslate: we.setTranslate.bind(e),
                                setTransition: we.setTransition.bind(e),
                                enableDraggable: we.enableDraggable.bind(e),
                                disableDraggable: we.disableDraggable.bind(e),
                                setDragPosition: we.setDragPosition.bind(e),
                                getPointerPosition: we.getPointerPosition.bind(e),
                                onDragStart: we.onDragStart.bind(e),
                                onDragMove: we.onDragMove.bind(e),
                                onDragEnd: we.onDragEnd.bind(e),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init() {
                            var e = this;
                            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                        },
                        update() {
                            this.scrollbar.updateSize()
                        },
                        resize() {
                            this.scrollbar.updateSize()
                        },
                        observerUpdate() {
                            this.scrollbar.updateSize()
                        },
                        setTranslate() {
                            this.scrollbar.setTranslate()
                        },
                        setTransition(e) {
                            this.scrollbar.setTransition(e)
                        },
                        destroy() {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "parallax",
                    params: {
                        parallax: {
                            enabled: !1
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            parallax: {
                                setTransform: be.setTransform.bind(e),
                                setTranslate: be.setTranslate.bind(e),
                                setTransition: be.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                        },
                        init() {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTranslate() {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTransition(e) {
                            this.params.parallax.enabled && this.parallax.setTransition(e)
                        }
                    }
                }, {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create() {
                        var e = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                }
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((r => {
                            t[r] = ye[r].bind(e)
                        })), w.extend(e, {
                            zoom: t
                        });
                        var r = 1;
                        Object.defineProperty(e.zoom, "scale", {
                            get: () => r,
                            set(t) {
                                if (r !== t) {
                                    var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                        l = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                    e.emit("zoomChange", t, n, l)
                                }
                                r = t
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.zoom.enabled && this.zoom.enable()
                        },
                        destroy() {
                            this.zoom.disable()
                        },
                        touchStart(e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e)
                        },
                        touchEnd(e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e)
                        },
                        doubleTap(e) {
                            var t = this;
                            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                        },
                        transitionEnd() {
                            var e = this;
                            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                        },
                        slideChange() {
                            var e = this;
                            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                        }
                    }
                }, {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: xe.load.bind(e),
                                loadInSlide: xe.loadInSlide.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                        },
                        init() {
                            var e = this;
                            e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                        },
                        scroll() {
                            var e = this;
                            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                        },
                        resize() {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        scrollbarDragMove() {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        transitionStart() {
                            var e = this;
                            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                        },
                        transitionEnd() {
                            var e = this;
                            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                        },
                        slideChange() {
                            var e = this;
                            e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                        }
                    }
                }, {
                    name: "controller",
                    params: {
                        controller: {
                            control: void 0,
                            inverse: !1,
                            by: "slide"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            controller: {
                                control: e.params.controller.control,
                                getInterpolateFunction: Ee.getInterpolateFunction.bind(e),
                                setTranslate: Ee.setTranslate.bind(e),
                                setTransition: Ee.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        update() {
                            var e = this;
                            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                        },
                        resize() {
                            var e = this;
                            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                        },
                        observerUpdate() {
                            var e = this;
                            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                        },
                        setTranslate(e, t) {
                            this.controller.control && this.controller.setTranslate(e, t)
                        },
                        setTransition(e, t) {
                            this.controller.control && this.controller.setTransition(e, t)
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            a11y: {
                                liveRegion: v('<span class="'.concat(e.params.a11y.notificationClass, '" aria-live="assertive" aria-atomic="true"></span>'))
                            }
                        }), Object.keys(Te).forEach((t => {
                            e.a11y[t] = Te[t].bind(e)
                        }))
                    },
                    on: {
                        init() {
                            var e = this;
                            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                        },
                        toEdge() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        fromEdge() {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        paginationUpdate() {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        },
                        destroy() {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "history",
                    params: {
                        history: {
                            enabled: !1,
                            replaceState: !1,
                            key: "slides"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            history: {
                                init: Se.init.bind(e),
                                setHistory: Se.setHistory.bind(e),
                                setHistoryPopState: Se.setHistoryPopState.bind(e),
                                scrollToSlide: Se.scrollToSlide.bind(e),
                                destroy: Se.destroy.bind(e)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.history.enabled && this.history.init()
                        },
                        destroy() {
                            this.params.history.enabled && this.history.destroy()
                        },
                        transitionEnd() {
                            var e = this;
                            e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                        },
                        slideChange() {
                            var e = this;
                            e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                        }
                    }
                }, {
                    name: "hash-navigation",
                    params: {
                        hashNavigation: {
                            enabled: !1,
                            replaceState: !1,
                            watchState: !1
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            hashNavigation: {
                                initialized: !1,
                                init: Ce.init.bind(e),
                                destroy: Ce.destroy.bind(e),
                                setHash: Ce.setHash.bind(e),
                                onHashCange: Ce.onHashCange.bind(e)
                            }
                        })
                    },
                    on: {
                        init() {
                            this.params.hashNavigation.enabled && this.hashNavigation.init()
                        },
                        destroy() {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                        },
                        transitionEnd() {
                            this.hashNavigation.initialized && this.hashNavigation.setHash()
                        },
                        slideChange() {
                            var e = this;
                            e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: Me.run.bind(e),
                                start: Me.start.bind(e),
                                stop: Me.stop.bind(e),
                                pause: Me.pause.bind(e),
                                onVisibilityChange() {
                                    "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                                },
                                onTransitionEnd(t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            var e = this;
                            e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                        },
                        beforeTransitionStart(e, t) {
                            var r = this;
                            r.autoplay.running && (t || !r.params.autoplay.disableOnInteraction ? r.autoplay.pause(e) : r.autoplay.stop())
                        },
                        sliderFirstMove() {
                            var e = this;
                            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                        },
                        touchEnd() {
                            var e = this;
                            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                        },
                        destroy() {
                            var e = this;
                            e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                        }
                    }
                }, {
                    name: "effect-fade",
                    params: {
                        fadeEffect: {
                            crossFade: !1
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            fadeEffect: {
                                setTranslate: Pe.setTranslate.bind(e),
                                setTransition: Pe.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            if ("fade" === e.params.effect) {
                                e.classNames.push("".concat(e.params.containerModifierClass, "fade"));
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                w.extend(e.params, t), w.extend(e.originalParams, t)
                            }
                        },
                        setTranslate() {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate()
                        },
                        setTransition(e) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-cube",
                    params: {
                        cubeEffect: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            cubeEffect: {
                                setTranslate: ke.setTranslate.bind(e),
                                setTransition: ke.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            if ("cube" === e.params.effect) {
                                e.classNames.push("".concat(e.params.containerModifierClass, "cube")), e.classNames.push("".concat(e.params.containerModifierClass, "3d"));
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                w.extend(e.params, t), w.extend(e.originalParams, t)
                            }
                        },
                        setTranslate() {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate()
                        },
                        setTransition(e) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-flip",
                    params: {
                        flipEffect: {
                            slideShadows: !0,
                            limitRotation: !0
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            flipEffect: {
                                setTranslate: ze.setTranslate.bind(e),
                                setTransition: ze.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            if ("flip" === e.params.effect) {
                                e.classNames.push("".concat(e.params.containerModifierClass, "flip")), e.classNames.push("".concat(e.params.containerModifierClass, "3d"));
                                var t = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                w.extend(e.params, t), w.extend(e.originalParams, t)
                            }
                        },
                        setTranslate() {
                            "flip" === this.params.effect && this.flipEffect.setTranslate()
                        },
                        setTransition(e) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-coverflow",
                    params: {
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            scale: 1,
                            modifier: 1,
                            slideShadows: !0
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            coverflowEffect: {
                                setTranslate: $e.setTranslate.bind(e),
                                setTransition: $e.setTransition.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this;
                            "coverflow" === e.params.effect && (e.classNames.push("".concat(e.params.containerModifierClass, "coverflow")), e.classNames.push("".concat(e.params.containerModifierClass, "3d")), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                        },
                        setTranslate() {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                        },
                        setTransition(e) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "thumbs",
                    params: {
                        thumbs: {
                            swiper: null,
                            multipleActiveThumbs: !0,
                            autoScrollOffset: 0,
                            slideThumbActiveClass: "swiper-slide-thumb-active",
                            thumbsContainerClass: "swiper-container-thumbs"
                        }
                    },
                    create() {
                        var e = this;
                        w.extend(e, {
                            thumbs: {
                                swiper: null,
                                init: Ie.init.bind(e),
                                update: Ie.update.bind(e),
                                onThumbClick: Ie.onThumbClick.bind(e)
                            }
                        })
                    },
                    on: {
                        beforeInit() {
                            var e = this,
                                {
                                    thumbs: t
                                } = e.params;
                            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                        },
                        slideChange() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        update() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        resize() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        observerUpdate() {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        setTransition(e) {
                            var t = this.thumbs.swiper;
                            t && t.setTransition(e)
                        },
                        beforeDestroy() {
                            var e = this.thumbs.swiper;
                            e && this.thumbs.swiperCreated && e && e.destroy()
                        }
                    }
                }];
            void 0 === ie.use && (ie.use = ie.Class.use, ie.installModule = ie.Class.installModule), ie.use(Le);
            t.default = ie
        }
    }
]);