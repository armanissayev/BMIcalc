const express = require('express');
const router = express.Router();

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi, age) {
    if (age < 18) {
        return 'For individuals under 18, BMI categories vary by age and gender. Please consult a pediatrician.';
    } else if (age >= 65) {
        if (bmi < 22) return 'Underweight';
        if (bmi < 27) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    } else {
        if (bmi < 18.5) return 'Underweight';
        if (bmi < 25) return 'Normal weight';
        if (bmi < 30) return 'Overweight';
        return 'Obese';
    }
}

function getBMIColor(category) {
    switch (category) {
        case 'Underweight': return 'bg-blue-100';
        case 'Normal weight': return 'bg-green-100';
        case 'Overweight': return 'bg-yellow-100';
        case 'Obese': return 'bg-red-100';
        default: return 'bg-gray-100';
    }
}

function getHealthAdvice(bmi, age, gender, activity) {
    let advice = '';
    if (age < 18) {
        advice = 'For individuals under 18, health advice should be obtained from a pediatrician.';
    } else {
        if (bmi < 18.5) {
            advice = 'You may need to gain some weight. Consider consulting a nutritionist for a balanced diet plan.';
        } else if (bmi >= 25) {
            advice = 'You might benefit from losing some weight. Consider increasing your physical activity and maintaining a balanced diet.';
        } else {
            advice = 'You are in a healthy weight range. Keep up your good habits!';
        }

        if (age >= 65) {
            advice += ' For older adults, maintaining muscle mass is crucial. Consult with a healthcare provider for personalized advice.';
        }

        if (activity === 'low') {
            advice += ' Consider increasing your physical activity for better overall health.';
        } else if (activity === 'high') {
            advice += ' Ensure you\'re getting adequate nutrition to support your high activity level.';
        }
    }
    return advice;
}

router.post('/', (req, res) => {
    const { height, weight, gender, age, activity } = req.body;

    if (!height || !weight || !age) {
        return res.status(400).json({ error: 'Height, weight, and age are required' });
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi, age);
    const color = getBMIColor(category);
    const healthAdvice = getHealthAdvice(bmi, age, gender, activity);

    const response = {
        bmi: bmi.toFixed(2),
        category,
        color,
        healthAdvice,
        details: `Your BMI is calculated as: weight(${weight} kg) / (height(${height/100} m))² = ${bmi.toFixed(4)}`
    };

    res.json(response);
});

module.exports = router;
