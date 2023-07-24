import { cn } from '@/lib/utils';

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  layout?: 'default' | 'dashboard' | 'auth';
}
export function Shell({ children, layout, className, ...props }: Props) {
  return (
    <section
      className={cn(
        'grid items-center gap-8 pb-8 pt-6 md:py-8',
        layout === 'default' && 'container',
        layout === 'auth' && 'container max-w-lg',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Shell;
