var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e, n) {
            "undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof n && (n = 0), this.r = t, this.g = e, this.b = n
        }
        return t.prototype.toString = function() {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
        }, t.prototype.toArray = function(t, e) {
            void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b
        }, t.prototype.asArray = function() {
            var t = [];
            return this.toArray(t, 0), t
        }, t.prototype.multiply = function(e) {
            return new t(this.r * e.r, this.g * e.g, this.b * e.b)
        }, t.prototype.multiplyToRef = function(t, e) {
            e.r = this.r * t.r, e.g = this.g * t.g, e.b = this.b * t.b
        }, t.prototype.equals = function(t) {
            return t && this.r === t.r && this.g === t.g && this.b === t.b
        }, t.prototype.scale = function(e) {
            return new t(this.r * e, this.g * e, this.b * e)
        }, t.prototype.scaleToRef = function(t, e) {
            e.r = this.r * t, e.g = this.g * t, e.b = this.b * t
        }, t.prototype.add = function(e) {
            return new t(this.r + e.r, this.g + e.g, this.b + e.b)
        }, t.prototype.addToRef = function(t, e) {
            e.r = this.r + t.r, e.g = this.g + t.g, e.b = this.b + t.b
        }, t.prototype.subtract = function(e) {
            return new t(this.r - e.r, this.g - e.g, this.b - e.b)
        }, t.prototype.subtractToRef = function(t, e) {
            e.r = this.r - t.r, e.g = this.g - t.g, e.b = this.b - t.b
        }, t.prototype.clone = function() {
            return new t(this.r, this.g, this.b)
        }, t.prototype.copyFrom = function(t) {
            this.r = t.r, this.g = t.g, this.b = t.b
        }, t.prototype.copyFromFloats = function(t, e, n) {
            this.r = t, this.g = e, this.b = n
        }, t.FromArray = function(e) {
            return new t(e[0], e[1], e[2])
        }, t.FromInts = function(e, n, i) {
            return new t(e / 255, n / 255, i / 255)
        }, t.Lerp = function(e, n, i) {
            var o = e.r + (n.r - e.r) * i, r = e.g + (n.g - e.g) * i, s = e.b + (n.b - e.b) * i;
            return new t(o, r, s)
        }, t.Red = function() {
            return new t(1, 0, 0)
        }, t.Green = function() {
            return new t(0, 1, 0)
        }, t.Blue = function() {
            return new t(0, 0, 1)
        }, t.Black = function() {
            return new t(0, 0, 0)
        }, t.White = function() {
            return new t(1, 1, 1)
        }, t.Purple = function() {
            return new t(.5, 0, .5)
        }, t.Magenta = function() {
            return new t(1, 0, 1)
        }, t.Yellow = function() {
            return new t(1, 1, 0)
        }, t.Gray = function() {
            return new t(.5, .5, .5)
        }, t
    }();
    t.Color3 = e;
    var n = function() {
        function e(t, e, n, i) {
            this.r = t, this.g = e, this.b = n, this.a = i
        }
        return e.prototype.addInPlace = function(t) {
            this.r += t.r, this.g += t.g, this.b += t.b, this.a += t.a
        }, e.prototype.asArray = function() {
            var t = [];
            return this.toArray(t, 0), t
        }, e.prototype.toArray = function(t, e) {
            void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t[e + 3] = this.a
        }, e.prototype.add = function(t) {
            return new e(this.r + t.r, this.g + t.g, this.b + t.b, this.a + t.a)
        }, e.prototype.subtract = function(t) {
            return new e(this.r - t.r, this.g - t.g, this.b - t.b, this.a - t.a)
        }, e.prototype.subtractToRef = function(t, e) {
            e.r = this.r - t.r, e.g = this.g - t.g, e.b = this.b - t.b, e.a = this.a - t.a
        }, e.prototype.scale = function(t) {
            return new e(this.r * t, this.g * t, this.b * t, this.a * t)
        }, e.prototype.scaleToRef = function(t, e) {
            e.r = this.r * t, e.g = this.g * t, e.b = this.b * t, e.a = this.a * t
        }, e.prototype.toString = function() {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
        }, e.prototype.clone = function() {
            return new e(this.r, this.g, this.b, this.a)
        }, e.Lerp = function(n, i, o) {
            var r = new e(0, 0, 0, 0);
            return t.Color4.LerpToRef(n, i, o, r), r
        }, e.LerpToRef = function(t, e, n, i) {
            i.r = t.r + (e.r - t.r) * n, i.g = t.g + (e.g - t.g) * n, i.b = t.b + (e.b - t.b) * n, i.a = t.a + (e.a - t.a) * n
        }, e.FromArray = function(t, n) {
            return "undefined" == typeof n && (n = 0), new e(t[n], t[n + 1], t[n + 2], t[n + 3])
        }, e.FromInts = function(t, n, i, o) {
            return new e(t / 255, n / 255, i / 255, o / 255)
        }, e
    }();
    t.Color4 = n;
    var i = function() {
        function t(t, e) {
            this.x = t, this.y = e
        }
        return t.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + "}"
        }, t.prototype.toArray = function(t, e) {
            void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y
        }, t.prototype.asArray = function() {
            var t = [];
            return this.toArray(t, 0), t
        }, t.prototype.copyFrom = function(t) {
            this.x = t.x, this.y = t.y
        }, t.prototype.add = function(e) {
            return new t(this.x + e.x, this.y + e.y)
        }, t.prototype.subtract = function(e) {
            return new t(this.x - e.x, this.y - e.y)
        }, t.prototype.negate = function() {
            return new t(-this.x, -this.y)
        }, t.prototype.scaleInPlace = function(t) {
            return this.x *= t, this.y *= t, this
        }, t.prototype.scale = function(e) {
            return new t(this.x * e, this.y * e)
        }, t.prototype.equals = function(t) {
            return t && this.x === t.x && this.y === t.y
        }, t.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, t.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y
        }, t.prototype.normalize = function() {
            var t = this.length();
            if (0 === t)
                return this;
            var e = 1 / t;
            return this.x *= e, this.y *= e, this
        }, t.prototype.clone = function() {
            return new t(this.x, this.y)
        }, t.Zero = function() {
            return new t(0, 0)
        }, t.FromArray = function(e, n) {
            return n || (n = 0), new t(e[n], e[n + 1])
        }, t.CatmullRom = function(e, n, i, o, r) {
            var s = r * r, a = r * s, l = .5 * (2 * n.x + (-e.x + i.x) * r + (2 * e.x - 5 * n.x + 4 * i.x - o.x) * s + (-e.x + 3 * n.x - 3 * i.x + o.x) * a), h = .5 * (2 * n.y + (-e.y + i.y) * r + (2 * e.y - 5 * n.y + 4 * i.y - o.y) * s + (-e.y + 3 * n.y - 3 * i.y + o.y) * a);
            return new t(l, h)
        }, t.Clamp = function(e, n, i) {
            var o = e.x;
            o = o > i.x ? i.x : o, o = o < n.x ? n.x : o;
            var r = e.y;
            return r = r > i.y ? i.y : r, r = r < n.y ? n.y : r, new t(o, r)
        }, t.Hermite = function(e, n, i, o, r) {
            var s = r * r, a = r * s, l = 2 * a - 3 * s + 1, h = -2 * a + 3 * s, c = a - 2 * s + r, u = a - s, p = e.x * l + i.x * h + n.x * c + o.x * u, d = e.y * l + i.y * h + n.y * c + o.y * u;
            return new t(p, d)
        }, t.Lerp = function(e, n, i) {
            var o = e.x + (n.x - e.x) * i, r = e.y + (n.y - e.y) * i;
            return new t(o, r)
        }, t.Dot = function(t, e) {
            return t.x * e.x + t.y * e.y
        }, t.Normalize = function(t) {
            var e = t.clone();
            return e.normalize(), e
        }, t.Minimize = function(e, n) {
            var i = e.x < n.x ? e.x : n.x, o = e.y < n.y ? e.y : n.y;
            return new t(i, o)
        }, t.Maximize = function(e, n) {
            var i = e.x > n.x ? e.x : n.x, o = e.y > n.y ? e.y : n.y;
            return new t(i, o)
        }, t.Transform = function(e, n) {
            var i = e.x * n.m[0] + e.y * n.m[4], o = e.x * n.m[1] + e.y * n.m[5];
            return new t(i, o)
        }, t.Distance = function(e, n) {
            return Math.sqrt(t.DistanceSquared(e, n))
        }, t.DistanceSquared = function(t, e) {
            var n = t.x - e.x, i = t.y - e.y;
            return n * n + i * i
        }, t
    }();
    t.Vector2 = i;
    var o = function() {
        function e(t, e, n) {
            this.x = t, this.y = e, this.z = n
        }
        return e.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "}"
        }, e.prototype.asArray = function() {
            var t = [];
            return this.toArray(t, 0), t
        }, e.prototype.toArray = function(t, e) {
            void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z
        }, e.prototype.addInPlace = function(t) {
            this.x += t.x, this.y += t.y, this.z += t.z
        }, e.prototype.add = function(t) {
            return new e(this.x + t.x, this.y + t.y, this.z + t.z)
        }, e.prototype.addToRef = function(t, e) {
            e.x = this.x + t.x, e.y = this.y + t.y, e.z = this.z + t.z
        }, e.prototype.subtractInPlace = function(t) {
            this.x -= t.x, this.y -= t.y, this.z -= t.z
        }, e.prototype.subtract = function(t) {
            return new e(this.x - t.x, this.y - t.y, this.z - t.z)
        }, e.prototype.subtractToRef = function(t, e) {
            e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z
        }, e.prototype.subtractFromFloats = function(t, n, i) {
            return new e(this.x - t, this.y - n, this.z - i)
        }, e.prototype.subtractFromFloatsToRef = function(t, e, n, i) {
            i.x = this.x - t, i.y = this.y - e, i.z = this.z - n
        }, e.prototype.negate = function() {
            return new e(-this.x, -this.y, -this.z)
        }, e.prototype.scaleInPlace = function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        }, e.prototype.scale = function(t) {
            return new e(this.x * t, this.y * t, this.z * t)
        }, e.prototype.scaleToRef = function(t, e) {
            e.x = this.x * t, e.y = this.y * t, e.z = this.z * t
        }, e.prototype.equals = function(t) {
            return t && this.x === t.x && this.y === t.y && this.z === t.z
        }, e.prototype.equalsToFloats = function(t, e, n) {
            return this.x === t && this.y === e && this.z === n
        }, e.prototype.multiplyInPlace = function(t) {
            this.x *= t.x, this.y *= t.y, this.z *= t.z
        }, e.prototype.multiply = function(t) {
            return new e(this.x * t.x, this.y * t.y, this.z * t.z)
        }, e.prototype.multiplyToRef = function(t, e) {
            e.x = this.x * t.x, e.y = this.y * t.y, e.z = this.z * t.z
        }, e.prototype.multiplyByFloats = function(t, n, i) {
            return new e(this.x * t, this.y * n, this.z * i)
        }, e.prototype.divide = function(t) {
            return new e(this.x / t.x, this.y / t.y, this.z / t.z)
        }, e.prototype.divideToRef = function(t, e) {
            e.x = this.x / t.x, e.y = this.y / t.y, e.z = this.z / t.z
        }, e.prototype.MinimizeInPlace = function(t) {
            t.x < this.x && (this.x = t.x), t.y < this.y && (this.y = t.y), t.z < this.z && (this.z = t.z)
        }, e.prototype.MaximizeInPlace = function(t) {
            t.x > this.x && (this.x = t.x), t.y > this.y && (this.y = t.y), t.z > this.z && (this.z = t.z)
        }, e.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, e.prototype.lengthSquared = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, e.prototype.normalize = function() {
            var t = this.length();
            if (0 === t)
                return this;
            var e = 1 / t;
            return this.x *= e, this.y *= e, this.z *= e, this
        }, e.prototype.clone = function() {
            return new e(this.x, this.y, this.z)
        }, e.prototype.copyFrom = function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        }, e.prototype.copyFromFloats = function(t, e, n) {
            return this.x = t, this.y = e, this.z = n, this
        }, e.FromArray = function(t, n) {
            return n || (n = 0), new e(t[n], t[n + 1], t[n + 2])
        }, e.FromArrayToRef = function(t, e, n) {
            n.x = t[e], n.y = t[e + 1], n.z = t[e + 2]
        }, e.FromFloatArrayToRef = function(t, e, n) {
            n.x = t[e], n.y = t[e + 1], n.z = t[e + 2]
        }, e.FromFloatsToRef = function(t, e, n, i) {
            i.x = t, i.y = e, i.z = n
        }, e.Zero = function() {
            return new e(0, 0, 0)
        }, e.Up = function() {
            return new e(0, 1, 0)
        }, e.TransformCoordinates = function(t, n) {
            var i = e.Zero();
            return e.TransformCoordinatesToRef(t, n, i), i
        }, e.TransformCoordinatesToRef = function(t, e, n) {
            var i = t.x * e.m[0] + t.y * e.m[4] + t.z * e.m[8] + e.m[12], o = t.x * e.m[1] + t.y * e.m[5] + t.z * e.m[9] + e.m[13], r = t.x * e.m[2] + t.y * e.m[6] + t.z * e.m[10] + e.m[14], s = t.x * e.m[3] + t.y * e.m[7] + t.z * e.m[11] + e.m[15];
            n.x = i / s, n.y = o / s, n.z = r / s
        }, e.TransformCoordinatesFromFloatsToRef = function(t, e, n, i, o) {
            var r = t * i.m[0] + e * i.m[4] + n * i.m[8] + i.m[12], s = t * i.m[1] + e * i.m[5] + n * i.m[9] + i.m[13], a = t * i.m[2] + e * i.m[6] + n * i.m[10] + i.m[14], l = t * i.m[3] + e * i.m[7] + n * i.m[11] + i.m[15];
            o.x = r / l, o.y = s / l, o.z = a / l
        }, e.TransformNormal = function(t, n) {
            var i = e.Zero();
            return e.TransformNormalToRef(t, n, i), i
        }, e.TransformNormalToRef = function(t, e, n) {
            n.x = t.x * e.m[0] + t.y * e.m[4] + t.z * e.m[8], n.y = t.x * e.m[1] + t.y * e.m[5] + t.z * e.m[9], n.z = t.x * e.m[2] + t.y * e.m[6] + t.z * e.m[10]
        }, e.TransformNormalFromFloatsToRef = function(t, e, n, i, o) {
            o.x = t * i.m[0] + e * i.m[4] + n * i.m[8], o.y = t * i.m[1] + e * i.m[5] + n * i.m[9], o.z = t * i.m[2] + e * i.m[6] + n * i.m[10]
        }, e.CatmullRom = function(t, n, i, o, r) {
            var s = r * r, a = r * s, l = .5 * (2 * n.x + (-t.x + i.x) * r + (2 * t.x - 5 * n.x + 4 * i.x - o.x) * s + (-t.x + 3 * n.x - 3 * i.x + o.x) * a), h = .5 * (2 * n.y + (-t.y + i.y) * r + (2 * t.y - 5 * n.y + 4 * i.y - o.y) * s + (-t.y + 3 * n.y - 3 * i.y + o.y) * a), c = .5 * (2 * n.z + (-t.z + i.z) * r + (2 * t.z - 5 * n.z + 4 * i.z - o.z) * s + (-t.z + 3 * n.z - 3 * i.z + o.z) * a);
            return new e(l, h, c)
        }, e.Clamp = function(t, n, i) {
            var o = t.x;
            o = o > i.x ? i.x : o, o = o < n.x ? n.x : o;
            var r = t.y;
            r = r > i.y ? i.y : r, r = r < n.y ? n.y : r;
            var s = t.z;
            return s = s > i.z ? i.z : s, s = s < n.z ? n.z : s, new e(o, r, s)
        }, e.Hermite = function(t, n, i, o, r) {
            var s = r * r, a = r * s, l = 2 * a - 3 * s + 1, h = -2 * a + 3 * s, c = a - 2 * s + r, u = a - s, p = t.x * l + i.x * h + n.x * c + o.x * u, d = t.y * l + i.y * h + n.y * c + o.y * u, m = t.z * l + i.z * h + n.z * c + o.z * u;
            return new e(p, d, m)
        }, e.Lerp = function(t, n, i) {
            var o = t.x + (n.x - t.x) * i, r = t.y + (n.y - t.y) * i, s = t.z + (n.z - t.z) * i;
            return new e(o, r, s)
        }, e.Dot = function(t, e) {
            return t.x * e.x + t.y * e.y + t.z * e.z
        }, e.Cross = function(t, n) {
            var i = e.Zero();
            return e.CrossToRef(t, n, i), i
        }, e.CrossToRef = function(t, e, n) {
            n.x = t.y * e.z - t.z * e.y, n.y = t.z * e.x - t.x * e.z, n.z = t.x * e.y - t.y * e.x
        }, e.Normalize = function(t) {
            var n = e.Zero();
            return e.NormalizeToRef(t, n), n
        }, e.NormalizeToRef = function(t, e) {
            e.copyFrom(t), e.normalize()
        }, e.Project = function(n, i, o, r) {
            var s = r.width, a = r.height, l = r.x, h = r.y, c = t.Matrix.FromValues(s / 2, 0, 0, 0, 0, -a / 2, 0, 0, 0, 0, 1, 0, l + s / 2, a / 2 + h, 0, 1), u = i.multiply(o).multiply(c);
            return e.TransformCoordinates(n, u)
        }, e.Unproject = function(e, n, i, o, r, s) {
            var a = o.multiply(r).multiply(s);
            a.invert(), e.x = e.x / n * 2 - 1, e.y = -(e.y / i * 2 - 1);
            var l = t.Vector3.TransformCoordinates(e, a), h = e.x * a.m[3] + e.y * a.m[7] + e.z * a.m[11] + a.m[15];
            return t.Tools.WithinEpsilon(h, 1) && (l = l.scale(1 / h)), l
        }, e.Minimize = function(t, e) {
            var n = t.clone();
            return n.MinimizeInPlace(e), n
        }, e.Maximize = function(t, e) {
            var n = t.clone();
            return n.MaximizeInPlace(e), n
        }, e.Distance = function(t, n) {
            return Math.sqrt(e.DistanceSquared(t, n))
        }, e.DistanceSquared = function(t, e) {
            var n = t.x - e.x, i = t.y - e.y, o = t.z - e.z;
            return n * n + i * i + o * o
        }, e.Center = function(t, e) {
            var n = t.add(e);
            return n.scaleInPlace(.5), n
        }, e
    }();
    t.Vector3 = o;
    var r = function() {
        function t(t, e, n, i) {
            "undefined" == typeof t && (t = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof n && (n = 0), "undefined" == typeof i && (i = 0), this.x = t, this.y = e, this.z = n, this.w = i
        }
        return t.prototype.toString = function() {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}"
        }, t.prototype.asArray = function() {
            return [this.x, this.y, this.z, this.w]
        }, t.prototype.equals = function(t) {
            return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
        }, t.prototype.clone = function() {
            return new t(this.x, this.y, this.z, this.w)
        }, t.prototype.copyFrom = function(t) {
            this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w
        }, t.prototype.add = function(e) {
            return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
        }, t.prototype.subtract = function(e) {
            return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
        }, t.prototype.scale = function(e) {
            return new t(this.x * e, this.y * e, this.z * e, this.w * e)
        }, t.prototype.multiply = function(e) {
            var n = new t(0, 0, 0, 1);
            return this.multiplyToRef(e, n), n
        }, t.prototype.multiplyToRef = function(t, e) {
            e.x = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x, e.y = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y, e.z = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z, e.w = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
        }, t.prototype.length = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, t.prototype.normalize = function() {
            var t = 1 / this.length();
            this.x *= t, this.y *= t, this.z *= t, this.w *= t
        }, t.prototype.toEulerAngles = function() {
            var t = this.x, e = this.y, n = this.z, i = this.w, r = t * t, s = e * e, a = n * n, l = Math.atan2(2 * (e * i - t * n), 1 - 2 * (s + a)), h = Math.asin(2 * (t * e + n * i)), c = Math.atan2(2 * (t * i - e * n), 1 - 2 * (r + a)), u = t * e + n * i;
            return u > .499 ? (l = 2 * Math.atan2(t, i), c = 0) : -.499 > u && (l = -2 * Math.atan2(t, i), c = 0), new o(h, l, c)
        }, t.prototype.toRotationMatrix = function(t) {
            var e = this.x * this.x, n = this.y * this.y, i = this.z * this.z, o = this.x * this.y, r = this.z * this.w, s = this.z * this.x, a = this.y * this.w, l = this.y * this.z, h = this.x * this.w;
            t.m[0] = 1 - 2 * (n + i), t.m[1] = 2 * (o + r), t.m[2] = 2 * (s - a), t.m[3] = 0, t.m[4] = 2 * (o - r), t.m[5] = 1 - 2 * (i + e), t.m[6] = 2 * (l + h), t.m[7] = 0, t.m[8] = 2 * (s + a), t.m[9] = 2 * (l - h), t.m[10] = 1 - 2 * (n + e), t.m[11] = 0, t.m[12] = 0, t.m[13] = 0, t.m[14] = 0, t.m[15] = 1
        }, t.RotationAxis = function(e, n) {
            var i = new t, o = Math.sin(n / 2);
            return i.w = Math.cos(n / 2), i.x = e.x * o, i.y = e.y * o, i.z = e.z * o, i
        }, t.FromArray = function(e, n) {
            return n || (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
        }, t.RotationYawPitchRoll = function(e, n, i) {
            var o = new t;
            return t.RotationYawPitchRollToRef(e, n, i, o), o
        }, t.RotationYawPitchRollToRef = function(t, e, n, i) {
            var o = .5 * n, r = .5 * e, s = .5 * t, a = Math.sin(o), l = Math.cos(o), h = Math.sin(r), c = Math.cos(r), u = Math.sin(s), p = Math.cos(s);
            i.x = p * h * l + u * c * a, i.y = u * c * l - p * h * a, i.z = p * c * a - u * h * l, i.w = p * c * l + u * h * a
        }, t.Slerp = function(e, n, i) {
            var o, r, s = i, a = e.x * n.x + e.y * n.y + e.z * n.z + e.w * n.w, l = !1;
            if (0 > a && (l = !0, a = -a), a > .999999)
                r = 1 - s, o = l ? -s : s;
            else {
                var h = Math.acos(a), c = 1 / Math.sin(h);
                r = Math.sin((1 - s) * h) * c, o = l ? -Math.sin(s * h) * c : Math.sin(s * h) * c
            }
            return new t(r * e.x + o * n.x, r * e.y + o * n.y, r * e.z + o * n.z, r * e.w + o * n.w)
        }, t
    }();
    t.Quaternion = r;
    var s = function() {
        function t() {
            this.m = new Float32Array(16)
        }
        return t.prototype.isIdentity = function() {
            return 1 != this.m[0] || 1 != this.m[5] || 1 != this.m[10] || 1 != this.m[15] ? !1 : 0 != this.m[1] || 0 != this.m[2] || 0 != this.m[3] || 0 != this.m[4] || 0 != this.m[6] || 0 != this.m[7] || 0 != this.m[8] || 0 != this.m[9] || 0 != this.m[11] || 0 != this.m[12] || 0 != this.m[13] || 0 != this.m[14] ? !1 : !0
        }, t.prototype.determinant = function() {
            var t = this.m[10] * this.m[15] - this.m[11] * this.m[14], e = this.m[9] * this.m[15] - this.m[11] * this.m[13], n = this.m[9] * this.m[14] - this.m[10] * this.m[13], i = this.m[8] * this.m[15] - this.m[11] * this.m[12], o = this.m[8] * this.m[14] - this.m[10] * this.m[12], r = this.m[8] * this.m[13] - this.m[9] * this.m[12];
            return this.m[0] * (this.m[5] * t - this.m[6] * e + this.m[7] * n) - this.m[1] * (this.m[4] * t - this.m[6] * i + this.m[7] * o) + this.m[2] * (this.m[4] * e - this.m[5] * i + this.m[7] * r) - this.m[3] * (this.m[4] * n - this.m[5] * o + this.m[6] * r)
        }, t.prototype.toArray = function() {
            return this.m
        }, t.prototype.asArray = function() {
            return this.toArray()
        }, t.prototype.invert = function() {
            this.invertToRef(this)
        }, t.prototype.invertToRef = function(t) {
            var e = this.m[0], n = this.m[1], i = this.m[2], o = this.m[3], r = this.m[4], s = this.m[5], a = this.m[6], l = this.m[7], h = this.m[8], c = this.m[9], u = this.m[10], p = this.m[11], d = this.m[12], m = this.m[13], g = this.m[14], f = this.m[15], y = u * f - p * g, _ = c * f - p * m, v = c * g - u * m, b = h * f - p * d, w = h * g - u * d, x = h * m - c * d, C = s * y - a * _ + l * v, M = -(r * y - a * b + l * w), D = r * _ - s * b + l * x, B = -(r * v - s * w + a * x), A = 1 / (e * C + n * M + i * D + o * B), E = a * f - l * g, T = s * f - l * m, S = s * g - a * m, L = r * f - l * d, O = r * g - a * d, P = r * m - s * d, I = a * p - l * u, N = s * p - l * c, R = s * u - a * c, k = r * p - l * h, V = r * u - a * h, F = r * c - s * h;
            t.m[0] = C * A, t.m[4] = M * A, t.m[8] = D * A, t.m[12] = B * A, t.m[1] = -(n * y - i * _ + o * v) * A, t.m[5] = (e * y - i * b + o * w) * A, t.m[9] = -(e * _ - n * b + o * x) * A, t.m[13] = (e * v - n * w + i * x) * A, t.m[2] = (n * E - i * T + o * S) * A, t.m[6] = -(e * E - i * L + o * O) * A, t.m[10] = (e * T - n * L + o * P) * A, t.m[14] = -(e * S - n * O + i * P) * A, t.m[3] = -(n * I - i * N + o * R) * A, t.m[7] = (e * I - i * k + o * V) * A, t.m[11] = -(e * N - n * k + o * F) * A, t.m[15] = (e * R - n * V + i * F) * A
        }, t.prototype.setTranslation = function(t) {
            this.m[12] = t.x, this.m[13] = t.y, this.m[14] = t.z
        }, t.prototype.multiply = function(e) {
            var n = new t;
            return this.multiplyToRef(e, n), n
        }, t.prototype.copyFrom = function(t) {
            for (var e = 0; 16 > e; e++)
                this.m[e] = t.m[e]
                }, t.prototype.copyToArray = function(t, e) {
                    "undefined" == typeof e && (e = 0);
                    for (var n = 0; 16 > n; n++)
                        t[e + n] = this.m[n]
                        }, t.prototype.multiplyToRef = function(t, e) {
                            this.multiplyToArray(t, e.m, 0)
                        }, t.prototype.multiplyToArray = function(t, e, n) {
                            var i = this.m[0], o = this.m[1], r = this.m[2], s = this.m[3], a = this.m[4], l = this.m[5], h = this.m[6], c = this.m[7], u = this.m[8], p = this.m[9], d = this.m[10], m = this.m[11], g = this.m[12], f = this.m[13], y = this.m[14], _ = this.m[15], v = t.m[0], b = t.m[1], w = t.m[2], x = t.m[3], C = t.m[4], M = t.m[5], D = t.m[6], B = t.m[7], A = t.m[8], E = t.m[9], T = t.m[10], S = t.m[11], L = t.m[12], O = t.m[13], P = t.m[14], I = t.m[15];
                            e[n] = i * v + o * C + r * A + s * L, e[n + 1] = i * b + o * M + r * E + s * O, e[n + 2] = i * w + o * D + r * T + s * P, e[n + 3] = i * x + o * B + r * S + s * I, e[n + 4] = a * v + l * C + h * A + c * L, e[n + 5] = a * b + l * M + h * E + c * O, e[n + 6] = a * w + l * D + h * T + c * P, e[n + 7] = a * x + l * B + h * S + c * I, e[n + 8] = u * v + p * C + d * A + m * L, e[n + 9] = u * b + p * M + d * E + m * O, e[n + 10] = u * w + p * D + d * T + m * P, e[n + 11] = u * x + p * B + d * S + m * I, e[n + 12] = g * v + f * C + y * A + _ * L, e[n + 13] = g * b + f * M + y * E + _ * O, e[n + 14] = g * w + f * D + y * T + _ * P, e[n + 15] = g * x + f * B + y * S + _ * I
                        }, t.prototype.equals = function(t) {
                            return t && this.m[0] === t.m[0] && this.m[1] === t.m[1] && this.m[2] === t.m[2] && this.m[3] === t.m[3] && this.m[4] === t.m[4] && this.m[5] === t.m[5] && this.m[6] === t.m[6] && this.m[7] === t.m[7] && this.m[8] === t.m[8] && this.m[9] === t.m[9] && this.m[10] === t.m[10] && this.m[11] === t.m[11] && this.m[12] === t.m[12] && this.m[13] === t.m[13] && this.m[14] === t.m[14] && this.m[15] === t.m[15]
                        }, t.prototype.clone = function() {
                            return t.FromValues(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15])
                        }, t.FromArray = function(e, n) {
                            var i = new t;
                            return n || (n = 0), t.FromArrayToRef(e, n, i), i
                        }, t.FromArrayToRef = function(t, e, n) {
                            for (var i = 0; 16 > i; i++)
                                n.m[i] = t[i + e]
                                }, t.FromValuesToRef = function(t, e, n, i, o, r, s, a, l, h, c, u, p, d, m, g, f) {
                                    f.m[0] = t, f.m[1] = e, f.m[2] = n, f.m[3] = i, f.m[4] = o, f.m[5] = r, f.m[6] = s, f.m[7] = a, f.m[8] = l, f.m[9] = h, f.m[10] = c, f.m[11] = u, f.m[12] = p, f.m[13] = d, f.m[14] = m, f.m[15] = g
                                }, t.FromValues = function(e, n, i, o, r, s, a, l, h, c, u, p, d, m, g, f) {
                                    var y = new t;
                                    return y.m[0] = e, y.m[1] = n, y.m[2] = i, y.m[3] = o, y.m[4] = r, y.m[5] = s, y.m[6] = a, y.m[7] = l, y.m[8] = h, y.m[9] = c, y.m[10] = u, y.m[11] = p, y.m[12] = d, y.m[13] = m, y.m[14] = g, y.m[15] = f, y
                                }, t.Identity = function() {
                                    return t.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }, t.IdentityToRef = function(e) {
                                    t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e)
                                }, t.Zero = function() {
                                    return t.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                                }, t.RotationX = function(e) {
                                    var n = new t;
                                    return t.RotationXToRef(e, n), n
                                }, t.RotationXToRef = function(t, e) {
                                    var n = Math.sin(t), i = Math.cos(t);
                                    e.m[0] = 1, e.m[15] = 1, e.m[5] = i, e.m[10] = i, e.m[9] = -n, e.m[6] = n, e.m[1] = 0, e.m[2] = 0, e.m[3] = 0, e.m[4] = 0, e.m[7] = 0, e.m[8] = 0, e.m[11] = 0, e.m[12] = 0, e.m[13] = 0, e.m[14] = 0
                                }, t.RotationY = function(e) {
                                    var n = new t;
                                    return t.RotationYToRef(e, n), n
                                }, t.RotationYToRef = function(t, e) {
                                    var n = Math.sin(t), i = Math.cos(t);
                                    e.m[5] = 1, e.m[15] = 1, e.m[0] = i, e.m[2] = -n, e.m[8] = n, e.m[10] = i, e.m[1] = 0, e.m[3] = 0, e.m[4] = 0, e.m[6] = 0, e.m[7] = 0, e.m[9] = 0, e.m[11] = 0, e.m[12] = 0, e.m[13] = 0, e.m[14] = 0
                                }, t.RotationZ = function(e) {
                                    var n = new t;
                                    return t.RotationZToRef(e, n), n
                                }, t.RotationZToRef = function(t, e) {
                                    var n = Math.sin(t), i = Math.cos(t);
                                    e.m[10] = 1, e.m[15] = 1, e.m[0] = i, e.m[1] = n, e.m[4] = -n, e.m[5] = i, e.m[2] = 0, e.m[3] = 0, e.m[6] = 0, e.m[7] = 0, e.m[8] = 0, e.m[9] = 0, e.m[11] = 0, e.m[12] = 0, e.m[13] = 0, e.m[14] = 0
                                }, t.RotationAxis = function(e, n) {
                                    var i = Math.sin(-n), o = Math.cos(-n), r = 1 - o;
                                    e.normalize();
                                    var s = t.Zero();
                                    return s.m[0] = e.x * e.x * r + o, s.m[1] = e.x * e.y * r - e.z * i, s.m[2] = e.x * e.z * r + e.y * i, s.m[3] = 0, s.m[4] = e.y * e.x * r + e.z * i, s.m[5] = e.y * e.y * r + o, s.m[6] = e.y * e.z * r - e.x * i, s.m[7] = 0, s.m[8] = e.z * e.x * r - e.y * i, s.m[9] = e.z * e.y * r + e.x * i, s.m[10] = e.z * e.z * r + o, s.m[11] = 0, s.m[15] = 1, s
                                }, t.RotationYawPitchRoll = function(e, n, i) {
                                    var o = new t;
                                    return t.RotationYawPitchRollToRef(e, n, i, o), o
                                }, t.RotationYawPitchRollToRef = function(t, e, n, i) {
                                    r.RotationYawPitchRollToRef(t, e, n, this._tempQuaternion), this._tempQuaternion.toRotationMatrix(i)
                                }, t.Scaling = function(e, n, i) {
                                    var o = t.Zero();
                                    return t.ScalingToRef(e, n, i, o), o
                                }, t.ScalingToRef = function(t, e, n, i) {
                                    i.m[0] = t, i.m[1] = 0, i.m[2] = 0, i.m[3] = 0, i.m[4] = 0, i.m[5] = e, i.m[6] = 0, i.m[7] = 0, i.m[8] = 0, i.m[9] = 0, i.m[10] = n, i.m[11] = 0, i.m[12] = 0, i.m[13] = 0, i.m[14] = 0, i.m[15] = 1
                                }, t.Translation = function(e, n, i) {
                                    var o = t.Identity();
                                    return t.TranslationToRef(e, n, i, o), o
                                }, t.TranslationToRef = function(e, n, i, o) {
                                    t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, i, 1, o)
                                }, t.LookAtLH = function(e, n, i) {
                                    var o = t.Zero();
                                    return t.LookAtLHToRef(e, n, i, o), o
                                }, t.LookAtLHToRef = function(e, n, i, r) {
                                    n.subtractToRef(e, this._zAxis), this._zAxis.normalize(), o.CrossToRef(i, this._zAxis, this._xAxis), this._xAxis.normalize(), o.CrossToRef(this._zAxis, this._xAxis, this._yAxis), this._yAxis.normalize();
                                    var s = -o.Dot(this._xAxis, e), a = -o.Dot(this._yAxis, e), l = -o.Dot(this._zAxis, e);
                                    return t.FromValuesToRef(this._xAxis.x, this._yAxis.x, this._zAxis.x, 0, this._xAxis.y, this._yAxis.y, this._zAxis.y, 0, this._xAxis.z, this._yAxis.z, this._zAxis.z, 0, s, a, l, 1, r)
                                }, t.OrthoLH = function(e, n, i, o) {
                                    var r = 2 / e, s = 2 / n, a = 1 / (o - i), l = i / (i - o);
                                    return t.FromValues(r, 0, 0, 0, 0, s, 0, 0, 0, 0, a, 0, 0, 0, l, 1)
                                }, t.OrthoOffCenterLH = function(e, n, i, o, r, s) {
                                    var a = t.Zero();
                                    return t.OrthoOffCenterLHToRef(e, n, i, o, r, s, a), a
                                }, t.OrthoOffCenterLHToRef = function(t, e, n, i, o, r, s) {
                                    s.m[0] = 2 / (e - t), s.m[1] = s.m[2] = s.m[3] = 0, s.m[5] = 2 / (i - n), s.m[4] = s.m[6] = s.m[7] = 0, s.m[10] = -1 / (o - r), s.m[8] = s.m[9] = s.m[11] = 0, s.m[12] = (t + e) / (t - e), s.m[13] = (i + n) / (n - i), s.m[14] = o / (o - r), s.m[15] = 1
                                }, t.PerspectiveLH = function(e, n, i, o) {
                                    var r = t.Zero();
                                    return r.m[0] = 2 * i / e, r.m[1] = r.m[2] = r.m[3] = 0, r.m[5] = 2 * i / n, r.m[4] = r.m[6] = r.m[7] = 0, r.m[10] = -o / (i - o), r.m[8] = r.m[9] = 0, r.m[11] = 1, r.m[12] = r.m[13] = r.m[15] = 0, r.m[14] = i * o / (i - o), r
                                }, t.PerspectiveFovLH = function(e, n, i, o) {
                                    var r = t.Zero();
                                    return t.PerspectiveFovLHToRef(e, n, i, o, r), r
                                }, t.PerspectiveFovLHToRef = function(t, e, n, i, o) {
                                    var r = 1 / Math.tan(.5 * t);
                                    o.m[0] = r / e, o.m[1] = o.m[2] = o.m[3] = 0, o.m[5] = r, o.m[4] = o.m[6] = o.m[7] = 0, o.m[8] = o.m[9] = 0, o.m[10] = -i / (n - i), o.m[11] = 1, o.m[12] = o.m[13] = o.m[15] = 0, o.m[14] = n * i / (n - i)
                                }, t.GetFinalMatrix = function(e, n, i, o, r, s) {
                                    var a = e.width, l = e.height, h = e.x, c = e.y, u = t.FromValues(a / 2, 0, 0, 0, 0, -l / 2, 0, 0, 0, 0, s - r, 0, h + a / 2, l / 2 + c, r, 1);
                                    return n.multiply(i).multiply(o).multiply(u)
                                }, t.Transpose = function(e) {
                                    var n = new t;
                                    return n.m[0] = e.m[0], n.m[1] = e.m[4], n.m[2] = e.m[8], n.m[3] = e.m[12], n.m[4] = e.m[1], n.m[5] = e.m[5], n.m[6] = e.m[9], n.m[7] = e.m[13], n.m[8] = e.m[2], n.m[9] = e.m[6], n.m[10] = e.m[10], n.m[11] = e.m[14], n.m[12] = e.m[3], n.m[13] = e.m[7], n.m[14] = e.m[11], n.m[15] = e.m[15], n
                                }, t.Reflection = function(e) {
                                    var n = new t;
                                    return t.ReflectionToRef(e, n), n
                                }, t.ReflectionToRef = function(t, e) {
                                    t.normalize();
                                    var n = t.normal.x, i = t.normal.y, o = t.normal.z, r = -2 * n, s = -2 * i, a = -2 * o;
                                    e.m[0] = r * n + 1, e.m[1] = s * n, e.m[2] = a * n, e.m[3] = 0, e.m[4] = r * i, e.m[5] = s * i + 1, e.m[6] = a * i, e.m[7] = 0, e.m[8] = r * o, e.m[9] = s * o, e.m[10] = a * o + 1, e.m[11] = 0, e.m[12] = r * t.d, e.m[13] = s * t.d, e.m[14] = a * t.d, e.m[15] = 1
                                }, t._tempQuaternion = new r, t._xAxis = o.Zero(), t._yAxis = o.Zero(), t._zAxis = o.Zero(), t
    }();
    t.Matrix = s;
    var a = function() {
        function e(t, e, n, i) {
            this.normal = new o(t, e, n), this.d = i
        }
        return e.prototype.asArray = function() {
            return [this.normal.x, this.normal.y, this.normal.z, this.d]
        }, e.prototype.clone = function() {
            return new e(this.normal.x, this.normal.y, this.normal.z, this.d)
        }, e.prototype.normalize = function() {
            var t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z), e = 0;
            0 != t && (e = 1 / t), this.normal.x *= e, this.normal.y *= e, this.normal.z *= e, this.d *= e
        }, e.prototype.transform = function(e) {
            var n = t.Matrix.Transpose(e), i = this.normal.x, o = this.normal.y, r = this.normal.z, s = this.d, a = i * n.m[0] + o * n.m[1] + r * n.m[2] + s * n.m[3], l = i * n.m[4] + o * n.m[5] + r * n.m[6] + s * n.m[7], h = i * n.m[8] + o * n.m[9] + r * n.m[10] + s * n.m[11], c = i * n.m[12] + o * n.m[13] + r * n.m[14] + s * n.m[15];
            return new t.Plane(a, l, h, c)
        }, e.prototype.dotCoordinate = function(t) {
            return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
        }, e.prototype.copyFromPoints = function(t, e, n) {
            var i, o = e.x - t.x, r = e.y - t.y, s = e.z - t.z, a = n.x - t.x, l = n.y - t.y, h = n.z - t.z, c = r * h - s * l, u = s * a - o * h, p = o * l - r * a, d = Math.sqrt(c * c + u * u + p * p);
            i = 0 != d ? 1 / d : 0, this.normal.x = c * i, this.normal.y = u * i, this.normal.z = p * i, this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)
        }, e.prototype.isFrontFacingTo = function(t, e) {
            var n = o.Dot(this.normal, t);
            return e >= n
        }, e.prototype.signedDistanceTo = function(t) {
            return o.Dot(t, this.normal) + this.d
        }, e.FromArray = function(e) {
            return new t.Plane(e[0], e[1], e[2], e[3])
        }, e.FromPoints = function(e, n, i) {
            var o = new t.Plane(0, 0, 0, 0);
            return o.copyFromPoints(e, n, i), o
        }, e.FromPositionAndNormal = function(e, n) {
            var i = new t.Plane(0, 0, 0, 0);
            return n.normalize(), i.normal = n, i.d = -(n.x * e.x + n.y * e.y + n.z * e.z), i
        }, e.SignedDistanceToPlaneFromPositionAndNormal = function(t, e, n) {
            var i = -(e.x * t.x + e.y * t.y + e.z * t.z);
            return o.Dot(n, e) + i
        }, e
    }();
    t.Plane = a;
    var l = function() {
        function t(t, e, n, i) {
            this.x = t, this.y = e, this.width = n, this.height = i
        }
        return t.prototype.toGlobal = function(e) {
            var n = e.getRenderWidth(), i = e.getRenderHeight();
            return new t(this.x * n, this.y * i, this.width * n, this.height * i)
        }, t
    }();
    t.Viewport = l;
    var h = function() {
        function t() {
        }
        return t.GetPlanes = function(e) {
            for (var n = [], i = 0; 6 > i; i++)
                n.push(new a(0, 0, 0, 0));
            return t.GetPlanesToRef(e, n), n
        }, t.GetPlanesToRef = function(t, e) {
            e[0].normal.x = t.m[3] + t.m[2], e[0].normal.y = t.m[7] + t.m[6], e[0].normal.z = t.m[10] + t.m[10], e[0].d = t.m[15] + t.m[14], e[0].normalize(), e[1].normal.x = t.m[3] - t.m[2], e[1].normal.y = t.m[7] - t.m[6], e[1].normal.z = t.m[11] - t.m[10], e[1].d = t.m[15] - t.m[14], e[1].normalize(), e[2].normal.x = t.m[3] + t.m[0], e[2].normal.y = t.m[7] + t.m[4], e[2].normal.z = t.m[11] + t.m[8], e[2].d = t.m[15] + t.m[12], e[2].normalize(), e[3].normal.x = t.m[3] - t.m[0], e[3].normal.y = t.m[7] - t.m[4], e[3].normal.z = t.m[11] - t.m[8], e[3].d = t.m[15] - t.m[12], e[3].normalize(), e[4].normal.x = t.m[3] - t.m[1], e[4].normal.y = t.m[7] - t.m[5], e[4].normal.z = t.m[11] - t.m[9], e[4].d = t.m[15] - t.m[13], e[4].normalize(), e[5].normal.x = t.m[3] + t.m[1], e[5].normal.y = t.m[7] + t.m[5], e[5].normal.z = t.m[11] + t.m[9], e[5].d = t.m[15] + t.m[13], e[5].normalize()
        }, t
    }();
    t.Frustum = h;
    var c = function() {
        function e(t, e) {
            this.origin = t, this.direction = e
        }
        return e.prototype.intersectsBoxMinMax = function(t, e) {
            var n = 0, i = Number.MAX_VALUE;
            if (Math.abs(this.direction.x) < 1e-7) {
                if (this.origin.x < t.x || this.origin.x > e.x)
                    return !1
                    } else {
                        var o = 1 / this.direction.x, r = (t.x - this.origin.x) * o, s = (e.x - this.origin.x) * o;
                        if (r > s) {
                            var a = r;
                            r = s, s = a
                        }
                        if (n = Math.max(r, n), i = Math.min(s, i), n > i)
                            return !1
                            }
            if (Math.abs(this.direction.y) < 1e-7) {
                if (this.origin.y < t.y || this.origin.y > e.y)
                    return !1
                    } else if (o = 1 / this.direction.y, r = (t.y - this.origin.y) * o, s = (e.y - this.origin.y) * o, r > s && (a = r, r = s, s = a), n = Math.max(r, n), i = Math.min(s, i), n > i)
                        return !1;
            if (Math.abs(this.direction.z) < 1e-7) {
                if (this.origin.z < t.z || this.origin.z > e.z)
                    return !1
                    } else if (o = 1 / this.direction.z, r = (t.z - this.origin.z) * o, s = (e.z - this.origin.z) * o, r > s && (a = r, r = s, s = a), n = Math.max(r, n), i = Math.min(s, i), n > i)
                        return !1;
            return !0
        }, e.prototype.intersectsBox = function(t) {
            return this.intersectsBoxMinMax(t.minimum, t.maximum)
        }, e.prototype.intersectsSphere = function(t) {
            var e = t.center.x - this.origin.x, n = t.center.y - this.origin.y, i = t.center.z - this.origin.z, o = e * e + n * n + i * i, r = t.radius * t.radius;
            if (r >= o)
                return !0;
            var s = e * this.direction.x + n * this.direction.y + i * this.direction.z;
            if (0 > s)
                return !1;
            var a = o - s * s;
            return r >= a
        }, e.prototype.intersectsTriangle = function(e, n, i) {
            this._edge1 || (this._edge1 = t.Vector3.Zero(), this._edge2 = t.Vector3.Zero(), this._pvec = t.Vector3.Zero(), this._tvec = t.Vector3.Zero(), this._qvec = t.Vector3.Zero()), n.subtractToRef(e, this._edge1), i.subtractToRef(e, this._edge2), t.Vector3.CrossToRef(this.direction, this._edge2, this._pvec);
            var r = o.Dot(this._edge1, this._pvec);
            if (0 === r)
                return null;
            var s = 1 / r;
            this.origin.subtractToRef(e, this._tvec);
            var a = o.Dot(this._tvec, this._pvec) * s;
            if (0 > a || a > 1)
                return null;
            o.CrossToRef(this._tvec, this._edge1, this._qvec);
            var l = o.Dot(this.direction, this._qvec) * s;
            return 0 > l || a + l > 1 ? null : new t.IntersectionInfo(a, l, o.Dot(this._edge2, this._qvec) * s)
        }, e.CreateNew = function(n, i, o, r, s, a, l) {
            var h = t.Vector3.Unproject(new t.Vector3(n, i, 0), o, r, s, a, l), c = t.Vector3.Unproject(new t.Vector3(n, i, 1), o, r, s, a, l), u = c.subtract(h);
            return u.normalize(), new e(h, u)
        }, e.Transform = function(n, i) {
            var o = t.Vector3.TransformCoordinates(n.origin, i), r = t.Vector3.TransformNormal(n.direction, i);
            return new e(o, r)
        }, e
    }();
    t.Ray = c, function(t) {
        t[t.LOCAL = 0] = "LOCAL", t[t.WORLD = 1] = "WORLD"
    }(t.Space || (t.Space = {}));
    var u = (t.Space, function() {
             function e() {
             }
             return e.X = new t.Vector3(1, 0, 0), e.Y = new t.Vector3(0, 1, 0), e.Z = new t.Vector3(0, 0, 1), e
             }());
    t.Axis = u
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n) {
            this.idbFactory = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.callbackManifestChecked = n, this.currentSceneUrl = t.Database.ReturnFullUrlLocation(e), this.db = null, this.enableSceneOffline = !1, this.enableTexturesOffline = !1, this.manifestVersionFound = 0, this.mustUpdateRessources = !1, this.hasReachedQuota = !1, this.checkManifestFile()
        }
        return e.prototype.checkManifestFile = function() {
            function e() {
                t.Tools.Log("Valid manifest file not found. Scene & textures will be loaded directly from the web server."), n.enableSceneOffline = !1, n.enableTexturesOffline = !1, n.callbackManifestChecked(!1)
            }
            var n = this, i = this.currentSceneUrl + " ", o = new XMLHttpRequest, r = i;
			//var n = this, i = this.currentSceneUrl + ".manifest", o = new XMLHttpRequest, r = i + (null == i.match(/\?/) ? "?" : "&") + (new Date).getTime();
            o.open("GET", r, !0), o.addEventListener("load", function() {
                                                     if (200 === o.status || t.Tools.ValidateXHRData(o, 1))
                                                     try {
                                                     var i = JSON.parse(o.response);
                                                     n.enableSceneOffline = i.enableSceneOffline, n.enableTexturesOffline = i.enableTexturesOffline, i.version && !isNaN(parseInt(i.version)) && (n.manifestVersionFound = i.version), n.callbackManifestChecked && n.callbackManifestChecked(!0)
                                                     } catch (r) {
                                                     e()
                                                     }
                                                     else
                                                     e()
                                                     }, !1), o.addEventListener("error", function() {
                                                                                e()
                                                                                }, !1);
            try {
                o.send()
            } catch (s) {
                //                t.Tools.Error("Error on XHR send request."), n.callbackManifestChecked(!1)
            }
        }, e.prototype.openAsync = function(e, n) {
            function i() {
                o.isSupported = !1, n && n()
            }
            var o = this;
            if (this.idbFactory && (this.enableSceneOffline || this.enableTexturesOffline))
                if (this.db)
                    e && e();
                else {
                    this.hasReachedQuota = !1, this.isSupported = !0;
                    var r = this.idbFactory.open("babylonjs", 1);
                    r.onerror = function() {
                        i()
                    }, r.onblocked = function() {
                        t.Tools.Error("IDB request blocked. Please reload the page."), i()
                    }, r.onsuccess = function() {
                        o.db = r.result, e()
                    }, r.onupgradeneeded = function(e) {
                        o.db = e.target.result;
                        try {
                            e.oldVersion > 0 && (o.db.deleteObjectStore("scenes"), o.db.deleteObjectStore("versions"), o.db.deleteObjectStore("textures"));
                            {
                                o.db.createObjectStore("scenes", {keyPath: "sceneUrl"}), o.db.createObjectStore("versions", {keyPath: "sceneUrl"}), o.db.createObjectStore("textures", {keyPath: "textureUrl"})
                            }
                        } catch (n) {
                            t.Tools.Error("Error while creating object stores. Exception: " + n.message), i()
                        }
                    }
                }
                else
                    this.isSupported = !1, n && n()
                    }, e.prototype.loadImageFromDB = function(e, n) {
                        var i = this, o = t.Database.ReturnFullUrlLocation(e), r = function() {
                            i.hasReachedQuota || null === i.db ? n.src = e : i._saveImageIntoDBAsync(o, n)
                        };
                        this.mustUpdateRessources ? r() : this._loadImageFromDBAsync(o, n, r)
                    }, e.prototype._loadImageFromDBAsync = function(e, n, i) {
                        if (this.isSupported && null !== this.db) {
                            var o, r = this.db.transaction(["textures"]);
                            r.onabort = function() {
                                n.src = e
                            }, r.oncomplete = function() {
                                var r;
                                if (o) {
                                    var s = window.URL || window.webkitURL;
                                    r = s.createObjectURL(o.data, {oneTimeOnly: !0}), n.onerror = function() {
                                        t.Tools.Error("Error loading image from blob URL: " + r + " switching back to web url: " + e), n.src = e
                                    }, n.src = r
                                } else
                                    i()
                                    };
                            var s = r.objectStore("textures").get(e);
                            s.onsuccess = function(t) {
                                o = t.target.result
                            }, s.onerror = function() {
                                t.Tools.Error("Error loading texture " + e + " from DB."), n.src = e
                            }
                        } else
                            t.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), n.src = e
                            }, e.prototype._saveImageIntoDBAsync = function(e, n) {
                                if (this.isSupported) {
                                    var i = function() {
                                        var t;
                                        if (o) {
                                            var e = window.URL || window.webkitURL;
                                            try {
                                                t = e.createObjectURL(o, {oneTimeOnly: !0})
                                            } catch (i) {
                                                t = e.createObjectURL(o)
                                            }
                                        }
                                        n.src = t
                                    };
                                    if (t.Database.isUASupportingBlobStorage) {
                                        var o, r = this, s = new XMLHttpRequest;
                                        s.open("GET", e, !0), s.responseType = "blob", s.addEventListener("load", function() {
                                                                                                          if (200 === s.status) {
                                                                                                          o = s.response;
                                                                                                          var a = r.db.transaction(["textures"], "readwrite");
                                                                                                          a.onabort = function(t) {
                                                                                                          try {
                                                                                                          "QuotaExceededError" === t.srcElement.error.name && (r.hasReachedQuota = !0)
                                                                                                          } catch (e) {
                                                                                                          }
                                                                                                          i()
                                                                                                          }, a.oncomplete = function() {
                                                                                                          i()
                                                                                                          };
                                                                                                          var l = {textureUrl: e,data: o};
                                                                                                          try {
                                                                                                          var h = a.objectStore("textures").put(l);
                                                                                                          h.onsuccess = function() {
                                                                                                          }, h.onerror = function() {
                                                                                                          i()
                                                                                                          }
                                                                                                          } catch (c) {
                                                                                                          25 === c.code && (t.Database.isUASupportingBlobStorage = !1), n.src = e
                                                                                                          }
                                                                                                          } else
                                                                                                          n.src = e
                                                                                                          }, !1), s.addEventListener("error", function() {
                                                                                                                                     t.Tools.Error("Error in XHR request in BABYLON.Database."), n.src = e
                                                                                                                                     }, !1), s.send()
                                    } else
                                        n.src = e
                                        } else
                                            t.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), n.src = e
                                            }, e.prototype._checkVersionFromDB = function(t, e) {
                                                var n = this, i = function() {
                                                    n._saveVersionIntoDBAsync(t, e)
                                                };
                                                this._loadVersionFromDBAsync(t, e, i)
                                            }, e.prototype._loadVersionFromDBAsync = function(e, n, i) {
                                                if (this.isSupported) {
                                                    var o, r = this;
                                                    try {
                                                        var s = this.db.transaction(["versions"]);
                                                        s.oncomplete = function() {
                                                            o ? r.manifestVersionFound > o.data ? (r.mustUpdateRessources = !0, i()) : n(o.data) : (r.mustUpdateRessources = !0, i())
                                                        }, s.onabort = function() {
                                                            n(-1)
                                                        };
                                                        var a = s.objectStore("versions").get(e);
                                                        a.onsuccess = function(t) {
                                                            o = t.target.result
                                                        }, a.onerror = function() {
                                                            t.Tools.Error("Error loading version for scene " + e + " from DB."), n(-1)
                                                        }
                                                    } catch (l) {
                                                        t.Tools.Error("Error while accessing 'versions' object store (READ OP). Exception: " + l.message), n(-1)
                                                    }
                                                } else
                                                    t.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), n(-1)
                                                    }, e.prototype._saveVersionIntoDBAsync = function(e, n) {
                                                        if (this.isSupported && !this.hasReachedQuota) {
                                                            var i = this;
                                                            try {
                                                                var o = this.db.transaction(["versions"], "readwrite");
                                                                o.onabort = function(t) {
                                                                    try {
                                                                        "QuotaExceededError" === t.srcElement.error.name && (i.hasReachedQuota = !0)
                                                                    } catch (e) {
                                                                    }
                                                                    n(-1)
                                                                }, o.oncomplete = function() {
                                                                    n(i.manifestVersionFound)
                                                                };
                                                                var r = {sceneUrl: e,data: this.manifestVersionFound}, s = o.objectStore("versions").put(r);
                                                                s.onsuccess = function() {
                                                                }, s.onerror = function() {
                                                                    t.Tools.Error("Error in DB add version request in BABYLON.Database.")
                                                                }
                                                            } catch (a) {
                                                                t.Tools.Error("Error while accessing 'versions' object store (WRITE OP). Exception: " + a.message), n(-1)
                                                            }
                                                        } else
                                                            n(-1)
                                                            }, e.prototype.loadFileFromDB = function(e, n, i, o, r) {
                                                                var s = this, a = t.Database.ReturnFullUrlLocation(e), l = function() {
                                                                    s._saveFileIntoDBAsync(a, n, i)
                                                                };
                                                                this._checkVersionFromDB(a, function(t) {
                                                                                         -1 !== t ? s.mustUpdateRessources ? s._saveFileIntoDBAsync(a, n, i, r) : s._loadFileFromDBAsync(a, n, l, r) : o()
                                                                                         })
                                                            }, e.prototype._loadFileFromDBAsync = function(e, n, i) {
                                                                if (this.isSupported) {
                                                                    var o;
                                                                    o = -1 !== e.indexOf(".babylon") ? "scenes" : "textures";
                                                                    var r, s = this.db.transaction([o]);
                                                                    s.oncomplete = function() {
                                                                        r ? n(r.data) : i()
                                                                    }, s.onabort = function() {
                                                                        i()
                                                                    };
                                                                    var a = s.objectStore(o).get(e);
                                                                    a.onsuccess = function(t) {
                                                                        r = t.target.result
                                                                    }, a.onerror = function() {
                                                                        t.Tools.Error("Error loading file " + e + " from DB."), i()
                                                                    }
                                                                } else
                                                                    t.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), n()
                                                                    }, e.prototype._saveFileIntoDBAsync = function(e, n, i, o) {
                                                                        if (this.isSupported) {
                                                                            var r;
                                                                            r = -1 !== e.indexOf(".babylon") ? "scenes" : "textures";
                                                                            var s, a = new XMLHttpRequest, l = this;
                                                                            a.open("GET", e, !0), o && (a.responseType = "arraybuffer"), a.onprogress = i, a.addEventListener("load", function() {
                                                                                                                                                                              if (200 === a.status || t.Tools.ValidateXHRData(a, o ? 6 : 1))
                                                                                                                                                                              if (s = o ? a.response : a.responseText, l.hasReachedQuota)
                                                                                                                                                                              n(s);
                                                                                                                                                                              else {
                                                                                                                                                                              var i = l.db.transaction([r], "readwrite");
                                                                                                                                                                              i.onabort = function(t) {
                                                                                                                                                                              try {
                                                                                                                                                                              "QuotaExceededError" === t.srcElement.error.name && (l.hasReachedQuota = !0)
                                                                                                                                                                              } catch (e) {
                                                                                                                                                                              }
                                                                                                                                                                              n(s)
                                                                                                                                                                              }, i.oncomplete = function() {
                                                                                                                                                                              n(s)
                                                                                                                                                                              };
                                                                                                                                                                              var h;
                                                                                                                                                                              h = "scenes" === r ? {sceneUrl: e,data: s,version: l.manifestVersionFound} : {textureUrl: e,data: s};
                                                                                                                                                                              try {
                                                                                                                                                                              var c = i.objectStore(r).put(h);
                                                                                                                                                                              c.onsuccess = function() {
                                                                                                                                                                              }, c.onerror = function() {
                                                                                                                                                                              t.Tools.Error("Error in DB add file request in BABYLON.Database.")
                                                                                                                                                                              }
                                                                                                                                                                              } catch (u) {
                                                                                                                                                                              n(s)
                                                                                                                                                                              }
                                                                                                                                                                              }
                                                                                                                                                                              else
                                                                                                                                                                              n()
                                                                                                                                                                              }, !1), a.addEventListener("error", function() {
                                                                                                                                                                                                         t.Tools.Error("error on XHR request."), n()
                                                                                                                                                                                                         }, !1), a.send()
                                                                        } else
                                                                            t.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open."), n()
                                                                            }, e.isUASupportingBlobStorage = !0, e.parseURL = function(t) {
                                                                                var e = document.createElement("a");
                                                                                e.href = t;
                                                                                var n = t.substring(t.lastIndexOf("/") + 1, t.length), i = t.substring(0, t.indexOf(n, 0));
                                                                                return i
                                                                            }, e.ReturnFullUrlLocation = function(e) {
                                                                                return -1 === e.indexOf("http:/") ? t.Database.parseURL(window.location.href) + e : e
                                                                            }, e
    }();
    t.Database = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function(e) {
        var n = function() {
            function e() {
            }
            return e.GetTGAHeader = function(t) {
                var e = 0, n = {id_length: t[e++],colormap_type: t[e++],image_type: t[e++],colormap_index: t[e++] | t[e++] << 8,colormap_length: t[e++] | t[e++] << 8,colormap_size: t[e++],origin: [t[e++] | t[e++] << 8, t[e++] | t[e++] << 8],width: t[e++] | t[e++] << 8,height: t[e++] | t[e++] << 8,pixel_size: t[e++],flags: t[e++]};
                return n
            }, e.UploadContent = function(n, i) {
                if (i.length < 19)
                    return void t.Tools.Error("Unable to load TGA file - Not enough data to contain header");
                var o = 18, r = e.GetTGAHeader(i);
                if (r.id_length + o > i.length)
                    return void t.Tools.Error("Unable to load TGA file - Not enough data");
                o += r.id_length;
                var s = !1, a = !1, l = !1, h = !1;
                switch (r.image_type) {
                    case e._TYPE_RLE_INDEXED:
                        s = !0;
                    case e._TYPE_INDEXED:
                        a = !0;
                        break;
                    case e._TYPE_RLE_RGB:
                        s = !0;
                    case e._TYPE_RGB:
                        l = !0;
                        break;
                    case e._TYPE_RLE_GREY:
                        s = !0;
                    case e._TYPE_GREY:
                        h = !0
                }
                var c, u, p = (15 & r.flags, r.pixel_size >> 3), d = r.width * r.height * p;
                if (a && (u = i.subarray(o, o += r.colormap_length * (r.colormap_size >> 3))), s) {
                    c = new Uint8Array(d);
                    for (var m, g, f, y = 0, _ = new Uint8Array(p); d > o; )
                        if (m = i[o++], g = (127 & m) + 1, 128 & m) {
                            for (f = 0; p > f; ++f)
                                _[f] = i[o++];
                            for (f = 0; g > f; ++f)
                                c.set(_, y + f * p);
                            y += p * g
                        } else {
                            for (g *= p, f = 0; g > f; ++f)
                                c[y + f] = i[o++];
                            y += g
                        }
                } else
                    c = i.subarray(o, o += a ? r.width * r.height : d);
                var v, b, w, x, C, M;
                switch ((r.flags & e._ORIGIN_MASK) >> e._ORIGIN_SHIFT) {
                    default:
                    case e._ORIGIN_UL:
                        v = 0, w = 1, M = r.width, b = 0, x = 1, C = r.height;
                        break;
                    case e._ORIGIN_BL:
                        v = 0, w = 1, M = r.width, b = r.height - 1, x = -1, C = -1;
                        break;
                    case e._ORIGIN_UR:
                        v = r.width - 1, w = -1, M = -1, b = 0, x = 1, C = r.height;
                        break;
                    case e._ORIGIN_BR:
                        v = r.width - 1, w = -1, M = -1, b = r.height - 1, x = -1, C = -1
                }
                var D = "_getImageData" + (h ? "Grey" : "") + r.pixel_size + "bits", B = e[D](r, u, c, b, x, C, v, w, M);
                n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, r.width, r.height, 0, n.RGBA, n.UNSIGNED_BYTE, B)
            }, e._getImageData8bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u, p = n, d = e, m = t.width, g = t.height, f = 0, y = new Uint8Array(m * g * 4);
                for (u = i; u !== r; u += o)
                    for (c = s; c !== l; c += a, f++)
                        h = p[f], y[4 * (c + m * u) + 3] = 255, y[4 * (c + m * u) + 2] = d[3 * h + 0], y[4 * (c + m * u) + 1] = d[3 * h + 1], y[4 * (c + m * u) + 0] = d[3 * h + 2];
                return y
            }, e._getImageData16bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u, p = n, d = t.width, m = t.height, g = 0, f = new Uint8Array(d * m * 4);
                for (u = i; u !== r; u += o)
                    for (c = s; c !== l; c += a, g += 2)
                        h = p[g + 0] + (p[g + 1] << 8), f[4 * (c + d * u) + 0] = (31744 & h) >> 7, f[4 * (c + d * u) + 1] = (992 & h) >> 2, f[4 * (c + d * u) + 2] = (31 & h) >> 3, f[4 * (c + d * u) + 3] = 32768 & h ? 0 : 255;
                return f
            }, e._getImageData24bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u = n, p = t.width, d = t.height, m = 0, g = new Uint8Array(p * d * 4);
                for (c = i; c !== r; c += o)
                    for (h = s; h !== l; h += a, m += 3)
                        g[4 * (h + p * c) + 3] = 255, g[4 * (h + p * c) + 2] = u[m + 0], g[4 * (h + p * c) + 1] = u[m + 1], g[4 * (h + p * c) + 0] = u[m + 2];
                return g
            }, e._getImageData32bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u = n, p = t.width, d = t.height, m = 0, g = new Uint8Array(p * d * 4);
                for (c = i; c !== r; c += o)
                    for (h = s; h !== l; h += a, m += 4)
                        g[4 * (h + p * c) + 2] = u[m + 0], g[4 * (h + p * c) + 1] = u[m + 1], g[4 * (h + p * c) + 0] = u[m + 2], g[4 * (h + p * c) + 3] = u[m + 3];
                return g
            }, e._getImageDataGrey8bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u, p = n, d = t.width, m = t.height, g = 0, f = new Uint8Array(d * m * 4);
                for (u = i; u !== r; u += o)
                    for (c = s; c !== l; c += a, g++)
                        h = p[g], f[4 * (c + d * u) + 0] = h, f[4 * (c + d * u) + 1] = h, f[4 * (c + d * u) + 2] = h, f[4 * (c + d * u) + 3] = 255;
                return f
            }, e._getImageDataGrey16bits = function(t, e, n, i, o, r, s, a, l) {
                var h, c, u = n, p = t.width, d = t.height, m = 0, g = new Uint8Array(p * d * 4);
                for (c = i; c !== r; c += o)
                    for (h = s; h !== l; h += a, m += 2)
                        g[4 * (h + p * c) + 0] = u[m + 0], g[4 * (h + p * c) + 1] = u[m + 0], g[4 * (h + p * c) + 2] = u[m + 0], g[4 * (h + p * c) + 3] = u[m + 1];
                return g
            }, e._TYPE_NO_DATA = 0, e._TYPE_INDEXED = 1, e._TYPE_RGB = 2, e._TYPE_GREY = 3, e._TYPE_RLE_INDEXED = 9, e._TYPE_RLE_RGB = 10, e._TYPE_RLE_GREY = 11, e._ORIGIN_MASK = 48, e._ORIGIN_SHIFT = 4, e._ORIGIN_BL = 0, e._ORIGIN_BR = 1, e._ORIGIN_UL = 2, e._ORIGIN_UR = 3, e
        }();
        e.TGATools = n
    }(t.Internals || (t.Internals = {}));
    t.Internals
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function(e) {
        function n(t) {
            return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24)
        }
        function i(t) {
            return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255)
        }
        var o = 542327876, r = 131072, s = 512, a = 4, l = 64, h = 131072, c = n("DXT1"), u = n("DXT3"), p = n("DXT5"), d = 31, m = 0, g = 1, f = 2, y = 3, _ = 4, v = 7, b = 20, w = 21, x = 22, C = 28, M = function() {
            function e() {
            }
            return e.GetDDSInfo = function(t) {
                var e = new Int32Array(t, 0, d), n = 1;
                return e[f] & r && (n = Math.max(1, e[v])), {width: e[_],height: e[y],mipmapCount: n,isFourCC: (e[b] & a) === a,isRGB: (e[b] & l) === l,isLuminance: (e[b] & h) === h,isCube: (e[C] & s) === s}
            }, e.GetRGBAArrayBuffer = function(t, e, n, i, o) {
                for (var r = new Uint8Array(i), s = new Uint8Array(o), a = 0, l = e - 1; l >= 0; l--)
                    for (var h = 0; t > h; h++) {
                        var c = n + 4 * (h + l * t);
                        r[a + 2] = s[c], r[a + 1] = s[c + 1], r[a] = s[c + 2], r[a + 3] = s[c + 3], a += 4
                    }
                return r
            }, e.GetRGBArrayBuffer = function(t, e, n, i, o) {
                for (var r = new Uint8Array(i), s = new Uint8Array(o), a = 0, l = e - 1; l >= 0; l--)
                    for (var h = 0; t > h; h++) {
                        var c = n + 3 * (h + l * t);
                        r[a + 2] = s[c], r[a + 1] = s[c + 1], r[a] = s[c + 2], a += 3
                    }
                return r
            }, e.GetLuminanceArrayBuffer = function(t, e, n, i, o) {
                for (var r = new Uint8Array(i), s = new Uint8Array(o), a = 0, l = e - 1; l >= 0; l--)
                    for (var h = 0; t > h; h++) {
                        var c = n + (h + l * t);
                        r[a] = s[c], a++
                    }
                return r
            }, e.UploadDDSLevels = function(n, s, a, l, h, b) {
                var C, M, D, B, A, E, T, S, L, O, P = new Int32Array(a, 0, d);
                if (P[m] != o)
                    return void t.Tools.Error("Invalid magic number in DDS header");
                if (!l.isFourCC && !l.isRGB && !l.isLuminance)
                    return void t.Tools.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
                if (l.isFourCC)
                    switch (C = P[w]) {
                        case c:
                            M = 8, D = s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            break;
                        case u:
                            M = 16, D = s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            break;
                        case p:
                            M = 16, D = s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                            break;
                        default:
                            return void console.error("Unsupported FourCC code:", i(C))
                    }
                L = 1, P[f] & r && h !== !1 && (L = Math.max(1, P[v]));
                for (var I = P[x], N = 0; b > N; N++) {
                    var R = 1 == b ? n.TEXTURE_2D : n.TEXTURE_CUBE_MAP_POSITIVE_X + N;
                    for (B = P[_], A = P[y], T = P[g] + 4, O = 0; L > O; ++O) {
                        if (l.isRGB)
                            24 == I ? (E = B * A * 3, S = e.GetRGBArrayBuffer(B, A, T, E, a), n.texImage2D(R, O, n.RGB, B, A, 0, n.RGB, n.UNSIGNED_BYTE, S)) : (E = B * A * 4, S = e.GetRGBAArrayBuffer(B, A, T, E, a), n.texImage2D(R, O, n.RGBA, B, A, 0, n.RGBA, n.UNSIGNED_BYTE, S));
                        else if (l.isLuminance) {
                            var k = n.getParameter(n.UNPACK_ALIGNMENT), V = B, F = Math.floor((B + k - 1) / k) * k;
                            E = F * (A - 1) + V, S = e.GetLuminanceArrayBuffer(B, A, T, E, a), n.texImage2D(R, O, n.LUMINANCE, B, A, 0, n.LUMINANCE, n.UNSIGNED_BYTE, S)
                        } else
                            E = Math.max(4, B) / 4 * Math.max(4, A) / 4 * M, S = new Uint8Array(a, T, E), n.compressedTexImage2D(R, O, D, B, A, 0, S);
                        T += E, B *= .5, A *= .5, B = Math.max(1, B), A = Math.max(1, A)
                    }
                }
            }, e
        }();
        e.DDSTools = M
    }(t.Internals || (t.Internals = {}));
    t.Internals
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(e) {
            this.length = 0, this._duplicateId = 0, this.data = new Array(e), this._id = t._GlobalId++
        }
        return t.prototype.push = function(t) {
            this.data[this.length++] = t, this.length > this.data.length && (this.data.length *= 2), t.__smartArrayFlags || (t.__smartArrayFlags = {}), t.__smartArrayFlags[this._id] = this._duplicateId
        }, t.prototype.pushNoDuplicate = function(t) {
            t.__smartArrayFlags && t.__smartArrayFlags[this._id] === this._duplicateId || this.push(t)
        }, t.prototype.sort = function(t) {
            this.data.sort(t)
        }, t.prototype.reset = function() {
            this.length = 0, this._duplicateId++
        }, t.prototype.concat = function(t) {
            if (0 !== t.length) {
                this.length + t.length > this.data.length && (this.data.length = 2 * (this.length + t.length));
                for (var e = 0; e < t.length; e++)
                    this.data[this.length++] = (t.data || t)[e]
                    }
        }, t.prototype.concatWithNoDuplicate = function(t) {
            if (0 !== t.length) {
                this.length + t.length > this.data.length && (this.data.length = 2 * (this.length + t.length));
                for (var e = 0; e < t.length; e++) {
                    var n = (t.data || t)[e];
                    this.pushNoDuplicate(n)
                }
            }
        }, t.prototype.indexOf = function(t) {
            var e = this.data.indexOf(t);
            return e >= this.length ? -1 : e
        }, t._GlobalId = 0, t
    }();
    t.SmartArray = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e, n = 60, i = [], o = 60, r = 0, s = function(e, n) {
        return e ? e instanceof t.Mesh ? null : e instanceof t.SubMesh ? e.clone(n) : e.clone ? e.clone() : null : null
    }, a = function() {
        function a() {
        }
        return a.GetFilename = function(t) {
            var e = t.lastIndexOf("/");
            return 0 > e ? t : t.substring(e + 1)
        }, a.GetDOMTextContent = function(t) {
            for (var e = "", n = t.firstChild; n; )
                3 == n.nodeType && (e += n.textContent), n = n.nextSibling;
            return e
        }, a.ToDegrees = function(t) {
            return 180 * t / Math.PI
        }, a.ToRadians = function(t) {
            return t * Math.PI / 180
        }, a.ExtractMinAndMaxIndexed = function(e, n, i, o) {
            for (var r = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), s = new t.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), a = i; i + o > a; a++) {
                var l = new t.Vector3(e[3 * n[a]], e[3 * n[a] + 1], e[3 * n[a] + 2]);
                r = t.Vector3.Minimize(l, r), s = t.Vector3.Maximize(l, s)
            }
            return {minimum: r,maximum: s}
        }, a.ExtractMinAndMax = function(e, n, i) {
            for (var o = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), r = new t.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), s = n; n + i > s; s++) {
                var a = new t.Vector3(e[3 * s], e[3 * s + 1], e[3 * s + 2]);
                o = t.Vector3.Minimize(a, o), r = t.Vector3.Maximize(a, r)
            }
            return {minimum: o,maximum: r}
        }, a.MakeArray = function(t, e) {
            return e === !0 || void 0 !== t && null != t ? Array.isArray(t) ? t : [t] : void 0
        }, a.GetPointerPrefix = function() {
            var t = "pointer";
            return navigator.pointerEnabled || (t = "mouse"), t
        }, a.QueueNewFrame = function(t) {
            window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(t) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(t) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(t) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(t) : window.setTimeout(t, 16)
        }, a.RequestFullscreen = function(t) {
            t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen && t.mozRequestFullScreen()
        }, a.ExitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msCancelFullScreen && document.msCancelFullScreen()
        }, a.CleanUrl = function(t) {
            return t = t.replace(/#/gm, "%23")
        }, a.LoadImage = function(e, n, i, o) {
            e = a.CleanUrl(e);
            var r = new Image;
            r.crossOrigin = "anonymous", r.onload = function() {
                n(r)
            }, r.onerror = function(t) {
                i(r, t)
            };
            var s = function() {
                r.src = e
            }, l = function() {
                o.loadImageFromDB(e, r)
            };
            if (o && o.enableTexturesOffline && t.Database.isUASupportingBlobStorage)
                o.openAsync(l, s);
            else if (-1 === e.indexOf("file:"))
                s();
            else
                try {
                    var h, c = e.substring(5);
                    try {
                        h = URL.createObjectURL(t.FilesInput.FilesTextures[c], {oneTimeOnly: !0})
                    } catch (u) {
                        h = URL.createObjectURL(t.FilesInput.FilesTextures[c])
                    }
                    r.src = h
                } catch (p) {
                    a.Log("Error while trying to load texture: " + c), r.src = null
                }
            return r
        }, a.LoadFile = function(e, n, i, o, r) {
            e = a.CleanUrl(e);
            var s = function() {
                var o = new XMLHttpRequest, s = a.BaseUrl + e;
                o.open("GET", s, !0), r && (o.responseType = "arraybuffer"), o.onprogress = i, o.onreadystatechange = function() {
                    if (4 == o.readyState) {
                        if (200 != o.status && !t.Tools.ValidateXHRData(o, r ? 6 : 1))
                            throw new Error("Error status: " + o.status + " - Unable to load " + s);
                        n(r ? o.response : o.responseText)
                    }
                }, o.send(null)
            }, l = function() {
                o.loadFileFromDB(e, n, i, s, r)
            };
            if (-1 !== e.indexOf("file:")) {
                var h = e.substring(5);
                t.Tools.ReadFile(t.FilesInput.FilesToLoad[h], n, i, !0)
            } else
                o && o.enableSceneOffline ? o.openAsync(l, s) : s()
                }, a.ReadFile = function(t, e, n, i) {
                    var o = new FileReader;
                    o.onload = function(t) {
                        e(t.target.result)
                    }, o.onprogress = n, i ? o.readAsArrayBuffer(t) : o.readAsText(t)
                }, a.CheckExtends = function(t, e, n) {
                    t.x < e.x && (e.x = t.x), t.y < e.y && (e.y = t.y), t.z < e.z && (e.z = t.z), t.x > n.x && (n.x = t.x), t.y > n.y && (n.y = t.y), t.z > n.z && (n.z = t.z)
                }, a.WithinEpsilon = function(t, e) {
                    var n = t - e;
                    return n >= -1.401298e-45 && 1.401298e-45 >= n
                }, a.DeepCopy = function(t, e, n, i) {
                    for (var o in t)
                        if (("_" !== o[0] || i && -1 !== i.indexOf(o)) && (!n || -1 === n.indexOf(o))) {
                            var r = t[o], a = typeof r;
                            if ("function" != a)
                                if ("object" == a)
                                    if (r instanceof Array) {
                                        if (e[o] = [], r.length > 0)
                                            if ("object" == typeof r[0])
                                                for (var l = 0; l < r.length; l++) {
                                                    var h = s(r[l], e);
                                                    -1 === e[o].indexOf(h) && e[o].push(h)
                                                }
                                            else
                                                e[o] = r.slice(0)
                                                } else
                                                    e[o] = s(r, e);
                                    else
                                        e[o] = r
                                        }
                }, a.IsEmpty = function(t) {
                    for (var e in t)
                        return !1;
                    return !0
                }, a.RegisterTopRootEvents = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        window.addEventListener(n.name, n.handler, !1);
                        try {
                            window.parent && window.parent.addEventListener(n.name, n.handler, !1)
                        } catch (i) {
                        }
                    }
                }, a.UnregisterTopRootEvents = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        window.removeEventListener(n.name, n.handler);
                        try {
                            window.parent && window.parent.removeEventListener(n.name, n.handler)
                        } catch (i) {
                        }
                    }
                }, a.GetFps = function() {
                    return o
                }, a.GetDeltaTime = function() {
                    return r
                }, a._MeasureFps = function() {
                    i.push((new Date).getTime());
                    var t = i.length;
                    if (t >= 2 && (r = i[t - 1] - i[t - 2]), t >= n) {
                        t > n && (i.splice(0, 1), t = i.length);
                        for (var e = 0, s = 0; t - 1 > s; s++)
                            e += i[s + 1] - i[s];
                        o = 1e3 / (e / (t - 1))
                    }
                }, a.CreateScreenshot = function(n, i, o) {
                    var r, s, l = i.getScene(), h = null;
                    if (l.activeCamera !== i && (h = l.activeCamera, l.activeCamera = i), o.precision)
                        r = Math.round(n.getRenderWidth() * o.precision), s = Math.round(r / n.getAspectRatio(i)), o = {width: r,height: s};
                    else if (o.width && o.height)
                        r = o.width, s = o.height;
                    else if (o.width && !o.height)
                        r = o.width, s = Math.round(r / n.getAspectRatio(i)), o = {width: r,height: s};
                    else if (o.height && !o.width)
                        s = o.height, r = Math.round(s * n.getAspectRatio(i)), o = {width: r,height: s};
                    else {
                        if (isNaN(o))
                            return void a.Error("Invalid 'size' parameter !");
                        s = o, r = o
                    }
                    var c = new t.RenderTargetTexture("screenShot", o, n.scenes[0], !1, !1);
                    c.renderList = n.scenes[0].meshes, c.onAfterRender = function() {
                        for (var t = 4 * r, i = s / 2, o = n.readPixels(0, 0, r, s), a = 0; i > a; a++)
                            for (var l = 0; t > l; l++) {
                                var h = l + a * t, c = s - a - 1, u = l + c * t, p = o[h];
                                o[h] = o[u], o[u] = p
                            }
                        e || (e = document.createElement("canvas")), e.width = r, e.height = s;
                        var d = e.getContext("2d"), m = d.createImageData(r, s);
                        m.data.set(o), d.putImageData(m, 0, 0);
                        var g = e.toDataURL();
                        if ("download" in document.createElement("a")) {
                            var f = window.document.createElement("a");
                            f.href = g;
                            var y = new Date, _ = y.getFullYear() + "/" + y.getMonth() + "/" + y.getDate() + "-" + y.getHours() + ":" + y.getMinutes();
                            f.setAttribute("download", "screenshot-" + _ + ".png"), window.document.body.appendChild(f), f.addEventListener("click", function() {
                                                                                                                                            f.parentElement.removeChild(f)
                                                                                                                                            }), f.click()
                        } else {
                            var v = window.open(""), b = v.document.createElement("img");
                            b.src = g, v.document.body.appendChild(b)
                        }
                    }, c.render(!0), c.dispose(), h && (l.activeCamera = h)
                }, a.ValidateXHRData = function(e, n) {
                    "undefined" == typeof n && (n = 7);
                    try {
                        if (1 & n) {
                            if (e.responseText && e.responseText.length > 0)
                                return !0;
                            if (1 === n)
                                return !1
                                }
                        if (2 & n) {
                            var i = t.Internals.TGATools.GetTGAHeader(e.response);
                            if (i.width && i.height && i.width > 0 && i.height > 0)
                                return !0;
                            if (2 === n)
                                return !1
                                }
                        if (4 & n) {
                            var o = new Uint8Array(e.response, 0, 3);
                            return 68 == o[0] && 68 == o[1] && 83 == o[2] ? !0 : !1
                        }
                    } catch (r) {
                    }
                    return !1
                }, Object.defineProperty(a, "NoneLogLevel", {get: function() {
                                         return a._NoneLogLevel
                                         },enumerable: !0,configurable: !0}), Object.defineProperty(a, "MessageLogLevel", {get: function() {
                                                                                                    return a._MessageLogLevel
                                                                                                    },enumerable: !0,configurable: !0}), Object.defineProperty(a, "WarningLogLevel", {get: function() {
                                                                                                                                                               return a._WarningLogLevel
                                                                                                                                                               },enumerable: !0,configurable: !0}), Object.defineProperty(a, "ErrorLogLevel", {get: function() {
                                                                                                                                                                                                                          return a._ErrorLogLevel
                                                                                                                                                                                                                          },enumerable: !0,configurable: !0}), Object.defineProperty(a, "AllLogLevel", {get: function() {
                                                                                                                                                                                                                                                                                     return a._MessageLogLevel | a._WarningLogLevel | a._ErrorLogLevel
                                                                                                                                                                                                                                                                                     },enumerable: !0,configurable: !0}), a._FormatMessage = function(t) {
                    var e = function(t) {
                        return 10 > t ? "0" + t : "" + t
                    }, n = new Date;
                    return "BJS - [" + e(n.getHours()) + ":" + e(n.getMinutes()) + ":" + e(n.getSeconds()) + "]: " + t
                }, a._LogDisabled = function() {
                }, a._LogEnabled = function(t) {
                    console.log(a._FormatMessage(t))
                }, a._WarnDisabled = function() {
                }, a._WarnEnabled = function(t) {
                    console.warn(a._FormatMessage(t))
                }, a._ErrorDisabled = function() {
                }, a._ErrorEnabled = function(t) {
                    console.error(a._FormatMessage(t))
                }, Object.defineProperty(a, "LogLevels", {set: function(t) {
                                         a.Log = (t & a.MessageLogLevel) === a.MessageLogLevel ? a._LogEnabled : a._LogDisabled, a.Warn = (t & a.WarningLogLevel) === a.WarningLogLevel ? a._WarnEnabled : a._WarnDisabled, a.Error = (t & a.ErrorLogLevel) === a.ErrorLogLevel ? a._ErrorEnabled : a._ErrorDisabled
                                         },enumerable: !0,configurable: !0}), a.BaseUrl = "", a._NoneLogLevel = 0, a._MessageLogLevel = 1, a._WarningLogLevel = 2, a._ErrorLogLevel = 4, a.Log = a._LogEnabled, a.Warn = a._WarnEnabled, a.Error = a._ErrorEnabled, a
    }();
    t.Tools = a
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function(t, e, n, i) {
        var o = t.createShader("vertex" === n ? t.VERTEX_SHADER : t.FRAGMENT_SHADER);
        if (t.shaderSource(o, (i ? i + "\n" : "") + e), t.compileShader(o), !t.getShaderParameter(o, t.COMPILE_STATUS))
            throw new Error(t.getShaderInfoLog(o));
        return o
    }, n = function(e, n, i) {
        var o = i.NEAREST, r = i.NEAREST;
        return e === t.Texture.BILINEAR_SAMPLINGMODE ? (o = i.LINEAR, r = n ? i.LINEAR_MIPMAP_NEAREST : i.LINEAR) : e === t.Texture.TRILINEAR_SAMPLINGMODE ? (o = i.LINEAR, r = n ? i.LINEAR_MIPMAP_LINEAR : i.LINEAR) : e === t.Texture.NEAREST_SAMPLINGMODE && (o = i.NEAREST, r = n ? i.NEAREST_MIPMAP_LINEAR : i.NEAREST), {min: r,mag: o}
    }, i = function(t, e) {
        var n = 1;
        do
            n *= 2;
        while (t > n);
        return n > e && (n = e), n
    }, o = function(e, o, r, s, a, l, h, c, u, p) {
        "undefined" == typeof p && (p = t.Texture.TRILINEAR_SAMPLINGMODE);
        var d = r.getEngine(), m = i(s, d.getCaps().maxTextureSize), g = i(a, d.getCaps().maxTextureSize);
        o.bindTexture(o.TEXTURE_2D, e), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, void 0 === l ? 1 : l ? 1 : 0), u(m, g);
        var f = n(p, !h, o);
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, f.mag), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, f.min), h || c || o.generateMipmap(o.TEXTURE_2D), o.bindTexture(o.TEXTURE_2D, null), d._activeTexturesCache = [], e._baseWidth = s, e._baseHeight = a, e._width = m, e._height = g, e.isReady = !0, r._removePendingData(e)
    }, r = function(e, n, i, o, s, a) {
        var l, h = function() {
            i.push(l), o._removePendingData(l), n != a.length - 1 ? r(e, n + 1, i, o, s, a) : s(i)
        }, c = function() {
            o._removePendingData(l)
        };
        l = t.Tools.LoadImage(e + a[n], h, c, o.database), o._addPendingData(l)
    }, s = function() {
        function t() {
        }
        return t
    }();
    t.EngineCapabilities = s;
    var a = function() {
        function a(t, e, n) {
            var i = this;
            this.isFullscreen = !1, this.isPointerLock = !1, this.forceWireframe = !1, this.cullBackFaces = !0, this.renderEvenInBackground = !0, this.scenes = new Array, this._windowIsBackground = !1, this._runningLoop = !1, this._loadedTexturesCache = new Array, this._activeTexturesCache = new Array, this._compiledEffects = {}, this._depthMask = !1, this._renderingCanvas = t, this._canvasClientRect = this._renderingCanvas.getBoundingClientRect(), n = n || {}, n.antialias = e;
            try {
                this._gl = t.getContext("webgl", n) || t.getContext("experimental-webgl", n)
            } catch (o) {
                throw new Error("WebGL not supported")
            }
            if (!this._gl)
                throw new Error("WebGL not supported");
            this._onBlur = function() {
                i._windowIsBackground = !0
            }, this._onFocus = function() {
                i._windowIsBackground = !1
            }, window.addEventListener("blur", this._onBlur), window.addEventListener("focus", this._onFocus), this._workingCanvas = document.createElement("canvas"), this._workingContext = this._workingCanvas.getContext("2d"), this._hardwareScalingLevel = 1 / (window.devicePixelRatio || 1), this.resize(), this._caps = new s, this._caps.maxTexturesImageUnits = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), this._caps.maxTextureSize = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE), this._caps.maxCubemapTextureSize = this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE), this._caps.maxRenderTextureSize = this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE), this._caps.standardDerivatives = null !== this._gl.getExtension("OES_standard_derivatives"), this._caps.s3tc = this._gl.getExtension("WEBGL_compressed_texture_s3tc"), this._caps.textureFloat = null !== this._gl.getExtension("OES_texture_float"), this._caps.textureAnisotropicFilterExtension = this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.instancedArrays = null, this.setDepthBuffer(!0), this.setDepthFunctionToLessOrEqual(), this.setDepthWrite(!0), this._onFullscreenChange = function() {
                void 0 !== document.fullscreen ? i.isFullscreen = document.fullscreen : void 0 !== document.mozFullScreen ? i.isFullscreen = document.mozFullScreen : void 0 !== document.webkitIsFullScreen ? i.isFullscreen = document.webkitIsFullScreen : void 0 !== document.msIsFullScreen && (i.isFullscreen = document.msIsFullScreen), i.isFullscreen && i._pointerLockRequested && (t.requestPointerLock = t.requestPointerLock || t.msRequestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock, t.requestPointerLock && t.requestPointerLock())
            }, document.addEventListener("fullscreenchange", this._onFullscreenChange, !1), document.addEventListener("mozfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", this._onFullscreenChange, !1), document.addEventListener("msfullscreenchange", this._onFullscreenChange, !1), this._onPointerLockChange = function() {
                i.isPointerLock = document.mozPointerLockElement === t || document.webkitPointerLockElement === t || document.msPointerLockElement === t || document.pointerLockElement === t
            }, document.addEventListener("pointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mspointerlockchange", this._onPointerLockChange, !1), document.addEventListener("mozpointerlockchange", this._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", this._onPointerLockChange, !1)
        }
        return Object.defineProperty(a, "ALPHA_DISABLE", {get: function() {
                                     return a._ALPHA_DISABLE
                                     },enumerable: !0,configurable: !0}), Object.defineProperty(a, "ALPHA_ADD", {get: function() {
                                                                                                return a._ALPHA_ADD
                                                                                                },enumerable: !0,configurable: !0}), Object.defineProperty(a, "ALPHA_COMBINE", {get: function() {
                                                                                                                                                           return a._ALPHA_COMBINE
                                                                                                                                                           },enumerable: !0,configurable: !0}), Object.defineProperty(a, "DELAYLOADSTATE_NONE", {get: function() {
                                                                                                                                                                                                                      return a._DELAYLOADSTATE_NONE
                                                                                                                                                                                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(a, "DELAYLOADSTATE_LOADED", {get: function() {
                                                                                                                                                                                                                                                                                 return a._DELAYLOADSTATE_LOADED
                                                                                                                                                                                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(a, "DELAYLOADSTATE_LOADING", {get: function() {
                                                                                                                                                                                                                                                                                                                                            return a._DELAYLOADSTATE_LOADING
                                                                                                                                                                                                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(a, "DELAYLOADSTATE_NOTLOADED", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                       return a._DELAYLOADSTATE_NOTLOADED
                                                                                                                                                                                                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(a, "Version", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  return "1.13.0"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), a.prototype.getAspectRatio = function(t) {
            var e = t.viewport;
            return this.getRenderWidth() * e.width / (this.getRenderHeight() * e.height)
        }, a.prototype.getRenderWidth = function() {
            return this._currentRenderTarget ? this._currentRenderTarget._width : this._renderingCanvas.width
        }, a.prototype.getRenderHeight = function() {
            return this._currentRenderTarget ? this._currentRenderTarget._height : this._renderingCanvas.height
        }, a.prototype.getRenderingCanvas = function() {
            return this._renderingCanvas
        }, a.prototype.getRenderingCanvasClientRect = function() {
            return this._renderingCanvas.getBoundingClientRect()
        }, a.prototype.setHardwareScalingLevel = function(t) {
            this._hardwareScalingLevel = t, this.resize()
        }, a.prototype.getHardwareScalingLevel = function() {
            return this._hardwareScalingLevel
        }, a.prototype.getLoadedTexturesCache = function() {
            return this._loadedTexturesCache
        }, a.prototype.getCaps = function() {
            return this._caps
        }, a.prototype.setDepthFunctionToGreater = function() {
            this._gl.depthFunc(this._gl.GREATER)
        }, a.prototype.setDepthFunctionToGreaterOrEqual = function() {
            this._gl.depthFunc(this._gl.GEQUAL)
        }, a.prototype.setDepthFunctionToLess = function() {
            this._gl.depthFunc(this._gl.LESS)
        }, a.prototype.setDepthFunctionToLessOrEqual = function() {
            this._gl.depthFunc(this._gl.LEQUAL)
        }, a.prototype.stopRenderLoop = function() {
            this._renderFunction = null, this._runningLoop = !1
        }, a.prototype._renderLoop = function() {
            var e = this, n = !0;
            !this.renderEvenInBackground && this._windowIsBackground && (n = !1), n && (this.beginFrame(), this._renderFunction && this._renderFunction(), this.endFrame()), this._runningLoop && t.Tools.QueueNewFrame(function() {
                                                                                                                                                                                                                        e._renderLoop()
                                                                                                                                                                                                                        })
        }, a.prototype.runRenderLoop = function(e) {
            var n = this;
            this._runningLoop = !0, this._renderFunction = e, t.Tools.QueueNewFrame(function() {
                                                                                    n._renderLoop()
                                                                                    })
        }, a.prototype.switchFullscreen = function(e) {
            this.isFullscreen ? t.Tools.ExitFullscreen() : (this._pointerLockRequested = e, t.Tools.RequestFullscreen(this._renderingCanvas))
        }, a.prototype.clear = function(t, e, n) {
            this._gl.clearColor(t.r, t.g, t.b, void 0 !== t.a ? t.a : 1), this._depthMask && this._gl.clearDepth(1);
            var i = 0;
            e && (i |= this._gl.COLOR_BUFFER_BIT), n && this._depthMask && (i |= this._gl.DEPTH_BUFFER_BIT), this._gl.clear(i)
        }, a.prototype.setViewport = function(t, e, n) {
            var i = e || this._renderingCanvas.width, o = n || this._renderingCanvas.height, r = t.x || 0, s = t.y || 0;
            this._cachedViewport = t, this._gl.viewport(r * i, s * o, i * t.width, o * t.height)
        }, a.prototype.setDirectViewport = function(t, e, n, i) {
            this._cachedViewport = null, this._gl.viewport(t, e, n, i)
        }, a.prototype.beginFrame = function() {
            t.Tools._MeasureFps()
        }, a.prototype.endFrame = function() {
            this.flushFramebuffer()
        }, a.prototype.resize = function() {
            this._renderingCanvas.width = this._renderingCanvas.clientWidth / this._hardwareScalingLevel, this._renderingCanvas.height = this._renderingCanvas.clientHeight / this._hardwareScalingLevel, this._canvasClientRect = this._renderingCanvas.getBoundingClientRect()
        }, a.prototype.bindFramebuffer = function(t) {
            this._currentRenderTarget = t;
            var e = this._gl;
            e.bindFramebuffer(e.FRAMEBUFFER, t._framebuffer), this._gl.viewport(0, 0, t._width, t._height), this.wipeCaches()
        }, a.prototype.unBindFramebuffer = function(t) {
            if (this._currentRenderTarget = null, t.generateMipMaps) {
                var e = this._gl;
                e.bindTexture(e.TEXTURE_2D, t), e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null)
            }
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null)
        }, a.prototype.flushFramebuffer = function() {
            this._gl.flush()
        }, a.prototype.restoreDefaultFramebuffer = function() {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null), this.setViewport(this._cachedViewport), this.wipeCaches()
        }, a.prototype._resetVertexBufferBinding = function() {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null), this._cachedVertexBuffers = null
        }, a.prototype.createVertexBuffer = function(t) {
            var e = this._gl.createBuffer();
            return this._gl.bindBuffer(this._gl.ARRAY_BUFFER, e), this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(t), this._gl.STATIC_DRAW), this._resetVertexBufferBinding(), e.references = 1, e
        }, a.prototype.createDynamicVertexBuffer = function(t) {
            var e = this._gl.createBuffer();
            return this._gl.bindBuffer(this._gl.ARRAY_BUFFER, e), this._gl.bufferData(this._gl.ARRAY_BUFFER, t, this._gl.DYNAMIC_DRAW), this._resetVertexBufferBinding(), e.references = 1, e
        }, a.prototype.updateDynamicVertexBuffer = function(t, e) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t), e instanceof Float32Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, e) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, new Float32Array(e)), this._resetVertexBufferBinding()
        }, a.prototype._resetIndexBufferBinding = function() {
            this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null), this._cachedIndexBuffer = null
        }, a.prototype.createIndexBuffer = function(t) {
            var e = this._gl.createBuffer();
            return this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, e), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), e.references = 1, e
        }, a.prototype.bindBuffers = function(t, e, n, i, o) {
            if (this._cachedVertexBuffers !== t || this._cachedEffectForVertexBuffers !== o) {
                this._cachedVertexBuffers = t, this._cachedEffectForVertexBuffers = o, this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t);
                for (var r = 0, s = 0; s < n.length; s++) {
                    var a = o.getAttributeLocation(s);
                    a >= 0 && this._gl.vertexAttribPointer(a, n[s], this._gl.FLOAT, !1, i, r), r += 4 * n[s]
                }
            }
            this._cachedIndexBuffer !== e && (this._cachedIndexBuffer = e, this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, e))
        }, a.prototype.bindMultiBuffers = function(t, e, n) {
            if (this._cachedVertexBuffers !== t || this._cachedEffectForVertexBuffers !== n) {
                this._cachedVertexBuffers = t, this._cachedEffectForVertexBuffers = n;
                for (var i = n.getAttributesNames(), o = 0; o < i.length; o++) {
                    var r = n.getAttributeLocation(o);
                    if (r >= 0) {
                        var s = t[i[o]];
                        if (!s)
                            continue;
                        var a = s.getStrideSize();
                        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, s.getBuffer()), this._gl.vertexAttribPointer(r, a, this._gl.FLOAT, !1, 4 * a, 0)
                    }
                }
            }
            this._cachedIndexBuffer !== e && (this._cachedIndexBuffer = e, this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, e))
        }, a.prototype._releaseBuffer = function(t) {
            return t.references--, 0 === t.references ? (this._gl.deleteBuffer(t), !0) : !1
        }, a.prototype.createInstancesBuffer = function(t) {
            var e = this._gl.createBuffer();
            return e.capacity = t, this._gl.bindBuffer(this._gl.ARRAY_BUFFER, e), this._gl.bufferData(this._gl.ARRAY_BUFFER, t, this._gl.DYNAMIC_DRAW), e
        }, a.prototype.deleteInstancesBuffer = function(t) {
            this._gl.deleteBuffer(t)
        }, a.prototype.updateAndBindInstancesBuffer = function(t, e, n) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, e);
            for (var i = 0; 4 > i; i++) {
                var o = n[i];
                this._gl.enableVertexAttribArray(o), this._gl.vertexAttribPointer(o, 4, this._gl.FLOAT, !1, 64, 16 * i), this._caps.instancedArrays.vertexAttribDivisorANGLE(o, 1)
            }
        }, a.prototype.unBindInstancesBuffer = function(t, e) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t);
            for (var n = 0; 4 > n; n++) {
                var i = e[n];
                this._gl.disableVertexAttribArray(i), this._caps.instancedArrays.vertexAttribDivisorANGLE(i, 0)
            }
        }, a.prototype.draw = function(t, e, n, i) {
            return i ? void this._caps.instancedArrays.drawElementsInstancedANGLE(t ? this._gl.TRIANGLES : this._gl.LINES, n, this._gl.UNSIGNED_SHORT, 2 * e, i) : void this._gl.drawElements(t ? this._gl.TRIANGLES : this._gl.LINES, n, this._gl.UNSIGNED_SHORT, 2 * e)
        }, a.prototype._releaseEffect = function(t) {
            this._compiledEffects[t._key] && (delete this._compiledEffects[t._key], t.getProgram() && this._gl.deleteProgram(t.getProgram()))
        }, a.prototype.createEffect = function(e, n, i, o, r, s, a, l) {
            var h = e.vertexElement || e.vertex || e, c = e.fragmentElement || e.fragment || e, u = h + "+" + c + "@" + r;
            if (this._compiledEffects[u])
                return this._compiledEffects[u];
            var p = new t.Effect(e, n, i, o, this, r, s, a, l);
            return p._key = u, this._compiledEffects[u] = p, p
        }, a.prototype.createShaderProgram = function(t, n, i) {
            var o = e(this._gl, t, "vertex", i), r = e(this._gl, n, "fragment", i), s = this._gl.createProgram();
            this._gl.attachShader(s, o), this._gl.attachShader(s, r), this._gl.linkProgram(s);
            var a = this._gl.getProgramParameter(s, this._gl.LINK_STATUS);
            if (!a) {
                var l = this._gl.getProgramInfoLog(s);
                if (l)
                    throw new Error(l)
                    }
            return this._gl.deleteShader(o), this._gl.deleteShader(r), s
        }, a.prototype.getUniforms = function(t, e) {
            for (var n = [], i = 0; i < e.length; i++)
                n.push(this._gl.getUniformLocation(t, e[i]));
            return n
        }, a.prototype.getAttributes = function(t, e) {
            for (var n = [], i = 0; i < e.length; i++)
                try {
                    n.push(this._gl.getAttribLocation(t, e[i]))
                } catch (o) {
                    n.push(-1)
                }
            return n
        }, a.prototype.enableEffect = function(t) {
            if (!t || !t.getAttributesCount() || this._currentEffect === t)
                return !1;
            this._vertexAttribArrays = this._vertexAttribArrays || [], this._gl.useProgram(t.getProgram());
            for (var e in this._vertexAttribArrays)
                e > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[e] || (this._vertexAttribArrays[e] = !1, this._gl.disableVertexAttribArray(e));
            for (var n = t.getAttributesCount(), i = 0; n > i; i++) {
                var o = t.getAttributeLocation(i);
                o >= 0 && (this._vertexAttribArrays[o] = !0, this._gl.enableVertexAttribArray(o))
            }
            return this._currentEffect = t, !0
        }, a.prototype.setArray = function(t, e) {
            t && this._gl.uniform1fv(t, e)
        }, a.prototype.setMatrices = function(t, e) {
            t && this._gl.uniformMatrix4fv(t, !1, e)
        }, a.prototype.setMatrix = function(t, e) {
            t && this._gl.uniformMatrix4fv(t, !1, e.toArray())
        }, a.prototype.setFloat = function(t, e) {
            t && this._gl.uniform1f(t, e)
        }, a.prototype.setFloat2 = function(t, e, n) {
            t && this._gl.uniform2f(t, e, n)
        }, a.prototype.setFloat3 = function(t, e, n, i) {
            t && this._gl.uniform3f(t, e, n, i)
        }, a.prototype.setBool = function(t, e) {
            t && this._gl.uniform1i(t, e)
        }, a.prototype.setFloat4 = function(t, e, n, i, o) {
            t && this._gl.uniform4f(t, e, n, i, o)
        }, a.prototype.setColor3 = function(t, e) {
            t && this._gl.uniform3f(t, e.r, e.g, e.b)
        }, a.prototype.setColor4 = function(t, e, n) {
            t && this._gl.uniform4f(t, e.r, e.g, e.b, n)
        }, a.prototype.setState = function(t) {
            this._cullingState !== t && (t ? (this._gl.cullFace(this.cullBackFaces ? this._gl.BACK : this._gl.FRONT), this._gl.enable(this._gl.CULL_FACE)) : this._gl.disable(this._gl.CULL_FACE), this._cullingState = t)
        }, a.prototype.setDepthBuffer = function(t) {
            t ? this._gl.enable(this._gl.DEPTH_TEST) : this._gl.disable(this._gl.DEPTH_TEST)
        }, a.prototype.setDepthWrite = function(t) {
            this._gl.depthMask(t), this._depthMask = t
        }, a.prototype.setColorWrite = function(t) {
            this._gl.colorMask(t, t, t, t)
        }, a.prototype.setAlphaMode = function(e) {
            switch (e) {
                case t.Engine.ALPHA_DISABLE:
                    this.setDepthWrite(!0), this._gl.disable(this._gl.BLEND);
                    break;
                case t.Engine.ALPHA_COMBINE:
                    this.setDepthWrite(!1), this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE), this._gl.enable(this._gl.BLEND);
                    break;
                case t.Engine.ALPHA_ADD:
                    this.setDepthWrite(!1), this._gl.blendFuncSeparate(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE), this._gl.enable(this._gl.BLEND)
            }
        }, a.prototype.setAlphaTesting = function(t) {
            this._alphaTest = t
        }, a.prototype.getAlphaTesting = function() {
            return this._alphaTest
        }, a.prototype.wipeCaches = function() {
            this._activeTexturesCache = [], this._currentEffect = null, this._cullingState = null, this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null
        }, a.prototype.setSamplingMode = function(e, n) {
            var i = this._gl;
            i.bindTexture(i.TEXTURE_2D, e);
            var o = i.NEAREST, r = i.NEAREST;
            n === t.Texture.BILINEAR_SAMPLINGMODE ? (o = i.LINEAR, r = i.LINEAR) : n === t.Texture.TRILINEAR_SAMPLINGMODE && (o = i.LINEAR, r = i.LINEAR_MIPMAP_LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, o), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, r), i.bindTexture(i.TEXTURE_2D, null)
        }, a.prototype.createTexture = function(e, n, i, r, s) {
            var a = this;
            "undefined" == typeof s && (s = t.Texture.TRILINEAR_SAMPLINGMODE);
            var l = this._gl.createTexture(), h = e.substr(e.length - 4, 4).toLowerCase(), c = this.getCaps().s3tc && ".dds" === h, u = ".tga" === h;
            if (r._addPendingData(l), l.url = e, l.noMipmap = n, l.references = 1, this._loadedTexturesCache.push(l), u)
                t.Tools.LoadFile(e, function(e) {
                                 var h = new Uint8Array(e), c = t.Internals.TGATools.GetTGAHeader(h);
                                 o(l, a._gl, r, c.width, c.height, i, n, !1, function() {
                                   t.Internals.TGATools.UploadContent(a._gl, h)
                                   }, s)
                                 }, null, r.database, !0);
            else if (c)
                t.Tools.LoadFile(e, function(h) {
                                 var c = t.Internals.DDSTools.GetDDSInfo(h), u = (c.isRGB || c.isLuminance || c.mipmapCount > 1) && !n && c.width >> c.mipmapCount - 1 == 1;
                                 o(l, a._gl, r, c.width, c.height, i, !u, c.isFourCC, function() {
                                   console.log("loading " + e), t.Internals.DDSTools.UploadDDSLevels(a._gl, a.getCaps().s3tc, h, c, u, 1)
                                   }, s)
                                 }, null, r.database, !0);
            else {
                var p = function(t) {
                    o(l, a._gl, r, t.width, t.height, i, n, !1, function(e, n) {
                      var i = t.width == e && t.height == n;
                      i || (a._workingCanvas.width = e, a._workingCanvas.height = n, a._workingContext.drawImage(t, 0, 0, t.width, t.height, 0, 0, e, n)), a._gl.texImage2D(a._gl.TEXTURE_2D, 0, a._gl.RGBA, a._gl.RGBA, a._gl.UNSIGNED_BYTE, i ? t : a._workingCanvas)
                      }, s)
                }, d = function() {
                    r._removePendingData(l)
                };
                t.Tools.LoadImage(e, p, d, r.database)
            }
            return l
        }, a.prototype.createDynamicTexture = function(t, e, o, r) {
            var s = this._gl.createTexture();
            t = i(t, this._caps.maxTextureSize), e = i(e, this._caps.maxTextureSize), this._gl.bindTexture(this._gl.TEXTURE_2D, s);
            var a = n(r, o, this._gl);
            return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, a.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, a.min), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], s._baseWidth = t, s._baseHeight = e, s._width = t, s._height = e, s.isReady = !1, s.generateMipMaps = o, s.references = 1, this._loadedTexturesCache.push(s), s
        }, a.prototype.updateDynamicTexture = function(t, e, n) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, t), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, n ? 1 : 0), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, e), t.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], t.isReady = !0
        }, a.prototype.updateVideoTexture = function(t, e, n) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, t), this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, n ? 0 : 1), e.videoWidth !== t._width || e.videoHeight !== t._height ? (t._workingCanvas || (t._workingCanvas = document.createElement("canvas"), t._workingContext = t._workingCanvas.getContext("2d"), t._workingCanvas.width = t._width, t._workingCanvas.height = t._height), t._workingContext.drawImage(e, 0, 0, e.videoWidth, e.videoHeight, 0, 0, t._width, t._height), this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, t._workingCanvas)) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, e), t.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._activeTexturesCache = [], t.isReady = !0
        }, a.prototype.createRenderTargetTexture = function(e, i) {
            var o = !1, r = !0, s = t.Texture.TRILINEAR_SAMPLINGMODE;
            void 0 !== i && (o = void 0 === i.generateMipMaps ? i : i.generateMipmaps, r = void 0 === i.generateDepthBuffer ? !0 : i.generateDepthBuffer, void 0 !== i.samplingMode && (s = i.samplingMode));
            var a = this._gl, l = a.createTexture();
            a.bindTexture(a.TEXTURE_2D, l);
            var h = e.width || e, c = e.height || e, u = n(s, o, a);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, u.mag), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, u.min), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, h, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
            var p;
            r && (p = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, p), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, h, c));
            var d = a.createFramebuffer();
            return a.bindFramebuffer(a.FRAMEBUFFER, d), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, l, 0), r && a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, p), a.bindTexture(a.TEXTURE_2D, null), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), l._framebuffer = d, r && (l._depthBuffer = p), l._width = h, l._height = c, l.isReady = !0, l.generateMipMaps = o, l.references = 1, this._activeTexturesCache = [], this._loadedTexturesCache.push(l), l
        }, a.prototype.createCubeTexture = function(e, n, o, s) {
            var a = this, l = this._gl, h = l.createTexture();
            h.isCube = !0, h.url = e, h.references = 1, this._loadedTexturesCache.push(h);
            var c = e.substr(e.length - 4, 4).toLowerCase(), u = this.getCaps().s3tc && ".dds" === c;
            return u ? t.Tools.LoadFile(e, function(e) {
                                        var n = t.Internals.DDSTools.GetDDSInfo(e), i = (n.isRGB || n.isLuminance || n.mipmapCount > 1) && !s;
                                        l.bindTexture(l.TEXTURE_CUBE_MAP, h), l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, 1), t.Internals.DDSTools.UploadDDSLevels(a._gl, a.getCaps().s3tc, e, n, i, 6), s || n.isFourCC || 1 != n.mipmapCount || l.generateMipmap(l.TEXTURE_CUBE_MAP), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_MAG_FILTER, l.LINEAR), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_MIN_FILTER, i ? l.LINEAR_MIPMAP_LINEAR : l.LINEAR), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_CUBE_MAP, null), a._activeTexturesCache = [], h._width = n.width, h._height = n.height, h.isReady = !0
                                        }) : r(e, 0, [], n, function(t) {
                                               var e = i(t[0].width, a._caps.maxCubemapTextureSize), n = e;
                                               a._workingCanvas.width = e, a._workingCanvas.height = n;
                                               var o = [l.TEXTURE_CUBE_MAP_POSITIVE_X, l.TEXTURE_CUBE_MAP_POSITIVE_Y, l.TEXTURE_CUBE_MAP_POSITIVE_Z, l.TEXTURE_CUBE_MAP_NEGATIVE_X, l.TEXTURE_CUBE_MAP_NEGATIVE_Y, l.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                                               l.bindTexture(l.TEXTURE_CUBE_MAP, h), l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, 0);
                                               for (var r = 0; r < o.length; r++)
                                               a._workingContext.drawImage(t[r], 0, 0, t[r].width, t[r].height, 0, 0, e, n), l.texImage2D(o[r], 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, a._workingCanvas);
                                               s || l.generateMipmap(l.TEXTURE_CUBE_MAP), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_MAG_FILTER, l.LINEAR), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_MIN_FILTER, s ? l.LINEAR : l.LINEAR_MIPMAP_LINEAR), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_CUBE_MAP, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.bindTexture(l.TEXTURE_CUBE_MAP, null), a._activeTexturesCache = [], h._width = e, h._height = n, h.isReady = !0
                                               }, o), h
        }, a.prototype._releaseTexture = function(t) {
            var e = this._gl;
            t._framebuffer && e.deleteFramebuffer(t._framebuffer), t._depthBuffer && e.deleteRenderbuffer(t._depthBuffer), e.deleteTexture(t);
            for (var n = 0; n < this._caps.maxTexturesImageUnits; n++)
                this._gl.activeTexture(this._gl["TEXTURE" + n]), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null), this._activeTexturesCache[n] = null;
            var i = this._loadedTexturesCache.indexOf(t);
            -1 !== i && this._loadedTexturesCache.splice(i, 1)
        }, a.prototype.bindSamplers = function(t) {
            this._gl.useProgram(t.getProgram());
            for (var e = t.getSamplers(), n = 0; n < e.length; n++) {
                var i = t.getUniform(e[n]);
                this._gl.uniform1i(i, n)
            }
            this._currentEffect = null
        }, a.prototype._bindTexture = function(t, e) {
            this._gl.activeTexture(this._gl["TEXTURE" + t]), this._gl.bindTexture(this._gl.TEXTURE_2D, e), this._activeTexturesCache[t] = null
        }, a.prototype.setTextureFromPostProcess = function(t, e) {
            this._bindTexture(t, e._textures.data[e._currentRenderTextureInd])
        }, a.prototype.setTexture = function(e, n) {
            if (!(0 > e)) {
                if (!n || !n.isReady())
                    return void (null != this._activeTexturesCache[e] && (this._gl.activeTexture(this._gl["TEXTURE" + e]), this._gl.bindTexture(this._gl.TEXTURE_2D, null), this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null), this._activeTexturesCache[e] = null));
                if (n instanceof t.VideoTexture)
                    n.update() && (this._activeTexturesCache[e] = null);
                else if (n.delayLoadState == t.Engine.DELAYLOADSTATE_NOTLOADED)
                    return void n.delayLoad();
                if (this._activeTexturesCache[e] != n) {
                    this._activeTexturesCache[e] = n;
                    var i = n.getInternalTexture();
                    if (this._gl.activeTexture(this._gl["TEXTURE" + e]), i.isCube) {
                        if (this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, i), i._cachedCoordinatesMode !== n.coordinatesMode) {
                            i._cachedCoordinatesMode = n.coordinatesMode;
                            var o = n.coordinatesMode !== t.Texture.CUBIC_MODE && n.coordinatesMode !== t.Texture.SKYBOX_MODE ? this._gl.REPEAT : this._gl.CLAMP_TO_EDGE;
                            this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_S, o), this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_T, o)
                        }
                        this._setAnisotropicLevel(this._gl.TEXTURE_CUBE_MAP, n)
                    } else {
                        if (this._gl.bindTexture(this._gl.TEXTURE_2D, i), i._cachedWrapU !== n.wrapU)
                            switch (i._cachedWrapU = n.wrapU, n.wrapU) {
                                case t.Texture.WRAP_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.REPEAT);
                                    break;
                                case t.Texture.CLAMP_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
                                    break;
                                case t.Texture.MIRROR_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.MIRRORED_REPEAT)
                            }
                        if (i._cachedWrapV !== n.wrapV)
                            switch (i._cachedWrapV = n.wrapV, n.wrapV) {
                                case t.Texture.WRAP_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.REPEAT);
                                    break;
                                case t.Texture.CLAMP_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
                                    break;
                                case t.Texture.MIRROR_ADDRESSMODE:
                                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.MIRRORED_REPEAT)
                            }
                        this._setAnisotropicLevel(this._gl.TEXTURE_2D, n)
                    }
                }
            }
        }, a.prototype._setAnisotropicLevel = function(t, e) {
            var n = this._caps.textureAnisotropicFilterExtension;
            n && e._cachedAnisotropicFilteringLevel !== e.anisotropicFilteringLevel && (this._gl.texParameterf(t, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e.anisotropicFilteringLevel, this._caps.maxAnisotropy)), e._cachedAnisotropicFilteringLevel = e.anisotropicFilteringLevel)
        }, a.prototype.readPixels = function(t, e, n, i) {
            var o = new Uint8Array(i * n * 4);
            return this._gl.readPixels(0, 0, n, i, this._gl.RGBA, this._gl.UNSIGNED_BYTE, o), o
        }, a.prototype.dispose = function() {
            for (this.stopRenderLoop(); this.scenes.length; )
                this.scenes[0].dispose();
            for (var t in this._compiledEffects)
                this._gl.deleteProgram(this._compiledEffects[t]._program);
            for (var e in this._vertexAttribArrays)
                e > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[e] || this._gl.disableVertexAttribArray(e);
            window.removeEventListener("blur", this._onBlur), window.removeEventListener("focus", this._onFocus), document.removeEventListener("fullscreenchange", this._onFullscreenChange), document.removeEventListener("mozfullscreenchange", this._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullscreenChange), document.removeEventListener("msfullscreenchange", this._onFullscreenChange), document.removeEventListener("pointerlockchange", this._onPointerLockChange), document.removeEventListener("mspointerlockchange", this._onPointerLockChange), document.removeEventListener("mozpointerlockchange", this._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", this._onPointerLockChange)
        }, a.isSupported = function() {
            try {
                var t = document.createElement("canvas"), e = t.getContext("webgl") || t.getContext("experimental-webgl");
                return null != e && !!window.WebGLRenderingContext
            } catch (n) {
                return !1
            }
        }, a._ALPHA_DISABLE = 0, a._ALPHA_ADD = 1, a._ALPHA_COMBINE = 2, a._DELAYLOADSTATE_NONE = 0, a._DELAYLOADSTATE_LOADED = 1, a._DELAYLOADSTATE_LOADING = 2, a._DELAYLOADSTATE_NOTLOADED = 4, a.Epsilon = .001, a.CollisionsEpsilon = .001, a.ShadersRepository = "Babylon/Shaders/", a
    }();
    t.Engine = a
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e) {
            this.state = "", this.animations = new Array, this._childrenFlag = -1, this._isEnabled = !0, this._isReady = !0, this._currentRenderId = -1, this.name = t, this.id = t, this._scene = e, this._initCache()
        }
        return e.prototype.getScene = function() {
            return this._scene
        }, e.prototype.getEngine = function() {
            return this._scene.getEngine()
        }, e.prototype.getWorldMatrix = function() {
            return t.Matrix.Identity()
        }, e.prototype._initCache = function() {
            this._cache = {}, this._cache.parent = void 0
        }, e.prototype.updateCache = function(t) {
            (t || !this.isSynchronized()) && (this._cache.parent = this.parent, this._updateCache())
        }, e.prototype._updateCache = function() {
        }, e.prototype._isSynchronized = function() {
            return !0
        }, e.prototype.isSynchronizedWithParent = function() {
            return this.parent ? this.parent._currentRenderId <= this._currentRenderId : !0
        }, e.prototype.isSynchronized = function(t) {
            var e = this.hasNewParent();
            return e = e || !this.isSynchronizedWithParent(), e = e || !this._isSynchronized(), t && this.updateCache(!0), !e
        }, e.prototype.hasNewParent = function(t) {
            return this._cache.parent === this.parent ? !1 : (t && (this._cache.parent = this.parent), !0)
        }, e.prototype.isReady = function() {
            return this._isReady
        }, e.prototype.isEnabled = function() {
            return this._isEnabled ? this.parent ? this.parent.isEnabled() : !0 : !1
        }, e.prototype.setEnabled = function(t) {
            this._isEnabled = t
        }, e.prototype.isDescendantOf = function(t) {
            return this.parent ? this.parent === t ? !0 : this.parent.isDescendantOf(t) : !1
        }, e.prototype._getDescendants = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.isDescendantOf(this) && e.push(i)
            }
        }, e.prototype.getDescendants = function() {
            var t = [];
            return this._getDescendants(this._scene.meshes, t), this._getDescendants(this._scene.lights, t), this._getDescendants(this._scene.cameras, t), t
        }, e.prototype._setReady = function(t) {
            if (t != this._isReady) {
                if (!t)
                    return void (this._isReady = !1);
                this._isReady = !0, this.onReady && this.onReady(this)
            }
        }, e
    }();
    t.Node = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n, i, o, r, s, a) {
            this.engine = t, this.canvas = n, this.currentScene = e, this.sceneLoadedCallback = i, this.progressCallback = o, this.additionnalRenderLoopLogicCallback = r, this.textureLoadingCallback = s, this.startingProcessingFilesCallback = a
        }
        return e.prototype.monitorElementForDragNDrop = function(t) {
            var e = this;
            t && (this.elementToMonitor = t, this.elementToMonitor.addEventListener("dragenter", function(t) {
                                                                                    e.drag(t)
                                                                                    }, !1), this.elementToMonitor.addEventListener("dragover", function(t) {
                                                                                                                                   e.drag(t)
                                                                                                                                   }, !1), this.elementToMonitor.addEventListener("drop", function(t) {
                                                                                                                                                                                  e.drop(t)
                                                                                                                                                                                  }, !1))
        }, e.prototype.renderFunction = function() {
            if (this.additionnalRenderLoopLogicCallback && this.additionnalRenderLoopLogicCallback(), this.currentScene) {
                if (this.textureLoadingCallback) {
                    var t = this.currentScene.getWaitingItemsCount();
                    t > 0 && this.textureLoadingCallback(t)
                }
                this.currentScene.render()
            }
        }, e.prototype.drag = function(t) {
            t.stopPropagation(), t.preventDefault()
        }, e.prototype.drop = function(t) {
            t.stopPropagation(), t.preventDefault(), this.loadFiles(t)
        }, e.prototype.loadFiles = function(e) {
            var n = this, i = this;
            this.startingProcessingFilesCallback && this.startingProcessingFilesCallback();
            var o, r;
            if (e && e.dataTransfer && e.dataTransfer.files && (r = e.dataTransfer.files), e && e.target && e.target.files && (r = e.target.files), r && r.length > 0) {
                for (var s = 0; s < r.length; s++)
                    switch (r[s].type) {
                        case "image/jpeg":
                        case "image/png":
                            t.FilesInput.FilesTextures[r[s].name] = r[s];
                            break;
                        case "image/targa":
                        case "image/vnd.ms-dds":
                            t.FilesInput.FilesToLoad[r[s].name] = r[s];
                            break;
                        default:
                            -1 !== r[s].name.indexOf(".babylon") && -1 === r[s].name.indexOf(".manifest") && -1 === r[s].name.indexOf(".incremental") && -1 === r[s].name.indexOf(".babylonmeshdata") && -1 === r[s].name.indexOf(".babylongeometrydata") && (o = r[s])
                    }
                o ? (this.currentScene && (this.engine.stopRenderLoop(), this.currentScene.dispose()), t.SceneLoader.Load("file:", o, this.engine, function(t) {
                                                                                                                          i.currentScene = t, i.currentScene.executeWhenReady(function() {
                                                                                                                                                                              i.currentScene.activeCamera && i.currentScene.activeCamera.attachControl(i.canvas), i.sceneLoadedCallback && i.sceneLoadedCallback(o, i.currentScene), i.engine.runRenderLoop(function() {
                                                                                                                                                                                                                                                                                                                                                            i.renderFunction()
                                                                                                                                                                                                                                                                                                                                                            })
                                                                                                                                                                              })
                                                                                                                          }, function(t) {
                                                                                                                          n.progressCallback && n.progressCallback(t)
                                                                                                                          })) : t.Tools.Error("Please provide a valid .babylon file.")
            }
        }, e.FilesTextures = new Array, e.FilesToLoad = new Array, e
    }();
    t.FilesInput = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e, n) {
            this.bu = t, this.bv = e, this.distance = n, this.faceId = 0
        }
        return t
    }();
    t.IntersectionInfo = e;
    var n = function() {
        function e() {
            this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.pickedSubMeshIndex = null, this.bu = 0, this.bv = 0, this.faceId = -1
        }
        return e.prototype.getNormal = function() {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(t.VertexBuffer.NormalKind))
                return null;
            var e = this.pickedMesh.getIndices(), n = this.pickedMesh.getVerticesData(t.VertexBuffer.NormalKind), i = t.Vector3.FromArray(n, 3 * e[3 * this.faceId]), o = t.Vector3.FromArray(n, 3 * e[3 * this.faceId + 1]), r = t.Vector3.FromArray(n, 3 * e[3 * this.faceId + 2]);
            return i = i.scale(this.bu), o = o.scale(this.bv), r = r.scale(1 - this.bu - this.bv), new t.Vector3(i.x + o.x + r.x, i.y + o.y + r.y, i.z + o.z + r.z)
        }, e.prototype.getTextureCoordinates = function() {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(t.VertexBuffer.UVKind))
                return null;
            var e = this.pickedMesh.getIndices(), n = this.pickedMesh.getVerticesData(t.VertexBuffer.UVKind), i = t.Vector2.FromArray(n, 2 * e[3 * this.faceId]), o = t.Vector2.FromArray(n, 2 * e[3 * this.faceId + 1]), r = t.Vector2.FromArray(n, 2 * e[3 * this.faceId + 2]);
            return i = i.scale(this.bu), o = o.scale(this.bv), r = r.scale(1 - this.bu - this.bv), new t.Vector2(i.x + o.x + r.x, i.y + o.y + r.y)
        }, e
    }();
    t.PickingInfo = n
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n) {
            this.minimum = e, this.maximum = n, this._tempRadiusVector = t.Vector3.Zero();
            var i = t.Vector3.Distance(e, n);
            this.center = t.Vector3.Lerp(e, n, .5), this.radius = .5 * i, this.centerWorld = t.Vector3.Zero(), this._update(t.Matrix.Identity())
        }
        return e.prototype._update = function(e) {
            t.Vector3.TransformCoordinatesToRef(this.center, e, this.centerWorld), t.Vector3.TransformNormalFromFloatsToRef(1, 1, 1, e, this._tempRadiusVector), this.radiusWorld = Math.max(Math.abs(this._tempRadiusVector.x), Math.abs(this._tempRadiusVector.y), Math.abs(this._tempRadiusVector.z)) * this.radius
        }, e.prototype.isInFrustum = function(t) {
            for (var e = 0; 6 > e; e++)
                if (t[e].dotCoordinate(this.centerWorld) <= -this.radiusWorld)
                    return !1;
            return !0
        }, e.prototype.intersectsPoint = function(e) {
            var n = this.centerWorld.x - e.x, i = this.centerWorld.y - e.y, o = this.centerWorld.z - e.z, r = Math.sqrt(n * n + i * i + o * o);
            return Math.abs(this.radiusWorld - r) < t.Engine.Epsilon ? !1 : !0
        }, e.Intersects = function(t, e) {
            var n = t.centerWorld.x - e.centerWorld.x, i = t.centerWorld.y - e.centerWorld.y, o = t.centerWorld.z - e.centerWorld.z, r = Math.sqrt(n * n + i * i + o * o);
            return t.radiusWorld + e.radiusWorld < r ? !1 : !0
        }, e
    }();
    t.BoundingSphere = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n) {
            this.minimum = e, this.maximum = n, this.vectors = new Array, this.vectorsWorld = new Array, this.vectors.push(this.minimum.clone()), this.vectors.push(this.maximum.clone()), this.vectors.push(this.minimum.clone()), this.vectors[2].x = this.maximum.x, this.vectors.push(this.minimum.clone()), this.vectors[3].y = this.maximum.y, this.vectors.push(this.minimum.clone()), this.vectors[4].z = this.maximum.z, this.vectors.push(this.maximum.clone()), this.vectors[5].z = this.minimum.z, this.vectors.push(this.maximum.clone()), this.vectors[6].x = this.minimum.x, this.vectors.push(this.maximum.clone()), this.vectors[7].y = this.minimum.y, this.center = this.maximum.add(this.minimum).scale(.5), this.extends = this.maximum.subtract(this.minimum).scale(.5), this.directions = [t.Vector3.Zero(), t.Vector3.Zero(), t.Vector3.Zero()];
            for (var i = 0; i < this.vectors.length; i++)
                this.vectorsWorld[i] = t.Vector3.Zero();
            this.minimumWorld = t.Vector3.Zero(), this.maximumWorld = t.Vector3.Zero(), this._update(t.Matrix.Identity())
        }
        return e.prototype.getWorldMatrix = function() {
            return this._worldMatrix
        }, e.prototype._update = function(e) {
            t.Vector3.FromFloatsToRef(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, this.minimumWorld), t.Vector3.FromFloatsToRef(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, this.maximumWorld);
            for (var n = 0; n < this.vectors.length; n++) {
                var i = this.vectorsWorld[n];
                t.Vector3.TransformCoordinatesToRef(this.vectors[n], e, i), i.x < this.minimumWorld.x && (this.minimumWorld.x = i.x), i.y < this.minimumWorld.y && (this.minimumWorld.y = i.y), i.z < this.minimumWorld.z && (this.minimumWorld.z = i.z), i.x > this.maximumWorld.x && (this.maximumWorld.x = i.x), i.y > this.maximumWorld.y && (this.maximumWorld.y = i.y), i.z > this.maximumWorld.z && (this.maximumWorld.z = i.z)
            }
            this.maximumWorld.addToRef(this.minimumWorld, this.center), this.center.scaleInPlace(.5), t.Vector3.FromFloatArrayToRef(e.m, 0, this.directions[0]), t.Vector3.FromFloatArrayToRef(e.m, 4, this.directions[1]), t.Vector3.FromFloatArrayToRef(e.m, 8, this.directions[2]), this._worldMatrix = e
        }, e.prototype.isInFrustum = function(t) {
            return e.IsInFrustum(this.vectorsWorld, t)
        }, e.prototype.intersectsPoint = function(e) {
            var n = t.Engine.Epsilon;
            return this.maximumWorld.x - e.x < n || n > e.x - this.minimumWorld.x ? !1 : this.maximumWorld.y - e.y < n || n > e.y - this.minimumWorld.y ? !1 : this.maximumWorld.z - e.z < n || n > e.z - this.minimumWorld.z ? !1 : !0
        }, e.prototype.intersectsSphere = function(t) {
            return e.IntersectsSphere(this.minimumWorld, this.maximumWorld, t.centerWorld, t.radiusWorld)
        }, e.prototype.intersectsMinMax = function(t, e) {
            return this.maximumWorld.x < t.x || this.minimumWorld.x > e.x ? !1 : this.maximumWorld.y < t.y || this.minimumWorld.y > e.y ? !1 : this.maximumWorld.z < t.z || this.minimumWorld.z > e.z ? !1 : !0
        }, e.Intersects = function(t, e) {
            return t.maximumWorld.x < e.minimumWorld.x || t.minimumWorld.x > e.maximumWorld.x ? !1 : t.maximumWorld.y < e.minimumWorld.y || t.minimumWorld.y > e.maximumWorld.y ? !1 : t.maximumWorld.z < e.minimumWorld.z || t.minimumWorld.z > e.maximumWorld.z ? !1 : !0
        }, e.IntersectsSphere = function(e, n, i, o) {
            var r = t.Vector3.Clamp(i, e, n), s = t.Vector3.DistanceSquared(i, r);
            return o * o >= s
        }, e.IsInFrustum = function(t, e) {
            for (var n = 0; 6 > n; n++) {
                for (var i = 8, o = 0; 8 > o && e[n].dotCoordinate(t[o]) < 0; o++)
                    --i;
                if (0 == i)
                    return !1
                    }
            return !0
        }, e
    }();
    t.BoundingBox = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function(e, n) {
        var i = t.Vector3.Dot(n.center, e), o = Math.abs(t.Vector3.Dot(n.directions[0], e)) * n.extends.x, r = Math.abs(t.Vector3.Dot(n.directions[1], e)) * n.extends.y, s = Math.abs(t.Vector3.Dot(n.directions[2], e)) * n.extends.z, a = o + r + s;
        return {min: i - a,max: i + a}
    }, n = function(t, e, n, i) {
        return !(t > i || n > e)
    }, i = function(t, i, o) {
        var r = e(t, i), s = e(t, o);
        return n(r.min, r.max, s.min, s.max)
    }, o = function() {
        function e(e, n) {
            this.minimum = e, this.maximum = n, this.boundingBox = new t.BoundingBox(e, n), this.boundingSphere = new t.BoundingSphere(e, n)
        }
        return e.prototype._update = function(t) {
            this.boundingBox._update(t), this.boundingSphere._update(t)
        }, e.prototype.isInFrustum = function(t) {
            return this.boundingSphere.isInFrustum(t) ? this.boundingBox.isInFrustum(t) : !1
        }, e.prototype._checkCollision = function(t) {
            return t._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
        }, e.prototype.intersectsPoint = function(t) {
            return this.boundingSphere.centerWorld && this.boundingSphere.intersectsPoint(t) && this.boundingBox.intersectsPoint(t) ? !0 : !1
        }, e.prototype.intersects = function(e, n) {
            if (!this.boundingSphere.centerWorld || !e.boundingSphere.centerWorld)
                return !1;
            if (!t.BoundingSphere.Intersects(this.boundingSphere, e.boundingSphere))
                return !1;
            if (!t.BoundingBox.Intersects(this.boundingBox, e.boundingBox))
                return !1;
            if (!n)
                return !0;
            var o = this.boundingBox, r = e.boundingBox;
            return i(o.directions[0], o, r) && i(o.directions[1], o, r) && i(o.directions[2], o, r) && i(r.directions[0], o, r) && i(r.directions[1], o, r) && i(r.directions[2], o, r) && i(t.Vector3.Cross(o.directions[0], r.directions[0]), o, r) && i(t.Vector3.Cross(o.directions[0], r.directions[1]), o, r) && i(t.Vector3.Cross(o.directions[0], r.directions[2]), o, r) && i(t.Vector3.Cross(o.directions[1], r.directions[0]), o, r) && i(t.Vector3.Cross(o.directions[1], r.directions[1]), o, r) && i(t.Vector3.Cross(o.directions[1], r.directions[2]), o, r) && i(t.Vector3.Cross(o.directions[2], r.directions[0]), o, r) && i(t.Vector3.Cross(o.directions[2], r.directions[1]), o, r) && i(t.Vector3.Cross(o.directions[2], r.directions[2]), o, r) ? !0 : !1
        }, e
    }();
    t.BoundingInfo = o
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i) {
            e.call(this, n, i), this.position = new t.Vector3(0, 0, 0), this.rotation = new t.Vector3(0, 0, 0), this.scaling = new t.Vector3(1, 1, 1), this.billboardMode = t.AbstractMesh.BILLBOARDMODE_NONE, this.visibility = 1, this.infiniteDistance = !1, this.isVisible = !0, this.isPickable = !0, this.showBoundingBox = !1, this.showSubMeshesBoundingBox = !1, this.onDispose = null, this.checkCollisions = !1, this.renderingGroupId = 0, this.receiveShadows = !1, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.layerMask = 4294967295, this._physicImpostor = t.PhysicsEngine.NoImpostor, this.ellipsoid = new t.Vector3(.5, 1, .5), this.ellipsoidOffset = new t.Vector3(0, 0, 0), this._collider = new t.Collider, this._oldPositionForCollisions = new t.Vector3(0, 0, 0), this._diffPositionForCollisions = new t.Vector3(0, 0, 0), this._newPositionForCollisions = new t.Vector3(0, 0, 0), this._localScaling = t.Matrix.Zero(), this._localRotation = t.Matrix.Zero(), this._localTranslation = t.Matrix.Zero(), this._localBillboard = t.Matrix.Zero(), this._localPivotScaling = t.Matrix.Zero(), this._localPivotScalingRotation = t.Matrix.Zero(), this._localWorld = t.Matrix.Zero(), this._worldMatrix = t.Matrix.Zero(), this._rotateYByPI = t.Matrix.RotationY(Math.PI), this._absolutePosition = t.Vector3.Zero(), this._collisionsTransformMatrix = t.Matrix.Zero(), this._collisionsScalingMatrix = t.Matrix.Zero(), this._isDirty = !1, this._pivotMatrix = t.Matrix.Identity(), this._isDisposed = !1, this._renderId = 0, this._intersectionsInProgress = new Array, i.meshes.push(this)
        }
        return __extends(n, e), Object.defineProperty(n, "BILLBOARDMODE_NONE", {get: function() {
                                                      return n._BILLBOARDMODE_NONE
                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(n, "BILLBOARDMODE_X", {get: function() {
                                                                                                                 return n._BILLBOARDMODE_X
                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(n, "BILLBOARDMODE_Y", {get: function() {
                                                                                                                                                                            return n._BILLBOARDMODE_Y
                                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(n, "BILLBOARDMODE_Z", {get: function() {
                                                                                                                                                                                                                                       return n._BILLBOARDMODE_Z
                                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(n, "BILLBOARDMODE_ALL", {get: function() {
                                                                                                                                                                                                                                                                                                  return n._BILLBOARDMODE_ALL
                                                                                                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), n.prototype.getTotalVertices = function() {
            return 0
        }, n.prototype.getIndices = function() {
            return null
        }, n.prototype.getVerticesData = function() {
            return null
        }, n.prototype.isVerticesDataPresent = function() {
            return !1
        }, n.prototype.getBoundingInfo = function() {
            return this._boundingInfo || this._updateBoundingInfo(), this._boundingInfo
        }, n.prototype._preActivate = function() {
        }, n.prototype._activate = function(t) {
            this._renderId = t
        }, n.prototype.getWorldMatrix = function() {
            return this._currentRenderId !== this.getScene().getRenderId() && this.computeWorldMatrix(), this._worldMatrix
        }, Object.defineProperty(n.prototype, "worldMatrixFromCache", {get: function() {
                                 return this._worldMatrix
                                 },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "absolutePosition", {get: function() {
                                                                                            return this._absolutePosition
                                                                                            },enumerable: !0,configurable: !0}), n.prototype.rotate = function(e, n, i) {
            if (this.rotationQuaternion || (this.rotationQuaternion = t.Quaternion.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation = t.Vector3.Zero()), i && 0 != i) {
                if (this.parent) {
                    var o = this.parent.getWorldMatrix().clone();
                    o.invert(), e = t.Vector3.TransformNormal(e, o)
                }
                r = t.Quaternion.RotationAxis(e, n), this.rotationQuaternion = r.multiply(this.rotationQuaternion)
            } else {
                var r = t.Quaternion.RotationAxis(e, n);
                this.rotationQuaternion = this.rotationQuaternion.multiply(r)
            }
        }, n.prototype.translate = function(t, e, n) {
            var i = t.scale(e);
            if (n && 0 != n)
                this.setAbsolutePosition(this.getAbsolutePosition().add(i));
            else {
                var o = this.getPositionExpressedInLocalSpace().add(i);
                this.setPositionWithLocalVector(o)
            }
        }, n.prototype.getAbsolutePosition = function() {
            return this.computeWorldMatrix(), this._absolutePosition
        }, n.prototype.setAbsolutePosition = function(e) {
            if (e) {
                var n, i, o;
                if (void 0 === e.x) {
                    if (arguments.length < 3)
                        return;
                    n = arguments[0], i = arguments[1], o = arguments[2]
                } else
                    n = e.x, i = e.y, o = e.z;
                if (this.parent) {
                    var r = this.parent.getWorldMatrix().clone();
                    r.invert();
                    var s = new t.Vector3(n, i, o);
                    this.position = t.Vector3.TransformCoordinates(s, r)
                } else
                    this.position.x = n, this.position.y = i, this.position.z = o
                    }
        }, n.prototype.setPivotMatrix = function(t) {
            this._pivotMatrix = t, this._cache.pivotMatrixUpdated = !0
        }, n.prototype.getPivotMatrix = function() {
            return this._pivotMatrix
        }, n.prototype._isSynchronized = function() {
            if (this._isDirty)
                return !1;
            if (this.billboardMode !== n.BILLBOARDMODE_NONE)
                return !1;
            if (this._cache.pivotMatrixUpdated)
                return !1;
            if (this.infiniteDistance)
                return !1;
            if (!this._cache.position.equals(this.position))
                return !1;
            if (this.rotationQuaternion) {
                if (!this._cache.rotationQuaternion.equals(this.rotationQuaternion))
                    return !1
                    } else if (!this._cache.rotation.equals(this.rotation))
                        return !1;
            return this._cache.scaling.equals(this.scaling) ? !0 : !1
        }, n.prototype._initCache = function() {
            e.prototype._initCache.call(this), this._cache.localMatrixUpdated = !1, this._cache.position = t.Vector3.Zero(), this._cache.scaling = t.Vector3.Zero(), this._cache.rotation = t.Vector3.Zero(), this._cache.rotationQuaternion = new t.Quaternion(0, 0, 0, 0)
        }, n.prototype.markAsDirty = function(t) {
            "rotation" === t && (this.rotationQuaternion = null), this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0
        }, n.prototype._updateBoundingInfo = function() {
            if (this._boundingInfo = this._boundingInfo || new t.BoundingInfo(this.absolutePosition, this.absolutePosition), this._boundingInfo._update(this.worldMatrixFromCache), this.subMeshes)
                for (var e = 0; e < this.subMeshes.length; e++) {
                    var n = this.subMeshes[e];
                    n.updateBoundingInfo(this.worldMatrixFromCache)
                }
        }, n.prototype.computeWorldMatrix = function(e) {
            if (!e && (this._currentRenderId == this.getScene().getRenderId() || this.isSynchronized(!0)))
                return this._worldMatrix;
            if (this._cache.position.copyFrom(this.position), this._cache.scaling.copyFrom(this.scaling), this._cache.pivotMatrixUpdated = !1, this._currentRenderId = this.getScene().getRenderId(), this._isDirty = !1, t.Matrix.ScalingToRef(this.scaling.x, this.scaling.y, this.scaling.z, this._localScaling), this.rotationQuaternion ? (this.rotationQuaternion.toRotationMatrix(this._localRotation), this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion)) : (t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._localRotation), this._cache.rotation.copyFrom(this.rotation)), this.infiniteDistance && !this.parent) {
                var i = this.getScene().activeCamera, o = i.getWorldMatrix(), r = new t.Vector3(o.m[12], o.m[13], o.m[14]);
                t.Matrix.TranslationToRef(this.position.x + r.x, this.position.y + r.y, this.position.z + r.z, this._localTranslation)
            } else
                t.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._localTranslation);
            if (this._pivotMatrix.multiplyToRef(this._localScaling, this._localPivotScaling), this._localPivotScaling.multiplyToRef(this._localRotation, this._localPivotScalingRotation), this.billboardMode !== n.BILLBOARDMODE_NONE) {
                var s = this.position.clone(), a = this.getScene().activeCamera.position.clone();
                this.parent && this.parent.position && (s.addInPlace(this.parent.position), t.Matrix.TranslationToRef(s.x, s.y, s.z, this._localTranslation)), (this.billboardMode & n.BILLBOARDMODE_ALL) === n.BILLBOARDMODE_ALL ? a = this.getScene().activeCamera.position : (this.billboardMode & t.AbstractMesh.BILLBOARDMODE_X && (a.x = s.x + t.Engine.Epsilon), this.billboardMode & t.AbstractMesh.BILLBOARDMODE_Y && (a.y = s.y + .001), this.billboardMode & t.AbstractMesh.BILLBOARDMODE_Z && (a.z = s.z + .001)), t.Matrix.LookAtLHToRef(s, a, t.Vector3.Up(), this._localBillboard), this._localBillboard.m[12] = this._localBillboard.m[13] = this._localBillboard.m[14] = 0, this._localBillboard.invert(), this._localPivotScalingRotation.multiplyToRef(this._localBillboard, this._localWorld), this._rotateYByPI.multiplyToRef(this._localWorld, this._localPivotScalingRotation)
            }
            return this._localPivotScalingRotation.multiplyToRef(this._localTranslation, this._localWorld), this.parent && this.parent.getWorldMatrix && this.billboardMode === t.AbstractMesh.BILLBOARDMODE_NONE ? this._localWorld.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix) : this._worldMatrix.copyFrom(this._localWorld), this._updateBoundingInfo(), this._absolutePosition.copyFromFloats(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._worldMatrix
        }, n.prototype.setPositionWithLocalVector = function(e) {
            this.computeWorldMatrix(), this.position = t.Vector3.TransformNormal(e, this._localWorld)
        }, n.prototype.getPositionExpressedInLocalSpace = function() {
            this.computeWorldMatrix();
            var e = this._localWorld.clone();
            return e.invert(), t.Vector3.TransformNormal(this.position, e)
        }, n.prototype.locallyTranslate = function(e) {
            this.computeWorldMatrix(), this.position = t.Vector3.TransformCoordinates(e, this._localWorld)
        }, n.prototype.lookAt = function(e, n, i, o) {
            n = n || 0, i = i || 0, o = o || 0;
            var r = e.subtract(this.position), s = -Math.atan2(r.z, r.x) - Math.PI / 2, a = Math.sqrt(r.x * r.x + r.z * r.z), l = Math.atan2(r.y, a);
            this.rotationQuaternion = t.Quaternion.RotationYawPitchRoll(s + n, l + i, o)
        }, n.prototype.isInFrustum = function(t) {
            return this._boundingInfo.isInFrustum(t) ? !0 : !1
        }, n.prototype.intersectsMesh = function(t, e) {
            return this._boundingInfo && t._boundingInfo ? this._boundingInfo.intersects(t._boundingInfo, e) : !1
        }, n.prototype.intersectsPoint = function(t) {
            return this._boundingInfo ? this._boundingInfo.intersectsPoint(t) : !1
        }, n.prototype.setPhysicsState = function(e, n) {
            var i = this.getScene().getPhysicsEngine();
            if (i) {
                if (e.impostor && (n = e, e = e.impostor), e = e || t.PhysicsEngine.NoImpostor, e === t.PhysicsEngine.NoImpostor)
                    return void i._unregisterMesh(this);
                n.mass = n.mass || 0, n.friction = n.friction || .2, n.restitution = n.restitution || .9, this._physicImpostor = e, this._physicsMass = n.mass, this._physicsFriction = n.friction, this._physicRestitution = n.restitution, i._registerMesh(this, e, n)
            }
        }, n.prototype.getPhysicsImpostor = function() {
            return this._physicImpostor ? this._physicImpostor : t.PhysicsEngine.NoImpostor
        }, n.prototype.getPhysicsMass = function() {
            return this._physicsMass ? this._physicsMass : 0
        }, n.prototype.getPhysicsFriction = function() {
            return this._physicsFriction ? this._physicsFriction : 0
        }, n.prototype.getPhysicsRestitution = function() {
            return this._physicRestitution ? this._physicRestitution : 0
        }, n.prototype.applyImpulse = function(t, e) {
            this._physicImpostor && this.getScene().getPhysicsEngine()._applyImpulse(this, t, e)
        }, n.prototype.setPhysicsLinkWith = function(t, e, n) {
            this._physicImpostor && this.getScene().getPhysicsEngine()._createLink(this, t, e, n)
        }, n.prototype.moveWithCollisions = function(e) {
            var n = this.getAbsolutePosition();
            n.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPositionForCollisions), this._oldPositionForCollisions.addInPlace(this.ellipsoidOffset), this._collider.radius = this.ellipsoid, this.getScene()._getNewPosition(this._oldPositionForCollisions, e, this._collider, 3, this._newPositionForCollisions, this), this._newPositionForCollisions.subtractToRef(this._oldPositionForCollisions, this._diffPositionForCollisions), this._diffPositionForCollisions.length() > t.Engine.CollisionsEpsilon && this.position.addInPlace(this._diffPositionForCollisions)
        }, n.prototype.createOrUpdateSubmeshesOctree = function(e, n) {
            "undefined" == typeof e && (e = 64), "undefined" == typeof n && (n = 2), this._submeshesOctree || (this._submeshesOctree = new t.Octree(t.Octree.CreationFuncForSubMeshes, e, n)), this.computeWorldMatrix(!0);
            var i = this.getBoundingInfo().boundingBox;
            return this._submeshesOctree.update(i.minimumWorld, i.maximumWorld, this.subMeshes), this._submeshesOctree
        }, n.prototype._collideForSubMesh = function(e, n, i) {
            if (this._generatePointsArray(), !e._lastColliderWorldVertices || !e._lastColliderTransformMatrix.equals(n)) {
                e._lastColliderTransformMatrix = n.clone(), e._lastColliderWorldVertices = [], e._trianglePlanes = [];
                for (var o = e.verticesStart, r = e.verticesStart + e.verticesCount, s = o; r > s; s++)
                    e._lastColliderWorldVertices.push(t.Vector3.TransformCoordinates(this._positions[s], n))
                    }
            i._collide(e, e._lastColliderWorldVertices, this.getIndices(), e.indexStart, e.indexStart + e.indexCount, e.verticesStart)
        }, n.prototype._processCollisionsForSubMeshes = function(t, e) {
            var n, i;
            if (this._submeshesOctree && this.useOctreeForCollisions) {
                var o = t.velocityWorldLength + Math.max(t.radius.x, t.radius.y, t.radius.z), r = this._submeshesOctree.intersects(t.basePointWorld, o);
                i = r.length, n = r.data
            } else
                n = this.subMeshes, i = n.length;
            for (var s = 0; i > s; s++) {
                var a = n[s];
                i > 1 && !a._checkCollision(t) || this._collideForSubMesh(a, e, t)
            }
        }, n.prototype._checkCollision = function(e) {
            this._boundingInfo._checkCollision(e) && (t.Matrix.ScalingToRef(1 / e.radius.x, 1 / e.radius.y, 1 / e.radius.z, this._collisionsScalingMatrix), this.worldMatrixFromCache.multiplyToRef(this._collisionsScalingMatrix, this._collisionsTransformMatrix), this._processCollisionsForSubMeshes(e, this._collisionsTransformMatrix))
        }, n.prototype._generatePointsArray = function() {
            return !1
        }, n.prototype.intersects = function(e, n, i, o) {
            var r = new t.PickingInfo;
            if (!(this.subMeshes && this._boundingInfo && e.intersectsSphere(this._boundingInfo.boundingSphere) && e.intersectsBox(this._boundingInfo.boundingBox)))
                return r;
            if (!this._generatePointsArray())
                return r;
            var s, a, l, h = null;
            if (this._submeshesOctree && this.useOctreeForPicking) {
                var c = t.Ray.Transform(e, this.getWorldMatrix()), u = this._submeshesOctree.intersectsRay(c);
                l = u.length, a = u.data
            } else
                a = this.subMeshes, l = a.length;
            for (var p = 0; l > p; p++) {
                var d = a[p];
                if (!(l > 1) || d.canIntersects(e)) {
                    var m = d.intersects(e, this._positions, this.getIndices(), n, o);
                    if (m) {
                        if (i && d.getMaterial().alpha < .3)
                            continue;
                        if ((n || !h || m.distance < h.distance) && (h = m, s = p, n))
                            break
                            }
                }
            }
            if (h) {
                var g = this.getWorldMatrix(), f = t.Vector3.TransformCoordinates(e.origin, g), y = e.direction.clone();
                y.normalize(), y = y.scale(h.distance);
                var _ = t.Vector3.TransformNormal(y, g), v = f.add(_);
                return r.hit = !0, r.distance = t.Vector3.Distance(f, v), r.pickedPoint = v, r.pickedMesh = this, r.pickedSubMeshIndex = s, r.bu = h.bu, r.bv = h.bv, r.faceId = h.faceId, r
            }
            return r
        }, n.prototype.clone = function() {
            return null
        }, n.prototype.releaseSubMeshes = function() {
            if (this.subMeshes)
                for (; this.subMeshes.length; )
                    this.subMeshes[0].dispose();
            else
                this.subMeshes = new Array
                }, n.prototype.dispose = function(e) {
                    for (this.getPhysicsImpostor() != t.PhysicsEngine.NoImpostor && this.setPhysicsState(t.PhysicsEngine.NoImpostor), o = 0; o < this._intersectionsInProgress.length; o++) {
                        var n = this._intersectionsInProgress[o], i = n._intersectionsInProgress.indexOf(this);
                        n._intersectionsInProgress.splice(i, 1)
                    }
                    this._intersectionsInProgress = [], this.releaseSubMeshes();
                    var o = this.getScene().meshes.indexOf(this);
                    if (this.getScene().meshes.splice(o, 1), e)
                        for (o = 0; o < this.getScene().meshes.length; o++) {
                            var r = this.getScene().meshes[o];
                            r.parent === this && (r.parent = null, r.computeWorldMatrix(!0))
                        }
                    else {
                        for (o = 0; o < this.getScene().particleSystems.length; o++)
                            this.getScene().particleSystems[o].emitter == this && (this.getScene().particleSystems[o].dispose(), o--);
                        var s = this.getScene().meshes.slice(0);
                        for (o = 0; o < s.length; o++)
                            s[o].parent == this && s[o].dispose()
                            }
                    this._isDisposed = !0, this.onDispose && this.onDispose()
                }, n._BILLBOARDMODE_NONE = 0, n._BILLBOARDMODE_X = 1, n._BILLBOARDMODE_Y = 2, n._BILLBOARDMODE_Z = 4, n._BILLBOARDMODE_ALL = 7, n
    }(t.Node);
    t.AbstractMesh = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i) {
            e.call(this, n, i), this.diffuse = new t.Color3(1, 1, 1), this.specular = new t.Color3(1, 1, 1), this.intensity = 1, this.range = Number.MAX_VALUE, this.excludedMeshes = new Array, this._excludedMeshesIds = new Array, i.lights.push(this)
        }
        return __extends(n, e), n.prototype.getShadowGenerator = function() {
            return this._shadowGenerator
        }, n.prototype.transferToEffect = function() {
        }, n.prototype._getWorldMatrix = function() {
            return t.Matrix.Identity()
        }, n.prototype.getWorldMatrix = function() {
            this._currentRenderId = this.getScene().getRenderId();
            var e = this._getWorldMatrix();
            return this.parent && this.parent.getWorldMatrix ? (this._parentedWorldMatrix || (this._parentedWorldMatrix = t.Matrix.Identity()), e.multiplyToRef(this.parent.getWorldMatrix(), this._parentedWorldMatrix), this._parentedWorldMatrix) : e
        }, n.prototype.dispose = function() {
            this._shadowGenerator && (this._shadowGenerator.dispose(), this._shadowGenerator = null);
            var t = this.getScene().lights.indexOf(this);
            this.getScene().lights.splice(t, 1)
        }, n
    }(t.Node);
    t.Light = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i) {
            e.call(this, t, i), this.position = n
        }
        return __extends(n, e), n.prototype.transferToEffect = function(e, n) {
            return this.parent && this.parent.getWorldMatrix ? (this._transformedPosition || (this._transformedPosition = t.Vector3.Zero()), t.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._transformedPosition), void e.setFloat4(n, this._transformedPosition.x, this._transformedPosition.y, this._transformedPosition.z, 0)) : void e.setFloat4(n, this.position.x, this.position.y, this.position.z, 0)
        }, n.prototype.getShadowGenerator = function() {
            return null
        }, n.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = t.Matrix.Identity()), t.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, n
    }(t.Light);
    t.PointLight = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i, o, r, s) {
            e.call(this, t, s), this.position = n, this.direction = i, this.angle = o, this.exponent = r
        }
        return __extends(n, e), n.prototype.setDirectionToTarget = function(e) {
            return this.direction = t.Vector3.Normalize(e.subtract(this.position)), this.direction
        }, n.prototype.transferToEffect = function(e, n, i) {
            var o;
            if (this.parent && this.parent.getWorldMatrix) {
                this._transformedDirection || (this._transformedDirection = t.Vector3.Zero()), this._transformedPosition || (this._transformedPosition = t.Vector3.Zero());
                var r = this.parent.getWorldMatrix();
                t.Vector3.TransformCoordinatesToRef(this.position, r, this._transformedPosition), t.Vector3.TransformNormalToRef(this.direction, r, this._transformedDirection), e.setFloat4(n, this._transformedPosition.x, this._transformedPosition.y, this._transformedPosition.z, this.exponent), o = t.Vector3.Normalize(this._transformedDirection)
            } else
                e.setFloat4(n, this.position.x, this.position.y, this.position.z, this.exponent), o = t.Vector3.Normalize(this.direction);
            e.setFloat4(i, o.x, o.y, o.z, Math.cos(.5 * this.angle))
        }, n.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = t.Matrix.Identity()), t.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, n
    }(t.Light);
    t.SpotLight = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o) {
            e.call(this, n, o), this.direction = i, this.groundColor = new t.Color3(0, 0, 0)
        }
        return __extends(n, e), n.prototype.setDirectionToTarget = function(e) {
            return this.direction = t.Vector3.Normalize(e.subtract(t.Vector3.Zero())), this.direction
        }, n.prototype.getShadowGenerator = function() {
            return null
        }, n.prototype.transferToEffect = function(e, n, i) {
            var o = t.Vector3.Normalize(this.direction);
            e.setFloat4(n, o.x, o.y, o.z, 0), e.setColor3(i, this.groundColor.scale(this.intensity))
        }, n.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = t.Matrix.Identity()), this._worldMatrix
        }, n
    }(t.Light);
    t.HemisphericLight = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i) {
            e.call(this, t, i), this.direction = n, this.position = n.scale(-1)
        }
        return __extends(n, e), n.prototype.setDirectionToTarget = function(e) {
            return this.direction = t.Vector3.Normalize(e.subtract(this.position)), this.direction
        }, n.prototype._computeTransformedPosition = function() {
            return this.parent && this.parent.getWorldMatrix ? (this._transformedPosition || (this._transformedPosition = t.Vector3.Zero()), t.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._transformedPosition), !0) : !1
        }, n.prototype.transferToEffect = function(e, n) {
            return this.parent && this.parent.getWorldMatrix ? (this._transformedDirection || (this._transformedDirection = t.Vector3.Zero()), t.Vector3.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this._transformedDirection), void e.setFloat4(n, this._transformedDirection.x, this._transformedDirection.y, this._transformedDirection.z, 1)) : void e.setFloat4(n, this.direction.x, this.direction.y, this.direction.z, 1)
        }, n.prototype._getWorldMatrix = function() {
            return this._worldMatrix || (this._worldMatrix = t.Matrix.Identity()), t.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this._worldMatrix
        }, n
    }(t.Light);
    t.DirectionalLight = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(n, i) {
            var o = this;
            this.filter = e.FILTER_VARIANCESHADOWMAP, this.usePoissonSampling = !1, this._darkness = 0, this._transparencyShadow = !1, this._viewMatrix = t.Matrix.Zero(), this._projectionMatrix = t.Matrix.Zero(), this._transformMatrix = t.Matrix.Zero(), this._worldViewProjection = t.Matrix.Zero(), this._light = i, this._scene = i.getScene(), i._shadowGenerator = this, this._shadowMap = new t.RenderTargetTexture(i.name + "_shadowMap", n, this._scene, !1), this._shadowMap.wrapU = t.Texture.CLAMP_ADDRESSMODE, this._shadowMap.wrapV = t.Texture.CLAMP_ADDRESSMODE, this._shadowMap.renderParticles = !1;
            var r = function(e) {
                var n = e.getRenderingMesh(), i = o._scene, r = i.getEngine();
                r.setState(e.getMaterial().backFaceCulling);
                var s = n._getInstancesRenderList(e._id);
                if (!s.mustReturn) {
                    var a = null !== r.getCaps().instancedArrays && null !== s.visibleInstances;
                    if (o.isReady(e, a)) {
                        r.enableEffect(o._effect), n._bind(e, o._effect, !1);
                        var l = e.getMaterial();
                        if (o._effect.setMatrix("viewProjection", o.getTransformMatrix()), l && l.needAlphaTesting()) {
                            var h = l.getAlphaTestTexture();
                            o._effect.setTexture("diffuseSampler", h), o._effect.setMatrix("diffuseMatrix", h.getTextureMatrix())
                        }
                        var c = n.skeleton && n.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && n.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind);
                        if (c && o._effect.setMatrices("mBones", n.skeleton.getTransformMatrices()), a)
                            n._renderWithInstances(e, !1, s, o._effect, r);
                        else if (s.renderSelf[e._id] && (o._effect.setMatrix("world", n.getWorldMatrix()), n._draw(e, !0)), s.visibleInstances[e._id])
                            for (var u = 0; u < s.visibleInstances[e._id].length; u++) {
                                var p = s.visibleInstances[e._id][u];
                                o._effect.setMatrix("world", p.getWorldMatrix()), n._draw(e, !0)
                            }
                    } else
                        o._shadowMap.resetRefreshCounter()
                        }
            };
            this._shadowMap.customRenderFunction = function(t, e, n) {
                var i;
                for (i = 0; i < t.length; i++)
                    r(t.data[i]);
                for (i = 0; i < e.length; i++)
                    r(e.data[i]);
                if (o._transparencyShadow)
                    for (i = 0; i < n.length; i++)
                        r(n.data[i])
                        }
        }
        return Object.defineProperty(e, "FILTER_NONE", {get: function() {
                                     return e._FILTER_NONE
                                     },enumerable: !0,configurable: !0}), Object.defineProperty(e, "FILTER_VARIANCESHADOWMAP", {get: function() {
                                                                                                return e._FILTER_VARIANCESHADOWMAP
                                                                                                },enumerable: !0,configurable: !0}), Object.defineProperty(e, "FILTER_POISSONSAMPLING", {get: function() {
                                                                                                                                                           return e._FILTER_POISSONSAMPLING
                                                                                                                                                           },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "useVarianceShadowMap", {get: function() {
                                                                                                                                                                                                                      return this.filter === e.FILTER_VARIANCESHADOWMAP
                                                                                                                                                                                                                      },set: function(t) {
                                                                                                                                                                                                                      this.filter = t ? e.FILTER_VARIANCESHADOWMAP : e.FILTER_NONE
                                                                                                                                                                                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "usePoissonSampling", {get: function() {
                                                                                                                                                                                                                                                                                 return this.filter === e.FILTER_POISSONSAMPLING
                                                                                                                                                                                                                                                                                 },set: function(t) {
                                                                                                                                                                                                                                                                                 this.filter = t ? e.FILTER_POISSONSAMPLING : e.FILTER_NONE
                                                                                                                                                                                                                                                                                 },enumerable: !0,configurable: !0}), e.prototype.isReady = function(e, n) {
            var i = [];
            this.useVarianceShadowMap && i.push("#define VSM");
            var o = [t.VertexBuffer.PositionKind], r = e.getMesh(), s = e.getMaterial();
            s && s.needAlphaTesting() && (i.push("#define ALPHATEST"), r.isVerticesDataPresent(t.VertexBuffer.UVKind) && (o.push(t.VertexBuffer.UVKind), i.push("#define UV1")), r.isVerticesDataPresent(t.VertexBuffer.UV2Kind) && (o.push(t.VertexBuffer.UV2Kind), i.push("#define UV2"))), r.skeleton && r.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && r.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind) && (o.push(t.VertexBuffer.MatricesIndicesKind), o.push(t.VertexBuffer.MatricesWeightsKind), i.push("#define BONES"), i.push("#define BonesPerMesh " + (r.skeleton.bones.length + 1))), n && (i.push("#define INSTANCES"), o.push("world0"), o.push("world1"), o.push("world2"), o.push("world3"));
            var a = i.join("\n");
            return this._cachedDefines != a && (this._cachedDefines = a, this._effect = this._scene.getEngine().createEffect("shadowMap", o, ["world", "mBones", "viewProjection", "diffuseMatrix"], ["diffuseSampler"], a)), this._effect.isReady()
        }, e.prototype.getShadowMap = function() {
            return this._shadowMap
        }, e.prototype.getLight = function() {
            return this._light
        }, e.prototype.getTransformMatrix = function() {
            var e = this._light.position, n = this._light.direction;
            if (this._light._computeTransformedPosition() && (e = this._light._transformedPosition), !(this._cachedPosition && this._cachedDirection && e.equals(this._cachedPosition) && n.equals(this._cachedDirection))) {
                this._cachedPosition = e.clone(), this._cachedDirection = n.clone();
                var i = this._scene.activeCamera;
                t.Matrix.LookAtLHToRef(e, this._light.position.add(n), t.Vector3.Up(), this._viewMatrix), t.Matrix.PerspectiveFovLHToRef(Math.PI / 2, 1, i.minZ, i.maxZ, this._projectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix)
            }
            return this._transformMatrix
        }, e.prototype.getDarkness = function() {
            return this._darkness
        }, e.prototype.setDarkness = function(t) {
            this._darkness = t >= 1 ? 1 : 0 >= t ? 0 : t
        }, e.prototype.setTransparencyShadow = function(t) {
            this._transparencyShadow = t
        }, e.prototype.dispose = function() {
            this._shadowMap.dispose()
        }, e._FILTER_NONE = 0, e._FILTER_VARIANCESHADOWMAP = 1, e._FILTER_POISSONSAMPLING = 2, e
    }();
    t.ShadowGenerator = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function(t, e, n, i) {
        return t.x > n.x + i ? !1 : n.x - i > e.x ? !1 : t.y > n.y + i ? !1 : n.y - i > e.y ? !1 : t.z > n.z + i ? !1 : n.z - i > e.z ? !1 : !0
    }, n = function(t, e, n, i) {
        var o = e * e - 4 * t * n, r = {root: 0,found: !1};
        if (0 > o)
            return r;
        var s = Math.sqrt(o), a = (-e - s) / (2 * t), l = (-e + s) / (2 * t);
        if (a > l) {
            var h = l;
            l = a, a = h
        }
        return a > 0 && i > a ? (r.root = a, r.found = !0, r) : l > 0 && i > l ? (r.root = l, r.found = !0, r) : r
    }, i = function() {
        function i() {
            this.radius = new t.Vector3(1, 1, 1), this.retry = 0, this.basePointWorld = t.Vector3.Zero(), this.velocityWorld = t.Vector3.Zero(), this.normalizedVelocity = t.Vector3.Zero(), this._collisionPoint = t.Vector3.Zero(), this._planeIntersectionPoint = t.Vector3.Zero(), this._tempVector = t.Vector3.Zero(), this._tempVector2 = t.Vector3.Zero(), this._tempVector3 = t.Vector3.Zero(), this._tempVector4 = t.Vector3.Zero(), this._edge = t.Vector3.Zero(), this._baseToVertex = t.Vector3.Zero(), this._destinationPoint = t.Vector3.Zero(), this._slidePlaneNormal = t.Vector3.Zero(), this._displacementVector = t.Vector3.Zero()
        }
        return i.prototype._initialize = function(e, n, i) {
            this.velocity = n, t.Vector3.NormalizeToRef(n, this.normalizedVelocity), this.basePoint = e, e.multiplyToRef(this.radius, this.basePointWorld), n.multiplyToRef(this.radius, this.velocityWorld), this.velocityWorldLength = this.velocityWorld.length(), this.epsilon = i, this.collisionFound = !1
        }, i.prototype._checkPointInTriangle = function(e, n, i, o, r) {
            n.subtractToRef(e, this._tempVector), i.subtractToRef(e, this._tempVector2), t.Vector3.CrossToRef(this._tempVector, this._tempVector2, this._tempVector4);
            var s = t.Vector3.Dot(this._tempVector4, r);
            return 0 > s ? !1 : (o.subtractToRef(e, this._tempVector3), t.Vector3.CrossToRef(this._tempVector2, this._tempVector3, this._tempVector4), s = t.Vector3.Dot(this._tempVector4, r), 0 > s ? !1 : (t.Vector3.CrossToRef(this._tempVector3, this._tempVector, this._tempVector4), s = t.Vector3.Dot(this._tempVector4, r), s >= 0))
        }, i.prototype._canDoCollision = function(n, i, o, r) {
            var s = t.Vector3.Distance(this.basePointWorld, n), a = Math.max(this.radius.x, this.radius.y, this.radius.z);
            return s > this.velocityWorldLength + a + i ? !1 : e(o, r, this.basePointWorld, this.velocityWorldLength + a) ? !0 : !1
        }, i.prototype._testTriangle = function(e, i, o, r, s) {
            var a, l = !1;
            i._trianglePlanes || (i._trianglePlanes = []), i._trianglePlanes[e] || (i._trianglePlanes[e] = new t.Plane(0, 0, 0, 0), i._trianglePlanes[e].copyFromPoints(o, r, s));
            var h = i._trianglePlanes[e];
            if (i.getMaterial() || h.isFrontFacingTo(this.normalizedVelocity, 0)) {
                var c = h.signedDistanceTo(this.basePoint), u = t.Vector3.Dot(h.normal, this.velocity);
                if (0 == u) {
                    if (Math.abs(c) >= 1)
                        return;
                    l = !0, a = 0
                } else {
                    a = (-1 - c) / u;
                    var p = (1 - c) / u;
                    if (a > p) {
                        var d = p;
                        p = a, a = d
                    }
                    if (a > 1 || 0 > p)
                        return;
                    0 > a && (a = 0), a > 1 && (a = 1)
                }
                this._collisionPoint.copyFromFloats(0, 0, 0);
                var m = !1, g = 1;
                if (l || (this.basePoint.subtractToRef(h.normal, this._planeIntersectionPoint), this.velocity.scaleToRef(a, this._tempVector), this._planeIntersectionPoint.addInPlace(this._tempVector), this._checkPointInTriangle(this._planeIntersectionPoint, o, r, s, h.normal) && (m = !0, g = a, this._collisionPoint.copyFrom(this._planeIntersectionPoint))), !m) {
                    var f = this.velocity.lengthSquared(), y = f;
                    this.basePoint.subtractToRef(o, this._tempVector);
                    var _ = 2 * t.Vector3.Dot(this.velocity, this._tempVector), v = this._tempVector.lengthSquared() - 1, b = n(y, _, v, g);
                    b.found && (g = b.root, m = !0, this._collisionPoint.copyFrom(o)), this.basePoint.subtractToRef(r, this._tempVector), _ = 2 * t.Vector3.Dot(this.velocity, this._tempVector), v = this._tempVector.lengthSquared() - 1, b = n(y, _, v, g), b.found && (g = b.root, m = !0, this._collisionPoint.copyFrom(r)), this.basePoint.subtractToRef(s, this._tempVector), _ = 2 * t.Vector3.Dot(this.velocity, this._tempVector), v = this._tempVector.lengthSquared() - 1, b = n(y, _, v, g), b.found && (g = b.root, m = !0, this._collisionPoint.copyFrom(s)), r.subtractToRef(o, this._edge), o.subtractToRef(this.basePoint, this._baseToVertex);
                    var w = this._edge.lengthSquared(), x = t.Vector3.Dot(this._edge, this.velocity), C = t.Vector3.Dot(this._edge, this._baseToVertex);
                    if (y = w * -f + x * x, _ = 2 * w * t.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * x * C, v = w * (1 - this._baseToVertex.lengthSquared()) + C * C, b = n(y, _, v, g), b.found) {
                        var M = (x * b.root - C) / w;
                        M >= 0 && 1 >= M && (g = b.root, m = !0, this._edge.scaleInPlace(M), o.addToRef(this._edge, this._collisionPoint))
                    }
                    s.subtractToRef(r, this._edge), r.subtractToRef(this.basePoint, this._baseToVertex), w = this._edge.lengthSquared(), x = t.Vector3.Dot(this._edge, this.velocity), C = t.Vector3.Dot(this._edge, this._baseToVertex), y = w * -f + x * x, _ = 2 * w * t.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * x * C, v = w * (1 - this._baseToVertex.lengthSquared()) + C * C, b = n(y, _, v, g), b.found && (M = (x * b.root - C) / w, M >= 0 && 1 >= M && (g = b.root, m = !0, this._edge.scaleInPlace(M), r.addToRef(this._edge, this._collisionPoint))), o.subtractToRef(s, this._edge), s.subtractToRef(this.basePoint, this._baseToVertex), w = this._edge.lengthSquared(), x = t.Vector3.Dot(this._edge, this.velocity), C = t.Vector3.Dot(this._edge, this._baseToVertex), y = w * -f + x * x, _ = 2 * w * t.Vector3.Dot(this.velocity, this._baseToVertex) - 2 * x * C, v = w * (1 - this._baseToVertex.lengthSquared()) + C * C, b = n(y, _, v, g), b.found && (M = (x * b.root - C) / w, M >= 0 && 1 >= M && (g = b.root, m = !0, this._edge.scaleInPlace(M), s.addToRef(this._edge, this._collisionPoint)))
                }
                if (m) {
                    var D = g * this.velocity.length();
                    (!this.collisionFound || D < this.nearestDistance) && (this.intersectionPoint ? this.intersectionPoint.copyFrom(this._collisionPoint) : this.intersectionPoint = this._collisionPoint.clone(), this.nearestDistance = D, this.collisionFound = !0, this.collidedMesh = i.getMesh())
                }
            }
        }, i.prototype._collide = function(t, e, n, i, o, r) {
            for (var s = i; o > s; s += 3) {
                var a = e[n[s] - r], l = e[n[s + 1] - r], h = e[n[s + 2] - r];
                this._testTriangle(s, t, h, l, a)
            }
        }, i.prototype._getResponse = function(e, n) {
            e.addToRef(n, this._destinationPoint), n.scaleInPlace(this.nearestDistance / n.length()), this.basePoint.addToRef(n, e), e.subtractToRef(this.intersectionPoint, this._slidePlaneNormal), this._slidePlaneNormal.normalize(), this._slidePlaneNormal.scaleToRef(this.epsilon, this._displacementVector), e.addInPlace(this._displacementVector), this.intersectionPoint.addInPlace(this._displacementVector), this._slidePlaneNormal.scaleInPlace(t.Plane.SignedDistanceToPlaneFromPositionAndNormal(this.intersectionPoint, this._slidePlaneNormal, this._destinationPoint)), this._destinationPoint.subtractInPlace(this._slidePlaneNormal), this._destinationPoint.subtractToRef(this.intersectionPoint, n)
        }, i
    }();
    t.Collider = i
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(i, o, r) {
            e.call(this, i, r), this.position = o, this.upVector = t.Vector3.Up(), this.orthoLeft = null, this.orthoRight = null, this.orthoBottom = null, this.orthoTop = null, this.fov = .8, this.minZ = .1, this.maxZ = 1e3, this.inertia = .9, this.mode = n.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new t.Viewport(0, 0, 1, 1), this.subCameras = [], this.layerMask = 4294967295, this._computedViewMatrix = t.Matrix.Identity(), this._projectionMatrix = new t.Matrix, this._postProcesses = new Array, this._postProcessesTakenIndices = [], r.cameras.push(this), r.activeCamera || (r.activeCamera = this)
        }
        return __extends(n, e), n.prototype._initCache = function() {
            e.prototype._initCache.call(this), this._cache.position = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }, n.prototype._updateCache = function(t) {
            t || e.prototype._updateCache.call(this);
            var n = this.getEngine();
            this._cache.position.copyFrom(this.position), this._cache.upVector.copyFrom(this.upVector), this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = this.maxZ, this._cache.fov = this.fov, this._cache.aspectRatio = n.getAspectRatio(this), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.renderWidth = n.getRenderWidth(), this._cache.renderHeight = n.getRenderHeight()
        }, n.prototype._updateFromScene = function() {
            this.updateCache(), this._update()
        }, n.prototype._isSynchronized = function() {
            return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }, n.prototype._isSynchronizedViewMatrix = function() {
            return e.prototype._isSynchronized.call(this) ? this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent() : !1
        }, n.prototype._isSynchronizedProjectionMatrix = function() {
            var e = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === this.maxZ;
            if (!e)
                return !1;
            var n = this.getEngine();
            return e = this.mode === t.Camera.PERSPECTIVE_CAMERA ? this._cache.fov === this.fov && this._cache.aspectRatio === n.getAspectRatio(this) : this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === n.getRenderWidth() && this._cache.renderHeight === n.getRenderHeight()
        }, n.prototype.attachControl = function() {
        }, n.prototype.detachControl = function() {
        }, n.prototype._update = function() {
        }, n.prototype.attachPostProcess = function(e, n) {
            if ("undefined" == typeof n && (n = null), !e.isReusable() && this._postProcesses.indexOf(e) > -1)
                return t.Tools.Error("You're trying to reuse a post process not defined as reusable."), 0;
            if (null == n || 0 > n)
                return this._postProcesses.push(e), this._postProcessesTakenIndices.push(this._postProcesses.length - 1), this._postProcesses.length - 1;
            var i = 0;
            if (this._postProcesses[n]) {
                for (var o = this._postProcesses.length - 1, r = o; r >= n + 1; --r)
                    this._postProcesses[r + 1] = this._postProcesses[r];
                i = 1
            }
            for (r = 0; r < this._postProcessesTakenIndices.length; ++r)
                if (!(this._postProcessesTakenIndices[r] < n)) {
                    o = this._postProcessesTakenIndices.length - 1;
                    for (var s = o; s >= r; --s)
                        this._postProcessesTakenIndices[s + 1] = this._postProcessesTakenIndices[s] + i;
                    this._postProcessesTakenIndices[r] = n;
                    break
                }
            i || -1 != this._postProcessesTakenIndices.indexOf(n) || this._postProcessesTakenIndices.push(n);
            var a = n + i;
            return this._postProcesses[a] = e, a
        }, n.prototype.detachPostProcess = function(t, e) {
            "undefined" == typeof e && (e = null);
            var n = [];
            if (e)
                for (e = e instanceof Array ? e : [e], r = 0; r < e.length; r++) {
                    var i = this._postProcesses[e[r]];
                    i === t ? (delete this._postProcesses[e[r]], s = this._postProcessesTakenIndices.indexOf(e[r]), this._postProcessesTakenIndices.splice(s, 1)) : n.push(r)
                }
            else
                for (var o = this._postProcesses.length, r = 0; o > r; r++)
                    if (this._postProcesses[r] === t) {
                        delete this._postProcesses[r];
                        var s = this._postProcessesTakenIndices.indexOf(r);
                        this._postProcessesTakenIndices.splice(s, 1)
                    }
            return n
        }, n.prototype.getWorldMatrix = function() {
            this._worldMatrix || (this._worldMatrix = t.Matrix.Identity());
            var e = this.getViewMatrix();
            return e.invertToRef(this._worldMatrix), this._worldMatrix
        }, n.prototype._getViewMatrix = function() {
            return t.Matrix.Identity()
        }, n.prototype.getViewMatrix = function() {
            return this._computedViewMatrix = this._computeViewMatrix(), this.parent && this.parent.getWorldMatrix && !this.isSynchronized() ? (this._worldMatrix || (this._worldMatrix = t.Matrix.Identity()), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._computedViewMatrix), this._computedViewMatrix.invert(), this._currentRenderId = this.getScene().getRenderId(), this._computedViewMatrix) : this._computedViewMatrix
        }, n.prototype._computeViewMatrix = function(t) {
            return !t && this._isSynchronizedViewMatrix() ? this._computedViewMatrix : (this._computedViewMatrix = this._getViewMatrix(), this.parent && this.parent.getWorldMatrix || (this._currentRenderId = this.getScene().getRenderId()), this._computedViewMatrix)
        }, n.prototype.getProjectionMatrix = function(e) {
            if (!e && this._isSynchronizedProjectionMatrix())
                return this._projectionMatrix;
            var n = this.getEngine();
            if (this.mode === t.Camera.PERSPECTIVE_CAMERA)
                return this.minZ <= 0 && (this.minZ = .1), t.Matrix.PerspectiveFovLHToRef(this.fov, n.getAspectRatio(this), this.minZ, this.maxZ, this._projectionMatrix), this._projectionMatrix;
            var i = n.getRenderWidth() / 2, o = n.getRenderHeight() / 2;
            return t.Matrix.OrthoOffCenterLHToRef(this.orthoLeft || -i, this.orthoRight || i, this.orthoBottom || -o, this.orthoTop || o, this.minZ, this.maxZ, this._projectionMatrix), this._projectionMatrix
        }, n.prototype.dispose = function() {
            var t = this.getScene().cameras.indexOf(this);
            this.getScene().cameras.splice(t, 1);
            for (var e = 0; e < this._postProcessesTakenIndices.length; ++e)
                this._postProcesses[this._postProcessesTakenIndices[e]].dispose(this)
                }, n.PERSPECTIVE_CAMERA = 0, n.ORTHOGRAPHIC_CAMERA = 1, n
    }(t.Node);
    t.Camera = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o) {
            e.call(this, n, i, o), this.cameraDirection = new t.Vector3(0, 0, 0), this.cameraRotation = new t.Vector2(0, 0), this.rotation = new t.Vector3(0, 0, 0), this.ellipsoid = new t.Vector3(.5, 1, .5), this.keysUp = [38], this.keysDown = [40], this.keysLeft = [37], this.keysRight = [39], this.speed = 2, this.checkCollisions = !1, this.applyGravity = !1, this.noRotationConstraint = !1, this.angularSensibility = 2e3, this.lockedTarget = null, this.onCollide = null, this._keys = [], this._collider = new t.Collider, this._needMoveForGravity = !0, this._currentTarget = t.Vector3.Zero(), this._viewMatrix = t.Matrix.Zero(), this._camMatrix = t.Matrix.Zero(), this._cameraTransformMatrix = t.Matrix.Zero(), this._cameraRotationMatrix = t.Matrix.Zero(), this._referencePoint = new t.Vector3(0, 0, 1), this._transformedReferencePoint = t.Vector3.Zero(), this._oldPosition = t.Vector3.Zero(), this._diffPosition = t.Vector3.Zero(), this._newPosition = t.Vector3.Zero(), this._lookAtTemp = t.Matrix.Zero(), this._tempMatrix = t.Matrix.Zero()
        }
        return __extends(n, e), n.prototype._getLockedTargetPosition = function() {
            return this.lockedTarget ? this.lockedTarget.position || this.lockedTarget : null
        }, n.prototype._initCache = function() {
            e.prototype._initCache.call(this), this._cache.lockedTarget = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, n.prototype._updateCache = function(t) {
            t || e.prototype._updateCache.call(this);
            var n = this._getLockedTargetPosition();
            n ? this._cache.lockedTarget ? this._cache.lockedTarget.copyFrom(n) : this._cache.lockedTarget = n.clone() : this._cache.lockedTarget = null, this._cache.rotation.copyFrom(this.rotation)
        }, n.prototype._isSynchronizedViewMatrix = function() {
            if (!e.prototype._isSynchronizedViewMatrix.call(this))
                return !1;
            var t = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(t) : !t) && this._cache.rotation.equals(this.rotation)
        }, n.prototype._computeLocalCameraSpeed = function() {
            return this.speed * (t.Tools.GetDeltaTime() / (10 * t.Tools.GetFps()))
        }, n.prototype.setTarget = function(e) {
            this.upVector.normalize(), t.Matrix.LookAtLHToRef(this.position, e, this.upVector, this._camMatrix), this._camMatrix.invert(), this.rotation.x = Math.atan(this._camMatrix.m[6] / this._camMatrix.m[10]);
            var n = e.subtract(this.position);
            this.rotation.y = n.x >= 0 ? -Math.atan(n.z / n.x) + Math.PI / 2 : -Math.atan(n.z / n.x) - Math.PI / 2, this.rotation.z = -Math.acos(t.Vector3.Dot(new t.Vector3(0, 1, 0), this.upVector)), isNaN(this.rotation.x) && (this.rotation.x = 0), isNaN(this.rotation.y) && (this.rotation.y = 0), isNaN(this.rotation.z) && (this.rotation.z = 0)
        }, n.prototype.getTarget = function() {
            return this._currentTarget
        }, n.prototype.attachControl = function(e, n) {
            var i, o = this, r = this.getEngine();
            this._attachedElement || (this._attachedElement = e, void 0 === this._onMouseDown && (this._onMouseDown = function(t) {
                                                                                                  i = {x: t.clientX,y: t.clientY}, n || t.preventDefault()
                                                                                                  }, this._onMouseUp = function(t) {
                                                                                                  i = null, n || t.preventDefault()
                                                                                                  }, this._onMouseOut = function(t) {
                                                                                                  i = null, o._keys = [], n || t.preventDefault()
                                                                                                  }, this._onMouseMove = function(t) {
                                                                                                  if (i || r.isPointerLock) {
                                                                                                  var e, s;
                                                                                                  r.isPointerLock ? (e = t.movementX || t.mozMovementX || t.webkitMovementX || t.msMovementX || 0, s = t.movementY || t.mozMovementY || t.webkitMovementY || t.msMovementY || 0) : (e = t.clientX - i.x, s = t.clientY - i.y), o.cameraRotation.y += e / o.angularSensibility, o.cameraRotation.x += s / o.angularSensibility, i = {x: t.clientX,y: t.clientY}, n || t.preventDefault()
                                                                                                  }
                                                                                                  }, this._onKeyDown = function(t) {
                                                                                                  if (-1 !== o.keysUp.indexOf(t.keyCode) || -1 !== o.keysDown.indexOf(t.keyCode) || -1 !== o.keysLeft.indexOf(t.keyCode) || -1 !== o.keysRight.indexOf(t.keyCode)) {
                                                                                                  var e = o._keys.indexOf(t.keyCode);
                                                                                                  -1 === e && o._keys.push(t.keyCode), n || t.preventDefault()
                                                                                                  }
                                                                                                  }, this._onKeyUp = function(t) {
                                                                                                  if (-1 !== o.keysUp.indexOf(t.keyCode) || -1 !== o.keysDown.indexOf(t.keyCode) || -1 !== o.keysLeft.indexOf(t.keyCode) || -1 !== o.keysRight.indexOf(t.keyCode)) {
                                                                                                  var e = o._keys.indexOf(t.keyCode);
                                                                                                  e >= 0 && o._keys.splice(e, 1), n || t.preventDefault()
                                                                                                  }
                                                                                                  }, this._onLostFocus = function() {
                                                                                                  o._keys = []
                                                                                                  }, this._reset = function() {
                                                                                                  o._keys = [], i = null, o.cameraDirection = new t.Vector3(0, 0, 0), o.cameraRotation = new t.Vector2(0, 0)
                                                                                                  }), e.addEventListener("mousedown", this._onMouseDown, !1), e.addEventListener("mouseup", this._onMouseUp, !1), e.addEventListener("mouseout", this._onMouseOut, !1), e.addEventListener("mousemove", this._onMouseMove, !1), t.Tools.RegisterTopRootEvents([{name: "keydown",handler: this._onKeyDown}, {name: "keyup",handler: this._onKeyUp}, {name: "blur",handler: this._onLostFocus}]))
        }, n.prototype.detachControl = function(e) {
            this._attachedElement == e && (e.removeEventListener("mousedown", this._onMouseDown), e.removeEventListener("mouseup", this._onMouseUp), e.removeEventListener("mouseout", this._onMouseOut), e.removeEventListener("mousemove", this._onMouseMove), t.Tools.UnregisterTopRootEvents([{name: "keydown",handler: this._onKeyDown}, {name: "keyup",handler: this._onKeyUp}, {name: "blur",handler: this._onLostFocus}]), this._attachedElement = null, this._reset && this._reset())
        }, n.prototype._collideWithWorld = function(e) {
            var n;
            n = this.parent ? t.Vector3.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, n.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._collider.radius = this.ellipsoid, this.getScene()._getNewPosition(this._oldPosition, e, this._collider, 3, this._newPosition), this._newPosition.subtractToRef(this._oldPosition, this._diffPosition), this._diffPosition.length() > t.Engine.CollisionsEpsilon && (this.position.addInPlace(this._diffPosition), this.onCollide && this.onCollide(this._collider.collidedMesh))
        }, n.prototype._checkInputs = function() {
            this._localDirection || (this._localDirection = t.Vector3.Zero(), this._transformedDirection = t.Vector3.Zero());
            for (var e = 0; e < this._keys.length; e++) {
                var n = this._keys[e], i = this._computeLocalCameraSpeed();
                -1 !== this.keysLeft.indexOf(n) ? this._localDirection.copyFromFloats(-i, 0, 0) : -1 !== this.keysUp.indexOf(n) ? this._localDirection.copyFromFloats(0, 0, i) : -1 !== this.keysRight.indexOf(n) ? this._localDirection.copyFromFloats(i, 0, 0) : -1 !== this.keysDown.indexOf(n) && this._localDirection.copyFromFloats(0, 0, -i), this.getViewMatrix().invertToRef(this._cameraTransformMatrix), t.Vector3.TransformNormalToRef(this._localDirection, this._cameraTransformMatrix, this._transformedDirection), this.cameraDirection.addInPlace(this._transformedDirection)
            }
        }, n.prototype._update = function() {
            this._checkInputs();
            var e = this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0, n = Math.abs(this.cameraRotation.x) > 0 || Math.abs(this.cameraRotation.y) > 0;
            if (e)
                if (this.checkCollisions && this.getScene().collisionsEnabled) {
                    if (this._collideWithWorld(this.cameraDirection), this.applyGravity) {
                        var i = this.position;
                        this._collideWithWorld(this.getScene().gravity), this._needMoveForGravity = 0 != t.Vector3.DistanceSquared(i, this.position)
                    }
                } else
                    this.position.addInPlace(this.cameraDirection);
            if (n && (this.rotation.x += this.cameraRotation.x, this.rotation.y += this.cameraRotation.y, !this.noRotationConstraint)) {
                var o = Math.PI / 2 * .95;
                this.rotation.x > o && (this.rotation.x = o), this.rotation.x < -o && (this.rotation.x = -o)
            }
            e && (Math.abs(this.cameraDirection.x) < t.Engine.Epsilon && (this.cameraDirection.x = 0), Math.abs(this.cameraDirection.y) < t.Engine.Epsilon && (this.cameraDirection.y = 0), Math.abs(this.cameraDirection.z) < t.Engine.Epsilon && (this.cameraDirection.z = 0), this.cameraDirection.scaleInPlace(this.inertia)), n && (Math.abs(this.cameraRotation.x) < t.Engine.Epsilon && (this.cameraRotation.x = 0), Math.abs(this.cameraRotation.y) < t.Engine.Epsilon && (this.cameraRotation.y = 0), this.cameraRotation.scaleInPlace(this.inertia))
        }, n.prototype._getViewMatrix = function() {
            return this.lockedTarget ? this._currentTarget.copyFrom(this._getLockedTargetPosition()) : (0 != this.upVector.x || 1 != this.upVector.y || 0 != this.upVector.z ? (t.Matrix.LookAtLHToRef(t.Vector3.Zero(), this._referencePoint, this.upVector, this._lookAtTemp), t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), this._lookAtTemp.multiplyToRef(this._cameraRotationMatrix, this._tempMatrix), this._lookAtTemp.invert(), this._tempMatrix.multiplyToRef(this._lookAtTemp, this._cameraRotationMatrix)) : t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), t.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget)), t.Matrix.LookAtLHToRef(this.position, this._currentTarget, this.upVector, this._viewMatrix), this._viewMatrix
        }, n
    }(t.Camera);
    t.FreeCamera = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i) {
            e.call(this, t, n, i), this._offsetX = null, this._offsetY = null, this._pointerCount = 0, this._pointerPressed = [], this.angularSensibility = 2e5, this.moveSensibility = 500
        }
        return __extends(n, e), n.prototype.attachControl = function(e, n) {
            var i, o = this;
            this._attachedCanvas || (this._attachedCanvas = e, void 0 === this._onPointerDown && (this._onPointerDown = function(t) {
                                                                                                  n || t.preventDefault(), o._pointerPressed.push(t.pointerId), 1 === o._pointerPressed.length && (i = {x: t.clientX,y: t.clientY})
                                                                                                  }, this._onPointerUp = function(t) {
                                                                                                  n || t.preventDefault();
                                                                                                  var e = o._pointerPressed.indexOf(t.pointerId);
                                                                                                  -1 !== e && (o._pointerPressed.splice(e, 1), 0 == e && (i = null, o._offsetX = null, o._offsetY = null))
                                                                                                  }, this._onPointerMove = function(t) {
                                                                                                  if (n || t.preventDefault(), i) {
                                                                                                  var e = o._pointerPressed.indexOf(t.pointerId);
                                                                                                  0 == e && (o._offsetX = t.clientX - i.x, o._offsetY = -(t.clientY - i.y))
                                                                                                  }
                                                                                                  }, this._onLostFocus = function() {
                                                                                                  o._offsetX = null, o._offsetY = null
                                                                                                  }), e.addEventListener("pointerdown", this._onPointerDown), e.addEventListener("pointerup", this._onPointerUp), e.addEventListener("pointerout", this._onPointerUp), e.addEventListener("pointermove", this._onPointerMove), t.Tools.RegisterTopRootEvents([{name: "blur",handler: this._onLostFocus}]))
        }, n.prototype.detachControl = function(e) {
            this._attachedCanvas == e && (e.removeEventListener("pointerdown", this._onPointerDown), e.removeEventListener("pointerup", this._onPointerUp), e.removeEventListener("pointerout", this._onPointerUp), e.removeEventListener("pointermove", this._onPointerMove), t.Tools.UnregisterTopRootEvents([{name: "blur",handler: this._onLostFocus}]), this._attachedCanvas = null)
        }, n.prototype._checkInputs = function() {
            if (this._offsetX)
                if (this.cameraRotation.y += this._offsetX / this.angularSensibility, this._pointerPressed.length > 1)
                    this.cameraRotation.x += -this._offsetY / this.angularSensibility;
                else {
                    var e = this._computeLocalCameraSpeed(), n = new t.Vector3(0, 0, e * this._offsetY / this.moveSensibility);
                    t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix), this.cameraDirection.addInPlace(t.Vector3.TransformCoordinates(n, this._cameraRotationMatrix))
                }
        }, n
    }(t.FreeCamera);
    t.TouchCamera = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = t.Tools.GetPointerPrefix(), n = function(n) {
        function i(e, i, o, r, s, a) {
            n.call(this, e, t.Vector3.Zero(), a), this.alpha = i, this.beta = o, this.radius = r, this.target = s, this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.lowerAlphaLimit = null, this.upperAlphaLimit = null, this.lowerBetaLimit = .01, this.upperBetaLimit = Math.PI, this.lowerRadiusLimit = null, this.upperRadiusLimit = null, this.angularSensibility = 1e3, this.wheelPrecision = 3, this.keysUp = [38], this.keysDown = [40], this.keysLeft = [37], this.keysRight = [39], this.zoomOnFactor = 1, this._keys = [], this._viewMatrix = new t.Matrix, this.getViewMatrix()
        }
        return __extends(i, n), i.prototype._getTargetPosition = function() {
            return this.target.position || this.target
        }, i.prototype._initCache = function() {
            n.prototype._initCache.call(this), this._cache.target = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0
        }, i.prototype._updateCache = function(t) {
            t || n.prototype._updateCache.call(this), this._cache.target.copyFrom(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius
        }, i.prototype._isSynchronizedViewMatrix = function() {
            return n.prototype._isSynchronizedViewMatrix.call(this) ? this._cache.target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius : !1
        }, i.prototype.attachControl = function(n, i) {
            var o, r, s = this;
            if (!this._attachedElement) {
                this._attachedElement = n;
                var a = this.getEngine();
                void 0 === this._onPointerDown && (this._onPointerDown = function(t) {
                                                   r || (r = t.pointerId, o = {x: t.clientX,y: t.clientY}, i || t.preventDefault())
                                                   }, this._onPointerUp = function(t) {
                                                   o = null, r = null, i || t.preventDefault()
                                                   }, this._onPointerMove = function(t) {
                                                   if (o && r === t.pointerId) {
                                                   var e = t.clientX - o.x, n = t.clientY - o.y;
                                                   s.inertialAlphaOffset -= e / s.angularSensibility, s.inertialBetaOffset -= n / s.angularSensibility, o = {x: t.clientX,y: t.clientY}, i || t.preventDefault()
                                                   }
                                                   }, this._onMouseMove = function(t) {
                                                   if (a.isPointerLock) {
                                                   var e = t.movementX || t.mozMovementX || t.webkitMovementX || t.msMovementX || 0, n = t.movementY || t.mozMovementY || t.webkitMovementY || t.msMovementY || 0;
                                                   s.inertialAlphaOffset -= e / s.angularSensibility, s.inertialBetaOffset -= n / s.angularSensibility, i || t.preventDefault()
                                                   }
                                                   }, this._wheel = function(t) {
                                                   var e = 0;
                                                   t.wheelDelta ? e = t.wheelDelta / (40 * s.wheelPrecision) : t.detail && (e = -t.detail / s.wheelPrecision), e && (s.inertialRadiusOffset += e), t.preventDefault && (i || t.preventDefault())
                                                   }, this._onKeyDown = function(t) {
                                                   if (-1 !== s.keysUp.indexOf(t.keyCode) || -1 !== s.keysDown.indexOf(t.keyCode) || -1 !== s.keysLeft.indexOf(t.keyCode) || -1 !== s.keysRight.indexOf(t.keyCode)) {
                                                   var e = s._keys.indexOf(t.keyCode);
                                                   -1 === e && s._keys.push(t.keyCode), t.preventDefault && (i || t.preventDefault())
                                                   }
                                                   }, this._onKeyUp = function(t) {
                                                   if (-1 !== s.keysUp.indexOf(t.keyCode) || -1 !== s.keysDown.indexOf(t.keyCode) || -1 !== s.keysLeft.indexOf(t.keyCode) || -1 !== s.keysRight.indexOf(t.keyCode)) {
                                                   var e = s._keys.indexOf(t.keyCode);
                                                   e >= 0 && s._keys.splice(e, 1), t.preventDefault && (i || t.preventDefault())
                                                   }
                                                   }, this._onLostFocus = function() {
                                                   s._keys = [], r = null
                                                   }, this._onGestureStart = function(t) {
                                                   void 0 !== window.MSGesture && (s._MSGestureHandler || (s._MSGestureHandler = new MSGesture, s._MSGestureHandler.target = n), s._MSGestureHandler.addPointer(t.pointerId))
                                                   }, this._onGesture = function(t) {
                                                   s.radius *= t.scale, t.preventDefault && (i || (t.stopPropagation(), t.preventDefault()))
                                                   }, this._reset = function() {
                                                   s._keys = [], s.inertialAlphaOffset = 0, s.inertialBetaOffset = 0, s.inertialRadiusOffset = 0, o = null, r = null
                                                   }), n.addEventListener(e + "down", this._onPointerDown, !1), n.addEventListener(e + "up", this._onPointerUp, !1), n.addEventListener(e + "out", this._onPointerUp, !1), n.addEventListener(e + "move", this._onPointerMove, !1), n.addEventListener("mousemove", this._onMouseMove, !1), n.addEventListener("MSPointerDown", this._onGestureStart, !1), n.addEventListener("MSGestureChange", this._onGesture, !1), n.addEventListener("mousewheel", this._wheel, !1), n.addEventListener("DOMMouseScroll", this._wheel, !1), t.Tools.RegisterTopRootEvents([{name: "keydown",handler: this._onKeyDown}, {name: "keyup",handler: this._onKeyUp}, {name: "blur",handler: this._onLostFocus}])
            }
        }, i.prototype.detachControl = function(n) {
            this._attachedElement == n && (n.removeEventListener(e + "down", this._onPointerDown), n.removeEventListener(e + "up", this._onPointerUp), n.removeEventListener(e + "out", this._onPointerUp), n.removeEventListener(e + "move", this._onPointerMove), n.removeEventListener("mousemove", this._onMouseMove), n.removeEventListener("MSPointerDown", this._onGestureStart), n.removeEventListener("MSGestureChange", this._onGesture), n.removeEventListener("mousewheel", this._wheel), n.removeEventListener("DOMMouseScroll", this._wheel), t.Tools.UnregisterTopRootEvents([{name: "keydown",handler: this._onKeyDown}, {name: "keyup",handler: this._onKeyUp}, {name: "blur",handler: this._onLostFocus}]), this._MSGestureHandler = null, this._attachedElement = null, this._reset && this._reset())
        }, i.prototype._update = function() {
            for (var e = 0; e < this._keys.length; e++) {
                var n = this._keys[e];
                -1 !== this.keysLeft.indexOf(n) ? this.inertialAlphaOffset -= .01 : -1 !== this.keysUp.indexOf(n) ? this.inertialBetaOffset -= .01 : -1 !== this.keysRight.indexOf(n) ? this.inertialAlphaOffset += .01 : -1 !== this.keysDown.indexOf(n) && (this.inertialBetaOffset += .01)
            }
            (0 != this.inertialAlphaOffset || 0 != this.inertialBetaOffset || 0 != this.inertialRadiusOffset) && (this.alpha += this.inertialAlphaOffset, this.beta += this.inertialBetaOffset, this.radius -= this.inertialRadiusOffset, this.inertialAlphaOffset *= this.inertia, this.inertialBetaOffset *= this.inertia, this.inertialRadiusOffset *= this.inertia, Math.abs(this.inertialAlphaOffset) < t.Engine.Epsilon && (this.inertialAlphaOffset = 0), Math.abs(this.inertialBetaOffset) < t.Engine.Epsilon && (this.inertialBetaOffset = 0), Math.abs(this.inertialRadiusOffset) < t.Engine.Epsilon && (this.inertialRadiusOffset = 0)), this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit && (this.alpha = this.lowerAlphaLimit), this.upperAlphaLimit && this.alpha > this.upperAlphaLimit && (this.alpha = this.upperAlphaLimit), this.lowerBetaLimit && this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), this.upperBetaLimit && this.beta > this.upperBetaLimit && (this.beta = this.upperBetaLimit), this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit && (this.radius = this.lowerRadiusLimit), this.upperRadiusLimit && this.radius > this.upperRadiusLimit && (this.radius = this.upperRadiusLimit)
        }, i.prototype.setPosition = function(t) {
            var e = t.subtract(this._getTargetPosition());
            this.radius = e.length(), this.alpha = Math.acos(e.x / Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.z, 2))), e.z < 0 && (this.alpha = 2 * Math.PI - this.alpha), this.beta = Math.acos(e.y / this.radius)
        }, i.prototype._getViewMatrix = function() {
            var e = Math.cos(this.alpha), n = Math.sin(this.alpha), i = Math.cos(this.beta), o = Math.sin(this.beta), r = this._getTargetPosition();
            return r.addToRef(new t.Vector3(this.radius * e * o, this.radius * i, this.radius * n * o), this.position), t.Matrix.LookAtLHToRef(this.position, r, this.upVector, this._viewMatrix), this._viewMatrix
        }, i.prototype.zoomOn = function(e) {
            e = e || this.getScene().meshes;
            var n = t.Mesh.MinMax(e), i = t.Vector3.Distance(n.min, n.max);
            this.radius = i * this.zoomOnFactor, this.focusOn({min: n.min,max: n.max,distance: i})
        }, i.prototype.focusOn = function(e) {
            var n, i;
            void 0 === e.min ? (n = e || this.getScene().meshes, n = t.Mesh.MinMax(n), i = t.Vector3.Distance(n.min, n.max)) : (n = e, i = e.distance), this.target = t.Mesh.Center(n), this.maxZ = 2 * i
        }, i
    }(t.Camera);
    t.ArcRotateCamera = n
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i) {
            var o = this;
            e.call(this, t, n, i), this._offsetX = null, this._offsetY = null, this._orientationGamma = 0, this._orientationBeta = 0, this._initialOrientationGamma = 0, this._initialOrientationBeta = 0, this.angularSensibility = 1e4, this.moveSensibility = 50, window.addEventListener("resize", function() {
                                                                                                                                                                                                                                                                                             o._initialOrientationGamma = null
                                                                                                                                                                                                                                                                                             }, !1)
        }
        return __extends(n, e), n.prototype.attachControl = function(t) {
            var e = this;
            this._attachedCanvas || (this._attachedCanvas = t, this._orientationChanged || (this._orientationChanged = function(t) {
                                                                                            e._initialOrientationGamma || (e._initialOrientationGamma = t.gamma, e._initialOrientationBeta = t.beta), e._orientationGamma = t.gamma, e._orientationBeta = t.beta, e._offsetY = e._initialOrientationBeta - e._orientationBeta, e._offsetX = e._initialOrientationGamma - e._orientationGamma
                                                                                            }), window.addEventListener("deviceorientation", this._orientationChanged))
        }, n.prototype.detachControl = function(t) {
            this._attachedCanvas == t && (window.removeEventListener("deviceorientation", this._orientationChanged), this._attachedCanvas = null, this._orientationGamma = 0, this._orientationBeta = 0, this._initialOrientationGamma = 0, this._initialOrientationBeta = 0)
        }, n.prototype._checkInputs = function() {
            if (this._offsetX) {
                this.cameraRotation.y -= this._offsetX / this.angularSensibility;
                var e = this._computeLocalCameraSpeed(), n = new t.Vector3(0, 0, e * this._offsetY / this.moveSensibility);
                t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix), this.cameraDirection.addInPlace(t.Vector3.TransformCoordinates(n, this._cameraRotationMatrix))
            }
        }, n
    }(t.FreeCamera);
    t.DeviceOrientationCamera = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t) {
            this._renderingGroups = new Array, this._scene = t
        }
        return e.prototype._renderParticles = function(t, e) {
            if (0 !== this._scene._activeParticleSystems.length) {
                for (var n = (new Date).getTime(), i = 0; i < this._scene._activeParticleSystems.length; i++) {
                    var o = this._scene._activeParticleSystems.data[i];
                    o.renderingGroupId === t && (this._clearDepthBuffer(), o.emitter.position && e && -1 === e.indexOf(o.emitter) || (this._scene._activeParticles += o.render()))
                }
                this._scene._particlesDuration += (new Date).getTime() - n
            }
        }, e.prototype._renderSprites = function(t) {
            if (0 !== this._scene.spriteManagers.length) {
                for (var e = (new Date).getTime(), n = 0; n < this._scene.spriteManagers.length; n++) {
                    var i = this._scene.spriteManagers[n];
                    i.renderingGroupId === t && (this._clearDepthBuffer(), i.render())
                }
                this._scene._spritesDuration += (new Date).getTime() - e
            }
        }, e.prototype._clearDepthBuffer = function() {
            this._depthBufferAlreadyCleaned || (this._scene.getEngine().clear(0, !1, !0), this._depthBufferAlreadyCleaned = !0)
        }, e.prototype.render = function(e, n, i, o) {
            for (var r = this, s = 0; s < t.RenderingManager.MAX_RENDERINGGROUPS; s++) {
                this._depthBufferAlreadyCleaned = !1;
                var a = this._renderingGroups[s];
                a ? (this._clearDepthBuffer(), a.render(e, function() {
                                                        o && r._renderSprites(s)
                                                        }) || this._renderingGroups.splice(s, 1)) : o && this._renderSprites(s), i && this._renderParticles(s, n)
            }
        }, e.prototype.reset = function() {
            for (var t in this._renderingGroups) {
                var e = this._renderingGroups[t];
                e.prepare()
            }
        }, e.prototype.dispatch = function(e) {
            var n = e.getMesh(), i = n.renderingGroupId || 0;
            this._renderingGroups[i] || (this._renderingGroups[i] = new t.RenderingGroup(i, this._scene)), this._renderingGroups[i].dispatch(e)
        }, e.MAX_RENDERINGGROUPS = 4, e
    }();
    t.RenderingManager = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n) {
            this.index = e, this._opaqueSubMeshes = new t.SmartArray(256), this._transparentSubMeshes = new t.SmartArray(256), this._alphaTestSubMeshes = new t.SmartArray(256), this._scene = n
        }
        return e.prototype.render = function(e, n) {
            if (e)
                return e(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, n), !0;
            if (0 === this._opaqueSubMeshes.length && 0 === this._alphaTestSubMeshes.length && 0 === this._transparentSubMeshes.length)
                return !1;
            var i, o, r = this._scene.getEngine();
            for (this._opaqueSubMeshes.sort(function(t, e) {
                                            return (t.category || 0) - (e.category || 0)
                                            }), i = 0; i < this._opaqueSubMeshes.length; i++)
                o = this._opaqueSubMeshes.data[i], this._activeVertices += o.verticesCount, o.render();
            for (r.setAlphaTesting(!0), i = 0; i < this._alphaTestSubMeshes.length; i++)
                o = this._alphaTestSubMeshes.data[i], this._activeVertices += o.verticesCount, o.render();
            if (r.setAlphaTesting(!1), n && n(), this._transparentSubMeshes.length) {
                for (i = 0; i < this._transparentSubMeshes.length; i++)
                    o = this._transparentSubMeshes.data[i], o._distanceToCamera = o.getBoundingInfo().boundingSphere.centerWorld.subtract(this._scene.activeCamera.position).length();
                var s = this._transparentSubMeshes.data.slice(0, this._transparentSubMeshes.length);
                for (s.sort(function(t, e) {
                            return t._distanceToCamera < e._distanceToCamera ? 1 : t._distanceToCamera > e._distanceToCamera ? -1 : 0
                            }), r.setAlphaMode(t.Engine.ALPHA_COMBINE), i = 0; i < s.length; i++)
                    o = s[i], this._activeVertices += o.verticesCount, o.render();
                r.setAlphaMode(t.Engine.ALPHA_DISABLE)
            }
            return !0
        }, e.prototype.prepare = function() {
            this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset()
        }, e.prototype.dispatch = function(t) {
            var e = t.getMaterial(), n = t.getMesh();
            e.needAlphaBlending() || n.visibility < 1 ? (e.alpha > 0 || n.visibility < 1) && this._transparentSubMeshes.push(t) : e.needAlphaTesting() ? this._alphaTestSubMeshes.push(t) : this._opaqueSubMeshes.push(t)
        }, e
    }();
    t.RenderingGroup = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e) {
            this.autoClear = !0, this.clearColor = new t.Color3(.2, .2, .3), this.ambientColor = new t.Color3(0, 0, 0), this.forceWireframe = !1, this.cameraToUseForPointers = null, this.fogMode = t.Scene.FOGMODE_NONE, this.fogColor = new t.Color3(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.lightsEnabled = !0, this.lights = new Array, this.cameras = new Array, this.activeCameras = new Array, this.meshes = new Array, this._geometries = new Array, this.materials = new Array, this.multiMaterials = new Array, this.defaultMaterial = new t.StandardMaterial("default material", this), this.texturesEnabled = !0, this.textures = new Array, this.particlesEnabled = !0, this.particleSystems = new Array, this.spriteManagers = new Array, this.layers = new Array, this.skeletons = new Array, this.lensFlareSystems = new Array, this.collisionsEnabled = !0, this.gravity = new t.Vector3(0, -9, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.customRenderTargets = new Array, this.importedMeshesFiles = new Array, this._actionManagers = new Array, this._meshesForIntersections = new t.SmartArray(256), this._totalVertices = 0, this._activeVertices = 0, this._activeParticles = 0, this._lastFrameDuration = 0, this._evaluateActiveMeshesDuration = 0, this._renderTargetsDuration = 0, this._particlesDuration = 0, this._renderDuration = 0, this._spritesDuration = 0, this._animationRatio = 0, this._renderId = 0, this._executeWhenReadyTimeoutId = -1, this._toBeDisposed = new t.SmartArray(256), this._onReadyCallbacks = new Array, this._pendingData = [], this._onBeforeRenderCallbacks = new Array, this._activeMeshes = new t.SmartArray(256), this._processedMaterials = new t.SmartArray(256), this._renderTargets = new t.SmartArray(256), this._activeParticleSystems = new t.SmartArray(256), this._activeSkeletons = new t.SmartArray(32), this._activeAnimatables = new Array, this._transformMatrix = t.Matrix.Zero(), this._scaledPosition = t.Vector3.Zero(), this._scaledVelocity = t.Vector3.Zero(), this._engine = e, e.scenes.push(this), this._renderingManager = new t.RenderingManager(this), this.postProcessManager = new t.PostProcessManager(this), this.postProcessRenderPipelineManager = new t.PostProcessRenderPipelineManager, this._boundingBoxRenderer = new t.BoundingBoxRenderer(this)
        }
        return Object.defineProperty(e.prototype, "meshUnderPointer", {get: function() {
                                     return this._meshUnderPointer
                                     },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "pointerX", {get: function() {
                                                                                                return this._pointerX
                                                                                                },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "pointerY", {get: function() {
                                                                                                                                                           return this._pointerY
                                                                                                                                                           },enumerable: !0,configurable: !0}), e.prototype.getBoundingBoxRenderer = function() {
            return this._boundingBoxRenderer
        }, e.prototype.getEngine = function() {
            return this._engine
        }, e.prototype.getTotalVertices = function() {
            return this._totalVertices
        }, e.prototype.getActiveVertices = function() {
            return this._activeVertices
        }, e.prototype.getActiveParticles = function() {
            return this._activeParticles
        }, e.prototype.getLastFrameDuration = function() {
            return this._lastFrameDuration
        }, e.prototype.getEvaluateActiveMeshesDuration = function() {
            return this._evaluateActiveMeshesDuration
        }, e.prototype.getActiveMeshes = function() {
            return this._activeMeshes
        }, e.prototype.getRenderTargetsDuration = function() {
            return this._renderTargetsDuration
        }, e.prototype.getRenderDuration = function() {
            return this._renderDuration
        }, e.prototype.getParticlesDuration = function() {
            return this._particlesDuration
        }, e.prototype.getSpritesDuration = function() {
            return this._spritesDuration
        }, e.prototype.getAnimationRatio = function() {
            return this._animationRatio
        }, e.prototype.getRenderId = function() {
            return this._renderId
        }, e.prototype._updatePointerPosition = function(t) {
            var e = this._engine.getRenderingCanvasClientRect();
            this._pointerX = t.clientX - e.left, this._pointerY = t.clientY - e.top, this.cameraToUseForPointers && (this._pointerX = this._pointerX - this.cameraToUseForPointers.viewport.x * this._engine.getRenderWidth(), this._pointerY = this._pointerY - this.cameraToUseForPointers.viewport.y * this._engine.getRenderHeight())
        }, e.prototype.attachControl = function() {
            var e = this;
            this._onPointerMove = function(t) {
                var n = e._engine.getRenderingCanvas();
                e._updatePointerPosition(t);
                var i = e.pick(e._pointerX, e._pointerY, function(t) {
                               return t.isPickable && t.isVisible && t.isReady() && t.actionManager && t.actionManager.hasPointerTriggers
                               }, !1, e.cameraToUseForPointers);
                i.hit ? (e.setPointerOverMesh(i.pickedMesh), n.style.cursor = "pointer", e._meshUnderPointer = i.pickedMesh) : (e.setPointerOverMesh(null), n.style.cursor = "", e._meshUnderPointer = null)
            }, this._onPointerDown = function(n) {
                var i = null;
                e.onPointerDown || (i = function(t) {
                                    return t.isPickable && t.isVisible && t.isReady() && t.actionManager && t.actionManager.hasPickTriggers
                                    }), e._updatePointerPosition(n);
                var o = e.pick(e._pointerX, e._pointerY, i, !1, e.cameraToUseForPointers);
                if (o.hit && o.pickedMesh.actionManager) {
                    switch (n.button) {
                        case 0:
                            o.pickedMesh.actionManager.processTrigger(t.ActionManager.OnLeftPickTrigger, t.ActionEvent.CreateNew(o.pickedMesh));
                            break;
                        case 1:
                            o.pickedMesh.actionManager.processTrigger(t.ActionManager.OnCenterPickTrigger, t.ActionEvent.CreateNew(o.pickedMesh));
                            break;
                        case 2:
                            o.pickedMesh.actionManager.processTrigger(t.ActionManager.OnRightPickTrigger, t.ActionEvent.CreateNew(o.pickedMesh))
                    }
                    o.pickedMesh.actionManager.processTrigger(t.ActionManager.OnPickTrigger, t.ActionEvent.CreateNew(o.pickedMesh))
                }
                e.onPointerDown && e.onPointerDown(n, o)
            };
            var n = t.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().addEventListener(n + "move", this._onPointerMove, !1), this._engine.getRenderingCanvas().addEventListener(n + "down", this._onPointerDown, !1)
        }, e.prototype.detachControl = function() {
            var e = t.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().removeEventListener(e + "move", this._onPointerMove), this._engine.getRenderingCanvas().removeEventListener(e + "down", this._onPointerDown)
        }, e.prototype.isReady = function() {
            if (this._pendingData.length > 0)
                return !1;
            for (var e = 0; e < this._geometries.length; e++) {
                var n = this._geometries[e];
                if (n.delayLoadState === t.Engine.DELAYLOADSTATE_LOADING)
                    return !1
                    }
            for (e = 0; e < this.meshes.length; e++) {
                var i = this.meshes[e];
                if (!i.isReady())
                    return !1;
                var o = i.material;
                if (o && !o.isReady(i))
                    return !1
                    }
            return !0
        }, e.prototype.registerBeforeRender = function(t) {
            this._onBeforeRenderCallbacks.push(t)
        }, e.prototype.unregisterBeforeRender = function(t) {
            var e = this._onBeforeRenderCallbacks.indexOf(t);
            e > -1 && this._onBeforeRenderCallbacks.splice(e, 1)
        }, e.prototype._addPendingData = function(t) {
            this._pendingData.push(t)
        }, e.prototype._removePendingData = function(t) {
            var e = this._pendingData.indexOf(t);
            -1 !== e && this._pendingData.splice(e, 1)
        }, e.prototype.getWaitingItemsCount = function() {
            return this._pendingData.length
        }, e.prototype.executeWhenReady = function(t) {
            var e = this;
            this._onReadyCallbacks.push(t), -1 === this._executeWhenReadyTimeoutId && (this._executeWhenReadyTimeoutId = setTimeout(function() {
                                                                                                                                    e._checkIsReady()
                                                                                                                                    }, 150))
        }, e.prototype._checkIsReady = function() {
            var t = this;
            return this.isReady() ? (this._onReadyCallbacks.forEach(function(t) {
                                                                    t()
                                                                    }), this._onReadyCallbacks = [], void (this._executeWhenReadyTimeoutId = -1)) : void (this._executeWhenReadyTimeoutId = setTimeout(function() {
                                                                                                                                                                                                       t._checkIsReady()
                                                                                                                                                                                                       }, 150))
        }, e.prototype.beginAnimation = function(e, n, i, o, r, s, a) {
            if (void 0 === r && (r = 1), this.stopAnimation(e), a || (a = new t.Animatable(this, e, n, i, o, r, s)), e.animations && a.appendAnimations(e, e.animations), e.getAnimatables)
                for (var l = e.getAnimatables(), h = 0; h < l.length; h++)
                    this.beginAnimation(l[h], n, i, o, r, s, a);
            return a
        }, e.prototype.beginDirectAnimation = function(e, n, i, o, r, s, a) {
            void 0 === s && (s = 1);
            var l = new t.Animatable(this, e, i, o, r, s, a, n);
            return l
        }, e.prototype.getAnimatableByTarget = function(t) {
            for (var e = 0; e < this._activeAnimatables.length; e++)
                if (this._activeAnimatables[e].target === t)
                    return this._activeAnimatables[e];
            return null
        }, e.prototype.stopAnimation = function(t) {
            var e = this.getAnimatableByTarget(t);
            e && e.stop()
        }, e.prototype._animate = function() {
            this._animationStartDate || (this._animationStartDate = (new Date).getTime());
            for (var t = (new Date).getTime(), e = t - this._animationStartDate, n = 0; n < this._activeAnimatables.length; n++)
                this._activeAnimatables[n]._animate(e) || (this._activeAnimatables.splice(n, 1), n--)
                }, e.prototype.getViewMatrix = function() {
                    return this._viewMatrix
                }, e.prototype.getProjectionMatrix = function() {
                    return this._projectionMatrix
                }, e.prototype.getTransformMatrix = function() {
                    return this._transformMatrix
                }, e.prototype.setTransformMatrix = function(t, e) {
                    this._viewMatrix = t, this._projectionMatrix = e, this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix)
                }, e.prototype.setActiveCameraByID = function(t) {
                    var e = this.getCameraByID(t);
                    return e ? (this.activeCamera = e, e) : null
                }, e.prototype.setActiveCameraByName = function(t) {
                    var e = this.getCameraByName(t);
                    return e ? (this.activeCamera = e, e) : null
                }, e.prototype.getMaterialByID = function(t) {
                    for (var e = 0; e < this.materials.length; e++)
                        if (this.materials[e].id === t)
                            return this.materials[e];
                    return null
                }, e.prototype.getMaterialByName = function(t) {
                    for (var e = 0; e < this.materials.length; e++)
                        if (this.materials[e].name === t)
                            return this.materials[e];
                    return null
                }, e.prototype.getCameraByID = function(t) {
                    for (var e = 0; e < this.cameras.length; e++)
                        if (this.cameras[e].id === t)
                            return this.cameras[e];
                    return null
                }, e.prototype.getCameraByName = function(t) {
                    for (var e = 0; e < this.cameras.length; e++)
                        if (this.cameras[e].name === t)
                            return this.cameras[e];
                    return null
                }, e.prototype.getLightByName = function(t) {
                    for (var e = 0; e < this.lights.length; e++)
                        if (this.lights[e].name === t)
                            return this.lights[e];
                    return null
                }, e.prototype.getLightByID = function(t) {
                    for (var e = 0; e < this.lights.length; e++)
                        if (this.lights[e].id === t)
                            return this.lights[e];
                    return null
                }, e.prototype.getGeometryByID = function(t) {
                    for (var e = 0; e < this._geometries.length; e++)
                        if (this._geometries[e].id === t)
                            return this._geometries[e];
                    return null
                }, e.prototype.pushGeometry = function(t, e) {
                    return !e && this.getGeometryByID(t.id) ? !1 : (this._geometries.push(t), !0)
                }, e.prototype.getGeometries = function() {
                    return this._geometries
                }, e.prototype.getMeshByID = function(t) {
                    for (var e = 0; e < this.meshes.length; e++)
                        if (this.meshes[e].id === t)
                            return this.meshes[e];
                    return null
                }, e.prototype.getLastMeshByID = function(t) {
                    for (var e = this.meshes.length - 1; e >= 0; e--)
                        if (this.meshes[e].id === t)
                            return this.meshes[e];
                    return null
                }, e.prototype.getLastEntryByID = function(t) {
                    for (var e = this.meshes.length - 1; e >= 0; e--)
                        if (this.meshes[e].id === t)
                            return this.meshes[e];
                    for (e = this.cameras.length - 1; e >= 0; e--)
                        if (this.cameras[e].id === t)
                            return this.cameras[e];
                    for (e = this.lights.length - 1; e >= 0; e--)
                        if (this.lights[e].id === t)
                            return this.lights[e];
                    return null
                }, e.prototype.getMeshByName = function(t) {
                    for (var e = 0; e < this.meshes.length; e++)
                        if (this.meshes[e].name === t)
                            return this.meshes[e];
                    return null
                }, e.prototype.getLastSkeletonByID = function(t) {
                    for (var e = this.skeletons.length - 1; e >= 0; e--)
                        if (this.skeletons[e].id === t)
                            return this.skeletons[e];
                    return null
                }, e.prototype.getSkeletonById = function(t) {
                    for (var e = 0; e < this.skeletons.length; e++)
                        if (this.skeletons[e].id === t)
                            return this.skeletons[e];
                    return null
                }, e.prototype.getSkeletonByName = function(t) {
                    for (var e = 0; e < this.skeletons.length; e++)
                        if (this.skeletons[e].name === t)
                            return this.skeletons[e];
                    return null
                }, e.prototype.isActiveMesh = function(t) {
                    return -1 !== this._activeMeshes.indexOf(t)
                }, e.prototype._evaluateSubMesh = function(t, e) {
                    if (1 == e.subMeshes.length || t.isInFrustum(this._frustumPlanes)) {
                        var n = t.getMaterial();
                        e.showSubMeshesBoundingBox && this._boundingBoxRenderer.renderList.push(t.getBoundingInfo().boundingBox), n && (n.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(n) && (this._processedMaterials.push(n), this._renderTargets.concat(n.getRenderTargetTextures())), this._activeVertices += t.verticesCount, this._renderingManager.dispatch(t))
                    }
                }, e.prototype._evaluateActiveMeshes = function() {
                    this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._boundingBoxRenderer.reset(), this._frustumPlanes ? t.Frustum.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = t.Frustum.GetPlanes(this._transformMatrix);
                    var e, n;
                    if (this._selectionOctree) {
                        var i = this._selectionOctree.select(this._frustumPlanes);
                        e = i.data, n = i.length
                    } else
                        n = this.meshes.length, e = this.meshes;
                    for (var o = 0; n > o; o++) {
                        var r = e[o];
                        this._totalVertices += r.getTotalVertices(), r.isReady() && (r.computeWorldMatrix(), r._preActivate(), r.actionManager && r.actionManager.hasSpecificTriggers([t.ActionManager.OnIntersectionEnterTrigger, t.ActionManager.OnIntersectionExitTrigger]) && this._meshesForIntersections.pushNoDuplicate(r), r.isEnabled() && r.isVisible && r.visibility > 0 && 0 != (r.layerMask & this.activeCamera.layerMask) && r.isInFrustum(this._frustumPlanes) && (this._activeMeshes.push(r), r._activate(this._renderId), this._activeMesh(r)))
                    }
                    var s = (new Date).getTime();
                    if (this.particlesEnabled)
                        for (var a = 0; a < this.particleSystems.length; a++) {
                            var l = this.particleSystems[a];
                            l.isStarted() && (!l.emitter.position || l.emitter && l.emitter.isEnabled()) && (this._activeParticleSystems.push(l), l.animate())
                        }
                    this._particlesDuration += (new Date).getTime() - s
                }, e.prototype._activeMesh = function(t) {
                    if (t.skeleton && this._activeSkeletons.pushNoDuplicate(t.skeleton), t.showBoundingBox && this._boundingBoxRenderer.renderList.push(t.getBoundingInfo().boundingBox), t.subMeshes) {
                        var e, n;
                        if (t._submeshesOctree && t.useOctreeForRenderingSelection) {
                            var i = t._submeshesOctree.select(this._frustumPlanes);
                            e = i.length, n = i.data
                        } else
                            n = t.subMeshes, e = n.length;
                        for (var o = 0; e > o; o++) {
                            var r = n[o];
                            this._evaluateSubMesh(r, t)
                        }
                    }
                }, e.prototype.updateTransformMatrix = function(t) {
                    this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix(t))
                }, e.prototype._renderForCamera = function(t) {
                    var e = this._engine;
                    if (this.activeCamera = t, !this.activeCamera)
                        throw new Error("Active camera not set");
                    e.setViewport(this.activeCamera.viewport), this._renderId++, this.updateTransformMatrix(), this.beforeCameraRender && this.beforeCameraRender(this.activeCamera);
                    var n = (new Date).getTime();
                    this._evaluateActiveMeshes(), this._evaluateActiveMeshesDuration += (new Date).getTime() - n;
                    for (var i = 0; i < this._activeSkeletons.length; i++) {
                        var o = this._activeSkeletons.data[i];
                        o.prepare()
                    }
                    for (var r = 0; r < this.customRenderTargets.length; r++) {
                        var s = this.customRenderTargets[r];
                        this._renderTargets.push(s)
                    }
                    var a = (new Date).getTime();
                    if (this.renderTargetsEnabled) {
                        for (var l = 0; l < this._renderTargets.length; l++)
                            s = this._renderTargets.data[l], s._shouldRender() && (this._renderId++, s.render());
                        this._renderId++
                    }
                    this._renderTargets.length > 0 && e.restoreDefaultFramebuffer(), this._renderTargetsDuration = (new Date).getTime() - a, this.postProcessManager._prepareFrame();
                    var h = (new Date).getTime();
                    if (this.layers.length) {
                        e.setDepthBuffer(!1);
                        var c, u;
                        for (c = 0; c < this.layers.length; c++)
                            u = this.layers[c], u.isBackground && u.render();
                        e.setDepthBuffer(!0)
                    }
                    this._renderingManager.render(null, null, !0, !0), this._boundingBoxRenderer.render();
                    for (var p = 0; p < this.lensFlareSystems.length; p++)
                        this.lensFlareSystems[p].render();
                    if (this.layers.length) {
                        for (e.setDepthBuffer(!1), c = 0; c < this.layers.length; c++)
                            u = this.layers[c], u.isBackground || u.render();
                        e.setDepthBuffer(!0)
                    }
                    this._renderDuration += (new Date).getTime() - h, this.postProcessManager._finalizeFrame(t.isIntermediate), this.activeCamera._updateFromScene(), this._renderTargets.reset(), this.afterCameraRender && this.afterCameraRender(this.activeCamera)
                }, e.prototype._processSubCameras = function(t) {
                    if (0 == t.subCameras.length)
                        return void this._renderForCamera(t);
                    for (var e = 0; e < t.subCameras.length; e++)
                        this._renderForCamera(t.subCameras[e]);
                    this.activeCamera = t, this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix()), this.activeCamera._updateFromScene()
                }, e.prototype._checkIntersections = function() {
                    for (var e = 0; e < this._meshesForIntersections.length; e++)
                        for (var n = this._meshesForIntersections.data[e], i = 0; i < n.actionManager.actions.length; i++) {
                            var o = n.actionManager.actions[i];
                            if (o.trigger == t.ActionManager.OnIntersectionEnterTrigger || o.trigger == t.ActionManager.OnIntersectionExitTrigger) {
                                var r = o.getTriggerParameter(), s = r.intersectsMesh(n, !1), a = n._intersectionsInProgress.indexOf(r);
                                if (s && -1 === a && o.trigger == t.ActionManager.OnIntersectionEnterTrigger)
                                    n.actionManager.processTrigger(t.ActionManager.OnIntersectionEnterTrigger, t.ActionEvent.CreateNew(n)), n._intersectionsInProgress.push(r);
                                else if (!s && a > -1 && o.trigger == t.ActionManager.OnIntersectionExitTrigger) {
                                    n.actionManager.processTrigger(t.ActionManager.OnIntersectionExitTrigger, t.ActionEvent.CreateNew(n));
                                    var l = n._intersectionsInProgress.indexOf(r);
                                    l > -1 && n._intersectionsInProgress.splice(l, 1)
                                }
                            }
                        }
                }, e.prototype.render = function() {
                    var n = (new Date).getTime();
                    this._particlesDuration = 0, this._spritesDuration = 0, this._activeParticles = 0, this._renderDuration = 0, this._evaluateActiveMeshesDuration = 0, this._totalVertices = 0, this._activeVertices = 0, this._meshesForIntersections.reset(), this.actionManager && this.actionManager.processTrigger(t.ActionManager.OnEveryFrameTrigger, null), this.beforeRender && this.beforeRender();
                    for (var i = 0; i < this._onBeforeRenderCallbacks.length; i++)
                        this._onBeforeRenderCallbacks[i]();
                    var o = Math.max(e.MinDeltaTime, Math.min(t.Tools.GetDeltaTime(), e.MaxDeltaTime));
                    this._animationRatio = .06 * o, this._animate(), this._physicsEngine && this._physicsEngine._runOneStep(o / 1e3), this._engine.clear(this.clearColor, this.autoClear || this.forceWireframe, !0);
                    for (var r = 0; r < this.lights.length; r++) {
                        var s = this.lights[r], a = s.getShadowGenerator();
                        s.isEnabled() && a && -1 !== a.getShadowMap().getScene().textures.indexOf(a.getShadowMap()) && this._renderTargets.push(a.getShadowMap())
                    }
                    if (this.postProcessRenderPipelineManager.update(), this.activeCameras.length > 0)
                        for (var l = this._renderId, h = 0; h < this.activeCameras.length; h++)
                            this._renderId = l, this._processSubCameras(this.activeCameras[h]);
                    else
                        this._processSubCameras(this.activeCamera);
                    this._checkIntersections(), this.afterRender && this.afterRender();
                    for (var c = 0; c < this._toBeDisposed.length; c++)
                        this._toBeDisposed.data[c].dispose(), this._toBeDisposed[c] = null;
                    this._toBeDisposed.reset(), this._lastFrameDuration = (new Date).getTime() - n
                }, e.prototype.dispose = function() {
                    this.beforeRender = null, this.afterRender = null, this.skeletons = [], this._boundingBoxRenderer.dispose(), this.onDispose && this.onDispose(), this.detachControl();
                    var t, e = this._engine.getRenderingCanvas();
                    for (t = 0; t < this.cameras.length; t++)
                        this.cameras[t].detachControl(e);
                    for (; this.lights.length; )
                        this.lights[0].dispose();
                    for (; this.meshes.length; )
                        this.meshes[0].dispose(!0);
                    for (; this.cameras.length; )
                        this.cameras[0].dispose();
                    for (; this.materials.length; )
                        this.materials[0].dispose();
                    for (; this.particleSystems.length; )
                        this.particleSystems[0].dispose();
                    for (; this.spriteManagers.length; )
                        this.spriteManagers[0].dispose();
                    for (; this.layers.length; )
                        this.layers[0].dispose();
                    for (; this.textures.length; )
                        this.textures[0].dispose();
                    this.postProcessManager.dispose(), this._physicsEngine && this.disablePhysicsEngine(), t = this._engine.scenes.indexOf(this), this._engine.scenes.splice(t, 1), this._engine.wipeCaches()
                }, e.prototype._getNewPosition = function(t, e, n, i, o, r) {
                    "undefined" == typeof r && (r = null), t.divideToRef(n.radius, this._scaledPosition), e.divideToRef(n.radius, this._scaledVelocity), n.retry = 0, n.initialVelocity = this._scaledVelocity, n.initialPosition = this._scaledPosition, this._collideWithWorld(this._scaledPosition, this._scaledVelocity, n, i, o, r), o.multiplyInPlace(n.radius)
                }, e.prototype._collideWithWorld = function(e, n, i, o, r, s) {
                    "undefined" == typeof s && (s = null);
                    var a = 10 * t.Engine.CollisionsEpsilon;
                    if (i.retry >= o)
                        return void r.copyFrom(e);
                    i._initialize(e, n, a);
                    for (var l = 0; l < this.meshes.length; l++) {
                        var h = this.meshes[l];
                        h.isEnabled() && h.checkCollisions && h.subMeshes && h !== s && h._checkCollision(i)
                    }
                    return i.collisionFound ? ((0 != n.x || 0 != n.y || 0 != n.z) && i._getResponse(e, n), n.length() <= a ? void r.copyFrom(e) : (i.retry++, void this._collideWithWorld(e, n, i, o, r, s))) : void e.addToRef(n, r)
                }, e.prototype.createOrUpdateSelectionOctree = function(e, n) {
                    "undefined" == typeof e && (e = 64), "undefined" == typeof n && (n = 2), this._selectionOctree || (this._selectionOctree = new t.Octree(t.Octree.CreationFuncForMeshes, e, n));
                    for (var i = new t.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), o = new t.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), r = 0; r < this.meshes.length; r++) {
                        var s = this.meshes[r];
                        s.computeWorldMatrix(!0);
                        var a = s.getBoundingInfo().boundingBox.minimumWorld, l = s.getBoundingInfo().boundingBox.maximumWorld;
                        t.Tools.CheckExtends(a, i, o), t.Tools.CheckExtends(l, i, o)
                    }
                    return this._selectionOctree.update(i, o, this.meshes), this._selectionOctree
                }, e.prototype.createPickingRay = function(e, n, i, o) {
                    var r = this._engine;
                    if (!o) {
                        if (!this.activeCamera)
                            throw new Error("Active camera not set");
                        o = this.activeCamera
                    }
                    var s = o.viewport, a = s.toGlobal(r);
                    return e = e / this._engine.getHardwareScalingLevel() - a.x, n = n / this._engine.getHardwareScalingLevel() - (this._engine.getRenderHeight() - a.y - a.height), t.Ray.CreateNew(e / window.devicePixelRatio, n / window.devicePixelRatio, a.width, a.height, i ? i : t.Matrix.Identity(), o.getViewMatrix(), o.getProjectionMatrix())
                }, e.prototype._internalPick = function(e, n, i) {
                    for (var o = null, r = 0; r < this.meshes.length; r++) {
                        var s = this.meshes[r];
                        if (n) {
                            if (!n(s))
                                continue
                                } else if (!s.isEnabled() || !s.isVisible || !s.isPickable)
                                    continue;
                        var a = s.getWorldMatrix(), l = e(a), h = s.intersects(l, i);
                        if (h && h.hit && (i || null == o || !(h.distance >= o.distance)) && (o = h, i))
                            break
                            }
                    return o || new t.PickingInfo
                }, e.prototype.pick = function(t, e, n, i, o) {
                    var r = this;
                    return this._internalPick(function(n) {
                                              return r.createPickingRay(t, e, n, o)
                                              }, n, i)
                }, e.prototype.pickWithRay = function(e, n, i) {
                    var o = this;
                    return this._internalPick(function(n) {
                                              return o._pickWithRayInverseMatrix || (o._pickWithRayInverseMatrix = t.Matrix.Identity()), n.invertToRef(o._pickWithRayInverseMatrix), t.Ray.Transform(e, o._pickWithRayInverseMatrix)
                                              }, n, i)
                }, e.prototype.setPointerOverMesh = function(e) {
                    this._pointerOverMesh !== e && (this._pointerOverMesh && this._pointerOverMesh.actionManager && this._pointerOverMesh.actionManager.processTrigger(t.ActionManager.OnPointerOutTrigger, t.ActionEvent.CreateNew(this._pointerOverMesh)), this._pointerOverMesh = e, this._pointerOverMesh && this._pointerOverMesh.actionManager && this._pointerOverMesh.actionManager.processTrigger(t.ActionManager.OnPointerOverTrigger, t.ActionEvent.CreateNew(this._pointerOverMesh)))
                }, e.prototype.getPointerOverMesh = function() {
                    return this._pointerOverMesh
                }, e.prototype.getPhysicsEngine = function() {
                    return this._physicsEngine
                }, e.prototype.enablePhysics = function(e, n) {
                    return this._physicsEngine ? !0 : (this._physicsEngine = new t.PhysicsEngine(n), this._physicsEngine.isSupported() ? (this._physicsEngine._initialize(e), !0) : (this._physicsEngine = null, !1))
                }, e.prototype.disablePhysicsEngine = function() {
                    this._physicsEngine && (this._physicsEngine.dispose(), this._physicsEngine = void 0)
                }, e.prototype.isPhysicsEnabled = function() {
                    return void 0 !== this._physicsEngine
                }, e.prototype.setGravity = function(t) {
                    this._physicsEngine && this._physicsEngine._setGravity(t)
                }, e.prototype.createCompoundImpostor = function(t, e) {
                    if (t.parts && (e = t, t = t.parts), !this._physicsEngine)
                        return null;
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n].mesh;
                        i._physicImpostor = t[n].impostor, i._physicsMass = e.mass / t.length, i._physicsFriction = e.friction, i._physicRestitution = e.restitution
                    }
                    return this._physicsEngine._registerMeshesAsCompound(t, e)
                }, e.prototype.deleteCompoundImpostor = function(e) {
                    for (var n = 0; n < e.parts.length; n++) {
                        var i = e.parts[n].mesh;
                        i._physicImpostor = t.PhysicsEngine.NoImpostor, this._physicsEngine._unregisterMesh(i)
                    }
                }, e.prototype._getByTags = function(e, n) {
                    if (void 0 === n)
                        return e;
                    var i = [];
                    for (var o in e) {
                        var r = e[o];
                        t.Tags.MatchesQuery(r, n) && i.push(r)
                    }
                    return i
                }, e.prototype.getMeshesByTags = function(t) {
                    return this._getByTags(this.meshes, t)
                }, e.prototype.getCamerasByTags = function(t) {
                    return this._getByTags(this.cameras, t)
                }, e.prototype.getLightsByTags = function(t) {
                    return this._getByTags(this.lights, t)
                }, e.prototype.getMaterialByTags = function(t) {
                    return this._getByTags(this.materials, t).concat(this._getByTags(this.multiMaterials, t))
                }, e.FOGMODE_NONE = 0, e.FOGMODE_EXP = 1, e.FOGMODE_EXP2 = 2, e.FOGMODE_LINEAR = 3, e.MinDeltaTime = 1, e.MaxDeltaTime = 1e3, e
    }();
    t.Scene = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(n, i, o, r, s) {
            switch (this._engine = n instanceof t.Mesh ? n.getScene().getEngine() : n, this._updatable = r, this._data = i, s || this.create(), this._kind = o, o) {
                case e.PositionKind:
                    this._strideSize = 3;
                    break;
                case e.NormalKind:
                    this._strideSize = 3;
                    break;
                case e.UVKind:
                    this._strideSize = 2;
                    break;
                case e.UV2Kind:
                    this._strideSize = 2;
                    break;
                case e.ColorKind:
                    this._strideSize = 3;
                    break;
                case e.MatricesIndicesKind:
                    this._strideSize = 4;
                    break;
                case e.MatricesWeightsKind:
                    this._strideSize = 4
            }
        }
        return e.prototype.isUpdatable = function() {
            return this._updatable
        }, e.prototype.getData = function() {
            return this._data
        }, e.prototype.getBuffer = function() {
            return this._buffer
        }, e.prototype.getStrideSize = function() {
            return this._strideSize
        }, e.prototype.create = function(t) {
            (t || !this._buffer) && (t = t || this._data, this._buffer || (this._buffer = this._updatable ? this._engine.createDynamicVertexBuffer(4 * t.length) : this._engine.createVertexBuffer(t)), this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, t), this._data = t))
        }, e.prototype.update = function(t) {
            this.create(t)
        }, e.prototype.dispose = function() {
            this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
        }, Object.defineProperty(e, "PositionKind", {get: function() {
                                 return e._PositionKind
                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e, "NormalKind", {get: function() {
                                                                                            return e._NormalKind
                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(e, "UVKind", {get: function() {
                                                                                                                                                       return e._UVKind
                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(e, "UV2Kind", {get: function() {
                                                                                                                                                                                                                  return e._UV2Kind
                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ColorKind", {get: function() {
                                                                                                                                                                                                                                                                             return e._ColorKind
                                                                                                                                                                                                                                                                             },enumerable: !0,configurable: !0}), Object.defineProperty(e, "MatricesIndicesKind", {get: function() {
                                                                                                                                                                                                                                                                                                                                        return e._MatricesIndicesKind
                                                                                                                                                                                                                                                                                                                                        },enumerable: !0,configurable: !0}), Object.defineProperty(e, "MatricesWeightsKind", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                   return e._MatricesWeightsKind
                                                                                                                                                                                                                                                                                                                                                                                                   },enumerable: !0,configurable: !0}), e._PositionKind = "position", e._NormalKind = "normal", e._UVKind = "uv", e._UV2Kind = "uv2", e._ColorKind = "color", e._MatricesIndicesKind = "matricesIndices", e._MatricesWeightsKind = "matricesWeights", e
    }();
    t.VertexBuffer = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n) {
            e.call(this, t, n.getScene()), n.instances.push(this), this._sourceMesh = n, this.position.copyFrom(n.position), this.rotation.copyFrom(n.rotation), this.scaling.copyFrom(n.scaling), n.rotationQuaternion && (this.rotationQuaternion = n.rotationQuaternion.clone()), this.infiniteDistance = n.infiniteDistance, this.setPivotMatrix(n.getPivotMatrix()), this.refreshBoundingInfo(), this._syncSubMeshes()
        }
        return __extends(n, e), Object.defineProperty(n.prototype, "receiveShadows", {get: function() {
                                                      return this._sourceMesh.receiveShadows
                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "material", {get: function() {
                                                                                                                 return this._sourceMesh.material
                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "visibility", {get: function() {
                                                                                                                                                                            return this._sourceMesh.visibility
                                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "skeleton", {get: function() {
                                                                                                                                                                                                                                       return this._sourceMesh.skeleton
                                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), n.prototype.getTotalVertices = function() {
            return this._sourceMesh.getTotalVertices()
        }, Object.defineProperty(n.prototype, "sourceMesh", {get: function() {
                                 return this._sourceMesh
                                 },enumerable: !0,configurable: !0}), n.prototype.getVerticesData = function(t) {
            return this._sourceMesh.getVerticesData(t)
        }, n.prototype.isVerticesDataPresent = function(t) {
            return this._sourceMesh.isVerticesDataPresent(t)
        }, n.prototype.getIndices = function() {
            return this._sourceMesh.getIndices()
        }, Object.defineProperty(n.prototype, "_positions", {get: function() {
                                 return this._sourceMesh._positions
                                 },enumerable: !0,configurable: !0}), n.prototype.refreshBoundingInfo = function() {
            var e = this._sourceMesh.getVerticesData(t.VertexBuffer.PositionKind);
            if (e) {
                var n = t.Tools.ExtractMinAndMax(e, 0, this._sourceMesh.getTotalVertices());
                this._boundingInfo = new t.BoundingInfo(n.minimum, n.maximum)
            }
            this._updateBoundingInfo()
        }, n.prototype._activate = function(t) {
            this.sourceMesh._registerInstanceForRenderId(this, t)
        }, n.prototype._syncSubMeshes = function() {
            this.releaseSubMeshes();
            for (var t = 0; t < this._sourceMesh.subMeshes.length; t++)
                this._sourceMesh.subMeshes[t].clone(this, this._sourceMesh)
                }, n.prototype._generatePointsArray = function() {
                    return this._sourceMesh._generatePointsArray()
                }, n.prototype.clone = function(e, n, i) {
                    var o = this._sourceMesh.createInstance(e);
                    if (t.Tools.DeepCopy(this, o, ["name"], []), this.refreshBoundingInfo(), n && (o.parent = n), !i)
                        for (var r = 0; r < this.getScene().meshes.length; r++) {
                            var s = this.getScene().meshes[r];
                            s.parent == this && s.clone(s.name, o)
                        }
                    return o.computeWorldMatrix(!0), o
                }, n.prototype.dispose = function(t) {
                    var n = this._sourceMesh.instances.indexOf(this);
                    this._sourceMesh.instances.splice(n, 1), e.prototype.dispose.call(this, t)
                }, n
    }(t.AbstractMesh);
    t.InstancedMesh = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function() {
        function t() {
            this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = new Array
        }
        return t
    }();
    t._InstancesBatch = e;
    var n = function(n) {
        function i(i, o) {
            n.call(this, i, o), this.delayLoadState = t.Engine.DELAYLOADSTATE_NONE, this.instances = new Array, this._onBeforeRenderCallbacks = [], this._visibleInstances = {}, this._renderIdForInstances = new Array, this._batchCache = new e, this._instancesBufferSize = 2048
        }
        return __extends(i, n), i.prototype.getTotalVertices = function() {
            return this._geometry ? this._geometry.getTotalVertices() : 0
        }, i.prototype.getVerticesData = function(t) {
            return this._geometry ? this._geometry.getVerticesData(t) : null
        }, i.prototype.getVertexBuffer = function(t) {
            return this._geometry ? this._geometry.getVertexBuffer(t) : void 0
        }, i.prototype.isVerticesDataPresent = function(t) {
            return this._geometry ? this._geometry.isVerticesDataPresent(t) : this._delayInfo ? -1 !== this._delayInfo.indexOf(t) : !1
        }, i.prototype.getVerticesDataKinds = function() {
            if (!this._geometry) {
                var t = [];
                if (this._delayInfo)
                    for (var e in this._delayInfo)
                        t.push(e);
                return t
            }
            return this._geometry.getVerticesDataKinds()
        }, i.prototype.getTotalIndices = function() {
            return this._geometry ? this._geometry.getTotalIndices() : 0
        }, i.prototype.getIndices = function() {
            return this._geometry ? this._geometry.getIndices() : []
        }, i.prototype.isReady = function() {
            return this.delayLoadState === t.Engine.DELAYLOADSTATE_LOADING ? !1 : n.prototype.isReady.call(this)
        }, i.prototype.isDisposed = function() {
            return this._isDisposed
        }, i.prototype._preActivate = function() {
            this._visibleInstances = null
        }, i.prototype._registerInstanceForRenderId = function(t, e) {
            this._visibleInstances || (this._visibleInstances = {}, this._visibleInstances.defaultRenderId = e, this._visibleInstances.selfDefaultRenderId = this._renderId), this._visibleInstances[e] || (this._visibleInstances[e] = new Array), this._visibleInstances[e].push(t)
        }, i.prototype.refreshBoundingInfo = function() {
            var e = this.getVerticesData(t.VertexBuffer.PositionKind);
            if (e) {
                var n = t.Tools.ExtractMinAndMax(e, 0, this.getTotalVertices());
                this._boundingInfo = new t.BoundingInfo(n.minimum, n.maximum)
            }
            if (this.subMeshes)
                for (var i = 0; i < this.subMeshes.length; i++)
                    this.subMeshes[i].refreshBoundingInfo();
            this._updateBoundingInfo()
        }, i.prototype._createGlobalSubMesh = function() {
            var e = this.getTotalVertices();
            return e && this.getIndices() ? (this.releaseSubMeshes(), new t.SubMesh(0, 0, e, 0, this.getTotalIndices(), this)) : null
        }, i.prototype.subdivide = function(e) {
            if (!(1 > e)) {
                for (var n = this.getTotalIndices(), i = n / e | 0, o = 0; i % 3 != 0; )
                    i++;
                this.releaseSubMeshes();
                for (var r = 0; e > r && !(o >= n); r++)
                    t.SubMesh.CreateFromIndices(0, o, Math.min(i, n - o), this), o += i;
                this.synchronizeInstances()
            }
        }, i.prototype.setVerticesData = function(e, n, i) {
            if (e instanceof Array) {
                var o = n;
                n = e, e = o, t.Tools.Warn("Deprecated usage of setVerticesData detected (since v1.12). Current signature is setVerticesData(kind, data, updatable).")
            }
            if (this._geometry)
                this._geometry.setVerticesData(e, n, i);
            else {
                var r = new t.VertexData;
                r.set(n, e);
                var s = this.getScene();
                new t.Geometry(t.Geometry.RandomId(), s, r, i, this)
            }
        }, i.prototype.updateVerticesData = function(t, e, n, i) {
            this._geometry && (i ? (this.makeGeometryUnique(), this.updateVerticesData(t, e, n, !1)) : this._geometry.updateVerticesData(t, e, n))
        }, i.prototype.makeGeometryUnique = function() {
            if (this._geometry) {
                var e = this._geometry.copy(t.Geometry.RandomId());
                e.applyToMesh(this)
            }
        }, i.prototype.setIndices = function(e) {
            if (this._geometry)
                this._geometry.setIndices(e);
            else {
                var n = new t.VertexData;
                n.indices = e;
                var i = this.getScene();
                new t.Geometry(t.Geometry.RandomId(), i, n, !1, this)
            }
        }, i.prototype._bind = function(t, e, n) {
            var i = this.getScene().getEngine(), o = this._geometry.getIndexBuffer();
            n && (o = t.getLinesIndexBuffer(this.getIndices(), i)), i.bindMultiBuffers(this._geometry.getVertexBuffers(), o, e)
        }, i.prototype._draw = function(t, e, n) {
            if (this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                var i = this.getScene().getEngine();
                i.draw(e, e ? t.indexStart : 0, e ? t.indexCount : t.linesIndexCount, n)
            }
        }, i.prototype.registerBeforeRender = function(t) {
            this._onBeforeRenderCallbacks.push(t)
        }, i.prototype.unregisterBeforeRender = function(t) {
            var e = this._onBeforeRenderCallbacks.indexOf(t);
            e > -1 && this._onBeforeRenderCallbacks.splice(e, 1)
        }, i.prototype._getInstancesRenderList = function(t) {
            var e = this.getScene();
            if (this._batchCache.mustReturn = !1, this._batchCache.renderSelf[t] = !0, this._batchCache.visibleInstances[t] = null, this._visibleInstances) {
                var n = e.getRenderId();
                this._batchCache.visibleInstances[t] = this._visibleInstances[n];
                var i = this._renderId;
                if (!this._batchCache.visibleInstances[t] && this._visibleInstances.defaultRenderId && (this._batchCache.visibleInstances[t] = this._visibleInstances[this._visibleInstances.defaultRenderId], n = this._visibleInstances.defaultRenderId, i = this._visibleInstances.selfDefaultRenderId), this._batchCache.visibleInstances[t] && this._batchCache.visibleInstances[t].length) {
                    if (this._renderIdForInstances[t] === n)
                        return this._batchCache.mustReturn = !0, this._batchCache;
                    n !== i && (this._batchCache.renderSelf[t] = !1)
                }
                this._renderIdForInstances[t] = n
            }
            return this._batchCache
        }, i.prototype._renderWithInstances = function(t, e, n, i, o) {
            for (var r = this.instances.length + 1, s = 16 * r * 4; this._instancesBufferSize < s; )
                this._instancesBufferSize *= 2;
            (!this._worldMatricesInstancesBuffer || this._worldMatricesInstancesBuffer.capacity < this._instancesBufferSize) && (this._worldMatricesInstancesBuffer && o.deleteInstancesBuffer(this._worldMatricesInstancesBuffer), this._worldMatricesInstancesBuffer = o.createInstancesBuffer(this._instancesBufferSize), this._worldMatricesInstancesArray = new Float32Array(this._instancesBufferSize / 4));
            var a = 0, l = 0, h = this.getWorldMatrix();
            n.renderSelf[t._id] && (h.copyToArray(this._worldMatricesInstancesArray, a), a += 16, l++);
            var c = n.visibleInstances[t._id];
            if (c)
                for (var u = 0; u < c.length; u++) {
                    var p = c[u];
                    p.getWorldMatrix().copyToArray(this._worldMatricesInstancesArray, a), a += 16, l++
                }
            var d = i.getAttributeLocationByName("world0"), m = i.getAttributeLocationByName("world1"), g = i.getAttributeLocationByName("world2"), f = i.getAttributeLocationByName("world3"), y = [d, m, g, f];
            o.updateAndBindInstancesBuffer(this._worldMatricesInstancesBuffer, this._worldMatricesInstancesArray, y), this._draw(t, !e, l), o.unBindInstancesBuffer(this._worldMatricesInstancesBuffer, y)
        }, i.prototype.render = function(t) {
            var e = this.getScene(), n = this._getInstancesRenderList(t._id);
            if (!n.mustReturn && this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                for (var i = 0; i < this._onBeforeRenderCallbacks.length; i++)
                    this._onBeforeRenderCallbacks[i]();
                var o = e.getEngine(), r = null !== o.getCaps().instancedArrays && null !== n.visibleInstances[t._id], s = t.getMaterial();
                if (s && s.isReady(this, r)) {
                    s._preBind();
                    var a = s.getEffect(), l = o.forceWireframe || s.wireframe;
                    this._bind(t, a, l);
                    var h = this.getWorldMatrix();
                    if (s.bind(h, this), r)
                        this._renderWithInstances(t, l, n, a, o);
                    else if (n.renderSelf[t._id] && this._draw(t, !l), n.visibleInstances[t._id])
                        for (var c = 0; c < n.visibleInstances[t._id].length; c++) {
                            var u = n.visibleInstances[t._id][c];
                            h = u.getWorldMatrix(), s.bindOnlyWorldMatrix(h), this._draw(t, !l)
                        }
                    s.unbind()
                }
            }
        }, i.prototype.getEmittedParticleSystems = function() {
            for (var t = new Array, e = 0; e < this.getScene().particleSystems.length; e++) {
                var n = this.getScene().particleSystems[e];
                n.emitter === this && t.push(n)
            }
            return t
        }, i.prototype.getHierarchyEmittedParticleSystems = function() {
            var t = new Array, e = this.getDescendants();
            e.push(this);
            for (var n = 0; n < this.getScene().particleSystems.length; n++) {
                var i = this.getScene().particleSystems[n];
                -1 !== e.indexOf(i.emitter) && t.push(i)
            }
            return t
        }, i.prototype.getChildren = function() {
            for (var t = [], e = 0; e < this.getScene().meshes.length; e++) {
                var n = this.getScene().meshes[e];
                n.parent == this && t.push(n)
            }
            return t
        }, i.prototype._checkDelayState = function() {
            var e = this, n = this, i = this.getScene();
            this._geometry ? this._geometry.load(i) : n.delayLoadState === t.Engine.DELAYLOADSTATE_NOTLOADED && (n.delayLoadState = t.Engine.DELAYLOADSTATE_LOADING, i._addPendingData(n), t.Tools.LoadFile(this.delayLoadingFile, function(n) {
                                                                                                                                                                                                            e._delayLoadingFunction(JSON.parse(n), e), e.delayLoadState = t.Engine.DELAYLOADSTATE_LOADED, i._removePendingData(e)
                                                                                                                                                                                                            }, function() {
                                                                                                                                                                                                            }, i.database))
        }, i.prototype.isInFrustum = function(e) {
            return this.delayLoadState === t.Engine.DELAYLOADSTATE_LOADING ? !1 : n.prototype.isInFrustum.call(this, e) ? (this._checkDelayState(), !0) : !1
        }, i.prototype.setMaterialByID = function(t) {
            for (var e = this.getScene().materials, n = e.length - 1; n >= 0; n--)
                if (e[n].id == t)
                    return void (this.material = e[n]);
            var i = this.getScene().multiMaterials;
            for (n = 0; n < i.length; n++)
                if (i[n].id == t)
                    return void (this.material = i[n])
                    }, i.prototype.getAnimatables = function() {
                        var t = [];
                        return this.material && t.push(this.material), t
                    }, i.prototype.bakeTransformIntoVertices = function(e) {
                        if (this.isVerticesDataPresent(t.VertexBuffer.PositionKind)) {
                            this._resetPointsArrayCache();
                            for (var n = this.getVerticesData(t.VertexBuffer.PositionKind), i = [], o = 0; o < n.length; o += 3)
                                t.Vector3.TransformCoordinates(t.Vector3.FromArray(n, o), e).toArray(i, o);
                            if (this.setVerticesData(t.VertexBuffer.PositionKind, i, this.getVertexBuffer(t.VertexBuffer.PositionKind).isUpdatable()), this.isVerticesDataPresent(t.VertexBuffer.NormalKind)) {
                                for (n = this.getVerticesData(t.VertexBuffer.NormalKind), i = [], o = 0; o < n.length; o += 3)
                                    t.Vector3.TransformNormal(t.Vector3.FromArray(n, o), e).toArray(i, o);
                                this.setVerticesData(t.VertexBuffer.NormalKind, i, this.getVertexBuffer(t.VertexBuffer.NormalKind).isUpdatable())
                            }
                        }
                    }, i.prototype._resetPointsArrayCache = function() {
                        this._positions = null
                    }, i.prototype._generatePointsArray = function() {
                        if (this._positions)
                            return !0;
                        this._positions = [];
                        var e = this.getVerticesData(t.VertexBuffer.PositionKind);
                        if (!e)
                            return !1;
                        for (var n = 0; n < e.length; n += 3)
                            this._positions.push(t.Vector3.FromArray(e, n));
                        return !0
                    }, i.prototype.clone = function(t, e, n) {
                        return this.duplicate(t, e, n)
                    }, i.prototype.dispose = function(t) {
                        for (this._geometry && this._geometry.releaseForMesh(this, !0), this._worldMatricesInstancesBuffer && (this.getEngine().deleteInstancesBuffer(this._worldMatricesInstancesBuffer), this._worldMatricesInstancesBuffer = null); this.instances.length; )
                            this.instances[0].dispose();
                        n.prototype.dispose.call(this, t)
                    }, i.prototype.convertToFlatShadedMesh = function() {
                        for (var e = this.getVerticesDataKinds(), n = [], i = [], o = [], r = !1, s = 0; s < e.length; s++) {
                            var a = e[s], l = this.getVertexBuffer(a);
                            a !== t.VertexBuffer.NormalKind ? (n[a] = l, i[a] = n[a].getData(), o[a] = []) : (r = l.isUpdatable(), e.splice(s, 1), s--)
                        }
                        var h = this.subMeshes.slice(0), c = this.getIndices(), u = this.getTotalIndices();
                        for (y = 0; u > y; y++) {
                            var p = c[y];
                            for (s = 0; s < e.length; s++) {
                                a = e[s];
                                for (var d = n[a].getStrideSize(), m = 0; d > m; m++)
                                    o[a].push(i[a][p * d + m])
                                    }
                        }
                        for (var g = [], f = o[t.VertexBuffer.PositionKind], y = 0; u > y; y += 3) {
                            c[y] = y, c[y + 1] = y + 1, c[y + 2] = y + 2;
                            for (var _ = t.Vector3.FromArray(f, 3 * y), v = t.Vector3.FromArray(f, 3 * (y + 1)), b = t.Vector3.FromArray(f, 3 * (y + 2)), w = _.subtract(v), x = b.subtract(v), C = t.Vector3.Normalize(t.Vector3.Cross(w, x)), M = 0; 3 > M; M++)
                                g.push(C.x), g.push(C.y), g.push(C.z)
                                }
                        for (this.setIndices(c), this.setVerticesData(t.VertexBuffer.NormalKind, g, r), s = 0; s < e.length; s++)
                            a = e[s], this.setVerticesData(a, o[a], n[a].isUpdatable());
                        this.releaseSubMeshes();
                        for (var D = 0; D < h.length; D++) {
                            var B = h[D];
                            new t.SubMesh(B.materialIndex, B.indexStart, B.indexCount, B.indexStart, B.indexCount, this)
                        }
                        this.synchronizeInstances()
                    }, i.prototype.createInstance = function(e) {
                        return new t.InstancedMesh(e, this)
                    }, i.prototype.synchronizeInstances = function() {
                        for (var t = 0; t < this.instances.length; t++) {
                            var e = this.instances[t];
                            e._syncSubMeshes()
                        }
                    }, i.CreateBox = function(e, n, i, o) {
                        var r = new t.Mesh(e, i), s = t.VertexData.CreateBox(n);
                        return s.applyToMesh(r, o), r
                    }, i.CreateSphere = function(e, n, i, o, r) {
                        var s = new t.Mesh(e, o), a = t.VertexData.CreateSphere(n, i);
                        return a.applyToMesh(s, r), s
                    }, i.CreateCylinder = function(e, n, i, o, r, s, a, l, h) {
                        void 0 !== l && l instanceof t.Scene || (void 0 !== l && (h = l), l = s, s = 1);
                        var c = new t.Mesh(e, l), u = t.VertexData.CreateCylinder(n, i, o, r, s, a);
                        return u.applyToMesh(c, h), c
                    }, i.CreateTorus = function(e, n, i, o, r, s) {
                        var a = new t.Mesh(e, r), l = t.VertexData.CreateTorus(n, i, o);
                        return l.applyToMesh(a, s), a
                    }, i.CreateTorusKnot = function(e, n, i, o, r, s, a, l, h) {
                        var c = new t.Mesh(e, l), u = t.VertexData.CreateTorusKnot(n, i, o, r, s, a);
                        return u.applyToMesh(c, h), c
                    }, i.CreateLines = function(e, n, i, o) {
                        var r = new t.LinesMesh(e, i, o), s = t.VertexData.CreateLines(n);
                        return s.applyToMesh(r, o), r
                    }, i.CreatePlane = function(e, n, i, o) {
                        var r = new t.Mesh(e, i), s = t.VertexData.CreatePlane(n);
                        return s.applyToMesh(r, o), r
                    }, i.CreateGround = function(e, n, i, o, r, s) {
                        var a = new t.GroundMesh(e, r);
                        a._setReady(!1), a._subdivisions = o;
                        var l = t.VertexData.CreateGround(n, i, o);
                        return l.applyToMesh(a, s), a._setReady(!0), a
                    }, i.CreateTiledGround = function(e, n, i, o, r, s, a, l, h) {
                        var c = new t.Mesh(e, l), u = t.VertexData.CreateTiledGround(n, i, o, r, s, a);
                        return u.applyToMesh(c, h), c
                    }, i.CreateGroundFromHeightMap = function(e, n, i, o, r, s, a, l, h) {
                        var c = new t.GroundMesh(e, l);
                        c._subdivisions = r, c._setReady(!1);
                        var u = function(e) {
                            var n = document.createElement("canvas"), l = n.getContext("2d"), u = e.width, p = e.height;
                            n.width = u, n.height = p, l.drawImage(e, 0, 0);
                            var d = l.getImageData(0, 0, u, p).data, m = t.VertexData.CreateGroundFromHeightMap(i, o, r, s, a, d, u, p);
                            m.applyToMesh(c, h), c._setReady(!0)
                        };
                        return t.Tools.LoadImage(n, u, function() {
                                                 }, l.database), c
                    }, i.MinMax = function(t) {
                        var e = null, n = null;
                        for (var i in t) {
                            var o = t[i], r = o.getBoundingInfo().boundingBox;
                            e ? (e.MinimizeInPlace(r.minimumWorld), n.MaximizeInPlace(r.maximumWorld)) : (e = r.minimumWorld, n = r.maximumWorld)
                        }
                        return {min: e,max: n}
                    }, i.Center = function(e) {
                        var n = void 0 !== e.min ? e : t.Mesh.MinMax(e);
                        return t.Vector3.Center(n.min, n.max)
                    }, i
    }(t.AbstractMesh);
    t.Mesh = n
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i) {
            e.call(this, n, i), this.generateOctree = !1, this._worldInverse = new t.Matrix
        }
        return __extends(n, e), Object.defineProperty(n.prototype, "subdivisions", {get: function() {
                                                      return this._subdivisions
                                                      },enumerable: !0,configurable: !0}), n.prototype.optimize = function() {
            this.subdivide(this._subdivisions), this.createOrUpdateSubmeshesOctree(32)
        }, n.prototype.getHeightAtCoordinates = function(e, n) {
            var i = new t.Ray(new t.Vector3(e, this.getBoundingInfo().boundingBox.maximumWorld.y + 1, n), new t.Vector3(0, -1, 0));
            this.getWorldMatrix().invertToRef(this._worldInverse), i = t.Ray.Transform(i, this._worldInverse);
            var o = this.intersects(i);
            return o.hit ? o.pickedPoint.y : 0
        }, n
    }(t.Mesh);
    t.GroundMesh = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n, i, o, r, s, a) {
            "undefined" == typeof a && (a = !0), this.materialIndex = t, this.verticesStart = e, this.verticesCount = n, this.indexStart = i, this.indexCount = o, this._renderId = 0, this._mesh = r, this._renderingMesh = s || r, r.subMeshes.push(this), this._id = r.subMeshes.length - 1, a && this.refreshBoundingInfo()
        }
        return e.prototype.getBoundingInfo = function() {
            return this._boundingInfo
        }, e.prototype.getMesh = function() {
            return this._mesh
        }, e.prototype.getRenderingMesh = function() {
            return this._renderingMesh
        }, e.prototype.getMaterial = function() {
            var e = this._renderingMesh.material;
            if (e && e instanceof t.MultiMaterial) {
                var n = e;
                return n.getSubMaterial(this.materialIndex)
            }
            return e ? e : this._mesh.getScene().defaultMaterial
        }, e.prototype.refreshBoundingInfo = function() {
            var e = this._renderingMesh.getVerticesData(t.VertexBuffer.PositionKind);
            if (!e)
                return void (this._boundingInfo = this._mesh._boundingInfo);
            var n, i = this._renderingMesh.getIndices();
            n = 0 === this.indexStart && this.indexCount === i.length ? t.Tools.ExtractMinAndMax(e, this.verticesStart, this.verticesCount) : t.Tools.ExtractMinAndMaxIndexed(e, i, this.indexStart, this.indexCount), this._boundingInfo = new t.BoundingInfo(n.minimum, n.maximum)
        }, e.prototype._checkCollision = function(t) {
            return this._boundingInfo._checkCollision(t)
        }, e.prototype.updateBoundingInfo = function(t) {
            this._boundingInfo || this.refreshBoundingInfo(), this._boundingInfo._update(t)
        }, e.prototype.isInFrustum = function(t) {
            return this._boundingInfo.isInFrustum(t)
        }, e.prototype.render = function() {
            this._renderingMesh.render(this)
        }, e.prototype.getLinesIndexBuffer = function(t, e) {
            if (!this._linesIndexBuffer) {
                for (var n = [], i = this.indexStart; i < this.indexStart + this.indexCount; i += 3)
                    n.push(t[i], t[i + 1], t[i + 1], t[i + 2], t[i + 2], t[i]);
                this._linesIndexBuffer = e.createIndexBuffer(n), this.linesIndexCount = n.length
            }
            return this._linesIndexBuffer
        }, e.prototype.canIntersects = function(t) {
            return t.intersectsBox(this._boundingInfo.boundingBox)
        }, e.prototype.intersects = function(e, n, i, o, r) {
            for (var s = null, a = this.indexStart; a < this.indexStart + this.indexCount; a += 3) {
                var l = n[i[a]], h = n[i[a + 1]], c = n[i[a + 2]], u = e.intersectsTriangle(l, h, c);
                if (u && (o || !s || u.distance < s.distance)) {
                    if (r) {
                        var p = t.PickingInfo.GetNormal(l, h, c), d = e.direction.dot(p);
                        if (d > 0)
                            continue
                            }
                    if (s = u, s.faceId = a / 3, o)
                        break
                        }
            }
            return s
        }, e.prototype.clone = function(n, i) {
            var o = new e(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, n, i, !1);
            return o._boundingInfo = new t.BoundingInfo(this._boundingInfo.minimum, this._boundingInfo.maximum), o
        }, e.prototype.dispose = function() {
            this._linesIndexBuffer && (this._mesh.getScene().getEngine()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
            var t = this._mesh.subMeshes.indexOf(this);
            this._mesh.subMeshes.splice(t, 1)
        }, e.CreateFromIndices = function(e, n, i, o, r) {
            var s = Number.MAX_VALUE, a = -Number.MAX_VALUE;
            r = r || o;
            for (var l = r.getIndices(), h = n; n + i > h; h++) {
                var c = l[h];
                s > c && (s = c), c > a && (a = c)
            }
            return new t.SubMesh(e, s, a - s + 1, n, i, o, r)
        }, e
    }();
    t.SubMesh = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e) {
            this.delayLoadState = t.Engine.DELAYLOADSTATE_NONE, this.hasAlpha = !1, this.getAlphaFromRGB = !1, this.level = 1, this.isCube = !1, this.isRenderTarget = !1, this.animations = new Array, this.coordinatesIndex = 0, this.coordinatesMode = t.Texture.EXPLICIT_MODE, this.wrapU = t.Texture.WRAP_ADDRESSMODE, this.wrapV = t.Texture.WRAP_ADDRESSMODE, this.anisotropicFilteringLevel = 4, this._scene = e, this._scene.textures.push(this)
        }
        return e.prototype.getScene = function() {
            return this._scene
        }, e.prototype.getTextureMatrix = function() {
            return null
        }, e.prototype.getReflectionTextureMatrix = function() {
            return null
        }, e.prototype.getInternalTexture = function() {
            return this._texture
        }, e.prototype.isReady = function() {
            return this.delayLoadState === t.Engine.DELAYLOADSTATE_NOTLOADED ? !0 : this._texture ? this._texture.isReady : !1
        }, e.prototype.getSize = function() {
            return this._texture._width ? {width: this._texture._width,height: this._texture._height} : this._texture._size ? {width: this._texture._size,height: this._texture._size} : {width: 0,height: 0}
        }, e.prototype.getBaseSize = function() {
            return this.isReady() ? this._texture._size ? {width: this._texture._size,height: this._texture._size} : {width: this._texture._baseWidth,height: this._texture._baseHeight} : {width: 0,height: 0}
        }, e.prototype._getFromCache = function(t, e) {
            for (var n = this._scene.getEngine().getLoadedTexturesCache(), i = 0; i < n.length; i++) {
                var o = n[i];
                if (o.url === t && o.noMipmap === e)
                    return o.references++, o
                    }
            return null
        }, e.prototype.delayLoad = function() {
        }, e.prototype.releaseInternalTexture = function() {
            if (this._texture) {
                var t = this._scene.getEngine().getLoadedTexturesCache();
                if (this._texture.references--, 0 == this._texture.references) {
                    var e = t.indexOf(this._texture);
                    t.splice(e, 1), this._scene.getEngine()._releaseTexture(this._texture), delete this._texture
                }
            }
        }, e.prototype.clone = function() {
            return null
        }, e.prototype.dispose = function() {
            var t = this._scene.textures.indexOf(this);
            t >= 0 && this._scene.textures.splice(t, 1), void 0 !== this._texture && (this.releaseInternalTexture(), this.onDispose && this.onDispose())
        }, e
    }();
    t.BaseTexture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(i, o, r, s, a) {
            "undefined" == typeof a && (a = n.TRILINEAR_SAMPLINGMODE), e.call(this, o), this.uOffset = 0, this.vOffset = 0, this.uScale = 1, this.vScale = 1, this.uAng = 0, this.vAng = 0, this.wAng = 0, this.name = i, this.url = i, this._noMipmap = r, this._invertY = s, this._samplingMode = a, i && (this._texture = this._getFromCache(i, r), this._texture || (o.useDelayedTextureLoading ? this.delayLoadState = t.Engine.DELAYLOADSTATE_NOTLOADED : this._texture = o.getEngine().createTexture(i, r, s, o, this._samplingMode)))
        }
        return __extends(n, e), n.prototype.delayLoad = function() {
            this.delayLoadState == t.Engine.DELAYLOADSTATE_NOTLOADED && (this.delayLoadState = t.Engine.DELAYLOADSTATE_LOADED, this._texture = this._getFromCache(this.url, this._noMipmap), this._texture || (this._texture = this.getScene().getEngine().createTexture(this.url, this._noMipmap, this._invertY, this.getScene(), this._samplingMode)))
        }, n.prototype._prepareRowForTextureGeneration = function(e, n, i, o) {
            e -= this.uOffset + .5, n -= this.vOffset + .5, i -= .5, t.Vector3.TransformCoordinatesFromFloatsToRef(e, n, i, this._rowGenerationMatrix, o), o.x *= this.uScale, o.y *= this.vScale, o.x += .5, o.y += .5, o.z += .5
        }, n.prototype.getTextureMatrix = function() {
            return this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng ? this._cachedTextureMatrix : (this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedTextureMatrix || (this._cachedTextureMatrix = t.Matrix.Zero(), this._rowGenerationMatrix = new t.Matrix, this._t0 = t.Vector3.Zero(), this._t1 = t.Vector3.Zero(), this._t2 = t.Vector3.Zero()), t.Matrix.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.subtractInPlace(this._t0), this._t2.subtractInPlace(this._t0), t.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix.m[0] = this._t1.x, this._cachedTextureMatrix.m[1] = this._t1.y, this._cachedTextureMatrix.m[2] = this._t1.z, this._cachedTextureMatrix.m[4] = this._t2.x, this._cachedTextureMatrix.m[5] = this._t2.y, this._cachedTextureMatrix.m[6] = this._t2.z, this._cachedTextureMatrix.m[8] = this._t0.x, this._cachedTextureMatrix.m[9] = this._t0.y, this._cachedTextureMatrix.m[10] = this._t0.z, this._cachedTextureMatrix)
        }, n.prototype.getReflectionTextureMatrix = function() {
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.coordinatesMode === this._cachedCoordinatesMode)
                return this._cachedTextureMatrix;
            switch (this._cachedTextureMatrix || (this._cachedTextureMatrix = t.Matrix.Zero(), this._projectionModeMatrix = t.Matrix.Zero()), this.coordinatesMode) {
                case t.Texture.SPHERICAL_MODE:
                    t.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix[0] = -.5 * this.uScale, this._cachedTextureMatrix[5] = -.5 * this.vScale, this._cachedTextureMatrix[12] = .5 + this.uOffset, this._cachedTextureMatrix[13] = .5 + this.vOffset;
                    break;
                case t.Texture.PLANAR_MODE:
                    t.Matrix.IdentityToRef(this._cachedTextureMatrix), this._cachedTextureMatrix[0] = this.uScale, this._cachedTextureMatrix[5] = this.vScale, this._cachedTextureMatrix[12] = this.uOffset, this._cachedTextureMatrix[13] = this.vOffset;
                    break;
                case t.Texture.PROJECTION_MODE:
                    t.Matrix.IdentityToRef(this._projectionModeMatrix), this._projectionModeMatrix.m[0] = .5, this._projectionModeMatrix.m[5] = -.5, this._projectionModeMatrix.m[10] = 0, this._projectionModeMatrix.m[12] = .5, this._projectionModeMatrix.m[13] = .5, this._projectionModeMatrix.m[14] = 1, this._projectionModeMatrix.m[15] = 1, this.getScene().getProjectionMatrix().multiplyToRef(this._projectionModeMatrix, this._cachedTextureMatrix);
                    break;
                default:
                    t.Matrix.IdentityToRef(this._cachedTextureMatrix)
            }
            return this._cachedTextureMatrix
        }, n.prototype.clone = function() {
            var e = new t.Texture(this._texture.url, this.getScene(), this._noMipmap, this._invertY);
            return e.hasAlpha = this.hasAlpha, e.level = this.level, e.wrapU = this.wrapU, e.wrapV = this.wrapV, e.coordinatesIndex = this.coordinatesIndex, e.coordinatesMode = this.coordinatesMode, e.uOffset = this.uOffset, e.vOffset = this.vOffset, e.uScale = this.uScale, e.vScale = this.vScale, e.uAng = this.uAng, e.vAng = this.vAng, e.wAng = this.wAng, e
        }, n.NEAREST_SAMPLINGMODE = 1, n.BILINEAR_SAMPLINGMODE = 2, n.TRILINEAR_SAMPLINGMODE = 3, n.EXPLICIT_MODE = 0, n.SPHERICAL_MODE = 1, n.PLANAR_MODE = 2, n.CUBIC_MODE = 3, n.PROJECTION_MODE = 4, n.SKYBOX_MODE = 5, n.CLAMP_ADDRESSMODE = 0, n.WRAP_ADDRESSMODE = 1, n.MIRROR_ADDRESSMODE = 2, n
    }(t.BaseTexture);
    t.Texture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r) {
            e.call(this, i), this.coordinatesMode = t.Texture.CUBIC_MODE, this.name = n, this.url = n, this._noMipmap = r, this.hasAlpha = !1, this._texture = this._getFromCache(n, r), o || (o = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"]), this._extensions = o, this._texture || (i.useDelayedTextureLoading ? this.delayLoadState = t.Engine.DELAYLOADSTATE_NOTLOADED : this._texture = i.getEngine().createCubeTexture(n, i, o, r)), this.isCube = !0, this._textureMatrix = t.Matrix.Identity()
        }
        return __extends(n, e), n.prototype.clone = function() {
            var e = new t.CubeTexture(this.url, this.getScene(), this._extensions, this._noMipmap);
            return e.level = this.level, e.wrapU = this.wrapU, e.wrapV = this.wrapV, e.coordinatesIndex = this.coordinatesIndex, e.coordinatesMode = this.coordinatesMode, e
        }, n.prototype.delayLoad = function() {
            this.delayLoadState == t.Engine.DELAYLOADSTATE_NOTLOADED && (this.delayLoadState = t.Engine.DELAYLOADSTATE_LOADED, this._texture = this._getFromCache(this.url, this._noMipmap), this._texture || (this._texture = this.getScene().getEngine().createCubeTexture(this.url, this.getScene(), this._extensions)))
        }, n.prototype.getReflectionTextureMatrix = function() {
            return this._textureMatrix
        }, n
    }(t.BaseTexture);
    t.CubeTexture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r, s) {
            "undefined" == typeof s && (s = !0), e.call(this, null, o, !r), this.renderList = new Array, this.renderParticles = !0, this.renderSprites = !1, this.coordinatesMode = t.Texture.PROJECTION_MODE, this._currentRefreshId = -1, this._refreshRate = 1, this.name = n, this.isRenderTarget = !0, this._size = i, this._generateMipMaps = r, this._doNotChangeAspectRatio = s, this._texture = o.getEngine().createRenderTargetTexture(i, r), this._renderingManager = new t.RenderingManager(o)
        }
        return __extends(n, e), n.prototype.resetRefreshCounter = function() {
            this._currentRefreshId = -1
        }, Object.defineProperty(n.prototype, "refreshRate", {get: function() {
                                 return this._refreshRate
                                 },set: function(t) {
                                 this._refreshRate = t, this.resetRefreshCounter()
                                 },enumerable: !0,configurable: !0}), n.prototype._shouldRender = function() {
            return -1 === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : this.refreshRate == this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1)
        }, n.prototype.getRenderSize = function() {
            return this._size
        }, n.prototype.resize = function(t, e) {
            this.releaseInternalTexture(), this._texture = this.getScene().getEngine().createRenderTargetTexture(t, e)
        }, n.prototype.render = function(t) {
            var e = this.getScene(), n = e.getEngine();
            if (this._waitingRenderList) {
                this.renderList = [];
                for (var i = 0; i < this._waitingRenderList.length; i++) {
                    var o = this._waitingRenderList[i];
                    this.renderList.push(e.getMeshByID(o))
                }
                delete this._waitingRenderList
            }
            if (this.renderList && 0 != this.renderList.length) {
                t && e.postProcessManager._prepareFrame(this._texture) || n.bindFramebuffer(this._texture), n.clear(e.clearColor, !0, !0), this._renderingManager.reset();
                for (var r = 0; r < this.renderList.length; r++) {
                    var s = this.renderList[r];
                    if (s) {
                        if (!s.isReady() || s.material && !s.material.isReady(s)) {
                            this.resetRefreshCounter();
                            continue
                        }
                        if (s.isEnabled() && s.isVisible && s.subMeshes && 0 != (s.layerMask & e.activeCamera.layerMask)) {
                            s._activate(e.getRenderId());
                            for (var a = 0; a < s.subMeshes.length; a++) {
                                var l = s.subMeshes[a];
                                e._activeVertices += l.verticesCount, this._renderingManager.dispatch(l)
                            }
                        }
                    }
                }
                this._doNotChangeAspectRatio || e.updateTransformMatrix(!0), this.onBeforeRender && this.onBeforeRender(), this._renderingManager.render(this.customRenderFunction, this.renderList, this.renderParticles, this.renderSprites), t && e.postProcessManager._finalizeFrame(!1, this._texture), this.onAfterRender && this.onAfterRender(), n.unBindFramebuffer(this._texture), this._doNotChangeAspectRatio || e.updateTransformMatrix(!0)
            }
        }, n.prototype.clone = function() {
            var e = this.getSize(), n = new t.RenderTargetTexture(this.name, e.width, this.getScene(), this._generateMipMaps);
            return n.hasAlpha = this.hasAlpha, n.level = this.level, n.coordinatesMode = this.coordinatesMode, n.renderList = this.renderList.slice(0), n
        }, n
    }(t.Texture);
    t.RenderTargetTexture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r) {
            var s = this;
            e.call(this, n, i, o, r, !0), this.mirrorPlane = new t.Plane(0, 1, 0, 1), this._transformMatrix = t.Matrix.Zero(), this._mirrorMatrix = t.Matrix.Zero(), this.onBeforeRender = function() {
                t.Matrix.ReflectionToRef(s.mirrorPlane, s._mirrorMatrix), s._savedViewMatrix = o.getViewMatrix(), s._mirrorMatrix.multiplyToRef(s._savedViewMatrix, s._transformMatrix), o.setTransformMatrix(s._transformMatrix, o.getProjectionMatrix()), o.clipPlane = s.mirrorPlane, o.getEngine().cullBackFaces = !1
            }, this.onAfterRender = function() {
                o.setTransformMatrix(s._savedViewMatrix, o.getProjectionMatrix()), o.getEngine().cullBackFaces = !0, delete o.clipPlane
            }
        }
        return __extends(n, e), n.prototype.clone = function() {
            var e = this.getSize(), n = new t.MirrorTexture(this.name, e.width, this.getScene(), this._generateMipMaps);
            return n.hasAlpha = this.hasAlpha, n.level = this.level, n.mirrorPlane = this.mirrorPlane.clone(), n.renderList = this.renderList.slice(0), n
        }, n
    }(t.RenderTargetTexture);
    t.MirrorTexture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r, s) {
            "undefined" == typeof s && (s = t.Texture.TRILINEAR_SAMPLINGMODE), e.call(this, null, o, !r), this.name = n, this.wrapU = t.Texture.CLAMP_ADDRESSMODE, this.wrapV = t.Texture.CLAMP_ADDRESSMODE, this._generateMipMaps = r, i.getContext ? (this._canvas = i, this._texture = o.getEngine().createDynamicTexture(i.width, i.height, r, s)) : (this._canvas = document.createElement("canvas"), this._texture = i.width ? o.getEngine().createDynamicTexture(i.width, i.height, r, s) : o.getEngine().createDynamicTexture(i, i, r, s));
            var a = this.getSize();
            this._canvas.width = a.width, this._canvas.height = a.height, this._context = this._canvas.getContext("2d")
        }
        return __extends(n, e), n.prototype.getContext = function() {
            return this._context
        }, n.prototype.update = function(t) {
            this.getScene().getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === t ? !0 : t)
        }, n.prototype.drawText = function(t, e, n, i, o, r, s) {
            var a = this.getSize();
            if (r && (this._context.fillStyle = r, this._context.fillRect(0, 0, a.width, a.height)), this._context.font = i, null === e) {
                var l = this._context.measureText(t);
                e = (a.width - l.width) / 2
            }
            this._context.fillStyle = o, this._context.fillText(t, e, n), this.update(s)
        }, n.prototype.clone = function() {
            var e = this.getSize(), n = new t.DynamicTexture(this.name, e.width, this.getScene(), this._generateMipMaps);
            return n.hasAlpha = this.hasAlpha, n.level = this.level, n.wrapU = this.wrapU, n.wrapV = this.wrapV, n
        }, n
    }(t.Texture);
    t.DynamicTexture = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r, s, a, l) {
            "undefined" == typeof l && (l = t.Texture.TRILINEAR_SAMPLINGMODE);
            var h = this;
            e.call(this, null, r, !s, a), this._autoLaunch = !0, this.name = n, this.wrapU = t.Texture.WRAP_ADDRESSMODE, this.wrapV = t.Texture.WRAP_ADDRESSMODE;
            var c = o.width || o, u = o.height || o;
            this._texture = r.getEngine().createDynamicTexture(c, u, s, l);
            var p = this.getSize();
            this.video = document.createElement("video"), this.video.width = p.width, this.video.height = p.height, this.video.autoplay = !1, this.video.loop = !0, this.video.addEventListener("canplaythrough", function() {
                                                                                                                                                                                                h._texture && (h._texture.isReady = !0)
                                                                                                                                                                                                }), i.forEach(function(t) {
                                                                                                                                                                                                              var e = document.createElement("source");
                                                                                                                                                                                                              e.src = t, h.video.appendChild(e)
                                                                                                                                                                                                              }), this._lastUpdate = (new Date).getTime()
        }
        return __extends(n, e), n.prototype.update = function() {
            this._autoLaunch && (this._autoLaunch = !1, this.video.play());
            var t = (new Date).getTime();
            return t - this._lastUpdate < 15 ? !1 : (this._lastUpdate = t, this.getScene().getEngine().updateVideoTexture(this._texture, this.video, this._invertY), !0)
        }, n
    }(t.Texture);
    t.VideoTexture = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n, i, o, r, s, a, l) {
            var h = this;
            this._isReady = !1, this._compilationError = "", this._valueCache = [], this._engine = o, this.name = t, this.defines = r, this._uniformsNames = n.concat(i), this._samplers = i, this._attributesNames = e, this.onError = l, this.onCompiled = a;
            var c, u;
            t.vertexElement ? (c = document.getElementById(t.vertexElement), u = document.getElementById(t.fragmentElement)) : (c = t.vertexElement || t.vertex || t, u = t.fragmentElement || t.fragment || t), this._loadVertexShader(c, function(t) {
                                                                                                                                                                                                                                        h._loadFragmentShader(u, function(n) {
                                                                                                                                                                                                                                                              h._prepareEffect(t, n, e, r, s)
                                                                                                                                                                                                                                                              })
                                                                                                                                                                                                                                        })
        }
        return e.prototype.isReady = function() {
            return this._isReady
        }, e.prototype.getProgram = function() {
            return this._program
        }, e.prototype.getAttributesNames = function() {
            return this._attributesNames
        }, e.prototype.getAttributeLocation = function(t) {
            return this._attributes[t]
        }, e.prototype.getAttributeLocationByName = function(t) {
            var e = this._attributesNames.indexOf(t);
            return this._attributes[e]
        }, e.prototype.getAttributesCount = function() {
            return this._attributes.length
        }, e.prototype.getUniformIndex = function(t) {
            return this._uniformsNames.indexOf(t)
        }, e.prototype.getUniform = function(t) {
            return this._uniforms[this._uniformsNames.indexOf(t)]
        }, e.prototype.getSamplers = function() {
            return this._samplers
        }, e.prototype.getCompilationError = function() {
            return this._compilationError
        }, e.prototype._loadVertexShader = function(e, n) {
            if (e instanceof HTMLElement) {
                var i = t.Tools.GetDOMTextContent(e);
                return void n(i)
            }
            if (t.Effect.ShadersStore[e + "VertexShader"])
                return void n(t.Effect.ShadersStore[e + "VertexShader"]);
            var o;
            o = "." === e[0] ? e : t.Engine.ShadersRepository + e, t.Tools.LoadFile(o + ".vertex.fx", n)
        }, e.prototype._loadFragmentShader = function(e, n) {
            if (e instanceof HTMLElement) {
                var i = t.Tools.GetDOMTextContent(e);
                return void n(i)
            }
            if (t.Effect.ShadersStore[e + "PixelShader"])
                return void n(t.Effect.ShadersStore[e + "PixelShader"]);
            var o;
            o = "." === e[0] ? e : t.Engine.ShadersRepository + e, t.Tools.LoadFile(o + ".fragment.fx", n)
        }, e.prototype._prepareEffect = function(e, n, i, o, r, s) {
            try {
                var a = this._engine;
                this._program = a.createShaderProgram(e, n, o), this._uniforms = a.getUniforms(this._program, this._uniformsNames), this._attributes = a.getAttributes(this._program, i);
                for (var l = 0; l < this._samplers.length; l++) {
                    var h = this.getUniform(this._samplers[l]);
                    null == h && (this._samplers.splice(l, 1), l--)
                }
                a.bindSamplers(this), this._isReady = !0, this.onCompiled && this.onCompiled(this)
            } catch (c) {
                if (!s && r) {
                    for (l = 0; l < r.length; l++)
                        o = o.replace(r[l], "");
                    this._prepareEffect(e, n, i, o, r, !0)
                } else
                    t.Tools.Error("Unable to compile effect: " + this.name), t.Tools.Error("Defines: " + o), t.Tools.Error("Optional defines: " + r), t.Tools.Error("Error: " + c.message), this._compilationError = c.message, this.onError && this.onError(this, this._compilationError)
                    }
        }, e.prototype._bindTexture = function(t, e) {
            this._engine._bindTexture(this._samplers.indexOf(t), e)
        }, e.prototype.setTexture = function(t, e) {
            this._engine.setTexture(this._samplers.indexOf(t), e)
        }, e.prototype.setTextureFromPostProcess = function(t, e) {
            this._engine.setTextureFromPostProcess(this._samplers.indexOf(t), e)
        }, e.prototype._cacheFloat2 = function(t, e, n) {
            return this._valueCache[t] ? (this._valueCache[t][0] = e, void (this._valueCache[t][1] = n)) : void (this._valueCache[t] = [e, n])
        }, e.prototype._cacheFloat3 = function(t, e, n, i) {
            return this._valueCache[t] ? (this._valueCache[t][0] = e, this._valueCache[t][1] = n, void (this._valueCache[t][2] = i)) : void (this._valueCache[t] = [e, n, i])
        }, e.prototype._cacheFloat4 = function(t, e, n, i, o) {
            return this._valueCache[t] ? (this._valueCache[t][0] = e, this._valueCache[t][1] = n, this._valueCache[t][2] = i, void (this._valueCache[t][3] = o)) : void (this._valueCache[t] = [e, n, i, o])
        }, e.prototype.setArray = function(t, e) {
            return this._engine.setArray(this.getUniform(t), e), this
        }, e.prototype.setMatrices = function(t, e) {
            return this._engine.setMatrices(this.getUniform(t), e), this
        }, e.prototype.setMatrix = function(t, e) {
            return this._engine.setMatrix(this.getUniform(t), e), this
        }, e.prototype.setFloat = function(t, e) {
            return this._valueCache[t] && this._valueCache[t] === e ? this : (this._valueCache[t] = e, this._engine.setFloat(this.getUniform(t), e), this)
        }, e.prototype.setBool = function(t, e) {
            return this._valueCache[t] && this._valueCache[t] === e ? this : (this._valueCache[t] = e, this._engine.setBool(this.getUniform(t), e ? 1 : 0), this)
        }, e.prototype.setVector2 = function(t, e) {
            return this._valueCache[t] && this._valueCache[t][0] == e.x && this._valueCache[t][1] == e.y ? this : (this._cacheFloat2(t, e.x, e.y), this._engine.setFloat2(this.getUniform(t), e.x, e.y), this)
        }, e.prototype.setFloat2 = function(t, e, n) {
            return this._valueCache[t] && this._valueCache[t][0] == e && this._valueCache[t][1] == n ? this : (this._cacheFloat2(t, e, n), this._engine.setFloat2(this.getUniform(t), e, n), this)
        }, e.prototype.setVector3 = function(t, e) {
            return this._valueCache[t] && this._valueCache[t][0] == e.x && this._valueCache[t][1] == e.y && this._valueCache[t][2] == e.z ? this : (this._cacheFloat3(t, e.x, e.y, e.z), this._engine.setFloat3(this.getUniform(t), e.x, e.y, e.z), this)
        }, e.prototype.setFloat3 = function(t, e, n, i) {
            return this._valueCache[t] && this._valueCache[t][0] == e && this._valueCache[t][1] == n && this._valueCache[t][2] == i ? this : (this._cacheFloat3(t, e, n, i), this._engine.setFloat3(this.getUniform(t), e, n, i), this)
        }, e.prototype.setFloat4 = function(t, e, n, i, o) {
            return this._valueCache[t] && this._valueCache[t][0] == e && this._valueCache[t][1] == n && this._valueCache[t][2] == i && this._valueCache[t][3] == o ? this : (this._cacheFloat4(t, e, n, i, o), this._engine.setFloat4(this.getUniform(t), e, n, i, o), this)
        }, e.prototype.setColor3 = function(t, e) {
            return this._valueCache[t] && this._valueCache[t][0] == e.r && this._valueCache[t][1] == e.g && this._valueCache[t][2] == e.b ? this : (this._cacheFloat3(t, e.r, e.g, e.b), this._engine.setColor3(this.getUniform(t), e), this)
        }, e.prototype.setColor4 = function(t, e, n) {
            return this._valueCache[t] && this._valueCache[t][0] == e.r && this._valueCache[t][1] == e.g && this._valueCache[t][2] == e.b && this._valueCache[t][3] == n ? this : (this._cacheFloat4(t, e.r, e.g, e.b, n), this._engine.setColor4(this.getUniform(t), e, n), this)
        }, e.ShadersStore = {}, e
    }();
    t.Effect = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e, n) {
            this.name = t, this.checkReadyOnEveryCall = !1, this.checkReadyOnlyOnce = !0, this.state = "", this.alpha = 1, this.wireframe = !1, this.backFaceCulling = !0, this._wasPreviouslyReady = !1, this.id = t, this._scene = e, n || e.materials.push(this)
        }
        return t.prototype.isReady = function() {
            return !0
        }, t.prototype.getEffect = function() {
            return this._effect
        }, t.prototype.getScene = function() {
            return this._scene
        }, t.prototype.needAlphaBlending = function() {
            return this.alpha < 1
        }, t.prototype.needAlphaTesting = function() {
            return !1
        }, t.prototype.getAlphaTestTexture = function() {
            return null
        }, t.prototype.trackCreation = function() {
        }, t.prototype._preBind = function() {
            var t = this._scene.getEngine();
            return t.setState(this.backFaceCulling), t.enableEffect(this._effect)
        }, t.prototype.bind = function() {
        }, t.prototype.bindOnlyWorldMatrix = function() {
        }, t.prototype.unbind = function() {
        }, t.prototype.dispose = function(t) {
            var e = this._scene.materials.indexOf(this);
            this._scene.materials.splice(e, 1), t && this._effect && (this._scene.getEngine()._releaseEffect(this._effect), this._effect = null), this.onDispose && this.onDispose()
        }, t
    }();
    t.Material = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = 4, n = function(n) {
        function i(e, i) {
            var o = this;
            n.call(this, e, i), this.ambientColor = new t.Color3(0, 0, 0), this.diffuseColor = new t.Color3(1, 1, 1), this.specularColor = new t.Color3(1, 1, 1), this.specularPower = 64, this.emissiveColor = new t.Color3(0, 0, 0), this.useAlphaFromDiffuseTexture = !1, this._cachedDefines = null, this._renderTargets = new t.SmartArray(16), this._worldViewProjectionMatrix = t.Matrix.Zero(), this._globalAmbientColor = new t.Color3(0, 0, 0), this._baseColor = new t.Color3, this._scaledDiffuse = new t.Color3, this._scaledSpecular = new t.Color3, this.getRenderTargetTextures = function() {
                return o._renderTargets.reset(), o.reflectionTexture && o.reflectionTexture.isRenderTarget && o._renderTargets.push(o.reflectionTexture), o._renderTargets
            }
        }
        return __extends(i, n), i.prototype.needAlphaBlending = function() {
            return this.alpha < 1 || null != this.opacityTexture || this._shouldUseAlphaFromDiffuseTexture()
        }, i.prototype.needAlphaTesting = function() {
            return null != this.diffuseTexture && this.diffuseTexture.hasAlpha && !this.diffuseTexture.getAlphaFromRGB
        }, i.prototype._shouldUseAlphaFromDiffuseTexture = function() {
            return null != this.diffuseTexture && this.diffuseTexture.hasAlpha && this.useAlphaFromDiffuseTexture
        }, i.prototype.getAlphaTestTexture = function() {
            return this.diffuseTexture
        }, i.prototype._shouldUseAlphaFromDiffuseTexture = function() {
            return null != this.diffuseTexture && this.diffuseTexture.hasAlpha && this.useAlphaFromDiffuseTexture
        }, i.prototype.isReady = function(n, i) {
            if (this.checkReadyOnlyOnce && this._wasPreviouslyReady)
                return !0;
            var o = this.getScene();
            if (!this.checkReadyOnEveryCall && this._renderId === o.getRenderId())
                return !0;
            var r = o.getEngine(), s = [], a = new Array;
            if (o.texturesEnabled) {
                if (this.diffuseTexture && t.StandardMaterial.DiffuseTextureEnabled) {
                    if (!this.diffuseTexture.isReady())
                        return !1;
                    s.push("#define DIFFUSE")
                }
                if (this.ambientTexture && t.StandardMaterial.AmbientTextureEnabled) {
                    if (!this.ambientTexture.isReady())
                        return !1;
                    s.push("#define AMBIENT")
                }
                if (this.opacityTexture && t.StandardMaterial.OpacityTextureEnabled) {
                    if (!this.opacityTexture.isReady())
                        return !1;
                    s.push("#define OPACITY"), this.opacityTexture.getAlphaFromRGB && s.push("#define OPACITYRGB")
                }
                if (this.reflectionTexture && t.StandardMaterial.ReflectionTextureEnabled) {
                    if (!this.reflectionTexture.isReady())
                        return !1;
                    s.push("#define REFLECTION")
                }
                if (this.emissiveTexture && t.StandardMaterial.EmissiveTextureEnabled) {
                    if (!this.emissiveTexture.isReady())
                        return !1;
                    s.push("#define EMISSIVE")
                }
                if (this.specularTexture && t.StandardMaterial.SpecularTextureEnabled) {
                    if (!this.specularTexture.isReady())
                        return !1;
                    s.push("#define SPECULAR"), a.push(s[s.length - 1])
                }
            }
            if (o.getEngine().getCaps().standardDerivatives && this.bumpTexture && t.StandardMaterial.BumpTextureEnabled) {
                if (!this.bumpTexture.isReady())
                    return !1;
                s.push("#define BUMP"), a.push(s[s.length - 1])
            }
            o.clipPlane && s.push("#define CLIPPLANE"), r.getAlphaTesting() && s.push("#define ALPHATEST"), this._shouldUseAlphaFromDiffuseTexture() && s.push("#define ALPHAFROMDIFFUSE"), o.fogMode !== t.Scene.FOGMODE_NONE && (s.push("#define FOG"), a.push(s[s.length - 1]));
            var l = !1, h = 0;
            if (o.lightsEnabled)
                for (var c = 0; c < o.lights.length; c++) {
                    var u = o.lights[c];
                    if (u.isEnabled()) {
                        if (u._excludedMeshesIds.length > 0) {
                            for (var p = 0; p < u._excludedMeshesIds.length; p++) {
                                var d = o.getMeshByID(u._excludedMeshesIds[p]);
                                d && u.excludedMeshes.push(d)
                            }
                            u._excludedMeshesIds = []
                        }
                        if (!n || -1 === u.excludedMeshes.indexOf(n)) {
                            s.push("#define LIGHT" + h), h > 0 && a.push(s[s.length - 1]);
                            var m;
                            m = u instanceof t.SpotLight ? "#define SPOTLIGHT" + h : u instanceof t.HemisphericLight ? "#define HEMILIGHT" + h : "#define POINTDIRLIGHT" + h, s.push(m), h > 0 && a.push(s[s.length - 1]);
                            var g = u.getShadowGenerator();
                            if (n && n.receiveShadows && g && (s.push("#define SHADOW" + h), h > 0 && a.push(s[s.length - 1]), l || (s.push("#define SHADOWS"), l = !0), g.useVarianceShadowMap && (s.push("#define SHADOWVSM" + h), h > 0 && a.push(s[s.length - 1])), g.usePoissonSampling && (s.push("#define SHADOWPCF" + h), h > 0 && a.push(s[s.length - 1]))), h++, h == e)
                                break
                                }
                    }
                }
            var f = [t.VertexBuffer.PositionKind, t.VertexBuffer.NormalKind];
            n && (n.isVerticesDataPresent(t.VertexBuffer.UVKind) && (f.push(t.VertexBuffer.UVKind), s.push("#define UV1")), n.isVerticesDataPresent(t.VertexBuffer.UV2Kind) && (f.push(t.VertexBuffer.UV2Kind), s.push("#define UV2")), n.isVerticesDataPresent(t.VertexBuffer.ColorKind) && (f.push(t.VertexBuffer.ColorKind), s.push("#define VERTEXCOLOR")), n.skeleton && n.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && n.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind) && (f.push(t.VertexBuffer.MatricesIndicesKind), f.push(t.VertexBuffer.MatricesWeightsKind), s.push("#define BONES"), s.push("#define BonesPerMesh " + (n.skeleton.bones.length + 1)), s.push("#define BONES4"), a.push(s[s.length - 1])), i && (s.push("#define INSTANCES"), f.push("world0"), f.push("world1"), f.push("world2"), f.push("world3")));
            var y = s.join("\n");
            if (this._cachedDefines != y) {
                this._cachedDefines = y;
                var _ = "default";
                o.getEngine().getCaps().standardDerivatives || (_ = "legacydefault"), this._effect = o.getEngine().createEffect(_, f, ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "vLightData0", "vLightDiffuse0", "vLightSpecular0", "vLightDirection0", "vLightGround0", "lightMatrix0", "vLightData1", "vLightDiffuse1", "vLightSpecular1", "vLightDirection1", "vLightGround1", "lightMatrix1", "vLightData2", "vLightDiffuse2", "vLightSpecular2", "vLightDirection2", "vLightGround2", "lightMatrix2", "vLightData3", "vLightDiffuse3", "vLightSpecular3", "vLightDirection3", "vLightGround3", "lightMatrix3", "vFogInfos", "vFogColor", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vReflectionInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "mBones", "vClipPlane", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "reflectionMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "darkness0", "darkness1", "darkness2", "darkness3"], ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "shadowSampler0", "shadowSampler1", "shadowSampler2", "shadowSampler3"], y, a, this.onCompiled, this.onError)
            }
            return this._effect.isReady() ? (this._renderId = o.getRenderId(), this._wasPreviouslyReady = !0, !0) : !1
        }, i.prototype.unbind = function() {
            this.reflectionTexture && this.reflectionTexture.isRenderTarget && this._effect.setTexture("reflection2DSampler", null)
        }, i.prototype.bindOnlyWorldMatrix = function(t) {
            this._effect.setMatrix("world", t)
        }, i.prototype.bind = function(n, i) {
            var o = this.getScene();
            if (this._baseColor.copyFrom(this.diffuseColor), this.bindOnlyWorldMatrix(n), this._effect.setMatrix("viewProjection", o.getTransformMatrix()), i.skeleton && i.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && i.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind) && this._effect.setMatrices("mBones", i.skeleton.getTransformMatrices()), this.diffuseTexture && t.StandardMaterial.DiffuseTextureEnabled && (this._effect.setTexture("diffuseSampler", this.diffuseTexture), this._effect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level), this._effect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix()), this._baseColor.copyFromFloats(1, 1, 1)), this.ambientTexture && t.StandardMaterial.AmbientTextureEnabled && (this._effect.setTexture("ambientSampler", this.ambientTexture), this._effect.setFloat2("vAmbientInfos", this.ambientTexture.coordinatesIndex, this.ambientTexture.level), this._effect.setMatrix("ambientMatrix", this.ambientTexture.getTextureMatrix())), this.opacityTexture && t.StandardMaterial.OpacityTextureEnabled && (this._effect.setTexture("opacitySampler", this.opacityTexture), this._effect.setFloat2("vOpacityInfos", this.opacityTexture.coordinatesIndex, this.opacityTexture.level), this._effect.setMatrix("opacityMatrix", this.opacityTexture.getTextureMatrix())), this.reflectionTexture && t.StandardMaterial.ReflectionTextureEnabled && (this.reflectionTexture.isCube ? this._effect.setTexture("reflectionCubeSampler", this.reflectionTexture) : this._effect.setTexture("reflection2DSampler", this.reflectionTexture), this._effect.setMatrix("reflectionMatrix", this.reflectionTexture.getReflectionTextureMatrix()), this._effect.setFloat3("vReflectionInfos", this.reflectionTexture.coordinatesMode, this.reflectionTexture.level, this.reflectionTexture.isCube ? 1 : 0)), this.emissiveTexture && t.StandardMaterial.EmissiveTextureEnabled && (this._effect.setTexture("emissiveSampler", this.emissiveTexture), this._effect.setFloat2("vEmissiveInfos", this.emissiveTexture.coordinatesIndex, this.emissiveTexture.level), this._effect.setMatrix("emissiveMatrix", this.emissiveTexture.getTextureMatrix())), this.specularTexture && t.StandardMaterial.SpecularTextureEnabled && (this._effect.setTexture("specularSampler", this.specularTexture), this._effect.setFloat2("vSpecularInfos", this.specularTexture.coordinatesIndex, this.specularTexture.level), this._effect.setMatrix("specularMatrix", this.specularTexture.getTextureMatrix())), this.bumpTexture && o.getEngine().getCaps().standardDerivatives && t.StandardMaterial.BumpTextureEnabled && (this._effect.setTexture("bumpSampler", this.bumpTexture), this._effect.setFloat2("vBumpInfos", this.bumpTexture.coordinatesIndex, this.bumpTexture.level), this._effect.setMatrix("bumpMatrix", this.bumpTexture.getTextureMatrix())), o.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), this._effect.setVector3("vEyePosition", o.activeCamera.position), this._effect.setColor3("vAmbientColor", this._globalAmbientColor), this._effect.setColor4("vDiffuseColor", this._baseColor, this.alpha * i.visibility), this._effect.setColor4("vSpecularColor", this.specularColor, this.specularPower), this._effect.setColor3("vEmissiveColor", this.emissiveColor), o.lightsEnabled)
                for (var r = 0, s = 0; s < o.lights.length; s++) {
                    var a = o.lights[s];
                    if (a.isEnabled() && (!i || -1 === a.excludedMeshes.indexOf(i))) {
                        a instanceof t.PointLight ? a.transferToEffect(this._effect, "vLightData" + r) : a instanceof t.DirectionalLight ? a.transferToEffect(this._effect, "vLightData" + r) : a instanceof t.SpotLight ? a.transferToEffect(this._effect, "vLightData" + r, "vLightDirection" + r) : a instanceof t.HemisphericLight && a.transferToEffect(this._effect, "vLightData" + r, "vLightGround" + r), a.diffuse.scaleToRef(a.intensity, this._scaledDiffuse), a.specular.scaleToRef(a.intensity, this._scaledSpecular), this._effect.setColor4("vLightDiffuse" + r, this._scaledDiffuse, a.range), this._effect.setColor3("vLightSpecular" + r, this._scaledSpecular);
                        var l = a.getShadowGenerator();
                        if (i.receiveShadows && l && (this._effect.setMatrix("lightMatrix" + r, l.getTransformMatrix()), this._effect.setTexture("shadowSampler" + r, l.getShadowMap()), this._effect.setFloat("darkness" + r, l.getDarkness())), r++, r == e)
                            break
                            }
                }
            if (o.clipPlane) {
                var h = o.clipPlane;
                this._effect.setFloat4("vClipPlane", h.normal.x, h.normal.y, h.normal.z, h.d)
            }
            (o.fogMode !== t.Scene.FOGMODE_NONE || this.reflectionTexture) && this._effect.setMatrix("view", o.getViewMatrix()), o.fogMode !== t.Scene.FOGMODE_NONE && (this._effect.setFloat4("vFogInfos", o.fogMode, o.fogStart, o.fogEnd, o.fogDensity), this._effect.setColor3("vFogColor", o.fogColor))
        }, i.prototype.getAnimatables = function() {
            var t = [];
            return this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0 && t.push(this.diffuseTexture), this.ambientTexture && this.ambientTexture.animations && this.ambientTexture.animations.length > 0 && t.push(this.ambientTexture), this.opacityTexture && this.opacityTexture.animations && this.opacityTexture.animations.length > 0 && t.push(this.opacityTexture), this.reflectionTexture && this.reflectionTexture.animations && this.reflectionTexture.animations.length > 0 && t.push(this.reflectionTexture), this.emissiveTexture && this.emissiveTexture.animations && this.emissiveTexture.animations.length > 0 && t.push(this.emissiveTexture), this.specularTexture && this.specularTexture.animations && this.specularTexture.animations.length > 0 && t.push(this.specularTexture), this.bumpTexture && this.bumpTexture.animations && this.bumpTexture.animations.length > 0 && t.push(this.bumpTexture), t
        }, i.prototype.dispose = function(t) {
            this.diffuseTexture && this.diffuseTexture.dispose(), this.ambientTexture && this.ambientTexture.dispose(), this.opacityTexture && this.opacityTexture.dispose(), this.reflectionTexture && this.reflectionTexture.dispose(), this.emissiveTexture && this.emissiveTexture.dispose(), this.specularTexture && this.specularTexture.dispose(), this.bumpTexture && this.bumpTexture.dispose(), n.prototype.dispose.call(this, t)
        }, i.prototype.clone = function(e) {
            var n = new t.StandardMaterial(e, this.getScene());
            return n.checkReadyOnEveryCall = this.checkReadyOnEveryCall, n.alpha = this.alpha, n.wireframe = this.wireframe, n.backFaceCulling = this.backFaceCulling, this.diffuseTexture && this.diffuseTexture.clone && (n.diffuseTexture = this.diffuseTexture.clone()), this.ambientTexture && this.ambientTexture.clone && (n.ambientTexture = this.ambientTexture.clone()), this.opacityTexture && this.opacityTexture.clone && (n.opacityTexture = this.opacityTexture.clone()), this.reflectionTexture && this.reflectionTexture.clone && (n.reflectionTexture = this.reflectionTexture.clone()), this.emissiveTexture && this.emissiveTexture.clone && (n.emissiveTexture = this.emissiveTexture.clone()), this.specularTexture && this.specularTexture.clone && (n.specularTexture = this.specularTexture.clone()), this.bumpTexture && this.bumpTexture.clone && (n.bumpTexture = this.bumpTexture.clone()), n.ambientColor = this.ambientColor.clone(), n.diffuseColor = this.diffuseColor.clone(), n.specularColor = this.specularColor.clone(), n.specularPower = this.specularPower, n.emissiveColor = this.emissiveColor.clone(), n
        }, i.DiffuseTextureEnabled = !0, i.AmbientTextureEnabled = !0, i.OpacityTextureEnabled = !0, i.ReflectionTextureEnabled = !0, i.EmissiveTextureEnabled = !0, i.SpecularTextureEnabled = !0, i.BumpTextureEnabled = !0, i
    }(t.Material);
    t.StandardMaterial = n
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n) {
            t.call(this, e, n, !0), this.subMaterials = new Array, n.multiMaterials.push(this)
        }
        return __extends(e, t), e.prototype.getSubMaterial = function(t) {
            return 0 > t || t >= this.subMaterials.length ? this.getScene().defaultMaterial : this.subMaterials[t]
        }, e.prototype.isReady = function(t) {
            for (var e = 0; e < this.subMaterials.length; e++) {
                var n = this.subMaterials[e];
                if (n && !this.subMaterials[e].isReady(t))
                    return !1
                    }
            return !0
        }, e
    }(t.Material);
    t.MultiMaterial = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e() {
        }
        return Object.defineProperty(e, "ForceFullSceneLoadingForIncremental", {get: function() {
                                     return e._ForceFullSceneLoadingForIncremental
                                     },set: function(t) {
                                     e._ForceFullSceneLoadingForIncremental = t
                                     },enumerable: !0,configurable: !0}), e._getPluginForFilename = function(t) {
            for (var e = t.lastIndexOf("."), n = t.substring(e).toLowerCase(), i = 0; i < this._registeredPlugins.length; i++) {
                var o = this._registeredPlugins[i];
                if (-1 !== o.extensions.indexOf(n))
                    return o
                    }
            return this._registeredPlugins[this._registeredPlugins.length - 1]
        }, e.RegisterPlugin = function(t) {
            t.extensions = t.extensions.toLowerCase(), e._registeredPlugins.push(t)
        }, e.ImportMesh = function(e, n, i, o, r, s, a) {
            var l = this, h = function() {
                o.database = c;
                var h = l._getPluginForFilename(i), u = function(t) {
                    var s = [], l = [], c = [];
                    return h.importMesh(e, o, t, n, s, l, c) ? void (r && (o.importedMeshesFiles.push(n + i), r(s, l, c))) : void (a && a(o))
                };
                return i.substr && "data:" === i.substr(0, 5) ? void u(i.substr(5)) : void t.Tools.LoadFile(n + i, function(t) {
                                                                                                            u(t)
                                                                                                            }, s, c)
            }, c = new t.Database(n + i, h)
        }, e.Load = function(e, n, i, o, r, s) {
            var a, l = this._getPluginForFilename(n.name || n), h = function(n) {
                var r = new t.Scene(i);
                return r.database = a, l.load(r, n, e) ? void (o && o(r)) : void (s && s(r))
            }, c = function() {
                t.Tools.LoadFile(e + n, h, r, a)
            };
            return n.substr && "data:" === n.substr(0, 5) ? void h(n.substr(5)) : void (-1 === e.indexOf("file:") ? a = new t.Database(e + n, c) : t.Tools.ReadFile(n, h, r))
        }, e._ForceFullSceneLoadingForIncremental = !1, e._registeredPlugins = new Array, e
    }();
    t.SceneLoader = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function() {
        var e = function(e, n, i) {
            var o = new t.CubeTexture(e + n.name, i);
            return o.name = n.name, o.hasAlpha = n.hasAlpha, o.level = n.level, o.coordinatesMode = n.coordinatesMode, o
        }, n = function(n, i, o) {
            if (!i.name && !i.isRenderTarget)
                return null;
            if (i.isCube)
                return e(n, i, o);
            var r;
            if (i.mirrorPlane ? (r = new t.MirrorTexture(i.name, i.renderTargetSize, o), r._waitingRenderList = i.renderList, r.mirrorPlane = t.Plane.FromArray(i.mirrorPlane)) : i.isRenderTarget ? (r = new t.RenderTargetTexture(i.name, i.renderTargetSize, o), r._waitingRenderList = i.renderList) : r = new t.Texture(n + i.name, o), r.name = i.name, r.hasAlpha = i.hasAlpha, r.getAlphaFromRGB = i.getAlphaFromRGB, r.level = i.level, r.coordinatesIndex = i.coordinatesIndex, r.coordinatesMode = i.coordinatesMode, r.uOffset = i.uOffset, r.vOffset = i.vOffset, r.uScale = i.uScale, r.vScale = i.vScale, r.uAng = i.uAng, r.vAng = i.vAng, r.wAng = i.wAng, r.wrapU = i.wrapU, r.wrapV = i.wrapV, i.animations)
                for (var s = 0; s < i.animations.length; s++) {
                    var a = i.animations[s];
                    r.animations.push(c(a))
                }
            return r
        }, i = function(e, n) {
            for (var i = new t.Skeleton(e.name, e.id, n), o = 0; o < e.bones.length; o++) {
                var r = e.bones[o], s = null;
                r.parentBoneIndex > -1 && (s = i.bones[r.parentBoneIndex]);
                var a = new t.Bone(r.name, i, s, t.Matrix.FromArray(r.matrix));
                r.animation && a.animations.push(c(r.animation))
            }
            return i
        }, o = function(e, i, o) {
            var r;
            return r = new t.StandardMaterial(e.name, i), r.ambientColor = t.Color3.FromArray(e.ambient), r.diffuseColor = t.Color3.FromArray(e.diffuse), r.specularColor = t.Color3.FromArray(e.specular), r.specularPower = e.specularPower, r.emissiveColor = t.Color3.FromArray(e.emissive), r.alpha = e.alpha, r.id = e.id, t.Tags.AddTagsTo(r, e.tags), r.backFaceCulling = e.backFaceCulling, r.wireframe = e.wireframe, e.diffuseTexture && (r.diffuseTexture = n(o, e.diffuseTexture, i)), e.ambientTexture && (r.ambientTexture = n(o, e.ambientTexture, i)), e.opacityTexture && (r.opacityTexture = n(o, e.opacityTexture, i)), e.reflectionTexture && (r.reflectionTexture = n(o, e.reflectionTexture, i)), e.emissiveTexture && (r.emissiveTexture = n(o, e.emissiveTexture, i)), e.specularTexture && (r.specularTexture = n(o, e.specularTexture, i)), e.bumpTexture && (r.bumpTexture = n(o, e.bumpTexture, i)), r
        }, r = function(t, e, n, i) {
            for (var r = 0; r < e.materials.length; r++) {
                var s = e.materials[r];
                if (s.id === t)
                    return o(s, n, i)
                    }
            return null
        }, s = function(e, n) {
            var i = new t.MultiMaterial(e.name, n);
            i.id = e.id, t.Tags.AddTagsTo(i, e.tags);
            for (var o = 0; o < e.materials.length; o++) {
                var r = e.materials[o];
                i.subMaterials.push(r ? n.getMaterialByID(r) : null)
            }
            return i
        }, a = function(e, n, i) {
            var o = n.getLastEntryByID(e.emitterId), r = new t.LensFlareSystem("lensFlareSystem#" + e.emitterId, o, n);
            r.borderLimit = e.borderLimit;
            for (var s = 0; s < e.flares.length; s++) {
                var a = e.flares[s];
                new t.LensFlare(a.size, a.position, t.Color3.FromArray(a.color), i + a.textureName, r)
            }
            return r
        }, l = function(e, n, i) {
            var o = n.getLastMeshByID(e.emitterId), r = new t.ParticleSystem("particles#" + o.name, e.capacity, n);
            return e.textureName && (r.particleTexture = new t.Texture(i + e.textureName, n), r.particleTexture.name = e.textureName), r.minAngularSpeed = e.minAngularSpeed, r.maxAngularSpeed = e.maxAngularSpeed, r.minSize = e.minSize, r.maxSize = e.maxSize, r.minLifeTime = e.minLifeTime, r.maxLifeTime = e.maxLifeTime, r.emitter = o, r.emitRate = e.emitRate, r.minEmitBox = t.Vector3.FromArray(e.minEmitBox), r.maxEmitBox = t.Vector3.FromArray(e.maxEmitBox), r.gravity = t.Vector3.FromArray(e.gravity), r.direction1 = t.Vector3.FromArray(e.direction1), r.direction2 = t.Vector3.FromArray(e.direction2), r.color1 = t.Color4.FromArray(e.color1), r.color2 = t.Color4.FromArray(e.color2), r.colorDead = t.Color4.FromArray(e.colorDead), r.updateSpeed = e.updateSpeed, r.targetStopDuration = e.targetStopFrame, r.textureMask = t.Color4.FromArray(e.textureMask), r.blendMode = e.blendMode, r.start(), r
        }, h = function(e, n) {
            for (var i = n.getLightByID(e.lightId), o = new t.ShadowGenerator(e.mapSize, i), r = 0; r < e.renderList.length; r++) {
                var s = n.getMeshByID(e.renderList[r]);
                o.getShadowMap().renderList.push(s)
            }
            return e.usePoissonSampling ? o.usePoissonSampling = !0 : o.useVarianceShadowMap = e.useVarianceShadowMap, o
        }, c = function(e) {
            for (var n = new t.Animation(e.name, e.property, e.framePerSecond, e.dataType, e.loopBehavior), i = e.dataType, o = [], r = 0; r < e.keys.length; r++) {
                var s, a = e.keys[r];
                switch (i) {
                    case t.Animation.ANIMATIONTYPE_FLOAT:
                        s = a.values[0];
                        break;
                    case t.Animation.ANIMATIONTYPE_QUATERNION:
                        s = t.Quaternion.FromArray(a.values);
                        break;
                    case t.Animation.ANIMATIONTYPE_MATRIX:
                        s = t.Matrix.FromArray(a.values);
                        break;
                    case t.Animation.ANIMATIONTYPE_VECTOR3:
                    default:
                        s = t.Vector3.FromArray(a.values)
                }
                o.push({frame: a.frame,value: s})
            }
            return n.setKeys(o), n
        }, u = function(e, n) {
            var i;
            switch (e.type) {
                case 0:
                    i = new t.PointLight(e.name, t.Vector3.FromArray(e.position), n);
                    break;
                case 1:
                    i = new t.DirectionalLight(e.name, t.Vector3.FromArray(e.direction), n), i.position = t.Vector3.FromArray(e.position);
                    break;
                case 2:
                    i = new t.SpotLight(e.name, t.Vector3.FromArray(e.position), t.Vector3.FromArray(e.direction), e.angle, e.exponent, n);
                    break;
                case 3:
                    i = new t.HemisphericLight(e.name, t.Vector3.FromArray(e.direction), n), i.groundColor = t.Color3.FromArray(e.groundColor)
            }
            if (i.id = e.id, t.Tags.AddTagsTo(i, e.tags), void 0 !== e.intensity && (i.intensity = e.intensity), e.range && (i.range = e.range), i.diffuse = t.Color3.FromArray(e.diffuse), i.specular = t.Color3.FromArray(e.specular), e.excludedMeshesIds && (i._excludedMeshesIds = e.excludedMeshesIds), e.animations)
                for (var o = 0; o < e.animations.length; o++) {
                    var r = e.animations[o];
                    i.animations.push(c(r))
                }
            e.autoAnimate && n.beginAnimation(i, e.autoAnimateFrom, e.autoAnimateTo, e.autoAnimateLoop, 1)
        }, p = function(e, n) {
            var i = new t.FreeCamera(e.name, t.Vector3.FromArray(e.position), n);
            if (i.id = e.id, t.Tags.AddTagsTo(i, e.tags), e.parentId && (i._waitingParentId = e.parentId), e.target ? i.setTarget(t.Vector3.FromArray(e.target)) : i.rotation = t.Vector3.FromArray(e.rotation), e.lockedTargetId && (i._waitingLockedTargetId = e.lockedTargetId), i.fov = e.fov, i.minZ = e.minZ, i.maxZ = e.maxZ, i.speed = e.speed, i.inertia = e.inertia, i.checkCollisions = e.checkCollisions, i.applyGravity = e.applyGravity, e.ellipsoid && (i.ellipsoid = t.Vector3.FromArray(e.ellipsoid)), e.animations)
                for (var o = 0; o < e.animations.length; o++) {
                    var r = e.animations[o];
                    i.animations.push(c(r))
                }
            return e.autoAnimate && n.beginAnimation(i, e.autoAnimateFrom, e.autoAnimateTo, e.autoAnimateLoop, 1), i.layerMask = e.layerMask && !isNaN(e.layerMask) ? Math.abs(parseInt(e.layerMask)) : 4294967295, i
        }, d = function(t, e) {
            var n = t.id;
            return e.getGeometryByID(n)
        }, m = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Box(e.id, n, e.size, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, g = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Sphere(e.id, n, e.segments, e.diameter, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, f = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Cylinder(e.id, n, e.height, e.diameterTop, e.diameterBottom, e.tessellation, e.subdivisions, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, y = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Torus(e.id, n, e.diameter, e.thickness, e.tessellation, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, _ = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Ground(e.id, n, e.width, e.height, e.subdivisions, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, v = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.Plane(e.id, n, e.size, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, b = function(e, n) {
            if (d(e, n))
                return null;
            var i = new t.Geometry.Primitives.TorusKnot(e.id, n, e.radius, e.tube, e.radialSegments, e.tubularSegments, e.p, e.q, e.canBeRegenerated, null);
            return t.Tags.AddTagsTo(i, e.tags), n.pushGeometry(i, !0), i
        }, w = function(e, n, i) {
            if (d(e, n))
                return null;
            var o = new t.Geometry(e.id, n);
            return t.Tags.AddTagsTo(o, e.tags), e.delayLoadingFile ? (o.delayLoadState = t.Engine.DELAYLOADSTATE_NOTLOADED, o.delayLoadingFile = i + e.delayLoadingFile, o._boundingInfo = new t.BoundingInfo(t.Vector3.FromArray(e.boundingBoxMinimum), t.Vector3.FromArray(e.boundingBoxMaximum)), o._delayInfo = [], e.hasUVs && o._delayInfo.push(t.VertexBuffer.UVKind), e.hasUVs2 && o._delayInfo.push(t.VertexBuffer.UV2Kind), e.hasColors && o._delayInfo.push(t.VertexBuffer.ColorKind), e.hasMatricesIndices && o._delayInfo.push(t.VertexBuffer.MatricesIndicesKind), e.hasMatricesWeights && o._delayInfo.push(t.VertexBuffer.MatricesWeightsKind), o._delayLoadingFunction = M) : M(e, o), n.pushGeometry(o, !0), o
        }, x = function(e, n, i) {
            var o = new t.Mesh(e.name, n);
            if (o.id = e.id, t.Tags.AddTagsTo(o, e.tags), o.position = t.Vector3.FromArray(e.position), e.rotationQuaternion ? o.rotationQuaternion = t.Quaternion.FromArray(e.rotationQuaternion) : e.rotation && (o.rotation = t.Vector3.FromArray(e.rotation)), o.scaling = t.Vector3.FromArray(e.scaling), e.localMatrix ? o.setPivotMatrix(t.Matrix.FromArray(e.localMatrix)) : e.pivotMatrix && o.setPivotMatrix(t.Matrix.FromArray(e.pivotMatrix)), o.setEnabled(e.isEnabled), o.isVisible = e.isVisible, o.infiniteDistance = e.infiniteDistance, o.showBoundingBox = e.showBoundingBox, o.showSubMeshesBoundingBox = e.showSubMeshesBoundingBox, void 0 !== e.pickable && (o.isPickable = e.pickable), o.receiveShadows = e.receiveShadows, o.billboardMode = e.billboardMode, void 0 !== e.visibility && (o.visibility = e.visibility), o.checkCollisions = e.checkCollisions, o._shouldGenerateFlatShading = e.useFlatShading, e.parentId && (o.parent = n.getLastEntryByID(e.parentId)), e.delayLoadingFile ? (o.delayLoadState = t.Engine.DELAYLOADSTATE_NOTLOADED, o.delayLoadingFile = i + e.delayLoadingFile, o._boundingInfo = new t.BoundingInfo(t.Vector3.FromArray(e.boundingBoxMinimum), t.Vector3.FromArray(e.boundingBoxMaximum)), o._delayInfo = [], e.hasUVs && o._delayInfo.push(t.VertexBuffer.UVKind), e.hasUVs2 && o._delayInfo.push(t.VertexBuffer.UV2Kind), e.hasColors && o._delayInfo.push(t.VertexBuffer.ColorKind), e.hasMatricesIndices && o._delayInfo.push(t.VertexBuffer.MatricesIndicesKind), e.hasMatricesWeights && o._delayInfo.push(t.VertexBuffer.MatricesWeightsKind), o._delayLoadingFunction = D, t.SceneLoader.ForceFullSceneLoadingForIncremental && o._checkDelayState()) : D(e, o), e.materialId ? o.setMaterialByID(e.materialId) : o.material = null, e.skeletonId > -1 && (o.skeleton = n.getLastSkeletonByID(e.skeletonId)), e.physicsImpostor && (n.isPhysicsEnabled() || n.enablePhysics(), o.setPhysicsState({impostor: e.physicsImpostor,mass: e.physicsMass,friction: e.physicsFriction,restitution: e.physicsRestitution})), e.animations)
                for (var r = 0; r < e.animations.length; r++) {
                    var s = e.animations[r];
                    o.animations.push(c(s))
                }
            if (e.autoAnimate && n.beginAnimation(o, e.autoAnimateFrom, e.autoAnimateTo, e.autoAnimateLoop, 1), o.layerMask = e.layerMask && !isNaN(e.layerMask) ? Math.abs(parseInt(e.layerMask)) : 4294967295, e.instances)
                for (var a = 0; a < e.instances.length; a++) {
                    var l = e.instances[a], h = o.createInstance(l.name);
                    if (t.Tags.AddTagsTo(h, l.tags), h.position = t.Vector3.FromArray(l.position), l.rotationQuaternion ? h.rotationQuaternion = t.Quaternion.FromArray(l.rotationQuaternion) : l.rotation && (h.rotation = t.Vector3.FromArray(l.rotation)), h.scaling = t.Vector3.FromArray(l.scaling), h.checkCollisions = o.checkCollisions, e.animations)
                        for (r = 0; r < e.animations.length; r++)
                            s = e.animations[r], h.animations.push(c(s))
                            }
            return o
        }, C = function(t, e, n) {
            e = e instanceof Array ? e : [e];
            for (var i in e)
                if (t.name === e[i])
                    return n.push(t.id), !0;
            return t.parentId && -1 !== n.indexOf(t.parentId) ? (n.push(t.id), !0) : !1
        }, M = function(e, n) {
            var i = new t.VertexData, o = e.positions;
            o && i.set(o, t.VertexBuffer.PositionKind);
            var r = e.normals;
            r && i.set(r, t.VertexBuffer.NormalKind);
            var s = e.uvs;
            s && i.set(s, t.VertexBuffer.UVKind);
            var a = e.uv2s;
            a && i.set(a, t.VertexBuffer.UV2Kind);
            var l = e.colors;
            l && i.set(l, t.VertexBuffer.ColorKind);
            var h = e.matricesIndices;
            h && i.set(h, t.VertexBuffer.MatricesIndicesKind);
            var c = e.matricesWeights;
            c && i.set(c, t.VertexBuffer.MatricesWeightsKind);
            var u = e.indices;
            u && (i.indices = u), n.setAllVerticesData(i, e.updatable)
        }, D = function(e, n) {
            var i = n.getScene(), o = e.geometryId;
            if (o) {
                var r = i.getGeometryByID(o);
                r && r.applyToMesh(n)
            } else if (e.positions && e.normals && e.indices) {
                if (n.setVerticesData(t.VertexBuffer.PositionKind, e.positions, !1), n.setVerticesData(t.VertexBuffer.NormalKind, e.normals, !1), e.uvs && n.setVerticesData(t.VertexBuffer.UVKind, e.uvs, !1), e.uvs2 && n.setVerticesData(t.VertexBuffer.UV2Kind, e.uvs2, !1), e.colors && n.setVerticesData(t.VertexBuffer.ColorKind, e.colors, !1), e.matricesIndices)
                    if (e.matricesIndices._isExpanded)
                        delete e.matricesIndices._isExpanded, n.setVerticesData(t.VertexBuffer.MatricesIndicesKind, e.matricesIndices, !1);
                    else {
                        for (var s = [], a = 0; a < e.matricesIndices.length; a++) {
                            var l = e.matricesIndices[a];
                            s.push(255 & l), s.push((65280 & l) >> 8), s.push((16711680 & l) >> 16), s.push(l >> 24)
                        }
                        n.setVerticesData(t.VertexBuffer.MatricesIndicesKind, s, !1)
                    }
                e.matricesWeights && n.setVerticesData(t.VertexBuffer.MatricesWeightsKind, e.matricesWeights, !1), n.setIndices(e.indices)
            }
            if (e.subMeshes) {
                n.subMeshes = [];
                for (var h = 0; h < e.subMeshes.length; h++) {
                    var c = e.subMeshes[h];
                    new t.SubMesh(c.materialIndex, c.verticesStart, c.verticesCount, c.indexStart, c.indexCount, n)
                }
            }
            n._shouldGenerateFlatShading && (n.convertToFlatShadedMesh(), delete n._shouldGenerateFlatShading), n.computeWorldMatrix(!0), i._selectionOctree && i._selectionOctree.addMesh(n)
        };
        t.SceneLoader.RegisterPlugin({extensions: ".babylon",importMesh: function(t, e, n, o, a, h, c) {
                                     for (var u = JSON.parse(n), p = [], d = [], m = [], g = 0; g < u.meshes.length; g++) {
                                     var f = u.meshes[g];
                                     if (!t || C(f, t, m)) {
                                     if (t instanceof Array && delete t[t.indexOf(f.name)], f.materialId) {
                                     var y = -1 !== d.indexOf(f.materialId);
                                     if (!y)
                                     for (var _ = 0; _ < u.multiMaterials.length; _++) {
                                     var v = u.multiMaterials[_];
                                     if (v.id == f.materialId) {
                                     for (var b = 0; b < v.materials.length; b++) {
                                     var w = v.materials[b];
                                     d.push(w), r(w, u, e, o)
                                     }
                                     d.push(v.id), s(v, e), y = !0;
                                     break
                                     }
                                     }
                                     y || (d.push(f.materialId), r(f.materialId, u, e, o))
                                     }
                                     if (f.skeletonId > -1 && e.skeletons) {
                                     var M = p.indexOf(f.skeletonId) > -1;
                                     if (!M)
                                     for (var D = 0; D < u.skeletons.length; D++) {
                                     var B = u.skeletons[D];
                                     B.id === f.skeletonId && (c.push(i(B, e)), p.push(B.id))
                                     }
                                     }
                                     var A = x(f, e, o);
                                     a.push(A)
                                     }
                                     }
                                     if (u.particleSystems)
                                     for (g = 0; g < u.particleSystems.length; g++) {
                                     var E = u.particleSystems[g];
                                     -1 !== m.indexOf(E.emitterId) && h.push(l(E, e, o))
                                     }
                                     return !0
                                     },load: function(e, n, r) {
                                     var c = JSON.parse(n);
                                     e.useDelayedTextureLoading = c.useDelayedTextureLoading && !t.SceneLoader.ForceFullSceneLoadingForIncremental, e.autoClear = c.autoClear, e.clearColor = t.Color3.FromArray(c.clearColor), e.ambientColor = t.Color3.FromArray(c.ambientColor), e.gravity = t.Vector3.FromArray(c.gravity), c.fogMode && 0 !== c.fogMode && (e.fogMode = c.fogMode, e.fogColor = t.Color3.FromArray(c.fogColor), e.fogStart = c.fogStart, e.fogEnd = c.fogEnd, e.fogDensity = c.fogDensity);
                                     for (var d = 0; d < c.lights.length; d++) {
                                     var C = c.lights[d];
                                     u(C, e)
                                     }
                                     for (d = 0; d < c.cameras.length; d++) {
                                     var M = c.cameras[d];
                                     p(M, e)
                                     }
                                     if (c.activeCameraID && e.setActiveCameraByID(c.activeCameraID), c.materials)
                                     for (d = 0; d < c.materials.length; d++) {
                                     var D = c.materials[d];
                                     o(D, e, r)
                                     }
                                     if (c.multiMaterials)
                                     for (d = 0; d < c.multiMaterials.length; d++) {
                                     var B = c.multiMaterials[d];
                                     s(B, e)
                                     }
                                     if (c.skeletons)
                                     for (d = 0; d < c.skeletons.length; d++) {
                                     var A = c.skeletons[d];
                                     i(A, e)
                                     }
                                     var E = c.geometries;
                                     if (E) {
                                     var T = E.boxes;
                                     if (T)
                                     for (d = 0; d < T.length; d++) {
                                     var S = T[d];
                                     m(S, e)
                                     }
                                     var L = E.spheres;
                                     if (L)
                                     for (d = 0; d < L.length; d++) {
                                     var O = L[d];
                                     g(O, e)
                                     }
                                     var P = E.cylinders;
                                     if (P)
                                     for (d = 0; d < P.length; d++) {
                                     var I = P[d];
                                     f(I, e)
                                     }
                                     var N = E.toruses;
                                     if (N)
                                     for (d = 0; d < N.length; d++) {
                                     var R = N[d];
                                     y(R, e)
                                     }
                                     var k = E.grounds;
                                     if (k)
                                     for (d = 0; d < k.length; d++) {
                                     var V = k[d];
                                     _(V, e)
                                     }
                                     var F = E.planes;
                                     if (F)
                                     for (d = 0; d < F.length; d++) {
                                     var Y = F[d];
                                     v(Y, e)
                                     }
                                     var z = E.torusKnots;
                                     if (z)
                                     for (d = 0; d < z.length; d++) {
                                     var j = z[d];
                                     b(j, e)
                                     }
                                     var W = E.vertexData;
                                     if (W)
                                     for (d = 0; d < W.length; d++) {
                                     var G = W[d];
                                     w(G, e, r)
                                     }
                                     }
                                     for (d = 0; d < c.meshes.length; d++) {
                                     var U = c.meshes[d];
                                     x(U, e, r)
                                     }
                                     for (d = 0; d < e.cameras.length; d++) {
                                     var H = e.cameras[d];
                                     if (H._waitingParentId && (H.parent = e.getLastEntryByID(H._waitingParentId), delete H._waitingParentId), H instanceof t.FreeCamera) {
                                     var q = H;
                                     q._waitingLockedTargetId && (q.lockedTarget = e.getLastEntryByID(q._waitingLockedTargetId), delete q._waitingLockedTargetId)
                                     }
                                     }
                                     if (c.particleSystems)
                                     for (d = 0; d < c.particleSystems.length; d++) {
                                     var X = c.particleSystems[d];
                                     l(X, e, r)
                                     }
                                     if (c.lensFlareSystems)
                                     for (d = 0; d < c.lensFlareSystems.length; d++) {
                                     var K = c.lensFlareSystems[d];
                                     a(K, e, r)
                                     }
                                     if (c.shadowGenerators)
                                     for (d = 0; d < c.shadowGenerators.length; d++) {
                                     var Z = c.shadowGenerators[d];
                                     h(Z, e)
                                     }
                                     return !0
                                     }})
    }(t.Internals || (t.Internals = {}));
    t.Internals
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r, s) {
            this.name = e, this.cellSize = o, this.sprites = new Array, this.renderingGroupId = 0, this._vertexDeclaration = [3, 4, 4, 4], this._vertexStrideSize = 60, this._capacity = i, this._spriteTexture = new t.Texture(n, r, !0, !1), this._spriteTexture.wrapU = t.Texture.CLAMP_ADDRESSMODE, this._spriteTexture.wrapV = t.Texture.CLAMP_ADDRESSMODE, this._epsilon = void 0 === s ? .01 : s, this._scene = r, this._scene.spriteManagers.push(this), this._vertexDeclaration = [3, 4, 4, 4], this._vertexStrideSize = 60, this._vertexBuffer = r.getEngine().createDynamicVertexBuffer(i * this._vertexStrideSize * 4);
            for (var a = [], l = 0, h = 0; i > h; h++)
                a.push(l), a.push(l + 1), a.push(l + 2), a.push(l), a.push(l + 2), a.push(l + 3), l += 4;
            this._indexBuffer = r.getEngine().createIndexBuffer(a), this._vertices = new Float32Array(i * this._vertexStrideSize), this._effectBase = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest"], ["diffuseSampler"], ""), this._effectFog = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest", "vFogInfos", "vFogColor"], ["diffuseSampler"], "#define FOG")
        }
        return e.prototype._appendSpriteVertex = function(t, e, n, i, o) {
            var r = 15 * t;
            0 == n ? n = this._epsilon : 1 == n && (n = 1 - this._epsilon), 0 == i ? i = this._epsilon : 1 == i && (i = 1 - this._epsilon), this._vertices[r] = e.position.x, this._vertices[r + 1] = e.position.y, this._vertices[r + 2] = e.position.z, this._vertices[r + 3] = e.angle, this._vertices[r + 4] = e.size, this._vertices[r + 5] = n, this._vertices[r + 6] = i, this._vertices[r + 7] = e.invertU ? 1 : 0, this._vertices[r + 8] = e.invertV ? 1 : 0;
            var s = e.cellIndex / o >> 0;
            this._vertices[r + 9] = e.cellIndex - s * o, this._vertices[r + 10] = s, this._vertices[r + 11] = e.color.r, this._vertices[r + 12] = e.color.g, this._vertices[r + 13] = e.color.b, this._vertices[r + 14] = e.color.a
        }, e.prototype.render = function() {
            if (this._effectBase.isReady() && this._effectFog.isReady() && this._spriteTexture && this._spriteTexture.isReady()) {
                for (var e = this._scene.getEngine(), n = this._spriteTexture.getBaseSize(), i = t.Tools.GetDeltaTime(), o = Math.min(this._capacity, this.sprites.length), r = n.width / this.cellSize, s = 0, a = 0; o > a; a++) {
                    var l = this.sprites[a];
                    l && (l._animate(i), this._appendSpriteVertex(s++, l, 0, 0, r), this._appendSpriteVertex(s++, l, 1, 0, r), this._appendSpriteVertex(s++, l, 1, 1, r), this._appendSpriteVertex(s++, l, 0, 1, r))
                }
                e.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices, o * this._vertexStrideSize);
                var h = this._effectBase;
                this._scene.fogMode !== t.Scene.FOGMODE_NONE && (h = this._effectFog), e.enableEffect(h);
                var c = this._scene.getViewMatrix();
                h.setTexture("diffuseSampler", this._spriteTexture), h.setMatrix("view", c), h.setMatrix("projection", this._scene.getProjectionMatrix()), h.setFloat2("textureInfos", this.cellSize / n.width, this.cellSize / n.height), this._scene.fogMode !== t.Scene.FOGMODE_NONE && (h.setFloat4("vFogInfos", this._scene.fogMode, this._scene.fogStart, this._scene.fogEnd, this._scene.fogDensity), h.setColor3("vFogColor", this._scene.fogColor)), e.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, h), h.setBool("alphaTest", !0), e.setColorWrite(!1), e.draw(!0, 0, 6 * o), e.setColorWrite(!0), h.setBool("alphaTest", !1), e.setAlphaMode(t.Engine.ALPHA_COMBINE), e.draw(!0, 0, 6 * o), e.setAlphaMode(t.Engine.ALPHA_DISABLE)
            }
        }, e.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._spriteTexture && (this._spriteTexture.dispose(), this._spriteTexture = null);
            var t = this._scene.spriteManagers.indexOf(this);
            this._scene.spriteManagers.splice(t, 1), this.onDispose && this.onDispose()
        }, e
    }();
    t.SpriteManager = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n) {
            this.name = e, this.color = new t.Color4(1, 1, 1, 1), this.size = 1, this.angle = 0, this.cellIndex = 0, this.invertU = 0, this.invertV = 0, this.animations = new Array, this._animationStarted = !1, this._loopAnimation = !1, this._fromIndex = 0, this._toIndex = 0, this._delay = 0, this._direction = 1, this._frameCount = 0, this._time = 0, this._manager = n, this._manager.sprites.push(this), this.position = t.Vector3.Zero(), this._colliderMesh = t.Mesh.CreatePlane("_sprite_" + e, n.cellSize / 4, n._scene), this._colliderMesh.material = new t.StandardMaterial("_", n._scene), this._colliderMesh.material.backFaceCulling = !1, this._colliderMesh.sprite = this, this._colliderMesh.isVisible = !1, this._colliderMesh.position = this.position, this._colliderMesh.rotation = t.Vector3.Zero()
        }
        return e.prototype.playAnimation = function(t, e, n, i) {
            this._fromIndex = t, this._toIndex = e, this._loopAnimation = n, this._delay = i, this._animationStarted = !0, this._direction = e > t ? 1 : -1, this.cellIndex = t, this._time = 0
        }, e.prototype.stopAnimation = function() {
            this._animationStarted = !1
        }, e.prototype.updateCollider = function() {
            var t = this._manager._scene.activeCamera.position, e = t.subtract(this.position).normalize();
            this._colliderMesh.position = this.position, this._colliderMesh.rotation.x = Math.acos(e.y) + Math.PI / 2, this._colliderMesh.rotation.y = Math.atan2(e.x, e.z), this._colliderMesh.rotation.z = 0
        }, e.prototype._animate = function(t) {
            this._animationStarted && (this._time += t, this._time > this._delay && (this._time = this._time % this._delay, this.cellIndex += this._direction, this.cellIndex == this._toIndex && (this._loopAnimation ? this.cellIndex = this._fromIndex : (this._animationStarted = !1, this.disposeWhenFinishedAnimating && this.dispose()))))
        }, e.prototype.dispose = function() {
            for (var t = 0; t < this._manager.sprites.length; t++)
                this._manager.sprites[t] == this && this._manager.sprites.splice(t, 1);
            this._colliderMesh.dispose()
        }, e
    }();
    t.Sprite = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r) {
            this.name = e, this._vertexDeclaration = [2], this._vertexStrideSize = 8, this.texture = n ? new t.Texture(n, i, !0) : null, this.isBackground = void 0 === o ? !0 : o, this.color = void 0 === r ? new t.Color4(1, 1, 1, 1) : r, this._scene = i, this._scene.layers.push(this);
            var s = [];
            s.push(1, 1), s.push(-1, 1), s.push(-1, -1), s.push(1, -1), this._vertexBuffer = i.getEngine().createVertexBuffer(s);
            var a = [];
            a.push(0), a.push(1), a.push(2), a.push(0), a.push(2), a.push(3), this._indexBuffer = i.getEngine().createIndexBuffer(a), this._effect = this._scene.getEngine().createEffect("layer", ["position"], ["textureMatrix", "color"], ["textureSampler"], "")
        }
        return e.prototype.render = function() {
            if (this._effect.isReady() && this.texture && this.texture.isReady()) {
                var e = this._scene.getEngine();
                e.enableEffect(this._effect), e.setState(!1), this._effect.setTexture("textureSampler", this.texture), this._effect.setMatrix("textureMatrix", this.texture.getTextureMatrix()), this._effect.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a), e.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect), e.setAlphaMode(t.Engine.ALPHA_COMBINE), e.draw(!0, 0, 6), e.setAlphaMode(t.Engine.ALPHA_DISABLE)
            }
        }, e.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this.texture && (this.texture.dispose(), this.texture = null);
            var t = this._scene.layers.indexOf(this);
            this._scene.layers.splice(t, 1), this.onDispose && this.onDispose()
        }, e
    }();
    t.Layer = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e() {
            this.position = t.Vector3.Zero(), this.direction = t.Vector3.Zero(), this.color = new t.Color4(0, 0, 0, 0), this.colorStep = new t.Color4(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.angle = 0, this.angularSpeed = 0
        }
        return e
    }();
    t.Particle = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function(t, e) {
        if (t == e)
            return t;
        var n = Math.random();
        return n * (e - t) + t
    }, n = function() {
        function n(n, i, o) {
            var r = this;
            this.name = n, this.renderingGroupId = 0, this.emitter = null, this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this.targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.blendMode = t.ParticleSystem.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.gravity = t.Vector3.Zero(), this.direction1 = new t.Vector3(0, 1, 0), this.direction2 = new t.Vector3(0, 1, 0), this.minEmitBox = new t.Vector3(-.5, -.5, -.5), this.maxEmitBox = new t.Vector3(.5, .5, .5), this.color1 = new t.Color4(1, 1, 1, 1), this.color2 = new t.Color4(1, 1, 1, 1), this.colorDead = new t.Color4(0, 0, 0, 1), this.textureMask = new t.Color4(1, 1, 1, 1), this.particles = new Array, this._vertexDeclaration = [3, 4, 4], this._vertexStrideSize = 44, this._stockParticles = new Array, this._newPartsExcess = 0, this._scaledColorStep = new t.Color4(0, 0, 0, 0), this._colorDiff = new t.Color4(0, 0, 0, 0), this._scaledDirection = t.Vector3.Zero(), this._scaledGravity = t.Vector3.Zero(), this._currentRenderId = -1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this.id = n, this._capacity = i, this._scene = o, o.particleSystems.push(this), this._vertexBuffer = o.getEngine().createDynamicVertexBuffer(i * this._vertexStrideSize * 4);
            for (var s = [], a = 0, l = 0; i > l; l++)
                s.push(a), s.push(a + 1), s.push(a + 2), s.push(a), s.push(a + 2), s.push(a + 3), a += 4;
            this._indexBuffer = o.getEngine().createIndexBuffer(s), this._vertices = new Float32Array(i * this._vertexStrideSize), this.startDirectionFunction = function(n, i, o) {
                var s = e(r.direction1.x, r.direction2.x), a = e(r.direction1.y, r.direction2.y), l = e(r.direction1.z, r.direction2.z);
                t.Vector3.TransformNormalFromFloatsToRef(s * n, a * n, l * n, i, o)
            }, this.startPositionFunction = function(n, i) {
                var o = e(r.minEmitBox.x, r.maxEmitBox.x), s = e(r.minEmitBox.y, r.maxEmitBox.y), a = e(r.minEmitBox.z, r.maxEmitBox.z);
                t.Vector3.TransformCoordinatesFromFloatsToRef(o, s, a, n, i)
            }
        }
        return n.prototype.getCapacity = function() {
            return this._capacity
        }, n.prototype.isAlive = function() {
            return this._alive
        }, n.prototype.isStarted = function() {
            return this._started
        }, n.prototype.start = function() {
            this._started = !0, this._stopped = !1, this._actualFrame = 0
        }, n.prototype.stop = function() {
            this._stopped = !0
        }, n.prototype._appendParticleVertex = function(t, e, n, i) {
            var o = 11 * t;
            this._vertices[o] = e.position.x, this._vertices[o + 1] = e.position.y, this._vertices[o + 2] = e.position.z, this._vertices[o + 3] = e.color.r, this._vertices[o + 4] = e.color.g, this._vertices[o + 5] = e.color.b, this._vertices[o + 6] = e.color.a, this._vertices[o + 7] = e.angle, this._vertices[o + 8] = e.size, this._vertices[o + 9] = n, this._vertices[o + 10] = i
        }, n.prototype._update = function(n) {
            this._alive = this.particles.length > 0;
            for (var i = 0; i < this.particles.length; i++) {
                var o = this.particles[i];
                o.age += this._scaledUpdateSpeed, o.age >= o.lifeTime ? (this._stockParticles.push(this.particles.splice(i, 1)[0]), i--) : (o.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep), o.color.addInPlace(this._scaledColorStep), o.color.a < 0 && (o.color.a = 0), o.angle += o.angularSpeed * this._scaledUpdateSpeed, o.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection), o.position.addInPlace(this._scaledDirection), this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity), o.direction.addInPlace(this._scaledGravity))
            }
            var r;
            for (r = this.emitter.position ? this.emitter.getWorldMatrix() : t.Matrix.Translation(this.emitter.x, this.emitter.y, this.emitter.z), i = 0; n > i && this.particles.length != this._capacity; i++) {
                0 !== this._stockParticles.length ? (o = this._stockParticles.pop(), o.age = 0) : o = new t.Particle, this.particles.push(o);
                var s = e(this.minEmitPower, this.maxEmitPower);
                this.startDirectionFunction(s, r, o.direction), o.lifeTime = e(this.minLifeTime, this.maxLifeTime), o.size = e(this.minSize, this.maxSize), o.angularSpeed = e(this.minAngularSpeed, this.maxAngularSpeed), this.startPositionFunction(r, o.position);
                var a = e(0, 1);
                t.Color4.LerpToRef(this.color1, this.color2, a, o.color), this.colorDead.subtractToRef(o.color, this._colorDiff), this._colorDiff.scaleToRef(1 / o.lifeTime, o.colorStep)
            }
        }, n.prototype._getEffect = function() {
            var t = [];
            this._scene.clipPlane && t.push("#define CLIPPLANE");
            var e = t.join("\n");
            return this._cachedDefines != e && (this._cachedDefines = e, this._effect = this._scene.getEngine().createEffect("particles", ["position", "color", "options"], ["invView", "view", "projection", "vClipPlane", "textureMask"], ["diffuseSampler"], e)), this._effect
        }, n.prototype.animate = function() {
            if (this._started) {
                var t = this._getEffect();
                if (this.emitter && t.isReady() && this.particleTexture && this.particleTexture.isReady() && this._currentRenderId !== this._scene.getRenderId()) {
                    this._currentRenderId = this._scene.getRenderId(), this._scaledUpdateSpeed = this.updateSpeed * this._scene.getAnimationRatio();
                    var e;
                    this.manualEmitCount > -1 ? (e = this.manualEmitCount, this.manualEmitCount = 0) : e = this.emitRate;
                    var n = e * this._scaledUpdateSpeed >> 0;
                    this._newPartsExcess += e * this._scaledUpdateSpeed - n, this._newPartsExcess > 1 && (n += this._newPartsExcess >> 0, this._newPartsExcess -= this._newPartsExcess >> 0), this._alive = !1, this._stopped ? n = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(n), this._stopped && (this._alive || (this._started = !1, this.disposeOnStop && this._scene._toBeDisposed.push(this)));
                    for (var i = 0, o = 0; o < this.particles.length; o++) {
                        var r = this.particles[o];
                        this._appendParticleVertex(i++, r, 0, 0), this._appendParticleVertex(i++, r, 1, 0), this._appendParticleVertex(i++, r, 1, 1), this._appendParticleVertex(i++, r, 0, 1)
                    }
                    var s = this._scene.getEngine();
                    s.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices, this.particles.length * this._vertexStrideSize)
                }
            }
        }, n.prototype.render = function() {
            var e = this._getEffect();
            if (!(this.emitter && e.isReady() && this.particleTexture && this.particleTexture.isReady() && this.particles.length))
                return 0;
            var n = this._scene.getEngine();
            n.enableEffect(e);
            var i = this._scene.getViewMatrix();
            if (e.setTexture("diffuseSampler", this.particleTexture), e.setMatrix("view", i), e.setMatrix("projection", this._scene.getProjectionMatrix()), e.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._scene.clipPlane) {
                var o = this._scene.clipPlane, r = i.clone();
                r.invert(), e.setMatrix("invView", r), e.setFloat4("vClipPlane", o.normal.x, o.normal.y, o.normal.z, o.d)
            }
            return n.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, e), n.setAlphaMode(this.blendMode === t.ParticleSystem.BLENDMODE_ONEONE ? t.Engine.ALPHA_ADD : t.Engine.ALPHA_COMBINE), this.forceDepthWrite && n.setDepthWrite(!0), n.draw(!0, 0, 6 * this.particles.length), n.setAlphaMode(t.Engine.ALPHA_DISABLE), this.particles.length
        }, n.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null);
            var t = this._scene.particleSystems.indexOf(this);
            this._scene.particleSystems.splice(t, 1), this.onDispose && this.onDispose()
        }, n.prototype.clone = function(e, n) {
            var i = new t.ParticleSystem(e, this._capacity, this._scene);
            return t.Tools.DeepCopy(this, i, ["particles"], ["_vertexDeclaration", "_vertexStrideSize"]), void 0 === n && (n = this.emitter), i.emitter = n, this.particleTexture && (i.particleTexture = new t.Texture(this.particleTexture.url, this._scene)), i.start(), i
        }, n.BLENDMODE_ONEONE = 0, n.BLENDMODE_STANDARD = 1, n
    }();
    t.ParticleSystem = n
}(BABYLON || (BABYLON = {}));

var BABYLON;
!function(t) {
    var e = function() {
        function e(t, n, i, o, r) {
            this.name = t, this.targetProperty = n, this.framePerSecond = i, this.dataType = o, this.loopMode = r, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this.targetPropertyPath = n.split("."), this.dataType = o, this.loopMode = void 0 === r ? e.ANIMATIONLOOPMODE_CYCLE : r
        }
        return e.prototype.isStopped = function() {
            return this._stopped
        }, e.prototype.getKeys = function() {
            return this._keys
        }, e.prototype.floatInterpolateFunction = function(t, e, n) {
            return t + (e - t) * n
        }, e.prototype.quaternionInterpolateFunction = function(e, n, i) {
            return t.Quaternion.Slerp(e, n, i)
        }, e.prototype.vector3InterpolateFunction = function(e, n, i) {
            return t.Vector3.Lerp(e, n, i)
        }, e.prototype.color3InterpolateFunction = function(e, n, i) {
            return t.Color3.Lerp(e, n, i)
        }, e.prototype.clone = function() {
            var t = new e(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.loopMode);
            return t.setKeys(this._keys), t
        }, e.prototype.setKeys = function(t) {
            this._keys = t.slice(0), this._offsetsCache = {}, this._highLimitsCache = {}
        }, e.prototype._interpolate = function(t, n, i, o, r) {
            if (i === e.ANIMATIONLOOPMODE_CONSTANT && n > 0)
                return r.clone ? r.clone() : r;
            this.currentFrame = t;
            for (var s = 0; s < this._keys.length; s++)
                if (this._keys[s + 1].frame >= t) {
                    var a = this._keys[s].value, l = this._keys[s + 1].value, h = (t - this._keys[s].frame) / (this._keys[s + 1].frame - this._keys[s].frame);
                    switch (this.dataType) {
                        case e.ANIMATIONTYPE_FLOAT:
                            switch (i) {
                                case e.ANIMATIONLOOPMODE_CYCLE:
                                case e.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.floatInterpolateFunction(a, l, h);
                                case e.ANIMATIONLOOPMODE_RELATIVE:
                                    return o * n + this.floatInterpolateFunction(a, l, h)
                            }
                            break;
                        case e.ANIMATIONTYPE_QUATERNION:
                            var c = null;
                            switch (i) {
                                case e.ANIMATIONLOOPMODE_CYCLE:
                                case e.ANIMATIONLOOPMODE_CONSTANT:
                                    c = this.quaternionInterpolateFunction(a, l, h);
                                    break;
                                case e.ANIMATIONLOOPMODE_RELATIVE:
                                    c = this.quaternionInterpolateFunction(a, l, h).add(o.scale(n))
                            }
                            return c;
                        case e.ANIMATIONTYPE_VECTOR3:
                            switch (i) {
                                case e.ANIMATIONLOOPMODE_CYCLE:
                                case e.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.vector3InterpolateFunction(a, l, h);
                                case e.ANIMATIONLOOPMODE_RELATIVE:
                                    return this.vector3InterpolateFunction(a, l, h).add(o.scale(n))
                            }
                        case e.ANIMATIONTYPE_COLOR3:
                            switch (i) {
                                case e.ANIMATIONLOOPMODE_CYCLE:
                                case e.ANIMATIONLOOPMODE_CONSTANT:
                                    return this.color3InterpolateFunction(a, l, h);
                                case e.ANIMATIONLOOPMODE_RELATIVE:
                                    return this.color3InterpolateFunction(a, l, h).add(o.scale(n))
                            }
                        case e.ANIMATIONTYPE_MATRIX:
                            switch (i) {
                                case e.ANIMATIONLOOPMODE_CYCLE:
                                case e.ANIMATIONLOOPMODE_CONSTANT:
                                case e.ANIMATIONLOOPMODE_RELATIVE:
                                    return a
                            }
                    }
                    break
                }
            return this._keys[this._keys.length - 1].value
        }, e.prototype.animate = function(t, n, i, o, r) {
            if (!this.targetPropertyPath || this.targetPropertyPath.length < 1)
                return this._stopped = !0, !1;
            var s = !0;
            if (0 != this._keys[0].frame) {
                var a = {frame: 0,value: this._keys[0].value};
                this._keys.splice(0, 0, a)
            }
            (n < this._keys[0].frame || n > this._keys[this._keys.length - 1].frame) && (n = this._keys[0].frame), (i < this._keys[0].frame || i > this._keys[this._keys.length - 1].frame) && (i = this._keys[this._keys.length - 1].frame);
            var l = i - n, h = t * this.framePerSecond * r / 1e3;
            if (h > l && !o)
                c = 0, s = !1, u = this._keys[this._keys.length - 1].value;
            else {
                var c = 0, u = 0;
                if (this.loopMode != e.ANIMATIONLOOPMODE_CYCLE) {
                    var p = i.toString() + n.toString();
                    if (!this._offsetsCache[p]) {
                        var d = this._interpolate(n, 0, e.ANIMATIONLOOPMODE_CYCLE), m = this._interpolate(i, 0, e.ANIMATIONLOOPMODE_CYCLE);
                        switch (this.dataType) {
                            case e.ANIMATIONTYPE_FLOAT:
                                this._offsetsCache[p] = m - d;
                                break;
                            case e.ANIMATIONTYPE_QUATERNION:
                                this._offsetsCache[p] = m.subtract(d);
                                break;
                            case e.ANIMATIONTYPE_VECTOR3:
                                this._offsetsCache[p] = m.subtract(d);
                            case e.ANIMATIONTYPE_COLOR3:
                                this._offsetsCache[p] = m.subtract(d)
                        }
                        this._highLimitsCache[p] = m
                    }
                    u = this._highLimitsCache[p], c = this._offsetsCache[p]
                }
            }
            var g = h / l >> 0, f = s ? n + h % l : i, y = this._interpolate(f, g, this.loopMode, c, u);
            if (this.targetPropertyPath.length > 1) {
                for (var _ = this._target[this.targetPropertyPath[0]], v = 1; v < this.targetPropertyPath.length - 1; v++)
                    _ = _[this.targetPropertyPath[v]];
                _[this.targetPropertyPath[this.targetPropertyPath.length - 1]] = y
            } else
                this._target[this.targetPropertyPath[0]] = y;
            return this._target.markAsDirty && this._target.markAsDirty(this.targetProperty), s || (this._stopped = !0), s
        }, Object.defineProperty(e, "ANIMATIONTYPE_FLOAT", {get: function() {
                                 return e._ANIMATIONTYPE_FLOAT
                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONTYPE_VECTOR3", {get: function() {
                                                                                            return e._ANIMATIONTYPE_VECTOR3
                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONTYPE_QUATERNION", {get: function() {
                                                                                                                                                       return e._ANIMATIONTYPE_QUATERNION
                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONTYPE_MATRIX", {get: function() {
                                                                                                                                                                                                                  return e._ANIMATIONTYPE_MATRIX
                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONTYPE_COLOR3", {get: function() {
                                                                                                                                                                                                                                                                             return e._ANIMATIONTYPE_COLOR3
                                                                                                                                                                                                                                                                             },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONLOOPMODE_RELATIVE", {get: function() {
                                                                                                                                                                                                                                                                                                                                        return e._ANIMATIONLOOPMODE_RELATIVE
                                                                                                                                                                                                                                                                                                                                        },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONLOOPMODE_CYCLE", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                   return e._ANIMATIONLOOPMODE_CYCLE
                                                                                                                                                                                                                                                                                                                                                                                                   },enumerable: !0,configurable: !0}), Object.defineProperty(e, "ANIMATIONLOOPMODE_CONSTANT", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                              return e._ANIMATIONLOOPMODE_CONSTANT
                                                                                                                                                                                                                                                                                                                                                                                                                                                              },enumerable: !0,configurable: !0}), e._ANIMATIONTYPE_FLOAT = 0, e._ANIMATIONTYPE_VECTOR3 = 1, e._ANIMATIONTYPE_QUATERNION = 2, e._ANIMATIONTYPE_MATRIX = 3, e._ANIMATIONTYPE_COLOR3 = 4, e._ANIMATIONLOOPMODE_RELATIVE = 0, e._ANIMATIONLOOPMODE_CYCLE = 1, e._ANIMATIONLOOPMODE_CONSTANT = 2, e
    }();
    t.Animation = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e, n, i, o, r, s, a) {
            "undefined" == typeof n && (n = 0), "undefined" == typeof i && (i = 100), "undefined" == typeof o && (o = !1), "undefined" == typeof r && (r = 1), this.target = e, this.fromFrame = n, this.toFrame = i, this.loopAnimation = o, this.speedRatio = r, this.onAnimationEnd = s, this._animations = new Array, this._paused = !1, this.animationStarted = !1, a && this.appendAnimations(e, a), this._scene = t, t._activeAnimatables.push(this)
        }
        return t.prototype.appendAnimations = function(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i._target = t, this._animations.push(i)
            }
        }, t.prototype.getAnimationByTargetProperty = function(t) {
            for (var e = this._animations, n = 0; n < e.length; n++)
                if (e[n].targetProperty === t)
                    return e[n];
            return null
        }, t.prototype.pause = function() {
            this._paused = !0
        }, t.prototype.restart = function() {
            this._paused = !1
        }, t.prototype.stop = function() {
            var t = this._scene._activeAnimatables.indexOf(this);
            t > -1 && this._scene._activeAnimatables.splice(t, 1), this.onAnimationEnd && this.onAnimationEnd()
        }, t.prototype._animate = function(t) {
            if (this._paused)
                return !0;
            this._localDelayOffset || (this._localDelayOffset = t);
            for (var e = !1, n = this._animations, i = 0; i < n.length; i++) {
                var o = n[i], r = o.animate(t - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this.speedRatio);
                e = e || r
            }
            return !e && this.onAnimationEnd && this.onAnimationEnd(), e
        }, t
    }();
    t.Animatable = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i) {
            "undefined" == typeof i && (i = 2), this.maxDepth = i, this.dynamicContent = new Array, this._maxBlockCapacity = n || 64, this._selectionContent = new t.SmartArray(1024), this._creationFunc = e
        }
        return e.prototype.update = function(t, n, i) {
            e._CreateBlocks(t, n, i, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
        }, e.prototype.addMesh = function(t) {
            for (var e = 0; e < this.blocks.length; e++) {
                var n = this.blocks[e];
                n.addEntry(t)
            }
        }, e.prototype.select = function(t, e) {
            this._selectionContent.reset();
            for (var n = 0; n < this.blocks.length; n++) {
                var i = this.blocks[n];
                i.select(t, this._selectionContent, e)
            }
            return e ? this._selectionContent.concat(this.dynamicContent) : this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, e.prototype.intersects = function(t, e, n) {
            this._selectionContent.reset();
            for (var i = 0; i < this.blocks.length; i++) {
                var o = this.blocks[i];
                o.intersects(t, e, this._selectionContent, n)
            }
            return n ? this._selectionContent.concat(this.dynamicContent) : this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, e.prototype.intersectsRay = function(t) {
            this._selectionContent.reset();
            for (var e = 0; e < this.blocks.length; e++) {
                var n = this.blocks[e];
                n.intersectsRay(t, this._selectionContent)
            }
            return this._selectionContent.concatWithNoDuplicate(this.dynamicContent), this._selectionContent
        }, e._CreateBlocks = function(e, n, i, o, r, s, a, l) {
            a.blocks = new Array;
            for (var h = new t.Vector3((n.x - e.x) / 2, (n.y - e.y) / 2, (n.z - e.z) / 2), c = 0; 2 > c; c++)
                for (var u = 0; 2 > u; u++)
                    for (var p = 0; 2 > p; p++) {
                        var d = e.add(h.multiplyByFloats(c, u, p)), m = e.add(h.multiplyByFloats(c + 1, u + 1, p + 1)), g = new t.OctreeBlock(d, m, o, r + 1, s, l);
                        g.addEntries(i), a.blocks.push(g)
                    }
        }, e.CreationFuncForMeshes = function(t, e) {
            t.getBoundingInfo().boundingBox.intersectsMinMax(e.minPoint, e.maxPoint) && e.entries.push(t)
        }, e.CreationFuncForSubMeshes = function(t, e) {
            t.getBoundingInfo().boundingBox.intersectsMinMax(e.minPoint, e.maxPoint) && e.entries.push(t)
        }, e
    }();
    t.Octree = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n, i, o, r) {
            this.entries = new Array, this._boundingVectors = new Array, this._capacity = n, this._depth = i, this._maxDepth = o, this._creationFunc = r, this._minPoint = t, this._maxPoint = e, this._boundingVectors.push(t.clone()), this._boundingVectors.push(e.clone()), this._boundingVectors.push(t.clone()), this._boundingVectors[2].x = e.x, this._boundingVectors.push(t.clone()), this._boundingVectors[3].y = e.y, this._boundingVectors.push(t.clone()), this._boundingVectors[4].z = e.z, this._boundingVectors.push(e.clone()), this._boundingVectors[5].z = t.z, this._boundingVectors.push(e.clone()), this._boundingVectors[6].x = t.x, this._boundingVectors.push(e.clone()), this._boundingVectors[7].y = t.y
        }
        return Object.defineProperty(e.prototype, "capacity", {get: function() {
                                     return this._capacity
                                     },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "minPoint", {get: function() {
                                                                                                return this._minPoint
                                                                                                },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "maxPoint", {get: function() {
                                                                                                                                                           return this._maxPoint
                                                                                                                                                           },enumerable: !0,configurable: !0}), e.prototype.addEntry = function(t) {
            if (this.blocks)
                for (var e = 0; e < this.blocks.length; e++) {
                    var n = this.blocks[e];
                    n.addEntry(t)
                }
            else
                this._creationFunc(t, this), this.entries.length > this.capacity && this._depth < this._maxDepth && this.createInnerBlocks()
                }, e.prototype.addEntries = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        this.addEntry(n)
                    }
                }, e.prototype.select = function(e, n, i) {
                    if (t.BoundingBox.IsInFrustum(this._boundingVectors, e)) {
                        if (this.blocks) {
                            for (var o = 0; o < this.blocks.length; o++) {
                                var r = this.blocks[o];
                                r.select(e, n, i)
                            }
                            return
                        }
                        i ? n.concat(this.entries) : n.concatWithNoDuplicate(this.entries)
                    }
                }, e.prototype.intersects = function(e, n, i, o) {
                    if (t.BoundingBox.IntersectsSphere(this._minPoint, this._maxPoint, e, n)) {
                        if (this.blocks) {
                            for (var r = 0; r < this.blocks.length; r++) {
                                var s = this.blocks[r];
                                s.intersects(e, n, i, o)
                            }
                            return
                        }
                        o ? i.concat(this.entries) : i.concatWithNoDuplicate(this.entries)
                    }
                }, e.prototype.intersectsRay = function(t, e) {
                    if (t.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
                        if (this.blocks) {
                            for (var n = 0; n < this.blocks.length; n++) {
                                var i = this.blocks[n];
                                i.intersectsRay(t, e)
                            }
                            return
                        }
                        e.concatWithNoDuplicate(this.entries)
                    }
                }, e.prototype.createInnerBlocks = function() {
                    t.Octree._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc)
                }, e
    }();
    t.OctreeBlock = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o) {
            this.name = e, this.children = new Array, this.animations = new Array, this._worldTransform = new t.Matrix, this._absoluteTransform = new t.Matrix, this._invertedAbsoluteTransform = new t.Matrix, this._skeleton = n, this._matrix = o, this._baseMatrix = o, n.bones.push(this), i ? (this._parent = i, i.children.push(this)) : this._parent = null, this._updateDifferenceMatrix()
        }
        return e.prototype.getParent = function() {
            return this._parent
        }, e.prototype.getLocalMatrix = function() {
            return this._matrix
        }, e.prototype.getBaseMatrix = function() {
            return this._baseMatrix
        }, e.prototype.getWorldMatrix = function() {
            return this._worldTransform
        }, e.prototype.getInvertedAbsoluteTransform = function() {
            return this._invertedAbsoluteTransform
        }, e.prototype.getAbsoluteMatrix = function() {
            for (var t = this._matrix.clone(), e = this._parent; e; )
                t = t.multiply(e.getLocalMatrix()), e = e.getParent();
            return t
        }, e.prototype.updateMatrix = function(t) {
            this._matrix = t, this._skeleton._markAsDirty(), this._updateDifferenceMatrix()
        }, e.prototype._updateDifferenceMatrix = function() {
            this._parent ? this._matrix.multiplyToRef(this._parent._absoluteTransform, this._absoluteTransform) : this._absoluteTransform.copyFrom(this._matrix), this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform);
            for (var t = 0; t < this.children.length; t++)
                this.children[t]._updateDifferenceMatrix()
                }, e.prototype.markAsDirty = function() {
                    this._skeleton._markAsDirty()
                }, e
    }();
    t.Bone = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i) {
            this.name = e, this.id = n, this.bones = new Array, this._isDirty = !0, this._identity = t.Matrix.Identity(), this.bones = [], this._scene = i, i.skeletons.push(this)
        }
        return e.prototype.getTransformMatrices = function() {
            return this._transformMatrices
        }, e.prototype._markAsDirty = function() {
            this._isDirty = !0
        }, e.prototype.prepare = function() {
            if (this._isDirty) {
                this._transformMatrices && this._transformMatrices.length === 16 * (this.bones.length + 1) || (this._transformMatrices = new Float32Array(16 * (this.bones.length + 1)));
                for (var t = 0; t < this.bones.length; t++) {
                    var e = this.bones[t], n = e.getParent();
                    n ? e.getLocalMatrix().multiplyToRef(n.getWorldMatrix(), e.getWorldMatrix()) : e.getWorldMatrix().copyFrom(e.getLocalMatrix()), e.getInvertedAbsoluteTransform().multiplyToArray(e.getWorldMatrix(), this._transformMatrices, 16 * t)
                }
                this._identity.copyToArray(this._transformMatrices, 16 * this.bones.length), this._isDirty = !1
            }
        }, e.prototype.getAnimatables = function() {
            if (!this._animatables || this._animatables.length != this.bones.length) {
                this._animatables = [];
                for (var t = 0; t < this.bones.length; t++)
                    this._animatables.push(this.bones[t])
                    }
            return this._animatables
        }, e.prototype.clone = function(e, n) {
            for (var i = new t.Skeleton(e, n || e, this._scene), o = 0; o < this.bones.length; o++) {
                var r = this.bones[o], s = null;
                if (r.getParent()) {
                    var a = this.bones.indexOf(r.getParent());
                    s = i.bones[a]
                }
                var l = new t.Bone(r.name, i, s, r.getBaseMatrix());
                t.Tools.DeepCopy(r.animations, l.animations)
            }
            return i
        }, e
    }();
    t.Skeleton = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i) {
            this.name = e, this.id = n, this.bones = new Array, this._isDirty = !0, this._identity = t.Matrix.Identity(), this.bones = [], this._scene = i, i.skeletons.push(this)
        }
        return e.prototype.getTransformMatrices = function() {
            return this._transformMatrices
        }, e.prototype._markAsDirty = function() {
            this._isDirty = !0
        }, e.prototype.prepare = function() {
            if (this._isDirty) {
                this._transformMatrices && this._transformMatrices.length === 16 * (this.bones.length + 1) || (this._transformMatrices = new Float32Array(16 * (this.bones.length + 1)));
                for (var t = 0; t < this.bones.length; t++) {
                    var e = this.bones[t], n = e.getParent();
                    n ? e.getLocalMatrix().multiplyToRef(n.getWorldMatrix(), e.getWorldMatrix()) : e.getWorldMatrix().copyFrom(e.getLocalMatrix()), e.getInvertedAbsoluteTransform().multiplyToArray(e.getWorldMatrix(), this._transformMatrices, 16 * t)
                }
                this._identity.copyToArray(this._transformMatrices, 16 * this.bones.length), this._isDirty = !1
            }
        }, e.prototype.getAnimatables = function() {
            if (!this._animatables || this._animatables.length != this.bones.length) {
                this._animatables = [];
                for (var t = 0; t < this.bones.length; t++)
                    this._animatables.push(this.bones[t])
                    }
            return this._animatables
        }, e.prototype.clone = function(e, n) {
            for (var i = new t.Skeleton(e, n || e, this._scene), o = 0; o < this.bones.length; o++) {
                var r = this.bones[o], s = null;
                if (r.getParent()) {
                    var a = this.bones.indexOf(r.getParent());
                    s = i.bones[a]
                }
                var l = new t.Bone(r.name, i, s, r.getBaseMatrix());
                t.Tools.DeepCopy(r.animations, l.animations)
            }
            return i
        }, e
    }();
    t.Skeleton = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r, s, a, l, h) {
            this.name = e, this.width = -1, this.height = -1, this._reusable = !1, this._textures = new t.SmartArray(2), this._currentRenderTextureInd = 0, null != s ? (this._camera = s, this._scene = s.getScene(), s.attachPostProcess(this), this._engine = this._scene.getEngine()) : this._engine = l, this._renderRatio = r, this.renderTargetSamplingMode = a ? a : t.Texture.NEAREST_SAMPLINGMODE, this._reusable = h || !1, o = o || [], o.push("textureSampler"), this._effect = this._engine.createEffect({vertex: "postprocess",fragment: n}, ["position"], i || [], o, "")
        }
        return e.prototype.isReusable = function() {
            return this._reusable
        }, e.prototype.activate = function(t, e) {
            t = t || this._camera;
            var n = t.getScene(), i = (e ? e._width : this._engine.getRenderingCanvas().width) * this._renderRatio, o = (e ? e._height : this._engine.getRenderingCanvas().height) * this._renderRatio;
            if (this.width !== i || this.height !== o) {
                if (this._textures.length > 0) {
                    for (var r = 0; r < this._textures.length; r++)
                        this._engine._releaseTexture(this._textures.data[r]);
                    this._textures.reset()
                }
                this.width = i, this.height = o, this._textures.push(this._engine.createRenderTargetTexture({width: this.width,height: this.height}, {generateMipMaps: !1,generateDepthBuffer: t._postProcesses.indexOf(this) === t._postProcessesTakenIndices[0],samplingMode: this.renderTargetSamplingMode})), this._reusable && this._textures.push(this._engine.createRenderTargetTexture({width: this.width,height: this.height}, {generateMipMaps: !1,generateDepthBuffer: t._postProcesses.indexOf(this) === t._postProcessesTakenIndices[0],samplingMode: this.renderTargetSamplingMode})), this.onSizeChanged && this.onSizeChanged()
            }
            this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd]), this.onActivate && this.onActivate(t), this._engine.clear(n.clearColor, n.autoClear || n.forceWireframe, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2)
        }, e.prototype.apply = function() {
            return this._effect.isReady() ? (this._engine.enableEffect(this._effect), this._engine.setState(!1), this._engine.setAlphaMode(t.Engine.ALPHA_DISABLE), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this._effect._bindTexture("textureSampler", this._textures.data[this._currentRenderTextureInd]), this.onApply && this.onApply(this._effect), this._effect) : null
        }, e.prototype.dispose = function(t) {
            if (t = t || this._camera, this._textures.length > 0) {
                for (var e = 0; e < this._textures.length; e++)
                    this._engine._releaseTexture(this._textures.data[e]);
                this._textures.reset()
            }
            t.detachPostProcess(this);
            var n = t._postProcesses.indexOf(this);
            n === t._postProcessesTakenIndices[0] && t._postProcessesTakenIndices.length > 0 && (this._camera._postProcesses[t._postProcessesTakenIndices[0]].width = -1)
        }, e
    }();
    t.PostProcess = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t) {
            this._vertexDeclaration = [2], this._vertexStrideSize = 8, this._scene = t;
            var e = [];
            e.push(1, 1), e.push(-1, 1), e.push(-1, -1), e.push(1, -1), this._vertexBuffer = t.getEngine().createVertexBuffer(e);
            var n = [];
            n.push(0), n.push(1), n.push(2), n.push(0), n.push(2), n.push(3), this._indexBuffer = t.getEngine().createIndexBuffer(n)
        }
        return t.prototype._prepareFrame = function(t) {
            var e = this._scene.activeCamera._postProcesses, n = this._scene.activeCamera._postProcessesTakenIndices;
            return 0 !== n.length && this._scene.postProcessesEnabled ? (e[this._scene.activeCamera._postProcessesTakenIndices[0]].activate(this._scene.activeCamera, t), !0) : !1
        }, t.prototype._finalizeFrame = function(t, e) {
            var n = this._scene.activeCamera._postProcesses, i = this._scene.activeCamera._postProcessesTakenIndices;
            if (0 !== i.length && this._scene.postProcessesEnabled) {
                for (var o = this._scene.getEngine(), r = 0; r < i.length && (r < i.length - 1 ? n[i[r + 1]].activate(this._scene.activeCamera) : e ? o.bindFramebuffer(e) : o.restoreDefaultFramebuffer(), !t); r++) {
                    var s = n[i[r]].apply();
                    s && (o.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, s), o.draw(!0, 0, 6))
                }
                o.setDepthBuffer(!0), o.setDepthWrite(!0)
            }
        }, t.prototype.dispose = function() {
            this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
        }, t
    }();
    t.PostProcessManager = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s) {
            t.call(this, e, "pass", null, null, n, i, o, r, s)
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.PassPostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r, s, a, l, h) {
            "undefined" == typeof a && (a = t.Texture.BILINEAR_SAMPLINGMODE);
            var c = this;
            e.call(this, n, "blur", ["screenSize", "direction", "blurWidth"], null, r, s, a, l, h), this.direction = i, this.blurWidth = o, this.onApply = function(t) {
                t.setFloat2("screenSize", c.width, c.height), t.setVector2("direction", c.direction), t.setFloat("blurWidth", c.blurWidth)
            }
        }
        return __extends(n, e), n
    }(t.PostProcess);
    t.BlurPostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r, s, a, l, h, c, u) {
            var p = this;
            e.call(this, n, "refraction", ["baseColor", "depth", "colorLevel"], ["refractionSampler"], a, l, h, c, u), this.color = o, this.depth = r, this.colorLevel = s, this.onActivate = function(e) {
                p._refRexture = p._refRexture || new t.Texture(i, e.getScene())
            }, this.onApply = function(t) {
                t.setColor3("baseColor", p.color), t.setFloat("depth", p.depth), t.setFloat("colorLevel", p.colorLevel), t.setTexture("refractionSampler", p._refRexture)
            }
        }
        return __extends(n, e), n.prototype.dispose = function(t) {
            this._refRexture && this._refRexture.dispose(), e.prototype.dispose.call(this, t)
        }, n
    }(t.PostProcess);
    t.RefractionPostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s) {
            t.call(this, e, "blackAndWhite", null, null, n, i, o, r, s)
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.BlackAndWhitePostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s, a) {
            var l = this;
            t.call(this, e, "convolution", ["kernel", "screenSize"], null, i, o, r, s, a), this.kernel = n, this.onApply = function(t) {
                t.setFloat2("screenSize", l.width, l.height), t.setArray("kernel", l.kernel)
            }
        }
        return __extends(e, t), e.EdgeDetect0Kernel = [1, 0, -1, 0, 0, 0, -1, 0, 1], e.EdgeDetect1Kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0], e.EdgeDetect2Kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1], e.SharpenKernel = [0, -1, 0, -1, 5, -1, 0, -1, 0], e.EmbossKernel = [-2, -1, 0, -1, 1, 1, 0, 1, 2], e.GaussianKernel = [0, 1, 0, 1, 1, 1, 0, 1, 0], e
    }(t.PostProcess);
    t.ConvolutionPostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s, a) {
            var l = this;
            t.call(this, e, "filter", ["kernelMatrix"], null, i, o, r, s, a), this.kernelMatrix = n, this.onApply = function(t) {
                t.setMatrix("kernelMatrix", l.kernelMatrix)
            }
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.FilterPostProcess = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s) {
            var a = this;
            t.call(this, e, "fxaa", ["texelSize"], null, n, i, o, r, s), this.onSizeChanged = function() {
                a.texelWidth = 1 / a.width, a.texelHeight = 1 / a.height
            }, this.onApply = function(t) {
                t.setFloat2("texelSize", a.texelWidth, a.texelHeight)
            }
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.FxaaPostProcess = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r) {
            this.size = e, this.position = n, this.dispose = function() {
                this.texture && this.texture.dispose();
                var t = this._system.lensFlares.indexOf(this);
                this._system.lensFlares.splice(t, 1)
            }, this.color = i || new t.Color3(1, 1, 1), this.texture = o ? new t.Texture(o, r.getScene(), !0) : null, this._system = r, r.lensFlares.push(this)
        }
        return e
    }();
    t.LensFlare = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n) {
            this.name = t, this.lensFlares = new Array, this.borderLimit = 300, this._vertexDeclaration = [2], this._vertexStrideSize = 8, this._isEnabled = !0, this._scene = n, this._emitter = e, n.lensFlareSystems.push(this), this.meshesSelectionPredicate = function(t) {
                return t.material && t.isVisible && t.isEnabled() && t.checkCollisions && 0 != (t.layerMask & n.activeCamera.layerMask)
            };
            var i = [];
            i.push(1, 1), i.push(-1, 1), i.push(-1, -1), i.push(1, -1), this._vertexBuffer = n.getEngine().createVertexBuffer(i);
            var o = [];
            o.push(0), o.push(1), o.push(2), o.push(0), o.push(2), o.push(3), this._indexBuffer = n.getEngine().createIndexBuffer(o), this._effect = this._scene.getEngine().createEffect("lensFlare", ["position"], ["color", "viewportMatrix"], ["textureSampler"], "")
        }
        return Object.defineProperty(e.prototype, "isEnabled", {get: function() {
                                     return this._isEnabled
                                     },set: function(t) {
                                     this._isEnabled = t
                                     },enumerable: !0,configurable: !0}), e.prototype.getScene = function() {
            return this._scene
        }, e.prototype.getEmitter = function() {
            return this._emitter
        }, e.prototype.getEmitterPosition = function() {
            return this._emitter.getAbsolutePosition ? this._emitter.getAbsolutePosition() : this._emitter.position
        }, e.prototype.computeEffectivePosition = function(e) {
            var n = this.getEmitterPosition();
            return n = t.Vector3.Project(n, t.Matrix.Identity(), this._scene.getTransformMatrix(), e), this._positionX = n.x, this._positionY = n.y, n = t.Vector3.TransformCoordinates(this.getEmitterPosition(), this._scene.getViewMatrix()), n.z > 0 && this._positionX > e.x && this._positionX < e.x + e.width && this._positionY > e.y && this._positionY < e.y + e.height ? !0 : !1
        }, e.prototype._isVisible = function() {
            if (!this._isEnabled)
                return !1;
            var e = this.getEmitterPosition(), n = e.subtract(this._scene.activeCamera.position), i = n.length();
            n.normalize();
            var o = new t.Ray(this._scene.activeCamera.position, n), r = this._scene.pickWithRay(o, this.meshesSelectionPredicate, !0);
            return !r.hit || r.distance > i
        }, e.prototype.render = function() {
            if (!this._effect.isReady())
                return !1;
            var e = this._scene.getEngine(), n = this._scene.activeCamera.viewport, i = n.toGlobal(e);
            if (!this.computeEffectivePosition(i))
                return !1;
            if (!this._isVisible())
                return !1;
            var o, r;
            o = this._positionX < this.borderLimit + i.x ? this.borderLimit + i.x - this._positionX : this._positionX > i.x + i.width - this.borderLimit ? this._positionX - i.x - i.width + this.borderLimit : 0, r = this._positionY < this.borderLimit + i.y ? this.borderLimit + i.y - this._positionY : this._positionY > i.y + i.height - this.borderLimit ? this._positionY - i.y - i.height + this.borderLimit : 0;
            var s = o > r ? o : r;
            s > this.borderLimit && (s = this.borderLimit);
            var a = 1 - s / this.borderLimit;
            if (0 > a)
                return !1;
            a > 1 && (a = 1);
            var l = i.x + i.width / 2, h = i.y + i.height / 2, c = l - this._positionX, u = h - this._positionY;
            e.enableEffect(this._effect), e.setState(!1), e.setDepthBuffer(!1), e.setAlphaMode(t.Engine.ALPHA_ADD), e.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect);
            for (var p = 0; p < this.lensFlares.length; p++) {
                var d = this.lensFlares[p], m = l - c * d.position, g = h - u * d.position, f = d.size, y = d.size * e.getAspectRatio(this._scene.activeCamera), _ = 2 * (m / i.width) - 1, v = 1 - 2 * (g / i.height), b = t.Matrix.FromValues(f / 2, 0, 0, 0, 0, y / 2, 0, 0, 0, 0, 1, 0, _, v, 0, 1);
                this._effect.setMatrix("viewportMatrix", b), this._effect.setTexture("textureSampler", d.texture), this._effect.setFloat4("color", d.color.r * a, d.color.g * a, d.color.b * a, 1), e.draw(!0, 0, 6)
            }
            return e.setDepthBuffer(!0), e.setAlphaMode(t.Engine.ALPHA_DISABLE), !0
        }, e.prototype.dispose = function() {
            for (this._vertexBuffer && (this._scene.getEngine()._releaseBuffer(this._vertexBuffer), this._vertexBuffer = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null); this.lensFlares.length; )
                this.lensFlares[0].dispose();
            var t = this._scene.lensFlareSystems.indexOf(this);
            this._scene.lensFlareSystems.splice(t, 1)
        }, e
    }();
    t.LensFlareSystem = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e() {
            this._registeredMeshes = [], this._physicsMaterials = []
        }
        return e.prototype.initialize = function(t) {
            "undefined" == typeof t && (t = 10), this._world = new CANNON.World, this._world.broadphase = new CANNON.NaiveBroadphase, this._world.solver.iterations = t
        }, e.prototype._checkWithEpsilon = function(e) {
            return e < t.PhysicsEngine.Epsilon ? t.PhysicsEngine.Epsilon : e
        }, e.prototype.runOneStep = function(e) {
            this._world.step(e);
            for (var n = 0; n < this._registeredMeshes.length; n++) {
                var i = this._registeredMeshes[n];
                i.isChild || (i.mesh.position.x = i.body.position.x, i.mesh.position.y = i.body.position.z, i.mesh.position.z = i.body.position.y, i.mesh.rotationQuaternion || (i.mesh.rotationQuaternion = new t.Quaternion(0, 0, 0, 1)), i.mesh.rotationQuaternion.x = i.body.quaternion.x, i.mesh.rotationQuaternion.y = i.body.quaternion.z, i.mesh.rotationQuaternion.z = i.body.quaternion.y, i.mesh.rotationQuaternion.w = -i.body.quaternion.w)
            }
        }, e.prototype.setGravity = function(t) {
            this._world.gravity.set(t.x, t.z, t.y)
        }, e.prototype.registerMesh = function(e, n, i) {
            switch (this.unregisterMesh(e), e.computeWorldMatrix(!0), n) {
                case t.PhysicsEngine.SphereImpostor:
                    var o = e.getBoundingInfo().boundingBox, r = o.maximumWorld.x - o.minimumWorld.x, s = o.maximumWorld.y - o.minimumWorld.y, a = o.maximumWorld.z - o.minimumWorld.z;
                    return this._createSphere(Math.max(this._checkWithEpsilon(r), this._checkWithEpsilon(s), this._checkWithEpsilon(a)) / 2, e, i);
                case t.PhysicsEngine.BoxImpostor:
                    o = e.getBoundingInfo().boundingBox;
                    var l = o.minimumWorld, h = o.maximumWorld, c = h.subtract(l).scale(.5);
                    return this._createBox(this._checkWithEpsilon(c.x), this._checkWithEpsilon(c.y), this._checkWithEpsilon(c.z), e, i);
                case t.PhysicsEngine.PlaneImpostor:
                    return this._createPlane(e, i);
                case t.PhysicsEngine.MeshImpostor:
                    var u = e.getVerticesData(t.VertexBuffer.PositionKind), p = e.getIndices();
                    return this._createConvexPolyhedron(u, p, e, i)
            }
            return null
        }, e.prototype._createSphere = function(t, e, n) {
            var i = new CANNON.Sphere(t);
            return n ? this._createRigidBodyFromShape(i, e, n.mass, n.friction, n.restitution) : i
        }, e.prototype._createBox = function(t, e, n, i, o) {
            var r = new CANNON.Box(new CANNON.Vec3(t, n, e));
            return o ? this._createRigidBodyFromShape(r, i, o.mass, o.friction, o.restitution) : r
        }, e.prototype._createPlane = function(t, e) {
            var n = new CANNON.Plane;
            return e ? this._createRigidBodyFromShape(n, t, e.mass, e.friction, e.restitution) : n
        }, e.prototype._createConvexPolyhedron = function(e, n, i, o) {
            var r = [], s = [];
            i.computeWorldMatrix(!0);
            for (var a = 0; a < e.length; a += 3) {
                var l = t.Vector3.Zero();
                t.Vector3.TransformNormalFromFloatsToRef(e[a], e[a + 1], e[a + 2], i.getWorldMatrix(), l), r.push(new CANNON.Vec3(l.x, l.z, l.y))
            }
            for (var h = 0; h < n.length; h += 3)
                s.push([n[h], n[h + 2], n[h + 1]]);
            var c = new CANNON.ConvexPolyhedron(r, s);
            return o ? this._createRigidBodyFromShape(c, i, o.mass, o.friction, o.restitution) : c
        }, e.prototype._addMaterial = function(t, e) {
            var n, i;
            for (n = 0; n < this._physicsMaterials.length; n++)
                if (i = this._physicsMaterials[n], i.friction === t && i.restitution === e)
                    return i;
            var o = new CANNON.Material;
            for (o.friction = t, o.restitution = e, this._physicsMaterials.push(o), n = 0; n < this._physicsMaterials.length; n++) {
                i = this._physicsMaterials[n];
                var r = new CANNON.ContactMaterial(i, o, i.friction * o.friction, i.restitution * o.restitution);
                r.contactEquationStiffness = 1e10, r.contactEquationRegularizationTime = 10, this._world.addContactMaterial(r)
            }
            return o
        }, e.prototype._createRigidBodyFromShape = function(e, n, i, o, r) {
            var s = null;
            n.rotationQuaternion && (s = n.rotationQuaternion.clone(), n.rotationQuaternion = new t.Quaternion(0, 0, 0, 1));
            var a = this._addMaterial(o, r), l = new CANNON.RigidBody(i, e, a);
            return s && (l.quaternion.x = s.x, l.quaternion.z = s.y, l.quaternion.y = s.z, l.quaternion.w = -s.w), l.position.set(n.position.x, n.position.z, n.position.y), this._world.add(l), this._registeredMeshes.push({mesh: n,body: l,material: a}), l
        }, e.prototype.registerMeshesAsCompound = function(t, e) {
            for (var n = new CANNON.Compound, i = 0; i < t.length; i++) {
                var o = t[i].mesh, r = this.registerMesh(o, t[i].impostor);
                0 == i ? n.addChild(r, new CANNON.Vec3(0, 0, 0)) : n.addChild(r, new CANNON.Vec3(o.position.x, o.position.z, o.position.y))
            }
            var s = t[0].mesh, a = this._createRigidBodyFromShape(n, s, e.mass, e.friction, e.restitution);
            return a.parts = t, a
        }, e.prototype._unbindBody = function(t) {
            for (var e = 0; e < this._registeredMeshes.length; e++) {
                var n = this._registeredMeshes[e];
                n.body === t && (n.body = null)
            }
        }, e.prototype.unregisterMesh = function(t) {
            for (var e = 0; e < this._registeredMeshes.length; e++) {
                var n = this._registeredMeshes[e];
                if (n.mesh === t)
                    return n.body && (this._world.remove(n.body), this._unbindBody(n.body)), void this._registeredMeshes.splice(e, 1)
                    }
        }, e.prototype.applyImpulse = function(t, e, n) {
            for (var i = new CANNON.Vec3(n.x, n.z, n.y), o = new CANNON.Vec3(e.x, e.z, e.y), r = 0; r < this._registeredMeshes.length; r++) {
                var s = this._registeredMeshes[r];
                if (s.mesh === t)
                    return void s.body.applyImpulse(o, i)
                    }
        }, e.prototype.createLink = function(t, e, n, i) {
            for (var o = null, r = null, s = 0; s < this._registeredMeshes.length; s++) {
                var a = this._registeredMeshes[s];
                a.mesh === t ? o = a.body : a.mesh === e && (r = a.body)
            }
            if (!o || !r)
                return !1;
            var l = new CANNON.PointToPointConstraint(o, new CANNON.Vec3(n.x, n.z, n.y), r, new CANNON.Vec3(i.x, i.z, i.y));
            return this._world.addConstraint(l), !0
        }, e.prototype.dispose = function() {
            for (; this._registeredMeshes.length; )
                this.unregisterMesh(this._registeredMeshes[0].mesh)
                }, e.prototype.isSupported = function() {
                    return void 0 !== window.CANNON
                }, e
    }();
    t.CannonJSPlugin = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e) {
            this._currentPlugin = e || new t.CannonJSPlugin
        }
        return e.prototype._initialize = function(t) {
            this._currentPlugin.initialize(), this._setGravity(t)
        }, e.prototype._runOneStep = function(t) {
            t > .1 ? t = .1 : 0 >= t && (t = 1 / 60), this._currentPlugin.runOneStep(t)
        }, e.prototype._setGravity = function(e) {
            this.gravity = e || new t.Vector3(0, -9.82, 0), this._currentPlugin.setGravity(this.gravity)
        }, e.prototype._registerMesh = function(t, e, n) {
            return this._currentPlugin.registerMesh(t, e, n)
        }, e.prototype._registerMeshesAsCompound = function(t, e) {
            return this._currentPlugin.registerMeshesAsCompound(t, e)
        }, e.prototype._unregisterMesh = function(t) {
            this._currentPlugin.unregisterMesh(t)
        }, e.prototype._applyImpulse = function(t, e, n) {
            this._currentPlugin.applyImpulse(t, e, n)
        }, e.prototype._createLink = function(t, e, n, i) {
            return this._currentPlugin.createLink(t, e, n, i)
        }, e.prototype.dispose = function() {
            this._currentPlugin.dispose()
        }, e.prototype.isSupported = function() {
            return this._currentPlugin.isSupported()
        }, e.NoImpostor = 0, e.SphereImpostor = 1, e.BoxImpostor = 2, e.PlaneImpostor = 3, e.CompoundImpostor = 4, e.MeshImpostor = 4, e.CapsuleImpostor = 5, e.ConeImpostor = 6, e.CylinderImpostor = 7, e.ConvexHullImpostor = 8, e.Epsilon = .001, e
    }();
    t.PhysicsEngine = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function(e) {
        var n = {};
        if (n.name = e.name, n.id = e.id, n.tags = t.Tags.GetTags(e), e instanceof t.PointLight)
            n.type = 0, n.position = e.position.asArray();
        else if (e instanceof t.DirectionalLight) {
            n.type = 1;
            var i = e;
            n.position = i.position.asArray(), n.direction = i.direction.asArray()
        } else if (e instanceof t.SpotLight) {
            n.type = 2;
            var o = e;
            n.position = o.position.asArray(), n.direction = o.position.asArray(), n.angle = o.angle, n.exponent = o.exponent
        } else if (e instanceof t.HemisphericLight) {
            n.type = 3;
            var r = e;
            n.direction = r.direction.asArray(), n.groundColor = r.groundColor.asArray()
        }
        return e.intensity && (n.intensity = e.intensity), n.range = e.range, n.diffuse = e.diffuse.asArray(), n.specular = e.specular.asArray(), n
    }, n = function(e) {
        var n = {};
        return n.name = e.name, n.tags = t.Tags.GetTags(e), n.id = e.id, n.position = e.position.asArray(), e.parent && (n.parentId = e.parent.id), n.rotation = e.rotation.asArray(), e.lockedTarget && e.lockedTarget.id && (n.lockedTargetId = e.lockedTarget.id), n.fov = e.fov, n.minZ = e.minZ, n.maxZ = e.maxZ, n.speed = e.speed, n.inertia = e.inertia, n.checkCollisions = e.checkCollisions, n.applyGravity = e.applyGravity, e.ellipsoid && (n.ellipsoid = e.ellipsoid.asArray()), i(e, n), n.layerMask = e.layerMask, n
    }, i = function(t, e) {
        if (t.animations) {
            e.animations = [];
            for (var n = 0; n < t.animations.length; n++) {
                var i = t.animations[n];
                e.animations.push(o(i))
            }
        }
    }, o = function(e) {
        var n = {};
        n.name = e.name, n.property = e.targetProperty, n.framePerSecond = e.framePerSecond, n.dataType = e.dataType, n.loopBehavior = e.loopMode;
        var i = e.dataType;
        n.keys = [];
        for (var o = e.getKeys(), r = 0; r < o.length; r++) {
            var s = o[r], a = {};
            switch (a.frame = s.frame, i) {
                case t.Animation.ANIMATIONTYPE_FLOAT:
                    a.values = [s.value];
                    break;
                case t.Animation.ANIMATIONTYPE_QUATERNION:
                case t.Animation.ANIMATIONTYPE_MATRIX:
                case t.Animation.ANIMATIONTYPE_VECTOR3:
                    a.values = s.value.asArray()
            }
            n.keys.push(a)
        }
        return n
    }, r = function(e) {
        var n = {};
        n.name = e.name, n.id = e.id, n.tags = t.Tags.GetTags(e), n.materials = [];
        for (var i = 0; i < e.subMaterials.length; i++) {
            var o = e.subMaterials[i];
            n.materials.push(o ? o.id : null)
        }
        return n
    }, s = function(e) {
        var n = {};
        return n.name = e.name, n.ambient = e.ambientColor.asArray(), n.diffuse = e.diffuseColor.asArray(), n.specular = e.specularColor.asArray(), n.specularPower = e.specularPower, n.emissive = e.emissiveColor.asArray(), n.alpha = e.alpha, n.id = e.id, n.tags = t.Tags.GetTags(e), n.backFaceCulling = e.backFaceCulling, e.diffuseTexture && (n.diffuseTexture = a(e.diffuseTexture)), e.ambientTexture && (n.ambientTexture = a(e.ambientTexture)), e.opacityTexture && (n.opacityTexture = a(e.opacityTexture)), e.reflectionTexture && (n.reflectionTexture = a(e.reflectionTexture)), e.emissiveTexture && (n.emissiveTexture = a(e.emissiveTexture)), e.specularTexture && (n.specularTexture = a(e.specularTexture)), e.bumpTexture && (n.bumpTexture = a(e.bumpTexture)), n
    }, a = function(e) {
        var n = {};
        if (!e.name)
            return null;
        if (e instanceof t.CubeTexture)
            return n.name = e.name, n.hasAlpha = e.hasAlpha, n.level = e.level, n.coordinatesMode = e.coordinatesMode, n;
        if (e instanceof t.MirrorTexture) {
            var o = e;
            n.renderTargetSize = o.getRenderSize(), n.renderList = [];
            for (var r = 0; r < o.renderList.length; r++)
                n.renderList.push(o.renderList[r].id);
            n.mirrorPlane = o.mirrorPlane.asArray()
        } else if (e instanceof t.RenderTargetTexture) {
            var s = e;
            for (n.renderTargetSize = s.getRenderSize(), n.renderList = [], r = 0; r < s.renderList.length; r++)
                n.renderList.push(s.renderList[r].id)
                }
        var a = e;
        return n.name = e.name, n.hasAlpha = e.hasAlpha, n.level = e.level, n.coordinatesIndex = e.coordinatesIndex, n.coordinatesMode = e.coordinatesMode, n.uOffset = a.uOffset, n.vOffset = a.vOffset, n.uScale = a.uScale, n.vScale = a.vScale, n.uAng = a.uAng, n.vAng = a.vAng, n.wAng = a.wAng, n.wrapU = e.wrapU, n.wrapV = e.wrapV, i(e, n), n
    }, l = function(t) {
        var e = {};
        e.name = t.name, e.id = t.id, e.bones = [];
        for (var n = 0; n < t.bones.length; n++) {
            var i = t.bones[n], r = {parentBoneIndex: i.getParent() ? t.bones.indexOf(i.getParent()) : -1,name: i.name,matrix: i.getLocalMatrix().toArray()};
            e.bones.push(r), i.animations && i.animations.length > 0 && (r.animation = o(i.animations[0]))
        }
        return e
    }, h = function(t) {
        var e = {};
        return e.emitterId = t.emitter.id, e.capacity = t.getCapacity(), t.particleTexture && (e.textureName = t.particleTexture.name), e.minAngularSpeed = t.minAngularSpeed, e.maxAngularSpeed = t.maxAngularSpeed, e.minSize = t.minSize, e.maxSize = t.maxSize, e.minLifeTime = t.minLifeTime, e.maxLifeTime = t.maxLifeTime, e.emitRate = t.emitRate, e.minEmitBox = t.minEmitBox.asArray(), e.maxEmitBox = t.maxEmitBox.asArray(), e.gravity = t.gravity.asArray(), e.direction1 = t.direction1.asArray(), e.direction2 = t.direction2.asArray(), e.color1 = t.color1.asArray(), e.color2 = t.color2.asArray(), e.colorDead = t.colorDead.asArray(), e.updateSpeed = t.updateSpeed, e.targetStopDuration = t.targetStopDuration, e.textureMask = t.textureMask.asArray(), e.blendMode = t.blendMode, e
    }, c = function(e) {
        var n = {};
        n.emitterId = e.getEmitter().id, n.borderLimit = e.borderLimit, n.flares = [];
        for (var i = 0; i < e.lensFlares.length; i++) {
            var o = e.lensFlares[i];
            n.flares.push({size: o.size,position: o.position,color: o.color.asArray(),textureName: t.Tools.GetFilename(o.texture.name)})
        }
        return n
    }, u = function(t) {
        var e = {}, n = t.getShadowGenerator();
        e.lightId = t.id, e.mapSize = n.getShadowMap().getRenderSize(), e.useVarianceShadowMap = n.useVarianceShadowMap, e.usePoissonSampling = n.usePoissonSampling, e.renderList = [];
        for (var i = 0; i < n.getShadowMap().renderList.length; i++) {
            var o = n.getShadowMap().renderList[i];
            e.renderList.push(o.id)
        }
        return e
    }, p = [], d = function(e, n) {
        if (!p[e.id]) {
            if (e instanceof t.Geometry.Primitives.Box)
                n.boxes.push(y(e));
            else if (e instanceof t.Geometry.Primitives.Sphere)
                n.spheres.push(_(e));
            else if (e instanceof t.Geometry.Primitives.Cylinder)
                n.cylinders.push(v(e));
            else if (e instanceof t.Geometry.Primitives.Torus)
                n.toruses.push(b(e));
            else if (e instanceof t.Geometry.Primitives.Ground)
                n.grounds.push(w(e));
            else if (e instanceof t.Geometry.Primitives.Plane)
                n.planes.push(x(e));
            else if (e instanceof t.Geometry.Primitives.TorusKnot)
                n.torusKnots.push(C(e));
            else {
                if (e instanceof t.Geometry.Primitives._Primitive)
                    throw new Error("Unknow primitive type");
                n.vertexData.push(g(e))
            }
            p[e.id] = !0
        }
    }, m = function(e) {
        var n = {};
        return n.id = e.id, t.Tags.HasTags(e) && (n.tags = t.Tags.GetTags(e)), n
    }, g = function(e) {
        var n = m(e);
        return e.isVerticesDataPresent(t.VertexBuffer.PositionKind) && (n.positions = e.getVerticesData(t.VertexBuffer.PositionKind)), e.isVerticesDataPresent(t.VertexBuffer.NormalKind) && (n.normals = e.getVerticesData(t.VertexBuffer.NormalKind)), e.isVerticesDataPresent(t.VertexBuffer.UVKind) && (n.uvs = e.getVerticesData(t.VertexBuffer.UVKind)), e.isVerticesDataPresent(t.VertexBuffer.UV2Kind) && (n.uvs2 = e.getVerticesData(t.VertexBuffer.UV2Kind)), e.isVerticesDataPresent(t.VertexBuffer.ColorKind) && (n.colors = e.getVerticesData(t.VertexBuffer.ColorKind)), e.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && (n.matricesIndices = e.getVerticesData(t.VertexBuffer.MatricesIndicesKind), n.matricesIndices._isExpanded = !0), e.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind) && (n.matricesWeights = e.getVerticesData(t.VertexBuffer.MatricesWeightsKind)), n.indices = e.getIndices(), n
    }, f = function(t) {
        var e = m(t);
        return e.canBeRegenerated = t.canBeRegenerated(), e
    }, y = function(t) {
        var e = f(t);
        return e.size = t.size, e
    }, _ = function(t) {
        var e = f(t);
        return e.segments = t.segments, e.diameter = t.diameter, e
    }, v = function(t) {
        var e = f(t);
        return e.height = t.height, e.diameterTop = t.diameterTop, e.diameterBottom = t.diameterBottom, e.tessellation = t.tessellation, e
    }, b = function(t) {
        var e = f(t);
        return e.diameter = t.diameter, e.thickness = t.thickness, e.tessellation = t.tessellation, e
    }, w = function(t) {
        var e = f(t);
        return e.width = t.width, e.height = t.height, e.subdivisions = t.subdivisions, e
    }, x = function(t) {
        var e = f(t);
        return e.size = t.size, e
    }, C = function(t) {
        var e = f(t);
        return e.radius = t.radius, e.tube = t.tube, e.radialSegments = t.radialSegments, e.tubularSegments = t.tubularSegments, e.p = t.p, e.q = t.q, e
    }, M = function(e, n) {
        var o = {};
        o.name = e.name, o.id = e.id, t.Tags.HasTags(e) && (o.tags = t.Tags.GetTags(e)), o.position = e.position.asArray(), e.rotationQuaternion ? o.rotationQuaternion = e.rotationQuaternion.asArray() : e.rotation && (o.rotation = e.rotation.asArray()), o.scaling = e.scaling.asArray(), o.localMatrix = e.getPivotMatrix().asArray(), o.isEnabled = e.isEnabled(), o.isVisible = e.isVisible, o.infiniteDistance = e.infiniteDistance, o.pickable = e.isPickable, o.receiveShadows = e.receiveShadows, o.billboardMode = e.billboardMode, o.visibility = e.visibility, o.checkCollisions = e.checkCollisions, e.parent && (o.parentId = e.parent.id);
        var r = e._geometry;
        if (r) {
            var s = r.id;
            o.geometryId = s, e.getScene().getGeometryByID(s) || d(r, n.geometries), o.subMeshes = [];
            for (var a = 0; a < e.subMeshes.length; a++) {
                var l = e.subMeshes[a];
                o.subMeshes.push({materialIndex: l.materialIndex,verticesStart: l.verticesStart,verticesCount: l.verticesCount,indexStart: l.indexStart,indexCount: l.indexCount})
            }
        }
        if (e.material ? o.materialId = e.material.id : e.material = null, e.skeleton && (o.skeletonId = e.skeleton.id), e.getPhysicsImpostor() !== t.PhysicsEngine.NoImpostor)
            switch (o.physicsMass = e.getPhysicsMass(), o.physicsFriction = e.getPhysicsFriction(), o.physicsRestitution = e.getPhysicsRestitution(), e.getPhysicsImpostor()) {
                case t.PhysicsEngine.BoxImpostor:
                    o.physicsImpostor = 1;
                    break;
                case t.PhysicsEngine.SphereImpostor:
                    o.physicsImpostor = 2
            }
        return i(e, o), o.layerMask = e.layerMask, o
    }, D = function() {
        function i() {
        }
        return i.Serialize = function(i) {
            var o = {};
            o.useDelayedTextureLoading = i.useDelayedTextureLoading, o.autoClear = i.autoClear, o.clearColor = i.clearColor.asArray(), o.ambientColor = i.ambientColor.asArray(), o.gravity = i.gravity.asArray(), i.fogMode && 0 !== i.fogMode && (o.fogMode = i.fogMode, o.fogColor = i.fogColor.asArray(), o.fogStart = i.fogStart, o.fogEnd = i.fogEnd, o.fogDensity = i.fogDensity), o.lights = [];
            for (var a = 0; a < i.lights.length; a++) {
                var m = i.lights[a];
                o.lights.push(e(m))
            }
            for (o.cameras = [], a = 0; a < i.cameras.length; a++) {
                var g = i.cameras[a];
                g instanceof t.FreeCamera && o.cameras.push(n(g))
            }
            for (i.activeCamera && (o.activeCameraID = i.activeCamera.id), o.materials = [], o.multiMaterials = [], a = 0; a < i.materials.length; a++) {
                var f = i.materials[a];
                f instanceof t.StandardMaterial ? o.materials.push(s(f)) : f instanceof t.MultiMaterial && o.multiMaterials.push(r(f))
            }
            for (o.skeletons = [], a = 0; a < i.skeletons.length; a++)
                o.skeletons.push(l(i.skeletons[a]));
            o.geometries = {}, o.geometries.boxes = [], o.geometries.spheres = [], o.geometries.cylinders = [], o.geometries.toruses = [], o.geometries.grounds = [], o.geometries.planes = [], o.geometries.torusKnots = [], o.geometries.vertexData = [], p = [];
            for (var y = i.getGeometries(), a = 0; a < y.length; a++) {
                var _ = y[a];
                _.isReady() && d(_, o.geometries)
            }
            for (o.meshes = [], a = 0; a < i.meshes.length; a++) {
                var v = i.meshes[a];
                if (v instanceof t.Mesh) {
                    var b = v;
                    (b.delayLoadState === t.Engine.DELAYLOADSTATE_LOADED || b.delayLoadState === t.Engine.DELAYLOADSTATE_NONE) && o.meshes.push(M(b, o))
                }
            }
            for (o.particleSystems = [], a = 0; a < i.particleSystems.length; a++)
                o.particleSystems.push(h(i.particleSystems[a]));
            for (o.lensFlareSystems = [], a = 0; a < i.lensFlareSystems.length; a++)
                o.lensFlareSystems.push(c(i.lensFlareSystems[a]));
            for (o.shadowGenerators = [], a = 0; a < i.lights.length; a++)
                m = i.lights[a], m.getShadowGenerator() && o.shadowGenerators.push(u(m));
            return o
        }, i
    }();
    t.SceneSerializer = D
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = 0, n = function() {
        function e(t, e, n) {
            this.pos = t, this.normal = e, this.uv = n
        }
        return e.prototype.clone = function() {
            return new e(this.pos.clone(), this.normal.clone(), this.uv.clone())
        }, e.prototype.flip = function() {
            this.normal.scaleInPlace(-1)
        }, e.prototype.interpolate = function(n, i) {
            return new e(t.Vector3.Lerp(this.pos, n.pos, i), t.Vector3.Lerp(this.normal, n.normal, i), t.Vector2.Lerp(this.uv, n.uv, i))
        }, e
    }(), i = function() {
        function e(t, e) {
            this.normal = t, this.w = e
        }
        return e.FromPoints = function(n, i, o) {
            var r = o.subtract(n), s = i.subtract(n);
            if (0 === r.lengthSquared() || 0 === s.lengthSquared())
                return null;
            var a = t.Vector3.Normalize(t.Vector3.Cross(r, s));
            return new e(a, t.Vector3.Dot(a, n))
        }, e.prototype.clone = function() {
            return new e(this.normal.clone(), this.w)
        }, e.prototype.flip = function() {
            this.normal.scaleInPlace(-1), this.w = -this.w
        }, e.prototype.splitPolygon = function(n, i, r, s, a) {
            for (var l = 0, h = 1, c = 2, u = 3, p = 0, d = [], m = 0; m < n.vertices.length; m++) {
                var g = t.Vector3.Dot(this.normal, n.vertices[m].pos) - this.w, f = g < -e.EPSILON ? c : g > e.EPSILON ? h : l;
                p |= f, d.push(f)
            }
            switch (p) {
                case l:
                    (t.Vector3.Dot(this.normal, n.plane.normal) > 0 ? i : r).push(n);
                    break;
                case h:
                    s.push(n);
                    break;
                case c:
                    a.push(n);
                    break;
                case u:
                    var y = [], _ = [];
                    for (m = 0; m < n.vertices.length; m++) {
                        var v = (m + 1) % n.vertices.length, b = d[m], w = d[v], x = n.vertices[m], C = n.vertices[v];
                        if (b != c && y.push(x), b != h && _.push(b != c ? x.clone() : x), (b | w) == u) {
                            g = (this.w - t.Vector3.Dot(this.normal, x.pos)) / t.Vector3.Dot(this.normal, C.pos.subtract(x.pos));
                            var M = x.interpolate(C, g);
                            y.push(M), _.push(M.clone())
                        }
                    }
                    if (y.length >= 3) {
                        var D = new o(y, n.shared);
                        D.plane && s.push(D)
                    }
                    if (_.length >= 3) {
                        var D = new o(_, n.shared);
                        D.plane && a.push(D)
                    }
            }
        }, e.EPSILON = 1e-5, e
    }(), o = function() {
        function t(t, e) {
            this.vertices = t, this.shared = e, this.plane = i.FromPoints(t[0].pos, t[1].pos, t[2].pos)
        }
        return t.prototype.clone = function() {
            var e = this.vertices.map(function(t) {
                                      return t.clone()
                                      });
            return new t(e, this.shared)
        }, t.prototype.flip = function() {
            this.vertices.reverse().map(function(t) {
                                        t.flip()
                                        }), this.plane.flip()
        }, t
    }(), r = function() {
        function t(t) {
            this.plane = null, this.front = null, this.back = null, this.polygons = [], t && this.build(t)
        }
        return t.prototype.clone = function() {
            var e = new t;
            return e.plane = this.plane && this.plane.clone(), e.front = this.front && this.front.clone(), e.back = this.back && this.back.clone(), e.polygons = this.polygons.map(function(t) {
                                                                                                                                                                                   return t.clone()
                                                                                                                                                                                   }), e
        }, t.prototype.invert = function() {
            for (var t = 0; t < this.polygons.length; t++)
                this.polygons[t].flip();
            this.plane && this.plane.flip(), this.front && this.front.invert(), this.back && this.back.invert();
            var e = this.front;
            this.front = this.back, this.back = e
        }, t.prototype.clipPolygons = function(t) {
            if (!this.plane)
                return t.slice();
            for (var e = [], n = [], i = 0; i < t.length; i++)
                this.plane.splitPolygon(t[i], e, n, e, n);
            return this.front && (e = this.front.clipPolygons(e)), n = this.back ? this.back.clipPolygons(n) : [], e.concat(n)
        }, t.prototype.clipTo = function(t) {
            this.polygons = t.clipPolygons(this.polygons), this.front && this.front.clipTo(t), this.back && this.back.clipTo(t)
        }, t.prototype.allPolygons = function() {
            var t = this.polygons.slice();
            return this.front && (t = t.concat(this.front.allPolygons())), this.back && (t = t.concat(this.back.allPolygons())), t
        }, t.prototype.debug = function() {
        }, t.prototype.build = function(e) {
            if (e.length) {
                this.plane || (this.plane = e[0].plane.clone());
                for (var n = [], i = [], o = 0; o < e.length; o++)
                    this.plane.splitPolygon(e[o], this.polygons, this.polygons, n, i);
                n.length && (this.front || (this.front = new t), this.front.build(n)), i.length && (this.back || (this.back = new t), this.back.build(i))
            }
        }, t
    }(), s = function() {
        function i() {
            this.polygons = new Array, this.matrix = t.Matrix.Identity(), this.position = new t.Vector3(0, 0, 0), this.rotation = new t.Vector3(0, 0, 0), this.scaling = new t.Vector3(1, 1, 1)
        }
        return i.FromMesh = function(r) {
            var s, a, l, h, c, u, p = [];
            if (!(r instanceof t.Mesh))
                throw "BABYLON.CSG: Wrong Mesh type, must be BABYLON.Mesh";
            r.computeWorldMatrix(!0);
            for (var d = r.getWorldMatrix(), m = r.position.clone(), g = r.rotation.clone(), f = r.scaling.clone(), y = r.getIndices(), _ = r.getVerticesData(t.VertexBuffer.PositionKind), v = r.getVerticesData(t.VertexBuffer.NormalKind), b = r.getVerticesData(t.VertexBuffer.UVKind), w = r.subMeshes, x = w.length - 1; x >= 0; x--)
                for (var C = w[x].indexStart, M = w[x].indexCount + w[x].indexStart; M > C; C += 3) {
                    u = [];
                    for (var D = 0; 3 > D; D++)
                        a = new t.Vector3(v[3 * y[C + D]], v[3 * y[C + D] + 1], v[3 * y[C + D] + 2]), l = new t.Vector2(b[2 * y[C + D]], b[2 * y[C + D] + 1]), h = new t.Vector3(_[3 * y[C + D]], _[3 * y[C + D] + 1], _[3 * y[C + D] + 2]), t.Vector3.TransformCoordinatesToRef(h, d, h), t.Vector3.TransformNormalToRef(a, d, a), s = new n(h, a, l), u.push(s);
                    c = new o(u, {subMeshId: x,meshId: e,materialIndex: w[x].materialIndex,objectInstance: w[x].objectInstance,boundingBox: w[x].boundingBox}), c.plane && p.push(c)
                }
            var B = i.FromPolygons(p);
            return B.matrix = d, B.position = m, B.rotation = g, B.scaling = f, e++, B
        }, i.FromPolygons = function(e) {
            var n = new t.CSG;
            return n.polygons = e, n
        }, i.prototype.clone = function() {
            var e = new t.CSG;
            return e.polygons = this.polygons.map(function(t) {
                                                  return t.clone()
                                                  }), e.copyTransformAttributes(this), e
        }, i.prototype.toPolygons = function() {
            return this.polygons
        }, i.prototype.unionInPlace = function(t) {
            var e = new r(this.polygons), n = new r(t.polygons);
            e.clipTo(n), n.clipTo(e), n.invert(), n.clipTo(e), n.invert(), e.build(n.allPolygons()), this.polygons = e.allPolygons()
        }, i.prototype.union = function(t) {
            var e = new r(this.clone().polygons), n = new r(t.clone().polygons);
            return e.clipTo(n), n.clipTo(e), n.invert(), n.clipTo(e), n.invert(), e.build(n.allPolygons()), i.FromPolygons(e.allPolygons()).copyTransformAttributes(this)
        }, i.prototype.subtractInPlace = function(t) {
            var e = new r(this.polygons), n = new r(t.polygons);
            e.invert(), e.clipTo(n), n.clipTo(e), n.invert(), n.clipTo(e), n.invert(), e.build(n.allPolygons()), e.invert(), this.polygons = e.allPolygons()
        }, i.prototype.subtract = function(t) {
            var e = new r(this.clone().polygons), n = new r(t.clone().polygons);
            return e.invert(), e.clipTo(n), n.clipTo(e), n.invert(), n.clipTo(e), n.invert(), e.build(n.allPolygons()), e.invert(), i.FromPolygons(e.allPolygons()).copyTransformAttributes(this)
        }, i.prototype.intersectInPlace = function(t) {
            var e = new r(this.polygons), n = new r(t.polygons);
            e.invert(), n.clipTo(e), n.invert(), e.clipTo(n), n.clipTo(e), e.build(n.allPolygons()), e.invert(), this.polygons = e.allPolygons()
        }, i.prototype.intersect = function(t) {
            var e = new r(this.clone().polygons), n = new r(t.clone().polygons);
            return e.invert(), n.clipTo(e), n.invert(), e.clipTo(n), n.clipTo(e), e.build(n.allPolygons()), e.invert(), i.FromPolygons(e.allPolygons()).copyTransformAttributes(this)
        }, i.prototype.inverseInPlace = function() {
            this.polygons.map(function(t) {
                              t.flip()
                              })
        }, i.prototype.inverse = function() {
            var t = this.clone();
            return t.polygons.map(function(t) {
                                  t.flip()
                                  }), t
        }, i.prototype.copyTransformAttributes = function(t) {
            return this.matrix = t.matrix, this.position = t.position, this.rotation = t.rotation, this.scaling = t.scaling, this
        }, i.prototype.buildMeshGeometry = function(e, n, i) {
            var o = this.matrix.clone();
            o.invert();
            var r, s, a, l = new t.Mesh(e, n), h = [], c = [], u = [], p = [], d = t.Vector3.Zero(), m = t.Vector3.Zero(), g = t.Vector2.Zero(), f = this.polygons, y = [0, 0, 0], _ = {}, v = 0, b = {};
            i && f.sort(function(t, e) {
                        return t.shared.meshId === e.shared.meshId ? t.shared.subMeshId - e.shared.subMeshId : t.shared.meshId - e.shared.meshId
                        });
            for (var w = 0, x = f.length; x > w; w++) {
                r = f[w], b[r.shared.meshId] || (b[r.shared.meshId] = {}), b[r.shared.meshId][r.shared.subMeshId] || (b[r.shared.meshId][r.shared.subMeshId] = {indexStart: +1 / 0,indexEnd: -1 / 0,materialIndex: r.shared.materialIndex,objectInstance: r.shared.objectInstance,boundingBox: r.shared.boundingBox}), a = b[r.shared.meshId][r.shared.subMeshId];
                for (var C = 2, M = r.vertices.length; M > C; C++) {
                    y[0] = 0, y[1] = C - 1, y[2] = C;
                    for (var D = 0; 3 > D; D++)
                        d.copyFrom(r.vertices[y[D]].pos), m.copyFrom(r.vertices[y[D]].normal), g.copyFrom(r.vertices[y[D]].uv), t.Vector3.TransformCoordinatesToRef(d, o, d), t.Vector3.TransformNormalToRef(m, o, m), s = _[d.x + "," + d.y + "," + d.z], ("undefined" == typeof s || u[3 * s] !== m.x || u[3 * s + 1] !== m.y || u[3 * s + 2] !== m.z || p[2 * s] !== g.x || p[2 * s + 1] !== g.y) && (h.push(d.x, d.y, d.z), p.push(g.x, g.y), u.push(m.x, m.y, m.z), s = _[d.x + "," + d.y + "," + d.z] = h.length / 3 - 1), c.push(s), a.indexStart = Math.min(v, a.indexStart), a.indexEnd = Math.max(v, a.indexEnd), v++
                        }
            }
            if (l.setVerticesData(t.VertexBuffer.PositionKind, h), l.setVerticesData(t.VertexBuffer.NormalKind, u), l.setVerticesData(t.VertexBuffer.UVKind, p), l.setIndices(c), i) {
                var B, A = 0;
                l.subMeshes = [];
                for (var E in b) {
                    B = -1;
                    for (var T in b[E]) {
                        a = b[E][T];
                        var S = t.SubMesh.CreateFromIndices(a.materialIndex + A, a.indexStart, a.indexEnd - a.indexStart + 1, l);
                        S.objectInstance = a.objectInstance, S.boundingBox = a.boundingBox, B = Math.max(a.materialIndex, B)
                    }
                    A += ++B
                }
            }
            return l
        }, i.prototype.toMesh = function(t, e, n, i) {
            var o = this.buildMeshGeometry(t, n, i);
            return o.material = e, o.position.copyFrom(this.position), o.rotation.copyFrom(this.rotation), o.scaling.copyFrom(this.scaling), o.computeWorldMatrix(!0), o
        }, i
    }();
    t.CSG = s
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r) {
            var s = this;
            e.call(this, n, "oculusDistortionCorrection", ["LensCenter", "Scale", "ScaleIn", "HmdWarpParam"], null, r.PostProcessScaleFactor, i, t.Texture.BILINEAR_SAMPLINGMODE, null, null), this._isRightEye = o, this._distortionFactors = r.DistortionK, this._postProcessScaleFactor = r.PostProcessScaleFactor, this._lensCenterOffset = r.LensCenterOffset, this.onSizeChanged = function() {
                s.aspectRatio = .5 * s.width / s.height, s._scaleIn = new t.Vector2(2, 2 / s.aspectRatio), s._scaleFactor = new t.Vector2(.5 * (1 / s._postProcessScaleFactor), .5 * (1 / s._postProcessScaleFactor) * s.aspectRatio), s._lensCenter = new t.Vector2(s._isRightEye ? .5 - .5 * s._lensCenterOffset : .5 + .5 * s._lensCenterOffset, .5)
            }, this.onApply = function(t) {
                t.setFloat2("LensCenter", s._lensCenter.x, s._lensCenter.y), t.setFloat2("Scale", s._scaleFactor.x, s._scaleFactor.y), t.setFloat2("ScaleIn", s._scaleIn.x, s._scaleIn.y), t.setFloat4("HmdWarpParam", s._distortionFactors[0], s._distortionFactors[1], s._distortionFactors[2], s._distortionFactors[3])
            }
        }
        return __extends(n, e), n
    }(t.PostProcess);
    t.OculusDistortionCorrectionPostProcess = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function(t) {
        t[t.X = 0] = "X", t[t.Y = 1] = "Y", t[t.Z = 2] = "Z"
    }(t.JoystickAxis || (t.JoystickAxis = {}));
    var e = (t.JoystickAxis, function() {
             function e(n) {
             var i = this;
             this._leftJoystick = n ? !0 : !1, this._joystickIndex = e._globalJoystickIndex, e._globalJoystickIndex++, this._axisTargetedByLeftAndRight = 0, this._axisTargetedByUpAndDown = 1, this.reverseLeftRight = !1, this.reverseUpDown = !1, this._touches = new t.VirtualJoystick.Collection, this.deltaPosition = t.Vector3.Zero(), this._joystickSensibility = 25, this._inversedSensibility = 1 / (this._joystickSensibility / 1e3), this._rotationSpeed = 25, this._inverseRotationSpeed = 1 / (this._rotationSpeed / 1e3), this._rotateOnAxisRelativeToMesh = !1, e.vjCanvas || (window.addEventListener("resize", function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       e.vjCanvasWidth = window.innerWidth, e.vjCanvasHeight = window.innerHeight, e.vjCanvas.width = e.vjCanvasWidth, e.vjCanvas.height = e.vjCanvasHeight, e.halfWidth = e.vjCanvasWidth / 2, e.halfHeight = e.vjCanvasHeight / 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }, !1), e.vjCanvas = document.createElement("canvas"), e.vjCanvasWidth = window.innerWidth, e.vjCanvasHeight = window.innerHeight, e.vjCanvas.width = window.innerWidth, e.vjCanvas.height = window.innerHeight, e.vjCanvas.style.width = "100%", e.vjCanvas.style.height = "100%", e.vjCanvas.style.position = "absolute", e.vjCanvas.style.backgroundColor = "transparent", e.vjCanvas.style.top = "0px", e.vjCanvas.style.left = "0px", e.vjCanvas.style.zIndex = "5", e.vjCanvas.style.msTouchAction = "none", e.vjCanvasContext = e.vjCanvas.getContext("2d"), e.vjCanvasContext.strokeStyle = "#ffffff", e.vjCanvasContext.lineWidth = 2, document.body.appendChild(e.vjCanvas)), e.halfWidth = e.vjCanvas.width / 2, e.halfHeight = e.vjCanvas.height / 2, this.pressed = !1, this._joystickColor = "cyan", this._joystickPointerID = -1, this._joystickPointerPos = new t.Vector2(0, 0), this._joystickPointerStartPos = new t.Vector2(0, 0), this._deltaJoystickVector = new t.Vector2(0, 0), e.vjCanvas.addEventListener("pointerdown", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          i._onPointerDown(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }, !1), e.vjCanvas.addEventListener("pointermove", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              i._onPointerMove(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }, !1), e.vjCanvas.addEventListener("pointerup", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  i._onPointerUp(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }, !1), e.vjCanvas.addEventListener("pointerout", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      i._onPointerUp(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }, !1), e.vjCanvas.addEventListener("contextmenu", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          t.preventDefault()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }, !1), requestAnimationFrame(function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        i._drawVirtualJoystick()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        })
             }
             return e.prototype.setJoystickSensibility = function(t) {
             this._joystickSensibility = t, this._inversedSensibility = 1 / (this._joystickSensibility / 1e3)
             }, e.prototype._onPointerDown = function(t) {
             var n;
             t.preventDefault(), n = this._leftJoystick === !0 ? t.clientX < e.halfWidth : t.clientX > e.halfWidth, n && this._joystickPointerID < 0 ? (this._joystickPointerID = t.pointerId, this._joystickPointerStartPos.x = t.clientX, this._joystickPointerStartPos.y = t.clientY, this._joystickPointerPos = this._joystickPointerStartPos.clone(), this._deltaJoystickVector.x = 0, this._deltaJoystickVector.y = 0, this.pressed = !0, this._touches.add(t.pointerId.toString(), t)) : e._globalJoystickIndex < 2 && this._action && (this._action(), this._touches.add(t.pointerId.toString(), t))
             }, e.prototype._onPointerMove = function(t) {
             if (this._joystickPointerID == t.pointerId) {
             this._joystickPointerPos.x = t.clientX, this._joystickPointerPos.y = t.clientY, this._deltaJoystickVector = this._joystickPointerPos.clone(), this._deltaJoystickVector = this._deltaJoystickVector.subtract(this._joystickPointerStartPos);
             var e = this.reverseLeftRight ? -1 : 1, n = e * this._deltaJoystickVector.x / this._inversedSensibility;
             switch (this._axisTargetedByLeftAndRight) {
             case 0:
             this.deltaPosition.x = Math.min(1, Math.max(-1, n));
             break;
             case 1:
             this.deltaPosition.y = Math.min(1, Math.max(-1, n));
             break;
             case 2:
             this.deltaPosition.z = Math.min(1, Math.max(-1, n))
             }
             var i = this.reverseUpDown ? 1 : -1, o = i * this._deltaJoystickVector.y / this._inversedSensibility;
             switch (this._axisTargetedByUpAndDown) {
             case 0:
             this.deltaPosition.x = Math.min(1, Math.max(-1, o));
             break;
             case 1:
             this.deltaPosition.y = Math.min(1, Math.max(-1, o));
             break;
             case 2:
             this.deltaPosition.z = Math.min(1, Math.max(-1, o))
             }
             } else
             this._touches.item(t.pointerId.toString()) && (this._touches.item(t.pointerId.toString()).x = t.clientX, this._touches.item(t.pointerId.toString()).y = t.clientY)
             }, e.prototype._onPointerUp = function(t) {
             this._clearCanvas(), this._joystickPointerID == t.pointerId && (this._joystickPointerID = -1, this.pressed = !1), this._deltaJoystickVector.x = 0, this._deltaJoystickVector.y = 0, this._touches.remove(t.pointerId.toString())
             }, e.prototype.setJoystickColor = function(t) {
             this._joystickColor = t
             }, e.prototype.setActionOnTouch = function(t) {
             this._action = t
             }, e.prototype.setAxisForLeftRight = function(t) {
             switch (t) {
             case 0:
             case 1:
             case 2:
             this._axisTargetedByLeftAndRight = t;
             break;
             default:
             this._axisTargetedByLeftAndRight = 0
             }
             }, e.prototype.setAxisForUpDown = function(t) {
             switch (t) {
             case 0:
             case 1:
             case 2:
             this._axisTargetedByUpAndDown = t;
             break;
             default:
             this._axisTargetedByUpAndDown = 1
             }
             }, e.prototype._clearCanvas = function() {
             this._leftJoystick ? e.vjCanvasContext.clearRect(0, 0, e.vjCanvasWidth / 2, e.vjCanvasHeight) : e.vjCanvasContext.clearRect(e.vjCanvasWidth / 2, 0, e.vjCanvasWidth, e.vjCanvasHeight)
             }, e.prototype._drawVirtualJoystick = function() {
             var t = this;
             this.pressed && (this._clearCanvas(), this._touches.forEach(function(n) {
                                                                         n.pointerId === t._joystickPointerID ? (e.vjCanvasContext.beginPath(), e.vjCanvasContext.strokeStyle = t._joystickColor, e.vjCanvasContext.lineWidth = 6, e.vjCanvasContext.arc(t._joystickPointerStartPos.x, t._joystickPointerStartPos.y, 40, 0, 2 * Math.PI, !0), e.vjCanvasContext.stroke(), e.vjCanvasContext.beginPath(), e.vjCanvasContext.strokeStyle = t._joystickColor, e.vjCanvasContext.lineWidth = 2, e.vjCanvasContext.arc(t._joystickPointerStartPos.x, t._joystickPointerStartPos.y, 60, 0, 2 * Math.PI, !0), e.vjCanvasContext.stroke(), e.vjCanvasContext.beginPath(), e.vjCanvasContext.strokeStyle = t._joystickColor, e.vjCanvasContext.arc(t._joystickPointerPos.x, t._joystickPointerPos.y, 40, 0, 2 * Math.PI, !0), e.vjCanvasContext.stroke()) : (e.vjCanvasContext.beginPath(), e.vjCanvasContext.fillStyle = "white", e.vjCanvasContext.beginPath(), e.vjCanvasContext.strokeStyle = "red", e.vjCanvasContext.lineWidth = 6, e.vjCanvasContext.arc(n.x, n.y, 40, 0, 2 * Math.PI, !0), e.vjCanvasContext.stroke())
                                                                         })), requestAnimationFrame(function() {
                                                                                                    t._drawVirtualJoystick()
                                                                                                    })
             }, e.prototype.releaseCanvas = function() {
             e.vjCanvas && (document.body.removeChild(e.vjCanvas), e.vjCanvas = null)
             }, e._globalJoystickIndex = 0, e
             }());
    t.VirtualJoystick = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function(t) {
        var e = function() {
            function t() {
                this._count = 0, this._collection = new Array
            }
            return t.prototype.Count = function() {
                return this._count
            }, t.prototype.add = function(t, e) {
                return void 0 != this._collection[t] ? void 0 : (this._collection[t] = e, ++this._count)
            }, t.prototype.remove = function(t) {
                return void 0 == this._collection[t] ? void 0 : (delete this._collection[t], --this._count)
            }, t.prototype.item = function(t) {
                return this._collection[t]
            }, t.prototype.forEach = function(t) {
                var e;
                for (e in this._collection)
                    this._collection.hasOwnProperty(e) && t(this._collection[e])
                    }, t
        }();
        t.Collection = e
    }(t.VirtualJoystick || (t.VirtualJoystick = {}));
    t.VirtualJoystick
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = {HResolution: 1280,VResolution: 800,HScreenSize: .149759993,VScreenSize: .0935999975,VScreenCenter: .0467999987,EyeToScreenDistance: .0410000011,LensSeparationDistance: .063500002,InterpupillaryDistance: .064000003,DistortionK: [1, .219999999, .239999995, 0],ChromaAbCorrection: [.995999992, -.00400000019, 1.01400006, 0],PostProcessScaleFactor: 1.714605507808412,LensCenterOffset: .151976421}, n = function(n) {
        function i(i, o, r, s) {
            n.call(this, i, o, r), this._workMatrix = new t.Matrix, this._actualUp = new t.Vector3(0, 0, 0), this._aspectRatioAspectRatio = e.HResolution / (2 * e.VResolution), this._aspectRatioFov = 2 * Math.atan(e.PostProcessScaleFactor * e.VScreenSize / (2 * e.EyeToScreenDistance));
            var a = e.HScreenSize / 4 - e.LensSeparationDistance / 2, l = 4 * a / e.HScreenSize;
            this._hMatrix = t.Matrix.Translation(s ? l : -l, 0, 0), this.viewport = new t.Viewport(s ? 0 : .5, 0, .5, 1), this._preViewMatrix = t.Matrix.Translation(s ? .5 * e.InterpupillaryDistance : -.5 * e.InterpupillaryDistance, 0, 0);
            new t.OculusDistortionCorrectionPostProcess("Oculus Distortion", this, !s, e)
        }
        return __extends(i, n), i.prototype.getProjectionMatrix = function() {
            return t.Matrix.PerspectiveFovLHToRef(this._aspectRatioFov, this._aspectRatioAspectRatio, this.minZ, this.maxZ, this._workMatrix), this._workMatrix.multiplyToRef(this._hMatrix, this._projectionMatrix), this._projectionMatrix
        }, i.prototype._getViewMatrix = function() {
            return t.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix), t.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), t.Vector3.TransformNormalToRef(this.upVector, this._cameraRotationMatrix, this._actualUp), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), t.Matrix.LookAtLHToRef(this.position, this._currentTarget, this._actualUp, this._workMatrix), this._workMatrix.multiplyToRef(this._preViewMatrix, this._viewMatrix), this._viewMatrix
        }, i
    }(t.FreeCamera), i = function(t) {
        function e(e, i, o) {
            t.call(this, e, i, o), this._leftCamera = new n(e + "_left", i.clone(), o, !0), this._rightCamera = new n(e + "_right", i.clone(), o, !1), this.subCameras.push(this._leftCamera), this.subCameras.push(this._rightCamera), this._deviceOrientationHandler = this._onOrientationEvent.bind(this)
        }
        return __extends(e, t), e.prototype._update = function() {
            this._leftCamera.position.copyFrom(this.position), this._rightCamera.position.copyFrom(this.position), this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), t.prototype._update.call(this)
        }, e.prototype._updateCamera = function(t) {
            t.minZ = this.minZ, t.maxZ = this.maxZ, t.rotation.x = this.rotation.x, t.rotation.y = this.rotation.y, t.rotation.z = this.rotation.z
        }, e.prototype._onOrientationEvent = function(t) {
            var e = t.alpha / 180 * Math.PI, n = t.beta / 180 * Math.PI, i = t.gamma / 180 * Math.PI;
            return this._offsetOrientation ? (this.rotation.y += e - this._offsetOrientation.yaw, this.rotation.x += n - this._offsetOrientation.pitch, this.rotation.z += this._offsetOrientation.roll - i, this._offsetOrientation.yaw = e, this._offsetOrientation.pitch = n, this._offsetOrientation.roll = i, void 0) : void (this._offsetOrientation = {yaw: e,pitch: n,roll: i})
        }, e.prototype.attachControl = function(e, n) {
            t.prototype.attachControl.call(this, e, n), window.addEventListener("deviceorientation", this._deviceOrientationHandler)
        }, e.prototype.detachControl = function(e) {
            t.prototype.detachControl.call(this, e), window.removeEventListener("deviceorientation", this._deviceOrientationHandler)
        }, e
    }(t.FreeCamera);
    t.OculusCamera = i
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o) {
            e.call(this, n, i, o), this._leftjoystick = new t.VirtualJoystick(!0), this._leftjoystick.setAxisForUpDown(2), this._leftjoystick.setAxisForLeftRight(0), this._leftjoystick.setJoystickSensibility(.15), this._rightjoystick = new t.VirtualJoystick(!1), this._rightjoystick.setAxisForUpDown(0), this._rightjoystick.setAxisForLeftRight(1), this._rightjoystick.reverseUpDown = !0, this._rightjoystick.setJoystickSensibility(.05), this._rightjoystick.setJoystickColor("yellow")
        }
        return __extends(n, e), n.prototype._checkInputs = function() {
            var e = t.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0), n = t.Vector3.TransformCoordinates(this._leftjoystick.deltaPosition, e);
            this.cameraDirection = this.cameraDirection.add(n), this.cameraRotation = this.cameraRotation.add(this._rightjoystick.deltaPosition), this._leftjoystick.pressed || (this._leftjoystick.deltaPosition = this._leftjoystick.deltaPosition.scale(.9)), this._rightjoystick.pressed || (this._rightjoystick.deltaPosition = this._rightjoystick.deltaPosition.scale(.9))
        }, n.prototype.dispose = function() {
            this._leftjoystick.releaseCanvas()
        }, n
    }(t.FreeCamera);
    t.VirtualJoysticksCamera = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o, r) {
            e.call(this, n, i), this._textures = new Array, this._floats = new Array, this._floatsArrays = {}, this._colors3 = new Array, this._colors4 = new Array, this._vectors2 = new Array, this._vectors3 = new Array, this._matrices = new Array, this._cachedWorldViewMatrix = new t.Matrix, this._shaderPath = o, r.needAlphaBlending = r.needAlphaBlending || !1, r.needAlphaTesting = r.needAlphaTesting || !1, r.attributes = r.attributes || ["position", "normal", "uv"], r.uniforms = r.uniforms || ["worldViewProjection"], r.samplers = r.samplers || [], this._options = r
        }
        return __extends(n, e), n.prototype.needAlphaBlending = function() {
            return this._options.needAlphaBlending
        }, n.prototype.needAlphaTesting = function() {
            return this._options.needAlphaTesting
        }, n.prototype._checkUniform = function(t) {
            -1 === this._options.uniforms.indexOf(t) && this._options.uniforms.push(t)
        }, n.prototype.setTexture = function(t, e) {
            return -1 === this._options.samplers.indexOf(t) && this._options.samplers.push(t), this._textures[t] = e, this
        }, n.prototype.setFloat = function(t, e) {
            return this._checkUniform(t), this._floats[t] = e, this
        }, n.prototype.setFloats = function(t, e) {
            return this._checkUniform(t), this._floatsArrays[t] = e, this
        }, n.prototype.setColor3 = function(t, e) {
            return this._checkUniform(t), this._colors3[t] = e, this
        }, n.prototype.setColor4 = function(t, e) {
            return this._checkUniform(t), this._colors4[t] = e, this
        }, n.prototype.setVector2 = function(t, e) {
            return this._checkUniform(t), this._vectors2[t] = e, this
        }, n.prototype.setVector3 = function(t, e) {
            return this._checkUniform(t), this._vectors3[t] = e, this
        }, n.prototype.setMatrix = function(t, e) {
            return this._checkUniform(t), this._matrices[t] = e, this
        }, n.prototype.isReady = function() {
            var t = this.getScene().getEngine();
            return this._effect = t.createEffect(this._shaderPath, this._options.attributes, this._options.uniforms, this._options.samplers, "", null, this.onCompiled, this.onError), this._effect.isReady() ? !0 : !1
        }, n.prototype.bind = function(t) {
            -1 !== this._options.uniforms.indexOf("world") && this._effect.setMatrix("world", t), -1 !== this._options.uniforms.indexOf("view") && this._effect.setMatrix("view", this.getScene().getViewMatrix()), -1 !== this._options.uniforms.indexOf("worldView") && (t.multiplyToRef(this.getScene().getViewMatrix(), this._cachedWorldViewMatrix), this._effect.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== this._options.uniforms.indexOf("projection") && this._effect.setMatrix("projection", this.getScene().getProjectionMatrix()), -1 !== this._options.uniforms.indexOf("worldViewProjection") && this._effect.setMatrix("worldViewProjection", t.multiply(this.getScene().getTransformMatrix()));
            for (var e in this._textures)
                this._effect.setTexture(e, this._textures[e]);
            for (e in this._floats)
                this._effect.setFloat(e, this._floats[e]);
            for (e in this._floatsArrays)
                this._effect.setArray(e, this._floatsArrays[e]);
            for (e in this._colors3)
                this._effect.setColor3(e, this._colors3[e]);
            for (e in this._colors4) {
                var n = this._colors4[e];
                this._effect.setFloat4(e, n.r, n.g, n.b, n.a)
            }
            for (e in this._vectors2)
                this._effect.setVector2(e, this._vectors2[e]);
            for (e in this._vectors3)
                this._effect.setVector3(e, this._vectors3[e]);
            for (e in this._matrices)
                this._effect.setMatrix(e, this._matrices[e])
                }, n.prototype.dispose = function(t) {
                    for (var n in this._textures)
                        this._textures[n].dispose();
                    this._textures = [], e.prototype.dispose.call(this, t)
                }, n
    }(t.Material);
    t.ShaderMaterial = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e() {
        }
        return e.prototype.set = function(e, n) {
            switch (n) {
                case t.VertexBuffer.PositionKind:
                    this.positions = e;
                    break;
                case t.VertexBuffer.NormalKind:
                    this.normals = e;
                    break;
                case t.VertexBuffer.UVKind:
                    this.uvs = e;
                    break;
                case t.VertexBuffer.UV2Kind:
                    this.uv2s = e;
                    break;
                case t.VertexBuffer.ColorKind:
                    this.colors = e;
                    break;
                case t.VertexBuffer.MatricesIndicesKind:
                    this.matricesIndices = e;
                    break;
                case t.VertexBuffer.MatricesWeightsKind:
                    this.matricesWeights = e
            }
        }, e.prototype.applyToMesh = function(t, e) {
            this._applyTo(t, e)
        }, e.prototype.applyToGeometry = function(t, e) {
            this._applyTo(t, e)
        }, e.prototype.updateMesh = function(t) {
            this._update(t)
        }, e.prototype.updateGeometry = function(t) {
            this._update(t)
        }, e.prototype._applyTo = function(e, n) {
            this.positions && e.setVerticesData(t.VertexBuffer.PositionKind, this.positions, n), this.normals && e.setVerticesData(t.VertexBuffer.NormalKind, this.normals, n), this.uvs && e.setVerticesData(t.VertexBuffer.UVKind, this.uvs, n), this.uv2s && e.setVerticesData(t.VertexBuffer.UV2Kind, this.uv2s, n), this.colors && e.setVerticesData(t.VertexBuffer.ColorKind, this.colors, n), this.matricesIndices && e.setVerticesData(t.VertexBuffer.MatricesIndicesKind, this.matricesIndices, n), this.matricesWeights && e.setVerticesData(t.VertexBuffer.MatricesWeightsKind, this.matricesWeights, n), this.indices && e.setIndices(this.indices)
        }, e.prototype._update = function(e, n, i) {
            this.positions && e.updateVerticesData(t.VertexBuffer.PositionKind, this.positions, n, i), this.normals && e.updateVerticesData(t.VertexBuffer.NormalKind, this.normals, n, i), this.uvs && e.updateVerticesData(t.VertexBuffer.UVKind, this.uvs, n, i), this.uv2s && e.updateVerticesData(t.VertexBuffer.UV2Kind, this.uv2s, n, i), this.colors && e.updateVerticesData(t.VertexBuffer.ColorKind, this.colors, n, i), this.matricesIndices && e.updateVerticesData(t.VertexBuffer.MatricesIndicesKind, this.matricesIndices, n, i), this.matricesWeights && e.updateVerticesData(t.VertexBuffer.MatricesWeightsKind, this.matricesWeights, n, i), this.indices && e.setIndices(this.indices)
        }, e.prototype.transform = function(e) {
            var n = t.Vector3.Zero();
            if (this.positions)
                for (var i = t.Vector3.Zero(), o = 0; o < this.positions.length; o += 3)
                    t.Vector3.FromArrayToRef(this.positions, o, i), t.Vector3.TransformCoordinatesToRef(i, e, n), this.positions[o] = n.x, this.positions[o + 1] = n.y, this.positions[o + 2] = n.z;
            if (this.normals) {
                var r = t.Vector3.Zero();
                for (o = 0; o < this.normals.length; o += 3)
                    t.Vector3.FromArrayToRef(this.normals, o, r), t.Vector3.TransformNormalToRef(r, e, n), this.normals[o] = n.x, this.normals[o + 1] = n.y, this.normals[o + 2] = n.z
                    }
        }, e.prototype.merge = function(t) {
            if (t.indices) {
                this.indices || (this.indices = []);
                for (var e = this.positions ? this.positions.length / 3 : 0, n = 0; n < t.indices.length; n++)
                    this.indices.push(t.indices[n] + e)
                    }
            if (t.positions)
                for (this.positions || (this.positions = []), n = 0; n < t.positions.length; n++)
                    this.positions.push(t.positions[n]);
            if (t.normals)
                for (this.normals || (this.normals = []), n = 0; n < t.normals.length; n++)
                    this.normals.push(t.normals[n]);
            if (t.uvs)
                for (this.uvs || (this.uvs = []), n = 0; n < t.uvs.length; n++)
                    this.uvs.push(t.uvs[n]);
            if (t.uv2s)
                for (this.uv2s || (this.uv2s = []), n = 0; n < t.uv2s.length; n++)
                    this.uv2s.push(t.uv2s[n]);
            if (t.matricesIndices)
                for (this.matricesIndices || (this.matricesIndices = []), n = 0; n < t.matricesIndices.length; n++)
                    this.matricesIndices.push(t.matricesIndices[n]);
            if (t.matricesWeights)
                for (this.matricesWeights || (this.matricesWeights = []), n = 0; n < t.matricesWeights.length; n++)
                    this.matricesWeights.push(t.matricesWeights[n]);
            if (t.colors)
                for (this.colors || (this.colors = []), n = 0; n < t.colors.length; n++)
                    this.colors.push(t.colors[n])
                    }, e.ExtractFromMesh = function(t) {
                        return e._ExtractFrom(t)
                    }, e.ExtractFromGeometry = function(t) {
                        return e._ExtractFrom(t)
                    }, e._ExtractFrom = function(e) {
                        var n = new t.VertexData;
                        return e.isVerticesDataPresent(t.VertexBuffer.PositionKind) && (n.positions = e.getVerticesData(t.VertexBuffer.PositionKind)), e.isVerticesDataPresent(t.VertexBuffer.NormalKind) && (n.normals = e.getVerticesData(t.VertexBuffer.NormalKind)), e.isVerticesDataPresent(t.VertexBuffer.UVKind) && (n.uvs = e.getVerticesData(t.VertexBuffer.UVKind)), e.isVerticesDataPresent(t.VertexBuffer.UV2Kind) && (n.uv2s = e.getVerticesData(t.VertexBuffer.UV2Kind)), e.isVerticesDataPresent(t.VertexBuffer.ColorKind) && (n.colors = e.getVerticesData(t.VertexBuffer.ColorKind)), e.isVerticesDataPresent(t.VertexBuffer.MatricesIndicesKind) && (n.matricesIndices = e.getVerticesData(t.VertexBuffer.MatricesIndicesKind)), e.isVerticesDataPresent(t.VertexBuffer.MatricesWeightsKind) && (n.matricesWeights = e.getVerticesData(t.VertexBuffer.MatricesWeightsKind)), n.indices = e.getIndices(), n
                    }, e.CreateBox = function(e) {
                        var n = [new t.Vector3(0, 0, 1), new t.Vector3(0, 0, -1), new t.Vector3(1, 0, 0), new t.Vector3(-1, 0, 0), new t.Vector3(0, 1, 0), new t.Vector3(0, -1, 0)], i = [], o = [], r = [], s = [];
                        e = e || 1;
                        for (var a = 0; a < n.length; a++) {
                            var l = n[a], h = new t.Vector3(l.y, l.z, l.x), c = t.Vector3.Cross(l, h), u = o.length / 3;
                            i.push(u), i.push(u + 1), i.push(u + 2), i.push(u), i.push(u + 2), i.push(u + 3);
                            var p = l.subtract(h).subtract(c).scale(e / 2);
                            o.push(p.x, p.y, p.z), r.push(l.x, l.y, l.z), s.push(1, 1), p = l.subtract(h).add(c).scale(e / 2), o.push(p.x, p.y, p.z), r.push(l.x, l.y, l.z), s.push(0, 1), p = l.add(h).add(c).scale(e / 2), o.push(p.x, p.y, p.z), r.push(l.x, l.y, l.z), s.push(0, 0), p = l.add(h).subtract(c).scale(e / 2), o.push(p.x, p.y, p.z), r.push(l.x, l.y, l.z), s.push(1, 0)
                        }
                        var d = new t.VertexData;
                        return d.indices = i, d.positions = o, d.normals = r, d.uvs = s, d
                    }, e.CreateSphere = function(e, n) {
                        e = e || 32, n = n || 1;
                        for (var i = n / 2, o = 2 + e, r = 2 * o, s = [], a = [], l = [], h = [], c = 0; o >= c; c++) {
                            for (var u = c / o, p = u * Math.PI, d = 0; r >= d; d++) {
                                var m = d / r, g = m * Math.PI * 2, f = t.Matrix.RotationZ(-p), y = t.Matrix.RotationY(g), _ = t.Vector3.TransformCoordinates(t.Vector3.Up(), f), v = t.Vector3.TransformCoordinates(_, y), b = v.scale(i), w = t.Vector3.Normalize(b);
                                a.push(b.x, b.y, b.z), l.push(w.x, w.y, w.z), h.push(m, 1 - u)
                            }
                            if (c > 0)
                                for (var x = a.length / 3, C = x - 2 * (r + 1); x > C + r + 2; C++)
                                    s.push(C), s.push(C + 1), s.push(C + r + 1), s.push(C + r + 1), s.push(C + 1), s.push(C + r + 2)
                                    }
                        var M = new t.VertexData;
                        return M.indices = s, M.positions = a, M.normals = l, M.uvs = h, M
                    }, e.CreateCylinder = function(e, n, i, o, r, s) {
                        "undefined" == typeof r && (r = 1);
                        var a = i / 2, l = n / 2, h = [], c = [], u = [], p = [];
                        e = e || 1, i = i || .5, n = n || 1, o = o || 16, r = r || 1, r = 1 > r ? 1 : r;
                        for (var d = function(e) {
                             var n = 2 * e * Math.PI / o, i = Math.cos(n), r = Math.sin(n);
                             return new t.Vector3(i, 0, r)
                             }, m = function(n) {
                             var i = n ? a : l;
                             if (0 != i) {
                             var r = c.length / 3, s = new t.Vector3(0, e / 2, 0), u = new t.Vector2(.5, .5);
                             for (n || (s.scaleInPlace(-1), u.x = -u.x), y = 0; o > y; y++) {
                             var m = d(y), g = m.scale(i).add(s), f = new t.Vector2(m.x * u.x + .5, m.z * u.y + .5);
                             c.push(g.x, g.y, g.z), p.push(f.x, f.y)
                             }
                             for (var y = 0; o - 2 > y; y++)
                             n ? (h.push(r), h.push(r + (y + 1) % o), h.push(r + (y + 2) % o)) : (h.push(r), h.push(r + (y + 2) % o), h.push(r + (y + 1) % o))
                             }
                             }, g = new t.Vector3(0, -1, 0).scale(e / 2), f = new t.Vector3(0, 1, 0).scale(e / r), y = o + 1, _ = 0; o >= _; _++)
                            for (var v, b = d(_), w = new t.Vector2(_ / o, 0), x = l, C = 0; r >= C; C++)
                                v = b.scale(x), v.addInPlace(g.add(f.scale(C))), w.y += 1 / r, x += (a - l) / r, c.push(v.x, v.y, v.z), p.push(w.x, w.y);
                        r += 1;
                        for (var C = 0; r - 1 > C; C++)
                            for (var _ = 0; o >= _; _++)
                                h.push(_ * r + C), h.push((_ * r + (C + r)) % (y * r)), h.push(_ * r + (C + 1)), h.push(_ * r + (C + 1)), h.push((_ * r + (C + r)) % (y * r)), h.push((_ * r + (C + r + 1)) % (y * r));
                        s && (m(!0), m(!1)), t.VertexData.ComputeNormals(c, h, u);
                        var M = new t.VertexData;
                        return M.indices = h, M.positions = c, M.normals = u, M.uvs = p, M
                    }, e.CreateTorus = function(e, n, i) {
                        var o = [], r = [], s = [], a = [];
                        e = e || 1, n = n || .5, i = i || 16;
                        for (var l = i + 1, h = 0; i >= h; h++)
                            for (var c = h / i, u = h * Math.PI * 2 / i - Math.PI / 2, p = t.Matrix.Translation(e / 2, 0, 0).multiply(t.Matrix.RotationY(u)), d = 0; i >= d; d++) {
                                var m = 1 - d / i, g = d * Math.PI * 2 / i + Math.PI, f = Math.cos(g), y = Math.sin(g), _ = new t.Vector3(f, y, 0), v = _.scale(n / 2), b = new t.Vector2(c, m);
                                v = t.Vector3.TransformCoordinates(v, p), _ = t.Vector3.TransformNormal(_, p), r.push(v.x, v.y, v.z), s.push(_.x, _.y, _.z), a.push(b.x, b.y);
                                var w = (h + 1) % l, x = (d + 1) % l;
                                o.push(h * l + d), o.push(h * l + x), o.push(w * l + d), o.push(h * l + x), o.push(w * l + x), o.push(w * l + d)
                            }
                        var C = new t.VertexData;
                        return C.indices = o, C.positions = r, C.normals = s, C.uvs = a, C
                    }, e.CreateLines = function(e) {
                        for (var n = [], i = [], o = 0; o < e.length; o++)
                            i.push(e[o].x, e[o].y, e[o].z), o > 0 && (n.push(o - 1), n.push(o));
                        var r = new t.VertexData;
                        return r.indices = n, r.positions = i, r
                    }, e.CreateGround = function(e, n, i) {
                        var o, r, s = [], a = [], l = [], h = [];
                        for (e = e || 1, n = n || 1, i = i || 1, o = 0; i >= o; o++)
                            for (r = 0; i >= r; r++) {
                                var c = new t.Vector3(r * e / i - e / 2, 0, (i - o) * n / i - n / 2), u = new t.Vector3(0, 1, 0);
                                a.push(c.x, c.y, c.z), l.push(u.x, u.y, u.z), h.push(r / i, 1 - o / i)
                            }
                        for (o = 0; i > o; o++)
                            for (r = 0; i > r; r++)
                                s.push(r + 1 + (o + 1) * (i + 1)), s.push(r + 1 + o * (i + 1)), s.push(r + o * (i + 1)), s.push(r + (o + 1) * (i + 1)), s.push(r + 1 + (o + 1) * (i + 1)), s.push(r + o * (i + 1));
                        var p = new t.VertexData;
                        return p.indices = s, p.positions = a, p.normals = l, p.uvs = h, p
                    }, e.CreateTiledGround = function(e, n, i, o, r, s) {
                        function a(e, n, i, o) {
                            var r = d.length / 3, a = s.w + 1;
                            for (l = 0; l < s.h; l++)
                                for (h = 0; h < s.w; h++) {
                                    var c = [r + h + l * a, r + (h + 1) + l * a, r + (h + 1) + (l + 1) * a, r + h + (l + 1) * a];
                                    p.push(c[1]), p.push(c[2]), p.push(c[3]), p.push(c[0]), p.push(c[1]), p.push(c[3])
                                }
                            var u = t.Vector3.Zero(), f = new t.Vector3(0, 1, 0);
                            for (l = 0; l <= s.h; l++)
                                for (u.z = l * (o - n) / s.h + n, h = 0; h <= s.w; h++)
                                    u.x = h * (i - e) / s.w + e, u.y = 0, d.push(u.x, u.y, u.z), m.push(f.x, f.y, f.z), g.push(h / s.w, l / s.h)
                                    }
                        "undefined" == typeof r && (r = {w: 1,h: 1}), "undefined" == typeof s && (s = {w: 1,h: 1});
                        var l, h, c, u, p = [], d = [], m = [], g = [];
                        r.h = r.w < 1 ? 1 : r.h, r.w = r.w < 1 ? 1 : r.w, s.w = s.w < 1 ? 1 : s.w, s.h = s.h < 1 ? 1 : s.h;
                        var f = {w: (i - e) / r.w,h: (o - n) / r.h};
                        for (c = 0; c < r.h; c++)
                            for (u = 0; u < r.w; u++)
                                a(e + u * f.w, n + c * f.h, e + (u + 1) * f.w, n + (c + 1) * f.h);
                        var y = new t.VertexData;
                        return y.indices = p, y.positions = d, y.normals = m, y.uvs = g, y
                    }, e.CreateGroundFromHeightMap = function(e, n, i, o, r, s, a, l) {
                        var h, c, u = [], p = [], d = [], m = [];
                        for (h = 0; i >= h; h++)
                            for (c = 0; i >= c; c++) {
                                var g = new t.Vector3(c * e / i - e / 2, 0, (i - h) * n / i - n / 2), f = (g.x + e / 2) / e * (a - 1) | 0, y = (1 - (g.z + n / 2) / n) * (l - 1) | 0, _ = 4 * (f + y * a), v = s[_] / 255, b = s[_ + 1] / 255, w = s[_ + 2] / 255, x = .3 * v + .59 * b + .11 * w;
                                g.y = o + (r - o) * x, p.push(g.x, g.y, g.z), d.push(0, 0, 0), m.push(c / i, 1 - h / i)
                            }
                        for (h = 0; i > h; h++)
                            for (c = 0; i > c; c++)
                                u.push(c + 1 + (h + 1) * (i + 1)), u.push(c + 1 + h * (i + 1)), u.push(c + h * (i + 1)), u.push(c + (h + 1) * (i + 1)), u.push(c + 1 + (h + 1) * (i + 1)), u.push(c + h * (i + 1));
                        t.VertexData.ComputeNormals(p, u, d);
                        var C = new t.VertexData;
                        return C.indices = u, C.positions = p, C.normals = d, C.uvs = m, C
                    }, e.CreatePlane = function(e) {
                        var n = [], i = [], o = [], r = [];
                        e = e || 1;
                        var s = e / 2;
                        i.push(-s, -s, 0), o.push(0, 0, -1), r.push(0, 0), i.push(s, -s, 0), o.push(0, 0, -1), r.push(1, 0), i.push(s, s, 0), o.push(0, 0, -1), r.push(1, 1), i.push(-s, s, 0), o.push(0, 0, -1), r.push(0, 1), n.push(0), n.push(1), n.push(2), n.push(0), n.push(2), n.push(3);
                        var a = new t.VertexData;
                        return a.indices = n, a.positions = i, a.normals = o, a.uvs = r, a
                    }, e.CreateTorusKnot = function(e, n, i, o, r, s) {
                        var a = [], l = [], h = [], c = [];
                        e = e || 2, n = n || .5, i = i || 32, o = o || 32, r = r || 2, s = s || 3;
                        for (var u = function(n) {
                             var i = Math.cos(n), o = Math.sin(n), a = s / r * n, l = Math.cos(a), h = e * (2 + l) * .5 * i, c = e * (2 + l) * o * .5, u = e * Math.sin(a) * .5;
                             return new t.Vector3(h, c, u)
                             }, p = 0; i >= p; p++) {
                            var d = p % i, m = d / i * 2 * r * Math.PI, g = u(m), f = u(m + .01), y = f.subtract(g), _ = f.add(g), v = t.Vector3.Cross(y, _);
                            _ = t.Vector3.Cross(v, y), v.normalize(), _.normalize();
                            for (var b = 0; o > b; b++) {
                                var w = b % o, x = w / o * 2 * Math.PI, C = -n * Math.cos(x), M = n * Math.sin(x);
                                l.push(g.x + C * _.x + M * v.x), l.push(g.y + C * _.y + M * v.y), l.push(g.z + C * _.z + M * v.z), c.push(p / i), c.push(b / o)
                            }
                        }
                        for (p = 0; i > p; p++)
                            for (b = 0; o > b; b++) {
                                var D = (b + 1) % o, B = p * o + b, A = (p + 1) * o + b, E = (p + 1) * o + D, T = p * o + D;
                                a.push(T), a.push(A), a.push(B), a.push(T), a.push(E), a.push(A)
                            }
                        t.VertexData.ComputeNormals(l, a, h);
                        var S = new t.VertexData;
                        return S.indices = a, S.positions = l, S.normals = h, S.uvs = c, S
                    }, e.ComputeNormals = function(e, n, i) {
                        var o, r = [], s = [];
                        for (o = 0; o < e.length; o += 3) {
                            var a = new t.Vector3(e[o], e[o + 1], e[o + 2]);
                            r.push(a), s.push([])
                        }
                        var l = [];
                        for (o = 0; o < n.length / 3; o++) {
                            var h = n[3 * o], c = n[3 * o + 1], u = n[3 * o + 2], p = r[h], d = r[c], m = r[u], g = p.subtract(d), f = m.subtract(d);
                            l[o] = t.Vector3.Normalize(t.Vector3.Cross(g, f)), s[h].push(o), s[c].push(o), s[u].push(o)
                        }
                        for (o = 0; o < r.length; o++) {
                            for (var y = s[o], _ = t.Vector3.Zero(), v = 0; v < y.length; v++)
                                _.addInPlace(l[y[v]]);
                            _ = t.Vector3.Normalize(_.scale(1 / y.length)), i[3 * o] = _.x, i[3 * o + 1] = _.y, i[3 * o + 2] = _.z
                        }
                    }, e
    }();
    t.VertexData = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e, n) {
        e._leftCamera.isIntermediate = !0, e.subCameras.push(e._leftCamera), e.subCameras.push(e._rightCamera), e._leftTexture = new t.PassPostProcess(n + "_leftTexture", 1, e._leftCamera), e._anaglyphPostProcess = new t.AnaglyphPostProcess(n + "_anaglyph", 1, e._rightCamera), e._anaglyphPostProcess.onApply = function(t) {
            t.setTextureFromPostProcess("leftSampler", e._leftTexture)
        }, e._update()
    }, n = function(n) {
        function i(i, o, r, s, a, l, h) {
            n.call(this, i, o, r, s, a, h), this._eyeSpace = t.Tools.ToRadians(l), this._leftCamera = new t.ArcRotateCamera(i + "_left", o - this._eyeSpace, r, s, a, h), this._rightCamera = new t.ArcRotateCamera(i + "_right", o + this._eyeSpace, r, s, a, h), e(this, i)
        }
        return __extends(i, n), i.prototype._update = function() {
            this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), this._leftCamera.alpha = this.alpha - this._eyeSpace, this._rightCamera.alpha = this.alpha + this._eyeSpace, n.prototype._update.call(this)
        }, i.prototype._updateCamera = function(t) {
            t.beta = this.beta, t.radius = this.radius, t.minZ = this.minZ, t.maxZ = this.maxZ, t.fov = this.fov, t.target = this.target
        }, i
    }(t.ArcRotateCamera);
    t.AnaglyphArcRotateCamera = n;
    var i = function(n) {
        function i(i, o, r, s) {
            n.call(this, i, o, s), this._eyeSpace = t.Tools.ToRadians(r), this._transformMatrix = new t.Matrix, this._leftCamera = new t.FreeCamera(i + "_left", o.clone(), s), this._rightCamera = new t.FreeCamera(i + "_right", o.clone(), s), e(this, i)
        }
        return __extends(i, n), i.prototype._getSubCameraPosition = function(e, n) {
            var i = this.getTarget();
            t.Matrix.Translation(-i.x, -i.y, -i.z).multiplyToRef(t.Matrix.RotationY(e), this._transformMatrix), this._transformMatrix = this._transformMatrix.multiply(t.Matrix.Translation(i.x, i.y, i.z)), t.Vector3.TransformCoordinatesToRef(this.position, this._transformMatrix, n)
        }, i.prototype._update = function() {
            this._getSubCameraPosition(-this._eyeSpace, this._leftCamera.position), this._getSubCameraPosition(this._eyeSpace, this._rightCamera.position), this._updateCamera(this._leftCamera), this._updateCamera(this._rightCamera), n.prototype._update.call(this)
        }, i.prototype._updateCamera = function(t) {
            t.minZ = this.minZ, t.maxZ = this.maxZ, t.fov = this.fov, t.viewport = this.viewport, t.setTarget(this.getTarget())
        }, i
    }(t.FreeCamera);
    t.AnaglyphFreeCamera = i
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s) {
            t.call(this, e, "anaglyph", null, ["leftSampler"], n, i, o, r, s)
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.AnaglyphPostProcess = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e() {
        }
        return e.EnableFor = function(t) {
            t._tags = t._tags || {}, t.hasTags = function() {
                return e.HasTags(t)
            }, t.addTags = function(n) {
                return e.AddTagsTo(t, n)
            }, t.removeTags = function(n) {
                return e.RemoveTagsFrom(t, n)
            }, t.matchesTagsQuery = function(n) {
                return e.MatchesQuery(t, n)
            }
        }, e.DisableFor = function(t) {
            delete t._tags, delete t.hasTags, delete t.addTags, delete t.removeTags, delete t.matchesTagsQuery
        }, e.HasTags = function(e) {
            return e._tags ? !t.Tools.IsEmpty(e._tags) : !1
        }, e.GetTags = function(t) {
            return t._tags ? t._tags : null
        }, e.AddTagsTo = function(t, n) {
            if (n) {
                var i = n.split(" ");
                for (var o in i)
                    e._AddTagTo(t, i[o])
                    }
        }, e._AddTagTo = function(t, n) {
            n = n.trim(), "" !== n && "true" !== n && "false" !== n && (n.match(/[\s]/) || n.match(/^([!]|([|]|[&]){2})/) || (e.EnableFor(t), t._tags[n] = !0))
        }, e.RemoveTagsFrom = function(t, n) {
            if (e.HasTags(t)) {
                var i = n.split(" ");
                for (var o in i)
                    e._RemoveTagFrom(t, i[o])
                    }
        }, e._RemoveTagFrom = function(t, e) {
            delete t._tags[e]
        }, e.MatchesQuery = function(n, i) {
            return void 0 === i ? !0 : "" === i ? e.HasTags(n) : t.Internals.AndOrNotEvaluator.Eval(i, function(t) {
                                                                                                    return e.HasTags(n) && n._tags[t]
                                                                                                    })
        }, e
    }();
    t.Tags = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    !function(t) {
        var e = function() {
            function t() {
            }
            return t.Eval = function(e, n) {
                return e = e.match(/\([^\(\)]*\)/g) ? e.replace(/\([^\(\)]*\)/g, function(e) {
                                                                return e = e.slice(1, e.length - 1), t._HandleParenthesisContent(e, n)
                                                                }) : t._HandleParenthesisContent(e, n), "true" === e ? !0 : "false" === e ? !1 : t.Eval(e, n)
            }, t._HandleParenthesisContent = function(e, n) {
                n = n || function(t) {
                    return "true" === t ? !0 : !1
                };
                var i, o = e.split("||");
                for (var r in o) {
                    var s = t._SimplifyNegation(o[r].trim()), a = s.split("&&");
                    if (a.length > 1)
                        for (var l = 0; l < a.length; ++l) {
                            var h = t._SimplifyNegation(a[l].trim());
                            if (i = "true" !== h && "false" !== h ? "!" === h[0] ? !n(h.substring(1)) : n(h) : "true" === h ? !0 : !1, !i) {
                                s = "false";
                                break
                            }
                        }
                    if (i || "true" === s) {
                        i = !0;
                        break
                    }
                    i = "true" !== s && "false" !== s ? "!" === s[0] ? !n(s.substring(1)) : n(s) : "true" === s ? !0 : !1
                }
                return i ? "true" : "false"
            }, t._SimplifyNegation = function(t) {
                return t = t.replace(/^[\s!]+/, function(t) {
                                     return t = t.replace(/[\s]/g, function() {
                                                          return ""
                                                          }), t.length % 2 ? "!" : ""
                                     }), t = t.trim(), "!true" === t ? t = "false" : "!false" === t && (t = "true"), t
            }, t
        }();
        t.AndOrNotEvaluator = e
    }(t.Internals || (t.Internals = {}));
    t.Internals
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r, s) {
            this._enabled = !0, this._refCount = 0, this._name = n, this._renderTexture = new t.RenderTargetTexture(n, i, e), this.setRenderList(o), this._renderTexture.onBeforeRender = r, this._renderTexture.onAfterRender = s, this._scene = e
        }
        return e.prototype._incRefCount = function() {
            return 0 === this._refCount && this._scene.customRenderTargets.push(this._renderTexture), ++this._refCount
        }, e.prototype._decRefCount = function() {
            return this._refCount--, this._refCount <= 0 && this._scene.customRenderTargets.splice(this._scene.customRenderTargets.indexOf(this._renderTexture), 1), this._refCount
        }, e.prototype._update = function() {
            this.setRenderList(this._renderList)
        }, e.prototype.setRenderList = function(t) {
            this._renderTexture.renderList = t
        }, e.prototype.getRenderTexture = function() {
            return this._renderTexture
        }, e
    }();
    t.PostProcessRenderPass = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e, n, i, o, r) {
            this._engine = t, this._name = e, this._postProcessType = n, this._ratio = i || 1, this._samplingMode = o || null, this._singleInstance = r || !0, this._cameras = [], this._postProcesses = [], this._indicesForCamera = [], this._renderPasses = [], this._renderEffectAsPasses = [], this.parameters = function() {
            }
        }
        return e._GetInstance = function(t, n, i, o) {
            for (var r, s, a = [], l = e._GetParametersNames(n), h = 0; h < l.length; h++)
                switch (l[h]) {
                    case "name":
                        a[h] = n.toString();
                        break;
                    case "ratio":
                        a[h] = i;
                        break;
                    case "camera":
                        a[h] = null;
                        break;
                    case "samplingMode":
                        a[h] = o;
                        break;
                    case "engine":
                        a[h] = t;
                        break;
                    case "reusable":
                        a[h] = !0;
                        break;
                    default:
                        a[h] = null
                }
            return r = function() {
            }, r.prototype = n.prototype, s = new r, n.apply(s, a), s
        }, e._GetParametersNames = function(t) {
            var e = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, n = t.toString().replace(e, ""), i = n.slice(n.indexOf("(") + 1, n.indexOf(")")).match(/([^\s,]+)/g);
            return null === i && (i = []), i
        }, e.prototype._update = function() {
            for (var t in this._renderPasses)
                this._renderPasses[t]._update()
                }, e.prototype.addPass = function(t) {
                    this._renderPasses[t._name] = t, this._linkParameters()
                }, e.prototype.removePass = function(t) {
                    delete this._renderPasses[t._name], this._linkParameters()
                }, e.prototype.addRenderEffectAsPass = function(t) {
                    this._renderEffectAsPasses[t._name] = t, this._linkParameters()
                }, e.prototype.getPass = function(t) {
                    for (var e in this._renderPasses)
                        if (e === t)
                            return this._renderPasses[t]
                            }, e.prototype.emptyPasses = function() {
                                this._renderPasses.length = 0, this._linkParameters()
                            }, e.prototype._attachCameras = function(n) {
                                for (var i, o = t.Tools.MakeArray(n || this._cameras), r = 0; r < o.length; r++) {
                                    var s = o[r], a = s.name;
                                    i = this._singleInstance ? 0 : a, this._postProcesses[i] = this._postProcesses[i] || e._GetInstance(this._engine, this._postProcessType, this._ratio, this._samplingMode);
                                    var l = s.attachPostProcess(this._postProcesses[i]);
                                    null === this._indicesForCamera[a] && (this._indicesForCamera[a] = []), this._indicesForCamera[a].push(l), -1 === this._cameras.indexOf(s) && (this._cameras[a] = s);
                                    for (var h in this._renderPasses)
                                        this._renderPasses[h]._incRefCount()
                                        }
                                this._linkParameters()
                            }, e.prototype._detachCameras = function(e) {
                                for (var n = t.Tools.MakeArray(e || this._cameras), i = 0; i < n.length; i++) {
                                    var o = n[i], r = o.name;
                                    o.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : r], this._indicesForCamera[r]);
                                    var s = this._cameras.indexOf(r);
                                    this._indicesForCamera.splice(s, 1), this._cameras.splice(s, 1);
                                    for (var a in this._renderPasses)
                                        this._renderPasses[a]._decRefCount()
                                        }
                            }, e.prototype._enable = function(e) {
                                for (var n = t.Tools.MakeArray(e || this._cameras), i = 0; i < n.length; i++) {
                                    for (var o = n[i], r = o.name, s = 0; s < this._indicesForCamera[r].length; s++)
                                        void 0 === o._postProcesses[this._indicesForCamera[r][s]] && e[i].attachPostProcess(this._postProcesses[this._singleInstance ? 0 : r], this._indicesForCamera[r][s]);
                                    for (var a in this._renderPasses)
                                        this._renderPasses[a]._incRefCount()
                                        }
                            }, e.prototype._disable = function(e) {
                                for (var n = t.Tools.MakeArray(e || this._cameras), i = 0; i < n.length; i++) {
                                    var o = n[i], r = o.Name;
                                    o.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : r], this._indicesForCamera[r]);
                                    for (var s in this._renderPasses)
                                        this._renderPasses[s]._decRefCount()
                                        }
                            }, e.prototype.getPostProcess = function(t) {
                                return this._singleInstance ? this._postProcesses[0] : this._postProcesses[t.name]
                            }, e.prototype._linkParameters = function() {
                                var t = this;
                                for (var e in this._postProcesses)
                                    this._postProcesses[e].onApply = function(e) {
                                        t.parameters(e), t._linkTextures(e)
                                    }
                                    }, e.prototype._linkTextures = function(t) {
                                        for (var e in this._renderPasses)
                                            t.setTexture(e, this._renderPasses[e].getRenderTexture());
                                        for (var n in this._renderEffectAsPasses)
                                            t.setTextureFromPostProcess(n + "Sampler", this._renderEffectAsPasses[n].getPostProcess())
                                            }, e
    }();
    t.PostProcessRenderEffect = e
}(BABYLON || (BABYLON = {}));

var BABYLON;
!function(t) {
    var e = function() {
        function e(t, e) {
            this._engine = t, this._name = e, this._renderEffects = [], this._renderEffectsForIsolatedPass = [], this._cameras = []
        }
        return e.prototype.addEffect = function(t) {
            this._renderEffects[t._name] = t
        }, e.prototype._enableEffect = function(e, n) {
            var i = this._renderEffects[e];
            i && i.enable(t.Tools.MakeArray(n || this._cameras))
        }, e.prototype._disableEffect = function(e, n) {
            var i = this._renderEffects[e];
            i && i.disable(t.Tools.MakeArray(n || this._cameras))
        }, e.prototype._attachCameras = function(e, n) {
            for (var i = t.Tools.MakeArray(e || this._cameras), o = [], r = 0; r < i.length; r++) {
                var s = i[r], a = s.name;
                -1 === this._cameras.indexOf(s) ? this._cameras[a] = s : n && o.push(r)
            }
            for (var r = 0; r < o.length; r++)
                e.splice(o[r], 1);
            for (var l in this._renderEffects)
                this._renderEffects[l]._attachCameras(i)
                }, e.prototype._detachCameras = function(e) {
                    var n = t.Tools.MakeArray(e || this._cameras);
                    for (var i in this._renderEffects)
                        this._renderEffects[i]._detachCameras(n);
                    for (var o = 0; o < n.length; o++)
                        this._cameras.splice(this._cameras.indexOf(n[o]), 1)
                        }, e.prototype._enableDisplayOnlyPass = function(n, i) {
                            var o = t.Tools.MakeArray(i || this._cameras), r = null;
                            for (var s in this._renderEffects)
                                if (r = this._renderEffects[s].getPass(n), null != r)
                                    break;
                            if (null !== r) {
                                for (var s in this._renderEffects)
                                    this._renderEffects[s]._disable(o);
                                r._name = e.PASS_SAMPLER_NAME;
                                for (var a = 0; a < o.length; a++) {
                                    var l = o[a], h = l.name;
                                    this._renderEffectsForIsolatedPass[h] = this._renderEffectsForIsolatedPass[h] || new t.PostProcessRenderEffect(this._engine, e.PASS_EFFECT_NAME, "BABYLON.DisplayPassPostProcess", 1, null, null), this._renderEffectsForIsolatedPass[h].emptyPasses(), this._renderEffectsForIsolatedPass[h].addPass(r), this._renderEffectsForIsolatedPass[h]._attachCameras(l)
                                }
                            }
                        }, e.prototype._disableDisplayOnlyPass = function(n) {
                            for (var i = t.Tools.MakeArray(n || this._cameras), o = 0; o < i.length; o++) {
                                var r = i[o], s = r.name;
                                this._renderEffectsForIsolatedPass[s] = this._renderEffectsForIsolatedPass[s] || new t.PostProcessRenderEffect(this._engine, e.PASS_EFFECT_NAME, "BABYLON.DisplayPassPostProcess", 1, null, null), this._renderEffectsForIsolatedPass[s]._disable(r)
                            }
                            for (var a in this._renderEffects)
                                this._renderEffects[a]._enable(i)
                                }, e.prototype._update = function() {
                                    for (var t in this._renderEffects)
                                        this._renderEffects[t]._update();
                                    for (var e = 0; e < this._cameras.length; e++) {
                                        var n = this._cameras[e].name;
                                        this._renderEffectsForIsolatedPass[n] && this._renderEffectsForIsolatedPass[n]._update()
                                    }
                                }, e.PASS_EFFECT_NAME = "passEffect", e.PASS_SAMPLER_NAME = "passSampler", e
    }();
    t.PostProcessRenderPipeline = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t() {
            this._renderPipelines = []
        }
        return t.prototype.addPipeline = function(t) {
            this._renderPipelines[t._name] = t
        }, t.prototype.attachCamerasToRenderPipeline = function(t, e, n) {
            var i = this._renderPipelines[t];
            i && i.attachCameras(e, n)
        }, t.prototype.detachCamerasFromRenderPipeline = function(t, e) {
            var n = this._renderPipelines[t];
            n && n.detachCameras(e)
        }, t.prototype.enableEffectInPipeline = function(t, e, n) {
            var i = this._renderPipelines[t];
            i && i.enableEffect(e, n)
        }, t.prototype.disableEffectInPipeline = function(t, e, n) {
            var i = this._renderPipelines[t];
            i && i.disableEffect(e, n)
        }, t.prototype.enableDisplayOnlyPassInPipeline = function(t, e, n) {
            var i = this._renderPipelines[t];
            i && i.enableDisplayOnlyPass(e, n)
        }, t.prototype.disableDisplayOnlyPassInPipeline = function(t, e) {
            var n = this._renderPipelines[t];
            n && n.disableDisplayOnlyPass(e)
        }, t.prototype.update = function() {
            for (var t in this._renderPipelines)
                this._renderPipelines[t]._update()
                }, t
    }();
    t.PostProcessRenderPipelineManager = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o, r, s) {
            t.call(this, e, "displayPass", ["passSampler"], ["passSampler"], n, i, o, r, s)
        }
        return __extends(e, t), e
    }(t.PostProcess);
    t.DisplayPassPostProcess = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function e(e) {
            this.frontColor = new t.Color3(1, 1, 1), this.backColor = new t.Color3(.1, .1, .1), this.showBackLines = !0, this.renderList = new t.SmartArray(32), this._scene = e, this._colorShader = new t.ShaderMaterial("colorShader", e, "color", {attributes: ["position"],uniforms: ["worldViewProjection", "color"]});
            var n = this._scene.getEngine(), i = t.VertexData.CreateBox(1);
            this._vb = new t.VertexBuffer(n, i.positions, t.VertexBuffer.PositionKind, !1), this._ib = n.createIndexBuffer([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 7, 1, 6, 2, 5, 3, 4])
        }
        return e.prototype.reset = function() {
            this.renderList.reset()
        }, e.prototype.render = function() {
            if (0 != this.renderList.length && this._colorShader.isReady()) {
                var e = this._scene.getEngine();
                e.setDepthWrite(!1), this._colorShader._preBind();
                for (var n = 0; n < this.renderList.length; n++) {
                    var i = this.renderList.data[n], o = i.minimum, r = i.maximum, s = r.subtract(o), a = o.add(s.scale(.5)), l = t.Matrix.Scaling(s.x, s.y, s.z).multiply(t.Matrix.Translation(a.x, a.y, a.z)).multiply(i.getWorldMatrix());
                    e.bindBuffers(this._vb.getBuffer(), this._ib, [3], 12, this._colorShader.getEffect()), this.showBackLines && (e.setDepthFunctionToGreaterOrEqual(), this._colorShader.setColor3("color", this.backColor), this._colorShader.bind(l), e.draw(!1, 0, 24)), e.setDepthFunctionToLess(), this._colorShader.setColor3("color", this.frontColor), this._colorShader.bind(l), e.draw(!1, 0, 24)
                }
                this._colorShader.unbind(), e.setDepthFunctionToLessOrEqual(), e.setDepthWrite(!0)
            }
        }, e.prototype.dispose = function() {
            this._colorShader.dispose(), this._vb.dispose(), this._scene.getEngine()._releaseBuffer(this._ib)
        }, e
    }();
    t.BoundingBoxRenderer = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function() {
        function t(t) {
            this._actionManager = t
        }
        return t.prototype.isValid = function() {
            return !0
        }, t.prototype._getProperty = function(t) {
            return this._actionManager._getProperty(t)
        }, t.prototype._getEffectiveTarget = function(t, e) {
            return this._actionManager._getEffectiveTarget(t, e)
        }, t
    }();
    t.Condition = e;
    var n = function(t) {
        function e(n, i, o, r, s) {
            "undefined" == typeof s && (s = e.IsEqual), t.call(this, n), this.propertyPath = o, this.value = r, this.operator = s, this._target = this._getEffectiveTarget(i, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }
        return __extends(e, t), Object.defineProperty(e, "IsEqual", {get: function() {
                                                      return e._IsEqual
                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(e, "IsDifferent", {get: function() {
                                                                                                                 return e._IsDifferent
                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e, "IsGreater", {get: function() {
                                                                                                                                                                            return e._IsGreater
                                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(e, "IsLesser", {get: function() {
                                                                                                                                                                                                                                       return e._IsLesser
                                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), e.prototype.isValid = function() {
            switch (this.operator) {
                case e.IsGreater:
                    return this._target[this._property] > this.value;
                case e.IsLesser:
                    return this._target[this._property] < this.value;
                case e.IsEqual:
                case e.IsDifferent:
                    var t;
                    return t = this.value.equals ? this.value.equals(this._target[this._property]) : this.value === this._target[this._property], this.operator === e.IsEqual ? t : !t
            }
            return !1
        }, e._IsEqual = 0, e._IsDifferent = 1, e._IsGreater = 2, e._IsLesser = 3, e
    }(e);
    t.ValueCondition = n;
    var i = function(t) {
        function e(e, n) {
            t.call(this, e), this.predicate = n
        }
        return __extends(e, t), e.prototype.isValid = function() {
            return this.predicate()
        }, e
    }(e);
    t.PredicateCondition = i;
    var o = function(t) {
        function e(e, n, i) {
            t.call(this, e), this.value = i, this._target = n
        }
        return __extends(e, t), e.prototype.isValid = function() {
            return this._target.state === this.value
        }, e
    }(e);
    t.StateCondition = o
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e) {
            this.triggerOptions = t, t.parameter ? (this.trigger = t.trigger, this._triggerParameter = t.parameter) : this.trigger = t, this._nextActiveAction = this, this._condition = e
        }
        return t.prototype._prepare = function() {
        }, t.prototype.getTriggerParameter = function() {
            return this._triggerParameter
        }, t.prototype._executeCurrent = function(t) {
            if (this._condition) {
                var e = this._actionManager.getScene().getRenderId();
                if (this._condition._evaluationId === e) {
                    if (!this._condition._currentResult)
                        return
                        } else {
                            if (this._condition._evaluationId = e, !this._condition.isValid())
                                return void (this._condition._currentResult = !1);
                            this._condition._currentResult = !0
                        }
            }
            this._nextActiveAction.execute(t), this._nextActiveAction = this._nextActiveAction._child ? this._nextActiveAction._child : this
        }, t.prototype.execute = function() {
        }, t.prototype.then = function(t) {
            return this._child = t, t._actionManager = this._actionManager, t._prepare(), t
        }, t.prototype._getProperty = function(t) {
            return this._actionManager._getProperty(t)
        }, t.prototype._getEffectiveTarget = function(t, e) {
            return this._actionManager._getEffectiveTarget(t, e)
        }, t
    }();
    t.Action = e
}(BABYLON || (BABYLON = {}));
var BABYLON;
!function(t) {
    var e = function() {
        function t(t, e, n, i) {
            this.source = t, this.pointerX = e, this.pointerY = n, this.meshUnderPointer = i
        }
        return t.CreateNew = function(e) {
            var n = e.getScene();
            return new t(e, n.pointerX, n.pointerY, n.meshUnderPointer)
        }, t
    }();
    t.ActionEvent = e;
    var n = function() {
        function e(t) {
            this.actions = new Array, this._scene = t, t._actionManagers.push(this)
        }
        return Object.defineProperty(e, "NothingTrigger", {get: function() {
                                     return e._NothingTrigger
                                     },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnPickTrigger", {get: function() {
                                                                                                return e._OnPickTrigger
                                                                                                },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnLeftPickTrigger", {get: function() {
                                                                                                                                                           return e._OnLeftPickTrigger
                                                                                                                                                           },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnRightPickTrigger", {get: function() {
                                                                                                                                                                                                                      return e._OnRightPickTrigger
                                                                                                                                                                                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnCenterPickTrigger", {get: function() {
                                                                                                                                                                                                                                                                                 return e._OnCenterPickTrigger
                                                                                                                                                                                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnPointerOverTrigger", {get: function() {
                                                                                                                                                                                                                                                                                                                                            return e._OnPointerOverTrigger
                                                                                                                                                                                                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnPointerOutTrigger", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                       return e._OnPointerOutTrigger
                                                                                                                                                                                                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnEveryFrameTrigger", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  return e._OnEveryFrameTrigger
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnIntersectionEnterTrigger", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             return e._OnIntersectionEnterTrigger
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             },enumerable: !0,configurable: !0}), Object.defineProperty(e, "OnIntersectionExitTrigger", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return e._OnIntersectionExitTrigger
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },enumerable: !0,configurable: !0}), e.prototype.dispose = function() {
            var t = this._scene._actionManagers.indexOf(this);
            t > -1 && this._scene._actionManagers.splice(t, 1)
        }, e.prototype.getScene = function() {
            return this._scene
        }, e.prototype.hasSpecificTriggers = function(t) {
            for (var e = 0; e < this.actions.length; e++) {
                var n = this.actions[e];
                if (t.indexOf(n.trigger) > -1)
                    return !0
                    }
            return !1
        }, Object.defineProperty(e.prototype, "hasPointerTriggers", {get: function() {
                                 for (var t = 0; t < this.actions.length; t++) {
                                 var n = this.actions[t];
                                 if (n.trigger >= e._OnPickTrigger && n.trigger <= e._OnPointerOutTrigger)
                                 return !0
                                 }
                                 return !1
                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "hasPickTriggers", {get: function() {
                                                                                            for (var t = 0; t < this.actions.length; t++) {
                                                                                            var n = this.actions[t];
                                                                                            if (n.trigger >= e._OnPickTrigger && n.trigger <= e._OnCenterPickTrigger)
                                                                                            return !0
                                                                                            }
                                                                                            return !1
                                                                                            },enumerable: !0,configurable: !0}), e.prototype.registerAction = function(n) {
            return n.trigger === e.OnEveryFrameTrigger && this.getScene().actionManager !== this ? (t.Tools.Warn("OnEveryFrameTrigger can only be used with scene.actionManager"), null) : (this.actions.push(n), n._actionManager = this, n._prepare(), n)
        }, e.prototype.processTrigger = function(t, e) {
            for (var n = 0; n < this.actions.length; n++) {
                var i = this.actions[n];
                i.trigger === t && i._executeCurrent(e)
            }
        }, e.prototype._getEffectiveTarget = function(t, e) {
            for (var n = e.split("."), i = 0; i < n.length - 1; i++)
                t = t[n[i]];
            return t
        }, e.prototype._getProperty = function(t) {
            var e = t.split(".");
            return e[e.length - 1]
        }, e._NothingTrigger = 0, e._OnPickTrigger = 1, e._OnLeftPickTrigger = 2, e._OnRightPickTrigger = 3, e._OnCenterPickTrigger = 4, e._OnPointerOverTrigger = 5, e._OnPointerOutTrigger = 6, e._OnEveryFrameTrigger = 7, e._OnIntersectionEnterTrigger = 8, e._OnIntersectionExitTrigger = 9, e
    }();
    t.ActionManager = n
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(t, n, i, o, r, s, a) {
            "undefined" == typeof r && (r = 1e3), e.call(this, t, s), this.propertyPath = i, this.value = o, this.duration = r, this.stopOtherAnimations = a, this._target = n
        }
        return __extends(n, e), n.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, n.prototype.execute = function() {
            var e, n = this._actionManager.getScene(), i = [{frame: 0,value: this._target[this._property]}, {frame: 100,value: this.value}];
            if ("number" == typeof this.value)
                e = t.Animation.ANIMATIONTYPE_FLOAT;
            else if (this.value instanceof t.Color3)
                e = t.Animation.ANIMATIONTYPE_COLOR3;
            else if (this.value instanceof t.Vector3)
                e = t.Animation.ANIMATIONTYPE_VECTOR3;
            else if (this.value instanceof t.Matrix)
                e = t.Animation.ANIMATIONTYPE_MATRIX;
            else {
                if (!(this.value instanceof t.Quaternion))
                    return void t.Tools.Warn("InterpolateValueAction: Unsupported type (" + typeof this.value + ")");
                e = t.Animation.ANIMATIONTYPE_QUATERNION
            }
            var o = new t.Animation("InterpolateValueAction", this._property, 100 * (1e3 / this.duration), e, t.Animation.ANIMATIONLOOPMODE_CONSTANT);
            o.setKeys(i), this.stopOtherAnimations && n.stopAnimation(this._target), n.beginDirectAnimation(this._target, [o], 0, 100)
        }, n
    }(t.Action);
    t.InterpolateValueAction = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(t) {
        function e(e, n, i, o) {
            t.call(this, e, o), this.propertyPath = i, this._target = n
        }
        return __extends(e, t), e.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, e.prototype.execute = function() {
            this._target[this._property] = !this._target[this._property]
        }, e
    }(t.Action);
    t.SwitchBooleanAction = e;
    var n = function(t) {
        function e(e, n, i, o) {
            t.call(this, e, o), this.value = i, this._target = n
        }
        return __extends(e, t), e.prototype.execute = function() {
            this._target.state = this.value
        }, e
    }(t.Action);
    t.SetStateAction = n;
    var i = function(t) {
        function e(e, n, i, o, r) {
            t.call(this, e, r), this.propertyPath = i, this.value = o, this._target = n
        }
        return __extends(e, t), e.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath)
        }, e.prototype.execute = function() {
            this._target[this._property] = this.value
        }, e
    }(t.Action);
    t.SetValueAction = i;
    var o = function(e) {
        function n(t, n, i, o, r) {
            e.call(this, t, r), this.propertyPath = i, this.value = o, this._target = n
        }
        return __extends(n, e), n.prototype._prepare = function() {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath), this._property = this._getProperty(this.propertyPath), "number" != typeof this._target[this._property] && t.Tools.Warn("Warning: IncrementValueAction can only be used with number values")
        }, n.prototype.execute = function() {
            this._target[this._property] += this.value
        }, n
    }(t.Action);
    t.IncrementValueAction = o;
    var r = function(t) {
        function e(e, n, i, o, r, s) {
            t.call(this, e, s), this.from = i, this.to = o, this.loop = r, this._target = n
        }
        return __extends(e, t), e.prototype._prepare = function() {
        }, e.prototype.execute = function() {
            var t = this._actionManager.getScene();
            t.beginAnimation(this._target, this.from, this.to, this.loop)
        }, e
    }(t.Action);
    t.PlayAnimationAction = r;
    var s = function(t) {
        function e(e, n, i) {
            t.call(this, e, i), this._target = n
        }
        return __extends(e, t), e.prototype._prepare = function() {
        }, e.prototype.execute = function() {
            var t = this._actionManager.getScene();
            t.stopAnimation(this._target)
        }, e
    }(t.Action);
    t.StopAnimationAction = s;
    var a = function(e) {
        function n(n, i) {
            "undefined" == typeof n && (n = t.ActionManager.NothingTrigger), e.call(this, n, i)
        }
        return __extends(n, e), n.prototype.execute = function() {
        }, n
    }(t.Action);
    t.DoNothingAction = a;
    var l = function(t) {
        function e(e, n, i) {
            t.call(this, e, i), this.children = n
        }
        return __extends(e, t), e.prototype._prepare = function() {
            for (var t = 0; t < this.children.length; t++)
                this.children[t]._actionManager = this._actionManager, this.children[t]._prepare()
                }, e.prototype.execute = function(t) {
                    for (var e = 0; e < this.children.length; e++)
                        this.children[e].execute(t)
                        }, e
    }(t.Action);
    t.CombineAction = l;
    var h = function(t) {
        function e(e, n, i) {
            t.call(this, e, i), this.func = n
        }
        return __extends(e, t), e.prototype.execute = function(t) {
            this.func(t)
        }, e
    }(t.Action);
    t.ExecuteCodeAction = h;
    var c = function(e) {
        function n(t, n, i, o) {
            e.call(this, t, o), this._target = n, this._parent = i
        }
        return __extends(n, e), n.prototype._prepare = function() {
        }, n.prototype.execute = function() {
            if (this._target.parent !== this._parent) {
                var e = this._parent.getWorldMatrix().clone();
                e.invert(), this._target.position = t.Vector3.TransformCoordinates(this._target.position, e), this._target.parent = this._parent
            }
        }, n
    }(t.Action);
    t.SetParentAction = c
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function() {
        function e(e, n, i, o, r) {
            this.delayLoadState = t.Engine.DELAYLOADSTATE_NONE, this._totalVertices = 0, this._indices = [], this.id = e, this._engine = n.getEngine(), this._meshes = [], this._scene = n, i ? this.setAllVerticesData(i, o) : (this._totalVertices = 0, this._indices = []), r && this.applyToMesh(r)
        }
        return e.prototype.getScene = function() {
            return this._scene
        }, e.prototype.getEngine = function() {
            return this._engine
        }, e.prototype.isReady = function() {
            return this.delayLoadState === t.Engine.DELAYLOADSTATE_LOADED || this.delayLoadState === t.Engine.DELAYLOADSTATE_NONE
        }, e.prototype.setAllVerticesData = function(t, e) {
            t.applyToGeometry(this, e)
        }, e.prototype.setVerticesData = function(e, n, i) {
            if (this._vertexBuffers = this._vertexBuffers || {}, this._vertexBuffers[e] && this._vertexBuffers[e].dispose(), this._vertexBuffers[e] = new t.VertexBuffer(this._engine, n, e, i, 0 === this._meshes.length), e === t.VertexBuffer.PositionKind) {
                var o = this._vertexBuffers[e].getStrideSize();
                this._totalVertices = n.length / o;
                for (var r = t.Tools.ExtractMinAndMax(n, 0, this._totalVertices), s = this._meshes, a = s.length, l = 0; a > l; l++) {
                    var h = s[l];
                    h._resetPointsArrayCache(), h._boundingInfo = new t.BoundingInfo(r.minimum, r.maximum), h._createGlobalSubMesh(), h.computeWorldMatrix(!0)
                }
            }
        }, e.prototype.updateVerticesData = function(e, n, i) {
            var o = this.getVertexBuffer(e);
            if (o && (o.update(n), e === t.VertexBuffer.PositionKind)) {
                var r;
                if (i) {
                    var s = o.getStrideSize();
                    this._totalVertices = n.length / s, r = t.Tools.ExtractMinAndMax(n, 0, this._totalVertices)
                }
                for (var a = this._meshes, l = a.length, h = 0; l > h; h++) {
                    var c = a[h];
                    c._resetPointsArrayCache(), i && (c._boundingInfo = new t.BoundingInfo(r.minimum, r.maximum))
                }
            }
        }, e.prototype.getTotalVertices = function() {
            return this.isReady() ? this._totalVertices : 0
        }, e.prototype.getVerticesData = function(t) {
            var e = this.getVertexBuffer(t);
            return e ? e.getData() : null
        }, e.prototype.getVertexBuffer = function(t) {
            return this.isReady() ? this._vertexBuffers[t] : null
        }, e.prototype.getVertexBuffers = function() {
            return this.isReady() ? this._vertexBuffers : null
        }, e.prototype.isVerticesDataPresent = function(t) {
            return this._vertexBuffers ? void 0 !== this._vertexBuffers[t] : this._delayInfo ? -1 !== this._delayInfo.indexOf(t) : !1
        }, e.prototype.getVerticesDataKinds = function() {
            var t = [];
            if (!this._vertexBuffers && this._delayInfo)
                for (var e in this._delayInfo)
                    t.push(e);
            else
                for (e in this._vertexBuffers)
                    t.push(e);
            return t
        }, e.prototype.setIndices = function(t) {
            this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = t, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices));
            for (var e = this._meshes, n = e.length, i = 0; n > i; i++)
                e[i]._createGlobalSubMesh()
                }, e.prototype.getTotalIndices = function() {
                    return this.isReady() ? this._indices.length : 0
                }, e.prototype.getIndices = function() {
                    return this.isReady() ? this._indices : null
                }, e.prototype.getIndexBuffer = function() {
                    return this.isReady() ? this._indexBuffer : null
                }, e.prototype.releaseForMesh = function(t, e) {
                    var n = this._meshes, i = n.indexOf(t);
                    if (-1 !== i) {
                        for (var o in this._vertexBuffers)
                            this._vertexBuffers[o].dispose();
                        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), n.splice(i, 1), t._geometry = null, 0 == n.length && e && this.dispose()
                    }
                }, e.prototype.applyToMesh = function(t) {
                    if (t._geometry !== this) {
                        var e = t._geometry;
                        e && e.releaseForMesh(t);
                        var n = this._meshes;
                        t._geometry = this, this._scene.pushGeometry(this), n.push(t), this.isReady() ? this._applyToMesh(t) : t._boundingInfo = this._boundingInfo
                    }
                }, e.prototype._applyToMesh = function(e) {
                    var n = this._meshes.length;
                    for (var i in this._vertexBuffers)
                        if (1 === n && this._vertexBuffers[i].create(), this._vertexBuffers[i]._buffer.references = n, i === t.VertexBuffer.PositionKind) {
                            e._resetPointsArrayCache();
                            var o = t.Tools.ExtractMinAndMax(this._vertexBuffers[i].getData(), 0, this._totalVertices);
                            e._boundingInfo = new t.BoundingInfo(o.minimum, o.maximum), e._createGlobalSubMesh()
                        }
                    1 === n && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices)), this._indexBuffer && (this._indexBuffer.references = n)
                }, e.prototype.load = function(e, n) {
                    var i = this;
                    if (this.delayLoadState !== t.Engine.DELAYLOADSTATE_LOADING) {
                        if (this.isReady())
                            return void (n && n());
                        this.delayLoadState = t.Engine.DELAYLOADSTATE_LOADING, e._addPendingData(this), t.Tools.LoadFile(this.delayLoadingFile, function(o) {
                                                                                                                         i._delayLoadingFunction(JSON.parse(o), i), i.delayLoadState = t.Engine.DELAYLOADSTATE_LOADED, i._delayInfo = [], e._removePendingData(i);
                                                                                                                         for (var r = i._meshes, s = r.length, a = 0; s > a; a++)
                                                                                                                         i._applyToMesh(r[a]);
                                                                                                                         n && n()
                                                                                                                         }, function() {
                                                                                                                         }, e.database)
                    }
                }, e.prototype.dispose = function() {
                    for (var e = this._meshes, n = e.length, i = 0; n > i; i++)
                        this.releaseForMesh(e[i]);
                    this._meshes = [];
                    for (var o in this._vertexBuffers)
                        this._vertexBuffers[o].dispose();
                    this._vertexBuffers = [], this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = t.Engine.DELAYLOADSTATE_NONE, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null;
                    var r = this._scene.getGeometries();
                    i = r.indexOf(this), i > -1 && r.splice(i, 1)
                }, e.prototype.copy = function(e) {
                    var n = new t.VertexData;
                    n.indices = [];
                    for (var i = this.getIndices(), o = 0; o < i.length; o++)
                        n.indices.push(i[o]);
                    var r = !1, s = !1;
                    for (var a in this._vertexBuffers)
                        n.set(this.getVerticesData(a), a), s || (r = this.getVertexBuffer(a).isUpdatable(), s = !r);
                    var l = new t.Geometry(e, this._scene, n, r, null);
                    l.delayLoadState = this.delayLoadState, l.delayLoadingFile = this.delayLoadingFile, l._delayLoadingFunction = this._delayLoadingFunction;
                    for (a in this._delayInfo)
                        l._delayInfo = l._delayInfo || [], l._delayInfo.push(a);
                    var h = t.Tools.ExtractMinAndMax(this.getVerticesData(t.VertexBuffer.PositionKind), 0, this.getTotalVertices());
                    return l._boundingInfo = new t.BoundingInfo(h.minimum, h.maximum), l
                }, e.ExtractFromMesh = function(t, e) {
                    var n = t._geometry;
                    return n ? n.copy(e) : null
                }, e.RandomId = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                                                                          var e = 16 * Math.random() | 0, n = "x" == t ? e : 3 & e | 8;
                                                                          return n.toString(16)
                                                                          })
                }, e
    }();
    t.Geometry = e, function(e) {
        !function(n) {
            var i = function(t) {
                function e(e, n, i, o, r) {
                    this._beingRegenerated = !0, this._canBeRegenerated = o, t.call(this, e, n, i, !1, r), this._beingRegenerated = !1
                }
                return __extends(e, t), e.prototype.canBeRegenerated = function() {
                    return this._canBeRegenerated
                }, e.prototype.regenerate = function() {
                    this._canBeRegenerated && (this._beingRegenerated = !0, this.setAllVerticesData(this._regenerateVertexData(), !1), this._beingRegenerated = !1)
                }, e.prototype.asNewGeometry = function(e) {
                    return t.prototype.copy.call(this, e)
                }, e.prototype.setAllVerticesData = function(e) {
                    this._beingRegenerated && t.prototype.setAllVerticesData.call(this, e, !1)
                }, e.prototype.setVerticesData = function(e, n) {
                    this._beingRegenerated && t.prototype.setVerticesData.call(this, e, n, !1)
                }, e.prototype._regenerateVertexData = function() {
                    throw new Error("Abstract method")
                }, e.prototype.copy = function() {
                    throw new Error("Must be overriden in sub-classes.")
                }, e
            }(e);
            n._Primitive = i;
            var o = function(e) {
                function n(t, n, i, o, r) {
                    this.size = i, e.call(this, t, n, this._regenerateVertexData(), o, r)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateBox(this.size)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.size, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Box = o;
            var r = function(e) {
                function n(t, n, i, o, r, s) {
                    this.segments = i, this.diameter = o, e.call(this, t, n, this._regenerateVertexData(), r, s)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateSphere(this.segments, this.diameter)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.segments, this.diameter, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Sphere = r;
            var s = function(e) {
                function n(t, n, i, o, r, s, a, l, h) {
                    "undefined" == typeof a && (a = 1), this.height = i, this.diameterTop = r, this.diameterBottom = o, this.tessellation = s, this.subdivisions = a, e.call(this, t, n, this._regenerateVertexData(), l, h)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateCylinder(this.height, this.diameterBottom, this.diameterTop, this.tessellation, this.subdivisions)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.height, this.diameterTop, this.diameterBottom, this.tessellation, this.subdivisions, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Cylinder = s;
            var a = function(e) {
                function n(t, n, i, o, r, s, a) {
                    this.diameter = i, this.thickness = o, this.tessellation = r, e.call(this, t, n, this._regenerateVertexData(), s, a)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateTorus(this.diameter, this.thickness, this.tessellation)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.diameter, this.thickness, this.tessellation, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Torus = a;
            var l = function(e) {
                function n(t, n, i, o, r, s, a) {
                    this.width = i, this.height = o, this.subdivisions = r, e.call(this, t, n, this._regenerateVertexData(), s, a)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateGround(this.width, this.height, this.subdivisions)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.width, this.height, this.subdivisions, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Ground = l;
            var h = function(e) {
                function n(t, n, i, o, r, s, a, l, h, c) {
                    this.xmin = i, this.zmin = o, this.xmax = r, this.zmax = s, this.subdivisions = a, this.precision = l, e.call(this, t, n, this._regenerateVertexData(), h, c)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateTiledGround(this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.TiledGround = h;
            var c = function(e) {
                function n(t, n, i, o, r) {
                    this.size = i, e.call(this, t, n, this._regenerateVertexData(), o, r)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreatePlane(this.size)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.size, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.Plane = c;
            var u = function(e) {
                function n(t, n, i, o, r, s, a, l, h, c) {
                    this.radius = i, this.tube = o, this.radialSegments = r, this.tubularSegments = s, this.p = a, this.q = l, e.call(this, t, n, this._regenerateVertexData(), h, c)
                }
                return __extends(n, e), n.prototype._regenerateVertexData = function() {
                    return t.VertexData.CreateTorusKnot(this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q)
                }, n.prototype.copy = function(t) {
                    return new n(t, this.getScene(), this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q, this.canBeRegenerated(), null)
                }, n
            }(i);
            n.TorusKnot = u
        }(e.Primitives || (e.Primitives = {}));
        e.Primitives
    }(t.Geometry || (t.Geometry = {}));
    var e = t.Geometry
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function() {
        function e(t) {
            var e = this;
            this.babylonGamepads = [], this.oneGamepadConnected = !1, this.isMonitoring = !1, this.gamepadEventSupported = "GamepadEvent" in window, this.gamepadSupportAvailable = navigator.getGamepads || !!navigator.webkitGetGamepads || !!navigator.msGetGamepads || !!navigator.webkitGamepads, this.buttonADataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAA9aSURBVHja7FtpbBzneX7m3otcihSpm9Z9UJalxPKhVLZlp6ktNzEaxE0CtAnQAgnSoPWPBi3syuiPwordFi5Qt2haFygCoylSV4Vby6os1I3kOLYrS65kXXQoypJJSaFEUTyXy925+rzfzC6HFFlL1kpAIe7i5czO7H7zPs97ft8MtTAMcSu/dNzirxkCZgiYIWCGgBkCZgi4hV/mDR5fSxAt+0ZiX0ucDxMSTJLK+f83BFSA6TFgK75OclshouKBFbA+xaV4k7Z+fD6sNRlmjYFXQMu4NiUVS/oHe5/ecnHo3MYxd7QthN9UcsdW6FqEPwgDOFbqpAajL2VlTrTULzj4Ow8+s4+nipSxWMoxIUkyrl/pGswFtIR7WzHgDCX77K7vfHNkbOA+AryjYZadb27OIJdzCNZBKmXw4kbk35qPsTEfJbeEkZESentHMdBfGtY142gu1bDvqV/925f4tQJlNCaj4hXX7RHXS0AFuJEAXvfHr/zmk67vPjir0V68aFEe8xtuQ6O1FHlrEXLmHBiaDUtzYBlpNYjrF+GFZfhhCcPeBQy53ehzT+H8QBe6uwfRf7l8xjKsvX/y5X98jl8fThDhJ4i46QQkrS5I6v7oX7/++77vPtLUlFnZtnIRlubvxRxnHbJmE79sxD/SqG0oZk8MFarRqufUkQAFrxcXSkfx0eB+nOggKX2jHYZhvf79r/z4L2IiipO84aYRkASfefnAX695p3P3c9mM/UufuaMVdzRvxVx7A0xaWdOMqVULJ6Z3TZv6KmHo0ztK6CkfxpHe3Th0pAuF0fLbn1u+9cmv3vW77bE3fGoSPi0BVfAvvPEHm9rPv//iooWz5m9Z/wCWZx+Go9UrN48QTD9IGMZ1cJIzTPisRQclPMrhME4W9mDfB2+i+2z/+TXz7/z2E7/85+9OIuGGE6BV3H77zm/d33nx6Ktr18zFg2t+DQude2n1tLJ8tcJ90vDhpG5Am7qTkJAQErywiLOld7G3/d9xvL0Hy1vWPbbtS3//00Q4hDeaAFXintrx1fu7+jp2r13bgofX/gaazbVkJQdLT9P6VqRFDSu2hIgXlBUBLgtCr3cce47/CMePX0Rr08qtzz7+8k8TpfKGtcKq1jPZre7oObyjdWkGd628l7AXwvMCeL7HjO6qrS8S1E5kTE9tfbiur665ccU9EB1EF9Ep0WXesEZIJb9j5/b/XUtzNrt29Rw0og2lchmBVqLo8LSAHlCixbTpddGm8Y7pjkttCCUP+JQy3FiatNuxdvUx9F4ayopO/OL9sQeEN4oA/eHn577oWPbGVes11PsrUBxjDafze1Te1VzouqnK2TgmLQljQqmrnAsT+iaPVb5b2co7EC+QhBgUeM1R1AcrsGp9Jy6+4W8U3fZ8r+e3EnOI2uaAX3l+zgNB4O9rW5/B8tY5WGo9BtOrJ4uMfUl+uj0B8HTmPXj8Pex86xVEnTDBBSE2r78fX9i09RPyZfT2A5ceIMSPwDOH8JH7Kk5+fAHtR0Zh6MZ9e7534Wc3wgO0sXLhD9OpFOa0egjGMhguD8BgTJooMfPbV1h/umz25ondcFP90IzY2iTgrfY9uH31aqSc9CeSEHkBEyITv28M8XMGc2/z0HGCpWCs8BS/9sWrDYOrJuCBZ+vu5sUfXbicia5kYGzUw4DWTwJKbApSjHuTBBjT2H68zg0MD4KlEwabZi0Y7wd85u/3O9/B6sVrPlEXeiF9nMmRxPt6Qf4y/HyIbh3HwkdF1zefGt5fUwK8wP2WAGwh02MFE/5ogYr3Qg/STL0W3d8aB1ppa+Pw0uI2Tz6/134Mg+UoIGZlZ2HMLaJYHkPICr6//RBamvPj/UA4dYKsegGrXqAXMaqNsDT6SreOY5Gu/FptCeBFN+caAphGiKFiGaOjA3AJHoGt6r7GgNbjqjo5yQkBUVHQ8PaJExjiaZ2yue12nO27gCNdHSptvf/xGdw11I2UZSmvCIJgQiJMhoEfeqpNDvUSRvUB5hMX9fUecg0aBi+Hm2uaAz633bmbm1VN8+h07LfKJdkOkQB2fL4BTlsj8No4YLG2putMSjwjp3QNvZdH8YsiExV501isFjU30lpF7D8dVfCA8sFHp7BuWYtaIwiCsCrCSDVhh9IX8k0CoHsoMQ84FrfFAE3zQAK0VaLzO9tK79XKAxSj+aYALt3XLfNipZD1v492YexrE/sP0zBgUIQIoYaflAXbz16CzyY6YKqYl8uheTarRioD7xAxCQHUpv18L1Yud+Iloujtk4zQo9WZcKURqjbHclzKvj0Gvcw8UA6oY2WqonSuGQGb5I+TJgEFEsB4daXzc0eopabcX13W0BXwgAnRZL4Q62s8ppnR/pFz/QjF+tRvxeIsY/cizGwRt83P4czACL8HdA1JUivCNGVogvdkNkgaGDNe4CvXFyJ8n+B5XGLJ1FmJXJ53AzjZKgGbatkKL5c/liNWIPO8uM/4VO2uKCQZjLmBqQAGJ4EmI8NMabDTOuyUobYXmPlCEpiqA1IkYdWSBpjpEDl6wsrF9aAjqHNOPXDyXAGprAknY5B0btOGGk/GlfE1taqofCNuuYNIJ+omOiZ1rpUHtEYWjkpWoP5EWV2sb5isA7aIQTHHxaIniNADui8PIs0Eb6SY/Z0UQc+j+mXYuoM7Vy/Age7zkBUyCZGLhRLSOYcWpfXFA1wPhqup8JNKq5UkKeoqSHxPLSoqnUQtw5ioc60IyE/VkOji8mYE2nZELNgCXLaOkGDFJBg4OzCMDEcxCfAzS1pQX5fHSNDLClLGwmwzls6vQ09hGFJYegdZ1hha2bqIBNelB5Qjog02TzpFNVEquYpMuTSYr/lcQPKPJHoRQ8W1GYO3lDgpO9pPWTEZEQGnuodg5Hyk66Lyd8fKOQQ6gqyWict7GeuWz8HQyWEFw+bB7ksF3Nk2V1nfpZTLQqSLslzXlDmHpsQ1osVoy/Solwf/GpdErpaAQUqjWxL2GWcWaSfAMIis7RBwiuCdtD1OgmNHBJCg7r4uZBnbdjaaq+3YewB+USYicY8juYPnMtloqdCjG3f39eO+3JKIAFadSiiZigBdgdcqItMxsmZbIbvUIKlzzQjoEgLGRjU2KTp8AjRCkzEnAG0mtQh8Ku0oAqok8JzP+Lw0MkB3jpKjKpapaL5WKZxafDdBqoC6O8LtyMAQhoZdzG7MwLU8FUYKPINcl+qimismRj26v2I71I3jDxfdpM41I6CTsmG4X0djKyc8RYu9t0Vl2QJbBJ5xFPiICJIg1hdhR3fs5HnWeldleZXABLA98b7Y5HtjkgwNEtbTN4iFC5oI3I1CTsAbsfVjAizJB3Qbx9HphRp6eqr3TDprSYA0FI/3ntOxbpUNM2OjpEcE6HYEWkhIKw+ICeBxi+T09F1WZU+iJq2n8fRDf4Ymu3XSrcOIgg8H9uOFn31fNUVC0oddZ7B5YxtDwlTgo66SEici2fokwCJjju0hw7J54WypQsB7tSRAza+H+nld30Y+m2b7SS+Qn9PKFl1egRciHIfWpxC8x+7tdA97+3zUcNyWX4Ci/THOoD2x/hmlQTox+3gDjWYeg/4gmF853xjBpUsjaGnJR24fu36FNzX5pmfY7EPStlSLIgb6gwk616QRYk8tS88/l/2PT/loyqbQkEmhPpNGNp1CmvtieQHvONGtL4sdy9Hjp5kkpTWmSzM7L529hErHs0cCpt2qW00BymDV3JXSU8HkAXKIjtNnedxS48m4Mr5cR9YlMrx+XTqNRmbP2ZkMOjvHKir/PNa5pouiitFjH44iZ6YwO5tFAy+eo6SdpOUJyhBQTJR+HT9HYLJaFve0PqQmTQLaVOCdmIRIWE+wrmWTzG8iAugF7qgWjSWkGbYa32EjJQTkGFv5dBZNJKCeHdb77UPXZP1rWhKLZ4Rqjv2Fz86lLMNlpusCY9BnqTNUIyTgrVhhs7rVq2KoW2TSxWlXLOCqWX4svmpzZdEjWvgQcdVWPnu+i4ClUS+HyLIFnsVf/9eBduw8eKYy2D1XMxO8Jg+IB9wl+3s/uAC3qKMpXY88m/ecnUHaSis3Na8Ab1UtaCh3j1y+sm8m9o0J+9Fv9MR4Zhw6DufTWasOebsOs+xZKHJOtvtQtertulrwV+0BtH5yWvyW7CxubsCTX9+KUQZ4ga7qmdGUFmrya8QWHwcxlReMF8Mw4QETrR8oy7tq2ivH5Tvya8n8aXZMGc4An/nRDpy52FfR8b5KCJCImt8YkYF/KDtnegfwz3sPodGajQajCTk9z/4mQ6iphMWv9AA9IeMWdyYdn+gBkVc5amwHWV6lHvVaI2YZzfinN95Ngv/htcT/p31CRNbdV8l8e++xD5HPNeHxhx5Bgf18kTN5T1kvjBfEjGjBJCai4gnjHqAnlvqS8e9NeujEjEul/NokDbai4V/2voafHD1S0evdWLeb8ojMNyly5fS//ffbcD0L33j4K4RX4rtMh/UUGLXmr6BWXN9MEFAhYfzmZ6hcXI+TpISRH8061Ui68gTWGUJP4aU9P8ZrB39S+Xkx1ummPSMkbebnJcxU1jm4D5eGhvB7j32HJcpUJHhxLIfxTZpxwGa8eKrHC51a9Tmp+N5P1RsQ01cJAwEflHw8/+pfYn/HgaQ+n7/a1vd6k+BUS2XvVD401TXhu488gQ0r71QUuLJsrWT8mSYtfkBMm0BAmFhNrgDX4oRqqeaJMw4c6TyIv/qPP0Xf8KUJ6sXuP1XluuEEyGsD5TXKgsqBNQvW4RtbnkDb4ttJQlGt/IQqLMJE7tWqOSBZCSrL6dFSqq3AnzhzDC/tewHt5w4nr3suvgN0+P8o3TeegFe3vYDHtj+xhLt/Q3kkeW5d693YuuHXsWHZPcixW4tCwo+trVU9QEs8G6HFqW5kdBiHTu3H64dfxpGuK8r665Tv7tz2D6e/tP23cT0E1OA5QR2iiIbs1i9u/9qTPPC12CtwlIofjZVvW/BZ3LVsC5bPW4u5DQuxaPay2NpRIuy61IkLA+dw8hdHceDUPpw49z9TXUysvWPXtl3bQ4yQtMJ1a18DAsbvRO/atvM5DXXPPbp9yzP8+GXBXTkngKYBdTWvE5RXdm87+HQEfLh2T57UIAdM95Js9+04LKSDbLzG31+Omxpx9xfxKR6AukkhMP0aKuUHsag5VEzE3fGSddsUVu6KFzIE+H/iJry0mX+bu8VfMwTMEDBDwAwBMwTMEHALv/5XgAEASpR5N6rB30UAAAAASUVORK5CYII=", this._callbackGamepadConnected = t, this.gamepadSupportAvailable ? (this.gamepadEventSupported ? (window.addEventListener("gamepadconnected", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e._onGamepadConnected(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }, !1), window.addEventListener("gamepaddisconnected", function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e._onGamepadDisconnected(t)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }, !1)) : this._startMonitoringGamepads(), this.oneGamepadConnected || this._insertGamepadDOMInstructions()) : this._insertGamepadDOMNotSupported()
        }
        return e.prototype._insertGamepadDOMInstructions = function() {
            e.gamepadDOMInfo = document.createElement("div");
            var t = document.createElement("img");
            t.src = this.buttonADataURL;
            var n = document.createElement("span");
            n.innerHTML = "<strong>to activate gamepad</strong>", e.gamepadDOMInfo.appendChild(t), e.gamepadDOMInfo.appendChild(n), e.gamepadDOMInfo.style.position = "absolute", e.gamepadDOMInfo.style.width = "100%", e.gamepadDOMInfo.style.height = "48px", e.gamepadDOMInfo.style.bottom = "0px", e.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)", e.gamepadDOMInfo.style.textAlign = "center", e.gamepadDOMInfo.style.zIndex = "10", t.style.position = "relative", t.style.bottom = "8px", n.style.position = "relative", n.style.fontSize = "32px", n.style.bottom = "32px", n.style.color = "green", document.body.appendChild(e.gamepadDOMInfo)
        }, e.prototype._insertGamepadDOMNotSupported = function() {
            e.gamepadDOMInfo = document.createElement("div");
            var t = document.createElement("span");
            t.innerHTML = "<strong>gamepad not supported</strong>", e.gamepadDOMInfo.appendChild(t), e.gamepadDOMInfo.style.position = "absolute", e.gamepadDOMInfo.style.width = "100%", e.gamepadDOMInfo.style.height = "40px", e.gamepadDOMInfo.style.bottom = "0px", e.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)", e.gamepadDOMInfo.style.textAlign = "center", e.gamepadDOMInfo.style.zIndex = "10", t.style.position = "relative", t.style.fontSize = "32px", t.style.color = "red", document.body.appendChild(e.gamepadDOMInfo)
        }, e.prototype.dispose = function() {
            document.body.removeChild(e.gamepadDOMInfo)
        }, e.prototype._onGamepadConnected = function(t) {
            var e = this._addNewGamepad(t.gamepad);
            this._callbackGamepadConnected && this._callbackGamepadConnected(e), this._startMonitoringGamepads()
        }, e.prototype._addNewGamepad = function(n) {
            this.oneGamepadConnected || (this.oneGamepadConnected = !0, e.gamepadDOMInfo && (document.body.removeChild(e.gamepadDOMInfo), e.gamepadDOMInfo = null));
            var i;
            return i = -1 !== n.id.search("Xbox 360") || -1 !== n.id.search("xinput") ? new t.Xbox360Pad(n.id, n.index, n) : new t.GenericPad(n.id, n.index, n), this.babylonGamepads.push(i), i
        }, e.prototype._onGamepadDisconnected = function(t) {
            for (var e in this.babylonGamepads)
                if (this.babylonGamepads[e].index == t.gamepad.index) {
                    this.babylonGamepads.splice(e, 1);
                    break
                }
            0 == this.babylonGamepads.length && this._stopMonitoringGamepads()
        }, e.prototype._startMonitoringGamepads = function() {
            this.isMonitoring || (this.isMonitoring = !0, this._checkGamepadsStatus())
        }, e.prototype._stopMonitoringGamepads = function() {
            this.isMonitoring = !1
        }, e.prototype._checkGamepadsStatus = function() {
            var t = this;
            this._updateGamepadObjects();
            for (var e in this.babylonGamepads)
                this.babylonGamepads[e].update();
            this.isMonitoring && (window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                                                                                              t._checkGamepadsStatus()
                                                                                              }) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(function() {
                                                                                                                                                                     t._checkGamepadsStatus()
                                                                                                                                                                     }) : window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(function() {
                                                                                                                                                                                                                                                   t._checkGamepadsStatus()
                                                                                                                                                                                                                                                   }))
        }, e.prototype._updateGamepadObjects = function() {
            for (var t = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [], e = 0; e < t.length; e++)
                if (t[e])
                    if (t[e].index in this.babylonGamepads)
                        this.babylonGamepads[e].browserGamepad = t[e];
                    else {
                        var n = this._addNewGamepad(t[e]);
                        this._callbackGamepadConnected && this._callbackGamepadConnected(n)
                    }
        }, e
    }();
    t.Gamepads = e;
    var n = function() {
        function t(t, e) {
            this.x = t, this.y = e
        }
        return t
    }();
    t.StickValues = n;
    var i = function() {
        function t(t, e, n) {
            this.id = t, this.index = e, this.browserGamepad = n, this.browserGamepad.axes.length >= 2 && (this._leftStick = {x: this.browserGamepad.axes[0],y: this.browserGamepad.axes[1]}), this.browserGamepad.axes.length >= 4 && (this._rightStick = {x: this.browserGamepad.axes[2],y: this.browserGamepad.axes[3]})
        }
        return t.prototype.onleftstickchanged = function(t) {
            this._onleftstickchanged = t
        }, t.prototype.onrightstickchanged = function(t) {
            this._onrightstickchanged = t
        }, Object.defineProperty(t.prototype, "leftStick", {get: function() {
                                 return this._leftStick
                                 },set: function(t) {
                                 !this._onleftstickchanged || this._leftStick.x === t.x && this._leftStick.y === t.y || this._onleftstickchanged(t), this._leftStick = t
                                 },enumerable: !0,configurable: !0}), Object.defineProperty(t.prototype, "rightStick", {get: function() {
                                                                                            return this._rightStick
                                                                                            },set: function(t) {
                                                                                            !this._onrightstickchanged || this._rightStick.x === t.x && this._rightStick.y === t.y || this._onrightstickchanged(t), this._rightStick = t
                                                                                            },enumerable: !0,configurable: !0}), t.prototype.update = function() {
            this._leftStick && (this.leftStick = {x: this.browserGamepad.axes[0],y: this.browserGamepad.axes[1]}), this._rightStick && (this.rightStick = {x: this.browserGamepad.axes[2],y: this.browserGamepad.axes[3]})
        }, t
    }();
    t.Gamepad = i;
    var o = function(t) {
        function e(e, n, i) {
            t.call(this, e, n, i), this.id = e, this.index = n, this.gamepad = i, this._buttons = new Array(i.buttons.length)
        }
        return __extends(e, t), e.prototype.onbuttondown = function(t) {
            this._onbuttondown = t
        }, e.prototype.onbuttonup = function(t) {
            this._onbuttonup = t
        }, e.prototype._setButtonValue = function(t, e, n) {
            return t !== e && (this._onbuttondown && 1 === t && this._onbuttondown(n), this._onbuttonup && 0 === t && this._onbuttonup(n)), t
        }, e.prototype.update = function() {
            t.prototype.update.call(this);
            for (var e = 0; e < this._buttons.length; e++)
                this._buttons[e] = this._setButtonValue(this.gamepad.buttons[e].value, this._buttons[e], e)
                }, e
    }(i);
    t.GenericPad = o, function(t) {
        t[t.A = 0] = "A", t[t.B = 1] = "B", t[t.X = 2] = "X", t[t.Y = 3] = "Y", t[t.Start = 4] = "Start", t[t.Back = 5] = "Back", t[t.LB = 6] = "LB", t[t.RB = 7] = "RB", t[t.LeftStick = 8] = "LeftStick", t[t.RightStick = 9] = "RightStick"
    }(t.Xbox360Button || (t.Xbox360Button = {}));
    t.Xbox360Button;
    !function(t) {
        t[t.Up = 0] = "Up", t[t.Down = 1] = "Down", t[t.Left = 2] = "Left", t[t.Right = 3] = "Right"
    }(t.Xbox360Dpad || (t.Xbox360Dpad = {}));
    var r = (t.Xbox360Dpad, function(t) {
             function e() {
             t.apply(this, arguments), this._leftTrigger = 0, this._rightTrigger = 0, this._buttonA = 0, this._buttonB = 0, this._buttonX = 0, this._buttonY = 0, this._buttonBack = 0, this._buttonStart = 0, this._buttonLB = 0, this._buttonRB = 0, this._buttonLeftStick = 0, this._buttonRightStick = 0, this._dPadUp = 0, this._dPadDown = 0, this._dPadLeft = 0, this._dPadRight = 0
             }
             return __extends(e, t), e.prototype.onlefttriggerchanged = function(t) {
             this._onlefttriggerchanged = t
             }, e.prototype.onrighttriggerchanged = function(t) {
             this._onrighttriggerchanged = t
             }, Object.defineProperty(e.prototype, "leftTrigger", {get: function() {
                                      return this._leftTrigger
                                      },set: function(t) {
                                      this._onlefttriggerchanged && this._leftTrigger !== t && this._onlefttriggerchanged(t), this._leftTrigger = t
                                      },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "rightTrigger", {get: function() {
                                                                                                 return this._rightTrigger
                                                                                                 },set: function(t) {
                                                                                                 this._onrighttriggerchanged && this._rightTrigger !== t && this._onrighttriggerchanged(t), this._rightTrigger = t
                                                                                                 },enumerable: !0,configurable: !0}), e.prototype.onbuttondown = function(t) {
             this._onbuttondown = t
             }, e.prototype.onbuttonup = function(t) {
             this._onbuttonup = t
             }, e.prototype.ondpaddown = function(t) {
             this._ondpaddown = t
             }, e.prototype.ondpadup = function(t) {
             this._ondpadup = t
             }, e.prototype._setButtonValue = function(t, e, n) {
             return t !== e && (this._onbuttondown && 1 === t && this._onbuttondown(n), this._onbuttonup && 0 === t && this._onbuttonup(n)), t
             }, e.prototype._setDPadValue = function(t, e, n) {
             return t !== e && (this._ondpaddown && 1 === t && this._ondpaddown(n), this._ondpadup && 0 === t && this._ondpadup(n)), t
             }, Object.defineProperty(e.prototype, "buttonA", {get: function() {
                                      return this._buttonA
                                      },set: function(t) {
                                      this._buttonA = this._setButtonValue(t, this._buttonA, 0)
                                      },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonB", {get: function() {
                                                                                                 return this._buttonB
                                                                                                 },set: function(t) {
                                                                                                 this._buttonB = this._setButtonValue(t, this._buttonB, 1)
                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonX", {get: function() {
                                                                                                                                                            return this._buttonX
                                                                                                                                                            },set: function(t) {
                                                                                                                                                            this._buttonX = this._setButtonValue(t, this._buttonX, 2)
                                                                                                                                                            },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonY", {get: function() {
                                                                                                                                                                                                                       return this._buttonY
                                                                                                                                                                                                                       },set: function(t) {
                                                                                                                                                                                                                       this._buttonY = this._setButtonValue(t, this._buttonY, 3)
                                                                                                                                                                                                                       },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonStart", {get: function() {
                                                                                                                                                                                                                                                                                  return this._buttonStart
                                                                                                                                                                                                                                                                                  },set: function(t) {
                                                                                                                                                                                                                                                                                  this._buttonStart = this._setButtonValue(t, this._buttonStart, 4)
                                                                                                                                                                                                                                                                                  },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonBack", {get: function() {
                                                                                                                                                                                                                                                                                                                                             return this._buttonBack
                                                                                                                                                                                                                                                                                                                                             },set: function(t) {
                                                                                                                                                                                                                                                                                                                                             this._buttonBack = this._setButtonValue(t, this._buttonBack, 5)
                                                                                                                                                                                                                                                                                                                                             },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonLB", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                        return this._buttonLB
                                                                                                                                                                                                                                                                                                                                                                                                        },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                        this._buttonLB = this._setButtonValue(t, this._buttonLB, 6)
                                                                                                                                                                                                                                                                                                                                                                                                        },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonRB", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   return this._buttonRB
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   this._buttonRB = this._setButtonValue(t, this._buttonRB, 7)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonLeftStick", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              return this._buttonLeftStick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              this._buttonLeftStick = this._setButtonValue(t, this._buttonLeftStick, 8)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "buttonRightStick", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         return this._buttonRightStick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         this._buttonRightStick = this._setButtonValue(t, this._buttonRightStick, 9)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "dPadUp", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    return this._dPadUp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this._dPadUp = this._setDPadValue(t, this._dPadUp, 0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "dPadDown", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               return this._dPadDown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               this._dPadDown = this._setDPadValue(t, this._dPadDown, 1)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "dPadLeft", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          return this._dPadLeft
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          this._dPadLeft = this._setDPadValue(t, this._dPadLeft, 2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "dPadRight", {get: function() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     return this._dPadRight
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     },set: function(t) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     this._dPadRight = this._setDPadValue(t, this._dPadRight, 3)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     },enumerable: !0,configurable: !0}), e.prototype.update = function() {
             t.prototype.update.call(this), this.buttonA = this.browserGamepad.buttons[0].value, this.buttonB = this.browserGamepad.buttons[1].value, this.buttonX = this.browserGamepad.buttons[2].value, this.buttonY = this.browserGamepad.buttons[3].value, this.buttonLB = this.browserGamepad.buttons[4].value, this.buttonRB = this.browserGamepad.buttons[5].value, this.leftTrigger = this.browserGamepad.buttons[6].value, this.rightTrigger = this.browserGamepad.buttons[7].value, this.buttonBack = this.browserGamepad.buttons[8].value, this.buttonStart = this.browserGamepad.buttons[9].value, this.buttonLeftStick = this.browserGamepad.buttons[10].value, this.buttonRightStick = this.browserGamepad.buttons[11].value, this.dPadUp = this.browserGamepad.buttons[12].value, this.dPadDown = this.browserGamepad.buttons[13].value, this.dPadLeft = this.browserGamepad.buttons[14].value, this.dPadRight = this.browserGamepad.buttons[15].value
             }, e
             }(i));
    t.Xbox360Pad = r
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o) {
            var r = this;
            e.call(this, n, i, o), this.angularSensibility = 200, this.moveSensibility = 75, this._gamepads = new t.Gamepads(function(t) {
                                                                                                                             r._onNewGameConnected(t)
                                                                                                                             })
        }
        return __extends(n, e), n.prototype._onNewGameConnected = function(t) {
            0 === t.index && (this._gamepad = t)
        }, n.prototype._checkInputs = function() {
            if (this._gamepad) {
                var e = this._gamepad.leftStick, n = e.x / this.moveSensibility, i = e.y / this.moveSensibility;
                e.x = Math.abs(n) > .005 ? 0 + n : 0, e.y = Math.abs(i) > .005 ? 0 + i : 0;
                var o = this._gamepad.rightStick, r = o.x / this.angularSensibility, s = o.y / this.angularSensibility;
                o.x = Math.abs(r) > .001 ? 0 + r : 0, o.y = Math.abs(s) > .001 ? 0 + s : 0;
                var a = t.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0), l = t.Vector3.TransformCoordinates(new t.Vector3(e.x, 0, -e.y), a);
                this.cameraDirection = this.cameraDirection.add(l), this.cameraRotation = this.cameraRotation.add(new t.Vector3(o.y, o.x, 0))
            }
        }, n.prototype.dispose = function() {
            this._gamepads.dispose()
        }, n
    }(t.FreeCamera);
    t.GamepadCamera = e
}(BABYLON || (BABYLON = {}));
var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, BABYLON;
!function(t) {
    var e = function(e) {
        function n(n, i, o) {
            "undefined" == typeof o && (o = !1), e.call(this, n, i), this.color = new t.Color3(1, 1, 1), this._indices = new Array, this._colorShader = new t.ShaderMaterial("colorShader", i, "color", {attributes: ["position"],uniforms: ["worldViewProjection", "color"]})
        }
        return __extends(n, e), Object.defineProperty(n.prototype, "material", {get: function() {
                                                      return this._colorShader
                                                      },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "isPickable", {get: function() {
                                                                                                                 return !1
                                                                                                                 },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "checkCollisions", {get: function() {
                                                                                                                                                                            return !1
                                                                                                                                                                            },enumerable: !0,configurable: !0}), n.prototype._bind = function() {
            var e = this.getScene().getEngine(), n = this._geometry.getIndexBuffer();
            e.bindBuffers(this._geometry.getVertexBuffer(t.VertexBuffer.PositionKind).getBuffer(), n, [3], 12, this._colorShader.getEffect()), this._colorShader.setColor3("color", this.color)
        }, n.prototype._draw = function(t) {
            if (this._geometry && this._geometry.getVertexBuffers() && this._geometry.getIndexBuffer()) {
                var e = this.getScene().getEngine();
                e.draw(!1, t.indexStart, t.indexCount)
            }
        }, n.prototype.intersects = function() {
            return null
        }, n.prototype.dispose = function(t) {
            this._colorShader.dispose(), e.prototype.dispose.call(this, t)
        }, n
    }(t.Mesh);
    t.LinesMesh = e
}(BABYLON || (BABYLON = {})), BABYLON.Vector2.prototype.distanceTo = function(t) {
    return Math.sqrt(this.distanceToSquared(t))
}, BABYLON.Vector2.prototype.distanceToSquared = function(t) {
    var e = t.x - this.x, n = t.y - this.y;
    return e * e + n * n
}, BABYLON.Vector2.FromArrayToRef = function(t, e, n) {
    e || (e = 0), n.x = t[e], n.y = t[e + 1]
}, BABYLON.Vector2.prototype.distToSegment = function(t, e) {
    var n = t.distanceToSquared(e);
    if (0 == n)
        return this.distanceTo(t);
    var i = this.subtract(t).dot(e.subtract(t)) / n, o = t.add(e.subtract(t).scale(i));
    return this.distanceTo(o)
}, BABYLON.Vector3.prototype.distanceTo = function(t) {
    return Math.sqrt(this.distanceToSquared(t))
}, BABYLON.Vector3.prototype.distanceToSquared = function(t) {
    var e = t.x - this.x, n = t.y - this.y, i = t.z - this.z;
    return e * e + n * n + i * i
}, BABYLON.Vector3.prototype.minimize = function(t) {
    return this.x = this.x < t.x ? this.x : t.x, this.y = this.y < t.y ? this.y : t.y, this.z = this.z < t.z ? this.z : t.z, this
}, BABYLON.Vector3.prototype.maximize = function(t) {
    return this.x = this.x > t.x ? this.x : t.x, this.y = this.y > t.y ? this.y : t.y, this.z = this.z > t.z ? this.z : t.z, this
}, BABYLON.Vector2.prototype.copyFrom = function(t) {
    return this.x = t.x, this.y = t.y, this
}, BABYLON.Vector2.prototype.copyFromFloats = function(t, e) {
    return this.x = t, this.y = e, this
}, BABYLON.Vector2.prototype.addInPlace = function(t) {
    return this.x += t.x, this.y += t.y, this
}, BABYLON.Vector2.prototype.subtractInPlace = function(t) {
    return this.x -= t.x, this.y -= t.y, this
}, BABYLON.Vector2.prototype.subtractToRef = function(t, e) {
    e.x = this.x - t.x, e.y = this.y - t.y
}, BABYLON.Vector2.prototype.lerp = function(t, e) {
    return this.x = this.x + (t.x - this.x) * e, this.y = this.y + (t.y - this.y) * e, this
}, BABYLON.Vector3.prototype.lerp = function(t, e) {
    return this.x = this.x + (t.x - this.x) * e, this.y = this.y + (t.y - this.y) * e, this.z = this.z + (t.z - this.z) * e, this
}, BABYLON.Vector2.prototype.projectOnVector = function() {
    var t = new BABYLON.Vector2;
    return function(e) {
        t.copyFrom(e).normalize();
        var n = this.dot(t);
        return this.copyFrom(t).scaleInPlace(n)
    }
}(), BABYLON.Vector3.prototype.projectOnVector = function() {
    var t = new BABYLON.Vector3;
    return function(e) {
        t.copyFrom(e).normalize();
        var n = this.dot(t);
        return this.copyFrom(t).scaleInPlace(n)
    }
}(), BABYLON.Vector2.prototype.projectOnSegment = function(t, e) {
    var n = e.x - t.x, i = e.y - t.y, o = n * n + i * i, r = ((this.x - t.x) * n + (this.y - t.y) * i) / o;
    return r = BABYLON.Math.clamp(r, 0, 1), new BABYLON.Vector2(t.x + r * n, t.y + r * i)
}, BABYLON.Color3.prototype.fromHex = function(t) {
    if (/^\#([0-9a-f]{6})$/i.test(t))
        var t = parseInt(/^\#([0-9a-f]{6})$/i.exec(t)[1], 16);
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
};
var roundTo = function(t) {
    return Math.round(1e5 * t) / 1e5
};
BABYLON.Vector2.prototype.isPointInPolygon = function(t) {
    var e, n, i, o, r = this.clone();
    r.x = roundTo(r.x), r.y = roundTo(r.y);
    for (var s = t.length, a = !1, l = 0; s > l; l++)
        e = roundTo(t[l].x), n = roundTo(t[l].y), i = roundTo(t[(l + 1) % s].x), o = roundTo(t[(l + 1) % s].y), o === n && o === r.y ? (e <= r.x && r.x < i || i <= r.x && r.x < e) && (a = !a) : (n <= r.y && r.y < o || o <= r.y && r.y < n) && r.x <= roundTo((i - e) * (r.y - n) / (o - n) + e) && (a = !a);
    return a
}, BABYLON.Ray.prototype.closestPointToPoint = function(t) {
    var e = t.subtract(this.origin), n = e.dot(this.direction);
    return e.copyFrom(this.direction).scale(n).add(this.origin)
}, BABYLON.Vector2.prototype.dot = function(t) {
    return BABYLON.Vector2.Dot(this, t)
}, BABYLON.Vector3.prototype.dot = function(t) {
    return BABYLON.Vector3.Dot(this, t)
}, BABYLON.Vector3.prototype.cross = function() {
    var t = new BABYLON.Vector3;
    return function(e) {
        return BABYLON.Vector3.CrossToRef(this, e, t), this.copyFrom(t), this
    }
}(), BABYLON.Vector3.prototype.toSpherical = function() {
    var t = this.length(), e = Math.acos(this.y / t), n = Math.atan2(this.z, this.x);
    return {r: t,alpha: n,beta: e}
}, BABYLON.Vector3.FromSphericalToRef = function(t, e, n, i) {
    i.x = t * Math.cos(e) * Math.sin(n), i.y = t * Math.cos(n), i.z = t * Math.sin(e) * Math.sin(n)
}, BABYLON.Vector3.FromSpherical = function(t, e, n) {
    var i = new BABYLON.Vector3;
    return BABYLON.Vector3.FromSphericalToRef(t, e, n, i), i
}, BABYLON.Vector2.prototype.determinant = function(t) {
    return this.x * t.y - this.y * t.x
}, BABYLON.Math = BABYLON.Math || {}, BABYLON.Math.clamp = function(t, e, n) {
    return e > t ? e : t > n ? n : t
}, BABYLON.Math.NormalizeAngle = function(t, e) {
    return t %= 2 * Math.PI, t += 2 * Math.PI, t %= 2 * Math.PI, e ? t : t = t > Math.PI ? t - 2 * Math.PI : t
}, BABYLON.Math.ClosestAngle = function(t, e) {
    var n = 2 * Math.PI;
    return t = (t % n + n) % n, rb = Math.floor(e / n), t += rb * n, Math.abs(e - t) > Math.PI && (t += e > t ? n : -n), t
}, BABYLON.Vector2.Precision = 1e-5, BABYLON.Vector2.IntersectIsOn = function() {
    var t, e, n, i, o, r, s, a, l;
    return function(h, c, u, p, d, m) {
        var d = d || BABYLON.Vector2.Precision, m = m || Math.PI / 20;
        if (i = c.x - h.x, o = c.y - h.y, r = p.x - u.x, s = p.y - u.y, n = i * s - o * r, Math.abs(n) < m)
            return void 0;
        n = 1 / n, t = ((h.y - u.y) * r - (h.x - u.x) * s) * n, e = ((h.y - u.y) * i - (h.x - u.x) * o) * n;
        var g = new BABYLON.Vector2(h.x + t * i, h.y + t * o);
        return a = d / Math.sqrt(i * i + o * o), l = d / Math.sqrt(r * r + s * s), {intersect: g,isOn: t >= -a && 1 + a >= t && e >= -l && 1 + l >= e}
    }
}(), BABYLON.Vector2.Intersect = function(t, e, n, i, o) {
    var r, s, a, l = o || BABYLON.Vector2.Precision, h = new BABYLON.Vector2, c = new BABYLON.Vector2;
    return h = e.subtract(t), c = i.subtract(n), r = h.y * t.x - h.x * t.y, s = c.y * n.x - c.x * n.y, a = h.determinant(c), detnorm = h.clone().normalize().determinant(c.clone().normalize()), Math.abs(detnorm) < l ? void 0 : new BABYLON.Vector2((h.x * s - c.x * r) / a, (h.y * s - c.y * r) / a)
}, BABYLON.Vector2.IntersectIsOnOLD = function(t, e, n, i, o, r) {
    var o = o || BABYLON.Vector2.Precision, r = r || Math.PI / 20, s = new BABYLON.Vector2, a = new BABYLON.Vector2;
    if (s = e.subtract(t), a = i.subtract(n), cprime = a.y * n.x - a.x * n.y, det = s.determinant(a), detnorm = s.clone().normalize().determinant(a.clone().normalize()), Math.abs(detnorm) < r)
        return void 0;
    var l = new BABYLON.Vector2((s.x * cprime - a.x * c) / det, (s.y * cprime - a.y * c) / det), h = Math.abs(e.x - t.x) >= BABYLON.Vector2.Precision ? (l.x - t.x) / (e.x - t.x) : (l.y - t.y) / (e.y - t.y), u = Math.abs(i.x - n.x) >= BABYLON.Vector2.Precision ? (l.x - n.x) / (i.x - n.x) : (l.y - n.y) / (i.y - n.y), p = o / s.length(), d = o / a.length();
    return {intersect: l,isOn: h >= -p && 1 + p >= h && u >= -d && 1 + d >= u}
}, BABYLON.Vector2.prototype.isOnSegment = function(t, e) {
    var n = .1, i = e.subtract(t), o = i.length();
    i.scaleInPlace(1 / o);
    var r = this.subtract(t), s = i.x * r.y - i.y * r.x, a = i.dot(r);
    return Math.abs(s) < n && a >= 0 && o >= a
}, BABYLON.Vector2.SegmentIntersection = function(t, e, n, i, o, r) {
    var r = r || Math.PI / 200, s = BABYLON.Vector2.IntersectIsOn(t, e, n, i, o, r);
    return s && s.isOn ? s.intersect : null
}, BABYLON.Vector2.GetAbsoluteSine = function(t, e, n, i) {
    var o = new BABYLON.Vector2, r = new BABYLON.Vector2;
    return t.subtractToRef(e, o), n.subtractToRef(i, r), o.normalize(), r.normalize(), Math.abs(o.determinant(r))
}, BABYLON.BoundingBox.ExpandFromPoint = function(t, e, n) {
    t.x < e.x ? e.x = t.x : t.x > n.x && (n.x = t.x), t.y < e.y ? e.y = t.y : t.y > n.y && (n.y = t.y), t.z < e.z ? e.z = t.z : t.z > n.z && (n.z = t.z)
}, BABYLON.BoundingBox.CreateFromPoints = function(t) {
    if (!(t.length > 0))
        return BABYLON.BoundingBox.Zero();
    for (var e = t[0], n = e.clone(), i = e.clone(), o = 1, r = t.length; r > o; o++)
        BABYLON.BoundingBox.ExpandFromPoint(t[o], n, i);
    return new BABYLON.BoundingBox(n, i)
}, BABYLON.BoundingBox.Zero = function() {
    return new BABYLON.BoundingBox(new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0))
}, BABYLON.BoundingBox.prototype.intersect = function(t) {
    return this.minimum.max(t.minimum), this.maximum.min(t.maximum), this
}, BABYLON.BoundingBox.prototype.union = function(t) {
    return this.minimum.min(t.minimum), this.maximum.max(t.maximum), this
}, BABYLON.Vector2.prototype.min = function(t) {
    return this.x = this.x < t.x ? this.x : t.x, this.y = this.y < t.y ? this.y : t.y, this
}, BABYLON.Vector2.prototype.max = function(t) {
    return this.x = this.x > t.x ? this.x : t.x, this.y = this.y > t.y ? this.y : t.y, this
}, BABYLON.Vector3.prototype.min = function(t) {
    return this.x = this.x < t.x ? this.x : t.x, this.y = this.y < t.y ? this.y : t.y, this.z = this.z < t.z ? this.z : t.z, this
}, BABYLON.Vector3.prototype.max = function(t) {
    return this.x = this.x > t.x ? this.x : t.x, this.y = this.y > t.y ? this.y : t.y, this.z = this.z > t.z ? this.z : t.z, this
}, BABYLON.Quaternion.RotationFromXtoX_ = function(t, e) {
    var n = BABYLON.Vector3.Cross(t, e).normalize();
    n.lengthSquared() < .001 && (n = BABYLON.Vector3.Cross(t, Math.abs(t.x) > .9 ? new BABYLON.Vector3(0, 0, 1) : new BABYLON.Vector3(1, 0, 0)).normalize());
    var i = Math.acos(Math.min(Math.max(BABYLON.Vector3.Dot(t, e), -1), 1));
    return BABYLON.Quaternion.RotationAxis(n, i)
}, BABYLON.Quaternion.RotationFromXtoX_2 = function(t, e, n, i) {
    var o = BABYLON.Vector3.Cross(t, n).normalize(), r = BABYLON.Vector3.Cross(e, i).normalize();
    o.lengthSquared() < .001 && (o = BABYLON.Vector3.Cross(t, Math.abs(t.x) > .9 ? new BABYLON.Vector3(0, 0, 1) : new BABYLON.Vector3(1, 0, 0)).normalize()), r.lengthSquared() < .001 && (r = BABYLON.Vector3.Cross(e, Math.abs(e.x) > .9 ? new BABYLON.Vector3(0, 0, 1) : new BABYLON.Vector3(1, 0, 0)).normalize());
    var s = BABYLON.Quaternion.RotationFromXtoX_(o, r), l = new BABYLON.Matrix;
    s.toRotationMatrix(l);
    var h = BABYLON.Vector3.TransformCoordinates(t, l);
    w = BABYLON.Vector3.Cross(h, e).normalize(), a = Math.acos(Math.min(Math.max(BABYLON.Vector3.Dot(h, e), -1), 1));
    var c = r;
    BABYLON.Vector3.Dot(w, c) < .9 && (c = c.scale(-1));
    var u = BABYLON.Quaternion.RotationAxis(c, a);
    return u.multiply(s)
}, BABYLON.Mesh.prototype.getMaterial = function(t) {
    for (var e = 0, n = this.subMeshes.length; n > e; e++)
        if (3 * t >= this.subMeshes[e].indexStart && 3 * t < this.subMeshes[e].indexStart + this.subMeshes[e].indexCount)
            return this.subMeshes[e].getMaterial();
    return null
}, BABYLON.Mesh.prototype.initMaterials = function(t) {
    for (var e in t)
        this.traverse(function(n) {
                      n.name === e && (n.material = t[e])
                      })
        }, BABYLON.Mesh.prototype.invertFaces = function() {
            for (var t, e = this.getIndices(), n = 0; n < e.length; n += 3)
                t = e[n], e[n] = e[n + 2], e[n + 2] = t;
            this.setIndices(e)
        }, BABYLON.Mesh.prototype.invertNormales = function() {
            for (var t = this.getVerticesData(BABYLON.VertexBuffer.NormalKind), e = 0; e < t.length; e++)
                t[e] *= -1;
            this.setVerticesData(BABYLON.VertexBuffer.NormalKind, t)
        }, BABYLON.Ray.prototype.intersectMeshes = function(t, e, n) {
            for (var i, o, r, s, a = +1 / 0, l = new BABYLON.Matrix, h = 0, c = t.length; c > h; h++)
                s = t[h].name && -1 != t[h].name.indexOf("_sprite_"), (t[h].isVisible || s) && (s && t[h].sprite.updateCollider(), t[h].getWorldMatrix().invertToRef(l), r = BABYLON.Ray.Transform(this, l), r.direction.normalize(), i = t[h].intersects(r, !1, e, n), i.hit && i.distance < a && (o = i, a = i.distance));
            return o
        }, BABYLON.Ray.prototype.distanceToPlane = function(t) {
            var e = t.normal.dot(this.direction);
            if (0 == e)
                return 0 == Math.abs(t.signedDistanceTo(this.origin)) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.d) / e;
            return n >= 0 ? n : null
        }, BABYLON.Ray.prototype.intersectPlane = function(t) {
            var e = this.distanceToPlane(t);
            return null === e ? null : this.origin.add(this.direction.scale(e))
        }, BABYLON.Mesh.CreateBloc = function(t, e, n, i, o) {
            e = e || .01, n = n || .01, i = i || .01;
            var r = new BABYLON.Mesh.CreateBox(t, e, o);
            return r.bakeTransformIntoVertices(BABYLON.Matrix.Scaling(1, n / e, i / e)), r
        }, BABYLON.Mesh.CreatePlan = function(t, e, n, i) {
            (0 == n || 0 == e) && console.log("trying to create a bloc with 0 dimension, will probably fail");
            var o = new BABYLON.Mesh.CreatePlane(t, e, i);
            return o.scaling.y = n / e, o
        }, BABYLON.Mesh.Triangulate = function(t, e, n, o) {
            for (var r, s = t.slice(0), a = [], l = 0, o = o || 0, h = n && n.indices ? n.indices : [], c = n && n.positions ? n.positions : [], u = n && n.normals ? n.normals : [], p = t[t.length - 1], d = 1e-5, m = 0, g = t.length; g > m; m++)
                p.distanceTo(t[m]) > d && (r = new poly2tri.Point(t[m].x, t[m].y), r.index = l++, a.push(r)), p = t[m];
            if (!(a.length < 3)) {
                var f = new poly2tri.SweepContext(a);
                for (var y in e) {
                    var _ = e[y], v = [];
                    for (i in _)
                        r = new poly2tri.Point(_[i].x, _[i].y), r.index = l++, v.push(r), s.push(_[i]);
                    f.addHole(v)
                }
                for (var m = 0, g = s.length; g > m; m++)
                    c.push(s[m].x, o, -s[m].y);
                try {
                    f.triangulate()
                } catch (b) {
                    return Logger.warning("Erreur de triangulation : " + b.message), null
                }
                var w, x = f.getTriangles();
                x.forEach(function(t) {
                          w = t.getPoints();
                          for (var e = w.length - 1; e >= 0; e--)
                          h.push(w[e].index)
                          });
                var C = BABYLON.Tools.PlaneUVProjection(c, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, 0, 1), 512);
                return n && (n.uvs = C), BABYLON.VertexData.ComputeNormals(c, h, u), n || {positions: c,normals: u,indices: h,uvs: C}
            }
        }, BABYLON.Mesh.TriangulateNewMesh = function(t, e, n, i, o) {
            var r = new BABYLON.Mesh(t, i), s = BABYLON.Mesh.Triangulate(e, n, void 0, o);
            return s ? (r.setVerticesData(BABYLON.VertexBuffer.PositionKind, s.positions), r.setVerticesData(BABYLON.VertexBuffer.NormalKind, s.normals), r.setVerticesData(BABYLON.VertexBuffer.UVKind, s.uvs), r.setIndices(s.indices), r) : null
        }, BABYLON.Mesh.prototype.centerGeometry = function(t) {
            var t = t || "y", e = this.getBoundingBox(!0), n = e.center;
            if (this.isVerticesDataPresent(BABYLON.VertexBuffer.PositionKind))
                for (var i = this.getVerticesData(BABYLON.VertexBuffer.PositionKind), o = 0, r = i.length; r > o; o += 3)
                    i[o] -= n.x, i[o + 1] -= n.y + e.extends[t], i[o + 2] -= n.z;
            for (var s = this.getChildren(), o = 0, a = s.length; a > o; o++)
                s[o].position.subtractInPlace(n), s[o].position[t] += e.extends[t]
                }, BABYLON.Mesh.Extrude = function(t, e, n, i) {
                    var n = n || {}, o = i && i.indices ? i.indices : [], r = i && i.positions ? i.positions : [], s = i && i.normals ? i.normals : [], a = [], l = BABYLON.Mesh.Triangulate(t, e);
                    if (!l)
                        return null;
                    for (var h, c = l.positions.length / 3, u = {positions: l.positions.slice(0),normals: l.normals.slice(0),uvs: l.uvs.slice(0),indices: l.indices.slice(0)}, p = 0, d = u.indices.length; d > p; p += 3)
                        h = u.indices[p], u.indices[p] = u.indices[p + 2], u.indices[p + 2] = h;
                    for (var m = void 0 !== n.amount ? n.amount : 5, p = 1, d = l.positions.length; d > p; p += 3)
                        l.positions[p] += m;
                    for (var p = 0, d = u.positions.length; d > p; p++)
                        r.push(u.positions[p]), s.push(u.normals[p]);
                    for (var p = 0, d = l.positions.length; d > p; p++)
                        r.push(l.positions[p]), s.push(l.normals[p]);
                    for (var p = 0, d = u.uvs.length; d > p; p++)
                        a.push(u.uvs[p]);
                    for (var p = 0, d = l.uvs.length; d > p; p++)
                        a.push(l.uvs[p]);
                    for (var p = 0, d = u.indices.length; d > p; p++)
                        o.push(u.indices[p]);
                    for (var p = 0, d = l.indices.length; d > p; p++)
                        o.push(l.indices[p] + c);
                    var g = function(t, e) {
                        for (var n = t.length, i = r.length / 3, l = e ? BABYLON.Tools.Area(t) > 0 : BABYLON.Tools.Area(t) < 0, h = 0; h < t.length; h++)
                            r.push(t[h].x, 0, -t[h].y, t[h].x, m, -t[h].y);
                        for (var h = 0; n > h; h++)
                            a.push(0, 0), a.push(0, 0);
                        for (var c = new BABYLON.Vector2, h = 0; n > h; h++)
                            c.copyFrom(t[(h + 1) % n]).subtractInPlace(t[h]), c.normalize(), l && c.scaleInPlace(-1), s.push(-c.y, 0, -c.x, -c.y, 0, -c.x);
                        for (var h = 0; 2 * n > h; h += 2)
                            l ? (o.push(i + h, i + (h + 2) % (2 * n), i + h + 1), o.push(i + (h + 2) % (2 * n), i + (h + 3) % (2 * n), i + h + 1)) : (o.push(i + h + 1, i + (h + 2) % (2 * n), i + h), o.push(i + h + 1, i + (h + 3) % (2 * n), i + (h + 2) % (2 * n)))
                            };
                    if (g(t), e)
                        for (var p = 0, d = e.length; d > p; p++)
                            g(e[p], !0);
                    return i || {positions: r,normals: s,indices: o,uvs: a}
                }, BABYLON.Mesh.ExtrudeNewMesh = function(t, e, n, i, o) {
                    var r = new BABYLON.Mesh(t, o), s = BABYLON.Mesh.Extrude(e, n, i);
                    return s ? (r.setVerticesData(BABYLON.VertexBuffer.PositionKind, s.positions), r.setVerticesData(BABYLON.VertexBuffer.NormalKind, s.normals), r.setVerticesData(BABYLON.VertexBuffer.UVKind, s.uvs), r.setIndices(s.indices), r) : null
                }, BABYLON.Tools.Area = function(t) {
                    for (var e = t.length, n = 0, i = e - 1, o = 0; e > o; i = o++)
                        n += t[i].x * t[o].y - t[o].x * t[i].y;
                    return .5 * n
                }, BABYLON.Tools.PlaneUVProjection = function(t, e, n, i) {
                    var o;
                    e = e.clone().normalize(), n = n.clone().normalize();
                    var r = BABYLON.Vector3.Cross(e, n), s = [], a = [];
                    if (r.length() < BABYLON.Engine.epsilon)
                        return console.warn("Can't map UVs : basis vectors are linked"), null;
                    if (0 == t.length)
                        return null;
                    var l = BABYLON.Matrix.FromValues(e.x, n.x, r.x, 0, e.y, n.y, r.y, 0, e.z, n.z, r.z, 0, 0, 0, 0, 1);
                    l = BABYLON.Matrix.Transpose(l), l.invert();
                    for (var h = 0, c = t.length; c > h; h += 3)
                        o = new BABYLON.Vector3(t[h], t[h + 1], t[h + 2]), BABYLON.Vector3.TransformCoordinatesToRef(o, l, o), s.push(o.x), a.push(o.y);
                    for (var u = s[0], p = s[0], d = a[0], m = a[0], h = 0, c = s.length; c > h; h++)
                        s[h] < u && (u = s[h]), s[h] > p && (p = s[h]), a[h] < d && (d = a[h]), a[h] > m && (m = a[h]);
                    var g, f;
                    if (void 0 === i && (i = 512), 0 != i ? (g = (p - u) / i * 4, f = (m - d) / i * 4) : (g = 1, f = 1), p === u)
                        for (var h = 0, c = s.length; c > h; h++)
                            s[h] = 0;
                    else
                        for (var h = 0, c = s.length; c > h; h++)
                            s[h] = (s[h] - u) / (p - u) * g;
                    if (m === d)
                        for (var h = 0, c = a.length; c > h; h++)
                            a[h] = 0;
                    else
                        for (var h = 0, c = a.length; c > h; h++)
                            a[h] = (a[h] - d) / (m - d) * f;
                    for (var y = [], h = 0, c = s.length; c > h; h++)
                        y.push(s[h], a[h]);
                    return y
                }, BABYLON.Mesh.ComputeFlatNormal = function(t, e, n) {
                    var i, o = [];
                    for (i = 0; i < t.length; i += 3) {
                        var r = new BABYLON.Vector3(t[i], t[i + 1], t[i + 2]);
                        o.push(r)
                    }
                    var s;
                    for (i = 0; i < n.length / 3; i++) {
                        var a = n[3 * i], l = n[3 * i + 1], h = n[3 * i + 2], c = o[a], u = o[l], p = o[h], d = c.subtract(u), m = p.subtract(u);
                        s = BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(d, m)), e[3 * a] = s.x, e[3 * a + 1] = s.y, e[3 * a + 2] = s.z, e[3 * l] = s.x, e[3 * l + 1] = s.y, e[3 * l + 2] = s.z, e[3 * h] = s.x, e[3 * h + 1] = s.y, e[3 * h + 2] = s.z
                    }
                }, BABYLON.Mesh.prototype.traverse = function(t) {
                    t(this);
                    for (var e = this.getChildren(), n = 0; n < e.length; n++)
                        e[n].traverse(t)
                        }, BABYLON.Mesh.prototype.getChildByName = function(t, e) {
                            for (var n, i = this.getChildren(), o = 0; o < i.length; o++) {
                                if (i[o].name === t)
                                    return i[o];
                                if (!e && (n = i[o].getChildByName(t)))
                                    return n
                                    }
                            return null
                        }, BABYLON.Mesh.mergeMeshes = function(t, e, n, o) {
                            var r = [], s = [], a = [], l = [], h = [], c = [], u = [], p = [], d = [], m = [], g = new BABYLON.Mesh(t, n), f = !0, y = !0, _ = !0, v = !0, b = !0;
                            for (i = 0; i != e.length; i++)
                                e[i].isVerticesDataPresent([BABYLON.VertexBuffer.UVKind]) || (f = !1), e[i].isVerticesDataPresent([BABYLON.VertexBuffer.UV2Kind]) || (y = !1), e[i].isVerticesDataPresent([BABYLON.VertexBuffer.ColorKind]) || (_ = !1), e[i].isVerticesDataPresent([BABYLON.VertexBuffer.MatricesIndicesKind]) || (v = !1), e[i].isVerticesDataPresent([BABYLON.VertexBuffer.MatricesWeightsKind]) || (b = !1);
                            for (i = 0; i != e.length; i++) {
                                var w = 0, x = 0;
                                r[i] = e[i].getVerticesData(BABYLON.VertexBuffer.PositionKind), s[i] = e[i].getVerticesData(BABYLON.VertexBuffer.NormalKind), f && (a = a.concat(e[i].getVerticesData(BABYLON.VertexBuffer.UVKind))), y && (l = l.concat(e[i].getVerticesData(BABYLON.VertexBuffer.UV2Kind))), _ && (h = h.concat(e[i].getVerticesData(BABYLON.VertexBuffer.ColorKind))), v && (c = c.concat(e[i].getVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind))), b && (u = u.concat(e[i].getVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind)));
                                for (var C = d.length / 3, M = e[i].computeWorldMatrix(!0); w < r[i].length; ) {
                                    var D = new BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(r[i][w], r[i][w + 1], r[i][w + 2]), M);
                                    d.push(D.x), d.push(D.y), d.push(D.z), w += 3
                                }
                                for (; x < s[i].length; ) {
                                    var D = new BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(s[i][x], s[i][x + 1], s[i][x + 2]), M);
                                    m.push(D.x), m.push(D.y), m.push(D.z), x += 3
                                }
                                if (i > 0) {
                                    var B = e[i].getIndices();
                                    for (it = 0; it != B.length; it++)
                                        B[it] = B[it] + C;
                                    p = p.concat(B)
                                } else
                                    p = e[i].getIndices()
                                    }
                            if (g.setVerticesData(BABYLON.VertexBuffer.PositionKind, d, !1), g.setVerticesData(BABYLON.VertexBuffer.NormalKind, m, !1), a.length > 0 && g.setVerticesData(BABYLON.VertexBuffer.UVKind, a, !1), l.length > 0 && g.setVerticesData(BABYLON.VertexBuffer.UV2Kind, a, !1), h.length > 0 && g.setVerticesData(BABYLON.VertexBuffer.ColorKind, a, !1), c.length > 0 && g.setVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind, a, !1), u.length > 0 && g.setVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind, a, !1), g.setIndices(p), o) {
                                g.subMeshes = [];
                                var A, C = 0, E = 0;
                                for (i = 0; i != e.length; i++) {
                                    {
                                        g.subMeshes.length
                                    }
                                    i > 0 && (C += e[i - 1].getIndices().length), A = -1;
                                    for (subMesh in e[i].subMeshes) {
                                        var T = BABYLON.SubMesh.CreateFromIndices(e[i].subMeshes[subMesh].materialIndex + E, e[i].subMeshes[subMesh].indexStart + C, e[i].subMeshes[subMesh].indexCount, g);
                                        T.objectInstance = e[i].subMeshes[subMesh].objectInstance, T.boundingBox = e[i].subMeshes[subMesh].boundingBox, A = Math.max(e[i].subMeshes[subMesh].materialIndex, A)
                                    }
                                    E += ++A
                                }
                            }
                            for (i = 0; i != e.length; i++)
                                e[i].dispose(!0);
                            return g
                        }, BABYLON.Mesh.mergeMeshesRec = function(t, e, n, i) {
                            for (var o = [], r = [], s = 0; s < e.length; s++)
                                e[s].traverse(function(t) {
                                              t.computeWorldMatrix(!0), t.isVisible ? o.push(t) : r.push(t)
                                              });
                            var a = BABYLON.Mesh.mergeMeshes(t, o, n, i);
                            return r.forEach(function(t) {
                                             t.dispose(!0)
                                             }), a
                        }, BABYLON.Mesh.ComputeFaceNormal = function(t, e, n) {
                            for (var i = 0; i < n.length; i += 3) {
                                var o = new BABYLON.Vector3(t[3 * n[i]], t[3 * n[i] + 1], t[3 * n[i] + 2]), r = new BABYLON.Vector3(t[3 * n[i + 1]], t[3 * n[i + 1] + 1], t[3 * n[i + 1] + 2]), s = new BABYLON.Vector3(t[3 * n[i + 2]], t[3 * n[i + 2] + 1], t[3 * n[i + 2] + 2]), a = o.subtract(r), l = s.subtract(r);
                                a.cross(l), a.normalize(), e[3 * n[i]] = a.x, e[3 * n[i] + 1] = a.y, e[3 * n[i] + 2] = a.z, e[3 * n[i + 1]] = a.x, e[3 * n[i + 1] + 1] = a.y, e[3 * n[i + 1] + 2] = a.z, e[3 * n[i + 2]] = a.x, e[3 * n[i + 2] + 1] = a.y, e[3 * n[i + 2] + 2] = a.z
                            }
                        }, BABYLON.BoundingBox.CreateFromData = function(t) {
                            if (!(t.length > 0 && t.length % 3 == 0))
                                return BABYLON.BoundingBox.Zero();
                            for (var e = [], n = 0; n < t.length; n += 3)
                                e.push(new BABYLON.Vector3(t[n], t[n + 1], t[n + 2]));
                            return BABYLON.BoundingBox.CreateFromPoints(e)
                        }, BABYLON.Material.prototype.serialize = function() {
                            return {name: this.name}
                        }, BABYLON.Material.prototype.deserialize = function() {
                        }, BABYLON.StandardMaterial.prototype.serialize = function() {
                            var t = BABYLON.Material.prototype.serialize.call(this);
                            return t.class = {name: "BABYLON.StandardMaterial"}, ujs.serializeObject(this, t, ["diffuseTexture", "ambientTexture", "opacityTexture", "reflectionTexture", "emissiveTexture", "specularTexture", "bumpTexture", "ambientColor", "diffuseColor", "specularColor", "specularPower", "emissiveColor"]), t
                        }, BABYLON.MultiMaterial.prototype.serialize = function() {
                            var t = BABYLON.Material.prototype.serialize.call(this);
                            return t.class = {name: "BABYLON.MultiMaterial"}, ujs.serializeObject(this, t, ["subMaterials"]), t
                        }, BABYLON.StandardMaterial.prototype.deserialize = function(t) {
                            return BABYLON.Material.prototype.deserialize.call(this, t), ujs.deserializeObject(t, this, ["diffuseTexture", "ambientTexture", "opacityTexture", "reflectionTexture", "emissiveTexture", "specularTexture", "bumpTexture", "ambientColor", "diffuseColor", "specularColor", "specularPower", "emissiveColor"]), this
                        }, BABYLON.MultiMaterial.prototype.deserialize = function(t) {
                            return BABYLON.Material.prototype.deserialize.call(this, t), ujs.deserializeObject(t, this, ["subMaterials"]), this
                        }, BABYLON.StandardMaterial.Deserialize = function(t) {
                            if (!t)
                                return null;
                            var e = new BABYLON.StandardMaterial(t.name, hcsdesign.engine3D.scene);
                            return e.deserialize(t), e
                        }, BABYLON.MultiMaterial.Deserialize = function(t) {
                            if (!t)
                                return null;
                            var e = new BABYLON.MultiMaterial(t.name, hcsdesign.engine3D.scene);
                            return e.deserialize(t), e
                        }, BABYLON.Vector2.prototype.serialize = function() {
                            var t = {"class": {name: "BABYLON.Vector2"},x: this.x,y: this.y};
                            return t
                        }, BABYLON.Vector2.Deserialize = function(t) {
                            var e = new BABYLON.Vector2(t.x, t.y);
                            return e
                        }, BABYLON.Quaternion.Deserialize = function(t) {
                            var e = new BABYLON.Quaternion(t.x, t.y, t.z, t.w);
                            return e
                        }, BABYLON.Quaternion.prototype.serialize = function() {
                            var t = {"class": {name: "BABYLON.Quaternion"},x: this.x,y: this.y,z: this.z,w: this.w};
                            return t
                        }, BABYLON.Vector3.prototype.serialize = function() {
                            var t = {"class": {name: "BABYLON.Vector3"},x: this.x,y: this.y,z: this.z};
                            return t
                        }, BABYLON.Vector3.prototype.getPositionFromMatrix = function(t) {
                            return this.x = t.m[12], this.y = t.m[13], this.z = t.m[14], this
                        }, BABYLON.Vector3.prototype.getScaleFromMatrix = function(t) {
                            var e = this.set(t.m[0], t.m[1], t.m[2]).length(), n = this.set(t.m[4], t.m[5], t.m[6]).length(), i = this.set(t.m[8], t.m[9], t.m[10]).length();
                            return this.x = e, this.y = n, this.z = i, this
                        }, BABYLON.Vector3.Deserialize = function(t) {
                            var e = new BABYLON.Vector3(t.x, t.y, t.z);
                            return e
                        }, BABYLON.Color3.prototype.serialize = function() {
                            var t = {"class": {name: "BABYLON.Color3"},r: this.r,g: this.g,b: this.b};
                            return t
                        }, BABYLON.Color4.prototype.serialize = function() {
                            var t = {"class": {name: "BABYLON.Color4"},r: this.r,g: this.g,b: this.b,a: this.a};
                            return t
                        }, BABYLON.Color3.Deserialize = function(t) {
                            var e = new BABYLON.Color3(t.r, t.g, t.b);
                            return e
                        }, BABYLON.Color4.Deserialize = function(t) {
                            var e = new BABYLON.Color4(t.r, t.g, t.b, t.a);
                            return e
                        }, BABYLON.BaseTexture.prototype.serialize = function() {
                            this.url = GlobalHelper.stripDomainUrl(this.url, "hcsdesign.");
                            var t = {"class": {name: "BABYLON.BaseTexture"},uScale: this.uScale,vScale: this.vScale,url: this.url};
                            return t
                        }, BABYLON.BaseTexture.Deserialize = function(t) {
                            var e = new BABYLON.BaseTexture(t.url, hcsdesign.engine3D.scene);
                            return e.uScale = t.uScale || 1, e.vScale = t.vScale || 1, e
                        }, BABYLON.Texture.prototype.serialize = function() {
                            var t = BABYLON.BaseTexture.prototype.serialize.call(this);
                            return t.class.name = "BABYLON.Texture", t
                        }, BABYLON.Texture.Deserialize = function(t) {
                            t.url = GlobalHelper.stripDomainUrl(t.url, "hcsdesign.");
                            var e = new BABYLON.Texture(t.url, hcsdesign.engine3D.scene);
                            return e.uScale = t.uScale || 1, e.vScale = t.vScale || 1, e
                        }, BABYLON.CubeTexture.prototype.serialize = function() {
                            var t = BABYLON.BaseTexture.prototype.serialize.call(this);
                            return t.class.name = "BABYLON.CubeTexture", t
                        }, BABYLON.CubeTexture.Deserialize = function(t) {
                            var e = new BABYLON.CubeTexture(t.url, hcsdesign.engine3D.scene);
                            return e
                        }, BABYLON.Mesh.prototype._lastCollidedFaceIndex = -1, BABYLON.Mesh.prototype.getFloor = function() {
                            return this.parent ? -1 != this.parent.name.indexOf("FloorMesh") ? this.parent : this.parent.getFloor() : null
                        }, BABYLON.Node.prototype.getTopLevelObject = function(t) {
                            return this.parent ? -1 != this.parent.name.indexOf("FloorMesh") ? this : -1 != this.parent.name.indexOf("group") && t ? this : this.parent.getTopLevelObject(t) : this
                        }, BABYLON.Node.prototype.getParentByName = function(t) {
                            return this.name != t ? this.parent ? this.parent.getParentByName(t) : void 0 : this
                        }, BABYLON.Tools.ExtractMinAndMaxWithTransform = function(t, e, n, i) {
                            for (var o = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), r = new BABYLON.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), s = new BABYLON.Vector3, a = e; e + n > a; a++)
                                s.copyFromFloats(t[3 * a], t[3 * a + 1], t[3 * a + 2]), s = BABYLON.Vector3.TransformCoordinates(s, i), o = BABYLON.Vector3.Minimize(s, o), r = BABYLON.Vector3.Maximize(s, r);
                            return {minimum: o,maximum: r}
                        }, BABYLON.Mesh.prototype.getBoundingBox = function(t) {
                            if (!t && this.__boundingInfo)
                                return this.__boundingInfo.boundingBox;
                            var e = 1 / 0, n = 1 / 0, i = 1 / 0, o = -1 / 0, r = -1 / 0, s = -1 / 0;
                            this.computeWorldMatrix(!0);
                            var a = this.getWorldMatrix().clone();
                            a.invert();
                            var l = function(t) {
                                t.computeWorldMatrix(!0);
                                var h = t.getWorldMatrix().clone(), c = h.multiply(a);
                                if (t instanceof BABYLON.Mesh && t.isVisible) {
                                    var u = BABYLON.Tools.ExtractMinAndMaxWithTransform(t.getVerticesData(BABYLON.VertexBuffer.PositionKind), 0, t.getTotalVertices(), c, !0), p = u.minimum, d = u.maximum;
                                    e = Math.min(e, p.x), n = Math.min(n, p.y), i = Math.min(i, p.z), o = Math.max(o, d.x), r = Math.max(r, d.y), s = Math.max(s, d.z)
                                }
                                for (var m = t.getChildren(), g = 0, f = m.length; f > g; g++)
                                    l(m[g])
                                    };
                            l(this);
                            var h = new BABYLON.Vector3(e, n, i), c = new BABYLON.Vector3(o, r, s);
                            return this.__boundingInfo = new BABYLON.BoundingInfo(h, c), this.__boundingInfo.boundingBox
                        }, BABYLON.Mesh.prototype.getBoundingSphere = function(t) {
                            if (!this.__boundingInfo || t) {
                                var e = this.getBoundingBox();
                                this.__boundingInfo.boundingSphere = new BABYLON.BoundingSphere(e.maximum.clone(), e.minimum.clone())
                            }
                            return this.__boundingInfo.boundingSphere
                        }, BABYLON.Vector3.RotationFromMatrix = function(t) {
                            function e(t) {
                                return Math.min(Math.max(t, -1), 1)
                            }
                            var n = new BABYLON.Vector3, i = t.m, o = i[0], r = i[4], s = i[8], a = (i[1], i[5]), l = i[9], h = (i[2], i[6]), c = i[10];
                            return n.y = Math.asin(e(s)), Math.abs(s) < .99999 ? (n.x = Math.atan2(-l, c), n.z = Math.atan2(-r, o)) : (n.x = Math.atan2(h, a), n.z = 0), n
                        }, BABYLON.Mesh.prototype.changeFrame = function(t, e) {
                            if (t !== this.parent) {
                                var n = this.position.clone(), i = this.rotation.clone(), o = this.parent, r = o.getWorldMatrix().clone(), s = t.getWorldMatrix().clone();
                                s.invert();
                                var a = r.multiply(s);
                                return e ? (n.copyFrom(BABYLON.Vector3.TransformCoordinates(n, a)), i.addInPlace(BABYLON.Vector3.RotationFromMatrix(a))) : (this.parent = t, this.position.copyFrom(BABYLON.Vector3.TransformCoordinates(this.position, a)), this.rotation.addInPlace(BABYLON.Vector3.RotationFromMatrix(a))), {position: n,rotation: i}
                            }
                        }, BABYLON.Mesh.prototype.addInternalRotation = function(t) {
                            for (var e = this.getChildren(), n = 0, i = e.length; i > n; n++)
                                e[n].rotation.y += t
                                }, BABYLON.PickingInfo.prototype.getFlatNormal = function() {
                                    if (!this.pickedMesh)
                                        return null;
                                    var t = this.pickedMesh.getIndices(), e = this.pickedMesh.getVerticesData(BABYLON.VertexBuffer.PositionKind), n = BABYLON.Vector3.FromArray(e, 3 * t[3 * this.faceId]), i = BABYLON.Vector3.FromArray(e, 3 * t[3 * this.faceId + 1]), o = BABYLON.Vector3.FromArray(e, 3 * t[3 * this.faceId + 2]), r = n.subtract(i), s = n.subtract(o);
                                    return s.cross(r).normalize()
                                }, BABYLON.PickingInfo.getFlatNormal = function(t, e) {
                                    if (!t)
                                        return null;
                                    var n = t.getIndices(), i = t.getVerticesData(BABYLON.VertexBuffer.PositionKind), o = BABYLON.Vector3.FromArray(i, 3 * n[3 * e]), r = BABYLON.Vector3.FromArray(i, 3 * n[3 * e + 1]), s = BABYLON.Vector3.FromArray(i, 3 * n[3 * e + 2]), a = o.subtract(r), l = o.subtract(s);
                                    return l.cross(a).normalize()
                                }, BABYLON.PickingInfo.GetNormal = function(t, e, n) {
                                    var i = t.subtract(e), o = n.subtract(e);
                                    return commonNormal = BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(i, o))
                                }, BABYLON.Mesh.prototype.duplicate = function(t, e, n) {
                                    var i = new BABYLON.Mesh(t, this.getScene());
                                    if (this._geometry) {
                                        var o = this._geometry.copy(BABYLON.Geometry.RandomId());
                                        o.applyToMesh(i)
                                    }
                                    if (BABYLON.Tools.DeepCopy(this, i, ["name", "material", "skeleton"], []), i.material = this.material, e && (i.parent = e), !n)
                                        for (var r = 0; r < this.getScene().meshes.length; r++) {
                                            var s = this.getScene().meshes[r];
                                            s.parent == this && s.duplicate(s.name, i)
                                        }
                                    for (r = 0; r < this.getScene().particleSystems.length; r++) {
                                        var a = this.getScene().particleSystems[r];
                                        a.emitter == this && a.clone(a.name, i)
                                    }
                                    return i.computeWorldMatrix(!0), i
                                }, BABYLON && function() {
                                    BABYLON.Mesh.prototype.getChildren;
                                    BABYLON.Mesh.prototype.getChildren = function() {
                                        return this._children = this._children || []
                                    };
                                    var t = BABYLON.Mesh.prototype.dispose;
                                    BABYLON.Mesh.prototype.dispose = function() {
                                        return this.parent = null, t.apply(this, arguments)
                                    }, Object.defineProperty(BABYLON.Mesh.prototype, "parent", {get: function() {
                                                             return this._parent
                                                             },set: function(t) {
                                                             if (this._parent && this._parent._children)
                                                             for (var e = this.parent._children.length; e--; )
                                                             this.parent._children[e] == this && this.parent._children.splice(e, 1);
                                                             return this._parent = t, this._parent && (this._parent._children = this._parent._children || []).push(this), this._parent
                                                             },enumerable: !0,configurable: !0})
                                }();
