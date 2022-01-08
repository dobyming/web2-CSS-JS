var Links = {
  SetColor : function(color){
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   console.log(alist[i]);
    //   alist[i].style.color=color;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}
  var Body = {
    SetColor : function(color){
      // document.querySelector('body').style.color=color;
      $('body').css('color',color);
    },
    SetBgColor : function(color){
      // document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);

    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body')
    if(self.value === 'NIGHT'){
      Body.SetBgColor('black');
      Body.SetColor('white');
      self.value = 'DAY';
      Links.SetColor('pink');
    }
    else {
      Body.SetBgColor('white');
      Body.SetColor('black');
      self.value = 'NIGHT';
      Links.SetColor('blue');
  }
}
