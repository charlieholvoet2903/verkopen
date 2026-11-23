// ============================================================
//  INSTELLINGEN VAN DE APP – alleen dit bestand aanpassen
// ============================================================
window.APP_CONFIG = {
  // Application (client) ID uit Microsoft Entra (stap 3 van het stappenplan)
  clientId: "c32395c8-efb0-4066-a176-c5865b744a2d",

  // Account waarmee je aanmeldt (met OneDrive), wordt voorgesteld bij het aanmelden
  loginHint: "charlie.holvoet@holvoet.com",

  // Map-id (tenant) van Holvoet
  tenant: "f7097f21-48ba-4a03-885d-e667cacfda90",

  // Actuele Excel (nieuwe software, vanaf september 2026).
  // Pad in je OneDrive, bv. "Verkopen/verkopen_actueel.xlsx"
  // of een volledige OneDrive-deellink (https://...)
  currentFile: "Apps/cijfers retailpackvoor app.xlsx",

  // Historiek-Excel (oude software, t.e.m. augustus 2026).
  // Wordt maar 1 keer per toestel gedownload en daarna bewaard.
  historyFile: "Apps/historiek_tot_aug2026.xlsx",

  // Eerste maand van de nieuwe software (jjjj-mm)
  cutover: "2026-09",

  // Hoe vaak de app maximaal in OneDrive kijkt naar nieuwe data (uren)
  refreshHours: 24
};
