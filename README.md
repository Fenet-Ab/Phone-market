# Electronics Market CRUD App

A professional CRUD (Create, Read, Update, Delete) application built with **React**, **Tailwind CSS**, and **shadcn/ui**. The app fetches and manages real-world data from a public API, with a beautiful, modern UI/UX and local authentication.

---

## 🚀 Features

- **Authentication**: Local sign up/sign in with protected routes and user session.
- **Welcome Page**: Beautiful, responsive landing page with call-to-action and images.
- **CRUD Operations**:
  - **Read**: Fetches and displays a list of items from [publicapi.dev](https://publicapi.dev/) ([restful-api.dev/objects](https://api.restful-api.dev/objects)) on first load.
  - **Create**: Add new items via a dedicated form/page.
  - **Update**: Edit existing items with a pre-filled form on a dedicated page.
  - **Delete**: Remove items with a confirmation dialog.
- **Responsive UI**: Modern, grid-based card layout, responsive forms, and navigation.
- **Styling**: Uses Tailwind CSS and shadcn/ui for a polished, consistent look.
- **Protected Routes**: Only authenticated users can access CRUD features.
- **Footer & Navbar**: Consistent, branded navigation and footer.
- **Confirmation Dialogs**: Prevent accidental deletions.
- **LocalStorage**: All CRUD operations after the initial fetch are persisted locally for a fast, offline-friendly experience.

---

## 🛠️ Tech Stack

- **Frontend**: React (with hooks, functional components)
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **API Source**: [https://api.restful-api.dev/objects](https://api.restful-api.dev/objects)
- **State Management**: React useState/useEffect, localStorage

---

## 📦 Project Structure

```
user_posts/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── UserCard.tsx
│   │   ├── UserForm.tsx
│   │   ├── UserList.tsx
│   │   ├── footer.tsx
│   │   └── ui/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── CreateItem.tsx
│   │   ├── EditItem.tsx
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   └── Welcome.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

---

## 📝 How It Works

1. **Welcome & Authentication**
   - Users see a beautiful welcome page and must sign in or sign up to access the app.
   - Authentication is local (stored in localStorage).

2. **Initial Data Fetch**
   - On first login, the app fetches items from [restful-api.dev/objects](https://api.restful-api.dev/objects) and saves them to localStorage.
   - All further CRUD operations are performed on localStorage for speed and offline support.

3. **CRUD Operations**
   - **Read**: Items are displayed in a responsive grid of cards.
   - **Create**: Users can add new items via a dedicated form.
   - **Update**: Users can edit items via a dedicated edit page with a pre-filled form.
   - **Delete**: Users can delete items, with a confirmation dialog to prevent mistakes.

4. **UI/UX**
   - All forms and cards are styled with Tailwind CSS and shadcn/ui.
   - The layout is responsive and works on all devices.
   - Navbar and footer are always visible for easy navigation.

---

## 🖥️ Screenshots

> Add screenshots here of the welcome page, home page, create/edit forms, and authentication.

---

## 🧑‍💻 Getting Started

### 1. **Clone the repository**
```bash
 git clone <your-repo-url>
 cd user_posts
```

### 2. **Install dependencies**
```bash
 npm install
```

### 3. **Run the app**
```bash
 npm run dev
```

### 4. **Open in your browser**
Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## ⚙️ Customization
- You can change the API source in `src/services/api.ts`.
- To add more fields, update `DEFAULT_FIELDS` in `UserForm.tsx`.
- To change branding, update the Navbar, Footer, and Welcome page.

---

## 📚 Credits
- [restful-api.dev](https://api.restful-api.dev/objects) for the public API.
- [shadcn/ui](https://ui.shadcn.com/) for UI components.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

---

## 📄 License
This project is for educational/demo purposes. Feel free to use and modify it for your own learning or portfolio!
