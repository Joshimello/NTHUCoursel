// const https = require('https')
// const url = 'https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json'
// https.get(url, res => res.pipe(fs.createWriteStream(`./rawdata.json`)))

import fs from 'fs'

let data = JSON.parse(decodeURIComponent(fs.readFileSync('../data/rawdata.json')))
let formatData = data.map(i => ({
    'subject': i.科號.slice(0, 9).replaceAll(' ', ''),
    'class': i.科號.slice(9, 15),
    'chiname': i.課程中文名稱,
    'engname': i.課程英文名稱,
    'credit': i.學分數,
    'capacity': i.人限,
    '_a': i.新生保留人數,
    '_b': i.通識對象,
    '_c': i.通識類別,
    'lang': i.授課語言,
    'desc': i.備註,
    '_d': i.停開註記,
    'venue': i.教室與上課時間.split('\t')[0],
    // 'time': (i.教室與上課時間.split('\t')[1])?i.教室與上課時間.split('\t')[1].match(/(..?)/g):'',
    'time': i.教室與上課時間.match(/[M||T||W||R||F||S][1-9||a-c||n]/g),
    'teacher': i.授課教師.split('\n').filter(i => i).map(i => i.split('\t')),
    'prereq': i.擋修說明,
    'limits': i.課程限制說明,
    '_e': i.第一二專長對應,
    '_f': i.學分學程對應,
    '_g': i.不可加簽說明,
    'forwho': i.必選修說明.split('\t').filter(i => i)
}))

fs.writeFileSync(`../data/data.json`, JSON.stringify(formatData, null, 4))