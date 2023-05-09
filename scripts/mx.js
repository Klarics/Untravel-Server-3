import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { itemUi } from "./worldUi";
import { getScore } from "./utilsMx";
import { absorption, cooldownClassfunction, cooldown_p_1, cooldown_p_2, resistance, speed } from "./cooldowns";

const overworld = world.getDimension("overworld");
let ticks = 0;
let ticksCombatUi = 0;




system.runInterval(() => {
  
  ticks++;
  cooldownClassfunction(ticks)
  cooldown_p_1(ticks)
  cooldown_p_2(ticks)
  speed()
  resistance()
  absorption()
  
  if (ticks % 1200 === 0) {
    overworld.runCommandAsync(`say un minuto general`);
  }
 
});

//itenUi
itemUi();

// Chat
ChatFilter();
