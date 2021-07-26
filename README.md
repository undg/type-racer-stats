## What is this?
CLI tool to show chart, with stats from type-racer page.

### Why?
Having fun with [deno](https://deno.land), looking for new toys. Following accident is outcome of that journey.

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
echo 'export TYPE_RACER_SECRET={your_secret}' >> ~/.bashrc
```
OR
```bash
deno install --allow-net=data.typeracer.com --allow-env --unstable
echo 'export PATH="$HOME/.deno/bin:$PATH"'    >> ~/.zshrc
echo 'export TYPE_RACER_USER={your_username}' >> ~/.zshrc
echo 'export TYPE_RACER_SECRET={your_secret}' >> ~/.zshrc
```
OR
```bash
deno install --allow-net=data.typeracer.com --allow-env --unstable
echo 'export PATH="$HOME/.deno/bin:$PATH"'    >> ~/.profile
echo 'export TYPE_RACER_USER={your_username}' >> ~/.profile
echo 'export TYPE_RACER_SECRET={your_secret}' >> ~/.profile
```
...you get an idea.


# Help

``` bash
$ type-racer-stats -h
    help:
        -u USER, can be replaced with TYPE_RACER_USER env variable
        -s SECRET, can be replaced with TYPE_RACER_SECRET env variable
        -n NUMBER results, if skipped max possible number will be used
```

# Usage

``` bash
$ type-racer-stats -u undg -s ClIKFgoJdGltZXN0Y(...)QISNGoClIKFgoJdGltZXN0YW1wEgkImMuutYL-8QISNGo
    Fetching data. Please wait...
          54.00 ┤                                       ╭─╮
          53.00 ┤                                       │ │
          52.01 ┤                                       │ │
          51.01 ┤                                       │ ╰╮
          50.02 ┤                                       │  │      ╭
          49.02 ┤                                ╭╮ ╭─╮ │  │     ╭╯
          48.03 ┤                            ╭╮  ││ │ ╰─╯  │╭╮ ╭─╯
          47.03 ┤                       ╭╮   │╰╮ │╰─╯      ││╰─╯
          46.03 ┤                    ╭╮ ││  ╭╯ ╰╮│         ╰╯
          45.04 ┤                   ╭╯│╭╯╰╮ │   ╰╯
          44.04 ┤             ╭╮    │ ╰╯  ╰╮│
          43.05 ┤             │╰╮╭──╯      ││
          42.05 ┤            ╭╯ ╰╯         ╰╯
          41.06 ┤         ╭╮ │
          40.06 ┤        ╭╯╰─╯
          39.06 ┤       ╭╯
          38.07 ┤     ╭╮│
          37.07 ┤     │╰╯
          36.08 ┤  ╭╮╭╯
          35.08 ┤  │╰╯
          34.09 ┤  │
          33.09 ┤ ╭╯
          32.09 ┤ │
          31.10 ┤╭╯
          30.10 ┼╯
```
![image](https://user-images.githubusercontent.com/5306983/127060288-5734046f-707c-42bd-a8bc-f387106dd369.png)

