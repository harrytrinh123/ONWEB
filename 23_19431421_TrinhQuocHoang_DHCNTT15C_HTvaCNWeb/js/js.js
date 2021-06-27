$(document).ready(function(e) {
    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtName").val() == "") {
            $("#tbName").html("Không được rỗng");
            return false;
        }
        if(!re.test($("#txtName").val())) {
            $("#tbName").html("Không hợp lệ");
            return false;
        }
        $("#tbName").html("(*)");
        return true;
    }
    $("#txtName").blur(KiemTraName);

    function KiemTraEmail() {
        var re = /^[a-zA-Z]+[0-9]*@([a-zA-Z0-9])+.\w{3}$/;
        if($("#txtEmail").val() == "") {
            $("#tbEmail").html("Không được rỗng");
            return false;
        }
        if(!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("Không hợp lệ");
            return false;
        }
        $("#tbEmail").html("(*)");
        return true;
    }
    $("#txtEmail").blur(KiemTraEmail);

    function KiemTraPhone() {
        var re = /^08-084-\d{8}$/;
        if($("#txtPhone").val() == "") {
            $("#tbPhone").html("Không được rỗng");
            return false;
        }
        if(!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("Không hợp lệ");
            return false;
        }
        $("#tbPhone").html("(*)");
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);

    function KiemTraMes() {
        if($("#txtMes").val() == "") {
            $("#tbMes").html("Không được rỗng");
            return false;
        }
        $("#tbMes").html("(*)");
        return true;
    }
    $("#txtMes").blur(KiemTraMes);

    var i = 1;
    $("#btnSave").click(function(){
        if(KiemTraEmail()&&KiemTraName()&&KiemTraPhone()&&KiemTraMes()) {
            var type1 = $("#per:checked").val();
            var type2 = $("#com:checked").val();
            var type = type1 + ", " + type2;
            type = type.replace(", undefined", "");
            var row = "<tr>";
            row += "<td>" +(i++)+ "</td>";
            row += "<td>" +$("#txtName").val() + "</td>";
            row += "<td>" +$("#txtEmail").val() + "</td>";
            row += "<td>" +$("#txtPhone").val() + "</td>";
            row += "<td>" + type + "</td>";
            row += "<td>" +$("#txtMes").val() + "</td>";
            row += "</tr>";

            $("tbody").append(row);
            $("#myModal").modal("hide");
        }
        return false;
    });

    
});