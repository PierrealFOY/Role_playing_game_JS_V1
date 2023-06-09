

function getDiceRollArray(diceCount){
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++){
        newDiceRolls.push(Math.floor(Math.random()*6) +1)
    }
    return newDiceRolls
}

getDiceRollArray(3)



// Hero
const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "../images/gandalf.jpg",
    health: 60,
    diceRoll: [3, 1, 4],
    diceCount: 3,
}

// Orc // 
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "../images/orc.jpg",
    health: 10,
    diceRoll: [2],
    diceCount: 1,
}

//
function renderCharacter(data) {
    const { elementId, name, avatar, health, diceRoll, diceCount } = data;
    // function .map returns a array for each element of the diceRoll array 
    // then we isnrert it in the class dice
    const diceHtml = diceRoll.map(function(num) {
        return `<div class="dice">${num}</div>`
        // the .join at the end is used to remove the comas that were there before
    }).join("");

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);