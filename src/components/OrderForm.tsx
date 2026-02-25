import { useState } from "react";
import { CheckCircle, Send, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const OrderForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Build WhatsApp message
    const whatsappMessage = `📩 *New Enquiry from FastColors Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📋 *Subject:* ${formData.subject || "General Enquiry"}

💬 *Message:*
${formData.message}`;

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/917812865788?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setIsSuccess(true);

    toast({
      title: "Redirecting to WhatsApp! 🎉",
      description: "Your enquiry is being sent via WhatsApp.",
    });

    // Reset after 4 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 4000);
  };

  if (isSuccess) {
    return (
      <section id="order-form" className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Enquiry Sent!</h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-fluid-h2 font-bold mb-4">
            Enquire About DTF Printing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
            Have a question or want to place an order? Fill in the details below and we'll get back to you promptly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a
                  href="tel:+917812865788"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91 78128 65788</span>
                </a>
                <a
                  href="mailto:fastcolorfashion@gmail.com"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">fastcolorfashion@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/917812865788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-sm">WhatsApp Chat</span>
                </a>
              </div>

              {/* Decorative circles */}
              <div className="mt-10 relative">
                <div className="w-24 h-24 bg-white/10 rounded-full absolute -bottom-4 -right-4" />
                <div className="w-16 h-16 bg-white/10 rounded-full absolute -bottom-8 right-8" />
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-accent"
                  />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (WhatsApp) *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="e.g. DTF Print Order"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-lg border-gray-200 focus:border-accent"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements — design details, quantity, size, timeline, etc."
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-lg border-gray-200 focus:border-accent min-h-[140px] resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Enquiry via WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your enquiry will be sent via WhatsApp for faster response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
