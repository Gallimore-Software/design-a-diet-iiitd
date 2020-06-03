const foodRoutes = (app, fs) => {

    // variables
    const dataPath = './data/foods.json';
    const imgFile = './data/img-data.csv';
    const csv = require('neat-csv');

    // READ
    app.get('/food',  async (req, res) => {
        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
        
        
    });

    app.get('/images', async(req, res)=>{
        await fs.readFile(imgFile, 'utf8', async (err, data) => {
            let response = [];
            let d = await csv(data)
            d.forEach((i)=>{
                response.push({"name":i.new_name, "url":i.wikiimage})
            })

            res.send(response);
        });
        
        
    })

    // query
    app.get('/food/:query', async (req, res)=>{
        const q =  await req.params.query;

        await fs.readFile(dataPath, 'utf8', async (err, data) => {
            if (err) {
                throw err;
            }

            const foods = await JSON.parse(data);
            let response = [];
            for (const name of foods) {
                if (name["name"].includes(q)) {
                    response.push(name);
                }
            }
            res.send((response));
        });

    })

    // recommended ingredients
    app.get('/ingredients', async (req, res)=>{

        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const foods = JSON.parse(data);
            let key = [...foods.keys()];
            let index = key.sort(() => Math.random() - Math.random()).slice(0, 10);
            let response = [];
            index.forEach((index)=>{
                response.push(foods[index])
            })

            res.send((response));

        });
    })

};

module.exports = foodRoutes;