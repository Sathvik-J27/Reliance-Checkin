import { Slab } from 'react-loading-indicators';

interface LoadingProps {
  /** Indicator color. Defaults to Reliance brand gold. */
  color?: string;
  /** Size of the indicator: 'small' | 'medium' | 'large'. Defaults to 'medium'. */
  size?: 'small' | 'medium' | 'large';
  /** Optional label shown below the indicator. */
  text?: string;
  /** When true, centers the indicator in a full-screen overlay. */
  fullScreen?: boolean;
}

export function Loading({
  color = '#ccb331',
  size = 'medium',
  text,
  fullScreen = false,
}: LoadingProps) {
  const inner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <Slab color={color} size={size} />
      {text && (
        <p className="text-sm animate-pulse" style={{ color: 'var(--color-text-gray, #aaa)' }}>{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        {inner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-6">
      {inner}
    </div>
  );
}
