let currentGoal = 'loss';

// 1. Ramadan Fasting Timer Logic
function startIftarTimer() {
    setInterval(() => {
        const now = new Date();
        const iftarTime = new Date();
        
        // Iftar timing set to approx 6:45 PM (Aap isse apne local time ke hisab se change kar sakte hain)
        iftarTime.setHours(18, 45, 0); 

        let diff = iftarTime - now;

        if (diff > 0) {
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);
            document.getElementById('timerDisplay').innerText = `Iftar in: ${h}h ${m}m ${s}s`;
        } else {
            document.getElementById('timerDisplay').innerText = "🌙 Waqt-e-Iftar: Allahumma laka sumtu...";
        }
    }, 1000);
}

// 2. Goal Selection
function setGoal(g) {
    currentGoal = g;
    document.getElementById('lBtn').classList.toggle('active', g === 'loss');
    document.getElementById('gBtn').classList.toggle('active', g === 'gain');
    calculateDiet();
}

// 3. Main Calculation (2.2g Protein Lock)
function calculateDiet() {
    const w = document.getElementById('mWeight').value;
    const res = document.getElementById('resultsView');
    const fab = document.getElementById('pdfBtn');

    if (w >= 35) {
        res.style.display = 'block'; 
        fab.style.display = 'flex';
        
        // AFC Elite Formula
        const p = (w * 2.2).toFixed(0); 
        const c = currentGoal === 'loss' ? (w * 1.5).toFixed(0) : (w * 4).toFixed(0);
        const cal = currentGoal === 'loss' ? (w * 25).toFixed(0) : (w * 35).toFixed(0);

        document.getElementById('protDisplay').innerText = `LOCKED: ${p}G PROTEIN | ${c}G CARBS | ~${cal} KCAL`;

        if (currentGoal === 'loss') {
            updateText("5 Egg Whites + 100g Paneer + 1 Jowar Roti", "2 Dates + 100g Bhuna Chana + Watermelon", "200g Grilled Chicken + Large Salad");
            distributeMacros(p, c, 35);
        } else {
            updateText("3 Whole Eggs + 2 Parathe + 1 Bowl Dahi", "3 Dates + 500ml Milkshake + Chana Chaat", "250g Chicken/Paneer Curry + 2 Bowls Rice");
            distributeMacros(p, c, 65);
        }
    } else { 
        res.style.display = 'none'; 
        fab.style.display = 'none'; 
    }
}

// UI & Sharing Helpers
function updateText(s, i, d) {
    document.getElementById('sahurTxt').innerText = s;
    document.getElementById('iftarTxt').innerText = i;
    document.getElementById('dinnerTxt').innerText = d;
}

function distributeMacros(p, c, f) {
    setRow('s', p*0.3, c*0.4, f*0.3); // Sahur
    setRow('i', p*0.2, c*0.4, f*0.2); // Iftari
    setRow('d', p*0.5, c*0.2, f*0.5); // Dinner (Gym Recovery)
}

function setRow(id, p, c, f) {
    document.getElementById(id+'P').innerText = p.toFixed(0);
    document.getElementById(id+'C').innerText = c.toFixed(0);
    document.getElementById(id+'F').innerText = f.toFixed(0);
}

// 4. WhatsApp Share
function shareOnWhatsApp() {
    const name = document.getElementById('mName').value || "Athlete";
    const weight = document.getElementById('mWeight').value;
    const protein = (weight * 2.2).toFixed(0);
    
    const message = `*AZHAR FITNESS (AFC) ELITE PLAN*%0A%0A*Name:* ${name}%0A*Weight:* ${weight}kg%0A*Goal:* ${currentGoal.toUpperCase()}%0A*Protein Lock:* ${protein}g%0A%0A*Gym Timings:* 07:00 PM - 01:00 AM%0A%0A_Generated via AzharFitPro_`;
    
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

// Initialize Timer on Load
window.onload = startIftarTimer;

function setRow(id, p, c, f) {
    document.getElementById(id+'P').innerText = p.toFixed(0);
    document.getElementById(id+'C').innerText = c.toFixed(0);
    document.getElementById(id+'F').innerText = f.toFixed(0);
}

// 4. WhatsApp Share
function shareOnWhatsApp() {
    const name = document.getElementById('mName').value || "Athlete";
    const weight = document.getElementById('mWeight').value;
    const protein = (weight * 2.2).toFixed(0);
    
    const message = `*AZHAR FITNESS (AFC) ELITE PLAN*%0A%0A*Name:* ${name}%0A*Weight:* ${weight}kg%0A*Goal:* ${currentGoal.toUpperCase()}%0A*Protein Lock:* ${protein}g%0A%0A*Gym Timings:* 07:00 PM - 01:00 AM%0A%0A_Generated via AzharFitPro_`;
    
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

// Initialize Timer on Load
window.onload = startIftarTimer;
