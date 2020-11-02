let zipCodeButton = document.getElementById("inputZipButton");
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


