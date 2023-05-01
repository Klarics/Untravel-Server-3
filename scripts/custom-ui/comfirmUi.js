import { ActionFormData } from "@minecraft/server-ui";
import { paladinClass } from "./paladinClass/paladinUi";

const functionDefinitions = Object.setPrototypeOf(
  {
    paladinClass: paladinClass,
  },
  null
);

export function comfirmBattle(playerId, clase) {
  let functionName = clase
  let confirmUi = new ActionFormData();
  confirmUi.title("§4A la Batalla");
  confirmUi.body(
    "\n§6Si das continuar y no has selecionado tus habiliades disponibles podras estar en desventaja"
  );
  confirmUi.button("§4Continuar");
  confirmUi.button("Regresar");
  confirmUi.show(playerId).then((result) => {
     if (result.canceled) {
        if (!(functionName in functionDefinitions)) {
            playerId.runCommandAsync(
              `say §cFuncion desconocido: §r§l${functionName}§r§c. Revisa que la funcion este registrada o avisa a un admin con una captura.`
            );
          }
          functionDefinitions[functionName](playerId);
       }
    if (result.selection == 0) {
      playerId.runCommandAsync(
        `tellraw @a {"rawtext":[{"text":"§aEn batalla. Espera 5 minutos para cambiar habilidades"}]}`
      );
    }
    if (result.selection == 1) {
      if (!(functionName in functionDefinitions)) {
        playerId.runCommandAsync(
          `say §cFuncion desconocido: §r§l${functionName}§r§c. Revisa que la funcion este registrada o avisa a un admin con una captura.`
        );
      }
      functionDefinitions[functionName](playerId);
    }
  });
}
