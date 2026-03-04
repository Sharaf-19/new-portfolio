import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = '966579265879';
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show message when page loads
    setShowTooltip(true);

    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2'>
      {showTooltip && (
        <div className='bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-md animate-bounce'>
          Let’s connect on WhatsApp 👋
        </div>
      )}

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gray-400 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300'>
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
