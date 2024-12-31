//step 1 Fetch and load categories



//1.create loadCategories
const handleLoadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
    
};

const pets=[];
console.log(pets)
//3 load all the pets
const handleLoadAllPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPets(data.pets))
    
    .catch((error) => console.log(error));

   
    
};
// 6 remove active class function
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("btn-category");
  for (btn of buttons) {
    btn.classList.remove("active-btn");
  }
};

// 5. load all category function
const loadPetsByCategory = (categoryName) => {
  fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
  )
    .then((res) => res.json())
    .then((data) => {
      // remove active class
      removeActiveClass();

      
      

      // again add active class
      const activeBtn = document.getElementById(`btn-${categoryName}`);
      activeBtn.classList.add("active-btn");
      
      displayAllPets(data.data);
    })

    .catch((error) => console.log(error));

    
};

//6 loading Details
const loadDetails = async (petId) => {
  const petsUrl = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(petsUrl);
  const data = await res.json();

  displayDetails(data);
};
//7. display details
const displayDetails = (petData) => {
  console.log(petData.petData);
  const detailContainer = document.getElementById("detailsModalContent");
  document.getElementById("detailsModal").showModal();
  detailContainer.classList = "card w-90";
  detailContainer.innerHTML = `
  <figure class="px-5 pt-5">
              <img
                src=${petData.petData.image}
                class="rounded-xl  h-46 w-full" />
            </figure>
            <div class="card-body text-left">
              <h2 class="card-title">${
                petData.petData.pet_name ? petData.petData.pet_name : "Unknown"
              }</h2>
              <div class="flex gap-4">
                <!-- 1st -->
                <div>
                  <div class="flex items-center gap-2">
                    <img src="icon/breed.png" alt="">
                      <p>Breed: ${petData.petData.breed ? petData.petData.breed : "Unknown"}</p>
    
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <img src="icon/gender.png" alt="">
    
                    <p>Gender:${
                      petData.petData.gender ?petData.petData.gender : "Gender is not Available"
                    }</p>
    
                  </div>
                  <div class="flex items-center gap-2">
    
                    <img src="icon/gender.png" alt="">
    
                    <p>Vaccinated status:  ${
                      petData.petData.vaccinated_status
                      ? petData.petData.vaccinated_status
                      : "Unknown"
                    }</p>
    
                  </div>

                </div>
                <!-- 2nd -->
                 <div>
                  <div class="flex items-center gap-2">
                    <img src="icon/birth.png" alt="">
                    <p>Birth:${
                      petData.petData.date_of_birth
                        ? petData.petData.date_of_birth
                        : "Date of birth is unknown"
                    }</p>
                  </div>

                  <div class="flex items-center gap-2">
    
                    <img src="icon/price.png" alt="">
    
                    <p>Price : ${
                      petData.petData.price ? petData.petData.price : "price is not available"
                    }</p>
    
                  </div>


                 </div>

              </div>
              <hr>
              <!-- details div -->
              <div>
                <h4 class="text-lg font-semibold">Details Information</h4>
                <p>${
                  
                  petData.petData.pet_details
                  ? petData.petData.pet_details
                  : "Details not available"
                }</p>

              </div>
              
            </div>


  



  `;
};
// 8 load adopted Modal
const loadAdoptedInfo = async (petId) => {
  const petsUrl = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(petsUrl);
  const data = await res.json();
  displayAdoptedInfo(data);
};
// 9 display adopted Modal
const displayAdoptedInfo = (petData) => {
  console.log(petData);
  const detailContainer = document.getElementById("adoptedModalContent");
  document.getElementById("adoptedModal").showModal();
  detailContainer.innerHTML = `
  
  



  `;
};

//10 load liked pets
const loadLikedPets = async (petId) => {
  const petsUrl = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(petsUrl);
  const data = await res.json();
  displayLikedPets(data);
};
// 11 display liked pets
const displayLikedPets=(petData)=>{
  
  console.log(petData.petData.petId)
  const likedPetsContainer =document.getElementById("aside")
  const div=document.createElement('div')
  

  div.innerHTML=`
   <img class="border rounded-lg p-2" src=${petData.petData.image} alt="">
  
  `
  likedPetsContainer.append(div)

  const likeIcon =document.getElementById(`like-icon${petData.petData.petId}`)
  
  likeIcon.setAttribute('fill','blue')
  likeIcon.removeAttribute('fill','none')

  
}



