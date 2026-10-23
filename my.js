window.addEventListener("DOMContentLoaded", function (event) {

    function calculate() {
        // 1. Получаем количество
        let amountInput = document.getElementById("amount");
        let amount = parseInt(amountInput.value);
        if (isNaN(amount) || amount < 1) {
            amount = 1;
        }

        // 2. Получаем выбранный тип услуги (радиокнопки)
        let selectedTypeRadio = document.querySelector("input[name='serviceType']:checked");
        let selectedType = selectedTypeRadio ? selectedTypeRadio.value : "1";

        let basePrice = 0;
        let optionPrice = 0;
        let propertyPrice = 0;

        // Базовая цена для каждого типа
        if (selectedType === "1") {
            basePrice = 1000;
        } else if (selectedType === "2") {
            basePrice = 2000;
        } else if (selectedType === "3") {
            basePrice = 3000;
        }

        let selectDiv = document.getElementById("select-div");
        let checkboxDiv = document.getElementById("checkbox-div");

        // Управление видимостью и ценами по условиям задания
        if (selectedType === "1") {
            selectDiv.style.display = "none";
            checkboxDiv.style.display = "none";
        } else if (selectedType === "2") {
            selectDiv.style.display = "block";
            checkboxDiv.style.display = "none";

            let selectElem = document.getElementById("serviceOption");
            if (selectElem.value === "opt1") {
                optionPrice = 50;
            } else if (selectElem.value === "opt2") {
                optionPrice = 100;
            }
        } else if (selectedType === "3") {
            selectDiv.style.display = "none";
            checkboxDiv.style.display = "block";

            let checkboxElem = document.getElementById("serviceProperty");
            if (checkboxElem.checked) {
                propertyPrice = 150;
            }
        }

        // Итоговая формула: количество * (база + опция + свойство)
        let totalPrice = amount * (basePrice + optionPrice + propertyPrice);

        // Вывод результата
        document.getElementById("price").textContent = totalPrice;
    }

    // Слушаем изменения в форме
    let form = document.getElementById("calc-form");
    form.addEventListener("change", calculate);
    form.addEventListener("input", calculate);

    // Первичный расчет при загрузке
    calculate();
});
