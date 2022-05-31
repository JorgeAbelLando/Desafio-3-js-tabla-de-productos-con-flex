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

var container=document.querySelector("#container");
var elementosContenido="";

function diagramar1(array){

  elementosContenido=   `
<h1>Tabla</h1>
<p>Contenido de la tabla</p>
<table class="table">
    <thead>
        <tr>
           <th scope="col">Productos</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precios</th> 
        </tr>
    </thead>
    <tbody>
`;
array.forEach(element=>{
 elementosContenido=elementosContenido+
`
       <tr>
            <td class="table-primary">${element.nombre}</td>
            <td class="table-primary">${element.descripcion}</td>
            <td class="table-primary">${element.precio}</td>
   
       </tr>
`
});
elementosContenido=elementosContenido+`
    </tbody>
 </table>
`;
container.innerHTML=elementosContenido;
}
diagramar1(productos);



function diagramar2(array){
    elementosContenido=   `
    <h1>Grilla</h1>
    <p>Contenido de la grilla</p> 
    <div>
     `;

    array.forEach(element => {
        elementosContenido=elementosContenido+
        `
            <div class="elementosContenido">
                <h3>${element.nombre}</h3>
                <p>${element.descripcion}</p> 
                <span>$ ${element.precio}</span> 
             </div>
        `;      
    }); 
    elementosContenido=elementosContenido+`
    </div>;
`;
    container.innerHTML=elementosContenido; 
}
diagramar2(productos);



  