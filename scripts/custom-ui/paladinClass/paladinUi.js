import { ActionFormData } from "@minecraft/server-ui";
import { comfirmBattle } from "../comfirmUi";

export function paladinClass(playerid) {
  const gui = new ActionFormData();
  gui.title("§l§ePaladín");
  gui.body(
    "\nTu deber es dar soporte a tu equipo\n§bRecuerda aprender las habilidades para poder usarlas."
  );
  gui.button("§6Velocidad\n§r§71er slot", "textures/items/barriergray");
  gui.button("§6Fuerza\n§r§72do slot", "textures/items/barriergray");
  gui.button("§6Bendicion\n§r§73er slot", "textures/items/barriergray");
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
      playerid.runCommandAsync(`tag @s remove uiCooldownClass`);
    }

    if (result.selection === 0) {
      if (playerid.hasTag("p_learned_1")) {
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 1 mx:paladin_001 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot1`);
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eHabilidad §bVelocidad §eactivada"}]}`
        );
        //playsound
        paladinClass(playerid);
      } else {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§cHabilidad §bVelocidad §cno aprendida"}]}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot1`);
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 1 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        //playsound
        paladinClass(playerid);
      }
    }
    if (result.selection === 1) {
      if (playerid.hasTag("p_learned_2")) {
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 2 mx:paladin_002 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot2`);
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eHabilidad §bFuerza §eactivada"}]}`
        );
        //playsound
        paladinClass(playerid);
      } else {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§cHabilidad §bFuerza §cno aprendida"}]}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot2`);
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 2 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        //playsound
        paladinClass(playerid);
      }
    }
    if (result.selection === 2) {
      if (playerid.hasTag("p_learned_3")) {
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 3 mx:paladin_003 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot3`);
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§eHabilidad §bBendicion §eactivada"}]}`
        );
        //playsound
        paladinClass(playerid);
      } else {
        playerid.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§cHabilidad §bBendicion §cno aprendida"}]}`
        );
        playerid.runCommandAsync(`tag @s add UsedSlot3`);
        playerid.runCommandAsync(
          `replaceitem entity @s slot.hotbar 3 mx:empty_marco 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}`
        );
        //playsound
        paladinClass(playerid);
      }
    }
    //
    //
    //
    //

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
        playerid.runCommandAsync(`tag @s remove uiCooldownClass`);
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
        playerid.runCommandAsync(`tag @s remove uiCooldownClass`);
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
        playerid.runCommandAsync(`tag @s remove uiCooldownClass`);
        playerid.runCommandAsync(`tag @s remove UsedSlot1`);
        playerid.runCommandAsync(`tag @s remove UsedSlot2`);
        playerid.runCommandAsync(`tag @s remove UsedSlot3`);
      }
    }
  });
}
