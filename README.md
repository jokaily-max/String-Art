# String Art Mobile App - Android

A beautiful geometric string art creator as a native Android app.

## Features
- Touch-based drawing
- Pinch to zoom
- Two-finger pan
- Multiple nail layouts (Circle, Line, Rectangle)
- Pattern generation
- Color selection
- Undo/Redo
- Save high-resolution images
- Fullscreen mode

## Building the Android App

### Method 1: Using Android Studio (Recommended)

1. **Install Android Studio**
   - Download from: https://developer.android.com/studio
   - Install Android SDK (API 34 or higher)

2. **Create New Project**
   - Open Android Studio
   - Select "New Project" → "Empty Activity"
   - Name: String Art
   - Package: com.stringart.app
   - Language: Java
   - Minimum SDK: API 24 (Android 7.0)

3. **Add Files**
   ```
   app/
   ├── src/main/
   │   ├── java/com/stringart/app/
   │   │   └── MainActivity.java
   │   ├── assets/
   │   │   └── index.html
   │   ├── AndroidManifest.xml
   │   └── res/
   │       └── (icons and resources)
   └── build.gradle
   ```

4. **Copy Files**
   - Copy `MainActivity.java` to `app/src/main/java/com/stringart/app/`
   - Create `app/src/main/assets/` folder
   - Copy `index.html` to `app/src/main/assets/`
   - Copy `AndroidManifest.xml` to `app/src/main/`
   - Update `app/build.gradle` with provided content

5. **Sync and Build**
   - Click "Sync Project with Gradle Files"
   - Click "Build" → "Build Bundle(s) / APK(s)" → "Build APK(s)"
   - APK will be generated in `app/build/outputs/apk/debug/`

6. **Install on Device**
   - Enable USB Debugging on your Android device
   - Connect device via USB
   - Click "Run" in Android Studio
   - Or manually install the APK from the outputs folder

### Method 2: Using Cordova (Simpler)

1. **Install Node.js and Cordova**
   ```bash
   npm install -g cordova
   ```

2. **Create Cordova Project**
   ```bash
   cordova create StringArt com.stringart.app "String Art"
   cd StringArt
   cordova platform add android
   ```

3. **Add HTML File**
   - Replace `www/index.html` with the provided `index.html`

4. **Build APK**
   ```bash
   cordova build android
   ```

5. **Install**
   - APK will be in `platforms/android/app/build/outputs/apk/debug/`
   - Transfer to device and install

### Method 3: Using Capacitor (Modern Alternative)

1. **Install Capacitor**
   ```bash
   npm install -g @capacitor/cli @capacitor/core
   ```

2. **Initialize Project**
   ```bash
   npm init -y
   npx cap init "String Art" "com.stringart.app"
   npx cap add android
   ```

3. **Add HTML**
   - Create `www` folder
   - Copy `index.html` to `www/`

4. **Build**
   ```bash
   npx cap copy android
   npx cap open android
   ```
   - This opens Android Studio where you can build the APK

## Quick APK Generation (No Coding)

### Using Online Tools:
1. **Appy Pie** (https://appypie.com)
2. **Appsgeyser** (https://appsgeyser.com)
3. **Website 2 APK Builder** (https://websitetoapk.com)

Steps:
- Upload the `index.html` file
- Configure app name, icon
- Generate APK
- Download and install

## Testing Without Building

You can test the app immediately by:
1. Opening `index.html` in Chrome on Android
2. Tap menu → "Add to Home Screen"
3. The app will work as a PWA (Progressive Web App)

## App Permissions

The app requests:
- **INTERNET**: To load external resources (p5.js library)
- **WRITE_EXTERNAL_STORAGE**: To save images
- **READ_EXTERNAL_STORAGE**: To read saved images

## Troubleshooting

**WebView not loading:**
- Ensure `index.html` is in `assets` folder
- Check AndroidManifest.xml permissions

**Touch not working:**
- Verify WebView settings have touch enabled
- Check CSS `touch-action` properties

**Can't save images:**
- Grant storage permissions in Android settings
- For Android 11+, update storage permissions

## File Structure

```
string-art-app/
├── index.html              # Main app HTML/JS/CSS
├── MainActivity.java       # Android activity code
├── AndroidManifest.xml     # App configuration
├── build.gradle           # Build configuration
└── README.md              # This file
```

## App Size
- APK size: ~2-5 MB
- Requires Android 7.0 (API 24) or higher

## License
Free to use and modify

## Support
For issues or questions, check the HTML file comments for functionality details.
