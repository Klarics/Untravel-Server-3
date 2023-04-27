import { world } from "@minecraft/server";

import { getScore } from "./utilsMx";
import { selectClass } from "./custom-ui/claseUi";
import { paladinClass } from "./custom-ui/paladinUi";

export const itemUi = () => {
  world.events.beforeItemUse.subscribe((data) => {
    const source = data.source;
    const items = data.item;
    if (items.typeId === "mx:class" && getScore(source, "clase") == 0) {
      selectClass(source);
    }
    if (items.typeId === "mx:paladinui" && getScore(source, "clase") == 1 && !source.hasTag("uiCooldownTag")) {
      paladinClass(source);
      source.runCommandAsync(`tag @s add uiCooldownTag`)
    }


    if (items.typeId === "mx:warriorui" && getScore(source, "clase") == 2 && !source.hasTag("uiCooldownTag")) {
      warriorClass(source);
      source.runCommandAsync(`tag @s add uiCooldownTag`)
    }


    if (items.typeId === "mx:magoui" && getScore(source, "clase") == 3 && !source.hasTag("uiCooldownTag")) {
      magoClass(source);
      source.runCommandAsync(`tag @s add uiCooldownTag`)
    }


    if (items.typeId === "mx:necroui" && getScore(source, "clase") == 4 && !source.hasTag("uiCooldownTag")) {
      necroClass(source);
      source.runCommandAsync(`tag @s add uiCooldownTag`)
    }


    if (items.typeId === "mx:archerui" && getScore(source, "clase") == 5 && !source.hasTag("uiCooldownTag")) {
      archerClass(source);
      source.runCommandAsync(`tag @s add uiCooldownTag`)
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
