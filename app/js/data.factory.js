/* Global data */

//Default student data
var localStudentData = [{
        name: 'Sudsy McDerman',
        score: 64.00
    }, {
        name: 'Boxtrod Folly',
        score: 100.00
}];

//Test localStorage
var localStorageBool = false;
if(typeof(window.Storage) !== "undefined"){
    localStorageBool = true;
}

/* ---- Uncomment line below to clear localStorage variable ---- */
//localStorage.removeItem('studentData');




