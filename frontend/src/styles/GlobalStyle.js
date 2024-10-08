// import {createGlobalStyle} from 'styled-components'

// export const createGlobalStyle = createGlobalStyle `
// *{
// margin: 0;
// padding: 0;
// box-sizing: border-box;
// list-style:none;
// }

// :root{
// --primary-color:#222260;
// --primary-color2:'color:rgba(34,34,96, .6)'
// --primary-color3:rgba(34,34,96, .4)';
// --color-green:#42AD00;
// --color-grey:#aaa;
// --color-accent:#F56692;
// --color-delete:FF000;
// }

// body{
// // <uniquifier>: Use a unique and descriptive class name
// // <weight>: Use a value from 200 to 1000

// .nunito-<uniquifier> {
//   font-family: "Nunito", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>; 
//   font-style: normal;
// }

// }
// `;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

:root {
  --primary-color: #222260;
  --primary-color2: rgba(34, 34, 96, 0.6);
  --primary-color3: rgba(34, 34, 96, 0.4);
  --color-green: #42AD00;
  --color-grey: #aaa;
  --color-accent: #F56692;
  --color-delete: #FF0000;
}

body {
  font-family: 'Nunito', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400; /* You can set a weight value here, such as 400, 700, etc. */
   font-style: clamp(1rem,1.5vw,1.2rem);
  
   overflow:hidden;
   color: rgba(34,34,96, .6);
  }
`;
