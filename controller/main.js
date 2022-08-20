var dsnv = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNV(isAdd) {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCB = getEle("luongCB").value;
  var chucVu = getEle("chucVu").value;
  var gioLam = getEle("gioLam").value;
  var tongLuong = 0;
  var loaiNV = "";

  // Tạo flag
  var isValid = true;

  // Kiểm tra rỗng #tknv
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(
        taiKhoan,
        "tbTKNV",
        "(*) Vui lòng nhập tài khoản"
      ) &&
      validation.kiemTraDoDaiKiTu(
        taiKhoan,
        "tbTKNV",
        "(*) Vui lòng nhập từ 4-6 kí tự",
        4,
        6
      ) &&
      validation.kiemTraTrungTaiKhoan(
        taiKhoan,
        "tbTKNV",
        "(*) Tài khoản đã tồn tại",
        dsnv.arr
      );
  }

  // Kiểm tra rỗng #name
  isValid &=
    validation.kiemTraRong(hoTen, "tbTen", "(*) Vui lòng nhập họ và tên") &&
    validation.kiemTraKiTuChuoi(hoTen, "tbTen", "(*) Vui lòng nhập chữ");

  // Kiểm tra rỗng #email
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email") &&
    validation.kiemTraEmail(email, "tbEmail", "(*) Vui lòng nhập đúng email");

  // Kiểm tra rỗng #password
  isValid &=
    validation.kiemTraRong(
      matKhau,
      "tbMatKhau",
      "(*) Vui lòng nhập mật khẩu"
    ) &&
    validation.kiemTraDoDaiKiTu(
      matKhau,
      "tbMatKhau",
      "(*) Vui lòng nhập từ 6-10 kí tự",
      6,
      10
    );

  // Kiểm tra rỗng #datepicker
  isValid &= validation.kiemTraRong(
    ngayLam,
    "tbNgay",
    "(*) Vui lòng nhập ngày làm"
  );

  // Kiểm tra rỗng #luongCB
  isValid &=
    validation.kiemTraRong(
      luongCB,
      "tbLuongCB",
      "(*) Vui lòng nhập lương cơ bản"
    ) &&
    validation.kiemTraLuongCB(
      luongCB,
      "tbLuongCB",
      "(*) Vui lòng nhập đúng lương cơ bản",
      1000000,
      20000000
    );

  // Kiểm tra rỗng #chucVu
  isValid &= validation.kiemTraChucVu(
    "chucVu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  // Kiểm tra rỗng #gioLam
  isValid &=
    validation.kiemTraRong(gioLam, "tbGioLam", "(*) Vui lòng nhập giờ làm") &&
    validation.kiemTraGioLam(
      gioLam,
      "tbGioLam",
      "(*) Vui lòng nhập đúng số giờ quy định",
      80,
      200
    );

  if (!isValid) return null;

  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam,
    tongLuong,
    loaiNV
  );

  // Tính tổng lương
  nhanVien.tinhTongLuong();

  // Xếp loại nhân viên
  nhanVien.xepLoaiNV();

  return nhanVien;
}

// Thêm nhân viên
getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV(true);

  if (nhanVien) {
    // Thêm nhân viên vào mảng arr
    dsnv._themNV(nhanVien);

    // Gọi hàm setLocalStorage để lưu data
    setLocalStorage();

    renderTable(dsnv.arr);
  }
});

// In thông tin ra table
function renderTable(data) {
  var content = "";
  data.forEach(function (sv) {
    content += `
    <tr>
        <td>${sv.taiKhoan}</td>
        <td>${sv.hoTen}</td>
        <td>${sv.email}</td>
        <td>${sv.ngayLam}</td>
        <td>${sv.chucVu}</td>
        <td>${sv.tongLuong}</td>
        <td>${sv.loaiNV}</td>
        <td><button class="btn btn-info"  data-toggle="modal" data-target="#myModal" onclick="suaNV('${sv.taiKhoan}')">Sửa</button></td>
        <td><button class="btn btn-danger" onclick="xoaNV('${sv.taiKhoan}')">Xóa</button></td>
    </tr>
    `;
  });

  getEle("tableDanhSach").innerHTML = content;
}

// Xóa nhân viên
function xoaNV(taiKhoan) {
  dsnv._xoaNV(taiKhoan);
  renderTable(dsnv.arr);
  setLocalStorage();
}

// Sửa nhân viên
function suaNV(taiKhoan) {
  var nv = dsnv._layThongTinNV(taiKhoan);
  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoTen;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCB;
    getEle("chucVu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
  }
}

// Cập nhật thông tin nhân viên
getEle("btnCapNhat").addEventListener("click", function () {
  var nhanVien = layThongTinNV(false);
  dsnv._capNhatNV(nhanVien);
  renderTable(dsnv.arr);
  setLocalStorage();
});

// Tìm kiếm nhân viên
getEle("searchName").addEventListener("keyup", function () {
  var keyWord = getEle("searchName").value;
  var mangTimKiem = dsnv._timKiemNV(keyWord);
  renderTable(mangTimKiem);
});

// Lưu dữ liệu về local storage
function setLocalStorage() {
  // Convert JSON => String
  var dataString = JSON.stringify(dsnv.arr);
  // Lưu xuống local storage
  localStorage.setItem("DanhSachNhanVien", dataString);
}

// Lấy dữ liệu từ local storage
function getLocalStorage() {
  if (localStorage.getItem("DanhSachNhanVien")) {
    var dataString = localStorage.getItem("DanhSachNhanVien");
    // Convert String => JSON
    var dataJson = JSON.parse(dataString);
    // Cập nhật lại dsnv.arr từ local storage
    dsnv.arr = dataJson;
    // Gọi lại hàm renderTable để in ra table
    renderTable(dataJson);
  }
}
