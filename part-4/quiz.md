- [x] When you run a command in the terminal, where does BASH look for that command?
In the directories listed in the user's PATH (separated by :). So on my current machine that is
```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```
On a UNIX computer, how do you stop a running process?
```bash
$ ps
PID TTY           TIME CMD
26078 ttys000    0:00.02 -bash
26086 ttys000    0:00.22 node
26242 ttys001    0:00.42 /bin/bash -l

$ kill 26242
```

What packages do you have installed via homebrew?
```bash
Brandons-MacBook-Pro:~ brandongilchrist$ brew list
cask		gmp		icu4c		libtasn1	nettle		p11-kit		taskd
emacs		gnutls		libffi		libunistring	node		task		tasksh
Brandons-MacBook-Pro:~ brandongilchrist$ brew cask list
atom                           firefox                        google-chrome                  spectacle                      visual-studio-code-insiders
brackets                       freesmug-chromium              google-chrome-canary           taskwarrior-pomodoro           vlc
caffeine                       github-desktop                 iterm2                         transmission
calibre                        go2shell                       screenhero                     visual-studio-code
Brandons-MacBook-Pro:~ brandongilchrist$ 
```

On a UNIX computer, how do you find the process id of a running process?

In a terminal, what does control-c do?

In a terminal, what does control-a do?

In a terminal, what does control-e do?

What keyboard shortcut do you use to split the screen in your editor?

What keyboard shortcut do you use to split the screen in your terminal?

When a terminal command completes, how can you tell if it was successful or not?

What does your ~/.gitconfig have in it? (paste the whole file here)

What is the difference between a relative and absolute path?

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?

What keyboard shortcut do you use, in your editor, when you want to open a specific file?

What files or folders do you want all git repositories to ignore?

What is the main difference between == and === in JavaScript?