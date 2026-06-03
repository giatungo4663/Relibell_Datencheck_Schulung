const pdfFile = "pdf/Datencheck_Formular/CL_04_Datencheck KE_Rev.16.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

/* =========================================================
   ELEMENTE
========================================================= */

const pdfPages = document.getElementById("pdfPages");

const finderMode =
  document.getElementById("finderMode");

const coordinates =
  document.getElementById("coordinates");

const modal =
  document.getElementById("modal");

const modalContent =
  document.getElementById("modalContent");

const modalHeader =
  document.getElementById("modalHeader");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");

const modalDownloads =
  document.getElementById("modalDownloads");

/* =========================================================
   EINSTELLUNGEN
========================================================= */

const defaultLeft = 3.2;
const scale = 1.45;

/* =========================================================
   PDF-GRUPPEN
========================================================= */

const pdfGroups = {
//-----=========I. Allgemein====--------------------//
anlagenzertifikat: [
    [
      "Anlagenzertifikat (AZ) Relibell Doku",
      "pdf/01_Allgemeines/01_Anlagenzertifikat/2022-172-A-2_SP Imming_AZ.pdf"
    ]
  ],

sld: [
    [
      "Single-Line-Diagramm Formular 1",
      "pdf/01_Allgemeines/02_Single-Line Diagramm der EZA/251125_SLD_SP Kirmeier,Imming Wurmsham_M.A.pdf"
    ]
  ],

schutzkonzept:[
    ["Schutzkonzept Formular",
    "pdf/01_Allgemeines/03_Schutzkonzept/240708_Schutzkonzept_Kirmeier_SignTM.pdf"]
  ],

kommunikationsplan:[
    ["Kommunikationsplan","pdf/01_Allgemeines/04_Kommunikationsplan/241015_Kommunikationsplan_SP Kirmeier,Imming Wurmsham _Ali.pdf"]
  ],

e11: [
    ["E.11 Formular", "pdf/01_Allgemeines/05_E11/260108_E11_Heitzmannsberg_signTM.pdf"]
  ],

e10: [
    ["E.10 Formular","pdf/01_Allgemeines/06_E10/250930_E.10.pdf"]
  ],
  
e7: [
    ["E.7 Formular","pdf/01_Allgemeines/07_E7/250930_ E.7.pdf"]
  ],

e6: [
    [
      "E.6 Formular 1 EnergieNetze Bayern Formular",
      "pdf/01_Allgemeines/08_E6/E.6-energienetze-erdungsprotokoll.pdf"
    ],
    
    [
      "E.6 Formular 2 Erdungsprotokoll Plan",
      "pdf/01_Allgemeines/08_E6/Erdungsprotokoll-Anhang.pdf"
    ]
  ],
//-----================II. Betriebsmittel EZA==========----//
IBSProtokoll:[
    [
      "IBS-Protokoll (siehe Foto-Doku)","keine"
    ]
  
  ],
  Stoerlichtbogennachweis:[
    [
      "Störlichtbogennachweis der Stationen/Schaltanlagen Formular 01",
      "pdf/02_Betriebsmittel der EZA/02_Stoerlichtbogennachweis_derStationen_Schaltanlagen/NT196_03_2_DE_2024"
    ],
    [
      "Störlichtbogennachweis der Stationen/Schaltanlagen Formular 02",
      "PB25168"
    ],
    [
      "Störlichtbogennachweis der Stationen/Schaltanlagen Formular 03",
      "Störlichtbogenqualifikation_Heitzmannsberg_signTM"
    ]
  ],
  PruefprotokolleWandler:[
    ["Prüfprotokolle der Stromwandler Formular 01",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Stromwandler/30853858_020KE_sig.pdf"
    ],

    ["Prüfprotokolle der Stromwandler Formular 02",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Stromwandler/31449788EP.pdf"
    ],
    ["Prüfprotokolle der Stromwandler Formular 03",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Stromwandler/31449789EP.pdf"
    ],
    ["Prüfprotokolle der Stromwandler Formular 04",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Stromwandler/331449790EP.pdf"
    ],
    ["Prüfprotokolle der Spannungswandler Formular 01",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Spannungswandler/30853858_010KE_sig.pdf"
    ],

    ["Prüfprotokolle der Spannungswandler Formular 02",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Spannungswandler/31449857EP.pdf"
    ],
    ["Prüfprotokolle der Spannungswandler Formular 03",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Spannungswandler/31449858EP.pdf"
    ],
    ["Prüfprotokolle der Spannungswandler Formular 04",
     "pdf/02_Betriebsmittel der EZA/03_Pruefprotokolle_StromWandler_Spannungswandler/Spannungswandler/31449859EP.pdf"
    ]
  ],

  Abrechnungsmessung:[
    ["Abrechnungsmessung Zähler (siehe FotoDoku)","keine"]
  ],

//--==============III. EZE=================---//
EinstellprotokolleEZE:[
   ["Parameter EZE Formular 01","pdf/03_Erzeugungseinheiten/Parameter query_A2332101970_20251124104130.pdf"],
   ["Parameter EZE Formular 02","pdf/03_Erzeugungseinheiten/Parameter query_A2332101970_20251124104135.pdf"],
   ["Parameter EZE Formular 03","pdf/03_Erzeugungseinheiten/Parameterabfrage_A2332101970_20251124103954.pdf"],
   ["Parameter EZE Formular 04","pdf/03_Erzeugungseinheiten/Parameterabfrage_A2332101970_20251124104044.pdf"],
   ["Erklärung zur Zugriffbeschränkung auf Netzparameter","pdf/03_Erzeugungseinheiten/Trafomacher Erklärung_Auszüge_Sungrow.pdf"]
],

//--==============IV.EZA-Regler============--//
  Bittest:[
    ["Bittest Formular Bayernwerk","pdf/04_EZARegler/01_Bittest_WirkBlindleistung/Protokoll - Heitzmannsberg.pdf"]
  ],

  Wirkleistungssteurung:[
     ["Wirkleistungsteueurng Formular Imming", 
      "pdf/04_EZARegler/02_Wirkleistungsteuerung_PQSelbsttest/1000315885_Söllfedl_1_IBN_Regler.pdf"],
    ["PQ Selbsttest","pdf/04_EZARegler/02_Wirkleistungsteuerung_PQSelbsttest/1000315885_Söllfedl_1_PQ-Selbsttest_NB5-Netzanschluss_TAB_REV4.pdf"]
  ],

  Blindleistungsregelung:[
    ["Blindleistungsregelung Formular Imming", 
      "pdf/04_EZARegler/03_Blindleistungssteuerung_PQSelbsttest/1000315885_Söllfedl_1_IBN_Regler.pdf"],
    ["PE Selbsttest","pdf/04_EZARegler/03_Blindleistungssteuerung_PQSelbsttest/1000315885_Söllfedl_1_PQ-Selbsttest_NB5-Netzanschluss_TAB_REV4.pdf"]
  ],
  EinstellprotokolleEZA:[
    ["Formular Einstelleprotokolle EZA (siehe Foto)", "keine"]
  ],
  BlindleistungskennlinieEZA:[
    ["Formular Blindleistungskennlinie EZA (siehe Foto)", "keine"]
  ],
  PT1EZA:[
    ["Formular PTEZA (siehe Foto)", "keine"]
  ],
  StoerungsverhaltenEZA:[
    ["Formular Störungsverhalten (siehe Foto)", "keine"]
  ],
  Wirkleistungssteurung:[
  ["PQ Selbsttest",
    "pdf/04_EZARegler/02_Wirkleistungsteuerung_PQSelbsttest/1000315885_Söllfedl_1_PQ-Selbsttest_NB5-Netzanschluss_TAB_REV4.pdf"]
  ],
  Blindleistungsregelung:[
  ["PQ Selbsttest",
    "pdf/04_EZARegler/03_Blindleistungssteuerung_PQSelbsttest/1000315885_Söllfedl_1_PQ-Selbsttest_NB5-Netzanschluss_TAB_REV4.pdf"]
  ],
  BlindleistungskennlinieEZA:[
   ["Prüfprotokoll - Blindleistungskennlinie",
    "pdf/04_EZARegler/04_Nachweise_durch_Anlagenbetreiber/02_Prufprotokoll_Blindleistungskennlinie/1000315885_Söllfedl_1_Protokoll_Q(U)-Regelung_Übergabe- u. Schaltstationen_Vers.5.pdf"]
  ],
  PT1EZA:[
   ["PT1 PDF Datei","pdf/04_EZARegler/04_Nachweise_durch_Anlagenbetreiber/03_PT1Verhalten/1000315885_Söllfedl_1_PT1_Sprung_EA1.pdf"]
  ],
  //----=======V. Schutzprüfprotokolle============---//
  SchutzNAP:[
  ["Mittelspannung Prüfprotokoll Übergabeschutz",
  "pdf/05_Schutzpruefprotokolle/01_Schutz_am_NAP/C113_MS_Netz_Übergabeschutz_Heitzmannsberg_signed.pdf"],
  ["Prüfprotokoll Spannungsüberwachung Stücke Symap",
   "pdf/05_Schutzpruefprotokolle/01_Schutz_am_NAP/250630_Stucke-Symap_Heitzmannsberg-1_Übergabe_U.pdf"]
  ],

  EntkupplungsschutzEZA:[
  ["Mittelspannung Prüfprotokoll Entkupplungsschutz",
    "pdf/05_Schutzpruefprotokolle/02_Zwischengelagerter_Entkupplungsschutz/C113_MS_Netz_EZE_Heitzmannsberg_signed.pdf"],
  ["Prüfprotokoll Ziehl Untergeordneter Schutz",
   "pdf/05_Schutzpruefprotokolle/02_Zwischengelagerter_Entkupplungsschutz/250630_Ziehl-UFR1001E_Heitzmannsberg-1_EZE_U_f.pdf"]
  ],

  USVNachweisevonÜST:[
  ["USV-Versorgung 8 Stunden",
   "pdf/05_Schutzpruefprotokolle/04_USVNachweise/250703_USV_Heitzmannsberg_signTM.pdf"]
  ],

  keine: []

};

