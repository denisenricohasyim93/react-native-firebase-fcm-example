/**
 * @flow
 * @relayHash 07815197e29c4b1e31483d9e3507c244
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type addPushTokenMutationVariables = {|
  input: {
    token: string;
    type: "FCM" | "APN";
    clientMutationId?: ?string;
  };
|};
export type addPushTokenMutationResponse = {|
  +addPushToken: ?{|
    +token: string;
    +type: "FCM" | "APN";
  |};
|};
*/


/*
mutation addPushTokenMutation(
  $input: addPushTokenInput!
) {
  addPushToken(input: $input) {
    token
    type
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "addPushTokenInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addPushTokenMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "addPushTokenInput"
          }
        ],
        "concreteType": "addPushTokenPayload",
        "name": "addPushToken",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "type",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "addPushTokenMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "addPushTokenInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "addPushTokenMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "addPushTokenInput"
          }
        ],
        "concreteType": "addPushTokenPayload",
        "name": "addPushToken",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "type",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation addPushTokenMutation(\n  $input: addPushTokenInput!\n) {\n  addPushToken(input: $input) {\n    token\n    type\n  }\n}\n"
};

module.exports = batch;
