import { Artifact } from './Artifact.js';
import { arti_consts } from './artifact_constants.js';
import { kokomi } from './kokomi.js';

const flower: Artifact = new Artifact('flower', 'attack', 1, { hp: 1 });
const feather: Artifact = new Artifact('feather', 'ur mom', 1, {});
const cup: Artifact = new Artifact('cup', 'geo_dmg', 1, {});
const watch: Artifact = new Artifact('watch', 'er', 1, {});
const circlet: Artifact = new Artifact('circlet', "crit_rate", 1, {});

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
const health = 30_000;
const atk = 1_000;
const e_level = 10;

const main = async () => {
	console.log(`Health: ${health}`);
	console.log(`ATK: ${atk}`);
	console.log(`E level: ${e_level}`);

	const e_level_hp_scaling = kokomi.e_scaling[e_level];
	const e_healing = Math.round((e_level_hp_scaling.hp_mult * health) + e_level_hp_scaling.hp_flat);

	console.log(`E healing: \n  ${e_healing} (per tick)\n  ${e_healing} * 6 = ${e_healing * 6} total (1 tick every 2 seconds over 12 seconds)`);
	const e_level_atk_scaling = kokomi.e_scaling[e_level].dmg;
	console.log(`E base damage(no buffs/resistance):\n  ${Math.round(atk * e_level_atk_scaling)}`);
}

main();