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
<<<<<<< HEAD
<<<<<<< HEAD
                if (!artifact_constants_js_1.arti_consts.allowed_stats.cup.includes(main_stat)) {
                    throw new Error("Invalid main stat at cup");
                }
                this.main_stat = main_stat;
                break;
            case 'watch':
                if (!artifact_constants_js_1.arti_consts.allowed_stats.watch.includes(main_stat)) {
                    throw new Error("Invalid main stat at watch");
                }
                this.main_stat = main_stat;
                break;
            case 'circlet':
                if (!artifact_constants_js_1.arti_consts.allowed_stats.circlet.includes(main_stat)) {
                    throw new Error("Invalid main stat at circlet");
                }
                this.main_stat = main_stat;
                break;
=======
                throw new Error("Invalid main stat at cup");
                console.log("hi");
>>>>>>> origin/master
=======
                throw new Error("Invalid main stat at cup");
                console.log("hi");
>>>>>>> 80931dda4ab67d12de7d5e99006a109a7791ed53
            default:
                this.main_stat = main_stat;
        }
        this.main_stat_value = main_stat_value;
        this.subs = subs;
    }
}
exports.Artifact = Artifact;
//# sourceMappingURL=Artifact.js.map