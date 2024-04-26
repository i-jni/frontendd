const apiUrl = import.meta.env.VITE_API_URL;
const version = "v1";

export async function getRdvs() {
    try {
      const response = await fetch("http://localhost:3001/api/v1/rdv/"); 
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des rdv');
      }
      return response.json();
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rdv: ${error.message}`);
    }
}
  
export async function getRdvById(id) {
  const response = await fetch(`${apiUrl}/api/${version}/rdv/${id}`);
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération du rdv');
  }
  return response.json();
}

export async function createRdv(rdvData) {
  const response = await fetch(`${apiUrl}/api/${version}/rdv/create`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(rdvData)
  });
  if (!response.ok) {
      throw new Error('Erreur lors de la création du rdv');
  }
  return response.json();
}


// export async function checkAvailability(startDate, endDate) {
//   try {
//       const url = `http://localhost:3001/api/v1/rdv/check?startDate=${startDate}&endDate=${endDate}`;
//       const response = await fetch(url);

//       if (!response.ok) {
//           throw new Error('Erreur lors de la vérification de la disponibilité des créneaux horaires');
//       }

//       return response.json();
//   } catch (error) {
//       throw new Error(`Erreur lors de la vérification de la disponibilité des créneaux horaires : ${error.message}`);
//   }
// }

// export async function checkAvailability(startDate) {
//   const response = await fetch(`${apiUrl}/api/${version}/rdv/checkAvailability`, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ startDate })
//   });
//   if (!response.ok) {
//       throw new Error('Erreur lors de la vérification de la disponibilité du créneau horaire');
//   }
//   return response.json();
// }