#  Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

nomes = ["Luan", "Karoline", "Eduardo", "Amora", "Milk"]
quantidade_caracter = []


# def maior_nome(list):
#     for count in list:
#         quantidade_caracter.append(len(count))
#         maior_quant = max(quantidade_caracter)
#         if len(count) == maior_quant:
#             return count

def maior_nome(list):
    maior_string = nomes[0]

    for count in list:
        if len(count) > len(maior_string):
            maior_string = count
    return maior_string
