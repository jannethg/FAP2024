import IconDashboard from "@/components/icons/IconDashboard.vue"
import IconMyPrograms from "@/components/icons/IconMyPrograms.vue"
import IconReports from "@/components/icons/IconReports.vue"
import IconSearchPrograms from "@/components/icons/IconSearchPrograms.vue"
import IconCalendar from "@/components/icons/IconCalendar.vue"
import IconTestimonial from "@/components/icons/IconTestimonial.vue"
import IconInbox from "@/components/icons/IconInbox.vue"
import IconMessages from "@/components/icons/IconMessages.vue"
import IconAnnouncment from "@/components/icons/IconAnnouncment.vue"

export const navigatios = [
  {
    name: 'Dashboard',
    href:'/',
    icon: IconDashboard,
    hasChevronDown: true,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'My Announcements',
    href:'/announcements',
    icon: IconAnnouncment,
    hasChevronDown: true,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'Search Programs',
    href:'/programs',
    icon: IconSearchPrograms,
    hasChevronDown: true,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'My Programs',
    href:'/programs/my-programs',
    href:'/my-programs',
    icon: IconMyPrograms,
    hasChevronDown: true,
    role: [  'Provider']
  },
  {
    name: 'My Programs',
    href:'/verification-programs',
    icon: IconMyPrograms,
    hasChevronDown: true,
     role: ['Administrator', ]
  },
  {
    name: 'Request History',
    href:'/request-history',
    icon: IconMyPrograms,
    hasChevronDown: true,
     role: ['Administrator', ]
  },
  {
    name: 'Reports',
    href:'/reports',
    icon: IconReports,
    hasChevronDown: true,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'Testimonials',
    href:'/testimonials',
    icon: IconTestimonial,
    hasChevronDown: true,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'Messages',
    href:'/messages',
    icon: IconMessages,
    hasChevronDown: false,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'Inbox',
    href:'/inbox',
    icon: IconInbox,
    hasChevronDown: false,
    role: ['Administrator', 'Provider']
  }, 
  {
    name: 'Calendar',
    href:'/calendar',
    icon: IconCalendar,
    hasChevronDown: false,
    role: ['Administrator', 'Provider']
  },
  {
    name: 'Settings',
    href:'/settings',
    icon: IconCalendar,
    hasChevronDown: false,
     role: ['Administrator',]
  },
  {
    name: 'Program Management',
    href:'/program-management',
    icon: IconCalendar,
    hasChevronDown: false,
     role: ['Administrator',]
  },
]