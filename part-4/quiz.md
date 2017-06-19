- [x] When you run a command in the terminal, where does BASH look for that command?
In the directories listed in the user's PATH (separated by :). So on my current machine that is
```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```
- [x] On a UNIX computer, how do you stop a running process?
```bash
$ ps
PID TTY           TIME CMD
26078 ttys000    0:00.02 -bash
26086 ttys000    0:00.22 node
26242 ttys001    0:00.42 /bin/bash -l

$ kill 26242
```

- [x] What packages do you have installed via homebrew?
```bash
$ brew list
cask		gmp		icu4c		libtasn1	nettle		p11-kit		taskd
emacs		gnutls		libffi		libunistring	node		task		tasksh

$ brew cask list
atom                           firefox                        google-chrome                  spectacle                      visual-studio-code-insiders
brackets                       freesmug-chromium              google-chrome-canary           taskwarrior-pomodoro           vlc
caffeine                       github-desktop                 iterm2                         transmission
calibre                        go2shell                       screenhero                     visual-studio-code
```

- [x] On a UNIX computer, how do you find the process id of a running process?
```bash
$ ps 
# OR
$ top
```

- [x] In a terminal, what does control-c do?
```
Kills to currently running process
```
- [x] In a terminal, what does control-a do?
```
Places the cursor at the beginning of the line
```
- [x] In a terminal, what does control-e do?
```
Places the cursor at the end of the line
```

- [x] What keyboard shortcut do you use to split the screen in your editor?
``` 
 ⌘\ or ⌘+2 or ⌘+3 (for the second and third splits respectively)
```
- [x] What keyboard shortcut do you use to split the screen in your terminal?
```
⌘+D in both Terminal and iTerm2
```
- [x] When a terminal command completes, how can you tell if it was successful or not?
```bash
$ echo $? # Will show the exit status of the last command. 0 is sucess, non-zero is typically an error status code
# By default, most terminal command only show errors and do not show a response after successful completion.
```

- [x] What does your ~/.gitconfig have in it? (paste the whole file here)
```bash
[core]
        editor = code
```

- [x] What is the difference between a relative and absolute path?
```
A relative path is a path to a resource starting from wherever the command is launched
An absolute path is a complete path starting from the root
```

```bash
../part-3/index.html # relative path
/Users/brandongilchrist/Github/phase-2-challenge/part-3/index.html ## Absolute Path
```

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
```bash
$ cd ../pinterest-for-dogs
```

What keyboard shortcut do you use, in your editor, when you want to open a specific file?
```
 ⌘+O or control-` to find the file via the integrated terminal 
```

What files or folders do you want all git repositories to ignore?
```
DS_Store
node_modules
```

What is the main difference between == and === in JavaScript?
```javascript
const x = 12
console.log(x === '12') // False - Triple Equal checks for type
console.log(x === 12) // True
console.log(x == 12) // True - Double Equal DOES NOT check for type and will do type coercion
console.log(x == '12') // True
```