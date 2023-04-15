import config from "../../paradox/data/config.js";
import { crypto, sendMsg, sendMsgToPlayer } from "../../paradox/util.js";

export function ctl(message) {
    message.cancel = true;
    let player = message.sender;
    if (!player.hasTag('staffstatus') && !player.hasTag('Adminer')) {
        return sendMsgToPlayer(player, `§r§b■§5§lUntravel§eMx§b■§r§c You need to be §eServer-Op§r to use this command.`);
    }
    else if (player.hasTag('staffstatus') && player.hasTag('Adminer')) {
        sendMsgToPlayer(player, `§r§b■§5§lUntravel§eMx§b■§r§a Tp to control!`);
        sendMsg("@a[tag=Adminer]", `§r§b■§5§lUntravel§eMx§b■§r ${player.nameTag}§a was tp to Control.`);
        player.runCommandAsync(`tp @s 50018 202 50006`)
        return;
    }
}