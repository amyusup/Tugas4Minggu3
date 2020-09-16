divideAndSort = (params) => {
  if (params == undefined) {
    console.log("Parameter harus diisi");
  } else {
    if (typeof params != "number") {
      console.log("Parameter harus bertipe number");
    } else {
      //params = params.toString();
      params = params + "0";
      //console.log(params)
      var hasilBatas = "";
      var a = "";
      var hasilArray = [];
      for (let i = 0; i < params.length; i++) {
        if (params[i] === "0") {
          hasilArray.push(hasilBatas);

          hasilBatas = "";
        } else {
          hasilBatas = hasilBatas + params[i];
        }
      }

      //console.log(hasilArray);
      var hasilAkhir = "";
      for (let j = 0; j < hasilArray.length; j++) {
        hasilAkhir = hasilAkhir + Array.from(hasilArray[j]).sort();
      }

      //   hasilArray.map((item) => {
      //     hasilAkhir = hasilAkhir + Array.from(item).sort();
      //   });
      hasilAkhir = hasilAkhir.replace(/,/g, "");
      console.log(hasilAkhir);
    }
  }
};

divideAndSort(5956560159466056);
