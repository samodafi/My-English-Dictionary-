# Lexi Dictionary installers

The app lives in `www/index.html`. Edit it there, then rebuild.

## Easiest: build both in the cloud (no local setup)
1. Create a GitHub repository and push this folder to it.
2. Open the Actions tab, choose "Build installers", and click Run workflow.
3. When it finishes, download `lexi-windows-exe` and `lexi-android-apk` from the run's Artifacts.

The APK is a debug build. It installs by sideloading (enable "install unknown apps" on the phone).
A Play Store release needs your own signing key and `./gradlew bundleRelease`.

## Windows .exe on a Windows PC
Install Node.js 20, then:
    npm install
    npm run build:win
The installer appears in `dist/`. Test without installing: `npm start`.

## Android .apk on your own computer
Install Node.js 20, JDK 17 and Android Studio, then:
    npm install
    npm run android:add
    npm run android:icons
    npm run android:sync
    npm run android:open
In Android Studio choose Build > Build APK(s).

## Icon
Source images are in `assets/` (1024 px). Replace `assets/icon-only.png`, `icon-foreground.png` and `icon-background.png`
for Android, and `build/icon.ico` / `build/icon.png` for Windows, then rebuild.
