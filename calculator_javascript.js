let buffer=" ";
let total=0;
let previous= null;

function operation(prev, tot, temp){
  switch(prev){
    case 1:
    return tot+temp;
    break;
    case 2:
    return tot-temp;
    break;
    case 3:
    return tot*temp;
    break;
    case 4:
    return tot/temp;
    break;
    case 5:
    return temp;
    break;
  }

}

const number1=document.querySelector('.one');
number1.addEventListener('click',function(){
  buffer=buffer+"1";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});


const number2=document.querySelector('.two');
number2.addEventListener('click',function(){
  buffer=buffer+"2";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number3=document.querySelector('.three');
number3.addEventListener('click',function(){
  buffer=buffer+"3";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number4=document.querySelector('.four');
number4.addEventListener('click',function(){
  buffer=buffer+"4";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number5=document.querySelector('.five');
number5.addEventListener('click',function(){
  buffer=buffer+"5";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number6=document.querySelector('.six');
number6.addEventListener('click',function(){
  buffer=buffer+"6";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number7=document.querySelector('.seven');
number7.addEventListener('click',function(){
  buffer=buffer+"7";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number8=document.querySelector('.eight');
number8.addEventListener('click',function(){
  buffer=buffer+"8";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number9=document.querySelector('.nine');
number9.addEventListener('click',function(){
  buffer=buffer+"9";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});

const number0=document.querySelector('.zero');
number0.addEventListener('click',function(){
  buffer=buffer+"0";
  const output=document.querySelector('.row0');
  output.innerText = buffer;
});






const addition=document.querySelector('.addition')
addition.addEventListener('click', function(){
  if(previous===null){
    total=parseInt(buffer);
    const output=document.querySelector('.row0');
    buffer=" "
    previous=1;
  }
  else{
    total=operation(previous, total, parseInt(buffer));
    buffer=" "
    previous=1;
  }
  console.log(total);
})

const subtraction=document.querySelector('.subtraction')
subtraction.addEventListener('click', function(){
  if(previous===null){
    total=parseInt(buffer);
    const output=document.querySelector('.row0');
    buffer=" "
    previous=2;
  }
  else{
    total=operation(previous, total, parseInt(buffer));
    buffer=" "
    previous=2;
  }
  console.log(total);
})

const multiplication=document.querySelector('.multiplication')
multiplication.addEventListener('click', function(){
  if(previous===null){
    total=parseInt(buffer);
    const output=document.querySelector('.row0');
    buffer=" "
    previous=3;
  }
  else{
    total=operation(previous, total, parseInt(buffer));
    buffer=" "
    previous=3;
  }
  console.log(total);
})

const division=document.querySelector('.division')
division.addEventListener('click', function(){
  if(previous===null){
    total=parseInt(buffer);
    const output=document.querySelector('.row0');
    buffer=" "
    previous=4;
  }
  else{
    total=operation(previous, total, parseInt(buffer));
    buffer=" "
    previous=4;
  }
  console.log(total);
})

const equal=document.querySelector('.equal')
equal.addEventListener('click', function(){
  if(previous===null){
    total=parseInt(buffer);
    const output=document.querySelector('.row0');
    buffer=" "
    previous=5;
  }
  else{
  total=operation(previous, total, parseInt(buffer));
  const output=document.querySelector('.row0');
  output.innerText = total;
  console.log(total);
  previous=5;}
  buffer=total.toString();
})

const clear=document.querySelector('.clear')
clear.addEventListener('click', function(){
  buffer=" ";
  total=0;
  previous= null;
  console.log(total);
  const output=document.querySelector('.row0');
  if(output.innerText = " "){
    output.innerText="0";
  };
})

const backspace=document.querySelector('.backspace')
backspace.addEventListener('click', function(){
  if(buffer.length>0){
    buffer=buffer.substring(0,buffer.length-1);
  }
  const output=document.querySelector('.row0');
  if(buffer===""){
    output.innerText="0"
  }
  else{
    output.innerText = buffer;
  }
})
