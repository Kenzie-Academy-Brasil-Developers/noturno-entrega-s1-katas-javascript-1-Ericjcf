//1
function oneThroughTwenty() {
    
    let retorno = []
    for(let i=1; i<=20; i++){
      retorno.push(i)
    }
    return retorno;
  }
  console.log(oneThroughTwenty())
  
  //2
  function evensToTwenty() {
      
    let retorno = []
    for(let i=1; i<=20; i++){
        if (i % 2 ==0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(evensToTwenty())
  
  //3
  function oddsToTwenty() {
      
    let retorno = []
    for(let i=1; i<=20; i++){
        if (i % 2 !=0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(oddsToTwenty())
  
  //4
  function multiplesOfFive() {
   
    let retorno = []
    for(let i=1; i<=100; i++){
        if (i % 5 ==0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(multiplesOfFive())
  
  //5
  function squareNumbers() {
  
    let retorno = []
    let i = 1
    do {
     quadrado = i*i
     if( quadrado <= 100){
       retorno.push(quadrado)
     }
     i++
    }while(quadrado <= 100)
    
   return retorno
  }
  console.log(squareNumbers())
  
  //6
  function countingBackwards() {
       
    let retorno = []
    for(let i=20; i>=1; i--){
      retorno.push(i)
    }
    return retorno;
  }
  console.log(countingBackwards())
  
  //7
  function evenNumbersBackwards() {
      
    let retorno = []
    for(let i=20; i>=1; i--){
        if (i % 2 ==0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(evenNumbersBackwards())
  
  //8
  function oddNumbersBackwards() {
    let retorno = []
    for(let i=20; i>=1; i--){
        if (i % 2 !=0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(oddNumbersBackwards())
  
  //9
  function multiplesOfFiveBackwards() {
      
    let retorno = []
    for(let i=100; i>=1; i--){
        if (i % 5 ==0 )
        {
            retorno.push(i)
        }
    }
    return retorno;
  }
  console.log(multiplesOfFiveBackwards())
  
  //10
  function squareNumbersBackwards() {
  
    let retorno = []
    let i = 10
    do {
     quadrado = i*i
     if( quadrado <= 100){
       retorno.push(quadrado)
     }
     i--
    }while(i>=1)
    
   return retorno
  }
  console.log(squareNumbersBackwards())
