import {ActionFormData} from "@minecraft/server-ui";

export function selectDon(playerid) {
    const gui = new ActionFormData();
    gui.title("§l§6Choose Skill");
    gui.body(
      "\n  §oSelect the Skill that you want to have\n  And be part of a Faction\n  This will be forever once"
    );
    gui.button("§bAtlan", "textures/items/prismarine_crystals");
    gui.button("§eMiner", "textures/items/netherite_pickaxe");
    gui.button("§dEnder", "textures/items/ender_eye");
    gui.show(playerid).then((result) => {
      if (result.canceled) {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eYou §lshoud §r§eto select a Skill"}]}`
        );
      }
      if (result.selection === 0) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 1`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§l are now §bAtlantian"}]}`
        );
        //itemid.amount -= 1;
      }
      if (result.selection === 1) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 3`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§l are now §aMiner"}]}`
        );
        //itemid.amount -= 1;
      }
      if (result.selection === 2) {
        playerid.runCommandAsync(`scoreboard players set @s Dones 2`);
        playerid.runCommandAsync(
          `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§l are now §dEnder"}]}`
        );
        playerid.runCommandAsync(`give @s ender_pearl`);
        //itemid.amount -= 1;
      }
    });
  }