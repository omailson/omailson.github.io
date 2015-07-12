---
title: Hello, Jekyll
description: In this post I explain why I moved to Jekyll and what challenges I had to face doing that
category: web
---
Three years after this blog was [created][first post], and many years after using [wordpress][] as a blogging platform, I decided to migrate to [Jekyll][]: a static website generator.

This post is not only intended to tell the readers that I moved to another platform but also explain why I did it, and what challenges I had to face.

+++

## Jekyll?

The first thing I need to explain -- for those who are unaware of -- is *what is [Jekyll][]* and what is a static site generator.

You are familiar with static pages. Just write your own HTML file, put it in a server and *voilà*: any request for that location will return that exact page you created.

You're also familiar with dynamic websites. Those where a server not only give the user a requested page, but actually dynamically generate the page for that request, for every request (unless there's caching involved).

The point is: you don't need to generate a page for every user request if your page don't change that often. Some may say that a caching system would solve this. They're right, but why not generate those pages only when content really changes?

That's when a static website generator comes to place. The pages are generated only when a content changes, and when the owner of the website decides to build it. This blog, for example, was built by me right after I finished this post, and the output files were uploaded to a static web server. I don't even need PHP (or any other language) extensions anymore.

If you want to know more, you can go to their [website][Jekyll] and read the [documentation][Jekyll documentation]. It's small, simple and well written.

## Motivation

Last year I decided to buy my own [VPS][Frantech] after years of [shared hosting][Dreamhost]. This made me care more about server performance and I even decided to abandon Apache once and for all to use Nginx in all its glory (I know, I'm kind of late on that). I also realized that the current configuration of my blog was using too many resources of my humble server, which led me to think carefully about keeping my Wordpress install.

I could choose to move to [Wordpress.com][] free hosting service but they have serious limitations if you don't pay for their subscription. That's why I chose to host the blog myself. Also, I started to feel tired of Wordpress, and here's why:

**Wordpress is bloated**. Look at their admin dashboard. It's a bloat of options you (a common blogger) will rarely use. Also, writing a post in Markdown > writing a post in HTML.

**I was tired of dealing with Wordpress updates**. Every time I logged on my admin interface, there was always an update available, which fixed bugs that could compromise the security of my blog, or even my server. Also, I had to track the updates of the plugins, and worry if one of them would stop working after an update. Specially those plugins using deprecated APIs. These things really bugged me.

**Deal with dynamic content generation**. In other words, I had to properly configure my PHP and MySQL installation and worry about backing up my blog. That's something that I did for a living in the past but not anymore. The more I thought about it, the more static pages seemed more attractive to me.

But the last straw was when I had my blog removed from [Planet KDE][] after my feed started returning a `HTTP 500` error because my Nginx server decided not to serve PHP files correctly. A *restart* on the server solved the issue but I was already worried that my blog would go down again.

These things made me migrate to Jekyll but since I decided to have total control over my blog, the transition wasn't smooth.

## Creating a theme from scratch

Most of the Wordpress bloggers don't bother about creating its own theme. Mostly because there are plenty available. Jekyll themes, although [beautiful][jekyll themes], are not as widely available as Wordpress themes. Also, I wanted to configure the entire blog by myself so I could have total control over it (hackers problem). So I bought a [beautiful HTML theme][Basic theme] and started reading [Jekyll's documentation][Jekyll documentation].

The first thing I needed to worry was the template itself. Although beautiful, it didn't respect HTML semantics (it used a `<h4>` as a post title just because the creator thought using a `<h1>` would make the title too big; it used `<section>` where it should use an `<article>`; among other annoying things).

Then, I had to deal with content migration. Till this date, I've only written 5 posts on my blog. Not so many, but it still gave me some trouble. [One of the posts][Pong post] relied on a [Wordpress plugin][Syntax highligther] for syntax highlighting[^jekyll-highlight] and I had to configure the same JavaScript library for this new blog.

There are some other things that come ready with any wordpress theme and I had to do all by myself, such as:

- Posts metadata (show categories and tags)
- Pagination
- Archive page (see the [code for my archive page][archive code] to understand the pain)
- Creating a **Read more** functionality
- Facebook share/like widget (Wordpress has a plugin for that)
- Posts comments[^disqus]
- RSS feed

Another thing really important to keep in mind is to maintain the old URL path for old posts, or you would have some broken links to your blog, which is terrible.

But what did I get after all this trouble?

## The good parts

I won't write an extensive text about the benefits of a static website but I must mention the key points:

- Security: no need to worry about a outdated blog anymore
- Reliability: it's a static page. Even I can write a server in C to serve static pages
- Hosting: it won't use a fraction of the resources used by Wordpress, and I still can host in [github][Github pages]
- Versioned with git: version and backup your blog using the same tool I use to version my codes is a plus
- No bloated admin interface: you just write your posts using Markdown, commit and push to your blog's git repository, and if you're using [github pages][], your new post will be readily available for anyone. The same applies to any change you make to your blog
- Simplicity: any change I want to perform on my blog's layout or posts structure will now be less painful

## Final remarks

In total, it took me a week of dedicated work just to get the blog up and running the way I wanted to be. You don't have to go through all this at all. There are plenty of [Jekyll themes][] available and some [migration tools][].

So if you're planning to run by Jekyll's road, I'd say "go for it". I am really proud of the final result here.

[First post]: {% post_url 2012-04-26-okular-summer-of-code %}
[Jekyll]: http://jekyllrb.com/
[Wordpress]: https://wordpress.org/
[Frantech]: http://frantech.ca/
[Dreamhost]: https://www.dreamhost.com/
[Planet KDE]: https://planetkde.org/
[Jekyll themes]: https://github.com/jekyll/jekyll/wiki/Themes
[Basic theme]: http://themeforest.net/item/basic-ultraclean-responsive-blog-theme/3726332
[Jekyll documentation]: http://jekyllrb.com/docs/home/
[Archive code]: https://github.com/omailson/omailson.github.io/blob/master/archive.html
[Migration tools]: http://import.jekyllrb.com/docs/home/
[Github pages]: http://jekyllrb.com/docs/github-pages/
[Pong post]: {% post_url 2013-02-07-simple-pong-game-using-html5-and-canvas %}
[Jekyll syntax highlight]: http://jekyllrb.com/docs/templates/#code-snippet-highlighting
[Syntax highligther]: http://alexgorbatchev.com/SyntaxHighlighter/
[Disqus]: https://disqus.com
[Disqus migration]: https://help.disqus.com/customer/portal/articles/466255
[wordpress.com]: https://wordpress.com

[^jekyll-highlight]: I needed to highlight some lines of the code snippet and [Jekyll's syntax highlight][Jekyll syntax highlight] don't support that.
[^disqus]: Since the page is static, I had to use a 3rd party discussion service to allow users to comment on my posts. Most people using Jekyll choose [Disqus][] and I'm no different. They even have an [automated process][Disqus migration] to migrate Wordpress comments to Disqus.
