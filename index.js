/**
 * bài 1
 * input
 * tạo funtion button
 * tạo biến chứa lương 100000
 * tạo biến ngày làm dom tới daysworked
 *
 *
 * process
 * tạo biến chứa tông lương
 * cập nhật lại cho biến tổng lương - giá trị mới
 * tổng lương = salary * daysWorked
 *
 * output
 * tạo biến chứa kêt quả hiển thi ra màn hình
 * console.log
 */

const tinhluong = document.getElementById("tinhluong");
tinhluong.onclick = function () {
  const a = document.getElementById("salary").value * 1;
  const b = document.getElementById("daysWorked").value * 1;
  let TS = a * b;

  const result = "tổng lương là: " + TS;
  const SalaryRD = document.getElementById("SalaryRD");
  SalaryRD.innerHTML = result;
};

/**
 * bài 2
 * input
 * tạo funtion button
 * tạo 5 biến dom tương ứng lần lượt 5 input
 *
 * process
 * tạo biến kết quả tính
 * cập nhật kết quả mới cho biến
 *
 * out
 * tạo biến trả kết quả ra màn hình
 * console.log
 */

const avgbtn = document.getElementById("avgbtn");
avgbtn.onclick = function () {
  const c = Number(document.getElementById("input1").value);
  const d = Number(document.getElementById("input2").value);
  const e = Number(document.getElementById("input3").value);
  const g = Number(document.getElementById("input4").value);
  const h = Number(document.getElementById("input5").value);

  const avg = (g + h + c + d + e) / 5;

  const avgResult = "trung bình của năm số là: " + avg;
  const AvgRD = document.getElementById("AvgRD");
  AvgRD.innerHTML = avgResult;
};

/**
 * bài 3
 * input
 * function button
 * biến nhập số usd:
 *
 * process
 * biến chứa kết quả quy đổi
 * cập nhật kết quả mới cho biến
 * quy đổi usd = usd * 23500
 *
 * output
 * tạo biến chứa kết ra màn hình
 * console.log
 */

const converterbtn = document.getElementById("converterbtn");
converterbtn.onclick = function () {
  const usd = document.getElementById("usdinput").value;
  let convert = 0;
  convert = usd * 23500;

  let formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const convertresult =
    document.getElementById("usdinput").value +
    " usd = " +
    formatter.format(convert);
  const MCD = document.getElementById("MCD");
  MCD.innerHTML = convertresult;
};

/**
 * bài 4
 * input
 * function button
 * biến chiều dài l
 * biến chiều rộng w
 *
 * process
 * biến tính chu vi = 0
 * cập nhật kết quả biến chu vi = (l + w)*2
 * biến diện tích
 * cập nhật kêt quả biến diện tích = l * w
 *
 *
 * output
 * biến chứa kết quả ra màn hình
 * console.log
 */

const PnAbtn = document.getElementById("PnAbtn");
PnAbtn.onclick = function () {
  const l = Number(document.getElementById("lenght").value);
  const w = Number(document.getElementById("width").value);

  let perimeter = 0;
  perimeter = (l + w) * 2;

  let area = 0;
  area = l * w;

  const PnAresult = "chu vi và diện tích là " + perimeter + " và " + area;

  const PnAResultDisplay = document.getElementById("PnAResultDisplay");
  PnAResultDisplay.innerHTML = PnAresult;
};

/**
 * input
 * function button
 * biến chứa số
 *
 * process
 * biến chứa hàng đơn vị
 * lấy số hàng đơn vị %10
 *
 * biến chứa hàng chục
 * lấy số hàng chục /10
 *
 * biến chứa tổng
 * cập nhật biến chứa tổng
 *
 * output
 * biến hiển thị kết quả ra màn
 * console.log
 */

const abc = document.getElementById("Sum");
abc.onclick = function () {
  const n = document.getElementById("2ln").value * 1;

  let donvi = 0;
  donvi = n % 10;
  let hangchuc = 0;
  hangchuc = Math.floor(n / 10);

  const sum = donvi + hangchuc;
  const sumresult = `tổng 2 ký tự của số vừa nhập là: ${sum}`;

  const resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.innerHTML = sumresult;
};