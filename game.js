var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
if (playerHealth > 0) {
    console.log("Your player is still alive!");}
var playerAttack = 10;
if (playerHealth === 0) {
    console.log("This will not run.");
}
else {
    console.log("This will run instead.");
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function() {
    window.alert("welcome to Robot Gladiators");
};
enemyHealth = enemyHealth - playerAttack;
console.log(
playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
if (enemyHealth <= 0) {
    window.alert (enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has" + enemyHealth + " health left.");
}

playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " atacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining.");
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + "health left.");
}

}
fight();