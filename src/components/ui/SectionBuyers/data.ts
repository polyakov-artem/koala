import imgSrc1 from '../../../assets/images/SectionBuyers/1.webp';
import imgSrc2 from '../../../assets/images/SectionBuyers/2.webp';
import imgSrc3 from '../../../assets/images/SectionBuyers/3.webp';
import imgSrc4 from '../../../assets/images/SectionBuyers/4.webp';
import imgSrc5 from '../../../assets/images/SectionBuyers/5.webp';
import imgSrc6 from '../../../assets/images/SectionBuyers/6.webp';
import imgSrc7 from '../../../assets/images/SectionBuyers/7.webp';
import imgSrc8 from '../../../assets/images/SectionBuyers/8.webp';
import { TReview } from '../../../types/types';

export const reviews = [
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'KOALAMAZING!',
    text: 'The New Koala Mattress is amazing and exceeded all my expectations. I love how easy it is to change the comfort layer, our personal fave is the medium-firm support. ',
    name: 'David',
    imgURL: imgSrc1,
    productId: '1',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'Such a comfy mattress',
    text: 'Delivery was so quick, it was easy to set up and the mattress itself is so comfortable. Stoked not to be woken up every time hubby rolls over!!!',
    name: 'Vanessa',
    imgURL: imgSrc2,
    productId: '3',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'Life changing',
    text: 'Thought about making the purchase of the mattress for a few months. Should’ve done it earlier.. has helped insomniac partners sleep so much! Customer service was 10/10.',
    name: 'Blaise',
    imgURL: imgSrc3,
    productId: '6',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: `Should've upgraded years ago`,
    text: 'Such a simple ordering, delivery and setup experience, and have been sleeping better than I have in years from the very first night',
    name: 'Caleb',
    imgURL: imgSrc4,
    productId: '5',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'Couldn’t be happier',
    text: 'Great! Couldn’t be happier, so happy we bought a second.',
    name: 'Jemma',
    imgURL: imgSrc5,
    productId: '8',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'A Blissful Combination',
    text: 'The Koala Mattress exceeded my expectations in every aspect. Its innovative design utilizes high-quality materials that provide an exceptional level of comfort. The moment I lay down, I could feel the perfect balance of softness and support. The top layer contours to my body, relieving pressure points and ensuring a restful sleep. The foam construction promotes excellent airflow, keeping me cool throughout the night.',
    name: 'Josh',
    imgURL: imgSrc6,
    productId: '6',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'Obsessed!',
    text: `Absolutely obsessed with the koala mattress! The delivery timing was quick and the mattress was easy to put together (but is heavy). The mattress is very firm even on the medium side, but I personally like that. My partner has back issues and says it's really helped with his sleeping. I have the king size SleepingDuck bedframe and the mattress fits perfectly on that, so sizing is great. The mattress is still under the 120 night guarantee but I don't think at this point I'd return it as it'd super comfy to sleep on if you like firm mattresses! Can't confirm on the temperature control, as my partner is still a hot sleeper and it hasn't made a difference in that department for him. Would recommend!`,
    name: 'Sarah',
    imgURL: imgSrc7,
    productId: '1',
  },
  {
    stars: '★★★★★',
    category: 'mattresses',
    title: 'Love my new Koala 🐨',
    text: 'Love my new Koala 🐨 mattress! I’ve slept really well. Super happy with my mattress! :)',
    name: 'Tom',
    imgURL: imgSrc8,
    productId: '2',
  },
] satisfies TReview[];
