const Cards = (veriler) => {
  const charactersDivJs = document.createElement("div");
  const box = document.createElement("div");
  const boxChild = document.createElement("div");
  const imgChar = document.createElement("img");
  const pName = document.createElement("div");
  const pNameHead = document.createElement("span");
  const pNameText = document.createElement("span");
  const height = document.createElement("div");
  const heightHead = document.createElement("span");
  const heightText = document.createElement("span");
  const mass = document.createElement("div");
  const massHead = document.createElement("span");
  const massText = document.createElement("span");
  const pGender = document.createElement("div");
  const pGenderHead = document.createElement("span");
  const pGenderText = document.createElement("span");
  const species = document.createElement('div');
  const speciesHead = document.createElement('span');
  const speciesText = document.createElement('span');
  const masters = document.createElement('div');
  const mastersHead = document.createElement('span');
  const mastersText = document.createElement('span');
  const deathLocation = document.createElement('div');
  const deathLocationHead = document.createElement('span');
  const deathLocationText = document.createElement('span');

  charactersDivJs.classList.add("characters");
  box.classList.add("box");
  boxChild.classList.add("boxChild");
  pNameHead.classList.add("boldStyle");
  heightHead.classList.add("boldStyle");
  massHead.classList.add("boldStyle");
  pGenderHead.classList.add("boldStyle");
  speciesHead.classList.add("boldStyle")
  mastersHead.classList.add("boldStyle")
  deathLocationHead.classList.add("boldStyle");

  imgChar.src = veriler.image ;
  pNameHead.textContent = veriler.name && "Name : ";
  pNameText.textContent = veriler.name;
  heightHead.textContent = veriler.height && "Height : ";
  heightText.textContent = veriler.height;
  massHead.textContent = veriler.mass && "Mass : ";
  massText.textContent = veriler.mass;
  pGenderHead.textContent = veriler.gender && "Gender : ";
  pGenderText.textContent = veriler.gender;
  speciesHead.textContent = veriler.species && "Species : ";
  speciesText.textContent = veriler.species;
  mastersHead.textContent = veriler.masters && "Masters : ";
  mastersText.textContent = veriler.masters
  deathLocationHead.textContent = veriler.diedLocation && "Death Location : ";
  deathLocationText.textContent = veriler.diedLocation ;

  pName.append(pNameHead, pNameText);
  height.append(heightHead, heightText);
  mass.append(massHead, massText);
  pGender.append(pGenderHead, pGenderText);
  species.append(speciesHead, speciesText);
  masters.append(mastersHead, mastersText);
  deathLocation.append(deathLocationHead, deathLocationText);
  boxChild.append(pName, height, mass, pGender,species, masters,deathLocation);

  box.append(imgChar, boxChild);
  charactersDivJs.appendChild(box);

  return charactersDivJs;
};

// Cards();

const cardEkleyici = () => {
  axios
  .get("https://akabab.github.io/starwars-api/api/all.json")
  .then((res) => {
     console.log(res.data)
     
      res.data.forEach((e) => {
        let result = Cards(e)
        document.querySelector(".cards").appendChild(result)
      })
     })
  
}

cardEkleyici();

