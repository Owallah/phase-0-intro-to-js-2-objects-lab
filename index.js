// Write your solution in this file!
const employee = {
    name: "Johnson",
    streetAddress: "Ngong rd",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{
        ...obj,
        [key]:value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    // const newObj = {...obj};
    
    return delete {...obj},[key];
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}