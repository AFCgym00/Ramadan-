async function makePDF() {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const n = document.getElementById('mName').value || "Athlete";
        const w = document.getElementById('mWeight').value || "0";
        const p = (w * 2.2).toFixed(0);

        // --- Header & Branding ---
        doc.setFillColor(4, 22, 15); // Deep Green
        doc.rect(0, 0, 210, 45, 'F');
        doc.setTextColor(212, 175, 55); // Gold
        doc.setFontSize(24);
        doc.setFont("helvetica", "bold");
        doc.text("AZHAR FITNESS CENTER", 105, 25, { align: "center" });
        doc.setFontSize(10);
        doc.text("RAMADAN ELITE SPECIALIST SYSTEM", 105, 35, { align: "center" });

        // --- Athlete Profile ---
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(`Name: ${n} | Weight: ${w}kg | Goal: ${currentGoal.toUpperCase()}`, 20, 55);
        doc.setTextColor(39, 174, 96); // Green
        doc.text(`PROTEIN LOCK: ${p}g Daily`, 20, 65);

        // --- 1. Islamic Section (Dua & Surah) ---
        doc.setDrawColor(212, 175, 55);
        doc.rect(15, 75, 180, 55); // Box for Duas
        doc.setTextColor(184, 134, 11); // Dark Gold
        doc.setFontSize(14);
        doc.text("MASNOON DUAS & SPIRITUAL BARKAT", 105, 85, { align: "center" });
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.text("Sehri Dua:", 20, 95);
        doc.setFont("helvetica", "italic");
        doc.text("'Wa bi-sawmi ghadinn nawaiytu min shahri ramadan'", 45, 95);
        
        doc.setFont("helvetica", "bold");
        doc.text("Iftar Dua:", 20, 105);
        doc.setFont("helvetica", "italic");
        doc.text("'Allahumma laka sumtu wa 'ala rizqika aftartu'", 45, 105);

        doc.setFont("helvetica", "bold");
        doc.text("Surah Al-Qadr (Meaning):", 20, 115);
        doc.setFont("helvetica", "normal");
        const surahMeaning = "Beshak humne ise (Quran ko) Shab-e-Qadr mein nazil kiya. Ye raat hazaar mahino se behtar hai.";
        doc.text(doc.splitTextToSize(surahMeaning, 145), 20, 122);

        // --- 2. Diet Plan Section ---
        doc.setFontSize(14);
        doc.setTextColor(212, 175, 55);
        doc.text("YOUR PERSONALIZED DIET PLAN", 20, 145);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.text("SAHUR:", 20, 155); 
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById('sahurTxt').innerText, 40, 155);

        doc.setFont("helvetica", "bold");
        doc.text("IFTARI:", 20, 165);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById('iftarTxt').innerText, 40, 165);

        doc.setFont("helvetica", "bold");
        doc.text("DINNER:", 20, 175);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById('dinnerTxt').innerText, 40, 175);

        // --- 3. 3 Ashra Fazilat ---
        doc.setFillColor(245, 245, 245);
        doc.rect(20, 190, 170, 25, 'F');
        doc.setFontSize(10);
        doc.text("1st Ashra: REHMAT | 2nd Ashra: MAGHFIRAT | 3rd Ashra: NAJAAT", 105, 205, { align: "center" });

        // --- Footer ---
        doc.setFontSize(12);
        doc.setTextColor(39, 174, 96);
        doc.text("GYM TIMINGS: 07:00 PM - 01:00 AM", 105, 230, { align: "center" });
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(9);
        doc.text("Verified by Azhar Specialist System | Mumbra, Thane", 105, 240, { align: "center" });

        doc.save(`AFC_Ramadan_Plan_${n}.pdf`);
    } catch (e) {
        alert("PDF Error: Internet check karein.");
    }
}
