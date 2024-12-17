require('dotenv').config(); // Carrega as variáveis do arquivo .env
const nodemailer = require('nodemailer');
const fs = require('fs');

// Carrega os leads do arquivo JSON
const leads = JSON.parse(fs.readFileSync('data/leads.json', 'utf8'));

// Configuração do transporte SMTP usando Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // TLS
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL, // Seu Gmail (variável de ambiente)
    pass: process.env.SMTP_PASSWORD, // Sua senha de aplicativo
  },
});
const SMTP_EMAIL_DESTINATION = process.env.SMTP_EMAIL_DESTINATION;
const toEmails = SMTP_EMAIL_DESTINATION ? SMTP_EMAIL_DESTINATION.split(',') : [];


// Função para envio de e-mails
(async () => {
  for (const lead of leads) {
    const mailOptions = {
      from: '"TECHWAY" <' + process.env.SMTP_EMAIL + '>',
      to: toEmails,
      subject: `Novo Lead: ${lead.name}`,
      text: `Novo lead capturado!\nNome: ${lead.name}\nE-mail: ${lead.email}\nNecessidade: ${lead.need}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`E-mail enviado com sucesso para ${lead.name}`);
    } catch (error) {
      console.error(`Erro ao enviar e-mail: ${error.message}`);
    }
  }
})();
