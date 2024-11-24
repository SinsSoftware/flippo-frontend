import type { IIconProps } from './types/IIconProps';

interface BookMarkIconProps extends IIconProps {
  type?: 'active' | 'default' | 'stack';
}

const BookMarkTypes = {
  active:
    'M12 18L7.8 19.8C7.13333 20.0833 6.5 20.0293 5.9 19.638C5.3 19.2467 5 18.6923 5 17.975V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V17.975C19 18.6917 18.7 19.246 18.1 19.638C17.5 20.03 16.8667 20.084 16.2 19.8L12 18Z',
  default:
    'M12 18L7.8 19.8C7.13333 20.0833 6.5 20.0293 5.9 19.638C5.3 19.2467 5 18.6923 5 17.975V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V17.975C19 18.6917 18.7 19.246 18.1 19.638C17.5 20.03 16.8667 20.084 16.2 19.8L12 18ZM12 15.8L17 17.95V5H7V17.95L12 15.8ZM12 5H7H17H12Z',
  stack:
    'M10 19L5.45 21.275C5.11667 21.4417 4.79167 21.429 4.475 21.237C4.15833 21.045 4 20.758 4 20.376V8C4 7.45 4.196 6.97933 4.588 6.588C4.98 6.19667 5.45067 6.00067 6 6H14C14.55 6 15.021 6.196 15.413 6.588C15.805 6.98 16.0007 7.45067 16 8V20.375C16 20.7583 15.8417 21.046 15.525 21.238C15.2083 21.43 14.8833 21.4423 14.55 21.275L10 19ZM6 18.975L9.05 17.325C9.35 17.1583 9.66667 17.075 10 17.075C10.3333 17.075 10.65 17.1583 10.95 17.325L14 18.975V8H6V18.975ZM19 18C18.7167 18 18.4793 17.904 18.288 17.712C18.0967 17.52 18.0007 17.2827 18 17V4H8C7.71667 4 7.47933 3.904 7.288 3.712C7.09667 3.52 7.00067 3.28267 7 3C6.99933 2.71733 7.09533 2.48 7.288 2.288C7.48067 2.096 7.718 2 8 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V17C20 17.2833 19.904 17.521 19.712 17.713C19.52 17.905 19.2827 18.0007 19 18Z'
};

function BookMarkIcon(props: BookMarkIconProps) {
  const { isDefaultFill, type = 'default', ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path d={BookMarkTypes[type]} />
    </svg>
  );
}

export { BookMarkIcon };
