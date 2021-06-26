$(document).ready(function(e){
    var i = 1;
    function KiemTraTen() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtHoTen").val() == "") {
            $("#tbHoTen").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtHoTen").val())) {
            $("#tbHoTen").html("Ky tu dau viet hoa");
            return false;
        }
        $("#tbHoTen").html("*");
        return true;
    }
    $("#txtHoTen").blur(KiemTraTen);

    function KiemTraSoAo() {
        var re = /^[1-9][0-9]?$|^100$/;
        if($("#txtSoAo").val() == "") {
            $("#tbSoAo").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtSoAo").val())) {
            $("#tbSoAo").html("1-100");
            return false;
        }
        $("#tbSoAo").html("*");
        return true;
    }
    $("#txtSoAo").blur(KiemTraSoAo);

    function KiemTraDiaChi() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtDiaChi").val() == "") {
            $("#tbDiaChi").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtDiaChi").val())) {
            $("#tbDiaChi").html("Ky tu dau viet hoa");
            return false;
        }
        $("#tbDiaChi").html("*");
        return true;
    }
    $("#txtDiaChi").blur(KiemTraDiaChi);

    function KiemTraNgay() {
        if($("#txtNgayTapTrung").val() == "") {
            $("#tbNgayTapTrung").html("Không được bỏ trống");
            return false;
        }
        var day = new Date($("#txtNgayTapTrung").val());
        var today = new Date();
        today.setDate(today.getDate() + 7);
        if(day < today) {
            $("#tbNgayTapTrung").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgayTapTrung").html("*");
        return true;
    }
    $("#txtNgayTapTrung").blur(KiemTraNgay);

    function KiemTraSoDienThoai() {
        var re = /^0\d{3}-\d{3}-\d{3}$/;
        if($("#txtSoDienThoai").val() == "") {
            $("#tbSoDienThoai").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtSoDienThoai").val())) {
            $("#tbSoDienThoai").html("0xxx-xxx-xxx");
            return false;
        }
        $("#tbSoDienThoai").html("*");
        return true;
    }
    $("#txtSoDienThoai").blur(KiemTraSoDienThoai);

    function KiemTraFile() {
        if($("#txtAnhDaiDien").val() == "") {
            $("#tbAnhDaiDien").html("Khong duoc de trong");
            return false;
        }
        $("#tbAnhDaiDien").html("*");
        return true;
    }
    $("#txtAnhDaiDien").blur(KiemTraFile);

    $("#btnSave").click(function() {
        if(true) {
            var row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row+= "<td>"+ $("#txtHoTen").val() + "</td>";
            row+= "<td>"+ $("#txtSoAo").val() + "</td>";
            row+= "<td>"+ $("#txtDiaChi").val() + "</td>";
            row+= "<td>"+ $("#txtNgayTapTrung").val() + "</td>";
            row+= "<td>"+ $("#txtSoDienThoai").val() + "</td>";
            row+= "<td>"+ $("#txtAnhDaiDien").val() + "</td>";
            row += "</tr>";
            $("tbody").append(row);
            $("#myModal").modal("hide");
            return true;
        }
        return false;
    })
});