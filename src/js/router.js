window.libreria.getId('vista').enrutar()
    .ruta('/', './html/aboutme.html', 'miControlador', function(){
        libreria.getctrl().primerap()
    })

    .ruta('/segunda', './html/contact.html', 'miControlador', function(){
        libreria.getctrl().segundap()
    })

    .ruta('/tercera', './html/projects.html', 'miControlador', function(){
        libreria.getctrl().prueba()
    })