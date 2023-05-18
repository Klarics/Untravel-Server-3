tag @s add Adminer
tag @s add staffstatus
tellraw @a {"rawtext":[{"text":"§aSe asignaron los permisos de Server (§d1§f/§d10§b)!"}]}
tickingarea add circle 0 ~ 0 2 Base
tickingarea add circle 50000 ~ 50000 2 Control
tellraw @a {"rawtext":[{"text":"§aTickingAreas agregados (§d2§f/§d10§b)!"}]}
structure load Zero000 -10 61 -10
structure load Control000 50000 200 50000
structure load airControl 50000 200 50000
tellraw @a {"rawtext":[{"text":"§aEstructuras de Control instaladas (§d3§f/§d10§b)!"}]}


gamerule  mobgriefing false
tellraw @a {"rawtext":[{"text":"§aGameRules Activados (§d4§f/§d10§b)!"}]}
#
#scoreboard objectives setdisplay below_name kill
tellraw @a {"rawtext":[{"text":"§aScores instaladas con exito (§d5§f/§d10§b)!"}]}
setblock -2 62 5 air
tellraw @a {"rawtext":[{"text":"§aProtecciones Activadas (§d6§f/§d10§b)!"}]}
tellraw @a {"rawtext":[{"text":"§aBelowName Activado (§d7§f/§d10§b)!"}]}
tellraw @a {"rawtext":[{"text":"§aSistema de maná Activado (§d8§f/§d10§b)!"}]}

tellraw @a {"rawtext":[{"text":"§aScores for Coliseo Added (§d9§f/§d10§b)!"}]}
structure load Control000 50000 200 50000
tellraw @a {"rawtext":[{"text":"§aClases - Todo Listo! (§d10§f/§d10§b)!"}]}
