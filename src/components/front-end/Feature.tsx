import { MdSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';
import { TbDiscount2, TbTruckDelivery } from 'react-icons/tb';
import FeatureCard from './FeatureCard';

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: 'Free Delivery',
    desc: 'On orders over ₦250,000',
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: 'Return and Refund',
    desc: 'Money back guarantee',
  },
  {
    icon: <TbDiscount2 className="text-4xl" />,
    title: 'Member Discount',
    desc: 'On orders over ₦150,000',
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: '24/7 Support',
    desc: 'Contact us anytime',
  },
];

const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;
