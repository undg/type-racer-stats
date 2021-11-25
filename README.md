# About
CLI tool to show chart, with stats from type-racer page.
![image](https://user-images.githubusercontent.com/5306983/127060288-5734046f-707c-42bd-a8bc-f387106dd369.png)

# Motivation
Having fun with [deno🦕](https://deno.land), looking for new toys. Following accident is outcome of that journey.

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
      54.57 ┤                                                       ╭╮
      53.60 ┤                                                       ││
      52.63 ┤                                                       │╰─╮
      51.66 ┤                                                       │  │          ╭
      50.69 ┤                                                       │  │          │
      49.72 ┤                                              ╭╮  ╭╮   │  ╰╮         │
      48.75 ┤                                       ╭╮     ││ ╭╯│  ╭╯   │╭╮     ╭─╯
      47.78 ┤                                       ││    ╭╯│ │ ╰──╯    │││  ╭──╯
      46.81 ┤                            ╭╮   ╭╮    │╰──╮ │ │╭╯         ╰╯│╭╮│
      45.84 ┤                            │╰╮ ╭╯╰╮   │   ╰╮│ ││            ╰╯╰╯
      44.87 ┤                            │ │╭╯  ╰╮ ╭╯    ╰╯ ││
      43.90 ┼──────────────────╭─╮─────╭─╯─╰╯────│─│────────╰╯─────────────────────
      42.93 ┤       ╭╮         │ ╰─╮╭╮╭╯         │ │            ╭╮╭────╮ ╭╮     ╭──
      41.96 ┼───────╯╰────────╭╯───╰╯╰╯──────────╰─╯────────────╯╰╯    ╰─╯╰─────╯
      40.99 ┤             ╭╮  │
      40.02 ┤            ╭╯╰──╯
      39.05 ┤          ╭─╯
      38.09 ┤       ╭─╮│
      37.12 ┤      ╭╯ ╰╯
      36.15 ┤    ╭╮│
      35.18 ┤   ╭╯╰╯
      34.21 ┤   │
      33.24 ┤ ╭─╯
      32.27 ┤ │
      31.30 ┤ │
      30.33 ┤╭╯
      29.36 ┼╯
```

