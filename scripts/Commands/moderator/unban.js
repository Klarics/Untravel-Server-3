import { prefix, sendMsg, sendMsgToPlayer } from "../../utilMx.js";

export const queueUnban = new Set();

function listQueue(queue, player) {
    if (queue) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r ${player.nameTag}§b ya esta en fila para ser desbaneado`);
    }
}

function unbanHelp(player, prefix) {
//   let commandStatus;
//    if (!config.customcommands.unban) {
    //     commandStatus = "§6[§4DISABLED§6]§r";
    // }
    // else {
    //     commandStatus = "§6[§aENABLED§6]§r";
    // }
    return sendMsgToPlayer(player, [
        `\n§b~§aCommand§b~§r: unban`,
 //       `§b~§aStatus§b~§r: ${commandStatus}`,
        `§b~§aUsage§b~§r: unban [optional]`,
        `§b~§aOptional§b~§r: NameTag, list, help`,
        `§b~§aDescription§b~§r: Permite unirse a jugadores especificados que fueron baneados.(Doesn't include global ban).`,
        `§b~§aExamples§b~§r:`,
        `    ${prefix}unban ${player.name}`,
        `    ${prefix}unban list`,
        `    ${prefix}unban help`,
    ]);
}


/**
 * @name unban
 * @param {BeforeChatEvent} message - Message object
 * @param {string[]} args - Additional arguments provided (optional).
 */
export function unban(message, args) {
    // validate that required params are defined
    if (!message) {
        return console.warn(`${new Date()} | ` + "Error: ${message} isnt defined. Did you forget to pass it? (./commands/moderation/unban.js:35)");
    }
    message.cancel = true;
    let player = message.sender;
    // make sure the user has permissions to run the command
    if (!player.hasTag('staffstatus') && !player.hasTag('Moderator')) {
        return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§c Necesitas ser Administrador para usar este comando.`);
    }
    // Check for custom prefix
    //let prefix = getPrefix(player);
    // Are there arguements
    if (!args.length) {
        return unbanHelp(player, prefix);
    }
    // Was help requested
    let argCheck = args[0];
    if ((argCheck && args[0].toLowerCase() === "help")) {
        return unbanHelp(player, prefix);
    }
    else if ((argCheck && args[0].toLowerCase() === "list")) {
        queueUnban.forEach((queue) => listQueue(queue, player));
        return;
    }
    // Add player to queue
    let regexp = /["'`]/g;
    queueUnban.add(args.join(" ").replace(regexp, ""));
    sendMsg("@a[tag=staffstatus]", `§r§b■§d§lUntravel§eMx§b■§r ${args.join(" ").replace(regexp, "")}§b esta en fila de desbaneo!`);
}
