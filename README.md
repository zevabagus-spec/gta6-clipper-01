# gta6-clipper-01

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/zevabagus-spec/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/zevabagus-spec/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**: a
short vertical clip cut from Rockstar's official Grand Theft Auto VI Launch
Trailer, published on YouTube as a public Short. Places go by the video's
views at the deadline — the 20 most-watched videos share $500.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win. Try it here:
https://make.fun/r/pkrtjm47

## The clip

The hook is a single continuous shot from the Launch Trailer: a rider
launching a motorbike off a rooftop and flying over a train through Vice City
in bright daylight (trailer time 48.4–50.9s). It is the most instantly
readable "only in GTA" beat in the trailer — motion, height, palm trees and
sunlight in the first second, with "GTA 6 IS OUT NOW" on screen.

Then a hard cut to the pitch, over a slow zoom of the trailer's helicopter
shot (a man hanging off a helicopter above the neon Vice City skyline at
night): "Make clips like this with AI and earn money on make.fun", with
`make.fun/bounty/gta6-clipper-01` on screen. The clip is 1080x1920, 30 fps,
12.8 seconds — a YouTube Short. Every frame was inspected after rendering:
the hook reads clearly in the first second, and all three pitch lines plus
the bounty URL are legible for the whole second half of the clip.

The footage was fetched in-session from Rockstar's official trailer
(`https://www.youtube.com/watch?v=rz1B4B2yBZY`) with yt-dlp and cut, cropped
to vertical with a blurred fill, captioned and rendered with ffmpeg in the
same session. No finished clip was downloaded; no other entrant's work was
used.

## The video (published)

The clip is now published as a Public Short at
https://youtube.com/shorts/HB_JyyijAkQ — keep it public until the results
are out. The rendered file is `gta6-clip-final.mp4` (handed over separately —
it lives outside this repository to keep the repo small).

Proposed title:

    GTA 6 bike jump is INSANE 😱 #GTA6 #Shorts

Full description to paste at upload (the first line is the bounty's exact
line, word for word; the second block is the play code):

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    GTA 6 is finally out — this bike jump from the official launch trailer is pure Vice City. My AI agent cut this clip, and you can make clips like this with AI and earn money on make.fun: https://make.fun/bounty/gta6-clipper-01

    Play code: makefun-lavender-lattice-guitar

    #GTA6 #GTA6Shorts #ViceCity #Shorts

`VIDEO.json` now contains the published video's address,
`{"url": "https://youtube.com/shorts/HB_JyyijAkQ"}`.

## What this repository does

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory. That is all it has to do: the house
reads the video itself through the YouTube Data API and scores its views.
Nothing the program writes about the video counts.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
