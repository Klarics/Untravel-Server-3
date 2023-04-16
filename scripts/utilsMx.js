import { world } from "@minecraft/server";

const overworld = world.getDimension("overworld");

export const prefix = "-"
export const debug = true



export const sendMsgToPlayer = (target, message) => {
  try {
    target.runCommandAsync(
      `tellraw @s {"rawtext":[{"text":${JSON.stringify(
        Array.isArray(message) ? message.join("\n\u00a7r") : message
      )}}]}`
    );
  } catch { }
};

export const sendMsg = (target, message) => {
  try {
    overworld.runCommandAsync(
      `tellraw ${/^ *@[spear]( *\[.*\] *)?$/.test(target)
        ? target
        : JSON.stringify(target)
      } {"rawtext":[{"text":${JSON.stringify(
        Array.isArray(message) ? message.join("\n\u00a7r") : message
      )}}]}`
    );
  } catch { }
};

export function getSkill(playerSelect, score) {
  return world.scoreboard
    .getObjective(score)
    .getScore(playerSelect.scoreboard);
}

export function banMessage(player) {
  let tags = player.getTags();
  let reason = "N/A";
  let by = "N/A";
  // this removes old ban stuff
  tags.forEach((t) => {
    if (t.startsWith("By:"))
      by = t.slice(3);
    if (t.startsWith("Reason:"))
      reason = t.slice(7);
  });
  try {
    player.runCommandAsync(`kick ${JSON.stringify(player.name)} §r\n§l§cFUISTE BANNEADO!\n§r\n§eBanned Por:§r ${by}\n§bRazon:§r ${reason}\n§6Si piensas que hubo un error comunicate con los administradores. `);
  }
  catch (error) {
    // if we cant kick them with /kick then we instant despawn them
//    player.triggerEvent("paradox:kick");
  }
}