/* =========================================================
                  HOTSPOTS
========================================================= */

const sections = {
  allgemein: [
    [1, 1, 42.0,"Anlagenzertifikat","texte/Anlagenzertifikat.html","anlagenzertifikat"],
    [2, 1, 45.7, "Single-Line-Diagramm der EZA", "texte/SLDderEZA.html", "sld"],
    [3, 1, 49.3, "Schutzkonzept", "texte/Schutzkonzept.html","schutzkonzept"],
    [4, 1, 53.3, "Kommunikationsplan", "texte/Kommunikationsplan.html", "kommunikationsplan"],
    [5, 1, 62.8, "E.11 - Inbetriebsetzungserklärung", "texte/E11.html", "e11"],
    [6, 1, 69.06, "E.10 - Inbetriebsetzungsprotokoll", "texte/E10.html", "e10"],
    [7, 1, 73.81, "E.7 - Inbetriebsetzungsprotokoll für Übergabestationen", "texte/E7.html", "e7"],
    [8, 1, 77.52, "E.6 - Erdungsprotokoll", "texte/E6.html","e6"],
    [ 9, 1, 85.05,"Anlagenregler", "texte/Anlagenregler.html","Anlagenregler"],
    [ 10, 2, 15.8, "Schutzgeräte", "texte/Schutzgeraete.html","Schutzgeraete"]
  ],
//-----==============Page 2============-----//
//--============== 2.Betriebsmittel der EZA===============----//
  betriebsmittel: [
    [11, 2, 34.3, "IBS Transformators (Datencheck) + Schaltanlagen Typenschilder (Anlagen)", "texte/IBSProtokoll.html", "IBSProtokoll"],
    [12, 2, 38.3, "Störlichtbogennachweis", "texte/Stoerlichtbogennachweis.html", "Stoerlichtbogennachweis"],
    [13, 2, 42.3, "Prüfprotokolle Strom- und Spannungswandler", "texte/PruefprotokolleWandler.html", "PruefprotokolleWandler"],
    [14, 2, 46.3, "Prüfprotokolle Abrechnungsmessung", "texte/Abrechnungsmessung.html", "Abrechnungsmessung"]
  ],

//-----==================3.Erzeugungseinheiten==============----//
 erzeugungseinheiten: [
    [15, 2, 63.3, "Einstellprotokolle / Parameterauszug", "texte/EinstellprotokolleEZE.html", "EinstellprotokolleEZE"],
    [16, 2, 67.3, "Auflistung aller EZE", "texte/EZESeriennummernSoftwarestand.html", "EZESeriennummer"],
    [17, 2, 71.3, "Prüfung zum Störungsverhalten", "texte/Stoerungsverhalten.html", "Stoerungsverhalten"]
  ],
//---============4. EZA-Regler================------------//
ezaRegler: [
    [18, 3, 24.3, "Datenumfang Wirk- und Blindleistung", "texte/Bittest.html", "Bittest"],
    [19, 3, 28.3, "Wirkleistungssteuerung", "texte/PrufprotokollWirkleistungsteuerung.html", "Wirkleistungssteurung"],
    [20, 3, 32.3, "Blindleistungssteuerung", "texte/PrufprotokollBlindleistungsteuerung.html", "Blindleistungsregelung"],
    [21, 3, 40.3, "Einstellprotokolle / Parameterauszug", "texte/EinstellprotokolleEZA.html", "EinstellprotokolleEZA"],
    [22, 3, 44.3, "Blindleistungskennlinie", "texte/BlindleistungskennlinieEZA.html", "BlindleistungskennlinieEZA"],
    [23, 3, 48.3, "Nachweis PT1-Verhalten", "texte/PT1EZA.html", "PT1EZA"],
    [24, 3, 52.3, "Prüfung zum Störungsverhalten", "texte/StoerungsverhaltenEZA.html", "StoerungsverhaltenEZA"],
    [25, 3, 56.3, "Nachweis P(f)-Verhalten", "texte/PfVerhaltenEZA.html", "keine"],
    [26, 3, 60.3, "P_AV,E-Überwachung", "texte/PAVEZA.html", "keine"]
  ],
//--------==================== 5. Schutzprüfprotokolle========-------------------------//
schutzpruefprotokolle: [
    [27, 3, 79.3, "Schutz am NAP", "texte/SchutzNAP.html", "SchutzNAP"],
    [28, 3, 83.3, "Zwischengelagerter Entkupplungsschutz", "texte/EntkupplungsschutzEZA.html", "EntkupplungsschutzEZA"],
    [29, 4, 17.3, "Nachgelagerte Schutzgeräte", "texte/Trafoschutz.html", "keine"],
    [30, 4, 26.3, "USV-Nachweise ÜST", "texte/USVfromUST.html", "USVNachweisevonÜST"],
    [31, 4, 30.3, "USV-Nachweise NSHV", "texte/USVfromNSHV.html", "keine"]
  ]
};

