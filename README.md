# Challenge Description

In `index.js` and `package.json` I added a money filter to be used in the template. I could of used Javascript, but tried to make it function more like Shopify and their money filter to display the price.

In `public/custom.js` I added jQuery for the slider plugin I used, Slick Slider. I also added the submit form functionality that looked for the selected variant and added the variant id to the form data to make a post request. Depending on success it showed a message to the user.

In `template.liquid` I added supporting css and js. I handled the template like you would `theme.liquid` by adding wrapping html tags around the content along with adding footer and header assets. I would probably change the number of assets I'm using, I went a bit overboard on making the PDP the way I wanted to look. I used Bootstrap because I'm familiar with it and most of the basic styles are already setup. 

For `product.liquid` I decided to copy the layout for [Nike's PDP](https://www.nike.com/t/air-max-270-womens-shoes-Pgb94t/DQ8585-801), matching Desktop and Mobile as much as I could. I added conditions based on availability of products and variants. The PDP is custom to the data and there could be improvements on getting dynamic variants and their pricing, images, and options added to the page. Also, adding a quantity selector as well.

If this was a Shopify theme, I would probably snippet most of the code from the slider, header, and selection. I would use Shopify's `option_selection.js` asset to help with choosing variants if there was more than one option. My favorite part was adding the selector, instead of using a default dropdown, I copied Nike's box selector for shoe sizes.
