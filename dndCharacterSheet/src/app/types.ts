export type Proficiency = {
	strength: boolean;
	athletics: boolean;
	dexterity: boolean;
	acrobatics: boolean;
	sleightOfHand: boolean;
	stealth: boolean;
	constitution: boolean;
	intelligence: boolean;
	arcana: boolean;
	history: boolean;
	investigation: boolean;
	nature: boolean;
	religion: boolean;
	wisdom: boolean;
	animalHandling: boolean;
	insight: boolean;
	medicine: boolean;
	perception: boolean;
	survival: boolean;
	charisma: boolean;
	deception: boolean;
	intimidation: boolean;
	performance: boolean;
	persuasion: boolean;
}

export type skillsEnum =
	'strength'
	| 'athletics'
	| 'dexterity'
	| 'acrobatics'
	| 'sleightOfHand'
	| 'stealth'
	| 'constitution'
	| 'intelligence'
	| 'arcana'
	| 'history'
	| 'investigation'
	| 'nature'
	| 'religion'
	| 'wisdom'
	| 'animalHandling'
	| 'insight'
	| 'medicine'
	| 'perception'
	| 'survival'
	| 'charisma'
	| 'deception'
	| 'intimidation'
	| 'performance'
	| 'persuasion'

export type Expertise = {
	thievesTools: boolean;
	athletics: boolean;
	acrobatics: boolean;
	sleightOfHand: boolean;
	stealth: boolean;
	arcana: boolean;
	history: boolean;
	investigation: boolean;
	nature: boolean;
	religion: boolean;
	animalHandling: boolean;
	insight: boolean;
	medicine: boolean;
	perception: boolean;
	survival: boolean;
	deception: boolean;
	intimidation: boolean;
	performance: boolean;
	persuasion: boolean;
}

export type BaseStats = {
	proficiencyBonus: number;
	maxHP: number;
	speed: number;
	hitDiceD6: number;
	hitDiceD8: number;
	hitDiceD10: number;
	hitDiceD12: number;
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
}

export type statsEnum = 
	'strength'
	| 'dexterity'
	| 'constitution'
	| 'intelligence'
	| 'wisdom'
	| 'charisma';

export type DeathSaves = {
	succsesses: number;
	failures: number;
}

export type PermanantStats = {
	level: number;
	characterName: string;
	playerName: string;
	alignmentGoodEvil: GoodEvil;
	alignmentLawfulChaoitc: LawfulChaotic;
	class: Class;
	//waiting on relevant types for these.
	//background
}

export type ToolProficiencies = {
	alchemistsSupplies: boolean;
	brewersSupplies: boolean;
	calligraphersSupplies: boolean;
	carpentersTools: boolean;
	cartographersTools: boolean;
	cobblersTools: boolean;
	cooksUtensils: boolean;
	glassblowersTools: boolean;
	jewelersTools: boolean;
	leatherworkersTools: boolean;
	masonsTools: boolean;
	paintersSupplies: boolean;
	pottersTools: boolean;
	smithsTools: boolean;
	tinkersTools: boolean;
	weaversTools: boolean;
	woodcarversTools: boolean;
	dice: boolean;
	playingCards: boolean;
	bagpipes: boolean;
	drum: boolean;
	dulcimer: boolean;
	flute: boolean;
	lute: boolean;
	lyre: boolean;
	horn: boolean;
	panFlute: boolean;
	shawm: boolean;
	viol: boolean;
	navigatorsTools: boolean;
	thievesTools: boolean;
	vehicles: boolean;
}

export type Languages = {
	common: boolean;
	Dwarvish: boolean;
	Elvish: boolean;
	Giant: boolean;
	Gnomish: boolean;
	Goblin: boolean;
	Halfling: boolean;
	Orcish: boolean;
	Abyssal: boolean;
	Celestial: boolean;
	Deep speech: boolean;
	Draconic: boolean;
	Infernal: boolean;
	Primordial: boolean;
	Sylvan: boolean;
	Undercommon: boolean;
}

export type EphemerialStats = {
	currentHP: number;
	tempHP: number;
	inspiration: number;
	hitDiceD6: number;
	hitDiceD8: number;
	hitDiceD10: number;
	hitDiceD12: number;
	initiative: number;
	deathSaves: DeathSaves;
}

export type GoodEvil =
	'Good'
	| 'Neutral'
	| 'Evil';

export type LawfulChaotic = 
	'Lawful'
	| 'Neutral'
	| 'Chaotic';

export type Class = 'Rouge'

export type Archetype =
	'Theif'
	| 'Assasin'

export interface Character {
	proficiencies: Proficiency,
	expertise: Expertise,
	baseStats: baseStats,
	deathSaves: DeathSaves,
	permanantStats: permanantStats,
	toolProficiencies: ToolProficiencies,
	languages: Languages,
	ephemerialStats: EphemerialStats,
}

//sometimes, there will be no choice associated with aquiring a trait, like when aquiring many class features. Other times, there will be several, such as which proficiencies to take, and what stats to increase.
export interface Feature {
	name: string,
	description: string,
	onGainFeature: ()=>void
}

export interface InitalProficiencies {
	firstProficiency: skillsEnum,
	secondProficiency: skillsEnum,
	thirdProficiency: skillsEnum,
	fourthProficiency: skillsEnum
	gainInitalProficiencies: (firstProficiency: skillsEnum, secondProficiency: skillsEnum, thirdProficiency: skillsEnum, fourthProficiency: skillsEnum)=>void
}

export interface gainAbilityIncrease {
	firstStat: statsEnum,
	secondStat: statsEnum
	gainAbilityIncrease: (firstStat: statsEnum, secondStat: statsEnum)=>void
}
