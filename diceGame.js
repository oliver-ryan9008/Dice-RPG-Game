"use script";

function diceSideResults(n){

	let diceRoll = Math.floor(Math.random() * n) + 1;

	return diceRoll;
}

function playerOneAttackTurn(){
	let n = diceSideResults(20);
	if (n == 1){
		console.log("Player one: You do not attack this turn.");
	}
	else {
		console.log("Player one: Your attack attempts for " + n + " damage.")
	}

}

function playerOneDefendTurn(){
	let n = diceSideResults(6);
	if (n == 1){
		console.log("Player one: If your opponent attempted to attack this turn and you were unable to dodge, you take a critical hit for double damage.");
	}
	else if (n >= 5){
		console.log("Player one: Your defense attempts to block " + (n * 2) + " damage.")
	}
	else {
		console.log("Player one: You do not attempt to block.")
	}

}

function playerOneDodgeTurn(){
	let n = diceSideResults(2);
	if (n == 1){
		console.log("Player one: You dodge your opponent's attack and take no damage this turn.");
	}
	else {
		console.log("Player one: You are unable to dodge and take a direct hit.")
	}

}

function playerOneRegenerateHealth(){
	let n = diceSideResults(4);
	if (n >= 3) {
		console.log("Player one: You gain " + (n-2) + " health this turn!");
	}
	else {
		console.log("Player one: You gain no health this turn.")
	}

}

function playerOneAttemptToDisengage(){
	let n = diceSideResults(12);
	if (n == 6){
		console.log("Player one: You have successfully disengaged and ran from the fight. You lose, but you'll live to fight another day.")
	}
	else {
		console.log("Player one: Your attempt to flee from battle has failed. Return to the fight, you imbecile.")
	}

}

function playerOneWeaponModifier(){
	let n = diceSideResults(10);
	if (n <= 2){
		console.log("Player one: Your weapon has malfunctioned. Your damage dealt is reduced by 2.")
	}

	else if (n >= 9){
		console.log("Player one: Your weapon is very effective! Add 2 to your damage dealt.")
	}

	else {
		console.log("Player one: Your trusty weapon has performed as expected.")
	}

}

function playerTwoAttackTurn(){
	let n = diceSideResults(20);
	if (n == 1){
		console.log("Player two: You do not attack this turn.");
	}
	else {
		console.log("Player two: Your attack attempts for " + n + " damage.")
	}

}

function playerTwoDefendTurn(){
	let n = diceSideResults(6);
	if (n == 1){
		console.log("Player two: If your opponent attempted to attack this turn and you were unable to dodge, you take a critical hit for double damage.");
	}
	else if (n >= 5){
		console.log("Player two: Your defense attempts to block " + (n * 2) + " damage.")
	}
	else {
		console.log("Player two: You do not attempt to block.")
	}

}

function playerTwoDodgeTurn(){
	let n = diceSideResults(2);
	if (n == 1){
		console.log("Player two: You dodge your opponent's attack and take no damage this turn.");
	}
	else {
		console.log("Player two: You are unable to dodge and take a direct hit.")
	}

}

function playerTwoRegenerateHealth(){
	let n = diceSideResults(4);
	if (n >= 3) {
		console.log("Player two: You gain " + (n-2) + " health this turn!");
	}
	else {
		console.log("Player two: You gain no health this turn.")
	}

}

function playerTwoAttemptToDisengage(){
	let n = diceSideResults(12);
	if (n == 6){
		console.log("Player two: You have successfully disengaged and ran from the fight. You lose, but you'll live to fight another day.")
	}
	else {
		console.log("Player two: Your attempt to flee from battle has failed. Return to the fight, you imbecile.")
	}

}

function playerTwoWeaponModifier(){
	let n = diceSideResults(10);
	if (n <= 2){
		console.log("Player two: Your weapon has malfunctioned. Your damage dealt is reduced by 2.")
	}

	else if (n >= 9){
		console.log("Player two: Your weapon is very effective! Add 2 to your damage dealt.")
	}

	else {
		console.log("Player two: Your trusty weapon has performed as expected.")
	}

}

// function alertForLifeTotal(){
// 	alert("Player One Health total: 40.\nPlayer Two health total: 40.")
// }

// function playerOneStartingHealth(){
// 	let n = (diceSideResults(10) * 4);
// 	return n;
// }

// function displayMessage(message){
//   console.log(message);
// }

function runGame(){
	// alertForLifeTotal();
	playerOneAttackTurn();
	playerTwoAttackTurn();
	playerOneDefendTurn();
	playerTwoDefendTurn();
	playerOneDodgeTurn();
	playerTwoDodgeTurn();
	// let playerOneHealth = playerOneStartingHealth();
	// displayMessage("Your health is " + playerOneHealth);
	playerOneRegenerateHealth();
	playerTwoRegenerateHealth();
	playerOneAttemptToDisengage();
	playerTwoAttemptToDisengage();
	playerOneWeaponModifier();
	playerTwoWeaponModifier();
}




runGame();