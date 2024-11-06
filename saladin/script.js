// Data aksara Jawa untuk angka 0-9
const aksaraJawa = {
    '0': '꧐',
    '1': '꧑',
    '2': '꧒',
    '3': '꧓',
    '4': '꧔',
    '5': '꧕',
    '6': '꧖',
    '7': '꧗',
    '8': '꧘',
    '9': '꧙'
};

let currentQuestion = '';  // Aksara Jawa yang ditampilkan
let correctAnswer = '';    // Jawaban yang benar

// Fungsi untuk membuat angka acak dari satuan, puluhan, atau ratusan
function randomAksara() {
    let maxDigits = Math.floor(Math.random() * 3) + 1 ; // Pilih acak antara 1 sampai 3 digit
    let randomNumber = Math.floor(Math.random() * Math.pow(10, maxDigits)); // Buat angka acak sesuai jumlah digit

    correctAnswer = randomNumber.toString(); // Simpan jawaban benar dalam bentuk string
    currentQuestion = convertToAksara(correctAnswer); // Konversi ke aksara Jawa

    document.getElementById('aksaraJawa').textContent = currentQuestion; // Tampilkan aksara
}

// Fungsi untuk mengonversi angka Latin ke aksara Jawa
function convertToAksara(numberString) {
    let aksaraResult = '';
    for (let digit of numberString) { // Untuk setiap digit angka
        aksaraResult += aksaraJawa[digit]; // Tambahkan aksara Jawa yang sesuai
    }
    return aksaraResult; // Kembalikan string aksara Jawa
}

// Fungsi untuk mengecek jawaban
function checkAnswer() {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');

    if (userInput == correctAnswer) { // Jika jawaban benar
        resultElement.textContent = 'Benar!';
        resultElement.style.color = 'green';
    } else { // Jika jawaban salah
        resultElement.textContent = `Salah! Angka yang benar adalah ${correctAnswer}`;
        resultElement.style.color = 'red';
    }
}

// Fungsi untuk pindah ke pertanyaan berikutnya
function nextQuestion() {
    document.getElementById('userInput').value = ''; // Bersihkan input
    document.getElementById('result').textContent = ''; // Bersihkan hasil
    randomAksara(); // Tampilkan aksara baru
}

// Mulai game dengan pertanyaan pertama
window.onload = randomAksara;
