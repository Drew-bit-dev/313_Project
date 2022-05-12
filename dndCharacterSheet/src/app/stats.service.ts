import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import * as types from './types';
import * as features from './features';

@Injectable({
	providedIn: 'root'
})
export class StatsService {

	//initalizing a blank character
	startingCharacter:types.Character={
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
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
		},
		permanantStats: {
			level: 0,
			characterName: 'test',
			playerName: 'player',
			alignmentGoodEvil: 'Good',
			alignmentLawfulChaoitc: 'Lawful',
			class: 'Rouge',
			archetype: 'None',
			bio: ''
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
			ThievesCant: false,
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
	character=this.startingCharacter;

	//two dimentional array. eatch array of features represents one level. the contents of the level array are the features gained for that level up. Therefore, the length of the top level array is equal to the character level.
	charLevelUpArray:types.Feature[][]=[]

	test(){
		console.log(this.character);
		let initalHitDice = new features.initalHitDice;
		let initalHP=new features.initalHP;
		let initalProficiencies=new features.initalProficiencies(['Athletics', 'Intimidation', 'Persuasion', 'Stealth']);
		this.levelUp([initalHitDice, initalHP, initalProficiencies]);
		console.log(this.character);
		console.log(this.charLevelUpArray);
	}

	constructor() { }

	//Leveling up involves constructing whatever new features are needed to be added to the character (see features.ts for what, if any, a given feature needs to be constructed). After you have constructed all features you need for a given level up, pass all of them to a single call of levelUp.
	levelUp(newFeatures: types.Feature[]){
		for (let i=0; i<newFeatures.length; i++){
			this.character=newFeatures[i].onGainFeature(this.character);
		}
		this.charLevelUpArray.push(newFeatures);
		this.character.permanantStats.level=this.charLevelUpArray.length
	}

	reconstructChar(levelUpArray:types.Feature[][]){
		this.character=this.startingCharacter;
		this.charLevelUpArray=levelUpArray;
		this.character.permanantStats.level=levelUpArray.length;
		for (let i=0; i<levelUpArray.length; i++){
			for (let j=0; j<levelUpArray[i].length; j++){
				this.character=levelUpArray[i][j].onGainFeature(this.character);
			}
		}
	}

	//TODO make AC setter and getter. Setter should accept an armour type.
	getProficiencies(){return of(this.character.proficiencies)}
	getExpertises(){return of(this.character.ephemerialStats.deathSaves);}
	getBaseStats(){return of(this.character.baseStats);}
	getPermanantStats(){return of(this.character.permanantStats);}
	getToolProficiencies(){return of(this.character.toolProficiencies);}
	getLanguages(){return of(this.character.languages);}
	getEphemerialStats(){return of(this.character.ephemerialStats);}
	getSneakAttackd6s(){return of(this.character.classSpecificStats.SneakAttackd6s);}
	getCurrentHP(){return of(this.character.ephemerialStats.currentHP);}
	getTempHP(){return of(this.character.ephemerialStats.tempHP);}
	getInitiative(){return of(this.character.ephemerialStats.initiative);}
	getDeathSaves(){return of(this.character.ephemerialStats.deathSaves);}
	getInspiration(){return of(this.character.ephemerialStats.inspiration);}
	getSpeed(){return of(this.character.baseStats.speed);}
	getBio(){return of(this.character.permanantStats.bio);}

	setCurrentHP(newHP: number){ this.character.ephemerialStats.currentHP=newHP;}
	setTempHP(newTempHP: number){this.character.ephemerialStats.tempHP=newTempHP;}
	setInitiative(newInitiative: number){this.character.ephemerialStats.initiative=newInitiative;}
	setInpiration(newInspiration:number){this.character.ephemerialStats.inspiration=newInspiration;}
	setSpeed(newSpeed:number){this.character.baseStats.speed=newSpeed;}
	setBio(newBio:string){this.character.permanantStats.bio=newBio;}
	resetDeathSaves(){
		this.character.ephemerialStats.deathSaves.succsesses=0;
		this.character.ephemerialStats.deathSaves.failures=0;
	}
	incrementDeathSuccsesses(){this.character.ephemerialStats.deathSaves.succsesses+=1}
	incrementDeathFailures(){this.character.ephemerialStats.deathSaves.failures+=1}

	gethitDiced6(){return of(this.character.ephemerialStats.hitDiceD6);}
	gethitDiced8(){return of(this.character.ephemerialStats.hitDiceD8);}
	gethitDiced10(){return of(this.character.ephemerialStats.hitDiceD10);}
	gethitDiced12(){return of(this.character.ephemerialStats.hitDiceD12);}

	sethitDiced6(newd6:number){this.character.ephemerialStats.hitDiceD6=newd6;}
	sethitDiced8(newd8:number){this.character.ephemerialStats.hitDiceD8=newd8;}
	sethitDiced10(newd10:number){this.character.ephemerialStats.hitDiceD10=newd10;}
	sethitDiced12(newd12:number){this.character.ephemerialStats.hitDiceD12=newd12;}
}
