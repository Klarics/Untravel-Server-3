
import { sendMsg, sendMsgToPlayer } from "../../utilsMx";

export function ctl(message) {
    message.cancel = true;
    let player = message.sender;
    if (!player.hasTag('staffstatus') || !player.hasTag('Adminer')) {
        return sendMsgToPlayer(player, `§cComando desconocido: §rctl§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`);    }
    else if (player.hasTag('staffstatus') && player.hasTag('Adminer')) {
        sendMsgToPlayer(player, `>>>§a Tp to control!`);
        sendMsg("@a[tag=Adminer]", `§c[!]§r ${player.nameTag}§a was tp to Control.`);
        player.runCommandAsync(`tp @s 50018 202 50006`)
        return;
    }
}