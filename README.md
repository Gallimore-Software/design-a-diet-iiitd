# design-a-diet-iiitd

Figma Link: https://www.figma.com/file/aXWr5NgxvxNFU7U3vwuxS0/Design-A-Diet?node-id=0%3A1


# Server Description

1. To run the server, 
    - `yarn install`
    - `yarn start`

2. Endpoints
    - `http://localhost:3001/food` GET
    - `http://localhost:3001/food/:query` GET

3. Sample response
    ```
    [
  {
    "name": "72 proof creme de menthe Alcoholic beverage",
    "servings": 0,
    "nutrients": {
      "Alanine": 0,
      "Alcohol, ethyl": 29.8,
      "Arginine": 0,
      "Ash": 0.01,
      "Aspartic acid": 0,
      "Beta-sitosterol": null,
      "Betaine": null,
      "Caffeine": 0,
      "Calcium, Ca": 0,
      "Campesterol": null,
      "Carotene, alpha": 0,
      "Carotene, beta": 0,
      "Cholesterol": 0,
      "Choline, total": 0,
      "Copper, Cu": 0.00008,
      "Cryptoxanthin, beta": 0,
      "Cystine": 0,
      "Dihydrophylloquinone": null,
      ...
      "Vitamin A": 0,
      "Vitamin B-12": 0,
      "Vitamin B-12, added": 0,
      "Vitamin B-6": 0,
      "Vitamin C, total ascorbic acid": 0,
      "Vitamin D (D2 + D3)": 0,
      "Vitamin D2": null,
      "Vitamin D3": null,
      "Vitamin E": 0,
      "Vitamin E, added": 0,
      "Vitamin K (phylloquinone)": 0,
      "Water": 28.3,
      "Zinc, Zn": 0.00004
    },
    "proteins": null,
    "carbohydrates": 41.6,
    "fat": 0.3,
    "calories": 371
  },
  {
    "name": "90 proof gin distilled Alcoholic beverage",
    "servings": 0,
    "nutrients": {
      "Alanine": 0,
      "Alcohol, ethyl": 37.9,
      "Arginine": 0,
      "Ash": 0,
      "Aspartic acid": 0,
      "Beta-sitosterol": null,
      "Betaine": null,
      "Caffeine": 0,
      "Calcium, Ca": 0,
      "Campesterol": null,
      "Carotene, alpha": 0,
      "Carotene, beta": 0,
      "Cholesterol": 0,
      "Choline, total": 0,
      "Copper, Cu": 0.000004,
      "Cryptoxanthin, beta": 0,
      "Cystine": 0,
      "Dihydrophylloquinone": null,
      "Fatty acids, total monounsaturated": 0,
      "Fatty acids, total polyunsaturated": 0,
      "Fatty acids, total polyunsaturated 15:0": null,
      "Fatty acids, total polyunsaturated 16:1 c": null,
      "Fatty acids, total polyunsaturated 16:1 t": null,
      "Fatty acids, total polyunsaturated 17:0": null,
        ...
      "Lutein + zeaxanthin": 0,
      "Lycopene": 0,
      "Lysine": 0,
      "Magnesium, Mg": 0,
      "Maltose": null,
      "Manganese, Mn": 0,
      "Menaquinone-4": null,
      "Methionine": 0,
      "Niacin": 0,
      "Pantothenic acid": 0,
      "Phenylalanine": 0,
      "Phosphorus, P": 0,
      "Phytosterols": null,
      "Potassium, K": 0,
      "Proline": 0,
      "proteins": 0,
      "Retinol": 0,
      "Riboflavin": 0,
      "Selenium, Se": 0,
      "Serine": 0,
      "Sodium, Na": 0.002,
      "Starch": null,
      "Stigmasterol": null,
      "Sucrose": null,
      "Sugars, total": 0,
      "Theobromine": 0,
      "Thiamin": 0,
      "Threonine": 0,
      "Tocopherol, beta": null,
      "Tocopherol, delta": null,
      "Tocopherol, gamma": null,
      "Tocotrienol, alpha": null,
      "Tocotrienol, beta": null,
      "Tocotrienol, delta": null,
      "Tocotrienol, gamma": null,
      "Tryptophan": 0,
      "Tyrosine": 0,
      "Valine": 0,
      "Vitamin A": 0,
      "Vitamin B-12": 0,
      "Vitamin B-12, added": 0,
      "Vitamin B-6": 0,
      "Vitamin C, total ascorbic acid": 0,
      "Vitamin D (D2 + D3)": 0,
      "Vitamin D2": null,
      "Vitamin D3": null,
      "Vitamin E": 0,
      "Vitamin E, added": 0,
      "Vitamin K (phylloquinone)": 0,
      "Water": 62.1,
      "Zinc, Zn": 0
    },
    "proteins": null,
    "carbohydrates": 0,
    "fat": 0,
    "calories": 263
  },
  {
    "name": "80 proof rum distilled Alcoholic beverage",
    "servings": 0,
    "nutrients": {
      "Alanine": 0,
      "Alcohol, ethyl": 33.4,
      "Arginine": 0,
      "Ash": 0.01,
        ...
      "Zinc, Zn": 0.00007
    },
    "proteins": null,
    "carbohydrates": 0,
    "fat": 0,
    "calories": 231
  }
]
    ```