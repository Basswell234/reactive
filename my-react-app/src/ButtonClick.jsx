

function ButtonClick() {

    let count = 0;
    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me`);
        }
    }; 

    const eventhandle = (e) => e.target.textContent = "OUCH!";
    


    return(<button onClick={(e) => eventhandle(e)}>Click Me</button>);
}

function  Button(){
SSDWA
}

export default ButtonClick