/////////////////
// OPEN MODALS //
/////////////////
function request_access($this){
    var request_data = $this.id;
    console.log("Opening: " + request_data);
    var obj = document.getElementById(""+request_data+"modal");
    obj.style.display = "block";
}
