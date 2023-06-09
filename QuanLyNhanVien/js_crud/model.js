// tao Object nhan vien  
function nhanvien(taikhoan, ten, email, password, date,salary, chucvu, gioLam){
    this.taikhoan = taikhoan;
    this.ten=ten;
    this.email=email;
    this.pass=password;
    this.date= date;
    this.chucvu= chucvu;
    this.luongCB= salary;
    this.gioLam= gioLam;
    //luong
    var luong=tongLuong(salary ,chucvu);
    this.tongLuong=luong;
    //xeploai
    var loai=xepLoai(gioLam);
    this.xepLoai=loai;
}