import { cn } from '@/lib/utils';

interface HeaderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description?: string | null;
  size?: 'default' | 'sm';
}

export const Header = ({
  title,
  description,
  size = 'default',
  className,
  ...props
}: HeaderProps) => (
  <div className={cn('grid gap-1', className)} {...props}>
    <h1 className={cn('text-3xl font-bold tracking-tight', size === 'default' && 'md:text-4xl')}>
      {title}
    </h1>
    {description && (
      <p className={cn('text-muted-foreground', size === 'default' && 'text-lg')}>{description}</p>
    )}
  </div>
);
