// 1: abcabcbb => abc uzunluğu 3  olduğu şeklindedir... en uzun alt dizi
// bbbbbbbb => b => 1 ve uzunluk 1

const longestSubstring = (str) => {
    var map = {};
    var len = str.length;//8
    var start = 0;
    var max = 0;
    for (let i = 0; i < len; i++) {
        if (map[str[i]] !== undefined) {
            start = Math.max(start, map[str[i]] + 1);
        }
        map[str[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;

}

console.log(longestSubstring("abcabcbbaaaa")); // "abc"


// Bu fonksiyon, bir dizede ardışık olmayan en uzun alt dizedenin uzunluğunu hesaplar. Örneğin, "carabcabcbbaaaa" dizesi için en uzun ardışık olmayan alt dize "abc" dir ve uzunluğu 3'tür.

// Şimdi fonksiyonun adımlarını inceleyelim:

// map adında bir boş bir nesne oluşturulur. Bu nesne, karakterlerin son görünümlerini takip etmek için kullanılacaktır.
// len değişkeni, gelen dizenin uzunluğunu tutar.
// start değişkeni, mevcut alt dizenin başlangıç ​​konumunu tutar.
// max değişkeni, en uzun alt dizenin uzunluğunu tutar.
// Döngü, dizenin tüm karakterlerini tek tek geçer.
// Her bir karakter için:
// map nesnesindeki bu karakterin son indeksine bakılır.
// Eğer karakter daha önce görüldüyse, start değişkeni, bu karakterin bir sonraki indeksinden başlar (yani, bu karakterin son indeksinden bir sonraki indeks).
// Karakterin son görünümünün indeksi map nesnesine eklenir.
// En uzun alt dizenin uzunluğu (max), mevcut döngüdeki karakterin indeksi ile start arasındaki uzunluk olarak hesaplanır ve en büyük olan değer seçilir.
// Döngü tamamlandıktan sonra, max değişkeni en uzun ardışık olmayan alt dizenin uzunluğunu içerir ve bu değer return ifadesiyle döndürülür.
// Örneğin, "carabcabcbbaaaa" dizesi için:

// İlk olarak, "c" karakteri için map nesnesine bir giriş eklenir (map = { "c": 0 }).
// "a" karakteri için, map nesnesine bir giriş eklenir (map = { "c": 0, "a": 1 }) ve en uzun alt dize 2'dir.
// "r" karakteri için, map nesnesine bir giriş eklenir (map = { "c": 0, "a": 1, "r": 2 }) ve en uzun alt dize 3'tür.
// "a" karakteri için, start değişkeni "a" karakterinin son indeksi olan 1'den başlar ve map nesnesine bir giriş eklenir (map = { "c": 0, "a": 3, "r": 2 }) ve en uzun alt dize 3'tür.
// Bu işlem devam eder ve sonunda en uzun ardışık olmayan alt dize "abc" dir ve uzunluğu 3'tür.