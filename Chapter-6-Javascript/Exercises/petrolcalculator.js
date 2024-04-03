document.getElementById('calculate-button').addEventListener('click',function() {
    // retrieve values from inout fields
    const petrolcost = parseFloat(document.getElementById('petrol-cost').value);
    const liters = parseFloat(document.getElementById('liters').value);
    // calulate total cost
    const totalCost = petrolcost * liters;

    if(isNaN(petrolcost)){

      document.getElementById(
        "total-cost"
      ).textContent = `Please Enter Valid Number For Petrol Cost`;
    }
    else if(isNaN(liters)){
         document.getElementById(
           "total-cost"
         ).textContent = `Please Enter Valid Number For Litres`;
    }
    else{
    //Display total cost
    document.getElementById('total-cost').textContent = `Total Cost : $${totalCost.toFixed(2)}`;
    }

}); 
