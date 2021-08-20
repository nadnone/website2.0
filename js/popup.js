function redirection(){
    UIkit.notification({
        message: "Vous étes provisoirement redirigé dans un serveur cloud OVH, pour raison de maintenance.",
        status: 'warning',
        pos: 'top-left',
        timeout: 5000
    });
    UIkit.notification({
        message: "Certaines fonctionnalités risquent de ne pas fonctionner correctement",
        status: 'warning',
        pos: 'top-left',
        timeout: 5000
    });
}


//redirection()