let input = document.getElementById("whatareyou");
let companyname = document.getElementById('company_name');
let universityname = document.getElementById('university_name');


input.addEventListener("input", function() {
    if(input.value==="company"){
        companyname.style.display='block';
        universityname.style.display='none';
    }
    if(input.value==="university"){
        companyname.style.display='none';
        universityname.style.display='block';
    }
    if(input.value==="jobseeker"){
        companyname.style.display='none';
        universityname.style.display='none';
    }
});
