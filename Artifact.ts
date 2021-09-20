<<<<<<< HEAD
import { arti_consts } from './artifact_constants.js';
export class Artifact {
  type: string;
  main_stat: string;
  main_stat_value: number;
  subs: {
    hp?: number;
    hp_prec?: number;
    def?: number;
    def_prec?: number;
    atk?: number;
    atk_prec?: number;
    crit_rate?: number;
    crit_damage?: number;
    er?: number;
    em?: number;
  };
  constructor(
    type: string,
    main_stat: string,
    main_stat_value: number,
    subs: {
      hp?: number;
      hp_prec?: number;
      def?: number;
      def_prec?: number;
      atk?: number;
      atk_prec?: number;
      crit_rate?: number;
      crit_damage?: number;
      er?: number;
      em?: number;
    }
  ) {
    this.type = type;
    switch (type) {
      case 'flower':
        this.main_stat = 'hp';
        break;
      case 'feather':
        this.main_stat = 'atk';
        break;
      case 'cup':
        if(!arti_consts.allowed_stats.cup.includes(main_stat)){
          throw new Error("Invalid main stat at cup");
				}
        this.main_stat = main_stat
        break;
			case 'watch':
        if(!arti_consts.allowed_stats.watch.includes(main_stat)){
          throw new Error("Invalid main stat at watch");
				}
        this.main_stat = main_stat
        break;
			case 'circlet':
        if(!arti_consts.allowed_stats.circlet.includes(main_stat)){
          throw new Error("Invalid main stat at circlet");
				}
        this.main_stat = main_stat
        break;
      default:
        this.main_stat = main_stat;
    }
    this.main_stat_value = main_stat_value;
    this.subs = subs;
  }
=======
import { arti_consts } from './artifact_constants.js';
export class Artifact {
  type: string;
  main_stat: string;
  main_stat_value: number;
  subs: {
    hp?: number;
    hp_prec?: number;
    def?: number;
    def_prec?: number;
    atk?: number;
    atk_prec?: number;
    crit_rate?: number;
    crit_damage?: number;
    er?: number;
    em?: number;
  };
  constructor(
    type: string,
    main_stat: string,
    main_stat_value: number,
    subs: {
      hp?: number;
      hp_prec?: number;
      def?: number;
      def_prec?: number;
      atk?: number;
      atk_prec?: number;
      crit_rate?: number;
      crit_damage?: number;
      er?: number;
      em?: number;
    }
  ) {
    this.type = type;
    switch (type) {
      case 'flower':
        this.main_stat = 'hp';
        break;
      case 'feather':
        this.main_stat = 'atk';
        break;
      case 'cup':
        if(!arti_consts.allowed_stats.cup.includes(main_stat))  
          throw new Error("Invalid main stat at cup");
        this.main_stat = main_stat
        break;
      default:
        this.main_stat = main_stat;
    }
    this.main_stat_value = main_stat_value;
    this.subs = subs;
  }
>>>>>>> origin/master
}