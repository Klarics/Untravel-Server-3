import { world } from "@minecraft/server";
import { banMessage, sendMsg, sendMsgToPlayer } from "../utilsMx.js";
//import { setTickInterval } from "../../../misc/scheduling.js";
import { queueUnban } from "../Commands/moderator/unban";

function serverBan() {
    
    // run as each player
    for (let player of world.getPlayers()) {
        if (!player.hasTag("isBanned")) {
            return   
        }
        if (queueUnban.has(player.nameTag)) {
            // Remove tag.
            player.removeTag("isBanned");
            let tags = player.getTags();
            // This removes old ban stuff
            tags.forEach((t) => {
                if (t.startsWith("Reason:")) {
                    player.removeTag(t);
                }
                if (t.startsWith("By:")) {
                    player.removeTag(t);
                }
            });
            // Remove player from queue
            queueUnban.delete(player.nameTag);
            // Let staff and player know they are unbanned
            sendMsgToPlayer(player, `§r§b■§d§lUntravel§eMx§b■§r§b Has sido desbaneado .`);
            sendMsg(`@a[tag=staffstatus]`, `§r§b■§d§lUntravel§eMx§b■§r ${player.nameTag} §b Ha sido desbaneado.`);
            continue;
        }
        // Ban message
        else
            banMessage(player);
    }
}
// const ServerBan = () => {
//     // Executes every 2 seconds
//     setTickInterval(() => serverban(), 40);
// };
export { serverBan };
