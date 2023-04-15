import { sendMsg, sendMsgToPlayer, debug, prefix } from "./utilsMx";

import { world } from "@minecraft/server";

import { ctl } from "./Commands/moderator/ctl";
import { spawn } from "./Commands/spawn.js";
//import { vault } from "./Commands/vault.js";


 const commandDefinitions = Object.setPrototypeOf({
     ctl: ctl,
  //   gmc: gmc,
  //   vault: vault,
     spawn: spawn
 }, null)


export function commandHandler(player, message) {
    if (debug == true) {
        console.warn(`${new Date()} | did run command handler`);
    }
    // checks if the message starts with our prefix, if not exit

    // if (!message.message.startsWith(prefix))
    //     return void 0;
    //let args = message.message.slice(prefix.length).split(/ +/);
    //const commandName = args.shift().toLowerCase();
    if (debug == true)
        console.warn(`${new Date()} | "${player.name}" used the command: ${prefix}${commandName} ${args.join(" ")}`);

    if (!(commandName in commandDefinitions)) {
        sendMsgToPlayer(player, `§r§b-§5§lUntravel§eMx§b-§r§a The command ${prefix}${commandName} does not exist. Try again!`);
        return (message.cancel = true);
    }
    commandDefinitions[commandName](message, args, message.message.slice(prefix.length + commandName.length + 1));
    return void 0;
}

export const ChatFilter = () => {
    world.events.beforeChat.subscribe((eventData) => {
      const player = eventData.sender;
  
      if (eventData.message.startsWith(prefix)) {
        eventData.cancel = true;
        let args = eventData.message.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        if (!(commandName in commandDefinitions)) {
          sendMsgToPlayer(player, `§cComando desconocido: §r§l${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`);
          return (message.cancel = true);
      }
        commandDefinitions[commandName](eventData, args, eventData.message.slice(prefix.length + commandName.length + 1));
        switch (eventData.message) {
          case "-gmc":
            player.runCommandAsync("gamemode c");
            console.warn(`${new Date()} | "${player.name}" used the command: ${prefix}${commandName} ${args.join(" ")}`);
            break;
          case "-gms":
            player.runCommandAsync("gamemode s");
            break;
          default:
            //player.runCommandAsync(
            //  `tellraw @s {"rawtext":[{"text":"§cComando desconocido: §l${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo."}]}`
            //);
            break;
        }
      }
      let message = eventData.message;
      let playertalk = eventData.sender;
      if (playertalk.hasTag("isMuted")) {
        sendMsgToPlayer(
          playertalk,
          `§b■§5§lUntravel§eMx§b■§r§c You are currently muted.`
        );
        eventData.cancel = true;
        return;
      }
      let tags = playertalk.getTags();
      let rank;
      for (const tag of tags) {
        if (tag.startsWith("Rank:")) {
          rank = tag.replace("Rank:", "");
          rank = rank.replaceAll("--", "§r§7][§r");
        }
      }
      if (!rank) {
        rank = "Member";
      }
      if (!eventData.cancel) {
        sendMsg(
          "@a",
          `§r§o§7${playertalk.name}§7[§3${rank}§r§7]§o>> §r${message}`
        );
        eventData.cancel = true;
      }
    });
  };