

var molecule1 = 'H2O';
var molecule2 = 'Mg(OH)2';
var molecule3 = 'K4[ON(SO3)2]2';

function atomCounter(molecule){
  var splitedMolecule =  molecule.split('');
  var insertMolecule  = [];
  formatInsertMolecule(splitedMolecule, insertMolecule);
  var atoms = {}
  insertMolecule.forEach(function(elem, index){
    formatAtomOuput(insertMolecule, elem, index, atoms)
  });
  return atoms
}

function formatInsertMolecule(splitedMolecule, insertMolecule){
  var fillPrev = false;
  splitedMolecule.forEach(function(elem, index){
    if (/[(]/.test(elem)){
      insertMolecule.push([]);
      fillPrev = true;
    } else if (/[)]/.test(elem)){
      fillPrev = false;
    } else if (fillPrev === true) {
      var prevIndex = insertMolecule.length -1
      insertMolecule[prevIndex].push(elem);
    } else if (/[A-Z]/.test(elem)) {
      insertMolecule.push([elem]);
    } else if (/[a-z]/.test(elem)) {
      var prevIndex = insertMolecule.length -1
      insertMolecule[prevIndex] = [insertMolecule[prevIndex] + elem] ;
    } else if (/[1-9]/.test(elem)) {
      var prevIndex = insertMolecule.length -1
      insertMolecule[prevIndex] = [insertMolecule[prevIndex], 2] ;
    }
  });
}

function formatAtomOuput(insertMolecule, elem, index, atoms){
  if (elem.length === 1) {
    atoms[elem[0]] = 1;
  } else {
    elem[0].forEach(function(el){
      atoms[el] = elem[1];
    })
  }
}




// execution
var result = atomCounter(molecule2);
console.log(result);
