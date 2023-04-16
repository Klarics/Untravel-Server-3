/* eslint no-var: "off"*/
import { world } from "@minecraft/server";
import { prefix, sendMsg, sendMsgToPlayer } from "../../utilMx.js";

function muteHelp(player, prefix) {
    //let commandStatus;
    //if (!config.customcommands.mute) {
    //     commandStatus = "§6[§4DISABLED§6]§r";
    // }
    // else {
    //     commandStatus = "§6[§aENABLED§6]§r";
    // }
    return sendMsgToPlayer(player, [
        `\n§4[§6Command§4]§r: mute`,
    //    `§4[§6Status§4]§r: ${commandStatus}`,
        `§4[§6Usage§4]§r: mute [optional]`,
        `§4[§6Optional§4]§r: mute, reason, help`,
        `§4[§6Description§4]§r: Mutes the specified user and optionally gives reason.`,
        `§4[§6Examples§4]§r:`,
        `    ${prefix}mute ${player.name}`,
        `    ${prefix}mute ${player.name} Stop spamming!`,
        `    ${prefix}mute help`,
    ]);
}

export function mute(message, args) {
    // validate that required params are defined
    if (!message) {
        return console.warn(`${new Date()} | ` + "Error: ${message} isnt defined. Did you forget to pass it? ./commands/moderation/mute.js:30)");
    }
    message.cancel = true;
    let player = message.sender;
    let reason = args.slice(1).join(" ") || "No reason specified";
    // make sure the user has permissions to run the command
    if (!player.hasTag('staffstatus') && !player.hasTag('Moderator')) {
        return sendMsgToPlayer(player, `§r§4[§6Paradox§4]§r You need to be Paradox-Opped to use this command.`);
    }
    // Check for custom prefix
    let prefix = getPrefix(player);
    // Was help requested
    let argCheck = args[0];
    if ((argCheck && args[0].toLowerCase() === "help") || !config.customcommands.mute) {
        return muteHelp(player, prefix);
    }
    // Are there arguements
    if (!args.length) {
        return muteHelp(player, prefix);
    }
    // try to find the player requested
    let member;
    for (let pl of world.getPlayers()) {
        if (pl.nameTag.toLowerCase().includes(args[0].toLowerCase().replace(/"|\\|@/g, ""))) {
            member = pl;
        }
    }
    if (!member) {
        return sendMsgToPlayer(player, `§r§4[§6Paradox§4]§r Couldnt find that player!`);
    }
    
    
    // make sure they dont mute themselves
    if (member === player) {
        return sendMsgToPlayer(player, `§r§4[§6Paradox§4]§r You cannot mute yourself.`);
    }
    // make sure staff dont mute staff
    if (memberEncode === memberHash) {
        return sendMsgToPlayer(player, `§r§4[§6Paradox§4]§r You cannot mute staff players.`);
    }
    // If not already muted then tag
    if (!member.hasTag("isMuted")) {
        member.addTag("isMuted");
    }
    else {
        return sendMsgToPlayer(player, `§r§4[§6Paradox§4]§r This player is already muted.`);
    }
    // If Education Edition is enabled then legitimately mute them
    try {
        member.runCommand(`ability @s mute true`);
    }
    catch (error) { }
    sendMsgToPlayer(member, `§r§4[§6Paradox§4]§r You have been muted. Reason: ${reason}`);
    return sendMsg("@a[tag=paradoxOpped]", `§r§4[§6Paradox§4]§r ${player.nameTag}§r has muted ${member.nameTag}§r. Reason: ${reason}`);
}
