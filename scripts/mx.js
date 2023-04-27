import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { itemUi } from "./worldUi";
import { getScore } from "./utilsMx";

const overworld = world.getDimension("overworld");
let ticks = 0;
let ticksCombatUi = 0;

system.runInterval(() => {
  let playerCombat;
  ticks++;

  for (let pl of world.getPlayers()) {
    if (pl.hasTag("uiCooldownTag")) {
      playerCombat = pl;
      if (getScore(playerCombat, "uiCooldown") == 60) {
        playerCombat.runCommandAsync(`say se borro el tag`);
        playerCombat.runCommandAsync(`tag @s remove uiCooldownTag`);
        playerCombat.runCommandAsync(`scoreboard players set @s uiCooldown 0`);
      }

      if (getScore(playerCombat, "uiCooldown") >= 0) {
        if (ticks % 20 === 0) {
          playerCombat.runCommandAsync(
            `scoreboard players add @s uiCooldown 1 `
          );
        }
      }
    }
  }
  if (ticks % 1200 === 0) {
    overworld.runCommandAsync(`say un minuto general`);
  }
  let players = world.getPlayers();
  if (playerCombat in players) {
  }

  //   paladin.runCommandAsync(`particle mx:bless ~ ~-2 ~`);
  //   paladin.runCommandAsync(
  //     `playanimation @s animation.armor_stand.entertain_pose m 3`
  //   );
  //   paladin.runCommandAsync(`effect @a regeneration 1 4`);
  //   paladin.runCommandAsync(`effect @a resistance 3 1`); // $score?
  //   ticksPaladin = 0;
});

//itenUi
itemUi();

// Chat
ChatFilter();
