// 3. Destructuring Objects 
const personalInformation = {
    firstname: 'Dylan',
    lastNAme: 'Israel',
    city : 'Austin',
    state : 'Texas',
    zipcode : 73301
};
 
const {firstname: fn, lastNAme: ln} = personalInformation;

console.log(`${fn} ${ln}`);