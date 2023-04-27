import { world } from "@minecraft/server";

import { getScore } from "./utilsMx";
import { selectClass } from "./custom-ui/claseUi";


export const itemUi = () => {
  world.events.beforeItemUse.subscribe((data) => {
    const source = data.source;
    const items = data.item;
    if (items.typeId === "mx:class" && getScore(source, "clase") == 0) {
      selectClass(source);
    }
    if (items.typeId === "mx:paladinui" && getScore(source, "clase") == 1) {
        selectClass(source);
      }
    if (
      items.typeId === "minecraft:ender_pearl" &&
      getScore(source, "Dones") == 2
    ) {
      source.runCommandAsync(`give @s ender_pearl `);
      source.runCommandAsync(
        `effect @p[scores={Dones=2},r=2] night_vision 10 0 true`
      );
      source.runCommandAsync(
        `effect @p[scores={Dones=2},r=2] regeneration 4 2 true`
      );
    }
  });
};
