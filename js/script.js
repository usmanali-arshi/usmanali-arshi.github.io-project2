function openPage(pageUrl){
    window.location.replace(pageUrl);
  }

function openPageNew(pageUrl){
window.open(pageUrl);
}


// Panel 1
var panelPArt = 0;

document.addEventListener('keydown', logKey);

function logKey(e) {
  if (panelPArt==0 && e.which==32){
    document.getElementById("panel1").src = "../images/panel1/ClassroomU3.png" ;
    panelPArt++;
    console.log(panelPArt);
  }
  else if (panelPArt==1 && e.which==32){
    document.getElementById("panel1").src = "../images/panel1/ClassroomU3.png" ;
      $('#dialogue1').fadeIn(2000);  
    panelPArt++;
    console.log(panelPArt);

  }
  else if (panelPArt == 2 && e.which==32){
    $('#dialogue2').fadeIn(2000); 
    panelPArt++;
    console.log(panelPArt);

  }
  else if (panelPArt == 3 && e.which==32){
    $('#dialogue3').fadeIn(2000); 
    panelPArt++;
    console.log(panelPArt);

  }
  else if (panelPArt == 4 && e.which==32){
    $('#dialogue4').fadeIn(2000); 
    panelPArt++;
    console.log(panelPArt);

  }
  else if(panelPArt==5){
      console.log("Go to next page");
  }
}

// Panel 2