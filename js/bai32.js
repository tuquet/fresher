var a = 99
var b = 99
var c = 50
var ketqua = a * b
var tong = a + b + c
document.write('ta co a = '+ a +', ta co b = '+ b + ', ta co c = '+ c + '<br>')
document.write('<button onclick="doigiatri()">doi gia tri a</button>')
document.write('<button>doi gia tri b</button>')
document.write('<button>doi gia tri c</button><br>')
if (ketqua>tong){
    document.write('b * c phai nho hon a + b + c')
} else {
    
}
function doigiatri() {
    a = prompt('thay doi gia tri a')
    document.write('ta co a = '+ a +', ta co b = '+ b + ', ta co c = '+ c + '<br>')
}