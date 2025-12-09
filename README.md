<a name="readme-top"></a>

# linkup - Modern Next.js powered Video calling app



# :notebook_with_decorative_cover: Table of Contents



</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
zoom-clone/
  |- actions/
    |- stream.actions.ts
  |- app/
    |-- (auth)/
        |--- sign-in/[[...sign-in]]/
        |--- sign-up/[[...sign-up]]/
    |-- (root)/
        |--- (home)
        |--- meeting
        |--- layout.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- call-list.tsx
    |-- end-call-button.tsx
    |-- home-card.tsx
    |-- loader.tsx
    |-- meeting-card.tsx
    |-- meeting-room.tsx
    |-- meeting-setup.tsx
    |-- meeting-type-list.tsx
    |-- mobile-nav.tsx
    |-- navbar.tsx
    |-- sidebar.tsx
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- hooks/
    |-- use-get-call-by-id.ts
    |-- use-get-calls.ts
  |- lib/
    |-- utils.ts
  |- public/
    |-- icons/
    |-- images/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- canvas.ts
  |- .env.example
  |- .env.local
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in **root** directory.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk auth redirect urls
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# stream api keys
NEXT_PUBLIC_STREAM_API_KEY=xxxxxxxxxxxxxxxxxxxxxx
STREAM_SECRET_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# app base url
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```

### 5. Obtain Clerk Authentication Keys

1.  **Source**: Clerk Dashboard or Settings Page
2.  **Procedure**:
    - Log in to your Clerk account.
    - Navigate to the dashboard or settings page.
    - Look for the section related to authentication keys.
    - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` provided in that section.

### 6. Specify Public App URL

1.  **Procedure**:
    - Replace `http://localhost:3000` with the URL of your deployed application.

### 7. Set Up Stream

1. **Create a Stream Account**:

   - If you don't have a Stream account, sign up at [GetStream.io](https://getstream.io/).

2. **Create a New App**:
   - After logging in, navigate to the Stream dashboard.
   - Click on "Create App" to set up a new application for Zoom-Clone.
   - Provide a name for your app and select the appropriate region.

### 8. Obtain the Stream API Key and Secret Key

1. **Navigate to the App Settings**:

   - In your Stream dashboard, select the app you created for Zoom-Clone.
   - Go to the "Overview" or "Keys" section.

2. **Copy the API Key**:

   - You will find the "API Key" listed in the app details. Copy this key.

3. **Copy the Secret Key**:
   - In the same section, you will find the "Secret Key". Copy this key as well.

### 9. Save and Secure:

- Save the changes to the `.env.local` file.

10. Install Project Dependencies using `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

11. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Upcoming Meetings](/.github/images/img2.png "Upcoming Meetings")

![Live Audio/Video Call](/.github/images/img3.png "Live Audio/Video Call")

![View Recordings](/.github/images/img4.png "View Recordings")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :wrench: Stats

[![Stats for Yoom](/.github/images/stats.svg "Stats for Yoom")](https://pagespeed.web.dev/analysis?url=https://clone-yoom.netlify.app "Stats for Yoom")


## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before adding. Thanks for having patience.

## :heart: Liked This Project?

If you found this project helpful or you learned something from it, consider giving it a :star: on Github!