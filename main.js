const son1 = +prompt(`Birinchi sonni kiriting`);
const son2 = +prompt(`Ikkinchi sonni kiriting`);

const amal = +prompt(`
1. Qo'shish
2. Ayirish
3. Kopaytirish
4. Bolish
Tanlang (1, 2, 3, 4)`);

let natija;

if (amal === 1) {
    natija = son1 + son2;
    console.log(`${son1} + ${son2} = ${natija}`);
} else if (amal === 2) {
    natija = son1 - son2;
    console.log(`${son1} - ${son2} = ${natija}`);
} else if (amal === 3) {
    natija = son1 * son2;
    console.log(`${son1} * ${son2} = ${natija}`);
} else if (amal === 4) {
    natija = son1 / son2;
    console.log(`${son1} / ${son2} = ${natija}`);
} else {
    console.log("Noto'g'ri tanlov!");
}