---
title: 'My Vim Setup on WSL 2'
date: '2020-03-30'
---

# NeoVim

I recently moved to using the slow ring of Windows Insiders, and
with that comes the greatness that is WSL 2. WSL 2 feels twice as
fast as its' predecessor, and it made me want to check out developing
using vim again.

I decided to go with NeoVim this time, even with all of the new Vim 8
features, I really like a couple of the features that come along with
NeoVim. For instance, its' ease of setting up deoplete autocomplete.

## Install

I pretty much followed along with the [GitHub wiki](https://github.com/neovim/neovim/wiki/Installing-Neovim).

**First**: Make sure you have python, python3, both pips, node, and ruby installed
if you want to make full use of your NeoVim.
1. Install the prerequisites
```sh
sudo apt-get install python-dev python-pip python3-dev python3-pip
sudo apt-get install ruby-full
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
. ~/.bashrc
nvm install --lts
```

2. Add the updated repository and install neovim
```sh
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim
```

3. Install python-neovim to make better use of plugins
```sh
sudo apt install python-neovim
sudo apt install python3-neovim
```

If everything went well, you should be able to type `nvim` at the prompt and
be launched into an nvim window.

If there were any issues installing any of the dependencies, you can run
`:healthcheck` and it will tell you what you need to update or fix.

## Configuration
NeoVim looks for configuration in a different place than vim does. It
is looking for its' config in `~/.config/nvim/init.vim`, and you will
likely have to make the nvim directory and init.vim file. From here,
I ended up making pretty heavy use of plugins.

## Plugins
I decided to make a much heavier use of plugins than I ever did in the past. 
To do so, I decided to use vim-plug. I ended up going with vim-plug because of
its' simplicity in loading plugins, and an easy way to lazy-load plugins only
when they are used or a specific file type is opened.

1. Install (vim-plug)[https://github.com/junegunn/vim-plug]<br />
Make sure you use the proper install script for nvim (or vim if you are using it)
```sh
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

2. Open the `~/.config/nvim/init.vim` file as sudo
```sh
sudo nvim ~/.config/nvim/init.vim
```

3. And add the initialization of vim-plug
```vim
" '~/.vim/plugged' can be whatever you want, but don't use standard names like 'plugin'
call plug#begin('~/.vim/plugged')
Plug 'tpope/vim-sensible'
call plug#end()
```

Vim-sensible provides a good baseline for any vimrc file.

4. Add any plugins you like, for any type of development or editing you want to do<br />
Here are a few examples
```vim
" only loads when a clojure file is opened
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }
```
```vim
" only loads when the NERDTreeToggle command is called
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
```

5. Reload .vimrc, open nvim, and install plugins
```vim
:PlugInstall
```

### Code completion (delote)

### Nerdtree remap <C-n> or <C-o> to open nerdtree