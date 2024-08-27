function validateForm(){
    let username = document.getElementById("username").value
        if(username ==="") {
            alert("UserName can not be empty")
            return false;
        }
        return true;
}