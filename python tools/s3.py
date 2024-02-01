import json
from collections import OrderedDict
import operator

output = []
with open('stage2.json') as json_file:
    data = json.load(json_file)
    for cr in data:
      output.append({'cr': cr['cr'], 'types': sorted(cr['types'], key=operator.itemgetter('name'))})


with open('stage3.json', 'w', encoding='utf-8') as f:
  json.dump(output, f)
