let Calculate=()=>
{
    let Val=document.getElementById('Temp').value;
    
    let Index=document.getElementById('Opt').selectedIndex;
    
    let FartoCal=(Val)=>
    {
        return Math.round((Val-32)/1.8);
    }
    let CaltoFar=()=>
    {
        return Math.round((1.8*Val)+32);
    }

    if(Index==1)
    {
        let Ans=FartoCal(Val);
        document.getElementById('Add').innerHTML=`The Temperature is ${Ans} Celcius`;
    }
    else
    {
        let Ans=CaltoFar(Val);
        document.getElementById('Add').innerHTML=`The Temperature is ${Ans} Farenhiet`;
    }
}