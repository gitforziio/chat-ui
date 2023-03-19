import createValtioContext, { createValtioWrapper } from '../lib/create-valtio-context';

class GlobalStateManager {
  constructor() {
    this.value = {
      chatLogs: [
      ],
      settings: {},
    }
  }
}

export const GlobalStateManagerValtio = createValtioWrapper(new GlobalStateManager());
// export const GlobalStateManagerValtio = createValtioWrapper({value: {}});
export default GlobalStateManagerValtio;
