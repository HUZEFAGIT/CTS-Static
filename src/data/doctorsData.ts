// export default [
//     {id: 1, url: "/assets/images/doctors/doctor-1.jpg"},
//     {id: 2, url: "/assets/images/doctors/doctor-2.jpg"},
//     {id: 3, url: "/assets/images/doctors/doctor-3.jpg"},
//     {id: 4, url: "/assets/images/doctors/doctor-4.jpg"},
//     {id: 5, url: "/assets/images/doctors/doctor-5.jpg"},
//     {id: 6, url: "/assets/images/doctors/doctor-6.jpg"},
//     {id: 7, url: "/assets/images/doctors/doctor-7.jpg"},
//     {id: 8, url: "/assets/images/doctors/doctor-8.jpg"},
//     {id: 9, url: "/assets/images/doctors/doctor-9.jpg"},
//     {id: 10, url: "/assets/images/doctors/doctor-10.jpg"},
// ]
// Interface defining the structure of a Doctor object
interface Doctor {
  id: number;
  url: string;
  name: string;
  qualifications: string;
  specialty: string;
  experience: string;
  certifications: string;
  patients: string;
  biography: string;
  approach: string;
  credentials: string;
  specialties: string[];
}

// Enhanced doctorsData with diverse medical professionals
const doctorsData: Doctor[] = [
  {
    id: 1,
    url: "/assets/images/doctors/doctor-1.jpg",
    name: "Sarah Chen",
    qualifications: "MD, FACC (Cardiology)",
    specialty: "Specializing in interventional cardiology and heart disease prevention",
    experience: "15+ years",
    certifications: "12+",
    patients: "18,000+",
    biography: "Dr. Sarah Chen is a board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions. After completing her medical degree at Stanford University, she pursued specialized training in interventional cardiology at Mayo Clinic. Dr. Chen is renowned for her expertise in minimally invasive cardiac procedures, including angioplasty, stent placement, and advanced heart failure management.",
    approach: "Dr. Chen's patient-centered approach focuses on preventive cardiology and lifestyle modification. She believes in empowering patients through education and works collaboratively to develop comprehensive treatment plans that address both immediate cardiac concerns and long-term heart health. Her practice incorporates cutting-edge technology with compassionate care.",
    credentials: "Board-certified by the American Board of Internal Medicine in Cardiovascular Disease, Dr. Chen holds fellowships from the American College of Cardiology and the Society for Cardiovascular Angiography and Interventions. Patients trust CaretoSure and Dr. Chen for her expertise in complex cardiac interventions and commitment to advancing heart health through innovative treatments.",
    specialties: [
      "Interventional Cardiology",
      "Coronary Artery Disease",
      "Heart Failure Management",
      "Cardiac Catheterization",
      "Preventive Cardiology"
    ]
  },
  {
    id: 2,
    url: "/assets/images/doctors/doctor-2.jpg",
    name: "Michael Rodriguez",
    qualifications: "MD, MS (Orthopedic Surgery)",
    specialty: "Specializing in sports medicine and joint replacement surgery",
    experience: "18+ years",
    certifications: "14+",
    patients: "22,000+",
    biography: "Dr. Michael Rodriguez is a leading orthopedic surgeon with 18 years of experience in sports medicine and joint reconstruction. A former collegiate athlete himself, Dr. Rodriguez understands the physical and emotional impact of musculoskeletal injuries. He completed his orthopedic surgery residency at Johns Hopkins and fellowship training in sports medicine at the renowned Kerlan-Jobe Institute.",
    approach: "Dr. Rodriguez combines state-of-the-art surgical techniques with comprehensive rehabilitation programs to help patients return to their active lifestyles. He specializes in minimally invasive procedures and is a pioneer in robotic-assisted joint replacement surgery. His treatment philosophy emphasizes getting patients back to doing what they love while preventing future injuries.",
    credentials: "Board-certified by the American Board of Orthopedic Surgery, Dr. Rodriguez is a fellow of the American Academy of Orthopedic Surgeons and serves as team physician for several professional sports organizations. CaretoSure patients benefit from his extensive experience in complex reconstructive surgery and cutting-edge treatment modalities.",
    specialties: [
      "Sports Medicine",
      "Joint Replacement Surgery",
      "Arthroscopic Surgery",
      "Fracture Care",
      "Robotic-Assisted Surgery"
    ]
  },
  {
    id: 3,
    url: "/assets/images/doctors/doctor-3.jpg",
    name: "Emily Watson",
    qualifications: "MD, PhD (Dermatology)",
    specialty: "Specializing in medical dermatology and skin cancer treatment",
    experience: "12+ years",
    certifications: "16+",
    patients: "15,000+",
    biography: "Dr. Emily Watson is a double board-certified dermatologist and dermatopathologist with 12 years of specialized experience in medical dermatology and skin cancer treatment. She earned her medical degree and PhD in Immunology from Harvard University, followed by dermatology residency at Massachusetts General Hospital and fellowship training in Mohs surgery at the University of Michigan.",
    approach: "Dr. Watson's practice focuses on comprehensive skin health, from routine skin cancer screenings to complex medical dermatology conditions. She is particularly passionate about patient education and early detection of skin cancers. Her research background in immunology allows her to offer cutting-edge treatments for psoriasis, eczema, and other inflammatory skin conditions.",
    credentials: "Board-certified in both Dermatology and Dermatopathology, Dr. Watson is a fellow of the American Academy of Dermatology and the American Society for Mohs Surgery. Her patients at CaretoSure benefit from her expertise in both medical and surgical dermatology, ensuring comprehensive care for all skin-related concerns.",
    specialties: [
      "Mohs Surgery",
      "Skin Cancer Treatment",
      "Medical Dermatology",
      "Psoriasis Treatment",
      "Dermatopathology"
    ]
  },
  {
    id: 4,
    url: "/assets/images/doctors/doctor-4.jpg",
    name: "David Park",
    qualifications: "MD, FACS (General Surgery)",
    specialty: "Specializing in minimally invasive and robotic surgery",
    experience: "20+ years",
    certifications: "18+",
    patients: "25,000+",
    biography: "Dr. David Park is a highly accomplished general surgeon with over 20 years of experience in minimally invasive and robotic surgical procedures. He completed his medical training at UCLA and surgical residency at Cedars-Sinai Medical Center. Dr. Park was among the early adopters of robotic surgery technology and has performed thousands of minimally invasive procedures.",
    approach: "Dr. Park's surgical philosophy centers on achieving optimal outcomes with minimal trauma to the patient. He specializes in laparoscopic and robotic techniques for gallbladder, hernia, and colorectal surgeries. His meticulous attention to detail and commitment to staying current with surgical innovations has earned him recognition as a leader in minimally invasive surgery.",
    credentials: "Board-certified by the American Board of Surgery and a Fellow of the American College of Surgeons, Dr. Park has received numerous awards for surgical excellence. He serves as a proctor for robotic surgery training and has published extensively on minimally invasive surgical techniques. CaretoSure patients benefit from his exceptional surgical skills and commitment to rapid recovery protocols.",
    specialties: [
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Hernia Repair",
      "Gallbladder Surgery",
      "Colorectal Surgery"
    ]
  },
  {
    id: 5,
    url: "/assets/images/doctors/doctor-5.jpg",
    name: "Lisa Thompson",
    qualifications: "MD, MPH (Pediatrics)",
    specialty: "Specializing in developmental pediatrics and adolescent medicine",
    experience: "14+ years",
    certifications: "13+",
    patients: "12,000+",
    biography: "Dr. Lisa Thompson is a dedicated pediatrician with 14 years of experience in child and adolescent healthcare. She earned her medical degree from Northwestern University and completed her pediatric residency at Children's Hospital of Philadelphia. Dr. Thompson also holds a Master's in Public Health, reflecting her commitment to community health and preventive care.",
    approach: "Dr. Thompson believes in building strong relationships with both children and their families to provide comprehensive, family-centered care. She specializes in developmental assessment, behavioral health integration, and adolescent medicine. Her warm, patient demeanor helps create a comfortable environment for children of all ages during medical visits.",
    credentials: "Board-certified by the American Board of Pediatrics, Dr. Thompson is a fellow of the American Academy of Pediatrics and actively involved in pediatric advocacy. She has developed several community health programs focused on childhood obesity prevention and mental health awareness. Families trust CaretoSure and Dr. Thompson for compassionate, comprehensive pediatric care.",
    specialties: [
      "Developmental Pediatrics",
      "Adolescent Medicine",
      "Preventive Care",
      "Behavioral Health",
      "Childhood Nutrition"
    ]
  },
  {
    id: 6,
    url: "/assets/images/doctors/doctor-6.jpg",
    name: "Robert Kumar",
    qualifications: "MD, FACOG (Obstetrics & Gynecology)",
    specialty: "Specializing in high-risk pregnancies and minimally invasive gynecologic surgery",
    experience: "16+ years",
    certifications: "15+",
    patients: "14,000+",
    biography: "Dr. Robert Kumar is a board-certified obstetrician-gynecologist with 16 years of experience in women's health, including high-risk obstetrics and advanced gynecologic surgery. He completed his medical education at Washington University and residency at Barnes-Jewish Hospital. Dr. Kumar has additional fellowship training in maternal-fetal medicine.",
    approach: "Dr. Kumar provides comprehensive women's healthcare throughout all stages of life, from adolescence through menopause. He is particularly skilled in managing complex pregnancies and performs advanced laparoscopic and robotic gynecologic procedures. His compassionate approach helps women feel comfortable discussing sensitive health concerns.",
    credentials: "Board-certified by the American Board of Obstetrics and Gynecology and a Fellow of the American College of Obstetricians and Gynecologists, Dr. Kumar has received recognition for his expertise in high-risk obstetrics. CaretoSure patients benefit from his comprehensive approach to women's health and his commitment to the latest advances in obstetric and gynecologic care.",
    specialties: [
      "High-Risk Obstetrics",
      "Minimally Invasive Surgery",
      "Reproductive Health",
      "Menopause Management",
      "Gynecologic Oncology"
    ]
  },
  {
    id: 7,
    url: "/assets/images/doctors/doctor-7.jpg",
    name: "Ahmed Hassan",
    qualifications: "MD, FAAN (Neurology)",
    specialty: "Specializing in epilepsy treatment and neurological disorders",
    experience: "13+ years",
    certifications: "11+",
    patients: "9,500+",
    biography: "Dr. Ahmed Hassan is a board-certified neurologist with 13 years of specialized experience in treating epilepsy and complex neurological disorders. He completed his medical degree at Cairo University and neurology residency at Cleveland Clinic, followed by fellowship training in epilepsy at Johns Hopkins. Dr. Hassan is fluent in Arabic, English, and French, allowing him to serve diverse patient populations.",
    approach: "Dr. Hassan takes a multidisciplinary approach to neurological care, working closely with neurosurgeons, neuropsychologists, and rehabilitation specialists. He specializes in advanced EEG monitoring, seizure management, and uses cutting-edge techniques including deep brain stimulation for movement disorders. His patient-centered care emphasizes quality of life improvement.",
    credentials: "Board-certified by the American Board of Psychiatry and Neurology, Dr. Hassan is a Fellow of the American Academy of Neurology and member of the American Epilepsy Society. He has published numerous research papers on epilepsy treatment and participates in clinical trials for innovative neurological therapies. CaretoSure patients benefit from his expertise in complex neurological conditions.",
    specialties: [
      "Epilepsy Treatment",
      "EEG Monitoring",
      "Movement Disorders",
      "Headache Management",
      "Neurological Rehabilitation"
    ]
  },
  {
    id: 8,
    url: "/assets/images/doctors/doctor-8.jpg",
    name: "Jennifer Martinez",
    qualifications: "MD, FACEP (Emergency Medicine)",
    specialty: "Specializing in emergency medicine and critical care",
    experience: "11+ years",
    certifications: "9+",
    patients: "30,000+",
    biography: "Dr. Jennifer Martinez is a board-certified emergency medicine physician with 11 years of experience in high-acuity emergency care and trauma management. She completed her medical education at University of Texas Southwestern and emergency medicine residency at Parkland Hospital. Dr. Martinez has additional training in toxicology and wilderness medicine.",
    approach: "Dr. Martinez thrives in high-pressure situations and is skilled in rapid diagnosis and treatment of life-threatening conditions. She has expertise in advanced cardiac life support, trauma resuscitation, and emergency procedures. Her calm demeanor and clear communication help patients and families navigate medical emergencies with confidence.",
    credentials: "Board-certified by the American Board of Emergency Medicine, Dr. Martinez is a Fellow of the American College of Emergency Physicians and holds certifications in Advanced Trauma Life Support and Pediatric Advanced Life Support. She serves as medical director for several emergency departments and trains emergency medicine residents. CaretoSure's emergency services benefit from her extensive experience in critical care medicine.",
    specialties: [
      "Emergency Medicine",
      "Trauma Care",
      "Critical Care",
      "Toxicology",
      "Emergency Procedures"
    ]
  },
  {
    id: 9,
    url: "/assets/images/doctors/doctor-9.jpg",
    name: "James Wilson",
    qualifications: "MD, FACP (Internal Medicine)",
    specialty: "Specializing in diabetes management and internal medicine",
    experience: "22+ years",
    certifications: "17+",
    patients: "28,000+",
    biography: "Dr. James Wilson is a seasoned internal medicine physician with 22 years of experience in primary care and diabetes management. He earned his medical degree from Duke University and completed his internal medicine residency at Massachusetts General Hospital. Dr. Wilson has dedicated much of his career to helping patients manage chronic conditions, particularly diabetes and metabolic disorders.",
    approach: "Dr. Wilson believes in building long-term relationships with his patients to provide continuity of care throughout their health journey. He specializes in comprehensive diabetes management, including insulin therapy, continuous glucose monitoring, and lifestyle counseling. His holistic approach addresses not just medical conditions but also the social and emotional aspects of chronic disease management.",
    credentials: "Board-certified by the American Board of Internal Medicine, Dr. Wilson is a Fellow of the American College of Physicians and certified diabetes educator. He has developed innovative diabetes care protocols and serves on the medical advisory board for several diabetes organizations. CaretoSure patients trust Dr. Wilson for his expertise in managing complex medical conditions and his commitment to preventive care.",
    specialties: [
      "Diabetes Management",
      "Internal Medicine",
      "Preventive Care",
      "Hypertension Treatment",
      "Chronic Disease Management"
    ]
  },
  {
    id: 10,
    url: "/assets/images/doctors/doctor-10.jpg",
    name: "Rachel Kim",
    qualifications: "MD, PhD (Psychiatry)",
    specialty: "Specializing in adult psychiatry and anxiety disorders",
    experience: "9+ years",
    certifications: "8+",
    patients: "6,500+",
    biography: "Dr. Rachel Kim is a board-certified psychiatrist with 9 years of experience in treating adult mental health conditions. She holds both an MD and PhD in Neuroscience from Yale University and completed her psychiatry residency at McLean Hospital. Dr. Kim's research background in neuroscience provides her with unique insights into the biological basis of mental health disorders.",
    approach: "Dr. Kim integrates evidence-based psychotherapy with appropriate medication management to provide comprehensive mental health care. She specializes in treating anxiety disorders, depression, and PTSD using both traditional and innovative approaches, including mindfulness-based interventions. Her warm, non-judgmental approach creates a safe space for patients to explore their mental health challenges.",
    credentials: "Board-certified by the American Board of Psychiatry and Neurology, Dr. Kim is a member of the American Psychiatric Association and the Anxiety and Depression Association of America. She has published research on anxiety disorders and speaks at national conferences on mental health topics. CaretoSure patients benefit from her dual expertise in clinical care and neuroscience research.",
    specialties: [
      "Adult Psychiatry",
      "Anxiety Disorders",
      "Depression Treatment",
      "PTSD Therapy",
      "Mindfulness-Based Interventions"
    ]
  }
];

export default doctorsData;
