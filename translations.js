// =============================================================
//  translations.js — Prince Osei Boateng Portfolio i18n
//  Usage: include this file BEFORE the language-switch script
// =============================================================

const translations = {

  // ── Intro / Hero ──────────────────────────────────────────
  en: {
    intro_name:       "Prince Osei Boateng Portfolio",
    intro_tagline:    "Geoinformatics & Remote Sensing Specialist | Spatial Data Enthusiast | Driving Sustainable, Data-Driven Solutions | Emergy Enthusiast",

    // Nav
    nav_portfolio:    "Prince Portfolio",
    nav_profile:      "Profile",
    nav_elements:     "Elements Reference",
    header_logo:      "Projects",

    // ── Featured Project 1 — AGB ────────────────────────────
    featured1_date:   "February 27, 2026, 10:19 AM CEST",
    featured1_title:  "Spatio-Temporal Above-Ground Biomass Modelling & Forest Disturbances",
    featured1_desc:   "This project models and visualises Above-Ground Biomass (AGB) patterns and disturbance-driven biomass change across North Rhine–Westphalia (NRW) for 2019-2022.\nAGB was predicted at 100 m resolution by fusing SAR, Sentinel-2 optical indices, GLCM textures, GEDI LIDAR, and environmental covariates. Disturbance severities were derived from annual change metrics using calibrated thresholds.",
    featured1_btn:    "View Project",

    // ── Featured Project 2 — QGIS Plugin ────────────────────
    featured2_date:   "February 15, 2026, 10:19 AM CEST",
    featured2_title:  "QGIS Plugin for Black Frame Removal in Georeferenced Imagery",
    featured2_desc:   "A QGIS plugin that automatically removes black/nodata borders from georeferenced rasters using footprint detection and edge-safe morphology better than the standard Nodata transparency workflows.",
    featured2_btn:    "View Project",

    // ── Featured Project 3 — EV Dashboard ───────────────────
    featured3_date:   "October 20, 2025, 10:19 AM CEST",
    featured3_title:  "EV Charging Stations Activity Dashboard\nUsing Hamburg SensorThingsAPI",
    featured3_desc:   "The EV Charging Stations Activity Dashboard is a real-time, data-driven web application that visualizes the spatial and temporal dynamics of electric vehicle (EV) charging stations across Hamburg, Germany.\nIt integrates open IoT data from the Hamburg SensorThings API with automated data ingestion, cloud database synchronization, and interactive analytics built in Streamlit.",
    featured3_btn:    "View Project",

    // ── Grid Project — Concrete ─────────────────────────────
    grid1_date:       "August 10, 2025",
    grid1_title:      "Concrete Crack Detection Using TensorFlow/Keras API and Streamlit",
    grid1_desc:       "This interactive web application enables users to upload images of concrete surfaces and instantly receive AI-powered crack detection with clear visualizations through a user-friendly Streamlit interface. Users can download the processed images with cracks highlighted, along with a detailed report that includes the number of pixels covered and the estimated total crack surface area. The app leverages a deep learning model trained on a balanced dataset to accurately identify and highlight cracks in concrete surfaces.",
    grid1_btn:        "View Project",

    // ── Grid Project — Urban CO ─────────────────────────────
    grid2_date:       "July 31, 2025",
    grid2_title:      "Urban Carbon Monoxide (CO) Monitoring and Nighttime Light Energy Analysis",
    grid2_desc:       "This project utilizes Sentinel-5P (for carbon monoxide, CO, concentration) and VIIRS (for nighttime lights as an energy proxy) to monitor urban air quality and urbanization patterns across all states of Germany between 2019 and 2023. This work leverages advanced satellite data to explore air pollution and energy consumption patterns, offering insights into urban environmental health and human activity.",
    grid2_btn:        "View Project",

    // ── Grid Project — Building Segmentation ────────────────
    grid3_date:       "July 1, 2025",
    grid3_title:      "Buildings Segmentation with Deep Learning in QGIS utilizing Deepness Plugin",
    grid3_desc:       "This project utilized the Deepness Plugin in QGIS to perform building segmentation using a pretrained model from the ramp Building Footprint Dataset, tested on Feuersee and Konradin-Kreutzer Weg at 40cm and 50cm resolutions.",
    grid3_btn:        "View Project",

    // ── Grid Project — Urban Footprint ──────────────────────
    grid4_date:       "June 30, 2025, 10:19 AM CEST",
    grid4_title:      "Urban Footprint Analysis\nof Beitigheim-Bissingen",
    grid4_desc:       "This is a spatial analysis project mapping the urban footprint of the Beitigheim-Bissingen municipality (Baden-Württemberg, Germany) using QGIS and ESRI Land Cover data. The primary objective was to assess patterns of urbanization within a 10 km buffer zone\nThis offers insights into built-up intensity and suburban expansion around the municipality.",
    grid4_btn:        "View Project",

    // ── Grid Project — Flood Simulation ─────────────────────
    grid5_date:       "June 15, 2025",
    grid5_title:      "Mannheim City Center 3D Flood Risk Simulation Using QGIS",
    grid5_desc:       "This project models a 3D flood scenario in Mannheim's city center using QGIS. Digital elevation models (DEM), building footprints, and OpenStreetMap data were used to simulate inundation and visualize flood-prone areas under low elevation flood conditions.",
    grid5_btn:        "View Project",

    // ── Grid Project — Chlorophyll ──────────────────────────
    grid6_date:       "May 30, 2025",
    grid6_title:      "Chlorophyll Estimation App for Selected Lakes in Baden-Württemberg",
    grid6_desc:       "This is an interactive Google Earth Engine (GEE) application designed to estimate and visualize chlorophyll levels in five key lakes of Baden-Württemberg; Titisee, Bodensee, Illmensee, Federsee, and Schluchsee. This interactive tool leverages Sentinel-2 satellite data to compute the Normalized Difference Chlorophyll Index (NDCI) from 2018 to 2024.",
    grid6_btn:        "View Project",

    // ── Grid Project — Cesium / AR ──────────────────────────
    grid7_date:       "February 24, 2025",
    grid7_title:      "Cesium 3D Energy Dashboard and Web AR Scene",
    grid7_desc:       "A collaborative project creating a 3D energy dashboard for Stöckach using Cesium and a Web AR scene with Three.js, featuring interactive visualizations and AR object placement.",
    grid7_btn:        "View Project",

    // ── Grid Project — IKEA ─────────────────────────────────
    grid8_date:       "December 19, 2024",
    grid8_title:      "Geomarketing for IKEA Store Site Selection",
    grid8_desc:       "A spatial decision-making project applying geomarketing and GIS techniques to identify optimal sites for new IKEA stores in Germany. Highlights include purchasing power analysis, Euclidean distance modeling, and location-allocation for two suitable cities: Trier and Ingolstadt.",
    grid8_btn:        "View Project",

    // ── Footer / Contact ────────────────────────────────────
    footer_name_label:    "Name",
    footer_email_label:   "Email",
    footer_message_label: "Message",
    footer_send_btn:      "Send Message",
    footer_address_title: "Address",
    footer_phone_title:   "Phone",
    footer_email_title:   "Email",
    footer_social_title:  "Social",

    // Pagination
    pagination_next: "Next",
  },


  // ═══════════════════════════════════════════════════════════
  //  GERMAN
  // ═══════════════════════════════════════════════════════════
  de: {
    intro_name:       "Prince Osei Boateng Portfolio",
    intro_tagline:    "Geoinformatik & Fernerkundungsspezialist | Geodaten-Enthusiast | Nachhaltige, datengetriebene Lösungen | Emergie-Enthusiast",

    // Nav
    nav_portfolio:    "Prince Portfolio",
    nav_profile:      "Profil",
    nav_elements:     "Elementreferenz",
    header_logo:      "Projekte",

    // ── Featured Project 1 — AGB ────────────────────────────
    featured1_date:   "27. Februar 2026, 10:19 Uhr MEZ",
    featured1_title:  "Raum-zeitliche Modellierung oberirdischer Biomasse & Waldstörungen",
    featured1_desc:   "Dieses Projekt modelliert und visualisiert Muster oberirdischer Biomasse (AGB) sowie störungsbedingte Biomasseveränderungen in Nordrhein-Westfalen (NRW) für 2019–2022.\nDie AGB wurde mit 100 m Auflösung durch Fusion von SAR, optischen Sentinel-2-Indizes, GLCM-Texturen, GEDI-LIDAR und Umweltkovariablen vorhergesagt. Störungsschweregrade wurden aus jährlichen Veränderungsmetriken mit kalibrierten Schwellenwerten abgeleitet.",
    featured1_btn:    "Projekt ansehen",

    // ── Featured Project 2 — QGIS Plugin ────────────────────
    featured2_date:   "15. Februar 2026, 10:19 Uhr MEZ",
    featured2_title:  "QGIS-Plugin zur Entfernung schwarzer Ränder in georeferenzierten Bildern",
    featured2_desc:   "Ein QGIS-Plugin, das schwarze/Nodata-Ränder von georeferenzierten Rasterdaten automatisch durch Footprint-Erkennung und kantensichere Morphologie entfernt — leistungsfähiger als herkömmliche Nodata-Transparenz-Workflows.",
    featured2_btn:    "Projekt ansehen",

    // ── Featured Project 3 — EV Dashboard ───────────────────
    featured3_date:   "20. Oktober 2025, 10:19 Uhr MEZ",
    featured3_title:  "Dashboard zur Aktivität von E-Ladestationen\nmit der Hamburg SensorThingsAPI",
    featured3_desc:   "Das E-Ladestationen-Dashboard ist eine datengetriebene Echtzeit-Webanwendung, die die räumlichen und zeitlichen Dynamiken von Elektrofahrzeug-Ladestationen in Hamburg visualisiert.\nEs integriert offene IoT-Daten der Hamburg SensorThings API mit automatisierter Datenaufnahme, Cloud-Datenbanksynchronisation und interaktiver Analytik in Streamlit.",
    featured3_btn:    "Projekt ansehen",

    // ── Grid Project — Concrete ─────────────────────────────
    grid1_date:       "10. August 2025",
    grid1_title:      "Betonriss-Erkennung mit TensorFlow/Keras und Streamlit",
    grid1_desc:       "Diese interaktive Webanwendung ermöglicht es Nutzern, Bilder von Betonoberflächen hochzuladen und sofort eine KI-gestützte Risserkennung mit übersichtlicher Visualisierung über eine benutzerfreundliche Streamlit-Oberfläche zu erhalten. Nutzer können die verarbeiteten Bilder mit hervorgehobenen Rissen herunterladen sowie einen detaillierten Bericht mit Pixelanzahl und geschätzter Gesamtrissflächeninformation. Die App nutzt ein auf einem ausgewogenen Datensatz trainiertes Deep-Learning-Modell zur präzisen Erkennung und Markierung von Rissen in Betonoberflächen.",
    grid1_btn:        "Projekt ansehen",

    // ── Grid Project — Urban CO ─────────────────────────────
    grid2_date:       "31. Juli 2025",
    grid2_title:      "Überwachung von urbanem Kohlenmonoxid (CO) und Analyse nächtlicher Lichtenergie",
    grid2_desc:       "Dieses Projekt nutzt Sentinel-5P (für Kohlenmonoxid-Konzentrationen) und VIIRS (für Nachtlichter als Energieindikator) zur Überwachung der städtischen Luftqualität und Urbanisierungsmuster in allen Bundesländern Deutschlands zwischen 2019 und 2023. Die Arbeit nutzt fortschrittliche Satellitendaten zur Untersuchung von Luftverschmutzungs- und Energieverbrauchsmustern und bietet Einblicke in die urbane Umweltgesundheit und menschliche Aktivität.",
    grid2_btn:        "Projekt ansehen",

    // ── Grid Project — Building Segmentation ────────────────
    grid3_date:       "1. Juli 2025",
    grid3_title:      "Gebäudesegmentierung mit Deep Learning in QGIS unter Nutzung des Deepness-Plugins",
    grid3_desc:       "Dieses Projekt nutzte das Deepness-Plugin in QGIS zur Gebäudesegmentierung mit einem vortrainierten Modell des ramp Building Footprint Dataset, getestet am Feuersee und Konradin-Kreutzer-Weg bei 40 cm und 50 cm Auflösung.",
    grid3_btn:        "Projekt ansehen",

    // ── Grid Project — Urban Footprint ──────────────────────
    grid4_date:       "30. Juni 2025, 10:19 Uhr MEZ",
    grid4_title:      "Analyse des urbanen Fußabdrucks\nvon Bietigheim-Bissingen",
    grid4_desc:       "Dies ist ein räumliches Analyseprojekt zur Kartierung des urbanen Fußabdrucks der Gemeinde Bietigheim-Bissingen (Baden-Württemberg) mittels QGIS und ESRI Land Cover-Daten. Hauptziel war die Bewertung von Urbanisierungsmustern innerhalb einer 10-km-Pufferzone.\nDas Projekt bietet Einblicke in die Bebauungsintensität und vorstädtische Expansion rund um die Gemeinde.",
    grid4_btn:        "Projekt ansehen",

    // ── Grid Project — Flood Simulation ─────────────────────
    grid5_date:       "15. Juni 2025",
    grid5_title:      "3D-Hochwasserrisikosimulation der Mannheimer Innenstadt mit QGIS",
    grid5_desc:       "Dieses Projekt modelliert ein 3D-Hochwasserszenario in der Mannheimer Innenstadt mit QGIS. Digitale Geländemodelle (DGM), Gebäudegrundrisse und OpenStreetMap-Daten wurden zur Simulation von Überflutungen und Visualisierung hochwassergefährdeter Bereiche bei niedrigen Geländehöhen verwendet.",
    grid5_btn:        "Projekt ansehen",

    // ── Grid Project — Chlorophyll ──────────────────────────
    grid6_date:       "30. Mai 2025",
    grid6_title:      "Chlorophyll-Schätzungsapp für ausgewählte Seen in Baden-Württemberg",
    grid6_desc:       "Dies ist eine interaktive Google Earth Engine (GEE)-Anwendung zur Schätzung und Visualisierung von Chlorophyllgehalten in fünf Schlüsselseen Baden-Württembergs: Titisee, Bodensee, Illmensee, Federsee und Schluchsee. Das interaktive Tool nutzt Sentinel-2-Satellitendaten zur Berechnung des Normalized Difference Chlorophyll Index (NDCI) von 2018 bis 2024.",
    grid6_btn:        "Projekt ansehen",

    // ── Grid Project — Cesium / AR ──────────────────────────
    grid7_date:       "24. Februar 2025",
    grid7_title:      "Cesium 3D-Energie-Dashboard und Web-AR-Szene",
    grid7_desc:       "Ein kollaboratives Projekt zur Erstellung eines 3D-Energie-Dashboards für Stöckach mit Cesium und einer Web-AR-Szene mit Three.js, mit interaktiven Visualisierungen und AR-Objektplatzierung.",
    grid7_btn:        "Projekt ansehen",

    // ── Grid Project — IKEA ─────────────────────────────────
    grid8_date:       "19. Dezember 2024",
    grid8_title:      "Geomarketing zur Standortwahl von IKEA-Filialen",
    grid8_desc:       "Ein räumliches Entscheidungsprojekt unter Anwendung von Geomarketing- und GIS-Techniken zur Identifizierung optimaler Standorte für neue IKEA-Filialen in Deutschland. Highlights sind Kaufkraftanalyse, euklidische Distanzmodellierung und Standort-Allokation für zwei geeignete Städte: Trier und Ingolstadt.",
    grid8_btn:        "Projekt ansehen",

    // ── Footer / Contact ────────────────────────────────────
    footer_name_label:    "Name",
    footer_email_label:   "E-Mail",
    footer_message_label: "Nachricht",
    footer_send_btn:      "Nachricht senden",
    footer_address_title: "Adresse",
    footer_phone_title:   "Telefon",
    footer_email_title:   "E-Mail",
    footer_social_title:  "Soziale Medien",

    // Pagination
    pagination_next: "Weiter",
  }
};
