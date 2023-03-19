import localforage from 'localforage';

const store = localforage.createInstance({
  name: "chat-ui--store"
});

export default store;

