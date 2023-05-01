import { world } from "@minecraft/server";

import { getScore } from "./utilsMx";
import { selectClass } from "./custom-ui/claseUi";
import { paladinClass } from "./custom-ui/paladinClass/paladinUi";
import { ability_p_uno } from "./custom-ui/paladinClass/p_ability_1";


export const itemUi = () => {
  world.events.beforeItemUse.subscribe((data) => {
    const source = data.source;
    const items = data.item;
    if (items.typeId === "mx:class" && getScore(source, "clase") == 0) {
      selectClass(source);
    }
    if (
      items.typeId === "mx:paladinui" &&
      getScore(source, "clase") == 1 &&
      !source.hasTag("uiCooldownClass")
    ) {
      paladinClass(source);
      source.runCommandAsync(`tag @s add uiCooldownClass`);
    }

    if (
      items.typeId === "mx:warriorui" &&
      getScore(source, "clase") == 2 &&
      !source.hasTag("uiCooldownTag")
    ) {
      warriorClass(source);
      source.runCommandAsync(`tag @s add uiCooldownClass`);
    }

    if (
      items.typeId === "mx:magoui" &&
      getScore(source, "clase") == 3 &&
      !source.hasTag("uiCooldownTag")
    ) {
      magoClass(source);
      source.runCommandAsync(`tag @s add uiCooldownClass`);
    }

    if (
      items.typeId === "mx:necroui" &&
      getScore(source, "clase") == 4 &&
      !source.hasTag("uiCooldownTag")
    ) {
      necroClass(source);
      source.runCommandAsync(`tag @s add uiCooldownClass`);
    }

    if (
      items.typeId === "mx:archerui" &&
      getScore(source, "clase") == 5 &&
      !source.hasTag("uiCooldownTag")
    ) {
      archerClass(source);
      source.runCommandAsync(`tag @s add uiCooldownClass`);
    }
    //
    if (items.typeId === "mx:ability_prime" && source.hasTag("Adminer")) {
      source.runCommandAsync(`scoreboard players set @s clase 0`);
    }
    //
    //
    //
    //
    if (items.typeId === "mx:paladin_001" && !source.hasTag("Cooldown_p_1")) {
      ability_p_uno(source)
      source.runCommandAsync(`scoreboard players add @s cooldown_p_1 0`);
      source.runCommandAsync(`tag @s add Cooldown_p_1`);
    }
    // if (items.typeId === "mx:paladin_002" && !source.hasTag("Cooldown_p_2")) {
    //   //ability_p_do(source);
    //   playerId.runCommandAsync(`scoreboard players add @a cooldown_p_2 0`);
    //   source.runCommandAsync(`tag @s add Cooldown_p_2`);
    // }
    // if (items.typeId === "mx:paladin_003" && !source.hasTag("Cooldown_p_3")) {
    //   //ability_p_tre(source);
    //   playerId.runCommandAsync(`scoreboard players add @a cooldown_p_3 0`);
    //   source.runCommandAsync(`tag @s add Cooldown_p_3`);
    // }
    //
    //
    //
    if (items.typeId === "mx:warrior_001" && !source.hasTag("Cooldown_w_1")) {
      //ability_w_un(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_w_1 0`);
      source.runCommandAsync(`tag @s add Cooldown_w_1`);
    }
    if (items.typeId === "mx:warrior_002" && !source.hasTag("Cooldown_w_2")) {
      //ability_w_do(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_w_2 0`);
      source.runCommandAsync(`tag @s add Cooldown_w_2`);
    }
    if (items.typeId === "mx:warrior_003" && !source.hasTag("Cooldown_w_3")) {
      //ability_w_tre(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_w_3 0`);
      source.runCommandAsync(`tag @s add Cooldown_w_3`);
    }
    //
    //
    //
    if (items.typeId === "mx:mago_001" && !source.hasTag("Cooldown_m_1")) {
      //ability_m_un(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_m_1 0`);
      source.runCommandAsync(`tag @s add Cooldown_m_1`);
    }
    if (items.typeId === "mx:mago_002" && !source.hasTag("Cooldown_m_2")) {
      //ability_m_do(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_m_2 0`);
      source.runCommandAsync(`tag @s add Cooldown_m_2`);
    }
    if (items.typeId === "mx:mago_003" && !source.hasTag("Cooldown_m_3")) {
      //ability_m_tre(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_m_3 0`);
      source.runCommandAsync(`tag @s add Cooldown_m_3`);
    }
    //
    //
    //
    if (items.typeId === "mx:necro_001" && !source.hasTag("Cooldown_n_1")) {
      //ability_n_un(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_n_1 0`);
      source.runCommandAsync(`tag @s add Cooldown_n_1`);
    }
    if (items.typeId === "mx:necro_002" && !source.hasTag("Cooldown_n_2")) {
      //ability_n_do(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_n_2 0`);
      source.runCommandAsync(`tag @s add Cooldown_n_2`);
    }
    if (items.typeId === "mx:necro_003" && !source.hasTag("Cooldown_n_3")) {
      //ability_n_tre(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_n_3 0`);
      source.runCommandAsync(`tag @s add Cooldown_n_3`);
    }
    //
    //
    //
    if (items.typeId === "mx:archer_001" && !source.hasTag("Cooldown_a_1")) {
      //ability_a_un(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_a_1 0`);
      source.runCommandAsync(`tag @s add Cooldown_a_1`);
    }
    if (items.typeId === "mx:archer_002" && !source.hasTag("Cooldown_a_2")) {
      //ability_a_do(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_a_2 0`);
      source.runCommandAsync(`tag @s add Cooldown_a_2`);
    }
    if (items.typeId === "mx:archer_003" && !source.hasTag("Cooldown_a_3")) {
      //ability_a_tre(source);
      playerId.runCommandAsync(`scoreboard players add @a cooldown_a_3 0`);
      source.runCommandAsync(`tag @s add Cooldown_a_3`);
    }

    // if (
    //   items.typeId === "minecraft:ender_pearl" &&
    //   getScore(source, "Dones") == 2
    // ) {
    //   source.runCommandAsync(`give @s ender_pearl `);
    //   source.runCommandAsync(
    //     `effect @p[scores={Dones=2},r=2] night_vision 10 0 true`
    //   );
    //   source.runCommandAsync(
    //     `effect @p[scores={Dones=2},r=2] regeneration 4 2 true`
    //   );
    // }
  });
};
