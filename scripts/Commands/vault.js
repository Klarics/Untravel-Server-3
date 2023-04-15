import { sendMsgToPlayer } from "../utilsMx";

export function vault(message) {
    message.cancel = true
    let player = message.sender;
    if (player.hasTag('InCombat')) {
        return sendMsgToPlayer(player, [`§cYou can't leave during a Fight `]);
    }
    sendMsgToPlayer(player, [`§l§aGoing to Vault`])
    player.runCommandAsync(`tp @s @e[type=armor_stand,name=§r§r§l§dSave]`)
}