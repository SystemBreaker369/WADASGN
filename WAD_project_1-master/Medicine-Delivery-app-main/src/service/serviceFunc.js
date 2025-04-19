export const makeUniquePharmacies = allMedicineArr => {
  const pharmacies = allMedicineArr?.map(item => item.pharmacy);
  const uniquePharmacies = pharmacies.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  return uniquePharmacies;
};

// const medicines = [
//   "Aspirin",
//   "Paracetamol",
//   "Ibuprofen",
//   "Amoxicillin",
//   "Omeprazole",
//   "Lisinopril",
//   "Metformin",
//   "Atorvastatin",
//   "Simvastatin",
//   "Losartan",
//   "Amlodipine",
//   "Gabapentin",
//   "Warfarin",
//   "Prednisone",
//   "Metoprolol",
//   "Azithromycin",
//   "Hydrochlorothiazide",
//   "Levothyroxine",
//   "Furosemide",
//   "Pantoprazole",
//   "Albuterol",
//   "Fluticasone",
//   "Tramadol",
//   "Ciprofloxacin",
//   "Clonazepam",
//   "Sertraline",
//   "Escitalopram",
//   "Diazepam",
//   "Venlafaxine",
//   "Duloxetine",
//   "Mirtazapine",
//   "Trazodone",
//   "Lorazepam",
//   "Citalopram",
//   "Fluoxetine",
//   "Quetiapine",
//   "Olanzapine",
//   "Risperidone",
//   "Aripiprazole",
//   "Haloperidol",
//   "Loratadine",
//   "Montelukast",
//   "Clopidogrel",
//   "Rosuvastatin",
//   "Carvedilol",
//   "Digoxin",
//   "Diltiazem",
//   "Bisoprolol",
//   "Nifedipine"
// ];

export function generateID() {
  return Math.floor(Math.random() * 900) + 100;
}

// function generateDatabase() {
//   const database = [];
//   for (let i = 0; i < 5; i++) {
//     const pharmacyName = "Pharmacy " + (i + 1);
//     const numMedicines = Math.floor(Math.random() * 6) + 5;
//     for (let j = 0; j < numMedicines; j++) {
//       const medicineName = medicines[Math.floor(Math.random() * medicines.length)];
//       const imgURL = "https://www.volynpost.com/img/modules/articles/9/42/16af356f7dbc97e28f0c0d2fe8fa8429/top-photo.jpg"; // URL-заглушка
//       const description = "Description of " + medicineName;
//       const price = parseFloat((Math.random() * (50 - 5) + 5).toFixed(2));
//       const id = generateID().toString();
//       const entry = {
//         pharmacy: pharmacyName,
//         medicine: medicineName,
//         img: imgURL,
//         description: description,
//         price: price,
//         id: id
//       };
//       database.push(entry);
//     }
//   }
//   return database;
// }

// const myDatabase = generateDatabase();

export const assignDiseaseCategoryToMedicines = medicines => {
  const diseaseCategories = [
    'fever',
    'cough',
    'allergy',
    'dental',
    'digestive',
    'skin',
    'eye',
    'vitamins',
    'firstaid',
    'diabetes',
  ];

  // Keywords that might indicate which category a medicine belongs to
  const categoryKeywords = {
    fever: [
      'fever',
      'pain',
      'ache',
      'headache',
      'ibuprofen',
      'paracetamol',
      'aspirin',
    ],
    cough: ['cough', 'cold', 'flu', 'throat', 'nasal', 'congestion', 'mucus'],
    allergy: [
      'allergy',
      'antihistamine',
      'hay fever',
      'loratadine',
      'cetirizine',
    ],
    dental: [
      'dental',
      'tooth',
      'oral',
      'gum',
      'mouth',
      'toothache',
      'teething',
    ],
    digestive: [
      'digestive',
      'stomach',
      'acid',
      'reflux',
      'antacid',
      'diarrhea',
      'laxative',
    ],
    skin: [
      'skin',
      'ointment',
      'cream',
      'lotion',
      'moisturizer',
      'acne',
      'rash',
    ],
    eye: ['eye', 'drops', 'vision', 'conjunctivitis', 'dry eye'],
    vitamins: [
      'vitamin',
      'supplement',
      'mineral',
      'iron',
      'calcium',
      'probiotic',
    ],
    firstaid: ['bandage', 'antiseptic', 'wound', 'injury', 'plaster', 'gauze'],
    diabetes: ['diabetes', 'glucose', 'insulin', 'sugar', 'diabetic'],
  };

  // Assign categories based on medicine name or description keywords
  return medicines.map(medicine => {
    if (medicine.diseaseCategory) return medicine;

    let category = null;

    // Try to assign category based on keywords in medicine name or description
    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
      const medicineText =
        `${medicine.medicine} ${medicine.description}`.toLowerCase();
      if (keywords.some(keyword => medicineText.includes(keyword))) {
        category = cat;
        break;
      }
    }

    // If no category found by keywords, assign random category
    if (!category) {
      const randomIndex = Math.floor(Math.random() * diseaseCategories.length);
      category = diseaseCategories[randomIndex];
    }

    return { ...medicine, diseaseCategory: category };
  });
};
