// components/LoadingSkips.tsx
export function LoadingSkips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-100 rounded-md h-40" />
      ))}
    </div>
  );
}
