---
title: 'Installing Emacs and Spacemacs on Windows'
date: '2020-04-12'
---

# General Install

1. Download the .zip archive by following the Windows instructions on the [GNU Software Website](https://www.gnu.org/software/emacs/download.html). I decided to go with the most recent version at this time for windows (emacs 26.3).

2. Move the .zip to wherever you would like to have emacs installed and extract all (either 7zip or the native windows unzip in file explorer will work)

3. Once emacs is unzipped, navigate to the `emacs-<version>/bin` directory in file explorer, copy the path (by clicking the the top bar and copying) so we can add it the the path

4. Open up environment variables, find the system path environment variable (the ones on the bottom), click edit, then add, and finally paste the emacs path.

5. For easier access to open emacs, navigate back to the bin folder and find the `runemacs.exe` file; right click on it and select send to > desktop(create shortcut) and create a shortcut on your desktop to start emacs easily.


#### Congratulations Emacs is installed (and possibly ready to use?)
I'm am going to go a bit further and install spacemacs as the config because it gives a nice base to work off, provides easy extension points, and I personally prefer vim style navigation and editing as it is what I started on (as well as being easier on the wrist most of the time)

# Install And Configure Spacemacs

1. Visit the [Spacemacs website](https://www.spacemacs.org/#)

2. If you have opened emacs, locate your `.emacs.d` file, which should live in `%USERPROFILE%\appdata\roaming\.emacs.d`, and delete it. Back it up or add it to source control if you want it for future use.

3. Run the following command, replacing %USERPROFILE% with the path to your appdata folder; In my case `C:\Users\zach\appdata\roaming`

```
git clone https://github.com/syl20bnr/spacemacs C:\%USERPROFILE%\appdata\roaming\.emacs.d
```
This will put the spacemacs config in the .emacs.d folder.

4. Finally, open up emacs and run through configuration to get your preferences set up and installed.

5. From here, the [Spacemacs docs](https://www.spacemacs.org/doc/DOCUMENTATION.html) give lots of ideas on how to customize and extend your editor and capabilities within emacs.


### Useful links
* [Spacemacs](https://www.spacemacs.org/#)
* [Gnu Emacs](https://www.gnu.org/software/emacs)