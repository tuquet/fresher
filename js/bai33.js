document.write('<div><input type="number" id="a" /><div/>')
document.write('<div><input type="number" id="b" /><div/>')
document.write('<div><input type="number" id="c" /><div/>')
document.write('<input type="button" value="cong" onclick="cong()" />')
document.write('<input type="button" value="tru" onclick="tru()" />')
document.write('<input type="button" value="nhan" onclick="nhan()" />')
document.write('<input type="button" value="chia" onclick="chia()" />')
document.write('<input type="button" value="reset" onclick="reset()" />')
document.write('<input type="button" value="save" onclick="save()" />')
document.write('<input type="button" value="print" onclick="print()" />')
document.write('<div><input type="text" id="kq" /><div/>')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var kqTong = document.getElementById('kq')
var saveList = []
function cong() {
    kqTong.value = parseInt(a.value) + parseInt(b.value) + parseInt(c.value)
}
function tru() {
    kqTong.value = parseInt(a.value) - parseInt(b.value) - parseInt(c.value)
}
function nhan() {
    kqTong.value = parseInt(a.value) * parseInt(b.value) * parseInt(c.value)
}
function chia() {
    kqTong.value = parseInt(a.value) / parseInt(b.value) / parseInt(c.value)
}
function reset() {
    a.value = ''
    b.value = ''
    c.value = ''
    kqTong.value = ''
}
function save() {
    if(kqTong.value =='') return alert('Chua co ket qua')
    saveList.push(kqTong.value) 
    console.log(saveList)
    reset()
    alert('Da luu ket qua')
}

function print() {
    document.write(saveList)
}