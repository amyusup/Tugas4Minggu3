palindrom = (kata) => {
  if (kata == undefined) {
    console.log("Parameter harus diisi");
  } else {
    if (typeof kata != "string") {
      console.log("Parameter harus bertipe string");
    } else {
      kata = kata.toLowerCase();
      var hasil = "";
      for (let x = kata.length - 1; x >= 0; x--) {
        hasil = hasil + kata[x];
      }

      if (hasil === kata) {
        console.log("PALINDROM");
      } else {
        console.log("BUKAN PALINDROM");
      }
    }
  }
};

palindrom();
palindrom(1);
palindrom("Malam");
