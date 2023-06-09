// get Id 
function getidnv(){
    var taikhoan = document.getElementById("tknv").value;
    var ten=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var date=document.getElementById("datepicker").value;
    var salary=document.getElementById("luongCB").value;
    var chucvu = document.getElementById("chucvu").value;
    var gioLam=document.getElementById("gioLam").value;
    return{taikhoan,ten,email,password,date,salary,chucvu,gioLam}
}

// render dsnv
function renderDSNV(dsnv){
    var contentHTML="";
    for (let i = 0; i < dsnv.length; i++) {
        var content=`
        <tr>
            <td>${dsnv[i].taikhoan}</td>
            <td>${dsnv[i].ten}</td>
            <td>${dsnv[i].email}</td>
            <td>${dsnv[i].date}</td>
            <td>${dsnv[i].chucvu}</td>
            <td>${dsnv[i].tongLuong}</td>
            <td>${dsnv[i].xepLoai}</td>
            <td>
            <button 
            class="btn btn-warning" 
            onclick="suaNV('${dsnv[i].ten}')"
            data-toggle="modal"
            data-target="#myModal">Sửa</button>
            <button class="btn btn-danger" onclick="xoaNV('${dsnv[i].ten}')">Xóa</button>
            </td>
        </tr>
        `
        contentHTML+= content;
    }
    document.getElementById("tableDanhSach").innerHTML=contentHTML;
}
//bỏ vào local
function transferToLocal(dsnv, item_name_str){
    var data= JSON.stringify(dsnv);
    localStorage.setItem(item_name_str, data);
}

//Get information from LOCAL
function transferFromLocal(item_name_str,dsnv){
    var data_converted=localStorage.getItem(item_name_str);
    dsnv=JSON.parse(data_converted);
}

function tongLuong (valueluongcb, chucvu){
    if(chucvu == "Sếp" ){
        return valueluongcb*3;
    }else if (chucvu == "Trưởng phòng"){
        return valueluongcb*2;
    }else{
        return valueluongcb*1;
    }
}
function xepLoai(valueGioLam){
    valueGioLam=valueGioLam*1;
    if(valueGioLam >= 192){
        return "Xuất sắc"
    }else if (valueGioLam >= 176){
        return "Giỏi";
    }else if (valueGioLam >= 160){
        return "Khá";
    }else{
        return "Trung Bình";
    }
}