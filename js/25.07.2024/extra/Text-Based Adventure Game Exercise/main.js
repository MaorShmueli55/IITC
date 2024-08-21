const player ={
    name: "TRAMP",
    score: 100,
    health: 65,
    level: 1,
};


function restart (player , newName) {
    player.name = newName;
    player.score = 0;
    player.health = 100;
    player.level = 1;
}

