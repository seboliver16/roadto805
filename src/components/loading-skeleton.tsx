export function PageSkeleton({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl px-4 space-y-4">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200" />
        <div className="space-y-3">
          <div className="h-24 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-16 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-16 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-16 animate-pulse rounded-xl bg-gray-200" />
        </div>
        <p className="text-center text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
