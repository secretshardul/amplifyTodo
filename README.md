# Social sign in setup
1. Generate OAuth2.0 credentials from google console.
2. Enable linking in react native. Here we set app URI as ```myapp://``` by making the below changes

**Android**: ```android-manifest.xml```
```xml
<intent-filter android:label="filter_react_native">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="myapp" />
</intent-filter>
```

**iOS**: ```config.plist```
```xml
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>myapp</string>
        </array>
    </dict>
</array>
```

3. Setup new cognito user pool with social auth using amplify. Set signin and signout URIs as ```myapp://```. Note the **hosted UI endpoint** displayed in CLI. This is the user pool URL which will be called by Google Oauth service.
4. Setup [Google social login](https://developers.google.com/identity/sign-in/web/sign-in) using the user pool URL.
5. Visit Google developer console. Open the old Oauth client created in first step(not the one created in step 4).
```
Authorized JavaScript origins: https://<your-user-pool-domain
Authorized redirect URIs: https://<your-user-pool-domain/oauth2/idpresponse
```
6. Add auth button
```jsx
import {Auth} from 'aws-amplify';

const App = () => {
  return (
    <View>
      <Text>My app</Text>
      <Button
        title="gg"
        onPress={() => {
        //   Auth.federatedSignIn(); // Hosted web UI by Cognito for all login options
          Auth.federatedSignIn({provider: 'Google'}); // Google login
        }}
      />
    </View>
  );
};
```

# Caveats
1. Cognito login is web based and not native. Users are redirected to browser. Integrate native SDKs with cognito in future.
