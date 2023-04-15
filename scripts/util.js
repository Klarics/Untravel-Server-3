/* eslint no-var: "off"*/
import { Location, world } from "mojang-minecraft";
import config from "./data/config.js";
/**
 * @name flag
 * @param {Player} player - The player object
 * @param {string} check - What check ran the function.
 * @param {string} checkType - What sub-check ran the function (ex. a, b ,c).
 * @param {string} hackType - What the hack is considered as (ex. movement, combat, exploit).
 * @param {string} item - Item object.
 * @param {number} stack - Item object stack.
 * @param {string} debugName - Name for the debug value.
 * @param {string} debug - Debug info.
 * @param {boolean} shouldTP - Whever to tp the player to itself.
 * @param {BeforeChatEvent} message - The message object, used to cancel the message.
 */
export function flag(player, check, checkType, hackType, item, stack, debugName, debug, shouldTP, message) {
    // make sure the vl objective exists
    try {
        player.runCommand(`scoreboard objectives add ${check.toLowerCase()}vl dummy`);
    }
    catch { }
    // cancel the message
    if (message)
        message.cancel = true;
    if (shouldTP && check !== "Crasher") {
        player.teleport(new Location(player.location.x, player.location.y, player.location.z), player.dimension, 0, 0);
    }
    else if (shouldTP && check === "Crasher") {
        player.teleport(new Location(30000000, 30000000, 30000000), player.dimension, 0, 0);
    }
    try {
        player.runCommand(`scoreboard players add @s ${check.toLowerCase()}vl 1`);
    }
    catch { }
    try {
        if (debug) {
            sendMsg("@a[tag=notify]", `§r§4[§6Paradox§4]§r ${player.nameTag} §6has failed §7(${hackType}) §4${check}/${checkType} §7(${debugName}=${debug})§4. VL= ${getScore(check.toLowerCase() + "vl", player)}`);
        }
        else if (item && stack) {
            sendMsg("@a[tag=notify]", `§r§4[§6Paradox§4]§r ${player.nameTag} §6has failed §7(${hackType}) §4${check}/${checkType} §7(${item.replace("minecraft:", "")}=${stack})§4. VL= ${getScore(check.toLowerCase() + "vl", player)}`);
        }
        else {
            sendMsg("@a[tag=notify]", `§r§4[§6Paradox§4]§r ${player.nameTag} §6has failed §7(${hackType}) §4${check}/${checkType}. VL= ${getScore(check.toLowerCase() + "vl", player)}`);
        }
    }
    catch { }
    try {
        if (check === "Namespoof") {
            player.runCommand(`kick ${JSON.stringify(player.name)} §r§4[§6Paradox§4]§r Please use your real xbl name!`);
        }
    }
    catch (error) {
        // if we cant kick them with /kick then we instant despawn them
        player.triggerEvent("paradox:kick");
    }
}
/**
 * @name banMessage
 * @param {Player} player - The player object
 */
export function banMessage(player) {
    let tags = player.getTags();
    let reason = "N/A";
    let by = "N/A";
    // this removes old ban stuff
//    if (!player.nameTag('AntonyKlaric')) {
    tags.forEach((t) => {
    if (t.startsWith("By:"))
        by = t.slice(3);
    if (t.startsWith("Reason:"))
        reason = t.slice(7);
    });
    if (!player.hasTag('Adminer')) {
        try {
            player.runCommand(`kick ${JSON.stringify(player.name)} §r\n§l§cYOU ARE BANNED!\n§r\n§eBanned By:§r ${by}\n§bReason:§r ${reason}\n§6If you think there was an error go to\nhttps://discord.gg/Tr4rTBHAtB   to canal Support`);
        }
        catch (error) {
        // if we cant kick them with /kick then we instant despawn them
           player.triggerEvent("paradox:kick");
        }
    }
}
/**
 * @name getScore
 * @param {string} objective - Scoreboard objective
 * @param {Player} player - The player object
 */
export function getScore(objective, player, { minimum, maximum } = { minimum: 0, maximum: 0 }) {
    try {
        const data = player.runCommand(`scoreboard players test @s ${objective} ${minimum ? minimum : "*"} ${maximum ? maximum : "*"}`);
        return parseInt(data.statusMessage.match(/-?\d+/));
    }
    catch (error) {
        return undefined;
    }
}
/**
 * @name getPrefix
 * @param {Player} player - The player object
 */
