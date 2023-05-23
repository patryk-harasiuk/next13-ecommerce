import Image from 'next/image';
import Link from 'next/link';
import CartIcon from 'public/assets/icons/shopping-bag.svg';
import UserIcon from 'public/assets/icons/user.svg';

import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';

const SuperHeader = () => (
  <div className="bg-gray-dark hidden h-10 items-center justify-end gap-6 pl-8 pr-8 text-sm text-gray-400 md:flex ">
    <Link href="/account">
      <Image alt="user" src={UserIcon} width="20" height="20" />
    </Link>

    <UnstyledButton>
      <Image alt="cart" src={CartIcon} />
      <VisuallyHidden>View Cart</VisuallyHidden>
    </UnstyledButton>
  </div>
);

export default SuperHeader;
