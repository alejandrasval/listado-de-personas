const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Pedro', 'García'),
    new Persona('María', 'Rodríguez')
]

function mostrarPersonas(){
    console.log('Mostrar personas...')
    let text = '';
    for(let persona of personas){
        console.log(persona);
        text += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = text;
}
function agregarPersona(){
    const form = document.forms['form'];
    const nombre = form['nombre'];
    const apellido = form['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona)
        personas.push(persona)
        mostrarPersonas();
    }
    else{
        alert('No hay información para agregar')
    }
}