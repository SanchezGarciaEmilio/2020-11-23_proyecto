/*Datos sobre los productos vendidos, incluyendo su ID, nombre, precio (€), cantidad(por unidad), características(largo y ancho por metro, calidad del 0-10), su estado (vendido o no), sus etiquetas y una descripción.*/

db.Productos.insertMany([
    {"_id": "PDA", "Nombre": "Panel de acero", "Precio": 10, "Cantidad": 30, "Caracteristicas": 
        {
        "Ancho": 0.8,
        "Largo": 1,
        "Calidad": 8,},
    "Vendido": true, "Etiquetas": [18, 19, 20], "Descripcion": "Paneles de acero en buen estado. Se compran por paquetes de 10. Envío gratis a partir de los 50€."}
            ,
    {"_id": "PDH", "Nombre": "Panel de hierro", "Precio": 15, "Cantidad": 32, "Caracteristicas": 
        {
        "Ancho": 1,
        "Largo": 1,
        "Calidad": 7,},
    "Vendido": true, "Etiquetas": [11, 12, 13], "Descripcion": "Paneles de hierro para la construcción. Fuertes y resistentes. De la empresa FOUNTAIN SA."}
            ,
    {"_id": "PDAL", "Nombre": "Panel de aluminio", "Precio": 25, "Cantidad": 15, "Caracteristicas": 
        {
        "Ancho": 0.6,
        "Largo": 1,
        "Calidad": 9,},
    "Vendido": false, "Etiquetas": [8, 9, 10], "Descripcion": "Paneles de aluminio para construcción e investigación. Se recomienda guardar con cuidado. Envío gratis a partir de los 100€."}
            ,
    {"_id": "BDAL", "Nombre": "Barras de aluminio", "Precio": 30, "Cantidad": 20, "Caracteristicas": 
        {
        "Ancho": 0.2,
        "Largo": 1.5,
        "Calidad": 8,},
    "Vendido": true, "Etiquetas": [3, 4, 5], "Descripcion": "Barras de aluminio. Envío gratis si se piden junto a otro producto."}
            ,
    {"_id": "TDA", "Nombre": "Tornillos de acero", "Precio": 0.1, "Cantidad": 1000, "Caracteristicas": 
        {
        "Ancho": 0.02,
        "Largo": 0.08,
        "Calidad": 5,},
    "Vendido": false, "Etiquetas": [24, 25, 26], "Descripcion": "Tornillos de acero. El envío tarda más de lo normal debido a que se importan desde Francia."}
]);