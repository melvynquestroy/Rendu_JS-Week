console.log("BLYAAAAAAAAAAAAAAAAAAT");

const menuIcon = document.getElementById("menuIconClass");
const menuContainer = document.getElementById("dropdownMenuClass");
const darkMode = document.getElementById("darkToggleClass");

menuIcon.onclick = function () {
    if (menuContainer.style.display === "flex") {
        menuContainer.style.display = "none";
    } else {
        menuContainer.style.display = "flex";
    }
};

document.onclick = function (event) {
    const clickedInsideMenu = menuContainer.contains(event.target);
    const clickedIcon = menuIcon.contains(event.target);

    if (!clickedInsideMenu && !clickedIcon) {
        menuContainer.style.display = "none";
    }
};

darkMode.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkMode.textContent = "Dark mode";
    } else {
        darkMode.textContent = "Light mode";
    }
};

// FIGHTING SYSTEM 

let character1 = {
    forname: "Mohamed Amra",
    hp: 30,
    attack: 6,
    precision: 0.7
};

let character2 = {
    forname: "Nicolas Sarkozy",
    hp: 30,
    attack: 5,
    precision: 0.6
};

function checkPrecision(character) {
    let random = Math.random();
    return random < character.precision;
}

function attack(attacker, defender) {
    if (checkPrecision(attacker)) {
        defender.hp -= attacker.attack;
        console.log(attacker.forname, "attaque", defender.forname, "et lui inflige", attacker.attack, "dégâts.");
        console.log("Il ne reste plus que", defender.hp, "hp à", defender.forname, ".");
    } else {
        console.log(attacker.forname, "rate son attaque contre", defender.forname, "...");
    }
}

// debut du combat
console.log(character1.forname, "(", character1.hp, "hp ) VS", character2.forname,"(", character2.hp, "hp )")

while (character1.hp > 0 && character2.hp > 0) {
    attack(character1, character2);
    if (character2.hp <= 0) {
        break;
    }
    attack(character2, character1);
}

if (character1.hp <= 0) {
    console.log(character2.forname, "a gagné!");
} else {
    console.log(character1.forname, "a gagné!");
}