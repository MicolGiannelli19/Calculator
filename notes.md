can animate stuff via the terminal 

unreal engine 


there are diffrent options for connecting the frontend and the backend: 


one is the config file apporach  which is to add something like this so you can then run relative paths 
```js
const config = {
    development: {
        backendUrl: 'http://localhost:5000'
    },
    production: {
        backendUrl: 'https://your-production-domain.com'
    }
};
```
another is to set a base url 
```js
const BASE_URL = process.env.BACKEND_URL || '';

function submit(operand, numbers) {
    fetch(`${BASE_URL}/add?numbers=${numbers}`)
```


TODO: add multiplication and division


export default config;
