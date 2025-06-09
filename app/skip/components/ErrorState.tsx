// components/ErrorState.tsx
interface Props {
  message: string;
}

export function ErrorState({ message }: Props) {
  return (
    <div className="text-center py-10 text-destructive font-medium">
      {message}
    </div>
  );
}
