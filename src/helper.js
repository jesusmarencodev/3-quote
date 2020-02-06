//get the diference in years
export function getDiferenceYears(year){
    return new Date().getFullYear() - year;
}
//calculate the total to pay according to the brand
export function calculateBrand(brand){
    let increase;

    switch(brand){
        case 'European':
            increase = 1.30;
            break;
        case 'American':
            increase = 1.15;
            break;
        case 'Asian':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;
}
//calculate the plan increase
export function calculatePlan(plan){
    return (plan === 'basic') ? 1.20 : 1.50;
}
//Show the first capital letter
export function firstCapitalLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}