/* =========================================================
   HOTSPOTS ERZEUGEN
========================================================= */

const hotspots = Object.values(sections)
  .flat()
  .map(toHotspot);

function toHotspot([
  label,
  page,
  top,
  title,
  textFile,
  pdfGroup
]) {

  return {

    page,

    label: String(label),

    left: defaultLeft,

    top,

    title: `Punkt ${label}: ${title}`,

    textFile,

    pdfs: pdfGroups[pdfGroup] || []

  };

}

/* =========================================================
   PDF RENDERN
========================================================= */

async function renderPDF() {

  const pdf =
    await pdfjsLib.getDocument(pdfFile).promise;

  for (
    let pageNumber = 1;
    pageNumber <= pdf.numPages;
    pageNumber++
  ) {

    const page =
      await pdf.getPage(pageNumber);

    const viewport =
      page.getViewport({ scale });

    const wrapper =
      createPage(pageNumber, viewport);

    await page.render({
      canvasContext:
        wrapper.canvas.getContext("2d"),

      viewport
    }).promise;

    addHotspots(wrapper.element, pageNumber);

    addFinder(wrapper.element, pageNumber);

  }

}

/* =========================================================
   PDF-SEITE ERZEUGEN
========================================================= */

function createPage(pageNumber, viewport) {

  const element =
    document.createElement("div");

  element.className = "page-wrapper";

  element.dataset.page = pageNumber;

  const canvas =
    document.createElement("canvas");

  canvas.width = viewport.width;

  canvas.height = viewport.height;

  element.appendChild(canvas);

  pdfPages.appendChild(element);

  return {
    element,
    canvas
  };

}

