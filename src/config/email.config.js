import { SMTPClient, Message } from 'emailjs';
import template from './template.js';

export const sendMail = (data) => {
    const client = new SMTPClient({
        user: 'femegcongreso@gmail.com',
        password: 'mozbiqemtolsqrmr',
        host: 'smtp.googlemail.com',
        ssl: true,
        port: 465
    });

    const message = {
        from: 'femegcongreso@gmail.com',
        to: ` ${data.email} ${data.lastname}`,
        cc: 'contacto@ole-sfera.com, endoginhmujer@gmail.com, drjaimecalderon@gmai.com',
        subject: 'REGISTRO DE ASPIRANTES A CURSO ALTA ESPECIALIDAD EN ENDOSCOPIA GINECOLOGICA',
        attachment: [
            { data: template(data.name, data.lastname), alternative: true },
        ],
    };

    client.send(message, function (err, message) {
        console.log(err || message);
    });    
}