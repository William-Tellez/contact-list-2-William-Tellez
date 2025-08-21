import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContactList from "./pages/ContactList";
import ContactForm from "./pages/ContactForm";
import EditContact from "./pages/EditContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ContactList />} />
      <Route path="/create" element={<ContactForm />} />
      <Route path="/editar" element={<EditContact />} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </>
  )
);
