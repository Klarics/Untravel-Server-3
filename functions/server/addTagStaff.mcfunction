execute @a[tag=Adminer,tag=!staffstatus] ~ ~ ~ tag @s add staffstatus
#Adminer
execute @a[tag=!Adminer] ~ ~ ~ tag @s remove Rank:§l§b★★★★★★★

execute @a[tag=Adminer] ~ ~ ~ tag @s add Rank:§l§b★★★★★★★
execute @a[tag=Adminer,tag=Admin] ~ ~ ~ tag @s remove Rank:§l§b★★★★★★
execute @a[tag=!Adminer,tag=Admin] ~ ~ ~ tag @s remove Rank:§l§b★★★★★★★
execute @a[tag=!Adminer,tag=Admin] ~ ~ ~ tag @s add Rank:§l§b★★★★★★


execute @a[tag=Admin,tag=Moderator] ~ ~ ~ tag @s remove Rank:§l§b★★★★★
execute @a[tag=!Admin,tag=Moderator] ~ ~ ~ tag @s remove Rank:§l§b★★★★★★
execute @a[tag=!Admin,tag=Moderator] ~ ~ ~ tag @s add Rank:§l§b★★★★★


execute @a[tag=Moderator,tag=Helper] ~ ~ ~ tag @s remove Rank:§l§b★★★★
execute @a[tag=!Moderator,tag=Helper] ~ ~ ~ tag @s add Rank:§l§b★★★★


execute @a[tag=Helper,tag=Tribulador] ~ ~ ~ tag @s remove Rank:§l§b★★★
execute @a[tag=!Helper,tag=Tribulador] ~ ~ ~ tag @s add Rank:§l§b★★★
execute @a[tag=Tribulador,tag=staffstatus] ~ ~ ~ tag @s add Rank:§l§b★★★
execute @a[tag=Tribulador,tag=!staffstatus] ~ ~ ~ tag @s remove Rank:§l§b★★★

#execute @a[tag=Admin,tag=!Moderator,tag=staffstatus]
execute @a[tag=Admin,tag=!Moderator,tag=staffstatus] ~ ~ ~ tag @s add Moderator
execute @a[tag=Moderator,tag=!Helper,tag=staffstatus] ~ ~ ~ tag @s add Helper
execute @a[tag=Helper,tag=!Tribulador,tag=staffstatus] ~ ~ ~ tag @s add Tribulador

execute @a[tag=Admin,tag=!Moderator,tag=!staffstatus] ~ ~ ~ tag @s remove Moderator
execute @a[tag=Moderator,tag=!Helper,tag=!staffstatus] ~ ~ ~ tag @s remove Helper
execute @a[tag=Helper,tag=!Tribulador,tag=!staffstatus] ~ ~ ~ tag @s remove Tribulador
