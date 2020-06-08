import json
import csv
import difflib
import os

ingredient_file = os.getcwd() + 'foods.json'
image_file = os.getcwd() + 'img-data.csv'

image_list = []
link_list = []

dic = {}

with open(image_file) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        image_list.append(row[1])
        link_list.append(row[9])
        dic[row[1]] = row[9]


with open(ingredient_file) as f:
    ingredient_list = json.load(f)

ingredient_name = []
for i in ingredient_list:
    ingredient_name.append(i['name'])

image_list = image_list[1:]

def helper(*args, **kwargs):
    helper.calls += 1
    return func(*args, **kwargs)
    helper.calls = 0
    helper.__name__= func.__name__

    return helper

def memoize(func):
    mem = {}
    def memoizer(*args, **kwargs):
        key = str(args) + str(kwargs)
        if key not in mem:
            mem[key] = func(*args, **kwargs)
        return mem[key]
    return memoizer


def levenshtein(s, t):
    if s == "":
        return len(t)
    if t == "":
        return len(s)
    if s[-1] == t[-1]:
        cost = 0
    else:
        cost = 1
    
    res = min([levenshtein(s[:-1], t)+1,
               levenshtein(s, t[:-1])+1, 
               levenshtein(s[:-1], t[:-1]) + cost])

    return res

score = 10000
string = ""
json.dumps(dic)
print(len(ingredient_name))
time = 0
final_list = {}
for i in ingredient_name:
    print(time)
    time += 1
    ans = difflib.get_close_matches(i, image_list, 3, 0.2)
    if (ans != []):
        final_list[i] = dic[ans[0]]
    else:
        final_list[i] = ''

with open('json_out.json', 'w') as file:
    json.dump(final_list, file)
