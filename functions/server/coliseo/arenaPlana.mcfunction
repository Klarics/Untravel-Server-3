execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load airArena ~ ~4 ~
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ kill @e[type=boat,r=50]
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load ArenaMain ~ ~4 ~
scoreboard players set §bArenaWhither wither_Arena 1
gamerule mobgriefing false
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ say §c§lPlataforma §6§l§oArena de Batalla §cesta activa
#setblock ~16 ~15 ~-30 redstone_block
#setblock ~-10 ~15 ~-29 redstone_block