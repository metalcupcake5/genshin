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
        throw new Error("Invalid main stat at cup");
        console.log("hi");
      default:
        this.main_stat = main_stat;
    }
    this.main_stat_value = main_stat_value;
    this.subs = subs;
  }
}