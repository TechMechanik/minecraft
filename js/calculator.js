// Material Data
const moduleMaterials = {
    'central-hub': {
        name: 'Central Hub',
        buildTime: 11, // hours
        materials: {
            'Primary Structure': {
                'Light Gray Concrete': 2700,
                'Dark Gray Concrete': 1300,
                'Polished Andesite': 2000,
                'Smooth Stone': 900,
                'Glass': 3200
            },
            'Accent & Detail': {
                'Iron Blocks': 420,
                'Light Blue Concrete': 160,
                'Yellow Concrete': 60,
                'Stone Bricks': 800
            },
            'Lighting': {
                'Sea Lanterns': 65,
                'Redstone Lamps': 8,
                'Torches': 80
            },
            'Functional Items': {
                'Waystones': 5,
                'Doors': 2,
                'Stairs': 30,
                'Iron Bars': 80,
                'Ladders': 50,
                'Trapdoors': 4,
                'Item Frames': 30,
                'Signs': 20
            }
        }
    }
};

// Initialize calculator
function initCalculator() {
    updateMaterialsList();
    loadProgress();
    attachEventListeners();
}

// Update materials list based on selected modules
function updateMaterialsList() {
    const selectedModules = getSelectedModules();
    const totalMaterials = calculateTotalMaterials(selectedModules);
    const totalTime = calculateTotalTime(selectedModules);
    
    // Update summary
    document.getElementById('total-materials').textContent = totalMaterials.toLocaleString();
    document.getElementById('total-time').textContent = `${totalTime} hrs`;
    document.getElementById('modules-count').textContent = selectedModules.length;
    
    // Update materials breakdown
    displayMaterialsBreakdown(selectedModules);
}

function getSelectedModules() {
    const checkboxes = document.querySelectorAll('.module-checkbox input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.id);
}

function calculateTotalMaterials(modules) {
    let total = 0;
    modules.forEach(moduleId => {
        const module = moduleMaterials[moduleId];
        if (module) {
            Object.values(module.materials).forEach(category => {
                Object.values(category).forEach(amount => {
                    total += amount;
                });
            });
        }
    });
    return total;
}

function calculateTotalTime(modules) {
    let total = 0;
    modules.forEach(moduleId => {
        const module = moduleMaterials[moduleId];
        if (module) {
            total += module.buildTime;
        }
    });
    return total;
}

function displayMaterialsBreakdown(modules) {
    const container = document.getElementById('materials-list');
    container.innerHTML = '';
    
    if (modules.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Select a module to see material requirements</p>';
        return;
    }
    
    // Combine materials from all selected modules
    const combinedMaterials = {};
    
    modules.forEach(moduleId => {
        const module = moduleMaterials[moduleId];
        if (module) {
            Object.entries(module.materials).forEach(([category, items]) => {
                if (!combinedMaterials[category]) {
                    combinedMaterials[category] = {};
                }
                Object.entries(items).forEach(([material, amount]) => {
                    combinedMaterials[category][material] = 
                        (combinedMaterials[category][material] || 0) + amount;
                });
            });
        }
    });
    
    // Display combined materials
    Object.entries(combinedMaterials).forEach(([category, items]) => {
        // Category header
        const header = document.createElement('div');
        header.className = 'material-category-header';
        header.textContent = category;
        container.appendChild(header);
        
        // Material items
        Object.entries(items).forEach(([material, amount]) => {
            const item = document.createElement('div');
            item.className = 'material-item';
            item.innerHTML = `
                <span class="material-name">${material}</span>
                <span class="material-amount">${amount.toLocaleString()}</span>
            `;
            container.appendChild(item);
        });
    });
}

// Progress tracking
function updateProgress() {
    const checkboxes = document.querySelectorAll('.phase-check');
    const total = checkboxes.length;
    const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent = `${percentage}% Complete`;
    
    // Save progress to localStorage
    saveProgress();
}

function saveProgress() {
    const progress = {};
    document.querySelectorAll('.phase-check').forEach(checkbox => {
        progress[checkbox.dataset.phase] = checkbox.checked;
    });
    localStorage.setItem('buildProgress', JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem('buildProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            Object.entries(progress).forEach(([phase, checked]) => {
                const checkbox = document.querySelector(`[data-phase="${phase}"]`);
                if (checkbox) {
                    checkbox.checked = checked;
                }
            });
            updateProgress();
        } catch (e) {
            console.error('Failed to parse saved progress:', e);
            localStorage.removeItem('buildProgress');
        }
    }
}

// Export functions
function exportAsText() {
    const modules = getSelectedModules();
    let text = '=== ATM10 BASE BUILD - MATERIAL LIST ===\n\n';
    text += `Generated: ${new Date().toLocaleDateString()}\n`;
    text += `Modules: ${modules.map(m => moduleMaterials[m].name).join(', ')}\n\n`;
    
    modules.forEach(moduleId => {
        const module = moduleMaterials[moduleId];
        text += `\n--- ${module.name.toUpperCase()} ---\n`;
        text += `Build Time: ${module.buildTime} hours\n\n`;
        
        Object.entries(module.materials).forEach(([category, items]) => {
            text += `${category}:\n`;
            Object.entries(items).forEach(([material, amount]) => {
                text += `  - ${material}: ${amount}\n`;
            });
            text += '\n';
        });
    });
    
    // Create download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'atm10-materials.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function printList() {
    window.print();
}

function saveProgressData() {
    saveProgress();
    if (typeof showToast === 'function') {
        showToast('Progress saved to browser storage!');
    }
}

function resetAll() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('buildProgress');
        document.querySelectorAll('.phase-check').forEach(cb => cb.checked = false);
        updateProgress();
    }
}

// Attach event listeners
function attachEventListeners() {
    // Module selection
    document.querySelectorAll('.module-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateMaterialsList);
    });
    
    // Progress tracking
    document.querySelectorAll('.phase-check').forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    
    // Export buttons (with null checks)
    const exportTxt = document.getElementById('export-txt');
    const exportPrint = document.getElementById('export-print');
    const saveProgressBtn = document.getElementById('save-progress');
    const resetAllBtn = document.getElementById('reset-all');

    if (exportTxt) exportTxt.addEventListener('click', exportAsText);
    if (exportPrint) exportPrint.addEventListener('click', printList);
    if (saveProgressBtn) saveProgressBtn.addEventListener('click', saveProgressData);
    if (resetAllBtn) resetAllBtn.addEventListener('click', resetAll);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initCalculator);
