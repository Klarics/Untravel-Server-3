import { prefix } from "../utilsMx";

import { ctl } from "./moderator/ctl";
import { spawn } from "./spawn.js";
import { vault } from "./vault.js";


const commandDefinitions = Object.setPrototypeOf({
    ctl: ctl,
    gmc: gmc,
    vault: vault,
    spawn: spawn
}, null)


export function commandHandler(player, message) {
    if (debug == true) {
        console.warn(`${new Date()} | did run command handler`);
    }
    // checks if the message starts with our prefix, if not exit
    if (!message.message.startsWith(prefix))
        return void 0;
    let args = message.message.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (debug == true)
        console.warn(`${new Date()} | "${player.name}" used the command: ${prefix}${commandName} ${args.join(" ")}`);
    if (!(commandName in commandDefinitions)) {
        sendMsgToPlayer(player, `§r§b-§5§lUntravel§eMx§b-§r§a The command ${prefix}${commandName} does not exist. Try again!`);
        return (message.cancel = true);
    }
    commandDefinitions[commandName](message, args, message.message.slice(prefix.length + commandName.length + 1));
    return void 0;
}