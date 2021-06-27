$(document).ready(function(e) {
    var i = 1;
    
    $("#myBtn").click(function() {
        $("#myModal").modal();
    })

    function KiemTraMSSV() {
        var re = /^\d{10}$/;
        if($('#txtMSSV').val() == "") {
            $('#tbMSSV').html("Không được để trống");
            return false;
        }
        if(!re.test($('#txtMSSV').val())) {
            $('#tbMSSV').html("Nhập MSSV 10 số");
            return false;
        }
        $('#tbMSSV').html("*");
        return true;
    }
    $('#txtMSSV').blur(KiemTraMSSV);

    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtName").val() == "") {
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!re.test($("#txtName").val())) {
            $("#tbName").html("Ký tự đầu viết hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName)

    function KiemTraNgay() {
        if($("#txtNgay").val() == "") {
            $("#tbNgay").html("Không được bỏ trống");
            return false;
        }
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        today.setDate(today.getDate() + 7);
        if(day < today) {
            $("#tbNgay").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KiemTraNgay)

    function KiemTraMail() {
        var re = /^[a-zA-Z]+[0-9]*@([a-zA-Z0-9])+.\w{3}$/;
        if($("#txtMail").val() == "") {
            $("#tbMail").html("Không được để trống");
            return false;
        }
        if(!re.test($("#txtMail").val())) {
            $("#tbMail").html("Bắt buộc chữ cái ở đầu");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(KiemTraMail)


    $("#btnSave").click(function() {
        if(KiemTraMSSV() && KiemTraName() && KiemTraNgay() && KiemTraMail()) {
            var row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row+= "<td>"+ $("#txtMSSV").val() + "</td>";
            row+= "<td>"+ $("#txtName").val() + "</td>";
            row+= "<td>"+ $("#txtNgay").val() + "</td>";
            row+= "<td>"+ $("#txtMail").val() + "</td>";
            row+= "<td>"+ $("#txtFile").val() + "</td>";
            row += "</tr>";
            $("tbody").append(row);
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    })
});