/* =========================================================
   HOTSPOTS ANZEIGEN
========================================================= */

function addHotspots(wrapper, pageNumber) {

  hotspots
    .filter(h => h.page === pageNumber)

    .forEach(h => {

      const button =
        document.createElement("button");

      button.className = "hotspot";
      button.innerText = h.label;
      button.style.left = `${h.left}%`;
      button.style.top = `${h.top}%`;
      button.classList.add("done");
      button.addEventListener(
        "click",

        event => {

          event.stopPropagation();

          if (!finderMode.checked) {

            openModal(h);

          }

        }
      );

      wrapper.appendChild(button);

    });

}

/* =========================================================
   KOORDINATEN FINDER
========================================================= */

function addFinder(wrapper, pageNumber) {

  wrapper.addEventListener(
    "click",

    event => {

      if (!finderMode.checked) return;

      const box =
        wrapper.getBoundingClientRect();

      const left =
        ((event.clientX - box.left) / box.width) * 100;

      const top =
        ((event.clientY - box.top) / box.height) * 100;

      const result =
        `page: ${pageNumber}, left: ${left.toFixed(2)}, top: ${top.toFixed(2)}`;

      coordinates.innerText = result;

      console.log(result);

    }
  );

}

/* =========================================================
   MODAL ÖFFNEN
========================================================= */

async function openModal(hotspot) {

  modalTitle.innerText = hotspot.title;

  modal.style.display = "block";
  requestAnimationFrame(() => {
  modal.classList.add("show");
  });
  await loadText(hotspot.textFile);

  showDownloads(hotspot.pdfs);

}

/* =========================================================
   TEXT LADEN
========================================================= */

