# jQuery-exec
##jQuery module
1. [Install](#install)
1. [Usage](#usage)
1. [Demo](#demo)

### How to use
#### Install
```html
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- Include jQuery exec -->
<script src="https://cdn.rawgit.com/finagin/jQuery-exec/master/jQuery-exec.min.js"></script>

```
#### Usage
```html
<div>
    <p class="content">
        Content
    </p>
</div>

<script>
    (function ($) {

        $(function () {

            var bool;

            /* Some logic */

            $("div")
                .exec(bool ? "addClass" : "removeClass")("hide")
                .find("p")
                .exec(!bool ? "addClass" : "removeClass")("hide");

        });

    })(jQuery);
</script>
```
#### Demo
<p data-height="265" data-theme-id="light" data-slug-hash="woeWNG" data-default-tab="html,result" data-user="finagin" data-embed-version="2" data-pen-title="StickyHeader" class="codepen">See the Pen <a href="https://codepen.io/finagin/pen/woeWNG/">StickyHeader</a> by Igor (<a href="http://codepen.io/finagin">@finagin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
