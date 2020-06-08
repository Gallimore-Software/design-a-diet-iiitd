import csv, json
from collections import defaultdict
import copy

csvFile = "recipes.csv"
csvFile2 = "ingredients.csv"
outputFile = "recipe.json"

data = defaultdict(list)
with open(csvFile2) as cf:
    csvReader = csv.DictReader(cf)
    
    for rows in csvReader:
        # print(rows)
        recipe_no = rows['recipe_no']
        data[recipe_no].append(rows['ingredient'])
        

final_data = {}        
with open(csvFile) as cf:
    csvReader = csv.DictReader(cf)
    for rows in csvReader:
        # print(rows)
        recipe_id, recipe_title = rows["Recipe_id"], rows["Recipe_title"]
        temp_dict = {}
        # temp_dict = copy.deepcopy(rows)
        
        temp_dict['ingredients'] = data[recipe_id]
        final_data[recipe_title] = copy.deepcopy(temp_dict)
        


with open(outputFile, 'w') as jsonFile:
    jsonFile.write(json.dumps(final_data, indent=2))
# print(json.dumps(final, indent=4))