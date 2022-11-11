import axios from 'axios';
import * as csv from 'csv';

const url = 'https://api.hey.car/search/count';

(async () => {
    const {data} = await axios.get(url);
    const models = data.aggregations.model;

    const results = [];

    models.forEach((model) => {
        results.push({
            make: model.make,
            model: model.key,
            trim: '',
            count: model.count
        })
        if(model.trimsPerModel) {
            model.trimsPerModel.forEach((trim) => {
                results.push({
                    make: model.make,
                    model: model.key,
                    trim: trim.displayName,
                    count: trim.count
                })
            })
        }
    })

    const stringifier = csv.stringify({
        delimiter: ';',
        header: true,
        columns: ['make', 'model', 'trim', 'amount']
    });

    results.forEach((res) => {
        stringifier.write([res.make, res.model, res.trim, res.count]);
    })

    let data2 = [];

    stringifier.on('finish', function(){
        console.log(data2.toString())
    });

    stringifier.on('readable', function(){
        let row;
        while((row = stringifier.read()) !== null){
            data2.push(row);
        }
    });


    stringifier.end();

})();
