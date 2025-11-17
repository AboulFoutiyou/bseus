import { Injectable } from '@angular/core';

export interface Campaign {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  image: string;
  organizer: string;
  description: string;
  eligibility: string[];
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private campaigns: Campaign[] = [
    {
      id: 1,
      title: "Campagne de don de sang",
      date: "12 Octobre 2024",
      startTime: "09h00",
      endTime: "17h00",
      location: "Hôpital Principal de Dakar",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeSSqDA4pv6lRxLLX2PajIKsCQUF9mGsKup2gBDsraXaspPGeSnV70wIDvAt0u6fvqdHvhCGpdECpNwbCnm_LtRwmFsP1SXItjw1UpE9b9N6iHGk6A9nxw2vSqQ3NKeTzK7I5b48npAhgDJs8aVboEzq8KnmgJtxRZmnf7dZ10xErCefbPRmNpYz5jZc-6Yuij_Gp3r0zVEX26dsPRuInh-vVaLsP4Z2gP7YK27yBB0MbLWmk9x4m_A-HBKK-ym82Ar6VnSkQoiBs",
      organizer: "Croix-Rouge Sénégalaise",
      description: "Rejoignez-nous pour notre collecte de sang annuelle à l'hôpital. Votre don peut sauver des vies.",
      eligibility: [
        "Âge : 18-65 ans",
        "Poids : Plus de 50 kg",
        "Bonne santé générale"
      ]
    },
    {
      id: 2,
      title: "Collecte de sang",
      date: "15 Octobre 2024",
      startTime: "08h30",
      endTime: "16h00",
      location: "Place de l'Obélisque",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQnPOv9WnMECzgnXtOs1-Lojn5r75AyCxFz8wssPxSF_tqBvRD7p7AwM9Jhvure3wQSRcp4nnNVZIiOLgLsyN-M5HZ7N1IAGAVscRAe_l3DCBSXIGdNkSfPp_fuJEndH_KQj8NS7_g2qB2JZFAGMFTIX-gDgJ19N13e88bKwbMqGsFQ5oKjpriL8kTLUxWBt3-RadNwMpwRjs1zUKioRYS2XoJD_UKc4ljTUtK_u3fCwDU07k93WLBafeXfyfZ3ioEOco5FqE7_Sg",
      organizer: "Association Étudiante Médecine",
      description: "Une journée spéciale pour encourager le don de sang au sein de la communauté estudiantine.",
      eligibility: [
        "Âge : 18-65 ans",
        "Ne pas être à jeun",
        "Ne pas avoir donné du sang récemment"
      ]
    },
    {
      id: 3,
      title: "Don de sang",
      date: "20 Octobre 2024",
      startTime: "10h00",
      endTime: "15h00",
      location: "Centre de santé de Yoff",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXHVv-zanqoy0I0Ng9ixTs6QBKQAWEY-XOkdQ5iVN4yM8E7XPGqJEGEGdD2PN9_exvKmkhQF9G7cO9knbEmswpDN5J-QHrIRLZ9IT6em48LsnyI_9B1etneSRiWczb2d4C4wJZkDcOzPcZ5PNpRmK_i_c2NTMgCCTDpErBqeDzE_hWd5nLjtB6RuT2PgYyTK65i9QRz7hZitmGDMJaacIPSwjpwvwKa6phZQlF28L9iv_XubkDHibP4DYsPGD0VJVc6SCO3MY7gfM",
      organizer: "Banque de Sang Nationale",
      description: "Une collecte ouverte à tous dans la zone littorale pour aider à sauver des vies.",
      eligibility: [
        "Âge : 18-60 ans",
        "Poids supérieur à 50 kg",
        "État de santé stable"
      ]
    },
    {
      id: 4,
      title: "Campagne de don de sang",
      date: "25 Octobre 2024",
      startTime: "09h00",
      endTime: "18h00",
      location: "Université Cheikh Anta Diop",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-8BWIklzHu7OfDDUJYuQyj_mvWfzuHJ3Ag6ccMcpmlGm-PzC8rfKpcA7ZdUglzhyA5MdqPqQenYZcLb8a1xXQNrpEvZMkngY0P8wMWTk4_kZkGh5rV2RsNJefRb9aWKUw5QLM-l6MrQrMD3IP4edbokOs6adLXy8yWrnfNXntI9HUK1Fi54ILdhECG8g7UH9-_zWq8ERJ_gbxM7RD4XL674_E_aZH8GRslxib7oPKKdhlL45gILAOb3kNK5BeLuscwBUSn9ULDjw",
      organizer: 'Club Santé Ucad',
      description: "Étudiants et personnel universitaire, venez nombreux pour cette campagne de don de sang.",
      eligibility: [
        "Âge : 18-30 ans",
        "Inscription universitaire requise",
        "Bonne condition physique"
      ]
    },
    {
      id: 5,
      title: "Collecte de sang",
      date: "30 Octobre 2024",
      startTime: "11h00",
      endTime: "16h00",
      location: "Centre commercial Sea Plaza",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa...",
      organizer: "ONG Santé pour Tous",
      description: "Participez à notre collecte de sang au centre commercial et contribuez à une noble cause.",
      eligibility: [
        "Âge : 18-65 ans",
        "Poids minimum de 50 kg",
        "Pas de maladies transmissibles"
      ]
    }
  ];

  constructor() {}

  /** Retourne tous les événements */
  getAll(): Campaign[] {
    return this.campaigns;
  }

  /** Retourne 1 événement par ID */
  getById(id: number): Campaign | undefined {
    return this.campaigns.find(c => c.id === id);
  }
}
