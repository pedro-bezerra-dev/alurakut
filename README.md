<div align="center" style="margin-bottom: 20px;">
  <img src="https://alurakut.vercel.app/logo.svg">
</div>
<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
  <a href="https://github.com/pedro-henrique-sb/alurakut/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/pedro-henrique-sb/alurakut?color=d81d99&style=flat-square"></a>
  <a href="https://github.com/pedro-henrique-sb/alurakut/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/pedro-henrique-sb/alurakut?color=d81d99&style=flat-square"></a>
</div>
<h1></h1>

![demo](src/assets/images/demo.png)

## 📑 Description

The rebirth of Orkut with the most modern Front-end technologies.

## 🧰 Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org/)
- [NextJS](https://www.nextjs.org/)
- [DatoCMS](https://datocms.com/)
- [Nookies](https://www.npmjs.com/package/nookies)
- [Styled-components](https://styled-components.com/)

## 🧪 How to run

Access the version currently on air on [`https://alurakut-bay.vercel.app/`](https://alurakut-bay.vercel.app/) or...

- Clone the repository
- Install dependencies with `yarn`
- Create project on DatoCMS according to [this structure](#creating-project-on-datocms)
- Create `.env.local` file and add the environment variables `DATO_API_READ_ONLY_TOKEN` and `DATO_API_FULL_ACCESS_TOKEN` with the Read-only API token and Full-access API token, respectively, of the your project on DatoCMS
- Start the server with `yarn dev`

Access from [`localhost:3000`](http://localhost:3000) your browser

## ☑️ Step by steps

<a id="creating-project-on-datocms"/>

### Creating project on DatoCMS

On tab *Settings* in the your project dashboard create the follow models:
- Community
- Community person
- Follower

Each of these models must contain the fields:
- Name
- URL Image
- Link to
- Creator slug

---

Criado com orgulho durante a Imersão React da Alura 🤿
