---
title: Hello, Jekyll
description: In this post I explain why I moved to Jekyll and what challenges I had to face doing that
category: web
---
Three years after this blog was [created][first post], and many years after using [wordpress][] as a blogging platform, I decided to migrate my blog to [Jekyll][] (a static website generator).

This post is not only intended to tell the readers that I moved to another platform but also explain why I did it, and what challenges I needed to face.

+++

## Jekyll?

The first thing I need to explain -- for those who are unaware of -- is *what is [Jekyll][]* and what is a static site generator.

You are familiar with static pages. Just write your own HTML file, put it in a server and *voilà*: any request for that location will return that exact page you created.

You're also familiar with dynamic websites. Those where a server not only give the user a requested page, but actually dynamically generate the page for that request, for every request (unless there's caching involved).

The point is: you don't need to generate a page for every user request if your page don't change that often. Some may say that a caching system would solve this. They're right, but why not generate those pages only when content really change?

That's when a static website generator comes to place. The pages are generated only when a content changes, and when the owner of the website decides to build it. This blog, for example, was builded by me right after I finished this post, and the output files were uploaded to a static web server. I don't even need PHP (or any other language) extensions anymore.

Enough talking about Jekyll. If you want to know more, you can go to their [website][Jekyll] and read the [documentation][Jekyll documentation]. It's small, simple and well written.

## Motivation

Last year I decided to buy my own [VPS][Frantech] after years of [shared hosting][Dreamhost]. This made me care more about server performance and I even decided to abandon Apache once and for all to use Nginx in all its glory (I know, I'm kind of late on that). This made me realize that the current configuration of my blog was using too much resource of my humble server. I also wasn't too happy about Wordpress.

**Wordpress is bloated**. I was tired of dealing with Wordpress updates. Every time I logged on my admin interface, there was always an update available which fixed bugs that could compromise the security of my blog, or even my server. Also, I had to track the updates of the plugins, and worry if one of them would stop working after an update. Specially those plugins using deprecated APIs. These things really bugged me.

But the last straw was when I had my blog removed from [Planet KDE][] after my feed started returning a `HTTP 500` error because my Nginx server decided not to serve PHP files correctly. A *restart* on the server solved the issue but I was already worried that my blog would go down again.

These things made me migrate to Jekyll, but since I decided to have total control over my blog, the transition wasn't smooth.

## Creating a theme from scratch

Most of the Wordpress bloggers don't bother about creating its own theme. Mostly because there are plenty available. Jekyll themes, although [beautiful][jekyll themes], are not as extensive as Wordpress themes. Also, I wanted to configure the entire blog by myself so I could have total control over it (hackers problem). So I bought a [beautiful HTML theme][Basic theme] and started reading [Jekyll's documentation][Jekyll documentation].

The first thing I needed to worry was the template itself. Although beautiful, it didn't respect HTML semantics (it used a `<h4>` as a post title just because the creator thought using a `<h1>` would make the title too big; it used `<section>` where it should use an `<article>`; among other annoying things).

Then, I had to deal with content migration. Till this date, I've only written 5 posts on my blog. Not so many, but it still gave me some trouble. [One of the posts][Pong post] relied on a [Wordpress plugin][Syntax highligther] for syntax highlighting[^jekyll-highlight] and had configure the same JavaScript library for this new blog.

There are some other things that come ready with any wordpress theme and I had to do all by myself. These are:

- Posts metadata (show categories and tags)
- Pagination
- Archive page (see the [code for my archive page][archive code] to understand the pain)
- Creating a **Read more** functionality
- Facebook share/like widget (Wordpress has a plugin for that)
- Posts comments
- RSS feed

Another thing really important to keep in mind is to maintain the old URL path for old posts, or you would have some broken links to your blog, which is terrible.

But what did I get after all this trouble?

## The good parts

I won't write an extensive text about the benefits of a static website but I must mention the key points:

> Markdown, Security, hosting, github pages, versioned with git, easy to maintain mantain afa asffa.

- Security: no need to worry about a outdated blog anymore
- Reliability: it's a static page. Even I can write a server in C to serve static pages
- Hosting: it won't use a fraction of the resources used by Wordpress, and I still can host in [github][Github pages]

## Final remarks

In total, it took me a week of dedicated work just to get the blog up and running the way I wanted to be. You don't have to go through all this at all. There are plenty of [Jekyll themes][] available and some [migration tools][]

[first post]: {% post_url 2012-04-26-okular-summer-of-code %}
[Jekyll]: http://jekyllrb.com/
[Wordpress]: #
[Frantech]: #
[Dreamhost]: #
[Planet KDE]: https://planetkde.org/
[Jekyll themes]: https://github.com/jekyll/jekyll/wiki/Themes
[Basic theme]: http://themeforest.net/item/basic-ultraclean-responsive-blog-theme/3726332
[Jekyll documentation]: http://jekyllrb.com/docs/home/
[archive code]: #
[Migration tools]: #
[Github pages]: http://jekyllrb.com/docs/github-pages/
[Pong post]: #
[Jekyll syntax highlight]: #
[Syntax highligther]: #

[^jekyll-highlight]: I needed to highlight some lines of the code snippet and [Jekyll's syntax highlight][Jekyll syntax highlight] don't support that.
