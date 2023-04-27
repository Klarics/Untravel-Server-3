import { ActionFormData } from "@minecraft/server-ui";

export function paladinClass(playerid) {
  const gui = new ActionFormData();
  gui.title("§l§ePaladín");
  gui.body(
    "\nTu deber es dar soporte a tu equipo\n§bRecuerda aprender las habilidades para poder usarlas."
  );
  gui.button("§6habiliada 1\n§r§71er slot", "textures/items/barriergray");
  gui.button("§6habiliada 2\n§r§72do slot", "textures/items/barriergray");
  gui.button("§6habiliada 3\n§r§73er slot", "textures/items/barriergray");
  gui.button("§4A la Batalla", "textures/items/attack");
  gui.button("Recoger habilidades\n§r§7se limpiaran los 3 slots", "textures/items/upload");
  gui.show(playerid).then((result) => {
    if (result.canceled) {
      playerid.runCommandAsync(`scoreboard players set @s uiCooldown 0 `);
      playerid.runCommandAsync(`tag @s remove uiCooldownTag `);
      // hay que poner restriccion aqui
    }


//pondremos filtro para saber si aprendio o no las habilidades
    if (result.selection === 0) {
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 1 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      paladinClass(playerid);

      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§aes ahora §ePaladin"}]}`
      );
    }
    if (result.selection === 1) {
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §3Warrior"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 2 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      paladinClass(playerid);
    }
    if (result.selection === 2) {
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §4Mago"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 3 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      paladinClass(playerid);
      //se debe ir a la batalla solos si esta seguro que podra pelear asi
    }




    if (result.selection === 3) {
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§aEn batalla. Espera 5 minutos para cambiar habilidades"}]}`
      );
    }
    if (result.selection === 4) {
      playerid.runCommandAsync(
        `tellraw @s {"rawtext":[{"text":"§aTu inventario esta disponible"}]}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 1 air 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 2 air 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 3 air 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      playerid.runCommandAsync(`scoreboard players set @s uiCooldown 0 `);
      playerid.runCommandAsync(`tag @s remove uiCooldownTag `);
    }
  });
}
