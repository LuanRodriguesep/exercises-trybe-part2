from random import randint

pantheon_of_arton = [
    {"nome": "Wynna", "dominio": "Magia"},
    {"nome": "Nimb", "dominio": "Sorte"},
    {"nome": "Ahadarak", "dominio": "Tormenta"},
]

dice_roll = randint(1, 20)

if dice_roll == 1:
    print("vixi ... Deu ruim! ")
elif 2 <= dice_roll <= 15:
    print("Ahadarak, porque me atormenta!")
elif 16 <= dice_roll <= 19:
    print("Nimb, Obrigado pelo sorte")
else:
    print("Agora niguem me segura !")
