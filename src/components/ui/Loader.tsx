
export function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />

        {/* Inner pulsing dot */}
        <div className="absolute w-6 h-6 rounded-full bg-primary animate-ping" />
        <div className="absolute w-6 h-6 rounded-full bg-primary" />
      </div>
    </div>
  );
}
