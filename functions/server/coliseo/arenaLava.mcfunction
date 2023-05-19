execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load airArena ~ ~4 ~
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ kill @e[type=boat,r=50]
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load ArenaLava2 ~ ~4 ~
scoreboard players set §bArenaWhither wither_Arena 4
say §c§lPlataforma §e§l§oFoso de Lava §cesta activa
#setblock ~-11 ~ ~-10 redstone_block
gamerule mobgriefing false
