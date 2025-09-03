const baseURL = "gabriel.lts.app.br";
const bannerURL = "banner.png";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
  
  // "/pt-br": true,
  // "/pt-br/about": true,
  // "/pt-br/work": true,
  // "/pt-br/blog": true,
  // "/pt-br/gallery": false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env
const protectedRoutes = {
  "/work/post-path": true,
};

const style = {
  theme: "light", // dark | light
  neutral: "sand", // sand | gray | slate
  brand: "moss", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  // action: "https://usebasin.com/f/b75148f15cf1",
  action: "https://usebasin.com/f/876b4e72c7f4",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

const contact = {
  // action: "https://usebasin.com/f/b75148f15cf1",
  action: "https://usebasin.com/f/876b4e72c7f4",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "accent-background-weak",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

const api = {
  host: "https://gabriers.up.railway.app",
  devHost: "http://localhost:8001"
}

const langs = [
  "/pt-br",
  "/"
]

export {routes, protectedRoutes, effects, style, display, mailchimp, contact, baseURL, bannerURL, api, langs};
