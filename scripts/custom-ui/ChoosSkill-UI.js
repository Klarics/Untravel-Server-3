import {ActionFormData} from "@minecraft/server-ui";

export function selectDon(playerid, arg) {
    const gui = new ActionFormData();
    gui.title("§l§6Choose Skill");
    gui.body(
      "\n  §oEscoge el Don que tu quieres tener\n  Y se parte de los Bendecidos\n  Escoge bien porque es solo una vez"
    );
    gui.button("§bAtlan", "textures/items/prismarine_crystals");
    gui.button("§eMiner", "textures/items/netherite_pickaxe");
    gui.button("§dEnder", "textures/items/ender_eye");
    gui.show(playerid).then((result) => {
      if (result.canceled) {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eTu §ldebes §r§ede seleccionar tu Don"}]}`
        );
      }
      if (result.selection === 0) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 1`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§l es ahora §bAtlantian"}]}`
        );
        //itemid.amount -= 1;
      }
      if (result.selection === 1) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 3`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§l es ahora §aMiner"}]}`
        );
        //itemid.amount -= 1;
      }
      if (result.selection === 2) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 2`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§l es ahora §dEnder"}]}`
        );
        playerid.runCommandAsync(`give @s ender_pearl`);
        //itemid.amount -= 1;
      }
    });
  }