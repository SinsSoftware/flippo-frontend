import { type IIconProps } from './types/IIconProps';

function TagIcon(props: IIconProps) {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'} {...otherProps}>
      <path
        d={
          'M9.00044 16L8.17544 19.275C8.12544 19.4917 8.0171 19.6667 7.85044 19.8C7.68377 19.9333 7.48377 20 7.25044 20C6.93377 20 6.67544 19.875 6.47544 19.625C6.27544 19.375 6.2171 19.1 6.30044 18.8L7.00044 16H4.27544C3.9421 16 3.67544 15.871 3.47544 15.613C3.27544 15.355 3.2171 15.0673 3.30044 14.75C3.35044 14.5167 3.4671 14.3333 3.65044 14.2C3.83377 14.0667 4.0421 14 4.27544 14H7.50044L8.50044 10H5.77544C5.4421 10 5.17544 9.871 4.97544 9.613C4.77544 9.355 4.7171 9.06733 4.80044 8.75C4.85044 8.51667 4.9671 8.33333 5.15044 8.2C5.33377 8.06667 5.5421 8 5.77544 8H9.00044L9.82544 4.725C9.87544 4.50833 9.98377 4.33333 10.1504 4.2C10.3171 4.06667 10.5171 4 10.7504 4C11.0671 4 11.3254 4.125 11.5254 4.375C11.7254 4.625 11.7838 4.9 11.7004 5.2L11.0004 8H15.0004L15.8254 4.725C15.8754 4.50833 15.9838 4.33333 16.1504 4.2C16.3171 4.06667 16.5171 4 16.7504 4C17.0671 4 17.3254 4.125 17.5254 4.375C17.7254 4.625 17.7838 4.9 17.7004 5.2L17.0004 8H19.7254C20.0588 8 20.3254 8.129 20.5254 8.387C20.7254 8.645 20.7838 8.93267 20.7004 9.25C20.6504 9.48333 20.5338 9.66667 20.3504 9.8C20.1671 9.93333 19.9588 10 19.7254 10H16.5004L15.5004 14H18.2254C18.5588 14 18.8254 14.1293 19.0254 14.388C19.2254 14.6467 19.2838 14.934 19.2004 15.25C19.1504 15.4833 19.0338 15.6667 18.8504 15.8C18.6671 15.9333 18.4588 16 18.2254 16H15.0004L14.1754 19.275C14.1254 19.4917 14.0171 19.6667 13.8504 19.8C13.6838 19.9333 13.4838 20 13.2504 20C12.9338 20 12.6754 19.875 12.4754 19.625C12.2754 19.375 12.2171 19.1 12.3004 18.8L13.0004 16H9.00044ZM9.50044 14H13.5004L14.5004 10H10.5004L9.50044 14Z'
        }
      />
    </svg>
  );
}

export default TagIcon;
