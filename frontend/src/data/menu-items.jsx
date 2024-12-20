import Home from "../pages/Home.jsx";
import Lab1 from "../pages/Lab1.jsx";
import Lab2 from "../pages/Lab2.jsx";
import Lab3 from "../pages/Lab3.jsx";
import Lab4 from "../pages/Lab4.jsx";
import AddPersonForm from "../components/AddPersonForm.jsx";
import EditPersonForm from "../components/EditPersonForm.jsx";
import Lab5 from "../pages/Lab5.jsx";
import UserProfile from "../components/UserProfile.jsx";
import Post from "../components/Post.jsx";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
    inNavbar: true,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
    inNavbar: true,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
    inNavbar: true,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />,
    inNavbar: true,
  },
  {
    id: 5,
    label: "Laboratorium 4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4 />,
    inNavbar: true,
  },
  {
    id: 6,
    label: "Add a person",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <AddPersonForm />,
    inNavbar: true,
  },
  {
    id: 7,
    urlPattern: "/lab4/edit/:id",
    element: <EditPersonForm />,
    inNavbar: false,
  },
  {
    id: 8,
    label: "Laboratorium 5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5 />,
    inNavbar: true,
  },
  {
    id: 9,
    urlPattern: "/lab5/users/:id",
    element: <UserProfile />,
    inNavbar: false,
  },
  {
    id: 10,
    urlPattern: "lab5/posts/:id/comments",
    element: <Post />,
    inNavbar: false,
  },
];
