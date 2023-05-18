let input = document.getElementById("whatareyou");
let select = document.getElementById("what_are_you");
let companyname = document.getElementById('company_name');
let universityname = document.getElementById('university_name');


input.addEventListener("input", function() {
    if(input.value==="company"){
        
        companyname.style.display='block';
        universityname.style.display='none';
        select.style.display="none";
    }
    if(input.value==="university"){
        select.style.display="none";
        companyname.style.display='none';
        universityname.style.display='block';
    }
    if(input.value==="jobseeker"){
        companyname.style.display='none';
        universityname.style.display='none';
    }
});