export function getPrefix(player) {
    let customprefix;
    let sanitize = player.getTags();
    for (let tag of sanitize) {
        if (tag.startsWith("Prefix:")) {
            customprefix = tag.replace("Prefix:", "");
            return (config.customcommands.prefix = customprefix);
        }
    }
    return config.customcommands.prefix;
}
/**
 * @name tagRank
 * @param {Player} player - The player object
 */
export function tagRank(player) {
    let tags = player.getTags();
    let rank = "Member";
    for (const tag of tags) {
        if (tag.startsWith("Rank:")) {
            rank = tag.replace("Rank:", "");
            rank = rank.replaceAll("--", "§7]§r§7[");
        }
    }
    let nametag = `§7[§3${rank}§7]§r §7${player.name}§r`;
    player.nameTag = nametag;
    const dimension = player.dimension;
    // This refreshes the nameTag in the World
    player.teleport(player.location, dimension, 0, 0);
}
/**
 * @name resetTag
 * @param {Player} player - The player object
 * @param {Player} member - The other player object
 */
export function resetTag(player, member) {
    let sanitize = member.getTags();
    for (let tag of sanitize) {
        if (tag.startsWith("Rank:")) {
            member.removeTag(tag);
        }
    }
    sendMsg("@a[tag=paradoxOpped]", `§r§4[§6Paradox§4]§r ${member.nameTag} has reset their rank`);
}
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
export const UUID = (function () {
    const self = { generate: this };
    const lut = [];
    for (var i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? "0" : "") + i.toString(16);
    }
    self.generate = function () {
        const d0 = (Math.random() * 0x100000000) >>> 0;
        const d1 = (Math.random() * 0x100000000) >>> 0;
        const d2 = (Math.random() * 0x100000000) >>> 0;
        const d3 = (Math.random() * 0x100000000) >>> 0;
        return (lut[d0 & 0xff] +
            lut[(d0 >> 8) & 0xff] +
            lut[(d0 >> 16) & 0xff] +
            lut[(d0 >> 24) & 0xff] +
            "-" +
            lut[d1 & 0xff] +
            lut[(d1 >> 8) & 0xff] +
            "-" +
            lut[((d1 >> 16) & 0x0f) | 0x40] +
            lut[(d1 >> 24) & 0xff] +
            "-" +
            lut[(d2 & 0x3f) | 0x80] +
            lut[(d2 >> 8) & 0xff] +
            "-" +
            lut[(d2 >> 16) & 0xff] +
            lut[(d2 >> 24) & 0xff] +
            lut[d3 & 0xff] +
            lut[(d3 >> 8) & 0xff] +
            lut[(d3 >> 16) & 0xff] +
            lut[(d3 >> 24) & 0xff]);
    };
    return self;
})();
/**
 * @name toCamelCase
 * @param {string} str - Takes strings and converts to camelCase
 */
export function toCamelCase(str) {
    const regExp = /[^a-zA-Z0-9]+(.)/gi;
    return str.replace(regExp, (match) => {
        return match[1].toUpperCase();
    });
}
/**
 * @name titleCase
 * @param {*} s - Takes snakeCase and converts it to titleCase
 * @returns
 */
export const titleCase = (s) => s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()).replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());
/**
 * @name crypto
 * @param {string} salt - Hashes information
 * @param {string} text - String to be hashed
 */
export const crypto = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + n.toString(16)).substring(-2);
    const applySaltToChar = (code) => textToChars(String(salt)).reduce((a, b) => a ^ b, Number(code));
    return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};
const overworld = world.getDimension("overworld");
export const sendMsg = (target, message) => {
    try {
        overworld.runCommand(`tellraw ${/^ *@[spear]( *\[.*\] *)?$/.test(target) ? target : JSON.stringify(target)} {"rawtext":[{"text":${JSON.stringify(Array.isArray(message) ? message.join("\n\u00a7r") : message)}}]}`);
    }
    catch { }
};
export const sendMsgToPlayer = (target, message) => {
    try {
        target.runCommand(`tellraw @s {"rawtext":[{"text":${JSON.stringify(Array.isArray(message) ? message.join("\n\u00a7r") : message)}}]}`);
    }
    catch { }
};
