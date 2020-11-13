const fs = require ('fs')

const dataBuffer2 = fs.readFileSync('1-json.json')
const dataJSON2 = dataBuffer2.toString()
const data2 = JSON.parse(dataJSON2)

data2.name = 'Oswaldo'
data2.age = '23'

const dataToSave = JSON.stringify(data2)
fs.writeFileSync('1-json.json', dataToSave)