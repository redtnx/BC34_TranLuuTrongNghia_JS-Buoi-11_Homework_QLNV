function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam,
  _loaiNV,
  _tongLuong
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.loaiNV = "";
  this.tongLuong = 0;

  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCB * 3;
    }
    if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = this.luongCB * 2;
    }
    if (this.chucVu === "Nhân viên") {
      this.tongLuong = this.luongCB;
    }
  };

  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.loaiNV = "Xuất sắc";
    }
    if (this.gioLam >= 176 && this.gioLam < 192) {
      this.loaiNV = "Giỏi";
    }
    if (this.gioLam >= 160 && this.gioLam < 176) {
      this.loaiNV = "Khá";
    }
    if (this.gioLam >= 0 && this.gioLam < 160) {
      this.loaiNV = "Trung Bình";
    }
  };
}
