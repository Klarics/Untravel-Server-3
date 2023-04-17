import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { sendMsgToPlayer } from "../utilsMx";

export function sayOption(playerid, member, args) { // funcion(object,object, string, string)
  const dus = new ActionFormData();
  dus.title(`★━━━━━━━━<§6${playerid.nameTag}§r>━━━━━━━━★`);
  dus.body(
    `\n\n${args}\n\n\n\n`
  );
  dus.button("§bSí");
  dus.button("§cNo")
  dus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(member, `§aIgnoraste a §b${member.nameTag}.`)
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bignoró tu pregunta .`)
    }


    if (result.selection === 0) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bRespondió §eSí.`)
      sendMsgToPlayer(member, `§r§b■§d§lUntravel§eMx§b■§r §aTu respuesta fue enviada .`)

    }
    if (result.selection === 1) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §brespondió §eNo.`)
      sendMsgToPlayer(member, `§r§b■§d§lUntravel§eMx§b■§r §aTu respuesta fue enviada .`)
    }
  });
}


export function sayJust(playerid, member, args) {
  const fus = new ActionFormData();
  fus.title(`★━━━━━━━━<§6${playerid.nameTag}§r>━━━━━━━━★`);
  fus.body(
    `\n\n${args}\n\n\n\n`
  );
  fus.button("...");
  fus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bTalvez vio tu mensaje .`)
    }
     if (result.selection === 0) {
       sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bYa vio tu mensaje .`)
     }
  });
}