import { ConnectionHandler } from 'relay-runtime';
import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation addPushTokenMutation( $input: addPushTokenInput! ) {
    addPushToken(input: $input) {
      token
      type
    }
  }
`;

function commit(environment, token, type) {
  commitMutation( 
    environment, {
      mutation,
      variables: {
        input: {
          token,
          type
        },
      },
      onCompleted: (response) => {
        console.log('Success!');
      },
      onError: err => console.error(err),
    },
  );
}

export default { commit };