export async function filter(dogsShow, lifeSpan, size) {
    let dFiltLS = [];
    if (lifeSpan[0]) {
        dFiltLS = dFiltLS.concat(filterLifeSpan(dogsShow, 0, 8));
    };
    if (lifeSpan[1]) {
        dFiltLS = dFiltLS.concat(filterLifeSpan(dogsShow, 9, 12));
    };
    if (lifeSpan[2]) {
        dFiltLS = dFiltLS.concat(filterLifeSpan(dogsShow, 13));
    };    
    dFiltLS = [...new Set(dFiltLS)];
    if (dFiltLS.length === 0) {
        dFiltLS = [...dogsShow];
    };
    let dFiltS = [];
    if (size[0]) {
        dFiltS = dFiltS.concat(filterSize(dFiltLS, "Toy"));
    };
    if (size[1]) {
        dFiltS = dFiltS.concat(filterSize(dFiltLS, "Small"));
    };
    if (size[2]) {
        dFiltS = dFiltS.concat(filterSize(dFiltLS, "Medium"));
    };
    if (size[3]) {
        dFiltS = dFiltS.concat(filterSize(dFiltLS, "Large"));
    };
    dFiltS = [...new Set(dFiltS)];
    if (dFiltS.length === 0) {
        dFiltS = [...dFiltLS];
    };
    return dFiltS;
};
  
function filterSize(dogs, size) {
    const filterDogs = dogs.filter((dog)=> {
        if (size && dog.size !== size) {
          return false;
        };
        return true;
    });
    return filterDogs;
};

function filterLifeSpan(dogs, min, max) {
    const filterDogs = dogs.filter((dog) => {
        const [minLS, maxLS] = dog.lifeSpan && dog.lifeSpan.includes('-') ? dog.lifeSpan.split(' - ').map((age) => Number(age.replace(/\D/g, ''))) : [0, 0];
        return minLS <= max && maxLS >= min;
    });
    return filterDogs;
};
