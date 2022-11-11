import axios from "axios";

const options = {
    method: 'POST',

};

const query = `
query getOffers($q: JSON) {
    getOffers(q: $q) {
        metadata {
            page
            limit
            pageCount
            totalCount
            sortedFilter
            sortedFilterHash
        }
        records {
            vehicleId
            offerID
            make
            model
            mileage
            power
            firstRegistration
            variant
            fuel
            consumptionUnit
            consumptionCombined
            co2
            emissionClass
            price
            image
            monthlyInstallment
            gearbox
            condition
            category
            exteriorColor
            cubicCapacity
            fourWheelDrive
            datePublished
            supplier
            images
            vin
        }
    }
}
`;


(async function () {
    // warmup
    await axios({
        method: 'post',
        url: 'http://0.0.0.0:3020/',
        data: {
            variables: {q: {}},
            operationName: 'getOffers',
            query
        }
    })
    console.log('warmed up.')
    const started = new Date().getTime();
    for(let i = 0; i !== 1000; i++) {
        await axios({
                method: 'post',
                url: 'http://0.0.0.0:3020/',
                data: {
                    variables: {q: {}},
                    operationName: 'getOffers',
                    query
                }
            })
    }
    const ended = new Date().getTime();
    const took = ended - started;
    console.log(took)
})()
