import json,sys,os
j=sys.argv[1] if len(sys.argv)>1 else '.'
p=json.load(open(os.path.join(j,'voz/index.json'))); q=json.load(open(os.path.join(j,'voz/q/index.json')))
open(os.path.join(j,'voz/index.js'),'w').write('window.__VOZIDX='+json.dumps({'p':p,'q':q},separators=(',',':'))+';\n')
