const foodRoutes = (app, fs) => {

    // variables
    const dataPath = './data/foods.json';
    const imagePath = './data/json_out.json';
    const imgFile = './data/img-data.csv';
    const recipeFile = './data/recipe3.json';
    const levenshtein = require('js-levenshtein');

    // READ
    app.get('/food',  async (req, res) => {
        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
        
        
    });

    app.get('/images',  async (req, res) => {
        await fs.readFile(imagePath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
        
        
    });

    // recipes
    app.get('/recipes/:query', async (req, res)=>{
        const qu =  await req.params.query; // array
        // const q = await JSON.parse(qu)
        console.log(qu)

        // try{
        await fs.readFile(recipeFile, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            let array = JSON.parse(data);
            let ans = [];
            for (let i of array) {
                // console.log(i)
                
                // res.send()
                // break;
                for (let j in i) {
                    let points = 0;
                    // console.log(j, i[j])
                    for (let k in i[j].ingredients) {
                        if (qu.includes(i[j].ingredients[k]) && i[j].ingredients[k] != '') {
                            points ++;
                            

                        }
                    }
                    if (points >= 1) {
                        ans.push({'name':j,'ingredients':i[j].ingredients,'process':i[j].process, 'utensils':i[j].utensils, 'image':i[j].image, 'points':points, 'steps': i[j].steps})
                    }
                    // if (qu.includes(i[j].ingredients)) {
                        // console.log(i[j]);
                    // }
                }
            }

            ans.sort((a, b) => {
                return (
                    b.points-a.points
                )
            })
            console.log('done');
            res.send(ans);
        });
        // res.send([])
    } )



    // recommendations
    app.get('/recs/:query', async(req, res)=>{
        const q =  await req.params.query;
        await fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            let array = JSON.parse(data);
            let ans = [];
            array.forEach((item)=>{
                ans.push([levenshtein(item.name, q), item.name, JSON.stringify(item.nutrients), item.calories, item.carbohydrates, item.fat, item.image]);
            })
            
            ans.sort();

            ans = ans.map((item)=>{return { name: item[1], nutrients: JSON.parse(item[2]), calories: item[3], carbohydrates: item[4], fat: item[5]}})
            res.send(ans);
        });
    } )


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