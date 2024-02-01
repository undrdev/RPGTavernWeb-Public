import json
output = []
with open('stage1.json') as json_file:
    data = json.load(json_file)
    for crKey,crValue in data.items():
      new_cr = []
      for type_key, type_value in crValue.items():
        new_cr.append({'name': type_key.capitalize(), 'ac': sorted(type_value)})
      output.append({'cr': crKey, 'types': new_cr})
with open('stage2.json', 'w', encoding='utf-8') as f:
  json.dump(output, f)
