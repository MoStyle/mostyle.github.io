export default defineAppConfig({
  alpine: {
    title: 'MoStyle',
    description: 'ANR-20-CE33-0002: Motion Stylization for 2D Animation',
    // image: '/social-card-preview.webp',
    // // image can also be an object:
    // image: {
    //   src: '/social-card-preview.webp',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300
    // }
  },
  header: {
    position: 'right', // possible value are : | 'left' | 'center' | 'right'
    logo: {
      path: '/logo.svg', // path of the logo
      pathDark: '/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
      alt: 'MoStyle' // alt of the logo
    }
  },
  footer: {
    credits: {
      enabled: false, // possible value are : true | false
      text: 'MoStyle',
      repository: 'https://github.com/mostyle' // our github repository
    },
    navigation: false, // possible value are : true | false
    alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
    message: 'ANR-20-CE33-0002: MoStyle' // string that will be displayed in the footer (leave empty or delete to disable)
  },
  socials: {
    github: {
      icon: 'uil:github',
      label: 'GitHub',
      href: 'https://github.com/mostyle'
    },
    vimeo: {
      icon: 'uil:video',
      label: 'Vimeo',
      href: 'https://vimeo.com/showcase/10229786'
    }
  },
  form: {
    successMessage: 'Message sent. Thank you!'
  }
})
