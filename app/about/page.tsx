import { ContactUs } from "@/modules/about/components/ContactUs";

export default async function About() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/api/about`, {
    cache: "force-cache",
  });
  const content = await response.json();

  return (
    <div>
      <h1>About Page</h1>
      <p>About my company</p>
      <pre>{JSON.stringify(content, null, 2)}</pre>
      <ContactUs />
    </div>
  );
}
