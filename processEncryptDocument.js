const serviceFile = require('./serviceFile');
const db  = require('diskdb');

db.connect('./db', ['indexKey']);

let arrKey = serviceFile.readCensoredKey();

let arrLines = serviceFile.readInputDocument(); 
arrLines.forEach((line)=> {
  arrKey.forEach((key)=>{
    var indexOfKey = line.indexOf(key)
    if( indexOfKey >0 ){
      const indexArr = db.indexKey.findOne({id: key});
        if(indexArr) {
            const query = {
                id: key
            };
            
            var options = {
                multi: false,
                upsert: true
             };
            
            if (!indexArr.includes(indexOfKey)){
              indexArr.push(indexOfKey);
            }

            db.parts.update(query, indexArr, options);
        } else {
          db.indexKey.save({id: indexOfKey, indexList:[indexOfKey]})
        }
      line = line.replace(key, "XXXX")
      serviceFile.writeOutputDocument(line)  
    }
  })
})


