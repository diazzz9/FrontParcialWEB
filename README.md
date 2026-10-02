# University Catalog — Angular Frontend

Angular 21 web client for the [University Catalog API](https://github.com/diazzz9/BackParcialWEB). It lists the university's faculties and lets users register new ones through a form, talking to the Spring Boot backend over HTTP.

## Tech stack

- **Angular 21** — standalone components, server-side rendering (`@angular/ssr` + Express)
- **TypeScript** · **RxJS** for async HTTP streams
- **Vitest** for unit tests

## Structure

```
src/app
├── components/facultad/   → list + create form (FacultadComponent)
├── services/              → FacultadService (HttpClient → /api/facultades)
└── models/                → Facultad interface (id, nombre, decano, ubicacion)
```

## Run locally

Start the [backend](https://github.com/diazzz9/BackParcialWEB) on port `8080`, then:

```bash
npm install
ng serve
```

Open `http://localhost:4200`.

| Command | Description |
|---|---|
| `ng serve` | Dev server with live reload |
| `ng build` | Production build into `dist/` |
| `npm run serve:ssr:FrontParcial` | Serve the SSR build with Node |
| `ng test` | Unit tests (Vitest) |
