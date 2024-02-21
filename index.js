//case 1 (mandatory): jumlah denom rupiah yang dibutuhkan untuk membayar nominal tertentu, jumlah denom tidak melebihi nominal (max sama) -- done
//case 2 (optional): denom bisa di config -- done

//hitung denom yang diperlukan
function getDenom(value, denominasi) {
  let remainValue = value;
  let numDenom = {};

  denominasi.sort((a, b) => b - a); // Urutkan denominasi dari yang terbesar

  for (let denom of denominasi) {
      if (remainValue >= denom) {
          const num = Math.floor(remainValue / denom);
          numDenom[denom] = num;
          remainValue -= denom * num;
      }
  }

  return numDenom;
}

const denomRupiah = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]; //config denom, bisa disesuaikan dengan kebutuhan
const value = 43000; //parameter value

const configsDenom = getDenom(value, denomRupiah);

console.log("Denominasi yang bisa digunakan:");
for (let denom in configsDenom) {
  console.log(`${denom} Rupiah: ${configsDenom[denom]} lembar`);
}