//4 display the pets
const displayAllPets = (allPets) => {

 
  
  const petCardsContainer = document.getElementById("pet-cards");
  

  petCardsContainer.innerHTML = `
    
    `;

  if (allPets.length == 0) {
    petCardsContainer.classList.remove("grid");
    petCardsContainer.innerHTML = `
      <div class="text-center flex items-center justify-center flex-col bg-[#13131308] p-4 rounded-xl">
            <img class="" src="images/error.webp" alt="" />
      
            <h1 class="text-4xl font-bold">No Information Available</h1>
            <p class="text-sm mt-4">
              It is a long established fact that a reader will be distracted by the
              readable content of a page <br/> when looking at its layout. The point of
              using Lorem Ipsum is that it has a.
            </p>
          </div>
      
      `;
    return;
  } else {
    petCardsContainer.classList.add("grid");
  }
  allPets.forEach((pet) => {
     pets.push(pet)
    const div = document.createElement("div");
    div.classList = "card bg-base-100 w-90 shadow-xl";
    div.innerHTML = `
        
         <figure class="px-5 pt-5">
              <img
                src=${pet.image}
                class="rounded-xl  h-46 w-full" />
            </figure>
            <div class="card-body text-left">
              <h2 class="card-title">${
                pet.pet_name ? pet.pet_name : "Unknown"
              }</h2>
              <div class="flex items-center gap-2">
                <img src="icon/breed.png" alt="">
                  <p>Breed: ${pet.breed ? pet.breed : "Unknown"}</p>

              </div>
              <div class="flex items-center gap-2">
                <img src="icon/birth.png" alt="">
                <p>Birth:${
                  pet.date_of_birth
                    ? pet.date_of_birth
                    : "Date of birth is unknown"
                }</p>
              </div>
              <div class="flex items-center gap-2">
                <img src="icon/gender.png" alt="">

                <p>Gender:${
                  pet.gender ? pet.gender : "Gender is not Available"
                }</p>

              </div>
              <div class="flex items-center gap-2">

                <img src="icon/price.png" alt="">

                <p>Price : ${
                  pet.price ? pet.price : "price is not available"
                }</p>

              </div>
              <hr>
              <div class="card-actions flex justify-between">
                <button onclick="loadLikedPets(${
                  pet.petId
                })" id="liked-btn" class="btn">
                  
                
                
              <svg class="" id=like-icon${pet.petId} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.5275 8.54163C6.19917 8.54163 6.805 8.16996 7.22 7.64163C7.86688 6.81631 8.67893 6.13511 9.60417 5.64163C10.2067 5.32163 10.7292 4.84496 10.9817 4.21246C11.159 3.76933 11.2501 3.29642 11.25 2.81913V2.29163C11.25 2.12587 11.3159 1.96689 11.4331 1.84968C11.5503 1.73247 11.7092 1.66663 11.875 1.66663C12.3723 1.66663 12.8492 1.86417 13.2008 2.2158C13.5525 2.56743 13.75 3.04435 13.75 3.54163C13.75 4.50163 13.5333 5.41079 13.1475 6.22329C12.9258 6.68829 13.2367 7.29163 13.7517 7.29163M13.7517 7.29163H16.3567C17.2117 7.29163 17.9775 7.86996 18.0683 8.72079C18.1058 9.07246 18.125 9.42913 18.125 9.79163C18.1284 12.0719 17.3492 14.2843 15.9175 16.0591C15.5942 16.4608 15.095 16.6666 14.58 16.6666H11.2333C10.8308 16.6666 10.43 16.6016 10.0475 16.475L7.4525 15.6083C7.07009 15.4811 6.66968 15.4164 6.26667 15.4166H4.92M13.7517 7.29163H11.875M4.92 15.4166C4.98917 15.5875 5.06417 15.7541 5.145 15.9183C5.30917 16.2516 5.08 16.6666 4.70917 16.6666H3.9525C3.21167 16.6666 2.525 16.235 2.30917 15.5266C2.02054 14.5793 1.87422 13.5944 1.875 12.6041C1.875 11.31 2.12084 10.0741 2.5675 8.93913C2.8225 8.29413 3.4725 7.91663 4.16667 7.91663H5.04417C5.4375 7.91663 5.665 8.37996 5.46084 8.71663C4.74908 9.88825 4.37369 11.2332 4.37584 12.6041C4.37584 13.5991 4.56917 14.5483 4.92084 15.4166H4.92Z" stroke="#131313" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></button>
                <button onclick="loadAdoptedInfo(${
                  pet.petId
                })"  class="btn">Adopt</button>
                <button onclick="loadDetails(${
                  pet.petId
                })"  class="btn" >Details</button>
              </div>
            </div>
        
        `;
    petCardsContainer.append(div);
  });
};

// // sorting section
// const sortByPrice=()=>{
 
// pets.sort((p , q)=>console.log(p,q))
// displayAllPets(pets)

 

// }
// // sort btn
// document.getElementById('sort-btn').addEventListener('click',sortByPrice())




//2.create displayCategories
const displayCategories = (categories) => {
  
  const categoryBtnSection = document.getElementById("categories");
  categories.forEach((element) => {
    // create btn
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
     <button id='btn-${element.category}' onclick="loadPetsByCategory('${element.category}')" class="btn btn-category">
     <div class="flex items-center justify-center gap-2 category-btn">
            <img class="w-6" src=${element.category_icon} >
            <p>${element.category}</p>
            
          </div>

      </button>
    `;

    // add btn to category section
    categoryBtnSection.append(buttonContainer);
  });
};

handleLoadCategories();
handleLoadAllPets();

// btn er kaj step 2 te
