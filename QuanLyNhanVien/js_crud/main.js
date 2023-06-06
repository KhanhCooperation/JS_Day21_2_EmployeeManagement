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
    var check= kiemtraTrungTen(id.ten, dsnv);
    if(check){
        //object nv
        var nvien =new nhanvien(id.taikhoan,id.ten,id.email, id.password, id.date, id.salary, id.chucvu, id.gioLam);
        //push vao array de push len LOCAL
        dsnv.push(nvien);
        //hien thi
        renderDSNV(dsnv);

        //push len LOCAL
        transferToLocal(dsnv, "DSNV");
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

