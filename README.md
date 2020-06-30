# QTMA React Native BoilerPlate :volcano:

## Preliminary Setup

- Please download and use [VSCode](https://code.visualstudio.com/) as your IDE
  - Download the following extensions:
    - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
    - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
    - [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) code formatter
- Download [Git](https://git-scm.com/)
- Download [NPM](https://www.npmjs.com/get-npm)

## Environment Setup :evergreen_tree:

- Navigate to the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
- Switch to the React Native CLI Quickstart (Not EXPO), make sure you select the Development OS and target OS pertaining to your machine
- Follow the tutorial until the "Creating a new application" section
  > _Note:_ If you're on MacOS follow the tutorial for both Target OS's as you'll be able to preview your application for both Android and IOS

## Get Started With The Template

- Clone the repo
  ```sh
  git clone
  ```
- Open your Terminal / Command Prompt
- Navigate to the root folder on your machine or where you plan to store your project
- Create a new React Native project using this repository as a template
  ```sh
  react-native init <your_project_name> --template https://github.com/QueensTechMediaAssociation/react-native-template-qtma
  ```
## Run Your Mobile Application and watch it fail
- Navigate to <your_project_name> and open app.json
  - Change the "name" and "displayName" values to match the project name you just gave your application
- Depending on which target OS you've configured your project for you'll run a different command
- ios
  - Open <your_project_name>/ios/<your_project_name>.xcworkspace
  - Click on your project in the left pane, then click the first Target under TARGETS, navigate to Signing & Capabilities (next to General) and add an apple development team and a unique bundle identifier
  - Now run your application with the following command and you should see an error "No Firebase App '[DEFAULT]' has been created - call firebase.initializeApp()"
  ```sh
  react-native run-ios
  ```
  - If you got a different error that looks like "XCode 10: Multiple Commands Produce ..." you'll need to navigate to <your_project_name>.xcworkspace
  - Open Build Phases which is next to "Signing & Capabilities" and open "Copy Bundle Resources" delete everything that isn't "Images.xcassets", "LaunchScreen.xib" and "GoogleService-info.plist" and try re-running the application
- Android
  ```sh
  react-native run-android


## Configure Your Application With A Firebase Project :fire:

- Go to [Firebase](https://firebase.google.com/)
- Click Get Started > Create New Project, follow the steps to create your project and make sure Google Analytics is enabled.
- Now it's time to add this project to your mobile app
  - In the Firebase project overview click on add app, select the same targetOS as used in "Environment Setup"
  - Follow the [React Native Firebase Getting Started Guide](https://rnfirebase.io/) for your target OS to configure your project with Firebase. Everyone should have autolinking available to them so stop when you see "Manual Linking", you don't need to complete the miscellaneous section
    > **Note:** If you're developing on, macOS: I recommend setting up both android and ios (ios minimum) android: you can only setup android


  ```

## Help

For any questions about the boiler plate and getting it setup on your local machine please reach out to quentinrf@gmail.com
