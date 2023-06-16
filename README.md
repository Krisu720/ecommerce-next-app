## Demo

https://ecommerce-next-app-krisu720.vercel.app/

<h5>If you dont want to make account you can use demo credentials:</h5>

email:

```bash
demo@demo.com
```
password:

```bash
demo12345
```

## Used Technologies

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>

- [Prisma](https://www.prisma.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [HeroIcons](https://heroicons.com/)
- [Radix-ui](https://www.radix-ui.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [next-auth](https://next-auth.js.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [uuid](https://www.npmjs.com/package/uuid)
- [Swiper](https://swiperjs.com/react)

## Installation
1.First clone repository or download from github.
```
git clone https://github.com/Krisu720/ecommerce-next-app.git
```
2.Then install missing packages using node.
```
npm install
```
3.Create .env file which includes:
```
DATABASE_URL=#postgresdb link#
NEXTAUTH_SECRET=#random letters secret#
NEXTAUTH_URL=#default url for example http://localhost:3000/#
```
4.Migrate prisma database.
```
npx prisma migrate dev
```
5.Insert some products into database (you can use npx prisma studio).

6.After installation run development server.
```
npm run dev
```


