const template = (name, lastname) => {
    return (
        `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
                <style>
                    * {
                        font-family: 'Roboto', sans-serif;
                        font-weight: 800;
                    }
            
                    .header {
                        display: flex;
                    }
            
                    .header img {
                        width: 100px;
                        height: 100px;
                    }
                </style>
            </head>
            <body>
                <div>
                    <div class="header">
                        <img src="http://157.230.12.100/static/media/logo1.09ae65993f586f17cf4d.PNG" />
                        <img src="http://157.230.12.100/static/media/logo2.28dbb1b7e70cca694542.PNG" />
                        <img src="http://157.230.12.100/static/media/logo3.565466eac7f8c8927ea9.PNG" />
                    </div>
                    <p>Estimado(a): ${name.toUpperCase()} ${lastname.toUpperCase()}</p>
                    <br />
                    <br />
                    <p>
                        Por este conducto confirmamos su registro, se le hara llegar via correo electronico
                        los datos para el examen de conocimientos segun el calendario de la convocatoria.
                    </p>
                    <br />
                    <br />
                    <p>Gracias</p>
                    <br />
                    <br />
                    <p>Cordialmente</p>
                    <p>Dr. Jaime Alfredo Calderon Tapia</p>
                </div>
            </body>
            </html>
        `
    )
}

export default template;