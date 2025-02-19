const fields = {
  items: ["image", "name", "description", "type", "effect"],
  locations: ["image", "name", "description"],
  bosses: ["image", "name", "description", "location", "healthPoints"],
  weapons: ["image", "name", "description", "category", "weight", "attack", "defence", "requiredAttributes"],
  armors: ["image", "name", "description", "category", "weight", "resistance", "dmgNegation"],
  talismans: ["image", "name", "description", "effect"],
  npcs: ["image", "name", "location", "quote"],
};

export default fields;
