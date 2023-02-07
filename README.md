# React-RuduxLoginREG
REACT TYPESCRIPT  REDUX  DOC
**********************************************************************************
Create project using below Commands

•	yarn create react-app my-app --template typescript

•	npx create-react-app my-app --template typescript
**********************************************************************************
To add TypeScript to an existing 

•	npm install --save typescript @types/node @types/react @types/react-dom @types/jest

•	yarn add typescript @types/node @types/react @types/react-dom @types/jest
**********************************************************************************
we can create forms using  formik

doc link   url =https://formik.org/docs/guides/typescript

•	nmp -npm i formic

•	yarn- yarn add formic

**********************************************************************************
for the  validations  we can use  yup

•	nmp- npm i yup

•	yarn- yarn add yup

•	npm - npm i yup-password  (for set modified password)

all the validation  can implement inside different folders .
import that folder or file  when we   use yup  in a different folder

**********************************************************************************
for  the state management we can  use  redux 

•	npm - npm i redux

•	npm – yarn add redux

We  can import   store in app.tsx  or index.tsx  

But  in my case  I am using  some state to check whether  user login  or not in app.tsx
If we  import store in app.tsx we cant do that so ,I import  store  in index.tsx

**********************************************************************************
for notification or alerts  we can  use   sweet alerts or  react testify packages

URL_toastify=  https://fkhadra.github.io/react-toastify/installation

installation

npm install --save react-toastify
or

yarn add react-toastify

imports

import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


if we import Toastcontainer in app.tsx  there is no need  import Toast container page by page and import  the  ReactToastify.css  file in inedex.tsx

 



