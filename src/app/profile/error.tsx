'use client';

import PrimaryButton from '@/components/ui/Buttons/PrimaryButton';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          Something went wrong while fetching user data
        </h2>
        <PrimaryButton onClick={reset}>Try Again</PrimaryButton>
      </div>
    </div>
  );
}
