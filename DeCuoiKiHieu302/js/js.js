$(document).ready(function(e){
    function KiemTraTen() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if($("#txtTen").val() == "") {
            $("#tbTen").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtTen").val())) {
            $("#tbTen").html("Bat dau in hoa");
            return false;
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(KiemTraTen);

    function KiemTraCMND() {
        var re = /^\d{9}$/;
        if($("#txtCMND").val() == "") {
            $("#tbCMND").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtCMND").val())) {
            $("#tbCMND").html("9 so");
            return false;
        }
        $("#tbCMND").html("*");
        return true;
    }
    $("#txtCMND").blur(KiemTraCMND);

    function KiemTraQue() {
        var re = /^[A-Z]+$/;
        if($("#txtQue").val() == "") {
            $("#tbQue").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtQue").val())) {
            $("#tbQue").html("Viet hoa");
            return false;
        }
        $("#tbQue").html("*");
        return true;
    }
    $("#txtQue").blur(KiemTraQue);

    function KiemTraEmail() {
        var re = /^[A-Za-z]+[0-9]*@iuh.edu.vn$/;
        if($("#txtEmail").val() == "") {
            $("#tbEmail").html("Khong duoc de trong");
            return false;
        }
        if(!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("xxxx@iuh.edu.vn");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
		$("#txtEmail").blur(KiemTraEmail);

		function KiemTraDienThoai() {
			var re = /^0\d{2}-\d{3}-\d{3}$/;
			if($("#txtDienThoai").val() == "") {
					$("#tbDienThoai").html("Khong duoc de trong");
					return false;
			}
			if(!re.test($("#txtDienThoai").val())) {
					$("#tbDienThoai").html("0xx-xxx-xxx");
					return false;
			}
			$("#tbDienThoai").html("*");
			return true;
	}
	$("#txtDienThoai").blur(KiemTraDienThoai);

	var i = 1;
	function KiemTraAnh() {
		if($("#txtAnh").val() == "") {
				$("#tbAnh").html("Khong duoc de trong");
				return false;
		}
		$("#tbAnh").html("*");
		return true;
	}	
	$("#txtAnh").blur(KiemTraAnh);

	$("#btnSave").click(function(){
		if(KiemTraAnh()&&KiemTraCMND()&&KiemTraDienThoai()&&KiemTraEmail()&&KiemTraQue()&&KiemTraTen()) {
			var row = "<tr>";
			row += "<td>" + (i++) + "</td>";
			row += "<td>" + $("#txtTen").val() + "</td>";
			row += "<td>" + $("#txtCMND").val() + "</td>";
			row += "<td>" + $("#txtQue").val() + "</td>";
			row += "<td>" + $("#txtEmail").val() + "</td>";
			row += "<td>" + $("#txtDienThoai").val() + "</td>";
			row += "<td>" + $("#txtAnh").val() + "</td>";
			row += "</tr>";

			$("tbody").append(row);
			$("#myModal").modal("hide");
		}
		return false;
	});
});