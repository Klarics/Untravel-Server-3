effect @a[tag=vivo,l=0,scores={kill=..799}] regeneration 6 3 true
scoreboard players add @a[tag=vivo,l=0] _Death 1
#tellraw @a[tag=vivo,l=0] {"rawtext":[{"text":"§b§l @a[tag=vivo,l=0] §dwas reduced to nothing"}]}
#say §b§l @a[tag=vivo,l=0] §dwas reduced to nothing
titleraw @a[tag=vivo,l=0] title {"rawtext":[{"text":"§cDeaths: §f"},{"score":{"name":"*","objective":"_Death"}},{"text":"\n §3D: §f"},{"score":{"name":"*","objective":"time_10"}},{"text":"  "},{"score":{"name":"*","objective":"time_11"}},{"text":":"},{"score":{"name":"*","objective":"time_01"}},{"text":":"},{"score":{"name":"*","objective":"time_00"}}]}
tellraw @a[tag=vivo,l=0] {"rawtext":[{"text":"§eTry not die again"}]}
execute @a[tag=vivo,l=0] ~ ~ ~ give @s[scores={Dones=2}] ender_pearl
xp 2l @a[tag=vivo,l=0]