bandera=localStorage.getItem('bandera');
function activarButtons(){
    if(bandera){
        alert('Reservado')
    } else {
        alert('Registrate')
    }
}