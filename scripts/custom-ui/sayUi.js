import { ActionFormData, MessageFormData } from "@minecraft/server-ui";
import { sendMsgToPlayer, tagTitle } from "../utilsMx";

export function sayOption(playerid, member, args, titleTag) { // funcion(object,object, string, string)
  const dus = new ActionFormData();
  dus.title(`★<§6${titleTag}§r>★`);
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


export function sayJust(playerid, member, args,titleTag) {
  const fus = new ActionFormData();
  fus.title(`★<§6${titleTag}§r>★`);
  fus.body(
    `\n\n${args}\n\n\n\n`
  );
  fus.button("...");
  fus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bTalvez vio tu mensaje .`)
    }
     if (result.selection === 0) {
       sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bYa vio tu mensaje.`)
     }
  });
}


export function sayNothing(playerid, member, titleTag) {
  
  const fus = new ActionFormData();
  fus.title(`★━━━━━━━━<§c???§r>━━━━━━━━★`);
  fus.body(
    `\n\n${titleTag} te observa.\n\n\n\n`
  );
  fus.button("･。ﾟﾟ･:ﾟ*:･｡ﾟ☆ｏＯ◯Ｏｏ☆ﾟ･:ﾟ*:･｡ﾟ･。ﾟ");
  fus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bTalvez vio tu mensaje o no le importa.`)
    }
     if (result.selection === 0) {
       sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bSabe que lo observas.`)
     }
  });
}


export function sayLike(playerid, member, titleTag, args) {
  
  const fus = new ActionFormData();
  fus.title(`★━━━━━━━━<§c???§r>━━━━━━━━★`);
  fus.body(
    `\n\nA ${titleTag} le gusta ${args}.\n\n\n\n`
  );
  fus.button("･。ﾟﾟ･:ﾟ*:･｡ﾟ☆ｏＯ◯Ｏｏ☆ﾟ･:ﾟ*:･｡ﾟ･。ﾟ");
  fus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bTalvez no vio tu mensaje o no le importa.`)
    }
     if (result.selection === 0) {
       sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bYa vio tu mensaje`)
     }
  });
}


export function sayConfution(playerid, member, titleTag, args) {
  
  const fus = new ActionFormData();
  fus.title(`★━━━━━━━━<§c???§r>━━━━━━━━★`);
  fus.body(
    `\n\n${titleTag} no entiende ${args}.\n\n\n\n`
  );
  fus.button("･。ﾟﾟ･:ﾟ*:･｡ﾟ☆ｏＯ◯Ｏｏ☆ﾟ･:ﾟ*:･｡ﾟ･。ﾟ");
  fus.show(member).then((result) => {
    if (result.canceled) {
      sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §b§bTalvez no vio tu mensaje o no le importa.`)
    }
     if (result.selection === 0) {
       sendMsgToPlayer(playerid, `§r§b■§d§lUntravel§eMx§b■§r ${member.nameTag} §bYa vio tu mensaje.`)
     }
  });
}