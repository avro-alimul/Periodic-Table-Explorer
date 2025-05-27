// Language translations
const lang = {
    en: {
        title: "Periodic Table",
        name: "Name",
        number: "Atomic Number",
        mass: "Atomic Mass",
        category: "Category",
        export: "Export Elements",
        import: "Import Elements",
        error: "Error importing file: Invalid JSON format",
        filter: "Filter by Category:",
        all: "All",
        alkaliMetal: "Alkali Metals",
        alkalineEarthMetal: "Alkaline Earth Metals",
        transitionMetal: "Transition Metals",
        postTransitionMetal: "Post-Transition Metals",
        metalloid: "Metalloids",
        nonmetal: "Nonmetals",
        halogen: "Halogens",
        nobleGas: "Noble Gases"
    },
    bn: {
        title: "মৌলসূত্রের সারণি",
        name: "নাম",
        number: "পারমাণবিক সংখ্যা",
        mass: "পারমাণবিক ভর",
        category: "শ্রেণী",
        export: "তথ্য রপ্তানি করুন",
        import: "তথ্য আমদানি করুন",
        error: "ফাইল আমদানিতে ত্রুটি: অবৈধ JSON ফরম্যাট",
        filter: "শ্রেণী অনুযায়ী ফিল্টার:",
        all: "সব",
        alkaliMetal: "ক্ষার ধাতু",
        alkalineEarthMetal: "ক্ষারীয় মৃত্তিকা ধাতু",
        transitionMetal: "রূপান্তর ধাতু",
        postTransitionMetal: "রূপান্তর-পরবর্তী ধাতু",
        metalloid: "ধাতুকল্প",
        nonmetal: "অধাতু",
        halogen: "হ্যালোজেন",
        nobleGas: "নিষ্ক্রিয় গ্যাস"
    }
};

