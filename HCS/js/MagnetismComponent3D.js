var MagnetismComponent3D = function() {
    var t, e, n = !1,
        i = function(n) {
            BaseComponent3D.call(this, n, "MagnetismComponent3D"), this._lastPosition = new BABYLON.Vector3, this._lastFictivePosition = new BABYLON.Vector3, this._speedVector = new BABYLON.Vector3, this._physicSpeedVector = new BABYLON.Vector3, this._correctedSpeedVector = new BABYLON.Vector3, this._tmpVector = new BABYLON.Vector3, e = wanaplan.engine3D.searchComponent("EditionComponent3D"), t = this, this.collisionList = [], this.currentCollisionBox = null
        },
        o = .1,
        r = function(t, e) {
            if (e) {
                {
                    t.getWorldMatrix()
                }
                this.box = new BABYLON.BoundingBox(e.minimum, e.maximum), this.box.angle = e.angle
            } else {
                var n = t.getBoundingBox(!0);
                this.box = new BABYLON.BoundingBox(n.minimum, n.maximum)
            }
            this.object = t, t.structure && (this.object.magnetismCollider = t.structure.magnetismCollider), this.corner = [new BABYLON.Vector3, new BABYLON.Vector3, new BABYLON.Vector3, new BABYLON.Vector3], this.axis = [new BABYLON.Vector3, new BABYLON.Vector3], this.origin = [0, 0], this.yRange = [0, 0], this.object.structure && this.object.structure.easeMagnetism && this.correctSmallBoxes(), this.update()
        },
        s = [];
    r.prototype.showBox = function() {
        if (!this._debugCube) {
            var t = wanaplan.engine3D.scene;
            this._debugCube = BABYLON.Mesh.CreateBox("boundingboxConfigurator.boundingLimitGhost", 1, t), this._debugCube.material = new BABYLON.StandardMaterial("BB_debug", t), this._debugCube.material.wireframe = !0, this._debugCube.material.alpha = .29, s.push(this._debugCube)
        }
        for (var e = this._debugCube, n = new BABYLON.Vector3(0, 0, 0), i = 4; i--;)
            n.addInPlace(this.corner[i]);
        n.scaleInPlace(.25), n.y = (this.yRange[1] + this.yRange[0]) / 2;
        var o = this.corner[0].subtract(this.corner[1]),
            r = this.corner[2].subtract(this.corner[1]);
        e.position.copyFrom(n), e.scaling.x = o.length(), e.scaling.z = r.length(), e.scaling.y = this.yRange[1] - this.yRange[0], e.rotation.y = -Math.atan2(o.z, o.x)
    }, r.prototype.correctSmallBoxes = function() {
        var t = this.object.structure.preferredYAngle || 0,
            e = new BABYLON.Vector3(0, 0, 1);
        e = BABYLON.Vector3.TransformCoordinates(e, BABYLON.Matrix.RotationAxis(new BABYLON.Vector3(0, 1, 0), t)), e.scaleInPlace(80), this.corner[0].copyFromFloats(this.box.minimum.x, this.box.minimum.y, this.box.minimum.z), this.corner[1].copyFromFloats(this.box.maximum.x, this.box.minimum.y, this.box.minimum.z), this.corner[2].copyFromFloats(this.box.maximum.x, this.box.minimum.y, this.box.maximum.z), this.corner[3].copyFromFloats(this.box.minimum.x, this.box.minimum.y, this.box.maximum.z);
        for (var n = 0; 4 > n; n++)
            this.corner[n].addInPlace(e), BABYLON.BoundingBox.ExpandFromPoint(this.corner[n], this.box.minimum, this.box.maximum)
    }, r.prototype.update = function() {
        if (this.object.computeWorldMatrix(!0), BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(this.box.minimum.x, this.box.minimum.y, this.box.minimum.z, this.object.getWorldMatrix(), this.corner[0]), BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(this.box.maximum.x, this.box.minimum.y, this.box.minimum.z, this.object.getWorldMatrix(), this.corner[1]), BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(this.box.maximum.x, this.box.minimum.y, this.box.maximum.z, this.object.getWorldMatrix(), this.corner[2]), BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(this.box.minimum.x, this.box.minimum.y, this.box.maximum.z, this.object.getWorldMatrix(), this.corner[3]), this.box.angle) {
            var t = -this.box.angle,
                e = this.box.center;
            e.y = 0;
            for (var i = BABYLON.Matrix.FromValues(Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1), o = 0; 4 > o; o++)
                this.corner[o].subtractInPlace(e), BABYLON.Vector3.TransformCoordinatesToRef(this.corner[o], i, this.corner[o]), this.corner[o].addInPlace(e)
        }
        this.axis[0].copyFrom(this.corner[1]), this.axis[0].subtractInPlace(this.corner[0]), this.axis[1].copyFrom(this.corner[3]), this.axis[1].subtractInPlace(this.corner[0]);
        for (var o = 0; 2 > o; o++)
            0 == this.axis[o].lengthSquared() && (this.axis[o].copyFrom(this.axis[(o + 1) % 2].cross(new BABYLON.Vector3(0, 1, 0))), this.axis[o].normalize().scaleInPlace(.1));
        for (var r, o = 0; 2 > o; o++)
            r = this.axis[o].lengthSquared(), 0 != r ? this.axis[o].scaleInPlace(1 / r) : this.axis[o] = new BABYLON.Vector3(0, 0, 0), this.origin[o] = this.corner[0].dot(this.axis[o]);
        this.yRange = [BABYLON.Vector3.TransformCoordinates(this.box.minimum, this.object.getWorldMatrix()).y, BABYLON.Vector3.TransformCoordinates(this.box.maximum, this.object.getWorldMatrix()).y], n && this.showBox()
    }, r.prototype.overlaps1Way = function(t, e, n) {
        for (var i, r, s, a = +1 / 0, l = 0, h = null, c = 0; 2 > c; c++) {
            n && (s = n.dot(this.axis[c]));
            for (var u = t.corner[0].dot(this.axis[c]), p = 1 / this.axis[c].length(), d = u, m = u, g = 1; 4 > g; g++)
                u = t.corner[g].dot(this.axis[c]), d > u ? d = u : u > m && (m = u);
            if (d > 1 + this.origin[c] || m < this.origin[c])
                return !1;
            i = (this.origin[c] + 1 - d) * p, r = (m - this.origin[c]) * p, l = n && Math.abs(s) > o ? s > 0 ? i : -r : i > r ? -r : i, Math.abs(l) < Math.abs(a) && (h = this.axis[c], a = l)
        }
        return e && (e.overlapAxis = h, e.overlapValue = a), !0
    }, r.prototype.overlaps = function(t) {
        return this.overlaps1Way(t) && t.overlaps1Way(this)
    }, r.prototype.worstOverlap = function(t, e) {
        var n = {},
            i = {},
            o = this.overlaps1Way(t, n, e),
            r = t.overlaps1Way(this, i, e ? e.clone().scaleInPlace(-1) : null);
        return o || r ? Math.abs(n.overlapValue) < Math.abs(i.overlapValue) ? n : (i.overlapValue = -i.overlapValue, i) : null
    };
    var a = function(t, e) {
        var n = 9999;
        this.box = {
            minimum: new BABYLON.Vector3(-n, t, -n),
            maximum: new BABYLON.Vector3(n, e, n),
            angle: 0,
            center: new BABYLON.Vector3(0, (t + e) / 2, 0)
        }, this.object = {
            getWorldMatrix: function() {
                return BABYLON.Matrix.Identity()
            },
            computeWorldMatrix: function() {},
            name: ""
        }, this.corner = [];
        for (var i = 4; i--;)
            this.corner.push(new BABYLON.Vector3);
        this.axis = [];
        for (var i = 2; i--;)
            this.axis.push(new BABYLON.Vector3);
        this.origin = [];
        for (var i = 2; i--;)
            this.origin.push(new BABYLON.Vector3);
        this.update()
    };
    a.prototype.overlaps1Way = r.prototype.overlaps1Way, a.prototype.worstOverlap = r.prototype.worstOverlap, a.prototype.overlaps = r.prototype.overlaps, a.prototype.showBox = r.prototype.showBox, a.prototype.update = r.prototype.update, i.prototype = Object.create(BaseComponent3D.prototype), i.prototype.initialize = function() {
        e || (e = wanaplan.engine3D.searchComponent("EditionComponent3D"))
    }, i.prototype.buildCollisionList = function(e) {
        var i = t.getFloor();
        if (n)
            for (; s.length;)
                s.shift().dispose();
        this.collisionList.length = 0;
        for (var o = function(t) {
                if (t.structure && (t.magnetismCollider = t.structure.magnetismCollider), t.magnetismCollider & (wnp.Constants.MAGNETISM.OBJECT | wnp.Constants.MAGNETISM.VERTICAL))
                    t.getBoundingBox(!0), this.collisionList.push(new r(t));
                else if (-1 != t.name.indexOf("WallMesh_") && e.magnetismCollider & wnp.Constants.MAGNETISM.WALL)
                    for (var n in t.boundingBoxes)
                        "OvertureStructure" !== t.objectInstances[n].name && "SubSlopeStructure" !== t.objectInstances[n].name && this.collisionList.push(new r(t, t.boundingBoxes[n]))
            }.bind(this), l = i.getChildren(), h = 0, c = l.length; c > h; h++)
            if (-1 != l[h].name.indexOf("group_")) {
                if (l[h].name != e.name)
                    for (var u = l[h].getChildren(), p = 0, d = u.length; d > p; p++)
                        o(u[p])
            } else
                o(l[h]);
        var m = t.getFloor().structure;
        this.collisionList.push(new a(m.elevation - 20, m.elevation + 5)), this.collisionList.push(new a(m.elevation + m.height, m.elevation + m.height + 20))
    }, i.prototype.updateCollisionList = function(t) {
        for (var e = 0, n = this.collisionList.length; n > e; e++)
            (!t || t && t == this.collisionList[e]) && this.collisionList[e].update()
    }, i.prototype.onContextChanged = function(t) {
        "3D" == t ? this.initialized || (e.on("selectObject", this.onDragStart.bind(this)), e.on("dragstart", this.onDragStart.bind(this)), e.on("dragging", this.onDragging.bind(this)), e.on("objectMoves", this.onDragging.bind(this))) : this.initialized && (e.off("selectObject", this.onDragStart.bind(this)), e.off("dragstart", this.onDragStart.bind(this)), e.off("dragging", this.onDragging.bind(this)), e.off("objectMoves", this.onDragging.bind(this)))
    }, i.prototype.onDragStart = function(e) {
        var n = -1 != e.object.name.indexOf("group_");
        if (n && (e.object.magnetismCollider = wnp.Constants.MAGNETISM.WALL), e.object.structure && (e.object.magnetismCollider = e.object.structure.magnetismCollider), e.object.magnetismCollider) {
            if (t.buildCollisionList(e.object), !n && e.object.magnetismCollider & (wnp.Constants.MAGNETISM.OBJECT | wnp.Constants.MAGNETISM.VERTICAL)) {
                t.currentCollisionBox = null;
                for (var i = 0; !t.currentCollisionBox && i < t.collisionList.length;)
                    t.collisionList[i].object == e.object && (t.currentCollisionBox = t.collisionList[i]), i++;
                t.collisionList.splice(i - 1, 1)
            } else
                t.currentCollisionBox = new r(e.object);
            t._lastPosition.copyFrom(e.object.position), t._lastFictivePosition.copyFrom(e.object.position)
        }
    }, i.prototype.lateralCollisionCandidate = function(e) {
        return t.currentCollisionBox.object.magnetismCollider & wnp.Constants.MAGNETISM.OBJECT && -1 == e.object.name.indexOf("WallMesh_") && e.object.magnetismCollider & wnp.Constants.MAGNETISM.OBJECT || t.currentCollisionBox.object.magnetismCollider & wnp.Constants.MAGNETISM.WALL && -1 != e.object.name.indexOf("WallMesh_")
    }, i.prototype.onDragging = function(n) {
        if (n.object.magnetismCollider) {
            var i = 1,
                o = 10;
            if (!t.currentCollisionBox)
                return void Logger.warning("L'¨¦v¨¦nement DragStart n'a pas ¨¦t¨¦ correctement trait¨¦ par le magn¨¦tisme 3D");
            t.currentCollisionBox.update();
            var r = -1,
                s = !1,
                a = 0;
            t._speedVector.copyFrom(t.currentCollisionBox.object.position).subtractInPlace(t._lastFictivePosition);
            for (var l = Math.abs(t._speedVector.y) > .1;
                (0 > r || r > i) && o > a;) {
                r = 0;
                for (var h = 0, c = t.collisionList.length; c > h; h++)
                    if (!(t.collisionList[h].yRange[1] <= t.currentCollisionBox.yRange[0] || t.collisionList[h].yRange[0] >= t.currentCollisionBox.yRange[1]) && t.collisionList[h].overlaps(t.currentCollisionBox)) {
                        if (l && (t.currentCollisionBox.object.magnetismCollider & wnp.Constants.MAGNETISM.VERTICAL || "room" == t.collisionList[h].object.name)) {
                            if (t._lastFictivePosition.copyFrom(t.currentCollisionBox.object.position), t.solveCollision(t.collisionList[h], !0) < 5)
                                continue;
                            t._speedVector.y = Math.abs(t.currentCollisionBox.yRange[1] - t.collisionList[h].yRange[0]) <= Math.abs(t.currentCollisionBox.yRange[0] - t.collisionList[h].yRange[1]) ? t.collisionList[h].yRange[0] - t.currentCollisionBox.yRange[1] : t.collisionList[h].yRange[1] - t.currentCollisionBox.yRange[0], t.currentCollisionBox.object.position.addInPlace(t._speedVector);
                            break
                        }
                        if ("room" == t.collisionList[h].object.name)
                            continue;
                        if (t.lateralCollisionCandidate(t.collisionList[h]) && e.getSelectedObject() !== n.object) {
                            if (!s) {
                                var u = t.currentCollisionBox.object.rotation.y;
                                t.collisionList[h].object.name.indexOf("WallMesh_") >= 0 && t.angleMagnetism(t.currentCollisionBox, t.collisionList[h]);
                                for (var p = 0, d = t.collisionList.length; d > p; p++)
                                    if (h != p && t.lateralCollisionCandidate(t.collisionList[p]) && "room" != t.collisionList[p].object.name && t.collisionList[p].overlaps(t.currentCollisionBox) && t.solveCollision(t.collisionList[p], !0) > 5) {
                                        t.currentCollisionBox.object.rotation.y = u, t.currentCollisionBox.object.computeWorldMatrix(!0), t.currentCollisionBox.update();
                                        break
                                    }
                                s = !0
                            }
                            t._physicSpeedVector.copyFrom(t.currentCollisionBox.object.position).subtractInPlace(t._lastPosition), r = Math.max(t.solveCollision(t.collisionList[h], !1, t._physicSpeedVector), r)
                        }
                    }
                a++
            }
            0 >= r && t._lastFictivePosition.copyFrom(t.currentCollisionBox.object.position), a == o && t.currentCollisionBox.object.position.copyFrom(t._lastPosition), t._lastPosition.copyFrom(t.currentCollisionBox.object.position)
        }
    }, i.prototype.angleMagnetism = function(e, n) {
        for (var i = Math.PI / 1e3, o = 2 * Math.PI, r = e.object.structure && void 0 !== e.object.structure.preferredYAngle ? e.object.structure.preferredYAngle : 0, s = e.object.getChildren(), a = s.length - 1; a >= 0; a--)
            if ("selector" === s[a].name)
                return;
        var l = void 0 !== n.box.angle ? n.box.angle : n.object.rotation.y + Math.PI;
        l += Math.PI;
        var h = e.object.rotation.y,
            c = (t.core.engine3D.keyboardManager.isPressed([17, 91]), l % o),
            u = h % o;
        Math.abs(c - (u - r)) > o / 2 && (u > c ? c += o : u += o);
        var p = c - (u - r);
        Math.abs(p) > i && -1 == e.object.name.indexOf("group_") && (e.object.rotation.y += p, e.object.computeWorldMatrix(!0), e.update())
    }, i.prototype.solveCollision = function(e, n, i) {
        t._lastFictivePosition.copyFrom(t.currentCollisionBox.object.position);
        var o = t.currentCollisionBox.worstOverlap(e, i);
        if (o && o.overlapAxis) {
            var r = o.overlapAxis.clone().normalize().scaleInPlace(-o.overlapValue);
            return n || t.currentCollisionBox.object.position.addInPlace(r), t.currentCollisionBox.update(), r.length()
        }
        return 0
    };
    return i
}();