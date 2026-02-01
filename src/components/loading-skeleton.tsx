export function PageSkeleton({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl px-4 space-y-4 animate-fade-in">
        <div className="h-8 w-48 rounded-lg animate-shimmer" />
        <div className="space-y-3">
          <div className="h-24 rounded-xl animate-shimmer" />
          <div className="h-16 rounded-xl animate-shimmer" />
          <div className="h-16 rounded-xl animate-shimmer" />
          <div className="h-16 rounded-xl animate-shimmer" />
        </div>
        <p className="text-center text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
