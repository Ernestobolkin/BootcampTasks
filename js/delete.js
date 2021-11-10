const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterAsAKey = arr => {
    str = arr.join('');
    obj = {};
    for (let i = 0; i < str.length ; i++) {
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]]++;
        }
        else if (str[i] !== ' ') {
            obj[str[i]] = 1;
        }
    }
    return obj;
}

console.log(letterAsAKey(array));
