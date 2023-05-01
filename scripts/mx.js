import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { itemUi } from "./worldUi";
import { getScore } from "./utilsMx";
import { cooldownClassfunction, cooldown_p_1 } from "./cooldowns";

const overworld = world.getDimension("overworld");
let ticks = 0;
let ticksCombatUi = 0;




system.runInterval(() => {
  
  ticks++;
  cooldownClassfunction(ticks)
  cooldown_p_1(ticks)
  
  if (ticks % 1200 === 0) {
    overworld.runCommandAsync(`say un minuto general`);
  }
 
});

//itenUi
itemUi();

// Chat
ChatFilter();
