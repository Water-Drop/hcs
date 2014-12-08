var __extends = this.__extends || function (t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
},
    wnp;
!function (t) {
    var e = function (t) {
        function e(e, n) {
            var i = this;
            t.call(this, e, n), this.category = -1, this.addColor = null, this.isDefault = !0, this._cachedDefines = null, this._renderTargets = new BABYLON.SmartArray(16), this._worldViewProjectionMatrix = BABYLON.Matrix.Zero(), this._lightMatrix = BABYLON.Matrix.Zero(), this._globalAmbientColor = new BABYLON.Color3(0, 0, 0), this._baseColor = new BABYLON.Color3, this._scaledDiffuse = new BABYLON.Color3, this._scaledSpecular = new BABYLON.Color3, this._scene = n, this._shaderName = "", this._uniforms = ["world", "viewProjection", "vEyePosition"], this._uniformsLocations = {}, this._samplers = [], this._attribs = [BABYLON.VertexBuffer.PositionKind], this._customDefines = null, this._hasColors = null, this._hasNormals = null, this._hasUvs = null, this._hasDiffuse = null, this._hasBump = null, this._hasEnv = null, this._hasLights = null, this.build(), this.getRenderTargetTextures = function () {
                return i._renderTargets.reset(), i.reflectionTexture && i.reflectionTexture.isRenderTarget && i._renderTargets.push(i.reflectionTexture), i._renderTargets
            }
        }
        __extends(e, t);
        var n = -1;
        return e.prototype.needAlphaBlending = function () {
            return this.alpha < 1
        }, e.prototype.needAlphaTesting = function () {
            return !1
        }, e.prototype.setCustomDefines = function (t) {
            this._customDefines = t
        }, e.prototype.build = function () { }, e.prototype.normal = function () {
            this._attribs.push(BABYLON.VertexBuffer.NormalKind), this._hasNormals = !0
        }, e.prototype.uv = function () {
            this._attribs.push(BABYLON.VertexBuffer.UVKind), this._hasUvs = !0
        }, e.prototype.diffuse = function () {
            this._uniforms.push("vDiffuseInfos", "diffuseMatrix"), this._samplers.push("diffuseSampler"), this._hasDiffuse = !0
        }, e.prototype.bump = function () {
            this._uniforms.push("vBumpInfos", "bumpMatrix"), this._samplers.push("bumpSampler"), this._hasBump = !0
        }, e.prototype.color = function () {
            this._uniforms.push("vDiffuseColor"), this._hasColor = !0
        }, e.prototype.setAlpha = function () {
            this._uniforms.push("vAlpha")
        }, e.prototype.env = function () {
            this._uniforms.push("vReflectionInfos", "reflectionMatrix"), this._samplers.push("reflectionCubeSampler"), this._hasEnv = !0
        }, e.prototype.light = function () {
            this._uniforms.push("vLightsType", "vLightData0", "vLightDiffuse0", "vLightSpecular0", "vLightDirection0", "vLightGround0", "lightMatrix0", "vLightData1", "vLightDiffuse1", "vLightSpecular1", "vLightDirection1", "vLightGround1", "lightMatrix1", "vLightData2", "vLightDiffuse2", "vLightSpecular2", "vLightDirection2", "vLightGround2", "lightMatrix2", "vLightData3", "vLightDiffuse3", "vLightSpecular3", "vLightDirection3", "vLightGround3", "lightMatrix3", "darkness0", "darkness1", "darkness2", "darkness3"), this._samplers.push("shadowSampler0", "shadowSampler1", "shadowSampler2", "shadowSampler3"), this._hasLights = !0
        }, e.prototype._isReady = function (t, e, n, i) {
            return this._hasDiffuse && !this.diffuseReadyChunk(t, e) ? !1 : this._hasBump && !this.bumpReadyChunk(t, e) ? !1 : this._hasEnv && !this.envReadyChunk(t, e) ? !1 : (this._hasLights && this.lightReadyChunk(i, t, e), this._hasUvs && this.uvReadyChunk(i, t), !0)
        }, e.prototype.isReady = function (t) {
            if (this._wasPreviouslyReady)
                return !0;
            GlobalHelper.isWindowsPhoneDevice() && (this._shaderName = "legacydefault");
            var e, n = this._scene.getEngine(),
                i = new Array;
            if (e = this._customDefines ? this._customDefines.slice() : [], !this._isReady(e, i, n, t))
                return !1;
            var o = e.join("\n");
            return this._cachedDefines != o && (this._cachedDefines = o, this._effect = this._scene.getEngine().createEffect(this._shaderName, this._attribs, this._uniforms, this._samplers, o, i, this.onCompiled, this.onError)), this._effect.isReady() ? (this._renderId = this._scene.getRenderId(), this._wasPreviouslyReady = !0, this._uniformsLocations.vEyePosition = this._effect.getUniform("vEyePosition"), this._uniformsLocations.viewProjection = this._effect.getUniform("viewProjection"), this._uniformsLocations.lightMatrix = [], this._uniformsLocations.darkness = [], this._uniformsLocations.lightMatrix[0] = this._effect.getUniform("lightMatrix0"), this._uniformsLocations.darkness[0] = this._effect.getUniform("darkness0"), this._uniformsLocations.lightMatrix[1] = this._effect.getUniform("lightMatrix1"), this._uniformsLocations.darkness[1] = this._effect.getUniform("darkness1"), this._uniformsLocations.lightMatrix[2] = this._effect.getUniform("lightMatrix2"), this._uniformsLocations.darkness[2] = this._effect.getUniform("darkness2"), this._uniformsLocations.lightMatrix[3] = this._effect.getUniform("lightMatrix3"), this._uniformsLocations.darkness[3] = this._effect.getUniform("darkness3"), !0) : !1
        }, e.prototype.diffuseReadyChunk = function (t) {
            if (this._scene.texturesEnabled && this.diffuseTexture && BABYLON.StandardMaterial.DiffuseTextureEnabled) {
                if (!this.diffuseTexture.isReady())
                    return !1;
                t.push("#define DIFFUSE")
            }
            return !0
        }, e.prototype.bumpReadyChunk = function (t, e) {
            if (this._scene.getEngine().getCaps().standardDerivatives && this.bumpTexture && BABYLON.StandardMaterial.BumpTextureEnabled) {
                if (!this.bumpTexture.isReady())
                    return !1;
                t.push("#define BUMP"), e.push(t[t.length - 1])
            }
            return !0
        }, e.prototype.envReadyChunk = function (t) {
            if (this.reflectionTexture && BABYLON.StandardMaterial.ReflectionTextureEnabled) {
                if (!this.reflectionTexture.isReady())
                    return !1;
                t.push("#define REFLECTION")
            }
            return !0
        }, e.prototype.uvReadyChunk = function (t, e) {
            t && t.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind) && e.push("#define UV1")
        }, e.prototype.lightReadyChunk = function (t, e, n) {
            var i = !1,
                o = 0;
            if (this._scene.lightsEnabled)
                for (var r = 0; r < this._scene.lights.length; r++) {
                    var s = this._scene.lights[r];
                    if (s.isEnabled() && (!t || -1 === s.excludedMeshes.indexOf(t))) {
                        e.push("#define LIGHT" + o), o > 0 && n.push(e[e.length - 1]);
                        var a;
                        a = s instanceof BABYLON.SpotLight ? "#define SPOTLIGHT" + o : s instanceof BABYLON.HemisphericLight ? "#define HEMILIGHT" + o : "#define POINTDIRLIGHT" + o, e.push(a), o > 0 && n.push(e[e.length - 1]);
                        var l = s.getShadowGenerator();
                        if (t && t.receiveShadows && l && (e.push("#define SHADOW" + o), o > 0 && n.push(e[e.length - 1]), i || (e.push("#define SHADOWS"), i = !0), l.useVarianceShadowMap && (e.push("#define SHADOWVSM" + o), o > 0 && n.push(e[e.length - 1])), l.usePoissonSampling && (e.push("#define SHADOWPCF" + o), o > 0 && n.push(e[e.length - 1]))), o++, 4 == o)
                            break
                    }
                }
        }, e.prototype.setBaseColor = function () { }, e.prototype._batchedBind = function () { }, e.prototype._mandatoryBind = function () { }, e.prototype.bind = function (t, e) {
            this._effect.setMatrix("world", t), this._mandatoryBind(t, e)
        }, e.prototype.unbind = function () {
            this.reflectionTexture && this.reflectionTexture.isRenderTarget && this._effect.setTexture("reflection2DSampler", null)
        }, e.prototype._preBind = function () {
            t.prototype._preBind.call(this);
            var e = -1 != this.category && n === this.category;
            n = this.category, e || this._batchedBind()
        }, e.prototype.bindView = function () {
            this._effect._engine.setFloat3(this._uniformsLocations.vEyePosition, this._scene.activeCamera.position.x, this._scene.activeCamera.position.y, this._scene.activeCamera.position.z), this._effect._engine.setMatrix(this._uniformsLocations.viewProjection, this._scene.getTransformMatrix())
        }, e.prototype.bindColor = function () {
            this._effect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha)
        }, e.prototype.bindAlpha = function () {
            this._effect.setFloat("vAlpha", this.alpha)
        }, e.prototype.bindDiffuse = function () {
            this.diffuseTexture && BABYLON.StandardMaterial.DiffuseTextureEnabled && (this._effect.setTexture("diffuseSampler", this.diffuseTexture), this._effect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level), this._effect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix()))
        }, e.prototype.bindBump = function () {
            this.bumpTexture && this._scene.getEngine().getCaps().standardDerivatives && BABYLON.StandardMaterial.BumpTextureEnabled && (this._effect.setTexture("bumpSampler", this.bumpTexture), this._effect.setFloat2("vBumpInfos", this.bumpTexture.coordinatesIndex, this.bumpTexture.level), this._effect.setMatrix("bumpMatrix", this.bumpTexture.getTextureMatrix()))
        }, e.prototype.bindEnv = function () {
            this.reflectionTexture && BABYLON.StandardMaterial.ReflectionTextureEnabled && (this._effect.setTexture("reflectionCubeSampler", this.reflectionTexture), this._effect.setMatrix("reflectionMatrix", this.reflectionTexture.getReflectionTextureMatrix()), this._effect.setFloat3("vReflectionInfos", this.reflectionTexture.coordinatesMode, this.reflectionTexture.level, this.reflectionTexture.isCube ? 1 : 0))
        }, e.prototype.bindLights = function () {
            for (var t = 0, e = 0; e < this._scene.lights.length; e++) {
                var n = this._scene.lights[e];
                n.isEnabled() && (n instanceof BABYLON.PointLight ? n.transferToEffect(this._effect, "vLightData" + t) : n instanceof BABYLON.DirectionalLight ? n.transferToEffect(this._effect, "vLightData" + t) : n instanceof BABYLON.SpotLight ? n.transferToEffect(this._effect, "vLightData" + t, "vLightDirection" + t) : n instanceof BABYLON.HemisphericLight && n.transferToEffect(this._effect, "vLightData" + t, "vLightGround" + t), n.diffuse.scaleToRef(n.intensity, this._scaledDiffuse), n.specular.scaleToRef(n.intensity, this._scaledSpecular), this._effect.setColor4("vLightDiffuse" + t, this._scaledDiffuse, n.range), this._effect.setColor3("vLightSpecular" + t, this._scaledSpecular))
            }
        }, e.prototype.bindShadows = function (t, e) {
            if (this._hasLights && this._scene.lightsEnabled)
                for (var n = 0, i = 0; i < this._scene.lights.length; i++) {
                    var o = this._scene.lights[i];
                    if (o.isEnabled()) {
                        var r = o.getShadowGenerator();
                        if (e.receiveShadows && r && (t.multiplyToRef(r.getTransformMatrix(), this._lightMatrix), this._effect.setTexture("shadowSampler" + n, r.getShadowMap()), this._effect._engine.setMatrix(this._uniformsLocations.lightMatrix[i], this._lightMatrix), this._effect._engine.setFloat(this._uniformsLocations.darkness[i], r.getDarkness())), n++, 4 == n)
                            break
                    }
                }
        }, e.prototype.dispose = function (e) {
            this.diffuseTexture && this.diffuseTexture.dispose(), this.bumpTexture && this.bumpTexture.dispose(), this.reflectionTexture && this.reflectionTexture.dispose(), t.prototype.dispose.call(this, e)
        }, e.prototype.clone = function (t) {
            var e = this.isDefault;
            this.isDefault = !1;
            var n = this.serialize();
            this.isDefault = e;
            var i = ujs.deserializeObject(n);
            return i.name = t, i.isDefault = this.isDefault, i
        }, e
    } (BABYLON.Material);
    t.StandardMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (t) {
        function e(e, n, i) {
            t.call(this, e, n), this.params = i || {}, this.params.diffuseTexture && (this.diffuseTexture = this.params.diffuseTexture instanceof BABYLON.Texture ? this.params.diffuseTexture : new BABYLON.Texture(this.params.diffuseTexture, wanaplan.engine3D.scene), this.bumpTexture = null), this.params.bumpTexture && (this.bumpTexture = this.params.bumpTexture instanceof BABYLON.Texture ? this.params.bumpTexture : new BABYLON.Texture(this.params.bumpTexture, wanaplan.engine3D.scene)), this.category = -1, this._shaderName = "textured"
        }
        return __extends(e, t), e.prototype.build = function () {
            this.uv(), this.normal(), this.diffuse(), this.light(), this.setAlpha()
        }, e.prototype._batchedBind = function () { }, e.prototype._mandatoryBind = function (t, e) {
            this.bindView(), this.bindShadows(t, e), this.bindDiffuse(), this.bindAlpha(), this.bindLights()
        }, e
    } (t.StandardMaterial);
    t.TexturedMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (e) {
        function n(n, i, o) {
            e.call(this, n, i), this.category = 2, this.params = o || {}, this.params.brillance = this.params.brillance || .5, this.params.brillance = BABYLON.Math.clamp(this.params.brillance, 0, 1), this.params.baseColor = this.params.baseColor || new BABYLON.Color3(.6, .6, .6), this.diffuseColor = new BABYLON.Color3(this.params.brillance * this.params.baseColor.r, this.params.brillance * this.params.baseColor.g, this.params.brillance * this.params.baseColor.b), this.reflectionTexture = new BABYLON.CubeTexture(t.Assets.flatEnvMapTexture, i), this._shaderName = "metal", this.setCustomDefines(["#define METAL"])
        }
        return __extends(n, e), n.prototype.setBaseColor = function (t) {
            this.params.baseColor = t, this.diffuseColor.copyFromFloats(this.params.brillance * t.r, this.params.brillance * t.g, this.params.brillance * t.b)
        }, n.prototype.build = function () {
            this.color(), this.normal(), this.env(), this.light()
        }, n.prototype._batchedBind = function () {
            this.bindEnv(), this.bindLights()
        }, n.prototype._mandatoryBind = function (t, e) {
            this.bindView(), this.bindShadows(t, e), this.bindColor()
        }, n
    } (t.StandardMaterial);
    t.MetalMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (e) {
        function n(n, i, o) {
            e.call(this, n, i, o), this.category = 3, this.alpha = this.params.opacity || this.params.alpha || .3, this.alpha = BABYLON.Math.clamp(this.alpha, 0, 1), this.reflectionTexture = new BABYLON.CubeTexture(t.Assets.envMapTexture, i), this.setCustomDefines(["#define GLASS"]), this.setBaseColor(this.params.baseColor || {
                r: .6,
                g: .6,
                b: .6
            })
        }
        return __extends(n, e), n
    } (t.MetalMaterial);
    t.GlassMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (e) {
        function n(n, i, o) {
            e.call(this, n, i, o), this.params.diffuseTexture || (this.diffuseTexture = new BABYLON.Texture(t.Assets.woodTextures.diffuse, wanaplan.engine3D.scene)), this.category = 1, this.setCustomDefines(["#define WOOD"])
        }
        return __extends(n, e), n
    } (t.TexturedMaterial);
    t.WoodMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (t) {
        function e(e, n, i) {
            t.call(this, e, n, i), this.category = 4, this.setCustomDefines(["#define LEATHER"])
        }
        return __extends(e, t), e
    } (t.TexturedMaterial);
    t.LeatherMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (t) {
        function e(e, n, i) {
            t.call(this, e, n), this.category = 5, this.params = i || {}, this.params.factor = this.params.factor || 1, this.params.factor = BABYLON.Math.clamp(this.params.factor, 0, 1), this.diffuseColor = new BABYLON.Color3(this.params.factor, this.params.factor, this.params.factor), this._shaderName = "white", this.setCustomDefines(["#define WHITE"])
        }
        return __extends(e, t), e.prototype.setBaseColor = function (t) {
            this.params.factor = (t.r + t.g + t.b) / 3, this.diffuseColor.copyFromFloats(this.params.factor, this.params.factor, this.params.factor)
        }, e.prototype.build = function () {
            this.color(), this.normal(), this.light()
        }, e.prototype._batchedBind = function () { }, e.prototype._mandatoryBind = function (t, e) {
            this.bindView(), this.bindShadows(t, e), this.bindColor(), this.bindLights()
        }, e
    } (t.StandardMaterial);
    t.WhiteMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (t) {
        function e(e, n, i) {
            this.params = i || {}, t.call(this, e, n, this.params), this.category = 6, this.diffuseColor = this.params.baseColor ? new BABYLON.Color3(this.params.baseColor.r, this.params.baseColor.g, this.params.baseColor.b) : new BABYLON.Color3(1, 1, 1), this.setCustomDefines(["#define PLASTIC"])
        }
        return __extends(e, t), e.prototype.setBaseColor = function (t) {
            this.params.baseColor = t, this.diffuseColor.copyFrom(t)
        }, e
    } (t.WhiteMaterial);
    t.PlasticMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (t) {
        function e(e, n, i) {
            t.call(this, e, n, i), this.category = 7, this.setCustomDefines(["#define TILE"])
        }
        return __extends(e, t), e
    } (t.TexturedMaterial);
    t.TileMaterial = e
} (wnp || (wnp = {})),
function (t) {
    var e = function (e) {
        function n(n, i, o) {
            e.call(this, n, i, o), this.params.diffuseTexture || (this.diffuseTexture = new BABYLON.Texture(t.Assets.firePlaceWood.diffuse, wanaplan.engine3D.scene)), this.category = 8, this.setCustomDefines(["#define MATT"])
        }
        return __extends(n, e), n
    } (t.TexturedMaterial);
    t.MattMaterial = e
} (wnp || (wnp = {}));
var wnp = window.wnp || {};
!function () {
    wnp.StandardMaterial.prototype.serialize = function (t) {
        if (this.isDefault)
            return null;
        var t = t || {};
        return t.class = {
            name: wnp.StandardMaterial.GetClassFromCategory(this.category)
        }, ujs.serializeObject(this, t, ["name", "backFaceCulling", "addColor", "params"]), t
    }, wnp.StandardMaterial.prototype.deserialize = function (e) {
        return e ? (ujs.deserializeObject(e, this, ["name", "backFaceCulling", "addColor"]), this.isDefault = !1, t(this), e.centroid && (this.centroid = e.centroid), e.side && (this.side = e.side), e.ambientColor && this.setBaseColor(ujs.deserializeObject(e.ambientColor)), e.emissiveColor && this.setBaseColor(ujs.deserializeObject(e.emissiveColor)), this) : null
    }, wnp.StandardMaterial.Deserialize = function (t) {
        var e = {};
        ujs.deserializeObject(t.params, e);
        var n = ujs.stringToFunction(t.class.name),
            i = new n(t.name, wanaplan.engine3D.scene, e);
        return i.deserialize(t), i
    }, wnp.StandardMaterial.GetClassFromCategory = function (t) {
        switch (t) {
            case -1:
                return "wnp.StandardMaterial";
            case 1:
                return "wnp.WoodMaterial";
            case 2:
                return "wnp.MetalMaterial";
            case 3:
                return "wnp.GlassMaterial";
            case 4:
                return "wnp.LeatherMaterial";
            case 5:
                return "wnp.WhiteMaterial";
            case 6:
                return "wnp.PlasticMaterial";
            case 7:
                return "wnp.TileMaterial";
            case 8:
                return "wnp.MattMaterial";
            default:
                return Logger.warning("Category Error (wnp.StandardMaterial)"), null
        }
    }, wnp.WoodMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.MetalMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.GlassMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.LeatherMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.WhiteMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.PlasticMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.TileMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.MattMaterial.Deserialize = wnp.StandardMaterial.Deserialize, wnp.TexturedMaterial.prototype.serialize = function () {
        if (1 == this.isDefault)
            return null;
        var t = {};
        return wnp.StandardMaterial.prototype.serialize.call(this, t), ujs.serializeObject(this, t, ["diffuseTexture", "bumpTexture"]), t
    }, wnp.TexturedMaterial.prototype.deserialize = function (t) {
        return ujs.deserializeObject(t, this, ["diffuseTexture", "bumpTexture"]), wnp.StandardMaterial.prototype.deserialize.call(this, t), this
    }, wnp.GlassMaterial.prototype.serialize = function () {
        if (1 == this.isDefault)
            return null;
        var t = {};
        return wnp.StandardMaterial.prototype.serialize.call(this, t), ujs.serializeObject(this, t, ["alpha"]), t
    }, wnp.GlassMaterial.prototype.deserialize = function (t) {
        return ujs.deserializeObject(t, this, ["alpha"]), wnp.StandardMaterial.prototype.deserialize.call(this, t), this
    }, BABYLON.StandardMaterial.prototype.serialize = function () {
        var t = BABYLON.Material.prototype.serialize.call(this);
        return t.class = {
            name: "BABYLON.StandardMaterial"
        }, ujs.serializeObject(this, t, ["diffuseTexture", "ambientTexture", "opacityTexture", "reflectionTexture", "emissiveTexture", "specularTexture", "bumpTexture", "ambientColor", "diffuseColor", "specularColor", "specularPower", "emissiveColor", "addColor"]), t
    }, BABYLON.StandardMaterial.prototype.deserialize = function (e) {
        return BABYLON.Material.prototype.deserialize.call(this, e), ujs.deserializeObject(e, this, ["diffuseTexture", "ambientTexture", "opacityTexture", "reflectionTexture", "emissiveTexture", "specularTexture", "bumpTexture", "ambientColor", "diffuseColor", "specularColor", "specularPower", "emissiveColor", "addColor"]), t(this), this
    }, wnp.BlackMaterial = wnp.WhiteMaterial, wnp.PolishedMaterial = wnp.WoodMaterial, wnp.LuxensMaterial = wnp.PlasticMaterial, wnp.TransparentMaterial = wnp.GlassMaterial;
    var t = function (t) {
        if ((t instanceof wnp.GlassMaterial || t instanceof wnp.MetalMaterial) && t.addColor && t.addColor.color)
            t.setBaseColor(t.addColor.color);
        else if (t.addColor && t.addColor.color && t.diffuseTexture && t.diffuseTexture.url) {
            t.addColor.size = t.addColor.size || {
                width: 512,
                height: 512
            };
            var e = new Image;
            e.crossOrigin = "Anonymous";
            var n = t.addColor.color;
            e.src = t.diffuseTexture.url;
            var i = new BABYLON.DynamicTexture("canvas", t.addColor.size.width, wanaplan.engine3D.scene, !0);
            i.url = t.diffuseTexture.url;
            var o = {
                u: t.diffuseTexture.uScale,
                v: t.diffuseTexture.vScale
            };
            t.diffuseTexture = i, t.diffuseColor = new BABYLON.Color3(n.r, n.g, n.b).scale(.2), e.onload = function () {
                var r = i.getContext();
                r.fillStyle = wnp.MaterialFactory.rgbToHex(n), r.clearRect(0, 0, t.addColor.size.width, t.addColor.size.height), r.drawImage(e, 0, 0, t.addColor.size.width, t.addColor.size.height), r.globalCompositeOperation = "soft-light", r.globalCompositeOperation = "color-burn", r.globalCompositeOperation = "multiply", r.fillRect(0, 0, t.addColor.size.width, t.addColor.size.height), i.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE, i.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE, i.uScale = o.u || 1, i.vScale = o.v || 1, i.update()
            }
        }
    }
} ();
