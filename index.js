/*****
 * BAI 1
 * INPUT: lương 1 ngày, số ngày làm
 *
 * PROCESS:(pseudo code)
 *         1. lấy input(hardcode) lương 1 ngày = 100000,
 *                              số ngày =30
 *          2. công thức: lương 1 ngày * số ngày làm
 *          3. in kết quả
 *
 * OUTPUT:lương
 */
document.getElementById("btn-tinhLuong").onclick = function ex1() {
  var workingDays = +document.getElementById("workingDays").value;
  var salaryPerDay = +document.getElementById("salaryPerDay").value;
  var totalSalary = salaryPerDay * workingDays;

  document.getElementById("ketQua1").innerHTML =
    "Tổng lương là: " + totalSalary.toLocaleString() + " vnđ";
};
/**BAI 2
 * INPUT:nhập vào 5 số thực
 *
 *
 *
 * PROCESS:
 *      1. lấy input 5 số thực: 2 ; 3 ; 4; 5 ; 6
 *      2. công thức: (2+3+4+5+6)/5
 *      3. in kết quả
 *
 *
 * OUTPUT:giá trị trung bình
 */
document.getElementById("btn-trungBinh").onclick = function ex2() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  var num3 = +document.getElementById("num3").value;
  var num4 = +document.getElementById("num4").value;
  var num5 = +document.getElementById("num5").value;
  var average = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("ketQua2").innerHTML =
    "Giá trị trung bình là: " + average;
};

/**BAI 3
 * INPUT:giá USD = 23500, nhập vào số USD
 *
 *
 * PROCESS:
 *  1. lấy input: 1USD = 23500; số USD = 17
 *  2. công thức: VND= USD * 23500;
 *  3. in kq
 *
 *
 * OUTPUT: Giá VND
 */

document.getElementById("btn-giaVND").onclick = function ex3() {
  var exchangeRate = +document.getElementById("exchangeRate").value;
  var USD = +document.getElementById("USD").value;
  if (exchangeRate > 0 && USD > 0) {
    var VND = exchangeRate * USD;
  } else {
    alert("Hãy nhập số dương");
    return;
  }

  document.getElementById("ketQua3").innerHTML =
    "Số tiền Việt là: " + VND.toLocaleString() + " vnđ";
};

/**BAI 4
 * INPUT:chiều dài và chiều rộng hình chữ nhật
 *
 *
 * PROCESS:
 *  1.lấy input: chiều dài = 7
 *      chiều rộng = 5
 *  2. công thức: C = (dài + rộng)*2
 *                 S = dài * rộng
 *  3. in kết quả
 *
 * OUTPUT:tính diện tích và chu vi
 */

document.getElementById("btn-tinhChuViDienTich").onclick = function ex4() {
  var width = +document.getElementById("width").value;
  var lenght = +document.getElementById("lenght").value;
  if (width > 0 && lenght > 0) {
    var chuVi = (width + lenght) * 2;
    var dienTich = width * lenght;
  } else {
    alert("Chiều dài hoặc chiều cao không xác định");
    return;
  }
  document.getElementById("ketQua4").innerHTML =
    "Chu vi là: " + chuVi + ", " + "Diện tích là: " + dienTich;
};
/***BAI 5
 * INPUT:cho 2 chữ số
 *
 *
 * PROCESS:
 *  1. lấy input: n = 59
 *  2. công thức:
 *     num1 = n % 10;
 *     num2 = math.floor(n / 10);
 *  3. in kết quả
 *
 *
 *
 * OUTPUT:tổng ký số
 */

document.getElementById("btn-tinhTongHaiKySo").onclick = function ex5() {
  var number = +document.getElementById("number").value;
  if (number > 9 && number < 100) {
    var num1 = number % 10;
    var num2 = Math.floor(number / 10);
    var sum = num1 + num2;
  } else {
    alert("Nhập 2 chữ số");
    return;
  }
  document.getElementById("ketQua5").innerHTML = "Tổng 2 ký số là: " + sum;
};
