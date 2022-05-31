const productos=[
{
    nombre:"Primer producto:Martillo",
    descripcion:"Es de hacero muy resistenete",
    precio:"150",
},
{
    nombre:"Segundo producto:Cerrucho",
    descripcion:"Es de hacero muy resistenete",
    precio:"300",
},
{
    nombre:"Tercer producto:Pala",
    descripcion:"Es de hacero muy resistenete",
    precio:"800",
},
{
    nombre:"Cuarto producto:Destornillador",
    descripcion:"Es de hacero muy resistenete",
    precio:"50",
},
{
    nombre:"Quinto producto:Hacha",
    descripcion:"Es de hacero muy resistenete",
    precio:"700",
},
{
    nombre:"Sexto producto:Pico",
    descripcion:"Es de hacero muy resistenete",
    precio:"500",
},
{
    nombre:"Sectimo producto:Cuchara",
    descripcion:"Es de hacero muy resistenete",
    precio:"200",
},
{
    nombre:"Octavo producto:Lija",
    descripcion:"Es de muy resistenete",
    precio:"20",
},
{
    nombre:"Octavo producto:Llave",
    descripcion:"Es de muy resistenete",
    precio:"650",
}
]  

var estado="nada";
var estado1="nada";


if(estado=="nada"){

function textos2(){ 
    
    var titulo=document.querySelector("#titulo");
    titulo.innerHTML="Productos de ferreteria";  
     var container=document.querySelector('.container');
 /*var orden='descendente';
 console.log(container.className);
 container.className=container.className+' '+orden;*/

 estado="textos2()";

 function diagramar(array){
    let estante="";
    array.forEach(element => {
        estante=estante+`

            <div class="estante">
                <h3>${element.nombre}</h3>
                <p>${element.descripcion}</p> 
                <span>$ ${element.precio}</span> 
             </div>
        `;      
    }); 
    container.innerHTML=estante; 
}
diagramar(productos);
}

}  
if(estado1=="nada"){
    function textos1(){
        
         tablaa=document.querySelector("#tabla");
              var titulo2=document.querySelector("#titulo2");
               titulo2.innerHTML="Tabla de Productos de Ferreteria";
              var table=document.querySelector('.table');
              var container=document.querySelector('.container');
              
         estado1="textos1()";
              
    function diagramar2(array){
        
        cuerpoTabla=   `
        <tr>
            <th scope="col">
            </svg> Productos
            </a>
        </th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precios</th>
            <th scope="col"></th>  
       </tr>
    `;
        array.forEach(element=>{
            cuerpoTabla=cuerpoTabla+
            `
            <tr>
                <td class="table-primary">${element.nombre}</td>
                <td class="table-primary">${element.descripcion}</td>
                <td class="table-primary">${element.precio}</td>
               
            </tr>
        `
        })
        container.innerHTML=cuerpoTabla;
       
    }
    diagramar2(productos);
}
}


/*var container=document.querySelector("#container");


function diagramar1(array){
    
elementosContenido=   `
<h1>Tabla</h1>
    <p>Contenido de la tabla</p>
<tr>
    <th scope="col">
    </svg> Productos
    </a>
</th>
    <th scope="col">Descripcion</th>
    <th scope="col">Precios</th>
    <th scope="col"></th>  
</tr>
`;
array.forEach(element=>{
    elementosContenido=elementosContenido+
    `<table>
    <tbody>
    <tr>
        <td class="table-primary">${element.nombre}</td>
        <td class="table-primary">${element.descripcion}</td>
        <td class="table-primary">${element.precio}</td>
       
    </tr>
    </tbody>
    </table>
`
})
container.innerHTML=elementosContenido;
}
diagramar1(productos);*/


/*function diagramar2(array){
    let elementosContenido="";
    array.forEach(element => {
        elementosContenido=elementosContenido+`

            <div class="elementosContenido">
                <h3>${element.nombre}</h3>
                <p>${element.descripcion}</p> 
                <span>$ ${element.precio}</span> 
             </div>
        `;      
    }); 
    container.innerHTML=elementosContenido; 
}
diagramar2(productos);*/


/*var container=document.querySelector("#container");*/
/*var elementosContenido="";

function diagramar1(){
   
    
    elementosContenido=   `
    <h1>Tabla</h1>
    <p>Contenido de la tabla</p>
    
   <table>
   <thead>
<tr>
    <th scope="col">
    </svg> Productos
    </a>
</th>
    <th scope="col">Descripcion</th>
    <th scope="col">Precios</th>
    <th scope="col"></th>  
</tr> 
</thead>
<tbody>
<tr>
        <td class="table-primary">nombre</td>
        <td class="table-primary">descripcion</td>
        <td class="table-primary">precio</td>
       
    </tr>
    </tbody>
</table>
`;
  
    container.innerHTML=elementosContenido;
}*/
