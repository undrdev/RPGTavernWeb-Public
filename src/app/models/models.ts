export class WeaponResult
{
  count: number;
  next: any;
  previous: any;
  results: Weapon[];
}

export class Weapon
{
  name: string;
  slug: string;
  category: string;
  document__slug: string;
  document__title: string;
  document__license_url: string;
  cost: string;
  damage_dice: string;
  damage_type: string;
  weight: string;
  properties: string[];
}

export class MonsterResult
{
  count: number;
  next: string;
  previous: any;
  results: Monster[];
}

export class Monster
{
  slug: string;
  name: string;
  initiative: number;
  size: string;
  type: string;
  subtype: string;
  group: any;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: any;
  dexterity_save: any;
  constitution_save: any;
  intelligence_save: any;
  wisdom_save: any;
  charisma_save: any;
  perception: any;
  skills: Skills;
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  actions: Action[];
  reactions: Reaction[];
  legendary_desc: string;
  legendary_actions: Legendary_Actions[];
  special_abilities: Special_Abilities[];
  spell_list: any[];
  img_main: any;
  document__slug: string;
  document__title: string;
  document__license_url: string;
}

export class Speed
{
  walk: number;
  climb: number;
  burrow: number;
  fly: number;
  swim: number;
  crawl: number;
}

export class Skills
{
  acrobatics: number;
  animal_handling: number
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  slight_of_hand: number;
  stealth: number;
  survival:number;
}

export class Action
{
  attack_bonus: number;
  damage_dice: string;
  desc: string;
  name: string;
}

export class Reaction
{
  desc: string;
  name: string;
}

export class Legendary_Actions
{
  desc: string;
  name: string;
}

export class Special_Abilities
{
  desc: string;
  name: string;
}


export class MagicItemResult
{
  count: number;
  next: string;
  previous: any;
  results: MagicItem[];
}

export class MagicItem
{
  slug: string;
  name: string;
  type: string;
  desc: string;
  rarity: string;
  requires_attunement: string;
  document__slug: string;
  document__title: string;
}

export class Chest
{
  MagicItems: MagicItem[];
  Weapons: Weapon[];
  Armor: Armor[];

}

export class Armor
{
  name: string;
  ac: string;
}

export class Player{
  constructor(public name: string, public level: number, public init: number, public hit_points: number){
  }
}

export interface Combatant{
  name: string;
  init: number;
  hit_points: number;
  monster?: Monster;
}
