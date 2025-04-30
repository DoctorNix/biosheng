import { ProductsContent } from './types';

const productsContent: ProductsContent = {
  title: 'Our Products Display',
  description: 'Biosheng Health offers a comprehensive range of health devices and wellness services that integrate modern technology with traditional therapies for a complete wellness experience.',
  sections: [
    {
      category: 'Featured Core Products',
      products: [
        {
          id: 0,
          name: 'N4 Multifunction Spinal Therapy Device',
          description: 'Recognized as an “Excellent Product” by the Singapore Association of Manual Therapists.',
          details: 'Combines thermal therapy, spinal traction, and low-frequency stimulation into one intelligent system. Endorsed as the recommended home spinal care device by the Singapore Association of Manual Therapists, N4 is ideal for daily spinal wellness and rehabilitation.',
          image: '/images/products/n4.jpg',
        },
        {
          id: 0.5,
          name: 'HM-90 Tourmaline Heated Mattress',
          description: 'Dual-effect far infrared and tourmaline warmth for blood circulation and energy boosting.',
          details: 'Integrates far-infrared heat with tourmaline stone materials to improve metabolism, relieve fatigue, and enhance sleep quality. Popular in home wellness and therapeutic settings.',
          image: '/images/products/hm90.jpg',
        },
        {
          id: 0.6,
          name: 'LED and Soft Laser Therapy Devices',
          description: 'Developed in collaboration with Dr. Ma Ning’s team, integrating cutting-edge light technologies.',
          details: 'Utilizes selective light wavelengths and low-energy lasers to promote tissue repair, reduce inflammation, and activate cellular rejuvenation. Designed for rehabilitation centers and future-oriented home use.',
          image: '/images/products/softlaser.jpg',
        }
      ]
    },
    {
      category: 'Rehabilitation Devices',
      products: [
        {
          id: 1,
          name: 'N4 Multifunction Spinal Therapy Device',
          description: 'Combines thermal therapy, electrical stimulation, and spinal traction for total spine care.',
          details: 'Equipped with five thermal massage heads and intelligent lift system, this device provides deep stimulation for the cervical, thoracic, and lumbar spine. It allows three people to be treated simultaneously, making it ideal for elder care and rehabilitation centers.',
          image: '/images/products/n4.jpg',
        },
        {
          id: 2,
          name: 'HM-90 Tourmaline Heated Mat',
          description: 'Releases far-infrared heat to promote blood circulation and relieve fatigue.',
          details: 'The embedded tourmaline stone layer emits therapeutic warmth that penetrates deep into muscle tissues, helping to ease tension and improve sleep quality. Widely used in home and wellness center settings.',
          image: '/images/products/hm90.jpg',
        }
      ]
    },
    {
      category: 'Daily Wellness Supplements',
      products: [
        {
          id: 10,
          name: 'Vision Essens',
          description: 'Supports eye health and relieves fatigue with antioxidant protection.',
          details: 'Vision Essens is designed to protect your eyesight and reduce eye strain. It’s rich in antioxidants, helping to relieve fatigue from daily screen exposure.',
          image: '/images/products/vision_small.jpg',
        },
        {
          id: 11,
          name: 'Joint Essens PRO',
          description: 'Joint support with advanced ingredients to ease stiffness and enhance mobility.',
          details: 'This formula supports bone and joint health. Its unique blend promotes flexibility and soothes joint discomfort—perfect for active lifestyles or aging adults.',
          image: '/images/products/joint_small.jpg',
        },
        {
          id: 12,
          name: 'Cardiovascular Essens',
          description: 'Maintains cardiovascular function and circulation.',
          details: 'With botanical extracts, Cardiovascular Essens supports healthy heart function and blood flow. Designed for people managing heart health or maintaining active well-being.',
          image: '/images/products/heart_small.jpg',
        },
        {
          id: 13,
          name: 'Vegetarian Omega Essens',
          description: 'Plant-based omega solution for heart and brain support.',
          details: 'Contains high-purity Perilla oil with over 60% ALA, helping to maintain blood pressure, cholesterol, and brain vitality—ideal for vegetarian users.',
          image: '/images/products/omega_small.jpg',
        },
        {
          id: 14,
          name: 'Lingzhi Plus',
          description: 'Traditional herbal support for vitality and immunity.',
          details: 'This cracked spores Lingzhi extract supports immunity, reduces fatigue, and promotes wellness through natural anti-inflammatory properties.',
          image: '/images/products/lingzhi_small.jpg',
        }
      ]
    },
    {
      category: 'In-Store Therapy Services',
      products: [
        {
          id: 6,
          name: 'Red & Blue Light Therapy Device',
          description: 'Dual-spectrum light promotes skin renewal and reduces inflammation.',
          details: 'Red light stimulates collagen and circulation, while blue light targets acne-causing bacteria. Safe and non-invasive, ideal for skin repair and rejuvenation.',
          image: '/images/products/redblue.jpg',
        },
        {
          id: 7,
          name: 'Mid-Frequency Pulse Therapy Device',
          description: 'Relieves chronic pain and stimulates muscle recovery through targeted electrical pulses.',
          details: 'Adjustable frequency modes cater to specific muscle zones, improving blood flow and alleviating soreness in the neck, back, and limbs.',
          image: '/images/products/midfreq.jpg',
        },
        {
          id: 8,
          name: 'Five-Element Moxibustion Device',
          description: 'Modernized moxibustion with far-infrared warmth, rooted in traditional Chinese medicine.',
          details: 'Provides smokeless, safe thermal therapy by simulating the energy flow of five organ meridians. Great for balancing body constitution and relieving cold-damp conditions.',
          image: '/images/products/moxa.jpg',
        }
      ]
    }
  ]
};

export default productsContent;
