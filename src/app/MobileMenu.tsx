import { DialogContent, DialogOverlay } from '@reach/dialog';
import Image from 'next/image';
import Link from 'next/link';
import CloseIcon from 'public/assets/icons/close.svg';

import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';

type Props = {
  isOpen: boolean;
  onDismiss: VoidFunction;
};

const MobileMenu = ({ isOpen, onDismiss }: Props) => (
  <DialogOverlay
    isOpen={isOpen}
    onDismiss={onDismiss}
    className="fixed inset-0 flex h-full justify-end bg-[#6064C]"
  >
    <DialogContent className="flex h-full w-[300px] items-center bg-white pl-4">
      <UnstyledButton onClick={onDismiss} className="absolute right-0 top-[10px] p-4">
        <Image src={CloseIcon} alt="Dismiss menu" />
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </UnstyledButton>

      <nav>
        <ul className=" flex flex-col gap-4 text-lg font-medium uppercase">
          <li>
            <Link href="#">Sale</Link>
          </li>
          <li>
            <Link href="#">New&nbsp;Releases</Link>
          </li>
        </ul>
      </nav>
    </DialogContent>
  </DialogOverlay>
);

export default MobileMenu;
