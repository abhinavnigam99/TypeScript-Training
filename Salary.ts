var salary = (basic: number) => {
    var hra: number = 0.2 * basic;
    var da: number = 0.1 * basic;
    var trans: number = 750;
    var pf: number = 500;
    var tax: number = 0.12 * (basic + hra + da + trans) * 12;
    var ctc: number = (hra + da + basic - pf + trans) * 12 - tax;

    console.log('CTC : ' + ctc);
    console.log('Basic : ' + basic + '\n' + 'HRA : ' + hra + '\n' +
        'DA: ' + da + '\n' + 'Transport: ' + trans + '\n' +
        'PF: ' + pf + '\n' + 'Tax: ' + tax);
}

salary(5000);