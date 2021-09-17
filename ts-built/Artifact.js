"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifact = void 0;
const artifact_constants_js_1 = require("./artifact_constants.js");
class Artifact {
    constructor(type, main_stat, main_stat_value, subs, set) {
        this.type = type;
        switch (type) {
            case 'flower':
                this.main_stat = 'hp';
                break;
            case 'feather':
                this.main_stat = 'atk';
                break;
            case 'cup':
                if (!artifact_constants_js_1.arti_consts.allowed_stats.cup.includes(main_stat)) {
                    console.log(main_stat);
                    throw new Error("Invalid main stat at cup");
                }
                this.m;
        }
    }
}
exports.Artifact = Artifact;
