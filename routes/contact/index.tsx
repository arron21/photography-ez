import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

// Interface to define the shape of our form data
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Initial state for the form
const initialState: ContactForm = {
  name: "",
  email: "",
  message: "",
};

// Handler for GET requests - renders the initial form
export const handler: Handlers<ContactForm & { success?: boolean }> = {
  GET(req, ctx) {
    // Check for success query parameter
    const url = new URL(req.url);
    const success = url.searchParams.get("success") === "true";
    
    return ctx.render({
      ...initialState,
      success
    });
  },

  // Handler for POST requests - processes form submission
  async POST(req, ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const message = form.get("message")?.toString() || "";

    // Basic validation
    const errors: Partial<ContactForm> = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    // If there are validation errors, re-render the form with errors
    if (Object.keys(errors).length > 0) {
      return ctx.render({
        name,
        email,
        message,
        errors,
      });
    }

    // Here you would typically:
    // 1. Validate the email format
    // 2. Process the form (e.g., send to database, send email)
    // For this example, we'll just log the submission
    console.log("Form Submitted:", { name, email, message });

    // Redirect or render a success page
    return new Response(null, {
      status: 303,
      headers: { Location: "/contact?success=true" },
    });
  },
};

// The contact page component
export default function ContactPage({ data }: PageProps<ContactForm & { errors?: Partial<ContactForm>, success?: boolean }>) {
  const errors = data.errors || {};
  const success = data.success || false;

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div class="grid md:grid-cols-2 ">
        {success && (
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            Your message was sent successfully!
          </div>
        )}
        <div>
            <h1 class="text-7xl">Contact</h1>
            <p>Drop me a line if you want to talk about art sometime.</p>
        </div>

        <form method="POST">
          <div class="mb-4">
            <label htmlFor="name" class="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              class={`w-full px-3 py-2 border  ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.name && (
              <p class="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>

          <div class="mb-4">
            <label htmlFor="email" class="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              class={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.email && (
              <p class="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>

          <div class="mb-4">
            <label htmlFor="message" class="block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={data.message}
              class={`w-full px-3 py-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              required
            ></textarea>
            {errors.message && (
              <p class="text-red-500 text-xs italic">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}