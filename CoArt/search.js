document.addEventListener('keyup', e =>{
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.articulos').forEach(articulos =>{
            console.log(articulos.textContent.toLowerCase().includes(e.target.value))
        })
    }
})