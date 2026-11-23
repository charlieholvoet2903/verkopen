// ============================================================
//  INSTELLINGEN VAN DE APP – alleen dit bestand aanpassen
// ============================================================
window.APP_CONFIG = {
  // Application (client) ID uit Microsoft Entra (stap 3 van het stappenplan)
  clientId: "",

  // "common" = persoonlijk én zakelijk Microsoft-account
  tenant: "common",

  // Actuele Excel (nieuwe software, vanaf september 2026).
  // Pad in je OneDrive, bv. "Verkopen/verkopen_actueel.xlsx"
  // of een volledige OneDrive-deellink (https://...)
  currentFile: "",

  // Historiek-Excel (oude software, t.e.m. augustus 2026).
  // Wordt maar 1 keer per toestel gedownload en daarna bewaard.
  historyFile: "",

  // Eerste maand van de nieuwe software (jjjj-mm)
  cutover: "2026-09",

  // Hoe vaak de app maximaal in OneDrive kijkt naar nieuwe data (uren)
  refreshHours: 24
};
