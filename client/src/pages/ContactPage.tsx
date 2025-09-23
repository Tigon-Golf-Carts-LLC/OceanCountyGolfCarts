import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Globe, Clock, Facebook, Youtube, CreditCard, Wifi, Users, Car, Shield } from "lucide-react";
import { contactFormSchema, ContactForm } from "@shared/schema";
import SEOHead from "@/components/SEOHead";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "sales",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit contact form");
      }

      return response.json();
    },
    onSuccess: () => {
      form.reset();
      setIsSubmitting(false);
      // Redirect to thank you page
      setLocation("/thank-you");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactForm) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "16 Anchor Square, Toms River, NJ 08753",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "804-585-7301",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@oceancountygolfcarts.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "oceancountygolfcarts.com",
      link: "https://oceancountygolfcarts.com",
    },
  ];

  const socialProfiles = [
    {
      icon: Youtube,
      label: "YouTube",
      value: "@OceanCountyGolfCarts",
      link: "https://www.youtube.com/@OceanCountyGolfCarts",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "OceanCountyGolfCarts",
      link: "https://www.facebook.com/OceanCountyGolfCarts",
    },
  ];

  const businessAttributes = {
    business: ["Small business"],
    accessibility: [
      "No wheelchair accessible seating",
      "Does not have assistive hearing loop", 
      "No wheelchair accessible restroom"
    ],
    amenities: ["No gender-neutral restroom", "Paid Wi-Fi"],
    crowd: ["Transgender safespace", "LGBTQ+ friendly"],
    parking: [
      "No free street parking",
      "No free parking lot",
      "No paid parking lot",
      "No paid street parking",
      "No paid parking garage",
      "No on-site parking",
      "No free parking garage"
    ],
    payments: ["Accepts credit cards", "Accepts debit cards", "Not cash-only"],
    planning: ["Appointment required"],
    recycling: ["No electronics recycling"],
    services: [
      "No in-store pickup for online orders",
      "Onsite services not available",
      "Offers delivery",
      "No in-store shopping",
      "No curbside pickup"
    ]
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "CLOSED" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SEOHead 
        title="Contact Ocean County Golf Carts"
        description="Get in touch with Ocean County Golf Carts for sales, service, and support at our Toms River location. Call 1-844-844-6638."
        keywords="contact golf carts, Ocean County contact, Toms River golf carts, golf cart dealer"
        canonicalUrl="https://oceancountygolfcarts.com/contact"
      />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Ocean County Golf Carts
        </h1>
        <p className="text-xl text-gray-600">
          Get in touch with our team for sales, service, and support
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 text-ocean-blue mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-ocean-blue hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-900">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialProfiles.map((profile, index) => {
                  const Icon = profile.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 text-ocean-blue mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500">{profile.label}</div>
                        <a
                          href={profile.link}
                          className="text-ocean-blue hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Type</h4>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">Small business</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payments</h4>
                  <div className="space-y-1">
                    {businessAttributes.payments.map((payment, index) => (
                      <div key={index} className="flex items-center">
                        <CreditCard className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-600 text-sm">{payment}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Options</h4>
                  <div className="space-y-1">
                    {businessAttributes.services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <Car className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility & Amenities</h4>
                  <div className="space-y-1">
                    {[...businessAttributes.accessibility, ...businessAttributes.amenities].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Shield className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community</h4>
                  <div className="space-y-1">
                    {businessAttributes.crowd.map((crowd, index) => (
                      <div key={index} className="flex items-center">
                        <Users className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-gray-600 text-sm">{crowd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="service">Service Request</SelectItem>
                          <SelectItem value="parts">Parts & Accessories</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your needs..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-theme-orange hover:bg-orange-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
