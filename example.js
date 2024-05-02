const scrapeData = require('./index.js');

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
