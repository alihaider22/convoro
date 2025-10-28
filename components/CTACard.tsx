import Image from "next/image";
import Link from "next/link";

export default function CTACard() {
  return (
    <div className="cta-section">
      <p className="text-sm text-black mb-2 w-1/2 p-2 rounded-4xl bg-cta-gold text-center">
        Start learning your way.
      </p>
      <h2 className="text-2xl font-bold text-white">
        Build and Personalize <br /> Learning Companion
      </h2>
      <p className="text-white text-sm leading-relaxed">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>

      <Image src="/images/cta.svg" alt="History" width={362} height={232} />

      {/* CTA Button */}
      <Link href="/companions/new" className="btn-primary">
        <Image src="/icons/plus.svg" alt="Plus" width={16} height={16} />
        Build New Companion
      </Link>
    </div>
  );
}