// Element data array
let elements = [
    // Period 1
    { symbol: "H", name: "Hydrogen", number: 1, mass: "1.008", x: 1, y: 1, category: "nonmetal" },
    { symbol: "He", name: "Helium", number: 2, mass: "4.0026", x: 18, y: 1, category: "noble-gas" },
    
    // Period 2
    { symbol: "Li", name: "Lithium", number: 3, mass: "6.94", x: 1, y: 2, category: "alkali-metal" },
    { symbol: "Be", name: "Beryllium", number: 4, mass: "9.0122", x: 2, y: 2, category: "alkaline-earth-metal" },
    { symbol: "B", name: "Boron", number: 5, mass: "10.81", x: 13, y: 2, category: "metalloid" },
    { symbol: "C", name: "Carbon", number: 6, mass: "12.011", x: 14, y: 2, category: "nonmetal" },
    { symbol: "N", name: "Nitrogen", number: 7, mass: "14.007", x: 15, y: 2, category: "nonmetal" },
    { symbol: "O", name: "Oxygen", number: 8, mass: "15.999", x: 16, y: 2, category: "nonmetal" },
    { symbol: "F", name: "Fluorine", number: 9, mass: "18.998", x: 17, y: 2, category: "halogen" },
    { symbol: "Ne", name: "Neon", number: 10, mass: "20.180", x: 18, y: 2, category: "noble-gas" },
    
    // Period 3
    { symbol: "Na", name: "Sodium", number: 11, mass: "22.990", x: 1, y: 3, category: "alkali-metal" },
    { symbol: "Mg", name: "Magnesium", number: 12, mass: "24.305", x: 2, y: 3, category: "alkaline-earth-metal" },
    { symbol: "Al", name: "Aluminum", number: 13, mass: "26.982", x: 13, y: 3, category: "post-transition-metal" },
    { symbol: "Si", name: "Silicon", number: 14, mass: "28.085", x: 14, y: 3, category: "metalloid" },
    { symbol: "P", name: "Phosphorus", number: 15, mass: "30.974", x: 15, y: 3, category: "nonmetal" },
    { symbol: "S", name: "Sulfur", number: 16, mass: "32.06", x: 16, y: 3, category: "nonmetal" },
    { symbol: "Cl", name: "Chlorine", number: 17, mass: "35.45", x: 17, y: 3, category: "halogen" },
    { symbol: "Ar", name: "Argon", number: 18, mass: "39.948", x: 18, y: 3, category: "noble-gas" },
    
    // Period 4
    { symbol: "K", name: "Potassium", number: 19, mass: "39.098", x: 1, y: 4, category: "alkali-metal" },
    { symbol: "Ca", name: "Calcium", number: 20, mass: "40.078", x: 2, y: 4, category: "alkaline-earth-metal" },
    { symbol: "Sc", name: "Scandium", number: 21, mass: "44.956", x: 3, y: 4, category: "transition-metal" },
    { symbol: "Ti", name: "Titanium", number: 22, mass: "47.867", x: 4, y: 4, category: "transition-metal" },
    { symbol: "V", name: "Vanadium", number: 23, mass: "50.942", x: 5, y: 4, category: "transition-metal" },
    { symbol: "Cr", name: "Chromium", number: 24, mass: "51.996", x: 6, y: 4, category: "transition-metal" },
    { symbol: "Mn", name: "Manganese", number: 25, mass: "54.938", x: 7, y: 4, category: "transition-metal" },
    { symbol: "Fe", name: "Iron", number: 26, mass: "55.845", x: 8, y: 4, category: "transition-metal" },
    { symbol: "Co", name: "Cobalt", number: 27, mass: "58.933", x: 9, y: 4, category: "transition-metal" },
    { symbol: "Ni", name: "Nickel", number: 28, mass: "58.693", x: 10, y: 4, category: "transition-metal" },
    { symbol: "Cu", name: "Copper", number: 29, mass: "63.546", x: 11, y: 4, category: "transition-metal" },
    { symbol: "Zn", name: "Zinc", number: 30, mass: "65.38", x: 12, y: 4, category: "transition-metal" },
    { symbol: "Ga", name: "Gallium", number: 31, mass: "69.723", x: 13, y: 4, category: "post-transition-metal" },
    { symbol: "Ge", name: "Germanium", number: 32, mass: "72.630", x: 14, y: 4, category: "metalloid" },
    { symbol: "As", name: "Arsenic", number: 33, mass: "74.922", x: 15, y: 4, category: "metalloid" },
    { symbol: "Se", name: "Selenium", number: 34, mass: "78.971", x: 16, y: 4, category: "nonmetal" },
    { symbol: "Br", name: "Bromine", number: 35, mass: "79.904", x: 17, y: 4, category: "halogen" },
    { symbol: "Kr", name: "Krypton", number: 36, mass: "83.798", x: 18, y: 4, category: "noble-gas" },
    
    // Period 5
    { symbol: "Rb", name: "Rubidium", number: 37, mass: "85.468", x: 1, y: 5, category: "alkali-metal" },
    { symbol: "Sr", name: "Strontium", number: 38, mass: "87.62", x: 2, y: 5, category: "alkaline-earth-metal" },
    { symbol: "Y", name: "Yttrium", number: 39, mass: "88.906", x: 3, y: 5, category: "transition-metal" },
    { symbol: "Zr", name: "Zirconium", number: 40, mass: "91.224", x: 4, y: 5, category: "transition-metal" },
    { symbol: "Nb", name: "Niobium", number: 41, mass: "92.906", x: 5, y: 5, category: "transition-metal" },
    { symbol: "Mo", name: "Molybdenum", number: 42, mass: "95.95", x: 6, y: 5, category: "transition-metal" },
    { symbol: "Tc", name: "Technetium", number: 43, mass: "98", x: 7, y: 5, category: "transition-metal" },
    { symbol: "Ru", name: "Ruthenium", number: 44, mass: "101.07", x: 8, y: 5, category: "transition-metal" },
    { symbol: "Rh", name: "Rhodium", number: 45, mass: "102.91", x: 9, y: 5, category: "transition-metal" },
    { symbol: "Pd", name: "Palladium", number: 46, mass: "106.42", x: 10, y: 5, category: "transition-metal" },
    { symbol: "Ag", name: "Silver", number: 47, mass: "107.87", x: 11, y: 5, category: "transition-metal" },
    { symbol: "Cd", name: "Cadmium", number: 48, mass: "112.41", x: 12, y: 5, category: "transition-metal" },
    { symbol: "In", name: "Indium", number: 49, mass: "114.82", x: 13, y: 5, category: "post-transition-metal" },
    { symbol: "Sn", name: "Tin", number: 50, mass: "118.71", x: 14, y: 5, category: "post-transition-metal" },
    { symbol: "Sb", name: "Antimony", number: 51, mass: "121.76", x: 15, y: 5, category: "metalloid" },
    { symbol: "Te", name: "Tellurium", number: 52, mass: "127.60", x: 16, y: 5, category: "metalloid" },
    { symbol: "I", name: "Iodine", number: 53, mass: "126.90", x: 17, y: 5, category: "halogen" },
    { symbol: "Xe", name: "Xenon", number: 54, mass: "131.29", x: 18, y: 5, category: "noble-gas" },
    
    // Period 6
    { symbol: "Cs", name: "Cesium", number: 55, mass: "132.91", x: 1, y: 6, category: "alkali-metal" },
    { symbol: "Ba", name: "Barium", number: 56, mass: "137.33", x: 2, y: 6, category: "alkaline-earth-metal" },
    { symbol: "La", name: "Lanthanum", number: 57, mass: "138.91", x: 3, y: 6, category: "lanthanide" },
    { symbol: "Hf", name: "Hafnium", number: 72, mass: "178.49", x: 4, y: 6, category: "transition-metal" },
    { symbol: "Ta", name: "Tantalum", number: 73, mass: "180.95", x: 5, y: 6, category: "transition-metal" },
    { symbol: "W", name: "Tungsten", number: 74, mass: "183.84", x: 6, y: 6, category: "transition-metal" },
    { symbol: "Re", name: "Rhenium", number: 75, mass: "186.21", x: 7, y: 6, category: "transition-metal" },
    { symbol: "Os", name: "Osmium", number: 76, mass: "190.23", x: 8, y: 6, category: "transition-metal" },
    { symbol: "Ir", name: "Iridium", number: 77, mass: "192.22", x: 9, y: 6, category: "transition-metal" },
    { symbol: "Pt", name: "Platinum", number: 78, mass: "195.08", x: 10, y: 6, category: "transition-metal" },
    { symbol: "Au", name: "Gold", number: 79, mass: "196.97", x: 11, y: 6, category: "transition-metal" },
    { symbol: "Hg", name: "Mercury", number: 80, mass: "200.59", x: 12, y: 6, category: "transition-metal" },
    { symbol: "Tl", name: "Thallium", number: 81, mass: "204.38", x: 13, y: 6, category: "post-transition-metal" },
    { symbol: "Pb", name: "Lead", number: 82, mass: "207.2", x: 14, y: 6, category: "post-transition-metal" },
    { symbol: "Bi", name: "Bismuth", number: 83, mass: "208.98", x: 15, y: 6, category: "post-transition-metal" },
    { symbol: "Po", name: "Polonium", number: 84, mass: "209", x: 16, y: 6, category: "metalloid" },
    { symbol: "At", name: "Astatine", number: 85, mass: "210", x: 17, y: 6, category: "halogen" },
    { symbol: "Rn", name: "Radon", number: 86, mass: "222", x: 18, y: 6, category: "noble-gas" },
    
    // Period 7
    { symbol: "Fr", name: "Francium", number: 87, mass: "223", x: 1, y: 7, category: "alkali-metal" },
    { symbol: "Ra", name: "Radium", number: 88, mass: "226", x: 2, y: 7, category: "alkaline-earth-metal" },
    { symbol: "Ac", name: "Actinium", number: 89, mass: "227", x: 3, y: 7, category: "actinide" },
    { symbol: "Rf", name: "Rutherfordium", number: 104, mass: "267", x: 4, y: 7, category: "transition-metal" },
    { symbol: "Db", name: "Dubnium", number: 105, mass: "268", x: 5, y: 7, category: "transition-metal" },
    { symbol: "Sg", name: "Seaborgium", number: 106, mass: "269", x: 6, y: 7, category: "transition-metal" },
    { symbol: "Bh", name: "Bohrium", number: 107, mass: "270", x: 7, y: 7, category: "transition-metal" },
    { symbol: "Hs", name: "Hassium", number: 108, mass: "269", x: 8, y: 7, category: "transition-metal" },
    { symbol: "Mt", name: "Meitnerium", number: 109, mass: "278", x: 9, y: 7, category: "transition-metal" },
    { symbol: "Ds", name: "Darmstadtium", number: 110, mass: "281", x: 10, y: 7, category: "transition-metal" },
    { symbol: "Rg", name: "Roentgenium", number: 111, mass: "282", x: 11, y: 7, category: "transition-metal" },
    { symbol: "Cn", name: "Copernicium", number: 112, mass: "285", x: 12, y: 7, category: "transition-metal" },
    { symbol: "Nh", name: "Nihonium", number: 113, mass: "286", x: 13, y: 7, category: "post-transition-metal" },
    { symbol: "Fl", name: "Flerovium", number: 114, mass: "289", x: 14, y: 7, category: "post-transition-metal" },
    { symbol: "Mc", name: "Moscovium", number: 115, mass: "290", x: 15, y: 7, category: "post-transition-metal" },
    { symbol: "Lv", name: "Livermorium", number: 116, mass: "293", x: 16, y: 7, category: "post-transition-metal" },
    { symbol: "Ts", name: "Tennessine", number: 117, mass: "294", x: 17, y: 7, category: "halogen" },
    { symbol: "Og", name: "Oganesson", number: 118, mass: "294", x: 18, y: 7, category: "noble-gas" },
    
    // Lanthanides (f-block)
    { symbol: "Ce", name: "Cerium", number: 58, mass: "140.12", x: 4, y: 8, category: "lanthanide" },
    { symbol: "Pr", name: "Praseodymium", number: 59, mass: "140.91", x: 5, y: 8, category: "lanthanide" },
    { symbol: "Nd", name: "Neodymium", number: 60, mass: "144.24", x: 6, y: 8, category: "lanthanide" },
    { symbol: "Pm", name: "Promethium", number: 61, mass: "145", x: 7, y: 8, category: "lanthanide" },
    { symbol: "Sm", name: "Samarium", number: 62, mass: "150.36", x: 8, y: 8, category: "lanthanide" },
    { symbol: "Eu", name: "Europium", number: 63, mass: "151.96", x: 9, y: 8, category: "lanthanide" },
    { symbol: "Gd", name: "Gadolinium", number: 64, mass: "157.25", x: 10, y: 8, category: "lanthanide" },
    { symbol: "Tb", name: "Terbium", number: 65, mass: "158.93", x: 11, y: 8, category: "lanthanide" },
    { symbol: "Dy", name: "Dysprosium", number: 66, mass: "162.50", x: 12, y: 8, category: "lanthanide" },
    { symbol: "Ho", name: "Holmium", number: 67, mass: "164.93", x: 13, y: 8, category: "lanthanide" },
    { symbol: "Er", name: "Erbium", number: 68, mass: "167.26", x: 14, y: 8, category: "lanthanide" },
    { symbol: "Tm", name: "Thulium", number: 69, mass: "168.93", x: 15, y: 8, category: "lanthanide" },
    { symbol: "Yb", name: "Ytterbium", number: 70, mass: "173.05", x: 16, y: 8, category: "lanthanide" },
    { symbol: "Lu", name: "Lutetium", number: 71, mass: "174.97", x: 17, y: 8, category: "lanthanide" },
    
    // Actinides (f-block)
    { symbol: "Th", name: "Thorium", number: 90, mass: "232.04", x: 4, y: 9, category: "actinide" },
    { symbol: "Pa", name: "Protactinium", number: 91, mass: "231.04", x: 5, y: 9, category: "actinide" },
    { symbol: "U", name: "Uranium", number: 92, mass: "238.03", x: 6, y: 9, category: "actinide" },
    { symbol: "Np", name: "Neptunium", number: 93, mass: "237", x: 7, y: 9, category: "actinide" },
    { symbol: "Pu", name: "Plutonium", number: 94, mass: "244", x: 8, y: 9, category: "actinide" },
    { symbol: "Am", name: "Americium", number: 95, mass: "243", x: 9, y: 9, category: "actinide" },
    { symbol: "Cm", name: "Curium", number: 96, mass: "247", x: 10, y: 9, category: "actinide" },
    { symbol: "Bk", name: "Berkelium", number: 97, mass: "247", x: 11, y: 9, category: "actinide" },
    { symbol: "Cf", name: "Californium", number: 98, mass: "251", x: 12, y: 9, category: "actinide" },
    { symbol: "Es", name: "Einsteinium", number: 99, mass: "252", x: 13, y: 9, category: "actinide" },
    { symbol: "Fm", name: "Fermium", number: 100, mass: "257", x: 14, y: 9, category: "actinide" },
    { symbol: "Md", name: "Mendelevium", number: 101, mass: "258", x: 15, y: 9, category: "actinide" },
    { symbol: "No", name: "Nobelium", number: 102, mass: "259", x: 16, y: 9, category: "actinide" },
    { symbol: "Lr", name: "Lawrencium", number: 103, mass: "262", x: 17, y: 9, category: "actinide" }
];

