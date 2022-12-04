'use strict';

const { Contract } = require('fabric-contract-api');


class MyContract extends Contract {

    //update ledger with a greeting to show that the function was called
    async instantiate(ctx) {
        let instantiate = { text: 'Instantiate was called!' };
        await ctx.stub.putState('INSTANTIATE', Buffer.from(JSON.stringify(instantiate)));
    }

    //take argument and create a car object to be updated to the ledger
    // vin stands for vehicle identification number
    async addACar(ctx, args) {
        let myCar = {
            vin: args.vin,
            make: arg.make,
            model: args.model,
            year: args.year,
            milage: args.milage,
            ownerFirstName: args.ownerFirstName,
            ownerLastName: args.ownerLastName
        };
        await ctx.stub.putState(vin, Buffer.from(JSON.stringify(myCar)));
        return JSON.stringify(myCar);
    }
    // look up car data by it's vin number
    async query(ctx, vin) {
        console.info('querying for the car by vin: ' + vin);
        let returnAsBytes = await ctx.stub.getState(vin);
        let result = JSON.parse(returnAsBytes);
        return JSON.stringify(result);
    }
    async add(ctx, vin, make, model, year, milage, ownerFirstName, ownerLastName) {
        console.info('addACar', vin, make, year, milage, ownerFirstName, ownerLastName);
        let myCar = {
            vin: vin,
            make: make,
            model: model,
            year: year,
            milage: milage,
            ownerFirstName: ownerFirstName,
            ownerLastName: ownerLastName
        };
        await ctx.stub.putState(vin, Buffer.from(JSON.stringify(myCar)));
        return JSON.stringify(myCar);
    }
}

module.exports = MyContract;
