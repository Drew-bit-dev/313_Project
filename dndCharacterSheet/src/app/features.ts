import * as types from './types'

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
