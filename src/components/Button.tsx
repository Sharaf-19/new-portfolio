import { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  targetId: string;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ text, className = '', targetId, variant = 'primary' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className} cta-wrapper ${
        variant === 'secondary' ? 'cta-secondary' : 'cta-primary'
      }`}>
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src='/images/arrow-down.svg' alt='arrow' />
        </div>
      </div>
    </a>
  );
};

export default Button;
