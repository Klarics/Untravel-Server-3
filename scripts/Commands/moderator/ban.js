/* eslint no-var: "off"*/
import { world } from "@minecraft/server";
import { prefix, sendMsg, sendMsgToPlayer } from "../../utilsMx.js";

function banHelp(player, prefix) {
    // let commandStatus;
    // if (!config.customcommands.ban) {
    //     commandStatus = "§d§o[§4DISABLED§d§o]§r";
    // }
    // else {
    //     commandStatus = "§d§o[§aENABLED§d§o]§r";
    // }
    return sendMsgToPlayer(player, [
        `\n§b~§aCommand§b~§r: ban`,
 //       `§b~§a§oStatus§b~§r: ${commandStatus}`,
        `§b~§a§oUsage§b~§r: ban [optional]`,
        `§b~§a§oOptional§b~§r: NameTag, razon, help`,
        `§b~§a§oDescription§b~§r: Banea al usuario especificado y puedes dar una razon opcional.`,
        `§b~§a§oExamples§b~§r:`,
        `    ${prefix}ban ${player.name}`,
        `    ${prefix}ban ${player.name} Hacker!`,
        `    ${prefix}ban ${player.name} Atrapado usando Exploits!`,
        `    ${prefix}ban help`,
    ]);
}


/**
 * @name ban
 * @param {BeforeChatEvent} message - Message object
 * @param {array} args - Additional arguments provided (optional).
 */
export function ban(message, args, args2, commandName) {
    // validate that required params are defined
    if (!message) {
        return console.warn(`${new Date()} | ` + "Error: ${message} isnt defined. Did you forget to pass it? ./commands/moderation/ban.js:31)");
    }
    message.cancel = true;
    let player = message.sender;
    let reason = args.slice(1).join(" ") || "No reason specified";
    // make sure the user has permissions to run the command
    if (!player.hasTag('staffstatus') || !player.hasTag('Moderator')) {
        return sendMsgToPlayer(player, `§cComando desconocido: §r${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`);
    }
    // Check for custom prefix
    //let prefix = getPrefix(player);
    // Are there arguements
    if (!args.length) {
        return banHelp(player, prefix);
    }
    // Was help requested
    let argCheck = args[0];
    if ((argCheck && args[0].toLowerCase() === "help")) {
        return banHelp(player, prefix);
    }
    // try to find the player requested
    let member;
    for (let pl of world.getPlayers()) {
        if (pl.nameTag.toLowerCase().includes(args[0].toLowerCase().replace(/"|\\|@/g, ""))) {
            member = pl;
        }
    }
    // Check if player exists
    if (!member) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§b Jugador no encontrado!`);
    }
    // make sure they dont ban themselves
    if (member === player) {
        return sendMsgToPlayer(player, `§rcb■§d§lUntravel§eMx§b■§r§b No te puedes banear a ti mismo.`);
    }
    if (member.hasTag("Adminer")) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c No pude banaear a ese jugador! D: Error: ${error}`);
    }
    try {
        member.addTag("Reason:" + reason);
        member.addTag("By:" + player.nameTag);
        member.addTag("isBanned");
    }
    catch (error) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c No pude banaear a ese jugador! D: Error: ${error}`);
    }
    return sendMsg("@a[tag=staffstatus]", `§c[!]§r ${player.nameTag}§d ha baneado a >§r ${member.nameTag}§e. Reason: §d${reason}`);
}
