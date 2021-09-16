"use strict";
exports.__esModule = true;
exports.Artifact = void 0;
var Artifact = /** @class */ (function () {
    function Artifact(type, main_stat, main_stat_value, subs) {
        this.type = type;
        switch (type) {
            case 'flower':
                this.main_stat = 'hp';
                break;
            case 'feather':
                this.main_stat = 'atk';
                break;
            case 'cup':
                throw new Error("Invalid main stat");
            default:
                this.main_stat = main_stat;
        }
        this.main_stat_value = main_stat_value;
        this.subs = subs;
    }
    return Artifact;
}());
exports.Artifact = Artifact;
