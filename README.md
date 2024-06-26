
# OpneDevHub

Spotlight on Open-Source Innovations /
Navigate through the highest-rated open-source projects, as chosen by the tech community.


![App Screenshot](https://res.cloudinary.com/dtmp7op6k/image/upload/v1714495290/Screenshot_2024-04-30_220928_ao7tz8.png)


![App Screenshot](https://res.cloudinary.com/dtmp7op6k/image/upload/v1714495274/Screenshot_2024-04-30_220955_dog9he.png)


## Connect with us

As a community, we always encourage people to share their thoughts and ideas. Do you want to talk to us? Follow our Twitter page ⬇️

[![TWITTER - Join](https://img.shields.io/badge/TWITTER-Follow-f3f6f4?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/nikhil_nigamnik)

## Tech stack

![Next.js](https://img.shields.io/badge/Next.js-f3f6f4?style=for-the-badge&logo=next.js&logoColor=black)

![tailwind css](https://img.shields.io/badge/tailwind_css-f3f6f4?style=for-the-badge&logo=tailwindcss&logoColor=black)

![MongoDB](https://img.shields.io/badge/MongoDB-f3f6f4?style=for-the-badge&logo=mongodb&logoColor=black)

![Prisma](https://img.shields.io/badge/Prisma-f3f6f4?style=for-the-badge&logo=prisma&logoColor=black)

**Client** : NextJs, TailwindCss

**Server** : NextJs API, MongoDB, Prisma ORM, Next-Auth



## Authors

- [@nikhilnigamnik](https://www.github.com/nikhilnigamnik)


## Run Locally

> Before getting into it, make sure you have [yarn](https://yarnpkg.com/) and [prisma](https://prisma.io) installed.

1. Fork the project

2. Clone the repo

```bash
  git clone https://github.com/<your-github-username->/open-dev-hub
```

3. Go into the project directory
   ```sh
    cd open-dev-hub
   ```
4. Create an `.env` file from the `.env.template` file (copy everything in the `.env.template` file and put it in the `.env` file with appropriate values)

   - `MONGODB_URI` is the `connection string` which you'll get from mongodb [for reference](https://www.mongodb.com/docs/manual/reference/connection-string/).
   - `NEXTAUTH_SECRET` Just pass any `random string` or you can quickly create a good value on the command line via this `openssl command`.
     <br>

   ```sh
    openssl rand -base64 32
   ```

5. Install all the dependencies
   ```sh
   npm / yarn install
   ```
8. Start the application development server
   ```sh
   npm / yarn run dev
   ```
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Support

Don't forget to support us by leaving a star ⭐
