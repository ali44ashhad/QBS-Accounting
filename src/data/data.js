import images from '../assets/images.js'
import {
  LineChart,
  Users,
  CreditCard,
  Headphones,
  FileText,
  Clock,
  Calculator, 
  DollarSign, 
  TrendingUp, 
  ListChecks, 
  Award,
   Tag, Search
} from 'lucide-react';

export const cardData = [
  {
    icon: LineChart,
    title: 'See profit at a glance',
    description: 'Get a clear view of what you make and spend over time.',
  },
  {
    icon: Users,
    title: 'Pay your team',
    description: 'Get payroll done right, and payroll taxes done for you.',
  },
  {
    icon: CreditCard,
    title: 'Get paid',
    description: 'Take payment online or on the go, by card, eCheck, ACH, and more.',
  },
  {
    icon: Headphones,
    title: 'Get books done for you',
    description: 'Have your books cleaned for tax time and managed for you all year.',
  },
  {
    icon: FileText,
    title: 'Track expenses',
    description: 'Know where your money is going and never miss a tax deduction.',
  },
  {
    icon: Clock,
    title: 'Track and manage time',
    description: "Track, adjust, and approve your team's hours on any device.",
  },
];


// cards //
export const features = [
  {
    icon: Clock,
    title: '24X7 Support',
    description: 'We focus our efforts on going forward in order to achieve the best results. We are available to our customers at all times.',
  },
  {
    icon: Calculator,
    title: 'Quality Service',
    description: 'We maintain a polite and helpful relationship with our loyal customers. Our skilled staff is built to meet your needs above and beyond your quality service expectations.',
  },
  {
    icon: DollarSign, // Or UserPlus, if you want a person icon. DollarSign works for pricing.
    title: 'Reasonable Pricing',
    description: 'There are no hidden costs or extra charges. You will pay for what you consume.',
  },
  {
    icon: TrendingUp,
    title: 'Accelerate the Growth',
    description: 'We promise you a business with no competitors. You will always be there in the scene. We accelerate the growth of your company beyond your wildest dreams.',
  },
  {
    icon: ListChecks,
    title: 'Scalability',
    description: 'Having a firm filled with different bookkeeping experts means that you\'ll never run out of people who can work on your business. We can scale up as you grow and keep your books in order.',
  },
  {
    icon: Award, // Or Search, for "Reputable" (representing finding solutions)
    title: 'Reputable',
    description: 'We\'ve helped many businesses with their bookkeeping for many years. We are their choice for handling their finances because of our experience and reliability.',
  },
];

// seventth section home page data //
export const productData = [
  {
    title: 'QuickBooks Pro Plus 2022 – Yearly Subscription',
    users: '1 User',
    price: '$399.99',
    oldPrice: '$599.99',
    sale: false,
    image: images.QBSpro,
  },
  {
    title: 'QuickBooks Pro 2021 – Non Subscription 1 User',
    users: '1 User',
    price: '$399.99',
    oldPrice: '$599.99',
    sale: true,
    image: images.QBS2021,
  },
  {
    title: 'QuickBooks Premier Plus 2021 – Yearly Subscription',
    users: '1 User',
    price: '$449.99',
    oldPrice: '$799.99',
    sale: false,
    image: images.QBSpremier,
  },
  {
    title: 'QuickBooks Mac 2021 – Non Subscription',
    users: '1 User',
    price: '$499.99',
    oldPrice: '$699.99',
    sale: true,
    image: images.QBSmac,
  },
];


// faq data //
export const faqData = [
  {
    id: 1,
    question: "Which QuickBooks Desktop Version is right for me?",
    answer: "Choosing the right QuickBooks Desktop version depends on your specific business needs, number of users, and required features. We offer personalized consultations to analyze your requirements and recommend the optimal version (Pro, Premier, or Enterprise) to ensure you have the best tools for success."
  },
  {
    id: 2,
    question: "How much does QuickBooks cleanup or reconciliation cost?",
    answer: "The cost for cleanup or reconciliation services is based on the complexity and volume of the transactions. We provide a complimentary initial assessment to give you a detailed, upfront quote tailored to your business's current state and required level of service."
  },
  {
    id: 3,
    question: "How much does QuickBooks setup cost?",
    answer: "The setup cost varies depending on the version (Online/Desktop) and the complexity of migrating your existing financial data. Our setup packages are designed to be comprehensive and include full data import, customization, and training."
  },
  {
    id: 4,
    question: "How do I hire a QuickBooks expert?",
    answer: "You can hire one of our US-based QuickBooks Certified ProAdvisors directly through our consulting service. We match you with an expert who specializes in your industry and specific business needs."
  },
  {
    id: 5,
    question: "Which accounting software is the best for small and medium size businesses?",
    answer: "For most small and medium-sized businesses, QuickBooks is the industry standard due to its comprehensive features, scalability, and ease of integration. We specialize in tailoring QuickBooks to maximize its efficiency for your operation."
  },
  {
    id: 6,
    question: "QuickBooks Cloud hosting is the best decision for the business?",
    answer: "Cloud hosting offers significant advantages like 24/7 access, automatic backups, and enhanced security, making it an excellent choice for businesses needing flexibility and mobility. We can help you evaluate if cloud hosting is the right strategic move for your firm."
  },
  {
    id: 7,
    question: "When will QuickBooks 2024 be available?",
    answer: "We continuously monitor Intuit's official release schedule. The new version is typically available in the fall. We will notify our clients immediately upon official release and assist with seamless upgrades."
  },
];


