export function formatMoney(pennies){
    pennies = parseFloat(pennies);

    if(isNaN(pennies)){
        return 'TBA';
    }

    const dollars = (pennies/100).toFixed(2);

    return `$${dollars}`; // There is 2 $'s because 1 will display and the other is the way template literal works

}