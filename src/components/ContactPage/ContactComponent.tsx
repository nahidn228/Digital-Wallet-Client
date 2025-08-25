import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  USER_ID: import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID || "",
};

const ContactComponent = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const toastId = toast.loading("Sending Message ");
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: email,
        },
        EMAILJS_CONFIG.USER_ID
      );

      toast.success("Message sent successfully", { id: toastId });

      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      toast.success("Something went wrong", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
              />
            </div>

            {/* Status Messages */}
            {/* {submitStatus === "success" && (
              <div className="rounded-md bg-green-50 p-4 text-green-800">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-4 text-red-800">
                Failed to send message. Please try again or contact us directly.
              </div>
            )} */}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
