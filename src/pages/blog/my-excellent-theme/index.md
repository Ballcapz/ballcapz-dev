---
title: 'Oh-my-posh theme for Posh-git and Oh-my-posh'
date: '2020-04-01'
---

Recently I've been using Posh-git and Oh-my-posh in windows terminal for windows
development. I liked a lot of the default themes offered, but I wanted
a mix of a couple of them. So I decided to try one of my own.

Link to the [GitHub](https://github.com/Ballcapz/PoshThemes)

# My Excellent Theme

This is a theme for oh-my-posh on powershell.

### Prerequisites

1. Posh-git
2. Oh-my-posh

## Install

1. Find your Theme settings folder location by running

```ps1
$ThemeSettings.MyThemesLocation
# default -> ~\Documents\WindowsPowerShell\PoshThemes
```

2. Clone the repo such that the `my-excellent-theme.psm1` file is inside the directory you found in step 1<br/>
   The directory structure should look like this:

```ps1
~\Documents\WindowsPowerShell\PoshThemes\my-excellent-theme.psm1
```

3. At the powershell prompt run

```ps1
Set-Theme my-excellent-theme
```

This will set up your terminal to look like this

![My excellent theme prompt](my-excellent-theme.jpg)
