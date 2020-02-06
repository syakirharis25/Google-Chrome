# Google-Chrome
My works related to Google Chrome

## Table of Contents
1. [Introduction.](#introduction)
2. [Official references websites.](#references)
3. [Google Chrome shortcuts.](#shortcuts)
4. [Google Chrome cache history.](#cache)
5. [Google Chrome scratch pad.](#scratchpad)
6. [Google Chrome mute site option.](#mute)
7. [Restarting Google Chrome.](#restart)
8. [Editing and saving project files using Google Chrome DevTools.](#DevToolsProjects)
9. [GitHub notes.](#github)

<a name="introduction"></a>
## 1. Introduction.
<img src="Chrome.jpg" height="200"> 
Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, and was later ported to Linux, macOS, iOS, and Android. The browser is also the main component of Chrome OS, where it serves as the platform for web apps.

Most of Chrome's source code comes from Google's open-source Chromium project, but Chrome is licensed as proprietary freeware. WebKit was the original rendering engine, but Google eventually forked it to create the Blink engine; all Chrome variants except iOS now use Blink.

As of July 2019, StatCounter estimates that Chrome has a 71% worldwide browser market share on traditional PCs and 63% across all platforms. Because of this success, Google has expanded the "Chrome" brand name to other products: Chrome OS, Chromecast, Chromebook, Chromebit, Chromebox, and Chromebase.

<a name="references"></a>
## 2. Official references websites.
Official Google Chrome website : https://www.google.com/chrome <br />
Official Google Chrome Help website : https://support.google.com <br />

**_Google Chrome console API by Mozilla_** <br />
console.error() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/error <br />
console.log() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/log <br />
console.warn() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/warn <br />
console.assert() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/console/assert <br />
console.dir() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/dir <br />
console.table() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/table <br />
console.clear() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/clear <br />
console.group() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/group <br />
console.groupEnd() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd <br />
console.time() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/time <br />
console.timeEnd() by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd <br />

**_Google Chrome Document API by Mozilla_** <br />
Document by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Document <br />
Document.URL by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Document/URL <br />
Document.body by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Document/body <br />
Document.head by Mozilla : https://developer.mozilla.org/en-US/docs/Web/API/Document/head <br />

**_Articles_** <br />
Browse in private by Google Chrome Help : https://support.google.com/chrome/answer/95464?co=GENIE.Platform%3DDesktop&hl=en <br />
Quickly toggling elements in the Web Inspector : https://bricss.net/post/64013104469/quickly-toggling-elements-in-the-web-inspector <br />
Google Chrome Console Overview : https://developers.google.com/web/tools/chrome-devtools/console <br />
TIME-SAVING CHROME DEVTOOLS SHORTCUTS by Dmitriy Pashkevich : https://www.lucidchart.com/techblog/2018/04/17/time-saving-chrome-devtools-shortcuts/ <br />

**_Google Chrome developers_** <br />
Dmitry Pashkevich in GitHub : https://github.com/dpashkevich <br />

<a name="shortcuts"></a>
## 3. Google Chrome shortcuts.
**_Scroll management_** <br />
**[ SPACE BAR ]** : scroll down faster <br />
**[ Shift ]** + **[ SPACE BAR ]** : scroll up faster <br />

**_Screen window management_** <br />
**[ Fn ]** + **[ F11 ]** : to switch into full screen mode (first time) <br />
**[ Fn ]** + **[ F11 ]** : to switch back into normal mode (second time) <br />

**_Tabs management_** <br />
**--- { -3 } --- { -2 } --- { -1 } --- { current tab } --- { 1 } --- { 2 } --- { 3 } ---** <br />
**[ Ctrl ]** + **[ Shift ]** + **[ T ]** : open back the last recently closed { -1 } tab (first hit) <br />
**[ Ctrl ]** + **[ Shift ]** + **[ T ]** : open back the last recently closed { -2 } tab (second hit) <br />
**[ Ctrl ]** + **[ Shift ]** + **[ T ]** : open back the last recently closed { -3 } tab (second hit) <br />

**[ Ctrl ]** + **[ MOUSE LEFT CLICK ]** : to open a new address link, the achor text without disrupting, closing the current tab <br />
**[ Ctrl ]** + **[ Shift ]** + **[ D ]** : to save all your open tabs in your current or new folder of your choice <br />
**[ Ctrl ]** + **[ R ]** : refresh the current active tab <br />
**[ Ctrl ]** + **[ W ]** : close the current active tab <br />

**_Downloads management_** <br />
**[ Ctrl ]** + **[ J ]** : will open chrome://downloads in address bar to view the current downloads <br />
**[ Ctrl ]** + **[ Shift ]** + **[ N ]**  : turn on incognito browse in private mode <br />

**_Developer tools management_** <br />
**[ Ctrl ]** + **[ Shift ]** + **[ J ]** : open developer Console menu <br />
**[ Ctrl ]** + **[ Shift ]** + **[ S ]** : open developer Elements and Styles menu <br />

**[ Ctrl ]** + **[ Shift ]** + **[ I ]** : show developer Tools menu (first hit) <br />
**[ Ctrl ]** + **[ Shift ]** + **[ I ]** : hide developer Tools menu (second hit) <br />

**[ Fn ]** + **[ F12 ]** : show developer Tools menu (second hit) <br />
**[ Fn ]** + **[ F12 ]** : hide developer Tools menu (second hit) <br />

To adjust or create your own Google Chrome shortcuts, type `chrome://extensions/shortcuts` on your Google Chrome address bar, and the menu to manage your own Google Chrome shortcuts will appear on your Google Chrome browser.

<a name="github"></a>
## 4. Google Chrome cache history.
If the website is down, you can view what is the last happened on the website by adding prefix `cache:` in front of the address link on the Google Chrome address bar. For example `https://www.google.com` -- changed into --> `cache:https://www.google.com` and hit **[ Enter ]** using your keyboard.

It will show this kind of example message, with the option below it to view as ` Full version` or `Text-only` or `View source`.
```
This is Google's cache of http://www.google.com/. It is a snapshot of the page as it appeared on 4 Feb 2020 06:06:59 GMT. The current page could have changed in the meantime. Learn more.
```
To view all the previous histories of Google Chrome, simply long press your **[ MOUSE LEFT CLICK ]** on the **( ← )** symbol on your top left of the Google Chrome browser of your current tab.

<a name="scratchpad"></a>
## 5. Google Chrome scratch pad.
Copy and paste the below codes on Google Chrome browser address bar and you will have a scratchpad that have blank working space to work with.
```
data:text/html;charset=utf-8, <title>Scratchpad</title><style>body {padding: 5%; font-size: 1.5em; font-family: Arial; }"></style><link rel="shortcut icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon6.ico"/><body OnLoad='document.body.focus();' contenteditable spellcheck="true" >
```

To copy the text from Google Chrome, simply press **[ Ctrl ]** + **[C ]** on the selected text, and **[ Ctrl ]** + **[ V ]** on the Google Chrome scratch pad, to paste without the formatting, press **[ Ctrl ]** + **[ Shift ]** + **[ V ]**.

<a name="scratchpad"></a>
## 6. Google Chrome mute site option.
To mute certain site, simply hover your mouse on the tab you wish to mute, on top of your Google Chrome browser and **[ MOUSE RIGHT CLICK ]**, to show the menu to mute the site and hover to the menu that show the text `Mute site` and **[ MOUSE LEFT CLICK ]** on it.

To undo the mute, simply hover your mouse on the tab you wish to mute, on top of your Google Chrome browser and **[ MOUSE RIGHT CLICK ]**,  to show the menu to unmute the site and hover to the menu that show the text `Unmute site` and **[ MOUSE LEFT CLICK ]** on it.

<a name="restart"></a>
## 7. Restarting Google Chrome.
To restart the Google Chrome, type `chrome://restart` on your Google Chrome browser address bar and press **[ Enter ]** on your keyboard to restart the Google Chrome, your Google Chrome browser will shut down for a few seconds then will come back alive again, restoring all your active working tabs and windows in instant.

<a name="github"></a>
## 8. GitHub notes.
Clone the current GitHub remote repository contents into local machine.
```
$ git clone https://github.com/syakirharis25/Google-Chrome.git
$ cd Google-Chrome/
$ git remote -v
$ git status
