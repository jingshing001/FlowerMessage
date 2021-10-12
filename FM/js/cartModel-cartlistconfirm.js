let product01 = document.getElementById('product01');
let product02 = document.getElementById('product02');
let result01 = document.getElementById('result01');
let result02 = document.getElementById('result02');
let result03 = document.getElementById('result03');

function thousandBitSeparator(num) {
    return num && (num.toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
        return $1 + ",";
    }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function ($0, $1) {
        return $1 + ",";
    }));
}

result01.innerHTML = thousandBitSeparator(product01.value * 480);
result02.innerHTML = thousandBitSeparator(product02.value * 680);
result03.innerHTML = thousandBitSeparator(product01.value * 480 + product02.value * 680);

product01.addEventListener('change', function () {
    result01.innerHTML = thousandBitSeparator(product01.value * 480);
    result03.innerHTML = thousandBitSeparator(product01.value * 480 + product02.value * 680);
})
product02.addEventListener('change', function () {
    result02.innerHTML = thousandBitSeparator(product02.value * 680);
    result03.innerHTML = thousandBitSeparator(product01.value * 480 + product02.value * 680);
})


// 刪除按鈕

let deleteBtn = document.getElementsByClassName('deleteBtn');
let deleteAlert = document.getElementById('deleteAlert');
let allContent = document.getElementById('allContent');
let retu = document.getElementById('retu');
let yes = document.getElementById('yes');
let mask = document.getElementById('mask');
let cartList = document.querySelectorAll('#cartlistconfirm table tr');

for (i = 0; i <= 1; i++) {
    (function (x) {
        deleteBtn[x].addEventListener('click', () => {
            deleteAlert.classList.remove('hidden');
            allContent.classList.add('blur');
            mask.classList.add('mask');

            yes.addEventListener('click', () => {
                deleteAlert.classList.add('hidden');
                allContent.classList.remove('blur');
                mask.classList.remove('mask');
                cartList[x + 1].remove();

                switch (x) {
                    case 0:
                        result03.innerHTML = thousandBitSeparator(product02.value * 680);
                        break;
                    case 1:
                        result03.innerHTML = thousandBitSeparator(product01.value * 480);
                        break;
                }
            })
        })

    })(i)
}

retu.addEventListener('click', () => {
    deleteAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})

mask.addEventListener('click', () => {
    deleteAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})