// Current language
let currentLang = 'en';

// Render the periodic table
function renderTable(filter = "all") {
    const container = document.getElementById("tableContainer");
    container.innerHTML = "";

    // Create empty cells for the entire grid
    for (let y = 1; y <= 9; y++) {
        for (let x = 1; x <= 18; x++) {
            const div = document.createElement("div");
            div.className = "element empty";
            div.style.gridColumn = x;
            div.style.gridRow = y;
            container.appendChild(div);
        }
    }

    // Add the filtered elements
    elements
        .filter(el => filter === "all" || el.category === filter)
        .forEach(el => {
            const div = document.createElement("div");
            div.className = `element ${el.category}`;
            div.style.gridColumn = el.x;
            div.style.gridRow = el.y;
            
            // Create element content
            div.innerHTML = `
                <span class="number">${el.number}</span>
                <span class="symbol">${el.symbol}</span>
                <span class="mass">${el.mass}</span>
            `;

            // Create tooltip
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerHTML = `
                <strong>${el.symbol}</strong><br>
                ${lang[currentLang].name}: ${el.name}<br>
                ${lang[currentLang].number}: ${el.number}<br>
                ${lang[currentLang].mass}: ${el.mass}<br>
                ${lang[currentLang].category}: ${el.category}
            `;
            
            div.appendChild(tooltip);
            container.appendChild(div);
        });
}

