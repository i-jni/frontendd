import emailjs from 'emailjs-com';

export const EmailSender = () => {

    const sendEmailToEntreprise = (formData) => {
        console.log('formdata email client');

        emailjs.send('service_fuazxqq', 'template_226edyq', {
            entreprise_nom: formData.entreprise.nom,
            to_name: formData.entreprise.nom, 
            to_email: formData.entreprise.email_entreprise,
            startDate: formData.startDate,
            endDate: formData.endDate,
            message: 'Votre rendez-vous a été confirmé pour la date et l\'heure sélectionnées.'
        }, 'lchoPEKwvwCkQf-rT')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
    }

    const sendEmailToTbuster = (formData) => {
        console.log('formdata email buster');
        emailjs.send('service_fuazxqq', 'template_7ygbt5m', {
            to_name: 'TruckBuster', 
            to_email: formData.email_tbuster,
            entreprise_nom:formData.entreprise.nom,
            entreprise_email: formData.entreprise.email_entreprise,
            chauffeur: formData.entreprise.chauffeur,
            camion_immatricule: formData.entreprise.camion_immatricule,
            modele: formData.entreprise.modele,
            marque: formData.entreprise.marque,
            startDate: formData.startDate,
            endDate: formData.endDate,
            message: 'Un nouveau rendez-vous a été réservé.'
        }, 'lchoPEKwvwCkQf-rT')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
    }

    return {
        sendEmailToEntreprise,
        sendEmailToTbuster
    }
}