import { SMTPClient, Message } from 'emailjs';
import template from './template.js';

export const sendMail = (data) => {
    const client = new SMTPClient({
        user: 'congresofemeg@gmail.com',
        password: 'qfmwcwlgplpggjhw',
        host: 'smtp.googlemail.com',
        ssl: true,
        port: 465
    });

    const message = {
        from: 'congresofemeg@gmail.com',
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