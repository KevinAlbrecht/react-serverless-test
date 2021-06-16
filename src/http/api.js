export function getUserOrganizations() {
  return [
    { name: 'Microsoft', id: '201d47a7-8ac5-48b4-acf7-10a141696674' },
    { name: 'Google', id: '4913f36d-7d62-455e-aa7f-84a5457c97ab' },
  ];
}

export function getCampainForOrganization(organizationId) {
  return campains.filter((c) => c.organizationId === organizationId);
}

const campains = [
  {
    id: '1',
    name: 'Vente de Paninis',
    description: '1 panini acheté  = une partie de babyfoot offerte',
    marker: [43.4568575, 5.4773089],
    organizationId: '201d47a7-8ac5-48b4-acf7-10a141696674',
  },
  {
    id: '2',
    name: 'Cyber café promos',
    description:
      "Distributions de 30minutes gratuites, si tu me bats dans l'arene PVP",
    marker: [43.4571422, 5.4772632],
    organizationId: '201d47a7-8ac5-48b4-acf7-10a141696674',
  },
  {
    id: '3',
    name: 'lycée M.M.Fourcade',
    description: 'Un café offert à ceux qui rentrent malgré le blocus',
    marker: [43.454853780188635, 5.479628627687467],
    organizationId: '201d47a7-8ac5-48b4-acf7-10a141696674',
  },
  {
    id: '4',
    name: 'Souvenirs du "CROSS"',
    description: 'Allé les enfants on cours!',
    marker: [43.45052054104559, 5.47098015534906],
    organizationId: '4913f36d-7d62-455e-aa7f-84a5457c97ab',
  },
  {
    id: '5',
    name: "Auto école :')",
    description:
      "Je pense qu'il te faut encore 3~4 heures de conduite, viens payer !",
    marker: [43.456397450200974, 5.478078096246985],
    organizationId: '4913f36d-7d62-455e-aa7f-84a5457c97ab',
  },
];
