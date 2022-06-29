times_futebol = [
    {"nome": "Palmeiras", "estado": "SP"},
    {"nome": "Vasco", "estado": "RJ"},
    {"nome": "Coritiba", "estado": "PR"},
    {"nome": "Gremio", "estado": "RS"},
]

estados_times = []

for times in times_futebol:
    estados_times.append(times["estado"])

    estados_times = [
      time for time in times_futebol if time["estado"] != "RJ"
    ]

    print(estados_times)

restaurants = [
  {"name": "Restaurante A", "nota": 4.5},
  {"name": "Restaurante B", "nota": 3.0},
  {"name": "Restaurante C", "nota": 4.2},
  {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


for index in range(6):
    print(index)