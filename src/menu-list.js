import { BsBell } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

export default {
  menu: [
    {
      id: 'main',
      title: 'Main',
      type: 'group',
      children: [
        {
          id: 'overview',
          title: 'Overview',
          type: 'item',
          url: '/overview',
          icon: <BsBell />
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
          url: '/all-payments',
          icon: <BiSearchAlt2 />
        },
        {
          id: 'reconcilled-payments',
          title: 'Reconcilled Payments',
          type: 'item',
          url: '/reconcilled-payments',
          icon: <BsBell />
        },
        {
          id: 'un-reconcilled-payments',
          title: 'Un - Reconcilled Payments',
          type: 'item',
          url: '/un-reconcilled-payments',
          icon: <BsBell />
        },
        {
          id: 'manual-settlement',
          title: 'Manual Settlement',
          type: 'item',
          url: '/manual-settlement',
          icon: <BsBell />
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
          icon: <BiSearchAlt2 />
        },
        {
          id: 'pending-orders',
          title: 'Pending Orders',
          type: 'item',
          url: '/pending-orders',
          icon: <BsBell />
        },
        {
          id: 'reconcilled-orders',
          title: 'Reconcilled Orders',
          type: 'item',
          url: '/reconcilled-orders',
          icon: <BsBell />
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
          icon: <BiSearchAlt2 />
        }
      ]
    }
  ]
}