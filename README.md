# astro-umami-analytics

An Astro component for easy integration of Umami analytics into your Astro projects.

## Installation

To install astro-umami-analytics, run the following command in your project directory:

```bash
npm install astro-umami-analytics
```

## Usage

To use the Umami component in your Astro project, follow these steps:

1. Import the Umami component in your Astro layout or page:

```astro
---
import { Umami } from "astro-umami-analytics";
---
```

2. Add the Umami component to your `<head>` section, providing your Umami website ID:

```astro
<head>
  <!-- Other head elements -->
  <Umami id="your-umami-website-id" />
</head>
```

Here's a complete example of how to use the Umami component in an Astro layout:

```astro
---
import { ViewTransitions } from "astro:transitions";
import { Umami } from "astro-umami-analytics";

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <ViewTransitions />
    <Umami id="your-umami-website-id" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

Make sure to replace `"your-umami-website-id"` with your actual Umami website ID.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

- Vadym Rusin <rusinvadym@gmail.com>