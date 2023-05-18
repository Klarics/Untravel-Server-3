import { world, system } from "@minecraft/server";

import { ChatFilter } from "./chat";
import { itemUi } from "./worldUi";
//import { getScore } from "./utilsMx";
import {
  absorption,
  cooldownClassfunction,
  cooldown_p_1,
  cooldown_p_2,
  newJoin,
  resistance,
  speed,
} from "./cooldowns";
import { onJoin } from "./misc/onjoin";
import { serverBan } from "./misc/serverban";

//OnJoin
onJoin();
const overworld = world.getDimension("overworld");
let ticks = 0;
let ticksCombatUi = 0;

system.runInterval(() => {
  newJoin(); // puede usar el playerSpawn
  ticks++;
  cooldownClassfunction(ticks);
  cooldown_p_1(ticks);
  cooldown_p_2(ticks);
  speed();
  resistance();
  absorption();

  if (ticks % 40 === 0) {
    serverBan();
    //   overworld.runCommandAsync(`say un minuto general`);
  }
});

//itenUi
itemUi();

// Chat
ChatFilter();
