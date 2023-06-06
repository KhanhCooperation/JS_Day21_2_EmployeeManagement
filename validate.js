// hợp lệ => true 
// ko hợp lệ => False
function showMessage(idSpan, message){
    document.getElementById(idSpan).innerText=message;
}
function kiemTraTrung(idSv, dssv){
    var index = dssv.findIndex(function (item) {
        return item.ma == idSv;
    })
    if (index == -1){
        showMessage("spanMaSV","");
        return true;
    } else {
        // dom show messa 
        showMessage("spanMaSV","Mã sv đã tồn tại");
        return false;
    }
}
function kiemTraDoDai(min, max , idSpan , message, value){
    var length= value.length;
    if(length >= min && length <= max){
        showMessage(idSpan, "");
        return true;
    }else{
        showMessage(idSpan,message);
        return false
    }
}
function kiemTraEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isEmail= re.test(email);
  if(isEmail){
    showMessage("spanEmailSV", "")
    return true;
  }else{
    showMessage("spanEmailSV", "Email không hợp lệ")
    return false;
  }
}