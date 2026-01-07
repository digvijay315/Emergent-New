import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Replace with your logo image or text */}
            <h2 className="text-2xl font-bold text-white">IntelliviaAI</h2>
            <p className="text-gray-300 text-sm">
              Powering Businesses Through AI Automation
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Enquiry</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Support */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="/support" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="/help-center" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact-support" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300 text-sm">
                  London, United Kingdom
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-300 text-sm">+44 07858 350634</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-300 text-sm">info@intelliviaai.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} IntelliviaAI. All rights reserved. Powering Businesses Through AI Automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
