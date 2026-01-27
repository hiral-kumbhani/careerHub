function AdPlaceholder({ size = 'banner', title = 'Advertisement' }) {
  const sizeClasses = {
    banner: 'w-full h-24 md:h-32',
    square: 'w-full h-64',
    rectangle: 'w-full h-48',
    skyscraper: 'w-full h-96',
    leaderboard: 'w-full h-20 md:h-24'
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center my-4`}>
      <div className="text-center">
        <p className="text-gray-400 text-xs font-semibold mb-1">{title}</p>
        <p className="text-gray-300 text-xs">{size.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default AdPlaceholder;
