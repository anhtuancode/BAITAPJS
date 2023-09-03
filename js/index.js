// Khai báo mảng arrayNumber
var arrayNumber = [];

//Hàm đẩy các phần tử vào trong mảng trống vừa được tạo ra
function pusharray() {
    var n = Number(document.querySelector("#number").value);
    arrayNumber.push(n);
    var temp = arrayNumber;
    document.querySelector(".array").innerHTML = arrayNumber;
}

// Bài tập 1: Tính tổng số dương trong mảng

function tinhtong() {
    // input: arrayNumber[i]
    var sum = 0;
    // output: sum
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            sum += arrayNumber[i];
        }
    }
    // hiển thị giá trị sum là tổng của mảng ra thẻ p 
    document.querySelector('.ptinhtong').innerHTML = 'Tổng số dương là: ' + sum;
}

// Bài tập 2: Đếm số dương trong mảng

function count() {
    // output: dem
    var dem = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) { // lấy từng phần tử trong mảng ra so sánh nếu lớn hơn 0 thì biến dem tăng lên 1 đơn vị
            dem++;
        }
    }
    // hiển thị biến dem 
    document.querySelector('.pdem').innerHTML = 'Số dương là: ' + dem;
}

// Bài tập 3: Tìm số nhỏ nhất trong mảng

function Somin() {
    // output: imin
    var imin = arrayNumber[0]; // đặt phần tử đầu tiên trong mảng làm biến giá trị nhỏ nhất
    for (var i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < imin) { // so sánh từng phần tử còn lại với biến đặt ban đầu
            imin = arrayNumber[i];  // nếu bé hơn thì cài đặt lại biến nhỏ nhất (imin)
        }
    }
    // hiển thị biến imin 
    document.querySelector('.pmin').innerHTML = 'Số nhỏ nhất trong mảng là: ' + imin;
}

// Bài tập 4: Tìm số dương nhỏ nhất trong mảng

function Soduongmin() {
    // output: imin
    var imin = -1; // cài đặt giá trị mặc định cho imin = -1
    for (var i = 0; i < arrayNumber.length; i++) {
        if ((imin == -1 || imin > arrayNumber[i]) && arrayNumber[i] > 0) {// so sánh imin với các phần tử trong mảng 
            imin = arrayNumber[i];
        }
    }
    // hiển thị biến imin
    document.querySelector('.pduongmin').innerHTML = 'Số dương nhỏ nhất trong mảng là: ' + imin;
}

// Bài tập 5: Tìm số chẵn cuối cùng trong mảng

function Sochan(){
    // output: sochan
    var sochan = 0;
    var dem = 0;
    for(var i = arrayNumber.length - 1 ; i >= 0 ; i--){ // cài đặt biến bắt đầu vòng lặp là phần tử cuối cùng trong mảng
        if(arrayNumber[i] % 2 == 0){ // khi phần tử đó chia hết cho 2 thì đó là số chẵn cuối cùng trong mảng
            sochan = arrayNumber[i];
            dem ++;
            break;
        }
    }
    // khi dem = 1 tức đã sở hữu 1 biến số chẵn cuối cùng
    if(dem != 0){
        //hiển thị số chẵn cuối cùng (sochan)
        document.querySelector('.pchan').innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + sochan;
    }else{
        // nếu không có số chẵn trong mảng thì hiển thị -1
        document.querySelector('.pchan').innerHTML = '-1';
    }
}


// Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí

function doicho(){
    // input: so1 và so2
    var so1 = Number(document.querySelector('#number1').value);
    var so2 = Number(document.querySelector('#number2').value);
    for(var i = 0; i < arrayNumber.length; i++){
        if(i == so1){ // nếu vị trí i = so1 ta cài đặt 1 biến tạm = với giá trị tương ứng với nó
            var temp = arrayNumber[so1];
            arrayNumber[i] = arrayNumber[so2];// hàm hoán đổi giá trị
            arrayNumber[so2] = temp;
        }
    }
    //hiển thị mảng sau khi biến đổi
    document.querySelector('.pdoicho').innerHTML = arrayNumber;
}

// Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần

function sapxep(){
    var arraysapxep = []; //output: arraysapxep
    arraysapxep = arrayNumber.sort(function(pt2, pt1){ // hàm sắp xếp mảng theo thứ tự tăng dần
        if(pt2 < pt1){
            return -1;
        }
        return 1;
    })
    // hiển thị mảng sau sắp xếp
    document.querySelector('.psapxep').innerHTML = 'Mảng sau khi sắp xếp là: ' + arraysapxep;
}

// Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng

function songuyento(){
    for(var i = 0; i < arrayNumber.length; i++){
        if(snt(arrayNumber[i])){ // kiểm tra phần tử mảng có phải là số nguyên tố không
            document.querySelector('.psnt').innerHTML = 'Số nguyên tố đầu tiên trong mảng là: ' + arrayNumber[i];
            break;
        }
    }
}

function snt(n){ // hàm kiểm tra số nguyên tố
    var flag = true;
    if(n < 2){
        flag = false;
    }
    for(var i = 2; i < Math.sqrt(n); i++){
        if(n % i == 0){
            flag = false; 
            break;
        }
    }
    return flag;
}

// Bài tập 9: Đếm số nguyên

//tạo 1 mảng số thực mới
var arrayMangthuc =[]

function push() {
    var n = Number(document.querySelector("#numbermangthuc").value);
    arrayMangthuc.push(n);
    var temp = arrayNumber;
    document.querySelector(".pmangthuc").innerHTML = arrayMangthuc;
}

function demsonguyen(){
    var dem = 0;
    for(var i = 0; i < arrayMangthuc.length ; i++){
        if(Number.isInteger(arrayMangthuc[i])){ // hàm kiểm tra số nguyên
            dem++;
        }
    }
    // hiển thị có bao nhiêu số nguyên trong mảng
    document.querySelector('.pthuc9').innerHTML = 'Số nguyên là: ' + dem;
}


// Bài tập 10: So sánh số lượng số âm và số dương

function sosanh(){
    //dem1 là tổng số dương trong mảng
    var dem1 = 0;
    //dem2 là tổng số âm trong mảng
    var dem2 = 0;
    for(var i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i] > 0){ // thực thi nếu phần tử trong mảng lớn hơn 0 dem1 tăng 1 đơn vị
            dem1++;
        }else{
            dem2++;
        }
    }
    if(dem1 > dem2){
        document.querySelector('.psosanh').innerHTML = 'Số dương > số âm';
    }else{
        document.querySelector('.psosanh').innerHTML = 'Số âm > số dương';
    }
}