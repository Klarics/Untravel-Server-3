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
    } catch {}
  };

export const sendMsg = (target, message) => {
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

 export function getSkill(playerSelect, score) {
    return world.scoreboard
      .getObjective(score)
      .getScore(playerSelect.scoreboard);
  }