---
layout: base.njk
title: "blog"
tags: "nav"
pagination:
  data: collections.posts
  size: 3
  alias: posts
---

## blog
<section>
  <p>Explore my thoughts. I like to write about the natural world, farming/gardening, my explorations in tech, and personal growth.</p>
</section>

{% for post in collections.posts reversed %}
  <div class="blog">
    <div>
      <hr>
      <small>
        {{ post.date | postDate }}
      </small>
    </div>
    <div>
      <a class="blog-title" href="{{post.url}}">{{ post.data.title }}</a>
    </div>
  </div>
    {% excerpt post %}
{% endfor %}
<section>
<nav aria-labelledby="my-pagination">
  {% if pagination.href.previous %}<a href="{{ pagination.href.previous }}">Previous</a>{% else %}{% endif %}
  
  {% if pagination.href.next %}<a href="{{ pagination.href.next }}">Next</a>{% else %}{% endif %}
  </ol>
</nav>
</section>



