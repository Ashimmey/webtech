// console.log("hello world I am learning javascript")
// let radius=window.prompt("enter radius");
// console.log(radius);



document.getElementById("mybtn").onclick=function(){
    let radius = document.getElementById("mynum").value;
    console.log(radius);
    const PI=3.14;
    let c=2*PI*radius;
    document.getElementById("circ").innerHTML="the circumference of a circle is "+c
}