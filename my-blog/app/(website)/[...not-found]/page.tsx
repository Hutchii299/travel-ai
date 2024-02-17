import { notFound } from "next/navigation";

//this workaround is required beause a global not-found cannot exist outside of the route groups without a layout file. If the layout file is provided there are bugs

export default function NotFoundDummy() {
  notFound();
}