// plans //
export const plans = [
  {
    name: 'Simple Start',
    originalPrice: '$30/mo',
    price: '$15 / mo',
    features: [
      'Track income & expenses',
      'Invoice & accept payments',
      'Maximize tax deductions',
      'Run general reports',
      'Capture & organize receipts',
      'Track miles',
      'Manage cash flow',
      'Track sales & sales tax',
      'Send estimates',
      'Manage 1099 contractors',
      'Connect 1 sales channel',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Essentials',
    originalPrice: '$55/mo',
    price: '$27.50 / mo',
    features: [
      'Track income & expenses',
      'Invoice & accept payments',
      'Maximize tax deductions',
      'Run enhanced reports',
      'Capture & organize receipts',
      'Track miles',
      'Manage cash flow',
      'Track sales & sales tax',
      'Send estimates',
      'Manage 1099 contractors',
      'Connect 3 sales channels',
      'Includes 3 users',
      'Manage & pay bills',
      'Enter time',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Plus',
    originalPrice: '$85/mo',
    price: '$42.50 / mo',
    features: [
      'Track income & expenses',
      'Invoice & accept payments',
      'Maximize tax deductions',
      'Run comprehensive reports',
      'Capture & organize receipts',
      'Track miles',
      'Manage cash flow',
      'Track sales & sales tax',
      'Send estimates',
      'Manage 1099 contractors',
      'Connect all sales channels',
      'Includes 5 users',
      'Manage & pay bills',
      'Enter time',
      'Track inventory',
      'Track project profitability',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
  {
    name: 'Advanced',
    originalPrice: '$200/mo',
    price: '$100 / mo',
    features: [
      'Track income & expenses',
      'Invoice & accept payments',
      'Maximize tax deductions',
      'Run most powerful reports',
      'Capture & organize receipts',
      'Track miles',
      'Manage cash flow',
      'Track sales & sales tax',
      'Send estimates',
      'Manage 1099 contractors',
      'Connect all sales channels',
      'Includes 25 users',
      'Manage & pay bills',
      'Enter time',
      'Track inventory',
      'Track project profitability',
      'Business analytics with Excel',
    ],
    buttonColor: 'bg-green-700 hover:bg-green-800',
  },
];

// refund policy data //
export const refundData = [
  {
    title: "General Refund Eligibility",
    content: [
      "Refund requests must be submitted within 30 days of the original purchase date.",
      "To be eligible for a refund, the service or product must meet the specific criteria outlined in the relevant section below.",
      "All refunds are subject to a review process and may take 5-10 business days to process once approved."
    ]
  },
  {
    title: "Service/Consultation Fee Refunds",
    content: [
      "**Prior to Service Commencement:** A full refund will be issued if the cancellation request is received before any consultation, work, or service delivery has begun.",
      "**Partial Completion:** If the service has commenced but is less than 50% complete, a partial refund, minus the costs incurred for completed work and administrative fees, may be provided.",
      "**Service Completion:** No refunds will be provided for services that have been fully rendered or completed, as determined by the agreed-upon scope of work."
    ]
  },
  {
    title: "Software & Digital Product Refunds (Reseller Products)",
    content: [
      "Refunds for third-party software (e.g., QuickBooks products) are strictly governed by the original software publisher's policy (Intuit). We will assist in facilitating the refund process based on their terms.",
      "For digital downloads or license keys that have been activated or downloaded, refunds are generally not permitted unless the product is proven to be defective and a resolution cannot be provided.",
      "Subscription service cancellations will result in the service remaining active until the end of the current billing period, with no prorated refunds issued for the remaining time."
    ]
  },
  {
    title: "Non-Refundable Items",
    content: [
      "Administrative or transaction processing fees.",
      "Custom development or integration costs specifically incurred for the client.",
      "Expired promotional or discounted purchases.",
      "Any services or products explicitly marked as 'Non-Refundable' at the time of purchase."
    ]
  },
  {
    title: "How to Submit a Refund Request",
    content: [
      "All refund requests must be initiated by contacting our support team via email or through the client portal.",
      "The request must include the original order number, date of purchase, the reason for the refund, and any supporting documentation.",
      "Failure to provide adequate information may delay the refund process."
    ]
  }
];


// terms //
export const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the services provided by **QBS Accouning** ('we', 'us', or 'our'), you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by these terms, please do not use our services or access our website."
    ]
  },
  {
    title: "2. Provision of Services",
    content: [
      "We provide accounting, bookkeeping, and software reseller services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.",
      "While we strive for accuracy, we do not warrant that the information provided on our website or through our services is entirely error-free, complete, or current."
    ]
  },
  {
    title: "3. User Responsibilities",
    content: [
      "You agree to provide accurate, current, and complete information as required for the provision of our services.",
      "You are responsible for maintaining the confidentiality of any account information, including usernames and passwords, and for all activities that occur under your account.",
      "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our infrastructure."
    ]
  },
  {
    title: "4. Payment and Invoicing",
    content: [
      "Fees for services and products are due as strictly outlined in the specific service agreement or invoice provided.",
      "**Late Payments:** We reserve the right to charge interest on overdue amounts or suspend services until payment is received in full.",
      "Prices for software products (e.g., QuickBooks) are subject to change based on the vendor's (Intuit) pricing policies."
    ]
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All content provided on this website, including text, graphics, logos, and software, is the property of QBS Accouning or its content suppliers and is protected by international copyright laws.",
      "You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission by us."
    ]
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "In no event shall QBS Accouning be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.",
      "Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim."
    ]
  },
  {
    title: "7. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law principles."
    ]
  },
  {
    title: "8. Changes to Terms",
    content: [
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website or services following any changes constitutes your acceptance of the new Terms."
    ]
  }
];

