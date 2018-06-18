var salary = function (basic) {
    var hra = 0.2 * basic;
    var da = 0.1 * basic;
    var trans = 750;
    var pf = 500;
    var tax = 0.12 * (basic + hra + da + trans) * 12;
    var ctc = (hra + da + basic - pf + trans) * 12 - tax;
    console.log('CTC : ' + ctc);
    console.log('Basic : ' + basic + '\n' + 'HRA : ' + hra + '\n' +
        'DA: ' + da + '\n' + 'Transport: ' + trans + '\n' +
        'PF: ' + pf + '\n' + 'Tax: ' + tax);
};
salary(5000);
