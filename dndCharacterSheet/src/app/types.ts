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
	maxHPBeforeCon: number;
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
	archetype: Archetype;
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
	lightArmour: boolean;
	heavyArmour: boolean;
	simpleRanged: boolean;
	simpleMelee: boolean;
	martialRanged: boolean;
	martialMelee: boolean;
	club: boolean;
	dagger: boolean;
	greatclub: boolean;
	handaxe: boolean;
	javelin: boolean;
	lightHammer: boolean;
	mace: boolean;
	quarterstaff: boolean;
	sickle: boolean;
	spear: boolean;
	lightCrossbow: boolean;
	dart: boolean;
	shortbow: boolean;
	sling: boolean;
	battleaxe: boolean;
	flail: boolean;
	glaive: boolean;
	greataxe: boolean;
	greatsword: boolean;
	halberd: boolean;
	lance: boolean;
	longsword: boolean;
	maul: boolean;
	morningstart: boolean;
	pike: boolean;
	rapier: boolean;
	scimitar: boolean;
	shortsword: boolean;
	trident: boolean;
	warPick: boolean;
	warhammer: boolean;
	whip: boolean;
	blowgun: boolean;
	heavyCrossbow: boolean;
	handCrossbow: boolean;
	longbow: boolean;
	net: boolean;
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
	Deep_speech: boolean;
	Draconic: boolean;
	Infernal: boolean;
	Primordial: boolean;
	Sylvan: boolean;
	Undercommon: boolean;
	ThievesCant: boolean;
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
	| 'None'

export type ClassSpecificStats ={
	SneakAttackd6s:number;
}

export interface Character {
	proficiencies: Proficiency,
	expertise: Expertise,
	baseStats: BaseStats,
	permanantStats: PermanantStats,
	toolProficiencies: ToolProficiencies,
	languages: Languages,
	ephemerialStats: EphemerialStats,
	classSpecificStats: ClassSpecificStats,
}

//sometimes, there will be no choice associated with aquiring a trait, like when aquiring many class features. Other times, there will be several, such as which proficiencies to take, and what stats to increase.
export interface Feature {
	//short name
	name: string,
	//long description
	description: string,
	onGainFeature(character: Character):Character
}