async function loadText(textFile) {

  modalText.innerHTML =
    "Inhalt wird geladen...";

  try {

    const response =
      await fetch(textFile);

    if (!response.ok) {

      throw new Error(
        "Textdatei nicht gefunden"
      );

    }

    modalText.innerHTML =
      await response.text();

  }

  catch {

    modalText.innerHTML =
      "<p>Für diesen Punkt wurde noch kein Erklärungstext angelegt.</p>";

  }

}

/* =========================================================
   DOWNLOADS ANZEIGEN
========================================================= */

function showDownloads(pdfs) {

   modalDownloads.innerHTML = "";

  if (!pdfs.length) {
    modalDownloads.innerHTML = "<p>Keine Zusatz-PDF vorhanden.</p>";
    return;
  }

  const title = document.createElement("h3");
  title.innerText = "Zusätzliche PDF-Dateien";
  modalDownloads.appendChild(title);

  pdfs.forEach(([name, file]) => {
    const link = document.createElement("a");

    link.className = "download-btn";
    link.href = file;
    link.download = "";
    link.target = "_blank";
    link.innerText = name;

    modalDownloads.appendChild(link);
  });

}

/* =========================================================
   MODAL SCHLIESSEN
========================================================= */

function closeModal() {

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 250);

}

window.addEventListener(
  "click",

  event => {

    if (event.target === modal) {

      closeModal();

    }

  }
);

/* =========================================================
   MODAL VERSCHIEBEN
========================================================= */

let isDragging = false;

let offsetX = 0;

let offsetY = 0;

modalHeader.addEventListener(
  "mousedown",

  event => {

    isDragging = true;

    const rect =
      modalContent.getBoundingClientRect();

    offsetX =
      event.clientX - rect.left;

    offsetY =
      event.clientY - rect.top;

    modalContent.style.transform = "none";

  }
);

document.addEventListener(
  "mousemove",

  event => {

    if (!isDragging) return;

    modalContent.style.left =
      `${event.clientX - offsetX}px`;

    modalContent.style.top =
      `${event.clientY - offsetY}px`;

  }
);

document.addEventListener(
  "mouseup",

  () => {

    isDragging = false;

  }
);

/* =========================================================
   BILD VIEWER MIT ZOOM + VERSCHIEBEN
========================================================= */

const imageModal = document.getElementById("imageModal");
const imageStage = document.getElementById("imageStage");
const zoomedImage = document.getElementById("zoomedImage");

const imageClose = document.getElementById("imageClose");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");

let imgScale = 1;
let imgX = 0;
let imgY = 0;

let isPanning = false;
let panStartX = 0;
let panStartY = 0;

document.addEventListener("click", event => {
  const image = event.target.closest(".content-image");
  if (!image) return;

  imageModal.style.display = "block";
  zoomedImage.src = image.src;
  resetImageViewer();
});

zoomInBtn.addEventListener("click", event => {
  event.stopPropagation();
  imgScale += 0.2;
  updateImageViewer();
});

zoomOutBtn.addEventListener("click", event => {
  event.stopPropagation();
  imgScale = Math.max(0.4, imgScale - 0.2);
  updateImageViewer();
});

zoomResetBtn.addEventListener("click", event => {
  event.stopPropagation();
  resetImageViewer();
});

imageClose.addEventListener("click", closeImageModal);

imageStage.addEventListener("wheel", event => {
  event.preventDefault();

  const zoomStep = event.deltaY < 0 ? 0.15 : -0.15;
  imgScale = Math.max(0.4, Math.min(5, imgScale + zoomStep));

  updateImageViewer();
});

imageStage.addEventListener("mousedown", event => {
  isPanning = true;

  panStartX = event.clientX - imgX;
  panStartY = event.clientY - imgY;

  zoomedImage.style.cursor = "grabbing";
});

document.addEventListener("mousemove", event => {
  if (!isPanning) return;

  imgX = event.clientX - panStartX;
  imgY = event.clientY - panStartY;

  updateImageViewer();
});

document.addEventListener("mouseup", () => {
  isPanning = false;
  zoomedImage.style.cursor = "grab";
});

imageModal.addEventListener("click", event => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});

function updateImageViewer() {
  zoomedImage.style.transform =
    `translate(${imgX}px, ${imgY}px) scale(${imgScale})`;

  zoomResetBtn.innerText = `${Math.round(imgScale * 100)}%`;
}

function resetImageViewer() {
  imgScale = 1;
  imgX = 0;
  imgY = 0;
  updateImageViewer();
}

function closeImageModal() {
  imageModal.style.display = "none";
  resetImageViewer();
}

renderPDF();