import { ActionFormData } from "@minecraft/server-ui";

export function selectClass(playerid) {
  const gui = new ActionFormData();
  gui.title("§l§dEscoge tu clase");
  gui.body(
    "\n§aCada clase tiene hasta 4 habilidades que tendras que aprender\nEscoge bien..."
  );
  gui.button("§ePaladin\n§r§7suport", "textures/items/totem");
  gui.button("§3Warrior\n§r§7tanque", "textures/items/diamond_sword");
  gui.button("§4Mago\n§r§7daño", "textures/items/campfire");
  gui.button("§5Necromancer\n§r§7invocador", "textures/items/rotten_flesh");
  gui.button("§bArcher\n§r§7dps", "textures/items/bow_pulling_2");
  gui.show(playerid).then((result) => {
    if (result.canceled) {
      playerid.runCommandAsync(
        `tellraw @s {"rawtext":[{"text":"§eTu §ldebes §r§ede seleccionar tu Don"}]}`
      );
    }
    if (result.selection === 0) {
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 0 mx:paladinui 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      playerid.runCommandAsync(`scoreboard players set @s clase 1`);
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§aes ahora §ePaladin"}]}`
      );
    }
    if (result.selection === 1) {
      playerid.runCommandAsync(`scoreboard players set @s clase 2`);
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §3Warrior"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 0 mx:warriorui 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
    if (result.selection === 2) {
      playerid.runCommandAsync(`scoreboard players set @s clase 3`);
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §4Mago"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 0 mx:magoui 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
    if (result.selection === 3) {
      playerid.runCommandAsync(`scoreboard players set @s clase 4`);
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §5Necromancer"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 0 mx:necroui 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
    if (result.selection === 4) {
      playerid.runCommandAsync(`scoreboard players set @s clase 5`);
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §bArcher"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 0 mx:archerui 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
    }
  });
}
