const adjectives = [
    "Super", "The Incredible", "Captain", "Mighty", "Doctor",  
    "Professor", "Dark", "The Amazing", "The Invincible", "Masked",  
    "The Unstoppable", "Ultra", "Mega", "Infernal", "Galactic",  
    "The Fabulous", "Bouncy", "Wacky", "Electric", "Zany",  
    "Daring", "The Fantastic", "Glowing", "Jolly", "Turbo",  
    "The Dazzling", "The Fearless", "Whirlwind", "The Bubbly", "Hyper"
  ];

const names = [
    "Blaze", "Shadow", "Titan", "Phantom", "Thunder",  
    "Vortex", "Cyclone", "Specter", "Nova", "Striker",  
    "Guardian", "Warp", "Onyx", "Eclipse", "Fang",  
    "Bubbles", "Zap", "Fluff", "Goose", "Doodle",  
    "Boom", "Snappy", "Whiz", "Tater", "Waffles",  
    "Sparkle", "Gizmo", "Peppy", "Scooter", "Tornado"
  ];

  const origins = [
    "from the Void", "of the Underworld", "from Mars", "of the Cosmos",  
    "from the Mystic Realm", "of Gotham", "from Atlantis", "of the Shadow Lands",  
    "from an Alternate Dimension", "of the Forgotten City",  
    "from the Neon Future", "of the Eternal Forest", "from the Cyber Realm",  
    "of the Celestial Order", "from the Quantum Rift",  
    "from the Backyard", "of the Cookie Kingdom", "from Outer Suburbia",  
    "of the Magical Playground", "from the Secret Lair in the Attic",  
    "of the Ice Cream Planet", "from Grandma’s Basement", "of the Wacky Laboratory",  
    "from the Disco Galaxy", "of the Unfinished Puzzle", "from the Land of Lost Socks",  
    "of the Friendly Neighborhood", "from the Bubblegum Dimension",  
    "of the Pizzaverse", "from the Legendary Arcade"
  ];
  
// Reference arrays
//Loop through each and use Math.Random() on the indexes of each array
// Push it into a new variable that creates the message
function randomMessage () {
    
       let randomIndex = Math.floor(Math.random()*30)

        let currAdjective = adjectives[1]
        let currName = names [1]
        let currOrigins = origins[1]

        return (`You created ${currAdjective} ${currName} ${currOrigins}!`)
     
    }

console.log(randomMessage())