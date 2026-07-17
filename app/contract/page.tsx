import { contact } from "@/app/action/contact";

export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="bg-amber-300">Contact Page</h1>

      <form action={contact}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 w-full"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-2 w-full"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
