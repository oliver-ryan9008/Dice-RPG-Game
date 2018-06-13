"use script";

function diceSideResults(n){

	let diceRoll = Math.floor(Math.random() * n) + 1;

	return diceRoll;
}


function playerOneAttackTurn(){
	let n = diceSideResults(12);
	if (n == 1){
		document.getElementById("playerOneAttack").innerHTML = "Player one: You do not attack this turn.";
		
	}
	else {
		
		document.getElementById("playerOneAttack").innerHTML = "Player one: Your sword attempts for " + (n * 2) + " damage.";
	}

}

function playerOneDefendTurn(){
	let n = diceSideResults(10);
	if (n == 1){
		document.getElementById("playerOneDefend").innerHTML = "Player one: If your opponent attempted to attack this turn and you were unable to dodge, you take a critical hit for double damage.";
		
	}
	else if (n <= 9 && n > 2){
		document.getElementById("playerOneDefend").innerHTML = "Player one: Your armor attempts to block " + (n * 2) + " damage.";
		
	}
	else {
		document.getElementById("playerOneDefend").innerHTML = "Player one: You do not attempt to block.";
		
	}

}

function playerOneDodgeTurn(){
	let n = diceSideResults(9);
	if (n == 1){
		document.getElementById("playerOneDodge").innerHTML = "Player one: You dodge your opponent's attack and take no damage this turn.";
		
	}
	else {
		document.getElementById("playerOneDodge").innerHTML = "Player one: You are unable to dodge and take a direct hit.";
		
	}

}

function playerOneRegenerateHealth(){
	let n = diceSideResults(4);
	if (n >= 3) {
		document.getElementById("playerOneRegenerate").innerHTML = "Player one: You gain " + (n-2) + " health this turn!";
		
	}
	else {
		document.getElementById("playerOneRegenerate").innerHTML = "Player one: You gain no health this turn.";
		
	}

}

function playerOneAttemptToDisengage(){
	let n = diceSideResults(50);
	if (n <= 3){
		document.getElementById("playerOneDisengage").innerHTML = "Player one: You have successfully disengaged and ran from the fight. You win, but your mother is a hamster and your father smells of elderberries.";
		alert("Brave Sir Robin ran away. Bravely ran away away. When danger reared it's ugly head, he bravely turned his tail and fled. Yes, brave Sir Robin turned about and gallantly he chickened out. Swiftly taking to his feet, he beat a very brave retreat. Bravest of the brave, Sir Robin!");
		return true;
	}
	else {
		document.getElementById("playerOneDisengage").innerHTML = "Player one: Your attempt to flee from battle has failed. Return to the fight, you imbecile.";
		
		return false;
	}

}

function playerOneWeaponModifier(){
	let n = diceSideResults(8);
	if (n <= 2){
		document.getElementById("playerOneWeapon").innerHTML = "Player one: Your weapon has malfunctioned. Your damage dealt is reduced by 2.";
		
	}

	else if (n >= 6){
		document.getElementById("playerOneWeapon").innerHTML = "Player one: Your weapon is very effective! Add 2 to your damage dealt.";
		
	}

	else {
		document.getElementById("playerOneWeapon").innerHTML = "Player one: Your trusty weapon has performed as expected.";
		
	}

}

function playerTwoAttackTurn(){
	let n = diceSideResults(12);
	if (n == 1){
		document.getElementById("playerTwoAttack").innerHTML = "Player two: You do not attack this turn.";
		
	}
	else {
		document.getElementById("playerTwoAttack").innerHTML = "Player two: Your sword attempts for " + (n * 2) + " damage.";
		
	}

}

function playerTwoDefendTurn(){
	let n = diceSideResults(10);
	if (n == 1){
		document.getElementById("playerTwoDefend").innerHTML = "Player two: If your opponent attempted to attack this turn and you were unable to dodge, you take a critical hit for double damage.";
		
	}
	else if (n <= 9 && n > 2){
		document.getElementById("playerTwoDefend").innerHTML = "Player two: Your armor attempts to block " + (n * 2) + " damage.";
		
	}
	else {
		document.getElementById("playerTwoDefend").innerHTML = "Player two: You do not attempt to block.";
		
	}

}

function playerTwoDodgeTurn(){
	let n = diceSideResults(9);
	if (n == 1){
		document.getElementById("playerTwoDodge").innerHTML = "Player two: You dodge your opponent's attack and take no damage this turn.";
		
	}
	else {
		document.getElementById("playerTwoDodge").innerHTML = "Player two: You are unable to dodge and take a direct hit.";
		
	}

}

function playerTwoRegenerateHealth(){
	let n = diceSideResults(4);
	if (n >= 3) {
		document.getElementById("playerTwoRegenerate").innerHTML = "Player two: You gain " + (n-2) + " health this turn!";
		
	}
	else {
		document.getElementById("playerTwoRegenerate").innerHTML = "Player two: You gain no health this turn.";
		
	}

}

function playerTwoAttemptToDisengage(){
	let n = diceSideResults(50);
	if (n <= 3){document.getElementById("playerTwoDisengage").innerHTML = "Player two: You have successfully disengaged and ran from the fight. You win, but your mother is a hamster and your father smells of elderberries.";
		alert("Brave Sir Robin ran away. Bravely ran away away. When danger reared it's ugly head, he bravely turned his tail and fled. Yes, brave Sir Robin turned about and gallantly he chickened out. Swiftly taking to his feet, he beat a very brave retreat. Bravest of the brave, Sir Robin!")
		return true;
	}
	else {
		{document.getElementById("playerTwoDisengage").innerHTML = "Player two: Your attempt to flee from battle has failed. Return to the fight, you imbecile.";
		
		return false;
	}
}
}



function playerTwoWeaponModifier(){
	let n = diceSideResults(8);
	if (n <= 2){
		document.getElementById("playerTwoWeapon").innerHTML = "Player two: Your weapon has malfunctioned. Your damage dealt is reduced by 2.";
		
		}
		

	else if (n >= 6){
		document.getElementById("playerTwoWeapon").innerHTML = "Player two: Your weapon is very effective! Add 2 to your damage dealt.";
		
		}
	

	else {
		{document.getElementById("playerTwoWeapon").innerHTML = "Player two: Your trusty weapon has performed as expected.";
		
		}
	}
}
