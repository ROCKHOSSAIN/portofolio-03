$(document).ready(function(){
    
    
    //sticky menu
    
    $("js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
        
    });
    //Active Link
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
        
    });
     $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
    $("nav ul li:first-child a").addClass("active");
     });
    
    //mixitip(portfolio section)
 var mixer = mixitup('.container');   
    
    //SMOOTH SCROLL FOR IE /EDGE/SAFARI
    
    
    //(hash means = # ---a take link kore ase # so use korse and ata use korar main reasn hocche jate motamoti sob browser e kaj kore)TO KNOW IT BETTER 24 no video 10 min er por theke dekho
    
    $("a").on('click',function(event){
        
       if (this.hash !== ""){
           event.preventDefault();
           
           var hash = this.hash;
           $('html,body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){    
           window.location.hash = hash; });
           
       } 
        
        
    });
    
});

function openNav(){
    document.getElementById("myNav").style.width= "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width= "0%";
}