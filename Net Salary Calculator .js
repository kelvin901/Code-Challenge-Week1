const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter basic salary: ', basicSalary => {
    readline.question('Enter benefits: ', benefits => {
      const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);
      let nhifDeduction = 0;
      let nssfDeduction = 0;
      let payeTax = 0;
      
      // Calculate NHIF deduction based on gross salary
      if (grossSalary <= 5999) {
        nhifDeduction = 150;
      } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
      } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
      } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
      } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
      } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
      } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
      } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
      } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
      } else {
        nhifDeduction = 1000;
      }
      
      // Calculate NSSF deduction based on pensionable pay
      if (basicSalary <= 6000) {
        nssfDeduction = basicSalary * 0.06;
      } else if (basicSalary <= 18000) {
        nssfDeduction = basicSalary * 0.06 + (basicSalary - 6000) * 0.06;
      } else {
        nssfDeduction = basicSalary * 0.06 + 720;
      }
      
      // Calculate PAYE tax based on gross salary
      if (grossSalary <= 24000) {
        payeTax = grossSalary * 0.1;
      } else if (grossSalary <= 288000) {
        payeTax = 2400 + (grossSalary - 24000) * 0.25;
      } else {
        payeTax = 58200 + (grossSalary - 288000) * 0.3;
      }
      
      const netSalary = grossSalary - nhifDeduction - nssfDeduction - payeTax;
      
      console.log(`Gross salary: ${grossSalary.toFixed(2)}`);
      console.log(`NHIF deduction: ${nhifDeduction.toFixed(2)}`);
      console.log(`NSSF deduction: ${nssfDeduction.toFixed(2)}`);
      console.log(`PAYE tax: ${payeTax.toFixed(2)}`);
      console.log(`Net salary: ${netSalary.toFixed(2)}`);
      
      readline.close();
    });
  });
  