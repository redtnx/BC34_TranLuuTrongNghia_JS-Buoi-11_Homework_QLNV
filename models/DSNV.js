function DanhSachNhanVien() {
  this.arr = [];

  // Thêm nhân viên
  this._themNV = function (nv) {
    this.arr.push(nv);
  };

  // Tìm vị trí nhân viên
  this._timViTriNV = function (taiKhoan) {
    var index = -1;
    this.arr.forEach(function (nv, i) {
      if (nv.taiKhoan === taiKhoan) {
        index = i;
      }
    });
    return index;
  };

  // Xóa nhân viên
  this._xoaNV = function (taiKhoan) {
    var index = this._timViTriNV(taiKhoan);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  // Lấy thông tin nhân viên (để sửa)
  this._layThongTinNV = function (taiKhoan) {
    var nv = null;
    var index = this._timViTriNV(taiKhoan);

    if (index !== -1) {
      nv = this.arr[index];
    }

    return nv;
  };

  // Cập nhật nhân viên
  this._capNhatNV = function (nv) {
    var index = this._timViTriNV(nv.taiKhoan);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };

  // Tìm kiếm nhân viên
  this._timKiemNV = function (keyWord) {
    var mangTimKiem = [];

    this.arr.forEach(function (nv) {
      var xepLoaiLowerCase = nv.loaiNV.toLowerCase();
      var keyWordLowerCase = keyWord.toLowerCase();
      if (xepLoaiLowerCase.indexOf(keyWordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    });
    return mangTimKiem;
  };
}
