---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Homepage
---
Here you can find my writings about anything that I feel like writing about. 

You can also find me on:

[GitHub](https://github.com/Hypnootis)
[LinkedIn](https://www.linkedin.com/in/tuomas-pasanen-85067a204/)
[itch.io](https://hypnootis.itch.io/)

Or you can [e-mail](mailto:tm.pasanen@outlook.com) me.

<h2>Posts:</h2>
{% for post in site.posts%}
<a href="{{post.url}}">{{post.title}}</a>
{% endfor %}