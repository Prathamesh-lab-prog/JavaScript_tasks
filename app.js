function Maths(a) {
    var num1=document.querySelector("#num1").value;
    var num2=document.querySelector("#num2").value;
    if (a=='add') {
        var c = parseInt(num1)+parseInt(num2)
        document.querySelector("#result").innerHTML= '<div class="alert alert-primary mt-3" role="alert">'+c+'</div>'
       
    }
    else if(a=='sub'){
        var c=parseInt(num1)-parseInt(num2)
        document.querySelector("#result").innerHTML= '<div class="alert alert-primary mt-3" role="alert">'+c+'</div>'

     
    }
    else if(a=='multi'){
        var c=parseInt(num1)*parseInt(num2)
        document.querySelector("#result").innerHTML= '<div class="alert alert-primary mt-3" role="alert">'+c+'</div>'


    }
    else{
                var c=parseInt(num1)/parseInt(num2)
               document.querySelector("#result").innerHTML= '<div class="alert alert-primary mt-3" role="alert">'+c+'</div>'

       
    }
    
}


// for lopp

for(var i=0;i<=10;i++){
    console.log(i);
}

for(var i=10;i>=0;i--){
    console.log(i);
}

var nameArray=["Prathamesh","Shashank","Shreyas","Milind"]
for(var i=0;i<nameArray.length;i++){
    console.log(nameArray[i]);
}


var movies=[{name:"Doctor Strange",rating:4.4},{name:"Thor",rating:4.3},{name:"Spiderman",rating:4.8}]
for(var i=0;i<movies.length;i++){
    console.log(movies[i].name);
}

// iterables

for(var item in movies){
    console.log(item);
}