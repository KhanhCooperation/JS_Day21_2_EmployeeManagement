function showMessage(idSpan, message){
    document.getElementById(idSpan).innerText=message;
}
//ktra TaiKhoan
function kiemTraKySo(inputValue, idSpan, error_str){
    var regex=/^\d+$/;
    var check = regex.test(inputValue);
    if(check){
        showMessage(idSpan, " ");
        return true;
    }else{
        showMessage(idSpan,error_str);
        return false;
    }
}

// ktra ten 
function kiemtraTrungTen(idSV, dsnv ){
    var index= dsnv.findIndex(function(item){
        return item.ten == idSV;
    })
    if(index == -1){
        showMessage("tbTen", " ");
        return true;
    }else{
        showMessage("tbTen", "Tên đã tồn tại, hãy cập nhật");
        return false;
    }
}
// ktra email 
function kiemTraEmail(emailValue){
    const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var check=regex.test(emailValue);
    if(check){
        showMessage("tbEmail","");
        return true;
    }else{
        showMessage("tbEmail","Email không hợp lệ");
        return false;
    }
}
//ktra matkhau
function kiemTraKyTuDacBiet(inputValue, idSpan, error_str){
    var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    var check = regex.test(inputValue);
    if(check){
        showMessage(idSpan,"");
        return true;
    }else{
        showMessage(idSpan,error_str);
        return false;
    }
}
//ktra luongCB
function kiemTraLuongCB(inputValue, idSpan , error_str){
    var inputValue = inputValue*1;
    if(inputValue>= 1e6 && inputValue <= 2e7){
        showMessage(idSpan,"");
        return true;
    }else{
        showMessage(idSpan, error_str);
        return false;
    }
}
//chucvu
function kiemTraCV(inputValue, idSpan,error_str){
    if(inputValue == "Chọn chức vụ"){
        showMessage(idSpan, error_str);
        return false;
    }else{
        showMessage(idSpan, "");
        return true;
    }
}
//Gio lam
function kiemtraGioLam(inputValue , idSpan, error_str){
    var index=inputValue*1
    if(index >= 80 && index <=200){
        showMessage(idSpan, "");
        return true;
    }else{
        showMessage(idSpan,error_str);  
        return false;
    }
}
//fucntion chung
function kiemTraDoDai(min, max, inputValue, idSpan, error_str){
    var passLength = inputValue.length;
    if(passLength<min || passLength > max){
        showMessage(idSpan,error_str);
        return false;
    }else{
        showMessage(idSpan,"");
        return true;
    }
}
function kiemtraTrong(inputValue,idSpan, error_str){
    var length = inputValue.length;
    if(length > 0){
        showMessage(idSpan, " ");
        return true;
    }else{
        showMessage(idSpan,error_str);
        return false
    }
}