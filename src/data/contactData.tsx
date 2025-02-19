import { 
    MapPin, 
    Phone, 
    Mail ,
    MessageCircle
  } from 'lucide-react';

export const handleWhatsAppRedirect = () => {
    const whatsappNumber = '9488836594';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  

export const contactData = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (234) 567-8900',
      action: handleWhatsAppRedirect,
      actionText: 'Chat on WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@example.com',
      action: () => window.location.href = 'mailto:contact@example.com',
      actionText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Business Street, Suite 100, City, State 12345',
      action: () => window.open('https://maps.google.com', '_blank'),
      actionText: 'Get Directions'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      content: 'Available Mon-Fri, 9am-6pm',
      action: handleWhatsAppRedirect,
      actionText: 'Start Chat'
    }
  ]