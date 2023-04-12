function bmi_check_number(number) {
    if(number < 0 || number == 0){
        return false
    }else {
        return true
    }
}
  
  function bmi_calculator() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(bmi_check_number(weight) && bmi_check_number(height)){
      const bmi = (weight/Math.pow(height/100,2)).toFixed(1);
      let status;
      if(bmi>=30){
        status = "Obesity"
      }else if(bmi>=25 && bmi<=29.9){
        status = "Overweight"
      }
      else if (bmi>=18.5 && bmi<=24.9){
        status = "Normal Weight"
      }
      else {
        status = "Underweight"
      }
      document.getElementById("output").innerHTML = "Your Result BMI is <b>"+ bmi +"</b> which means You are <b>"+status+"</b>";
    }
  }

//   Validasi Form
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const btn = document.getElementsByTagName('button')[0];

btn.addEventListener("click", function(){
    if(weight.value == "" && height.value == ""){ 
        alert("Input Weight dan Height Tidak Boleh Kosong!");
    }else if(weight.value == ""){
        alert("Input Weight Tidak Boleh Kosong!");
    }else if(height.value == ""){
        alert("Input Height Tidak Boleh Kosong!");
    }
})