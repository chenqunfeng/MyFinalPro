
// config.js
var game_config = {}
var _userConfig = ""
window.gameEle;
// egret.min.js
function __extends(t, e) {
    function i() {
        this.constructor = t
    }
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype, t.prototype = new i
}
var egret;
!
function(t) {
    function e() {
        return ""
    }

    function i(t) {
        throw new Error("#" + t)
    }

    function n() {}

    function r() {}

    function s() {}
    t.getString = e, t.$error = i, t.$warn = n, t.$markReadOnly = r, t.$markCannotUse = s
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t, e, i) {
        var n = t.prototype;
        n.__class__ = e;
        var r = [e];
        i && (r = r.concat(i));
        var s = n.__types__;
        if (n.__types__) for (var a = s.length, o = 0; a > o; o++) {
            var h = s[o]; - 1 == r.indexOf(h) && r.push(h)
        }
        n.__types__ = r
    }
    t.registerClass = e
}(egret || (egret = {}));
var __define = this.__define ||
function(t, e, i, n) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: i,
        set: n
    })
}, egret;
!
function(t) {
    t.$hashCount = 1;
    var e = function() {
            function e() {
                this.$hashCode = t.$hashCount++
            }
            var i = __define,
                n = e;
            return p = n.prototype, i(p, "hashCode", function() {
                return this.$hashCode
            }), e
        }();
    t.HashObject = e, t.registerClass(e, "egret.HashObject", ["egret.IHashObject"])
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = [],
        i = function(i) {
            function n(t) {
                void 0 === t && (t = null), i.call(this), this.$EventDispatcher = {
                    0: t ? t : this,
                    1: {},
                    2: {},
                    3: 0
                }
            }
            __extends(n, i);
            var r = n;
            return p = r.prototype, p.$getEventMap = function(t) {
                var e = this.$EventDispatcher,
                    i = t ? e[2] : e[1];
                return i
            }, p.addEventListener = function(t, e, i, n, r) {
                this.$addListener(t, e, i, n, r)
            }, p.once = function(t, e, i, n, r) {
                this.$addListener(t, e, i, n, r, !0)
            }, p.$addListener = function(t, e, i, n, r, s) {
                var a = this.$EventDispatcher,
                    o = n ? a[2] : a[1],
                    h = o[t];
                h ? 0 !== a[3] && (o[t] = h = h.concat()) : h = o[t] = [], this.$insertEventBin(h, t, e, i, n, r, s)
            }, p.$insertEventBin = function(t, e, i, n, r, s, a) {
                s = 0 | +s;
                for (var o = -1, h = t.length, l = 0; h > l; l++) {
                    var c = t[l];
                    if (c.listener == i && c.thisObject == n && c.target == this) return !1; - 1 == o && c.priority < s && (o = l)
                }
                var u = {
                    type: e,
                    listener: i,
                    thisObject: n,
                    priority: s,
                    target: this,
                    useCapture: r,
                    dispatchOnce: !! a
                };
                return -1 !== o ? t.splice(o, 0, u) : t.push(u), !0
            }, p.removeEventListener = function(t, e, i, n) {
                var r = this.$EventDispatcher,
                    s = n ? r[2] : r[1],
                    a = s[t];
                a && (0 !== r[3] && (s[t] = a = a.concat()), this.$removeEventBin(a, e, i), 0 == a.length && (s[t] = null))
            }, p.$removeEventBin = function(t, e, i) {
                for (var n = t.length, r = 0; n > r; r++) {
                    var s = t[r];
                    if (s.listener == e && s.thisObject == i && s.target == this) return t.splice(r, 1), !0
                }
                return !1
            }, p.hasEventListener = function(t) {
                var e = this.$EventDispatcher;
                return !(!e[1][t] && !e[2][t])
            }, p.willTrigger = function(t) {
                return this.hasEventListener(t)
            }, p.dispatchEvent = function(t) {
                return t.$currentTarget = this.$EventDispatcher[0], t.$setTarget(t.$currentTarget), this.$notifyListener(t, !1)
            }, p.$notifyListener = function(t, i) {
                var n = this.$EventDispatcher,
                    r = i ? n[2] : n[1],
                    s = r[t.$type];
                if (!s) return !0;
                var a = s.length;
                if (0 == a) return !0;
                var o = e;
                n[3]++;
                for (var h = 0; a > h; h++) {
                    var l = s[h];
                    if (l.listener.call(l.thisObject, t), l.dispatchOnce && o.push(l), t.$isPropagationImmediateStopped) break
                }
                for (n[3]--; o.length;) l = o.pop(), l.target.removeEventListener(l.type, l.listener, l.thisObject, l.useCapture);
                return !t.$isDefaultPrevented
            }, p.dispatchEventWith = function(e, i, n) {
                if (i || this.hasEventListener(e)) {
                    var r = t.Event.create(t.Event, e, i);
                    r.data = n;
                    var s = this.dispatchEvent(r);
                    return t.Event.release(r), s
                }
                return !0
            }, n
        }(t.HashObject);
    t.EventDispatcher = i, t.registerClass(i, "egret.EventDispatcher", ["egret.IEventDispatcher"])
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        return t %= 360, t > 180 ? t -= 360 : -180 > t && (t += 360), t
    }
    var i = function(i) {
            function n() {
                i.call(this), this.$children = null, this.$parent = null, this.$stage = null, this.$nestLevel = 0, this.$visible = !0, this.$displayList = null, this.$alpha = 1, this.$touchEnabled = n.defaultTouchEnabled, this.$scrollRect = null, this.$blendMode = 0, this.$maskedObject = null, this.$mask = null, this.$maskRect = null, this.$parentDisplayList = null, this.$isDirty = !1, this.$renderAlpha = 1, this.$renderMatrix = new t.Matrix, this.$renderRegion = null, this.$displayFlags = 880, this.$DisplayObject = {
                    0: 1,
                    1: 1,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: "",
                    6: new t.Matrix,
                    7: new t.Matrix,
                    8: new t.Matrix,
                    9: new t.Rectangle,
                    10: new t.Rectangle,
                    11: !1,
                    12: 0,
                    13: 0,
                    14: 0 / 0,
                    15: 0 / 0,
                    16: 0,
                    17: 0
                }
            }
            __extends(n, i);
            var r = __define,
                s = n;
            return p = s.prototype, p.$setFlags = function(t) {
                this.$displayFlags |= t
            }, p.$removeFlags = function(t) {
                this.$displayFlags &= ~t
            }, p.$removeFlagsUp = function(t) {
                if (this.$hasAnyFlags(t)) {
                    this.$removeFlags(t);
                    var e = this.$parent;
                    e && e.$removeFlagsUp(t)
                }
            }, p.$hasFlags = function(t) {
                return (this.$displayFlags & t) == t
            }, p.$propagateFlagsUp = function(t) {
                if (!this.$hasFlags(t)) {
                    this.$setFlags(t);
                    var e = this.$parent;
                    e && e.$propagateFlagsUp(t)
                }
            }, p.$propagateFlagsDown = function(t) {
                this.$setFlags(t)
            }, p.$hasAnyFlags = function(t) {
                return !!(this.$displayFlags & t)
            }, p.invalidateMatrix = function() {
                this.$setFlags(8), this.invalidatePosition()
            }, p.invalidatePosition = function() {
                this.$invalidateTransform(), this.$propagateFlagsDown(48), this.$parent && this.$parent.$propagateFlagsUp(4)
            }, r(p, "name", function() {
                return this.$DisplayObject[5]
            }, function(t) {
                this.$DisplayObject[5] = t
            }), r(p, "parent", function() {
                return this.$parent
            }), p.$setParent = function(t) {
                return this.$parent == t ? !1 : (this.$parent = t, !0)
            }, p.$onAddToStage = function(e, i) {
                this.$stage = e, this.$nestLevel = i, t.Sprite.$EVENT_ADD_TO_STAGE_LIST.push(this)
            }, p.$onRemoveFromStage = function() {
                this.$nestLevel = 0, t.Sprite.$EVENT_REMOVE_FROM_STAGE_LIST.push(this)
            }, r(p, "stage", function() {
                return this.$stage
            }), r(p, "matrix", function() {
                return this.$getMatrix().clone()
            }, function(t) {
                this.$setMatrix(t)
            }), p.$getMatrix = function() {
                var t = this.$DisplayObject;
                return this.$hasFlags(8) && (t[6].$updateScaleAndRotation(t[0], t[1], t[2], t[3]), this.$removeFlags(8)), t[6]
            }, p.$setMatrix = function(t, i) {
                void 0 === i && (i = !0);
                var n = this.$DisplayObject,
                    r = n[6];
                return r.equals(t) ? !1 : (r.copyFrom(t), i && (n[0] = r.$getScaleX(), n[1] = r.$getScaleY(), n[2] = t.$getSkewX(), n[3] = t.$getSkewY(), n[16] = e(180 * n[2] / Math.PI), n[17] = e(180 * n[3] / Math.PI), n[4] = e(180 * n[3] / Math.PI)), this.$removeFlags(8), this.invalidatePosition(), !0)
            }, p.$getConcatenatedMatrix = function() {
                var e = this.$DisplayObject[7];
                if (this.$hasFlags(16)) {
                    if (this.$parent) {
                        this.$parent.$getConcatenatedMatrix().$preMultiplyInto(this.$getMatrix(), e);
                        var i = this.$DisplayObject,
                            n = i[12],
                            r = i[13],
                            s = this.$scrollRect;
                        s ? e.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -s.x - n, -s.y - r), e) : (0 != n || 0 != r) && e.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -n, -r), e)
                    } else e.copyFrom(this.$getMatrix());
                    this.$displayList && (this.$displayList.$renderRegion.moved = !0), this.$renderRegion && (this.$renderRegion.moved = !0), this.$removeFlags(16)
                }
                return e
            }, p.$getInvertedConcatenatedMatrix = function() {
                var t = this.$DisplayObject;
                return this.$hasFlags(32) && (this.$getConcatenatedMatrix().$invertInto(t[8]), this.$removeFlags(32)), t[8]
            }, r(p, "x", function() {
                return this.$getX()
            }, function(t) {
                this.$setX(t)
            }), p.$getX = function() {
                return this.$DisplayObject[6].tx
            }, p.$setX = function(e) {
                e = t.sys.getNumber(e);
                var i = this.$DisplayObject[6];
                return e == i.tx ? !1 : (i.tx = e, this.invalidatePosition(), !0)
            }, r(p, "y", function() {
                return this.$getY()
            }, function(t) {
                this.$setY(t)
            }), p.$getY = function() {
                return this.$DisplayObject[6].ty
            }, p.$setY = function(e) {
                e = t.sys.getNumber(e);
                var i = this.$DisplayObject[6];
                return e == i.ty ? !1 : (i.ty = e, this.invalidatePosition(), !0)
            }, r(p, "scaleX", function() {
                return this.$getScaleX()
            }, function(t) {
                this.$setScaleX(t)
            }), p.$getScaleX = function() {
                return this.$DisplayObject[0]
            }, p.$setScaleX = function(e) {
                e = t.sys.getNumber(e);
                var i = this.$DisplayObject;
                return e == i[0] ? !1 : (i[0] = e, this.invalidateMatrix(), !0)
            }, r(p, "scaleY", function() {
                return this.$getScaleY()
            }, function(t) {
                this.$setScaleY(t)
            }), p.$getScaleY = function() {
                return this.$DisplayObject[1]
            }, p.$setScaleY = function(e) {
                return e = t.sys.getNumber(e), e == this.$DisplayObject[1] ? !1 : (this.$DisplayObject[1] = e, this.invalidateMatrix(), !0)
            }, r(p, "rotation", function() {
                return this.$getRotation()
            }, function(t) {
                this.$setRotation(t)
            }), p.$getRotation = function() {
                return this.$DisplayObject[4]
            }, p.$setRotation = function(i) {
                i = t.sys.getNumber(i), i = e(i);
                var n = this.$DisplayObject;
                if (i == n[4]) return !1;
                var r = i - n[4],
                    s = r / 180 * Math.PI;
                return n[2] += s, n[3] += s, n[4] = i, this.invalidateMatrix(), !0
            }, r(p, "skewX", function() {
                return this.$DisplayObject[16]
            }, function(t) {
                this.$setSkewX(t)
            }), p.$setSkewX = function(i) {
                i = t.sys.getNumber(i);
                var n = this.$DisplayObject;
                return i == n[16] ? !1 : (n[16] = i, i = e(i), i = i / 180 * Math.PI, n[2] = i, this.invalidateMatrix(), !0)
            }, r(p, "skewY", function() {
                return this.$DisplayObject[17]
            }, function(t) {
                this.$setSkewY(t)
            }), p.$setSkewY = function(i) {
                i = t.sys.getNumber(i);
                var n = this.$DisplayObject;
                return i == n[17] ? !1 : (n[17] = i, i = e(i), i = i / 180 * Math.PI, n[3] = i, this.invalidateMatrix(), !0)
            }, r(p, "width", function() {
                return this.$getWidth()
            }, function(t) {
                this.$setWidth(t)
            }), p.$getWidth = function() {
                return isNaN(this.$getExplicitWidth()) ? this.$getOriginalBounds().width : this.$getExplicitWidth()
            }, p.$getExplicitWidth = function() {
                return this.$DisplayObject[14]
            }, p.$setWidth = function(t) {
                if (this.$DisplayObject[14] = isNaN(t) ? 0 / 0 : t, t = +t, 0 > t) return !1;
                return this.invalidateMatrix(), !0
            }, r(p, "height", function() {
                return this.$getHeight()
            }, function(t) {
                this.$setHeight(t)
            }), p.$getHeight = function() {
                return isNaN(this.$getExplicitHeight()) ? this.$getOriginalBounds().height : this.$getExplicitHeight()
            }, p.$getExplicitHeight = function() {
                return this.$DisplayObject[15]
            }, p.$setHeight = function(t) {
                if (this.$DisplayObject[15] = isNaN(t) ? 0 / 0 : t, t = +t, 0 > t) return !1;
                return this.invalidateMatrix(), !0
            }, r(p, "measuredWidth", function() {
                return this.$getOriginalBounds().width
            }), r(p, "measuredHeight", function() {
                return this.$getOriginalBounds().height
            }), r(p, "anchorOffsetX", function() {
                return this.$DisplayObject[12]
            }, function(t) {
                this.$setAnchorOffsetX(t)
            }), p.$setAnchorOffsetX = function(e) {
                return e = t.sys.getNumber(e), e == this.$DisplayObject[12] ? !1 : (this.$DisplayObject[12] = e, this.invalidatePosition(), !0)
            }, r(p, "anchorOffsetY", function() {
                return this.$DisplayObject[13]
            }, function(t) {
                this.$setAnchorOffsetY(t)
            }), p.$setAnchorOffsetY = function(e) {
                return e = t.sys.getNumber(e), e == this.$DisplayObject[13] ? !1 : (this.$DisplayObject[13] = e, this.invalidatePosition(), !0)
            }, r(p, "visible", function() {
                return this.$visible
            }, function(t) {
                this.$setVisible(t)
            }), p.$setVisible = function(t) {
                return t = !! t, t == this.$visible ? !1 : (this.$visible = t, this.$invalidateTransform(), !0)
            }, r(p, "cacheAsBitmap", function() {
                return this.$DisplayObject[11]
            }, function(e) {
                e = !! e, this.$DisplayObject[11] = e;
                var i = !! this.$displayList;
                if (i != e) if (e) {
                    var n = t.sys.DisplayList.create(this);
                    n && (this.$displayList = n, this.$parentDisplayList && (n.setDevicePixelRatio(this.$parentDisplayList.$ratioMatrix.a), this.$parentDisplayList.markDirty(n)), this.$cacheAsBitmapChanged())
                } else t.sys.DisplayList.release(this.$displayList), this.$displayList = null, this.$cacheAsBitmapChanged()
            }), p.$cacheAsBitmapChanged = function() {
                var t = this.$displayList || this.$parentDisplayList;
                this.$renderRegion && t.markDirty(this), this.$propagateFlagsDown(48)
            }, r(p, "alpha", function() {
                return this.$alpha
            }, function(t) {
                this.$setAlpha(t)
            }), p.$setAlpha = function(e) {
                return e = t.sys.getNumber(e), e == this.$alpha ? !1 : (this.$alpha = e, this.$propagateFlagsDown(64), this.$invalidate(), !0)
            }, p.$getConcatenatedAlpha = function() {
                if (this.$hasFlags(64)) {
                    if (this.$parent) {
                        var t = this.$parent.$getConcatenatedAlpha();
                        this.$renderAlpha = t * this.$alpha
                    } else this.$renderAlpha = this.$alpha;
                    this.$removeFlags(64)
                }
                return this.$renderAlpha
            }, r(p, "touchEnabled", function() {
                return this.$getTouchEnabled()
            }, function(t) {
                this.$setTouchEnabled(t)
            }), p.$getTouchEnabled = function() {
                return this.$touchEnabled
            }, p.$setTouchEnabled = function(t) {
                return this.$touchEnabled == t ? !1 : (this.$touchEnabled = t, !0)
            }, r(p, "scrollRect", function() {
                return this.$scrollRect
            }, function(t) {
                this.$setScrollRect(t)
            }), p.$setScrollRect = function(e) {
                return e || this.$scrollRect ? (e ? (this.$scrollRect || (this.$scrollRect = new t.Rectangle), this.$scrollRect.copyFrom(e)) : this.$scrollRect = null, this.invalidatePosition(), !0) : !1
            }, r(p, "blendMode", function() {
                return t.sys.numberToBlendMode(this.$blendMode)
            }, function(e) {
                var i = t.sys.blendModeToNumber(e);
                i != this.$blendMode && (this.$blendMode = i, this.$invalidateTransform())
            }), r(p, "mask", function() {
                return this.$mask ? this.$mask : this.$maskRect
            }, function(t) {
                if (t !== this) {
                    if (t) if (t instanceof n) {
                        if (t == this.$mask) return;
                        t.$maskedObject && (t.$maskedObject.mask = null), t.$maskedObject = this, this.$mask = t, this.$maskRect = null
                    } else this.$setMaskRect(t), this.$mask = null;
                    else this.$mask = null, this.$maskRect = null;
                    this.$invalidateTransform()
                }
            }), p.$setMaskRect = function(e) {
                return e || this.$maskRect ? (e ? (this.$maskRect || (this.$maskRect = new t.Rectangle), this.$maskRect.copyFrom(e)) : this.$maskRect = null, this.invalidatePosition(), !0) : !1
            }, p.getTransformedBounds = function(t, e) {
                return t = t || this, this.$getTransformedBounds(t, e)
            }, p.getBounds = function(t, e) {
                if (void 0 === e && (e = !0), t = this.$getTransformedBounds(this, t), e) {
                    var i = this.$DisplayObject;
                    (0 != i[12] || 0 != i[13]) && (t.x -= i[12], t.y -= i[13])
                }
                return t
            }, p.$getTransformedBounds = function(e, i) {
                var n = this.$getOriginalBounds();
                if (i || (i = new t.Rectangle), i.copyFrom(n), e == this || i.isEmpty()) return i;
                var r;
                if (e) {
                    r = t.$TempMatrix;
                    var s = e.$getInvertedConcatenatedMatrix();
                    s.$preMultiplyInto(this.$getConcatenatedMatrix(), r)
                } else r = this.$getConcatenatedMatrix();
                return r.$transformBounds(i), i
            }, p.globalToLocal = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0);
                var n = this.$getInvertedConcatenatedMatrix();
                return n.transformPoint(t, e, i)
            }, p.localToGlobal = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0);
                var n = this.$getConcatenatedMatrix();
                return n.transformPoint(t, e, i)
            }, p.$invalidateContentBounds = function() {
                this.$invalidate(), this.$setFlags(2), this.$propagateFlagsUp(4)
            }, p.$getOriginalBounds = function() {
                var t = this.$DisplayObject[9];
                return this.$hasFlags(4) && (t.copyFrom(this.$getContentBounds()), this.$measureChildBounds(t), this.$removeFlags(4), this.$displayList && (this.$displayList.$renderRegion.moved = !0)), t
            }, p.$measureChildBounds = function(t) {}, p.$getContentBounds = function() {
                var t = this.$DisplayObject[10];
                return this.$hasFlags(2) && (this.$measureContentBounds(t), this.$renderRegion && (this.$renderRegion.moved = !0), this.$removeFlags(2)), t
            }, p.$measureContentBounds = function(t) {}, p.$invalidate = function(t) {
                if (this.$renderRegion && !this.$hasFlags(256)) {
                    this.$setFlags(256);
                    var e = this.$displayList ? this.$displayList : this.$parentDisplayList;
                    e && e.markDirty(this)
                }
            }, p.$invalidateTransform = function() {
                if (!this.$hasFlags(512)) {
                    this.$setFlags(512);
                    var t = this.$displayList;
                    (t || this.$renderRegion) && this.$parentDisplayList && this.$parentDisplayList.markDirty(t || this)
                }
            }, p.$update = function(t) {
                this.$removeFlagsUp(768), this.$getConcatenatedAlpha();
                var e = this.$getConcatenatedMatrix(),
                    i = t || this.$getContentBounds(),
                    n = this.$displayList || this.$parentDisplayList,
                    r = this.$renderRegion;
                if (!n) return r.setTo(0, 0, 0, 0), r.moved = !1, !1;
                if (!r.moved && !n.$ratioChanged) return !1;
                r.moved = !1;
                var s = this.$renderMatrix;
                s.copyFrom(e);
                var a = n.root;
                return a !== this.$stage && this.$getConcatenatedMatrixAt(a, s), n.$ratioMatrix.$preMultiplyInto(s, s), r.updateRegion(i, s), !0
            }, p.$getConcatenatedMatrixAt = function(e, i) {
                var n = e.$getInvertedConcatenatedMatrix();
                if (0 === n.a || 0 === n.d) {
                    var r = this,
                        s = e.$nestLevel;
                    for (i.identity(); r.$nestLevel > s;) {
                        var a = r.$scrollRect;
                        a && i.concat(t.$TempMatrix.setTo(1, 0, 0, 1, -a.x, -a.y)), i.concat(r.$getMatrix()), r = r.$parent
                    }
                } else n.$preMultiplyInto(i, i)
            }, p.$render = function(t) {}, p.$hitTest = function(t, e) {
                var i = this.$DisplayObject;
                if (!this.$renderRegion || !this.$visible || 0 == i[0] || 0 == i[1]) return null;
                var n = this.$getInvertedConcatenatedMatrix(),
                    r = this.$getContentBounds(),
                    s = n.a * t + n.c * e + n.tx,
                    a = n.b * t + n.d * e + n.ty;
                if (r.contains(s, a)) {
                    if (!this.$children) {
                        var o = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                        if (o && !o.contains(s, a)) return null;
                        if (this.$mask && !this.$mask.$hitTest(t, e)) return null
                    }
                    return this
                }
                return null
            }, p.hitTestPoint = function(e, i, n) {
                if (n) {
                    var r = this.$getInvertedConcatenatedMatrix(),
                        s = r.a * e + r.c * i + r.tx,
                        a = r.b * e + r.d * i + r.ty,
                        o = t.sys.sharedRenderContext;
                    o.surface.width = o.surface.height = 3, o.translate(1 - s, 1 - a), this.$render(o);
                    var h = o.getImageData(1, 1, 1, 1).data;
                    return 0 === h[3] ? !1 : !0
                }
                var l = this.$DisplayObject;
                if (0 == l[0] || 0 == l[1]) return !1;
                var r = this.$getInvertedConcatenatedMatrix(),
                    c = this.getBounds(),
                    s = r.a * e + r.c * i + r.tx,
                    a = r.b * e + r.d * i + r.ty;
                if (c.contains(s, a)) {
                    var u = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                    return u && !u.contains(s, a) ? !1 : !0
                }
                return !1
            }, p.$addListener = function(e, r, s, a, o, h) {
                i.prototype.$addListener.call(this, e, r, s, a, o, h);
                var l = e == t.Event.ENTER_FRAME;
                if (l || e == t.Event.RENDER) {
                    var c = l ? n.$enterFrameCallBackList : n.$renderCallBackList; - 1 == c.indexOf(this) && c.push(this)
                }
            }, p.removeEventListener = function(e, r, s, a) {
                i.prototype.removeEventListener.call(this, e, r, s, a);
                var o = e == t.Event.ENTER_FRAME;
                if ((o || e == t.Event.RENDER) && !this.hasEventListener(e)) {
                    var h = o ? n.$enterFrameCallBackList : n.$renderCallBackList,
                        l = h.indexOf(this); - 1 !== l && h.splice(l, 1)
                }
            }, p.dispatchEvent = function(t) {
                if (!t.$bubbles) return i.prototype.dispatchEvent.call(this, t);
                var e = this.$getPropagationList(this),
                    n = .5 * e.length;
                return t.$setTarget(this), this.$dispatchPropagationEvent(t, e, n), !t.$isDefaultPrevented
            }, p.$getPropagationList = function(t) {
                for (var e = []; t;) e.push(t), t = t.$parent;
                var i = e.concat();
                return i.reverse(), e = i.concat(e)
            }, p.$dispatchPropagationEvent = function(t, e, i) {
                for (var n = e.length, r = i - 1, s = 0; n > s; s++) {
                    var a = e[s];
                    if (t.$currentTarget = a, r > s ? t.$eventPhase = 1 : s == i || s == r ? t.$eventPhase = 2 : t.$eventPhase = 3, a.$notifyListener(t, i > s), t.$isPropagationStopped || t.$isPropagationImmediateStopped) return
                }
            }, p.willTrigger = function(t) {
                for (var e = this; e;) {
                    if (e.hasEventListener(t)) return !0;
                    e = e.$parent
                }
                return !1
            }, n.defaultTouchEnabled = !1, n.$enterFrameCallBackList = [], n.$renderCallBackList = [], n
        }(t.EventDispatcher);
    t.DisplayObject = i, t.registerClass(i, "egret.DisplayObject", ["egret.sys.Renderable"])
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(i) {
                e.call(this), this.$scale9Grid = null, this.$fillMode = "scale", this.$smoothing = !0, this._pixelHitTest = !1, this.$renderRegion = new t.sys.Region, this.$Bitmap = {
                    0: null,
                    1: null,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: !0,
                    11: 0 / 0,
                    12: 0 / 0
                }, this.$setBitmapData(i)
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, p.$onAddToStage = function(i, n) {
                e.prototype.$onAddToStage.call(this, i, n);
                var r = this.$Bitmap[0];
                r && (r instanceof t.Texture ? t.Texture.$addDisplayObject(this, r._bitmapData.hashCode) : t.Texture.$addDisplayObject(this, r.hashCode))
            }, p.$onRemoveFromStage = function() {
                e.prototype.$onRemoveFromStage.call(this);
                var i = this.$Bitmap[0];
                i && (i instanceof t.Texture ? t.Texture.$removeDisplayObject(this, i._bitmapData.hashCode) : t.Texture.$removeDisplayObject(this, i.hashCode))
            }, n(p, "bitmapData", function() {
                var e = this.$Bitmap[0];
                return e instanceof t.Texture ? null : e
            }, function(t) {
                this.$setBitmapData(t)
            }), n(p, "texture", function() {
                var e = this.$Bitmap[0];
                return e instanceof t.Texture ? e : null
            }, function(t) {
                this.$setBitmapData(t)
            }), p.$setBitmapData = function(e) {
                var i = this.$Bitmap;
                if (e == i[0]) return !1;
                if (i[0] = e, !e) return this.setImageData(null, 0, 0, 0, 0, 0, 0, 0, 0), this.$invalidateContentBounds(), !0;
                if (e instanceof t.Texture) {
                    var n = e;
                    this.setImageData(n._bitmapData, n._bitmapX, n._bitmapY, n._bitmapWidth, n._bitmapHeight, n._offsetX, n._offsetY, n.$getTextureWidth(), n.$getTextureHeight())
                } else this.setImageData(e, 0, 0, e.width, e.height, 0, 0, e.width, e.height);
                return this.$stage && (e instanceof t.Texture ? t.Texture.$addDisplayObject(this, e._bitmapData.hashCode) : t.Texture.$addDisplayObject(this, e.hashCode)), this.$invalidateContentBounds(), !0
            }, p.setImageData = function(t, e, i, n, r, s, a, o, h) {
                var l = this.$Bitmap;
                l[1] = t, l[2] = e, l[3] = i, l[4] = n, l[5] = r, l[6] = s, l[7] = a, l[8] = o, l[9] = h
            }, n(p, "scale9Grid", function() {
                return this.$scale9Grid
            }, function(t) {
                this.$scale9Grid = t, this.$invalidateContentBounds()
            }), n(p, "fillMode", function() {
                return this.$fillMode
            }, function(t) {
                this.$setFillMode(t)
            }), p.$setFillMode = function(t) {
                return t == this.$fillMode ? !1 : (this.$fillMode = t, !0)
            }, n(p, "smoothing", function() {
                return this.$smoothing
            }, function(t) {
                t = !! t, t != this.$smoothing && (this.$smoothing = t, this.$invalidate())
            }), p.$setWidth = function(t) {
                var e = this.$Bitmap;
                return 0 > t || t == e[11] ? !1 : (e[11] = t, this.$invalidateContentBounds(), !0)
            }, p.$setHeight = function(t) {
                var e = this.$Bitmap;
                return 0 > t || t == e[12] ? !1 : (e[12] = t, this.$invalidateContentBounds(), !0)
            }, p.$getWidth = function() {
                var t = this.$Bitmap;
                return isNaN(t[11]) ? this.$getContentBounds().width : t[11]
            }, p.$getHeight = function() {
                var t = this.$Bitmap;
                return isNaN(t[12]) ? this.$getContentBounds().height : t[12]
            }, p.$measureContentBounds = function(t) {
                var e = this.$Bitmap,
                    i = e[6],
                    n = e[7];
                if (e[1]) {
                    var e = this.$Bitmap,
                        r = isNaN(e[11]) ? i + e[4] : e[11],
                        s = isNaN(e[12]) ? n + e[5] : e[12];
                    t.setTo(0, 0, r, s)
                } else r = isNaN(e[11]) ? 0 : e[11], s = isNaN(e[12]) ? 0 : e[12], t.setTo(0, 0, r, s)
            }, p.$render = function(t) {
                var e = this.$Bitmap;
                if (e[1]) {
                    var n = isNaN(e[11]) ? e[8] : e[11],
                        r = isNaN(e[12]) ? e[9] : e[12];
                    i.$drawImage(t, e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], n, r, this.scale9Grid || e[0].scale9Grid, this.fillMode, this.$smoothing)
                }
            }, n(p, "pixelHitTest", function() {
                return this._pixelHitTest
            }, function(t) {
                this._pixelHitTest = !! t
            }), p.$hitTest = function(t, i) {
                var n = e.prototype.$hitTest.call(this, t, i);
                return n && this._pixelHitTest && (n = this.hitTestPixel(t, i)), n
            }, p.hitTestPixel = function(e, i) {
                var n, r, s = this.$getInvertedConcatenatedMatrix(),
                    a = s.a * e + s.c * i + s.tx,
                    o = s.b * e + s.d * i + s.ty,
                    h = this.$displayList;
                return h ? (n = h.renderContext, r = n.getImageData(a - h.offsetX, o - h.offsetY, 1, 1).data) : (n = t.sys.sharedRenderContext, n.surface.width = n.surface.height = 3, n.translate(1 - a, 1 - o), this.$render(n), r = n.getImageData(1, 1, 1, 1).data), 0 === r[3] ? null : this
            }, i.$drawImage = function(e, n, r, s, a, o, h, l, c, u, d, p, f, g, $) {
                if (n) if (e.imageSmoothingEnabled = $, f) i.$drawScale9GridImage(e, n, f, r, s, a, o, h, l, c, u, d, p);
                else if (g == t.BitmapFillMode.SCALE) {
                    var v = d / c,
                        y = p / u;
                    e.drawImage(n, r, s, a, o, h * v, l * y, v * a, y * o)
                } else if (g == t.BitmapFillMode.CLIP) {
                    var x = Math.min(c, d),
                        m = Math.min(u, p);
                    e.drawImage(n, r, s, x / t.$TextureScaleFactor, m / t.$TextureScaleFactor, h, l, x, m)
                } else {
                    var T, _ = n;
                    (_.width != a || _.height != o || 1 != t.$TextureScaleFactor) && (T = t.sys.surfaceFactory.create(!0), T.width = c, T.height = u, T.renderContext.drawImage(_, r, s, a, o, h, l, a * t.$TextureScaleFactor, o * t.$TextureScaleFactor), _ = T);
                    var b = e.createPattern(_, "repeat");
                    e.beginPath(), e.rect(0, 0, d, p), e.fillStyle = b, e.fill(), T && t.sys.surfaceFactory.release(T)
                }
            }, i.$drawScale9GridImage = function(e, i, n, r, s, a, o, h, l, c, u, d, p) {
                var f = a,
                    g = o;
                d -= c - a * t.$TextureScaleFactor, p -= u - o * t.$TextureScaleFactor;
                var $ = n.x - h,
                    v = n.y - l,
                    y = $ / t.$TextureScaleFactor,
                    x = v / t.$TextureScaleFactor,
                    m = n.width / t.$TextureScaleFactor,
                    T = n.height / t.$TextureScaleFactor;
                0 == T && (T = 1, x >= g && x--), 0 == m && (m = 1, y >= f && y--);
                var _ = r,
                    b = _ + y,
                    C = b + m,
                    F = f - y - m,
                    E = s,
                    R = E + x,
                    S = R + T,
                    w = g - x - T,
                    L = F * t.$TextureScaleFactor,
                    O = w * t.$TextureScaleFactor;
                if ((y + F) * t.$TextureScaleFactor > d || (x + w) * t.$TextureScaleFactor > p) return void e.drawImage(i, r, s, a, o, h, l, d, p);
                var M = h,
                    D = M + $,
                    I = M + (d - L),
                    A = d - $ - L,
                    N = l,
                    B = N + v,
                    P = N + p - O,
                    k = p - v - O;
                0 >= x || 0 >= T || 0 >= w || 0 >= y || 0 >= m || 0 >= F || y + m + F > f || x + T + w > g || (e.drawImage(i, _, E, y, x, M, N, $, v), e.drawImage(i, b, E, m, x, D, N, A, v), e.drawImage(i, C, E, F, x, I, N, L, v), e.drawImage(i, _, R, y, T, M, B, $, k), e.drawImage(i, b, R, m, T, D, B, A, k), e.drawImage(i, C, R, F, T, I, B, L, k), e.drawImage(i, _, S, y, w, M, P, $, O), e.drawImage(i, b, S, m, w, D, P, A, O), e.drawImage(i, C, S, F, w, I, P, L, O))
            }, i
        }(t.DisplayObject);
    t.Bitmap = e, t.registerClass(e, "egret.Bitmap")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.REPEAT = "repeat", t.SCALE = "scale", t.CLIP = "clip", t
        }();
    t.BitmapFillMode = e, t.registerClass(e, "egret.BitmapFillMode")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.NORMAL = "normal", t.ADD = "add", t.ERASE = "erase", t
        }();
    t.BlendMode = e, t.registerClass(e, "egret.BlendMode")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        function i(e) {
            var i = s[e];
            return t.sys.isUndefined(i) ? 0 : i
        }

        function n(e) {
            var i = r[e];
            return t.sys.isUndefined(i) ? "normal" : i
        }
        for (var r = ["normal", "add", "erase"], s = {}, a = r.length, o = 0; a > o; o++) {
            var h = r[o];
            s[h] = o
        }
        e.blendModeToNumber = i, e.numberToBlendMode = n
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$touchChildren = !0, this.$children = []
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, p.$propagateFlagsDown = function(t) {
                if (!this.$hasFlags(t)) {
                    this.$setFlags(t);
                    for (var e = this.$children, i = 0; i < e.length; i++) e[i].$propagateFlagsDown(t)
                }
            }, n(p, "numChildren", function() {
                return this.$children.length
            }), p.addChild = function(t) {
                var e = this.$children.length;
                return t.$parent == this && e--, this.$doAddChild(t, e)
            }, p.addChildAt = function(t, e) {
                return e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length, t.$parent == this && e--), this.$doAddChild(t, e)
            }, p.$doAddChild = function(e, n, r) {
                void 0 === r && (r = !0);
                var s = e.$parent;
                if (s == this) return this.doSetChildIndex(e, n), e;
                s && s.removeChild(e), this.$children.splice(n, 0, e), e.$setParent(this);
                var a = this.$stage;
                if (a && e.$onAddToStage(a, this.$nestLevel + 1), r && e.dispatchEventWith(t.Event.ADDED, !0), a) for (var o = i.$EVENT_ADD_TO_STAGE_LIST; o.length;) {
                    var h = o.shift();
                    h.$stage && r && h.dispatchEventWith(t.Event.ADDED_TO_STAGE)
                }
                var l = this.$displayList || this.$parentDisplayList;
                return this.assignParentDisplayList(e, l, l), e.$propagateFlagsDown(624), this.$propagateFlagsUp(4), this.$childAdded(e, n), e
            }, p.contains = function(t) {
                for (; t;) {
                    if (t == this) return !0;
                    t = t.$parent
                }
                return !1
            }, p.getChildAt = function(t) {
                return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$children[t] : null
            }, p.getChildIndex = function(t) {
                return this.$children.indexOf(t)
            }, p.getChildByName = function(t) {
                for (var e, i = this.$children, n = i.length, r = 0; n > r; r++) if (e = i[r], e.name == t) return e;
                return null
            }, p.removeChild = function(t) {
                var e = this.$children.indexOf(t);
                return e >= 0 ? this.$doRemoveChild(e) : null
            }, p.removeChildAt = function(t) {
                return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$doRemoveChild(t) : null
            }, p.$doRemoveChild = function(e, n) {
                void 0 === n && (n = !0), e = 0 | +e;
                var r = this.$children,
                    s = r[e];
                if (this.$childRemoved(s, e), n && s.dispatchEventWith(t.Event.REMOVED, !0), this.$stage) {
                    s.$onRemoveFromStage();
                    for (var a = i.$EVENT_REMOVE_FROM_STAGE_LIST; a.length > 0;) {
                        var o = a.shift();
                        n && o.dispatchEventWith(t.Event.REMOVED_FROM_STAGE), o.$stage = null
                    }
                }
                var h = this.$displayList || this.$parentDisplayList;
                this.assignParentDisplayList(s, h, null), s.$propagateFlagsDown(624), s.$setParent(null);
                var l = r.indexOf(s);
                return r.splice(l, 1), this.$propagateFlagsUp(4), s
            }, p.setChildIndex = function(t, e) {
                e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length - 1), this.doSetChildIndex(t, e)
            }, p.doSetChildIndex = function(t, e) {
                var i = this.$children.indexOf(t);
                i != e && (this.$childRemoved(t, i), this.$children.splice(i, 1), this.$children.splice(e, 0, t), this.$childAdded(t, e), t.$invalidateTransform(), this.$propagateFlagsUp(4))
            }, p.swapChildrenAt = function(t, e) {
                t = 0 | +t, e = 0 | +e, t >= 0 && t < this.$children.length && e >= 0 && e < this.$children.length && this.doSwapChildrenAt(t, e)
            }, p.swapChildren = function(t, e) {
                var i = this.$children.indexOf(t),
                    n = this.$children.indexOf(e); - 1 == i || -1 == n || this.doSwapChildrenAt(i, n)
            }, p.doSwapChildrenAt = function(t, e) {
                if (t > e) {
                    var i = e;
                    e = t, t = i
                } else if (t == e) return;
                var n = this.$children,
                    r = n[t],
                    s = n[e];
                this.$childRemoved(r, t), this.$childRemoved(s, e), n[t] = s, n[e] = r, this.$childAdded(s, t), this.$childAdded(r, e), r.$invalidateTransform(), s.$invalidateTransform(), this.$propagateFlagsUp(4)
            }, p.removeChildren = function() {
                for (var t = this.$children, e = t.length - 1; e >= 0; e--) this.$doRemoveChild(e)
            }, p.$childAdded = function(t, e) {}, p.$childRemoved = function(t, e) {}, p.$onAddToStage = function(t, i) {
                e.prototype.$onAddToStage.call(this, t, i);
                var n = this.$children,
                    r = n.length;
                i++;
                for (var s = 0; r > s; s++) {
                    var a = this.$children[s];
                    a.$onAddToStage(t, i)
                }
            }, p.$onRemoveFromStage = function() {
                e.prototype.$onRemoveFromStage.call(this);
                for (var t = this.$children, i = t.length, n = 0; i > n; n++) {
                    var r = t[n];
                    r.$onRemoveFromStage()
                }
            }, p.$measureChildBounds = function(e) {
                var i = this.$children,
                    n = i.length;
                if (0 != n) {
                    for (var r = 0, s = 0, a = 0, o = 0, h = !1, l = -1; n > l; l++) {
                        var c = -1 == l ? e : i[l].$getTransformedBounds(this, t.$TempRectangle);
                        c.isEmpty() || (h ? (r = Math.min(r, c.x), s = Math.max(s, c.x + c.width), a = Math.min(a, c.y), o = Math.max(o, c.y + c.height)) : (h = !0, r = c.x, s = r + c.width, a = c.y, o = a + c.height))
                    }
                    e.setTo(r, a, s - r, o - a)
                }
            }, n(p, "touchChildren", function() {
                return this.$getTouchChildren()
            }, function(t) {
                this.$setTouchChildren( !! t)
            }), p.$getTouchChildren = function() {
                return this.$touchChildren
            }, p.$setTouchChildren = function(t) {
                return this.$touchChildren == t ? !1 : (this.$touchChildren = t, !0)
            }, p.$invalidate = function(t) {
                if (e.prototype.$invalidate.call(this, t), t) {
                    var i = this.$displayList || this.$parentDisplayList,
                        n = this.$children;
                    if (n) for (var r = n.length - 1; r >= 0; r--) this.markChildDirty(n[r], i)
                }
            }, p.$invalidateTransform = function() {
                this.markChildDirty(this, this.$parentDisplayList)
            }, p.markChildDirty = function(t, e) {
                if (!t.$hasFlags(512)) {
                    t.$setFlags(512);
                    var i = t.$displayList;
                    if ((i || t.$renderRegion) && e && e.markDirty(i || t), !i) {
                        var n = t.$children;
                        if (n) for (var r = n.length - 1; r >= 0; r--) this.markChildDirty(n[r], e)
                    }
                }
            }, p.$cacheAsBitmapChanged = function() {
                e.prototype.$cacheAsBitmapChanged.call(this);
                for (var t = this.$displayList || this.$parentDisplayList, i = this.$children, n = i.length - 1; n >= 0; n--) this.assignParentDisplayList(i[n], t, t)
            }, p.assignParentDisplayList = function(t, e, i) {
                t.$parentDisplayList = i, t.$setFlags(512);
                var n = t.$displayList;
                if ((t.$renderRegion || n) && e && e.markDirty(n || t), !n) {
                    var r = t.$children;
                    if (r) for (var s = r.length - 1; s >= 0; s--) this.assignParentDisplayList(r[s], e, i)
                }
            }, p.$hitTest = function(t, i) {
                if (!this.$visible) return null;
                var n = this.$getInvertedConcatenatedMatrix(),
                    r = n.a * t + n.c * i + n.tx,
                    s = n.b * t + n.d * i + n.ty,
                    a = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                if (a && !a.contains(r, s)) return null;
                if (this.$mask && !this.$mask.$hitTest(t, i)) return null;
                for (var o = this.$children, h = !1, l = o.length - 1; l >= 0; l--) {
                    var c = o[l];
                    if (!c.$maskedObject) {
                        var u = c.$hitTest(t, i);
                        if (u) {
                            if (h = !0, u.$touchEnabled) break;
                            u = null
                        }
                    }
                }
                return u ? this.$touchChildren ? u : this : h ? this : e.prototype.$hitTest.call(this, t, i)
            }, p.$setAlpha = function(e) {
                return e = t.sys.getNumber(e), e == this.$alpha ? !1 : (this.$alpha = e, this.$propagateFlagsDown(64), this.$invalidate(), this.$invalidateAllChildren(), !0)
            }, p.$invalidateAllChildren = function() {
                var t = this.$children;
                if (t) for (var e = t.length - 1; e >= 0; e--) {
                    var i = t[e];
                    i.$invalidate(), i.$children && i.$invalidateAllChildren()
                }
            }, i.$EVENT_ADD_TO_STAGE_LIST = [], i.$EVENT_REMOVE_FROM_STAGE_LIST = [], i
        }(t.DisplayObject);
    t.DisplayObjectContainer = e, t.registerClass(e, "egret.DisplayObjectContainer")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.LINEAR = "linear", t.RADIAL = "radial", t
        }();
    t.GradientType = e, t.registerClass(e, "egret.GradientType")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$renderContext = null, this.strokeStyleColor = null, this.fillStyle = null, this._dirty = !1, this.lineX = 0, this.lineY = 0, this._firstCheck = !0, this._minX = 0, this._minY = 0, this._maxX = 0, this._maxY = 0, this.$renderContext = new t.GraphicsRenderContext
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "graphicsRenderContext", function() {
                return this.$renderContext
            }), p.$hitTest = function(e, i) {
                var n = this.$renderContext.$targetDisplay,
                    r = n.$getInvertedConcatenatedMatrix(),
                    s = r.a * e + r.c * i + r.tx,
                    a = r.b * e + r.d * i + r.ty,
                    o = t.sys.sharedRenderContext;
                o.surface.width = o.surface.height = 3, o.translate(1 - s, 1 - a), this.$renderContext.$render(o, !0);
                var h = o.getImageData(1, 1, 1, 1).data;
                return 0 === h[3] ? null : n
            }, p.$measureContentBounds = function(t) {
                this.$renderContext.$measureContentBounds(t)
            }, p.$render = function(t) {
                this.$renderContext.$render(t)
            }, p.beginFill = function(t, e) {
                void 0 === e && (e = 1), this.fillStyle = this._parseColor(t, e), this._setStyle(this.fillStyle)
            }, p._parseColor = function(t, e) {
                var i = 255 & t,
                    n = (65280 & t) >> 8,
                    r = t >> 16;
                return "rgba(" + r + "," + n + "," + i + "," + e + ")"
            }, p._setStyle = function(t) {
                this.$renderContext.fillStyle = t, this.$renderContext.beginPath()
            }, p.beginGradientFill = function(t, e, i, n, r) {
                void 0 === r && (r = null);
                var s = this.getGradient(t, e, i, n, r);
                this.fillStyle = s, this._setStyle(this.fillStyle)
            }, p.getGradient = function(e, i, n, r, s) {
                var a = t.sys.surfaceFactory.create(!0),
                    o = a.renderContext,
                    h = new t.Matrix;
                s ? (h.a = 819.2 * s.a, h.b = 819.2 * s.b, h.c = 819.2 * s.c, h.d = 819.2 * s.d, h.tx = s.tx, h.ty = s.ty) : (h.a = 100, h.d = 100);
                var l;
                l = e == t.GradientType.LINEAR ? o.createLinearGradient(-1, 0, 1, 0) : o.createRadialGradient(0, 0, 0, 0, 0, 1);
                for (var c = i.length, u = 0; c > u; u++) l.addColorStop(r[u] / 255, this._parseColor(i[u], n[u]));
                return l.matrix = h, t.sys.surfaceFactory.release(a), l
            }, p.drawRect = function(t, e, i, n) {
                this.$renderContext.beginPath(), this.$renderContext.rect(t, e, i, n), this.$renderContext.closePath()
            }, p.drawCircle = function(t, e, i) {
                this.$renderContext.beginPath(), this.$renderContext.arc(t, e, i, 0, 2 * Math.PI), this.$renderContext.closePath()
            }, p.drawRoundRect = function(t, e, i, n, r, s) {
                var a = t,
                    o = e,
                    h = i,
                    l = n,
                    c = r / 2,
                    u = s ? s / 2 : c,
                    d = a + h,
                    p = o + l,
                    f = d,
                    g = p - u;
                this.$renderContext.beginPath(), this.$renderContext.moveTo(f, g), this.$renderContext.quadraticCurveTo(d, p, d - c, p), this.$renderContext.lineTo(a + c, p), this.$renderContext.quadraticCurveTo(a, p, a, p - u), this.$renderContext.lineTo(a, o + u), this.$renderContext.quadraticCurveTo(a, o, a + c, o), this.$renderContext.lineTo(d - c, o), this.$renderContext.quadraticCurveTo(d, o, d, o + u), this.$renderContext.lineTo(f, g), this.$renderContext.closePath()
            }, p.drawEllipse = function(t, e, i, n) {
                var r = t + i / 2,
                    s = e + n / 2,
                    a = i > n ? i : n,
                    o = i / a,
                    h = n / a;
                a /= 2, this.$renderContext.scale(o, h), this.$renderContext.beginPath(), this.$renderContext.arc(r / o, s / h, a, 0, 2 * Math.PI), this.$renderContext.closePath(), this.$renderContext.scale(1 / o, 1 / h)
            }, p.lineStyle = function(t, e, i, n, r, s, a, o) {
                void 0 === t && (t = 0 / 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === n && (n = !1), void 0 === r && (r = "normal"), void 0 === s && (s = null), void 0 === a && (a = null), void 0 === o && (o = 3), this.strokeStyleColor && this._createEndLineCommand(), this.strokeStyleColor = this._parseColor(e, i), this.moveTo(this.lineX, this.lineY), 0 >= t && (t = 1), this.$renderContext.lineWidth = t, this.$renderContext.strokeStyle = this.strokeStyleColor, this.$renderContext.beginPath()
            }, p.lineTo = function(t, e) {
                this.lineX = t, this.lineY = e, this.$renderContext.lineTo(t, e)
            }, p.curveTo = function(t, e, i, n) {
                this.lineX = i, this.lineY = n, this.$renderContext.quadraticCurveTo(t, e, i, n)
            }, p.drawArc = function(t, e, i, n, r, s) {
                this.lineX = Math.cos(r) + t, this.lineY = Math.sin(r) + e, this.$renderContext.arc(t, e, i, n, r, s)
            }, p.cubicCurveTo = function(t, e, i, n, r, s) {
                this.lineX = r, this.lineY = s, this.$renderContext.bezierCurveTo(t, e, i, n, r, s)
            }, p.moveTo = function(t, e) {
                this.lineX = t, this.lineY = e, this.$renderContext.moveTo(t, e)
            }, p.clear = function() {
                this.lineX = 0, this.lineY = 0, this.strokeStyleColor = null, this.fillStyle = null, this._minX = 0, this._minY = 0, this._maxX = 0, this._maxY = 0, this._firstCheck = !0, this._dirty = !0, this.$renderContext.clear()
            }, p.endFill = function() {
                (null != this.fillStyle || null != this.strokeStyleColor) && (this._fill(), this.fillStyle = null, this.$renderContext.fillStyle = null, this.$renderContext.strokeStyle = null)
            }, p._createEndFillCommand = function() {
                this.$renderContext.fill(), this.$renderContext.closePath()
            }, p._fill = function() {
                this.fillStyle && this._createEndFillCommand(), this.strokeStyleColor && this._createEndLineCommand()
            }, p._createEndLineCommand = function() {
                this.$renderContext.stroke(), this.$renderContext.closePath()
            }, i
        }(t.HashObject);
    t.Graphics = e, t.registerClass(e, "egret.Graphics")
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        return t %= 2 * s, 0 > t && (t += 2 * s), t
    }

    function i(t, e, i, n) {
        return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e))
    }

    function n(t, e, n, r, s) {
        var a = i(t, e, n, r);
        s.x = (n - t) / a, s.y = (r - e) / a
    }

    function r(t) {
        var e = t.graphicsMap = {};
        return e[6] = t.arc, e[18] = t.arcTo, e[17] = t.beginPath, e[14] = t.bezierCurveTo, e[10] = t.closePath, e[9] = t.fill, e[13] = t.fillRect, e[8] = t.lineTo, e[12] = t.moveTo, e[7] = t.quadraticCurveTo, e[11] = t.rect, e[15] = t.stroke, e[16] = t.strokeRect, e[19] = t.scale, e[3] = function(e) {
            t.lineWidth = e
        }, e[0] = function(e) {
            t.miterLimit = e
        }, e[5] = function(e) {
            t.fillStyle = e
        }, e[1] = function(e) {
            t.lineCap = e
        }, e[2] = function(e) {
            t.lineJoin = e
        }, e[4] = function(e) {
            t.strokeStyle = e
        }, e
    }
    var s = Math.PI,
        a = s / 2,
        o = s + a,
        h = 2 * s,
        l = {
            x: 0,
            y: 0
        },
        c = {
            x: 0,
            y: 0
        },
        u = {
            x: 0,
            y: 0
        },
        d = function(d) {
            function f() {
                d.call(this), this._maxLineWidth = 1, this.$commands = [], this.reset()
            }
            __extends(f, d);
            var g = __define,
                $ = f;
            return p = $.prototype, f.createRadialGradient = function(e, i, n, r, s, a) {
                return t.sys.sharedRenderContext.createRadialGradient(e, i, n, r, s, a)
            }, f.createLinearGradient = function(e, i, n, r) {
                return t.sys.sharedRenderContext.createLinearGradient(e, i, n, r)
            }, f.createPattern = function(e, i) {
                return t.sys.sharedRenderContext.createPattern(e, i)
            }, g(p, "fillStyle", function() {
                return this._fillStyle
            }, function(e) {
                "number" == typeof e && (e = t.toColorString(e)), this._fillStyle = e, this.pushCommand(5, arguments)
            }), g(p, "lineWidth", function() {
                return this._lineWidth
            }, function(t) {
                this._lineWidth = t, this._maxLineWidth = Math.max(this._maxLineWidth, t), this.pushCommand(3, arguments)
            }), g(p, "lineCap", function() {
                return this._lineCap
            }, function(t) {
                this._lineCap = t, this.pushCommand(1, arguments)
            }), g(p, "strokeStyle", function() {
                return this._strokeStyle
            }, function(e) {
                var i = e;
                "number" == typeof i && (i = t.toColorString(i)), this._strokeStyle = i, this.pushCommand(4, arguments)
            }), g(p, "lineJoin", function() {
                return this._lineJoin
            }, function(t) {
                this._lineJoin = t, this.pushCommand(2, arguments)
            }), g(p, "miterLimit", function() {
                return this._miterLimit
            }, function(t) {
                this._miterLimit = t, this.pushCommand(0, arguments)
            }), p.scale = function(t, e) {
                this.pushCommand(19, arguments)
            }, p.arc = function(t, e, i, n, r, s) {
                this.pushCommand(6, arguments), 0 > i || (s ? this.arcBounds(t, e, i, r, n) : this.arcBounds(t, e, i, n, r))
            }, p.arcBounds = function(t, i, n, r, l) {
                if (r = e(r), l = e(l), Math.abs(r - l) < .01) return this.extendByPoint(t - n, i - n), void this.extendByPoint(t + n, i + n);
                r > l && (l += h);
                var c = Math.cos(r) * n,
                    u = Math.cos(l) * n,
                    d = Math.min(c, u),
                    p = Math.max(c, u),
                    f = Math.sin(r) * n,
                    g = Math.sin(l) * n,
                    $ = Math.min(f, g),
                    v = Math.max(f, g);
                s >= r && l >= s && (d = -n), h >= r && l >= h && (p = n), o >= r && l >= o && ($ = -n), a >= r && l >= a && (v = n), this.extendByPoint(d + t, $ + i), this.extendByPoint(p + t, v + i)
            }, p.quadraticCurveTo = function(t, e, i, n) {
                this.pushCommand(7, arguments), this.checkMoveTo(), this.extendByPoint(t, e), this.extendByPoint(i, n)
            }, p.bezierCurveTo = function(t, e, i, n, r, s) {
                this.pushCommand(14, arguments), this.checkMoveTo(), this.extendByPoint(t, e), this.extendByPoint(i, n), this.extendByPoint(r, s)
            }, p.lineTo = function(t, e) {
                this.pushCommand(8, arguments), this.checkMoveTo(), this.extendByPoint(t, e)
            }, p.fill = function(t) {
                this.pushCommand(9, arguments), this.hasFill = !0
            }, p.closePath = function() {
                this.pushCommand(10, arguments)
            }, p.rect = function(t, e, i, n) {
                this.pushCommand(11, arguments), this.extendByPoint(t, e), this.extendByPoint(t + i, e + n)
            }, p.moveTo = function(t, e) {
                this.pushCommand(12, arguments), this.moveToX = t, this.moveToY = e, this.hasMoved = !0
            }, p.fillRect = function(t, e, i, n) {
                this.pushCommand(13, arguments), this.extendByPoint(t, e), this.extendByPoint(t + i, e + n), this.hasFill = !0
            }, p.stroke = function() {
                this.pushCommand(15, arguments), this.hasStroke = !0
            }, p.strokeRect = function(t, e, i, n) {
                this.pushCommand(16, arguments), this.hasStroke = !0, this.extendByPoint(t, e), this.extendByPoint(t + i, e + n)
            }, p.beginPath = function() {
                this.pushCommand(17, arguments), this.hasMoved = !1, this.moveToX = 0 / 0, this.moveToY = 0 / 0
            }, p.arcTo = function(t, r, a, o, h) {
                if (this.pushCommand(18, arguments), !isNaN(this.moveToX)) {
                    this.checkMoveTo(), n(this.moveToX, this.moveToY, t, r, c), n(a, o, t, r, u), l.x = c.x + u.x, l.y = c.y + u.y, n(l.x, l.y, 0, 0, l);
                    var d = c.x * l.x + c.y * l.y,
                        p = i(c.x, c.y, 0, 0),
                        f = i(l.x, l.y, 0, 0),
                        g = d / (p * f),
                        $ = Math.acos(g),
                        v = h / Math.sin($),
                        y = t + l.x * v,
                        x = r + l.y * v,
                        m = h / Math.tan($),
                        T = t + c.x * m,
                        _ = r + c.y * m,
                        b = t + u.x * m,
                        C = r + u.y * m;
                    n(y, x, T, _, l);
                    var F = Math.atan2(l.y, l.x);
                    n(y, x, b, C, l);
                    var E = Math.atan2(l.y, l.x),
                        R = E - F;
                    if (R = e(R), R > s) {
                        var S = E;
                        E = F, F = S
                    }
                    this.arcBounds(y, x, h, F, E)
                }
            }, p.clear = function() {
                this.reset(), this.$commands.length = 0, this.$targetDisplay.$invalidateContentBounds()
            }, p.reset = function() {
                this._fillStyle = null, this._lineCap = "butt", this._lineJoin = "miter", this._lineWidth = 1, this._maxLineWidth = 1, this._miterLimit = 10, this._strokeStyle = null, this.hasMoved = !1, this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.isFirst = !0, this.moveToX = 0 / 0, this.moveToY = 0 / 0, this.hasStroke = !1, this.hasFill = !1
            }, p.pushCommand = function(t, e) {
                this.$commands.push({
                    type: t,
                    arguments: e
                }), this.$targetDisplay.$invalidateContentBounds()
            }, p.checkMoveTo = function() {
                this.hasMoved && (this.hasMoved = !1, this.extendByPoint(this.moveToX, this.moveToY))
            }, p.extendByPoint = function(t, e) {
                this.isFirst ? (this.isFirst = !1, this.maxX = this.minX = t, this.maxY = this.minY = e) : (this.minX = Math.min(this.minX, t), this.minY = Math.min(this.minY, e), this.maxX = Math.max(this.maxX, t), this.maxY = Math.max(this.maxY, e))
            }, p.$measureContentBounds = function(t) {
                if (!this.hasFill && null == this._fillStyle && !this.hasStroke && null == this._strokeStyle) return void t.setEmpty();
                if (this.hasStroke || this._strokeStyle) var e = this._maxLineWidth,
                    i = .5 * e;
                else i = e = 0;
                t.setTo(this.minX - i, this.minY - i, this.maxX - this.minX + e, this.maxY - this.minY + e)
            }, p.$render = function(t, e) {
                t.save(), t.fillStyle = "#000000", t.lineCap = "butt", t.lineJoin = "miter", t.lineWidth = 1, t.miterLimit = 10, t.strokeStyle = "#000000", t.beginPath();
                var i = t.graphicsMap;
                i || (i = r(t));
                var n = this.$commands,
                    s = n.length;
                if (e) for (var a = 0; s > a; a++) {
                    var o = n[a];
                    5 == o.type || 4 == o.type ? i[o.type].apply(t, ["rgba(1,1,1,1)"]) : i[o.type].apply(t, o.arguments)
                } else for (var a = 0; s > a; a++) {
                    var o = n[a];
                    i[o.type].apply(t, o.arguments)
                }
                this._strokeStyle && (i[15].apply(t, []), i[10].apply(t, [])), this._fillStyle && (i[9].apply(t, []), i[10].apply(t, [])), t.restore()
            }, f
        }(t.HashObject);
    t.GraphicsRenderContext = d, t.registerClass(d, "egret.GraphicsRenderContext")
}(egret || (egret = {}));
var egret;
!
function(t) {
    t.$TextureScaleFactor = 1;
    var e = function(e) {
            function i() {
                e.call(this), this._bitmapX = 0, this._bitmapY = 0, this._bitmapWidth = 0, this._bitmapHeight = 0, this._offsetX = 0, this._offsetY = 0, this._textureWidth = 0, this._textureHeight = 0, this._sourceWidth = 0, this._sourceHeight = 0, this._bitmapData = null
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "textureWidth", function() {
                return this.$getTextureWidth()
            }), p.$getTextureWidth = function() {
                return this._textureWidth
            }, n(p, "textureHeight", function() {
                return this.$getTextureHeight()
            }), p.$getTextureHeight = function() {
                return this._textureHeight
            }, p.$getScaleBitmapWidth = function() {
                return this._bitmapWidth * t.$TextureScaleFactor
            }, p.$getScaleBitmapHeight = function() {
                return this._bitmapHeight * t.$TextureScaleFactor
            }, n(p, "bitmapData", function() {
                return this._bitmapData
            }), p._setBitmapData = function(e) {
                this._bitmapData = e;
                var i = e.width * t.$TextureScaleFactor,
                    n = e.height * t.$TextureScaleFactor;
                this.$initData(0, 0, i, n, 0, 0, i, n, i, n)
            }, p.$initData = function(e, i, n, r, s, a, o, h, l, c) {
                var u = t.$TextureScaleFactor;
                this._bitmapX = e / u, this._bitmapY = i / u, this._bitmapWidth = n / u, this._bitmapHeight = r / u, this._offsetX = s, this._offsetY = a, this._textureWidth = o, this._textureHeight = h, this._sourceWidth = l, this._sourceHeight = c
            }, p.getPixel32 = function(t, e) {
                throw new Error
            }, p.toDataURL = function(t, e) {
                throw new Error
            }, p.saveToFile = function(t, e, i) {
                throw new Error
            }, p.dispose = function() {
                this._bitmapData && (i.$dispose(this._bitmapData.hashCode), console.log("dispose Texture"), this._bitmapData = null)
            }, i.$addDisplayObject = function(t, e) {
                var n = e;
                if (!i._displayList[n]) return void(i._displayList[n] = [t]);
                var r = i._displayList[n];
                r.indexOf(t) < 0 && r.push(t)
            }, i.$removeDisplayObject = function(t, e) {
                var n = e;
                if (i._displayList[n]) {
                    var r = i._displayList[n],
                        s = r.indexOf(t);
                    s >= 0 && r.splice(s)
                }
            }, i.$invalidate = function(t) {
                var e = t;
                if (i._displayList[e]) for (var n = i._displayList[e], r = 0; r < n.length; r++) n[r].$invalidateContentBounds()
            }, i.$dispose = function(e) {
                var n = e;
                if (i._displayList[n]) for (var r = i._displayList[n], s = 0; s < r.length; s++) r[s] instanceof t.Bitmap && (r[s].$Bitmap[1] = null), r[s].$invalidateContentBounds()
            }, i._displayList = {}, i
        }(t.HashObject);
    t.Texture = e, t.registerClass(e, "egret.Texture")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = ["source-over", "lighter", "destination-out"],
        i = "source-over",
        n = function(n) {
            function r() {
                n.call(this), this.$displayListMap = {}
            }
            __extends(r, n);
            var s = r;
            return p = s.prototype, p.drawToTexture = function(e, i, n) {
                if (void 0 === n && (n = 1), i && (0 == i.width || 0 == i.height)) return !1;
                this.dispose();
                var r = i || e.$getOriginalBounds();
                if (0 == r.width || 0 == r.height) return !1;
                n /= t.$TextureScaleFactor;
                var s = r.x + r.width,
                    a = r.y + r.height;
                if (i && (s = r.width, a = r.height), this.context = this.createRenderContext(s, a), !this.context) return !1;
                var o = new t.DisplayObjectContainer;
                this.rootDisplayList = t.sys.DisplayList.create(o), o.$displayList = this.rootDisplayList, o.$children.push(e);
                var h = e.$renderRegion;
                h || (e.$renderRegion = t.sys.Region.create());
                var l = e.$parent;
                e.$parent = null, this.$saveParentDisplayList(e), this.$update(e), e.$parent = l, h || (t.sys.Region.release(e.$renderRegion), e.$renderRegion = null);
                var c = e.$renderMatrix,
                    u = t.Matrix.create();
                c.$invertInto(u), i && u.translate(-i.x, -i.y), n && u.scale(n, n), this.context.clearRect(0, 0, s, a), this.context.setTransform(u.a, u.b, u.c, u.d, u.tx, u.ty);
                this.drawDisplayObject(o, this.context, u);
                return t.Matrix.release(u), this._setBitmapData(this.context.surface), this.$initData(0, 0, s, a, 0, 0, s, a, s, a), this.$reset(e), this.$displayListMap = {}, !0
            }, p.$saveParentDisplayList = function(e) {
                if (this.$displayListMap[e.$hashCode] = e.$displayList, e.$displayList = this.rootDisplayList, e instanceof t.DisplayObjectContainer) for (var i = e.$children, n = i.length, r = 0; n > r; r++) {
                    var s = i[r];
                    this.$saveParentDisplayList(s)
                }
            }, p.$update = function(e) {
                if (e.$renderRegion && (e.$renderRegion.moved = !0, e.$update()), e instanceof t.DisplayObjectContainer) for (var i = e.$children, n = i.length, r = 0; n > r; r++) {
                    var s = i[r];
                    this.$update(s)
                }
            }, p.$reset = function(e) {
                if (e.$displayList = this.$displayListMap[e.$hashCode], e instanceof t.DisplayObjectContainer) for (var i = e.$children, n = i.length, r = 0; n > r; r++) {
                    var s = i[r];
                    this.$reset(s)
                }
            }, p.drawDisplayObject = function(t, e, i) {
                var n, r, s = 0;
                if (t.$renderRegion && (n = t, r = t.$renderAlpha), n) {
                    s++, e.globalAlpha = r;
                    var a = n.$renderMatrix;
                    i ? (e.transform(a.a, a.b, a.c, a.d, a.tx, a.ty), n.$render(e), e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty)) : (e.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty), n.$render(e))
                }
                var o = t.$children;
                if (o) for (var h = o.length, l = 0; h > l; l++) {
                    var c = o[l];
                    !c.$visible || c.$alpha <= 0 || c.$maskedObject || (s += 0 !== c.$blendMode || c.$mask ? this.drawWithClip(c, e, i) : c.$scrollRect || c.$maskRect ? this.drawWithScrollRect(c, e, i) : this.drawDisplayObject(c, e, i))
                }
                return s
            }, p.drawWithClip = function(n, r, s) {
                var a = 0,
                    o = 0 !== n.$blendMode;
                if (o) {
                    var h = e[n.$blendMode];
                    h || (h = i)
                }
                var l, c = n.$scrollRect,
                    u = n.$mask,
                    d = n.$getConcatenatedMatrix();
                if (u) {
                    var p = u.$getOriginalBounds();
                    l = t.sys.Region.create(), l.updateRegion(p, u.$getConcatenatedMatrix())
                }
                var f;
                if (c && (f = t.sys.Region.create(), f.updateRegion(c, d)), f && l ? (f.intersect(l), t.sys.Region.release(l)) : !f && l && (f = l), f) {
                    if (f.isEmpty()) return t.sys.Region.release(f), a
                } else f = t.sys.Region.create(), p = n.$getOriginalBounds(), f.updateRegion(p, n.$getConcatenatedMatrix());
                var g = this.createRenderContext(f.width, f.height);
                if (!g) return a += this.drawDisplayObject(n, r, s), t.sys.Region.release(f), a;
                if (c) {
                    var $ = d;
                    g.setTransform($.a, $.b, $.c, $.d, $.tx - f.minX, $.ty - f.minY), g.beginPath(), g.rect(c.x, c.y, c.width, c.height), g.clip()
                }
                g.setTransform(1, 0, 0, 1, -f.minX, -f.minY);
                var v = t.Matrix.create().setTo(1, 0, 0, 1, -f.minX, -f.minY);
                if (a += this.drawDisplayObject(n, g, v), t.Matrix.release(v), u) {
                    var y = this.createRenderContext(f.width, f.height);
                    if (!y) return a += this.drawDisplayObject(n, r, s), t.sys.surfaceFactory.release(g.surface), t.sys.Region.release(f), a;
                    y.setTransform(1, 0, 0, 1, -f.minX, -f.minY), v = t.Matrix.create().setTo(1, 0, 0, 1, -f.minX, -f.minY);
                    var x = this.drawDisplayObject(u, y, v);
                    t.Matrix.release(v), x > 0 && (a += x, g.globalCompositeOperation = "destination-in", g.setTransform(1, 0, 0, 1, 0, 0), g.globalAlpha = 1, g.drawImage(y.surface, 0, 0)), t.sys.surfaceFactory.release(y.surface)
                }
                return a > 0 && (a++, o && (r.globalCompositeOperation = h), r.setTransform(1, 0, 0, 1, f.minX, f.minY), r.drawImage(g.surface, 0, 0), o && (r.globalCompositeOperation = i)), t.sys.surfaceFactory.release(g.surface), t.sys.Region.release(f), a
            }, p.drawWithScrollRect = function(e, i, n) {
                var r = 0,
                    s = e.$scrollRect ? e.$scrollRect : e.$maskRect;
                if (0 == s.width || 0 == s.height) return r;
                var a = e.$getConcatenatedMatrix(),
                    o = t.sys.Region.create();
                return s.isEmpty() || o.updateRegion(s, a), o.isEmpty() ? (t.sys.Region.release(o), r) : (i.save(), n ? (i.setTransform(n.a, n.b, n.c, n.d, n.tx, n.ty), i.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)) : i.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty), i.beginPath(), i.rect(0, 0, s.width, s.height), i.clip(), n && i.setTransform(n.a, n.b, n.c, n.d, n.tx, n.ty), r += this.drawDisplayObject(e, i, n), i.restore(), t.sys.Region.release(o), r)
            }, p.createRenderContext = function(e, i) {
                var n = t.sys.surfaceFactory.create(!0);
                return n ? (n.width = Math.max(257, e), n.height = Math.max(257, i), n.renderContext) : null
            }, p.dispose = function() {
                n.prototype.dispose.call(this), this.rootDisplayList && (t.sys.DisplayList.release(this.rootDisplayList), this.rootDisplayList = null), this.context && t.sys.surfaceFactory.release(this.context.surface)
            }, r
        }(t.Texture);
    t.RenderTexture = n, t.registerClass(n, "egret.RenderTexture")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$graphics = new t.Graphics, this.$graphics.$renderContext.$targetDisplay = this, this.$renderRegion = new t.sys.Region
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "graphics", function() {
                return this.$graphics
            }), p.$measureContentBounds = function(t) {
                this.$graphics.$measureContentBounds(t)
            }, p.$hitTest = function(t, i) {
                var n = e.prototype.$hitTest.call(this, t, i);
                return n == this && (n = this.$graphics.$hitTest(t, i)), n
            }, p.$render = function(t) {
                this.$graphics.$render(t)
            }, i
        }(t.DisplayObject);
    t.Shape = e, t.registerClass(e, "egret.Shape")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$graphics = new t.Graphics, this.$graphics.$renderContext.$targetDisplay = this, this.$renderRegion = new t.sys.Region
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "graphics", function() {
                return this.$graphics
            }), p.$hitTest = function(e, i) {
                if (!this.$visible) return null;
                var n = this.$getInvertedConcatenatedMatrix(),
                    r = n.a * e + n.c * i + n.tx,
                    s = n.b * e + n.d * i + n.ty,
                    a = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                if (a && !a.contains(r, s)) return null;
                if (this.$mask && !this.$mask.$hitTest(e, i)) return null;
                for (var o = this.$children, h = !1, l = o.length - 1; l >= 0; l--) {
                    var c = o[l];
                    if (!c.$maskedObject) {
                        var u = c.$hitTest(e, i);
                        if (u) {
                            if (h = !0, u.$touchEnabled) break;
                            u = null
                        }
                    }
                }
                return u ? this.$touchChildren ? u : this : h ? this : (u = t.DisplayObject.prototype.$hitTest.call(this, e, i), u && (u = this.$graphics.$hitTest(e, i)), u)
            }, p.$measureContentBounds = function(t) {
                this.$graphics.$measureContentBounds(t)
            }, p.$render = function(t) {
                this.$graphics.$render(t)
            }, i
        }(t.DisplayObjectContainer);
    t.Sprite = e, t.registerClass(e, "egret.Sprite")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t) {
                e.call(this), this._bitmapX = 0, this._bitmapY = 0, this._textureMap = {}, this.texture = t, this._bitmapX = t._bitmapX - t._offsetX, this._bitmapY = t._bitmapY - t._offsetY
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, p.getTexture = function(t) {
                return this._textureMap[t]
            }, p.createTexture = function(e, i, n, r, s, a, o, h, l) {
                void 0 === a && (a = 0), void 0 === o && (o = 0), t.sys.isUndefined(h) && (h = a + r), t.sys.isUndefined(l) && (l = o + s);
                var c = new t.Texture;
                return c._bitmapData = this.texture._bitmapData, c.$initData(this._bitmapX + i, this._bitmapY + n, r, s, a, o, h, l, this.texture._sourceWidth, this.texture._sourceHeight), this._textureMap[e] = c, c
            }, p.dispose = function() {
                this.texture && this.texture.dispose()
            }, i
        }(t.HashObject);
    t.SpriteSheet = e, t.registerClass(e, "egret.SpriteSheet")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$stageWidth = 0, this.$stageHeight = 0, this.implMap = {}, this.$scaleMode = t.StageScaleMode.SHOW_ALL, this.$orientation = t.OrientationMode.AUTO, this.$maxTouches = 99, this.$dirtyRegionPolicy = t.DirtyRegionPolicy.ON, this.$stage = this, this.$nestLevel = 1
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "frameRate", function() {
                return t.sys.$ticker.$frameRate
            }, function(e) {
                t.sys.$ticker.$setFrameRate(e)
            }), n(p, "stageWidth", function() {
                return this.$stageWidth
            }), n(p, "stageHeight", function() {
                return this.$stageHeight
            }), p.invalidate = function() {
                t.sys.$invalidateRenderFlag = !0
            }, p.registerImplementation = function(t, e) {
                this.implMap[t] = e
            }, p.getImplementation = function(t) {
                return this.implMap[t]
            }, n(p, "scaleMode", function() {
                return this.$scaleMode
            }, function(t) {
                this.$scaleMode != t && (this.$scaleMode = t, this.$screen.updateScreenSize())
            }), n(p, "orientation", function() {
                return this.$orientation
            }, function(t) {
                this.$orientation != t && (this.$orientation = t, this.$screen.updateScreenSize())
            }), n(p, "textureScaleFactor", function() {
                return t.$TextureScaleFactor
            }, function(e) {
                t.$TextureScaleFactor = e
            }), n(p, "maxTouches", function() {
                return this.$maxTouches
            }, function(t) {
                this.$maxTouches != t && (this.$maxTouches = t, this.$screen.updateMaxTouches())
            }), n(p, "dirtyRegionPolicy", function() {
                return this.$dirtyRegionPolicy
            }, function(t) {
                this.$dirtyRegionPolicy != t && (this.$dirtyRegionPolicy = t, this.$displayList.setDirtyRegionPolicy(t))
            }), p.setContentSize = function(t, e) {
                this.$screen.setContentSize(t, e)
            }, i
        }(t.DisplayObjectContainer);
    t.Stage = e, t.registerClass(e, "egret.Stage")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i, n, r) {
                t.call(this), this.$eventPhase = 2, this.$currentTarget = null, this.$target = null, this.$isDefaultPrevented = !1, this.$isPropagationStopped = !1, this.$isPropagationImmediateStopped = !1, this.$type = e, this.$bubbles = !! i, this.$cancelable = !! n, this.data = r
            }
            __extends(e, t);
            var i = __define,
                n = e;
            return p = n.prototype, i(p, "type", function() {
                return this.$type
            }), i(p, "bubbles", function() {
                return this.$bubbles
            }), i(p, "cancelable", function() {
                return this.$cancelable
            }), i(p, "eventPhase", function() {
                return this.$eventPhase
            }), i(p, "currentTarget", function() {
                return this.$currentTarget
            }), i(p, "target", function() {
                return this.$target
            }), p.$setTarget = function(t) {
                return this.$target = t, !0
            }, p.isDefaultPrevented = function() {
                return this.$isDefaultPrevented
            }, p.preventDefault = function() {
                this.$cancelable && (this.$isDefaultPrevented = !0)
            }, p.stopPropagation = function() {
                this.$bubbles && (this.$isPropagationStopped = !0)
            }, p.stopImmediatePropagation = function() {
                this.$bubbles && (this.$isPropagationImmediateStopped = !0)
            }, p.clean = function() {
                this.data = this.$currentTarget = null, this.$setTarget(null)
            }, e.dispatchEvent = function(t, i, n, r) {
                void 0 === n && (n = !1);
                var s = e.create(e, i, n),
                    a = e._getPropertyData(e);
                void 0 != r && (a.data = r);
                var o = t.dispatchEvent(s);
                return e.release(s), o
            }, e._getPropertyData = function(t) {
                var e = t._props;
                return e || (e = t._props = {}), e
            }, e.create = function(t, e, i, n) {
                var r = t.eventPool;
                if (r || (r = t.eventPool = []), r.length) {
                    var s = r.pop();
                    return s.$type = e, s.$bubbles = !! i, s.$cancelable = !! n, s.$isDefaultPrevented = !1, s.$isPropagationStopped = !1, s.$isPropagationImmediateStopped = !1, s.$eventPhase = 2, s
                }
                return new t(e, i, n)
            }, e.release = function(t) {
                t.clean();
                var e = Object.getPrototypeOf(t).constructor;
                e.eventPool.push(t)
            }, e.ADDED_TO_STAGE = "addedToStage", e.REMOVED_FROM_STAGE = "removedFromStage", e.ADDED = "added", e.REMOVED = "removed", e.ENTER_FRAME = "enterFrame", e.RENDER = "render", e.RESIZE = "resize", e.CHANGE = "change", e.CHANGING = "changing", e.COMPLETE = "complete", e.LOOP_COMPLETE = "loopComplete", e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e.ENDED = "ended", e.ACTIVATE = "activate", e.DEACTIVATE = "deactivate", e.CLOSE = "close", e.CONNECT = "connect", e.LEAVE_STAGE = "leaveStage", e.SOUND_COMPLETE = "soundComplete", e
        }(t.HashObject);
    t.Event = e, t.registerClass(e, "egret.Event")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), t.call(this, e, i, n)
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e
        }(t.Event);
    t.FocusEvent = e, t.registerClass(e, "egret.FocusEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e.PERMISSION_DENIED = "permissionDenied", e.UNAVAILABLE = "unavailable", e
        }(t.Event);
    t.GeolocationEvent = e, t.registerClass(e, "egret.GeolocationEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), e.call(this, t, i, n), this._status = 0
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "status", function() {
                return this._status
            }), i.dispatchHTTPStatusEvent = function(e, n) {
                var r = t.Event.create(i, i.HTTP_STATUS);
                r._status = n;
                var s = e.dispatchEvent(r);
                return t.Event.release(r), s
            }, i.HTTP_STATUS = "httpStatus", i
        }(t.Event);
    t.HTTPStatusEvent = e, t.registerClass(e, "egret.HTTPStatusEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), e.call(this, t, i, n)
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, i.dispatchIOErrorEvent = function(e) {
                var n = t.Event.create(i, i.IO_ERROR),
                    r = e.dispatchEvent(n);
                return t.Event.release(n), r
            }, i.IO_ERROR = "ioError", i
        }(t.Event);
    t.IOErrorEvent = e, t.registerClass(e, "egret.IOErrorEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.Event);
    t.MotionEvent = e, t.registerClass(e, "egret.MotionEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.Event);
    t.OrientationEvent = e, t.registerClass(e, "egret.OrientationEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n, r, s) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), void 0 === r && (r = 0), void 0 === s && (s = 0), e.call(this, t, i, n), this.bytesLoaded = 0, this.bytesTotal = 0, this.bytesLoaded = r, this.bytesTotal = s
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, i.dispatchProgressEvent = function(e, n, r, s) {
                void 0 === r && (r = 0), void 0 === s && (s = 0);
                var a = t.Event.create(i, n);
                a.bytesLoaded = r, a.bytesTotal = s;
                var o = e.dispatchEvent(a);
                return t.Event.release(a), o
            }, i.PROGRESS = "progress", i.SOCKET_DATA = "socketData", i
        }(t.Event);
    t.ProgressEvent = e, t.registerClass(e, "egret.ProgressEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), e.call(this, t, i, n)
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, i.dispatchStageOrientationEvent = function(e, n) {
                var r = t.Event.create(i, n),
                    s = e.dispatchEvent(r);
                return t.Event.release(r), s
            }, i.ORIENTATION_CHANGE = "orientationChange", i
        }(t.Event);
    t.StageOrientationEvent = e, t.registerClass(e, "egret.StageOrientationEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n, r) {
                void 0 === i && (i = !1), void 0 === n && (n = !1), void 0 === r && (r = ""), e.call(this, t, i, n), this.text = r
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, i.dispatchTextEvent = function(e, n, r) {
                var s = t.Event.create(i, n);
                s.text = r;
                var a = e.dispatchEvent(s);
                return t.Event.release(s), a
            }, i.LINK = "link", i
        }(t.Event);
    t.TextEvent = e, t.registerClass(e, "egret.TextEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, n) {
                e.call(this, t, i, n)
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, p.updateAfterEvent = function() {
                t.sys.$requestRenderingFlag = !0
            }, i.dispatchTimerEvent = function(e, n, r, s) {
                var a = t.Event.create(i, n, r, s),
                    o = e.dispatchEvent(a);
                return t.Event.release(a), o
            }, i.TIMER = "timer", i.TIMER_COMPLETE = "timerComplete", i
        }(t.Event);
    t.TimerEvent = e, t.registerClass(e, "egret.TimerEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = [],
        i = Math.PI / 180,
        n = function(n) {
            function r(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), n.call(this), this.x = t, this.y = e
            }
            __extends(r, n);
            var s = __define,
                a = r;
            return p = a.prototype, r.release = function(t) {
                t && e.push(t)
            }, r.create = function(t, i) {
                var n = e.pop();
                return n || (n = new r), n.setTo(t, i)
            }, s(p, "length", function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }), p.setTo = function(t, e) {
                return this.x = t, this.y = e, this
            }, p.clone = function() {
                return new r(this.x, this.y)
            }, p.equals = function(t) {
                return this.x == t.x && this.y == t.y
            }, r.distance = function(t, e) {
                return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
            }, p.copyFrom = function(t) {
                this.x = t.x, this.y = t.y
            }, p.add = function(t) {
                return new r(this.x + t.x, this.y + t.y)
            }, r.interpolate = function(t, e, i) {
                var n = 1 - i;
                return new r(t.x * i + e.x * n, t.y * i + e.y * n)
            }, p.normalize = function(t) {
                if (0 != this.x || 0 != this.y) {
                    var e = t / this.length;
                    this.x *= e, this.y *= e
                }
            }, p.offset = function(t, e) {
                this.x += t, this.y += e
            }, r.polar = function(e, n) {
                return new r(e * t.NumberUtils.cos(n / i), e * t.NumberUtils.sin(n / i))
            }, p.subtract = function(t) {
                return new r(this.x - t.x, this.y - t.y)
            }, p.toString = function() {
                return "(x=" + this.x + ", y=" + this.y + ")"
            }, r
        }(t.HashObject);
    t.Point = n, t.registerClass(n, "egret.Point"), t.$TempPoint = new n
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = new t.Point,
        i = function(i) {
            function n(t, e, n, r, s, a) {
                i.call(this, t, e, n), this.targetChanged = !0, this.touchDown = !1, this.$initTo(r, s, a)
            }
            __extends(n, i);
            var r = __define,
                s = n;
            return p = s.prototype, p.$initTo = function(t, e, i) {
                this.touchPointID = +i || 0, this.$stageX = +t || 0, this.$stageY = +e || 0
            }, r(p, "stageX", function() {
                return this.$stageX
            }), r(p, "stageY", function() {
                return this.$stageY
            }), r(p, "localX", function() {
                return this.targetChanged && this.getLocalXY(), this._localX
            }), r(p, "localY", function() {
                return this.targetChanged && this.getLocalXY(), this._localY
            }), p.getLocalXY = function() {
                this.targetChanged = !1;
                var t = this.$target.$getInvertedConcatenatedMatrix();
                t.transformPoint(this.$stageX, this.$stageY, e), this._localX = e.x, this._localY = e.y
            }, p.$setTarget = function(t) {
                return this.$target = t, this.targetChanged = !! t, !0
            }, p.updateAfterEvent = function() {
                t.sys.$requestRenderingFlag = !0
            }, n.dispatchTouchEvent = function(e, i, r, s, a, o, h, l) {
                if (void 0 === l && (l = !1), !r && !e.hasEventListener(i)) return !0;
                var c = t.Event.create(n, i, r, s);
                c.$initTo(a, o, h), c.touchDown = l;
                var u = e.dispatchEvent(c);
                return t.Event.release(c), u
            }, n.TOUCH_MOVE = "touchMove", n.TOUCH_BEGIN = "touchBegin", n.TOUCH_END = "touchEnd", n.TOUCH_TAP = "touchTap", n.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside", n.TOUCH_ROLL_OUT = "touchRollOut", n.TOUCH_ROLL_OVER = "touchRollOver", n
        }(t.Event);
    t.TouchEvent = i, t.registerClass(i, "egret.TouchEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e() {
                t.apply(this, arguments), this.type = null
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.HashObject);
    t.Filter = e, t.registerClass(e, "egret.Filter")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i) {
                t.call(this), this.blurX = e, this.blurY = i, this.type = "blur"
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.Filter);
    t.BlurFilter = e, t.registerClass(e, "egret.BlurFilter")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e) {
                void 0 === e && (e = null), t.call(this), this.$matrix = [], this.matrix2 = [], this.type = "colorTransform", this.setMatrix(e)
            }
            __extends(e, t);
            var i = __define,
                n = e;
            return p = n.prototype, i(p, "matrix", function() {
                for (var t = 0; 20 > t; t++) this.matrix2[t] = this.$matrix[t];
                return this.matrix2
            }, function(t) {
                this.setMatrix(t)
            }), p.setMatrix = function(t) {
                for (var e = 0; 20 > e; e++) this.$matrix[e] = t && t[e] || 0
            }, e
        }(t.Filter);
    t.ColorMatrixFilter = e, t.registerClass(e, "egret.ColorMatrixFilter")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i, n, r, s, a, o, h) {
                void 0 === e && (e = 16711680), void 0 === i && (i = 1), void 0 === n && (n = 6), void 0 === r && (r = 6), void 0 === s && (s = 2), void 0 === a && (a = 1), void 0 === o && (o = !1), void 0 === h && (h = !1), t.call(this), this.color = e, this.alpha = i, this.blurX = n, this.blurY = r, this.strength = s, this.quality = a, this.inner = o, this.knockout = h, this.type = "glow", this.$blue = 255 & e, this.$green = (65280 & e) >> 8, this.$red = e >> 16
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.Filter);
    t.GlowFilter = e, t.registerClass(e, "egret.GlowFilter")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i, n, r, s, a, o, h, l, c, u) {
                void 0 === e && (e = 4), void 0 === i && (i = 45), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === s && (s = 4), void 0 === a && (a = 4), void 0 === o && (o = 1), void 0 === h && (h = 1), void 0 === l && (l = !1), void 0 === c && (c = !1), void 0 === u && (u = !1), t.call(this, n, r, s, a, o, h, l, c), this.distance = e, this.angle = i
            }
            __extends(e, t);
            var i = e;
            return p = i.prototype, e
        }(t.GlowFilter);
    t.DropShadowFilter = e, t.registerClass(e, "egret.DropShadowFilter")
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        switch (t) {
        case r:
        case -s:
            return 0;
        case n:
        case -n:
            return -1;
        case s:
        case -r:
            return 0;
        default:
            return Math.cos(t)
        }
    }

    function i(t) {
        switch (t) {
        case r:
        case -s:
            return 1;
        case n:
        case -n:
            return 0;
        case s:
        case -r:
            return -1;
        default:
            return Math.sin(t)
        }
    }
    var n = Math.PI,
        r = n / 2,
        s = n + r,
        a = 2 * n,
        o = Math.PI / 180,
        h = [],
        l = function(r) {
            function s(t, e, i, n, s, a) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === s && (s = 0), void 0 === a && (a = 0), r.call(this), this.a = t, this.b = e, this.c = i, this.d = n, this.tx = s, this.ty = a
            }
            __extends(s, r);
            var l = s;
            return p = l.prototype, s.release = function(t) {
                t && h.push(t)
            }, s.create = function() {
                var t = h.pop();
                return t || (t = new s), t
            }, p.clone = function() {
                return new s(this.a, this.b, this.c, this.d, this.tx, this.ty)
            }, p.concat = function(t) {
                var e = this.a * t.a,
                    i = 0,
                    n = 0,
                    r = this.d * t.d,
                    s = this.tx * t.a + t.tx,
                    a = this.ty * t.d + t.ty;
                (0 !== this.b || 0 !== this.c || 0 !== t.b || 0 !== t.c) && (e += this.b * t.c, r += this.c * t.b, i += this.a * t.b + this.b * t.d, n += this.c * t.a + this.d * t.c, s += this.ty * t.c, a += this.tx * t.b), this.a = e, this.b = i, this.c = n, this.d = r, this.tx = s, this.ty = a
            }, p.copyFrom = function(t) {
                return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
            }, p.identity = function() {
                this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0
            }, p.invert = function() {
                this.$invertInto(this)
            }, p.$invertInto = function(t) {
                var e = this.a,
                    i = this.b,
                    n = this.c,
                    r = this.d,
                    s = this.tx,
                    a = this.ty;
                if (0 == i && 0 == n) return t.b = t.c = 0, void(0 == e || 0 == r ? t.a = t.d = t.tx = t.ty = 0 : (e = t.a = 1 / e, r = t.d = 1 / r, t.tx = -e * s, t.ty = -r * a));
                var o = e * r - i * n;
                if (0 == o) return void t.identity();
                o = 1 / o;
                var h = t.a = r * o;
                i = t.b = -i * o, n = t.c = -n * o, r = t.d = e * o, t.tx = -(h * s + n * a), t.ty = -(i * s + r * a)
            }, p.rotate = function(t) {
                if (t = +t, 0 !== t) {
                    var n = e(t),
                        r = i(t),
                        s = this.a,
                        a = this.b,
                        o = this.c,
                        h = this.d,
                        l = this.tx,
                        c = this.ty;
                    this.a = s * n - a * r, this.b = s * r + a * n, this.c = o * n - h * r, this.d = o * r + h * n, this.tx = l * n - c * r, this.ty = l * r + c * n
                }
            }, p.scale = function(t, e) {
                1 !== t && (this.a *= t, this.c *= t, this.tx *= t), 1 !== e && (this.b *= e, this.d *= e, this.ty *= e)
            }, p.setTo = function(t, e, i, n, r, s) {
                return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = r, this.ty = s, this
            }, p.transformPoint = function(e, i, n) {
                var r = this.a * e + this.c * i + this.tx,
                    s = this.b * e + this.d * i + this.ty;
                return n ? (n.setTo(r, s), n) : new t.Point(r, s)
            }, p.translate = function(t, e) {
                this.tx += t, this.ty += e
            }, p.equals = function(t) {
                return this.a == t.a && this.b == t.b && this.c == t.c && this.d == t.d && this.tx == t.tx && this.ty == t.ty
            }, p.prepend = function(t, e, i, n, r, s) {
                var a = this.tx;
                if (1 != t || 0 != e || 0 != i || 1 != n) {
                    var o = this.a,
                        h = this.c;
                    this.a = o * t + this.b * i, this.b = o * e + this.b * n, this.c = h * t + this.d * i, this.d = h * e + this.d * n
                }
                return this.tx = a * t + this.ty * i + r, this.ty = a * e + this.ty * n + s, this
            }, p.append = function(t, e, i, n, r, s) {
                var a = this.a,
                    o = this.b,
                    h = this.c,
                    l = this.d;
                return (1 != t || 0 != e || 0 != i || 1 != n) && (this.a = t * a + e * h, this.b = t * o + e * l, this.c = i * a + n * h, this.d = i * o + n * l), this.tx = r * a + s * h + this.tx, this.ty = r * o + s * l + this.ty, this
            }, p.deltaTransformPoint = function(e) {
                var i = this,
                    n = i.a * e.x + i.c * e.y,
                    r = i.b * e.x + i.d * e.y;
                return new t.Point(n, r)
            }, p.toString = function() {
                return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
            }, p.createBox = function(e, i, n, r, s) {
                void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === s && (s = 0);
                var a = this;
                if (0 !== n) {
                    n /= o;
                    var h = t.NumberUtils.cos(n),
                        l = t.NumberUtils.sin(n);
                    a.a = h * e, a.b = l * i, a.c = -l * e, a.d = h * i
                } else a.a = e, a.b = 0, a.c = 0, a.d = i;
                a.tx = r, a.ty = s
            }, p.createGradientBox = function(t, e, i, n, r) {
                void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), this.createBox(t / 1638.4, e / 1638.4, i, n + t / 2, r + e / 2)
            }, p.$transformBounds = function(t) {
                var e = this.a,
                    i = this.b,
                    n = this.c,
                    r = this.d,
                    s = this.tx,
                    a = this.ty,
                    o = t.x,
                    h = t.y,
                    l = o + t.width,
                    c = h + t.height,
                    u = e * o + n * h + s,
                    d = i * o + r * h + a,
                    p = e * l + n * h + s,
                    f = i * l + r * h + a,
                    g = e * l + n * c + s,
                    $ = i * l + r * c + a,
                    v = e * o + n * c + s,
                    y = i * o + r * c + a,
                    x = 0;
                u > p && (x = u, u = p, p = x), g > v && (x = g, g = v, v = x), t.x = Math.floor(g > u ? u : g), t.width = Math.ceil((p > v ? p : v) - t.x), d > f && (x = d, d = f, f = x), $ > y && (x = $, $ = y, y = x), t.y = Math.floor($ > d ? d : $), t.height = Math.ceil((f > y ? f : y) - t.y)
            }, p.getDeterminant = function() {
                return this.a * this.d - this.b * this.c
            }, p.$getScaleX = function() {
                var t = this;
                if (1 == t.a && 0 == t.b) return 1;
                var e = Math.sqrt(t.a * t.a + t.b * t.b);
                return this.getDeterminant() < 0 ? -e : e
            }, p.$getScaleY = function() {
                var t = this;
                if (0 == t.c && 1 == t.d) return 1;
                var e = Math.sqrt(t.c * t.c + t.d * t.d);
                return this.getDeterminant() < 0 ? -e : e
            }, p.$getSkewX = function() {
                return Math.atan2(this.d, this.c) - n / 2
            }, p.$getSkewY = function() {
                return Math.atan2(this.b, this.a)
            }, p.$updateScaleAndRotation = function(t, n, r, s) {
                if (!(0 != r && r != a || 0 != s && s != a)) return this.a = t, this.b = this.c = 0, void(this.d = n);
                var o = e(r),
                    h = i(r);
                r == s ? (this.a = o * t, this.b = h * t) : (this.a = e(s) * t, this.b = i(s) * t), this.c = -h * n, this.d = o * n
            }, p.$preMultiplyInto = function(t, e) {
                var i = t.a * this.a,
                    n = 0,
                    r = 0,
                    s = t.d * this.d,
                    a = t.tx * this.a + this.tx,
                    o = t.ty * this.d + this.ty;
                (0 !== t.b || 0 !== t.c || 0 !== this.b || 0 !== this.c) && (i += t.b * this.c, s += t.c * this.b, n += t.a * this.b + t.b * this.d, r += t.c * this.a + t.d * this.c, a += t.ty * this.c, o += t.tx * this.b), e.a = i, e.b = n, e.c = r, e.d = s, e.tx = a, e.ty = o
            }, s
        }(t.HashObject);
    t.Matrix = l, t.registerClass(l, "egret.Matrix"), t.$TempMatrix = new l
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = [],
        i = function(i) {
            function n(t, e, n, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), i.call(this), this.x = t, this.y = e, this.width = n, this.height = r
            }
            __extends(n, i);
            var r = __define,
                s = n;
            return p = s.prototype, n.release = function(t) {
                t && e.push(t)
            }, n.create = function() {
                var t = e.pop();
                return t || (t = new n), t
            }, r(p, "right", function() {
                return this.x + this.width
            }, function(t) {
                this.width = t - this.x
            }), r(p, "bottom", function() {
                return this.y + this.height
            }, function(t) {
                this.height = t - this.y
            }), r(p, "left", function() {
                return this.x
            }, function(t) {
                this.width += this.x - t, this.x = t
            }), r(p, "top", function() {
                return this.y
            }, function(t) {
                this.height += this.y - t, this.y = t
            }), r(p, "topLeft", function() {
                return new t.Point(this.left, this.top)
            }, function(t) {
                this.top = t.y, this.left = t.x
            }), r(p, "bottomRight", function() {
                return new t.Point(this.right, this.bottom)
            }, function(t) {
                this.bottom = t.y, this.right = t.x
            }), p.copyFrom = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, p.setTo = function(t, e, i, n) {
                return this.x = t, this.y = e, this.width = i, this.height = n, this
            }, p.contains = function(t, e) {
                return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e
            }, p.intersection = function(t) {
                return this.clone().$intersectInPlace(t)
            }, p.inflate = function(t, e) {
                this.x -= t, this.width += 2 * t, this.y -= e, this.height += 2 * e
            }, p.$intersectInPlace = function(t) {
                var e = this.x,
                    i = this.y,
                    n = t.x,
                    r = t.y,
                    s = Math.max(e, n),
                    a = Math.min(e + this.width, n + t.width);
                if (a >= s) {
                    var o = Math.max(i, r),
                        h = Math.min(i + this.height, r + t.height);
                    if (h >= o) return this.setTo(s, o, a - s, h - o), this
                }
                return this.setEmpty(), this
            }, p.intersects = function(t) {
                return Math.max(this.x, t.x) <= Math.min(this.right, t.right) && Math.max(this.y, t.y) <= Math.min(this.bottom, t.bottom)
            }, p.isEmpty = function() {
                return this.width <= 0 || this.height <= 0
            }, p.setEmpty = function() {
                this.x = 0, this.y = 0, this.width = 0, this.height = 0
            }, p.clone = function() {
                return new n(this.x, this.y, this.width, this.height)
            }, p.containsPoint = function(t) {
                return this.x < t.x && this.x + this.width > t.x && this.y < t.y && this.y + this.height > t.y ? !0 : !1
            }, p.containsRect = function(t) {
                var e = t.x + t.width,
                    i = t.y + t.height,
                    n = this.x + this.width,
                    r = this.y + this.height;
                return t.x >= this.x && t.x < n && t.y >= this.y && t.y < r && e > this.x && n >= e && i > this.y && r >= i
            }, p.equals = function(t) {
                return this === t ? !0 : this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height
            }, p.inflatePoint = function(t) {
                this.inflate(t.x, t.y)
            }, p.offset = function(t, e) {
                this.x += t, this.y += e
            }, p.offsetPoint = function(t) {
                this.offset(t.x, t.y)
            }, p.toString = function() {
                return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
            }, p.union = function(t) {
                var e = this.clone();
                if (t.isEmpty()) return e;
                if (e.isEmpty()) return e.copyFrom(t), e;
                var i = Math.min(e.x, t.x),
                    n = Math.min(e.y, t.y);
                return e.setTo(i, n, Math.max(e.right, t.right) - i, Math.max(e.bottom, t.bottom) - n), e
            }, p.$getBaseWidth = function(t) {
                var e = Math.abs(Math.cos(t)),
                    i = Math.abs(Math.sin(t));
                return e * this.width + i * this.height
            }, p.$getBaseHeight = function(t) {
                var e = Math.abs(Math.cos(t)),
                    i = Math.abs(Math.sin(t));
                return i * this.width + e * this.height
            }, n
        }(t.HashObject);
    t.Rectangle = i, t.registerClass(i, "egret.Rectangle"), t.$TempRectangle = new i
}(egret || (egret = {}));
var egret;
!
function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.en_US = t.$locale_strings.en_US || {};
    var e = t.$locale_strings.en_US;
    e[1001] = "Could not find Egret entry class: {0}。", e[1002] = "Egret entry class '{0}' must inherit from egret.DisplayObject.", e[1003] = "Parameter {0} must be non-null.", e[1004] = "An object cannot be added as a child to one of it's children (or children's children, etc.).", e[1005] = "An object cannot be added as a child of itself.", e[1006] = "The supplied DisplayObject must be a child of the caller.", e[1007] = "An index specified for a parameter was out of range.", e[1008] = "Instantiate singleton error，singleton class {0} can not create multiple instances.", e[1009] = 'the Class {0} cannot use the property "{1}"', e[1010] = 'the property "{1}" of the Class "{0}" is readonly', e[1011] = "Stream Error. URL: {0}", e[1012] = "The type of parameter {0} must be Class.", e[1013] = "Variable assignment is NaN, please see the code!", e[1014] = 'the constant "{1}" of the Class "{0}" is read-only', e[1015] = "xml not found!", e[1016] = "{0}has been obsoleted", e[1017] = "The format of JSON file is incorrect: {0}\ndata: {1}", e[1018] = "the scale9Grid is not correct", e[1022] = "{0} ArgumentError", e[1023] = "This method is not available in the ScrollView!", e[1025] = "end of the file", e[1026] = "! EncodingError The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = ". called injection is not configured rule: {0}, please specify configuration during its initial years of injection rule, and then call the corresponding single case.", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "Photos can not be used across domains toDataURL to convert base64", e[1034] = 'Music file decoding failed: "{0}", please use the standard conversion tool reconversion under mp3.', e[1035] = "Native does not support this feature!", e[1036] = "Sound has stopped, please recall Sound.play () to play the sound!", e[1037] = "Non-load the correct blob!", e[1038] = "XML format error!", e[3e3] = "Theme configuration file failed to load: {0}", e[3001] = "Cannot find the skin name which is configured in Theme: {0}", e[3002] = 'Index:"{0}" is out of the collection element index range', e[3003] = "Cannot be available in this component. If this component is container, please continue to use", e[3004] = "addChild(){0}addElement() replace", e[3005] = "addChildAt(){0}addElementAt() replace", e[3006] = "removeChild(){0}removeElement() replace", e[3007] = "removeChildAt(){0}removeElementAt() replace", e[3008] = "setChildIndex(){0}setElementIndex() replace", e[3009] = "swapChildren(){0}swapElements() replace", e[3010] = "swapChildrenAt(){0}swapElementsAt() replace", e[3011] = 'Index:"{0}" is out of the visual element index range', e[3012] = "This method is not available in Scroller component!", e[3013] = "UIStage is GUI root container, and only one such instant is in the display list！", e[3100] = "Current browser does not support WebSocket", e[3101] = "Please connect Socket firstly", e[3102] = "Please set the type of binary type", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!"
}(egret || (egret = {}));
var egret;
!
function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$language = "en_US"
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        function i(e) {
            for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
            var r = t.$locale_strings[t.$language][e];
            if (!r) return "{" + e + "}";
            for (var s = i.length, a = 0; s > a; a++) r = r.replace("{" + a + "}", i[a]);
            return r
        }
        e.tr = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.zh_CN = t.$locale_strings.zh_CN || {};
    var e = t.$locale_strings.zh_CN;
    e[1001] = "找不到Egret入口类: {0}。", e[1002] = "Egret入口类 {0} 必须继承自egret.DisplayObject。", e[1003] = "参数 {0} 不能为 null。", e[1004] = "无法将对象添加为它的一个子对象（或子对象的子对象等）的子对象。", e[1005] = "不能将对象添加为其自身的子对象。", e[1006] = "提供的 DisplayObject 必须是调用者的子级。", e[1007] = "为参数指定的索引不在范围内。", e[1008] = "实例化单例出错，不允许实例化多个 {0} 对象。", e[1009] = "类 {0} 不可以使用属性 {1}", e[1010] = "类 {0} 属性 {1} 是只读的", e[1011] = "流错误。URL: {0}", e[1012] = "参数 {0} 的类型必须为 Class。", e[1013] = "变量赋值为NaN，请查看代码！", e[1014] = "类 {0} 常量 {1} 是只读的", e[1015] = "xml not found!", e[1016] = "{0}已经废弃", e[1017] = "JSON文件格式不正确: {0}\ndata: {1}", e[1018] = "9宫格设置错误", e[1022] = "{0} ArgumentError", e[1023] = "此方法在ScrollView内不可用!", e[1025] = "遇到文件尾", e[1026] = "EncodingError! The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "跨域图片不可以使用toDataURL来转换成base64", e[1034] = '音乐文件解码失败："{0}"，请使用标准的转换工具重新转换下mp3。', e[1035] = "Native 下暂未实现此功能！", e[1036] = "声音已停止，请重新调用 Sound.play() 来播放声音！", e[1037] = "非正确的blob加载！", e[1038] = "XML 格式错误!", e[3e3] = "主题配置文件加载失败: {0}", e[3001] = "找不到主题中所配置的皮肤类名: {0}", e[3002] = '索引:"{0}"超出集合元素索引范围', e[3003] = "在此组件中不可用，若此组件为容器类，请使用", e[3004] = "addChild(){0}addElement()代替", e[3005] = "addChildAt(){0}addElementAt()代替", e[3006] = "removeChild(){0}removeElement()代替", e[3007] = "removeChildAt(){0}removeElementAt()代替", e[3008] = "setChildIndex(){0}setElementIndex()代替", e[3009] = "swapChildren(){0}swapElements()代替", e[3010] = "swapChildrenAt(){0}swapElementsAt()代替", e[3011] = '索引:"{0}"超出可视元素索引范围', e[3012] = "此方法在Scroller组件内不可用!", e[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！", e[3100] = "当前浏览器不支持WebSocket", e[3101] = "请先连接WebSocket", e[3102] = "请先设置type为二进制类型", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!"
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(t) {}(e = t.localStorage || (t.localStorage = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function e() {
                this.onSuccessFunc = null, this.onSuccessThisObject = null, this.onErrorFunc = null, this.onErrorThisObject = null, this.downloadingSizeFunc = null, this.downloadingSizeThisObject = null
            }
            var i = e;
            return p = i.prototype, e.create = function() {
                return e.promiseObjectList.length ? e.promiseObjectList.pop() : new t.PromiseObject
            }, p.onSuccess = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                this.onSuccessFunc && this.onSuccessFunc.apply(this.onSuccessThisObject, t), this.destroy()
            }, p.onError = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                this.onErrorFunc && this.onErrorFunc.apply(this.onErrorThisObject, t), this.destroy()
            }, p.downloadingSize = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                this.downloadingSizeFunc && this.downloadingSizeFunc.apply(this.downloadingSizeThisObject, t)
            }, p.destroy = function() {
                this.onSuccessFunc = void 0, this.onSuccessThisObject = void 0, this.onErrorFunc = void 0, this.onErrorThisObject = void 0, this.downloadingSizeFunc = void 0, this.downloadingSizeThisObject = void 0, e.promiseObjectList.push(this)
            }, e.promiseObjectList = [], e
        }();
    t.PromiseObject = e, t.registerClass(e, "egret.PromiseObject")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.GET = "GET", t.POST = "POST", t
        }();
    t.HttpMethod = e, t.registerClass(e, "egret.HttpMethod")
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.TEXT = "text", t.ARRAY_BUFFER = "arraybuffer", t
        }();
    t.HttpResponseType = e, t.registerClass(e, "egret.HttpResponseType")
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        function i(t, e) {
            var i = t.minX < e.minX ? t.minX : e.minX,
                n = t.minY < e.minY ? t.minY : e.minY,
                r = t.maxX > e.maxX ? t.maxX : e.maxX,
                s = t.maxY > e.maxY ? t.maxY : e.maxY;
            return (r - i) * (s - n)
        }
        var n = function() {
                function n() {
                    this.dirtyList = [], this.hasClipRect = !1, this.clipWidth = 0, this.clipHeight = 0, this.clipArea = 0, this.clipRectChanged = !1, this.$dirtyRegionPolicy = t.DirtyRegionPolicy.ON
                }
                var r = n;
                return p = r.prototype, p.setClipRect = function(t, e) {
                    this.hasClipRect = !0, this.clipRectChanged = !0, this.clipWidth = Math.ceil(t), this.clipHeight = Math.ceil(e), this.clipArea = this.clipWidth * this.clipHeight
                }, p.addRegion = function(i) {
                    var n = i.minX,
                        r = i.minY,
                        s = i.maxX,
                        a = i.maxY;
                    if (this.hasClipRect && (0 > n && (n = 0), 0 > r && (r = 0), s > this.clipWidth && (s = this.clipWidth), a > this.clipHeight && (a = this.clipHeight)), n >= s || r >= a) return !1;
                    if (this.clipRectChanged) return !0;
                    var o = this.dirtyList,
                        h = e.Region.create();
                    return o.push(h.setTo(n, r, s, a)), this.$dirtyRegionPolicy != t.DirtyRegionPolicy.OFF && this.mergeDirtyList(o), !0
                }, p.clear = function() {
                    for (var t = this.dirtyList, i = t.length, n = 0; i > n; n++) e.Region.release(t[n]);
                    t.length = 0
                }, p.getDirtyRegions = function() {
                    var i = this.dirtyList;
                    if (this.$dirtyRegionPolicy == t.DirtyRegionPolicy.OFF || t.Capabilities.runtimeType == t.RuntimeType.NATIVE && !t["native"].$supportCanvas) {
                        this.clipRectChanged = !0, this.clear();
                        var n = e.Region.create();
                        if (this.hasClipRect) i.push(n.setTo(0, 0, this.clipWidth, this.clipHeight));
                        else {
                            var r = this.displayList.root.$getOriginalBounds();
                            i.push(n.setTo(r.x, r.y, r.width, r.height))
                        }
                    } else if (this.clipRectChanged) {
                        this.clipRectChanged = !1, this.clear();
                        var n = e.Region.create();
                        i.push(n.setTo(0, 0, this.clipWidth, this.clipHeight))
                    } else for (; this.mergeDirtyList(i););
                    return this.dirtyList
                }, p.mergeDirtyList = function(t) {
                    var n = t.length;
                    if (2 > n) return !1;
                    for (var r = this.hasClipRect, s = n > 3 ? Number.POSITIVE_INFINITY : 0, a = 0, o = 0, h = 0, l = 0; n - 1 > l; l++) {
                        var c = t[l];
                        r && (h += c.area);
                        for (var u = l + 1; n > u; u++) {
                            var d = t[u],
                                p = i(c, d) - c.area - d.area;
                            s > p && (a = l, o = u, s = p)
                        }
                    }
                    if (r && h / this.clipArea > .95 && (this.clipRectChanged = !0), a != o) {
                        var f = t[o];
                        return t[a].union(f), e.Region.release(f), t.splice(o, 1), !0
                    }
                    return !1
                }, p.setDirtyRegionPolicy = function(t) {
                    this.$dirtyRegionPolicy = t
                }, n
            }();
        e.DirtyRegion = n, t.registerClass(n, "egret.sys.DirtyRegion")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.OFF = "off", t.ON = "on", t
        }();
    t.DirtyRegionPolicy = e, t.registerClass(e, "egret.DirtyRegionPolicy")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        var i = [],
            n = ["source-over", "lighter", "destination-out"],
            r = "source-over",
            s = function(s) {
                function a(i) {
                    s.call(this), this.$isDirty = !1, this.$renderAlpha = 1, this.$renderMatrix = new t.Matrix, this.$ratioMatrix = new t.Matrix, this.$ratioChanged = !1, this.$pixelRatio = 1, this.$renderRegion = new e.Region, this.surface = null, this.offsetX = 0, this.offsetY = 0, this.needRedraw = !1, this.rootMatrix = new t.Matrix, this.dirtyNodes = {}, this.dirtyNodeList = [], this.dirtyList = null, this.dirtyRegion = new e.DirtyRegion, this.sizeChanged = !1, this.root = i, this.dirtyRegion.displayList = this
                }
                __extends(a, s);
                var o = a;
                return p = o.prototype, a.release = function(n) {
                    e.surfaceFactory.release(n.surface), t.Matrix.release(n.$renderMatrix), t.Matrix.release(n.$ratioMatrix), n.surface = null, n.renderContext = null, n.root = null, n.$renderMatrix = null, n.$ratioMatrix = null, n.needRedraw = !1, n.$isDirty = !1, i.push(n)
                }, a.create = function(n) {
                    var r = i.pop();
                    r || (r = new t.sys.DisplayList(n));
                    var s = e.surfaceFactory.create();
                    return s ? (r.surface = s, r.renderContext = s.renderContext, r.root = n, r.$renderMatrix = t.Matrix.create(), r.$renderMatrix.setTo(1, 0, 0, 1, 0, 0), r.$pixelRatio = 1, r.$ratioMatrix = t.Matrix.create(), r.$ratioMatrix.setTo(1, 0, 0, 1, 0, 0), r.needRedraw = !0, r.$isDirty = !0, r) : null
                }, p.$update = function() {
                    var t = this.root;
                    if (null == t) return !1;
                    t.$removeFlagsUp(768), this.$renderAlpha = t.$getConcatenatedAlpha();
                    var e = t.$getConcatenatedMatrix(),
                        i = t.$getOriginalBounds(),
                        n = t.$parentDisplayList,
                        r = 1;
                    n ? r = n.$pixelRatio : t.stage && t.stage.$displayList && (r = t.stage.$displayList.$pixelRatio), this.setDevicePixelRatio(r);
                    var s = this.$renderRegion;
                    if (this.needRedraw && this.updateDirtyRegions(), !n) return s.setTo(0, 0, 0, 0), s.moved = !1, !1;
                    if (!s.moved && !n.$ratioChanged) return !1;
                    s.moved = !1;
                    var a = this.$renderMatrix;
                    a.copyFrom(e);
                    var o = n.root;
                    return o !== t.$stage && t.$getConcatenatedMatrixAt(o, a), this.$ratioMatrix.$preMultiplyInto(a, a), s.updateRegion(i, a), !0
                }, p.$render = function(t) {
                    var e = this.surface;
                    e && t.drawImage(e, this.offsetX, this.offsetY, e.width / this.$pixelRatio, e.height / this.$pixelRatio)
                }, p.setClipRect = function(t, e) {
                    t *= this.$pixelRatio, e *= this.$pixelRatio, this.dirtyRegion.setClipRect(t, e), this.rootMatrix = null;
                    var i = this.renderContext.surface;
                    i.width = t, i.height = e, this.surface = i
                }, p.markDirty = function(t) {
                    var e = t.$hashCode;
                    if (!this.dirtyNodes[e] && (this.dirtyNodes[e] = !0, this.dirtyNodeList.push(t), !this.needRedraw)) {
                        this.needRedraw = !0;
                        var i = this.root.$parentDisplayList;
                        i && i.markDirty(this)
                    }
                }, p.updateDirtyRegions = function() {
                    var t = this.dirtyNodeList;
                    this.dirtyNodeList = [], this.dirtyNodes = {};
                    for (var e = this.dirtyRegion, i = t.length, n = 0; i > n; n++) {
                        var r = t[n],
                            s = r.$renderRegion;
                        r.$renderAlpha > 0 && e.addRegion(s) && (r.$isDirty = !0);
                        var a = r.$update();
                        r.$renderAlpha > 0 && (a || !r.$isDirty) && e.addRegion(s) && (r.$isDirty = !0)
                    }
                    return this.dirtyList = e.getDirtyRegions(), this.dirtyList
                }, p.drawToSurface = function() {
                    var t = this.rootMatrix;
                    t && this.changeSurfaceSize();
                    var e = this.renderContext;
                    e.save(), e.beginPath(), t && e.setTransform(1, 0, 0, 1, -this.offsetX * this.$pixelRatio, -this.offsetY * this.$pixelRatio);
                    for (var i = this.dirtyList, n = i.length, r = 0; n > r; r++) {
                        var s = i[r];
                        e.clearRect(s.minX, s.minY, s.width, s.height), e.rect(s.minX, s.minY, s.width, s.height)
                    }
                    e.clip(), t && e.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
                    var a = this.drawDisplayObject(this.root, e, i, t, null, null);
                    return e.restore(), this.dirtyList = null, this.dirtyRegion.clear(), this.needRedraw = !1, this.$ratioChanged = !1, a
                }, p.drawDisplayObject = function(t, e, i, n, r, s) {
                    var a, o, h = 0;
                    if (r ? (r.needRedraw && (h += r.drawToSurface()), a = r, o = 1) : t.$renderRegion && (a = t, o = t.$renderAlpha), a) {
                        var l = a.$renderRegion;
                        if (s && !s.intersects(l)) a.$isDirty = !1;
                        else if (!a.$isDirty) for (var c = i.length, u = 0; c > u; u++) if (l.intersects(i[u])) {
                            a.$isDirty = !0;
                            break
                        }
                        if (a.$isDirty) {
                            h++, e.globalAlpha = o;
                            var d = a.$renderMatrix;
                            n ? (e.transform(d.a, d.b, d.c, d.d, d.tx, d.ty), a.$render(e), e.setTransform(n.a, n.b, n.c, n.d, n.tx * this.$pixelRatio, n.ty * this.$pixelRatio)) : (e.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), a.$render(e)), a.$isDirty = !1
                        }
                    }
                    if (r) return h;
                    var p = t.$children;
                    if (p) for (var f = p.length, g = 0; f > g; g++) {
                        var $ = p[g];
                        !$.$visible || $.$alpha <= 0 || $.$maskedObject ? $.$isDirty = !1 : 0 !== $.$blendMode || $.$mask && $.$mask.$parentDisplayList ? h += this.drawWithClip($, e, i, n, s) : $.$scrollRect || $.$maskRect ? h += this.drawWithScrollRect($, e, i, n, s) : $.isFPS ? this.drawDisplayObject($, e, i, n, $.$displayList, s) : h += this.drawDisplayObject($, e, i, n, $.$displayList, s)
                    }
                    return h
                }, p.drawWithClip = function(i, s, a, o, h) {
                    var l = 0,
                        c = 0 !== i.$blendMode;
                    if (c) {
                        var u = n[i.$blendMode];
                        u || (u = r)
                    }
                    var d = i.$scrollRect ? i.$scrollRect : i.$maskRect,
                        p = i.$mask;
                    p && !p.$parentDisplayList && (p = null);
                    var f, g = t.Matrix.create();
                    g.copyFrom(i.$getConcatenatedMatrix());
                    var $, v = i.$parentDisplayList.root;
                    if (v !== i.$stage && ($ = v.$getInvertedConcatenatedMatrix(), $.$preMultiplyInto(g, g)), this.$ratioMatrix.$preMultiplyInto(g, g), p) {
                        var y = p.$getOriginalBounds();
                        f = e.Region.create();
                        var x = t.Matrix.create();
                        x.copyFrom(p.$getConcatenatedMatrix()), $ && $.$preMultiplyInto(x, x), this.$ratioMatrix.$preMultiplyInto(x, x), f.updateRegion(y, x), t.Matrix.release(x)
                    }
                    var m;
                    if (d && (m = e.Region.create(), m.updateRegion(d, g)), m && f ? (m.intersect(f), e.Region.release(f)) : !m && f && (m = f), m) {
                        if (m.isEmpty() || h && !h.intersects(m)) return e.Region.release(m), t.Matrix.release(g), l
                    } else m = e.Region.create(), y = i.$getOriginalBounds(), m.updateRegion(y, g);
                    for (var T = !1, _ = a.length, b = 0; _ > b; b++) if (m.intersects(a[b])) {
                        T = !0;
                        break
                    }
                    if (!T) return e.Region.release(m), t.Matrix.release(g), l;
                    var C = this.createRenderContext(m.width, m.height);
                    if (!C) return l += this.drawDisplayObject(i, s, a, o, i.$displayList, h), e.Region.release(m), t.Matrix.release(g), l;
                    if (d) {
                        var x = g;
                        C.setTransform(x.a, x.b, x.c, x.d, x.tx - m.minX, x.ty - m.minY), C.beginPath(), C.rect(d.x, d.y, d.width, d.height), C.clip()
                    }
                    C.setTransform(1, 0, 0, 1, -m.minX, -m.minY);
                    var F = t.Matrix.create().setTo(1, 0, 0, 1, -m.minX, -m.minY);
                    if (l += this.drawDisplayObject(i, C, a, F, i.$displayList, m), t.Matrix.release(F), p) {
                        var E = this.createRenderContext(m.width, m.height);
                        if (!E) return l += this.drawDisplayObject(i, s, a, o, i.$displayList, h), e.surfaceFactory.release(C.surface), e.Region.release(m), t.Matrix.release(g), l;
                        E.setTransform(1, 0, 0, 1, -m.minX, -m.minY), F = t.Matrix.create().setTo(1, 0, 0, 1, -m.minX, -m.minY);
                        var R = this.drawDisplayObject(p, E, a, F, p.$displayList, m);
                        t.Matrix.release(F), R > 0 && (l += R, C.globalCompositeOperation = "destination-in", C.setTransform(1, 0, 0, 1, 0, 0), C.globalAlpha = 1, C.drawImage(E.surface, 0, 0)), e.surfaceFactory.release(E.surface)
                    }
                    return l > 0 && (l++, c && (s.globalCompositeOperation = u), s.globalAlpha = 1, o ? (s.translate(m.minX, m.minY), s.drawImage(C.surface, 0, 0), s.setTransform(o.a, o.b, o.c, o.d, o.tx * this.$pixelRatio, o.ty * this.$pixelRatio)) : (s.setTransform(1, 0, 0, 1, m.minX, m.minY), s.drawImage(C.surface, 0, 0)), c && (s.globalCompositeOperation = r)), e.surfaceFactory.release(C.surface), e.Region.release(m), t.Matrix.release(g), l
                }, p.drawWithScrollRect = function(i, n, r, s, a) {
                    var o = 0,
                        h = i.$scrollRect ? i.$scrollRect : i.$maskRect;
                    if (0 == h.width || 0 == h.height) return o;
                    var l = t.Matrix.create();
                    l.copyFrom(i.$getConcatenatedMatrix());
                    var c = i.$parentDisplayList.root;
                    c !== i.$stage && c.$getInvertedConcatenatedMatrix().$preMultiplyInto(l, l), this.$ratioMatrix.$preMultiplyInto(l, l);
                    var u = e.Region.create();
                    if (h.isEmpty() || u.updateRegion(h, l), u.isEmpty() || a && !a.intersects(u)) return e.Region.release(u), t.Matrix.release(l), o;
                    for (var d = !1, p = r.length, f = 0; p > f; f++) if (u.intersects(r[f])) {
                        d = !0;
                        break
                    }
                    return d ? (n.save(), s ? (n.setTransform(s.a, s.b, s.c, s.d, s.tx * this.$pixelRatio, s.ty * this.$pixelRatio), n.transform(l.a, l.b, l.c, l.d, l.tx, l.ty)) : n.setTransform(l.a, l.b, l.c, l.d, l.tx, l.ty), n.beginPath(), n.rect(h.x, h.y, h.width, h.height), n.clip(), s && n.setTransform(s.a, s.b, s.c, s.d, s.tx * this.$pixelRatio, s.ty * this.$pixelRatio), o += this.drawDisplayObject(i, n, r, s, i.$displayList, u), n.restore(), e.Region.release(u), t.Matrix.release(l), o) : (e.Region.release(u), t.Matrix.release(l), o)
                }, p.createRenderContext = function(i, n) {
                    var r = e.surfaceFactory.create(!0);
                    return r ? (t.Capabilities.runtimeType == t.RuntimeType.WEB ? (r.width = Math.max(257, i), r.height = Math.max(257, n)) : (r.width = i, r.height = n), r.renderContext) : null
                }, p.changeSurfaceSize = function() {
                    var i = (this.root, this.offsetX),
                        n = this.offsetY,
                        r = this.root.$getOriginalBounds(),
                        s = this.$pixelRatio,
                        a = this.$pixelRatio;
                    this.offsetX = r.x, this.offsetY = r.y;
                    var o = this.renderContext,
                        h = o.surface;
                    if (this.sizeChanged) {
                        var l = e.sharedRenderContext,
                            c = l.surface;
                        e.sharedRenderContext = o, this.renderContext = l, this.surface = c, c.width = Math.max(r.width * s, 257), c.height = Math.max(r.height * a, 257), l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(h, (i - this.offsetX) * s, (n - this.offsetY) * a), t.Capabilities.runtimeType != t.RuntimeType.NATIVE && (h.height = 1, h.width = 1)
                    } else this.sizeChanged = !0, h.width = Math.max(r.width * s, 257), h.height = Math.max(r.height * a, 257);
                    this.rootMatrix.setTo(1, 0, 0, 1, -this.offsetX, -this.offsetY), this.renderContext.setTransform(1, 0, 0, 1, -r.x, -r.y)
                }, p.setDevicePixelRatio = function(e) {
                    void 0 === e && (e = 1), this.$pixelRatio == e && this.$ratioMatrix || (this.$ratioMatrix || (this.$ratioMatrix = t.Matrix.create()), this.$ratioChanged = !0, this.$pixelRatio = e, this.$ratioMatrix.setTo(e, 0, 0, e, 0, 0), this.root.$invalidate(!0))
                }, p.setDirtyRegionPolicy = function(t) {
                    this.dirtyRegion.setDirtyRegionPolicy(t)
                }, a
            }(t.HashObject);
        e.DisplayList = s, t.registerClass(s, "egret.sys.DisplayList", ["egret.sys.Renderable"])
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(t) {
        function e(t) {
            return "undefined" == typeof t
        }

        function i(t) {
            return +t || 0
        }
        t.isUndefined = e, t.getNumber = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.AUTO = "auto", t.PORTRAIT = "portrait", t.LANDSCAPE = "landscape", t.LANDSCAPE_FLIPPED = "landscapeFlipped", t
        }();
    t.OrientationMode = e, t.registerClass(e, "egret.OrientationMode")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        function i(i, n, r, s) {
            if (n && (t.log = function() {
                for (var t = arguments.length, i = "", n = 0; t > n; n++) i += arguments[n] + " ";
                e.$logToFPS(i), console.log.apply(console, a(arguments))
            }), l = e.isUndefined(s) ? {} : s, n = !! n, this.showFPS = !! i, this.showLog = n, !this.fpsDisplay) {
                var o = e.isUndefined(s.x) ? 0 : s.x,
                    u = e.isUndefined(s.y) ? 0 : s.y;
                h = this.fpsDisplay = new FPS(this.stage, i, n, r, s), h.x = o, h.y = u;
                for (var d = c.length, p = 0; d > p; p++) h.updateInfo(c[p]);
                c = null
            }
        }

        function n(t) {
            t = !! t, this._showPaintRect != t && (this._showPaintRect = t, t ? (this.stageDisplayList || (this.stageDisplayList = e.DisplayList.create(this.stage)), this.stage.$displayList = this.stageDisplayList) : this.stage.$displayList = this.screenDisplayList)
        }

        function r(t) {
            for (var e = t.length, i = [], n = 0; e > n; n++) {
                var r = t[n];
                i[n] = [r.minX, r.minY, r.width, r.height], r.width -= 1, r.height -= 1
            }
            var s = this.paintList;
            s.push(i), s.length > 1 && s.shift();
            var a = this.screenDisplayList.renderContext;
            for (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, a.surface.width, a.surface.height), a.drawImage(this.stageDisplayList.surface, 0, 0), e = s.length, n = 0; e > n; n++) {
                i = s[n];
                for (var o = i.length - 1; o >= 0; o--) {
                    var h = i[o];
                    this.drawDirtyRect(h[0], h[1], h[2], h[3], a)
                }
            }
            a.save(), a.beginPath();
            for (var e = t.length, n = 0; e > n; n++) {
                var r = t[n];
                a.clearRect(r.minX, r.minY, r.width, r.height), a.rect(r.minX, r.minY, r.width, r.height)
            }
            a.clip(), a.drawImage(this.stageDisplayList.surface, 0, 0), a.restore()
        }

        function s(t, e, i, n, r) {
            r.strokeStyle = "rgb(255,0,0)", r.lineWidth = 5, r.strokeRect(t - .5, e - .5, i, n)
        }

        function a(t) {
            for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
            return e
        }
        var o = function(a) {
                function o(t, e, o) {
                    a.call(this), this.isPlaying = !1, this.entryClassName = o, this.stage = e, this.screenDisplayList = this.createDisplayList(e, t), this.showFPS = !1, this.showLog = !1, this._showPaintRect = !1, this.stageDisplayList = null, this.paintList = [], this.displayFPS = i, this.showPaintRect = n, this.drawPaintRect = r, this.drawDirtyRect = s
                }
                __extends(o, a);
                var h = o;
                return p = h.prototype, p.createDisplayList = function(t, i) {
                    var n = new e.DisplayList(t);
                    return n.renderContext = i, t.$displayList = n, n.setClipRect(t.$stageWidth, t.$stageHeight), n
                }, p.start = function() {
                    !this.isPlaying && this.stage && (e.$TempStage = e.$TempStage || this.stage, this.isPlaying = !0, this.root || this.initialize(), e.$ticker.$addPlayer(this))
                }, p.initialize = function() {
                    var e;
                    if (this.entryClassName && (e = t.getDefinitionByName(this.entryClassName)), e) {
                        var i = new e;
                        this.root = i, i instanceof t.DisplayObject && this.stage.addChild(i)
                    }
                }, p.stop = function() {
                    this.pause(), this.stage = null
                }, p.pause = function() {
                    this.isPlaying && (this.isPlaying = !1, e.$ticker.$removePlayer(this))
                }, p.$render = function(e, i) {
                    (this.showFPS || this.showLog) && this.stage.addChild(this.fpsDisplay), this.callLaters(), this.callLaterAsyncs();
                    var n = this.stage,
                        r = t.getTimer(),
                        s = n.$displayList.updateDirtyRegions(),
                        a = t.getTimer(),
                        o = 0;
                    s.length > 0 && (s = s.concat(), o = n.$displayList.drawToSurface()), this._showPaintRect && this.drawPaintRect(s);
                    var h = t.getTimer();
                    if (e && this.showFPS) {
                        var l = 0;
                        if (o > 0) {
                            for (var c = s.length, u = 0, d = 0; c > d; d++) u += s[d].area;
                            l = Math.ceil(1e3 * u / (n.stageWidth * n.stageHeight)) / 10
                        }
                        this.fpsDisplay.update(o, l, a - r, h - a, i)
                    }
                }, p.callLaters = function() {
                    if (t.$callLaterFunctionList.length > 0) {
                        var e = t.$callLaterFunctionList;
                        t.$callLaterFunctionList = [];
                        var i = t.$callLaterThisList;
                        t.$callLaterThisList = [];
                        var n = t.$callLaterArgsList;
                        t.$callLaterArgsList = []
                    }
                    if (e) for (var r = e.length, s = 0; r > s; s++) {
                        var a = e[s];
                        null != a && a.apply(i[s], n[s])
                    }
                }, p.callLaterAsyncs = function() {
                    if (t.$callAsyncFunctionList.length > 0) {
                        var e = t.$callAsyncFunctionList,
                            i = t.$callAsyncThisList,
                            n = t.$callAsyncArgsList;
                        t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [];
                        for (var r = 0; r < e.length; r++) {
                            var s = e[r];
                            null != s && s.apply(i[r], n[r])
                        }
                    }
                }, p.updateStageSize = function(e, i, n) {
                    void 0 === n && (n = 1);
                    var r = this.stage;
                    (e !== r.$stageWidth || i !== r.$stageHeight || this.screenDisplayList.$pixelRatio !== n) && (r.$stageWidth = e, r.$stageHeight = i, this.screenDisplayList.setDevicePixelRatio(n), this.screenDisplayList.setClipRect(e, i), r.dispatchEventWith(t.Event.RESIZE), r.$invalidate(!0))
                }, o
            }(t.HashObject);
        e.Player = o, t.registerClass(o, "egret.sys.Player");
        var h, l, c = [];
        e.$logToFPS = function(t) {
            return h ? void h.updateInfo(t) : void c.push(t)
        }, FPS = function(e) {
            function i(i, n, r, s, a) {
                e.call(this), this.isFPS = !0, this.infoLines = [], this.totalTime = 0, this.totalTick = 0, this.lastTime = 0, this.drawCalls = 0, this.dirtyRatio = 0, this.costDirty = 0, this.costRender = 0, this.costTicker = 0, this._stage = i, this.showFPS = n, this.showLog = r, this.logFilter = s, this.touchChildren = !1, this.touchEnabled = !1, this.styles = a, this.createDisplay();
                try {
                    var o = s ? new RegExp(s) : null
                } catch (h) {
                    t.log(h)
                }
                this.filter = function(t) {
                    return o ? o.test(t) : !s || 0 == t.indexOf(s)
                }
            }
            return __extends(i, e), i.prototype.createDisplay = function() {
                this.shape = new t.Shape, this.addChild(this.shape);
                var e = new t.TextField;
                e.size = t.sys.isUndefined(this.styles.size) ? 24 : parseInt(this.styles.size), this.addChild(e), this.textField = e, e.textColor = t.sys.isUndefined(this.styles.textColor) ? 49664 : parseInt(this.styles.textColor), e.fontFamily = "monospace", e.x = 10, e.y = 10;
                var e = new t.TextField;
                this.infoText = e, this.addChild(e), e.textColor = t.sys.isUndefined(this.styles.textColor) ? 49664 : parseInt(this.styles.textColor), e.fontFamily = "monospace", e.x = 10, e.size = t.sys.isUndefined(this.styles.size) ? 12 : this.styles.size / 2, e.y = 10
            }, i.prototype.update = function(e, i, n, r, s) {
                var a = t.getTimer();
                if (this.totalTime += a - this.lastTime, this.lastTime = a, this.totalTick++, this.drawCalls += e, this.dirtyRatio += i, this.costDirty += n, this.costRender += r, this.costTicker += s, this.totalTime > 500) {
                    var o = Math.round(1e3 * this.totalTick / this.totalTime),
                        h = Math.round(this.drawCalls / this.totalTick),
                        l = Math.round(this.dirtyRatio / this.totalTick),
                        c = Math.round(this.costDirty / this.totalTick),
                        u = Math.round(this.costRender / this.totalTick),
                        d = Math.round(this.costTicker / this.totalTick),
                        p = "FPS: " + o + "\nDraw: " + h + "," + l + "%\nCost: " + d + "," + c + "," + u;
                    this.textField.text != p && (this.textField.text = p, this.updateLayout()), this.totalTick = 0, this.totalTime = this.totalTime % 500, this.drawCalls = 0, this.dirtyRatio = 0, this.costDirty = 0, this.costRender = 0, this.costTicker = 0
                }
            }, i.prototype.updateInfo = function(t) {
                if (this.showLog && this.filter(t)) {
                    var e = this.infoLines;
                    if (t && e.push(t), this.infoText.width = 0 / 0, this.infoText.text = e.join("\n"), this._stage.stageHeight > 0) for (this.infoText.textWidth > this._stage.stageWidth - 20 && (this.infoText.width = this._stage.stageWidth - 20); this.infoText.textHeight > this._stage.stageHeight - 20;) e.shift(), this.infoText.text = e.join("\n");
                    this.updateLayout()
                }
            }, i.prototype.updateLayout = function() {
                if (this.showFPS && (this.infoText.y = this.textField.height + 20), t.Capabilities.runtimeType != t.RuntimeType.NATIVE) {
                    var e = this.shape.$graphics.$renderContext;
                    e.clear(), e.fillStyle = "rgba(68,68,68," + (this.styles.bgAlpha || .9) + ")", e.fillRect(0, 0, Math.max(160, this.width + 20), this.height + 20)
                }
            }, i
        }(t.Sprite), t.warn = function() {
            console.warn.apply(console, a(arguments))
        }, t.error = function() {
            console.error.apply(console, a(arguments))
        }, t.assert = function() {
            console.assert.apply(console, a(arguments))
        }, t.log = function() {
            console.log.apply(console, a(arguments))
        }
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        var i = [],
            n = function() {
                function t() {
                    this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.width = 0, this.height = 0, this.area = 0, this.moved = !1
                }
                var e = t;
                return p = e.prototype, t.release = function(t) {
                    i.push(t)
                }, t.create = function() {
                    var e = i.pop();
                    return e || (e = new t), e
                }, p.setTo = function(t, e, i, n) {
                    return this.minX = t, this.minY = e, this.maxX = i, this.maxY = n, this.updateArea(), this
                }, p.updateArea = function() {
                    this.width = this.maxX - this.minX, this.height = this.maxY - this.minY, this.area = this.width * this.height
                }, p.union = function(t) {
                    this.minX > t.minX && (this.minX = t.minX), this.minY > t.minY && (this.minY = t.minY), this.maxX < t.maxX && (this.maxX = t.maxX), this.maxY < t.maxY && (this.maxY = t.maxY), this.updateArea()
                }, p.intersect = function(t) {
                    return this.minX < t.minX && (this.minX = t.minX), this.maxX > t.maxX && (this.maxX = t.maxX), this.minX >= this.maxX ? void this.setEmpty() : (this.minY < t.minY && (this.minY = t.minY), this.maxY > t.maxY && (this.maxY = t.maxY), this.minY >= this.maxY ? void this.setEmpty() : void this.updateArea())
                }, p.setEmpty = function() {
                    this.minX = 0, this.minY = 0, this.maxX = 0, this.maxY = 0, this.width = 0, this.height = 0, this.area = 0
                }, p.isEmpty = function() {
                    return this.width <= 0 || this.height <= 0
                }, p.intersects = function(t) {
                    if (this.isEmpty()) return !1;
                    var e = this.minX > t.minX ? this.minX : t.minX,
                        i = this.maxX < t.maxX ? this.maxX : t.maxX;
                    return e > i ? !1 : (e = this.minY > t.minY ? this.minY : t.minY, i = this.maxY < t.maxY ? this.maxY : t.maxY, i >= e)
                }, p.updateRegion = function(t, e) {
                    var i, n, r, s, a = e,
                        o = a.a,
                        h = a.b,
                        l = a.c,
                        c = a.d,
                        u = a.tx,
                        d = a.ty,
                        p = t.x,
                        f = t.y,
                        g = p + t.width,
                        $ = f + t.height;
                    if (1 == o && 0 == h && 0 == l && 1 == c) i = Math.floor(p + u) - 1, n = Math.floor(f + d) - 1, r = Math.ceil(g + u) + 1, s = Math.ceil($ + d) + 1;
                    else {
                        var v = o * p + l * f + u,
                            y = h * p + c * f + d,
                            x = o * g + l * f + u,
                            m = h * g + c * f + d,
                            T = o * g + l * $ + u,
                            _ = h * g + c * $ + d,
                            b = o * p + l * $ + u,
                            C = h * p + c * $ + d,
                            F = 0;
                        v > x && (F = v, v = x, x = F), T > b && (F = T, T = b, b = F), i = Math.floor(T > v ? v : T) - 1, r = Math.ceil(x > b ? x : b) + 1, y > m && (F = y, y = m, m = F), _ > C && (F = _, _ = C, C = F), n = Math.floor(_ > y ? y : _) - 1, s = Math.ceil(m > C ? m : C) + 1
                    }
                    this.minX = i, this.minY = n, this.maxX = r, this.maxY = s, this.width = r - i, this.height = s - n, this.area = this.width * this.height
                }, t
            }();
        e.Region = n, t.registerClass(n, "egret.sys.Region")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        var i = function(e) {
                function i() {
                    e.call(this)
                }
                __extends(i, e);
                var n = i;
                return p = n.prototype, p.calculateStageSize = function(e, i, n, r, s) {
                    var a = i,
                        o = n,
                        h = r,
                        l = s,
                        c = i / h || 0,
                        u = n / l || 0;
                    switch (e) {
                    case t.StageScaleMode.EXACT_FIT:
                        break;
                    case t.StageScaleMode.FIXED_HEIGHT:
                        h = Math.round(i / u);
                        break;
                    case t.StageScaleMode.FIXED_WIDTH:
                        l = Math.round(n / c);
                        break;
                    case t.StageScaleMode.NO_BORDER:
                        c > u ? o = Math.round(l * c) : a = Math.round(h * u);
                        break;
                    case t.StageScaleMode.SHOW_ALL:
                        c > u ? a = Math.round(h * u) : o = Math.round(l * c);
                        break;
                    case t.StageScaleMode.FIXED_NARROW:
                        c > u ? h = Math.round(i / u) : l = Math.round(n / c);
                        break;
                    case t.StageScaleMode.FIXED_WIDE:
                        c > u ? l = Math.round(n / c) : h = Math.round(i / u);
                        break;
                    default:
                        h = i, l = n
                    }
                    return {
                        stageWidth: h,
                        stageHeight: l,
                        displayWidth: a,
                        displayHeight: o
                    }
                }, i
            }(t.HashObject);
        e.ScreenAdapter = i, t.registerClass(i, "egret.sys.ScreenAdapter", ["egret.sys.IScreenAdapter"])
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.NO_SCALE = "noScale", t.SHOW_ALL = "showAll", t.NO_BORDER = "noBorder", t.EXACT_FIT = "exactFit", t.FIXED_WIDTH = "fixedWidth", t.FIXED_HEIGHT = "fixedHeight", t.FIXED_NARROW = "fixedNarrow", t.FIXED_WIDE = "fixedWide", t
        }();
    t.StageScaleMode = e, t.registerClass(e, "egret.StageScaleMode")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(e) {
        e.$START_TIME = 0, e.$invalidateRenderFlag = !1, e.$requestRenderingFlag = !1;
        var i = function() {
                function i() {
                    this.playerList = [], this.callBackList = [], this.thisObjectList = [], this.$frameRate = 30, this.frameInterval = 2e3, this.lastCount = 2e3, this.costEnterFrame = 0, e.$START_TIME = Date.now()
                }
                var n = i;
                return p = n.prototype, p.$addPlayer = function(t) {
                    -1 == this.playerList.indexOf(t) && (this.playerList = this.playerList.concat(), this.playerList.push(t))
                }, p.$removePlayer = function(t) {
                    var e = this.playerList.indexOf(t);
                    if (-1 !== e) {
                        this.playerList = this.playerList.concat(), this.playerList.splice(e, 1)
                    }
                }, p.$startTick = function(t, e) {
                    var i = this.getTickIndex(t, e); - 1 == i && (this.concatTick(), this.callBackList.push(t), this.thisObjectList.push(e))
                }, p.$stopTick = function(t, e) {
                    var i = this.getTickIndex(t, e); - 1 != i && (this.concatTick(), this.callBackList.splice(i, 1), this.thisObjectList.splice(i, 1))
                }, p.getTickIndex = function(t, e) {
                    for (var i = this.callBackList, n = this.thisObjectList, r = i.length - 1; r >= 0; r--) if (i[r] == t && n[r] == e) return r;
                    return -1
                }, p.concatTick = function() {
                    this.callBackList = this.callBackList.concat(), this.thisObjectList = this.thisObjectList.concat()
                }, p.$setFrameRate = function(e) {
                    return e = +e || 0, 0 >= e ? !1 : this.$frameRate == e ? !1 : (this.$frameRate = e, e > 60 && (e = 60), t.Capabilities.runtimeType == t.RuntimeType.NATIVE && (egret_native.setFrameRate(e), e = 60), this.lastCount = this.frameInterval = Math.round(6e4 / e), !0)
                }, p.update = function() {
                    for (var i = t.getTimer(), n = this.callBackList, r = this.thisObjectList, s = n.length, a = e.$requestRenderingFlag, o = t.getTimer(), h = 0; s > h; h++) n[h].call(r[h], o) && (a = !0);
                    this.lastCount -= 1e3;
                    var l = t.getTimer();
                    if (this.lastCount > 0) return void(a && this.render(!1, this.costEnterFrame + l - i));
                    this.lastCount += this.frameInterval, this.render(!0, this.costEnterFrame + l - i);
                    var c = t.getTimer();
                    this.broadcastEnterFrame();
                    var u = t.getTimer();
                    this.costEnterFrame = u - c
                }, p.render = function(t, i) {
                    var n = this.playerList,
                        r = n.length;
                    if (0 != r) {
                        e.$invalidateRenderFlag && (this.broadcastRender(), e.$invalidateRenderFlag = !1);
                        for (var s = 0; r > s; s++) n[s].$render(t, i);
                        e.$requestRenderingFlag = !1
                    }
                }, p.broadcastEnterFrame = function() {
                    var e = t.DisplayObject.$enterFrameCallBackList,
                        i = e.length;
                    if (0 != i) {
                        e = e.concat();
                        for (var n = 0; i > n; n++) e[n].dispatchEventWith(t.Event.ENTER_FRAME)
                    }
                }, p.broadcastRender = function() {
                    var e = t.DisplayObject.$renderCallBackList,
                        i = e.length;
                    if (0 != i) {
                        e = e.concat();
                        for (var n = 0; i > n; n++) e[n].dispatchEventWith(t.Event.RENDER)
                    }
                }, i
            }();
        e.SystemTicker = i, t.registerClass(i, "egret.sys.SystemTicker"), e.$ticker = new e.SystemTicker
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret_stages, egret;
!
function(t) {
    var e;
    !
    function(e) {
        var i = function(e) {
                function i(t) {
                    e.call(this), this.maxTouches = 0, this.useTouchesCount = 0, this.touchDownTarget = {}, this.lastTouchX = -1, this.lastTouchY = -1, this.stage = t
                }
                __extends(i, e);
                var n = i;
                return p = n.prototype, p.$initMaxTouches = function() {
                    this.maxTouches = this.stage.$maxTouches
                }, p.onTouchBegin = function(e, i, n) {
                    if (!(this.useTouchesCount >= this.maxTouches)) {
                        this.lastTouchX = e, this.lastTouchY = i;
                        var r = this.findTarget(e, i);
                        null == this.touchDownTarget[n] && (this.touchDownTarget[n] = r, this.useTouchesCount++), t.TouchEvent.dispatchTouchEvent(r, t.TouchEvent.TOUCH_BEGIN, !0, !0, e, i, n, !0)
                    }
                }, p.onTouchMove = function(e, i, n) {
                    if (null != this.touchDownTarget[n] && (this.lastTouchX != e || this.lastTouchY != i)) {
                        this.lastTouchX = e, this.lastTouchY = i;
                        var r = this.findTarget(e, i);
                        t.TouchEvent.dispatchTouchEvent(r, t.TouchEvent.TOUCH_MOVE, !0, !0, e, i, n, !0)
                    }
                }, p.onTouchEnd = function(e, i, n) {
                    if (null != this.touchDownTarget[n]) {
                        var r = this.findTarget(e, i),
                            s = this.touchDownTarget[n];
                        delete this.touchDownTarget[n], this.useTouchesCount--, t.TouchEvent.dispatchTouchEvent(r, t.TouchEvent.TOUCH_END, !0, !0, e, i, n, !1), s == r ? t.TouchEvent.dispatchTouchEvent(r, t.TouchEvent.TOUCH_TAP, !0, !0, e, i, n, !1) : t.TouchEvent.dispatchTouchEvent(s, t.TouchEvent.TOUCH_RELEASE_OUTSIDE, !0, !0, e, i, n, !1)
                    }
                }, p.findTarget = function(t, e) {
                    var i = this.stage.$hitTest(t, e);
                    return i || (i = this.stage), i
                }, i
            }(t.HashObject);
        e.TouchHandler = i, t.registerClass(i, "egret.sys.TouchHandler")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    t.DeviceOrientation = null
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.WEB = "web", t.NATIVE = "native", t
        }();
    t.RuntimeType = e, t.registerClass(e, "egret.RuntimeType");
    var i = function() {
            function t() {}
            var e = __define,
                i = t;
            return p = i.prototype, e(t, "language", function() {
                return t.$language
            }), e(t, "isMobile", function() {
                return t.$isMobile
            }), e(t, "os", function() {
                return t.$os
            }), e(t, "runtimeType", function() {
                return t.$runtimeType
            }), t.$setNativeCapabilities = function(e) {
                var i = e.split("-");
                if (i.length <= 4) {
                    var n = i[0];
                    switch (n) {
                    case "android":
                        n = "Android";
                        break;
                    case "ios":
                        n = "iOS"
                    }
                    t.$os = n;
                    var r = i[2].substring(1, i[2].length);
                    t.supportVersion = r
                }
            }, t.$language = "zh-CN", t.$os = "Unknown", t.$runtimeType = "Unknown", t.supportVersion = "Unknown", t
        }();
    t.Capabilities = i, t.registerClass(i, "egret.Capabilities")
}(egret || (egret = {}));
var testDeviceType = function() {
        if (!this.navigator) return !0;
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("mobile") || -1 != t.indexOf("android")
    },
    testRuntimeType = function() {
        return this.navigator ? !0 : !1
    };
egret.Capabilities.$isMobile = testDeviceType(), egret.Capabilities.$runtimeType = testRuntimeType() ? egret.RuntimeType.WEB : egret.RuntimeType.NATIVE;
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i) {
                e.call(this, t), this.firstCharHeight = 0, "string" == typeof i ? this.charList = this.parseConfig(i) : i && i.hasOwnProperty("frames") ? this.charList = i.frames : this.charList = {}
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, p.getTexture = function(t) {
                var e = this._textureMap[t];
                if (!e) {
                    var i = this.charList[t];
                    if (!i) return null;
                    e = this.createTexture(t, i.x, i.y, i.w, i.h, i.offX, i.offY, i.sourceW, i.sourceH), this._textureMap[t] = e
                }
                return e
            }, p._getFirstCharHeight = function() {
                if (0 == this.firstCharHeight) for (var e in this.charList) {
                    var i = this.charList[e];
                    if (i) {
                        var n = i.sourceH;
                        if (t.sys.isUndefined(n)) {
                            var r = i.h;
                            void 0 === r && (r = 0);
                            var s = i.offY;
                            t.sys.isUndefined(s) && (s = 0), n = r + s
                        }
                        if (0 >= n) continue;
                        this.firstCharHeight = n;
                        break
                    }
                }
                return this.firstCharHeight
            }, p.parseConfig = function(t) {
                t = t.split("\r\n").join("\n");
                for (var e = t.split("\n"), i = this.getConfigByKey(e[3], "count"), n = {}, r = 4; 4 + i > r; r++) {
                    var s = e[r],
                        a = String.fromCharCode(this.getConfigByKey(s, "id")),
                        o = {};
                    n[a] = o, o.x = this.getConfigByKey(s, "x"), o.y = this.getConfigByKey(s, "y"), o.w = this.getConfigByKey(s, "width"), o.h = this.getConfigByKey(s, "height"), o.offX = this.getConfigByKey(s, "xoffset"), o.offY = this.getConfigByKey(s, "yoffset")
                }
                return n
            }, p.getConfigByKey = function(t, e) {
                for (var i = t.split(" "), n = 0, r = i.length; r > n; n++) {
                    var s = i[n];
                    if (e == s.substring(0, e.length)) {
                        var a = s.substring(e.length + 1);
                        return parseInt(a)
                    }
                }
                return 0
            }, i
        }(t.SpriteSheet);
    t.BitmapFont = e, t.registerClass(e, "egret.BitmapFont")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$textOffsetX = 0, this.$textOffsetY = 0, this.$textStartX = 0, this.$textStartY = 0, this.$lineHeights = [], this.$renderRegion = new t.sys.Region, this.$BitmapText = {
                    0: 0 / 0,
                    1: 0 / 0,
                    2: "",
                    3: 0,
                    4: 0,
                    5: null,
                    6: !1,
                    7: !1,
                    8: !1,
                    9: !1,
                    10: "left",
                    11: "top"
                }
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "text", function() {
                return this.$BitmapText[2]
            }, function(t) {
                this.$setText(t)
            }), p.$setText = function(t) {
                var e = this.$BitmapText;
                return t == e[2] ? !1 : (e[2] = t, this.$invalidateContentBounds(), !0)
            }, p.$getWidth = function() {
                var t = this.$BitmapText[0];
                return isNaN(t) ? this.$getContentBounds().width : t
            }, p.$setWidth = function(t) {
                var e = this.$BitmapText;
                return 0 > t || t == e[0] ? !1 : (e[0] = t, this.$invalidateContentBounds(), !0)
            }, p.$invalidateContentBounds = function() {
                e.prototype.$invalidateContentBounds.call(this), this.$BitmapText[7] = !0
            }, p.$getHeight = function() {
                var t = this.$BitmapText[1];
                return isNaN(t) ? this.$getContentBounds().height : t
            }, p.$setHeight = function(t) {
                var e = this.$BitmapText;
                return 0 > t || t == e[1] ? !1 : (e[1] = t, this.$invalidateContentBounds(), !0)
            }, n(p, "font", function() {
                return this.$BitmapText[5]
            }, function(t) {
                this.$setFont(t)
            }), p.$setFont = function(t) {
                var e = this.$BitmapText;
                return e[5] == t ? !1 : (e[5] = t, this.$BitmapText[6] = !0, this.$invalidateContentBounds(), !0)
            }, n(p, "lineSpacing", function() {
                return this.$BitmapText[3]
            }, function(t) {
                this.$setLineSpacing(t)
            }), p.$setLineSpacing = function(t) {
                t = +t || 0;
                var e = this.$BitmapText;
                return e[3] == t ? !1 : (e[3] = t, this.$invalidateContentBounds(), !0)
            }, n(p, "letterSpacing", function() {
                return this.$BitmapText[4]
            }, function(t) {
                this.$setLetterSpacing(t)
            }), p.$setLetterSpacing = function(t) {
                t = +t || 0;
                var e = this.$BitmapText;
                return e[4] == t ? !1 : (e[4] = t, this.$invalidateContentBounds(), !0)
            }, n(p, "textAlign", function() {
                return this.$BitmapText[10]
            }, function(t) {
                this.$setTextAlign(t)
            }), p.$setTextAlign = function(t) {
                var e = this.$BitmapText;
                return e[10] == t ? !1 : (e[10] = t, this.$invalidateContentBounds(), !0)
            }, n(p, "verticalAlign", function() {
                return this.$BitmapText[11]
            }, function(t) {
                this.$setVerticalAlign(t)
            }), p.$setVerticalAlign = function(t) {
                var e = this.$BitmapText;
                return e[11] == t ? !1 : (e[11] = t, this.$invalidateContentBounds(), !0)
            }, p.$render = function(e) {
                var n = this,
                    r = n.$BitmapText,
                    s = n.$getTextLines(),
                    a = s.length;
                if (0 != a) for (var o = n.$textLinesWidth, h = r[5], l = h._getFirstCharHeight(), c = Math.ceil(l * i.EMPTY_FACTOR), u = !isNaN(r[1]), d = r[8], p = r[0], f = r[1], g = r[10], $ = n.$textOffsetY + n.$textStartY, v = n.$lineHeights, y = 0; a > y; y++) {
                    var x = v[y];
                    if (u && y > 0 && $ + x > f) break;
                    var m = s[y],
                        T = m.length,
                        _ = n.$textOffsetX;
                    if (g != t.HorizontalAlign.LEFT) {
                        var b = p > d ? p : d;
                        g == t.HorizontalAlign.RIGHT ? _ += b - o[y] : g == t.HorizontalAlign.CENTER && (_ += Math.floor((b - o[y]) / 2))
                    }
                    for (var C = 0; T > C; C++) {
                        var F = m.charAt(C),
                            E = h.getTexture(F);
                        if (E) {
                            var R = E._bitmapWidth,
                                S = E._bitmapHeight;
                            e.drawImage(E._bitmapData, E._bitmapX, E._bitmapY, R, S, _ + E._offsetX, $ + E._offsetY, E.$getScaleBitmapWidth(), E.$getScaleBitmapHeight()), _ += E.$getTextureWidth() + r[4]
                        } else " " == F ? _ += c : t.$warn(1011, F)
                    }
                    $ += x + r[3]
                }
            }, p.$measureContentBounds = function(t) {
                var e = this.$getTextLines();
                0 == e.length ? t.setEmpty() : t.setTo(this.$textOffsetX + this.$textStartX, this.$textOffsetY + this.$textStartY, this.$BitmapText[8] - this.$textOffsetX, this.$BitmapText[9] - this.$textOffsetY)
            }, n(p, "textWidth", function() {
                return this.$getTextLines(), this.$BitmapText[8]
            }), n(p, "textHeight", function() {
                return this.$getTextLines(), this.$BitmapText[9]
            }), p.$getTextLines = function() {
                function e(t) {
                    return $ && s.length > 0 && u > $ ? !1 : (u += R + h, w || L || (S -= l), s.push(t), o.push(R), a.push(S), c = Math.max(S, c), !0)
                }
                var n = this,
                    r = this.$BitmapText;
                if (!r[7]) return n.textLines;
                var s = [];
                n.textLines = s;
                var a = [];
                n.$textLinesWidth = a, r[7] = !1;
                var o = [];
                if (n.$lineHeights = o, !r[2] || !r[5]) return s;
                for (var h = r[3], l = r[4], c = 0, u = 0, d = 0, p = 0, f = !isNaN(r[0]), g = r[0], $ = r[1], v = r[5], y = v._getFirstCharHeight(), x = Math.ceil(y * i.EMPTY_FACTOR), m = r[2], T = m.split(/(?:\r\n|\r|\n)/), _ = T.length, b = !0, C = 0; _ > C; C++) {
                    for (var F = T[C], E = F.length, R = 0, S = 0, w = !0, L = !1, O = 0; E > O; O++) {
                        w || (S += l);
                        var M, D, I = F.charAt(O),
                            A = 0,
                            N = 0,
                            B = v.getTexture(I);
                        if (B) M = B.$getTextureWidth(), D = B.$getTextureHeight(), A = B._offsetX, N = B._offsetY;
                        else {
                            if (" " != I) {
                                t.$warn(1011, I), w && (w = !1);
                                continue
                            }
                            M = x, D = y
                        }
                        if (w && (w = !1, d = Math.min(A, d)), b && (b = !1, p = Math.min(N, p)), f && O > 0 && S + M > g) {
                            if (!e(F.substring(0, O))) break;
                            F = F.substring(O), E = F.length, O = 0, S = M, R = D
                        } else S += M, R = Math.max(D, R)
                    }
                    if ($ && C > 0 && u > $) break;
                    if (L = !0, !e(F)) break
                }
                u -= h, r[8] = c, r[9] = u, n.$textOffsetX = d, n.$textOffsetY = p, n.$textStartX = 0, n.$textStartY = 0;
                var P;
                return g > c && (P = r[10], P == t.HorizontalAlign.RIGHT ? n.$textStartX = g - c : P == t.HorizontalAlign.CENTER && (n.$textStartX = Math.floor((g - c) / 2))), $ > u && (P = r[11], P == t.VerticalAlign.BOTTOM ? n.$textStartY = $ - u : P == t.VerticalAlign.MIDDLE && (n.$textStartY = Math.floor(($ - u) / 2))), s
            }, i.EMPTY_FACTOR = .33, i
        }(t.DisplayObject);
    t.BitmapText = e, t.registerClass(e, "egret.BitmapText")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.LEFT = "left", t.RIGHT = "right", t.CENTER = "center", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
        }();
    t.HorizontalAlign = e, t.registerClass(e, "egret.HorizontalAlign")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function e() {
                this.replaceArr = [], this.resutlArr = [], this.initReplaceArr()
            }
            var i = e;
            return p = i.prototype, p.initReplaceArr = function() {
                this.replaceArr = [], this.replaceArr.push([/&lt;/g, "<"]), this.replaceArr.push([/&gt;/g, ">"]), this.replaceArr.push([/&amp;/g, "&"]), this.replaceArr.push([/&quot;/g, '"']), this.replaceArr.push([/&apos;/g, "'"])
            }, p.replaceSpecial = function(t) {
                for (var e = 0; e < this.replaceArr.length; e++) {
                    var i = this.replaceArr[e][0],
                        n = this.replaceArr[e][1];
                    t = t.replace(i, n)
                }
                return t
            }, p.parser = function(e) {
                this.stackArray = [], this.resutlArr = [];
                for (var i = 0, n = e.length; n > i;) {
                    var r = e.indexOf("<", i);
                    if (0 > r) this.addToResultArr(e.substring(i)), i = n;
                    else {
                        this.addToResultArr(e.substring(i, r));
                        var s = e.indexOf(">", r); - 1 == s ? (t.$error(1038), s = r) : "/" == e.charAt(r + 1) ? this.stackArray.pop() : this.addToArray(e.substring(r + 1, s)), i = s + 1
                    }
                }
                return this.resutlArr
            }, p.addToResultArr = function(t) {
                "" != t && (t = this.replaceSpecial(t), this.stackArray.length > 0 ? this.resutlArr.push({
                    text: t,
                    style: this.stackArray[this.stackArray.length - 1]
                }) : this.resutlArr.push({
                    text: t
                }))
            }, p.changeStringToObject = function(t) {
                t = t.trim();
                var e = {},
                    i = [];
                if ("i" == t.charAt(0) || "b" == t.charAt(0) || "u" == t.charAt(0)) this.addProperty(e, t, "true");
                else if (i = t.match(/^(font|a)\s/)) {
                    t = t.substring(i[0].length).trim();
                    for (var n, r = 0; n = t.match(this.getHeadReg());) {
                        var s = n[0],
                            a = "",
                            t = t.substring(s.length).trim();
                        if ('"' == t.charAt(0)) {
                            var r = t.indexOf('"', 1);
                            a = t.substring(1, r), r += 1
                        } else if ("'" == t.charAt(0)) {
                            var r = t.indexOf("'", 1);
                            a = t.substring(1, r), r += 1
                        } else a = t.match(/(\S)+/)[0], r = a.length;
                        this.addProperty(e, s.substring(0, s.length - 1).trim(), a.trim()), t = t.substring(r).trim()
                    }
                }
                return e
            }, p.getHeadReg = function() {
                return /^(color|textcolor|strokecolor|stroke|b|bold|i|italic|u|size|fontfamily|href|target)(\s)*=/
            }, p.addProperty = function(t, e, i) {
                switch (e.toLowerCase()) {
                case "color":
                case "textcolor":
                    i = i.replace(/#/, "0x"), t.textColor = parseInt(i);
                    break;
                case "strokecolor":
                    i = i.replace(/#/, "0x"), t.strokeColor = parseInt(i);
                    break;
                case "stroke":
                    t.stroke = parseInt(i);
                    break;
                case "b":
                case "bold":
                    t.bold = "true" == i;
                    break;
                case "u":
                    t.underline = "true" == i;
                    break;
                case "i":
                case "italic":
                    t.italic = "true" == i;
                    break;
                case "size":
                    t.size = parseInt(i);
                    break;
                case "fontfamily":
                    t.fontFamily = i;
                    break;
                case "href":
                    t.href = this.replaceSpecial(i);
                    break;
                case "target":
                    t.target = this.replaceSpecial(i)
                }
            }, p.addToArray = function(t) {
                var e = this.changeStringToObject(t);
                if (0 == this.stackArray.length) this.stackArray.push(e);
                else {
                    var i = this.stackArray[this.stackArray.length - 1];
                    for (var n in i) null == e[n] && (e[n] = i[n]);
                    this.stackArray.push(e)
                }
            }, e
        }();
    t.HtmlTextParser = e, t.registerClass(e, "egret.HtmlTextParser")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this._text = null, this._isFocus = !1
            }
            __extends(i, e);
            var n = i;
            return p = n.prototype, p.init = function(e) {
                this._text = e, this.stageText = new t.StageText, this.stageText.$setTextField(this._text)
            }, p._addStageText = function() {
                this._text.$inputEnabled || (this._text.$touchEnabled = !0), this.stageText.$addToStage(), this.stageText.addEventListener("updateText", this.updateTextHandler, this), this._text.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this.stageText.addEventListener("blur", this.blurHandler, this), this.stageText.addEventListener("focus", this.focusHandler, this)
            }, p._removeStageText = function() {
                this._text.$inputEnabled || (this._text.$touchEnabled = !1), this.stageText.$removeFromStage(), this.stageText.removeEventListener("updateText", this.updateTextHandler, this), this._text.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this._text.stage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this.stageText.removeEventListener("blur", this.blurHandler, this), this.stageText.removeEventListener("focus", this.focusHandler, this)
            }, p._getText = function() {
                return this.stageText.$getText()
            }, p._setText = function(t) {
                this.stageText.$setText(t)
            }, p._setColor = function(t) {
                this.stageText.$setColor(t)
            }, p.focusHandler = function(e) {
                this._isFocus || (this._isFocus = !0, e.showing || (this._text.$isTyping = !0), this._text.$invalidateContentBounds(), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_IN, !0)))
            }, p.blurHandler = function(e) {
                this._isFocus && (this._isFocus = !1, this._text.stage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this._text.$isTyping = !1, this._text.$invalidateContentBounds(), this.stageText.$onBlur(), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_OUT, !0)))
            }, p.onMouseDownHandler = function(e) {
                e.stopPropagation();
                this._text.visible && (this._isFocus || (this._text.stage.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this.stageText.$show()))
            }, p.onStageDownHandler = function(t) {
                this.stageText.$hide()
            }, p.updateTextHandler = function(e) {
                var i = this._text.$TextField,
                    n = this.stageText.$getText(),
                    r = !1;
                if (null != i[35]) {
                    var s = new RegExp("[" + i[35] + "]", "g"),
                        a = n.match(s);
                    n = a ? a.join("") : "", r = !0
                }
                null != i[36] && (s = new RegExp("[^" + i[36] + "]", "g"), a = n.match(s), n = a ? a.join("") : "", r = !0), r && this.stageText.$getText() != n && this.stageText.$setText(n), this.resetText(), this._text.dispatchEvent(new t.Event(t.Event.CHANGE, !0))
            }, p.resetText = function() {
                this._text.$setBaseText(this.stageText.$getText())
            }, p._hideInput = function() {
                this.stageText.$removeFromStage()
            }, p.updateInput = function() {
                !this._text.$visible && this.stageText && this._hideInput()
            }, p._updateProperties = function() {
                if (this._isFocus) return this.stageText.$resetStageText(), void this.updateInput();
                var t = this._text.$stage;
                if (null == t);
                else for (var e = this._text, i = e.$visible;;) {
                    if (!i) break;
                    if (e = e.parent, e == t) break;
                    i = e.$visible
                }
                this.stageText.$setText(this._text.$TextField[13]), this.stageText.$resetStageText(), this.updateInput()
            }, i
        }(t.HashObject);
    t.InputController = e, t.registerClass(e, "egret.InputController")
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, n, r, s, a, o, h) {
        void 0 === h && (h = null), i(e, n, h), h = h || {};
        var l;
        l = null != h.textColor ? t.toColorString(h.textColor) : n.$TextField[11];
        var c;
        c = null != h.strokeColor ? t.toColorString(h.strokeColor) : n.$TextField[26];
        var u;
        u = null != h.stroke ? h.stroke : n.$TextField[27], e.fillStyle = l, e.strokeStyle = c, u && (e.lineWidth = 2 * u, e.strokeText(r, s, a, o || 65535)), e.fillText(r, s, a, o || 65535)
    }

    function i(t, e, i) {
        void 0 === i && (i = null), i = i || {};
        var n = null == i.italic ? e.$TextField[16] : i.italic,
            s = null == i.bold ? e.$TextField[15] : i.bold,
            a = null == i.size ? e.$TextField[0] : i.size,
            o = i.fontFamily || e.$TextField[8] || r.default_fontFamily,
            h = n ? "italic " : "normal ";
        h += s ? "bold " : "normal ", h += a + "px " + o, t.font = h, t.textAlign = "left", t.textBaseline = "middle"
    }
    var n = new RegExp("(?=[\¿-\῿\Ⰰ-\퟿]|\\b|\\s)(?![。，！、》…）)}”】\\.\\,\\!\\?\\]\\:])"),
        r = function(r) {
            function s() {
                r.call(this), this.$inputEnabled = !1, this.inputUtils = null, this.bgGraphics = null, this.isFlow = !1, this.textArr = [], this.linesArr = [], this.$isTyping = !1, this.drawTempArray = [], this.$renderRegion = new t.sys.Region, this.$TextField = {
                    0: 30,
                    1: 0,
                    2: 16777215,
                    3: 0 / 0,
                    4: 0 / 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: s.default_fontFamily,
                    9: "left",
                    10: "top",
                    11: "#ffffff",
                    12: "",
                    13: "",
                    14: [],
                    15: !1,
                    16: !1,
                    17: !0,
                    18: !1,
                    19: !1,
                    20: !1,
                    21: 0,
                    22: 0,
                    23: 0,
                    24: t.TextFieldType.DYNAMIC,
                    25: 0,
                    26: "#000000",
                    27: 0,
                    28: -1,
                    29: 0,
                    30: !1,
                    31: !1,
                    32: 0,
                    33: !1,
                    34: 16777215,
                    35: null,
                    36: null
                }
            }
            __extends(s, r);
            var a = __define,
                o = s;
            return p = o.prototype, p.isInput = function() {
                return this.$TextField[24] == t.TextFieldType.INPUT
            }, p.$setTouchEnabled = function(t) {
                var e = r.prototype.$setTouchEnabled.call(this, t);
                return this.isInput() && (this.$inputEnabled = !0), e
            }, a(p, "fontFamily", function() {
                return this.$TextField[8]
            }, function(t) {
                this.$setFontFamily(t)
            }), p.$setFontFamily = function(t) {
                var e = this.$TextField;
                return e[8] == t ? !1 : (e[8] = t, this.invalidateFontString(), !0)
            }, a(p, "size", function() {
                return this.$TextField[0]
            }, function(t) {
                this.$setSize(t)
            }), p.$setSize = function(e) {
                e = t.sys.getNumber(e);
                var i = this.$TextField;
                return i[0] == e ? !1 : (i[0] = e, this.invalidateFontString(), !0)
            }, a(p, "bold", function() {
                return this.$TextField[15]
            }, function(t) {
                this.$setBold(t)
            }), p.$setBold = function(t) {
                t = !! t;
                var e = this.$TextField;
                return t == e[15] ? !1 : (e[15] = t, this.invalidateFontString(), !0)
            }, a(p, "italic", function() {
                return this.$TextField[16]
            }, function(t) {
                this.$setItalic(t)
            }), p.$setItalic = function(t) {
                t = !! t;
                var e = this.$TextField;
                return t == e[16] ? !1 : (e[16] = t, this.invalidateFontString(), !0)
            }, p.invalidateFontString = function() {
                this.$TextField[17] = !0, this.$invalidateTextField()
            }, p.getFontString = function() {
                var e = this.$TextField;
                return e[17] && (e[17] = !1, e[12] = t.sys.toFontString(this)), e[12]
            }, a(p, "textAlign", function() {
                return this.$TextField[9]
            }, function(t) {
                this.$setTextAlign(t)
            }), p.$setTextAlign = function(t) {
                var e = this.$TextField;
                return e[9] == t ? !1 : (e[9] = t, this.$invalidateTextField(), !0)
            }, a(p, "verticalAlign", function() {
                return this.$TextField[10]
            }, function(t) {
                this.$setVerticalAlign(t)
            }), p.$setVerticalAlign = function(t) {
                var e = this.$TextField;
                return e[10] == t ? !1 : (e[10] = t, this.$invalidateTextField(), !0)
            }, a(p, "lineSpacing", function() {
                return this.$TextField[1]
            }, function(t) {
                this.$setLineSpacing(t)
            }), p.$setLineSpacing = function(e) {
                e = t.sys.getNumber(e);
                var i = this.$TextField;
                return i[1] == e ? !1 : (i[1] = e, this.$invalidateTextField(), !0)
            }, a(p, "textColor", function() {
                return this.$TextField[2]
            }, function(t) {
                this.$setTextColor(t)
            }), p.$setTextColor = function(e) {
                e = 0 | +e;
                var i = this.$TextField;
                return i[2] == e ? !1 : (i[2] = e, i[11] = t.toColorString(e), this.inputUtils && this.inputUtils._setColor(this.$TextField[2]), this.$invalidate(), !0)
            }, a(p, "wordWrap", function() {
                return this.$TextField[19]
            }, function(t) {
                t = !! t;
                var e = this.$TextField;
                t != e[19] && (e[20] || (e[19] = t, this.$invalidateTextField()))
            }), a(p, "type", function() {
                return this.$TextField[24]
            }, function(t) {
                this.$setType(t)
            }), p.$setType = function(e) {
                return this.$TextField[24] != e ? (this.$TextField[24] = e, e == t.TextFieldType.INPUT ? (isNaN(this.$TextField[3]) && this.$setWidth(100), isNaN(this.$TextField[4]) && this.$setHeight(30), this.$setTouchEnabled(!0), null == this.inputUtils && (this.inputUtils = new t.InputController), this.inputUtils.init(this), this.$invalidateTextField(), this.$stage && this.inputUtils._addStageText()) : (this.inputUtils && (this.inputUtils._removeStageText(), this.inputUtils = null), this.$setTouchEnabled(!1)), !0) : !1
            }, a(p, "text", function() {
                return this.$getText()
            }, function(t) {
                this.$setText(t)
            }), p.$getText = function() {
                return this.$TextField[24] == t.TextFieldType.INPUT ? this.inputUtils._getText() : this.$TextField[13]
            }, p.$setBaseText = function(t) {
                if (null == t && (t = ""), t = t.toString(), this.isFlow = !1, this.$TextField[13] != t) {
                    this.$invalidateTextField(), this.$TextField[13] = t;
                    var e = "";
                    return e = this.$TextField[20] ? this.changeToPassText(t) : t, this.setMiddleStyle([{
                        text: e
                    }]), !0
                }
                return !1
            }, p.$setText = function(t) {
                null == t && (t = "");
                var e = this.$setBaseText(t);
                return this.inputUtils && this.inputUtils._setText(this.$TextField[13]), e
            }, a(p, "displayAsPassword", function() {
                return this.$TextField[20]
            }, function(t) {
                this.$setDisplayAsPassword(t)
            }), p.$setDisplayAsPassword = function(t) {
                if (this.$TextField[20] != t) {
                    this.$TextField[20] = t, this.$invalidateTextField();
                    var e = "";
                    return e = t ? this.changeToPassText(this.$TextField[13]) : this.$TextField[13], this.setMiddleStyle([{
                        text: e
                    }]), !0
                }
                return !1
            }, a(p, "strokeColor", function() {
                return this.$TextField[25]
            }, function(t) {
                this.$setStrokeColor(t)
            }), p.$setStrokeColor = function(e) {
                return this.$TextField[25] != e ? (this.$invalidateTextField(), this.$TextField[25] = e, this.$TextField[26] = t.toColorString(e), !0) : !1
            }, a(p, "stroke", function() {
                return this.$TextField[27]
            }, function(t) {
                this.$setStroke(t)
            }), p.$setStroke = function(t) {
                return this.$TextField[27] != t ? (this.$invalidateTextField(), this.$TextField[27] = t, !0) : !1
            }, a(p, "maxChars", function() {
                return this.$TextField[21]
            }, function(t) {
                this.$setMaxChars(t)
            }), p.$setMaxChars = function(t) {
                return this.$TextField[21] != t ? (this.$TextField[21] = t, !0) : !1
            }, a(p, "scrollV", function() {
                return Math.min(Math.max(this.$TextField[28], 1), this.maxScrollV)
            }, function(t) {
                this.$TextField[28] = Math.max(t, 1), this.$invalidateTextField()
            }), a(p, "maxScrollV", function() {
                return this.$getLinesArr(), Math.max(this.$TextField[29] - t.TextFieldUtils.$getScrollNum(this) + 1, 1)
            }), a(p, "selectionBeginIndex", function() {
                return 0
            }), a(p, "selectionEndIndex", function() {
                return 0
            }), a(p, "caretIndex", function() {
                return 0
            }), p.$setSelection = function(t, e) {
                return !1
            }, p.$getLineHeight = function() {
                return this.$TextField[1] + this.$TextField[0]
            }, a(p, "numLines", function() {
                return this.$getLinesArr(), this.$TextField[29]
            }), a(p, "multiline", function() {
                return this.$TextField[30]
            }, function(t) {
                this.$setMultiline(t)
            }), p.$setMultiline = function(t) {
                return this.$TextField[30] = t, this.$invalidateTextField(), !0
            }, a(p, "restrict", function() {
                var t = this.$TextField,
                    e = null;
                return null != t[35] && (e = t[35]), null != t[36] && (null == e && (e = ""), e += "^" + t[36]), e
            }, function(t) {
                var e = this.$TextField;
                if (null == t) e[35] = null, e[36] = null;
                else {
                    for (var i = -1; i < t.length && (i = t.indexOf("^", i), 0 != i) && i > 0 && "\\" == t.charAt(i - 1);) i++;
                    0 == i ? (e[35] = null, e[36] = t.substring(i + 1)) : i > 0 ? (e[35] = t.substring(0, i), e[36] = t.substring(i + 1)) : (e[35] = t, e[36] = null)
                }
            }), p.$setWidth = function(t) {
                var e = this.$TextField;
                if (isNaN(t)) {
                    if (isNaN(e[3])) return !1;
                    e[3] = 0 / 0
                } else {
                    if (e[3] == t) return !1;
                    e[3] = t
                }
                return t = +t, 0 > t ? !1 : (this.$invalidateTextField(), !0)
            }, p.$setHeight = function(t) {
                var e = this.$TextField;
                if (isNaN(t)) {
                    if (isNaN(e[4])) return !1;
                    e[4] = 0 / 0
                } else {
                    if (e[4] == t) return !1;
                    e[4] = t
                }
                return t = +t, 0 > t ? !1 : (this.$invalidateTextField(), !0)
            }, p.$getWidth = function() {
                var t = this.$TextField;
                return isNaN(t[3]) ? this.$getContentBounds().width : t[3]
            }, p.$getHeight = function() {
                var t = this.$TextField;
                return isNaN(t[4]) ? this.$getContentBounds().height : t[4]
            }, a(p, "border", function() {
                return this.$TextField[31]
            }, function(t) {
                this.$TextField[31] = t, this.fillBackground()
            }), a(p, "borderColor", function() {
                return this.$TextField[32]
            }, function(t) {
                this.$TextField[32] = t, this.fillBackground()
            }), a(p, "background", function() {
                return this.$TextField[33]
            }, function(t) {
                this.$TextField[33] = t, this.fillBackground()
            }), a(p, "backgroundColor", function() {
                return this.$TextField[34]
            }, function(t) {
                this.$TextField[34] = t, this.fillBackground()
            }), p.fillBackground = function() {
                var e = this,
                    i = e.bgGraphics;
                i && i.clear(), (this.$TextField[33] || this.$TextField[31]) && (null == i && (i = e.bgGraphics = new t.Graphics, this.bgGraphics.$renderContext.$targetDisplay = this), this.$TextField[33] && i.beginFill(this.$TextField[34], 1), this.$TextField[31] && i.lineStyle(1, this.$TextField[32]), i.drawRect(0, 0, e.$getWidth(), e.$getHeight()), i.endFill())
            }, p.setFocus = function() {
                t.$warn(1013)
            }, p.$onRemoveFromStage = function() {
                r.prototype.$onRemoveFromStage.call(this), this.removeEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._removeStageText()
            }, p.$onAddToStage = function(e, i) {
                r.prototype.$onAddToStage.call(this, e, i), this.addEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._addStageText()
            }, p.$invalidateTextField = function() {
                this.$invalidateContentBounds(), this.$TextField[18] = !0
            }, p.$update = function(e) {
                var i = this,
                    e = i.$getContentBounds(),
                    n = t.Rectangle.create();
                n.copyFrom(e), i.$TextField[31] && (n.width += 2, n.height += 2);
                var s = 2 * i.$TextField[27];
                s > 0 && (n.width += 2 * s, n.height += 2 * s), n.x -= s, n.y -= s;
                var a = r.prototype.$update.call(this, n);
                return t.Rectangle.release(n), a
            }, p.$measureContentBounds = function(e) {
                var i = this;
                this.$getLinesArr();
                var n = isNaN(this.$TextField[3]) ? this.$TextField[5] : this.$TextField[3],
                    r = isNaN(this.$TextField[4]) ? t.TextFieldUtils.$getTextHeight(i) : this.$TextField[4];
                e.setTo(0, 0, n, r)
            }, p.$render = function(e) {
                if (this.bgGraphics && this.bgGraphics.$render(e), this.$TextField[24] == t.TextFieldType.INPUT) {
                    if ((this.$hasAnyFlags(880) || this.$hasAnyFlags(624)) && this.inputUtils._updateProperties(), this.$isTyping) return
                } else if (0 == this.$TextField[3]) return;
                this.drawText(e)
            }, a(p, "textFlow", function() {
                return this.textArr
            }, function(t) {
                this.isFlow = !0;
                var e = "";
                null == t && (t = []);
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    e += n.text
                }
                this.$TextField[20] ? this.$setBaseText(e) : (this.$TextField[13] = e, this.setMiddleStyle(t))
            }), p.changeToPassText = function(t) {
                if (this.$TextField[20]) {
                    for (var e = "", i = 0, n = t.length; n > i; i++) switch (t.charAt(i)) {
                    case "\n":
                        e += "\n";
                        break;
                    case "\r":
                        break;
                    default:
                        e += "*"
                    }
                    return e
                }
                return t
            }, p.setMiddleStyle = function(t) {
                this.$TextField[18] = !0, this.textArr = t, this.$invalidateTextField()
            }, a(p, "textWidth", function() {
                return this.$getLinesArr(), this.$TextField[5]
            }), a(p, "textHeight", function() {
                return this.$getLinesArr(), t.TextFieldUtils.$getTextHeight(this)
            }), p.appendText = function(t) {
                this.appendElement({
                    text: t
                })
            }, p.appendElement = function(t) {
                var e = this.$TextField[13] + t.text;
                this.$TextField[20] ? this.$setBaseText(e) : (this.$TextField[13] = e, this.textArr.push(t), this.setMiddleStyle(this.textArr))
            }, p.$getLinesArr = function() {
                var e = this;
                if (!e.$TextField[18]) return e.linesArr;
                e.$TextField[18] = !1;
                var r = e.textArr,
                    s = t.sys.sharedRenderContext;
                e.linesArr.length = 0, this.$TextField[6] = 0, this.$TextField[5] = 0;
                var a = this.$TextField[3];
                if (!isNaN(a) && 0 == a) return this.$TextField[29] = 0, [{
                    width: 0,
                    height: 0,
                    charNum: 0,
                    elements: [],
                    hasNextLine: !1
                }];
                e.isFlow || i(s, e);
                for (var o, h = e.linesArr, l = 0, c = 0, u = 0, d = 0, p = 0, f = r.length; f > p; p++) {
                    var g = r[p];
                    g.style = g.style || {};
                    for (var $ = g.text.toString(), v = $.split(/(?:\r\n|\r|\n)/), y = 0, x = v.length; x > y; y++) {
                        null == h[d] && (o = {
                            width: 0,
                            height: 0,
                            elements: [],
                            charNum: 0,
                            hasNextLine: !1
                        }, h[d] = o, l = 0, u = 0, c = 0), u = this.$TextField[24] == t.TextFieldType.INPUT ? this.$TextField[0] : Math.max(u, g.style.size || this.$TextField[0]);
                        var m = !0;
                        if ("" == v[y]) y == x - 1 && (m = !1);
                        else {
                            e.isFlow && i(s, e, g.style);
                            var T = s.measureText(v[y]).width;
                            if (isNaN(a)) l += T, c += v[y].length, o.elements.push({
                                width: T,
                                text: v[y],
                                style: g.style
                            }), y == x - 1 && (m = !1);
                            else if (a >= l + T) o.elements.push({
                                width: T,
                                text: v[y],
                                style: g.style
                            }), l += T, c += v[y].length, y == x - 1 && (m = !1);
                            else {
                                var _ = 0,
                                    b = 0,
                                    C = v[y];
                                if (this.$TextField[19]) var F = C.split(n);
                                else F = C.match(/./g);
                                for (var E = F.length, R = 0; E > _ && (T = s.measureText(F[_]).width, !(0 != l && l + T > a && l + _ != 0)); _++) R += F[_].length, b += T, l += T, c += R;
                                if (_ > 0) {
                                    o.elements.push({
                                        width: b,
                                        text: C.substring(0, R),
                                        style: g.style
                                    });
                                    for (var S = C.substring(R), w = 0, L = S.length; L > w && " " == S.charAt(w); w++);
                                    v[y] = S.substring(w)
                                }
                                "" != v[y] && (y--, m = !1)
                            }
                        }
                        m && (c++, o.hasNextLine = !0), y < v.length - 1 && (o.width = l, o.height = u, o.charNum = c, this.$TextField[5] = Math.max(this.$TextField[5], l), this.$TextField[6] += u, d++)
                    }
                    p == r.length - 1 && o && (o.width = l, o.height = u, o.charNum = c, this.$TextField[5] = Math.max(this.$TextField[5], l), this.$TextField[6] += u)
                }
                return this.$TextField[29] = h.length, this.fillBackground(), h
            }, p.drawText = function(i) {
                var n = this,
                    r = this.$TextField,
                    s = n.$getLinesArr();
                if (0 != r[5]) {
                    var a = isNaN(r[3]) ? r[5] : r[3],
                        o = t.TextFieldUtils.$getTextHeight(n),
                        h = 0,
                        l = t.TextFieldUtils.$getStartLine(n),
                        c = r[4];
                    if (!isNaN(c) && c > o) {
                        var u = t.TextFieldUtils.$getValign(n);
                        h += u * (c - o)
                    }
                    h = Math.round(h);
                    for (var d = t.TextFieldUtils.$getHalign(n), p = 0, f = l, g = r[29]; g > f; f++) {
                        var $ = s[f],
                            v = $.height;
                        if (h += v / 2, f != l) {
                            if (r[24] == t.TextFieldType.INPUT && !r[30]) break;
                            if (!isNaN(c) && h > c) break
                        }
                        p = Math.round((a - $.width) * d);
                        for (var y = 0, x = $.elements.length; x > y; y++) {
                            var m = $.elements[y],
                                T = m.style.size || r[0];
                            e(i, n, m.text, p, h + (v - T) / 2, m.width, m.style), m.style.underline && this.drawTempArray.push({
                                x: p,
                                y: h + v / 2,
                                w: m.width,
                                c: m.style.textColor
                            }), p += m.width
                        }
                        h += v / 2 + r[1]
                    }
                    if (this.drawTempArray.length > 0) {
                        i.save(), i.lineWidth = 2;
                        for (var _ = 0; _ < this.drawTempArray.length; _++) {
                            var b, C = this.drawTempArray[_];
                            b = null != C.c ? t.toColorString(C.c) : r[11], i.beginPath(), i.strokeStyle = b, i.moveTo(C.x, C.y), i.lineTo(C.x + C.w, C.y), i.closePath(), i.stroke()
                        }
                        i.restore(), this.drawTempArray.length = 0
                    }
                }
            }, p.addEvent = function() {
                this.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, p.removeEvent = function() {
                this.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
            }, p.onTapHandler = function(e) {
                if (this.$TextField[24] != t.TextFieldType.INPUT) {
                    var i = t.TextFieldUtils.$getTextElement(this, e.localX, e.localY);
                    if (null != i) {
                        var n = i.style;
                        if (n && n.href) if (n.href.match(/^event:/)) {
                            var r = n.href.match(/^event:/)[0];
                            t.TextEvent.dispatchTextEvent(this, t.TextEvent.LINK, n.href.substring(r.length))
                        } else open(n.href, n.target || "_blank")
                    }
                }
            }, s.default_fontFamily = "Arial", s
        }(t.DisplayObject);
    t.TextField = r, t.registerClass(r, "egret.TextField")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e;
    !
    function(t) {
        function e(t) {
            var e = "";
            return t.italic && (e += "italic "), t.bold && (e += "bold "), e += (t.fontSize || 12) + "px ", e += t.fontFamily || "sans-serif"
        }
        t.toFontString = e
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.DYNAMIC = "dynamic", t.INPUT = "input", t
        }();
    t.TextFieldType = e, t.registerClass(e, "egret.TextFieldType")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function e() {}
            var i = e;
            return p = i.prototype, e.$getStartLine = function(t) {
                var i = t.$TextField,
                    n = e.$getTextHeight(t),
                    r = 0,
                    s = i[4];
                return isNaN(s) || (s > n || n > s && (r = Math.max(i[28] - 1, 0), r = Math.min(i[29] - 1, r)), i[30] || (r = Math.max(i[28] - 1, 0), i[29] > 0 && (r = Math.min(i[29] - 1, r)))), r
            }, e.$getHalign = function(e) {
                var i = e.$getLinesArr(),
                    n = 0;
                return e.$TextField[9] == t.HorizontalAlign.CENTER ? n = .5 : e.$TextField[9] == t.HorizontalAlign.RIGHT && (n = 1), e.$TextField[24] == t.TextFieldType.INPUT && !e.$TextField[30] && i.length > 1 && (n = 0), n
            }, e.$getTextHeight = function(e) {
                var i = t.TextFieldType.INPUT != e.$TextField[24] || e.$TextField[30] ? e.$TextField[6] + (e.$TextField[29] - 1) * e.$TextField[1] : e.$TextField[0];
                return i
            }, e.$getValign = function(i) {
                var n = e.$getTextHeight(i),
                    r = i.$TextField[4];
                if (!isNaN(r) && r > n) {
                    var s = 0;
                    return i.$TextField[10] == t.VerticalAlign.MIDDLE ? s = .5 : i.$TextField[10] == t.VerticalAlign.BOTTOM && (s = 1), s
                }
                return 0
            }, e.$getTextElement = function(t, i, n) {
                var r = e.$getHit(t, i, n),
                    s = t.$getLinesArr();
                return r && s[r.lineIndex] && s[r.lineIndex].elements[r.textElementIndex] ? s[r.lineIndex].elements[r.textElementIndex] : null
            }, e.$getHit = function(t, i, n) {
                var r = t.$getLinesArr();
                if (0 == t.$TextField[3]) return null;
                var s = 0,
                    a = e.$getTextHeight(t),
                    o = 0,
                    h = t.$TextField[4];
                if (!isNaN(h) && h > a) {
                    var l = e.$getValign(t);
                    o = l * (h - a), 0 != o && (n -= o)
                }
                for (var c = e.$getStartLine(t), u = 0, d = c; d < r.length; d++) {
                    var p = r[d];
                    if (u + p.height >= n) {
                        s = d + 1;
                        break
                    }
                    if (u += p.height, u + t.$TextField[1] > n) return null;
                    u += t.$TextField[1]
                }
                if (0 == s) return null;
                var f = r[s - 1],
                    g = 0;
                for (d = 0; d < f.elements.length; d++) {
                    var $ = f.elements[d];
                    if (!(g + $.width < i)) return {
                        lineIndex: s - 1,
                        textElementIndex: d
                    };
                    g += $.width
                }
                return null
            }, e.$getScrollNum = function(t) {
                var e = 1;
                if (t.$TextField[30]) {
                    var i = t.height,
                        n = t.size,
                        r = t.lineSpacing;
                    e = Math.floor(i / (n + r));
                    var s = i - (n + r) * e;
                    s > n / 2 && e++
                }
                return e
            }, e
        }();
    t.TextFieldUtils = e, t.registerClass(e, "egret.TextFieldUtils")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.TOP = "top", t.BOTTOM = "bottom", t.MIDDLE = "middle", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t
        }();
    t.VerticalAlign = e, t.registerClass(e, "egret.VerticalAlign")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.LITTLE_ENDIAN = "littleEndian", t.BIG_ENDIAN = "bigEndian", t
        }();
    t.Endian = e, t.registerClass(e, "egret.Endian");
    var i = function() {
            function i(t) {
                this.BUFFER_EXT_SIZE = 0, this.EOF_byte = -1, this.EOF_code_point = -1, this._setArrayBuffer(t || new ArrayBuffer(this.BUFFER_EXT_SIZE)), this.endian = e.BIG_ENDIAN
            }
            var n = __define,
                r = i;
            return p = r.prototype, p._setArrayBuffer = function(t) {
                this.write_position = t.byteLength, this.data = new DataView(t), this._position = 0
            }, p.setArrayBuffer = function(t) {}, n(p, "buffer", function() {
                return this.data.buffer
            }, function(t) {
                this.data = new DataView(t)
            }), n(p, "dataView", function() {
                return this.data
            }, function(t) {
                this.data = t, this.write_position = t.byteLength
            }), n(p, "bufferOffset", function() {
                return this.data.byteOffset
            }), n(p, "position", function() {
                return this._position
            }, function(t) {
                this._position = t, this.write_position = t > this.write_position ? t : this.write_position
            }), n(p, "length", function() {
                return this.write_position
            }, function(t) {
                this.write_position = t;
                var e = new Uint8Array(new ArrayBuffer(t)),
                    i = this.data.buffer.byteLength;
                i > t && (this._position = t);
                var n = Math.min(i, t);
                e.set(new Uint8Array(this.data.buffer, 0, n)), this.buffer = e.buffer
            }), n(p, "bytesAvailable", function() {
                return this.data.byteLength - this._position
            }), p.clear = function() {
                this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
            }, p.readBoolean = function() {
                return this.validate(i.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
            }, p.readByte = function() {
                return this.validate(i.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
            }, p.readBytes = function(t, e, n) {
                if (void 0 === e && (e = 0), void 0 === n && (n = 0), 0 == n) n = this.bytesAvailable;
                else if (!this.validate(n)) return null;
                t ? t.validateBuffer(e + n) : t = new i(new ArrayBuffer(e + n));
                for (var r = 0; n > r; r++) t.data.setUint8(r + e, this.data.getUint8(this.position++))
            }, p.readDouble = function() {
                if (!this.validate(i.SIZE_OF_FLOAT64)) return null;
                var t = this.data.getFloat64(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_FLOAT64, t
            }, p.readFloat = function() {
                if (!this.validate(i.SIZE_OF_FLOAT32)) return null;
                var t = this.data.getFloat32(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_FLOAT32, t
            }, p.readInt = function() {
                if (!this.validate(i.SIZE_OF_INT32)) return null;
                var t = this.data.getInt32(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_INT32, t
            }, p.readShort = function() {
                if (!this.validate(i.SIZE_OF_INT16)) return null;
                var t = this.data.getInt16(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_INT16, t
            }, p.readUnsignedByte = function() {
                return this.validate(i.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
            }, p.readUnsignedInt = function() {
                if (!this.validate(i.SIZE_OF_UINT32)) return null;
                var t = this.data.getUint32(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_UINT32, t
            }, p.readUnsignedShort = function() {
                if (!this.validate(i.SIZE_OF_UINT16)) return null;
                var t = this.data.getUint16(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_UINT16, t
            }, p.readUTF = function() {
                if (!this.validate(i.SIZE_OF_UINT16)) return null;
                var t = this.data.getUint16(this.position, this.endian == e.LITTLE_ENDIAN);
                return this.position += i.SIZE_OF_UINT16, t > 0 ? this.readUTFBytes(t) : ""
            }, p.readUTFBytes = function(t) {
                if (!this.validate(t)) return null;
                var e = new Uint8Array(this.buffer, this.bufferOffset + this.position, t);
                return this.position += t, this.decodeUTF8(e)
            }, p.writeBoolean = function(t) {
                this.validateBuffer(i.SIZE_OF_BOOLEAN), this.data.setUint8(this.position++, t ? 1 : 0)
            }, p.writeByte = function(t) {
                this.validateBuffer(i.SIZE_OF_INT8), this.data.setInt8(this.position++, t)
            }, p.writeBytes = function(t, e, i) {
                void 0 === e && (e = 0), void 0 === i && (i = 0);
                var n;
                if (!(0 > e) && !(0 > i) && (n = 0 == i ? t.length - e : Math.min(t.length - e, i), n > 0)) {
                    this.validateBuffer(n);
                    for (var r = new DataView(t.buffer), s = e; n + e > s; s++) this.data.setUint8(this.position++, r.getUint8(s))
                }
            }, p.writeDouble = function(t) {
                this.validateBuffer(i.SIZE_OF_FLOAT64), this.data.setFloat64(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_FLOAT64
            }, p.writeFloat = function(t) {
                this.validateBuffer(i.SIZE_OF_FLOAT32), this.data.setFloat32(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_FLOAT32
            }, p.writeInt = function(t) {
                this.validateBuffer(i.SIZE_OF_INT32), this.data.setInt32(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_INT32
            }, p.writeShort = function(t) {
                this.validateBuffer(i.SIZE_OF_INT16), this.data.setInt16(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_INT16
            }, p.writeUnsignedInt = function(t) {
                this.validateBuffer(i.SIZE_OF_UINT32), this.data.setUint32(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_UINT32
            }, p.writeUnsignedShort = function(t) {
                this.validateBuffer(i.SIZE_OF_UINT16), this.data.setUint16(this.position, t, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_UINT16
            }, p.writeUTF = function(t) {
                var n = this.encodeUTF8(t),
                    r = n.length;
                this.validateBuffer(i.SIZE_OF_UINT16 + r), this.data.setUint16(this.position, r, this.endian == e.LITTLE_ENDIAN), this.position += i.SIZE_OF_UINT16, this._writeUint8Array(n, !1)
            }, p.writeUTFBytes = function(t) {
                this._writeUint8Array(this.encodeUTF8(t))
            }, p.toString = function() {
                return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
            }, p._writeUint8Array = function(t, e) {
                void 0 === e && (e = !0), e && this.validateBuffer(this.position + t.length);
                for (var i = 0; i < t.length; i++) this.data.setUint8(this.position++, t[i])
            }, p.validate = function(e) {
                return this.data.byteLength > 0 && this._position + e <= this.data.byteLength ? !0 : void t.$error(1025)
            }, p.validateBuffer = function(t, e) {
                if (void 0 === e && (e = !1), this.write_position = t > this.write_position ? t : this.write_position, t += this._position, this.data.byteLength < t || e) {
                    var i = new Uint8Array(new ArrayBuffer(t + this.BUFFER_EXT_SIZE)),
                        n = Math.min(this.data.buffer.byteLength, t + this.BUFFER_EXT_SIZE);
                    i.set(new Uint8Array(this.data.buffer, 0, n)), this.buffer = i.buffer
                }
            }, p.encodeUTF8 = function(t) {
                for (var e = 0, i = this.stringToCodePoints(t), n = []; i.length > e;) {
                    var r = i[e++];
                    if (this.inRange(r, 55296, 57343)) this.encoderError(r);
                    else if (this.inRange(r, 0, 127)) n.push(r);
                    else {
                        var s, a;
                        for (this.inRange(r, 128, 2047) ? (s = 1, a = 192) : this.inRange(r, 2048, 65535) ? (s = 2, a = 224) : this.inRange(r, 65536, 1114111) && (s = 3, a = 240), n.push(this.div(r, Math.pow(64, s)) + a); s > 0;) {
                            var o = this.div(r, Math.pow(64, s - 1));
                            n.push(128 + o % 64), s -= 1
                        }
                    }
                }
                return new Uint8Array(n)
            }, p.decodeUTF8 = function(t) {
                for (var e, i = !1, n = 0, r = "", s = 0, a = 0, o = 0, h = 0; t.length > n;) {
                    var l = t[n++];
                    if (l == this.EOF_byte) e = 0 != a ? this.decoderError(i) : this.EOF_code_point;
                    else if (0 == a) this.inRange(l, 0, 127) ? e = l : (this.inRange(l, 194, 223) ? (a = 1, h = 128, s = l - 192) : this.inRange(l, 224, 239) ? (a = 2, h = 2048, s = l - 224) : this.inRange(l, 240, 244) ? (a = 3, h = 65536, s = l - 240) : this.decoderError(i), s *= Math.pow(64, a), e = null);
                    else if (this.inRange(l, 128, 191)) if (o += 1, s += (l - 128) * Math.pow(64, a - o), o !== a) e = null;
                    else {
                        var c = s,
                            u = h;
                        s = 0, a = 0, o = 0, h = 0, e = this.inRange(c, u, 1114111) && !this.inRange(c, 55296, 57343) ? c : this.decoderError(i, l)
                    } else s = 0, a = 0, o = 0, h = 0, n--, e = this.decoderError(i, l);
                    null !== e && e !== this.EOF_code_point && (65535 >= e ? e > 0 && (r += String.fromCharCode(e)) : (e -= 65536, r += String.fromCharCode(55296 + (e >> 10 & 1023)), r += String.fromCharCode(56320 + (1023 & e))))
                }
                return r
            }, p.encoderError = function(e) {
                t.$error(1026, e)
            }, p.decoderError = function(e, i) {
                return e && t.$error(1027), i || 65533
            }, p.inRange = function(t, e, i) {
                return t >= e && i >= t
            }, p.div = function(t, e) {
                return Math.floor(t / e)
            }, p.stringToCodePoints = function(t) {
                for (var e = [], i = 0, n = t.length; i < t.length;) {
                    var r = t.charCodeAt(i);
                    if (this.inRange(r, 55296, 57343)) if (this.inRange(r, 56320, 57343)) e.push(65533);
                    else if (i == n - 1) e.push(65533);
                    else {
                        var s = t.charCodeAt(i + 1);
                        if (this.inRange(s, 56320, 57343)) {
                            var a = 1023 & r,
                                o = 1023 & s;
                            i += 1, e.push(65536 + (a << 10) + o)
                        } else e.push(65533)
                    } else e.push(r);
                    i += 1
                }
                return e
            }, i.SIZE_OF_BOOLEAN = 1, i.SIZE_OF_INT8 = 1, i.SIZE_OF_INT16 = 2, i.SIZE_OF_INT32 = 4, i.SIZE_OF_UINT8 = 1, i.SIZE_OF_UINT16 = 2, i.SIZE_OF_UINT32 = 4, i.SIZE_OF_FLOAT32 = 4, i.SIZE_OF_FLOAT64 = 8, i
        }();
    t.ByteArray = i, t.registerClass(i, "egret.ByteArray")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = __define,
                i = t;
            return p = i.prototype, e(t, "logLevel", void 0, function(t) {}), t.ALL = "all", t.DEBUG = "debug", t.INFO = "info", t.WARN = "warn", t.ERROR = "error", t.OFF = "off", t
        }();
    t.Logger = e, t.registerClass(e, "egret.Logger")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = t;
            return p = e.prototype, t.isNumber = function(t) {
                return "number" == typeof t && !isNaN(t)
            }, t.sin = function(e) {
                var i = Math.floor(e),
                    n = i + 1,
                    r = t.sinInt(i),
                    s = t.sinInt(n);
                return (e - i) * s + (n - e) * r
            }, t.sinInt = function(t) {
                return t %= 360, 0 > t && (t += 360), 90 > t ? egret_sin_map[t] : 180 > t ? egret_cos_map[t - 90] : 270 > t ? -egret_sin_map[t - 180] : -egret_cos_map[t - 270]
            }, t.cos = function(e) {
                var i = Math.floor(e),
                    n = i + 1,
                    r = t.cosInt(i),
                    s = t.cosInt(n);
                return (e - i) * s + (n - e) * r
            }, t.cosInt = function(t) {
                return t %= 360, 0 > t && (t += 360), 90 > t ? egret_cos_map[t] : 180 > t ? -egret_sin_map[t - 90] : 270 > t ? -egret_cos_map[t - 180] : egret_sin_map[t - 270]
            }, t
        }();
    t.NumberUtils = e, t.registerClass(e, "egret.NumberUtils")
}(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, DEG_TO_RAD = Math.PI / 180, NumberUtils_i = 0; 90 >= NumberUtils_i; NumberUtils_i++) egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * DEG_TO_RAD), egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(t) {
    "function" != typeof this && egret.$error(1029);
    var e = Array.prototype.slice.call(arguments, 1),
        i = this,
        n = function() {},
        r = function() {
            return i.apply(this instanceof n && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
    return n.prototype = this.prototype, r.prototype = new n, r
});
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i) {
                void 0 === i && (i = 0), e.call(this), this._delay = 0, this._currentCount = 0, this._running = !1, this.updateInterval = 1e3, this.lastCount = 1e3, this.delay = t, this.repeatCount = 0 | +i
            }
            __extends(i, e);
            var n = __define,
                r = i;
            return p = r.prototype, n(p, "delay", function() {
                return this._delay
            }, function(t) {
                1 > t && (t = 1), this._delay != t && (this._delay = t, this.lastCount = this.updateInterval = Math.round(60 * t))
            }), n(p, "currentCount", function() {
                return this._currentCount
            }), n(p, "running", function() {
                return this._running
            }), p.reset = function() {
                this.stop(), this._currentCount = 0
            }, p.start = function() {
                this._running || (this.lastCount = this.updateInterval, t.sys.$ticker.$startTick(this.$update, this), this._running = !0)
            }, p.stop = function() {
                this._running && (t.stopTick(this.$update, this), this._running = !1)
            }, p.$update = function(e) {
                if (this.lastCount -= 1e3, this.lastCount > 0) return !1;
                this.lastCount += this.updateInterval, this._currentCount++;
                var i = this.repeatCount > 0 && this._currentCount >= this.repeatCount;
                return t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER), i && (this.stop(), t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER_COMPLETE)), !1
            }, i
        }(t.EventDispatcher);
    t.Timer = e, t.registerClass(e, "egret.Timer")
}(egret || (egret = {}));
var egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, i) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        t.$callLaterFunctionList.push(e), t.$callLaterThisList.push(i), t.$callLaterArgsList.push(n)
    }

    function i(e, i) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        t.$callAsyncFunctionList.push(e), t.$callAsyncThisList.push(i), t.$callAsyncArgsList.push(n)
    }
    t.$callLaterFunctionList = [], t.$callLaterThisList = [], t.$callLaterArgsList = [], t.callLater = e, t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [], t.$callAsync = i
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t, e, i) {
        for (var n = [], r = 3; r < arguments.length; r++) n[r - 3] = arguments[r];
        var s = t.prototype,
            a = s.__sets__;
        null == a && (a = s.__sets__ = {});
        var o = a[i];
        if (o) return o.apply(e, n);
        var h = Object.getPrototypeOf(s);
        if (null != h) {
            for (; !h.hasOwnProperty(i);) if (h = Object.getPrototypeOf(h), null == h) return;
            o = Object.getOwnPropertyDescriptor(h, i).set, a[i] = o, o.apply(e, n)
        }
    }

    function i(t, e, i) {
        var n = t.prototype,
            r = n.__gets__;
        null == r && (r = n.__gets__ = {});
        var s = r[i];
        if (s) return s.call(e);
        var a = Object.getPrototypeOf(n);
        if (null != a) {
            for (; !a.hasOwnProperty(i);) if (a = Object.getPrototypeOf(a), null == a) return;
            return s = Object.getOwnPropertyDescriptor(a, i).get, r[i] = s, s.call(e)
        }
    }
    t.superSetter = e, t.superGetter = i
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        if (!t) return null;
        var e = i[t];
        if (e) return e;
        var n = t.split("."),
            r = n.length;
        e = __global;
        for (var s = 0; r > s; s++) {
            var a = n[s];
            if (e = e[a], !e) return null
        }
        return i[t] = e, e
    }
    var i = {};
    t.getDefinitionByName = e
}(egret || (egret = {}));
var __global = __global || this,
    egret;
!
function(t) {}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        var e = typeof t;
        if (!t || "object" != e && !t.prototype) return e;
        var i = t.prototype ? t.prototype : Object.getPrototypeOf(t);
        if (i.hasOwnProperty("__class__")) return i.__class__;
        var n = i.constructor.toString(),
            r = n.indexOf("("),
            s = n.substring(9, r);
        return Object.defineProperty(i, "__class__", {
            value: s,
            enumerable: !1,
            writable: !0
        }), s
    }
    t.getQualifiedClassName = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e) {
        if (!e || "object" != typeof e && !e.prototype) return null;
        var i = e.prototype ? e.prototype : Object.getPrototypeOf(e),
            n = Object.getPrototypeOf(i);
        if (!n) return null;
        var r = t.getQualifiedClassName(n.constructor);
        return r ? r : null
    }
    t.getQualifiedSuperclassName = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e() {
        return Date.now() - t.sys.$START_TIME
    }
    t.getTimer = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e) {
        var i = t.getDefinitionByName(e);
        return i ? !0 : !1
    }
    t.hasDefinition = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t, e) {
        if (!t || "object" != typeof t) return !1;
        var i = Object.getPrototypeOf(t),
            n = i ? i.__types__ : null;
        return n ? -1 !== n.indexOf(e) : !1
    }
    t.is = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, i) {
        t.sys.$ticker.$startTick(e, i)
    }
    t.startTick = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, i) {
        t.sys.$ticker.$stopTick(e, i)
    }
    t.stopTick = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e) {
        return e.hashCode = e.$hashCode = t.$hashCount++, e
    }
    t.$toBitmapData = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(t) {
        0 > t && (t = 0), t > 16777215 && (t = 16777215);
        for (var e = t.toString(16).toUpperCase(); e.length > 6;) e = e.slice(1, e.length);
        for (; e.length < 6;) e = "0" + e;
        return "#" + e
    }
    t.toColorString = e
}(egret || (egret = {}));

// egret.web.min.js
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function() {
                function e() {}
                var t = (__define, e);
                return p = t.prototype, e.call = function(e, t) {}, e.addCallback = function(e, t) {}, e
            }();
        t.WebExternalInterface = i, e.registerClass(i, "egret.web.WebExternalInterface", ["egret.ExternalInterface"]), e.ExternalInterface = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i;
        !
        function(i) {
            function n(e) {
                return window.localStorage.getItem(e)
            }

            function r(t, i) {
                try {
                    return window.localStorage.setItem(t, i), !0
                } catch (n) {
                    return e.$warn(1018, t, i), !1
                }
            }

            function o(e) {
                window.localStorage.removeItem(e)
            }

            function s() {
                window.localStorage.clear()
            }
            t.getItem = n, t.setItem = r, t.removeItem = o, t.clear = s
        }(i = t.web || (t.web = {}))
    }(t = e.localStorage || (e.localStorage = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n() {
                    i.call(this), this.loaded = !1
                }
                __extends(n, i);
                var r = (__define, n);
                return p = r.prototype, p.load = function(t) {
                    function i() {
                        o(), s.loaded = !0, s.dispatchEventWith(e.Event.COMPLETE)
                    }

                    function r() {
                        o(), s.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }

                    function o() {
                        a.removeEventListener("canplaythrough", i), a.removeEventListener("error", r)
                    }
                    var s = this;
                    this.url = t;
                    var a = new Audio(t);
                    a.addEventListener("canplaythrough", i), a.addEventListener("error", r), a.load(), this.originAudio = a, n.$recycle(this.url, a)
                }, p.play = function(e, i) {
                    e = +e || 0, i = +i || 0;
                    var r = n.$pop(this.url);
                    null == r ? r = this.originAudio.cloneNode() : r.load(), r.autoplay = !0;
                    var o = new t.HtmlSoundChannel(r);
                    return o.$url = this.url, o.$loops = i, o.$startTime = e, o.$play(), o
                }, p.close = function() {
                    0 == this.loaded && this.originAudio && (this.originAudio.src = ""), this.originAudio && (this.originAudio = null), n.$clear(this.url)
                }, n.$clear = function(e) {
                    var t = n.audios[e];
                    t && (t.length = 0)
                }, n.$pop = function(e) {
                    var t = n.audios[e];
                    return t && t.length > 0 ? t.pop() : null
                }, n.$recycle = function(e, t) {
                    var i = n.audios[e];
                    null == n.audios[e] && (i = n.audios[e] = []), i.push(t)
                }, n.MUSIC = "music", n.EFFECT = "effect", n.audios = {}, n
            }(e.EventDispatcher);
        t.HtmlSound = i, e.registerClass(i, "egret.web.HtmlSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n(t) {
                    var n = this;
                    i.call(this), this.$startTime = 0, this.audio = null, this.isStopped = !1, this.onPlayEnd = function() {
                        return 1 == n.$loops ? (n.stop(), void n.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (n.$loops > 0 && n.$loops--, n.audio.load(), void n.$play())
                    }, t.addEventListener("ended", this.onPlayEnd), this.audio = t
                }
                __extends(n, i);
                var r = __define,
                    o = n;
                return p = o.prototype, p.$play = function() {
                    if (this.isStopped) return void e.$error(1036);
                    try {
                        this.audio.currentTime = this.$startTime
                    } catch (t) {} finally {
                        this.audio.play()
                    }
                }, p.stop = function() {
                    if (this.audio) {
                        var e = this.audio;
                        e.pause(), e.removeEventListener("ended", this.onPlayEnd), this.audio = null, t.HtmlSound.$recycle(this.$url, e)
                    }
                }, r(p, "volume", function() {
                    return this.audio ? this.audio.volume : 1
                }, function(t) {
                    return this.isStopped ? void e.$error(1036) : void(this.audio && (this.audio.volume = t))
                }), r(p, "position", function() {
                    return this.audio ? this.audio.currentTime : 0
                }), n
            }(e.EventDispatcher);
        t.HtmlSoundChannel = i, e.registerClass(i, "egret.web.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n() {
                    i.call(this), this.loaded = !1
                }
                __extends(n, i);
                var r = (__define, n);
                return p = r.prototype, p.load = function(i) {
                    var n = this;
                    this.url = i, QZAppExternal.preloadSound(function(t) {
                        0 == t.code ? (n.loaded = !0, n.dispatchEventWith(e.Event.COMPLETE)) : n.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }, {
                        bid: -1,
                        url: t.Html5Capatibility._QQRootPath + i,
                        refresh: 1
                    })
                }, p.play = function(e, i) {
                    e = +e || 0, i = +i || 0;
                    var n = new t.QQSoundChannel;
                    return n.$url = this.url, n.$loops = i, n.$type = this.type, n.$startTime = e, n.$play(), n
                }, p.close = function() {}, n.MUSIC = "music", n.EFFECT = "effect", n
            }(e.EventDispatcher);
        t.QQSound = i, e.registerClass(i, "egret.web.QQSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i() {
                    var i = this;
                    t.call(this), this.$startTime = 0, this.isStopped = !1, this.onPlayEnd = function() {
                        return 1 == i.$loops ? (i.stop(), void i.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (i.$loops > 0 && i.$loops--, void i.$play())
                    }, this._startTime = 0
                }
                __extends(i, t);
                var n = __define,
                    r = i;
                return p = r.prototype, p.$play = function() {
                    if (this.isStopped) return void e.$error(1036);
                    var t = this;
                    this._startTime = Date.now();
                    var i = 0;
                    i = t.$loops > 0 ? t.$loops - 1 : -1, this.$type == e.Sound.EFFECT ? QZAppExternal.playLocalSound(function(e) {}, {
                        bid: -1,
                        url: t.$url,
                        loop: i
                    }) : QZAppExternal.playLocalBackSound(function(e) {}, {
                        bid: -1,
                        url: t.$url,
                        loop: i
                    })
                }, p.stop = function() {
                    this.$type == e.Sound.EFFECT ? QZAppExternal.stopSound() : QZAppExternal.stopBackSound()
                }, n(p, "volume", function() {
                    return 1
                }, function(t) {
                    return this.isStopped ? void e.$error(1036) : void 0
                }), n(p, "position", function() {
                    return Math.floor(Date.now() - this._startTime)
                }), i
            }(e.EventDispatcher);
        t.QQSoundChannel = i, e.registerClass(i, "egret.web.QQSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function() {
                function t() {}
                var i = (__define, t);
                return p = i.prototype, t.decodeAudios = function() {
                    if (!(t.decodeArr.length <= 0 || t.isDecoding)) {
                        t.isDecoding = !0;
                        var i = t.decodeArr.shift();
                        t.ctx.decodeAudioData(i.buffer, function(e) {
                            i.self.audioBuffer = e, i.success && i.success(), t.isDecoding = !1, t.decodeAudios()
                        }, function() {
                            alert(e.getString(1034, i.url)), i.fail && i.fail(), t.isDecoding = !1, t.decodeAudios()
                        })
                    }
                }, t.canUseWebAudio = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, t.ctx = t.canUseWebAudio ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) : void 0, t.decodeArr = [], t.isDecoding = !1, t
            }();
        t.WebAudioDecode = i, e.registerClass(i, "egret.web.WebAudioDecode");
        var n = function(n) {
                function r() {
                    n.call(this), this.loaded = !1
                }
                __extends(r, n);
                var o = (__define, r);
                return p = o.prototype, p.load = function(t) {
                    function n() {
                        o.loaded = !0, o.dispatchEventWith(e.Event.COMPLETE)
                    }

                    function r() {
                        o.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }
                    var o = this;
                    this.url = t;
                    var s = new XMLHttpRequest;
                    s.open("GET", t, !0), s.responseType = "arraybuffer", console.log("loadWebAudio"), s.onload = function() {
                        o._arrayBuffer = s.response, i.decodeArr.push({
                            buffer: o._arrayBuffer,
                            success: n,
                            fail: r,
                            self: o,
                            url: o.url
                        }), i.decodeAudios()
                    }, s.send()
                }, p.play = function(e, i) {
                    e = +e || 0, i = +i || 0;
                    var n = new t.WebAudioSoundChannel;
                    return n.$url = this.url, n.$loops = i, n.$audioBuffer = this.audioBuffer, n.$startTime = e, n.$play(), n
                }, p.close = function() {}, r.MUSIC = "music", r.EFFECT = "effect", r
            }(e.EventDispatcher);
        t.WebAudioSound = n, e.registerClass(n, "egret.web.WebAudioSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n() {
                    var n = this;
                    i.call(this), this.$startTime = 0, this.bufferSource = null, this.context = t.WebAudioDecode.ctx, this.isStopped = !1, this._currentTime = 0, this._volume = 1, this.onPlayEnd = function() {
                        return 1 == n.$loops ? (n.stop(), void n.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (n.$loops > 0 && n.$loops--, void n.$play())
                    }, this._startTime = 0, this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode()
                }
                __extends(n, i);
                var r = __define,
                    o = n;
                return p = o.prototype, p.$play = function() {
                    if (this.isStopped) return void e.$error(1036);
                    this.bufferSource && (this.bufferSource.onended = null, this.bufferSource = null);
                    var t = this.context,
                        i = this.gain,
                        n = t.createBufferSource();
                    this.bufferSource = n, n.buffer = this.$audioBuffer, n.connect(i), i.connect(t.destination), n.onended = this.onPlayEnd, this._startTime = Date.now(), this.gain.gain.value = this._volume, n.start(0, this.$startTime), this._currentTime = 0
                }, p.stop = function() {
                    if (this.bufferSource) {
                        var e = this.bufferSource;
                        e.stop ? e.stop(0) : e.noteOff(0), this.bufferSource.disconnect(), this.bufferSource = null, this.$audioBuffer = null
                    }
                    this.isStopped = !0
                }, r(p, "volume", function() {
                    return this._volume
                }, function(t) {
                    return this.isStopped ? void e.$error(1036) : (this._volume = t, void(this.gain.gain.value = t))
                }), r(p, "position", function() {
                    return this.bufferSource ? Math.floor((Date.now() - this._startTime) / 1e3) : 0
                }), n
            }(e.EventDispatcher);
        t.WebAudioSoundChannel = i, e.registerClass(i, "egret.web.WebAudioSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i(i) {
                    var n = this;
                    t.call(this), this.loaded = !1, this.closed = !1, this.heightSet = 0 / 0, this.widthSet = 0 / 0, this.isPlayed = !1, this.screenChanged = function(e) {
                        var t = !! n.video.webkitDisplayingFullscreen;
                        t || n.checkFullScreen(!1)
                    }, this._fullscreen = !0, this.onVideoLoaded = function() {
                        n.video.removeEventListener("canplay", n.onVideoLoaded);
                        var t = n.video;
                        n.loaded = !0, t.pause(), n.posterData && (n.posterData.width = n.getPlayWidth(), n.posterData.height = n.getPlayHeight()), t.width = t.videoWidth, t.height = t.videoHeight, n.$invalidateContentBounds(), n.dispatchEventWith(e.Event.COMPLETE)
                    }, this.$renderRegion = new e.sys.Region, this.src = i, this.once(e.Event.ADDED_TO_STAGE, this.loadPoster, this), i && this.load()
                }
                __extends(i, t);
                var n = __define,
                    r = i;
                return p = r.prototype, p.load = function(e) {
                    var t = this;
                    if (e = e || this.src, this.src = e, !this.video || this.video.src != e) {
                        var i = document.createElement("video");
                        i.controls = null, i.src = e, i.setAttribute("autoplay", "autoplay"), i.setAttribute("webkit-playsinline", "true"), i.addEventListener("canplay", this.onVideoLoaded), i.addEventListener("error", function() {
                            return t.onVideoError()
                        }), i.addEventListener("ended", function() {
                            return t.onVideoEnded()
                        }), i.load(), i.play(), i.style.position = "absolute", i.style.top = "0px", i.style.zIndex = "-88888", i.style.left = "0px", i.height = 1, i.width = 1, window.setTimeout(function() {
                            return i.pause()
                        }, 16), this.video = i
                    }
                }, p.play = function(t, i) {
                    var n = this;
                    if (void 0 === i && (i = !1), 0 == this.loaded) return this.load(this.src), void this.once(e.Event.COMPLETE, function(e) {
                        return n.play(t, i)
                    }, this);
                    this.isPlayed = !0;
                    var r = this.video;
                    void 0 != t && (r.currentTime = +t || 0), r.loop = !! i, e.Capabilities.isMobile ? r.style.zIndex = "-88888" : r.style.zIndex = "9999", r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.height = this.heightSet, r.width = this.widthSet, "Windows PC" != e.Capabilities.os && "Mac OS" != e.Capabilities.os && setTimeout(function() {
                        r.width = 0
                    }, 1e3), this.checkFullScreen(this._fullscreen)
                }, p.checkFullScreen = function(t) {
                    var i = this.video;
                    t ? (null == i.parentElement && (i.removeAttribute("webkit-playsinline"), document.body.appendChild(i)), e.stopTick(this.markDirty, this), this.goFullscreen()) : (null != i.parentElement && i.parentElement.removeChild(i), i.setAttribute("webkit-playsinline", "true"), this.setFullScreenMonitor(!1), e.startTick(this.markDirty, this)), i.play()
                }, p.goFullscreen = function() {
                    var t, i = this.video;
                    return t = e.web.getPrefixStyleName("requestFullscreen", i), i[t] || (t = e.web.getPrefixStyleName("requestFullScreen", i), i[t]) ? (i.removeAttribute("webkit-playsinline"), i[t](), this.setFullScreenMonitor(!0), !0) : !0
                }, p.setFullScreenMonitor = function(e) {
                    var t = this.video;
                    e ? (t.addEventListener("mozfullscreenchange", this.screenChanged), t.addEventListener("webkitfullscreenchange", this.screenChanged), t.addEventListener("webkitfullscreenerror", this.screenError), t.addEventListener("webkitfullscreenerror", this.screenError)) : (t.removeEventListener("mozfullscreenchange", this.screenChanged), t.removeEventListener("webkitfullscreenchange", this.screenChanged), t.removeEventListener("webkitfullscreenerror", this.screenError), t.removeEventListener("webkitfullscreenerror", this.screenError))
                }, p.screenError = function() {
                    e.$error(3003)
                }, p.exitFullscreen = function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oCancelFullScreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                }, p.onVideoEnded = function() {
                    this.pause(), this.isPlayed = !1, this.$invalidateContentBounds(), this.dispatchEventWith(e.Event.ENDED)
                }, p.onVideoError = function() {
                    this.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }, p.close = function() {
                    var e = this;
                    this.closed = !0, this.video.removeEventListener("canplay", this.onVideoLoaded), this.video.removeEventListener("error", function() {
                        return e.onVideoError()
                    }), this.video.removeEventListener("ended", function() {
                        return e.onVideoEnded()
                    }), this.pause(), 0 == this.loaded && this.video && (this.video.src = ""), this.video && this.video.parentElement && (this.video.parentElement.removeChild(this.video), this.video = null), this.loaded = !1
                }, p.pause = function() {
                    this.video && this.video.pause(), e.stopTick(this.markDirty, this), this.$invalidate()
                }, n(p, "volume", function() {
                    return this.video ? this.video.volume : 1
                }, function(e) {
                    this.video && (this.video.volume = e)
                }), n(p, "position", function() {
                    return this.video ? this.video.currentTime : 0
                }, function(e) {
                    this.video && (this.video.currentTime = e)
                }), n(p, "fullscreen", function() {
                    return this._fullscreen
                }, function(t) {
                    e.Capabilities.isMobile || (this._fullscreen = !! t, this.video && 0 == this.video.paused && this.checkFullScreen(this._fullscreen))
                }), n(p, "bitmapData", function() {
                    return this.video && this.loaded ? (this._bitmapData || (this.video.width = this.video.videoWidth, this.video.height = this.video.videoHeight, this._bitmapData = e.$toBitmapData(this.video)), this._bitmapData) : null
                }), p.loadPoster = function() {
                    var t = this,
                        i = this.poster;
                    if (i) {
                        var n = new e.ImageLoader;
                        n.once(e.Event.COMPLETE, function(e) {
                            n.data;
                            t.posterData = n.data, t.posterData.width = t.getPlayWidth(), t.posterData.height = t.getPlayHeight(), t.$invalidateContentBounds()
                        }, this), n.load(i)
                    }
                }, p.$measureContentBounds = function(e) {
                    var t = this.bitmapData,
                        i = this.posterData;
                    t ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : i ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : e.setEmpty()
                }, p.getPlayWidth = function() {
                    return isNaN(this.widthSet) ? this.bitmapData ? this.bitmapData.width : this.posterData ? this.posterData.width : 0 / 0 : this.widthSet
                }, p.getPlayHeight = function() {
                    return isNaN(this.heightSet) ? this.bitmapData ? this.bitmapData.height : this.posterData ? this.posterData.height : 0 / 0 : this.heightSet
                }, p.$render = function(t) {
                    var i = this.bitmapData,
                        n = this.posterData;
                    this.isPlayed && !e.Capabilities.isMobile || !n ? this.isPlayed && i && (t.imageSmoothingEnabled = !0, t.drawImage(i, 0, 0, this.getPlayWidth(), this.getPlayHeight())) : t.drawImage(n, 0, 0, this.getPlayWidth(), this.getPlayHeight())
                }, p.markDirty = function() {
                    return this.$invalidate(), !0
                }, p.$setHeight = function(e) {
                    return this.heightSet = +e || 0, t.prototype.$setHeight.call(this, e)
                }, p.$setWidth = function(e) {
                    return this.widthSet = +e || 0, t.prototype.$setWidth.call(this, e)
                }, n(p, "paused", function() {
                    return this.video ? this.video.paused : !0
                }), i
            }(e.DisplayObject);
        t.WebVideo = i, e.registerClass(i, "egret.web.WebVideo", ["egret.Video"]), e.Video = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i() {
                    t.call(this), this._url = "", this._method = ""
                }
                __extends(i, t);
                var n = __define,
                    r = i;
                return p = r.prototype, n(p, "response", function() {
                    return this._xhr ? this._xhr.response ? this._xhr.response : this._xhr.responseXML ? this._xhr.responseXML : this._xhr.responseText ? this._xhr.responseText : null : null
                }), n(p, "responseType", function() {
                    return this._responseType
                }, function(e) {
                    this._responseType = e
                }), n(p, "withCredentials", function() {
                    return this._withCredentials
                }, function(e) {
                    this._withCredentials = e
                }), p.getXHR = function() {
                    return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
                }, p.open = function(e, t) {
                    void 0 === t && (t = "GET"), this._url = e, this._method = t, this._xhr && (this._xhr.abort(), this._xhr = null), this._xhr = this.getXHR(), this._xhr.onreadystatechange = this.onReadyStateChange.bind(this), this._xhr.onprogress = this.updateProgress.bind(this), this._xhr.open(this._method, this._url, !0)
                }, p.send = function(e) {
                    null != this._responseType && (this._xhr.responseType = this._responseType), null != this._withCredentials && (this._xhr.withCredentials = this._withCredentials), null != this.header && this._xhr.setRequestHeader(this.header, this.headerValue), this._xhr.send(e)
                }, p.abort = function() {
                    this._xhr && this._xhr.abort()
                }, p.getAllResponseHeaders = function() {
                    if (!this._xhr) return null;
                    var e = this._xhr.getAllResponseHeaders();
                    return e ? e : ""
                }, p.setRequestHeader = function(e, t) {
                    this.header = e, this.headerValue = t
                }, p.getResponseHeader = function(e) {
                    if (!this._xhr) return null;
                    var t = this._xhr.getResponseHeader(e);
                    return t ? t : ""
                }, p.onReadyStateChange = function() {
                    var t = this._xhr;
                    if (4 == t.readyState) {
                        var i = t.status >= 400 || 0 == t.status,
                            n = (this._url, this);
                        window.setTimeout(function() {
                            i ? n.dispatchEventWith(e.IOErrorEvent.IO_ERROR) : n.dispatchEventWith(e.Event.COMPLETE)
                        }, 0)
                    }
                }, p.updateProgress = function(t) {
                    t.lengthComputable && e.ProgressEvent.dispatchProgressEvent(this, e.ProgressEvent.PROGRESS, t.loaded, t.total)
                }, i
            }(e.EventDispatcher);
        t.WebHttpRequest = i, e.registerClass(i, "egret.web.WebHttpRequest", ["egret.HttpRequest"]), e.HttpRequest = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = window.URL || window.webkitURL,
            n = function(n) {
                function r() {
                    n.apply(this, arguments), this.data = null, this.crossOrigin = null, this.currentImage = null, this.request = null
                }
                __extends(r, n);
                var o = (__define, r);
                return p = o.prototype, p.load = function(i) {
                    if (t.Html5Capatibility._canUseBlob && 0 != i.indexOf("wxLocalResource:") && 0 != i.indexOf("data:") && 0 != i.indexOf("http:") && 0 != i.indexOf("https:")) {
                        var n = this.request;
                        n || (n = this.request = new e.web.WebHttpRequest, n.addEventListener(e.Event.COMPLETE, this.onBlobLoaded, this), n.addEventListener(e.IOErrorEvent.IO_ERROR, this.onBlobError, this), n.responseType = "blob"), n.open(i), n.send()
                    } else this.loadImage(i)
                }, p.onBlobLoaded = function(e) {
                    var t = this.request.response;
                    this.loadImage(i.createObjectURL(t))
                }, p.onBlobError = function(e) {
                    this.dispatchIOError(this.currentURL)
                }, p.loadImage = function(e) {
                    var t = new Image;
                    this.data = null, this.currentImage = t, this.crossOrigin && (t.crossOrigin = this.crossOrigin), t.onload = this.onImageComplete.bind(this), t.onerror = this.onLoadError.bind(this), t.src = e
                }, p.onImageComplete = function(t) {
                    var i = this.getImage(t);
                    if (i) {
                        this.data = e.$toBitmapData(i);
                        var n = this;
                        window.setTimeout(function() {
                            n.dispatchEventWith(e.Event.COMPLETE)
                        }, 0)
                    }
                }, p.onLoadError = function(e) {
                    var t = this.getImage(e);
                    t && this.dispatchIOError(t.src)
                }, p.dispatchIOError = function(t) {
                    var i = this;
                    window.setTimeout(function() {
                        i.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }, 0)
                }, p.getImage = function(t) {
                    var n = t.target,
                        r = n.src;
                    if (0 == r.indexOf("blob:")) try {
                        i.revokeObjectURL(n.src)
                    } catch (o) {
                        e.$warn(1037)
                    }
                    return n.onerror = null, n.onload = null, this.currentImage !== n ? null : (this.currentImage = null, n)
                }, r
            }(e.EventDispatcher);
        t.WebImageLoader = n, e.registerClass(n, "egret.web.WebImageLoader", ["egret.ImageLoader"]), e.ImageLoader = n
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n() {
                    i.call(this), this._isNeedShow = !1, this.inputElement = null, this.inputDiv = null, this._gscaleX = 0, this._gscaleY = 0, this._isNeesHide = !1, this.textValue = "", this.colorValue = 16777215, this._styleInfoes = {}
                }
                __extends(n, i);
                var r = (__define, n);
                return p = r.prototype, p.$setTextField = function(e) {
                    return this.$textfield = e, !0
                }, p.$addToStage = function() {
                    this.htmlInput = e.web.$getTextAdapter(this.$textfield)
                }, p._initElement = function() {
                    var e = this.$textfield.localToGlobal(0, 0),
                        t = e.x,
                        i = e.y,
                        n = this.$textfield.$renderMatrix.a,
                        r = this.$textfield.$renderMatrix.d,
                        o = this.htmlInput.$scaleX,
                        s = this.htmlInput.$scaleY;
                    this.inputDiv.style.left = t * o + "px", this.inputDiv.style.top = i * s + "px", this.$textfield.multiline ? (this.inputDiv.style.top = i * s + "px", this.inputElement.style.top = -this.$textfield.lineSpacing / 2 + "px") : (this.inputDiv.style.top = i * s + "px", this.inputElement.style.top = "0px"), this._gscaleX = o * n, this._gscaleY = s * r
                }, p.$show = function() {
                    this.htmlInput.isCurrentStageText(this) ? this.inputElement.onblur = null : (this.inputElement = this.htmlInput.getInputElement(this), this.inputDiv = this.htmlInput._inputDIV), this.htmlInput._needShow = !0, this._isNeedShow = !0, this._initElement()
                }, p.onBlurHandler = function() {
                    this.htmlInput.clearInputElement(), window.scrollTo(0, 0)
                }, p.executeShow = function() {
                    this.inputElement.value = this.$getText(), null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler.bind(this)), this.$resetStageText(), this.$textfield.maxChars > 0 ? this.inputElement.setAttribute("maxlength", this.$textfield.maxChars) : this.inputElement.removeAttribute("maxlength"), this.inputElement.selectionStart = this.inputElement.value.length, this.inputElement.selectionEnd = this.inputElement.value.length, this.inputElement.focus()
                }, p.$hide = function() {
                    this._isNeesHide = !0, this.htmlInput && e.web.Html5Capatibility._System_OS == e.web.SystemOSType.IOS && this.htmlInput.disconnectStageText(this)
                }, p.$getText = function() {
                    return this.textValue || (this.textValue = ""), this.textValue
                }, p.$setText = function(e) {
                    return this.textValue = e, this.resetText(), !0
                }, p.resetText = function() {
                    this.inputElement && (this.inputElement.value = this.textValue)
                }, p.$setColor = function(e) {
                    return this.colorValue = e, this.resetColor(), !0
                }, p.resetColor = function() {
                    this.inputElement && this.setElementStyle("color", e.toColorString(this.colorValue))
                }, p.$onBlur = function() {
                    t.Html5Capatibility._System_OS == t.SystemOSType.WPHONE && e.Event.dispatchEvent(this, "updateText", !1)
                }, p._onInput = function() {
                    var i = this;
                    if (t.Html5Capatibility._System_OS == t.SystemOSType.WPHONE) {
                        var n = this.$textfield.$TextField;
                        null == n[35] && null == n[36] && (i.textValue = i.inputElement.value, e.Event.dispatchEvent(i, "updateText", !1))
                    } else i.inputElement.selectionStart == i.inputElement.selectionEnd && (i.textValue = i.inputElement.value, e.Event.dispatchEvent(i, "updateText", !1))
                }, p.setAreaHeight = function() {
                    var t = this.$textfield;
                    if (t.multiline) {
                        var i = e.TextFieldUtils.$getTextHeight(t);
                        if (t.height < i) this.setElementStyle("height", (t.height + t.lineSpacing) * this._gscaleY + "px"), this.setElementStyle("padding", "0px");
                        else {
                            this.setElementStyle("height", (i + t.lineSpacing) * this._gscaleY + "px");
                            var n = (t.height - i) * this._gscaleY,
                                r = e.TextFieldUtils.$getValign(t),
                                o = n * r,
                                s = n - o;
                            this.setElementStyle("padding", o + "px 0px " + s + "px 0px")
                        }
                        this.setElementStyle("lineHeight", (t.size + t.lineSpacing) * this._gscaleY + "px")
                    }
                }, p._onClickHandler = function(t) {
                    this._isNeedShow && (t.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new e.Event("focus")))
                }, p._onDisconnect = function() {
                    this.inputElement = null, this.dispatchEvent(new e.Event("blur"))
                }, p.setElementStyle = function(e, t) {
                    this.inputElement && this._styleInfoes[e] != t && (this.inputElement.style[e] = t)
                }, p.$removeFromStage = function() {
                    this.inputElement && this.htmlInput.disconnectStageText(this)
                }, p.$resetStageText = function() {
                    if (this.inputElement) {
                        var t = this.$textfield;
                        if (this.setElementStyle("fontFamily", t.fontFamily), this.setElementStyle("fontStyle", t.italic ? "italic" : "normal"), this.setElementStyle("fontWeight", t.bold ? "bold" : "normal"), this.setElementStyle("textAlign", t.textAlign), this.setElementStyle("fontSize", t.size * this._gscaleY + "px"), this.setElementStyle("color", e.toColorString(t.textColor)), t.stage) {
                            var i = t.localToGlobal(0, 0).x;
                            i = Math.min(t.width, t.stage.stageWidth - i)
                        } else i = t.width;
                        if (this.setElementStyle("width", i * this._gscaleX + "px"), this.setElementStyle("verticalAlign", t.verticalAlign), t.multiline) this.setAreaHeight();
                        else if (this.setElementStyle("lineHeight", t.size * this._gscaleY + "px"), t.height < t.size) this.setElementStyle("height", t.height * this._gscaleY + "px"), this.setElementStyle("padding", "0px");
                        else {
                            this.setElementStyle("height", t.size * this._gscaleY + "px");
                            var n = (t.height - t.size) * this._gscaleY,
                                r = e.TextFieldUtils.$getValign(t),
                                o = n * r,
                                s = n - o;
                            this.setElementStyle("padding", o + "px 0px " + s + "px 0px")
                        }
                        this.inputDiv.style.clip = "rect(0px " + t.width * this._gscaleX + "px " + t.height * this._gscaleY + "px 0px)", this.inputDiv.style.height = t.height * this._gscaleY + "px", this.inputDiv.style.width = i * this._gscaleX + "px"
                    }
                }, n
            }(e.EventDispatcher);
        t.HTML5StageText = i, e.registerClass(i, "egret.web.HTML5StageText", ["egret.StageText"]), e.StageText = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function() {
                function t() {
                    this._needShow = !1, this.$scaleX = 1, this.$scaleY = 1
                }
                var i = (__define, t);
                return p = i.prototype, p.isInputOn = function() {
                    return null != this._stageText
                }, p.isCurrentStageText = function(e) {
                    return this._stageText == e
                }, p.initValue = function(e) {
                    e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.border = "none", e.style.padding = "0"
                }, p.$updateSize = function() {
                    if (this.canvas) {
                        var t = this.canvas.width,
                            i = this.canvas.height,
                            n = this.canvas.style.width.split("px")[0],
                            r = this.canvas.style.height.split("px")[0];
                        this.$scaleX = n / t, this.$scaleY = r / i, this.StageDelegateDiv.style.left = this.canvas.style.left, this.StageDelegateDiv.style.top = this.canvas.style.top;
                        var o = e.web.getPrefixStyleName("transform");
                        this.StageDelegateDiv.style[o] = this.canvas.style[o], this.StageDelegateDiv.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px"
                    }
                }, p._initStageDelegateDiv = function(t, i) {
                    this.canvas = i;
                    var n, r = this;
                    n || (n = document.createElement("div"), this.StageDelegateDiv = n, n.id = "StageDelegateDiv", t.appendChild(n), r.initValue(n), r._inputDIV = document.createElement("div"), r.initValue(r._inputDIV), r._inputDIV.style.width = "0px", r._inputDIV.style.height = "0px", r._inputDIV.style.left = "0px", r._inputDIV.style.top = "-100px", r._inputDIV.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", n.appendChild(r._inputDIV), this.canvas.addEventListener("click", function(e) {
                        r._needShow ? (r._needShow = !1, r._stageText._onClickHandler(e), r.show()) : r._inputElement && (r.clearInputElement(), r._inputElement.blur(), r._inputElement = null)
                    }), r.initInputElement(!0), r.initInputElement(!1))
                }, p.initInputElement = function(e) {
                    var t, i = this;
                    e ? (t = document.createElement("textarea"), t.style.resize = "none", i._multiElement = t, t.id = "egretTextarea") : (t = document.createElement("input"), i._simpleElement = t, t.id = "egretInput"), t.type = "text", i._inputDIV.appendChild(t), t.setAttribute("tabindex", "-1"), t.style.width = "1px", t.style.height = "12px", i.initValue(t), t.style.outline = "thin", t.style.background = "none", t.style.overflow = "hidden", t.style.wordBreak = "break-all", t.style.opacity = 0, t.oninput = function() {
                        i._stageText && i._stageText._onInput()
                    }
                }, p.show = function() {
                    var t = this,
                        i = t._inputElement;
                    e.$callAsync(function() {
                        i.style.opacity = 1
                    }, t)
                }, p.disconnectStageText = function(e) {
                    (null == this._stageText || this._stageText == e) && (this.clearInputElement(), this._inputElement && this._inputElement.blur())
                }, p.clearInputElement = function() {
                    var e = this;
                    if (e._inputElement) {
                        e._inputElement.value = "", e._inputElement.onblur = null, e._inputElement.style.width = "1px", e._inputElement.style.height = "12px", e._inputElement.style.left = "0px", e._inputElement.style.top = "0px", e._inputElement.style.opacity = 0;
                        var t;
                        t = e._simpleElement == e._inputElement ? e._multiElement : e._simpleElement, t.style.display = "block", e._inputDIV.style.left = "0px", e._inputDIV.style.top = "-100px", e._inputDIV.style.height = "0px", e._inputDIV.style.width = "0px"
                    }
                    e._stageText && (e._stageText._onDisconnect(), e._stageText = null, this.canvas.userTyping = !1)
                }, p.getInputElement = function(e) {
                    var t = this;
                    t.clearInputElement(), t._stageText = e, this.canvas.userTyping = !0, t._stageText.$textfield.multiline ? t._inputElement = t._multiElement : t._inputElement = t._simpleElement;
                    var i;
                    return i = t._simpleElement == t._inputElement ? t._multiElement : t._simpleElement, i.style.display = "none", t._inputElement
                }, t
            }();
        t.HTMLInput = i, e.registerClass(i, "egret.web.HTMLInput")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(e) {
        function t(e) {
            var t = e.stage ? e.stage.$hashCode : 0,
                i = n[t],
                s = r[t],
                a = o[t];
            return s && a && (delete r[t], delete o[t]), i
        }

        function i(e, t, i, s) {
            e._initStageDelegateDiv(i, s), n[t.$hashCode] = e, r[t.$hashCode] = s, o[t.$hashCode] = i
        }
        var n = {},
            r = {},
            o = {};
        e.$getTextAdapter = t, e.$cacheTextAdapter = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = [],
            n = -1 != navigator.userAgent.indexOf("QQBrowser"),
            r = function() {
                function t() {
                    e.sys.sharedRenderContext = this.create().renderContext;
                    for (var t = 0; 3 > t; t++) i.push(this.create())
                }
                var r = (__define, t);
                return p = r.prototype, p.create = function(t) {
                    var r = t || i.length > 3 ? i.pop() : null;
                    if (!r) {
                        var o = document.createElement("canvas");
                        if (o.width = o.height = 1, n && !this.testCanvasValid(o)) return e.warn("failed to create canvas!"), null;
                        r = this.createSurface(o)
                    }
                    return r
                }, p.release = function(e) {
                    e && (n || (e.width = e.height = 1), i.push(e))
                }, p.testCanvasValid = function(e) {
                    e.height = 1, e.width = 1;
                    var t = e.toDataURL("image/png");
                    return "data:," == t ? !1 : !0
                }, p.createSurface = function(t) {
                    var i = t.getContext("2d");
                    if (t.renderContext = i, i.surface = t, e.$toBitmapData(t), e.sys.isUndefined(i.imageSmoothingEnabled)) {
                        for (var n = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"], r = n.length - 1; r >= 0; r--) {
                            var o = n[r];
                            if (void 0 !== i[o]) break
                        }
                        try {
                            Object.defineProperty(i, "imageSmoothingEnabled", {
                                get: function() {
                                    return this[o]
                                },
                                set: function(e) {
                                    this[o] = e
                                }
                            })
                        } catch (s) {
                            i.imageSmoothingEnabled = i[o]
                        }
                    }
                    return t
                }, t
            }();
        t.CanvasFactory = r, e.registerClass(r, "egret.web.CanvasFactory", ["egret.sys.SurfaceFactory"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i(i, n) {
                    var r = this;
                    t.call(this), this.onTouchBegin = function(e) {
                        var t = r.getLocation(e);
                        r.touch.onTouchBegin(t.x, t.y, e.identifier)
                    }, this.onTouchMove = function(e) {
                        var t = r.getLocation(e);
                        r.touch.onTouchMove(t.x, t.y, e.identifier)
                    }, this.onTouchEnd = function(e) {
                        var t = r.getLocation(e);
                        r.touch.onTouchEnd(t.x, t.y, e.identifier)
                    }, this.scaleX = 1, this.scaleY = 1, this.rotation = 0, this.canvas = n, this.touch = new e.sys.TouchHandler(i), this.addListeners()
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, p.addListeners = function() {
                    var t = this;
                    window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(e) {
                        e.identifier = e.pointerId, t.onTouchBegin(e), t.prevent(e)
                    }, !1), this.canvas.addEventListener("MSPointerMove", function(e) {
                        e.identifier = e.pointerId, t.onTouchMove(e), t.prevent(e)
                    }, !1), this.canvas.addEventListener("MSPointerUp", function(e) {
                        e.identifier = e.pointerId, t.onTouchEnd(e), t.prevent(e)
                    }, !1)) : (e.Capabilities.$isMobile || this.addMouseListener(), this.addTouchListener())
                }, p.addMouseListener = function() {
                    this.canvas.addEventListener("mousedown", this.onTouchBegin), this.canvas.addEventListener("mousemove", this.onTouchMove), this.canvas.addEventListener("mouseup", this.onTouchEnd)
                }, p.addTouchListener = function() {
                    var e = this;
                    this.canvas.addEventListener("touchstart", function(t) {
                        for (var i = t.changedTouches.length, n = 0; i > n; n++) e.onTouchBegin(t.changedTouches[n]);
                        e.prevent(t)
                    }, !1), this.canvas.addEventListener("touchmove", function(t) {
                        for (var i = t.changedTouches.length, n = 0; i > n; n++) e.onTouchMove(t.changedTouches[n]);
                        e.prevent(t)
                    }, !1), this.canvas.addEventListener("touchend", function(t) {
                        for (var i = t.changedTouches.length, n = 0; i > n; n++) e.onTouchEnd(t.changedTouches[n]);
                        e.prevent(t)
                    }, !1), this.canvas.addEventListener("touchcancel", function(t) {
                        for (var i = t.changedTouches.length, n = 0; i > n; n++) e.onTouchEnd(t.changedTouches[n]);
                        e.prevent(t)
                    }, !1)
                }, p.prevent = function(e) {
                    e.stopPropagation(), 1 == e.isScroll || this.canvas.userTyping || e.preventDefault()
                }, p.getLocation = function(t) {
                    t.identifier = +t.identifier || 0;
                    var i = document.documentElement,
                        n = this.canvas.getBoundingClientRect(),
                        r = n.left + window.pageXOffset - i.clientLeft,
                        o = n.top + window.pageYOffset - i.clientTop,
                        s = t.pageX - r,
                        a = s,
                        l = t.pageY - o,
                        h = l;
                    return 90 == this.rotation ? (a = l, h = n.width - s) : -90 == this.rotation && (a = n.height - l, h = s), a /= this.scaleX, h /= this.scaleY, e.$TempPoint.setTo(Math.round(a), Math.round(h))
                }, p.updateScaleMode = function(e, t, i) {
                    this.scaleX = e, this.scaleY = t, this.rotation = i
                }, p.$updateMaxTouches = function() {
                    this.touch.$initMaxTouches()
                }, i
            }(e.HashObject);
        t.WebTouchHandler = i, e.registerClass(i, "egret.web.WebTouchHandler")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i(e) {
                    t.call(this), this.isActivate = !0, this.stage = e, this.registerListener()
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, p.registerListener = function() {
                    var t = this,
                        i = function() {
                            t.isActivate && (t.isActivate = !1, t.stage.dispatchEvent(new e.Event(e.Event.DEACTIVATE)))
                        },
                        n = function() {
                            t.isActivate || (t.isActivate = !0, t.stage.dispatchEvent(new e.Event(e.Event.ACTIVATE)))
                        },
                        r = function() {
                            document[o] ? i() : n()
                        };
                    window.addEventListener("focus", n, !1), window.addEventListener("blur", i, !1);
                    var o, s;
                    "undefined" != typeof document.hidden ? (o = "hidden", s = "visibilitychange") : "undefined" != typeof document.mozHidden ? (o = "mozHidden", s = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (o = "msHidden", s = "msvisibilitychange") : "undefined" != typeof document.webkitHidden ? (o = "webkitHidden", s = "webkitvisibilitychange") : "undefined" != typeof document.oHidden && (o = "oHidden", s = "ovisibilitychange"), "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", n, !1), window.addEventListener("pagehide", i, !1)), o && s && document.addEventListener(s, r, !1);
                    var a = navigator.userAgent,
                        l = /micromessenger/gi.test(a),
                        h = /mqq/gi.test(a),
                        u = /mobile.*qq/gi.test(a);
                    if ((u || l) && (h = !1), h) {
                        var d = window.browser || {};
                        d.execWebFn = d.execWebFn || {}, d.execWebFn.postX5GamePlayerMessage = function(e) {
                            var t = e.type;
                            "app_enter_background" == t ? i() : "app_enter_foreground" == t && n()
                        }, window.browser = d
                    }
                }, i
            }(e.HashObject);
        t.WebHideHandler = i, e.registerClass(i, "egret.web.WebHideHandler")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        function i(e, t) {
            var i = "";
            if (null != t) i = n(e, t);
            else {
                if (null == a) {
                    var r = document.createElement("div").style;
                    a = n("transform", r)
                }
                i = a
            }
            return "" == i ? e : i + e.charAt(0).toUpperCase() + e.substring(1, e.length)
        }

        function n(e, t) {
            if (e in t) return "";
            e = e.charAt(0).toUpperCase() + e.substring(1, e.length);
            for (var i = ["webkit", "ms", "Moz", "O"], n = 0; n < i.length; n++) {
                var r = i[n] + e;
                if (r in t) return i[n]
            }
            return ""
        }
        var r = function() {
                function e() {}
                var t = (__define, e);
                return p = t.prototype, e.QQ_AUDIO = 1, e.WEB_AUDIO = 2, e.HTML5_AUDIO = 3, e
            }();
        t.AudioType = r, e.registerClass(r, "egret.web.AudioType");
        var o = function() {
                function e() {}
                var t = (__define, e);
                return p = t.prototype, e.WPHONE = 1, e.IOS = 2, e.ADNROID = 3, e
            }();
        t.SystemOSType = o, e.registerClass(o, "egret.web.SystemOSType");
        var s = function(t) {
                function i() {
                    t.call(this)
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, i._init = function() {
                    var t = navigator.userAgent.toLowerCase();
                    if (i.ua = t, e.Capabilities.$isMobile = -1 != t.indexOf("mobile") || -1 != t.indexOf("android"), i._canUseBlob = !1, i._audioType = r.HTML5_AUDIO, i._AudioClass = e.web.HtmlSound, i._audioMustLoad = !0, t.indexOf("windows phone") >= 0) i._System_OS = o.WPHONE, i._audioMustLoad = !1, e.Capabilities.$os = "Windows Phone";
                    else if (t.indexOf("android") >= 0) {
                        if (i._System_OS = o.ADNROID, t.indexOf("ucbrowser") >= 0 && (i._audioMustLoad = !1), e.Capabilities.$os = "Android", i._System_OS = o.ADNROID, window.hasOwnProperty("QZAppExternal") && t.indexOf("qzone") >= 0) {
                            i._audioType = r.QQ_AUDIO, i._AudioClass = e.web.QQSound;
                            var n = document.getElementsByTagName("base");
                            if (n && n.length > 0) i._QQRootPath = n[0].baseURI;
                            else {
                                var s = window.location.href.indexOf("?"); - 1 == s && (s = window.location.href.length);
                                var a = window.location.href.substring(0, s);
                                a = a.substring(0, a.lastIndexOf("/")), i._QQRootPath = a + "/"
                            }
                        }
                    } else t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0 ? (e.Capabilities.$os = "iOS", i._System_OS = o.IOS, i.getIOSVersion() >= 7 && (i._canUseBlob = !0, i._AudioClass = e.web.WebAudioSound, i._audioType = r.WEB_AUDIO)) : -1 != t.indexOf("windows nt") ? e.Capabilities.$os = "Windows PC" : -1 != t.indexOf("mac os") && (e.Capabilities.$os = "Mac OS");
                    var l = window.URL || window.webkitURL;
                    l || (i._canUseBlob = !1);
                    var h = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
                    h || i._audioType != r.WEB_AUDIO || (i._audioType = r.HTML5_AUDIO, i._AudioClass = e.web.HtmlSound), e.Sound = i._AudioClass
                }, i.getIOSVersion = function() {
                    var e = i.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
                    return parseInt(e.match(/\d(_\d)*/)[0]) || 0
                }, i.checkHtml5Support = function() {
                    var t = (navigator.language || navigator.browserLanguage).toLowerCase(),
                        i = t.split("-");
                    i.length > 1 && (i[1] = i[1].toUpperCase()), e.Capabilities.$language = i.join("-")
                }, i._canUseBlob = !1, i._audioType = 0, i._audioMustLoad = !1, i._QQRootPath = "", i._System_OS = 0, i.ua = "", i
            }(e.HashObject);
        t.Html5Capatibility = s, e.registerClass(s, "egret.web.Html5Capatibility"), s._init();
        var a = null;
        t.getPrefixStyleName = i, t.getPrefix = n
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        function i() {
            if (s) for (var e = document.querySelectorAll(".egret-player"), t = e.length, i = 0; t > i; i++) {
                var n = e[i],
                    r = n["egret-player"];
                r.updateScreenSize()
            }
        }

        function n() {
            if (!s) {
                s = !0;
                var i = e.sys.$ticker;
                r(i);
                var n = new t.CanvasFactory;
                e.sys.surfaceFactory = n, e.sys.screenAdapter || (e.sys.screenAdapter = new e.sys.ScreenAdapter);
                for (var o = document.querySelectorAll(".egret-player"), a = o.length, l = 0; a > l; l++) {
                    var h = o[l],
                        u = new t.WebPlayer(h);
                    h["egret-player"] = u
                }
            }
        }

        function r(e) {
            function t() {
                e.update(), i.call(window, t)
            }
            var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            i || (i = function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }), i.call(window, t)
        }

        function o() {
            l = 0 / 0, e.updateAllScreens()
        }
        var s = !1;
        window.isNaN = function(e) {
            return e = +e, e !== e
        };
        var a = CanvasRenderingContext2D.prototype.fill;
        CanvasRenderingContext2D.prototype.fill = function() {
            var e = this.fillStyle;
            if ("string" != typeof e) {
                var t = e.matrix;
                t ? (this.save(), this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty), a.call(this), this.restore()) : a.call(this)
            } else a.call(this)
        }, e.runEgret = n, e.updateAllScreens = i;
        var l = 0 / 0;
        window.addEventListener("resize", function() {
            isNaN(l) && (l = window.setTimeout(o, 300))
        })
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})), void 0 == window.HTMLVideoElement && (window.HTMLVideoElement = HTMLDivElement);
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = "egret.BitmapData";
        e.registerClass(HTMLImageElement, i), e.registerClass(HTMLCanvasElement, i), e.registerClass(HTMLVideoElement, i)
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function() {
                function t() {}
                var i = (__define, t);
                return p = i.prototype, t.detect = function() {
                    var t = e.Capabilities,
                        i = navigator.userAgent.toLowerCase();
                    t.$isMobile = -1 != i.indexOf("mobile") || -1 != i.indexOf("android"), t.$isMobile ? i.indexOf("windows") < 0 && (-1 != i.indexOf("iphone") || -1 != i.indexOf("ipad") || -1 != i.indexOf("ipod")) ? t.$os = "iOS" : -1 != i.indexOf("android") && -1 != i.indexOf("linux") ? t.$os = "Android" : -1 != i.indexOf("windows") && (t.$os = "Windows Phone") : -1 != i.indexOf("windows nt") ? t.$os = "Windows PC" : -1 != i.indexOf("mac os") && (t.$os = "Mac OS");
                    var n = (navigator.language || navigator.browserLanguage).toLowerCase(),
                        r = n.split("-");
                    r.length > 1 && (r[1] = r[1].toUpperCase()), t.$language = r.join("-")
                }, t
            }();
        t.WebCapability = i, e.registerClass(i, "egret.web.WebCapability"), i.detect()
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        function i(e) {
            if (window.location) {
                var t = location.search;
                if ("" == t) return "";
                t = t.slice(1);
                for (var i = t.split("&"), n = i.length, r = 0; n > r; r++) {
                    var o = i[r],
                        s = o.split("=");
                    if (s[0] == e) return s[1]
                }
            }
            return ""
        }
        t.getOption = i, e.getOption = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(i) {
                function n(e) {
                    i.call(this), this.init(e), this.initOrientation()
                }
                __extends(n, i);
                var r = (__define, n);
                return p = r.prototype, p.init = function(i) {
                    var n = this.readOption(i),
                        r = new e.Stage;
                    r.$screen = this, r.$scaleMode = n.scaleMode, r.$orientation = n.orientation, r.$maxTouches = n.maxTouches, r.frameRate = n.frameRate, r.textureScaleFactor = n.textureScaleFactor;
                    var o = e.sys.surfaceFactory.create(),
                        s = o;
                    this.attachCanvas(i, s);
                    var a = new t.WebTouchHandler(r, s),
                        l = new e.sys.Player(o.renderContext, r, n.entryClassName),
                        h = new e.web.WebHideHandler(r),
                        u = new t.HTMLInput;
                    l.showPaintRect(n.showPaintRect), (n.showFPS || n.showLog) && l.displayFPS(n.showFPS, n.showLog, n.logFilter, n.fpsStyles), this.playerOption = n, this.container = i, this.canvas = s, this.stage = r, this.player = l, this.webTouchHandler = a, this.webInput = u, this.webHide = h, e.web.$cacheTextAdapter(u, r, i, s), this.updateScreenSize(), this.updateMaxTouches(), l.start()
                }, p.initOrientation = function() {
                    var t = this;
                    window.addEventListener("orientationchange", function() {
                        window.setTimeout(function() {
                            e.StageOrientationEvent.dispatchStageOrientationEvent(t.stage, e.StageOrientationEvent.ORIENTATION_CHANGE)
                        }, 350)
                    })
                }, p.readOption = function(t) {
                    var i = {};
                    i.entryClassName = t.getAttribute("data-entry-class"), i.scaleMode = t.getAttribute("data-scale-mode") || e.StageScaleMode.NO_SCALE, i.frameRate = +t.getAttribute("data-frame-rate") || 30, i.contentWidth = +t.getAttribute("data-content-width") || 480, i.contentHeight = +t.getAttribute("data-content-height") || 800, i.orientation = t.getAttribute("data-orientation") || e.OrientationMode.AUTO, i.maxTouches = +t.getAttribute("data-multi-fingered") || 2, i.textureScaleFactor = +t.getAttribute("texture-scale-factor") || 1, i.showPaintRect = "true" == t.getAttribute("data-show-paint-rect"), i.showFPS = "true" == t.getAttribute("data-show-fps");
                    for (var n = t.getAttribute("data-show-fps-style") || "", r = n.split(","), o = {}, s = 0; s < r.length; s++) {
                        var a = r[s].split(":");
                        o[a[0]] = a[1]
                    }
                    return i.fpsStyles = o, i.showLog = "true" == t.getAttribute("data-show-log"), i.logFilter = t.getAttribute("data-log-filter"), i
                }, p.attachCanvas = function(e, t) {
                    var i = t.style;
                    i.cursor = "default", i.position = "absolute", i.top = "0", i.bottom = "0", i.left = "0", i.right = "0", e.appendChild(t), i = e.style, i.overflow = "hidden", i.position = "relative", i.webkitTransform = "translateZ(0)"
                }, p.updateScreenSize = function() {
                    var t = this.canvas;
                    if (!t.userTyping) {
                        var i = this.playerOption,
                            n = this.container.getBoundingClientRect(),
                            r = !1,
                            o = this.stage.$orientation;
                        o != e.OrientationMode.AUTO && (r = o != e.OrientationMode.PORTRAIT && n.height > n.width || o == e.OrientationMode.PORTRAIT && n.width > n.height);
                        var s = r ? n.height : n.width,
                            a = r ? n.width : n.height,
                            l = e.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, s, a, i.contentWidth, i.contentHeight),
                            h = l.stageWidth,
                            u = l.stageHeight,
                            d = l.displayWidth,
                            c = l.displayHeight;
                        t.width !== h && (t.width = h), t.height !== u && (t.height = u), t.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", t.style.width = d + "px", t.style.height = c + "px";
                        var p = 0;
                        r ? o == e.OrientationMode.LANDSCAPE ? (p = 90, t.style.top = (n.height - d) / 2 + "px", t.style.left = (n.width + c) / 2 + "px") : (p = -90, t.style.top = (n.height + d) / 2 + "px", t.style.left = (n.width - c) / 2 + "px") : (t.style.top = (n.height - c) / 2 + "px", t.style.left = (n.width - d) / 2 + "px");
                        var g = "rotate(" + p + "deg)";
                        t.style[e.web.getPrefixStyleName("transform")] = g;
                        var f = d / h,
                            v = c / u;
                        this.webTouchHandler.updateScaleMode(f, v, p), this.webInput.$updateSize(), this.player.updateStageSize(h, u)
                    }
                }, p.setContentSize = function(e, t) {
                    var i = this.playerOption;
                    i.contentWidth = e, i.contentHeight = t, this.updateScreenSize()
                }, p.updateMaxTouches = function() {
                    this.webTouchHandler.$updateMaxTouches()
                }, n
            }(e.HashObject);
        t.WebPlayer = i, e.registerClass(i, "egret.web.WebPlayer", ["egret.sys.Screen"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        function i(t, i) {
            var n = e.sys.surfaceFactory.create(!0);
            if (!n) return null;
            var r = t.$getTextureWidth(),
                o = t.$getTextureHeight();
            null == i && (i = e.$TempRectangle, i.x = 0, i.y = 0, i.width = r, i.height = o), i.x = Math.min(i.x, r - 1), i.y = Math.min(i.y, o - 1), i.width = Math.min(i.width, r - i.x), i.height = Math.min(i.height, o - i.y);
            var s = i.width,
                a = i.height;
            n.width = s, n.height = a, n.style.width = s + "px", n.style.height = a + "px";
            var l = t;
            n.renderContext.imageSmoothingEnabled = !1;
            var h = Math.round(l._offsetX),
                u = Math.round(l._offsetY),
                d = l._bitmapWidth,
                c = l._bitmapHeight;
            return n.renderContext.drawImage(l._bitmapData, l._bitmapX + i.x / e.$TextureScaleFactor, l._bitmapY + i.y / e.$TextureScaleFactor, d * i.width / r, c * i.height / o, h, u, i.width, i.height), n
        }

        function n(t, n) {
            try {
                var r = i(this, n),
                    o = r.toDataURL(t);
                return e.sys.surfaceFactory.release(r), o
            } catch (s) {
                e.$error(1033)
            }
            return null
        }

        function r(e, t, i) {
            var r = n.call(this, e, i);
            if (null != r) {
                var o = r.replace(/^data:image[^;]*/, "data:image/octet-stream"),
                    s = document.createElement("a");
                s.download = t, s.href = o;
                var a = document.createEvent("HTMLEvents");
                a.initEvent("click", !1, !1), s.dispatchEvent(a)
            }
        }

        function o(t, n) {
            if (this._bitmapData && this._bitmapData.getContext) {
                var r = this._bitmapData.getContext("2d").getImageData(t - this._offsetX, n - this._offsetY, 1, 1);
                return r.data
            }
            var o = i(this, new e.Rectangle(t - 1, n - 1, 3, 3));
            return r = o.renderContext.getImageData(1, 1, 1, 1), r.data
        }
        e.Texture.prototype.toDataURL = n, e.Texture.prototype.saveToFile = r, e.Texture.prototype.getPixel32 = o
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        function i(e) {
            for (var t = a.parseFromString(e, "text/xml"), i = t.childNodes.length, r = 0; i > r; r++) {
                var o = t.childNodes[r];
                if (1 == o.nodeType) return n(o, null)
            }
            return null
        }

        function n(e, t) {
            if ("parsererror" == e.localName) throw new Error(e.textContent);
            for (var i = new o(e.localName, t, e.prefix, e.namespaceURI, e.nodeName), r = e.attributes, a = i.attributes, l = r.length, h = 0; l > h; h++) {
                var u = r[h],
                    d = u.name;
                0 != d.indexOf("xmlns:") && (a[d] = u.value, i["$" + d] = u.value)
            }
            var c = e.childNodes;
            l = c.length;
            var p = i.children;
            for (h = 0; l > h; h++) {
                var g = c[h],
                    f = g.nodeType,
                    v = null;
                if (1 == f) v = n(g, i);
                else if (3 == f) {
                    var m = g.textContent.trim();
                    m && (v = new s(m, i))
                }
                v && p.push(v)
            }
            return i
        }
        var r = function() {
                function e(e, t) {
                    this.nodeType = e, this.parent = t
                }
                var t = (__define, e);
                return p = t.prototype, e
            }();
        t.XMLNode = r, e.registerClass(r, "egret.web.XMLNode");
        var o = function(e) {
                function t(t, i, n, r, o) {
                    e.call(this, 1, i), this.attributes = {}, this.children = [], this.localName = t, this.prefix = n, this.namespace = r, this.name = o
                }
                __extends(t, e);
                var i = (__define, t);
                return p = i.prototype, t
            }(r);
        t.XML = o, e.registerClass(o, "egret.web.XML");
        var s = function(e) {
                function t(t, i) {
                    e.call(this, 3, i), this.text = t
                }
                __extends(t, e);
                var i = (__define, t);
                return p = i.prototype, t
            }(r);
        t.XMLText = s, e.registerClass(s, "egret.web.XMLText");
        var a = new DOMParser;
        e.XML = {
            parse: i
        }
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i() {
                    var i = this;
                    t.apply(this, arguments), this.onChange = function(t) {
                        var n = new e.OrientationEvent(e.Event.CHANGE);
                        n.beta = t.beta, n.gamma = t.gamma, n.alpha = t.alpha, i.dispatchEvent(n)
                    }
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, p.start = function() {
                    window.addEventListener("deviceorientation", this.onChange)
                }, p.stop = function() {
                    window.removeEventListener("deviceorientation", this.onChange)
                }, i
            }(e.EventDispatcher);
        t.WebDeviceOrientation = i, e.registerClass(i, "egret.web.WebDeviceOrientation", ["egret.DeviceOrientation"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})), egret.DeviceOrientation = egret.web.WebDeviceOrientation;
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i(i) {
                    var n = this;
                    t.call(this), this.onUpdate = function(t) {
                        var i = new e.GeolocationEvent(e.Event.CHANGE),
                            r = t.coords;
                        i.altitude = r.altitude, i.heading = r.heading, i.accuracy = r.accuracy, i.latitude = r.latitude, i.longitude = r.longitude, i.speed = r.speed, i.altitudeAccuracy = r.altitudeAccuracy, n.dispatchEvent(i)
                    }, this.onError = function(t) {
                        var i = e.GeolocationEvent.UNAVAILABLE;
                        t.code == t.PERMISSION_DENIED && (i = e.GeolocationEvent.PERMISSION_DENIED);
                        var r = new e.GeolocationEvent(e.IOErrorEvent.IO_ERROR);
                        r.errorType = i, r.errorMessage = t.message, n.dispatchEvent(r)
                    }, this.geolocation = navigator.geolocation
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, p.start = function() {
                    var t = this.geolocation;
                    t ? this.watchId = t.watchPosition(this.onUpdate, this.onError) : this.onError({
                        code: 2,
                        message: e.sys.tr(3004),
                        PERMISSION_DENIED: 1,
                        POSITION_UNAVAILABLE: 2
                    })
                }, p.stop = function() {
                    var e = this.geolocation;
                    e.clearWatch(this.watchId)
                }, i
            }(e.EventDispatcher);
        t.WebGeolocation = i, e.registerClass(i, "egret.web.WebGeolocation", ["egret.Geolocation"]), e.Geolocation = e.web.WebGeolocation
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var i = function(t) {
                function i() {
                    var i = this;
                    t.apply(this, arguments), this.onChange = function(t) {
                        var n = new e.MotionEvent(e.Event.CHANGE),
                            r = {
                                x: t.acceleration.x,
                                y: t.acceleration.y,
                                z: t.acceleration.z
                            },
                            o = {
                                x: t.accelerationIncludingGravity.x,
                                y: t.accelerationIncludingGravity.y,
                                z: t.accelerationIncludingGravity.z
                            },
                            s = {
                                alpha: t.rotationRate.alpha,
                                beta: t.rotationRate.beta,
                                gamma: t.rotationRate.gamma
                            };
                        n.acceleration = r, n.accelerationIncludingGravity = o, n.rotationRate = s, i.dispatchEvent(n)
                    }
                }
                __extends(i, t);
                var n = (__define, i);
                return p = n.prototype, p.start = function() {
                    window.addEventListener("devicemotion", this.onChange)
                }, p.stop = function() {
                    window.removeEventListener("devicemotion", this.onChange)
                }, i
            }(e.EventDispatcher);
        t.WebMotion = i, e.registerClass(i, "egret.web.WebMotion", ["egret.Motion"]), e.Motion = e.web.WebMotion
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
!
function(e) {
    var t;
    !
    function(e) {}(t = e.web || (e.web = {}))
}(egret || (egret = {}));

// game.min.js
var egret;
!
function(t) {
    var e = function(t) {
            function e(e, i, r) {
                t.call(this), this._name = e, this._frame = 0 | i, r && (this._end = 0 | r)
            }
            __extends(e, t);
            var i = __define,
                r = e;
            return p = r.prototype, i(p, "name", function() {
                return this._name
            }), i(p, "frame", function() {
                return this._frame
            }), i(p, "end", function() {
                return this._end
            }), p.clone = function() {
                return new e(this._name, this._frame, this._end)
            }, e
        }(t.EventDispatcher);
    t.FrameLabel = e, t.registerClass(e, "egret.FrameLabel")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(i) {
                e.call(this), this.$bitmapData = null, this.$movieClipData = null, this.frames = null, this.$totalFrames = 0, this.frameLabels = null, this.$frameLabelStart = 0, this.$frameLabelEnd = 0, this.frameEvents = null, this.frameIntervalTime = 0, this.$eventPool = null, this.$isPlaying = !1, this.isStopped = !0, this.playTimes = 0, this.$currentFrameNum = 0, this.$nextFrameNum = 0, this.displayedKeyFrameNum = 0, this.passedTime = 0, this.lastTime = 0, this.$renderRegion = new t.sys.Region, this.setMovieClipData(i)
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, p.$init = function() {
                this.$reset();
                var t = this.$movieClipData;
                t && t.$isDataValid() && (this.frames = t.frames, this.$totalFrames = t.numFrames, this.frameLabels = t.labels, this.frameEvents = t.events, this.frameIntervalTime = 1e3 / t.frameRate, this._initFrame())
            }, p.$reset = function() {
                this.frames = null, this.playTimes = 0, this.$isPlaying = !1, this.setIsStopped(!0), this.$currentFrameNum = 0, this.$nextFrameNum = 1, this.displayedKeyFrameNum = 0, this.passedTime = 0, this.$eventPool = []
            }, p._initFrame = function() {
                this.$movieClipData.$isTextureValid() && (this.advanceFrame(), this.constructFrame())
            }, p.$render = function(t) {
                var e = this.$bitmapData;
                if (e) {
                    t.imageSmoothingEnabled = !1;
                    var i = Math.round(e._offsetX),
                        r = Math.round(e._offsetY),
                        s = e._bitmapWidth,
                        n = e._bitmapHeight,
                        o = Math.round(e.$getScaleBitmapWidth()),
                        a = Math.round(e.$getScaleBitmapHeight());
                    t.drawImage(e._bitmapData, e._bitmapX, e._bitmapY, s, n, i, r, o, a)
                }
            }, p.$measureContentBounds = function(t) {
                var e = this.$bitmapData;
                if (e) {
                    var i = e._offsetX,
                        r = e._offsetY,
                        s = e.$getTextureWidth(),
                        n = e.$getTextureHeight();
                    t.setTo(i, r, s, n)
                } else t.setEmpty()
            }, p.$onAddToStage = function(t, i) {
                e.prototype.$onAddToStage.call(this, t, i), this.$isPlaying && this.$totalFrames > 1 && this.setIsStopped(!1)
            }, p.$onRemoveFromStage = function() {
                e.prototype.$onRemoveFromStage.call(this), this.setIsStopped(!0)
            }, p.getFrameLabelByName = function(t, e) {
                void 0 === e && (e = !1), e && (t = t.toLowerCase());
                var i = this.frameLabels;
                if (i) for (var r = null, s = 0; s < i.length; s++) if (r = i[s], e ? r.name.toLowerCase() == t : r.name == t) return r;
                return null
            }, p.getFrameStartEnd = function(t) {
                var e = this.frameLabels;
                if (e) for (var i = null, r = 0; r < e.length; r++) if (i = e[r], t == i.name) {
                    this.$frameLabelStart = i.frame, this.$frameLabelEnd = i.end;
                    break
                }
            }, p.getFrameLabelByFrame = function(t) {
                var e = this.frameLabels;
                if (e) for (var i = null, r = 0; r < e.length; r++) if (i = e[r], i.frame == t) return i;
                return null
            }, p.getFrameLabelForFrame = function(t) {
                var e = null,
                    i = null,
                    r = this.frameLabels;
                if (r) for (var s = 0; s < r.length; s++) {
                    if (i = r[s], i.frame > t) return e;
                    e = i
                }
                return e
            }, p.play = function(t) {
                void 0 === t && (t = 0), this.$isPlaying = !0, this.setPlayTimes(t), this.$totalFrames > 1 && this.$stage && this.setIsStopped(!1)
            }, p.stop = function() {
                this.$isPlaying = !1, this.setIsStopped(!0)
            }, p.prevFrame = function() {
                this.gotoAndStop(this.$currentFrameNum - 1)
            }, p.nextFrame = function() {
                this.gotoAndStop(this.$currentFrameNum + 1)
            }, p.gotoAndPlay = function(e, i) {
                void 0 === i && (i = 0), (0 == arguments.length || arguments.length > 2) && t.$error(1022, "MovieClip.gotoAndPlay()"), "string" == typeof e ? this.getFrameStartEnd(e) : (this.$frameLabelStart = 0, this.$frameLabelEnd = 0), this.play(i), this.gotoFrame(e)
            }, p.gotoAndStop = function(e) {
                1 != arguments.length && t.$error(1022, "MovieClip.gotoAndStop()"), this.stop(), this.gotoFrame(e)
            }, p.gotoFrame = function(e) {
                var i;
                "string" == typeof e ? i = this.getFrameLabelByName(e).frame : (i = parseInt(e + "", 10), i != e && t.$error(1022, "Frame Label Not Found")), 1 > i ? i = 1 : i > this.$totalFrames && (i = this.$totalFrames), i != this.$nextFrameNum && (this.$nextFrameNum = i, this.advanceFrame(), this.constructFrame(), this.handlePendingEvent())
            }, p.advanceTime = function(e) {
                var i = this,
                    r = e - i.lastTime;
                i.lastTime = e;
                var s = i.frameIntervalTime,
                    n = i.passedTime + r;
                i.passedTime = n % s;
                var o = n / s;
                if (1 > o) return !1;
                for (; o >= 1;) {
                    if (o--, i.$nextFrameNum++, i.$nextFrameNum > i.$totalFrames || i.$frameLabelStart > 0 && i.$nextFrameNum > i.$frameLabelEnd) if (-1 == i.playTimes) i.$eventPool.push(t.Event.LOOP_COMPLETE), i.$nextFrameNum = 1;
                    else {
                        if (i.playTimes--, !(i.playTimes > 0)) {
                            i.$nextFrameNum = i.$totalFrames, i.$eventPool.push(t.Event.COMPLETE), i.stop();
                            break
                        }
                        i.$eventPool.push(t.Event.LOOP_COMPLETE), i.$nextFrameNum = 1
                    }
                    i.$currentFrameNum == i.$frameLabelEnd && (i.$nextFrameNum = i.$frameLabelStart), i.advanceFrame()
                }
                return i.constructFrame(), i.handlePendingEvent(), !1
            }, p.advanceFrame = function() {
                this.$currentFrameNum = this.$nextFrameNum
            }, p.constructFrame = function() {
                var e = this.$currentFrameNum;
                if (this.displayedKeyFrameNum != e) {
                    var i = this.frameEvents[e];
                    i && "" != i && t.MovieClipEvent.dispatchMovieClipEvent(this, t.MovieClipEvent.FRAME_LABEL, i), this.$bitmapData = this.$movieClipData.getTextureByFrame(e), this.$invalidateContentBounds(), this.displayedKeyFrameNum = e
                }
            }, p.handlePendingEvent = function() {
                if (0 != this.$eventPool.length) {
                    this.$eventPool.reverse();
                    for (var e = this.$eventPool, i = e.length, r = !1, s = !1, n = 0; i > n; n++) {
                        var o = e.pop();
                        o == t.Event.LOOP_COMPLETE ? s = !0 : o == t.Event.COMPLETE ? r = !0 : this.dispatchEventWith(o)
                    }
                    s && this.dispatchEventWith(t.Event.LOOP_COMPLETE), r && this.dispatchEventWith(t.Event.COMPLETE)
                }
            }, r(p, "totalFrames", function() {
                return this.$totalFrames
            }), r(p, "currentFrame", function() {
                return this.$currentFrameNum
            }), r(p, "currentFrameLabel", function() {
                var t = this.getFrameLabelByFrame(this.$currentFrameNum);
                return t && t.name
            }), r(p, "currentLabel", function() {
                var t = this.getFrameLabelForFrame(this.$currentFrameNum);
                return t ? t.name : null
            }), r(p, "frameRate", function() {
                return this.$movieClipData.frameRate
            }, function(t) {
                t != this.$movieClipData.frameRate && (this.$movieClipData.frameRate = t, this.frameIntervalTime = 1e3 / this.$movieClipData.frameRate)
            }), r(p, "isPlaying", function() {
                return this.$isPlaying
            }), r(p, "movieClipData", function() {
                return this.$movieClipData
            }, function(t) {
                this.setMovieClipData(t)
            }), p.setMovieClipData = function(t) {
                this.$movieClipData != t && (this.$movieClipData = t, this.$init())
            }, p.setPlayTimes = function(t) {
                (0 > t || t >= 1) && (this.playTimes = 0 > t ? -1 : Math.floor(t))
            }, p.setIsStopped = function(e) {
                this.isStopped != e && (this.isStopped = e, e ? (this.playTimes = 0, t.sys.$ticker.$stopTick(this.advanceTime, this)) : (this.playTimes = 0 == this.playTimes ? 1 : this.playTimes, this.lastTime = t.getTimer(), t.sys.$ticker.$startTick(this.advanceTime, this)))
            }, i
        }(t.DisplayObject);
    t.MovieClip = e, t.registerClass(e, "egret.MovieClip")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this.$mcData = null, this.numFrames = 1, this.frames = [], this.labels = null, this.events = [], this.frameRate = 0, this.textureData = null, this.spriteSheet = null
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, p.$init = function(t, e, i) {
                this.textureData = e, this.spriteSheet = i, this.setMCData(t)
            }, p.getKeyFrameData = function(t) {
                var e = this.frames[t - 1];
                return e.frame && (e = this.frames[e.frame - 1]), e
            }, p.getTextureByFrame = function(t) {
                var e = this.getKeyFrameData(t);
                if (e.res) {
                    var i = this.getTextureByResName(e.res);
                    return i._offsetX = 0 | e.x, i._offsetY = 0 | e.y, i
                }
                return null
            }, p.getTextureByResName = function(t) {
                var e = this.spriteSheet.getTexture(t);
                if (!e) {
                    var i = this.textureData[t];
                    e = this.spriteSheet.createTexture(t, i.x, i.y, i.w, i.h)
                }
                return e
            }, p.$isDataValid = function() {
                return this.frames.length > 0
            }, p.$isTextureValid = function() {
                return null != this.textureData && null != this.spriteSheet
            }, p.$fillMCData = function(t) {
                this.frameRate = t.frameRate || 24, this.fillFramesData(t.frames), this.fillFrameLabelsData(t.labels), this.fillFrameEventsData(t.events)
            }, p.fillFramesData = function(t) {
                for (var e, i = this.frames, r = t ? t.length : 0, s = 0; r > s; s++) {
                    var n = t[s];
                    if (i.push(n), n.duration) {
                        var o = parseInt(n.duration);
                        if (o > 1) {
                            e = i.length;
                            for (var a = 1; o > a; a++) i.push({
                                frame: e
                            })
                        }
                    }
                }
                this.numFrames = i.length
            }, p.fillFrameLabelsData = function(e) {
                if (e) {
                    var i = e.length;
                    if (i > 0) {
                        this.labels = [];
                        for (var r = 0; i > r; r++) {
                            var s = e[r];
                            this.labels.push(new t.FrameLabel(s.name, s.frame, s.end))
                        }
                    }
                }
            }, p.fillFrameEventsData = function(t) {
                if (t) {
                    var e = t.length;
                    if (e > 0) {
                        this.events = [];
                        for (var i = 0; e > i; i++) {
                            var r = t[i];
                            this.events[r.frame] = r.name
                        }
                    }
                }
            }, r(p, "mcData", function() {
                return this.$mcData
            }, function(t) {
                this.setMCData(t)
            }), p.setMCData = function(t) {
                this.$mcData != t && (this.$mcData = t, t && this.$fillMCData(t))
            }, i
        }(t.HashObject);
    t.MovieClipData = e, t.registerClass(e, "egret.MovieClipData")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i) {
                e.call(this), this.enableCache = !0, this.$mcDataCache = {}, this.$mcDataSet = t, this.setTexture(i)
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, p.clearCache = function() {
                this.$mcDataCache = {}
            }, p.generateMovieClipData = function(e) {
                if (void 0 === e && (e = ""), "" == e && this.$mcDataSet) for (e in this.$mcDataSet.mc) break;
                if ("" == e) return null;
                var i = this.findFromCache(e, this.$mcDataCache);
                return i || (i = new t.MovieClipData, this.fillData(e, i, this.$mcDataCache)), i
            }, p.findFromCache = function(t, e) {
                return this.enableCache && e[t] ? e[t] : null
            }, p.fillData = function(t, e, i) {
                if (this.$mcDataSet) {
                    var r = this.$mcDataSet.mc[t];
                    r && (e.$init(r, this.$mcDataSet.res, this.$spriteSheet), this.enableCache && (i[t] = e))
                }
            }, r(p, "mcDataSet", function() {
                return this.$mcDataSet
            }, function(t) {
                this.$mcDataSet = t
            }), r(p, "texture", void 0, function(t) {
                this.setTexture(t)
            }), r(p, "spriteSheet", function() {
                return this.$spriteSheet
            }), p.setTexture = function(e) {
                this.$spriteSheet = e ? new t.SpriteSheet(e) : null
            }, i
        }(t.EventDispatcher);
    t.MovieClipDataFactory = e, t.registerClass(e, "egret.MovieClipDataFactory")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(t, i, r, s) {
                void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === s && (s = null), e.call(this, t, i, r), this.frameLabel = null, this.frameLabel = s
            }
            __extends(i, e);
            var r = (__define, i);
            return p = r.prototype, i.dispatchMovieClipEvent = function(e, r, s) {
                void 0 === s && (s = null);
                var n = t.Event.create(i, r);
                n.frameLabel = s;
                var o = e.dispatchEvent(n);
                return t.Event.release(n), o
            }, i.FRAME_LABEL = "frame_label", i
        }(t.Event);
    t.MovieClipEvent = e, t.registerClass(e, "egret.MovieClipEvent")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function e() {
                t.$error(1014)
            }
            var i = (__define, e);
            return p = i.prototype, e.get = function(t) {
                return -1 > t && (t = -1), t > 1 && (t = 1), function(e) {
                    return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
                }
            }, e.getPowOut = function(t) {
                return function(e) {
                    return 1 - Math.pow(1 - e, t)
                }
            }, e.quintOut = e.getPowOut(5), e.quartOut = e.getPowOut(4), e
        }();
    t.ScrollEase = e, t.registerClass(e, "egret.ScrollEase");
    var i = function(e) {
            function i(t, i, r) {
                e.call(this), this._target = null, this._useTicks = !1, this.ignoreGlobalPause = !1, this.loop = !1, this.pluginData = null, this._steps = null, this._actions = null, this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = null, this._prevPosition = 0, this._stepPosition = 0, this.passive = !1, this.initialize(t, i, r)
            }
            __extends(i, e);
            var r = (__define, i);
            return p = r.prototype, i.get = function(t, e, r, s) {
                return void 0 === e && (e = null), void 0 === r && (r = null), void 0 === s && (s = !1), s && i.removeTweens(t), new i(t, e, r)
            }, i.removeTweens = function(t) {
                if (t.tween_count) {
                    for (var e = i._tweens, r = e.length - 1; r >= 0; r--) e[r]._target == t && (e[r].paused = !0, e.splice(r, 1));
                    t.tween_count = 0
                }
            }, i.tick = function(t, e) {
                void 0 === e && (e = !1);
                var r = t - i._lastTime;
                i._lastTime = t;
                for (var s = i._tweens.concat(), n = s.length - 1; n >= 0; n--) {
                    var o = s[n];
                    e && !o.ignoreGlobalPause || o.paused || o.tick(o._useTicks ? 1 : r)
                }
                return !1
            }, i._register = function(e, r) {
                var s = e._target,
                    n = i._tweens;
                if (r) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1), n.push(e), i._inited || (i._lastTime = t.getTimer(), t.sys.$ticker.$startTick(i.tick, null), i._inited = !0);
                else {
                    s && s.tween_count--;
                    for (var o = n.length; o--;) if (n[o] == e) return void n.splice(o, 1)
                }
            }, p.initialize = function(t, e, r) {
                this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && i.removeTweens(t)), this.pluginData = r || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], e && e.paused ? this.paused = !0 : i._register(this, !0), e && null != e.position && this.setPosition(e.position)
            }, p.setPosition = function(t, e) {
                void 0 === e && (e = 1), 0 > t && (t = 0);
                var i = t,
                    r = !1;
                if (i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, r = !0)), i == this._prevPos) return r;
                var s = this._prevPos;
                if (this.position = this._prevPos = i, this._prevPosition = t, this._target) if (r) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                    for (var n = 0, o = this._steps.length; o > n && !(this._steps[n].t > i); n++);
                    var a = this._steps[n - 1];
                    this._updateTargetProps(a, (this._stepPosition = i - a.t) / a.d)
                }
                return r && this.setPaused(!0), 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(i, i) : 1 == e && s > i ? (s != this.duration && this._runActions(s, this.duration), this._runActions(0, i, !0)) : this._runActions(s, i)), this.dispatchEventWith("change"), r
            }, p._runActions = function(t, e, i) {
                void 0 === i && (i = !1);
                var r = t,
                    s = e,
                    n = -1,
                    o = this._actions.length,
                    a = 1;
                for (t > e && (r = e, s = t, n = o, o = a = -1);
                (n += a) != o;) {
                    var h = this._actions[n],
                        l = h.t;
                    (l == s || l > r && s > l || i && l == t) && h.f.apply(h.o, h.p)
                }
            }, p._updateTargetProps = function(t, e) {
                var r, s, n, o, a, h;
                if (t || 1 != e) {
                    if (this.passive = !! t.v, this.passive) return;
                    t.e && (e = t.e(e, 0, 1, 1)), r = t.p0, s = t.p1
                } else this.passive = !1, r = s = this._curQueueProps;
                for (var l in this._initQueueProps) {
                    null == (o = r[l]) && (r[l] = o = this._initQueueProps[l]), null == (a = s[l]) && (s[l] = a = o), n = o == a || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? a : o : o + (a - o) * e;
                    var c = !1;
                    if (h = i._plugins[l]) for (var u = 0, _ = h.length; _ > u; u++) {
                        var p = h[u].tween(this, l, n, r, s, e, !! t && r == s, !t);
                        p == i.IGNORE ? c = !0 : n = p
                    }
                    c || (this._target[l] = n)
                }
            }, p.setPaused = function(t) {
                return this.paused = t, i._register(this, !t), this
            }, p._cloneProps = function(t) {
                var e = {};
                for (var i in t) e[i] = t[i];
                return e
            }, p._addStep = function(t) {
                return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
            }, p._appendQueueProps = function(e) {
                var r, s, n, o, a;
                for (var h in e) if (t.sys.isUndefined(this._initQueueProps[h])) {
                    if (s = this._target[h], r = i._plugins[h]) for (n = 0, o = r.length; o > n; n++) s = r[n].init(this, h, s);
                    this._initQueueProps[h] = this._curQueueProps[h] = void 0 === s ? null : s
                } else s = this._curQueueProps[h];
                for (var h in e) {
                    if (s = this._curQueueProps[h], r = i._plugins[h]) for (a = a || {}, n = 0, o = r.length; o > n; n++) r[n].step && r[n].step(this, h, s, e[h], a);
                    this._curQueueProps[h] = e[h]
                }
                return a && this._appendQueueProps(a), this._curQueueProps
            }, p._addAction = function(t) {
                return t.t = this.duration, this._actions.push(t), this
            }, p.to = function(t, e, i) {
                return void 0 === i && (i = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
                    d: e || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: i,
                    p1: this._cloneProps(this._appendQueueProps(t))
                })
            }, p.call = function(t, e, i) {
                return void 0 === e && (e = void 0), void 0 === i && (i = void 0), this._addAction({
                    f: t,
                    p: i ? i : [],
                    o: e ? e : this._target
                })
            }, p.tick = function(t) {
                this.paused || this.setPosition(this._prevPosition + t)
            }, i._tweens = [], i.IGNORE = {}, i._plugins = {}, i._inited = !1, i._lastTime = 0, i
        }(t.EventDispatcher);
    t.ScrollTween = i, t.registerClass(i, "egret.ScrollTween")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(i) {
                void 0 === i && (i = null), e.call(this), this.scrollBeginThreshold = 10, this.scrollSpeed = 1, this._content = null, this.delayTouchBeginEvent = null, this.touchBeginTimer = null, this.touchEnabled = !0, this._ScrV_Props_ = new t.ScrollViewProperties, i && this.setContent(i)
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, r(p, "bounces", function() {
                return this._ScrV_Props_._bounces
            }, function(t) {
                this._ScrV_Props_._bounces = !! t
            }), p.setContent = function(t) {
                this._content !== t && (this.removeContent(), t && (this._content = t, e.prototype.addChild.call(this, t), this._addEvents()))
            }, p.removeContent = function() {
                this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0)), this._content = null
            }, r(p, "verticalScrollPolicy", function() {
                return this._ScrV_Props_._verticalScrollPolicy
            }, function(t) {
                t != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = t)
            }), r(p, "horizontalScrollPolicy", function() {
                return this._ScrV_Props_._horizontalScrollPolicy
            }, function(t) {
                t != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = t)
            }), r(p, "scrollLeft", function() {
                return this._ScrV_Props_._scrollLeft
            }, function(t) {
                t != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = t, this._validatePosition(!1, !0), this._updateContentPosition())
            }), r(p, "scrollTop", function() {
                return this._ScrV_Props_._scrollTop
            }, function(t) {
                t != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = t, this._validatePosition(!0, !1), this._updateContentPosition())
            }), p.setScrollPosition = function(t, e, i) {
                if (void 0 === i && (i = !1), (!i || 0 != t || 0 != e) && (i || this._ScrV_Props_._scrollTop != t || this._ScrV_Props_._scrollLeft != e)) {
                    var r = this._ScrV_Props_._scrollTop,
                        s = this._ScrV_Props_._scrollLeft;
                    if (i) {
                        var n = this.getMaxScrollLeft(),
                            o = this.getMaxScrollTop();
                        (0 >= r || r >= o) && (t /= 2), (0 >= s || s >= n) && (e /= 2);
                        var a = r + t,
                            h = s + e,
                            l = this._ScrV_Props_._bounces;
                        l || ((0 >= a || a >= o) && (a = Math.max(0, Math.min(a, o))), (0 >= h || h >= n) && (h = Math.max(0, Math.min(h, n)))), this._ScrV_Props_._scrollTop = a, this._ScrV_Props_._scrollLeft = h
                    } else this._ScrV_Props_._scrollTop = t, this._ScrV_Props_._scrollLeft = e;
                    this._validatePosition(!0, !0), this._updateContentPosition()
                }
            }, p._validatePosition = function(t, e) {
                if (void 0 === t && (t = !1), void 0 === e && (e = !1), t) {
                    var i = this.height,
                        r = this._getContentHeight();
                    this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - i) / 2), this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, r > i ? r - i / 2 : i / 2)
                }
                if (e) {
                    var s = this.width,
                        n = this._getContentWidth();
                    this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - s) / 2), this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, n > s ? n - s / 2 : s / 2)
                }
            }, p.$setWidth = function(t) {
                if (this.$getExplicitWidth() == t) return !1;
                var i = e.prototype.$setWidth.call(this, t);
                return this._updateContentPosition(), i
            }, p.$setHeight = function(t) {
                if (this.$getExplicitHeight() == t) return !1;
                e.prototype.$setHeight.call(this, t);
                return this._updateContentPosition(), !0
            }, p._updateContentPosition = function() {
                var e = this.height,
                    i = this.width;
                this.scrollRect = new t.Rectangle(Math.round(this._ScrV_Props_._scrollLeft), Math.round(this._ScrV_Props_._scrollTop), i, e), this.dispatchEvent(new t.Event(t.Event.CHANGE))
            }, p._checkScrollPolicy = function() {
                var t = this._ScrV_Props_._horizontalScrollPolicy,
                    e = this.__checkScrollPolicy(t, this._getContentWidth(), this.width);
                this._ScrV_Props_._hCanScroll = e;
                var i = this._ScrV_Props_._verticalScrollPolicy,
                    r = this.__checkScrollPolicy(i, this._getContentHeight(), this.height);
                return this._ScrV_Props_._vCanScroll = r, e || r
            }, p.__checkScrollPolicy = function(t, e, i) {
                return "on" == t ? !0 : "off" == t ? !1 : e > i
            }, p._addEvents = function() {
                this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
            }, p._removeEvents = function() {
                this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), this.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
            }, p._onTouchBegin = function(e) {
                if (!e.$isDefaultPrevented) {
                    var i = this._checkScrollPolicy();
                    i && (this._ScrV_Props_._touchStartPosition.x = e.stageX, this._ScrV_Props_._touchStartPosition.y = e.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), this._tempStage = this.stage, this._tempStage.addEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this._tempStage.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this._tempStage.addEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
                }
            }, p._onTouchBeginCapture = function(e) {
                var i = this._checkScrollPolicy();
                if (i) {
                    for (var r = e.target; r != this;) {
                        if ("_checkScrollPolicy" in r && (i = r._checkScrollPolicy())) return;
                        r = r.parent
                    }
                    e.stopPropagation();
                    var s = this.cloneTouchEvent(e);
                    this.delayTouchBeginEvent = s, this.touchBeginTimer || (this.touchBeginTimer = new t.Timer(100, 1), this.touchBeginTimer.addEventListener(t.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this)), this.touchBeginTimer.start(), this._onTouchBegin(e)
                }
            }, p._onTouchEndCapture = function(e) {
                var i = this;
                if (this.delayTouchBeginEvent) {
                    this._onTouchBeginTimer(), e.stopPropagation();
                    var r = this.cloneTouchEvent(e);
                    t.callLater(function() {
                        i.stage && i.dispatchPropagationEvent(r)
                    }, this)
                }
            }, p._onTouchBeginTimer = function() {
                this.touchBeginTimer.stop();
                var t = this.delayTouchBeginEvent;
                this.delayTouchBeginEvent = null, this.stage && this.dispatchPropagationEvent(t)
            }, p.dispatchPropagationEvent = function(e) {
                for (var i = e.$target, r = this.$getPropagationList(i), s = r.length, n = .5 * r.length, o = -1, a = 0; s > a; a++) if (r[a] === this._content) {
                    o = a;
                    break
                }
                r.splice(0, o + 1), n -= o + 1, this.$dispatchPropagationEvent(e, r, n), t.Event.release(e)
            }, p._onTouchMove = function(t) {
                if (this._ScrV_Props_._lastTouchPosition.x != t.stageX || this._ScrV_Props_._lastTouchPosition.y != t.stageY) {
                    if (!this._ScrV_Props_._scrollStarted) {
                        var e = t.stageX - this._ScrV_Props_._touchStartPosition.x,
                            i = t.stageY - this._ScrV_Props_._touchStartPosition.y,
                            r = Math.sqrt(e * e + i * i);
                        if (r < this.scrollBeginThreshold) return void this._logTouchEvent(t)
                    }
                    this._ScrV_Props_._scrollStarted = !0, this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop()), this.touchChildren = !1;
                    var s = this._getPointChange(t);
                    this.setScrollPosition(s.y, s.x, !0), this._calcVelocitys(t), this._logTouchEvent(t)
                }
            }, p._onTouchEnd = function(e) {
                this.touchChildren = !0, this._ScrV_Props_._scrollStarted = !1, this._tempStage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this._tempStage.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this._tempStage.removeEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.removeEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._moveAfterTouchEnd()
            }, p._onEnterFrame = function(e) {
                var i = t.getTimer();
                i - this._ScrV_Props_._lastTouchTime > 100 && i - this._ScrV_Props_._lastTouchTime < 300 && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent)
            }, p._logTouchEvent = function(e) {
                this._ScrV_Props_._lastTouchPosition.x = e.stageX, this._ScrV_Props_._lastTouchPosition.y = e.stageY, this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(e), this._ScrV_Props_._lastTouchTime = t.getTimer()
            }, p._getPointChange = function(t) {
                return {
                    x: this._ScrV_Props_._hCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.x - t.stageX,
                    y: this._ScrV_Props_._vCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.y - t.stageY
                }
            }, p._calcVelocitys = function(e) {
                var i = t.getTimer();
                if (0 == this._ScrV_Props_._lastTouchTime) return void(this._ScrV_Props_._lastTouchTime = i);
                var r = this._getPointChange(e),
                    s = i - this._ScrV_Props_._lastTouchTime;
                r.x /= s, r.y /= s, this._ScrV_Props_._velocitys.push(r), this._ScrV_Props_._velocitys.length > 5 && this._ScrV_Props_._velocitys.shift(), this._ScrV_Props_._lastTouchPosition.x = e.stageX, this._ScrV_Props_._lastTouchPosition.y = e.stageY
            }, p._getContentWidth = function() {
                return this._content.$getExplicitWidth() || this._content.width
            }, p._getContentHeight = function() {
                return this._content.$getExplicitHeight() || this._content.height
            }, p.getMaxScrollLeft = function() {
                var t = this._getContentWidth() - this.width;
                return Math.max(0, t)
            }, p.getMaxScrollTop = function() {
                var t = this._getContentHeight() - this.height;
                return Math.max(0, t)
            }, p._moveAfterTouchEnd = function() {
                if (0 != this._ScrV_Props_._velocitys.length) {
                    for (var t = {
                        x: 0,
                        y: 0
                    }, e = 0, r = 0; r < this._ScrV_Props_._velocitys.length; r++) {
                        var s = this._ScrV_Props_._velocitys[r],
                            n = i.weight[r];
                        t.x += s.x * n, t.y += s.y * n, e += n
                    }
                    this._ScrV_Props_._velocitys.length = 0, this.scrollSpeed <= 0 && (this.scrollSpeed = 1);
                    var o = t.x / e * this.scrollSpeed,
                        a = t.y / e * this.scrollSpeed,
                        h = Math.abs(o),
                        l = Math.abs(a),
                        c = this.getMaxScrollLeft(),
                        u = this.getMaxScrollTop(),
                        _ = h > .02 ? this.getAnimationDatas(o, this._ScrV_Props_._scrollLeft, c) : {
                            position: this._ScrV_Props_._scrollLeft,
                            duration: 1
                        },
                        p = l > .02 ? this.getAnimationDatas(a, this._ScrV_Props_._scrollTop, u) : {
                            position: this._ScrV_Props_._scrollTop,
                            duration: 1
                        };
                    this.setScrollLeft(_.position, _.duration), this.setScrollTop(p.position, p.duration)
                }
            }, p.onTweenFinished = function(t) {
                t == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1), t == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1), 0 == this._ScrV_Props_._isHTweenPlaying && 0 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished()
            }, p._onScrollStarted = function() {}, p._onScrollFinished = function() {
                t.ScrollTween.removeTweens(this), this._ScrV_Props_._hScrollTween = null, this._ScrV_Props_._vScrollTween = null, this._ScrV_Props_._isHTweenPlaying = !1, this._ScrV_Props_._isVTweenPlaying = !1, this.dispatchEvent(new t.Event(t.Event.COMPLETE))
            }, p.setScrollTop = function(e, i) {
                void 0 === i && (i = 0);
                var r = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
                if (0 == i) return void(this.scrollTop = r);
                0 == this._ScrV_Props_._bounces && (e = r);
                var s = t.ScrollTween.get(this).to({
                    scrollTop: e
                }, i, t.ScrollEase.quartOut);
                r != e && s.to({
                    scrollTop: r
                }, 300, t.ScrollEase.quintOut), this._ScrV_Props_._isVTweenPlaying = !0, this._ScrV_Props_._vScrollTween = s, s.call(this.onTweenFinished, this, [s]), this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted()
            }, p.setScrollLeft = function(e, i) {
                void 0 === i && (i = 0);
                var r = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
                if (0 == i) return void(this.scrollLeft = r);
                0 == this._ScrV_Props_._bounces && (e = r);
                var s = t.ScrollTween.get(this).to({
                    scrollLeft: e
                }, i, t.ScrollEase.quartOut);
                r != e && s.to({
                    scrollLeft: r
                }, 300, t.ScrollEase.quintOut), this._ScrV_Props_._isHTweenPlaying = !0, this._ScrV_Props_._hScrollTween = s, s.call(this.onTweenFinished, this, [s]), this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted()
            }, p.getAnimationDatas = function(t, e, i) {
                var r = Math.abs(t),
                    s = .95,
                    n = 0,
                    o = .998,
                    a = .02,
                    h = e + 500 * t;
                if (0 > h || h > i) for (h = e; Math.abs(t) != 1 / 0 && Math.abs(t) > a;) h += t, t *= 0 > h || h > i ? o * s : o, n++;
                else n = 500 * -Math.log(a / r);
                var l = {
                    position: Math.min(i + 50, Math.max(h, -50)),
                    duration: n
                };
                return l
            }, p.cloneTouchEvent = function(e) {
                var i = new t.TouchEvent(e.type, e.bubbles, e.cancelable);
                return i.touchPointID = e.touchPointID, i.$stageX = e.stageX, i.$stageY = e.stageY, i.touchDown = e.touchDown, i.$isDefaultPrevented = !1, i.$target = e.target, i
            }, p.throwNotSupportedError = function() {
                t.$error(1023)
            }, p.addChild = function(t) {
                return this.throwNotSupportedError(), null
            }, p.addChildAt = function(t, e) {
                return this.throwNotSupportedError(), null
            }, p.removeChild = function(t) {
                return this.throwNotSupportedError(), null
            }, p.removeChildAt = function(t) {
                return this.throwNotSupportedError(), null
            }, p.setChildIndex = function(t, e) {
                this.throwNotSupportedError()
            }, p.swapChildren = function(t, e) {
                this.throwNotSupportedError()
            }, p.swapChildrenAt = function(t, e) {
                this.throwNotSupportedError()
            }, i.weight = [1, 1.33, 1.66, 2, 2.33], i
        }(t.DisplayObjectContainer);
    t.ScrollView = e, t.registerClass(e, "egret.ScrollView")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function e() {
                this._verticalScrollPolicy = "auto", this._horizontalScrollPolicy = "auto", this._scrollLeft = 0, this._scrollTop = 0, this._hCanScroll = !1, this._vCanScroll = !1, this._lastTouchPosition = new t.Point(0, 0), this._touchStartPosition = new t.Point(0, 0), this._scrollStarted = !1, this._lastTouchTime = 0, this._lastTouchEvent = null, this._velocitys = [], this._isHTweenPlaying = !1, this._isVTweenPlaying = !1, this._hScrollTween = null, this._vScrollTween = null, this._bounces = !0
            }
            var i = (__define, e);
            return p = i.prototype, e
        }();
    t.ScrollViewProperties = e, t.registerClass(e, "egret.ScrollViewProperties")
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e) {
        var i = e.url;
        return -1 == i.indexOf("?") && e.method == t.URLRequestMethod.GET && e.data && e.data instanceof t.URLVariables && (i = i + "?" + e.data.toString()), i
    }
    t.$getUrl = e
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(i) {
                void 0 === i && (i = null), e.call(this), this.dataFormat = t.URLLoaderDataFormat.TEXT, this.data = null, this._request = null, this._status = -1, i && this.load(i)
            }
            __extends(i, e);
            var r = (__define, i);
            return p = r.prototype, p.load = function(e) {
                this._request = e, this.data = null, t.NetContext.getNetContext().proceed(this)
            }, p.__recycle = function() {
                this._request = null, this.data = null
            }, i
        }(t.EventDispatcher);
    t.URLLoader = e, t.registerClass(e, "egret.URLLoader")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = (__define, t);
            return p = e.prototype, t.BINARY = "binary", t.TEXT = "text", t.VARIABLES = "variables", t.TEXTURE = "texture", t.SOUND = "sound", t
        }();
    t.URLLoaderDataFormat = e, t.registerClass(e, "egret.URLLoaderDataFormat")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i(i) {
                void 0 === i && (i = null), e.call(this), this.data = null, this.method = t.URLRequestMethod.GET, this.url = "", this.requestHeaders = [], this.url = i
            }
            __extends(i, e);
            var r = (__define, i);
            return p = r.prototype, i
        }(t.HashObject);
    t.URLRequest = e, t.registerClass(e, "egret.URLRequest")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t(t, e) {
                this.name = "", this.value = "", this.name = t, this.value = e
            }
            var e = (__define, t);
            return p = e.prototype, t
        }();
    t.URLRequestHeader = e, t.registerClass(e, "egret.URLRequestHeader")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function() {
            function t() {}
            var e = (__define, t);
            return p = e.prototype, t.GET = "get", t.POST = "post", t
        }();
    t.URLRequestMethod = e, t.registerClass(e, "egret.URLRequestMethod")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(t) {
            function e(e) {
                void 0 === e && (e = null), t.call(this), this.variables = null, null !== e && this.decode(e)
            }
            __extends(e, t);
            var i = (__define, e);
            return p = i.prototype, p.decode = function(t) {
                this.variables || (this.variables = {}), t = t.split("+").join(" ");
                for (var e, i = /[?&]?([^=]+)=([^&]*)/g; e = i.exec(t);) {
                    var r = decodeURIComponent(e[1]),
                        s = decodeURIComponent(e[2]);
                    if (r in this.variables != 0) {
                        var n = this.variables[r];
                        n instanceof Array ? n.push(s) : this.variables[r] = [n, s]
                    } else this.variables[r] = s
                }
            }, p.toString = function() {
                if (!this.variables) return "";
                var t = this.variables,
                    e = [];
                for (var i in t) e.push(this.encodeValue(i, t[i]));
                return e.join("&")
            }, p.encodeValue = function(t, e) {
                return e instanceof Array ? this.encodeArray(t, e) : encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }, p.encodeArray = function(t, e) {
                return t ? 0 == e.length ? encodeURIComponent(t) + "=" : e.map(function(e) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&") : ""
            }, e
        }(t.HashObject);
    t.URLVariables = e, t.registerClass(e, "egret.URLVariables")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this), this._timeScale = 1, this._paused = !1, this._callIndex = -1, this._lastTime = 0, this.callBackList = [], null != i.instance, t.sys.$ticker.$startTick(this.update, this), this._lastTime = t.getTimer()
            }
            __extends(i, e);
            var r = (__define, i);
            return p = r.prototype, p.update = function(t) {
                var e = t - this._lastTime;
                if (this._lastTime = t, this._paused) return !1;
                var i = e * this._timeScale;
                for (this._callList = this.callBackList.concat(), this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                    var r = this._callList[this._callIndex];
                    r.listener.call(r.thisObject, i)
                }
                return this._callIndex = -1, this._callList = null, !1
            }, p.register = function(t, e, i) {
                void 0 === i && (i = 0), this.$insertEventBin(this.callBackList, "", t, e, !1, i, !1)
            }, p.unregister = function(t, e) {
                this.$removeEventBin(this.callBackList, t, e)
            }, p.setTimeScale = function(t) {
                this._timeScale = t
            }, p.getTimeScale = function() {
                return this._timeScale
            }, p.pause = function() {
                this._paused = !0
            }, p.resume = function() {
                this._paused = !1
            }, i.getInstance = function() {
                return null == i.instance && (i.instance = new i), i.instance
            }, i
        }(t.EventDispatcher);
    t.Ticker = e, t.registerClass(e, "egret.Ticker")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var e = function(e) {
            function i() {
                e.call(this)
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, r(p, "stage", function() {
                return t.sys.$TempStage
            }), p.run = function() {}, r(i, "instance", function() {
                return null == i._instance && (i._instance = new i), i._instance
            }), i.deviceType = null, i.DEVICE_PC = "web", i.DEVICE_MOBILE = "native", i.RUNTIME_HTML5 = "runtimeHtml5", i.RUNTIME_NATIVE = "runtimeNative", i
        }(t.EventDispatcher);
    t.MainContext = e, t.registerClass(e, "egret.MainContext")
}(egret || (egret = {}));
var testDeviceType1 = function() {
        if (!this.navigator) return !0;
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("mobile") || -1 != t.indexOf("android")
    },
    testRuntimeType1 = function() {
        return this.navigator ? !0 : !1
    };
egret.MainContext.deviceType = testDeviceType1() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC, egret.MainContext.runtimeType = testRuntimeType1() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE, delete testDeviceType1, delete testRuntimeType1;
var egret;
!
function(t) {
    var e = function(e) {
            function i(t) {
                void 0 === t && (t = 300), e.call(this), this.objectPool = [], this._length = 0, 1 > t && (t = 1), this.autoDisposeTime = t, this.frameCount = 0
            }
            __extends(i, e);
            var r = __define,
                s = i;
            return p = s.prototype, i.$init = function() {
                t.sys.$ticker.$startTick(i.onUpdate, i)
            }, i.onUpdate = function(t) {
                for (var e = i._callBackList, r = e.length - 1; r >= 0; r--) e[r].$checkFrame();
                return !1
            }, p.$checkFrame = function() {
                this.frameCount--, this.frameCount <= 0 && this.dispose()
            }, r(p, "length", function() {
                return this._length
            }), p.push = function(t) {
                var e = this.objectPool; - 1 == e.indexOf(t) && (e.push(t), t.__recycle && t.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, i._callBackList.push(this)))
            }, p.pop = function() {
                return 0 == this._length ? null : (this._length--, this.objectPool.pop())
            }, p.dispose = function() {
                this._length > 0 && (this.objectPool = [], this._length = 0), this.frameCount = 0;
                var t = i._callBackList,
                    e = t.indexOf(this); - 1 != e && t.splice(e, 1)
            }, i._callBackList = [], i
        }(t.HashObject);
    t.Recycler = e, t.registerClass(e, "egret.Recycler"), e.$init()
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, i, h) {
        for (var l = [], c = 3; c < arguments.length; c++) l[c - 3] = arguments[c];
        var u = {
            listener: e,
            thisObject: i,
            delay: h,
            originDelay: h,
            params: l
        };
        return o++, 1 == o && (a = t.getTimer(), t.sys.$ticker.$startTick(r, null)), n++, s[n] = u, n
    }

    function i(e) {
        s[e] && (o--, delete s[e], 0 == o && t.sys.$ticker.$stopTick(r, null))
    }

    function r(t) {
        var e = t - a;
        a = t;
        for (var i in s) {
            var r = s[i];
            r.delay -= e, r.delay <= 0 && (r.delay = r.originDelay, r.listener.apply(r.thisObject, r.params))
        }
        return !1
    }
    var s = {},
        n = 0,
        o = 0,
        a = 0;
    t.setInterval = e, t.clearInterval = i
}(egret || (egret = {}));
var egret;
!
function(t) {
    function e(e, i, h) {
        for (var l = [], c = 3; c < arguments.length; c++) l[c - 3] = arguments[c];
        var u = {
            listener: e,
            thisObject: i,
            delay: h,
            params: l
        };
        return o++, 1 == o && t.sys.$ticker && (a = t.getTimer(), t.sys.$ticker.$startTick(r, null)), n++, s[n] = u, n
    }

    function i(e) {
        s[e] && (o--, delete s[e], 0 == o && t.sys.$ticker && t.sys.$ticker.$stopTick(r, null))
    }

    function r(t) {
        var e = t - a;
        a = t;
        for (var r in s) {
            var n = s[r];
            n.delay -= e, n.delay <= 0 && (n.listener.apply(n.thisObject, n.params), i(r))
        }
        return !1
    }
    var s = {},
        n = 0,
        o = 0,
        a = 0;
    t.setTimeout = e, t.clearTimeout = i
}(egret || (egret = {}));

// game.web.min.js
var egret;
!
function(e) {
    var t;
    !
    function(t) {
        var n = function(t) {
                function n() {
                    t.call(this)
                }
                __extends(n, t);
                var r = (__define, n);
                return p = r.prototype, p.proceed = function(t) {
                    function n(e) {
                        t.dispatchEvent(e)
                    }

                    function r(e) {
                        o(), t.dispatchEvent(e)
                    }

                    function a() {
                        switch (o(), t.dataFormat) {
                        case e.URLLoaderDataFormat.VARIABLES:
                            t.data = new e.URLVariables(d.response);
                            break;
                        default:
                            t.data = d.response
                        }
                        window.setTimeout(function() {
                            e.Event.dispatchEvent(t, e.Event.COMPLETE)
                        }, 0)
                    }

                    function o() {
                        d.removeEventListener(e.Event.COMPLETE, a, i), d.removeEventListener(e.IOErrorEvent.IO_ERROR, r, i), d.removeEventListener(e.ProgressEvent.PROGRESS, n, i)
                    }
                    var i = this;
                    if (t.dataFormat == e.URLLoaderDataFormat.TEXTURE) return void this.loadTexture(t);
                    if (t.dataFormat == e.URLLoaderDataFormat.SOUND) return void this.loadSound(t);
                    var s = t._request,
                        E = i.getVirtualUrl(e.$getUrl(s)),
                        d = new e.HttpRequest;
                    if (d.addEventListener(e.Event.COMPLETE, a, this), d.addEventListener(e.IOErrorEvent.IO_ERROR, r, this), d.addEventListener(e.ProgressEvent.PROGRESS, n, this), d.open(E, s.method), d.responseType = this.getResponseType(t.dataFormat), s.method != e.URLRequestMethod.GET && s.data) if (s.data instanceof e.URLVariables) {
                        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        var v = s.data;
                        d.send(v.toString())
                    } else d.setRequestHeader("Content-Type", "multipart/form-data"), d.send(s.data);
                    else d.send()
                }, p.getResponseType = function(t) {
                    switch (t) {
                    case e.URLLoaderDataFormat.TEXT:
                    case e.URLLoaderDataFormat.VARIABLES:
                        return e.URLLoaderDataFormat.TEXT;
                    case e.URLLoaderDataFormat.BINARY:
                        return "arraybuffer";
                    default:
                        return t
                    }
                }, p.loadSound = function(t) {
                    function n(e) {
                        t.dispatchEvent(e)
                    }

                    function r(e) {
                        o(), t.dispatchEvent(e)
                    }

                    function a(n) {
                        o(), t.data = E, window.setTimeout(function() {
                            t.dispatchEventWith(e.Event.COMPLETE)
                        }, 0)
                    }

                    function o() {
                        E.removeEventListener(e.Event.COMPLETE, a, i), E.removeEventListener(e.IOErrorEvent.IO_ERROR, r, i), E.removeEventListener(e.ProgressEvent.PROGRESS, n, i)
                    }
                    var i = this,
                        s = this.getVirtualUrl(t._request.url),
                        E = new e.Sound;
                    E.addEventListener(e.Event.COMPLETE, a, i), E.addEventListener(e.IOErrorEvent.IO_ERROR, r, i), E.addEventListener(e.ProgressEvent.PROGRESS, n, i), E.load(s)
                }, p.loadTexture = function(t) {
                    function n(e) {
                        t.dispatchEvent(e)
                    }

                    function r(e) {
                        o(), t.dispatchEvent(e)
                    }

                    function a(n) {
                        o();
                        var r = E.data;
                        r.setAttribute("bitmapSrc", s);
                        var a = new e.Texture;
                        a._setBitmapData(r), t.data = a, window.setTimeout(function() {
                            t.dispatchEventWith(e.Event.COMPLETE)
                        }, i)
                    }

                    function o() {
                        E.removeEventListener(e.Event.COMPLETE, a, i), E.removeEventListener(e.IOErrorEvent.IO_ERROR, r, i), E.removeEventListener(e.ProgressEvent.PROGRESS, n, i)
                    }
                    var i = this,
                        s = this.getVirtualUrl(t._request.url),
                        E = new e.ImageLoader;
                    E.addEventListener(e.Event.COMPLETE, a, i), E.addEventListener(e.IOErrorEvent.IO_ERROR, r, i), E.addEventListener(e.ProgressEvent.PROGRESS, n, i), E.load(s)
                }, p.getChangeList = function() {
                    return []
                }, p.getVirtualUrl = function(e) {
                    return e
                }, n.getNetContext = function() {
                    return null == n._instance && (n._instance = new n), n._instance
                }, n
            }(e.HashObject);
        t.HTML5NetContext = n, e.registerClass(n, "egret.web.HTML5NetContext", ["egret.NetContext"]), e.NetContext = n
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));

// tween.min.js
var egret;
!
function(t) {
    var n = function() {
            function n() {
                t.$error(1014)
            }
            var e = (__define, n);
            return p = e.prototype, n.get = function(t) {
                return -1 > t && (t = -1), t > 1 && (t = 1), function(n) {
                    return 0 == t ? n : 0 > t ? n * (n * -t + 1 + t) : n * ((2 - n) * t + (1 - t))
                }
            }, n.getPowIn = function(t) {
                return function(n) {
                    return Math.pow(n, t)
                }
            }, n.getPowOut = function(t) {
                return function(n) {
                    return 1 - Math.pow(1 - n, t)
                }
            }, n.getPowInOut = function(t) {
                return function(n) {
                    return (n *= 2) < 1 ? .5 * Math.pow(n, t) : 1 - .5 * Math.abs(Math.pow(2 - n, t))
                }
            }, n.sineIn = function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, n.sineOut = function(t) {
                return Math.sin(t * Math.PI / 2)
            }, n.sineInOut = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }, n.getBackIn = function(t) {
                return function(n) {
                    return n * n * ((t + 1) * n - t)
                }
            }, n.getBackOut = function(t) {
                return function(n) {
                    return --n * n * ((t + 1) * n + t) + 1
                }
            }, n.getBackInOut = function(t) {
                return t *= 1.525, function(n) {
                    return (n *= 2) < 1 ? .5 * (n * n * ((t + 1) * n - t)) : .5 * ((n -= 2) * n * ((t + 1) * n + t) + 2)
                }
            }, n.circIn = function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }, n.circOut = function(t) {
                return Math.sqrt(1 - --t * t)
            }, n.circInOut = function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, n.bounceIn = function(t) {
                return 1 - n.bounceOut(1 - t)
            }, n.bounceOut = function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, n.bounceInOut = function(t) {
                return .5 > t ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
            }, n.getElasticIn = function(t, n) {
                var e = 2 * Math.PI;
                return function(i) {
                    if (0 == i || 1 == i) return i;
                    var s = n / e * Math.asin(1 / t);
                    return -(t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * e / n))
                }
            }, n.getElasticOut = function(t, n) {
                var e = 2 * Math.PI;
                return function(i) {
                    if (0 == i || 1 == i) return i;
                    var s = n / e * Math.asin(1 / t);
                    return t * Math.pow(2, -10 * i) * Math.sin((i - s) * e / n) + 1
                }
            }, n.getElasticInOut = function(t, n) {
                var e = 2 * Math.PI;
                return function(i) {
                    var s = n / e * Math.asin(1 / t);
                    return (i *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * e / n)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - s) * e / n) * .5 + 1
                }
            }, n.quadIn = n.getPowIn(2), n.quadOut = n.getPowOut(2), n.quadInOut = n.getPowInOut(2), n.cubicIn = n.getPowIn(3), n.cubicOut = n.getPowOut(3), n.cubicInOut = n.getPowInOut(3), n.quartIn = n.getPowIn(4), n.quartOut = n.getPowOut(4), n.quartInOut = n.getPowInOut(4), n.quintIn = n.getPowIn(5), n.quintOut = n.getPowOut(5), n.quintInOut = n.getPowInOut(5), n.backIn = n.getBackIn(1.7), n.backOut = n.getBackOut(1.7), n.backInOut = n.getBackInOut(1.7), n.elasticIn = n.getElasticIn(1, .3), n.elasticOut = n.getElasticOut(1, .3), n.elasticInOut = n.getElasticInOut(1, .3 * 1.5), n
        }();
    t.Ease = n, t.registerClass(n, "egret.Ease")
}(egret || (egret = {}));
var egret;
!
function(t) {
    var n = function(n) {
            function e(t, e, i) {
                n.call(this), this._target = null, this._useTicks = !1, this.ignoreGlobalPause = !1, this.loop = !1, this.pluginData = null, this._steps = null, this._actions = null, this.paused = !1, this.duration = 0, this._prevPos = -1, this.position = null, this._prevPosition = 0, this._stepPosition = 0, this.passive = !1, this.initialize(t, e, i)
            }
            __extends(e, n);
            var i = (__define, e);
            return p = i.prototype, e.get = function(t, n, i, s) {
                return void 0 === n && (n = null), void 0 === i && (i = null), void 0 === s && (s = !1), s && e.removeTweens(t), new e(t, n, i)
            }, e.removeTweens = function(t) {
                if (t.tween_count) {
                    for (var n = e._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == t && (n[i].paused = !0, n.splice(i, 1));
                    t.tween_count = 0
                }
            }, e.pauseTweens = function(n) {
                if (n.tween_count) for (var e = t.Tween._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == n && (e[i].paused = !0)
            }, e.resumeTweens = function(n) {
                if (n.tween_count) for (var e = t.Tween._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == n && (e[i].paused = !1)
            }, e.tick = function(t, n) {
                void 0 === n && (n = !1);
                var i = t - e._lastTime;
                e._lastTime = t;
                for (var s = e._tweens.concat(), u = s.length - 1; u >= 0; u--) {
                    var r = s[u];
                    n && !r.ignoreGlobalPause || r.paused || r.tick(r._useTicks ? 1 : i)
                }
                return !1
            }, e._register = function(n, i) {
                var s = n._target,
                    u = e._tweens;
                if (i) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1), u.push(n), e._inited || (e._lastTime = t.getTimer(), t.sys.$ticker.$startTick(e.tick, null), e._inited = !0);
                else {
                    s && s.tween_count--;
                    for (var r = u.length; r--;) if (u[r] == n) return void u.splice(r, 1)
                }
            }, e.removeAllTweens = function() {
                for (var t = e._tweens, n = 0, i = t.length; i > n; n++) {
                    var s = t[n];
                    s.paused = !0, s._target.tweenjs_count = 0
                }
                t.length = 0
            }, p.initialize = function(t, n, i) {
                this._target = t, n && (this._useTicks = n.useTicks, this.ignoreGlobalPause = n.ignoreGlobalPause, this.loop = n.loop, n.onChange && this.addEventListener("change", n.onChange, n.onChangeObj), n.override && e.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], n && n.paused ? this.paused = !0 : e._register(this, !0), n && null != n.position && this.setPosition(n.position, e.NONE)
            }, p.setPosition = function(t, n) {
                void 0 === n && (n = 1), 0 > t && (t = 0);
                var e = t,
                    i = !1;
                if (e >= this.duration && (this.loop ? e %= this.duration : (e = this.duration, i = !0)), e == this._prevPos) return i;
                var s = this._prevPos;
                if (this.position = this._prevPos = e, this._prevPosition = t, this._target) if (i) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                    for (var u = 0, r = this._steps.length; r > u && !(this._steps[u].t > e); u++);
                    var o = this._steps[u - 1];
                    this._updateTargetProps(o, (this._stepPosition = e - o.t) / o.d)
                }
                return i && this.setPaused(!0), 0 != n && this._actions.length > 0 && (this._useTicks ? this._runActions(e, e) : 1 == n && s > e ? (s != this.duration && this._runActions(s, this.duration), this._runActions(0, e, !0)) : this._runActions(s, e)), this.dispatchEventWith("change"), i
            }, p._runActions = function(t, n, e) {
                void 0 === e && (e = !1);
                var i = t,
                    s = n,
                    u = -1,
                    r = this._actions.length,
                    o = 1;
                for (t > n && (i = n, s = t, u = r, r = o = -1);
                (u += o) != r;) {
                    var a = this._actions[u],
                        h = a.t;
                    (h == s || h > i && s > h || e && h == t) && a.f.apply(a.o, a.p)
                }
            }, p._updateTargetProps = function(t, n) {
                var i, s, u, r, o, a;
                if (t || 1 != n) {
                    if (this.passive = !! t.v, this.passive) return;
                    t.e && (n = t.e(n, 0, 1, 1)), i = t.p0, s = t.p1
                } else this.passive = !1, i = s = this._curQueueProps;
                for (var h in this._initQueueProps) {
                    null == (r = i[h]) && (i[h] = r = this._initQueueProps[h]), null == (o = s[h]) && (s[h] = o = r), u = r == o || 0 == n || 1 == n || "number" != typeof r ? 1 == n ? o : r : r + (o - r) * n;
                    var c = !1;
                    if (a = e._plugins[h]) for (var p = 0, _ = a.length; _ > p; p++) {
                        var l = a[p].tween(this, h, u, i, s, n, !! t && i == s, !t);
                        l == e.IGNORE ? c = !0 : u = l
                    }
                    c || (this._target[h] = u)
                }
            }, p.setPaused = function(t) {
                return this.paused = t, e._register(this, !t), this
            }, p._cloneProps = function(t) {
                var n = {};
                for (var e in t) n[e] = t[e];
                return n
            }, p._addStep = function(t) {
                return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
            }, p._appendQueueProps = function(n) {
                var i, s, u, r, o;
                for (var a in n) if (t.sys.isUndefined(this._initQueueProps[a])) {
                    if (s = this._target[a], i = e._plugins[a]) for (u = 0, r = i.length; r > u; u++) s = i[u].init(this, a, s);
                    this._initQueueProps[a] = this._curQueueProps[a] = void 0 === s ? null : s
                } else s = this._curQueueProps[a];
                for (var a in n) {
                    if (s = this._curQueueProps[a], i = e._plugins[a]) for (o = o || {}, u = 0, r = i.length; r > u; u++) i[u].step && i[u].step(this, a, s, n[a], o);
                    this._curQueueProps[a] = n[a]
                }
                return o && this._appendQueueProps(o), this._curQueueProps
            }, p._addAction = function(t) {
                return t.t = this.duration, this._actions.push(t), this
            }, p._set = function(t, n) {
                for (var e in t) n[e] = t[e]
            }, p.wait = function(t, n) {
                if (null == t || 0 >= t) return this;
                var e = this._cloneProps(this._curQueueProps);
                return this._addStep({
                    d: t,
                    p0: e,
                    p1: e,
                    v: n
                })
            }, p.to = function(t, n, e) {
                return void 0 === e && (e = void 0), (isNaN(n) || 0 > n) && (n = 0), this._addStep({
                    d: n || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: e,
                    p1: this._cloneProps(this._appendQueueProps(t))
                })
            }, p.call = function(t, n, e) {
                return void 0 === n && (n = void 0), void 0 === e && (e = void 0), this._addAction({
                    f: t,
                    p: e ? e : [],
                    o: n ? n : this._target
                })
            }, p.set = function(t, n) {
                return void 0 === n && (n = null), this._addAction({
                    f: this._set,
                    o: this,
                    p: [t, n ? n : this._target]
                })
            }, p.play = function(t) {
                return t || (t = this), this.call(t.setPaused, t, [!1])
            }, p.pause = function(t) {
                return t || (t = this), this.call(t.setPaused, t, [!0])
            }, p.tick = function(t) {
                this.paused || this.setPosition(this._prevPosition + t)
            }, e.NONE = 0, e.LOOP = 1, e.REVERSE = 2, e._tweens = [], e.IGNORE = {}, e._plugins = {}, e._inited = !1, e._lastTime = 0, e
        }(t.EventDispatcher);
    t.Tween = n, t.registerClass(n, "egret.Tween")
}(egret || (egret = {}));

// res.min.js
var RES;
!
function(e) {
    var t = function() {
            function e(e, t, r) {
                this.groupName = "", this.data = null, this._loaded = !1, this.name = e, this.url = t, this.type = r
            }
            var t = __define,
                r = e;
            return p = r.prototype, t(p, "loaded", function() {
                return this.data ? this.data.loaded : this._loaded
            }, function(e) {
                this.data && (this.data.loaded = e), this._loaded = e
            }), p.toString = function() {
                return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
            }, e.TYPE_ANIMATION = "animation", e.TYPE_XML = "xml", e.TYPE_IMAGE = "image", e.TYPE_BIN = "bin", e.TYPE_TEXT = "text", e.TYPE_JSON = "json", e.TYPE_SHEET = "sheet", e.TYPE_FONT = "font", e.TYPE_SOUND = "sound", e
        }();
    e.ResourceItem = t, egret.registerClass(t, "RES.ResourceItem")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function() {
            function t() {
                this.keyMap = {}, this.groupDic = {}, e.configInstance = this
            }
            var r = (__define, t);
            return p = r.prototype, p.getGroupByName = function(e) {
                var t = new Array;
                if (!this.groupDic[e]) return t;
                for (var r = this.groupDic[e], i = r.length, n = 0; i > n; n++) {
                    var s = r[n];
                    t.push(this.parseResourceItem(s))
                }
                return t
            }, p.getRawGroupByName = function(e) {
                return this.groupDic[e] ? this.groupDic[e] : []
            }, p.createGroup = function(e, t, r) {
                if (void 0 === r && (r = !1), !r && this.groupDic[e] || !t || 0 == t.length) return !1;
                for (var i = this.groupDic, n = [], s = t.length, a = 0; s > a; a++) {
                    var o = t[a],
                        u = i[o];
                    if (u) for (var l = u.length, c = 0; l > c; c++) {
                        var h = u[c]; - 1 == n.indexOf(h) && n.push(h)
                    } else h = this.keyMap[o], h ? -1 == n.indexOf(h) && n.push(h) : egret.$warn(3200, o)
                }
                return 0 == n.length ? !1 : (this.groupDic[e] = n, !0)
            }, p.parseConfig = function(e, t) {
                if (e) {
                    var r = e.resources;
                    if (r) for (var i = r.length, n = 0; i > n; n++) {
                        var s = r[n],
                            a = s.url;
                        a && -1 == a.indexOf("://") && (s.url = t + a), this.addItemToKeyMap(s)
                    }
                    var o = e.groups;
                    if (o) for (i = o.length, n = 0; i > n; n++) {
                        for (var u = o[n], l = [], c = u.keys.split(","), h = c.length, p = 0; h > p; p++) {
                            var f = c[p].trim();
                            s = this.keyMap[f], s && -1 == l.indexOf(s) && l.push(s)
                        }
                        this.groupDic[u.name] = l
                    }
                }
            }, p.addSubkey = function(e, t) {
                var r = this.keyMap[t];
                r && !this.keyMap[e] && (this.keyMap[e] = r)
            }, p.addItemToKeyMap = function(e) {
                if (this.keyMap[e.name] || (this.keyMap[e.name] = e), e.hasOwnProperty("subkeys")) {
                    var t = e.subkeys.split(",");
                    e.subkeys = t;
                    for (var r = t.length, i = 0; r > i; i++) {
                        var n = t[i];
                        null == this.keyMap[n] && (this.keyMap[n] = e)
                    }
                }
            }, p.getName = function(e) {
                var t = this.keyMap[e];
                return t ? t.name : ""
            }, p.getType = function(e) {
                var t = this.keyMap[e];
                return t ? t.type : ""
            }, p.getRawResourceItem = function(e) {
                return this.keyMap[e]
            }, p.getResourceItem = function(e) {
                var t = this.keyMap[e];
                return t ? this.parseResourceItem(t) : null
            }, p.parseResourceItem = function(t) {
                var r = new e.ResourceItem(t.name, t.url, t.type);
                return r.data = t, r
            }, t
        }();
    e.ResourceConfig = t, egret.registerClass(t, "RES.ResourceConfig")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.thread = 2, this.loadingCount = 0, this.callBack = null, this.resInstance = null, this.groupTotalDic = {}, this.numLoadedDic = {}, this.itemListDic = {}, this.groupErrorDic = {}, this.retryTimesDic = {}, this.maxRetryTimes = 3, this.failedList = new Array, this.priorityQueue = {}, this.lazyLoadList = new Array, this.analyzerDic = {}, this.queueIndex = 0
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.isGroupInLoading = function(e) {
                return void 0 !== this.itemListDic[e]
            }, p.loadGroup = function(t, r, i) {
                if (void 0 === i && (i = 0), !this.itemListDic[r] && r) {
                    if (!t || 0 == t.length) {
                        egret.$warn(3201, r);
                        var n = new e.ResourceEvent(e.ResourceEvent.GROUP_LOAD_ERROR);
                        return n.groupName = r, void this.dispatchEvent(n)
                    }
                    this.priorityQueue[i] ? this.priorityQueue[i].push(r) : this.priorityQueue[i] = [r], this.itemListDic[r] = t;
                    for (var s = t.length, a = 0; s > a; a++) {
                        var o = t[a];
                        o.groupName = r
                    }
                    this.groupTotalDic[r] = t.length, this.numLoadedDic[r] = 0, this.next()
                }
            }, p.loadItem = function(e) {
                this.lazyLoadList.push(e), e.groupName = "", this.next()
            }, p.next = function() {
                for (; this.loadingCount < this.thread;) {
                    var e = this.getOneResourceItem();
                    if (!e) break;
                    if (this.loadingCount++, e.loaded) this.onItemComplete(e);
                    else {
                        var t = this.resInstance.$getAnalyzerByType(e.type);
                        t.loadFile(e, this.onItemComplete, this)
                    }
                }
            }, p.getOneResourceItem = function() {
                if (this.failedList.length > 0) return this.failedList.shift();
                var e = Number.NEGATIVE_INFINITY;
                for (var t in this.priorityQueue) e = Math.max(e, t);
                var r = this.priorityQueue[e];
                if (!r || 0 == r.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
                for (var i, n = r.length, s = 0; n > s && (this.queueIndex >= n && (this.queueIndex = 0), i = this.itemListDic[r[this.queueIndex]], !(i.length > 0)); s++) this.queueIndex++;
                return 0 == i.length ? null : i.shift()
            }, p.onItemComplete = function(t) {
                this.loadingCount--;
                var r = t.groupName;
                if (!t.loaded) {
                    var i = this.retryTimesDic[t.name] || 1;
                    if (!(i > this.maxRetryTimes)) return this.retryTimesDic[t.name] = i + 1, this.failedList.push(t), void this.next();
                    delete this.retryTimesDic[t.name], e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.ITEM_LOAD_ERROR, r, t)
                }
                if (r) {
                    this.numLoadedDic[r]++;
                    var n = this.numLoadedDic[r],
                        s = this.groupTotalDic[r];
                    if (t.loaded || (this.groupErrorDic[r] = !0), e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.GROUP_PROGRESS, r, t, n, s), n == s) {
                        var a = this.groupErrorDic[r];
                        this.removeGroupName(r), delete this.groupTotalDic[r], delete this.numLoadedDic[r], delete this.itemListDic[r], delete this.groupErrorDic[r], a ? e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_LOAD_ERROR, r) : e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, r)
                    }
                } else this.callBack.call(this.resInstance, t);
                this.next()
            }, p.removeGroupName = function(e) {
                for (var t in this.priorityQueue) {
                    for (var r = this.priorityQueue[t], i = r.length, n = 0, s = !1, i = r.length, a = 0; i > a; a++) {
                        var o = r[a];
                        if (o == e) {
                            r.splice(n, 1), s = !0;
                            break
                        }
                        n++
                    }
                    if (s) {
                        0 == r.length && delete this.priorityQueue[t];
                        break
                    }
                }
            }, r
        }(egret.EventDispatcher);
    e.ResourceLoader = t, egret.registerClass(t, "RES.ResourceLoader")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(e) {
            function t(t, r, i) {
                void 0 === r && (r = !1), void 0 === i && (i = !1), e.call(this, t, r, i), this.itemsLoaded = 0, this.itemsTotal = 0, this.groupName = "", this.resItem = null
            }
            __extends(t, e);
            var r = (__define, t);
            return p = r.prototype, t.dispatchResourceEvent = function(e, r, i, n, s, a) {
                void 0 === i && (i = ""), void 0 === n && (n = null), void 0 === s && (s = 0), void 0 === a && (a = 0);
                var o = egret.Event.create(t, r);
                o.groupName = i, o.resItem = n, o.itemsLoaded = s, o.itemsTotal = a;
                var u = e.dispatchEvent(o);
                return egret.Event.release(o), u
            }, t.ITEM_LOAD_ERROR = "itemLoadError", t.CONFIG_COMPLETE = "configComplete", t.CONFIG_LOAD_ERROR = "configLoadError", t.GROUP_PROGRESS = "groupProgress", t.GROUP_COMPLETE = "groupComplete", t.GROUP_LOAD_ERROR = "groupLoadError", t
        }(egret.Event);
    e.ResourceEvent = t, egret.registerClass(t, "RES.ResourceEvent")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.resourceConfig = null, this.resourceConfig = e.configInstance
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.addSubkey = function(e, t) {
                this.resourceConfig.addSubkey(e, t)
            }, p.loadFile = function(e, t, r) {}, p.getRes = function(e) {}, p.destroyRes = function(e) {
                return !1
            }, r.getStringPrefix = function(e) {
                if (!e) return "";
                var t = e.indexOf(".");
                return -1 != t ? e.substring(0, t) : ""
            }, r.getStringTail = function(e) {
                if (!e) return "";
                var t = e.indexOf(".");
                return -1 != t ? e.substring(t + 1) : ""
            }, r
        }(egret.HashObject);
    e.AnalyzerBase = t, egret.registerClass(t, "RES.AnalyzerBase")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.fileDic = {}, this.resItemDic = [], this._dataFormat = egret.HttpResponseType.ARRAY_BUFFER, this.recycler = []
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.loadFile = function(t, r, i) {
                if (this.fileDic[t.name]) return void r.call(i, t);
                var n = this.getRequest();
                this.resItemDic[n.hashCode] = {
                    item: t,
                    func: r,
                    thisObject: i
                }, n.open(e.$getVirtualUrl(t.url)), n.send()
            }, p.getRequest = function() {
                var e = this.recycler.pop();
                return e || (e = new egret.HttpRequest, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)), e.responseType = this._dataFormat, e
            }, p.onLoadFinish = function(e) {
                var t = e.target,
                    r = this.resItemDic[t.hashCode];
                delete this.resItemDic[t.hashCode];
                var i = r.item,
                    n = r.func;
                i.loaded = e.type == egret.Event.COMPLETE, i.loaded && this.analyzeData(i, t.response), this.recycler.push(t), n.call(r.thisObject, i)
            }, p.analyzeData = function(e, t) {
                var r = e.name;
                !this.fileDic[r] && t && (this.fileDic[r] = t)
            }, p.getRes = function(e) {
                return this.fileDic[e]
            }, p.hasRes = function(e) {
                var t = this.getRes(e);
                return null != t
            }, p.destroyRes = function(e) {
                return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
            }, p.onResourceDestroy = function(e) {}, r
        }(e.AnalyzerBase);
    e.BinAnalyzer = t, egret.registerClass(t, "RES.BinAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.fileDic = {}, this.resItemDic = [], this.recycler = []
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.loadFile = function(t, r, i) {
                if (this.fileDic[t.name]) return void r.call(i, t);
                var n = this.getLoader();
                this.resItemDic[n.$hashCode] = {
                    item: t,
                    func: r,
                    thisObject: i
                }, n.load(e.$getVirtualUrl(t.url))
            }, p.getLoader = function() {
                var e = this.recycler.pop();
                return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)), e
            }, p.onLoadFinish = function(e) {
                var t = e.$target,
                    r = this.resItemDic[t.$hashCode];
                delete this.resItemDic[t.$hashCode];
                var i = r.item,
                    n = r.func;
                if (i.loaded = e.$type == egret.Event.COMPLETE, i.loaded) {
                    var s = new egret.Texture;
                    s._setBitmapData(t.data), this.analyzeData(i, s)
                }
                this.recycler.push(t), n.call(r.thisObject, i)
            }, p.analyzeData = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) {
                    this.fileDic[r] = t;
                    var i = e.data;
                    if (i && i.scale9grid) {
                        var n = i.scale9grid,
                            s = n.split(",");
                        t.scale9Grid = new egret.Rectangle(parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]))
                    }
                }
            }, p.getRes = function(e) {
                return this.fileDic[e]
            }, p.hasRes = function(e) {
                var t = this.getRes(e);
                return null != t
            }, p.destroyRes = function(e) {
                return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
            }, p.onResourceDestroy = function(e) {
                e.dispose()
            }, r
        }(e.AnalyzerBase);
    e.ImageAnalyzer = t, egret.registerClass(t, "RES.ImageAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(e) {
            function t() {
                e.call(this), this._dataFormat = egret.HttpResponseType.TEXT
            }
            __extends(t, e);
            var r = (__define, t);
            return p = r.prototype, t
        }(e.BinAnalyzer);
    e.TextAnalyzer = t, egret.registerClass(t, "RES.TextAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(e) {
            function t() {
                e.call(this), this._dataFormat = egret.HttpResponseType.TEXT
            }
            __extends(t, e);
            var r = (__define, t);
            return p = r.prototype, p.analyzeData = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) try {
                    var i = t;
                    this.fileDic[r] = JSON.parse(i)
                } catch (n) {
                    egret.$warn(1017, e.url, t)
                }
            }, t
        }(e.BinAnalyzer);
    e.JsonAnalyzer = t, egret.registerClass(t, "RES.JsonAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.sheetMap = {}, this.textureMap = {}, this.recyclerIamge = [], this._dataFormat = egret.HttpResponseType.TEXT
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.getRes = function(t) {
                var r = this.fileDic[t];
                if (r || (r = this.textureMap[t]), !r) {
                    var i = e.AnalyzerBase.getStringPrefix(t);
                    if (r = this.fileDic[i]) {
                        var n = e.AnalyzerBase.getStringTail(t);
                        r = r.getTexture(n)
                    }
                }
                return r
            }, p.onLoadFinish = function(e) {
                var t = e.target,
                    r = this.resItemDic[t.$hashCode];
                delete this.resItemDic[t.hashCode];
                var i = r.item,
                    n = r.func;
                if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded) if (t instanceof egret.HttpRequest) {
                    i.loaded = !1;
                    var s = this.analyzeConfig(i, t.response);
                    if (s) return this.loadImage(s, r), void this.recycler.push(t)
                } else {
                    var a = new egret.Texture;
                    a._setBitmapData(t.data), this.analyzeBitmap(i, a)
                }
                t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t), n.call(r.thisObject, i)
            }, p.analyzeConfig = function(e, t) {
                var r, i = e.name,
                    n = "";
                try {
                    var s = t;
                    r = JSON.parse(s)
                } catch (a) {
                    egret.$warn(1017, e.url, t)
                }
                return r && (this.sheetMap[i] = r, n = this.getRelativePath(e.url, r.file)), n
            }, p.analyzeBitmap = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) {
                    var i = this.sheetMap[r];
                    delete this.sheetMap[r];
                    var n = e.data && e.data.subkeys ? "" : r,
                        s = this.parseSpriteSheet(t, i, n);
                    this.fileDic[r] = s
                }
            }, p.getRelativePath = function(e, t) {
                e = e.split("\\").join("/");
                var r = e.lastIndexOf("/");
                return e = -1 != r ? e.substring(0, r + 1) + t : t
            }, p.parseSpriteSheet = function(e, t, r) {
                var i = t.frames;
                if (!i) return null;
                var n = new egret.SpriteSheet(e),
                    s = this.textureMap;
                for (var a in i) {
                    var o = i[a],
                        e = n.createTexture(a, o.x, o.y, o.w, o.h, o.offX, o.offY, o.sourceW, o.sourceH);
                    if (o.scale9grid) {
                        var u = o.scale9grid,
                            l = u.split(",");
                        e.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]))
                    }
                    null == s[a] && (s[a] = e, r && this.addSubkey(a, r))
                }
                return n
            }, p.destroyRes = function(e) {
                var t = this.fileDic[e];
                if (t) {
                    delete this.fileDic[e];
                    var r;
                    for (var i in t._textureMap) null == r && (r = t._textureMap[i], this.onResourceDestroy(r), r = null), delete this.textureMap[i];
                    return !0
                }
                return !1
            }, p.loadImage = function(t, r) {
                var i = this.getImageLoader();
                this.resItemDic[i.hashCode] = r, i.load(e.$getVirtualUrl(t))
            }, p.getImageLoader = function() {
                var e = this.recyclerIamge.pop();
                return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)), e
            }, p.onResourceDestroy = function(e) {
                e && e.dispose()
            }, r
        }(e.BinAnalyzer);
    e.SheetAnalyzer = t, egret.registerClass(t, "RES.SheetAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(e) {
            function t() {
                e.call(this)
            }
            __extends(t, e);
            var r = (__define, t);
            return p = r.prototype, p.analyzeConfig = function(e, t) {
                var r, i = e.name,
                    n = "";
                try {
                    var s = t;
                    r = JSON.parse(s)
                } catch (a) {}
                return r ? n = this.getRelativePath(e.url, r.file) : (r = t, n = this.getTexturePath(e.url, r)), this.sheetMap[i] = r, n
            }, p.analyzeBitmap = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) {
                    var i = this.sheetMap[r];
                    delete this.sheetMap[r];
                    var n = new egret.BitmapFont(t, i);
                    this.fileDic[r] = n
                }
            }, p.getTexturePath = function(e, t) {
                var r = "",
                    i = t.split("\n"),
                    n = i[2],
                    s = n.indexOf('file="'); - 1 != s && (n = n.substring(s + 6), s = n.indexOf('"'), r = n.substring(0, s)), e = e.split("\\").join("/");
                var s = e.lastIndexOf("/");
                return e = -1 != s ? e.substring(0, s + 1) + r : r
            }, p.onResourceDestroy = function(e) {
                e && e.dispose()
            }, t
        }(e.SheetAnalyzer);
    e.FontAnalyzer = t, egret.registerClass(t, "RES.FontAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.soundDic = {}, this.resItemDic = []
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.loadFile = function(t, r, i) {
                if (this.soundDic[t.name]) return void r.call(i, t);
                var n = new egret.Sound;
                n.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this), this.resItemDic[n.$hashCode] = {
                    item: t,
                    func: r,
                    thisObject: i
                }, n.load(e.$getVirtualUrl(t.url)), t.data && (n.type = t.data.soundType)
            }, p.onLoadFinish = function(e) {
                var t = e.$target;
                t.removeEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), t.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this);
                var r = this.resItemDic[t.$hashCode];
                delete this.resItemDic[t.$hashCode];
                var i = r.item,
                    n = r.func;
                i.loaded = e.$type == egret.Event.COMPLETE, i.loaded && this.analyzeData(i, t), n.call(r.thisObject, i)
            }, p.analyzeData = function(e, t) {
                var r = e.name;
                !this.soundDic[r] && t && (this.soundDic[r] = t)
            }, p.getRes = function(e) {
                return this.soundDic[e]
            }, p.hasRes = function(e) {
                return !!this.getRes(e)
            }, p.destroyRes = function(e) {
                return this.soundDic[e] ? (delete this.soundDic[e], !0) : !1
            }, r
        }(e.AnalyzerBase);
    e.SoundAnalyzer = t, egret.registerClass(t, "RES.SoundAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(e) {
            function t() {
                e.call(this), this._dataFormat = egret.HttpResponseType.TEXT
            }
            __extends(t, e);
            var r = (__define, t);
            return p = r.prototype, p.analyzeData = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) try {
                    var i = t,
                        n = egret.XML.parse(i);
                    this.fileDic[r] = n
                } catch (s) {}
            }, t
        }(e.BinAnalyzer);
    e.XMLAnalyzer = t, egret.registerClass(t, "RES.XMLAnalyzer")
}(RES || (RES = {}));
var RES;
!
function(e) {}(RES || (RES = {}));
var RES;
!
function(e) {
    var t;
    !
    function(t) {
        var r = function(e) {
                function t() {
                    e.call(this), this._versionInfo = {}
                }
                __extends(t, e);
                var r = (__define, t);
                return p = r.prototype, p.fetchVersion = function(e) {
                    e.onSuccess(null)
                }, p.getChangeList = function() {
                    return []
                }, p.getVirtualUrl = function(e) {
                    return e
                }, t
            }(egret.EventDispatcher);
        t.Html5VersionController = r, egret.registerClass(r, "RES.web.Html5VersionController", ["RES.VersionController", "RES.IVersionController"]), egret.Capabilities.runtimeType == egret.RuntimeType.WEB && (e.VersionController = r)
    }(t = e.web || (e.web = {}))
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t;
    !
    function(t) {
        var r = function() {
                function e() {
                    this._versionInfo = {}, this._versionPath = "", this._localFileArr = []
                }
                var t = (__define, e);
                return p = t.prototype, p.fetchVersion = function(e) {
                    var t = this;
                    if (t._versionPath = "all.manifest", t._versionInfo = t.getLocalData(t._versionPath), null == t._versionInfo) return void egret.callLater(function() {
                        e.onFail(1, null)
                    }, t);
                    var r = 0,
                        i = function(i) {
                            if (i) for (var n = 0; n < i.length; n++) i[n] && "" != i[n] && t._localFileArr.push("resource/" + i[n]);
                            r++, 2 == r && e.onSuccess(null)
                        };
                    t.getList(i, "assets", "resource"), t.getList(i, "update", "resource")
                }, p.getList = function(e, t, r) {
                    void 0 === r && (r = "");
                    var i = egret.PromiseObject.create();
                    i.onSuccessFunc = function(t) {
                        e(t)
                    }, i.onErrorFunc = function() {
                        console.error("list files error")
                    }, "assets" == t ? egret_native.Game.listResource(r, i) : egret_native.Game.listUpdate(r, i)
                }, p.getChangeList = function() {
                    var e = [],
                        t = this._localFileArr;
                    for (var r in this._versionInfo) t.indexOf(this.getVirtualUrl(r)) < 0 && e.push({
                        url: this.getVirtualUrl(r),
                        size: this._versionInfo[r].s
                    });
                    return e
                }, p.getVirtualUrl = function(e) {
                    return this._versionInfo && this._versionInfo[e] ? "resource/" + this._versionInfo[e].v.substring(0, 2) + "/" + this._versionInfo[e].v + "_" + this._versionInfo[e].s + "." + e.substring(e.lastIndexOf(".") + 1) : e
                }, p.getLocalData = function(e) {
                    if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                        var t = egret_native.readUpdateFileSync(e);
                        if (null != t) return JSON.parse(t);
                        if (t = egret_native.readResourceFileSync(e), null != t) return JSON.parse(t)
                    }
                    return null
                }, e
            }();
        t.NativeVersionController = r, egret.registerClass(r, "RES.native.NativeVersionController", ["RES.VersionController", "RES.IVersionController"]), egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE && (e.VersionController = r)
    }(t = e["native"] || (e["native"] = {}))
}(RES || (RES = {}));
var RES;
!
function(e) {
    function t(e, t) {
        _.registerAnalyzer(e, t)
    }

    function r(e) {
        _.$registerVersionController(e)
    }

    function i(e, t, r) {
        void 0 === t && (t = ""), void 0 === r && (r = "json"), _.loadConfig(e, t, r)
    }

    function n(e, t) {
        void 0 === t && (t = 0), _.loadGroup(e, t)
    }

    function s(e) {
        return _.isGroupLoaded(e)
    }

    function a(e) {
        return _.getGroupByName(e)
    }

    function o(e, t, r) {
        return void 0 === r && (r = !1), _.createGroup(e, t, r)
    }

    function u(e) {
        return _.hasRes(e)
    }

    function l(e, t) {
        void 0 === t && (t = ""), _.parseConfig(e, t)
    }

    function c(e) {
        return _.getRes(e)
    }

    function h(e, t, r) {
        _.getResAsync(e, t, r)
    }

    function f(e, t, r, i) {
        void 0 === i && (i = ""), _.getResByUrl(e, t, r, i)
    }

    function d(e, t) {
        return _.destroyRes(e, t)
    }

    function g(e) {
        _.setMaxLoadingThread(e)
    }

    function v(e) {
        _.setMaxRetryTimes(e)
    }

    function y(e, t, r, i, n) {
        void 0 === i && (i = !1), void 0 === n && (n = 0), _.addEventListener(e, t, r, i, n)
    }

    function R(e, t, r, i) {
        void 0 === i && (i = !1), _.removeEventListener(e, t, r, i)
    }

    function E(e) {
        return _.vcs ? _.vcs.getVirtualUrl(e) : e
    }
    e.registerAnalyzer = t, e.registerVersionController = r, e.loadConfig = i, e.loadGroup = n, e.isGroupLoaded = s, e.getGroupByName = a, e.createGroup = o, e.hasRes = u, e.parseConfig = l, e.getRes = c, e.getResAsync = h, e.getResByUrl = f, e.destroyRes = d, e.setMaxLoadingThread = g, e.setMaxRetryTimes = v, e.addEventListener = y, e.removeEventListener = R, e.$getVirtualUrl = E;
    var m = function(t) {
            function r() {
                t.call(this), this.analyzerDic = {}, this.analyzerClassMap = {}, this.configItemList = [], this.callLaterFlag = !1, this.configComplete = !1, this.loadedGroups = [], this.groupNameList = [], this.asyncDic = {}, this._loadedUrlTypes = {}, this.init()
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.$getAnalyzerByType = function(e) {
                var t = this.analyzerDic[e];
                if (!t) {
                    var r = this.analyzerClassMap[e];
                    if (!r) return null;
                    t = this.analyzerDic[e] = new r
                }
                return t
            }, p.registerAnalyzer = function(e, t) {
                this.analyzerClassMap[e] = t
            }, p.$registerVersionController = function(e) {
                this.vcs = e
            }, p.init = function() {
                this.vcs = new e.VersionController;
                var t = this.analyzerClassMap;
                t[e.ResourceItem.TYPE_BIN] = e.BinAnalyzer, t[e.ResourceItem.TYPE_IMAGE] = e.ImageAnalyzer, t[e.ResourceItem.TYPE_TEXT] = e.TextAnalyzer, t[e.ResourceItem.TYPE_JSON] = e.JsonAnalyzer, t[e.ResourceItem.TYPE_SHEET] = e.SheetAnalyzer, t[e.ResourceItem.TYPE_FONT] = e.FontAnalyzer, t[e.ResourceItem.TYPE_SOUND] = e.SoundAnalyzer, t[e.ResourceItem.TYPE_XML] = e.XMLAnalyzer, this.resConfig = new e.ResourceConfig, this.resLoader = new e.ResourceLoader, this.resLoader.callBack = this.onResourceItemComp, this.resLoader.resInstance = this, this.resLoader.addEventListener(e.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this), this.resLoader.addEventListener(e.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
            }, p.loadConfig = function(e, t, r) {
                void 0 === r && (r = "json");
                var i = {
                    url: e,
                    resourceRoot: t,
                    type: r
                };
                this.configItemList.push(i), this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
            }, p.startLoadConfig = function() {
                var t = this;
                this.callLaterFlag = !1;
                var i = this.configItemList;
                this.configItemList = [], this.loadingConfigList = i;
                for (var n = i.length, s = [], a = 0; n > a; a++) {
                    var o = i[a],
                        u = new e.ResourceItem(o.url, o.url, o.type);
                    s.push(u)
                }
                var l = {
                    onSuccess: function(e) {
                        t.resLoader.loadGroup(s, r.GROUP_CONFIG, Number.MAX_VALUE)
                    },
                    onFail: function(r, i) {
                        e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_LOAD_ERROR)
                    }
                };
                this.vcs ? this.vcs.fetchVersion(l) : this.resLoader.loadGroup(s, r.GROUP_CONFIG, Number.MAX_VALUE)
            }, p.isGroupLoaded = function(e) {
                return -1 != this.loadedGroups.indexOf(e)
            }, p.getGroupByName = function(e) {
                return this.resConfig.getGroupByName(e)
            }, p.loadGroup = function(t, r) {
                if (void 0 === r && (r = 0), -1 != this.loadedGroups.indexOf(t)) return void e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, t);
                if (!this.resLoader.isGroupInLoading(t)) if (this.configComplete) {
                    var i = this.resConfig.getGroupByName(t);
                    this.resLoader.loadGroup(i, t, r)
                } else this.groupNameList.push({
                    name: t,
                    priority: r
                })
            }, p.createGroup = function(e, t, r) {
                if (void 0 === r && (r = !1), r) {
                    var i = this.loadedGroups.indexOf(e); - 1 != i && this.loadedGroups.splice(i, 1)
                }
                return this.resConfig.createGroup(e, t, r)
            }, p.onGroupComp = function(t) {
                if (t.groupName == r.GROUP_CONFIG) {
                    for (var i = this.loadingConfigList.length, n = 0; i > n; n++) {
                        var s = this.loadingConfigList[n],
                            a = this.$getAnalyzerByType(s.type),
                            o = a.getRes(s.url);
                        a.destroyRes(s.url),
                        this.resConfig.parseConfig(game_config, s.resourceRoot)
                    }
                    this.configComplete = !0, this.loadingConfigList = null, e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_COMPLETE), this.loadDelayGroups()
                } else this.loadedGroups.push(t.groupName), this.dispatchEvent(t)
            }, p.loadDelayGroups = function() {
                var e = this.groupNameList;
                this.groupNameList = [];
                for (var t = e.length, r = 0; t > r; r++) {
                    var i = e[r];
                    this.loadGroup(i.name, i.priority)
                }
            }, p.onGroupError = function(t) {
                t.groupName == r.GROUP_CONFIG ? (this.loadingConfigList = null, e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(t)
            }, p.hasRes = function(t) {
                var r = this.resConfig.getType(t);
                if ("" == r) {
                    var i = e.AnalyzerBase.getStringPrefix(t);
                    if (r = this.resConfig.getType(i), "" == r) return !1
                }
                return !0
            }, p.parseConfig = function(e, t) {
                this.resConfig.parseConfig(e, t), this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
            }, p.getRes = function(t) {
                var r = this.resConfig.getType(t);
                if ("" == r) {
                    var i = e.AnalyzerBase.getStringPrefix(t);
                    if (r = this.resConfig.getType(i), "" == r) return null
                }
                var n = this.$getAnalyzerByType(r);
                return n.getRes(t)
            }, p.getResAsync = function(t, r, i) {
                var n = this.resConfig.getType(t),
                    s = this.resConfig.getName(t);
                if ("" == n && (s = e.AnalyzerBase.getStringPrefix(t), n = this.resConfig.getType(s), "" == n)) return void egret.$callAsync(r, i);
                var a = this.$getAnalyzerByType(n),
                    o = a.getRes(t);
                if (o) return void egret.$callAsync(r, i, o, t);
                var u = {
                    key: t,
                    compFunc: r,
                    thisObject: i
                };
                if (this.asyncDic[s]) this.asyncDic[s].push(u);
                else {
                    this.asyncDic[s] = [u];
                    var l = this.resConfig.getResourceItem(s);
                    this.resLoader.loadItem(l)
                }
            }, p.getResByUrl = function(t, r, i, n) {
                if (void 0 === n && (n = ""), !t) return void egret.$callAsync(r, i);
                n || (n = this.getTypeByUrl(t)), null != this._loadedUrlTypes[t] && this._loadedUrlTypes[t] != n && egret.$warn(3202), this._loadedUrlTypes[t] = n;
                var s = this.$getAnalyzerByType(n),
                    a = t,
                    o = s.getRes(a);
                if (o) return void egret.$callAsync(r, i, o, t);
                var u = {
                    key: a,
                    compFunc: r,
                    thisObject: i
                };
                if (this.asyncDic[a]) this.asyncDic[a].push(u);
                else {
                    this.asyncDic[a] = [u];
                    var l = new e.ResourceItem(a, t, n);
                    this.resLoader.loadItem(l)
                }
            }, p.getTypeByUrl = function(t) {
                var r = t.substr(t.lastIndexOf(".") + 1);
                r && (r = r.toLowerCase());
                var i;
                switch (r) {
                case e.ResourceItem.TYPE_XML:
                case e.ResourceItem.TYPE_JSON:
                case e.ResourceItem.TYPE_SHEET:
                    i = r;
                    break;
                case "png":
                case "jpg":
                case "gif":
                case "jpeg":
                case "bmp":
                    i = e.ResourceItem.TYPE_IMAGE;
                    break;
                case "fnt":
                    i = e.ResourceItem.TYPE_FONT;
                    break;
                case "txt":
                    i = e.ResourceItem.TYPE_TEXT;
                    break;
                case "mp3":
                case "ogg":
                case "mpeg":
                case "wav":
                case "m4a":
                case "mp4":
                case "aiff":
                case "wma":
                case "mid":
                    i = e.ResourceItem.TYPE_SOUND;
                    break;
                default:
                    i = e.ResourceItem.TYPE_BIN
                }
                return i
            }, p.onResourceItemComp = function(e) {
                var t = this.asyncDic[e.name];
                delete this.asyncDic[e.name];
                for (var r = this.$getAnalyzerByType(e.type), i = t.length, n = 0; i > n; n++) {
                    var s = t[n],
                        a = r.getRes(s.key);
                    s.compFunc.call(s.thisObject, a, s.key)
                }
            }, p.destroyRes = function(e, t) {
                void 0 === t && (t = !0);
                var r = this.resConfig.getRawGroupByName(e);
                if (r && r.length > 0) {
                    var i = this.loadedGroups.indexOf(e); - 1 != i && this.loadedGroups.splice(i, 1);
                    for (var n = r.length, s = 0; n > s; s++) {
                        var a = r[s];
                        if (!t && this.isResInLoadedGroup(a.name));
                        else {
                            a.loaded = !1;
                            var o = this.$getAnalyzerByType(a.type);
                            o.destroyRes(a.name), this.removeLoadedGroupsByItemName(a.name)
                        }
                    }
                    return !0
                }
                var u = this.resConfig.getType(e);
                if ("" == u) {
                    if (u = this._loadedUrlTypes[e], null == u || "" == u) return !1;
                    delete this._loadedUrlTypes[e];
                    var o = this.$getAnalyzerByType(u);
                    return o.destroyRes(e), !0
                }
                a = this.resConfig.getRawResourceItem(e), a.loaded = !1, o = this.$getAnalyzerByType(u);
                var l = o.destroyRes(e);
                return this.removeLoadedGroupsByItemName(a.name), l
            }, p.removeLoadedGroupsByItemName = function(e) {
                for (var t = this.loadedGroups, r = t.length, i = 0; r > i; i++) for (var n = this.resConfig.getRawGroupByName(t[i]), s = n.length, a = 0; s > a; a++) {
                    var o = n[a];
                    if (o.name == e) {
                        t.splice(i, 1), i--, r = t.length;
                        break
                    }
                }
            }, p.isResInLoadedGroup = function(e) {
                for (var t = this.loadedGroups, r = t.length, i = 0; r > i; i++) for (var n = this.resConfig.getRawGroupByName(t[i]), s = n.length, a = 0; s > a; a++) {
                    var o = n[a];
                    if (o.name == e) return !0
                }
                return !1
            }, p.setMaxLoadingThread = function(e) {
                1 > e && (e = 1), this.resLoader.thread = e
            }, p.setMaxRetryTimes = function(e) {
                e = Math.max(e, 0), this.resLoader.maxRetryTimes = e
            }, r.GROUP_CONFIG = "RES__CONFIG", r
        }(egret.EventDispatcher);
    egret.registerClass(m, "Resource");
    var _ = new m
}(RES || (RES = {}));
var RES;
!
function(e) {
    var t = function(t) {
            function r() {
                t.call(this), this.sheetMap = {}, this.recyclerIamge = [], this._dataFormat = egret.HttpResponseType.TEXT
            }
            __extends(r, t);
            var i = (__define, r);
            return p = i.prototype, p.onLoadFinish = function(e) {
                var t = e.target,
                    r = this.resItemDic[t.$hashCode];
                delete this.resItemDic[t.hashCode];
                var i = r.item,
                    n = r.func;
                if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded) if (t instanceof egret.HttpRequest) {
                    i.loaded = !1;
                    var s = this.analyzeConfig(i, t.response);
                    if (s) return this.loadImage(s, r), void this.recycler.push(t)
                } else this.analyzeBitmap(i, t.data);
                t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t), n.call(r.thisObject, i)
            }, p.analyzeConfig = function(e, t) {
                var r, i = e.name,
                    n = "";
                try {
                    var s = t;
                    r = JSON.parse(s)
                } catch (a) {
                    egret.$warn(1017, e.url, t)
                }
                if (r) if (this.sheetMap[i] = r, r.file) n = this.getRelativePath(e.url, r.file);
                else {
                    var o = e.url.split("?"),
                        u = o[0].split("/");
                    u[u.length - 1] = u[u.length - 1].split(".")[0] + ".png", n = "";
                    for (var l = 0; l < u.length; l++) n += u[l] + (l < u.length - 1 ? "/" : "");
                    2 == o.length && (n += o[2])
                }
                return n
            }, p.analyzeBitmap = function(e, t) {
                var r = e.name;
                if (!this.fileDic[r] && t) {
                    var i = this.sheetMap[r];
                    delete this.sheetMap[r];
                    var n = e.data && e.data.subkeys ? "" : r,
                        s = this.parseAnimation(t, i, n);
                    this.fileDic[r] = s
                }
            }, p.getRelativePath = function(e, t) {
                e = e.split("\\").join("/");
                var r = e.lastIndexOf("/");
                return e = -1 != r ? e.substring(0, r + 1) + t : t
            }, p.parseAnimation = function(e, t, r) {
                for (var i, n = Object.keys(t.mc), s = t.mc[n[0]].frames, a = s.length, o = [], u = 0; a > u; u++) {
                    i = t.res[s[u].res];
                    var l = new egret.Texture;
                    l._bitmapData = e, l.$initData(i.x, i.y, i.w, i.h, s[u].x, s[u].y, s[u].sourceW, s[u].sourceH, e.width, e.height)
                }
                return o
            }, p.destroyRes = function(e) {
                var t = this.fileDic[e];
                return t ? (delete this.fileDic[e], !0) : !1
            }, p.loadImage = function(t, r) {
                var i = this.getImageLoader();
                this.resItemDic[i.hashCode] = r, i.load(e.$getVirtualUrl(t))
            }, p.getImageLoader = function() {
                var e = this.recyclerIamge.pop();
                return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)), e
            }, r
        }(e.BinAnalyzer);
    e.AnimationAnalyzer = t, egret.registerClass(t, "RES.AnimationAnalyzer")
}(RES || (RES = {}));
var egret;
!
function(e) {
    e.$locale_strings = e.$locale_strings || {}, e.$locale_strings.en_US = e.$locale_strings.en_US || {};
    var t = e.$locale_strings.en_US;
    t[3200] = "RES.createGroup() passed in non-existed key value in configuration: {0}", t[3201] = 'RES loaded non-existed or empty resource group:"{0}"', t[3202] = "Do not use the different types of ways to load the same material!", t[3203] = "Can't find the analyzer of the specified file type:{0}。 Please register the specified analyzer in the initialization of the project first,then start the resource loading process。"
}(egret || (egret = {}));
var egret;
!
function(e) {
    e.$locale_strings = e.$locale_strings || {}, e.$locale_strings.zh_CN = e.$locale_strings.zh_CN || {};
    var t = e.$locale_strings.zh_CN;
    t[3200] = "RES.createGroup()传入了配置中不存在的键值: {0}", t[3201] = 'RES加载了不存在或空的资源组:"{0}"', t[3202] = "请不要使用不同的类型方式来加载同一个素材！", t[3203] = "找不到指定文件类型的解析器:{0}。 请先在项目初始化里注册指定文件类型的解析器，再启动资源加载。"
}(egret || (egret = {}));

// main.js
var LoadingUI = function(e) {
        function t() {
            e.call(this), this.createView()
        }
        __extends(t, e);
        var i = (__define, t);
        return p = i.prototype, p.createView = function() {
            this.textField = new egret.TextField, this.addChild(this.textField), this.textField.y = 300, this.textField.width = 480, this.textField.height = 100, this.textField.textAlign = "center"
        }, p.setProgress = function(e, t) {
            this.textField.text = "Loading..." + e + "/" + t
        }, t
    }(egret.Sprite);
egret.registerClass(LoadingUI, "LoadingUI");
var Main = function(e) {
        function t() {
            e.call(this), this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
        }
        __extends(t, e);
        var i = (__define, t);
        return p = i.prototype, p.onAddToStage = function(e) {
            this.allSp = [],
            this.loadingView = new LoadingUI,
            this.stage.addChild(this.loadingView),
            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
            RES.loadConfig("", "/")
        }, p.onConfigComplete = function(e) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this),
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
            RES.loadGroup("preload")
        }, p.onResourceLoadComplete = function(e) {
            "preload" == e.groupName && (
                this.stage.removeChild(this.loadingView),
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
                this.createGameScene()
                )
        }, p.onResourceLoadError = function(e) {
            console.warn("Group:" + e.groupName + " has failed to load"), this.onResourceLoadComplete(e)
        }, p.onResourceProgress = function(e) {
            "preload" == e.groupName && this.loadingView.setProgress(e.itemsLoaded, e.itemsTotal)
        }, p.createGameScene = function() {
            var t = this.stage.stageWidth,
                i = this.stage.stageHeight;
            // var e = this.createBitmapByName("bgImage")
            // this.addChild(e)
            // e.width = t,
            // e.height = i;
            // e.anchorOffsetX = e.width / 2
            // e.anchorOffsetY = e.height / 2
            this.touchEnabled = !0;
            
            eval(window._userConfig["stageCode"].value)
            eval(window._userConfig["loadedCode"].value)
            this.editorByUser()
        }, p.editorByUser = function(){

            this.addGameObject()
            this.addTweenObject()

        }, p.addGameObject = function(){
            this.gameObject = []
            // 容器内object渲染
            for (key in window._userConfig){
                var temp = window._userConfig[key]
                var type = temp.type
                
                if ("gameObject" === type){
                    var value = JSON.parse(temp.value)
                    var t = this.createBitmapByName(value.textureName)
                    this.addChild(t)
                    this.gameObject.push(t)
                    for (_key in value){
                        if ("textureName" !== _key || "foreign_key" !== _key){
                            t[_key] = value[_key]
                        }
                    }
                }
            }
        }, p.addTweenObject = function(){
            this.tweenObject = []
            for (key in window._userConfig){
                var temp = window._userConfig[key]
                var type = temp.type
                if ("tweenObject" === type){
                    var value = JSON.parse(temp.value)
                    console.log(value)
                    var f_key = value.foreign_key
                    this.gameObject.map(function(unit,index){
                        if (f_key === unit.foreign_key){
                            var step = value._steps
                            t = egret.Tween.get(unit,{loop:value.loop})
                            step.map(function(_unit,index){
                                var x = _unit.p0.x
                                    _x = _unit.p1.x
                                unit.x = x
                                t.to({x:_x},value.duration)
                            })
                            
                            // t.to({})
                        }
                    })
                }
            }
        }, p.createBitmapByName = function(e,f) {
            var t = new egret.Bitmap,
                i = RES.getRes(e);
            t.texture = i
            t.foreign_key = e + (Math.random()+"").replace(/\./g, "")
            t.textureName = e
            t.touchEnabled = !0
            !f && this.allSp.push(t)
            return  t
        }, t
    }(egret.DisplayObjectContainer);
egret.registerClass(Main, "Main");
cqfSDK.loadConfig(function(userConfig){
    window._userConfig = userConfig
    console.log(userConfig)
    window.game_config = {
        "resources": [
            {
                "name": "bgImage",
                "type": "image",
                "url": userConfig["bg"].value
            },
            {
                "name": "egretIcon",
                "type": "image",
                "url": userConfig["icon"].value
            },
            {
                "name": "editorIcon",
                "type": "image",
                "url": userConfig["editorIcon"].value
            }
        ],
        "groups": [
            {
                "name": "preload",
                "keys": "bgImage,egretIcon,editorIcon"
            }
        ]
    }
    egret.runEgret();
})