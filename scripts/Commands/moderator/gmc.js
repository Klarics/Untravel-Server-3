
import { sendMsg, sendMsgToPlayer, prefix } from "../../utilsMx.js";

 function gmcHelp(player, prefix ) {
//     let commandStatus;
//     if (!config.customcommands.op) {
//         commandStatus = "§a[§bDISABLED§a]§r";
//     }
//     else {
//         commandStatus = "§a[§aENABLED§a]§r";
//     }
     return sendMsgToPlayer(player, [
         `\n§b~§aCommand§b~§r: gmc`,
//         `§b~§aStatus§b~§r: ${commandStatus}`,
         `§b~§aUsage§b~§r: gmc [optional]`,
         `§b~§aOptional§b~§r: help`,
         `§b~§aDescription§b~§r: Grants permission to use Creative features.`,
         `§b~§aExamples§b~§r:`,
         `          ${prefix}gmc`,
         `          ${prefix}gmc help`,
     ]);
 }
export function gmc(message, args, args2, commandName ) {
    message.cancel = true;
    let player = message.sender;
    let argCheck = args[0];
    if (!player.hasTag('staffstatus') || !player.hasTag('Adminer')) {
        return sendMsgToPlayer(player, `§cComando desconocido: §r${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`);
    }

    
    if ((argCheck && args[0].toLowerCase() === "help")) {
         return gmcHelp(player, prefix);
     }
    else if ((player.hasTag('staffstatus') && player.hasTag('Adminer')) && !player.hasTag('gmc')) {
        sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§b Creativo!`);
        sendMsg("@a[tag=Adminer]", `§c[!]§r ${player.nameTag}§a is on gamemode Creative .`);
        player.runCommandAsync(`gamemode c @s`)
        player.runCommandAsync(`effect @s[tag=Adminer] night_vision 100000 5 true`)
        player.addTag("gmc");
        return;
    }
    else if ((player.hasTag('staffstatus') && player.hasTag('Adminer')) && player.hasTag('gmc')) {
        sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c Survival`);
        sendMsg("@a[tag=Adminer]", `§c[!]§r ${player.nameTag}§a is on gamemode Survival.`);
        player.removeTag("gmc");
        player.runCommandAsync(`gamemode s @s`)
        player.runCommandAsync(`effect @s clear`);
        
        
        return;
    }
}