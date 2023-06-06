function showMessage(idSpan, message){
    document.getElementById(idSpan).innerText=message;
}

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
