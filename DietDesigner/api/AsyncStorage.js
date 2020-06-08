import { AsyncStorage } from 'react-native';
import { any } from 'prop-types';

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
        
    }
};

let clearData = async(type) => {
    AsyncStorage.removeItem(type);
}; 

let deleteItem = async(type, object) => {
    let currValue = await AsyncStorage.getItem(type);
    currValue = currValue.split('#');
    currValue.splice(currValue.indexOf(JSON.stringify(object)), 1);

    await AsyncStorage.setItem(type, currValue.join('#'));
}

let replaceItem = async(type, object, newobject) => {
    let currValue = await AsyncStorage.getItem(type);
    currValue = currValue.split('#');
    currValue.splice(currValue.indexOf(JSON.stringify(object)), 1, JSON.stringify(newobject));
    
    await AsyncStorage.setItem(type, currValue.join('#'));
}   

let retrieveData = async (type) => {
    // cart/wishlist
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

export {retrieveData, storeData, clearData, deleteItem, replaceItem};