import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { itemUi } from "./worldUi";

const overworld = world.getDimension("overworld");
let ticks = 0
let ticksPaladin = 0
system.runInterval(() => {
  let paladin
  ticks++
  
  for (let pl of world.getPlayers()) {
    
    if (
      pl.hasTag("paladin_pasive")
    ) {
      paladin = pl;
    }
  } 
  ticksPaladin++
  if (ticksPaladin % 1200 === 0) {
    paladin.runCommandAsync(`particle mx:bless ~ ~-2 ~`)
    paladin.runCommandAsync(`playanimation @s animation.armor_stand.entertain_pose m 3`)
    paladin.runCommandAsync(`effect @a regeneration 1 4`)
    paladin.runCommandAsync(`effect @a resistance 3 1`) // $score?
    ticksPaladin = 0
        
  }
});

//itenUi
itemUi()

// Chat
ChatFilter()