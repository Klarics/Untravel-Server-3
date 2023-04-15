import { sendMsgToPlayer } from "../utilsMx";

export function spawn(message) {
    message.cancel = true;
    let player = message.sender;
    if (player.hasTag('InCombat')) {
        return sendMsgToPlayer(player, [`§cYou can't leave during a Fight `]);
    }
    sendMsgToPlayer(player, [`§l§aGoing to spawn`])
    player.runCommandAsync(`tp @s @e[type=armor_stand,name=§r§l§o§5Untravel]`)
}
