# Harness Take-home

By Michael S. Hertzberg

Email: <mshertzberg@gmail.com>
LinkedIn: <https://linkedin.com/in/mshertzberg>

## 0. Start

```sh
npx pnpm install
npx pnpm run dev
```

## 1. Design Evaluation

### 1.1 Visual Analysis

Visual comp: <https://www.figma.com/file/33tYujVeib6E3PjNuB6kEC/00001?type=design&node-id=0-725&mode=design&t=7vHEDNLSONLZugI2-0>

- [ ] Font is Google Fonts, Inter
- [ ] Primary color is #00351C
- [ ] Secondary color is #C4DA5F
- [ ] Tertiary color is #F4F4F4
- [ ] Single landing page (Mobile view)
- [ ] Layout displays a ~sticky~ Header (height: 86px, padding: 0 17px 0 17px)
  - [ ] Header is comprised of:
    - [ ] Logo (124.91x32.68px) -> round these
    - [ ] Hamburger menu (44x40px)
- [ ] Main content is ~static~, variable height, and renders in sequential order:
  - [ ] Hero call-out
  - [ ] Displays full-width image (design is not 16:9, but we’ll use 16:9)
    - [ ] adjust to ~393x221px~ from *393x213px* to get a 16:9 ratio
    - [ ] Followed by block (padding: 25px 34px 30px 34px)
      - [ ] With a headline (font-size: 24px; line-height: 30px; font-weight: 600) and text (font-size: 22px; line-height: 27.5px; font-weight: 600)
  - [ ] Following a section block (padding-top: 40px)
    - [ ] Headline displaying "How it works" (font-size: 24px; line-height: 30px; font-weight: 600)
    - [ ] Displays a list of Cards (padding-top: 40px)
      - [ ] Card contains a block (padding: 10px 17px 10px 17px)
        - [ ] With a headline (font-size: 18px; line-height:23px; font-weight: 600; color: color-primary)
        - [ ] Followed by text (font-size: 16px; line-height:22px; font-weight: 300; color: color-black)
      - [ ] Followed by a block
        - [ ] With accompanying responsive icon/image
- [ ] Layout contains a ~sticky~ CTA positioned at the bottom of the viewport (min-height: 92px; padding: 9px 24px 9px 24px)
  - [ ] Contains a Button CTA

## 2. Identify Knowns, Unknowns, Assumptions, & Discoveries

### 2.1 Knowns

- [ ] Header and CTA call-out banner are sticker at the top and bottom, respectively.
- [ ] Header has a logo and hamburger menu
- [ ] Main content shows a hero with some centered content
- [ ] Cards display icons and content
- [ ] Application calls an API endpoint that contains theme data:
  - [ ] bankName (string)
  - [ ] logo (string of svg)
  - [ ] primaryColor (string of hex code)
  - [ ] secondaryColor (string of hex code)

### 2.2 Unknowns

- [ ] What does clicking on the hamburger do?
- [ ] What is the minimum and maximum size of logo and images?
- [ ] What displays when the hamburger menu disappears?
- [ ] Responsive behavior beyond small devices
- [ ] Is a footer needed?
- [ ] Where does the CTA lead when clicked?
- [ ] Does Logo need to be linked, if so, to where?
- [ ] Accessibility (a11y) requirements?
- [ ] Are there tertiary and accent colors?

### 2.3 Assumptions

- [ ] There may be multiple pages
- [ ] Theme & color scheme support with CSS variables
- [ ] Hamburger menu will hide at the medium breakpoint

### 2.4 Discoveries

- [ ] API endpoint returned a color that has either an extra digit or is the alpha channel

## 3. Prototype

### 3.1 Initial project with `create-next-app`

`pnpm create next-app --tailwind webapp-submission`

This generates a NextJS application with React and Tailwind.

To start this in developer mode, run `pnpm run dev` after installing dependencies with `pnpm install`

### 3.2 Layout, modules and components

- **Tailwind** to standardize style & out-of-the-box theme-ability (See [Tailwind](https://tailwindcss.com/))
  - For fast prototyping, inline class names were used. These can be replaced later for reusable components.

#### 3.2.1 Directory Structure

```sh
src
├── components/          - React components
│   └── layout.tsx       - NextJS Layout component
├── lib/                 - Libs and includes
│   └── font-inter.ts    - Google Inter font
├── pages/               - NextJS Page components
│   ├── _app.tsx         - Custom NextJS app (loads store)
│   ├──_document.tsx     - Custom NextJS document
│   ├── favicon.ico      -
│   ├── globals.css      - Global styles + Tailwind
│   ├── index.tsx        - Homepage
│   └── rootStore.ts     - MST Store
└── svgs/                - Icons
    ├── *.svg
```


<!-- [ next steps in the process … ]

## 4. Feedback and Validation

### 4.1 Stakeholder Review

Share prototype, gather and address feedback.

### 4.2 Usability Testing

Conduct usability tests to evaluate effectiveness.

## 5. Documentation

### 5.1 Document Assumptions

Keep a record of assumptions made during prototype creation.

### 5.2 Capture Feedback

Document stakeholder and user feedback. -->
