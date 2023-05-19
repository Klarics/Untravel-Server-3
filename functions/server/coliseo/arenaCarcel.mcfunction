execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load airArena ~ ~4 ~
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ kill @e[type=boat,r=50]
scoreboard players set §bArenaWhither wither_Arena 3
execute @e[type=npc,tag=§r§l§o§bColiseo§r] ~ ~ ~ structure load ArenaBarrier ~ ~4 ~
#setblock ~9 ~15 ~15 redstone_block
#setblock ~-26 ~15 ~15 redstone_block