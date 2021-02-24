
function showDiv(_this) {  
    document.getElementById('popWindow').style.display = 'block';  
    document.getElementById('maskLayer').style.display = 'block';   
    document.getElementById("enlargedpic").src = _this.src;
}  
function closeDiv() {  
    document.getElementById('popWindow').style.display = 'none';  
    document.getElementById('maskLayer').style.display = 'none';  
}  
function showDivVid(_this) {  
    document.getElementById('popWindow').style.display = 'block';  
    document.getElementById('maskLayer').style.display = 'block';   

    var video = document.getElementById('enlargedpic');
    var source = video.getElementsByTagName("source")[0];
    source.src = _this.getElementsByTagName("source")[0].src;
    video.pause()
    video.load();
    
}  

function thing() {
    var x = document.getElementsByClassName("videos");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function(event){event.preventDefault(); });
    }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > (0.25 * window.innerHeight) || document.documentElement.scrollTop > (0.25 * window.innerHeight)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function checkEmail() {
    var em = document.getElementById('inputemail').value;
    var l4c = em.slice(em.length - 4);
    if ( em.includes("@") && (l4c == ".edu" || l4c == ".com")){
        document.getElementById('result').innerHTML = "Email successfully recorded";
    }else{
        document.getElementById('result').innerHTML = "Invalid email address";
    }

}