// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'augustchu', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        //projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Guessing Game (18240 Lab)',
          description:
            'System Verilog, Vivado.\n \
             Developed synthesizable RTL in SystemVerilog to implement an 8-round guessing game that interfaced with a Boolean Board to let users pay for a game,\
             start a game, set a master pattern, guess the pattern, and gave live grading feedback.',
        },
        {
          title: 'RFID Scanner (18220 Lab)',
          description:
            'Analog Circuit. \n\
             Designed, built, and tuned an RFID scanner circuit that successfully read from a tag.',
        },
        {
          title:'IR Music Transmitter (18220 Lab)',
          description:
            'Analog Circuit. \n\
            Designed and built a transmittor and receiver circuit that encoded audio output in IR \
            and then decoded, filtered, and amplified the signal for play back.'
        },
        {
          title:'Wearable Stroke Detector (High School Project)',
          description:
            'Analyzed and displayed IMU and heart rate data from a heart rate sensor and an Arduino Nano RP2040 on a custom website'
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'august-chu',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SystemVerilog',
    'C',
    'Assembly',
    'SQL',
    'Azure',
    'MySQL',
    'Vivado',
    'MATLAB',
    'CircuitLab',
    'HTML',
    'CSS',
    'Soldering',
    'Oscilloscope',
    'Digital Multimeter',
    'Signal Generator',
    'Onshape',
  ],
  experiences: [
    {
      company: 'CoreDio',
      position: 'Engineering Intern',
      from: 'May 2026',
      to: 'Present',
      companyLink: 'https://www.coredio-ai.com/',
    },
    {
      company: 'CMU Electrical and Computer Engineering Department',
      position: 'Teaching Assitant (18100)',
      from: 'January 2026',
      to: 'Present',
    },
    {
      company: 'Wood Neuro Research Group',
      position: 'Undergraduate Researcher',
      from:'January 2025',
      to:'Present',
    },
    {
      company:'CoreDio',
      position: 'Intern',
      from:'May 2025',
      to: 'September 2025',
      companyLInk: 'https://www.coredio-ai.com/'
    },
  ],
  educations: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'B.S. in Electrical and Computer Engineering, and Biomedical Engineering ',
      from: '2024',
      to: '2028',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
