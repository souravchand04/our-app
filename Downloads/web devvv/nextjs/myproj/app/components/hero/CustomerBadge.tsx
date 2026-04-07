const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
]

export default function CustomerBadge() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        {/* Avatar stack */}
        <div className="flex">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Customer ${i + 1}`}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: avatars.length - i }}
            />
          ))}
        </div>
        {/* Plus badge */}
        <div className="w-8 h-8 rounded-full bg-[#aadd00] flex items-center justify-center text-black font-bold text-sm -ml-2 z-10">
          +
        </div>
      </div>

      <p className="text-xs text-gray-500">
        We have{' '}
        <span className="font-bold text-black">18k+</span>{' '}
        customers
        <br />
        word-wide
      </p>
    </div>
  )
}
