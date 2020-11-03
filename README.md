# React Social Media Buttons - RSMB

RSMB is a complete ready to use react component for displaying the most common Social Media icons and format them as you wish.

## Getting started

```bash
npm install react-social-media-buttons
```

## Available icons

- email/mailto
- bBandsintown
- behance
- codepen
- dribbble
- dropbox
- facebook
- fivehundredpix
- flickr
- foursquare
- github
- google Play
- google
- instagram
- itunes
- linkedin
- medium
- meetup
- pinterest
- rdio
- reddit
- rss
- sharethis
- smugmug
- snapchat
- soundcloud
- spotify
- squarespace
- tumblr
- twitch
- twitter
- vevo
- vimeo
- vine
- vk
- vsco
- wechat
- whatsapp
- yelp
- youtube

### How to use

Check out the **[live demo here](https://react-social-media-buttons.vercel.app/)** to get an idea on how it works!

Import the component `SocialMediaButtons` from the library and pass the props of your social links and CSS.

```jsx
import SocialMediaButtons from 'react-social-media-buttons';

const MyComponent = () => {
  const links = ['https://github.com/jaumefapa', 'https://www.linkedin.com/in/jaume-fabrega/'];

  const buttonStyle = {
    backgroundColor: '#000000',
    borderRadius: '50%',
  };

  const iconStyle = { color: '#ffffff' };

  return (
    <div>
      <SocialMediaButtons buttonStyle={buttonStyle} iconStyle={iconStyle} />
    </div>
  );
};
```

## Props

| Prop name         |  Type   |       Default       | Required | Description |
| ----------------- | :-----: | :-----------------: | :------: | :---------: |
| `width`           | String! |       `50px`        |  false   |             |
| `height`          | String! |       `50px`        |  false   |             |
| `margin`          | String! |        `5px`        |  false   |             |
| `backgroundColor` | String! |      `#ffffff`      |  false   |             |
| `borderRadius`    | String! |        `50%`        |  false   |             |
| `border`          | String! | `2px solid #000000` |  false   |             |
| `borderColor`     | String! |          -          |  false   |             |
| `borderThickness` | String! |          -          |  false   |             |
| `borderStyle`     | String! |          -          |  false   |             |

### iconStyle

| Prop name |  Type   |  Default  | Required |    Description    |
| --------- | :-----: | :-------: | :------: | :---------------: |
| `color`   | String! | `#000000` |   true   | Color of the icon |

### openNewTab

| Prop name    |   Type   | Default | Required |             Description             |
| ------------ | :------: | :-----: | :------: | :---------------------------------: |
| `openNewTab` | Boolean! |  true   |  false   | Indicate if open links in a new tab |

## Other examples

#### Custom Options

It's possible to pass options and style objects to customize the way you prefer.

```jsx
<SocialMediaButtons
  links={
    [
      /* array of links */
    ]
  }
  buttonStyle={{
    width: '80px',
    height: '80px',
    border: '2px solid #000000',
    backgroundColor: '#919191',
  }}
  iconStyle={{
    color: '#ffffff',
  }}
/>
```

## Contributing

To contribue please read the [CONTRIBUTING.md](https://github.com/jaumefapa/react-social-media-buttons/CONTRIBUTING.md)

## Contributors

- Jaume Fàbrega - [GitHub](https://github.com/jaumefapa) - [LinkedIn](https://www.linkedin.com/in/jaume-fabrega/)

## Acknowledgments

- To Leonardo Di Vittorio for the idea and the demo ["inspiration"](https://gallereact.netlify.app/) - [GitHub](https://github.com/Leon31)
- To Jake Trent from whom I fork the original repo with all the svg icons - [GitHub](https://github.com/jaketrent/react-social-icons)
- To my colleagues who contributed with ideas, feedback and some refactorization suggestions. Special mention to Erik Pastor for finding that bug ([GitHub](https://github.com/erikpr1994))

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jaumefapa/react-social-media-buttons/LICENSE) file for details.
