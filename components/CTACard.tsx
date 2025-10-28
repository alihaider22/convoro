import Image from "next/image";
import Link from "next/link";

export default function CTACard() {
  return (
    <div className="cta-section">
      <p className="text-sm text-gray-300 mb-2">Start learning your way.</p>
      <h2 className="text-2xl font-bold text-white mb-4">
        Build a Personalize Learning Companion
      </h2>
      <p className="text-white text-sm mb-6 leading-relaxed">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>

      {/* Subject Icons Grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/icons/science.svg"
            alt="Science"
            width={20}
            height={20}
          />
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/icons/coding.svg" alt="Coding" width={20} height={20} />
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/icons/maths.svg" alt="Maths" width={20} height={20} />
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image src="/icons/cap.svg" alt="Education" width={20} height={20} />
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/icons/language.svg"
            alt="Language"
            width={20}
            height={20}
          />
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/icons/history.svg"
            alt="History"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/companions/new" className="btn-primary">
        <Image src="/icons/plus.svg" alt="Plus" width={16} height={16} />
        Build New Companion
      </Link>
    </div>
  );
}
