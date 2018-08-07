const b=(m)=>{
    alert(m); 
    const s="take back lol";
    alert(s.split(" ").reduce((str,v)=> str.length<v.length?str=v:str=str));
    }
const add=(a,b)=> a+b;
const sub=(a,b)=>a-b;   