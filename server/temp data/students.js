const students = [
  {
    firstName: "James",
    lastName: "Eze",
    email: "ndubuisi.eze60@univ-constantine2.dz",
    phone: "0798961871",
    address: "UV18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Blaze@500",
    inscription: "188NGA51078",
    department: "MI",
    level: "Licence 1",
    group: "G1",
    section_speciality: "Section 1",
  },
  {
    firstName: "Salimane",
    lastName: "Mousaouibrahim",
    email: "Salimane.Mousaouibrahim60@univ-constantine2.dz",
    phone: "0503961871",
    address: "UV18 batiment mohammed",
    city: "Alger central, Algiers",
    password: "Salimane@500",
    inscription: "188NGA52078",
    department: "MI",
    level: "Licence 1",
    group: "G2",
    section_speciality: "Section 1",
  },
  {
    firstName: "OUNISSI FADOUA",
    lastName: "FADOUA",
    email: "FADOUA.OUNISSI@univ-constantine2.dz",
    phone: "0503961871",
    address: "cite 4, university 2",
    city: "Constantine, nouvelle",
    password: "Ounissi@500",
    inscription: "188NGA53078",
    department: "MI",
    level: "Licence 1",
    group: "G3",
    section_speciality: "Section 1",
  },
  {
    firstName: "ABADA",
    lastName: "AYA",
    email: "AYA.ABADA@univ-constantine2.dz",
    phone: "0503961871",
    address: "cite El-kroube",
    city: "Boumerdes, Boudouaua",
    password: "Abada@500",
    inscription: "188NGA54078",
    department: "MI",
    level: "Licence 1",
    group: "G4",
    section_speciality: "Section 1",
  },
  {
    firstName: "ALLAG EDDINE AYOUB",
    lastName: "SALAH",
    email: "SALAH.EDDINE.AYOUB.ALLAG@univ-constantine2.dz",
    phone: "0503961871",
    address: "batiment salimane",
    city: "Annaba, central ville",
    password: "Allag@500",
    inscription: "188NGA55078",
    department: "MI",
    level: "Licence 1",
    group: "G5",
    section_speciality: "Section 2",
  },
  {
    firstName: "HACEN",
    lastName: "ALLOUT",
    email: "HACEN.ALLOUT@univ-constantine2.dz",
    phone: "0503961871",
    address: "batiment saharawi",
    city: "Constantine, central ville",
    password: "Hacen@500",
    inscription: "188NGA56078",
    department: "MI",
    level: "Licence 1",
    group: "G6",
    section_speciality: "Section 2",
  },
  {
    firstName: "MAHDI",
    lastName: "CHETTIH",
    email: "CHETTIH.MAHDI@univ-constantine2.dz",
    phone: "0503961871",
    address: "sans visa",
    city: "Constantine, nouvelle",
    password: "Mahdi@500",
    inscription: "188NGA57078",
    department: "MI",
    level: "Licence 1",
    group: "G7",
    section_speciality: "Section 2",
  },
  {
    firstName: "Moses",
    lastName: "Amadi",
    email: "moses.amadi60@univ-constantine2.dz",
    phone: "0798961871",
    address: "UV18 batiment salfa",
    city: "Constantine, nouvelle",
    password: "Moses@500",
    inscription: "188NGA58078",
    department: "MI",
    level: "Licence 1",
    group: "G8",
    section_speciality: "Section 2",
  },
  {
    firstName: "Alpha",
    lastName: "Wu-yep",
    email: "Alpha.wu-yep60@univ-constantine2.dz",
    phone: "0503961871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Alpha@500",
    inscription: "188NGA59078",
    department: "MI",
    level: "Licence 1",
    group: "G9",
    section_speciality: "Section 3",
  },
  {
    firstName: "Pius",
    lastName: "Sunday",
    email: "pius.sunday@univ-constantine2.dz",
    phone: "0503961871",
    address: "UV-18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Sunday@500",
    inscription: "188NGA51008",
    department: "MI",
    level: "Licence 1",
    group: "G10",
    section_speciality: "Section 3",
  },
  {
    firstName: "Boluwatife",
    lastName: "David",
    email: "David.Osuuu@univ-constantine2.dz",
    phone: "0503961871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "David@500",
    inscription: "188NGA51108",
    department: "MI",
    level: "Licence 1",
    group: "G11",
    section_speciality: "Section 3",
  },
  {
    firstName: "Abdulahi",
    lastName: "Muhsin",
    email: "Muhsin.Abdulahi@univ-constantine2.dz",
    phone: "0503961871",
    address: "El-harrache",
    city: "Algers, Alger central",
    password: "Abdulahi@500",
    inscription: "188NGA51208",
    department: "MI",
    level: "Licence 1",
    group: "G12",
    section_speciality: "Section 3",
  },
  {
    firstName: "Babs",
    lastName: "Ibrahim",
    email: "Babs.Ibrahim@univ-constantine2.dz",
    phone: "0503961871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Babs@500",
    inscription: "188NGA51308",
    department: "MI",
    level: "Licence 1",
    group: "G13",
    section_speciality: "Section 4",
  },
  {
    firstName: "Malak",
    lastName: "Menie",
    email: "Malak.Menie@univ-constantine2.dz",
    phone: "0503961871",
    address: "batiment malak",
    city: "Jelji, belle ville",
    password: "Malak@500",
    inscription: "188NGA51408",
    department: "MI",
    level: "Licence 1",
    group: "G14",
    section_speciality: "Section 4",
  },
  {
    firstName: "Rahma",
    lastName: "Jacob",
    email: "Rahma.Jacob@univ-constantine2.dz",
    phone: "0503961871",
    address: "batiment Jacob",
    city: "Jelji, belle ville",
    password: "Rahma@500",
    inscription: "188NGA51508",
    department: "MI",
    level: "Licence 1",
    group: "G15",
    section_speciality: "Section 4",
  },
  {
    firstName: "Sarah",
    lastName: "Bansalem",
    email: "Sarah.Bansalem@univ-constantine2.dz",
    phone: "0503961871",
    address: "batiment Bansalem",
    city: "Jelji, belle ville",
    password: "Bansalem@500",
    inscription: "188NGA51608",
    department: "MI",
    level: "Licence 1",
    group: "G16",
    section_speciality: "Section 4",
  },

  //stopped her for db

  //this is the begginning of licence 2
  {
    firstName: "James",
    lastName: "Eze",
    email: "ndubuisi.eze60@univ-constantine2.dz",
    phone: "+213 798 961 871",
    address: "UV18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Blaze@500",
    inscription: "288NGA51078",
    department: "MI",
    level: "Licence 2",
    group: "G1",
    section_speciality: "Section 1",
  },
  {
    firstName: "Salimane",
    lastName: "Mousaouibrahim",
    email: "Salimane.Mousaouibrahim60@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "UV18 batiment mohammed",
    city: "Alger central, Algiers",
    password: "Salimane@500",
    inscription: "288NGA52078",
    department: "MI",
    level: "Licence 2",
    group: "G2",
    section_speciality: "Section 1",
  },
  {
    firstName: "OUNISSI FADOUA",
    lastName: "FADOUA",
    email: "FADOUA.OUNISSI@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 4, university 2",
    city: "Constantine, nouvelle",
    password: "Ounissi@500",
    inscription: "288NGA53078",
    department: "MI",
    level: "Licence 2",
    group: "G3",
    section_speciality: "Section 1",
  },
  {
    firstName: "ABADA ",
    lastName: "AYA",
    email: "AYA.ABADA@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite El-kroube",
    city: "Boumerdes, Boudouaua",
    password: "Abada@500",
    inscription: "288NGA54078",
    department: "MI",
    level: "Licence 2",
    group: "G4",
    section_speciality: "Section 1",
  },
  {
    firstName: "ALLAG EDDINE AYOUB",
    lastName: "SALAH",
    email: "SALAH.EDDINE.AYOUB.ALLAG@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment salimane",
    city: "Annaba, central ville",
    password: "Allag@500",
    inscription: "288NGA55078",
    department: "MI",
    level: "Licence 2",
    group: "G5",
    section_speciality: "Section 2",
  },
  {
    firstName: "HACEN",
    lastName: "ALLOUT",
    email: "HACEN.ALLOUT@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment saharawi",
    city: "Constantine, central ville",
    password: "Hacen@500",
    inscription: "288NGA56078",
    department: "MI",
    level: "Licence 2",
    group: "G6",
    section_speciality: "Section 2",
  },
  {
    firstName: "MAHDI",
    lastName: "CHETTIH",
    email: "CHETTIH.MAHDI@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "sans visa",
    city: "Constantine, nouvelle",
    password: "Mahdi@500",
    inscription: "288NGA57078",
    department: "MI",
    level: "Licence 2",
    group: "G7",
    section_speciality: "Section 2",
  },
  {
    firstName: "Moses",
    lastName: "Amadi",
    email: "moses.amadi60@univ-constantine2.dz",
    phone: "+213 798 961 871",
    address: "UV18 batiment salfa",
    city: "Constantine, nouvelle",
    password: "Moses@500",
    inscription: "288NGA58078",
    department: "MI",
    level: "Licence 2",
    group: "G8",
    section_speciality: "Section 2",
  },
  {
    firstName: "Alpha",
    lastName: "Wu-yep",
    email: "Alpha.wu-yep60@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Alpha@500",
    inscription: "288NGA59078",
    department: "MI",
    level: "Licence 2",
    group: "G9",
    section_speciality: "Section 3",
  },
  {
    firstName: "Pius",
    lastName: "Sunday",
    email: "FADOUA.OUNISSI@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "UV-18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Sunday@500",
    inscription: "288NGA51008",
    department: "MI",
    level: "Licence 2",
    group: "G10",
    section_speciality: "Section 3",
  },
  {
    firstName: "Boluwatife David",
    lastName: "Osuuu",
    email: "David.Osuuu@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "David@500",
    inscription: "288NGA51108",
    department: "MI",
    level: "Licence 2",
    group: "G11",
    section_speciality: "Section 3",
  },
  {
    firstName: "Abdulahi",
    lastName: "Muhsin",
    email: "Muhsin.Abdulahi@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "El-harrache",
    city: "Algers, Alger central",
    password: "Abdulahi@500",
    inscription: "288NGA51208",
    department: "MI",
    level: "Licence 2",
    group: "G12",
    section_speciality: "Section 3",
  },
  {
    firstName: "Babs",
    lastName: "Ibrahim",
    email: "Babs.Ibrahim@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Babs@500",
    inscription: "288NGA51308",
    department: "MI",
    level: "Licence 2",
    group: "G13",
    section_speciality: "Section 4",
  },
  {
    firstName: "Malak",
    lastName: "Menie",
    email: "Malak.Menie@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment malak",
    city: "Jelji, belle ville",
    password: "Malak@500",
    inscription: "288NGA51408",
    department: "MI",
    level: "Licence 2",
    group: "G14",
    section_speciality: "Section 4",
  },
  {
    firstName: "Rahma",
    lastName: "Jacob",
    email: "Rahma.Jacob@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Jacob",
    city: "Jelji, belle ville",
    password: "Rahma@500",
    inscription: "288NGA51508",
    department: "MI",
    level: "Licence 2",
    group: "G15",
    section_speciality: "Section 4",
  },
  {
    firstName: "Sarah",
    lastName: "Bansalem",
    email: "Sarah.Bansalem@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Bansalem",
    city: "Jelji, belle ville",
    password: "Bansalem@500",
    inscription: "288NGA51608",
    department: "MI",
    level: "Licence 2",
    group: "G16",
    section_speciality: "Section 4",
  },

  //this is the begginning of licence 3

  {
    firstName: "MENAA",
    lastName: "TOUFIK",
    email: "menaa.toufik@univ-constantine2.dz",
    phone: "+213 798 961 871",
    address: "UV18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Menaa@500",
    inscription: "388NGA51078",
    department: "TLSI",
    level: "Licence 3",
    group: "G1",
    section_speciality: "Genie logiciel",
  },
  {
    firstName: "SALAH",
    lastName: "MEROUANI",
    email: "salaha.merouani@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "UV18 batiment mohammed",
    city: "Alger central, Algiers",
    password: "Salaha@500",
    inscription: "388NGA52078",
    department: "TLSI",
    level: "Licence 3",
    group: "G2",
    section_speciality: "Genie logiciel",
  },
  {
    firstName: "LINA",
    lastName: "MERRAD",
    email: "lina.merrad@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 4, university 2",
    city: "Constantine, nouvelle",
    password: "Lina@500",
    inscription: "388NGA53078",
    department: "TLSI",
    level: "Licence 3",
    group: "G3",
    section_speciality: "Genie logiciel",
  },
  {
    firstName: "ABADA ",
    lastName: "AYA",
    email: "AYA.ABADA@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite El-kroube",
    city: "Boumerdes, Boudouaua",
    password: "Abada@500",
    inscription: "388NGA54078",
    department: "TLSI",
    level: "Licence 3",
    group: "G4",
    section_speciality: "Genie logiciel",
  },
  {
    firstName: "MOHAMMED ELHADI",
    lastName: "SAOUDI",
    email: "saoudi.mohammed.elhadi@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment salimane",
    city: "Annaba, central ville",
    password: "Saoudi@500",
    inscription: "388NGA55078",
    department: "TLSI",
    level: "Licence 3",
    group: "G1",
    section_speciality: "Technology information",
  },
  {
    firstName: "TEYAR",
    lastName: "RAID NASRELLAH",
    email: "teyar.raid.nasrellah@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment saharawi",
    city: "Constantine, central ville",
    password: "Teyar@500",
    inscription: "388NGA56078",
    department: "TLSI",
    level: "Licence 3",
    group: "G2",
    section_speciality: "Technology information",
  },
  {
    firstName: "ALAMIN",
    lastName: "MUSA",
    email: "ALAMIN.MUSA@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "sans visa",
    city: "Constantine, nouvelle",
    password: "Musa@500",
    inscription: "388NGA57078",
    department: "TLSI",
    level: "Licence 3",
    group: "G3",
    section_speciality: "Technology information",
  },
  {
    firstName: "Moses",
    lastName: "Amadi",
    email: "moses.amadi60@univ-constantine2.dz",
    phone: "+213 798 961 871",
    address: "UV18 batiment salfa",
    city: "Constantine, nouvelle",
    password: "Moses@500",
    inscription: "388NGA58078",
    department: "MI",
    level: "Licence 3",
    group: "G4",
    section_speciality: "Technology information",
  },
  {
    firstName: "Alpha",
    lastName: "Wu-yep",
    email: "Alpha.wu-yep60@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Alpha@500",
    inscription: "388NGA59078",
    department: "IFA",
    level: "Licence 3",
    group: "G1",
    section_speciality: "SCI",
  },
  {
    firstName: "Pius",
    lastName: "Sunday",
    email: "Pius.Sunday@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "UV-18 batiment oscar",
    city: "Constantine, nouvelle",
    password: "Sunday@500",
    inscription: "388NGA51008",
    department: "IFA",
    level: "Licence 3",
    group: "G2",
    section_speciality: "SCI",
  },
  {
    firstName: "Boluwatife David",
    lastName: "Osuuu",
    email: "David.Osuuu@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "David@500",
    inscription: "388NGA51108",
    department: "IFA",
    level: "Licence 3",
    group: "G3",
    section_speciality: "SCI",
  },
  {
    firstName: "Stella",
    lastName: "Chima",
    email: "Stella.Chima@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "CUBE 3",
    city: "Algers, Bab zouarr",
    password: "Stella@500",
    inscription: "388NGA51208",
    department: "IFA",
    level: "Licence 3",
    group: "G4",
    section_speciality: "SCI",
  },
  {
    firstName: "Babs",
    lastName: "Ibrahim",
    email: "Babs.Ibrahim@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "cite 2, university 3",
    city: "Constantine, nouvelle",
    password: "Babs@500",
    inscription: "388NGA51308",
    department: "IFA",
    level: "Licence 3",
    group: "G1",
    section_speciality: "SI",
  },
  {
    firstName: "ICHRAK",
    lastName: "SAADALLAH",
    email: "SAADALLAH.ICHRAK@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment malak",
    city: "Jelji, belle ville",
    password: "Ichrak@500",
    inscription: "388NGA51408",
    department: "IFA",
    level: "Licence 3",
    group: "G2",
    section_speciality: "SI",
  },
  {
    firstName: "SARI",
    lastName: "SALSABILE",
    email: "SARI.SALSABILE@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Jacob",
    city: "Jelji, belle ville",
    password: "Sari@500",
    inscription: "388NGA51508",
    department: "IFA",
    level: "Licence 3",
    group: "G3",
    section_speciality: "SI",
  },
  {
    firstName: "ZOUIOUECHE",
    lastName: "OUMEIMA",
    email: "oumeima.zouioueche@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Bansalem",
    city: "Jelji, belle ville",
    password: "Bansalem@500",
    inscription: "388NGA51608",
    department: "IFA",
    level: "Licence 3",
    group: "G4",
    section_speciality: "SI",
  },
  {
    firstName: "ZOUIOUECHE",
    lastName: "OUMEIMA",
    email: "oumeima.zouioueche@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Bansalem",
    city: "Jelji, belle ville",
    password: "Bansalem@500",
    inscription: "M188NGA51608",
    department: "IFA",
    level: "Master 1",
    group: "G4",
    section_speciality: "SI",
  },
  {
    firstName: "ZOUIOUECHE",
    lastName: "OUMEIMA",
    email: "oumeima.zouioueche@univ-constantine2.dz",
    phone: "+213 503 961 871",
    address: "batiment Bansalem",
    city: "Jelji, belle ville",
    password: "Bansalem@500",
    inscription: "M288NGA51608",
    department: "IFA",
    level: "Master 2",
    group: "G4",
    section_speciality: "SI",
  },
];

module.exports = { students };
