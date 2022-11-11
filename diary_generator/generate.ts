import { PDFDocument } from 'pdf-lib'
import * as fs from 'fs';
import {differenceInCalendarMonths, differenceInDays} from 'date-fns'

const templateFile = fs.readFileSync('./template.pdf');
const startDate = new Date('2022-08-01');
const endDate = new Date('2022-10-31');

(async () => {
    const newDoc = await PDFDocument.create()
    const template = await PDFDocument.load(templateFile);

    const startPages = await newDoc.copyPages(template, [0,1,2,4,5])
    startPages.forEach((page) => newDoc.addPage(page));
    const newPDF = await newDoc.save();
    const diffMonths = differenceInDays(endDate, startDate);
    console.log('* ' + diffMonths + ' days to process.');
    for(let day = 0; day <= diffMonths; day++) {
        console.log('* Processing day #' + day);

    }

    fs.writeFileSync('out.pdf', newPDF);
})()
