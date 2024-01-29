class GameClass {
    constructor(name, hitDie, primaryAbility, primarySave, damage, critThresh, critMult, armorClass) {
        this.name = name;
        this.hitDie = hitDie;
        this.primaryAbility = primaryAbility;
        this.primarySave = primarySave;
        this.damage = damage;
        this.critThresh = critThresh;
        this.critMult = critMult;
        this.armorClass = armorClass;
    }
}

const CLASSES = {
    warrior: new GameClass("warrior", 10, "strength", "fortitude", 10, 19, 2, 15),
    bard: new GameClass("bard", 6, "personality", "will", 6, 20, 1.5, 12),
    wizard: new GameClass("wizard", 4, "intelligence", "will", 4, 20, 1, 11),
    thief: new GameClass("thief", 8, "agility", "reflex", 8, 19, 3, 13),
    halfling: new GameClass("halfling", 6, "luck", "reflex", 6, 18, 2, 13),
    dwarf: new GameClass("dwarf", 12, "stamina", "fortitude", 8, 19, 2, 15)
};



const BASE_STATS = {
    strength: {
        score: 10,
        modifier: 0
    },
    agility: {
        score: 10,
        modifier: 0
    },
    stamina: {
        score: 10,
        modifier: 0
    },
    personality: {
        score: 10,
        modifier: 0
    },
    intelligence: {
        score: 10,
        modifier: 0
    },
    luck: {
        score: 10,
        modifier: 0
    }
};

const ADJECTIVES = ["Mystical", "Enchanted", "Ethereal", "Whispering", "Radiant", "Celestial", "Gilded", "Pristine", "Sapphire", "Astral"];
const NOUNS = ["Dragon", "Elf", "Phoenix", "Fairy", "Mermaid", "Griffin"];



export { CLASSES, BASE_STATS, ADJECTIVES, NOUNS};