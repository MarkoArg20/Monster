//constanti ne se menuvaat, kolku e attack value na player/monster
const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14 
const STRONG_ATTACK_VALUE = 17

//variabli se menuvaat, zivot na player i monster
let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

//funkcija od vendor kolku da bide value na zivotot na monster i player
adjustHealthBars(chosenMaxLife)

function attackMonster(mode) {
    let maxDamage;
    if(mode === 'ATTACK') {
     maxDamage = ATTACK_VALUE
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE
    }
    const damage = dealMonsterDamage(maxDamage) 
currentMonsterHealth -= damage
const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
currentPlayerHealth -= playerDamage
// if statements sto da ispecati ako se potrosi zivotot na monster/player
if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert ('You won!')
} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert ('You lost!')
} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Its draw!')
}
}

//funkcija za eventListener attack na monster/player
function attackHandler() {
attackMonster('ATTACK')
}

function strongAttackHandler () {
    attackMonster('STRONG_ATTACK')
}

//Event listener
attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
