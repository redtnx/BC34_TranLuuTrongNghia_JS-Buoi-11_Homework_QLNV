function Validation() {
  this.kiemTraRong = function (value, errorID, message) {
    if (value === "") {
      getEle(errorID).style.display = "block";
      getEle(errorID).innerHTML = message;
      return false;
    }
    getEle(errorID).style.display = "none";
    getEle(errorID).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiKiTu = function (value, errorID, message, min, max) {
    if (value.length >= min && value.length <= max) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  this.kiemTraKiTuChuoi = function (value, errorID, message) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  this.kiemTraEmail = function (value, errorID, message) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  // this.kiemTraNgay = function (value, errorID, message) {
  //   var letter = +mm / dd / yyyy;
  //   if (value.match(letter)) {
  //     getEle(errorID).style.display = "none";
  //     getEle(errorID).innerHTML = "";
  //     return true;
  //   }
  //   getEle(errorID).style.display = "block";
  //   getEle(errorID).innerHTML = message;
  //   return false;
  // };

  this.kiemTraLuongCB = function (value, errorID, message, min, max) {
    if (value >= min && value <= max) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  this.kiemTraChucVu = function (selectID, errorID, message) {
    if (getEle(selectID).selectedIndex !== 0) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  this.kiemTraGioLam = function (value, errorID, message, min, max) {
    if (value >= min && value <= max) {
      getEle(errorID).style.display = "none";
      getEle(errorID).innerHTML = "";
      return true;
    }
    getEle(errorID).style.display = "block";
    getEle(errorID).innerHTML = message;
    return false;
  };

  this.kiemTraTrungTaiKhoan = function (value, errorID, message, list) {
    var status = list.some(function (nv) {
      return value === nv.taiKhoan;
    });

    if (status) {
      getEle(errorID).style.display = "block";
      getEle(errorID).innerHTML = message;
      return false;
    }
    getEle(errorID).style.display = "none";
    getEle(errorID).innerHTML = "";
    return true;
  };
}
