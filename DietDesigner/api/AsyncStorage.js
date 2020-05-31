import { AsyncStorage } from 'react-native';

let _splitAndFormat = (data) => {
    // data is a string separated by #
    let json_data = data.split('#')
    json_data.forEach((item, index) => {
        json_data[index] = JSON.parse(item)
    })

    return json_data;
}


let storeData = async (type, object) => {
    // cart/wishlist , object to save
    let currValue = await AsyncStorage.getItem(type);
    if (currValue===null) {
        await AsyncStorage.setItem(type, JSON.stringify(object));
    }
    else {
        currValue = currValue.split('#');
        if (!currValue.includes(JSON.stringify(object))){
            currValue.splice(0, 0, JSON.stringify(object))
        }
        await AsyncStorage.setItem(type, currValue.join('#'));
        
        // console.log(currValue)
    }
};

let clearData = async(type) => {
    AsyncStorage.removeItem(type);
}; 


let retrieveData = async (type) => {
    // cart/witshlist
    try {
        const value = await AsyncStorage.getItem(type);
        if (value !== null) {
            // console.log(value);
            let jsonData = _splitAndFormat(value);
            return jsonData;
        }
        return [];
    } catch (error) {

        // Error retrieving data
        console.log(error);
        
    }
};

export {retrieveData, storeData, clearData};