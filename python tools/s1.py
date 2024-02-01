import json
from fractions import Fraction as F
output = {}

with open('monsters.json') as json_file:
    data = json.load(json_file)
    for m in data:
      cr = m['challenge_rating']
      m_type = m['type']
      ac = m['armor_class']
      if cr in output.keys():
          if m_type not in output[cr].keys():
            print("Add type: " + m_type + " to " + cr)
            output[cr][m_type] = [ac]
          elif ac not in output[cr][m_type]:
            print("Add AC: "+str(ac)+" to type "+m_type+" in "+cr)
            output[cr][m_type].append(ac)
      else:
        print("Add cr: "+ cr)
        output[cr]= {m_type: [ac]}
with open('stage1.json', 'w', encoding='utf-8') as f:
  json.dump(output, f)
