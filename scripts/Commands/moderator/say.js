import { world } from "@minecraft/server";
import { sendMsg, sendMsgToPlayer, prefix } from "../../utilsMx.js";
import { sayOption, sayJust } from "../../custom-ui/sayUi.js";

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
    `          ${prefix}say help`,
  ]);
}
export function say(message, args, args2, commandName) {
  message.cancel = true;
  let player = message.sender;
  let argCheck = args[0];
  let mensaje = args.slice(1).join(" ") || "                         ...";
  let member;
  if (!player.hasTag("staffstatus") || !player.hasTag("OlimpO")) {
    return sendMsgToPlayer(player, `§cComando desconocido: §r${commandName}§r§c. Revisa que el comando exista y que tengas permiso para usarlo.`);
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
  // if (member === player) {
  //     return sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§b No te puedes mencionar a ti mismo.`);
  // }
  if (
    player.hasTag("staffstatus") &&
    player.hasTag("OlimpO") &&
    mensaje.startsWith("¿")
  ) {
    sayOption(player, member, mensaje); // funcion(object,object, string, string)
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a preguntó: §r${mensaje} §aa §r${member.nameTag}.`
    );

    //
    return;
  } else if (player.hasTag("staffstatus") && player.hasTag("OlimpO")) {
    sayJust(player, member, mensaje);
    sendMsg(
      "@a[tag=Adminer]",
      `§c[!]§r ${player.nameTag}§a dijo: §r${mensaje} §aa §r${member.nameTag}.`
    );
    return;
  }
}
