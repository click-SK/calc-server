import MainModel from '../model/Main.js';

export const create = async (req, res) => {
    try {
        const { emission, rate, air } = req.body;

        const allData = await MainModel.find();

        const emission_rate = emission * rate;

        let newBalans;

        let length = allData.length + 1;

        const calcFunc = (sum, interest, time) => {
            let totalSum =  sum;
            for(let i = 0; i <= time; i++) {
              totalSum = (sum * interest / time) + totalSum;
            }
            newBalans = totalSum;
          }

          calcFunc(emission_rate,air,365)

        const data = await MainModel.create({
            emission,
            rate,
            air,
            balans: newBalans
        })

        res.json(data);
    } catch (e) {
        console.log(e);
    }
}

export const getAll = async (req, res) => {
    try {
        const allData = await MainModel.find();
        res.json(allData);
    } catch (e) {
        console.log(e);
    }
}