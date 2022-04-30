/*
the idea is that each feature stores objects,
such as the proficiency object,
notating what it adds to the character when it is added.
and the service will add or AND them as appropriate.
*/
export interface Proficiency{
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

export interface Expertise{
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

export interface BaseStats{
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

export interface DeathSaves{
	succsesses: number;
	failures: number;
}

export interface PermanantStats{
	level: number;
	characterName: string;
	playerName: string;
	//waiting on relevant types for these.
	//alignment
	//class
	//background
}

export interface ToolProficiencies{
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

export interface Languages{
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

export interface ephemerialStats{
	currentHP: number;
	tempHP: number;
	inspiration: number;
	hitDiceD6: number;
	hitDiceD8: number;
	hitDiceD10: number;
	hitDiceD12: number;
	initiative: number;
}
