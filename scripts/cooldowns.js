import { world } from "@minecraft/server";
import { getScore } from "./utilsMx";

export function cooldownClassfunction(ticks) {
  let playerCombat;
  for (let pl of world.getPlayers()) {
    if (pl.hasTag("uiCooldownClass")) {
      playerCombat = pl;
      if (getScore(playerCombat, "uiCooldown") == 20) {
        playerCombat.runCommandAsync(`say se borro el tag`);
        playerCombat.runCommandAsync(`tag @s remove uiCooldownClass`);
        playerCombat.runCommandAsync(`scoreboard players set @s uiCooldown 0`);
      }

      if (getScore(playerCombat, "uiCooldown") >= 0) {
        if (ticks % 20 === 0) {
          playerCombat.runCommandAsync(
            `scoreboard players add @s uiCooldown 1 `
          );
        }
      }
    }
  }
}
//
//
//
export function cooldown_p_1(ticks) {
  let playerCombat;
  for (let pl of world.getPlayers()) {
    if (pl.hasTag("cooldown_p_1")) {
      playerCombat = pl;
      if (getScore(playerCombat, "cooldown_p_1") == 7) {
        playerCombat.runCommandAsync(
          `scoreboard players remove @s cooldown_p_1 1 `
        );
        playerCombat.runCommandAsync(`tag @s remove cooldown_p_1`);
        playerCombat.runCommandAsync(
          `scoreboard players set @s cooldown_p_1 0`
        );

        if (ticks % 20 === 0) {
          playerCombat.runCommandAsync(
            `scoreboard players add @s cooldown_p_1 1 `
          );
        }
      }
    }
  }
}

export function cooldown_p_2(ticks) {
  let playerCombat;
  for (let pl of world.getPlayers()) {
    if (pl.hasTag("cooldown_p_2")) {
      playerCombat = pl;
      if (getScore(playerCombat, "cooldown_p_2") == 7) {
        playerCombat.runCommandAsync(
          `scoreboard players remove @s cooldown_p_2 1 `
        );
        playerCombat.runCommandAsync(`tag @s remove cooldown_p_2`);
        playerCombat.runCommandAsync(
          `scoreboard players set @s cooldown_p_2 0`
        );

        if (ticks % 20 === 0) {
          playerCombat.runCommandAsync(
            `scoreboard players add @s cooldown_p_2 1 `
          );
        }
      }
    }
  }
}
//   for () {
//     if () {

//       if (getScore(playerCombat, "cooldown_p_1") == 10) {
//         playerCombat.runCommandAsync(`say se borro el tag`);
//         playerCombat.runCommandAsync(`tag @s remove Cooldown_p_1`);
//         playerCombat.runCommandAsync(`scoreboard players set @s uiCooldown 0`);
//       }
//       if (getScore(playerCombat, "cooldown_p_1") >= 3) {
//         let tags = playerId.getTags();
//         let team;
//         for (const tag of tags) {
//           if (tag.startsWith("faction")) {
//             team = tag;
//           }
//         }
//         if (!team) {
//           playerCombat.runCommandAsync(`scoreboard players remove @a speed 1 `);
//           return;
//         }
//         playerCombat.runCommandAsync(
//           `scoreboard players remove @a[tag=${team}] speed 1 `
//         );
//       }
//       if (getScore(playerCombat, "cooldown_p_1") >= 0) {
//         if (ticks % 20 === 0) {
//           playerCombat.runCommandAsync(
//             `scoreboard players add @s cooldown_p_1 1 `
//           );
//         }
//       }
//     }
//   }
// }

// for (let pl of world.getPlayers()) {
//     if (pl.hasTag("p_ability_1")) {
//       playerCombat = pl;
//       let tags = playerCombat.getTags();
//       let team;
//       for (const tag of tags) {
//         if (tag.startsWith("faction")) {
//           team = tag;
//         }
//       }
//       if (!team) {
//         if (
//           getScore(playerCombat, "speed") >= 1 &&
//           getScore(playerCombat, "cooldown_p_1") == 3
//         ) {
//           playerCombat.runCommandAsync(
//             `scoreboard players remove @a[r=10] speed 1 `
//           );
//           playerCombat.runCommandAsync(
//             `scoreboard players set @s cooldown_p_1 0`
//           );
//         }
//         if (ticks % 60 === 0) {
//           playerCombat.runCommandAsync(
//             `scoreboard players add @s cooldown_p_1 1 `
//           );
//         }
//         return;
//       }
//       if (
//         getScore(playerCombat, "speed") >= 1 &&
//         getScore(playerCombat, "cooldown_p_1") == 3
//       ) {
//         playerCombat.runCommandAsync(
//           `scoreboard players remove @a[r=10,tag=${team}] speed 1 `
//         );
//         playerCombat.runCommandAsync(
//           `scoreboard players set @s cooldown_p_1 0`
//         );
//       }
//       if (ticks % 60 === 0) {
//         playerCombat.runCommandAsync(
//           `scoreboard players add @s cooldown_p_1 1 `
//         );
//       }

//       playerCombat.runCommandAsync(
//         `scoreboard players remove @a[tag=${team}] speed 1 `
//       );
//     }
//   }
// }
