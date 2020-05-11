import React from 'react';
import {View, Text, Button} from 'react-native';

// import {withAuthenticator, withOAuth, Authenticator} from 'aws-amplify-react-native';
import {Authenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

const App = () => {
  return (
    <View>
      <Text>My app</Text>
      <Button
        title="gg"
        onPress={() => {
          Auth.federatedSignIn({provider: 'Google'});
        }}
      />
    </View>
  );
};

// export default withOAuth(App);

// export default withAuthenticator(App, {
//   includeGreetings: true,
// });

// export default App;

const AppWithAuth = () => {
  return (
    <Authenticator>
      <App />
    </Authenticator>
  );
};

export default AppWithAuth;
