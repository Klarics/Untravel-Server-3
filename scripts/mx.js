import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { selectDon } from "./custom-ui/ChoosSkill-UI";
import { getSkill } from "./utilsMx";

const overworld = world.getDimension("overworld");
system.runInterval(() => {
  // world.sendMessage("Hello World");   // funciona 1.19.73****** como un say
  //or run a command in overworld dimension
  //using native API methods (such as world.sendMessage) are recommended whenever possible.
  overworld.runCommandAsync("function server/active"); //funciona 1.19.73 pero dice motor de script
});

// Item UI
world.events.beforeItemUse.subscribe((data) => {
  const source = data.source;
  const items = data.item;
  if (items.typeId === "minecraft:dirt" && getSkill(source, "Dones") == 0) {
    selectDon(source);
  }
  if (
    items.typeId === "minecraft:ender_pearl" &&
    getSkill(source, "Dones") == 2
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

// Chat





ChatFilter()