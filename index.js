const axios = require('axios');
const { DOMParser } = require('xmldom');
const xpath = require('xpath');

// Fungsi untuk melakukan scraping
async function scrapeData(url, xpathExpr) {
    try {
        // Melakukan permintaan HTTP GET menggunakan Axios
        const response = await axios.get(url);

        // Mengambil teks HTML dari respons
        const html = response.data;

        // Membuat objek DOM menggunakan DOMParser dari xmldom
        const doc = new DOMParser().parseFromString(html);

        // Evaluasi XPath untuk menemukan elemen yang diinginkan
        const result = xpath.evaluate(xpathExpr, doc, null, xpath.XPathResult.FIRST_ORDERED_NODE_TYPE, null);

        // Jika elemen ditemukan, kembalikan isi teksnya
        let data = {};
        if (result.singleNodeValue) {
            data.content = result.singleNodeValue.textContent.trim();
        } else {
            data.content = "Elemen tidak ditemukan.";
        }

        // Kembalikan data hasil scraping
        return data;
    } catch (error) {
        throw new Error('Terjadi kesalahan:', error.message);
    }
}

module.exports = scrapeData;
