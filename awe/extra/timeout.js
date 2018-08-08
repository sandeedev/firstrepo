var i = 0
var timeo = ()=> {

 setInterval(()=>{
        console.log('Timeout', i++)
        timeo()
        clearInterval()
    }, 1000)
}


timeo()