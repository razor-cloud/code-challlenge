function calculateNetSalary(basicSalary, benefits) {
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);
  
    let grossSalary = basicSalary + benefits;
  
    // Calculate PAYEE 
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    } else if (grossSalary <= 800000) {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((grossSalary - 500000) * 0.325);
    } else {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.3) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35);
    }
  
    // Calculate NHIF Deductions
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
  
    // Calculate NSSF Deductions
    let tier1 = 0;
    let tier2 = 0;
    if (grossSalary <= 7000) {
        tier1 = grossSalary * 0.06;
    } else {
        tier1 = 7000 * 0.06;
        if (grossSalary <= 43000) {
            tier2 = (grossSalary - 7000) * 0.06;
        } else {
            tier2 = 36000 * 0.06;
        }
    }
    let nssf = tier1 + tier2;
  
    // Calculate Housing Levy
    let housingLevy = grossSalary * 0.015;
  
    // Calculate Net Salary
    let netSalary = grossSalary - payee - nhif - nssf - housingLevy;
  
    console.log("Gross Salary:", grossSalary);
    console.log("PAYEE:", payee);
    console.log("NHIF:", nhif);
    console.log("NSSF:", nssf);
    console.log("Housing Levy:", housingLevy);
    console.log("Net Salary:", netSalary);
  }
  
  // input basic salary and benefits
  const basicSalary = 0; // Replace 0 with the actual value
  const benefits = 0; // Replace 0 with the actual value
  
  calculateNetSalary(basicSalary, benefits);