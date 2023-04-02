import Notiflix from 'notiflix';
import { PixabayApi } from './api';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const formEl = document.querySelector(`.search-form`);
const formElBtn = document.querySelector(`.search-form button`);
const galleryEl = document.querySelector(`.gallery`);
const pixabayApi = new PixabayApi();

// console.log short function.
const cl = a => {
  console.log(a);
};

cl(formEl);
cl(formElBtn);
cl(galleryEl);
cl(pixabayApi);
cl(pixabayApi.page);

const cleanMarkup = ref => (ref.innerHTML = '');

const inputHandler = e => {
  const textInput = e.target.value.trim();

  if (!textInput) {
    cleanMarkup(listEl);
    cleanMarkup(infoEl);
    return;
  } else
    fetchCountries(textInput)
      .then(data => {
        console.log(data);
        if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name'
          );
          return;
        }
        renderMarkup(data);
      })
      .catch(err => {
        cleanMarkup(listEl);
        cleanMarkup(infoEl);
        Notify.failure('Oops, there is no country with that name');
      });
};

//kodowanie

// const options = {
//   root: null,
//   rootMargin: '0px 0px 100px 0px',
//   threshold: 1,
// };

//

// const userList = document.querySelector('.user-list');
// console.log(userList);

// formElBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }

formEl.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));
