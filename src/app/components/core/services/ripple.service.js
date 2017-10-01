"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
const router_1 = require("@angular/router");
let RippleService = class RippleService {
    constructor(router) {
        this.router = router;
    }
    setRipple(ripple, domRipple) {
        this.ripple = ripple;
        this.domRipple = domRipple;
    }
    launch(x, y, color = 'white', url = null) {
        let config = {
            speedFactor: 450 / 1000,
            color: color
        };
        this.ripple.launch(x, y, config);
        this.domRipple.style.pointerEvents = 'auto';
        this.duration = 450 * (1 / config.speedFactor);
        if (url) {
            this.router.navigateByUrl(url);
        }
    }
    stop() {
        this.duration = 0;
        this.ripple.fadeOutAll();
        this.domRipple.style.pointerEvents = 'none';
    }
    getDuration() {
        return this.duration;
    }
};
RippleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], RippleService);
exports.RippleService = RippleService;
//# sourceMappingURL=ripple.service.js.map