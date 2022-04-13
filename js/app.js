
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
