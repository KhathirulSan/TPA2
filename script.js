function bmi_check_number(number) {
    return number == 0 ? false : true;
  }
  
  function bmi_calculator() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(bmi_check_number(weight) && bmi_check_number(height)){
      const bmi = (weight/Math.pow(height/100,2)).toFixed(1);
      let status;
      if(bmi>=30){
        status = "Obesity"
      }else if(bmi>=25 && bmi<=30){
        status = "Overweight"
      }
      else if (bmi>=18.5 && bmi<=25){
        status = "Normal Weight"
      }
      else {
        status = "Underweight"
      }
      document.getElementById("output").innerHTML = "Your BMI is <b>"+ bmi +"</b> which means You are <b>"+status+"</b>";
    }
  }