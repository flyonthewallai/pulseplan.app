
import { cn } from '@/lib/utils';

interface WaveformProps {
  className?: string;
  color?: 'lavender' | 'coral' | 'blue';
}

export const Waveform = ({ className, color = 'lavender' }: WaveformProps) => {
  const colorClasses = {
    lavender: 'bg-rhythm-lavender',
    coral: 'bg-rhythm-coral',
    blue: 'bg-rhythm-blue',
  };
  
  return (
    <div className={cn('flex items-end h-12 gap-1', className)}>
      <div className={cn('w-1 h-full rounded-full animate-wave-1', colorClasses[color])} />
      <div className={cn('w-1 h-3/4 rounded-full animate-wave-2', colorClasses[color])} />
      <div className={cn('w-1 h-1/2 rounded-full animate-wave-3', colorClasses[color])} />
      <div className={cn('w-1 h-full rounded-full animate-wave-4', colorClasses[color])} />
      <div className={cn('w-1 h-1/2 rounded-full animate-wave-1', colorClasses[color])} />
      <div className={cn('w-1 h-3/4 rounded-full animate-wave-2', colorClasses[color])} />
      <div className={cn('w-1 h-full rounded-full animate-wave-3', colorClasses[color])} />
    </div>
  );
};
