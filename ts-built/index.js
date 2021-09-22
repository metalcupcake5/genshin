"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Artifact_js_1 = require("./Artifact.js");
const kokomi_js_1 = require("./kokomi.js");
const flower = new Artifact_js_1.Artifact('flower', 'attack', 1, { hp: 1 });
const feather = new Artifact_js_1.Artifact('feather', 'ur mom', 1, {});
const cup = new Artifact_js_1.Artifact('cup', 'geo_dmg', 1, {});
const watch = new Artifact_js_1.Artifact('watch', 'er', 1, {});
const circlet = new Artifact_js_1.Artifact('circlet', "crit_rate", 1, {});
/*console.log(flower);
console.log(feather);
console.log(cup);
console.log(watch);
console.log(circlet);*/
/*
 * EDIT STUFF HERE
 *
*/
// character's health
const health = 30000;
// character's attack
const atk = 1000;
// character e level
const e_level = 10;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Health: ${health}`);
    console.log(`ATK: ${atk}`);
    console.log(`E level: ${e_level}`);
    const e_level_hp_scaling = kokomi_js_1.kokomi.e_scaling[e_level];
    const e_healing = Math.round((e_level_hp_scaling.hp_mult * health) + e_level_hp_scaling.hp_flat);
    console.log(`E healing: \n  ${e_healing} (per tick)\n  ${e_healing} * 7 = ${e_healing * 7} total (initial hit + tick every 2 seconds for 12 seconds)`);
    const e_level_atk_scaling = kokomi_js_1.kokomi.e_scaling[e_level].dmg;
    const e_damage = Math.round(atk * e_level_atk_scaling);
    console.log(`E base damage(no buffs/resistance):\n  ${e_damage}(per tick)\n  ${e_damage} * 7 = ${e_damage * 7} total (7 ticks)`);
});
main();
//# sourceMappingURL=index.js.map