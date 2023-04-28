import { ActionFormData } from "@minecraft/server-ui";
import { comfirmBattle } from "./comfirmUi";

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
  gui.button(
    "Recoger habilidades\n§r§7se limpiaran los §l3§r§7 slots§c!",
    "textures/items/upload"
  );
  gui.show(playerid).then((result) => {
    if (result.canceled) {
      if (
        playerid.hasTag("UsedSlot1") ||
        playerid.hasTag("UsedSlot2") ||
        playerid.hasTag("UsedSlot3")
      ) {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§aDebes recoger tus habiliades para poder salir así o pon ir a la batalla"}]}`
        );
        paladinClass(playerid);
      }
      playerid.runCommandAsync(`scoreboard players set @s uiCooldown 0 `);
      playerid.runCommandAsync(`tag @s remove uiCooldownTag `);
    }

    //pondremos filtro para saber si aprendio o no las habilidades y tenemos que crear los items correspondientes
    if (result.selection === 0) {
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 1 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      playerid.runCommandAsync(`tag @s add UsedSlot1`);
      paladinClass(playerid);

      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag} §r§aes ahora §ePaladin"}]}`
      );
    }
    if (result.selection === 1) {
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §3Warrior"}]}`
      );
      playerid.runCommandAsync(`tag @s add UsedSlot2`);
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 2 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      paladinClass(playerid);
    }
    if (result.selection === 2) {
      playerid.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§b${playerid.nameTag}§r§a es ahora §4Mago"}]}`
      );
      playerid.runCommandAsync(`tag @s add UsedSlot3`);
      playerid.runCommandAsync(
        `replaceitem entity @s slot.hotbar 3 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
      );
      paladinClass(playerid);
    }

    if (result.selection === 3) {
      if (
        playerid.hasTag("UsedSlot1") ||
        playerid.hasTag("UsedSlot2") ||
        playerid.hasTag("UsedSlot3")
      ) {
        comfirmBattle(playerid, "paladinClass");
      } else {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eDebes seleccionar una habilidad disponible"}]}`
        );
        playerid.runCommandAsync(`scoreboard players set @s uiCooldown 0 `);
        playerid.runCommandAsync(`tag @s remove uiCooldownTag `);
      }
    }
    if (result.selection === 4) {
      if (
        !playerid.hasTag("UsedSlot1") &&
        !playerid.hasTag("UsedSlot2") &&
        !playerid.hasTag("UsedSlot3")
      ) {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§aNo hay habilidades para recoger"}]}`
        );
        playerid.runCommandAsync(`scoreboard players set @s uiCooldown 0 `);
        playerid.runCommandAsync(`tag @s remove uiCooldownTag `);
      } else {
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
        playerid.runCommandAsync(`tag @s remove UsedSlot1`);
        playerid.runCommandAsync(`tag @s remove UsedSlot2`);
        playerid.runCommandAsync(`tag @s remove UsedSlot3`);
      }
    }
  });
}
