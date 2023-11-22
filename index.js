const burger = document.getElementById("menu-d");
const menu = document.getElementById("menu-a");
const body = document.getElementById("body");
const cambioColor = document.getElementById("cambio-color");
const barrasColor1 = document.getElementById("barras-color1");
const barrasColor2 = document.getElementById("barras-color2");
const primerImagen = document.getElementById("primer-imagen");
const logoColor = document.getElementById("logo-color");
const miniColor = document.getElementById("miniparlante-color");
const aulaColor = document.getElementById("aula-color");
let paginaDefault = false;

burger.addEventListener("click", () => {
    menu.classList.toggle("visible")
})


const menubar = document.getElementById("menu-d").addEventListener("click", animateBars);

const linea1 = document.querySelector(".line1__menu-barras");
const linea2 = document.querySelector(".line2__menu-barras");





function animateBars(){
    linea1.classList.toggle("activeline1__menu-barras");
    linea2.classList.toggle("activeline2__menu-barras");
}

cambioColor.addEventListener("click", () =>{
    if(!paginaDefault){
    barrasColor1.style.background = "white";
    barrasColor2.style.background = "white";
    body.style.background = "black";
    body.style.color = "white";
    aulaColor.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146208407032963123/Picsart_23-08-29_19-22-51-875.png"
    miniColor.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146208231992078356/Picsart_23-08-29_19-22-10-080.png"
    logoColor.src = "https://media.discordapp.net/attachments/1108182671177302016/1146208856532320386/MARCA-VERT_BLANCO_INSONORA.png"
     cambioColor.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146218990792888420/Picsart_23-08-29_20-04-56-462.png";
    primerImagen.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146208444139982939/Picsart_23-08-29_19-18-55-083.png";}
     else {
        barrasColor1.style.background = "black";
        barrasColor2.style.background = "black";
        body.style.backgroundAttachment = "fixed"
        body.style.backgroundSize = "cover";
        body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1108182671177302016/1146207796073873498/FONDO_COLOR_INSONORA.png')";
        body.style.color = "black";
        aulaColor.src = "https://cdn-icons-png.flaticon.com/512/185/185578.png";
        miniColor.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146219348495704064/Picsart_23-08-29_20-06-22-596.png";
        logoColor.src = "https://cdn.discordapp.com/attachments/1108182671177302016/1146222078412992563/MARCA-VERT_NEGRO_INSONORA.png";
         cambioColor.src = "https://cdn-icons-png.flaticon.com/512/6661/6661565.png";
        primerImagen.src = "https://cdn3.iconfinder.com/data/icons/advanced-linecons/1024/umwelt_gerauscheakustik-512.png";

    }

    paginaDefault = !paginaDefault;
    })