document.addEventListener('DOMContentLoaded', function() {
    const birthdateElement = document.getElementById('birthdate');
    const timeUnitElement = document.getElementById('timeUnit');
    const chart = document.querySelector('.chart');
    const labelsTopContainer = document.querySelector('.labels-top-container');
    const labelsLeftContainer = document.querySelector('.labels-left-container');

    function generateTopLabels() {
        labelsTopContainer.innerHTML = '';
        for (let i = 0; i <= 50; i += 5) {
            const label = document.createElement('div');
            label.className = 'week-label';
            label.textContent = i;
            labelsTopContainer.appendChild(label);
        }
    }

    function generateLeftLabels() {
        labelsLeftContainer.innerHTML = '';
        for (let i = 0; i <= 90; i += 5) {
            const label = document.createElement('div');
            label.className = 'age-label';
            label.textContent = i;
            labelsLeftContainer.appendChild(label);
        }
    }

    function updateChart() {
        const birthdate = birthdateElement.value ? new Date(birthdateElement.value) : new Date();
        const today = new Date();
        const unit = timeUnitElement.value;
        let totalUnits = 52 * 90; // 52 weeks for 90 years
        const yearsPassed = today.getFullYear() - birthdate.getFullYear();
        let unitsPassed = yearsPassed * 52; // Convert years to weeks

        if (unit === 'months') {
            unitsPassed = Math.floor(unitsPassed / 12); // Convert weeks to months
        } else if (unit === 'years') {
            unitsPassed = yearsPassed; // Display years directly
        }

        chart.innerHTML = '';
        for (let i = 0; i < totalUnits; i++) {
            const unitSquare = document.createElement('li');
            unitSquare.className = i < unitsPassed ? 'passed' : '';
            chart.appendChild(unitSquare);
        }
    }

    birthdateElement.addEventListener('change', updateChart);
    timeUnitElement.addEventListener('change', updateChart);

    generateTopLabels();
    generateLeftLabels();
});
