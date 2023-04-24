import { sendMsgToPlayer } from "../utilsMx";

export function spawn(message) {
    message.cancel = true;
    let player = message.sender;
    if (player.hasTag('InCombat')) {
        return sendMsgToPlayer(player, [`§cYou can't leave during a Fight `]);
    }
    sendMsgToPlayer(player, [`>>>§aTeleported to spawn`])
    player.runCommandAsync(`tp @s @e[type=npc,tag=§r§l§o§5Untravel]`)
}
