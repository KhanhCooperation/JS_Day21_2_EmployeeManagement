var dsnv=[];
//render ra:
var dataJSON_nv= localStorage.getItem("DSNV");
if(dataJSON_nv != null){
    dsnv=JSON.parse(dataJSON_nv);
    renderDSNV(dsnv);
}
function themnv(){
    //ID nhanvien
    var id=getidnv();
    //validate
        //TaiKhoan
    var kiemtraTaiKhoan=
    kiemtraTrong(id.taikhoan,"tbTKNV","Trường không được để trống")
    &&kiemTraDoDai(4,6,id.taikhoan,"tbTKNV","Tài khoản phải có độ dài từ 4 đến 6 ký số") 
    &&kiemTraKySo(id.taikhoan,"tbTKNV","Trường chỉ chứa ký số");
        //Ten
    var kiemtraTen=
    kiemtraTrong(id.ten,"tbTen","Trường không được để trống")
    &&kiemtraTrungTen(id.ten, dsnv)
        //email
    var kiemTrEmail= 
    kiemtraTrong(id.email,"tbEmail","Trường không được để trống")
    &&kiemTraEmail(id.email);
        //Password
    var kiemtraPass=
    kiemtraTrong(id.password,"tbMatKhau","Trường không được để trống")
    && kiemTraDoDai(6,10,id.password,"tbMatKhau","Mật khẩu phải có độ dài từ 6 đến 10 ký tự") 
    && kiemTraKyTuDacBiet(id.password,"tbMatKhau", "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt")
        //ktra date
    var kiemtraDate=
    kiemtraTrong(id.date,"tbNgay","Trường không được để trống");
        //ktra Salary
    var kiemtraLuong=
    kiemtraTrong(id.salary,"tbLuongCB","Trường không được để trống")
    && kiemTraLuongCB(id.salary,"tbLuongCB" , "Luơng không hợp lệ" );
        //ktra CV
    var kiemtraChucVu=
    kiemTraCV(id.chucvu, "tbChucVu","Không hợp lế");
        //ktra GioLam
    var kiemtraGiolam=
    kiemtraTrong(id.gioLam,"tbGiolam","Trường không được để trống")
    && kiemtraGioLam(id.gioLam, "tbGiolam", "Giờ làm không hợp lệ");
    //checkvalidate
    var check= 
    kiemtraTaiKhoan 
    & kiemtraTen 
    & kiemTrEmail 
    & kiemtraPass
    & kiemtraDate
    & kiemtraLuong
    & kiemtraChucVu 
    & kiemtraGiolam;
 
    if(check){ 
        //object nv
        var nvien =new nhanvien(id.taikhoan,id.ten,id.email, id.password, id.date, id.salary, id.chucvu, id.gioLam);
        //push vao array de push len LOCAL
        dsnv.push(nvien);
        //hien thi
        renderDSNV(dsnv);

        //push len LOCAL
        transferToLocal(dsnv, "DSNV");
        console.log(nvien);
    }
    
}

function xoaNV(ten){
    var index= dsnv.findIndex(function(item){
        return item.ten== ten;
    });
    dsnv.splice(index, 1);
    renderDSNV(dsnv);
    
    //push len LOCAL
    transferToLocal(dsnv, "DSNV");
}

function suaNV(ten){
    var index= dsnv.findIndex(function(item){
        return item.ten== ten;
    });
    
    // đưa lên form 
    var nv= dsnv[index];
    document.getElementById("tknv").value= nv.taikhoan;
    document.getElementById("name").value=nv.ten;
    document.getElementById("email").value=nv.email;
    document.getElementById("password").value=nv.pass;
    document.getElementById("datepicker").value= nv.date;
    document.getElementById("luongCB").value=nv.luongCB;
    document.getElementById("chucvu").value=nv.chucvu;
    document.getElementById("gioLam").value=nv.gioLam;
}

function capnhatnv(){
    var id=getidnv();
    //validate
        //TaiKhoan
    var kiemtraTaiKhoan=
    kiemtraTrong(id.taikhoan,"tbTKNV","Trường không được để trống")
    &&kiemTraDoDai(4,6,id.taikhoan,"tbTKNV","Tài khoản phải có độ dài từ 4 đến 6 ký số") 
    &&kiemTraKySo(id.taikhoan,"tbTKNV","Trường chỉ chứa ký số");
        //Ten
    var kiemtraTen=
    kiemtraTrong(id.ten,"tbTen","Trường không được để trống")
    &&kiemtraTrungTen(id.ten, dsnv)
        //email
    var kiemTrEmail= 
    kiemtraTrong(id.email,"tbEmail","Trường không được để trống")
    &&kiemTraEmail(id.email);
        //Password
    var kiemtraPass=
    kiemtraTrong(id.password,"tbMatKhau","Trường không được để trống")
    && kiemTraDoDai(6,10,id.password,"tbMatKhau","Mật khẩu phải có độ dài từ 6 đến 10 ký tự") 
    && kiemTraKyTuDacBiet(id.password,"tbMatKhau", "Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt")
        //ktra date
    var kiemtraDate=
    kiemtraTrong(id.date,"tbNgay","Trường không được để trống");
        //ktra Salary
    var kiemtraLuong=
    kiemtraTrong(id.salary,"tbLuongCB","Trường không được để trống")
    && kiemTraLuongCB(id.salary,"tbLuongCB" , "Luơng không hợp lệ" );
        //ktra CV
    var kiemtraChucVu=
    kiemTraCV(id.chucvu, "tbChucVu","Không hợp lế");
        //ktra GioLam
    var kiemtraGiolam=
    kiemtraTrong(id.gioLam,"tbGiolam","Trường không được để trống")
    && kiemtraGioLam(id.gioLam, "tbGiolam", "Giờ làm không hợp lệ");
    //checkvalidate
    var check= 
    kiemtraTaiKhoan 
    & kiemtraTen 
    & kiemTrEmail 
    & kiemtraPass
    & kiemtraDate
    & kiemtraLuong
    & kiemtraChucVu 
    & kiemtraGiolam;
    if(check){
        // lay index để update 
    var ten=document.getElementById("name").value;
    var index= dsnv.findIndex(function(item){
        return item.ten== ten;
    });
    if (index == -1){
        return 0;
    }
    //lay id và update
    var id=getidnv();
    var nvien =new nhanvien(id.taikhoan,id.ten,id.email, id.password, id.date, id.salary, id.chucvu, id.gioLam);
    //splice and replace
    dsnv.splice(index, 1, nvien);

    //render lại và push lên local
    renderDSNV(dsnv);
    transferToLocal(dsnv, "DSNV");
    }
}

//sorting
let timNV = (str_xl) =>{
    document.getElementById("searchName").value=str_xl;
    phanloai(str_xl);
}
let clear_sorting = () => {
    document.getElementById("searchName").value="";
}