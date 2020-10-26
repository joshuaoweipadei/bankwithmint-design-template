import { ImMeter } from 'react-icons/im';
import { BiWallet } from 'react-icons/bi';
import { GiWallet } from 'react-icons/gi';
import { RiWallet2Fill, RiHealthBookFill, RiContactsBookUploadLine } from 'react-icons/ri';
import { FaRegDotCircle, FaRegUser } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';

export const navigation = [
  {
    id: 'main',
    title: 'Main',
    type: 'group',
    children: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'item',
        url: '/',
        icon: <ImMeter />
      }
    ]
  },
  {
    id: 'payments',
    title: 'Payments',
    type: 'group',
    children: [
      {
        id: 'all-payments',
        title: 'All Payments',
        type: 'item',
        url: '/payments/all-payments',
        icon: <BiWallet />
      },
      {
        id: 'reconcilled-payments',
        title: 'Reconcilled Payments',
        type: 'item',
        url: '/payments/reconcilled-payments',
        icon: <GiWallet />
      },
      {
        id: 'un-reconcilled-payments',
        title: 'Un - Reconcilled Payments',
        type: 'item',
        url: '/un-reconcilled-payments',
        icon: <RiWallet2Fill />
      },
      {
        id: 'manual-settlement',
        title: 'Manual Settlement',
        type: 'item',
        url: '/manual-settlement',
        icon: <FaRegDotCircle />
      }
    ]
  },
  {
    id: 'orders',
    title: 'Orders',
    type: 'group',
    children: [
      {
        id: 'all-orders',
        title: 'All Orders',
        type: 'item',
        url: '/all-orders',
        icon: <RiContactsBookUploadLine />
      },
      {
        id: 'pending-orders',
        title: 'Pending Orders',
        type: 'item',
        url: '/pending-orders',
        icon: <GoBook />
      },
      {
        id: 'reconcilled-orders',
        title: 'Reconcilled Orders',
        type: 'item',
        url: '/reconcilled-orders',
        icon: <RiHealthBookFill />
      }
    ]
  },
  {
    id: 'merchant-profile',
    type: 'group',
    children: [
      {
        id: 'merchant-prodile',
        title: 'Merchant Profile',
        type: 'item',
        url: '/merchant-prodile',
        icon: <FaRegUser />
      }
    ]
  }
]