// Update UI language
function updateLanguage() {
    const l = lang[currentLang];
    document.getElementById("title").innerText = l.title;
    document.getElementById("exportBtn").innerText = l.export;
    
    // Update filter options
    const filterSelect = document.getElementById("filterSelect");
    filterSelect.options[0].text = l.all;
    filterSelect.options[1].text = l.alkaliMetal;
    filterSelect.options[2].text = l.alkalineEarthMetal;
    filterSelect.options[3].text = l.transitionMetal;
    filterSelect.options[4].text = l.postTransitionMetal;
    filterSelect.options[5].text = l.metalloid;
    filterSelect.options[6].text = l.nonmetal;
    filterSelect.options[7].text = l.halogen;
    filterSelect.options[8].text = l.nobleGas;
    
    renderTable(filterSelect.value); // Re-render with current filter
}

// Export elements data
document.getElementById("exportBtn").onclick = () => {
    const blob = new Blob([JSON.stringify(elements, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "elements.json";
    a.click();
    URL.revokeObjectURL(url);
};

// Import elements data
document.getElementById("importFile").onchange = (e) => {
        const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                elements = JSON.parse(reader.result);
                renderTable();
            } catch (error) {
                alert(lang[currentLang].error);
            }
        };
        reader.readAsText(file);
    }
};

// Language switching
document.getElementById("language").onchange = (e) => {
        currentLang = e.target.value;
        updateLanguage();
};

// Category filter change handler
document.getElementById("filterSelect").onchange = (e) => {
    renderTable(e.target.value);
};

// Initialize the application
window.onload = () => {
    renderTable();
    updateLanguage();
}; 