// privacy policy data //
export const policySections = [
  {
    title: "1. Information We Collect",
    content: [
      "**Personal Identification Information (PII):** We may collect personal information such as your name, email address, phone number, and mailing address when you register for services, subscribe to a newsletter, or contact us for support.",
      "**Financial and Accounting Data:** We collect financial information (e.g., transaction details, bank information, business revenue) strictly for the purpose of providing accounting and bookkeeping services. This data is handled with the highest level of confidentiality and security.",
      "**Non-Personal Information:** We automatically collect non-personal information about your visit, including IP address, browser type, device type, pages visited, and time spent on our site. This helps us improve our service delivery."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "**Service Delivery:** To provide and maintain the accounting, bookkeeping, and software reseller services you have requested.",
      "**Communication:** To respond to your inquiries, send administrative information, and provide updates regarding your services or account.",
      "**Improvement:** To personalize user experience, improve our website, and analyze service usage trends.",
      "**Compliance:** To comply with legal obligations and to protect against illegal activities or fraud."
    ]
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "**Third-Party Vendors:** We may share necessary PII with trusted third parties who assist us in operating our business (e.g., Intuit for QuickBooks licensing, cloud hosting providers). These parties are obligated to keep your information confidential.",
      "**Legal Requirements:** We will disclose your information where required to do so by law or subpoena, or if we reasonably believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.",
      "**Business Transfer:** If we are involved in a merger, acquisition, or asset sale, your information may be transferred as a business asset. We will notify you before your PII becomes subject to a different privacy policy."
    ]
  },
  {
    title: "4. Data Security",
    content: [
      "We implement a variety of security measures, including encryption and access controls, to maintain the safety of your personal and financial information.",
      "While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.",
      "You are responsible for keeping your password and account details confidential."
    ]
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, including for the purpose of satisfying any legal, accounting, or reporting requirements.",
      "When we no longer need to process your personal data, we will either delete or anonymize it."
    ]
  },
  {
    title: "6. Your Rights (Applicable Jurisdictions)",
    content: [
      "Depending on your location, you may have the right to access, update, or request the deletion of your personal data.",
      "You have the right to object to the processing of your personal data and, under certain circumstances, to request data portability.",
      "To exercise any of these rights, please contact us using the information provided below."
    ]
  }
];


export const qbsBusinessData = [
  {
    icon: Clock,
    title: "Round-the-Clock Assistance",
    description:
      "Our team is available 24/7 to help resolve your software queries, ensuring your business runs smoothly without interruption.",
  },
  {
    icon: Calculator,
    title: "Professional Expertise",
    description:
      "Get reliable guidance from seasoned specialists who deliver accurate solutions with a strong commitment to professionalism.",
  },
  {
    icon: Headphones,
    title: "Affordable Solutions",
    description:
      "We provide transparent pricing with no surprise fees. Pay only for the services you need, at rates that fit your budget.",
  },
  {
    icon: Tag,
    title: "Boost Your Productivity",
    description:
      "Enhance operational efficiency with strategic support designed to streamline your workflow and maximize output.",
  },
  {
    icon: ListChecks,
    title: "Flexible & Scalable",
    description:
      "Whether your business is growing or restructuring, our adaptable services scale to match your operational demands.",
  },
  {
    icon: Search,
    title: "Trusted by Businesses",
    description:
      "Companies rely on our long-standing expertise and consistent support, earning us a reputation for reliability and trust.",
  },
];




export const qbsBusinessSuccessData = [
  {
    icon: Clock,
    title: "Instant Response Support",
    description:
      "Our dedicated support desk ensures that your queries are addressed immediately so your operations never slow down.",
  },
  {
    icon: Calculator,
    title: "Expert-Driven Solutions",
    description:
      "Work with trained professionals who deliver precise, detail-oriented solutions tailored to your financial processes.",
  },
  {
    icon: Headphones,
    title: "Cost-Effective Assistance",
    description:
      "We provide high-value services at sensible pricing, helping you manage your finances efficiently without overspending.",
  },
 
];
