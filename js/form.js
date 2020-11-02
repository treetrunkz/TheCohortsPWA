let zipCodeButton = document.getElementById("submitButton");
zipCodeButton.addEventListener("click", validateZip);

function validateZip()
{
    validateCheckbox();

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

function validateCheckbox()
{
    let checks = document.querySelectorAll("input[type='checkbox']");

    for(let i = 0; i < checks.length; i++)
    {
        if (checks[i].checked)
        {
            console.log(checks[i].value);
        }
    }
}


