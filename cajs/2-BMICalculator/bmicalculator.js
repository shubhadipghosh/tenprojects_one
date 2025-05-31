const form = document.querySelector('form');
// let height;
// let weight;
form.addEventListener('submit',function(event){
    event.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if (height === '' || height < 0 || isNaN(height)){
        results.textContent="height should be a valid number";
    }else if (weight === '' || weight < 0 || isNaN(weight)){
        results.textContent="weight should be a valid number";
    }else{
        let BMI = weight / Math.pow(height/100,2);
        console.log(BMI);
            if (BMI<18.6){
                results.textContent = `Your BMI is ${BMI}. You are under weight`;
            }else if (BMI>=18.6 & BMI<=24.9){
               results.textContent = `Your BMI is ${BMI}. Your BMI is normal`;
            }else if (BMI>24.9){
                results.textContent = `Your BMI is ${BMI}. You are Overweight`;
            }
        }
})
