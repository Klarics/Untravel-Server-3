//import "./paradox.js";
import "./newMembersChoosSkill-UI";
import { selectDon } from "./newMembersChoosSkill-UI";
import { world, system } from "@minecraft/server";

const overworld = world.getDimension("overworld");
const sendMsg = (target, message) => {
  try {
    overworld.runCommandAsync(
      `tellraw ${
        /^ *@[spear]( *\[.*\] *)?$/.test(target)
          ? target
          : JSON.stringify(target)
      } {"rawtext":[{"text":${JSON.stringify(
        Array.isArray(message) ? message.join("\n\u00a7r") : message
      )}}]}`
    );
  } catch {}
};
const sendMsgToPlayer = (target, message) => {
  try {
    target.runCommandAsync(
      `tellraw @s {"rawtext":[{"text":${JSON.stringify(
        Array.isArray(message) ? message.join("\n\u00a7r") : message
      )}}]}`
    );
  } catch {}
};

// Subscribe to an event that calls every Minecraft tick
system.runInterval(() => {
  //    Spams the chat with "Hello World" with world.sendMessage function in API
  // world.sendMessage("Hello World");   // funciona 1.19.73******
  //or run a command in overworld dimension
  //using native API methods (such as world.sendMessage) are recommended whenever possible.
  overworld.runCommandAsync("function server/active"); //funciona 1.19.73 pero dice motor de script
});

function getSkill(playerSelect) {
  return world.scoreboard
    .getObjective("Dones")
    .getScore(playerSelect.scoreboard);
}

// Item UI
world.events.beforeItemUse.subscribe((data) => {
  const source = data.source;
  const items = data.item;
  if (items.typeId === "minecraft:dirt" && getSkill(source) == 0) {
    selectDon(source, items);
  }
  if (items.typeId === "minecraft:ender_pearl" && getSkill(source) == 2) {
    source.runCommandAsync(`give @s ender_pearl `);
    source.runCommandAsync(`effect @p[scores={Dones=2},r=2] night_vision 10 0 true`);
    source.runCommandAsync(`effect @p[scores={Dones=2},r=2] regeneration 4 2 true`);
  }
});

// Chat
world.events.beforeChat.subscribe((eventData) => {
  const player = eventData.sender;

  if (eventData.message.startsWith("-")) {
    eventData.cancel = true;
    switch (eventData.message) {
      case "-gmc":
        player.runCommandAsync("gamemode c");
        break;
      case "-gms":
        player.runCommandAsync("gamemode s");
        break;
      default:
        player.runCommandAsync(
          `tellraw @s {"rawtext":[{"text":"§cComando desconocido: §l${eventData.message}§r§c. Revisa que el comando exista y que tengas permiso para usarlo."}]}`
        );
        break;
    }
  }
  let message = eventData.message;
  let playertalk = eventData.sender;
  if (playertalk.hasTag("isMuted")) {
    sendMsgToPlayer(
      playertalk,
      `§b■§5§lUntravel§eMx§b■§r§c You are currently muted.`
    );
    eventData.cancel = true;
    return;
  }
  let tags = playertalk.getTags();
  let rank;
  for (const tag of tags) {
    if (tag.startsWith("Rank:")) {
      rank = tag.replace("Rank:", "");
      rank = rank.replaceAll("--", "§r§7][§r");
    }
  }
  if (!rank) {
    rank = "Member";
  }
  if (!eventData.cancel) {
    sendMsg("@a", `§r§o§7${playertalk.name}§7[§3${rank}§r§7]§o>> §r${message}`);
    eventData.cancel = true;
  }
});
