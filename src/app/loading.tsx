import LoadingSpinner from '@/components/ui/LoadingSpinner';

export function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}

export default Loading;
