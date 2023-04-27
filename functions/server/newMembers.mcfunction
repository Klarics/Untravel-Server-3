effect @a[tag=!vivo] regeneration 6 3 true
replaceitem entity @a[tag=!vivo] slot.hotbar 0 mx:class 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}
xp 1l @a[tag=!vivo]
#tellraw @s[tag=!vivo] {"rawtext":[{"text":"§b§l"},{"selector":"*"},{"text":" §ewelcome to Untravel, the world limit is 4000 blocks and the spawn is to eliminate players if you absorb their xp, good luck \n §aFollow the path y see the Temple spawn .. go back there and take a Skill inside the pressure plate \n §b Remember that to get title and title range effects you must get kills in spawn.. so kills and absorb xp in spawn"}]}
execute @a[tag=!vivo] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§dMiembro nuevo!"}]} 
tag @a[tag=!vivo] add vivo