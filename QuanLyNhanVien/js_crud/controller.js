// get Id 
function getidnv(){
    var taikhoan = document.getElementById("tknv").value;
    var ten=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value*1;
    var date=document.getElementById("datepicker").value;
    var salary=document.getElementById("luongCB").value*1;
    var chucvu = document.getElementById("chucvu").value;
    var gioLam=document.getElementById("gioLam").value;
    return{taikhoan,ten,email,email,password,date,salary,chucvu,gioLam}
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
            <td>0</td>
            <td>0</td>
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