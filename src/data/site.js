import {
  BadgeDollarSign,
  BatteryCharging,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Globe2,
  Handshake,
  HeartHandshake,
  Home,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sun,
  Sprout,
  Users,
  Zap,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Marigot Project', href: '/marigot-project' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partner' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

export const metrics = [
  { value: '100', label: 'homes in Phase 1', detail: 'A focused launch designed for visible, measurable household impact.' },
  { value: '24/7', label: 'clean power vision', detail: 'Solar and storage planning for dependable community energy.' },
  { value: '1st', label: 'Marigot launch zone', detail: 'A replicable model beginning in Southeast Haiti.' },
  { value: '3', label: 'partner tracks', detail: 'Capital, institutional, and technical collaboration paths.' },
];

export const impactStats = [
  { icon: Home, value: '100', label: 'Homes', text: 'Phase 1 begins with household-level solar access in Marigot.' },
  { icon: Users, value: '500+', label: 'Lives Impacted', text: 'Estimated family members reached through the first 100 homes.' },
  { icon: Zap, value: '30kW', label: 'Solar Power', text: 'Initial clean-energy capacity target for reliable daily use.' },
  { icon: Globe2, value: 'Phase 1', label: 'Launch', text: 'A disciplined proof point built for partner confidence and scale.' },
];

export const marigotStats = [
  { icon: Home, label: 'Homes', value: '100', detail: 'Initial household connections in Phase 1.' },
  { icon: Sun, label: 'Technology', value: 'Solar + storage', detail: 'Resilient clean-energy systems sized for community needs.' },
  { icon: Users, label: 'Community', value: 'Local-first', detail: 'Training, maintenance, and ownership pathways built in.' },
];

export const impactPillars = [
  {
    icon: Lightbulb,
    title: 'Reliable Household Power',
    text: 'Families gain dependable electricity for lighting, phones, refrigeration, and daily productivity.',
  },
  {
    icon: Sprout,
    title: 'Economic Mobility',
    text: 'Power access supports microenterprise, study hours, safer evenings, and local service growth.',
  },
  {
    icon: Leaf,
    title: 'Clean-Energy Transition',
    text: 'Solar generation reduces dependence on costly fuel and strengthens local energy resilience.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Delivery',
    text: 'Projects are designed around measurable milestones, partner reporting, and accountable deployment.',
  },
];

export const partnerTracks = [
  {
    icon: CircleDollarSign,
    title: 'Impact Capital',
    text: 'Support deployment funding, blended finance, and milestone-based project investment.',
  },
  {
    icon: Building2,
    title: 'Institutional Partners',
    text: 'Collaborate with NGOs, foundations, universities, and public agencies aligned with energy access.',
  },
  {
    icon: BatteryCharging,
    title: 'Technology Providers',
    text: 'Contribute solar, battery, controls, metering, and monitoring expertise for resilient infrastructure.',
  },
];

export const roadmap = [
  'Community assessment and household mapping',
  'System design, partner due diligence, and procurement',
  'Phase 1 installation for 100 Marigot homes',
  'Training, monitoring, maintenance, and replication planning',
];

export const contactDetails = [
  { icon: Mail, label: 'Email', value: 'info@msihaitienergy.org' },
  { icon: Phone, label: 'Phone', value: '+1 (000) 000-0000' },
  { icon: MapPin, label: 'Focus Area', value: 'Marigot, Southeast Haiti' },
];

export const dueDiligence = [
  { icon: ClipboardCheck, title: 'Phase-based delivery', text: 'Clear scopes, installation milestones, and reporting checkpoints.' },
  { icon: BadgeDollarSign, title: 'Investor clarity', text: 'Funding needs, use of proceeds, and project outputs presented with discipline.' },
  { icon: Globe2, title: 'Replicable model', text: 'Built to scale from Marigot into additional Haitian communities.' },
  { icon: Handshake, title: 'Partner-ready', text: 'Structured for NGO, donor, technical, and community collaboration.' },
];

export const checkItems = [
  { icon: CheckCircle2, text: 'Professional stakeholder communications' },
  { icon: CheckCircle2, text: 'Community-centered deployment model' },
  { icon: CheckCircle2, text: 'Clean-energy infrastructure focus' },
  { icon: CheckCircle2, text: 'Transparent reporting orientation' },
];

export const socialMission = {
  icon: HeartHandshake,
  title: 'Energy access with dignity',
  text: 'MSI Haiti Energy is built around the belief that reliable power is a platform for education, health, commerce, safety, and long-term resilience.',
};

export const footerHighlights = [
  'Marigot Phase 1',
  'Clean-energy access',
  'Investor-grade reporting',
  'Community-centered delivery',
];
