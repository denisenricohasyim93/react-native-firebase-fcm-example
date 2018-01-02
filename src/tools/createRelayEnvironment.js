import { Environment, Network, RecordSource, Store} from 'relay-runtime';  
import { AsyncStorage } from 'react-native';

const handlerProvider = null;  
const serverUri = 'https://api.savo.nililia.com/graphql';

function fetchQuery( operation, variables, cacheConfig, uploadables ) {
  return AsyncStorage.getItem('@LoginAccessToken:key')
  .then((accessToken) => {
      return fetch(serverUri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'accessToken': accessToken
        },
        body: JSON.stringify({
          query: operation.text, // GraphQL text from input
          variables,
        }),
      }).then(response => {
        return response.json();
      });
  })
  .catch((error) => {
      console.log(error);
  })
}

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  handlerProvider,
  network,
  store,
});