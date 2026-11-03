---
date: 2026-11-03
title: Minimalism
description: Theory of Code (1)
tags: [unix]
---

## Abstract

From Wikipedia: [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)

> Later, in 1994, it was summarized with the explicit name:
"The Unix philosophy" by Peter H. Salus, who credited it to McIlroy:

- Write programs that do one thing and do it well.
- Write programs to work together.
- Write programs to handle text streams, as a universal interface.

Obviously not all programs respect this at all. Even really popular tools
get "wider" over time as more features are "wanted", yet in practice 80% of
usage only touches 20% of the code.

As codebases grow, they get harder to debug, or even to read "mentally".
Doing one thing and doing it well (DOTADIW) keeps software modular.

## Coding

Over the last few years I've been looking at a lot of code, on different
hosting providers but also inside my own systems (mostly Arch, Alpine, Artix
and Fedora).

The most interesting take-aways are simple:

- **One goal:** define one thing you want to excel at and do nothing else
  (unless it's well cut out).
- **Dependencies are a plague:** anything you can trim is a win. Only
  essentials should remain.
- **Opt-in beats opt-out:** `--enable-X` instead of `--disable-Y`.

### Average sized

Let's say I want to build `curl` and use it very simply. Disabling a few dozen
build flags, I can squish the executable to half of the original, yet
to me it has exactly the same perceived value.

Ran this test and got it down to about 700kb. Still used it
normally, which for me is just `curl -O <url>`...

Down from the original ~1.4mb.

You can build it with the following flags:

```shell
./configure --disable-shared --with-openssl --with-nghttp2 \
        --disable-ftp --disable-file --disable-ipfs --disable-ldap \
        --disable-ldaps --disable-rtsp --disable-dict --disable-telnet \
        --disable-tftp --disable-pop3 --disable-imap --disable-smtp \
        --disable-gopher --disable-mqtt --disable-websockets \
        --without-libssh2 --without-libpsl --without-libidn2 \
        --without-brotli --without-zstd --without-gssapi \
        --without-ngtcp2 --without-nghttp3 \
        --disable-proxy --disable-doh --disable-cookies --disable-mime \
        --disable-form-api --disable-netrc --disable-alt-svc --disable-hsts \
        --disable-http-auth --disable-unix-sockets --disable-bindlocal \
        --disable-headers-api --disable-get-easy-options --disable-verbose \
        --disable-dnsshuffle --disable-kerberos-auth --disable-negotiate-auth \
        --disable-aws --disable-manual --disable-docs --disable-libcurl-option
```

And finally run `make` (and `strip`, + more `CFLAGS` if you want to go lower).
Probably, you could get to something like ~500kb.

Now let's imagine it **was the opposite**? `enable-something-i-dont-use` instead.
Flipping the model around like this is fresh air (to me).

So I guess the question here is not about disk space, but about how you decide
to design software and its actual impact on what you need/want from said tool.

Thought becomes that, we already know it does more than one thing... But are
we ever questioning parts that might equate to too much code or just barely used.

### Executed vs Instrumented

So I measured it. `curl`'s `lib/` + `src/` is ~147K lines of C (`cloc`).
A stock Linux build compiles ~57K executable lines out of that. Running
`curl -O <url>` over https once with `gcov`: 12.8K of them get executed.

That's 22.5% of what ships, ~9% of the source. The 80/20 thing but real.
Granted, one happy-path run. But still illustrates well the idea.

### My rules!

- **Tools should do what they claim.** You only find bugs when you check
  what the code claims to do against its actual behavior.
- **Tools should fail loud.** Instead of failing silently (and making it
  look like it did something!). Error handling paths are where this hides.
- **Decouple.** Submodules or separate repos, instead of shoving together
  things that don't meaningfully co-exist. That often creates "tangled
  logic" that is hard to... untangle.

## Conclusion

Smaller, opt-in, loud. Start from nothing and add what you need: less to
read, less to break, and when it does break, you'll know why.

---
