
let zipCodeButton = document.getElementById("submitButton");
zipCodeButton.addEventListener("click", validateZip);

function validateZip()
{
    let valid = true;

    let emptyZipError = document.getElementById("emptyZipError");
    let outsideZipError = document.getElementById("outsideZipError");

    // emptyZipError code invisible
    emptyZipError.style.visibility = "hidden";

    // outsideZipError code invisible
    outsideZipError.style.visibility = "hidden";

    let zipInputValue = document.getElementById("inputZip").value;

    if(zipInputValue === "")
    {
        emptyZipError.style.visibility = "visible";
        valid = false;
    }
    else if(zipInputValue!= "98030" && zipInputValue != "98031" && zipInputValue != "98032" && zipInputValue != "98042" && zipInputValue != "98058")
    {
        outsideZipError.style.visibility = "visible";
        valid = false;
    }

    return valid;

}

let utilitiesBill = document.getElementById("bills");
utilitiesBill.addEventListener("click", validateCheckbox);

let food = document.getElementById("food");
food.addEventListener("click", validateCheckbox);

let gas = document.getElementById("gas");
gas.addEventListener("click", validateCheckbox);

let other = document.getElementById("other");
gas.addEventListener("click", validateCheckbox);

function validateCheckbox()
{
    let billsCheck = document.querySelector("#bills");

    if(billsCheck.checked)
    {
        let billsNote = document.getElementById("billsNote");

        let item1 = document.createElement("li");
        let item2 = document.createElement("li");
        let item3 = document.createElement("li");
        item1.textContent = "1 time per calendar year";
        item2.textContent = "Person seeking help must also be name on bill";
        item3.textContent = "Must have urgent or shut-off notice";
        billsNote.appendChild(item1);
        billsNote.appendChild(item2);
        billsNote.appendChild(item3);
    }

    let foodCheck = document.querySelector("#food")

    if(foodCheck.checked)
    {
        let foodNote = document.getElementById("foodNote");

        let item1 = document.createElement("li");
        item1.textContent = "Once per month";
        foodNote.appendChild(item1);
    }

    let gasCheck = document.querySelector("#gas")

    if(gasCheck.checked)
    {
        let gasNote = document.getElementById("gasNote");

        let item1 = document.createElement("li");
        let item2 = document.createElement("li");
        item1.textContent = "Every six months";
        item2.textContent = "Must have a valid/current Driver's license not an ID card"
        gasNote.appendChild(item1);
        gasNote.appendChild(item2);
    }
}



