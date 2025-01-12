import type { IIconProps } from './types/IIconProps';

interface PersonIconProps extends IIconProps {
  type?: 'add' | 'check' | 'checkFilled' | 'edit' | 'editFilled' | 'pin';
}

const PersonTypes = {
  add: 'M18 11H16C15.7167 11 15.4793 10.904 15.288 10.712C15.0967 10.52 15.0007 10.2827 15 10C14.9993 9.71733 15.0953 9.48 15.288 9.288C15.4807 9.096 15.718 9 16 9H18V7C18 6.71667 18.096 6.47933 18.288 6.288C18.48 6.09667 18.7173 6.00067 19 6C19.2827 5.99933 19.5203 6.09533 19.713 6.288C19.9057 6.48067 20.0013 6.718 20 7V9H22C22.2833 9 22.521 9.096 22.713 9.288C22.905 9.48 23.0007 9.71733 23 10C22.9993 10.2827 22.9033 10.5203 22.712 10.713C22.5207 10.9057 22.2833 11.0013 22 11H20V13C20 13.2833 19.904 13.521 19.712 13.713C19.52 13.905 19.2827 14.0007 19 14C18.7173 13.9993 18.48 13.9033 18.288 13.712C18.096 13.5207 18 13.2833 18 13V11ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM1 18V17.2C1 16.6333 1.146 16.1127 1.438 15.638C1.73 15.1633 2.11733 14.8007 2.6 14.55C3.63333 14.0333 4.68333 13.646 5.75 13.388C6.81667 13.13 7.9 13.0007 9 13C10.1 12.9993 11.1833 13.1287 12.25 13.388C13.3167 13.6473 14.3667 14.0347 15.4 14.55C15.8833 14.8 16.271 15.1627 16.563 15.638C16.855 16.1133 17.0007 16.634 17 17.2V18C17 18.55 16.8043 19.021 16.413 19.413C16.0217 19.805 15.5507 20.0007 15 20H3C2.45 20 1.97933 19.8043 1.588 19.413C1.19667 19.0217 1.00067 18.5507 1 18ZM3 18H15V17.2C15 17.0167 14.9543 16.85 14.863 16.7C14.7717 16.55 14.6507 16.4333 14.5 16.35C13.6 15.9 12.6917 15.5627 11.775 15.338C10.8583 15.1133 9.93333 15.0007 9 15C8.06667 14.9993 7.14167 15.112 6.225 15.338C5.30833 15.564 4.4 15.9013 3.5 16.35C3.35 16.4333 3.229 16.55 3.137 16.7C3.045 16.85 2.99933 17.0167 3 17.2V18ZM9 10C9.55 10 10.021 9.80433 10.413 9.413C10.805 9.02167 11.0007 8.55067 11 8C10.9993 7.44933 10.8037 6.97867 10.413 6.588C10.0223 6.19733 9.55133 6.00133 9 6C8.44867 5.99867 7.978 6.19467 7.588 6.588C7.198 6.98133 7.002 7.452 7 8C6.998 8.548 7.194 9.019 7.588 9.413C7.982 9.807 8.45267 10.0027 9 10Z',
  check:
    'M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13C10.1333 13 10.2833 13.0043 10.45 13.013C10.6167 13.0217 10.7667 13.034 10.9 13.05C11.1667 13.0833 11.3873 13.2083 11.562 13.425C11.7367 13.6417 11.8077 13.8833 11.775 14.15C11.7417 14.3833 11.6417 14.5833 11.475 14.75C11.3083 14.9167 11.0833 15 10.8 15H10C8.81667 15 7.754 15.1417 6.812 15.425C5.87 15.7083 5.09933 16.0167 4.5 16.35C4.35 16.4333 4.229 16.55 4.137 16.7C4.045 16.85 3.99933 17.0167 4 17.2V18H10.75C11.0333 18 11.271 18.096 11.463 18.288C11.655 18.48 11.7507 18.7173 11.75 19C11.7493 19.2827 11.6533 19.5203 11.462 19.713C11.2707 19.9057 11.0333 20.0013 10.75 20H4ZM15.55 17.6L19.9 13.25C20.0833 13.0667 20.3167 12.975 20.6 12.975C20.8833 12.975 21.1167 13.0667 21.3 13.25C21.4833 13.4333 21.575 13.6667 21.575 13.95C21.575 14.2333 21.4833 14.4667 21.3 14.65L16.25 19.7C16.05 19.9 15.8167 20 15.55 20C15.2833 20 15.05 19.9 14.85 19.7L12.8 17.65C12.6167 17.4667 12.525 17.2333 12.525 16.95C12.525 16.6667 12.6167 16.4333 12.8 16.25C12.9833 16.0667 13.2167 15.975 13.5 15.975C13.7833 15.975 14.0167 16.0667 14.2 16.25L15.55 17.6ZM10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM10 10C10.55 10 11.021 9.80433 11.413 9.413C11.805 9.02167 12.0007 8.55067 12 8C11.9993 7.44933 11.8037 6.97867 11.413 6.588C11.0223 6.19733 10.5513 6.00133 10 6C9.44867 5.99867 8.978 6.19467 8.588 6.588C8.198 6.98133 8.002 7.452 8 8C7.998 8.548 8.194 9.019 8.588 9.413C8.982 9.807 9.45267 10.0027 10 10Z',
  checkFilled:
    'M10 12C8.9 12 7.95833 11.6083 7.175 10.825C6.39167 10.0417 6 9.1 6 8C6 6.9 6.39167 5.95833 7.175 5.175C7.95833 4.39167 8.9 4 10 4C11.1 4 12.0417 4.39167 12.825 5.175C13.6083 5.95833 14 6.9 14 8C14 9.1 13.6083 10.0417 12.825 10.825C12.0417 11.6083 11.1 12 10 12ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V17.2C2 16.65 2.14167 16.1333 2.425 15.65C2.70833 15.1667 3.1 14.8 3.6 14.55C4.45 14.1167 5.40833 13.75 6.475 13.45C7.54167 13.15 8.71667 13 10 13H10.663C10.871 13 11.0833 13.0167 11.3 13.05C11.6333 13.0833 11.85 13.2583 11.95 13.575C12.05 13.8917 11.9833 14.1667 11.75 14.4L11.325 14.825C10.8083 15.3417 10.5167 15.95 10.45 16.65C10.3833 17.35 10.5417 17.9917 10.925 18.575C11.125 18.8917 11.154 19.2083 11.012 19.525C10.87 19.8417 10.6327 20 10.3 20H4ZM15.55 17.6L19.9 13.25C20.0833 13.0667 20.3167 12.975 20.6 12.975C20.8833 12.975 21.1167 13.0667 21.3 13.25C21.4833 13.4333 21.575 13.6667 21.575 13.95C21.575 14.2333 21.4833 14.4667 21.3 14.65L16.25 19.7C16.05 19.9 15.8167 20 15.55 20C15.2833 20 15.05 19.9 14.85 19.7L12.8 17.65C12.6167 17.4667 12.525 17.2333 12.525 16.95C12.525 16.6667 12.6167 16.4333 12.8 16.25C12.9833 16.0667 13.2167 15.975 13.5 15.975C13.7833 15.975 14.0167 16.0667 14.2 16.25L15.55 17.6Z',
  edit: 'M4 19V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C12.6167 13 13.225 13.0377 13.825 13.113C14.425 13.1883 15.025 13.309 15.625 13.475L13.95 15.175C13.6167 15.125 13.2917 15.0833 12.975 15.05C12.6583 15.0167 12.3333 15 12 15C11.0667 15 10.1417 15.1127 9.225 15.338C8.30833 15.5633 7.4 15.9007 6.5 16.35C6.35 16.4333 6.229 16.55 6.137 16.7C6.045 16.85 5.99933 17.0167 6 17.2V18H12V20H5C4.71667 20 4.47933 19.904 4.288 19.712C4.09667 19.52 4.00067 19.2827 4 19ZM14 20V18.75C14 18.4833 14.0543 18.229 14.163 17.987C14.2717 17.745 14.4173 17.5327 14.6 17.35L19.525 12.425C19.675 12.275 19.8417 12.1667 20.025 12.1C20.2083 12.0333 20.3917 12 20.575 12C20.775 12 20.9667 12.0377 21.15 12.113C21.3333 12.1883 21.5 12.3007 21.65 12.45L22.575 13.375C22.7083 13.525 22.8127 13.6917 22.888 13.875C22.9633 14.0583 23.0007 14.2417 23 14.425C22.9993 14.6083 22.966 14.796 22.9 14.988C22.834 15.18 22.7257 15.3507 22.575 15.5L17.65 20.425C17.4667 20.6083 17.2543 20.75 17.013 20.85C16.7717 20.95 16.5173 21 16.25 21H15C14.7167 21 14.4793 20.904 14.288 20.712C14.0967 20.52 14.0007 20.2827 14 20ZM15.5 19.5H16.45L19.475 16.45L19.025 15.975L18.55 15.525L15.5 18.55V19.5ZM19.025 15.975L18.55 15.525L19.475 16.45L19.025 15.975ZM12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM12 10C12.55 10 13.021 9.80433 13.413 9.413C13.805 9.02167 14.0007 8.55067 14 8C13.9993 7.44933 13.8037 6.97867 13.413 6.588C13.0223 6.19733 12.5513 6.00133 12 6C11.4487 5.99867 10.978 6.19467 10.588 6.588C10.198 6.98133 10.002 7.452 10 8C9.998 8.548 10.194 9.019 10.588 9.413C10.982 9.807 11.4527 10.0027 12 10Z',
  editFilled:
    'M14 20V18.75C14 18.4833 14.0543 18.229 14.163 17.987C14.2717 17.745 14.4173 17.5327 14.6 17.35L19.525 12.425C19.675 12.275 19.8417 12.1667 20.025 12.1C20.2083 12.0333 20.3917 12 20.575 12C20.775 12 20.9667 12.0377 21.15 12.113C21.3333 12.1883 21.5 12.3007 21.65 12.45L22.575 13.375C22.7083 13.525 22.8127 13.6917 22.888 13.875C22.9633 14.0583 23.0007 14.2417 23 14.425C22.9993 14.6083 22.966 14.796 22.9 14.988C22.834 15.18 22.7257 15.3507 22.575 15.5L17.65 20.425C17.4667 20.6083 17.2543 20.75 17.013 20.85C16.7717 20.95 16.5173 21 16.25 21H15C14.7167 21 14.4793 20.904 14.288 20.712C14.0967 20.52 14.0007 20.2827 14 20ZM4 19V17.2C4 16.6333 4.146 16.1127 4.438 15.638C4.73 15.1633 5.11733 14.8007 5.6 14.55C6.63333 14.0333 7.68333 13.646 8.75 13.388C9.81667 13.13 10.9 13.0007 12 13C12.6167 13 13.225 13.0377 13.825 13.113C14.425 13.1883 15.025 13.309 15.625 13.475L12.875 16.225C12.5917 16.5083 12.375 16.8333 12.225 17.2C12.075 17.5667 12 17.95 12 18.35V20H5C4.71667 20 4.47933 19.904 4.288 19.712C4.09667 19.52 4.00067 19.2827 4 19ZM20.575 15.4L21.5 14.425L20.575 13.5L19.625 14.45L20.575 15.4ZM12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12Z',
  pin: 'M9 20H5C4.45 20 3.97933 19.8043 3.588 19.413C3.19667 19.0217 3.00067 18.5507 3 18V4C3 3.45 3.196 2.97933 3.588 2.588C3.98 2.19667 4.45067 2.00067 5 2H19C19.55 2 20.021 2.196 20.413 2.588C20.805 2.98 21.0007 3.45067 21 4V18C21 18.55 20.8043 19.021 20.413 19.413C20.0217 19.805 19.5507 20.0007 19 20H15L12.7 22.3C12.6 22.4 12.4917 22.471 12.375 22.513C12.2583 22.555 12.1333 22.5757 12 22.575C11.8667 22.5743 11.7417 22.5537 11.625 22.513C11.5083 22.4723 11.4 22.4013 11.3 22.3L9 20ZM5 16.85C5.9 15.9667 6.946 15.271 8.138 14.763C9.33 14.255 10.6173 14.0007 12 14C13.3827 13.9993 14.6703 14.2537 15.863 14.763C17.0557 15.2723 18.1013 15.968 19 16.85V4H5V16.85ZM12 12C12.9667 12 13.7917 11.6583 14.475 10.975C15.1583 10.2917 15.5 9.46667 15.5 8.5C15.5 7.53333 15.1583 6.70833 14.475 6.025C13.7917 5.34167 12.9667 5 12 5C11.0333 5 10.2083 5.34167 9.525 6.025C8.84167 6.70833 8.5 7.53333 8.5 8.5C8.5 9.46667 8.84167 10.2917 9.525 10.975C10.2083 11.6583 11.0333 12 12 12ZM7 18H17V17.75C16.3 17.1667 15.525 16.7293 14.675 16.438C13.825 16.1467 12.9333 16.0007 12 16C11.0667 15.9993 10.175 16.1453 9.325 16.438C8.475 16.7307 7.7 17.168 7 17.75V18ZM12 10C11.5833 10 11.2293 9.85433 10.938 9.563C10.6467 9.27167 10.5007 8.91733 10.5 8.5C10.4993 8.08267 10.6453 7.72867 10.938 7.438C11.2307 7.14733 11.5847 7.00133 12 7C12.4153 6.99867 12.7697 7.14467 13.063 7.438C13.3563 7.73133 13.502 8.08533 13.5 8.5C13.498 8.91467 13.3523 9.269 13.063 9.563C12.7737 9.857 12.4193 10.0027 12 10Z'
};

function PersonIcon(props: PersonIconProps) {
  const { isDefaultFill, type = 'edit', ...otherProps } = props;

  return (
    <svg
      fill={isDefaultFill ? 'currentColor' : '--neutral-80'}
      viewBox={'0 0 24 24'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path d={PersonTypes[type]} />
    </svg>
  );
}

export { PersonIcon };