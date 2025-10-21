const HeroImage = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='relative rounded-full border-4 border-gray-700 lg:w-[550px] lg:h-[550px] md:w-[360px] md:h-[360px] w-[260px] h-[260px] flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent' />
        <img
          src='/images/profile2.jpeg'
          alt='Profile'
          className='rounded-full object-cover object-center w-full h-full scale-[1] translate-y-1'
        />
      </div>
    </div>
  );
};

export default HeroImage;
