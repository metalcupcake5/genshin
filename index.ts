import { Artifact } from './Artifact.js';
import { arti_consts } from './artifact_constants.js';

const flower: Artifact = new Artifact('flower', 'attack', 1, { hp: 1 });
const feather: Artifact = new Artifact('feather', 'ur mom', 1, {});
const cup: Artifact = new Artifact('cup', 'ur mom', 1, {});

console.log(flower);
console.log(feather);
console.log(cup);
console.log(arti_consts);