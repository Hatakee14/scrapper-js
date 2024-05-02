
# Scrapping data sederhana

ambil data dari web secara sederhana


## Penggunaan

To deploy this project run

```bash
  npm i scrapperdata 
```
```bash
  const scrapeData = require('scrapperdata');

// URL dan XPath yang ingin Anda gunakan
const url = 'http://utd-pmikotapekalongan.com/category/donor-darah/';
const xpathExpr = '/html/body/div[1]/div[2]/div[2]/div[2]/aside[5]';

// Memanggil fungsi scrapeData dengan URL dan XPath yang diberikan
scrapeData(url, xpathExpr)
    .then(result => {
        console.log("Hasil scraping:", result);
        // Lakukan apapun yang Anda inginkan dengan hasil scraping di sini
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error.message);
    });

```


## TES
Cara Ambil xpath

masuk ke web yang akan anda scrapping

contoh
```bash
 http://utd-pmikotapekalongan.com/category/donor-darah/
```


klik kanan pada yang akan anda scarp setelah itu inspect elemen 


kemudian cari copy

dan copy full Xpath
