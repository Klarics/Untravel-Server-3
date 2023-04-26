import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { getScore } from "./utilsMx";
import { selectClass } from "./custom-ui/claseUi";

const overworld = world.getDimension("overworld");
let ticks = 0
let ticksPaladin = 0
system.runInterval(() => {
  let paladin
  ticks++
  
  for (let pl of world.getPlayers()) {
    
    if (
      pl.hasTag("paladin_pasive")
    ) {
      paladin = pl;
    }
  } 
  ticksPaladin++
  if (ticksPaladin % 1200 === 0) {
    paladin.runCommandAsync(`particle mx:bless ~ ~-2 ~`)
    paladin.runCommandAsync(`playanimation @s animation.armor_stand.entertain_pose m 3`)
    paladin.runCommandAsync(`effect @a regeneration 1 4`)
    paladin.runCommandAsync(`effect @a resistance 3 1`) // $score?
    ticksPaladin = 0
        
  }
});

// Item UI
world.events.beforeItemUse.subscribe((data) => {
  const source = data.source;
  const items = data.item;
  if (items.typeId === "mx:class" && getScore(source, "clase") == 0) {
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

// Chat
ChatFilter()