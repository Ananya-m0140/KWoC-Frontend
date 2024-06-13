<div id="top></div>

<!-- README TEMPLATE BASED ON https://github.com/proffapt/myREADME -->
<!-- PROJECT SHIELDS -->
<div align="center">
  <p align="center">
    <a href="https://kossiitkgp.org">
      <img alt="KOSS Shield" src="https://img.shields.io/badge/With%20%E2%9D%A4%EF%B8%8F-KOSS-blue?style=for-the-badge">
    </a>
    <a href="https://github.com/kossiitkgp/KWoC-Frontend/blob/master/LICENSE">
      <img alt="License Shield" src="https://img.shields.io/github/license/kossiitkgp/KWoC-Frontend.svg?style=for-the-badge">
    </a>
    <a href="https://github.com/kossiitkgp/KWoC-Frontend/contributors">
      <img alt="Contributors Shield" src="https://img.shields.io/github/contributors/kossiitkgp/KWoC-Frontend.svg?style=for-the-badge">
    </a>
  </p>
</div>

<!-- PROJECT LOGO -->
<br />
<!-- UPDATE -->
<div align="center">
  <a href="https://github.com/kossiitkgp/KWoC-Frontend">
    <img width="140" alt="KWoC Logo" src="https://raw.githubusercontent.com/kossiitkgp/design/master/logo/kwoc/kwoc_logo.png">
  </a>

  <h3 align="center">KWoC Frontend</h3>

  <p align="center">
  <!-- UPDATE -->
    <i>The truth redefined, once again.</i>
    <br />
    <a href="#table-of-contents"><strong>Get Started »</strong></a>
    <br />
    <a href="https://kwoc.kossiitkgp.org">Kharagpur Winter of Code</a>
    ·
    <a href="https://github.com/kossiitkgp/KWoC-Backend">Backend</a>
  </p>
</div>

## Table of Contents

- [Development](#development)
  - [Setting Up Locally](#setting-up-locally)
- [Project Structure](#project-structure)
  - [File Structure](#file-structure)
  - [Libraries/Frameworks Used](#librariesframeworks-used)
- [Archival](#archival)
<p align="right">(<a href="#top">back to top</a>)</p>

## Development

See also [Contributing Guide](./CONTRIBUTING.md), [Learning Guide](./learn.md).

### Setting Up Locally

- Install [NodeJS](https://nodejs.org/en).
- Install or enable [PNPM](https://pnpm.io/installation).
- Clone this repository.
- Run `pnpm install` in the cloned repository to download all dependencies.
- Run `pnpm start` to start a local development server.
- Optionally set up [KWoC Backend](https://github.com/kossiitkgp/kwoc-backend) locally.

<p align="right">(<a href="#top">back to top</a>)</p>

## Project Structure

### File Structure

```
.
├── public
└── src
   ├── assets
   ├── components
   ├── data
   ├── hooks
   ├── styles
   ├── utils
   ├── constants.ts
   └── App.tsx
```

- `public`: Contains public files such as `index.html`.
- `src`: Contains source files (JS, SCSS, assets, etc.)
  - `assets`: Contains assets used in the source, such as images and icons.
  - `components`: Contains reusable react components.
  - `data`: Contains raw data.
  - `styles`: Contains all stylesheets (SCSS).
  - `utils`: Contains commonly used util functions.
  - `pages`: Contains views for each of the pages.
  - `constants.ts`: Contains globally used constants.
  - `App.tsx`: Contains the top-level `App` component.

### Libraries/Frameworks Used

- [React](https://reactjs.dev): For redefining the truth.
- [SASS](https://sass-lang.com/): For redefining CSS styles.
- And [many more](./package.json).
<p align="right">(<a href="#top">back to top</a>)</p>

## Archival

See also [KWoC Docs](https://github.com/kossiitkgp/docs/blob/master/events/kwoc.md#certificates).

After KWoC ends, the website is archived. The stats data (including the total PRs, total commits, total contributors, and individual stats) is extracted from wherever the database is hosted and added to the site source.

The archived source code is committed to a branch named `kwoc-xx-archive` and hosted on `kwocxx.kossiitkgp.org`, where `xx` represents the last two digits of the year. The archive is also hosted on `kwoc.kossiitkgp.org` until the following year's website is deployed.

The development for the next KWoC website continues in the default branch.

> **WARNING** DO NOT COMMIT ANY PERSONAL DATA TO THE ARCHIVE.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#top">back to top</a>)</p>

---

> Please update this documentation whenever changes are made to this project or any other relevant project that may affect this one. Future humans will praise you.
