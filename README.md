# BMI-Calculator
The Body Mass Index (BMI) calculator was designed by using html,  css  and javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
.container{
    display:flex;
    flex-direction: column;
    margin: auto ;
    border: 1px solid green;
    height:700px;
    align-items: center;
    background-color: bisque;
    color:blue;


}

h1{
    margin-top: 100px;
    font-size: 40px;
    color: purple;
    margin-right: 50px;
    margin-bottom: 1px;
}
.para{
    font-size: 25px;

}
.weight{
    margin-bottom: 10px;
    margin-top: 100px;

}
#wei{
    height:35px;
    background-color: aquamarine;
    font-size:25px ;
}
.height{
    margin-bottom: 20px;

}

#hei{
    height: 35px;
    background-color: aquamarine;
    font-size: 25px;
}
p{
    margin-bottom: 3px;
    text-align: center;
 font-size:20px;
 color:red
}

span{margin-left: 10px;    /*justify space between input and الوزن
 and the same between input and الطول*/
}
.button{
    margin-left: 50px;
margin-right: 100px;
margin-top: 1px;
}
button{
    background-color: aqua;
    font-size: 25px;
    border-radius:25px ;
    cursor: pointer;
    padding: 15px 35px;

}




</style>

</head>
<body>
   <div class="container">
        <h1>حساب كتلة الجسم</h1>

    <div class="weight">
        <input id="wei" type="number" required> <span class="para">الوزن    </span>
    </div>

    <div class="height">
        <input id="hei" type="number" placeholder='0.00' required><span class="para">الطول</span>
        <p>(مثال:إذا طولك 140 أدخله كالأتى 1.40)</p>
    </div>

    <div class="button">
        <button id="btn">أضغط</button>
     </div>

    <div>
        <h2 id="result"></h2>
    </div>
    <div>
        <h2 id="text"></h2>
    </div>

  </div>
</body>
<script>
var weght = 50
var heght =10
var mass = weght/(heght*heght)
console.log(mass)
document.getElementById("btn").addEventListener("click",function(){
    console.log(mass)
var weght=document.getElementById("wei").value
var heght=document.getElementById("hei").value
var mass = weght/(heght*heght)




if(mass<18){
    document.getElementById("result").innerHTML = (Math.round(mass * 100) / 100).toFixed(2)+"Kg/m"+"2".sup()      // it will round to 2 decimal places

    document.getElementById("text").innerHTML ="لديك نحافة"


    console.log("النحافة")
}
else if(mass>=18 && mass<=24.9){
    document.getElementById("result").innerHTML = mass.toPrecision(3)+"Kg/m"+"2".sup()  //toPrecision(3): it will round to 2 decimal places(another way) //---"2".sup() to rise 2 above m
    document.getElementById("text").innerHTML ="لديك وزن مثالي"


    console.log("وزن مثالى")
}
else if(mass>=25 && mass<=29.9){
    document.getElementById("result").innerHTML = mass.toPrecision(3)+"Kg/m"+"2".sup() //"2".sup() to rise 2 above m
document.getElementById("text").innerHTML ="لديك وزن زائد"


    console.log("وزن زائد")
}
else if(mass>=30 && mass<=34.9){+"Kg/m"+"2".sup()
    document.getElementById("result").innerHTML = mass.toPrecision(3)+"Kg/m"+"2".sup()
    document.getElementById("text").innerHTML ="لديك سمنة من الدرجة الأولي"


    console.log("سمنة درجة أولى ")
}
else if(mass>=35 && mass<=39.9){
    document.getElementById("result").innerHTML =mass.toPrecision(3)+"Kg/m"+"2".sup()
    document.getElementById("text").innerHTML ="لديك سمنة من درجة الثانية"


console.log("سمنة درجة ثانية")
}
else if(mass>39.9){
    document.getElementById("result").innerHTML = mass.toPrecision(3)+"Kg/m"+"2".sup()

    document.getElementById("text").innerHTML ="لديك سمنة خطيرة"

    console.log("سمنة خطيرة")
}
else{
document.getElementById("result").innerHTML ="برجاء إدخال الوزن والطول "
}

//document.getElementById("result").innerHTML =mass
})




/*if(mass<18){
    console.log(" نحافة \" )
}
else if(mass>=18 && mass<=24.9){
    console.log("وزن مثالى")
}
else if(mass>=25 && mass<=29.9){
    console.log("وزن زائد")
}
else if(mass>=30 && mass<=34.9){
    console.log("سمنة درجة أولى ")
}
else if(mass>=35 && mass<=39.9){
    console.log("سمنة درجة ثانية")
}
else{
    console.log("سمنة خطيرة")
}*/

</script>
</html>
