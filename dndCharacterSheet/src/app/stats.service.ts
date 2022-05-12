import { Injectable } from '@angular/core';
import * as types from './types'
import * as features from './features'

@Injectable({
	providedIn: 'root'
})
export class StatsService {

	//initalizing a blank character
	character:types.Character={
		proficiencies: {
			strength: false,
			athletics: false,
			dexterity: false,
			acrobatics: false,
			sleightOfHand: false,
			stealth: false,
			constitution: false,
			intelligence: false,
			arcana: false,
			history: false,
			investigation: false,
			nature: false,
			religion: false,
			wisdom: false,
			animalHandling: false,
			insight: false,
			medicine: false,
			perception: false,
			survival: false,
			charisma: false,
			deception: false,
			intimidation: false,
			performance: false,
			persuasion: false,
		},
		expertise: {
			thievesTools: false,
			athletics: false,
			acrobatics: false,
			sleightOfHand: false,
			stealth: false,
			arcana: false,
			history: false,
			investigation: false,
			nature: false,
			religion: false,
			animalHandling: false,
			insight: false,
			medicine: false,
			perception: false,
			survival: false,
			deception: false,
			intimidation: false,
			performance: false,
			persuasion: false,
		},
		baseStats: {
			proficiencyBonus: 2,
			maxHPBeforeCon: 0,
			speed: 0,
			hitDiceD6: 0,
			hitDiceD8: 0,
			hitDiceD10: 0,
			hitDiceD12: 0,
			strength: 10,
			dexterity: 10,
			constitution: 10,
			intelligence: 10,
			wisdom: 10,
			charisma: 10,
		},
		permanantStats: {
			level: 0,
			characterName: 'test',
			playerName: 'player',
			alignmentGoodEvil: 'Good',
			alignmentLawfulChaoitc: 'Lawful',
			class: 'Rouge',
			archetype: 'None',
		},
		toolProficiencies: {
			alchemistsSupplies: false,
			brewersSupplies: false,
			calligraphersSupplies: false,
			carpentersTools: false,
			cartographersTools: false,
			cobblersTools: false,
			cooksUtensils: false,
			glassblowersTools: false,
			jewelersTools: false,
			leatherworkersTools: false,
			masonsTools: false,
			paintersSupplies: false,
			pottersTools: false,
			smithsTools: false,
			tinkersTools: false,
			weaversTools: false,
			woodcarversTools: false,
			dice: false,
			playingCards: false,
			bagpipes: false,
			drum: false,
			dulcimer: false,
			flute: false,
			lute: false,
			lyre: false,
			horn: false,
			panFlute: false,
			shawm: false,
			viol: false,
			navigatorsTools: false,
			thievesTools: false,
			vehicles: false,
			lightArmour: false,
			heavyArmour: false,
			simpleRanged: false,
			simpleMelee: false,
			martialRanged: false,
			martialMelee: false,
			club: false,
			dagger: false,
			greatclub: false,
			handaxe: false,
			javelin: false,
			lightHammer: false,
			mace: false,
			quarterstaff: false,
			sickle: false,
			spear: false,
			lightCrossbow: false,
			dart: false,
			shortbow: false,
			sling: false,
			battleaxe: false,
			flail: false,
			glaive: false,
			greataxe: false,
			greatsword: false,
			halberd: false,
			lance: false,
			longsword: false,
			maul: false,
			morningstart: false,
			pike: false,
			rapier: false,
			scimitar: false,
			shortsword: false,
			trident: false,
			warPick: false,
			warhammer: false,
			whip: false,
			blowgun: false,
			heavyCrossbow: false,
			handCrossbow: false,
			longbow: false,
			net: false,
		},
		languages: {
			common: false,
			Dwarvish: false,
			Elvish: false,
			Giant: false,
			Gnomish: false,
			Goblin: false,
			Halfling: false,
			Orcish: false,
			Abyssal: false,
			Celestial: false,
			Deep_speech: false,
			Draconic: false,
			Infernal: false,
			Primordial: false,
			Sylvan: false,
			Undercommon: false,
		},
		ephemerialStats: {
			currentHP: 0,
			tempHP: 0,
			inspiration: 0,
			hitDiceD6: 0,
			hitDiceD8: 0,
			hitDiceD10: 0,
			hitDiceD12: 0,
			initiative: 0,
			deathSaves: {
				succsesses: 0,
				failures: 0,
			},
		},
		classSpecificStats: {
			SneakAttackd6s:0,
		},
	}
	charLevelUpArray:types.levelUps[]=[]
	test(){
		console.log(this.character);
		let initalHitDice = new features.initalHitDice;
		this.character=initalHitDice.onGainFeature(this.character);
		let initalHP=new features.initalHP;
		this.character=initalHP.onGainFeature(this.character);
		let initalProficiencies=new features.initalProficiencies(['athletics', 'intimidation', 'persuasion', 'stealth']);
		this.character=initalProficiencies.onGainFeature(this.character);
		console.log(this.character);
	}
	constructor() { }
}
