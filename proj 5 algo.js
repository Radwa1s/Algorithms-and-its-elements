const numOf = 'code into JavaScript';
function countcharacters(string){
    return string.length;
}
    console.log(countcharacters(numOf));

    

const numOf = 'code into JavaScript';
function countwords(string){
    return string.split(' ').length;
}  
    console.log(countwords(numOf));




const numOf = 'code into JavaScript';
function countVowels(string) {
     return  string.match(/[aeiou]/gi).length;
}
     console.log(countVowels(numOf));