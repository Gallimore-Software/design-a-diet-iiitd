const foodRoutes = (app, fs) => {

    // variables
    const dataPath = './data/foods.json';

    // READ
    app.get('/food', async (req, res) => {
        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // query
    app.get('/food/:query', async (req, res)=>{
        const q =  await req.params.query;

        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const foods = JSON.parse(data);
            let response = [];
            for (const name of foods) {
                if (name["name"].includes(q)) {
                    response.push(name);
                }
            }

            res.send((response));

        });
    })
};

module.exports = foodRoutes;