var Body = {
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor =color;
  },
  setColor:function(color){
    document.querySelector('body').style.color =color;
  }
}

var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color= color;
    i = i + 1;
      }
  }
}


function nightDayHandler(hello){
  var bodytarget = document.querySelector('body');
  if(hello.value === 'night'){

    Body.setBackgroundColor('black');
    Body.setColor('powderblue');
    Links.setColor('powderblue');

    document.querySelector('#fick').value = 'day';
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue');

    document.querySelector('#fick').value = 'night';
        }
  }



function valueChange(fucking){
  var inlist = document.querySelectorAll('input');
  var f=0;
  while(f < inlist.length){
    document.querySelectorAll('input')[f].value = document.querySelector('#fick').value;
    fucking.value = document.querySelector('#fick').value;

     f = f + 1

  }
}
