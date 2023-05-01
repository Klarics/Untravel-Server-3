import { world } from "@minecraft/server";
import { getScore } from "../../utilsMx";

/**
 * Esta es la habilidad uno de playerId dando velocidad
 * @param {*} playerId
 */

export function ability_p_uno(playerId) {
  let tags = playerId.getTags();
  let team;
 
  for (const tag of tags) {
    if (tag.startsWith("faction")) {
      team = tag;
    }
  }
  if (!team) {
    playerId.runCommandAsync(`tag @a[r=10] add p_ability_1`);
    //playsound
    return;
  }
  playerId.runCommandAsync(`tag @a[r=10,tag=${team}] add p_ability_1`);
  //playsound
}
/**
 *
 *
 */
export function ability_p_dos(playerId) {}
/**
 *
 *
 */
export function ability_p_tres(playerId) {
     
  // }

  //   playerId.runCommandAsync(`particle mx:bless ~ ~-2 ~`);
  //   playerId.runCommandAsync(
  //     `playanimation @s animation.armor_stand.entertain_pose m 3`
  //   );
  //   playerId.runCommandAsync(`effect @a regeneration 1 4`);
  //   playerId.runCommandAsync(`effect @a resistance 3 1`); // $score?
  //   ticksplayerId = 0;
}
