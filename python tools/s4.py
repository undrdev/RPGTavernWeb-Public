import json
from collections import OrderedDict
output = {}
with open('stage3.json') as json_file:
    data = json.load(json_file)
    output = OrderedDict(sorted(data.items()))




with open('stage4.json', 'w', encoding='utf-8') as f:
  json.dump(output, f)
