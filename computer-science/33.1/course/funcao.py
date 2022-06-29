def imc(peso, altura):
    return peso / (altura / 100) ** 2


print(imc(100, 185))  # chamada posicional

print(imc(peso=95, altura=1.79))
