import * as types from './types'

function formatNumber(number: number): string{
	let numberString=''
	if (number===1){
		numberString='${levelGained}st';
	}else if (number===2){
		numberString='${levelGained}nd';
	}else if (number===3){
		numberString='${levelGained}rd'
	}else{
		numberString='${levelGained}th'
	}
	return numberString
}
export class initalHitDice implements types.Feature{
	//short name
	name='Inital Hit Dice';
	//long description
	description='The hit dice you were given at level 1';
	onGainFeature(character: types.Character): types.Character{
		character.baseStats.hitDiceD8+=1;
		return character;
	}
}

export class initalHP implements types.Feature{
	//short name
	name='Inital HP';
	//long description
	description='The HP you were given at level 1';
	onGainFeature(character: types.Character): types.Character{
		character.baseStats.maxHPBeforeCon+=8;
		return character;
	}
}

export class initalProficiencies implements types.InitalProficiencies{
	//short name
	name='Inital InitalProficiencies';
	//long description
	description='The Proficiencies that were given at level 1';
	proficienciesGained:types.skillsEnum[];
	constructor(proficienciesGained: types.skillsEnum[]){
		this.proficienciesGained=proficienciesGained;
	}
	onGainFeature(character: types.Character): types.Character{
		character.toolProficiencies.lightArmour=true;
		character.toolProficiencies.simpleRanged=true;
		character.toolProficiencies.simpleMelee=true;
		character.toolProficiencies.handCrossbow=true;
		character.toolProficiencies.longsword=true;
		character.toolProficiencies.rapier=true;
		character.toolProficiencies.shortsword=true;
		for (let i=0; i<this.proficienciesGained.length; i++){
			let key=this.proficienciesGained[i] as keyof types.Proficiency;
			character.proficiencies[key]=true;
		}
		return character;
	}
}

export class gainExpertise implements types.GainExpertise{
	name:string;
	description:string;
	expertiseGained: types.skillsEnum[]
	constructor(levelGained: number, expertiseGained: types.skillsEnum[]){
		let levelString=formatNumber(levelGained);
		this.name='${levelString} level expertise';
		this.description='expertise gained at the ${levelString} level';
		this.expertiseGained=expertiseGained;
	}
	onGainFeature(character: types.Character): types.Character{
		for (let i=0; i<this.expertiseGained.length; i++){
			let key=this.expertiseGained[i] as keyof types.Expertise;
			character.expertise[key]=true;
		}
		return character
	}
}

export class sneakAttack implements types.Feature{
	name:string;
	description:string;
	constructor(levelGained: number,){
		let levelString=formatNumber(levelGained);
		this.name='${levelString} level sneak attack';
		this.description='Sneak attack dice increase gained at ${levelString level';
	}
	onGainFeature(character: types.Character): types.Character{
		character.classSpecificStats.SneakAttackd6s+=1;
		return character
	}
}

export class thievesCant implements types.Feature{
	name='Thieves Cant';
	description='During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.'
	onGainFeature(character: types.Character): types.Character{
		character.languages.ThievesCant=true;
		return character;
	}
}

export class cunningAction implements types.Feature{
	name='Cunning Action';
	description='Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the dash, disengage, or hide action.'
	onGainFeature(character: types.Character):types.Character{
		return character;
	}
}

export class abilityScoreImprovement implements types.AbilityIncrease {
	name:string;
	description:string;
	statsGained: types.statsEnum[];
	constructor(levelGained:number, skillsGained: types.statsEnum[]){
		let levelString=formatNumber(levelGained);
		this.name='${levelString} level abilityScoreImprovement';
		this.description='Ability score improvement gained at ${levelString} level'
		this.statsGained=skillsGained;
	}
	onGainFeature(character: types.Character): types.Character{
		for (let i=0; i<this.statsGained.length; i++){
			let key=this.statsGained[i] as keyof types.BaseStats;
			character.baseStats[key]+=1
		}
		return character;
	}
}
