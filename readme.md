# volto-social-sharing <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Font_Awesome_5_regular_share-square.svg" alt="share-icon" width="40px" style="float:right"/>

Volto social sharing integration addon.

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.


![Desktop](./examples/desktop.png)
![Mobile](./examples/mobile.png)

<br>

## Usage
To inject the component in the project add the appextras configuration in the config.js file.

A suggested way is to use `appExtras` from settings object ([docs](https://docs.voltocms.com/recipes/appextras/)):

```jsx
import SocialSharing from '@codesyntax/volto-social-sharing/SocialSharing';

export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: '',
      component: SocialSharing,
    },
  ],
};
```

<br>


## To determine which paths will be displayed

You can determine in which views the component will be displayed

```js
export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: {
        path: ['**/ekitaldiak/**', '**/eventos/**', '/eu/albisteak/**', '/es/noticias/**'],
        exact: true,
      },
      component: SocialSharing
    },
  ],
};
```

<br>

## Customization
There are several parameters that can be customized

* **socialElements**: List of social items.
    * By default:
        * Facebook
        * Twitter
        * Whatsapp (Only on mobile)
        * Telegram (Only on mobile)
    * Options:
        * **name** (string): Social name
        * **fa_name** (array): Font awesome icon name. (It is necessary to add it in array format to determine the type of icon. Example: ["fab", "facebook-f"])
          * [Docs](https://fontawesome.com/how-to-use/on-the-web/using-with/react#features)
          * [Icon Gallery](https://fontawesome.com/icons?d=gallery)
        * **color** (string): CSS color value.
        * **sharing_url** (string): Link of the social network to share. ([Examples](https://github.com/bradvin/social-share-urls/blob/0c6d81fc950144e18ada062e0aba90d738b70d90/code/javascript/javascript/social-share-media.js#L151))
        * **only_mobile** (bool) *optional: Set to true if it will only be displayed in the mobile view.
* **bannerPosition**: Position of social items banner. 
    * By default: 
        * In the **desktop** view centered on the right.
        * In the **mobile** view centered on the bottom.
    * Options:
        * defaultPositions["desktop"] = {[React DOM Style](https://reactjs.org/docs/dom-elements.html#style)}
        * defaultPositions["mobile"] = {[React DOM Style](https://reactjs.org/docs/dom-elements.html#style)}
* **logoSize**: Font Awesome logo size. ([Doc](https://fontawesome.com/how-to-use/on-the-web/using-with/react#features))
    * By default: "lg".
    * [Options](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons#scale): "lg" | "xs" | "sm" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"       
* **buttonSize**: Button with and height.
    * By default: "30px"


<br>

## Add new social item

```js
// import default social list
import {DEFAULT_SOCIAL} from '@codesyntax/volto-social-sharing/defaultSettings';

// Push new item
DEFAULT_SOCIAL.push({
  name: "Pinterest",
  fa_name: ["fab", "pinterest-p"],
  color: "#c8232c",
  sharing_url: "http://pinterest.com/pin/create/link/?url=",
  id: "pt"
});

export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: {
        path: ['**/ekitaldiak/**', '**/eventos/**', '/eu/albisteak/**', '/es/noticias/**'],
        exact: true,
      },
      component: SocialSharing,
      props:{
           socialElements: DEFAULT_SOCIAL
      }
    },
  ],
};
```

#### Example

![pinterest_desktop](./examples/pinterest_desktop.png)
![pinterest_mobile](./examples/pinterest_mobile.png)


<br>

## Change existing social item value

```js
// import default social list
import {DEFAULT_SOCIAL} from '@codesyntax/volto-social-sharing/defaultSettings';

// Find social item by id
let facebook = DEFAULT_SOCIAL.find(social => social.id == "fb");
if (facebook) {
  facebook.color = "red";
}
export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: {
        path: ['**/ekitaldiak/**', '**/eventos/**', '/eu/albisteak/**', '/es/noticias/**'],
        exact: true,
      },
      component: SocialSharing,
      props:{
        socialElements: DEFAULT_SOCIAL
      }
    },
  ],
};
```

#### Example

![change_value_desktop](./examples/change_value_desktop.png)
![change_value_mobile](./examples/change_value_mobile.png)



<br>

## Remove existing social item

```js
// import default social list
import {DEFAULT_SOCIAL} from '@codesyntax/volto-social-sharing/defaultSettings';

// Remove social item by id
const index = DEFAULT_SOCIAL.findIndex(social => social.id === "fb");
if (index !== undefined) DEFAULT_SOCIAL.splice(index, 1);

export const settings = {
  ...defaultSettings,
  appExtras: [
    ...defaultSettings.appExtras,
    {
      match: {
        path: ['**/ekitaldiak/**', '**/eventos/**', '/eu/albisteak/**', '/es/noticias/**'],
        exact: true,
      },
      component: SocialSharing,
      props:{
        socialElements: DEFAULT_SOCIAL
      }
    },
  ],
};
```

