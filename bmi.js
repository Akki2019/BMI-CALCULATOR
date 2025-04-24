const form = document.querySelector('form');
//this use case will give empty value
//  const height=  parseInt(document.querySelector('#hgt').value);
form.addEventListener('submit',function(e){
    e.preventDefault() 

   const height=  parseInt(document.querySelector('#hgt').value);
   const weight=  parseInt(document.querySelector('#wgt').value);
   const result= document.querySelector('#rslt');
   if(height  ==='' || height < 0 || isNaN(height)){
result.innerHTML=`please give a valid height ${height}`;
   }
   else if(weight ==='' || weight < 0 || isNaN(weight)){
    result.innerHTML=`please give a valid weight ${weight}`;
       }
    else{
     const bmi=(weight/ ((height*height)/10000)).toFixed(2);
     //show the result 
     result.innerHTML=`<span>${bmi}</span>`;

    }
});