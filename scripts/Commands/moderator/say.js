import { world } from "@minecraft/server";
import { sendMsg, sendMsgToPlayer, prefix } from "../../utilsMx.js";
import {
  sayOption,
  sayJust,
  sayNothing,
  sayLike,
} from "../../custom-ui/sayUi.js";

function sayHelp(player, prefix) {
  //     let commandStatus;
  //     if (!config.customcommands.op) {
  //         commandStatus = "§a[§bDISABLED§a]§r";
  //     }
  //     else {
  //         commandStatus = "§a[§aENABLED§a]§r";
  //     }
  return sendMsgToPlayer(player, [
    `\n§b~§aCommand§b~§r: say`,
    //         `§b~§aStatus§b~§r: ${commandStatus}`,
    `§b~§aUsage§b~§r: say [optional]`,
    `§b~§aOptional§b~§r: NameTag, Mensaje, help`,
    `§b~§aDescription§b~§r: Manda mensaje a preguntas a un jugador en su pantalla principal, \n para resivir respuesta la pregunta debe inicair con: §d¿.`,
    `§b~§aExamples§b~§r:`,
    `          ${prefix}say ${player.name} Gracias por el sacrificio`,
    `          ${prefix}say ${player.name} ¿Quieres que te bendiga?`,
    `          ${prefix}say ${player.name} // si no pones mensaje el jugador recivira un cuadro donde dice que lo observas`,
    `          ${prefix}say ${player.name} like tu pvp // A <titulo> le gusta tu pvp`,
    `          ${prefix}say ${player.name} like tus hazañas // A <titulo> le gusta tus azañas`,

    `          ${prefix}say help`,
  ]);
}
export function say(message, args, args2, commandName) {
  message.cancel = true;
  let player = message.sender;
  let argCheck = args[0]; // nametag
  let mensaje = args.slice(1).join(" ") || "..."; // segundo string o mensaje
  let mensaje2 = args.slice(2).join(" ") || "";
  let member;
  let tags = player.getTags();
  let titleOne = "Un Dios Desconocido";

  if (!player.hasTag("staffstatus") || !player.hasTag("OlimpO")) {
    return sendMsgToPlayer(
      player,
      `§cComando desconocido: §r${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`
    );
  }
  if (!args.length) {
    return sayHelp(player, prefix);
  }
  if (argCheck && args[0].toLowerCase() === "help") {
    return sayHelp(player, prefix);
  }

  for (let pl of world.getPlayers()) {
    if (
      pl.nameTag
        .toLowerCase()
        .includes(args[0].toLowerCase().replace(/"|\\|@/g, ""))
    ) {
      member = pl;
    }
  }

  if (!member) {
    return sendMsgToPlayer(
      player,
      `§r§b■§d§lUntravel§eMx§b■§r§b Jugador no encontrado!`
    );
  }
   if (member === player) {
       return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§b No te puedes mencionar a ti mismo.`);
   }

  for (const tag of tags) {
    if (tag.startsWith("Title:")) {
      titleOne = tag.replace("Title:", "");
      titleOne = titleOne.replaceAll("--", "§o§7><§r");
    }
  }
  let titleName = `§7<§3${titleOne}§7>§r §7${player.name}§r`;
  let titleTag = `§7<§3${titleOne}§7>§r`;

  
// verifica si es pregunta
  if (
    player.hasTag("staffstatus") &&
    player.hasTag("OlimpO") &&
    mensaje.startsWith("¿")
  ) {
    sayOption(player, member, mensaje, titleTag); // funcion(object,object, string, string)
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a preguntó: §r${mensaje} §aa §r${member.nameTag}.`
    );
    return;
  }
//verifica si es like
  if (
    player.hasTag("staffstatus") &&
    player.hasTag("OlimpO") &&
    mensaje.startsWith("like")
  ) {
    let titleName = `§7<§3${titleOne}§7>§r §7${player.name}§r`;
    let titleTag = `§7<§3${titleOne}§7>§r`;
    sayLike(player, member, titleTag, mensaje2); // funcion(object,object, string)
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a dio like: §r${member.nameTag}§a mensaje: §r${mensaje2}.`
    );
    return;
  }
//verifica si esta vacio y solo envia te observa
  if (
    player.hasTag("staffstatus") &&
    player.hasTag("OlimpO") &&
    mensaje.startsWith("...")
  ) {
    sayNothing(player, member, titleTag); // funcion(object,object, string)
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a hizo tap a: §r${member.nameTag}.`
    );
    return;

    //envia mensaje simple
  } else if (player.hasTag("staffstatus") && player.hasTag("OlimpO")) {
    sayJust(player, member, mensaje, titleTag);
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a dijo: §r${mensaje} §aa §r${member.nameTag}.`
    );
    return;
  }
}
