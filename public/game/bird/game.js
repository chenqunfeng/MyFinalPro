! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                throw new Error("Cannot find module '" + g + "'")
            }
            var j = c[g] = {
                exports: {}
            };
            b[g][0].call(j.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, j, j.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function(a, b) {
        var c = a("./util"),
            d = a("eventemitter2").EventEmitter2;
        d.extend = c.extend, b.exports = d
    }, {
        "./util": 5,
        eventemitter2: 6
    }],
    2: [function(a, b) {
        a("./init");
        var c = a("./event"),
            d = function() {
                this.isStart = !1, this.isStop = !0, this.isResume = !1, this.isPause = !0, this.sprits = [], this.timer = null
            },
            e = {
                init: function() {
                    this.emit("init"), this.render()
                },
                start: function() {
                    this.isStart = !0, this.isStop = !0, this.resume(), this.emit("start")
                },
                stop: function() {
                    this.isStart = !1, this.isStop = !0, this.pause(), this.emit("stop")
                },
                pause: function() {
                    this.isPause = !0, this.isResume = !1, this.emit("pause")
                },
                resume: function() {
                    this.isResume = !0, this.isPause = !1, this.emit("resume")
                },
                render: function() {
                    function a() {
                        var c = b.sprits;
                        b.sprits = [];
                        for (var d = 0, e = c.length; e > d; d++) {
                            var f = c[d];
                            if (f.isToRemove) b.emit("sprit removed", f), "function" == typeof f._after_remove && (f._after_remove(), delete f._after_remove);
                            else {
                                var f = c[d];
                                b.sprits.push(f), f.move()
                            }
                        }
                        b.timer = requestAnimationFrame(a)
                    }
                    var b = this;
                    a()
                },
                add: function(a) {
                    if ("function" != typeof a.move) throw "Sprit should have a `move` function.";
                    a.isToRemove = !1, this.sprits.push(a), this.emit("sprit added", a)
                },
                remove: function(a, b) {
                    a.isToRemove = !0, a._after_remove = b
                }
            };
        b.exports = c.extend(d, e)
    }, {
        "./event": 1,
        "./init": 3
    }],
    3: [function() {
        for (var a = 0, b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                e = window.setTimeout(function() {
                    b(c + d)
                }, d);
            return a = c + d, e
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }, {}],
    4: [function(a, b) {
        var c = a("./event"),
            d = new c;
        d.images = {
            pool: {},
            count: 0,
            loadedCount: 0
        }, d.images.set = function(a, b, c) {
            var e = new Image;
            if (d.images.pool[a]) throw new Error("id " + a + " existed.");
            return e.addEventListener("load", function() {
                e.isLoaded = !0, "function" == typeof c && (c(e), d.emit("image loaded", e)), d.images.loadedCount++, d.images.loadedCount === d.images.count && d.emit("all images loaded")
            }), e.src = b, d.images.pool[a] = e, d.images.count++, e
        }, d.images.get = function(a) {
            return d.images.pool[a]
        }, b.exports = d
    }, {
        "./event": 1
    }],
    5: [function(a, b) {
        function c(a, b) {
            function d() {
                a.apply(this, arguments)
            }

            function e() {}
            var f = this;
            e.prototype = f.prototype, d.prototype = new e;
            for (var g in b) d.prototype[g] = b[g];
            return d.prototype.constructor = a, d.name = a.name, d.extend = c, d
        }

        function d(a) {
            var b = document.querySelectorAll(a);
            return 1 == b.length ? b[0] : b
        }
        var e = function() {
            var a = 0;
            return function() {
                var b = a,
                    c = a = +new Date;
                return Math.floor(1e3 / (c - b))
            }
        }();
        b.exports = {
            extend: c,
            $: d,
            fps: e
        }
    }, {}],
    6: [function(a, b, c) {
        ! function() {
            function a() {
                this._events = {}, this._conf && b.call(this, this._conf)
            }

            function b(a) {
                a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners && (this._events.maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this.newListener = a.newListener), this.wildcard && (this.listenerTree = {}))
            }

            function d(a) {
                this._events = {}, this.newListener = !1, b.call(this, a)
            }

            function e(a, b, c, d) {
                if (!c) return [];
                var f, g, h, i, j, k, l, m = [],
                    n = b.length,
                    o = b[d],
                    p = b[d + 1];
                if (d === n && c._listeners) {
                    if ("function" == typeof c._listeners) return a && a.push(c._listeners), [c];
                    for (f = 0, g = c._listeners.length; g > f; f++) a && a.push(c._listeners[f]);
                    return [c]
                }
                if ("*" === o || "**" === o || c[o]) {
                    if ("*" === o) {
                        for (h in c) "_listeners" !== h && c.hasOwnProperty(h) && (m = m.concat(e(a, b, c[h], d + 1)));
                        return m
                    }
                    if ("**" === o) {
                        l = d + 1 === n || d + 2 === n && "*" === p, l && c._listeners && (m = m.concat(e(a, b, c, n)));
                        for (h in c) "_listeners" !== h && c.hasOwnProperty(h) && ("*" === h || "**" === h ? (c[h]._listeners && !l && (m = m.concat(e(a, b, c[h], n))), m = m.concat(e(a, b, c[h], d))) : m = m.concat(h === p ? e(a, b, c[h], d + 2) : e(a, b, c[h], d)));
                        return m
                    }
                    m = m.concat(e(a, b, c[o], d + 1))
                }
                if (i = c["*"], i && e(a, b, i, d + 1), j = c["**"])
                    if (n > d) {
                        j._listeners && e(a, b, j, n);
                        for (h in j) "_listeners" !== h && j.hasOwnProperty(h) && (h === p ? e(a, b, j[h], d + 2) : h === o ? e(a, b, j[h], d + 1) : (k = {}, k[h] = j[h], e(a, b, {
                            "**": k
                        }, d + 1)))
                    } else j._listeners ? e(a, b, j, n) : j["*"] && j["*"]._listeners && e(a, b, j["*"], n);
                return m
            }

            function f(a, b) {
                a = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                for (var c = 0, d = a.length; d > c + 1; c++)
                    if ("**" === a[c] && "**" === a[c + 1]) return;
                for (var e = this.listenerTree, f = a.shift(); f;) {
                    if (e[f] || (e[f] = {}), e = e[f], 0 === a.length) {
                        if (e._listeners) {
                            if ("function" == typeof e._listeners) e._listeners = [e._listeners, b];
                            else if (g(e._listeners) && (e._listeners.push(b), !e._listeners.warned)) {
                                var i = h;
                                "undefined" != typeof this._events.maxListeners && (i = this._events.maxListeners), i > 0 && e._listeners.length > i && (e._listeners.warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", e._listeners.length), console.trace())
                            }
                        } else e._listeners = b;
                        return !0
                    }
                    f = a.shift()
                }
                return !0
            }
            var g = Array.isArray ? Array.isArray : function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                h = 10;
            d.prototype.delimiter = ".", d.prototype.setMaxListeners = function(b) {
                this._events || a.call(this), this._events.maxListeners = b, this._conf || (this._conf = {}), this._conf.maxListeners = b
            }, d.prototype.event = "", d.prototype.once = function(a, b) {
                return this.many(a, 1, b), this
            }, d.prototype.many = function(a, b, c) {
                function d() {
                    0 === --b && e.off(a, d), c.apply(this, arguments)
                }
                var e = this;
                if ("function" != typeof c) throw new Error("many only accepts instances of Function");
                return d._origin = c, this.on(a, d), e
            }, d.prototype.emit = function() {
                this._events || a.call(this);
                var b = arguments[0];
                if ("newListener" === b && !this.newListener && !this._events.newListener) return !1;
                if (this._all) {
                    for (var c = arguments.length, d = new Array(c - 1), f = 1; c > f; f++) d[f - 1] = arguments[f];
                    for (f = 0, c = this._all.length; c > f; f++) this.event = b, this._all[f].apply(this, d)
                }
                if ("error" === b && !(this._all || this._events.error || this.wildcard && this.listenerTree.error)) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
                var g;
                if (this.wildcard) {
                    g = [];
                    var h = "string" == typeof b ? b.split(this.delimiter) : b.slice();
                    e.call(this, g, h, this.listenerTree, 0)
                } else g = this._events[b];
                if ("function" == typeof g) {
                    if (this.event = b, 1 === arguments.length) g.call(this);
                    else if (arguments.length > 1) switch (arguments.length) {
                        case 2:
                            g.call(this, arguments[1]);
                            break;
                        case 3:
                            g.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            for (var c = arguments.length, d = new Array(c - 1), f = 1; c > f; f++) d[f - 1] = arguments[f];
                            g.apply(this, d)
                    }
                    return !0
                }
                if (g) {
                    for (var c = arguments.length, d = new Array(c - 1), f = 1; c > f; f++) d[f - 1] = arguments[f];
                    for (var i = g.slice(), f = 0, c = i.length; c > f; f++) this.event = b, i[f].apply(this, d);
                    return i.length > 0 || !!this._all
                }
                return !!this._all
            }, d.prototype.on = function(b, c) {
                if ("function" == typeof b) return this.onAny(b), this;
                if ("function" != typeof c) throw new Error("on only accepts instances of Function");
                if (this._events || a.call(this), this.emit("newListener", b, c), this.wildcard) return f.call(this, b, c), this;
                if (this._events[b]) {
                    if ("function" == typeof this._events[b]) this._events[b] = [this._events[b], c];
                    else if (g(this._events[b]) && (this._events[b].push(c), !this._events[b].warned)) {
                        var d = h;
                        "undefined" != typeof this._events.maxListeners && (d = this._events.maxListeners), d > 0 && this._events[b].length > d && (this._events[b].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[b].length), console.trace())
                    }
                } else this._events[b] = c;
                return this
            }, d.prototype.onAny = function(a) {
                if ("function" != typeof a) throw new Error("onAny only accepts instances of Function");
                return this._all || (this._all = []), this._all.push(a), this
            }, d.prototype.addListener = d.prototype.on, d.prototype.off = function(a, b) {
                if ("function" != typeof b) throw new Error("removeListener only takes instances of Function");
                var c, d = [];
                if (this.wildcard) {
                    var f = "string" == typeof a ? a.split(this.delimiter) : a.slice();
                    d = e.call(this, null, f, this.listenerTree, 0)
                } else {
                    if (!this._events[a]) return this;
                    c = this._events[a], d.push({
                        _listeners: c
                    })
                }
                for (var h = 0; h < d.length; h++) {
                    var i = d[h];
                    if (c = i._listeners, g(c)) {
                        for (var j = -1, k = 0, l = c.length; l > k; k++)
                            if (c[k] === b || c[k].listener && c[k].listener === b || c[k]._origin && c[k]._origin === b) {
                                j = k;
                                break
                            }
                        if (0 > j) continue;
                        return this.wildcard ? i._listeners.splice(j, 1) : this._events[a].splice(j, 1), 0 === c.length && (this.wildcard ? delete i._listeners : delete this._events[a]), this
                    }(c === b || c.listener && c.listener === b || c._origin && c._origin === b) && (this.wildcard ? delete i._listeners : delete this._events[a])
                }
                return this
            }, d.prototype.offAny = function(a) {
                var b, c = 0,
                    d = 0;
                if (a && this._all && this._all.length > 0) {
                    for (b = this._all, c = 0, d = b.length; d > c; c++)
                        if (a === b[c]) return b.splice(c, 1), this
                } else this._all = [];
                return this
            }, d.prototype.removeListener = d.prototype.off, d.prototype.removeAllListeners = function(b) {
                if (0 === arguments.length) return !this._events || a.call(this), this;
                if (this.wildcard)
                    for (var c = "string" == typeof b ? b.split(this.delimiter) : b.slice(), d = e.call(this, null, c, this.listenerTree, 0), f = 0; f < d.length; f++) {
                        var g = d[f];
                        g._listeners = null
                    } else {
                        if (!this._events[b]) return this;
                        this._events[b] = null
                    }
                return this
            }, d.prototype.listeners = function(b) {
                if (this.wildcard) {
                    var c = [],
                        d = "string" == typeof b ? b.split(this.delimiter) : b.slice();
                    return e.call(this, c, d, this.listenerTree, 0), c
                }
                return this._events || a.call(this), this._events[b] || (this._events[b] = []), g(this._events[b]) || (this._events[b] = [this._events[b]]), this._events[b]
            }, d.prototype.listenersAny = function() {
                return this._all ? this._all : []
            }, "function" == typeof define && define.amd ? define(function() {
                return d
            }) : "object" == typeof c ? c.EventEmitter2 = d : window.EventEmitter2 = d
        }()
    }, {}],
    7: [function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) q.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            q = {}.hasOwnProperty;
        f = a("eventemitter2").EventEmitter2, n = a("./config.coffee").game, o = a("./common.coffee"), h = o.HEIGHT, m = o.WIDTH, j = o.RATE, k = 4, l = 5.5, c = .2, e = 2e3, i = .6, g = .9, d = function(a) {
            function b() {
                b.__super__.constructor.call(this, this), this.x = 0, this.y = 0, this.vx = k, this.vy = l, this.then = null, this.acc = null, this.bird = null, this.leftBricksPos = [], this.rightBricksPos = [], this.rotateY = 0, this.rotateZ = 0, this.width = 50, this.height = 32, this.isRunning = !1, this.FLIPP_DIRCT = -1
            }
            return p(b, a), b.prototype.init = function(a, b) {
                return this.bird = a, this.bounds = b, this.bird.width = this.width, this.bird.height = this.height, this.reset(), this.draw(), this.show()
            }, b.prototype.show = function() {
                return this.bird.style.display = "block"
            }, b.prototype.reset = function() {
                var a;
                return this.isDie = !0, this.isRunning = !1, this.x = this.CENTER_X = (m - this.bird.width) / 2, this.y = this.CENTER_Y = h / 2 - this.bird.height + 10, this.vx = 0, this.vy = 0, this.rotateZ = 0, this.FLIPP_DIRCT = -1, this.leftBricksPos = [], this.rightBricksPos = [], this.turnRight(), this.changeBirdStatus(a = !1), this.bird.className = "bird"
            }, b.prototype.revive = function() {
                return this.isDie = !1, this.isRunning = !0, this.vx = k, this.vy = -l
            }, b.prototype.move = function() {
                var a, b;
                if (!this.then) return this.acc = 0, this.then = +new Date;
                for (a = +new Date, b = a - this.then, this.acc += b; this.acc > j;) this.update(), this.acc -= j;
                return this.then = a, this.draw()
            }, b.prototype.update = function() {
                return this.isRunning ? this.isDie ? this.bounce() : (this.updateX(), this.updateY()) : this.flipping()
            }, b.prototype.updateX = function() {
                return this.checkTouchSideBricks(), (this.x > m - this.bird.width || this.x < 0) && (this.x = this.x < 0 ? 0 : m - this.bird.width, this.vx = -this.vx, this.vx > 0 ? this.turnRight() : this.turnLeft(), this.emit("turn around")), this.x += this.vx
            }, b.prototype.checkTouchSideBricks = function() {
                var a, b, c, d, e, f, g;
                if (this.x < this.bounds.left) {
                    if (!(this.vx < 0)) return;
                    a = this.leftBricksPos
                } else {
                    if (!(this.x > this.bounds.right - this.bird.width)) return;
                    if (!(this.vx > 0)) return;
                    a = this.rightBricksPos
                }
                for (e = 0, f = a.length; f > e; e++)
                    if (c = a[e], b = this.bounds.up + c * this.bounds.brickWidth, d = b + this.bounds.brickWidth, b < (g = this.y) && d > g) return this.die()
            }, b.prototype.bounce = function() {
                return this.vy += .5, this.y += this.vy, this.x += this.vx, this.rotateZ += this.vRotateZ, (this.x < 0 || this.x > m - this.bird.width) && (this.vx = -this.vx * i, this.x = this.x < 0 ? 0 : m - this.bird.width), (this.y <= this.bounds.up || this.y >= this.bounds.down - this.bird.height) && (this.vy = -this.vy * i, this.vx = this.vx * g, this.y = this.y <= this.bounds.up ? this.bounds.up : this.bounds.down - this.bird.height), this.vRotateZ = 15 * (this.vx / k)
            }, b.prototype.flipping = function() {
                var a;
                return a = 10, this.y >= this.CENTER_Y + a ? this.FLIPP_DIRCT = -1 : this.y <= this.CENTER_Y - a && (this.FLIPP_DIRCT = 1), this.y += .6 * this.FLIPP_DIRCT
            }, b.prototype.updateY = function() {
                return this.isDie ? void 0 : (this.y <= this.bounds.up || this.y >= this.bounds.down - this.bird.height ? this.die() : this.vy += c, this.y += this.vy)
            }, b.prototype.turnRight = function() {
                return this.bird.src = n.bird_to_right
            }, b.prototype.turnLeft = function() {
                return this.bird.src = n.bird_to_left
            }, b.prototype.draw = function() {
                return this.bird.style.webkitTransform = "translate3d(" + this.x + "px, " + this.y + "px, 0) rotateY(" + this.rotateY + "deg) rotateZ(" + this.rotateZ + "deg)"
            }, b.prototype.flip = function() {
                return this.vy = -l
            }, b.prototype.die = function() {
                var a;
                return this.vx = -this.vx / this.vx * 5, this.vy = -l, this.vRotateZ = 15, this.isDie = !0, this.emit("die"), this.changeBirdStatus(a = !0), this.bounce(), setTimeout(function(a) {
                    return function() {
                        return a.emit("die end")
                    }
                }(this), e)
            }, b.prototype.changeBirdStatus = function(a) {
                return this.bird.src = a ? n.bird_die : n.bird_to_right
            }, b.prototype.isOnTheGround = function() {
                return this.y >= this.bounds.down - this.bird.height ? !0 : !1
            }, b.prototype.moveToGround = function(a) {
                var b;
                return this.bird.className += " dead-animation", this.y = this.bounds.down - this.bird.height + 10, this.x = this.bounds.left + (this.bounds.right - this.bounds.left) / 2 - this.bird.width / 2 - 20, this.rotateZ = 1840, b = 400, setTimeout(function() {
                    return a()
                }, e + b)
            }, b
        }(f), b.exports = new d
    }, {
        "./common.coffee": 10,
        "./config.coffee": 11,
        eventemitter2: 6
    }],
    8: [function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) p.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            p = {}.hasOwnProperty;
        c = a("../../lib/util").$, f = a("eventemitter2").EventEmitter2, j = a("./config.coffee").game, n = a("./common.coffee"), i = n.WIDTH, g = n.HEIGHT, h = .8, d = 20, l = c(".left-wall"), m = c(".right-wall"), e = function(a) {
            function b() {
                this.leftBrick = null, this.rightBrick = null, this.topBrick = null, this.bottomBrick = null, this.brickWidth = null, this.dist = null, this.bricksCount = 3, this.leftBricksPos = null, this.rightBricksPos = null
            }
            return o(b, a), b.prototype.init = function(a, b) {
                return this.dist = b, this.brickWidth = a, this.setGroups(this.dist / 2), this.initBricks(a), this.initBottomBricks(), this.initTopBricks(), this.initWalls()
            }, b.prototype.initBricks = function(a) {
                var b;
                return b = d, this.leftBrick = k("left"), this.leftBrick.style.cssText = "border-left: " + b + "px solid " + j.wall_color + ";\nborder-top: " + a / 2 + "px solid transparent;\nborder-bottom: " + a / 2 + "px solid transparent;", this.rightBrick = k("right"), this.rightBrick.style.cssText = "border-right: " + b + "px solid " + j.wall_color + ";\nborder-top: " + a / 2 + "px solid transparent;\nborder-bottom: " + a / 2 + "px solid transparent;", this.bottomBrick = k("bottom"), this.bottomBrick.style.cssText = "border-bottom: " + b + "px solid " + j.wall_color + ";\nborder-right: " + a / 2 + "px solid transparent;\nborder-left: " + a / 2 + "px solid transparent;\ntop: " + -b * h + "px;", this.topBrick = k("top"), this.topBrick.style.cssText = "border-top: " + b + "px solid " + j.wall_color + ";\nborder-right: " + a / 2 + "px solid transparent;\nborder-left: " + a / 2 + "px solid transparent;\nbottom: " + -b * h + "px;"
            }, b.prototype.setGroups = function(a) {
                return c(".up-ground").style.height = a + "px", c(".down-ground").style.height = a + "px"
            }, b.prototype.initBottomBricks = function() {
                var a, b, d, e, f, g;
                for (b = c(".down-ground"), g = [], d = e = 0, f = i / this.brickWidth - 1; f >= 0 ? f >= e : e >= f; d = f >= 0 ? ++e : --e) a = this.bottomBrick.cloneNode(!0), a.style.left = d * this.brickWidth + "px", g.push(b.appendChild(a));
                return g
            }, b.prototype.initTopBricks = function() {
                var a, b, d, e, f, g;
                for (d = c(".up-ground"), g = [], b = e = 0, f = i / this.brickWidth - 1; f >= 0 ? f >= e : e >= f; b = f >= 0 ? ++e : --e) a = this.topBrick.cloneNode(!0), a.style.left = b * this.brickWidth + "px", g.push(d.appendChild(a));
                return g
            }, b.prototype.getBounds = function() {
                var a, b, c, e;
                return e = this.dist / 2 + d * h, a = g - (this.dist / 2 + d * h), b = d, c = i - d, {
                    up: e,
                    down: a,
                    left: b,
                    right: c,
                    brickWidth: this.brickWidth
                }
            }, b.prototype.initWalls = function() {
                return l.style.height = 11 * this.brickWidth + "px", l.style.width = d + "px", m.style.height = 11 * this.brickWidth + "px", m.style.width = d + "px", window.a = this
            }, b.prototype.hideLeft = function() {
                return this.leftBricksPos = [], l.style.webkitTransform = "translate3d(" + -d + "px, 0, 0)"
            }, b.prototype.showLeftWithRandomBricks = function() {
                var a, b, c, d, e, f, g;
                for (l.innerHTML = "", d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], this.leftBricksPos = [], b = f = 1, g = this.bricksCount; g >= 1 ? g >= f : f >= g; b = g >= 1 ? ++f : --f) c = Math.floor(Math.random() * d.length), e = d[c], d.splice(c, 1), this.leftBricksPos.push(e), a = this.leftBrick.cloneNode(!0), a.style.webkitTransform = "translate3d(0, " + e * this.brickWidth + "px, 0)", l.appendChild(a);
                return this.emit("left bricks change", this.leftBricksPos), l.style.webkitTransform = "translate3d(0, 0, 0)"
            }, b.prototype.hideRight = function() {
                return this.rightBricksPos = [], m.style.webkitTransform = "translate3d(" + d + "px, 0, 0)"
            }, b.prototype.showRightWithRandomBricks = function() {
                var a, b, c, d, e, f, g;
                for (m.innerHTML = "", d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], this.rightBricksPos = [], b = f = 1, g = this.bricksCount; g >= 1 ? g >= f : f >= g; b = g >= 1 ? ++f : --f) c = Math.floor(Math.random() * d.length), e = d[c], d.splice(c, 1), this.rightBricksPos.push(e), a = this.rightBrick.cloneNode(!0), a.style.webkitTransform = "translate3d(0, " + e * this.brickWidth + "px, 0)", m.appendChild(a);
                return this.emit("right bricks change", this.rightBricksPos), m.style.webkitTransform = "translate3d(0, 0, 0)"
            }, b
        }(f), k = function(a) {
            var b;
            return b = document.createElement("div"), b.className = "angle " + a, b
        }, b.exports = new e
    }, {
        "../../lib/util": 5,
        "./common.coffee": 10,
        "./config.coffee": 11,
        eventemitter2: 6
    }],
    9: [function(a, b) {
        var c, d, e, f, g, h, i = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) j.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            j = {}.hasOwnProperty;
        c = a("../../lib/util").$, e = a("eventemitter2").EventEmitter2, h = a("./common.coffee"), g = h.WIDTH, f = h.HEIGHT, d = function(a) {
            function b() {
                b.__super__.constructor.call(this, this), this.$candy = c(".candy"), this.width = 30, this.height = 16, this.isShow = !1, this.x = 0, this.y = 0
            }
            return i(b, a), b.prototype.init = function(a) {
                return this.bounds = a, this.$candy.style.width = this.width + "px", this.$candy.style.height = this.height + "px"
            }, b.prototype.show = function() {
                return this.$candy.style.display = "block", this.isShow = !0
            }, b.prototype.hide = function() {
                return this.$candy.style.display = "none", this.isShow = !1
            }, b.prototype.moveToRandomPos = function(a) {
                var b, c, d;
                return b = 20, c = a ? this.bounds.right - this.width - b : this.bounds.left + b, d = this.bounds.up + b + (this.bounds.down - this.bounds.up - this.height - 2 * b) * Math.random(), this.moveTo(c, d)
            }, b.prototype.moveTo = function(a, b) {
                return this.x = a, this.y = b, this.$candy.style.webkitTransform = "translate3d(" + a + "px, " + b + "px, 0)"
            }, b
        }(e), b.exports = new d
    }, {
        "../../lib/util": 5,
        "./common.coffee": 10,
        eventemitter2: 6
    }],
    10: [function(a, b) {
        var c, d, e, f, g, h;
        d = document.documentElement.clientHeight, h = document.documentElement.clientWidth, e = 568, f = 360, d = d > e ? e : d, h = h > f ? f : h, g = 16.7, c = window.navigator.userAgent, b.exports = {
            HEIGHT: d,
            WIDTH: h,
            RATE: g,
            AGENT: c
        }
    }, {}],
    11: [function(a, b) {
        defaultConfig = {
        // b.exports = window.gameConfig || {
            game: {
                game_name: "不要碰到钉子",
                prompt: "轻触让小鸟跳跃",
                bg_color: "#3d6280",
                wall_color: "#76B1D8",
                bird_to_right: "assets/bird.png",
                bird_to_left: "assets/bird-left.png",
                bird_to_left: "assets/bird-left.png",
                bird_die: "assets/dead-bird.png",
                candy: "assets/candy.png",
                score_text: "最高纪录"
            }
        };
        b.exports = (window.userConfig != "" && window.userConfig != null)?{game:window.userConfig}:defaultConfig;
    }, {}],
    12: [function(a, b) {
        var c, d, e, f, g, h, i, j, k, l;
        k = a("../../lib/util"), l = a("./common.coffee"), e = l.HEIGHT, g = l.WIDTH, f = l.RATE, d = l.AGENT, c = k.$, j = c("#debug"), h = d.match(/AppleWebKit\/.+?\s/)[0], i = {
            count: 0,
            move: function() {
                var a;
                return a = k.fps(), 10 === ++this.count ? (this.count = 0, j.innerHTML = "<p>width: " + g + ", height: " + e + ", FPS: " + a + "</p>\n<hr>\n<p>" + h + "</p>") : void 0
            }
        }, b.exports = i
    }, {
        "../../lib/util": 5,
        "./common.coffee": 10
    }],
    13: [function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N;
        // 点击屏幕的次数
        var tapScreenCount = 0;
        // 未刷新页面 总共玩游戏的次数
        var gamePlayCount = 0;
        var startGameTime = 0;
        i = a("../../lib/game"), m = a("./bird.coffee"), p = a("./candy.coffee"), t = a("./debug.coffee"), J = a("./states.coffee"), o = a("./bricks.coffee"), s = a("./config.coffee"), F = a("../../lib/r"), N = a("../../lib/util"), r = a("./common.coffee"), j = r.HEIGHT, l = r.WIDTH, b = N.$, v = new i, c = b(".area"), h = b("#score"), d = b("h1.name"), g = b("div.instruction"), f = b("h2.highest-score"), e = b("#highest-score"), H = 0, r.turnCount = 0, x = 0, k = "highest-score", v.on("init", function() {
            return C(), y(), A(), D(), z(), B(), G(), q(), J.change("start")
        }), C = function() {
            var a, c, d, e;
            for (b("div.circle h1.name").innerHTML = s.game.game_name, b("div.circle div.instruction").innerHTML = s.game.prompt, b("div.area").style.backgroundColor = s.game.bg_color, b("#score").style.color = s.game.bg_color, b("#score-text").innerHTML = s.game.score_text, e = b(".ground"), c = 0, d = e.length; d > c; c++) a = e[c], a.style.backgroundColor = s.game.wall_color;
            return b(".candy").setAttribute("src", s.game.candy)
        }, y = function() {
            return c.style.height = j + "px", c.style.width = l + "px"
        }, z = function() {
            var a;
            return a = b(".bird"), a.className = "bird", c.appendChild(a), m.init(a, o.getBounds()), u(), n(), v.add(m)
        }, B = function() {
            return p.init(o.getBounds()), m.on("turn around", function() {
                var a;
                if (!p.isShow) return p.show(), E() ? p.moveToRandomPos() : p.moveToRandomPos(a = !0)
            })
        }, q = function() {
            return v.add({
                move: function() {
                    var a, b;
                    if (p.isShow) return b = p.x < m.x + m.width && m.x < p.x + p.width, a = p.y < m.y + m.height && m.y < p.y + p.height, b && a ? (H += 3, M(H), p.hide()) : void 0
                }
            })
        }, n = function() {
            return m.on("turn around", function() {
                return H++, r.turnCount++, M(), E() ? (o.hideRight(), o.showLeftWithRandomBricks()) : (o.hideLeft(), o.showRightWithRandomBricks())
            }), o.on("left bricks change", function(a) {
                return m.leftBricksPos = a
            }), o.on("right bricks change", function(a) {
                return m.rightBricksPos = a
            })
        }, E = function() {
            return m.vx < 0
        }, A = function() {
            var a, b;
            return a = 35, b = j - 13 * a, 0 > b && (a = Math.floor(j / 13), b = 0), o.init(a, b)
        }, D = function() {
            return J.on("start", function() {
                ++gamePlayCount;
                console.log(gamePlayCount);
                console.log('第'+gamePlayCount+'次玩游戏');
                return H = 0, r.turnCount = 0, h.style.display = "none", M(), o.hideLeft(), o.hideRight(), m.reset(), p.hide(), I()
            }), J.on("game", function() {
                // 游戏开始
                tapScreenCount = 0;  //重新将点击屏幕次数置为0 (看需不需要)
                console.log('game start');
                startGameTime = new Date();
                tymsdk.gameStart(startGameTime);
                return h.style.display = "block", m.revive(), w()
            }), m.on("die end", function() {
                console.log('ending.............');
                var scoreDom = document.getElementById('score');
                var gameScore = parseInt(scoreDom.innerHTML);
                var overGameTime = new Date();
                tymsdk.gameEnd(startGameTime, overGameTime, gameScore, tapScreenCount);
                return J.change("over", H)
            })
        }, w = function() {
            return d.style.display = "none", f.style.display = "none", g.style.display = "none"
        }, I = function() {
            return d.style.display = "block", f.style.display = "block", g.style.display = "block"
        }, u = function() {
            return window.addEventListener("touchstart", function() {
                console.log('touchme..........');
                tapScreenCount++;
                console.log(tapScreenCount);
                return "game" !== J.state || m.isDie ? void 0 : m.flip()
            })
        }, M = function() {
            return r.score = H, K(H), h.innerHTML = H, H > x ? L() : void 0
        }, L = function() {
            return x = H, localStorage.setItem(k, x), e.innerHTML = x
        }, K = function(a) {
            var b;
            return b = Math.floor(a / 10) + 3, b > 10 && (b = 10), o.bricksCount = b
        }, G = function() {
            return x = localStorage.getItem(k), x = x || 0, e.innerHTML = "" + x
        }, document.ontouchstart = function(a) {
            return a.preventDefault()
        }, v.init()
    }, {
        "../../lib/game": 2,
        "../../lib/r": 4,
        "../../lib/util": 5,
        "./bird.coffee": 7,
        "./bricks.coffee": 8,
        "./candy.coffee": 9,
        "./common.coffee": 10,
        "./config.coffee": 11,
        "./debug.coffee": 12,
        "./states.coffee": 14
    }],
    14: [function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var d in b) n.call(b, d) && (a[d] = b[d]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            },
            n = {}.hasOwnProperty,
            o = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        l = a("../../lib/util"), d = a("eventemitter2").EventEmitter2, f = a("./common.coffee"), k = ["start", "game", "over", "share"], c = l.$, window.imgUrl = window.location.href.replace(/\w+\.html$/, "") + "assets/dead-bird.png", window.lineLink = window.location.href, window.descContent = "千万不要碰到钉子！！", window.shareTitle = "别碰钉子！", e = function(a) {
            function b() {
                b.__super__.constructor.call(this, this), this.$over = c("#over"), this.$share = c("#share"), this.$score = c("#over .score"), this.$rank = c("#over .rank"), this.$bullShit = c("#over .bull-shit"), this.$count = c("#share .count"), this.state = "start", this.init()
            }
            return m(b, a), b.prototype.init = function() {
                return this.initOverState(), this.initShareState(), window.addEventListener("touchstart", function(a) {
                    return function() {
                        return "start" === a.state ? a.change("game") : void 0
                    }
                }(this))
            }, b.prototype.initOverState = function() {
                return c("#over div.again").addEventListener("touchstart", function(a) {
                    return function(b) {
                        return b.stopPropagation(), a.change("start")
                    }
                }(this)), c("#over div.show-off").addEventListener("touchstart", function(a) {
                    return function() {
                        return event.stopPropagation(), a.change("share")
                    }
                }(this))
            }, b.prototype.initShareState = function() {
                return c("#share div.back").addEventListener("touchstart", function(a) {
                    return function() {
                        return a.$share.style.display = "none"
                    }
                }(this))
            }, b.prototype.change = function(a, b) {
                if (o.call(k, a) < 0) throw a + " is not in states";
                return this.state = a, this.toggleOverState(a, b), "share" === a && this.showShare(), this.emit(a)
            }, b.prototype.toggleOverState = function(a, b) {
                return "share" !== a ? "over" === a ? (this.$score.innerHTML = b, this.$rank.innerHTML = h(b), this.$bullShit.innerHTML = g(b), this.$over.style.display = "none", window.descContent = "千万别碰钉子！", window.shareTitle = "我的虐心小鸟得了" + b + "分！！果断来挑战我的鸟啊！") : this.$over.style.display = "none" : void 0
            }, b.prototype.showShare = function() {
                return this.$count.innerHTML = f.score, this.$share.style.display = "block"
            }, b
        }(d), h = function(a) {
            return a >= 0 && 3 >= a ? i(6) : a >= 4 && 6 >= a ? i(8) : a >= 7 && 10 >= a ? i(10) : a >= 11 && 13 >= a ? i(21) : a >= 14 && 16 >= a ? i(32) : a >= 17 && 20 >= a ? i(43) : a >= 21 && 23 >= a ? i(50) : a >= 24 && 26 >= a ? i(62) : a >= 27 && 30 >= a ? i(69) : a >= 31 && 33 >= a ? i(73) : a >= 34 && 36 >= a ? i(79) : a >= 37 && 40 >= a ? i(85) : a >= 41 && 45 >= a ? j(5e3, 9999) : a >= 46 && 50 >= a ? j(2e3, 4999) : a >= 51 && 55 >= a ? j(1e3, 2999) : a >= 56 && 60 >= a ? j(700, 999) : a >= 61 && 65 >= a ? j(500, 699) : a >= 65 && 70 >= a ? j(100, 499) : a > 70 ? j(10, 99) : void 0
        }, i = function(a) {
            return "打爆了全国" + a + "%的人"
        }, j = function(a, b) {
            return "排在全国" + (a + Math.floor((b - a + 1) * Math.random())) + "名"
        }, g = function(a) {
            return 10 >= a ? "矮油，你也太温柔了吧？！" : a >= 11 && 30 >= a ? "你做得还不错嘛！" : a >= 31 && 50 >= a ? "靠！牛逼爆了你！" : a > 50 ? "OMG！你这么高分还能不能做朋友啊？" : void 0
        }, b.exports = new e
    }, {
        "../../lib/util": 5,
        "./common.coffee": 10,
        eventemitter2: 6
    }]
}, {}, [13]);