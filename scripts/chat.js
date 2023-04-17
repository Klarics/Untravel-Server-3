import { sendMsg, sendMsgToPlayer, debug, prefix } from "./utilsMx";

import { world } from "@minecraft/server";

import { ctl } from "./Commands/moderator/ctl";
import { spawn } from "./Commands/spawn.js";
import { vault } from "./Commands/vault.js";
import { gmc } from "./Commands/moderator/gmc.js";
import { ban } from "./Commands/moderator/ban";
import { unban } from "./Commands/moderator/unban";
import { say } from "./Commands/moderator/say";


 const commandDefinitions = Object.setPrototypeOf({
     ctl: ctl,
     gmc: gmc,
     vault: vault,
     spawn: spawn,
     ban: ban,
     unban: unban,
     say: say
 }, null)


export function commandHandler(player, message) {
    if (debug == true) {
        console.warn(`${new Date()} | did run command handler`);
    }
    // checks if the message starts with our prefix, if not exit
    if (debug == true)
        console.warn(`${new Date()} | "${player.name}" used the command: ${prefix}${commandName} ${args.join(" ")}`);
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
          return message.cancel = true;
      }
        commandDefinitions[commandName](eventData, args, eventData.message.slice(prefix.length + commandName.length + 1), commandName);
        console.warn(`${new Date()} | "${player.name}" used the command: ${prefix}${commandName}  ${args} and${args.join(" ")}`);


      }
      let message = eventData.message;
      let playertalk = eventData.sender;
      if (playertalk.hasTag("isMuted")) {
        sendMsgToPlayer(
          playertalk,
          `§r§b■§d§lUntravel§eMx§b■§r§c You are currently muted.`
        );
        eventData.cancel = true;
        return;
      }
      let tags = playertalk.getTags();
      let rank;
      for (const tag of tags) {
        if (tag.startsWith("Rank:")) {
          rank = tag.replace("Rank:", "");
          rank = rank.replaceAll("--", "§r§o§7][§r");
        }
      }
      if (!rank) {
        rank = "★";
      }
      if (!eventData.cancel) {
        sendMsg(
          "@a",
          `§r§o§7${playertalk.name}§7[§8${rank}§r§o§7]>> §r${message}`
        );
        eventData.cancel = true;
      }
    });
  };