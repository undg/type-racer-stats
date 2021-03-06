# About
CLI tool to show chart, with stats from type-racer page.
![image](https://user-images.githubusercontent.com/5306983/127060288-5734046f-707c-42bd-a8bc-f387106dd369.png)

# Motivation
Having fun with [denoð¦](https://deno.land), looking for new toys. Following accident is outcome of that journey.

# Installation

```bash
git clone 'https://github.com/undg/type-racer-stats'
cd type-racer-stats
deno run --allow-net=data.typeracer.com --allow-env --unstable
```

You may want to add `.deno/bin` to your path, and install script.
After that you can simply run `type-racer-stats`

```bash
deno install --allow-net=data.typeracer.com --allow-env --unstable
echo 'export PATH="$HOME/.deno/bin:$PATH"'    >> ~/.bashrc
echo 'export TYPE_RACER_USER={your_username}' >> ~/.bashrc
```
OR
```bash
deno install --allow-net=data.typeracer.com --allow-env --unstable
echo 'export PATH="$HOME/.deno/bin:$PATH"'    >> ~/.zshrc
echo 'export TYPE_RACER_USER={your_username}' >> ~/.zshrc
```
OR
```bash
deno install --allow-net=data.typeracer.com --allow-env --unstable
echo 'export PATH="$HOME/.deno/bin:$PATH"'    >> ~/.profile
echo 'export TYPE_RACER_USER={your_username}' >> ~/.profile
```
...you get an idea.


# Help

``` bash
$ type-racer-stats -h
    help:
        -h, --help      this message
        -u, --user      USER, can be replaced with TYPE_RACER_USER env variable
        -n, --number    NUMBER results, if skipped max possible number will be used
        -r, --reverse   reverse order
```

# Usage

``` bash
$ type-racer-stats -u undg -s ClIKFgoJdGltZXN0Y(^.^)QISNGoClIKFgoJdGltZ
Fetching data. Please wait...
      54.57 â¤                                                       â­â®
      53.60 â¤                                                       ââ
      52.63 â¤                                                       ââ°ââ®
      51.66 â¤                                                       â  â          â­
      50.69 â¤                                                       â  â          â
      49.72 â¤                                              â­â®  â­â®   â  â°â®         â
      48.75 â¤                                       â­â®     ââ â­â¯â  â­â¯   ââ­â®     â­ââ¯
      47.78 â¤                                       ââ    â­â¯â â â°âââ¯    âââ  â­âââ¯
      46.81 â¤                            â­â®   â­â®    ââ°âââ® â ââ­â¯         â°â¯ââ­â®â
      45.84 â¤                            ââ°â® â­â¯â°â®   â   â°â®â ââ            â°â¯â°â¯
      44.87 â¤                            â ââ­â¯  â°â® â­â¯    â°â¯ ââ
      43.90 â¼âââââââââââââââââââ­ââ®ââââââ­ââ¯ââ°â¯ââââââââââââââââ°â¯âââââââââââââââââââââ
      42.93 â¤       â­â®         â â°ââ®â­â®â­â¯         â â            â­â®â­âââââ® â­â®     â­ââ
      41.96 â¼ââââââââ¯â°âââââââââ­â¯ââââ°â¯â°â¯âââââââââââ°ââ¯âââââââââââââ¯â°â¯    â°ââ¯â°ââââââ¯
      40.99 â¤             â­â®  â
      40.02 â¤            â­â¯â°âââ¯
      39.05 â¤          â­ââ¯
      38.09 â¤       â­ââ®â
      37.12 â¤      â­â¯ â°â¯
      36.15 â¤    â­â®â
      35.18 â¤   â­â¯â°â¯
      34.21 â¤   â
      33.24 â¤ â­ââ¯
      32.27 â¤ â
      31.30 â¤ â
      30.33 â¤â­â¯
      29.36 â¼â¯
```

