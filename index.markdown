---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Homepage
---
This homepage looks empty for now, initial deployment test to GitHub Pages.

<h2>Posts:</h2>
{% for post in site.posts%}
<a href="{{post.url}}">{{post.title}}</a>
{% endfor %}