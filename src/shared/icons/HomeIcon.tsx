import type { IIconProps } from './types/IIconProps';

function HomeIcon(props: IIconProps) {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path
        d={
          'M5.25 19.8437H8.625V14.2187C8.625 13.9 8.733 13.633 8.949 13.4177C9.165 13.2025 9.432 13.0945 9.75 13.0937H14.25C14.5687 13.0937 14.8361 13.2017 15.0521 13.4177C15.2681 13.6337 15.3757 13.9007 15.375 14.2187V19.8437H18.75V9.71875L12 4.65625L5.25 9.71875V19.8437ZM3 19.8437V9.71875C3 9.3625 3.07987 9.025 3.23962 8.70625C3.39937 8.3875 3.6195 8.125 3.9 7.91875L10.65 2.85625C11.0437 2.55625 11.4937 2.40625 12 2.40625C12.5062 2.40625 12.9562 2.55625 13.35 2.85625L20.1 7.91875C20.3812 8.125 20.6017 8.3875 20.7615 8.70625C20.9212 9.025 21.0007 9.3625 21 9.71875V19.8437C21 20.4625 20.7795 20.9924 20.3385 21.4334C19.8975 21.8744 19.368 22.0945 18.75 22.0937H14.25C13.9312 22.0937 13.6642 21.9857 13.449 21.7697C13.2337 21.5537 13.1257 21.2867 13.125 20.9687V15.3437H10.875V20.9687C10.875 21.2875 10.767 21.5549 10.551 21.7709C10.335 21.9869 10.068 22.0945 9.75 22.0937H5.25C4.63125 22.0937 4.10175 21.8736 3.6615 21.4334C3.22125 20.9931 3.00075 20.4632 3 19.8437Z'
        }
      />
    </svg>
  );
}

export { HomeIcon };