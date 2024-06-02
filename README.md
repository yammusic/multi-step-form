# Multi Step Form

![React](https://img.shields.io/badge/React-v18-deepskyblue?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-v14-white?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-cyan?logo=Tailwind%20CSS)
![Typescript](https://img.shields.io/badge/Typescript-v5-blue?logo=typescript)

![Preview](https://raw.githubusercontent.com/yammusic/multi-step-form/main/public/preview.png)

## Description

This is a multi-step form application implemented using React and Next.js. The form guides the user through several steps, with the ability to navigate forward and backward between them. At the end, the data is sent to a mock REST API and displayed on a summary page.

## Demo

[https://multi-step-form-pz634l6iw-hackettyam.vercel.app/](https://multi-step-form-pz634l6iw-hackettyam.vercel.app/)

## Functionalities

- **Multi-step Navigation**: Users can move forward and backward through the form steps.
- **Form Validation**: Each step includes validation to ensure data integrity before moving to the next step.
- **Conditional Branching**: The form branches into different steps based on user input.
- **Data Submission**: Data is submitted to different APIs based on the selected profile type.
- **Summary Page**: After submission, users are redirected to a summary page displaying the entered data.
- **Responsive Design**: The form is styled using Tailwind CSS for a clean and responsive user interface.
- **Accessibility**: The form includes accessibility features to ensure a good user experience for all users.

## Tech Stack

- [React](https://reactjs.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [React Hook Form](https://react-hook-form.com/)
- [React Hook Mask](https://github.com/lucasbasquerotto/react-masked-input)
- [React Tailwind CSS Datepicker](https://react-tailwindcss-datepicker.vercel.app/)
- [Axios](https://axios-http.com/)
- [Day.js](https://day.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Eslint](https://eslint.org/)
- [Testing Library](https://testing-library.com/)
- [Typescript](https://www.typescriptlang.org/)

## Additional Resources

- Test API for Personal Profile: [https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942](https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942)
- Test API for Business Profile: [https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47](https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47)

## Run the app

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> [!NOTE]
> If you want run the production server:
> ```bash
> npm run build
> ```
> And then open the production build in the browser:
> ```bash
> npm run start
> ```

## Run the tests

To run the tests, run the following command:

```bash
npm run test
```
