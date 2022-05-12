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

export class uncannyDodge implements types.Feature {
	name="Uncanny Dodge";
	description="When an attacker that you can see hits you with an attack, \
	you can use your reaction to halve the attack's damage against you";
	onGainFeature(character: types.Character): types.Character {
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

export class evasion implements types.Feature {
	name="Evasion";
	description="You can nimbly dodge out of the way of certain area effects, \
	such as a red dragon's fiery breath or an Ice Storm spell. \
	When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, \
	you instead take no damage if you succeed on the saving throw, and only half damage if you fail.";
	onGainFeature(character: types.Character): types.Character {
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
export class reliableTalent implements types.Feature {
	name="Reliable Talent";
	description="You have refined your chosen skills until they approach perfection. \
	Whenever you make an ability check that lets you add your proficiency bonus, \
	you can treat a d20 roll of 9 or lower as a 10.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class blindSense implements types.Feature {
	name="Blindsense";
	description="If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class slipperyMind implements types.Feature {
	name="Slippery Mind";
	description="You have acquired greater mental strength. You gain proficiency in Wisdom saving throws.";
	onGainFeature(character: types.Character): types.Character {
		character.proficiencies.wisdom=true;
		return character;
	}
}

export class elusive implements types.Feature {
	name="Elusive";
	description="You are so evasive that attackers rarely gain the upper hand against you. \
	No attack roll has advantage against you while you aren't incapacitated.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class strokeOfLuck implements types.Feature{
	name = "Stroke of Luck";
	description = "You have an uncanny knack for succeeding when you need to. \
	If your attack misses a target within range, you can turn the miss into a hit. \
	Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. \
	Once you use this feature, you can't use it again until you finish a short or long rest.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

/* -------- ASSASSIN SUBCLASS FEATURES -------- */

export class assassinBonusProficiencies implements types.Feature {
	name="Bonus Proficiencies";
	description="When you choose this archetype, \
	you gain proficiency with the disguise kit and the poisoner's kit.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class assassinate implements types.Feature {
	name="Assassinate";
	description="You are at your deadliest when you get the drop on your enemies. \
	You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. \
	In addition, any hit you score against a creature that is surprised is a critical hit.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class infiltrationExpertise implements types.Feature {
	name="Infiltration Expertise";
	description="You can unfailingly create false identities for yourself. \
	You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. \
	You can't establish an identity that belongs to someone else. \
	For example, you might acquire appropriate clothing, letters of introduction, and official- \
	looking certification to establish yourself as a member of a trading house from a remote city \
	so you can insinuate yourself into the company of other wealthy merchants. \
	Thereafter, if you adopt the new identity as a disguise, \
	other creatures believe you to be that person until given an obvious reason not to.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class imposter implements types.Feature {
	name="Imposter";
	description="You gain the ability to unerringly mimic another person's speech, writing, and behavior. \
	You must spend at least three hours studying these three components of the person's behavior, listening to speech, \
	examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer. \
	If a wary creature suspects something is amiss, \
	you have advantage on any Charisma (Deception) check you make to avoid detection.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class deathStrike implements types.Feature {
	name="Deathstrike";
	description="You become a master of instant death. When you attack and hit a creature that is surprised, \
	it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). \
	On a failed save, double the damage of your attack against the creature.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

/* -------- THIEF SUBCLASS FEATURES -------- */

export class fastHands implements types.Feature {
	name="Fast Hands";
	description="You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, \
	use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class secondStoryWork implements types.Feature {
	name="Second-Story Work";
	description="You gain the ability to climb faster than normal; climbing no longer costs you extra movement. \
	In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class supremeSneak implements types.Feature {
	name="Supreme Sneak";
	description="You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class useMagicDevice implements types.Feature {
	name="Use Magic Device";
	description="You have learned enough about the workings of magic that you can improvise the use of items \
	even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}

export class thiefsReflexes implements types.Feature {
	name="Thief's Reflexes";
	description="You have become adept at laying ambushes and quickly escaping danger. \
	You can take two turns during the first round of any combat. \
	You take your first turn at your normal initiative and your second turn at your initiative minus 10. \
	You can't use this feature when you are surprised.";
	onGainFeature(character: types.Character): types.Character {
		return character;
	}
}
