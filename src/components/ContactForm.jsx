import { useState } from "react";
import { motion } from "framer-motion";
import useTheme from '../contexts/theme';
import Button from './Button';
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let formErrors = {};
    
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send the data to your backend
      // For demo, simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.form
      className={`mt-8 max-w-md mx-auto w-full ${darkMode ? "text-white" : "text-light-text"}`}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg focus:outline-none 
          ${darkMode ? "bg-dawn/30 border-lightdawn/30 focus:border-lightdawn" : "bg-white border-light-accent/30 focus:border-light-accent"} 
          border ${errors.name ? (darkMode ? "border-red-500" : "border-red-400") : ""} transition-colors`}
          placeholder="John Doe"
          disabled={isSubmitting}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg focus:outline-none 
          ${darkMode ? "bg-dawn/30 border-lightdawn/30 focus:border-lightdawn" : "bg-white border-light-accent/30 focus:border-light-accent"} 
          border ${errors.email ? (darkMode ? "border-red-500" : "border-red-400") : ""} transition-colors`}
          placeholder="john@example.com"
          disabled={isSubmitting}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg focus:outline-none 
          ${darkMode ? "bg-dawn/30 border-lightdawn/30 focus:border-lightdawn" : "bg-white border-light-accent/30 focus:border-light-accent"} 
          border ${errors.message ? (darkMode ? "border-red-500" : "border-red-400") : ""} transition-colors`}
          placeholder="Your message here..."
          disabled={isSubmitting}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <div className="flex justify-center">
        <Button
          type="submit"
          className={`px-6 py-3 flex items-center gap-2 font-medium ${isSubmitting ? "opacity-70" : ""} ${!darkMode && "shadow-md"}`}
          swit={true}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <motion.div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent" />
          ) : submitSuccess ? (
            <><CheckCircle size={20} />Message Sent!</>
          ) : (
            <>
              <Send size={18} className={`${darkMode ? "text-white" : ""}`} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </>
          )}
        </Button>
      </div>
      
      {errors.submit && (
        <p className="mt-3 text-center text-sm text-red-500">{errors.submit}</p>
      )}
    </motion.form>
  );
};

export default ContactForm;
