# Extending on v-model

This repo provides a couple examples of how to expand on the v-model directive in Vue.js.


## Important
This
```
	<input v-model="firstName">
```
Is the same as this
```
	<input :value="firstName" @input="firstName = $event">
```

In short, v-model just passed down a value, listens for an input event, and sets the passed down value equal to the value emitted in the input event. 




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
