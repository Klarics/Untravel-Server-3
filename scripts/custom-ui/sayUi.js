import { ActionFormData } from "@minecraft/server-ui";
import { sendMsgToPlayer } from "../utilsMx";

export function sayOption(playerid, member, args) {
  const gui = new ActionFormData();
  // ★━━━━━━━━━━━━━━━━━━━━★
  gui.title("");
  gui.body(
    `\n <${playerid}> pregunta: \n ${args}`
  );
  gui.button("§bOk");
  gui.button("§cNo")
  gui.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(member, `§eNo puedes ignorar me para siempre.`)
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member} §bignoró tu pregunta .`)
    }


    if (result.selection === 0) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member} §bAceptó .`)
      sendMsgToPlayer(member, `§r§b■§d§lUntravel§eMx§b■§r §aTu respuesta fue enviada .`)

    }
    if (result.selection === 1) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member} §bLo negó .`)
      sendMsgToPlayer(member, `§r§b■§d§lUntravel§eMx§b■§r §aTu respuesta fue enviada .`)
    }
  });
}


export function sayJust(playerid, member, args) {
  const gui = new ActionFormData();
  // ★━━━━━━━━━━━━━━━━━━━━★
  gui.title("");
  gui.body(
    `\n <${playerid}>: \n ${args}`
  );
  gui.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member} §bya vio tu mensaje .`)
    }
  });
}