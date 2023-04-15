
import { sendMsg, sendMsgToPlayer } from "../../utilsMx";

export function ctl(message) {
    message.cancel = true;
    let player = message.sender;
    if (!player.hasTag('staffstatus') && !player.hasTag('Adminer')) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c You need to be §eServer-Op§r to use this command.`);
    }
    else if (player.hasTag('staffstatus') && player.hasTag('Adminer')) {
        sendMsgToPlayer(player, `>>>§a Tp to control!`);
        sendMsg("@a[tag=Adminer]", `§r§b■§d§lUntravel§eMx§b■§r ${player.nameTag}§a was tp to Control.`);
        player.runCommandAsync(`tp @s 50018 202 50006`)
        return;
    }
}