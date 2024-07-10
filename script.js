const text = "My viewers on Twich are the best! <3 ";

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}
setInterval(writeText, 100);

/*setInterval: Belirli aralıklarla (100 milisaniyede bir) writeText fonksiyonunu çağırır. Bu, metnin sürekli olarak ekranda yazılmasını sağlar.Bu fonksiyonunu kullanmak için başka bir tetikleyiciye veya komuta gerek yoktur. */
/*slice metodu, bir string veya array'in belirli bir kısmını almak için kullanılır.Bu ifade, text adlı string değişkeninin başlangıcından index değişkenine kadar olan kısmını döndürür. */
