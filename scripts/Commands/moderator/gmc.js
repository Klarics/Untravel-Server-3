
import { sendMsg, sendMsgToPlayer, prefix } from "../../utilsMx.js";

 function gmcHelp(player, prefix) {
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
         `          ${prefix} ${player.name}`,
         `          ${prefix} help`,
     ]);
 }
export function gmc(message, args) {
    message.cancel = true;
    let player = message.sender;
    let argCheck = args[0];
    //let prefix = getPrefix(player);
    
    if (!player.hasTag('staffstatus') && !player.hasTag('Adminer')) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c You need to be §eServer-Op§r§c to use this command.`);
    }

    
    if ((argCheck && args[0].toLowerCase() === "help")) {
    //    sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§a This funtion is not aveable!`);
         return gmcHelp(player, prefix);
     }
    else if ((player.hasTag('staffstatus') && player.hasTag('Adminer')) && !player.hasTag('gmc')) {
        sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§a Gamemode §bOn!`);
        sendMsg("@a[tag=Adminer]", `§r§b■§d§lUntravel§eMx§b■§r ${player.nameTag}§a is on gamemode Creative .`);
        player.runCommandAsync(`gamemode c @s`)
        player.runCommandAsync(`effect @s[tag=Adminer] night_vision 100000 5 true`)
        player.addTag("gmc");
        return;
    }
    else if ((player.hasTag('staffstatus') && player.hasTag('Adminer')) && player.hasTag('gmc')) {
        sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§a Gamemode §cOff!`);
        sendMsg("@a[tag=Adminer]", `§r§b■§d§lUntravel§eMx§b■§r ${player.nameTag}§a is on gamemode Survival.`);
        player.removeTag("gmc");
        player.runCommandAsync(`gamemode s @s`)
        player.runCommandAsync(`effect @s clear`);
        
        
        return;
    }
    
     
    // if (!args.length) {
    //     return gmcHelp(player, prefix);
    // }
//     sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c Gamemode C On!`);
//     sendMsg("@a[tag=Adminer]", `§r§b■§d§lUntravel§eMx§b■§r§c ${player.nameTag}§e is on gamemode C.`);
//     player.runCommand(`gamemode c @s`)
//     player.addTag("gmc");
}