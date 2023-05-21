

function menu_desplegable(){
    const menu= document.getElementById("nav_header");
    const barras=document.getElementById("boton_menu");
    if(menu.style.opacity==0){
        menu.style.display="flex"
        setTimeout(()=>{menu.style.opacity=1;},100);
        barras.style.transform="rotate(90deg)";
    }else{
        menu.style.opacity=0;
        setTimeout(()=>{menu.style.display="none";},500);
        barras.style.transform="rotate(0deg)";
    }
}

function menu_repliegue(){
    const menu=document.getElementById("nav_header");
    const barras=document.getElementById("boton_menu");
    if(menu.style.opacity==1){
        menu.style.opacity=0;
        setTimeout(()=>{menu.style.display="none";},500);
        barras.style.transform="rotate(0deg)";
    }
}

function despliegueInfo(){
    const fijo=document.getElementById("top");
    const menu=document.getElementById("masinfo");
    const boton=document.getElementById("boton_info");
    fijo.style.display="none";
    boton.style.display="none";
    menu.style.display="flex";
    menu.style.opacity=1;
    menu.style.translate="0 -10vh";
}

function repliegueInfo(){
    const fijo=document.getElementById("top");
    const menu=document.getElementById("masinfo");
    const boton=document.getElementById("boton_info");
    fijo.style.display="block";
    boton.style.display="flex";
    setTimeout(()=>{menu.style.display="none";},500);
    menu.style.opacity=0;
    menu.style.translate="0 0";
}