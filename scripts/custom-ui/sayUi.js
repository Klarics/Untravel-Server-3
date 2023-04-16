import {ActionFormData} from "@minecraft/server-ui";

export function sayUi(playerid) {
    const gui = new ActionFormData();
    gui.title("");
    gui.body(
      "\n  §oEscoge el Don que tu quieres tener\n  Y se parte de los Bendecidos\n  Escoge bien porque es solo una vez"
    );
    gui.button("§bAtlan");
    gui.button("§eMiner");


    gui.show(playerid).then((result) => {
      if (result.canceled) {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eNo puedes ignorar me para siempre"}]}`
        );
      }
      if (result.selection === 0) {
        //playerid.runCommandAsync(`scoreboard players set @s Dones 1`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§l es ahora §bAtlantian"}]}`
        );
        //itemid.amount -= 1;
      }
      if (result.selection === 1) {
        //playerid.runCommandAsync(`scoreboard players set @s Dones 3`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§l es ahora §aMiner"}]}`
        );
        //itemid.amount -= 1;
      }
      
    });
  }