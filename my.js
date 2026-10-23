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

        // Актуальные базовые цены
        if (selectedType === "1") {
            basePrice = 15000;
        } else if (selectedType === "2") {
            basePrice = 35000;
        } else if (selectedType === "3") {
            basePrice = 60000;
        }

        let selectDiv = document.getElementById("select-div");
        let checkboxDiv = document.getElementById("checkbox-div");

        // Управление видимостью по заданию
        if (selectedType === "1") {
            selectDiv.style.display = "none";
            checkboxDiv.style.display = "none";
        } else if (selectedType === "2") {
            selectDiv.style.display = "block";
            checkboxDiv.style.display = "none";

            let selectElem = document.getElementById("serviceOption");
            if (selectElem.value === "opt1") {
                optionPrice = 5000;
            } else if (selectElem.value === "opt2") {
                optionPrice = 15000;
            }
        } else if (selectedType === "3") {
            selectDiv.style.display = "none";
            checkboxDiv.style.display = "block";

            let checkboxElem = document.getElementById("serviceProperty");
            if (checkboxElem.checked) {
                propertyPrice = 20000;
            }
        }

        // Итоговый расчет
        let totalPrice = amount * (basePrice + optionPrice + propertyPrice);

        // Вывод с разделением тысяч
        document.getElementById("price").textContent = totalPrice.toLocaleString("ru-RU");
    }

    let form = document.getElementById("calc-form");
    form.addEventListener("change", calculate);
    form.addEventListener("input", calculate);

    calculate();
});
