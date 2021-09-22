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
// character's attack
const atk = 1_000;
// character e level
const e_level = 10;

const main = async () => {
	console.log(`Health: ${health}`);
	console.log(`ATK: ${atk}`);
	console.log(`E level: ${e_level}`);

	const e_level_hp_scaling = kokomi.e_scaling[e_level];
	const e_healing = Math.round((e_level_hp_scaling.hp_mult * health) + e_level_hp_scaling.hp_flat);

	console.log(`E healing: \n  ${e_healing} (per tick)\n  ${e_healing} * 7 = ${e_healing * 7} total (initial hit + tick every 2 seconds for 12 seconds)`);
	const e_level_atk_scaling = kokomi.e_scaling[e_level].dmg;
	const e_damage = Math.round(atk * e_level_atk_scaling);
	console.log(`E base damage(no buffs/resistance):\n  ${e_damage}(per tick)\n  ${e_damage} * 7 = ${e_damage * 7} total (7 ticks)`);
	
}

main();