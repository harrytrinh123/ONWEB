$(document).ready(function() {
    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($('#txtName').val() == "") {
            $("#tbName").html("Khong duoc bo trong");
            return false;
        }
        if(!re.test($("#txtName").val())) {
            $("#tbName").html("Ky tu dau phai viet hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName)


    function KiemTraNgayDen() {
        if($("#txtDen").val() == "") {
            $("#tbDen").html("Khong duoc rong");
            return false;
        }
        var day = new Date($("#txtDen").val());
        var toDay = new Date();
        
        if(day < toDay) {
            $("#tbDen").html("Ngay den phai lon hon ngay hien tai");
            return false;
        }
        $("#tbDen").html("*");
        return true;
    }
    $("#txtDen").blur(KiemTraNgayDen);

    function KiemTraNgayDi() {
        if($("#txtDen").val() == "") {
            $("#tbDen").html("Khong duoc rong");
            $("#tbDi").html("ban phai chon ngay den truoc");
            return false;
        }
        if($("#txtDi").val() == "") {
            $("#tbDi").html("Khong duoc rong");
            return false;
        }
        var dayDen = new Date($("#txtDen").val());
        var dayDi = new Date($("#txtDi").val());
        
        if(dayDi < dayDen) {
            $("#tbDi").html("Ngay di phai lon hon ngay den");
            return false;
        }
        $("#tbDi").html("*");
        return true;
    }
    $("#txtDi").blur(KiemTraNgayDi);


    $("select").on("change", function() {
        $("#giaPhong").val(this.value);
    });

    $("#btn-DangKy").on("click", function() {
        if(KiemTraName() && KiemTraNgayDen() && KiemTraNgayDi()) {
            var dv = "";
            var tien = 0;
            if($("#giatUi").is(":checked")) {
                dv += "Giat ui, ";
                tien += 200000;
            }
            if($("#duaRuoc").is(":checked")) {
                dv += ", Dua ruoc";
                tien += 200000;
            }
            if($("#anSang").is(":checked")) {
                dv += ", An sang";
                tien += 200000;
            }
            var hoTen = $("#txtName").val();
            var ngayDen = $("#txtDen").val();
            var ngayDi = $("#txtDi").val();
            var soNgay = $("#txtSoNgay").val();
            var loaiPhong = $("select option:selected").text();
            var tienPhong = parseFloat($("#giaPhong").val()) * parseFloat($("#txtSoNgay").val());
            var chiPhi = tien + tienPhong;
            var row = "<tr><td>";
            row += hoTen + "</td><td>";
            row += ngayDen + "</td><td>";
            row += ngayDi + "</td><td>";
            row += soNgay + "</td><td>";
            row += loaiPhong + "</td><td>";
            row += dv + "</td><td>";
            row += chiPhi + "</td><td>";
            row += "</tr>";
            $("tbody").append(row);
        }
    })

    $("#txtDen").on("change", function() {
        if(KiemTraNgayDen() && KiemTraNgayDi()) {
            var dayDen = new Date($("#txtDen").val());
            var dayDi = new Date($("#txtDi").val());
            var soNgay = dayDi - dayDen; 
            $("#txtSoNgay").val(soNgay/(1000*3600*24));
        }
    });

    $("#txtDi").on("change", function() {
        if(KiemTraNgayDen() && KiemTraNgayDi()) {
            var dayDen = new Date($("#txtDen").val());
            var dayDi = new Date($("#txtDi").val());
            var soNgay = dayDi - dayDen; 
            $("#txtSoNgay").val(soNgay/(1000*3600*24));
        }
    });

});