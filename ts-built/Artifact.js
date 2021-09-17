"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifact = void 0;
class Artifact {
    constructor(type, main_stat, main_stat_value, subs) {
        this.type = type;
        switch (type) {
            case 'flower':
                this.main_stat = 'hp';
                break;
            case 'feather':
                this.main_stat = 'atk';
                break;
            case 'cup':
                throw new Error("Invalid main stat at cup");
                console.log("hi");
            default:
                this.main_stat = main_stat;
        }
        this.main_stat_value = main_stat_value;
        this.subs = subs;
    }
}
exports.Artifact = Artifact;
//# sourceMappingURL=Artifact.js.map