reverseWords = (params) => {
  if (params == undefined) {
    console.log("Parameter harus diisi");
  } else {
    if (typeof params != "string") {
      console.log("Parameter harus bertipe string");
    } else {
      params = params + " ";
      let hasilArray = [];
      let hasilReverse = "";
      for (let i = 0; i < params.length; i++) {
        if (params[i] === " ") {
          //console.log(hasilReverse);
          hasilArray.unshift(hasilReverse);
          hasilReverse = "";
        } else {
          hasilReverse = hasilReverse + params[i];
        }
      }

      let hasilAkhir = "";
      hasilArray.map((item) => {
        hasilAkhir = hasilAkhir + " " + item;
      });
      console.log(hasilAkhir);
    }
  }
};

reverseWords();
reverseWords(1);
reverseWords("Saya belajar Javascript");
