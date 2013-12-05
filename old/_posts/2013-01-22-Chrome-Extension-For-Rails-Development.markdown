---
layout: post
categories : [Ruby, Rails]
tags : [Rails, Chrome, Extension, RailsPanel, debug in console]
title : Faster Development on Rails with RailsPanel.
---
<img class="aligncenter" alt="RailsPanel Screenshot" src="https://dl.dropbox.com/u/69357609/Captured/WOvkF.png"  />
**RailsPanel** is an **extension for Chrome** that allow you to have development.log directly in the Developper Tool (F12). 


The 1/2 step is adding in your **Gemfile** :
<pre>
  <code class="ruby">
group :development do
    gem 'meta_request', '0.2.1'
end
  </code>
</pre>
**Finally**, install the **Chrome extension** from the [Chrome Store](https://chrome.google.com/webstore/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg).

Enjoy ! 

Github : [RailsPanel on Github](https://github.com/dejan/rails_panel)

Thanks to @steveklabnik
